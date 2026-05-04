import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { theme } from '../data/theme';

type Props = {
  /** Big number that animates in (string so we can include + or %) */
  value: string;
  /** Label below the number */
  label: string;
  /** Quote / stat description above */
  eyebrow: string;
  /** Brand accent for the glow */
  accent: string;
  /** Sub-text shown small under the label */
  hint?: string;
  durationInFrames: number;
};

/**
 * Apple-keynote-style "huge number on black" stat card.
 * Used between role sections to reset the eye and create rhythm.
 */
export const StatScene: React.FC<Props> = ({ value, label, eyebrow, accent, hint, durationInFrames }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const eyebrowOpacity = interpolate(frame, [0, 18], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const eyebrowY = spring({ frame, fps, from: 18, to: 0, config: { damping: 18, stiffness: 70 }, durationInFrames: 30 });

  const valueScale = spring({ frame: frame - 8, fps, from: 0.74, to: 1, config: { damping: 14, stiffness: 56 }, durationInFrames: 50 });
  const valueOpacity = interpolate(frame, [8, 36], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  const labelOpacity = interpolate(frame, [22, 50], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const labelY = interpolate(frame, [22, 50], [22, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  const hintOpacity = interpolate(frame, [40, 70], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  const fadeOut = interpolate(frame, [durationInFrames - 26, durationInFrames], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        background: theme.bgDark,
        fontFamily: theme.fontStack,
        opacity: fadeOut,
      }}
    >
      {/* Brand glow */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: 1200,
          height: 1200,
          marginLeft: -600,
          marginTop: -600,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${accent}24 0%, transparent 60%)`,
          filter: 'blur(28px)',
        }}
      />

      <AbsoluteFill style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        {/* Eyebrow */}
        <div
          style={{
            fontSize: 16,
            fontWeight: 600,
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: accent,
            opacity: eyebrowOpacity,
            transform: `translateY(${eyebrowY}px)`,
            marginBottom: 32,
          }}
        >
          {eyebrow}
        </div>

        {/* Big number */}
        <div
          style={{
            fontSize: 280,
            fontWeight: 700,
            letterSpacing: '-0.05em',
            lineHeight: 1,
            color: '#fff',
            opacity: valueOpacity,
            transform: `scale(${valueScale})`,
            textShadow: `0 0 80px ${accent}60`,
          }}
        >
          {value}
        </div>

        {/* Label */}
        <div
          style={{
            fontSize: 44,
            fontWeight: 500,
            letterSpacing: '-0.022em',
            color: '#fff',
            opacity: labelOpacity,
            transform: `translateY(${labelY}px)`,
            marginTop: 16,
            textAlign: 'center',
            maxWidth: 1100,
          }}
        >
          {label}
        </div>

        {hint && (
          <div
            style={{
              marginTop: 22,
              fontSize: 20,
              color: 'rgba(255,255,255,0.55)',
              letterSpacing: '-0.012em',
              opacity: hintOpacity,
            }}
          >
            {hint}
          </div>
        )}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
