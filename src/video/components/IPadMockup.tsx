import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

type Props = {
  width: number;
  /** Pixel size of the inner screen — exposed so children / cursor know their bounds */
  children: React.ReactNode;
  /** Frame relative to scene start at which the iPad scales in */
  enterFrame?: number;
  /** Optional drift on Y axis to keep the iPad alive */
  drift?: boolean;
};

/**
 * Photo-realistic iPad Pro 11" (landscape) frame.
 *
 * Built to match the bezel proportions used elsewhere on the marketing site
 * (see src/components/ipad/IPadBezel.tsx) but rendered without browser-only
 * APIs (ResizeObserver, hover state) so it Just Works in Remotion.
 *
 * The screen aspect is 1.456:1 — same as IPadBezel — and the chassis colour
 * is Apple's space-gray #1c1c1e.
 */
export const IPadMockup: React.FC<Props> = ({ width, children, enterFrame = 0, drift = true }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const t = frame - enterFrame;

  // Spring the iPad in from slightly larger + below
  const scale = spring({
    frame: t,
    fps,
    from: 0.92,
    to: 1,
    config: { damping: 18, stiffness: 80 },
    durationInFrames: 30,
  });
  const opacity = interpolate(t, [0, 14], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const translateY = interpolate(t, [0, 30], [40, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Subtle floating drift
  const floatY = drift ? Math.sin((frame - enterFrame) * 0.04) * 4 : 0;

  // iPad Pro landscape: width × (width / 1.43)
  const aspect = 1.43;
  const height = width / aspect;

  // Bezel inner padding (2% of the chassis width) — matches the marketing site
  const bezelPad = width * 0.02;
  const screenW = width - bezelPad * 2;
  const screenH = height - bezelPad * 2;

  return (
    <div
      style={{
        width,
        height,
        opacity,
        transform: `translateY(${translateY + floatY}px) scale(${scale})`,
        transformOrigin: 'center center',
        position: 'relative',
      }}
    >
      {/* Soft ambient shadow under iPad */}
      <div
        style={{
          position: 'absolute',
          left: '8%',
          right: '8%',
          bottom: -40,
          height: 80,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.45) 0%, transparent 70%)',
          filter: 'blur(20px)',
          pointerEvents: 'none',
        }}
      />

      {/* Chassis */}
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #1c1c1e 0%, #2a2a2c 50%, #1c1c1e 100%)',
          borderRadius: 38,
          padding: bezelPad,
          boxShadow: [
            '0 0 0 1.5px #2c2c2e',
            '0 30px 80px rgba(0, 85, 255, 0.18)',
            '0 80px 160px rgba(0, 0, 0, 0.55)',
            'inset 0 0 0 1px rgba(255,255,255,0.04)',
          ].join(', '),
          position: 'relative',
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
            boxShadow: 'inset 0 0 2px rgba(255,255,255,0.15)',
          }}
        />

        {/* Screen */}
        <div
          style={{
            width: screenW,
            height: screenH,
            background: '#EEF4FF',
            borderRadius: 26,
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {/* Subtle reflection sweep — pure CSS gradient */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(115deg, rgba(255,255,255,0.0) 30%, rgba(255,255,255,0.07) 50%, rgba(255,255,255,0) 70%)',
              pointerEvents: 'none',
              zIndex: 5,
            }}
          />
          {children}
        </div>
      </div>
    </div>
  );
};
