import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { theme } from '../data/theme';

type Props = {
  eyebrow: string;
  headline: string;
  body: string;
  bullets: string[];
  brand: string;
  /** Frame within the parent scene at which the card animates in */
  enterFrame: number;
  /** Frame at which the card animates out (set to a very large number to never exit) */
  exitFrame?: number;
  /** USP index — used to stagger bullet entrances */
  index?: number;
};

/**
 * Apple-style minimal USP card.
 *
 * Slides in from below with a spring on enter, then crossfades out (no spring)
 * when the next USP takes over. Sits on the *left* of the role scene, with
 * the iPad on the right.
 */
export const USPCard: React.FC<Props> = ({
  eyebrow,
  headline,
  body,
  bullets,
  brand,
  enterFrame,
  exitFrame,
  index = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = frame - enterFrame;

  // Eyebrow + headline come in first
  const headOpacity = interpolate(t, [0, 18], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const headY = spring({
    frame: t,
    fps,
    from: 32,
    to: 0,
    config: { damping: 18, stiffness: 80 },
    durationInFrames: 30,
  });

  // Body fades in slightly later
  const bodyOpacity = interpolate(t, [10, 26], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const bodyY = interpolate(t, [10, 26], [16, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Exit fade (only if exitFrame is provided)
  const exitT = exitFrame !== undefined ? frame - exitFrame : -Infinity;
  const exitOpacity = exitT >= 0
    ? interpolate(exitT, [0, 16], [1, 0], { extrapolateRight: 'clamp' })
    : 1;

  return (
    <div
      style={{
        opacity: exitOpacity,
        fontFamily: theme.fontStack,
        color: '#fff',
        maxWidth: 620,
      }}
    >
      {/* Eyebrow row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          marginBottom: 18,
          opacity: headOpacity,
          transform: `translateY(${headY}px)`,
        }}
      >
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: 2,
            background: brand,
            boxShadow: `0 0 18px ${brand}`,
          }}
        />
        <div
          style={{
            fontSize: 15,
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: brand,
          }}
        >
          {eyebrow}
        </div>
        <div
          style={{
            padding: '4px 12px',
            borderRadius: 100,
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.10)',
            fontSize: 12,
            fontWeight: 600,
            color: 'rgba(255,255,255,0.70)',
          }}
        >
          USP · {String(index + 1).padStart(2, '0')}
        </div>
      </div>

      {/* Headline */}
      <h1
        style={{
          fontSize: 60,
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: '-0.025em',
          margin: 0,
          color: '#fff',
          opacity: headOpacity,
          transform: `translateY(${headY}px)`,
        }}
      >
        {headline}
      </h1>

      {/* Body copy */}
      <p
        style={{
          fontSize: 22,
          lineHeight: 1.5,
          letterSpacing: '0.005em',
          marginTop: 26,
          marginBottom: 30,
          color: 'rgba(255,255,255,0.72)',
          fontWeight: 400,
          opacity: bodyOpacity,
          transform: `translateY(${bodyY}px)`,
        }}
      >
        {body}
      </p>

      {/* Bullets — staggered spring-in */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {bullets.map((b, i) => {
          const local = t - (24 + i * 6);
          const o = interpolate(local, [0, 14], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          });
          const x = spring({
            frame: local,
            fps,
            from: -28,
            to: 0,
            config: { damping: 18, stiffness: 90 },
            durationInFrames: 26,
          });
          return (
            <div
              key={b}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 12,
                opacity: o,
                transform: `translateX(${x}px)`,
              }}
            >
              <span
                style={{
                  marginTop: 9,
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: brand,
                  flexShrink: 0,
                  boxShadow: `0 0 12px ${brand}80`,
                }}
              />
              <p
                style={{
                  margin: 0,
                  fontSize: 18,
                  lineHeight: 1.5,
                  color: 'rgba(255,255,255,0.88)',
                  fontWeight: 400,
                  letterSpacing: '0.005em',
                }}
              >
                {b}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
