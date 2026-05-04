import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';

/**
 * Apple-style crossfade with subtle zoom.
 *
 * Wraps a scene's content. Children fade in over `duration` frames at the
 * start and fade out over the same window at the end of `totalFrames`,
 * with a tiny scale-in/out so the cut feels deliberate, not abrupt.
 */
export const SceneTransition: React.FC<{
  totalFrames: number;
  duration?: number;
  children: React.ReactNode;
}> = ({ totalFrames, duration = 20, children }) => {
  const frame = useCurrentFrame();

  const fadeIn = interpolate(frame, [0, duration], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const fadeOut = interpolate(frame, [totalFrames - duration, totalFrames], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const opacity = Math.min(fadeIn, fadeOut);

  const enterScale = interpolate(frame, [0, duration], [1.02, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const exitScale = interpolate(frame, [totalFrames - duration, totalFrames], [1, 1.02], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const scale = Math.min(enterScale, exitScale);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        opacity,
        transform: `scale(${scale})`,
        transformOrigin: 'center center',
      }}
    >
      {children}
    </div>
  );
};
