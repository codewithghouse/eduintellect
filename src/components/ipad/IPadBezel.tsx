/**
 * Shared iPad bezel wrapper (content-grown variant).
 *
 * Behaviour:
 *  - Modern flat iPad chassis (#1c1c1e + camera dot)
 *  - 3D tilt that follows the cursor (only on hover — keeps rest state crisp)
 *  - Bluish glow on hover
 *  - Edullent #EEF4FF inner screen background
 *  - **Bezel height grows to fit children.** Inner content is authored at a
 *    fixed design width (`DESIGN_W = 672`), with natural height. The bezel
 *    measures the rendered child height and sets the screen to
 *    `contentHeight × scale`, so nothing is ever clipped — at any viewport
 *    width, the entire mockup is visible end-to-end.
 *
 * Usage: <IPadBezel><YourScreenContent /></IPadBezel>
 */

import { useRef, useState, useLayoutEffect, useEffect } from 'react';
import type { ReactNode } from 'react';

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
  /** Kept for API compatibility but no longer used — bezel auto-fits content. */
  aspectRatio?: string;
}

// Design canvas the inner UI is authored against. All hardcoded px sizes
// inside individual iPad mockups are tuned to this canvas WIDTH.
// (Height is content-driven now.)
const DESIGN_W = 672;

const IPadBezel = ({ children }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const ipadRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  // Content's natural height in design pixels. Null until first measurement
  // so the screen doesn't briefly render at 0 height (which would collapse
  // the bezel and trigger a visible reflow on mount).
  const [contentH, setContentH] = useState<number | null>(null);
  const hasHover = useHasHover();

  useLayoutEffect(() => {
    const screen = screenRef.current;
    const inner = innerRef.current;
    if (!screen || !inner) return;

    const update = () => {
      const w = screen.clientWidth;
      if (w > 0) setScale(w / DESIGN_W);
      // scrollHeight rather than offsetHeight so children with overflow still
      // contribute their full intrinsic height to the measurement.
      const h = inner.scrollHeight;
      if (h > 0) setContentH(h);
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(screen);
    ro.observe(inner);
    return () => ro.disconnect();
  }, []);

  const screenHeightPx = contentH != null ? contentH * scale : undefined;

  const handle3DEnter = () => {
    setIsHovered(true);
    const el = ipadRef.current;
    if (!el) return;
    el.style.transition =
      'transform 0.10s cubic-bezier(0.2,0.8,0.2,1), box-shadow 0.45s cubic-bezier(0.16,1,0.3,1)';
    el.style.transformStyle = 'preserve-3d';
    el.style.backfaceVisibility = 'hidden';
    el.style.willChange = 'transform';
  };
  const handle3DMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ipadRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotX = (((y / rect.height) - 0.5) * -7).toFixed(2);
    const rotY = (((x / rect.width) - 0.5) * 9).toFixed(2);
    el.style.transform = `perspective(2400px) rotateX(${rotX}deg) rotateY(${rotY}deg) translate3d(0, -6px, 0)`;
  };
  const handle3DLeave = () => {
    setIsHovered(false);
    const el = ipadRef.current;
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

  return (
    <div
      ref={ipadRef}
      onMouseEnter={hasHover ? handle3DEnter : undefined}
      onMouseMove={hasHover ? handle3DMove : undefined}
      onMouseLeave={hasHover ? handle3DLeave : undefined}
      style={{
        width: '100%',
        background: '#1c1c1e',
        borderRadius: 'clamp(14px, 5.4%, 38px)',
        padding: '2%',
        boxShadow: isHovered
          ? '0 0 0 1.5px rgba(0,85,255,0.45), 0 0 40px rgba(0,85,255,0.28), 0 30px 80px rgba(0,85,255,0.30), 0 80px 160px rgba(0,85,255,0.22)'
          : '0 0 0 1.5px #2c2c2e, 0 30px 80px rgba(15,23,42,0.25), 0 80px 160px rgba(15,23,42,0.18)',
        transition: 'box-shadow 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
        cursor: 'default',
        position: 'relative',
        fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif",
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      }}
    >
      {/* Camera dot */}
      <div
        style={{
          position: 'absolute',
          top: '0.85%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '0.7%',
          aspectRatio: '1 / 1',
          borderRadius: '50%',
          background: '#3a3a3c',
        }}
      />
      {/* Screen */}
      <div
        ref={screenRef}
        style={{
          width: '100%',
          height: screenHeightPx,
          background: '#EEF4FF',
          borderRadius: 'clamp(10px, 3.7%, 26px)',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Inner content rendered at fixed design width with natural height,
            scaled to fill the screen. transformOrigin top-left so the scaled
            bounding box aligns with the screen rectangle. */}
        <div
          ref={innerRef}
          style={{
            width: DESIGN_W,
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
