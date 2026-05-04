import React from 'react';
import { AbsoluteFill, Img, Sequence, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { theme } from '../data/theme';
import type { RoleSpec } from '../data/usps';
import { USPCard } from './USPCard';
import { IPadStage } from './IPadStage';
import { ipadByUspId } from '../data/ipadMap';

type Props = {
  role: RoleSpec;
  /** Frames each individual USP gets */
  uspDuration: number;
  /** Frames the role intro card holds before the first USP */
  introHold: number;
};

/* ────────────────────────────────────────────────────────
   Role intro slate — Apple keynote style
   Real Edullent logo + role label + huge title + subtitle
──────────────────────────────────────────────────────── */
const RoleIntro: React.FC<{ role: RoleSpec; durationInFrames: number }> = ({ role, durationInFrames }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoOpacity = interpolate(frame, [0, 18], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const logoScale = spring({ frame, fps, from: 0.4, to: 1, config: { damping: 14, stiffness: 70 }, durationInFrames: 30 });

  const labelOpacity = interpolate(frame, [10, 28], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const labelY = spring({ frame: frame - 10, fps, from: 30, to: 0, config: { damping: 18, stiffness: 80 }, durationInFrames: 30 });

  const titleScale = spring({ frame: frame - 16, fps, from: 0.86, to: 1, config: { damping: 16, stiffness: 70 }, durationInFrames: 36 });
  const titleOpacity = interpolate(frame, [16, 36], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  const subY = interpolate(frame, [30, 50], [22, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const subOpacity = interpolate(frame, [30, 50], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  const exitOpacity = interpolate(frame, [durationInFrames - 22, durationInFrames], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        opacity: exitOpacity,
      }}
    >
      {/* Real Edullent logo */}
      <Img
        src={staticFile('edullent-icon.png')}
        style={{
          width: 130,
          height: 130,
          borderRadius: 30,
          opacity: logoOpacity,
          transform: `scale(${logoScale})`,
          boxShadow: `0 30px 80px ${role.accent}50, inset 0 0 0 1px rgba(255,255,255,0.04)`,
          marginBottom: 36,
        }}
      />

      {/* Role label */}
      <div
        style={{
          fontFamily: theme.fontStack,
          fontSize: 18,
          fontWeight: 600,
          letterSpacing: '0.32em',
          color: role.accent,
          textTransform: 'uppercase',
          opacity: labelOpacity,
          transform: `translateY(${labelY}px)`,
          marginBottom: 22,
        }}
      >
        {role.label}
      </div>

      {/* Huge title */}
      <div
        style={{
          fontFamily: theme.fontStack,
          fontSize: 156,
          fontWeight: 700,
          color: '#fff',
          letterSpacing: '-0.045em',
          lineHeight: 1,
          opacity: titleOpacity,
          transform: `scale(${titleScale})`,
          textShadow: `0 0 90px ${role.accent}50`,
        }}
      >
        {role.title}
      </div>

      {/* Subtitle */}
      <div
        style={{
          fontFamily: theme.fontStack,
          fontSize: 30,
          fontWeight: 400,
          color: 'rgba(255,255,255,0.65)',
          letterSpacing: '-0.012em',
          marginTop: 30,
          opacity: subOpacity,
          transform: `translateY(${subY}px)`,
        }}
      >
        {role.subtitle}
      </div>
    </AbsoluteFill>
  );
};

/* ────────────────────────────────────────────────────────
   A single USP frame — USP card on left, real iPad on right
   with cursor + highlight + Ken Burns
──────────────────────────────────────────────────────── */
const UspFrame: React.FC<{
  role: RoleSpec;
  uspIndex: number;
  durationInFrames: number;
}> = ({ role, uspIndex, durationInFrames }) => {
  const usp = role.usps[uspIndex];
  const frame = useCurrentFrame();

  const ipadEnterFrame = 8;
  const cursorStartFrame = 38;

  // iPad pixel size — large enough to fill the right half of 1920×1080
  const iPadWidth = 1000;

  // Determine current cursor stop for the caption
  const cursorFrame = frame - cursorStartFrame;
  let activeStop: { caption?: string } | null = null;
  let cur = 0;
  for (let i = 0; i < usp.cursorPath.length; i++) {
    const s = usp.cursorPath[i];
    const travel = i === 0 ? 0 : s.travel;
    if (cursorFrame >= cur && cursorFrame < cur + travel + s.dwell) {
      activeStop = s;
      break;
    }
    cur += travel + s.dwell;
  }
  if (!activeStop && usp.cursorPath.length > 0) activeStop = usp.cursorPath[usp.cursorPath.length - 1];

  const captionOpacity = interpolate(cursorFrame, [0, 22], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const exitFadeFrame = durationInFrames - 22;

  const IPadComp = ipadByUspId[usp.id];

  return (
    <AbsoluteFill style={{ display: 'flex' }}>
      {/* Soft brand glow behind everything */}
      <div
        style={{
          position: 'absolute',
          top: '5%',
          right: '-15%',
          width: 1100,
          height: 1100,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${usp.brand}28 0%, transparent 60%)`,
          filter: 'blur(28px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '-10%',
          width: 800,
          height: 800,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${role.accent}18 0%, transparent 60%)`,
          filter: 'blur(28px)',
        }}
      />

      {/* Left column — USP card */}
      <div
        style={{
          position: 'absolute',
          left: 96,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 700,
        }}
      >
        <USPCard
          eyebrow={usp.eyebrow}
          headline={usp.headline}
          body={usp.body}
          bullets={usp.bullets}
          brand={usp.brand}
          enterFrame={4}
          exitFrame={exitFadeFrame}
          index={uspIndex}
        />
      </div>

      {/* Right column — real iPad with cursor + Ken Burns */}
      <div
        style={{
          position: 'absolute',
          right: 60,
          top: '50%',
          transform: 'translateY(-50%)',
          width: iPadWidth,
        }}
      >
        {IPadComp ? (
          <IPadStage
            IPad={IPadComp}
            cursorPath={usp.cursorPath}
            brand={usp.brand}
            width={iPadWidth}
            enterFrame={ipadEnterFrame}
            cursorStartFrame={cursorStartFrame}
            kenBurns
          />
        ) : (
          <div style={{ color: 'red' }}>iPad missing for {usp.id}</div>
        )}
      </div>

      {/* Bottom subtitle (live caption from cursor stop) */}
      <div
        style={{
          position: 'absolute',
          bottom: 56,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          opacity: captionOpacity,
        }}
      >
        <div
          style={{
            background: 'rgba(0,0,0,0.62)',
            backdropFilter: 'blur(22px)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 100,
            padding: '14px 32px',
            fontFamily: theme.fontStack,
            fontSize: 22,
            fontWeight: 500,
            color: '#fff',
            letterSpacing: '-0.012em',
            boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
          }}
        >
          {activeStop?.caption ?? ''}
        </div>
      </div>

      {/* Top-left brand chip */}
      <div
        style={{
          position: 'absolute',
          top: 56,
          left: 96,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '8px 18px 8px 8px',
          borderRadius: 100,
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.10)',
          fontFamily: theme.fontStack,
        }}
      >
        <Img
          src={staticFile('edullent-icon.png')}
          style={{ width: 30, height: 30, borderRadius: 8 }}
        />
        <span style={{ fontSize: 14, fontWeight: 600, color: '#fff', letterSpacing: '-0.01em' }}>
          {role.title}
        </span>
        <span
          style={{
            padding: '3px 9px',
            borderRadius: 100,
            background: 'rgba(255,255,255,0.06)',
            color: 'rgba(255,255,255,0.6)',
            fontSize: 11,
            fontWeight: 700,
          }}
        >
          {String(uspIndex + 1).padStart(2, '0')} / {String(role.usps.length).padStart(2, '0')}
        </span>
      </div>

      {/* Progress dots */}
      <div
        style={{
          position: 'absolute',
          bottom: 56,
          right: 60,
          display: 'flex',
          gap: 6,
        }}
      >
        {role.usps.map((_, i) => (
          <div
            key={i}
            style={{
              width: i === uspIndex ? 30 : 6,
              height: 6,
              borderRadius: 3,
              background: i === uspIndex ? usp.brand : 'rgba(255,255,255,0.25)',
              boxShadow: i === uspIndex ? `0 0 14px ${usp.brand}80` : 'none',
            }}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};

export const RoleSection: React.FC<Props> = ({ role, uspDuration, introHold }) => {
  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(ellipse at 30% 20%, ${role.accent}22 0%, ${theme.bgDarkAlt} 55%, ${theme.bgDark} 100%)`,
      }}
    >
      {/* Role intro slate */}
      <Sequence from={0} durationInFrames={introHold}>
        <RoleIntro role={role} durationInFrames={introHold} />
      </Sequence>

      {/* USP frames */}
      {role.usps.map((u, i) => (
        <Sequence
          key={u.id}
          from={introHold + i * uspDuration}
          durationInFrames={uspDuration}
        >
          <UspFrame role={role} uspIndex={i} durationInFrames={uspDuration} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
