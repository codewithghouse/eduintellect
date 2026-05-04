import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';

/**
 * Pulsing accent ring used to draw the eye toward whatever the cursor is
 * about to interact with — like Apple's keynote "tap-here" annotations.
 */
export const HighlightRing: React.FC<{
  /** Frame relative to scene start at which the ring appears */
  startFrame: number;
  /** How long the ring stays visible */
  duration: number;
  /** % horizontal position within the iPad screen (0-100) */
  x: number;
  /** % vertical position within the iPad screen (0-100) */
  y: number;
  /** Bounding box of the iPad screen (px) */
  bounds: { width: number; height: number };
  /** Brand accent color */
  color: string;
}> = ({ startFrame, duration, x, y, bounds, color }) => {
  const frame = useCurrentFrame();
  const t = frame - startFrame;

  if (t < 0 || t >= duration) return null;

  const baseOpacity = interpolate(t, [0, 14, duration - 12, duration], [0, 0.8, 0.8, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Two pulses overlap to create a continuous radar-blink
  const pulses = [0, 22];
  const px = (x / 100) * bounds.width;
  const py = (y / 100) * bounds.height;

  return (
    <>
      {pulses.map((offset) => {
        const localT = ((t - offset) % 44 + 44) % 44;
        const scale = interpolate(localT, [0, 44], [0.6, 1.9]);
        const ringOpacity = interpolate(localT, [0, 22, 44], [0.85, 0.4, 0]);
        return (
          <div
            key={offset}
            style={{
              position: 'absolute',
              left: px,
              top: py,
              width: 110,
              height: 110,
              marginLeft: -55,
              marginTop: -55,
              borderRadius: '50%',
              border: `3px solid ${color}`,
              boxShadow: `0 0 30px ${color}80`,
              transform: `scale(${scale})`,
              opacity: baseOpacity * ringOpacity,
              pointerEvents: 'none',
            }}
          />
        );
      })}
      {/* Static center dot */}
      <div
        style={{
          position: 'absolute',
          left: px,
          top: py,
          width: 14,
          height: 14,
          marginLeft: -7,
          marginTop: -7,
          borderRadius: '50%',
          background: color,
          boxShadow: `0 0 16px ${color}, 0 0 4px #fff`,
          opacity: baseOpacity,
          pointerEvents: 'none',
        }}
      />
    </>
  );
};
