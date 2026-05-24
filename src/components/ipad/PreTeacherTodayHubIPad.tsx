/**
 * Static iPad mockup — Pre-Primary Teacher · Today (Home) surface.
 * Mirrors pre-primary-teacher-dashboard/src/pages/Home.tsx — greeting,
 * Care & Routine quick-actions row, slot timeline strip, attendance snapshot.
 */

import PrePrimaryTeacherIPadShell from './PrePrimaryTeacherIPadShell';

const PreTeacherTodayHubIPad = () => {
  const NAVY = '#1e3272';
  const PEACH = '#FB923C';
  const MINT = '#10B981';
  const BLUSH = '#EC4899';
  const SKY = '#0EA5E9';
  const BUTTER = '#F59E0B';
  const T1 = '#0F172A';
  const T3 = '#64748B';

  const quickActions = [
    { label: 'Attendance', helper: '11 / 12 in', color: NAVY, bg: '#E0E7FF', icon: 'check', emoji: '✅' },
    { label: 'Log Care',   helper: 'Diaper · Meals · Nap', color: PEACH, bg: '#FFEDD5', icon: 'leaf', emoji: '🍃' },
    { label: 'Add Note',   helper: 'Behaviour or milestone', color: BLUSH, bg: '#FCE7F3', icon: 'pencil', emoji: '💌' },
    { label: 'Photo Studio', helper: '3 photos pending consent', color: SKY,  bg: '#DBEAFE', icon: 'camera', emoji: '📸' },
  ];

  const slots = [
    { time: '08:30', name: 'Circle Time', status: 'done', tone: MINT },
    { time: '09:15', name: 'Snack & Wash', status: 'done', tone: MINT },
    { time: '10:00', name: 'Art Corner',   status: 'live', tone: PEACH },
    { time: '10:45', name: 'Nap Prep',     status: 'next', tone: SKY },
    { time: '11:30', name: 'Story Time',   status: 'planned', tone: T3 },
  ];

  return (
    <PrePrimaryTeacherIPadShell activePath="/">
      <div style={{ background: '#FFFBF5', flex: 1, overflowY: 'auto', minHeight: 0, padding: '10px 12px 12px', fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif" }}>
        {/* Greeting hero */}
        <div style={{
          background: 'linear-gradient(135deg, #FFF1E0 0%, #FCE7F3 55%, #DBEAFE 100%)',
          borderRadius: 16, padding: '14px 16px', marginBottom: 10,
          position: 'relative', overflow: 'hidden',
          boxShadow: '0 6px 16px rgba(251,146,60,0.10)',
        }}>
          <div aria-hidden style={{ position: 'absolute', right: 12, top: 8, fontSize: 28, opacity: 0.85 }}>☀️</div>
          <div style={{ fontSize: 6, fontWeight: 700, color: PEACH, letterSpacing: '0.18em', textTransform: 'uppercase' as const, marginBottom: 4 }}>
            Tuesday · 21 April · 8:42 AM
          </div>
          <div style={{ fontSize: 19, fontWeight: 800, color: T1, letterSpacing: '-0.5px', lineHeight: 1.08, marginBottom: 4 }}>
            Good morning, Priya 🌈
          </div>
          <div style={{ fontSize: 8.5, color: T3, fontWeight: 500, maxWidth: 320 }}>
            Bumblebee class is settling in. <strong style={{ color: T1 }}>11 of 12 children</strong> are here today — one parent has called in.
          </div>

          <div style={{ display: 'flex', gap: 7, marginTop: 10 }}>
            {[
              { v: '11/12', l: 'Present', c: MINT, e: '🌤️' },
              { v: '4',     l: 'Happy moods', c: BLUSH, e: '😊' },
              { v: '2',     l: 'Quiet today', c: SKY, e: '🌙' },
            ].map(s => (
              <div key={s.l} style={{
                flex: 1, background: '#fff', borderRadius: 10, padding: '6px 8px',
                boxShadow: '0 2px 8px rgba(15,23,42,0.06)',
              }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                  <span style={{ fontSize: 14, fontWeight: 800, color: s.c, letterSpacing: '-0.4px' }}>{s.v}</span>
                  <span style={{ fontSize: 9 }}>{s.e}</span>
                </div>
                <div style={{ fontSize: 6.5, color: T3, fontWeight: 600, marginTop: 1, letterSpacing: '0.04em', textTransform: 'uppercase' as const }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Section header — Quick actions */}
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 6 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 5 }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: T1, letterSpacing: '-0.2px' }}>Care &amp; Routine</span>
            <span style={{ fontSize: 6.5, color: T3, fontWeight: 600 }}>Tap to log</span>
          </div>
          <span style={{ fontSize: 6, color: PEACH, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>4 quick actions</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6, marginBottom: 10 }}>
          {quickActions.map(a => (
            <div key={a.label} style={{
              background: '#fff', borderRadius: 12, padding: '8px 9px',
              border: `0.5px solid ${a.color}22`,
              boxShadow: '0 3px 10px rgba(15,23,42,0.05)',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', right: -4, bottom: -8, fontSize: 30, opacity: 0.08 }}>{a.emoji}</div>
              <div style={{
                width: 24, height: 24, borderRadius: 7, background: a.bg, color: a.color,
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 6,
              }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                  {a.icon === 'check' && <><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" /></>}
                  {a.icon === 'leaf' && <><path d="M11 20a8 8 0 008-8V4h-8a8 8 0 100 16z" /><path d="M2 22c4-6 7-9 11-12" /></>}
                  {a.icon === 'pencil' && <><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 113 3L7 19l-4 1 1-4z" /></>}
                  {a.icon === 'camera' && <><path d="M3 7h4l2-3h6l2 3h4v12H3z" /><circle cx="12" cy="13" r="3.5" /></>}
                </svg>
              </div>
              <div style={{ fontSize: 8.5, fontWeight: 700, color: T1, letterSpacing: '-0.15px', marginBottom: 2 }}>{a.label}</div>
              <div style={{ fontSize: 6, color: T3, fontWeight: 500, lineHeight: 1.3 }}>{a.helper}</div>
            </div>
          ))}
        </div>

        {/* Slot timeline */}
        <div style={{ background: '#fff', borderRadius: 14, padding: '10px 12px', marginBottom: 10, boxShadow: '0 4px 14px rgba(15,23,42,0.06)' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 8 }}>
            <div>
              <div style={{ fontSize: 6, fontWeight: 700, color: PEACH, letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>Today's slots</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: T1, letterSpacing: '-0.2px' }}>2 done · 1 live · 2 to come</div>
            </div>
            <span style={{ fontSize: 6.5, fontWeight: 700, padding: '3px 7px', borderRadius: 999, background: `${PEACH}18`, color: PEACH, letterSpacing: '0.06em' }}>
              Art Corner · live
            </span>
          </div>

          <div style={{ display: 'flex', gap: 4 }}>
            {slots.map(s => {
              const isLive = s.status === 'live';
              return (
                <div key={s.time} style={{
                  flex: 1, borderRadius: 10, padding: '7px 7px 8px',
                  background: isLive
                    ? `linear-gradient(135deg, ${PEACH}1f, ${PEACH}10)`
                    : (s.status === 'done' ? '#F8FAFC' : '#fff'),
                  border: isLive ? `0.6px solid ${PEACH}44` : '0.5px solid #e2e8f0',
                  position: 'relative',
                }}>
                  <div style={{ fontSize: 6, color: T3, fontWeight: 700, letterSpacing: '0.08em', marginBottom: 2 }}>{s.time}</div>
                  <div style={{ fontSize: 8, fontWeight: 700, color: T1, letterSpacing: '-0.15px' }}>{s.name}</div>
                  <div style={{
                    marginTop: 5, fontSize: 5.5, fontWeight: 700, letterSpacing: '0.1em',
                    color: s.tone, textTransform: 'uppercase' as const,
                    display: 'flex', alignItems: 'center', gap: 3,
                  }}>
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: s.tone, boxShadow: isLive ? `0 0 6px ${s.tone}` : 'none' }} />
                    {s.status}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pickup snapshot */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 7 }}>
          <div style={{ background: '#fff', borderRadius: 12, padding: '9px 10px', boxShadow: '0 3px 10px rgba(15,23,42,0.05)', border: `0.5px solid ${MINT}22` }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <div style={{ fontSize: 8, fontWeight: 700, color: T1, letterSpacing: '-0.15px' }}>Pickup queue · 12:30 PM</div>
              <span style={{ fontSize: 5.5, fontWeight: 700, color: MINT, background: `${MINT}18`, padding: '2px 6px', borderRadius: 999, letterSpacing: '0.06em', textTransform: 'uppercase' as const }}>3 confirmed</span>
            </div>
            <div style={{ marginTop: 6, display: 'flex', flexDirection: 'column', gap: 4 }}>
              {[
                { name: 'Aarav', by: 'Mother · verified ID', tone: MINT },
                { name: 'Mira',  by: 'Father · verified ID', tone: MINT },
                { name: 'Ishaan',by: 'Grandparent · pending', tone: BUTTER },
              ].map(p => (
                <div key={p.name} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ width: 16, height: 16, borderRadius: '50%', background: `${p.tone}22`, color: p.tone, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 7, fontWeight: 700 }}>{p.name[0]}</div>
                  <span style={{ fontSize: 7.5, fontWeight: 700, color: T1 }}>{p.name}</span>
                  <span style={{ fontSize: 6.5, color: T3, fontWeight: 500 }}>{p.by}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: `linear-gradient(135deg, ${BUTTER}1f, ${PEACH}14)`, borderRadius: 12, padding: '9px 10px', position: 'relative', overflow: 'hidden' }}>
            <div aria-hidden style={{ position: 'absolute', right: -4, bottom: -10, fontSize: 28, opacity: 0.18 }}>🌟</div>
            <div style={{ fontSize: 6, fontWeight: 700, color: BUTTER, letterSpacing: '0.18em', textTransform: 'uppercase' as const, marginBottom: 3 }}>Highlight</div>
            <div style={{ fontSize: 8.5, fontWeight: 700, color: T1, letterSpacing: '-0.15px', lineHeight: 1.25 }}>
              4 milestones logged this week
            </div>
            <div style={{ fontSize: 6.5, color: T3, fontWeight: 500, marginTop: 3 }}>
              Cognitive +2 · Social +1 · Language +1
            </div>
          </div>
        </div>
      </div>
    </PrePrimaryTeacherIPadShell>
  );
};

export default PreTeacherTodayHubIPad;
