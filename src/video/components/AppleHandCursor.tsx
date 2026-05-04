import React from 'react';
import { interpolate, spring, useVideoConfig } from 'remotion';
import type { CursorStop } from '../data/usps';

/**
 * macOS arrow cursor.
 *
 * Apple's actual cursor is white with a 1px black outline — drawn as a single
 * SVG so it stays crisp at any scale. The shape is a faithful trace of the
 * macOS Sequoia pointer.
 */
const CursorSVG: React.FC<{ size?: number }> = ({ size = 36 }) => (
  <svg
    width={size}
    height={size * 1.4}
    viewBox="0 0 18 25"
    style={{ display: 'block', filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.35))' }}
  >
    {/* Black outline */}
    <path
      d="M 1 1 L 1 18.6 L 5.6 14.0 L 8.6 21.5 L 11.5 20.3 L 8.6 12.8 L 15 12.8 Z"
      fill="#0a0a0a"
      stroke="#0a0a0a"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    {/* White fill */}
    <path
      d="M 2.4 3.3 L 2.4 16.0 L 5.7 12.7 L 9.0 20.0 L 10.6 19.4 L 7.4 12.0 L 12.6 12.0 Z"
      fill="#ffffff"
    />
  </svg>
);

type Props = {
  /** Frame relative to the start of the cursor sequence */
  frame: number;
  /** Stops the cursor visits — coordinates are 0-100 (% of `bounds`) */
  path: CursorStop[];
  /** Bounding box of the iPad screen, in pixels — used to convert % → px */
  bounds: { width: number; height: number };
  /** Frame at which the cursor first appears */
  startFrame?: number;
};

/**
 * Bezier interpolation between two points so the cursor arcs naturally
 * instead of moving in a straight line.
 */
const bezier = (
  t: number,
  p0: { x: number; y: number },
  p1: { x: number; y: number },
  p2: { x: number; y: number }
) => {
  const u = 1 - t;
  return {
    x: u * u * p0.x + 2 * u * t * p1.x + t * t * p2.x,
    y: u * u * p0.y + 2 * u * t * p1.y + t * t * p2.y,
  };
};

const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
const easeOutBack = (t: number) => 1 + 2.7 * Math.pow(t - 1, 3) + 1.7 * Math.pow(t - 1, 2);
const easeInOutQuart = (t: number) =>
  t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;

/**
 * Pseudo-random hand jitter — tiny sub-pixel drift while the cursor dwells,
 * so the hand never looks frozen. Different seed per stop keeps it fresh.
 */
const jitter = (frame: number, seed: number) => {
  const x = Math.sin(frame * 0.32 + seed * 13.1) * 0.6 + Math.sin(frame * 0.11 + seed * 7.7) * 1.2;
  const y = Math.cos(frame * 0.29 + seed * 9.3) * 0.6 + Math.cos(frame * 0.13 + seed * 5.5) * 1.0;
  return { x, y };
};

export const AppleHandCursor: React.FC<Props> = ({ frame, path, bounds, startFrame = 0 }) => {
  const { fps } = useVideoConfig();
  const t = frame - startFrame;

  if (t < 0 || path.length === 0) return null;

  // Build segments
  const segments: { start: CursorStop; end: CursorStop; from: number; to: number }[] = [];
  let cursor = 0;
  for (let i = 0; i < path.length; i++) {
    const stop = path[i];
    const prev = i === 0 ? path[0] : path[i - 1];
    const travel = i === 0 ? 0 : stop.travel;
    segments.push({
      start: prev,
      end: stop,
      from: cursor,
      to: cursor + travel + stop.dwell,
    });
    cursor += travel + stop.dwell;
  }

  // Find current segment
  const seg = segments.find((s) => t >= s.from && t < s.to) ?? segments[segments.length - 1];

  // Compute progress within travel + dwell phases of this segment
  const travelDur = seg === segments[0] ? 0 : seg.end.travel;
  const local = t - seg.from;
  const isTraveling = local < travelDur;
  const travelT = travelDur > 0 ? Math.min(1, local / travelDur) : 1;

  // Use a control point above the midpoint for natural arc — varied per stop
  // so consecutive moves don't trace identical curves.
  const segIndex = segments.indexOf(seg);
  const sx = seg.start.x;
  const sy = seg.start.y;
  const ex = seg.end.x;
  const ey = seg.end.y;

  // Vary the arc shape and side per stop
  const arcSide = segIndex % 2 === 0 ? 1 : -1;
  const arcStrength = 0.14 + (segIndex % 3) * 0.06;
  const cx = (sx + ex) / 2 + (ey - sy) * 0.05 * arcSide;
  const cy =
    Math.min(sy, ey) - Math.abs(ex - sx) * arcStrength - Math.abs(ey - sy) * 0.05;

  // Vary easing per stop — alternate between deliberate, snappy, overshoot
  const easeFns = [easeInOut, easeInOutQuart, easeOutBack];
  const easing = easeFns[segIndex % easeFns.length];
  const eased = easing(travelT);
  const pos = isTraveling
    ? bezier(eased, { x: sx, y: sy }, { x: cx, y: cy }, { x: ex, y: ey })
    : { x: ex, y: ey };

  // Hand jitter — only while dwelling, so travel stays smooth
  const isDwelling = !isTraveling;
  const jit = isDwelling ? jitter(t, segIndex) : { x: 0, y: 0 };

  const px = (pos.x / 100) * bounds.width + jit.x;
  const py = (pos.y / 100) * bounds.height + jit.y;

  // Click pulse — only on the click frames at the end of travel for stops that have click=true
  const dwellInto = local - travelDur;
  const showClick = !isTraveling && seg.end.click && dwellInto >= 0 && dwellInto < 18;

  // Click scale (cursor briefly shrinks then bounces back)
  let clickScale = 1;
  if (showClick) {
    clickScale = interpolate(dwellInto, [0, 4, 12], [1, 0.78, 1.04], {
      extrapolateRight: 'clamp',
    });
  }

  // Spring on first appearance
  const enterScale = spring({
    frame: t,
    fps,
    from: 0,
    to: 1,
    config: { damping: 14, stiffness: 120 },
    durationInFrames: 18,
  });

  // Ripple scale + opacity at click moment
  const rippleScale = showClick
    ? interpolate(dwellInto, [0, 18], [0, 1], { extrapolateRight: 'clamp' })
    : 0;
  const rippleOpacity = showClick
    ? interpolate(dwellInto, [0, 18], [0.5, 0], { extrapolateRight: 'clamp' })
    : 0;

  return (
    <>
      {/* Click ripple */}
      {showClick && (
        <div
          style={{
            position: 'absolute',
            left: px,
            top: py,
            width: 60,
            height: 60,
            marginLeft: -30,
            marginTop: -30,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.55)',
            border: '2px solid rgba(0, 122, 255, 0.7)',
            transform: `scale(${rippleScale})`,
            opacity: rippleOpacity,
            pointerEvents: 'none',
          }}
        />
      )}

      {/* Cursor */}
      <div
        style={{
          position: 'absolute',
          left: px,
          top: py,
          // The hot-spot of the macOS arrow is the top-left corner; offset
          // a few px down/right so visually it lines up
          transform: `translate(-2px, -2px) scale(${clickScale * enterScale})`,
          transformOrigin: '0 0',
          pointerEvents: 'none',
          zIndex: 50,
        }}
      >
        <CursorSVG size={32} />
      </div>
    </>
  );
};
