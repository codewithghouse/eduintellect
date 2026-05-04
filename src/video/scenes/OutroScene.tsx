import React from 'react';
import { AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { theme } from '../data/theme';

const ROLES: { name: string; color: string; symbol: string }[] = [
  { name: 'Owners', color: '#0055FF', symbol: '🏛' },
  { name: 'Principals', color: '#0055FF', symbol: '🎓' },
  { name: 'Teachers', color: '#0055FF', symbol: '🍎' },
  { name: 'Parents', color: '#0044CC', symbol: '💙' },
];

export const OutroScene: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const bgFade = interpolate(frame, [0, 22], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  const logoScale = spring({ frame, fps, from: 0.6, to: 1, config: { damping: 14, stiffness: 80 }, durationInFrames: 30 });
  const logoOpacity = interpolate(frame, [0, 22], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  const rolesStart = 30;

  const ctaOpacity = interpolate(frame, [90, 120], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const ctaScale = spring({ frame: frame - 90, fps, from: 0.85, to: 1, config: { damping: 12, stiffness: 90 }, durationInFrames: 30 });

  const fadeOut = interpolate(frame, [durationInFrames - 40, durationInFrames], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{ background: '#000', opacity: fadeOut }}>
      <AbsoluteFill
        style={{
          background:
            'radial-gradient(ellipse at 50% 40%, rgba(0,113,227,0.22) 0%, rgba(0,25,80,0.10) 40%, #000 75%)',
          opacity: bgFade,
        }}
      />

      <AbsoluteFill style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        {/* Real logo */}
        <div
          style={{
            position: 'relative',
            width: 138,
            height: 138,
            transform: `scale(${logoScale})`,
            opacity: logoOpacity,
            marginBottom: 36,
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: -30,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0,113,227,0.5) 0%, transparent 65%)',
              filter: 'blur(28px)',
              pointerEvents: 'none',
            }}
          />
          <Img
            src={staticFile('edullent-icon.png')}
            style={{
              width: 138,
              height: 138,
              borderRadius: 32,
              boxShadow: '0 30px 80px rgba(0,113,227,0.45), inset 0 0 0 1px rgba(255,255,255,0.10)',
            }}
          />
        </div>

        {/* Brand name */}
        <div
          style={{
            fontFamily: theme.fontStack,
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: '-0.038em',
            color: '#fff',
            opacity: logoOpacity,
            transform: `scale(${logoScale})`,
            marginBottom: 18,
          }}
        >
          Edu<span style={{ color: '#0a84ff' }}>llent</span>
        </div>

        <div
          style={{
            fontFamily: theme.fontStack,
            fontSize: 26,
            fontWeight: 400,
            color: 'rgba(255,255,255,0.72)',
            letterSpacing: '-0.012em',
            opacity: interpolate(frame, [12, 36], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            }),
            marginBottom: 60,
          }}
        >
          Built for everyone who runs a school.
        </div>

        {/* Role tiles */}
        <div style={{ display: 'flex', gap: 30 }}>
          {ROLES.map((r, i) => {
            const local = frame - (rolesStart + i * 8);
            const opacity = interpolate(local, [0, 18], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });
            const sc = spring({
              frame: local,
              fps,
              from: 0.6,
              to: 1,
              config: { damping: 14, stiffness: 90 },
              durationInFrames: 26,
            });
            return (
              <div
                key={r.name}
                style={{
                  width: 140,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 14,
                  opacity,
                  transform: `scale(${sc})`,
                }}
              >
                <div
                  style={{
                    width: 96,
                    height: 96,
                    borderRadius: 24,
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.10)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 44,
                    boxShadow: `0 0 40px ${r.color}30, inset 0 0 0 1px rgba(255,255,255,0.04)`,
                  }}
                >
                  {r.symbol}
                </div>
                <span
                  style={{
                    fontFamily: theme.fontStack,
                    fontSize: 17,
                    fontWeight: 600,
                    color: '#fff',
                    letterSpacing: '-0.012em',
                  }}
                >
                  {r.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: 70,
            opacity: ctaOpacity,
            transform: `scale(${ctaScale})`,
          }}
        >
          <div
            style={{
              padding: '20px 46px',
              borderRadius: 100,
              background: 'linear-gradient(135deg, #0071e3 0%, #005bb5 100%)',
              color: '#fff',
              fontFamily: theme.fontStack,
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: '-0.012em',
              boxShadow: '0 22px 56px rgba(0,113,227,0.5)',
            }}
          >
            Get started — free
          </div>
        </div>

        <div
          style={{
            marginTop: 24,
            fontFamily: theme.fontStack,
            fontSize: 18,
            color: 'rgba(255,255,255,0.55)',
            letterSpacing: '0.05em',
            opacity: ctaOpacity,
          }}
        >
          edullent.com
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
