/**
 * Shared iPad Pro (landscape) bezel wrapper.
 * Provides:
 *  - Modern flat iPad chassis (#1c1c1e + camera dot)
 *  - 3D tilt that follows the cursor (only on hover — keeps rest state crisp)
 *  - Bluish glow box-shadow on hover
 *  - Edullent #EEF4FF inner screen background
 *
 * Usage: <IPadBezel><YourScreenContent /></IPadBezel>
 */

import { useRef, useState, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  /** override aspect ratio if needed (default: iPad Pro 11" landscape ~1.43:1) */
  aspectRatio?: string;
}

const IPadBezel = ({ children, aspectRatio = '1.43 / 1' }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const ipadRef = useRef<HTMLDivElement>(null);

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
        borderRadius: 38,
        padding: 14,
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
          top: 6,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 5,
          height: 5,
          borderRadius: '50%',
          background: '#3a3a3c',
        }}
      />
      {/* Screen */}
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#EEF4FF',
          borderRadius: 26,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default IPadBezel;
