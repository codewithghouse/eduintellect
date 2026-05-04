import React from 'react';
import { AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { theme } from '../data/theme';

const TAGLINE = 'The future of school management.';

/** Pseudo-random float seeded by index */
const seedRand = (i: number) => {
  const s = (i * 9301 + 49297) % 233280;
  return s / 233280;
};

const Particle: React.FC<{ index: number }> = ({ index }) => {
  const frame = useCurrentFrame();
  const r = seedRand(index);
  const x = r * 100;
  const y = ((index * 7919) % 100);
  const drift = Math.sin(frame * 0.018 + index) * 6;
  const opacity = interpolate(frame, [0, 30], [0, 0.25 + r * 0.45], {
    extrapolateRight: 'clamp',
  });
  return (
    <div
      style={{
        position: 'absolute',
        left: `${x}%`,
        top: `${(y + drift * 0.06) % 100}%`,
        width: 1.5 + r * 1.8,
        height: 1.5 + r * 1.8,
        borderRadius: '50%',
        background: `rgba(255,255,255,${0.4 + r * 0.6})`,
        opacity,
        boxShadow: '0 0 10px rgba(160,200,255,0.7)',
      }}
    />
  );
};

/**
 * Apple-keynote intro:
 *   00-30  black with star particles
 *   15-50  brand glow ramps in
 *   16-44  real Edullent logo scales in from 0.4 → 1
 *   50-90  "Edullent" wordmark types letter by letter
 *  100-150 tagline types in with blinking cursor
 *  220-280 "Built for everyone…" + role pills slide in
 *  420-450 hold + fade
 */
export const IntroScene: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Background black → brand-tinted radial
  const bgT = interpolate(frame, [0, 60], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const bgGradient = `radial-gradient(ellipse at 50% 45%, rgba(0,113,227,${0.22 * bgT}) 0%, rgba(0,25,80,${0.14 * bgT}) 38%, #000 75%)`;

  // Real logo
  const logoScale = spring({
    frame: frame - 16,
    fps,
    from: 0.4,
    to: 1,
    config: { damping: 14, stiffness: 50 },
    durationInFrames: 50,
  });
  const logoOpacity = interpolate(frame, [16, 40], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const logoGlow = interpolate(frame, [30, 80], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const logoY = interpolate(frame, [16, 50], [16, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Wordmark
  const wordmark = 'Edullent';
  const wordStart = 50;
  const wordPerChar = 4;

  // Tagline typed in
  const taglineStart = 100;
  const taglineCharsVisible = Math.max(0, Math.min(TAGLINE.length, Math.floor((frame - taglineStart) / 1.4)));
  const cursorBlink = Math.floor(frame / 14) % 2 === 0;
  const taglineDone = frame > taglineStart + TAGLINE.length * 1.4 + 16;

  // Final fade
  const fadeOut = interpolate(frame, [durationInFrames - 30, durationInFrames], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{ background: '#000', opacity: fadeOut }}>
      <AbsoluteFill style={{ background: bgGradient }} />

      {/* Particles */}
      <AbsoluteFill>
        {Array.from({ length: 70 }).map((_, i) => (
          <Particle key={i} index={i} />
        ))}
      </AbsoluteFill>

      {/* Center stack */}
      <AbsoluteFill style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        {/* Real logo */}
        <div
          style={{
            position: 'relative',
            width: 200,
            height: 200,
            transform: `scale(${logoScale}) translateY(${logoY}px)`,
            opacity: logoOpacity,
            marginBottom: 44,
          }}
        >
          {/* Glow halo */}
          <div
            style={{
              position: 'absolute',
              inset: -40,
              borderRadius: '50%',
              background: `radial-gradient(circle, rgba(0,113,227,${0.55 * logoGlow}) 0%, transparent 65%)`,
              filter: 'blur(30px)',
              pointerEvents: 'none',
            }}
          />
          <Img
            src={staticFile('edullent-icon.png')}
            style={{
              width: 200,
              height: 200,
              borderRadius: 46,
              boxShadow: `0 ${30 + 30 * logoGlow}px ${60 + 50 * logoGlow}px rgba(0,113,227,${0.4 * logoGlow}), 0 30px 80px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.04)`,
            }}
          />
        </div>

        {/* Wordmark */}
        <div
          style={{
            fontFamily: theme.fontStack,
            fontSize: 108,
            fontWeight: 700,
            letterSpacing: '-0.035em',
            color: '#fff',
            display: 'flex',
            gap: 0,
          }}
        >
          {wordmark.split('').map((c, i) => {
            const localFrame = frame - (wordStart + i * wordPerChar);
            const charOpacity = interpolate(localFrame, [0, 14], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });
            const charY = interpolate(localFrame, [0, 18], [16, 0], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });
            return (
              <span
                key={i}
                style={{
                  display: 'inline-block',
                  opacity: charOpacity,
                  transform: `translateY(${charY}px)`,
                  color: i >= 3 ? '#0a84ff' : '#fff',
                }}
              >
                {c}
              </span>
            );
          })}
        </div>

        {/* Tagline typed */}
        <div
          style={{
            marginTop: 32,
            fontFamily: theme.fontStack,
            fontSize: 32,
            fontWeight: 400,
            color: 'rgba(255,255,255,0.78)',
            letterSpacing: '-0.012em',
            display: 'flex',
            alignItems: 'center',
            minHeight: 44,
          }}
        >
          {TAGLINE.slice(0, taglineCharsVisible)}
          {frame >= taglineStart && !taglineDone && (
            <span
              style={{
                marginLeft: 4,
                width: 2,
                height: 30,
                background: '#0a84ff',
                opacity: cursorBlink ? 1 : 0,
                boxShadow: '0 0 10px #0a84ff',
              }}
            />
          )}
        </div>

        {/* Built-for-everyone line */}
        <div
          style={{
            marginTop: 50,
            fontFamily: theme.fontStack,
            fontSize: 16,
            fontWeight: 600,
            letterSpacing: '0.32em',
            color: 'rgba(255,255,255,0.45)',
            textTransform: 'uppercase',
            opacity: interpolate(frame, [180, 220], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            }),
          }}
        >
          Built for everyone who runs a school
        </div>

        {/* Role pills */}
        <div
          style={{
            marginTop: 22,
            display: 'flex',
            gap: 16,
            opacity: interpolate(frame, [200, 260], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            }),
          }}
        >
          {[
            { label: 'Owners', color: '#0055FF' },
            { label: 'Principals', color: '#0055FF' },
            { label: 'Teachers', color: '#0055FF' },
            { label: 'Parents', color: '#0044CC' },
          ].map((r, i) => (
            <div
              key={r.label}
              style={{
                padding: '12px 26px',
                borderRadius: 100,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.10)',
                fontFamily: theme.fontStack,
                fontSize: 17,
                fontWeight: 600,
                color: '#fff',
                letterSpacing: '-0.012em',
                opacity: interpolate(frame, [220 + i * 8, 260 + i * 8], [0, 1], {
                  extrapolateLeft: 'clamp',
                  extrapolateRight: 'clamp',
                }),
                transform: `translateY(${interpolate(frame, [220 + i * 8, 260 + i * 8], [12, 0], {
                  extrapolateLeft: 'clamp',
                  extrapolateRight: 'clamp',
                })}px)`,
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: 9,
                  height: 9,
                  borderRadius: '50%',
                  background: r.color,
                  marginRight: 12,
                  boxShadow: `0 0 12px ${r.color}`,
                }}
              />
              {r.label}
            </div>
          ))}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
