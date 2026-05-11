/**
 * Apple-style window frame — replaces the older thick black iPad chassis.
 *
 * Visual: light gray chrome bar on top with red/yellow/green traffic-light
 * dots (the same shape you see on macOS browser screenshots in an Apple
 * Keynote) and a clean white screen below. NO thick dark bezel — that
 * read as ugly and dated, and clipped 8%+ of the dashboard pixels every
 * mockup was trying to show.
 *
 * Why we kept the file name `IPadBezel`:
 *   30+ mockup files import this component. Renaming the file would
 *   require touching every one of them. The component's export stays
 *   `IPadBezel` for backward compatibility; the visual is now a Mac
 *   window. A follow-up cleanup PR can rename the file across the tree.
 *
 * What survives from the old shell:
 *   - Fixed design canvas (DESIGN_W × DESIGN_H) scaled with CSS transform
 *     so every existing mockup keeps its pixel-tuned proportions.
 *   - 3D tilt that follows the cursor on hover (real-pointer devices only).
 *   - Apple-blue glow shadow on hover.
 *   - `aspectRatio` prop override.
 *
 * What changed:
 *   - Chassis #1c1c1e → top chrome bar #f6f6f8 → #ebebef (Apple light).
 *   - 2% all-around bezel padding → ~6% top chrome only (more dashboard pixels).
 *   - Borderless body — no thick rounded chassis around the screen.
 *   - Camera dot replaced with traffic-light dots (red/yellow/green).
 */

import { useRef, useState, useLayoutEffect, useEffect } from 'react';
import type { ReactNode } from 'react';

/**
 * `true` when the primary input is a real pointer (mouse/trackpad).
 * Touch-only devices return `false` — we skip the 3D tilt entirely on
 * iOS/Android so the hover transform doesn't stick after a tap.
 */
const useHasHover = () => {
  const [hasHover, setHasHover] = useState(true);
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    setHasHover(mq.matches);
    const handler = (e: MediaQueryListEvent) => setHasHover(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return hasHover;
};

interface Props {
  children: ReactNode;
  /** override aspect ratio if needed (default: 1.43:1 — same as before so
   *  all 30+ inner mockups continue to render proportionally). */
  aspectRatio?: string;
  /** Optionally hide chrome bar — for inline thumbnails where the dots
   *  would be too small to read. Default: shown. */
  showChrome?: boolean;
}

// Design canvas the inner UI is authored against. Every existing iPad
// mockup hard-codes px sizes against this 672 × 461 box, so we KEEP it
// to avoid touching 30+ files. The scale factor below stretches/shrinks
// the rendered output to fit whatever viewport the frame sits in.
const DESIGN_W = 672;
const SCREEN_ASPECT = 1.456;
const DESIGN_H = DESIGN_W / SCREEN_ASPECT;

// Chrome bar height as a percentage of total frame height. Keeps the
// traffic-light row proportional whether the frame is 400 px or 1400 px
// wide. ~6.2% gives a clean Apple-Mac-Safari feel without eating the
// screen area like a thick iPad bezel would.
const CHROME_PCT = 0.062;

const IPadBezel = ({ children, aspectRatio = '1.43 / 1', showChrome = true }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const hasHover = useHasHover();

  // Re-scale the design canvas whenever the screen container resizes —
  // keeps inner content perfectly fit at any viewport width.
  useLayoutEffect(() => {
    const el = screenRef.current;
    if (!el) return;
    const update = () => {
      const w = el.clientWidth;
      if (w > 0) setScale(w / DESIGN_W);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Subtle 3D tilt — survives unchanged from the iPad version, only the
  // outer chassis changes. Apple uses this on hardware product shots.
  const handle3DEnter = () => {
    setIsHovered(true);
    const el = frameRef.current;
    if (!el) return;
    el.style.transition =
      'transform 0.10s cubic-bezier(0.2,0.8,0.2,1), box-shadow 0.45s cubic-bezier(0.16,1,0.3,1)';
    el.style.transformStyle = 'preserve-3d';
    el.style.backfaceVisibility = 'hidden';
    el.style.willChange = 'transform';
  };
  const handle3DMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotX = (((y / rect.height) - 0.5) * -6).toFixed(2);
    const rotY = (((x / rect.width) - 0.5) * 8).toFixed(2);
    el.style.transform = `perspective(2400px) rotateX(${rotX}deg) rotateY(${rotY}deg) translate3d(0, -4px, 0)`;
  };
  const handle3DLeave = () => {
    setIsHovered(false);
    const el = frameRef.current;
    if (!el) return;
    el.style.transition =
      'transform 0.6s cubic-bezier(0.16,1,0.3,1), box-shadow 0.45s cubic-bezier(0.16,1,0.3,1)';
    el.style.transform = 'none';
    window.setTimeout(() => {
      if (!el || el.matches(':hover')) return;
      el.style.transformStyle = 'flat';
      el.style.willChange = 'auto';
    }, 650);
  };

  // ── Render: Apple Mac-style window ────────────────────────────────────
  return (
    <div
      ref={frameRef}
      onMouseEnter={hasHover ? handle3DEnter : undefined}
      onMouseMove={hasHover ? handle3DMove : undefined}
      onMouseLeave={hasHover ? handle3DLeave : undefined}
      style={{
        width: '100%',
        aspectRatio,
        background: '#ffffff',
        // Clamp keeps soft Apple-window corners regardless of viewport.
        borderRadius: 'clamp(10px, 1.6%, 16px)',
        overflow: 'hidden',
        // Layered Apple-grade ambient shadow + hover blue glow.
        boxShadow: isHovered
          ? '0 0 0 0.5px rgba(0,85,255,0.18), 0 24px 50px rgba(0,85,255,0.18), 0 60px 120px rgba(0,85,255,0.12)'
          : '0 0 0 0.5px rgba(15,23,42,0.07), 0 18px 44px rgba(15,23,42,0.12), 0 48px 100px rgba(15,23,42,0.08)',
        transition: 'box-shadow 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
        cursor: 'default',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif",
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      }}
    >
      {/* ── Mac browser chrome ── */}
      {showChrome && (
        <div
          style={{
            height: `${CHROME_PCT * 100}%`,
            minHeight: 22,
            flexShrink: 0,
            background: 'linear-gradient(180deg, #f6f6f8 0%, #ececef 100%)',
            borderBottom: '1px solid rgba(15,23,42,0.07)',
            display: 'flex',
            alignItems: 'center',
            padding: '0 1.6%',
            gap: '0.85%',
            position: 'relative',
            zIndex: 2,
          }}
        >
          {/* Red / Yellow / Green traffic lights — sized as % of chrome width
              so they scale with the frame. */}
          <div
            aria-hidden
            style={{
              width: 'clamp(7px, 1.1%, 12px)',
              aspectRatio: '1 / 1',
              borderRadius: '50%',
              background: '#ff5f57',
              boxShadow: 'inset 0 0 0 0.5px rgba(0,0,0,0.10)',
            }}
          />
          <div
            aria-hidden
            style={{
              width: 'clamp(7px, 1.1%, 12px)',
              aspectRatio: '1 / 1',
              borderRadius: '50%',
              background: '#febc2e',
              boxShadow: 'inset 0 0 0 0.5px rgba(0,0,0,0.10)',
            }}
          />
          <div
            aria-hidden
            style={{
              width: 'clamp(7px, 1.1%, 12px)',
              aspectRatio: '1 / 1',
              borderRadius: '50%',
              background: '#28c840',
              boxShadow: 'inset 0 0 0 0.5px rgba(0,0,0,0.10)',
            }}
          />
        </div>
      )}

      {/* ── Screen / content body — fixed design canvas scaled to fit ── */}
      <div
        ref={screenRef}
        style={{
          flex: 1,
          background: '#EEF4FF',
          position: 'relative',
          overflow: 'hidden',
          minHeight: 0,
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: DESIGN_W,
            height: DESIGN_H,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default IPadBezel;
