import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Easing,
} from 'remotion';

/* ─── Color palette ─── */
const C = {
  bg: '#0a0a0f',
  bg2: '#111118',
  card: '#18181f',
  blue: '#0071e3',
  green: '#34c759',
  purple: '#6741d9',
  white: '#ffffff',
  gray: '#86868b',
  lightGray: '#d2d2d7',
};

/* ─── Typography helpers ─── */
const fontStack = '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif';

/* ─── All 14 sections data ─── */
const sections = [
  { label: 'Classroom Management', title: 'Track. Monitor.\nImprove.', screens: ['Student Profile', 'Mark Attendance'], color: '#0071e3', emoji: '📊' },
  { label: 'Planning & Organization', title: 'Your week.\nAt a glance.', screens: ['Weekly Schedule', 'Reports'], color: '#0055FF', emoji: '📅' },
  { label: 'Summarize Lesson', title: 'AI reads.\nYou teach.', screens: ['Upload Form', 'Generated Summary'], color: '#6741d9', emoji: '✨' },
  { label: 'AI Lesson Planner', title: 'Plan in\nseconds.', screens: ['Form', 'Lesson Plan'], color: '#6741d9', emoji: '🎯' },
  { label: 'Principal Notes', title: 'Stay connected.\nAlways.', screens: ['Inbox', 'Chat Detail'], color: '#3b5bdb', emoji: '💬' },
  { label: 'Parent Communication', title: 'Bridge the gap.\nBuild trust.', screens: ['Parent List', 'Chat'], color: '#3b5bdb', emoji: '👨‍👩‍👧' },
  { label: 'Risks & Alerts', title: 'Spot risks.\nAct fast.', screens: ['All Alerts', 'Attendance', 'Grades'], color: '#c92a2a', emoji: '🚨' },
  { label: 'Concept Mastery', title: 'Know what\nthey know.', screens: ['Overview', 'Student Detail'], color: '#0071e3', emoji: '🧠' },
  { label: 'Gradebook', title: 'Every mark.\nOne place.', screens: ['Main View', 'Enter Scores'], color: '#087f5b', emoji: '📝' },
  { label: 'Student Management', title: 'Every student.\nOne view.', screens: ['List', 'Profile', 'Feedback'], color: '#ff9500', emoji: '👩‍🎓' },
  { label: 'Tests & Exams', title: 'Assess.\nAnalyze.', screens: ['Overview', 'Create Test'], color: '#0055FF', emoji: '📋' },
  { label: 'Assignments', title: 'Assign. Collect.\nGrade.', screens: ['Overview', 'Create'], color: '#c87014', emoji: '📚' },
  { label: 'Attendance', title: 'Present. Absent.\nTracked.', screens: ['Overview', 'Concerns', 'Mark'], color: '#34c759', emoji: '✅' },
  { label: 'Personalization', title: 'Make it\nyours.', screens: ['Settings'], color: '#0071e3', emoji: '⚙️' },
];

/* ─── Timing constants ─── */
const FPS = 30;
const INTRO_DUR = 90;        // 3 sec intro
const SECTION_DUR = 110;     // ~3.67 sec per section
const OUTRO_DUR = 170;       // ~5.67 sec outro
// Total: 90 + (14 × 110) + 170 = 1800 frames = 60 sec

/* ─── Phone Mockup ─── */
const PhoneMockup: React.FC<{ screenTitle: string; color: string; index: number; frame: number }> = ({
  screenTitle, color, index, frame,
}) => {
  const enterDelay = index * 4;
  const opacity = interpolate(frame - enterDelay, [0, 12], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const translateY = interpolate(frame - enterDelay, [0, 15], [40, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic) });
  const scale = interpolate(frame - enterDelay, [0, 15], [0.9, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic) });

  return (
    <div style={{
      width: 220, height: 440, borderRadius: 30, overflow: 'hidden',
      background: '#1a1a22', border: '3px solid #2a2a35',
      boxShadow: `0 20px 60px rgba(0,0,0,0.5), 0 0 40px ${color}22`,
      opacity, transform: `translateY(${translateY}px) scale(${scale})`,
      flexShrink: 0,
    }}>
      {/* Status bar */}
      <div style={{ height: 28, background: '#08090c', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: 60, height: 16, background: '#000', borderRadius: 10 }} />
      </div>
      {/* Dark header */}
      <div style={{ background: '#08090c', padding: '12px 16px 18px' }}>
        <div style={{ display: 'flex', gap: 3, marginBottom: 8 }}>
          <div style={{ height: 1.5, width: 14, background: 'rgba(255,255,255,.5)', borderRadius: 1 }} />
          <div style={{ height: 1.5, width: 9, background: 'rgba(255,255,255,.5)', borderRadius: 1, marginTop: 3 }} />
        </div>
        <div style={{ fontSize: 8, fontWeight: 700, color: 'rgba(255,255,255,.3)', letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: 4, fontFamily: fontStack }}>
          {screenTitle}
        </div>
      </div>
      {/* Body with colored elements */}
      <div style={{ flex: 1, background: '#f5f6f9', padding: 10 }}>
        {/* Metric cards mockup */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginBottom: 8 }}>
          {[0, 1, 2, 3].map((i) => (
            <div key={i} style={{
              background: '#fff', borderRadius: 10, padding: 10, height: 52,
              border: '0.5px solid #e2e5ee',
            }}>
              <div style={{ width: 18, height: 18, borderRadius: 5, background: `${color}18`, marginBottom: 6 }} />
              <div style={{ width: '60%', height: 4, background: '#eceef4', borderRadius: 2 }} />
            </div>
          ))}
        </div>
        {/* List items mockup */}
        {[0, 1, 2].map((i) => (
          <div key={i} style={{
            background: '#fff', borderRadius: 10, padding: '8px 10px',
            marginBottom: 5, display: 'flex', alignItems: 'center', gap: 8,
            border: '0.5px solid #e2e5ee',
          }}>
            <div style={{ width: 24, height: 24, borderRadius: 7, background: `${color}20`, flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <div style={{ width: '70%', height: 4, background: '#e2e5ee', borderRadius: 2, marginBottom: 4 }} />
              <div style={{ width: '45%', height: 3, background: '#eceef4', borderRadius: 2 }} />
            </div>
            <div style={{ width: 30, height: 14, borderRadius: 7, background: `${color}15` }} />
          </div>
        ))}
        {/* Button mockup */}
        <div style={{ background: color, borderRadius: 8, height: 28, marginTop: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '40%', height: 3, background: 'rgba(255,255,255,.4)', borderRadius: 2 }} />
        </div>
      </div>
      {/* Tab bar */}
      <div style={{ height: 36, background: '#fff', borderTop: '0.5px solid #e2e5ee', display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '0 12px' }}>
        {[0, 1, 2, 3].map((i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: 2 }}>
            <div style={{ width: 12, height: 12, borderRadius: 3, background: i === 0 ? color : '#e2e5ee' }} />
            <div style={{ width: 16, height: 2, borderRadius: 1, background: i === 0 ? color : '#eceef4' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

/* ─── Intro Sequence (0-90 frames = 3 sec) ─── */
const IntroSequence: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoScale = spring({ frame, fps, from: 0, to: 1, config: { damping: 12, stiffness: 80 } });
  const logoOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: 'clamp' });
  const titleY = interpolate(frame, [20, 45], [30, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic) });
  const titleOpacity = interpolate(frame, [20, 40], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const subOpacity = interpolate(frame, [35, 55], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const badgeOpacity = interpolate(frame, [50, 65], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const fadeOut = interpolate(frame, [70, 90], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{
      background: `radial-gradient(ellipse at 50% 40%, #1a1a2e 0%, ${C.bg} 70%)`,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      fontFamily: fontStack, opacity: fadeOut,
    }}>
      {/* Glow effect */}
      <div style={{
        position: 'absolute', width: 400, height: 400, borderRadius: '50%',
        background: `radial-gradient(circle, ${C.blue}15 0%, transparent 70%)`,
        top: '30%', left: '50%', transform: 'translate(-50%, -50%)',
      }} />

      {/* Logo */}
      <div style={{
        width: 80, height: 80, borderRadius: 20, background: C.blue,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: `0 10px 40px ${C.blue}40`,
        transform: `scale(${logoScale})`, opacity: logoOpacity,
        marginBottom: 30,
      }}>
        <span style={{ fontSize: 36, fontWeight: 700, color: '#fff' }}>E</span>
      </div>

      {/* Title */}
      <div style={{
        fontSize: 64, fontWeight: 700, color: C.white, letterSpacing: '-1.5px',
        textAlign: 'center', lineHeight: 1.1,
        transform: `translateY(${titleY}px)`, opacity: titleOpacity,
      }}>
        Edu<span style={{ color: C.blue }}>llent</span>
      </div>

      {/* Subtitle */}
      <div style={{
        fontSize: 22, color: C.gray, marginTop: 16,
        letterSpacing: '-0.3px', opacity: subOpacity,
      }}>
        Teacher Dashboard — Product Showcase
      </div>

      {/* Badge */}
      <div style={{
        marginTop: 24, padding: '8px 20px', borderRadius: 100,
        background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
        fontSize: 14, fontWeight: 600, color: C.lightGray,
        opacity: badgeOpacity, letterSpacing: '0.1em',
      }}>
        14 FEATURES · 30 SCREENS · 1 APP
      </div>
    </AbsoluteFill>
  );
};

/* ─── Section Showcase ─── */
const SectionShowcase: React.FC<{
  section: typeof sections[0];
  sectionIndex: number;
}> = ({ section, sectionIndex }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Fade in / out
  const fadeIn = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' });
  const fadeOut = interpolate(frame, [SECTION_DUR - 15, SECTION_DUR], [1, 0], { extrapolateRight: 'clamp' });
  const opacity = Math.min(fadeIn, fadeOut);

  // Label animation
  const labelY = interpolate(frame, [0, 18], [20, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic) });
  const labelOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  // Title animation
  const titleY = interpolate(frame, [8, 25], [30, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic) });
  const titleOpacity = interpolate(frame, [8, 22], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  // Counter badge
  const counterScale = spring({ frame: Math.max(0, frame - 15), fps, from: 0, to: 1, config: { damping: 10, stiffness: 100 } });

  // Phones floating animation
  const floatY = Math.sin(frame * 0.08) * 3;

  // Background glow position
  const glowX = interpolate(frame, [0, SECTION_DUR], [30, 70], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{
      background: C.bg, fontFamily: fontStack, opacity,
    }}>
      {/* Animated background glow */}
      <div style={{
        position: 'absolute', width: 600, height: 600, borderRadius: '50%',
        background: `radial-gradient(circle, ${section.color}12 0%, transparent 65%)`,
        top: '20%', left: `${glowX}%`, transform: 'translate(-50%, -50%)',
        transition: 'left 3s ease',
      }} />

      {/* Grid pattern overlay */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.03,
        backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Left side — Text */}
      <div style={{
        position: 'absolute', left: 100, top: '50%', transform: 'translateY(-50%)',
        width: 600, display: 'flex', flexDirection: 'column',
      }}>
        {/* Section counter */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20,
          opacity: labelOpacity, transform: `translateY(${labelY}px)`,
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: `${section.color}20`, border: `1px solid ${section.color}40`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 18, transform: `scale(${counterScale})`,
          }}>
            {section.emoji}
          </div>
          <span style={{
            fontSize: 13, fontWeight: 700, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: section.color,
          }}>
            {section.label}
          </span>
          <div style={{
            padding: '3px 10px', borderRadius: 100,
            background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)',
            fontSize: 11, fontWeight: 600, color: C.gray,
          }}>
            {String(sectionIndex + 1).padStart(2, '0')} / 14
          </div>
        </div>

        {/* Title */}
        <div style={{
          fontSize: 56, fontWeight: 700, color: C.white,
          letterSpacing: '-1.2px', lineHeight: 1.12,
          opacity: titleOpacity, transform: `translateY(${titleY}px)`,
          whiteSpace: 'pre-line',
        }}>
          {section.title}
        </div>

        {/* Screen count */}
        <div style={{
          marginTop: 24, display: 'flex', gap: 8,
          opacity: interpolate(frame, [20, 35], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
        }}>
          {section.screens.map((s, i) => (
            <div key={s} style={{
              padding: '6px 14px', borderRadius: 100,
              background: i === 0 ? `${section.color}20` : 'rgba(255,255,255,0.04)',
              border: `1px solid ${i === 0 ? `${section.color}40` : 'rgba(255,255,255,0.08)'}`,
              fontSize: 12, fontWeight: 600,
              color: i === 0 ? section.color : C.gray,
            }}>
              {s}
            </div>
          ))}
        </div>
      </div>

      {/* Right side — Phone mockups */}
      <div style={{
        position: 'absolute', right: 80, top: '50%',
        transform: `translateY(calc(-50% + ${floatY}px))`,
        display: 'flex', gap: 20, alignItems: 'center',
      }}>
        {section.screens.map((screen, i) => (
          <PhoneMockup
            key={screen}
            screenTitle={screen}
            color={section.color}
            index={i}
            frame={frame}
          />
        ))}
      </div>

      {/* Bottom progress bar */}
      <div style={{
        position: 'absolute', bottom: 40, left: 100, right: 100,
        display: 'flex', alignItems: 'center', gap: 16,
      }}>
        <div style={{ flex: 1, height: 3, background: 'rgba(255,255,255,0.06)', borderRadius: 2, overflow: 'hidden' }}>
          <div style={{
            height: '100%', borderRadius: 2,
            background: `linear-gradient(90deg, ${section.color}, ${section.color}80)`,
            width: `${((sectionIndex + 1) / 14) * 100}%`,
            transition: 'width 0.3s ease',
          }} />
        </div>
        <span style={{ fontSize: 12, fontWeight: 600, color: C.gray, letterSpacing: '0.05em' }}>
          {String(sectionIndex + 1).padStart(2, '0')}/14
        </span>
      </div>
    </AbsoluteFill>
  );
};

/* ─── Outro Sequence ─── */
const OutroSequence: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const fadeIn = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: 'clamp' });
  const titleScale = spring({ frame, fps, from: 0.8, to: 1, config: { damping: 12, stiffness: 60 } });
  const titleOpacity = interpolate(frame, [0, 25], [0, 1], { extrapolateRight: 'clamp' });
  const statsOpacity = interpolate(frame, [25, 45], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const ctaOpacity = interpolate(frame, [50, 70], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const ctaScale = spring({ frame: Math.max(0, frame - 50), fps, from: 0.8, to: 1, config: { damping: 10, stiffness: 80 } });

  return (
    <AbsoluteFill style={{
      background: `radial-gradient(ellipse at 50% 50%, #1a1a2e 0%, ${C.bg} 70%)`,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      fontFamily: fontStack, opacity: fadeIn,
    }}>
      {/* Multiple glows */}
      <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: `radial-gradient(circle, ${C.blue}10 0%, transparent 65%)`, top: '25%', left: '35%', transform: 'translate(-50%, -50%)' }} />
      <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: `radial-gradient(circle, ${C.purple}08 0%, transparent 65%)`, top: '60%', left: '65%', transform: 'translate(-50%, -50%)' }} />

      {/* Logo */}
      <div style={{
        width: 70, height: 70, borderRadius: 18, background: C.blue,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: `0 10px 40px ${C.blue}40`,
        marginBottom: 30, opacity: titleOpacity,
        transform: `scale(${titleScale})`,
      }}>
        <span style={{ fontSize: 32, fontWeight: 700, color: '#fff' }}>E</span>
      </div>

      {/* Title */}
      <div style={{
        fontSize: 52, fontWeight: 700, color: C.white,
        textAlign: 'center', letterSpacing: '-1px', lineHeight: 1.15,
        opacity: titleOpacity, transform: `scale(${titleScale})`,
      }}>
        The Future of<br />
        <span style={{ color: C.blue }}>School Management</span>
      </div>

      {/* Stats row */}
      <div style={{
        display: 'flex', gap: 40, marginTop: 40, opacity: statsOpacity,
      }}>
        {[
          { val: '14', label: 'Features' },
          { val: '30', label: 'Screens' },
          { val: '∞', label: 'Possibilities' },
        ].map((s) => (
          <div key={s.label} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 40, fontWeight: 700, color: C.white, letterSpacing: '-1px' }}>{s.val}</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: C.gray, letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{
        marginTop: 50, padding: '16px 40px', borderRadius: 16,
        background: `linear-gradient(135deg, ${C.blue}, #005bb5)`,
        fontSize: 20, fontWeight: 700, color: '#fff', letterSpacing: '-0.2px',
        boxShadow: `0 10px 40px ${C.blue}40`,
        opacity: ctaOpacity, transform: `scale(${ctaScale})`,
      }}>
        Get Started Free →
      </div>

      {/* URL */}
      <div style={{
        marginTop: 20, fontSize: 15, color: C.gray,
        opacity: ctaOpacity, letterSpacing: '0.02em',
      }}>
        edullent.com
      </div>
    </AbsoluteFill>
  );
};

/* ═══════════════════════════════
   MAIN COMPOSITION
═══════════════════════════════ */
export const ProductVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: C.bg }}>
      {/* Intro: 0 → 90 frames (3 sec) */}
      <Sequence from={0} durationInFrames={INTRO_DUR}>
        <IntroSequence />
      </Sequence>

      {/* 14 Sections: each 110 frames (~3.67 sec) */}
      {sections.map((section, i) => (
        <Sequence
          key={section.label}
          from={INTRO_DUR + i * SECTION_DUR}
          durationInFrames={SECTION_DUR}
        >
          <SectionShowcase section={section} sectionIndex={i} />
        </Sequence>
      ))}

      {/* Outro: last 170 frames (~5.67 sec) */}
      <Sequence from={INTRO_DUR + sections.length * SECTION_DUR} durationInFrames={OUTRO_DUR}>
        <OutroSequence />
      </Sequence>
    </AbsoluteFill>
  );
};
