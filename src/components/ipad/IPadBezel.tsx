/**
 * Shared iPad Pro (landscape) bezel wrapper.
 * Provides:
 *  - Modern flat iPad chassis (#1c1c1e + camera dot)
 *  - 3D tilt that follows the cursor (only on hover — keeps rest state crisp)
 *  - Bluish glow box-shadow on hover
 *  - Edullent #EEF4FF inner screen background
 *  - Proportional scaling: inner content is rendered at a fixed design size
 *    and scaled with CSS transform so every iPad mockup stays correctly
 *    proportioned at any viewport width (mobile → desktop).
 *
 * Usage: <IPadBezel><YourScreenContent /></IPadBezel>
 */

import { useRef, useState, useLayoutEffect } from 'react';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  /** override aspect ratio if needed (default: iPad Pro 11" landscape ~1.43:1) */
  aspectRatio?: string;
}

// Design canvas the inner UI is authored against. Matches a typical
// desktop-rendered iPad bezel screen width (~700px bezel → 672px screen
// after 2% padding). All hardcoded px sizes inside individual iPad
// mockups are tuned to this canvas.
const DESIGN_W = 672;
// Aspect of the SCREEN (not the bezel). With 2% bezel padding on a
// 1.43:1 chassis, the inner screen ratio is ~1.456:1.
const SCREEN_ASPECT = 1.456;
const DESIGN_H = DESIGN_W / SCREEN_ASPECT;

const IPadBezel = ({ children, aspectRatio = '1.43 / 1' }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const ipadRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

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
      onMouseEnter={handle3DEnter}
      onMouseMove={handle3DMove}
      onMouseLeave={handle3DLeave}
      style={{
        width: '100%',
        aspectRatio,
        background: '#1c1c1e',
        // Use clamp so corners scale on small screens but cap at the
        // original 38px on desktop — keeps the iPad silhouette correct
        // at any width without giving small mockups soap-bar corners.
        borderRadius: 'clamp(14px, 5.4%, 38px)',
        // Percentage padding keeps inner-screen aspect ratio constant
        // across viewport widths (was fixed 14px before).
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
          height: '100%',
          background: '#EEF4FF',
          borderRadius: 'clamp(10px, 3.7%, 26px)',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Fixed design-size canvas — scaled to fit the screen so all
            inner mockups (which use hardcoded px sizes) stay perfectly
            proportioned at any width. */}
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
