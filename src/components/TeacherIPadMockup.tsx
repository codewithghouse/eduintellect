/**
 * Static iPad Pro (landscape) mockup showing the Teacher Dashboard
 * desktop view — full sidebar + hero + stat cards + leaderboard cards +
 * today's classes + pending tasks + critical students + AI insight.
 *
 * 100% standalone: no real data, no imports from teacher-dashboard.
 * Pure CSS-in-JS reproduction with hardcoded dummy content.
 */

import { useRef, useState } from 'react';

const TeacherIPadMockup = () => {
  const [isHovered, setIsHovered] = useState(false);
  const ipadRef = useRef<HTMLDivElement>(null);

  // 3D tilt — directly mutates DOM transform so React doesn't re-render 60×/sec.
  // We only apply 3D transform / perspective WHEN HOVERED. In rest state the
  // transform is `none` so the browser composites a plain 2D layer (no
  // sub-pixel filtering, sharp text). Same trick keeps the iPad crisp at rest.
  const handle3DEnter = () => {
    setIsHovered(true);
    const el = ipadRef.current;
    if (!el) return;
    el.style.transition =
      'transform 0.10s cubic-bezier(0.2,0.8,0.2,1), box-shadow 0.45s cubic-bezier(0.16,1,0.3,1)';
    // Promote to GPU layer just before the 3D transform — keeps it sharp
    el.style.transformStyle = 'preserve-3d';
    el.style.backfaceVisibility = 'hidden';
    el.style.willChange = 'transform';
  };
  const handle3DMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ipadRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotX = (((y / rect.height) - 0.5) * -7).toFixed(2);
    const rotY = (((x / rect.width) - 0.5) * 9).toFixed(2);
    // Bigger perspective (2400px) = less projection distortion = sharper feel.
    // No scale — keeping pixels at integer ratios stays crisp.
    el.style.transform = `perspective(2400px) rotateX(${rotX}deg) rotateY(${rotY}deg) translate3d(0, -6px, 0)`;
  };
  const handle3DLeave = () => {
    setIsHovered(false);
    const el = ipadRef.current;
    if (!el) return;
    el.style.transition =
      'transform 0.6s cubic-bezier(0.16,1,0.3,1), box-shadow 0.45s cubic-bezier(0.16,1,0.3,1)';
    el.style.transform = 'none';
    // Drop the 3D layer back to plain 2D after the leave animation finishes
    // so rest-state text is rendered crisply on the regular compositor.
    window.setTimeout(() => {
      if (!el || el.matches(':hover')) return;
      el.style.transformStyle = 'flat';
      el.style.willChange = 'auto';
    }, 650);
  };

  // ── Brand tokens (mirror teacher dashboard, no external dep) ─────
  const NAVY = '#1e3272';
  const NAVY_DEEP = '#001040';
  const BLUE = '#0055FF';
  const TT1 = '#001040';
  const TT3 = '#5070B0';
  const TT4 = '#99AACC';
  const GREEN = '#00C853';
  const RED = '#FF3355';
  const ORANGE = '#FF8800';
  const VIOLET = '#0044CC';
  const FONT = "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif";

  // Sidebar nav data — mirrors real teacher dashboard's 6 sections / 19 items
  const navSections: { title: string; items: { label: string; icon: string; active?: boolean }[] }[] = [
    { title: 'Overview', items: [{ label: 'Dashboard', icon: 'dashboard', active: true }] },
    {
      title: 'Classroom',
      items: [
        { label: 'My Classes', icon: 'book' },
        { label: 'Students', icon: 'users' },
        { label: 'Attendance', icon: 'check' },
        { label: 'Behaviour', icon: 'star' },
      ],
    },
    {
      title: 'Academics',
      items: [
        { label: 'Assignments', icon: 'file' },
        { label: 'Tests & Exams', icon: 'cap' },
        { label: 'Exam Generator', icon: 'sheet' },
        { label: 'Gradebook', icon: 'mark' },
        { label: 'Syllabus', icon: 'lib' },
        { label: 'Concept Mastery', icon: 'brain' },
      ],
    },
    {
      title: 'AI & Insights',
      items: [
        { label: 'Lesson Planner', icon: 'spark' },
        { label: 'Summarize', icon: 'scroll' },
        { label: 'Risks & Alerts', icon: 'alert' },
        { label: 'Leaderboard', icon: 'trophy' },
        { label: 'Reports', icon: 'chart' },
      ],
    },
    {
      title: 'Communication',
      items: [
        { label: 'Parent Notes', icon: 'msg' },
        { label: 'Principal Notes', icon: 'school' },
      ],
    },
    { title: 'Account', items: [{ label: 'Settings', icon: 'gear' }] },
  ];

  return (
    // OUTER iPad bezel — landscape, modern flat (iPad Pro M4 style).
    // Hover: 3D tilt that follows the cursor + bluish glow shadow.
    <div
      ref={ipadRef}
      onMouseEnter={handle3DEnter}
      onMouseMove={handle3DMove}
      onMouseLeave={handle3DLeave}
      style={{
        width: '100%',
        aspectRatio: '1.43 / 1',
        background: '#1c1c1e',
        borderRadius: 38,
        padding: 14,
        boxShadow: isHovered
          ? '0 0 0 1.5px rgba(0,85,255,0.45), 0 0 40px rgba(0,85,255,0.28), 0 30px 80px rgba(0,85,255,0.30), 0 80px 160px rgba(0,85,255,0.22)'
          : '0 0 0 1.5px #2c2c2e, 0 30px 80px rgba(15,23,42,0.25), 0 80px 160px rgba(15,23,42,0.18)',
        // No transform / perspective in rest state — keeps 2D compositing
        // crisp. 3D transform is only applied via JS on hover.
        transition: 'box-shadow 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
        cursor: 'default',
        position: 'relative',
        fontFamily: FONT,
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      }}
    >
      {/* Camera dot */}
      <div
        style={{
          position: 'absolute',
          top: 6,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 5,
          height: 5,
          borderRadius: '50%',
          background: '#3a3a3c',
        }}
      />

      {/* SCREEN */}
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#EEF4FF',
          borderRadius: 26,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* ───── Top Header ───── */}
        <div
          style={{
            height: 50,
            background: '#fff',
            borderBottom: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingLeft: 14,
            paddingRight: 14,
            flexShrink: 0,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: 8,
                background: NAVY,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
                <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
              </svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1, minWidth: 0 }}>
              <span style={{ fontSize: 11, fontWeight: 500, color: NAVY, letterSpacing: '0.06em', textTransform: 'uppercase' as const }}>
                Edullent High
              </span>
              <span style={{ fontSize: 7, fontWeight: 500, color: '#94a3b8', letterSpacing: '0.18em', textTransform: 'uppercase' as const, marginTop: 2 }}>
                English
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ position: 'relative', padding: 4 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 01-3.46 0" />
              </svg>
              <span style={{ position: 'absolute', top: 4, right: 4, width: 5, height: 5, background: '#ef4444', borderRadius: '50%' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', lineHeight: 1 }}>
              <span style={{ fontSize: 10, fontWeight: 500, color: '#0f172a' }}>Aryan Reddy</span>
              <span style={{ fontSize: 7, fontWeight: 500, color: '#64748b', textTransform: 'uppercase' as const, letterSpacing: '0.06em', marginTop: 2 }}>Teacher</span>
            </div>
            <div
              style={{
                width: 26,
                height: 26,
                borderRadius: '50%',
                background: NAVY,
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 10,
                fontWeight: 500,
                boxShadow: '0 2px 6px rgba(30,50,114,0.25)',
              }}
            >
              AR
            </div>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
          </div>
        </div>

        {/* ───── Body: Sidebar + Main ───── */}
        <div style={{ flex: 1, display: 'flex', overflow: 'hidden', minHeight: 0 }}>
          {/* SIDEBAR — full 6 sections, scroll if too tall */}
          <div style={{ width: 175, flexShrink: 0, padding: '6px 0 6px 6px' }}>
            <div
              style={{
                width: '100%',
                height: '100%',
                background: '#fff',
                borderRadius: 12,
                boxShadow: '0 6px 20px rgba(15,23,42,0.06), 0 1px 3px rgba(15,23,42,0.04)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
              }}
            >
              <div style={{ flex: 1, padding: '10px 6px', overflowY: 'auto', minHeight: 0 }}>
                {navSections.map((sec, sIdx) => (
                  <div key={sec.title} style={{ marginTop: sIdx === 0 ? 0 : 10 }}>
                    <div
                      style={{
                        padding: '0 8px',
                        marginBottom: 4,
                        fontSize: 7,
                        fontWeight: 500,
                        color: '#94a3b8',
                        textTransform: 'uppercase' as const,
                        letterSpacing: '0.18em',
                      }}
                    >
                      {sec.title}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      {sec.items.map(item => (
                        <div
                          key={item.label}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 7,
                            padding: '5px 8px',
                            borderRadius: 7,
                            background: item.active ? NAVY : 'transparent',
                            color: item.active ? '#fff' : '#64748b',
                            fontSize: 9,
                            fontWeight: 500,
                            letterSpacing: '-0.05px',
                            transform: item.active ? 'scale(1.02)' : 'scale(1)',
                            boxShadow: item.active ? '0 3px 8px rgba(30,50,114,0.18)' : 'none',
                          }}
                        >
                          <NavIcon name={item.icon} active={!!item.active} />
                          <span>{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ padding: 8, borderTop: '1px solid #f1f5f9' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 7,
                    padding: '6px 8px',
                    borderRadius: 7,
                    color: '#f43f5e',
                    fontSize: 9,
                    fontWeight: 500,
                  }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1="21" y1="12" x2="9" y2="12" />
                  </svg>
                  Sign Out
                </div>
              </div>
            </div>
          </div>

          {/* MAIN CONTENT — scrolls vertically */}
          <div style={{ flex: 1, padding: 10, overflowY: 'auto', minWidth: 0 }}>
            {/* Hero — attendance gradient banner */}
            <div
              style={{
                width: '100%',
                borderRadius: 14,
                padding: '14px 16px',
                background: `linear-gradient(135deg, ${NAVY_DEEP} 0%, #001A66 35%, #0044CC 70%, ${BLUE} 100%)`,
                color: '#fff',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 6px 18px rgba(0,51,204,0.22)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: -30,
                  right: -30,
                  width: 110,
                  height: 110,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 65%)',
                  pointerEvents: 'none',
                }}
              />
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10, position: 'relative', zIndex: 2 }}>
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 9,
                    background: 'rgba(255,255,255,0.14)',
                    border: '0.5px solid rgba(255,255,255,0.22)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3v18h18" />
                    <path d="M7 14l4-4 4 4 5-5" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: 7, fontWeight: 500, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>Attendance Rate</div>
                  <div style={{ fontSize: 8, fontWeight: 400, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>Last 30 days · All classes</div>
                </div>
                <div
                  style={{
                    marginLeft: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                    padding: '3px 9px',
                    borderRadius: 999,
                    background: 'rgba(0,232,102,0.18)',
                    border: '0.5px solid rgba(0,232,102,0.5)',
                    color: '#6FFFAA',
                    fontSize: 8,
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                  }}
                >
                  <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#00FF88', boxShadow: '0 0 5px #00FF88' }} />
                  STRONG
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 3, position: 'relative', zIndex: 2 }}>
                <span style={{ fontSize: 44, fontWeight: 300, lineHeight: 1, letterSpacing: '-2px' }}>90.7</span>
                <span style={{ fontSize: 22, fontWeight: 300, color: 'rgba(255,255,255,0.7)', letterSpacing: '-0.8px' }}>%</span>
                <div style={{ marginLeft: 'auto', display: 'flex', gap: 3 }}>
                  {[
                    { v: 4, l: 'CLASSES' },
                    { v: 3, l: 'AT-RISK' },
                    { v: 0, l: 'PENDING' },
                  ].map(x => (
                    <div
                      key={x.l}
                      style={{
                        background: 'rgba(255,255,255,0.08)',
                        borderRadius: 7,
                        padding: '5px 8px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        minWidth: 44,
                      }}
                    >
                      <span style={{ fontSize: 13, fontWeight: 400, letterSpacing: '-0.3px' }}>{x.v}</span>
                      <span style={{ fontSize: 6, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.12em', marginTop: 1 }}>{x.l}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 4 Stat cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 7, marginTop: 8 }}>
              {[
                { label: 'Attendance Rate', val: '90.7%', sub: '↑ Strong · 30d', color: BLUE, bg: 'linear-gradient(135deg, #DEE6F8 0%, #F8FAFE 100%)', border: 'rgba(0,85,255,0.10)', subColor: GREEN },
                { label: 'Pending Grading', val: '0', sub: '✓ All caught up', color: ORANGE, bg: 'linear-gradient(135deg, #FFF6E8 0%, #FFEED4 100%)', border: 'rgba(255,136,0,0.14)', subColor: GREEN },
                { label: 'At-Risk', val: '3', sub: '● Need outreach', color: RED, bg: 'linear-gradient(135deg, #FFEEF0 0%, #FFE2E6 100%)', border: 'rgba(255,51,85,0.14)', subColor: RED },
                { label: 'Classes Today', val: '4', sub: '● 1 in progress', color: VIOLET, bg: 'linear-gradient(135deg, #F2EBFF 0%, #E8DEFC 100%)', border: 'rgba(0,85,255,0.12)', subColor: VIOLET },
              ].map(c => (
                <div
                  key={c.label}
                  style={{
                    background: c.bg,
                    border: `0.5px solid ${c.border}`,
                    borderRadius: 11,
                    padding: '8px 10px',
                    boxShadow: '0 4px 12px rgba(20,40,90,0.06)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div style={{ width: 22, height: 22, borderRadius: 7, background: `${c.color}1F`, color: c.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 5 }}>
                    <StatIcon label={c.label} />
                  </div>
                  <div style={{ fontSize: 6, fontWeight: 500, color: c.color, letterSpacing: '0.14em', textTransform: 'uppercase' as const, marginBottom: 3 }}>
                    {c.label}
                  </div>
                  <div style={{ fontSize: 18, fontWeight: 300, color: TT1, letterSpacing: '-0.8px', lineHeight: 1 }}>{c.val}</div>
                  <div style={{ fontSize: 7, fontWeight: 500, color: c.subColor, marginTop: 3 }}>{c.sub}</div>
                  <div style={{ position: 'absolute', right: 6, bottom: 4, color: c.color, opacity: 0.15 }}>
                    <StatIcon label={c.label} size={28} />
                  </div>
                </div>
              ))}
            </div>

            {/* Leaderboard entry cards (2-col) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 7, marginTop: 8 }}>
              {[
                { label: 'Class Leaderboard', sub: 'See how students rank this week', iconBg: BLUE, icon: 'trophy' },
                { label: 'Teacher Rankings', sub: "You're #3 in your branch this week", iconBg: VIOLET, icon: 'medal' },
              ].map(card => (
                <div
                  key={card.label}
                  style={{
                    background: '#fff',
                    border: '0.5px solid rgba(0,85,255,0.07)',
                    borderRadius: 11,
                    padding: '9px 10px',
                    boxShadow: '0 4px 12px rgba(20,40,90,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 9,
                  }}
                >
                  <div
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 9,
                      background: `linear-gradient(135deg, ${card.iconBg}, ${card.iconBg}DD)`,
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: `0 3px 9px ${card.iconBg}44`,
                    }}
                  >
                    <LBIcon name={card.icon} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 7, fontWeight: 500, color: TT3, letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 2 }}>
                      {card.label}
                    </div>
                    <div style={{ fontSize: 8, fontWeight: 500, color: TT3, lineHeight: 1.3 }}>
                      {card.sub}
                    </div>
                  </div>
                  <span style={{ fontSize: 12, color: BLUE, lineHeight: 1 }}>›</span>
                </div>
              ))}
            </div>

            {/* Today's Classes + Branch Rank (2-col) */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 7, marginTop: 8 }}>
              <div
                style={{
                  background: '#fff',
                  borderRadius: 11,
                  padding: 10,
                  boxShadow: '0 4px 12px rgba(20,40,90,0.05)',
                  border: '0.5px solid rgba(0,85,255,0.07)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 7 }}>
                  <div style={{ width: 22, height: 22, borderRadius: 7, background: BLUE, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                  <div style={{ fontSize: 9, fontWeight: 500, color: TT1, letterSpacing: '-0.15px' }}>Today's Classes</div>
                  <div style={{ marginLeft: 'auto', fontSize: 6, fontWeight: 500, color: BLUE, background: 'rgba(0,85,255,0.10)', padding: '2px 6px', borderRadius: 999 }}>
                    Mon · Apr 28
                  </div>
                </div>
                {[
                  { time: '09:00 AM', cls: 'Class 10B · English', room: 'Room 204', status: 'now' },
                  { time: '10:30 AM', cls: 'Class 9A · English', room: 'Room 117', status: 'next' },
                  { time: '12:00 PM', cls: 'Class 8B · English', room: 'Room 204', status: 'later' },
                  { time: '02:30 PM', cls: 'Class 7C · English', room: 'Room 117', status: 'later' },
                ].map((cls, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '5px 6px',
                      borderRadius: 7,
                      background: cls.status === 'now' ? 'rgba(0,200,83,0.07)' : 'transparent',
                      border: cls.status === 'now' ? '0.5px solid rgba(0,200,83,0.20)' : '0.5px solid transparent',
                      marginBottom: 2,
                    }}
                  >
                    <div style={{ fontSize: 7, fontWeight: 500, color: TT3, minWidth: 42 }}>{cls.time}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 8, fontWeight: 500, color: TT1 }}>{cls.cls}</div>
                      <div style={{ fontSize: 6, color: TT4, marginTop: 1 }}>{cls.room}</div>
                    </div>
                    {cls.status === 'now' && (
                      <div style={{ fontSize: 6, fontWeight: 500, color: GREEN, background: 'rgba(0,200,83,0.12)', padding: '2px 6px', borderRadius: 999, letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>
                        Live
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div
                style={{
                  background: `linear-gradient(135deg, ${NAVY_DEEP} 0%, ${NAVY} 100%)`,
                  color: '#fff',
                  borderRadius: 11,
                  padding: 10,
                  boxShadow: '0 6px 18px rgba(30,50,114,0.18)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{ position: 'absolute', top: -15, right: -15, width: 70, height: 70, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,170,0,0.2) 0%, transparent 65%)' }} />
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div style={{ fontSize: 6, fontWeight: 500, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.18em', textTransform: 'uppercase' as const, marginBottom: 4 }}>
                    Branch Rank
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 3 }}>
                    <span style={{ fontSize: 26, fontWeight: 300, color: '#FFD700', letterSpacing: '-1.2px', lineHeight: 1 }}>#3</span>
                    <span style={{ fontSize: 9, fontWeight: 400, color: 'rgba(255,255,255,0.55)' }}>/ 18</span>
                  </div>
                  <div style={{ fontSize: 7, color: 'rgba(255,255,255,0.7)', marginTop: 4 }}>
                    ↑ Up 2 spots this week
                  </div>
                  <div
                    style={{
                      marginTop: 7,
                      padding: '5px 6px',
                      background: 'rgba(255,255,255,0.06)',
                      borderRadius: 6,
                      fontSize: 7,
                      lineHeight: 1.4,
                      color: 'rgba(255,255,255,0.78)',
                    }}
                  >
                    <span style={{ color: '#FFD700' }}>Top tip:</span> Class 10B avg jumped 12% this week.
                  </div>
                </div>
              </div>
            </div>

            {/* Critical Students + Pending Tasks (2-col) */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7, marginTop: 8 }}>
              <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,0.05)', border: '0.5px solid rgba(255,51,85,0.10)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 7 }}>
                  <div style={{ width: 22, height: 22, borderRadius: 7, background: RED, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 21h20L12 2z" />
                      <line x1="12" y1="9" x2="12" y2="13" />
                      <line x1="12" y1="17" x2="12" y2="17" />
                    </svg>
                  </div>
                  <div style={{ fontSize: 9, fontWeight: 500, color: TT1, letterSpacing: '-0.15px' }}>Critical Students</div>
                  <div style={{ marginLeft: 'auto', fontSize: 6, fontWeight: 500, color: RED, background: 'rgba(255,51,85,0.10)', padding: '2px 6px', borderRadius: 999 }}>
                    3 NEW
                  </div>
                </div>
                {[
                  { name: 'Riya Sharma', cls: 'Class 10B · Roll 14', reason: 'Marks down 24%', tone: RED },
                  { name: 'Ankit Verma', cls: 'Class 9A · Roll 22', reason: 'Attendance < 60%', tone: RED },
                  { name: 'Sara Khan', cls: 'Class 8B · Roll 07', reason: '3 incidents · 7d', tone: ORANGE },
                ].map((s, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '5px 6px', borderRadius: 7, marginBottom: 2 }}>
                    <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#FFE2E6', color: '#8A0A22', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontWeight: 500 }}>
                      {s.name.split(' ').map(p => p[0]).join('')}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 8, fontWeight: 500, color: TT1, lineHeight: 1.2 }}>{s.name}</div>
                      <div style={{ fontSize: 6, color: TT4, marginTop: 1 }}>{s.cls}</div>
                    </div>
                    <div style={{ fontSize: 6, fontWeight: 500, color: s.tone, background: `${s.tone}1A`, padding: '2px 5px', borderRadius: 999, letterSpacing: '0.04em' }}>
                      {s.reason}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,0.05)', border: '0.5px solid rgba(255,136,0,0.10)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 7 }}>
                  <div style={{ width: 22, height: 22, borderRadius: 7, background: ORANGE, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="4" y="3" width="16" height="18" rx="2" />
                      <path d="M9 3v4h6V3" />
                      <path d="M9 13l2 2 4-4" />
                    </svg>
                  </div>
                  <div style={{ fontSize: 9, fontWeight: 500, color: TT1, letterSpacing: '-0.15px' }}>Pending Tasks</div>
                  <div style={{ marginLeft: 'auto', fontSize: 6, fontWeight: 500, color: ORANGE, background: 'rgba(255,136,0,0.10)', padding: '2px 6px', borderRadius: 999 }}>
                    4 OPEN
                  </div>
                </div>
                {[
                  { task: 'Grade Class 10B Mid-term', due: 'Due today', urgent: true },
                  { task: 'Submit Q3 lesson plan', due: 'Due tomorrow', urgent: true },
                  { task: 'Reply to 5 parent notes', due: 'Due in 3 days', urgent: false },
                  { task: 'Update syllabus (Ch. 6)', due: 'Due in 5 days', urgent: false },
                ].map((t, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '5px 6px', borderRadius: 7, marginBottom: 2 }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: t.urgent ? ORANGE : TT4, flexShrink: 0 }} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 8, fontWeight: 500, color: TT1, lineHeight: 1.2 }}>{t.task}</div>
                      <div style={{ fontSize: 6, color: t.urgent ? ORANGE : TT4, marginTop: 1, fontWeight: t.urgent ? 500 : 400 }}>{t.due}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Insight banner */}
            <div
              style={{
                marginTop: 8,
                background: `linear-gradient(135deg, ${VIOLET} 0%, #003ECC 100%)`,
                color: '#fff',
                borderRadius: 11,
                padding: '9px 12px',
                boxShadow: '0 6px 18px rgba(0,85,255,0.20)',
                display: 'flex',
                alignItems: 'center',
                gap: 9,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ position: 'absolute', top: -20, right: -20, width: 80, height: 80, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 65%)' }} />
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 9,
                  background: 'rgba(255,255,255,0.18)',
                  border: '0.5px solid rgba(255,255,255,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  zIndex: 2,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
                </svg>
              </div>
              <div style={{ flex: 1, minWidth: 0, zIndex: 2 }}>
                <div style={{ fontSize: 6, fontWeight: 500, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.18em', textTransform: 'uppercase' as const, marginBottom: 2 }}>
                  AI Insight
                </div>
                <div style={{ fontSize: 8, fontWeight: 400, color: '#fff', lineHeight: 1.4 }}>
                  Class 10B's <b style={{ fontWeight: 500 }}>Algebra mastery jumped 18%</b> this week — your re-teach plan is working. Try the same approach for <b style={{ fontWeight: 500 }}>Class 9A's Geometry gap</b>.
                </div>
              </div>
              <div style={{ fontSize: 6, fontWeight: 500, color: '#fff', background: 'rgba(255,255,255,0.18)', padding: '4px 8px', borderRadius: 999, letterSpacing: '0.08em', flexShrink: 0, zIndex: 2 }}>
                VIEW
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ───── Inline icon helpers ─────
const NavIcon = ({ name, active }: { name: string; active: boolean }) => {
  const stroke = active ? '#fff' : '#94a3b8';
  const props = {
    width: 11,
    height: 11,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke,
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  switch (name) {
    case 'dashboard':
      return <svg {...props}><rect x="3" y="3" width="7" height="9" rx="1.5" /><rect x="14" y="3" width="7" height="5" rx="1.5" /><rect x="14" y="12" width="7" height="9" rx="1.5" /><rect x="3" y="16" width="7" height="5" rx="1.5" /></svg>;
    case 'book':
      return <svg {...props}><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></svg>;
    case 'users':
      return <svg {...props}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /></svg>;
    case 'check':
      return <svg {...props}><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" /></svg>;
    case 'star':
      return <svg {...props}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" /></svg>;
    case 'file':
      return <svg {...props}><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>;
    case 'cap':
      return <svg {...props}><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>;
    case 'sheet':
      return <svg {...props}><rect x="4" y="3" width="16" height="18" rx="2" /><line x1="8" y1="9" x2="16" y2="9" /><line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="13" y2="17" /></svg>;
    case 'mark':
      return <svg {...props}><path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" /></svg>;
    case 'lib':
      return <svg {...props}><line x1="4" y1="4" x2="4" y2="20" /><line x1="9" y1="4" x2="9" y2="20" /><line x1="14" y1="4" x2="14" y2="20" /><line x1="19" y1="4" x2="19" y2="20" /></svg>;
    case 'brain':
      return <svg {...props}><path d="M9 2a3 3 0 00-3 3v.5A3.5 3.5 0 003 9v3a3 3 0 003 3v3a3 3 0 003 3h6a3 3 0 003-3v-3a3 3 0 003-3V9a3.5 3.5 0 00-3-3.5V5a3 3 0 00-3-3z" /></svg>;
    case 'spark':
      return <svg {...props}><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" /></svg>;
    case 'scroll':
      return <svg {...props}><path d="M8 21h8a4 4 0 004-4V8a3 3 0 00-3-3H7a3 3 0 00-3 3v9a4 4 0 004 4z" /><line x1="8" y1="9" x2="16" y2="9" /><line x1="8" y1="13" x2="14" y2="13" /></svg>;
    case 'alert':
      return <svg {...props}><path d="M12 2L2 21h20L12 2z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12" y2="17" /></svg>;
    case 'trophy':
      return <svg {...props}><path d="M6 9H4.5a2.5 2.5 0 010-5H6" /><path d="M18 9h1.5a2.5 2.5 0 000-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17a2 2 0 002 2v0a2 2 0 002-2v-2.34" /><path d="M18 2H6v7a6 6 0 0012 0V2z" /></svg>;
    case 'chart':
      return <svg {...props}><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>;
    case 'msg':
      return <svg {...props}><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>;
    case 'school':
      return <svg {...props}><path d="M3 11l9-8 9 8" /><path d="M5 10v10h14V10" /><rect x="9" y="14" width="6" height="6" /></svg>;
    case 'gear':
      return <svg {...props}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z" /></svg>;
    default:
      return <svg {...props}><circle cx="12" cy="12" r="9" /></svg>;
  }
};

const StatIcon = ({ label, size = 12 }: { label: string; size?: number }) => {
  const props = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  if (label.includes('Attendance')) {
    return <svg {...props}><rect x="3" y="13" width="4" height="8" rx="1" /><rect x="10" y="9" width="4" height="12" rx="1" /><rect x="17" y="5" width="4" height="16" rx="1" /></svg>;
  }
  if (label.includes('Grading')) {
    return <svg {...props}><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M9 3v4h6V3" /><path d="M8 12h8M8 16h6" /></svg>;
  }
  if (label.includes('Risk')) {
    return <svg {...props}><path d="M12 3L3 20h18L12 3z" /><line x1="12" y1="10" x2="12" y2="14" /><circle cx="12" cy="17" r="0.6" fill="currentColor" /></svg>;
  }
  return <svg {...props}><path d="M3 11l9-8 9 8" /><path d="M5 10v10h14V10" /><path d="M10 20v-6h4v6" /></svg>;
};

const LBIcon = ({ name }: { name: string }) => {
  const props = {
    width: 14,
    height: 14,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2.2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  if (name === 'trophy') {
    return <svg {...props}><path d="M6 9H4.5a2.5 2.5 0 010-5H6" /><path d="M18 9h1.5a2.5 2.5 0 000-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17a2 2 0 002 2v0a2 2 0 002-2v-2.34" /><path d="M18 2H6v7a6 6 0 0012 0V2z" /></svg>;
  }
  return <svg {...props}><path d="M12 2l2.4 5.4L20 8l-4 4 1 6-5-3-5 3 1-6-4-4 5.6-.6L12 2z" /></svg>;
};

export default TeacherIPadMockup;
