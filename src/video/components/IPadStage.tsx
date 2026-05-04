import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import type { ComponentType } from 'react';
import type { CursorStop } from '../data/usps';
import { AppleHandCursor } from './AppleHandCursor';
import { HighlightRing } from './HighlightRing';

type Props = {
  /** Real iPad mockup component (already includes IPadBezel) */
  IPad: ComponentType;
  /** % positions of stops driving the cursor and highlight rings */
  cursorPath: CursorStop[];
  /** Brand accent color used by the highlight ring */
  brand: string;
  /** Fixed pixel width of the iPad chassis */
  width: number;
  /** Frame relative to scene start at which the iPad enters */
  enterFrame?: number;
  /** Frame at which the cursor begins */
  cursorStartFrame?: number;
  /** Whether to apply a slow Ken Burns zoom-pan toward where the cursor lands */
  kenBurns?: boolean;
};

/**
 * Cinematic iPad stage — the iPad scales in like a product reveal, gently
 * floats, and slowly Ken-Burns toward whichever quadrant the cursor will
 * visit next. A pulsing highlight ring draws focus to the active UI element.
 */
export const IPadStage: React.FC<Props> = ({
  IPad,
  cursorPath,
  brand,
  width,
  enterFrame = 0,
  cursorStartFrame = 38,
  kenBurns = true,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = frame - enterFrame;

  // iPad chassis is 1.43:1
  const aspect = 1.43;
  const height = width / aspect;

  // The bezel is 2% of width on each edge — used to convert cursor % to px
  const bezelPad = width * 0.02;
  const screenW = width - bezelPad * 2;
  const screenH = height - bezelPad * 2;

  // Reveal animation
  const enterScale = spring({
    frame: t,
    fps,
    from: 0.9,
    to: 1,
    config: { damping: 20, stiffness: 70 },
    durationInFrames: 36,
  });
  const opacity = interpolate(t, [0, 18], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const enterY = interpolate(t, [0, 36], [40, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Subtle floating drift
  const driftY = Math.sin(t * 0.038) * 4;

  // Subtle 3D tilt that breathes
  const tiltY = Math.sin(t * 0.024) * 1.5;
  const tiltX = Math.sin(t * 0.018) * -1.2;

  // ── Ken Burns: zoom into the part of the iPad where the cursor is heading ──
  const cursorFrame = frame - cursorStartFrame;
  let activeStop: CursorStop = cursorPath[0];
  if (cursorFrame >= 0 && cursorPath.length > 0) {
    let cur = 0;
    for (let i = 0; i < cursorPath.length; i++) {
      const s = cursorPath[i];
      const travel = i === 0 ? 0 : s.travel;
      if (cursorFrame >= cur && cursorFrame < cur + travel + s.dwell) {
        activeStop = s;
        break;
      }
      cur += travel + s.dwell;
    }
    if (cursorFrame >= cur) activeStop = cursorPath[cursorPath.length - 1];
  }

  // KenBurns picks a slow scale-in toward the active stop. Origin shifts
  // along with the active stop's position so the zoom feels purposeful.
  const kbScale = kenBurns
    ? interpolate(t, [40, 200, 380], [1.0, 1.045, 1.06], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
      })
    : 1;

  // Smooth the origin between stops so the iPad doesn't jerk
  const kbOriginX = interpolate(t, [0, 60], [50, activeStop.x], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const kbOriginY = interpolate(t, [0, 60], [50, activeStop.y], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Highlight rings only ignite once cursor begins traveling on the path
  const highlightActiveIdx = (() => {
    if (cursorFrame < 0) return -1;
    let cur = 0;
    for (let i = 0; i < cursorPath.length; i++) {
      const s = cursorPath[i];
      const travel = i === 0 ? 0 : s.travel;
      if (cursorFrame >= cur && cursorFrame < cur + travel + s.dwell) return i;
      cur += travel + s.dwell;
    }
    return cursorPath.length - 1;
  })();

  return (
    <div
      style={{
        position: 'relative',
        width,
        height,
        opacity,
        transform: `translateY(${enterY + driftY}px) scale(${enterScale})`,
        perspective: 2400,
      }}
    >
      {/* Soft ambient under-shadow */}
      <div
        style={{
          position: 'absolute',
          left: '8%',
          right: '8%',
          bottom: -50,
          height: 100,
          borderRadius: '50%',
          background: `radial-gradient(ellipse at center, rgba(0,0,0,0.55) 0%, transparent 70%)`,
          filter: 'blur(28px)',
          pointerEvents: 'none',
        }}
      />

      {/* Ken Burns wrapper around the iPad component */}
      <div
        style={{
          width: '100%',
          height: '100%',
          transform: `scale(${kbScale}) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
          transformOrigin: `${kbOriginX}% ${kbOriginY}%`,
          transformStyle: 'preserve-3d',
          willChange: 'transform',
          position: 'relative',
        }}
      >
        {/* The real Edullent iPad */}
        <div style={{ width: '100%', height: '100%' }}>
          <IPad />
        </div>

        {/* Reflection sweep — runs once across the chassis on enter */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 38,
            background:
              'linear-gradient(115deg, rgba(255,255,255,0.0) 36%, rgba(255,255,255,0.10) 50%, rgba(255,255,255,0) 64%)',
            transform: `translateX(${interpolate(t, [0, 60], [-100, 100], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            })}%)`,
            opacity: interpolate(t, [0, 22, 60], [0, 0.6, 0], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            }),
            pointerEvents: 'none',
            zIndex: 6,
          }}
        />

        {/* Highlight rings — anchored to the screen area, inside the bezel */}
        <div
          style={{
            position: 'absolute',
            top: bezelPad,
            left: bezelPad,
            width: screenW,
            height: screenH,
            pointerEvents: 'none',
            zIndex: 9,
          }}
        >
          {cursorPath.map((stop, i) => {
            // The ring lights up shortly before the cursor arrives
            const startCursorFrame = (() => {
              let cur = 0;
              for (let j = 0; j < i; j++) {
                const sPrev = cursorPath[j];
                const travel = j === 0 ? 0 : sPrev.travel;
                cur += travel + sPrev.dwell;
              }
              const travelI = i === 0 ? 0 : stop.travel;
              return cur + Math.max(0, travelI - 8);
            })();
            const dwellFrames = stop.dwell + (i === 0 ? 0 : stop.travel);
            return (
              <HighlightRing
                key={i}
                startFrame={cursorStartFrame + startCursorFrame}
                duration={dwellFrames + 10}
                x={stop.x}
                y={stop.y}
                bounds={{ width: screenW, height: screenH }}
                color={brand}
              />
            );
          })}
          {/* Cursor */}
          <AppleHandCursor
            frame={frame}
            startFrame={cursorStartFrame}
            bounds={{ width: screenW, height: screenH }}
            path={cursorPath}
          />
        </div>
      </div>

      {/* Suppress unused warning if highlightActiveIdx ever becomes useful */}
      <div style={{ display: 'none' }}>{highlightActiveIdx}</div>
    </div>
  );
};
