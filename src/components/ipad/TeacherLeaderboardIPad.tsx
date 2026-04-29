/**
 * Static iPad mockup — Teacher · Class Leaderboard page.
 * Faithful pixel-shrink of teacher-dashboard/src/pages/Leaderboard.tsx (Students tab).
 *
 * Layout matches source:
 *   1. "Live · Teacher view" eyebrow + h1 "Class Leaderboard" + Class dropdown (right)
 *   2. Tab bar: Students (active) / Teachers
 *   3. Hero gradient card: class summary + 3 stat row + "View class breakdown" button
 *   4. Top students list with rank 1-3 special + rest
 *   5. "Need attention" divider + at-risk rows (red/amber tint)
 */

import IPadShellWithSidebar from './IPadShellWithSidebar';

const TeacherLeaderboardIPad = () => {
  const B1 = '#0055FF';
  const T1 = '#0B0F19';
  const T3 = '#6B7280';
  const T4 = '#9AA3B2';
  const ORANGE = '#FF8800';
  const ORANGE_DEEP = '#C26A00';
  const RED = '#FF453A';
  const RED_DEEP = '#C8261D';
  const GOLD = '#FFAA00';
  const SILVER = '#A8A8B5';
  const BRONZE = '#CD7F32';
  const HERO_GRAD = 'linear-gradient(135deg, #050C28 0%, #0A1A52 35%, #0D2BA8 75%, #1438D6 100%)';

  const topStudents = [
    { rank: 1, name: 'Diya Patel', initials: 'DP', composite: 94.2, marks: 96, att: 98 },
    { rank: 2, name: 'Aarav Sharma', initials: 'AS', composite: 91.8, marks: 92, att: 95 },
    { rank: 3, name: 'Vihaan Iyer', initials: 'VI', composite: 89.4, marks: 89, att: 94 },
    { rank: 4, name: 'Anaya Singh', initials: 'AN', composite: 86.1, marks: 85, att: 91 },
    { rank: 5, name: 'Aryan Reddy', initials: 'AR', composite: 84.5, marks: 86, att: 88 },
  ];

  const needAttention = [
    { rank: 23, name: 'Krish Mehta', initials: 'KM', composite: 64.2, marks: 68, att: 76, atRisk: false },
    { rank: 27, name: 'Riya Kapoor', initials: 'RK', composite: 52.8, marks: 54, att: 62, atRisk: true },
  ];

  const rankBg = (r: number) => r === 1 ? 'linear-gradient(135deg, #FFAA00, #FFD700)' : r === 2 ? 'linear-gradient(135deg, #A8A8B5, #D4D4DC)' : r === 3 ? 'linear-gradient(135deg, #CD7F32, #E89A4D)' : `${B1}1a`;
  const rankColor = (r: number) => r === 1 ? GOLD : r === 2 ? SILVER : r === 3 ? BRONZE : B1;

  return (
    <IPadShellWithSidebar activePath="/leaderboard">
      <div style={{ background: '#EEF4FF', flex: 1, overflowY: 'auto', minHeight: 0, padding: '10px 12px 12px', fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif" }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 9 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 3 }}>
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#10B981', boxShadow: '0 0 6px #10B981' }} />
              <span style={{ fontSize: 6, fontWeight: 700, color: T3, letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>Live · Teacher view</span>
            </div>
            <h1 style={{ fontSize: 22, fontWeight: 700, color: T1, letterSpacing: '-0.7px', lineHeight: 1.05, margin: 0 }}>Class Leaderboard</h1>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '6px 9px', borderRadius: 8, background: '#fff', border: `0.5px solid ${B1}1a`, boxShadow: '0 4px 10px rgba(0,85,255,0.06)' }}>
            <span style={{ fontSize: 5.5, fontWeight: 700, color: T4, letterSpacing: '0.14em', textTransform: 'uppercase' as const }}>Class</span>
            <span style={{ fontSize: 8, fontWeight: 700, color: B1, letterSpacing: '-0.15px' }}>10B</span>
            <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke={B1} strokeWidth="2.2"><polyline points="6 9 12 15 18 9" /></svg>
          </div>
        </div>

        {/* Tab bar */}
        <div style={{ display: 'flex', gap: 3, marginBottom: 9, padding: 3, borderRadius: 8, background: `${B1}0d`, border: `0.5px solid ${B1}1a` }}>
          <div style={{ flex: 1, padding: '5px 0', textAlign: 'center', borderRadius: 5, background: '#fff', boxShadow: '0 1px 3px rgba(0,85,255,0.10)' }}>
            <span style={{ fontSize: 7.5, fontWeight: 700, color: B1, letterSpacing: '-0.1px' }}>Students</span>
          </div>
          <div style={{ flex: 1, padding: '5px 0', textAlign: 'center' }}>
            <span style={{ fontSize: 7.5, fontWeight: 700, color: T3 }}>Teachers</span>
          </div>
        </div>

        {/* Hero gradient card */}
        <div style={{
          background: HERO_GRAD, borderRadius: 14, padding: '11px 13px',
          boxShadow: '0 12px 28px rgba(0,8,60,0.28)',
          marginBottom: 9, position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: '-40%', right: '-20%', width: '80%', height: '140%', background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 60%)' }} />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ marginBottom: 8 }}>
              <p style={{ fontSize: 5.5, fontWeight: 700, letterSpacing: '0.16em', color: 'rgba(255,255,255,0.55)', margin: '0 0 3px', textTransform: 'uppercase' as const }}>Class summary</p>
              <p style={{ fontSize: 14, fontWeight: 700, color: '#fff', margin: 0, letterSpacing: '-0.4px' }}>Class 10B · Mathematics</p>
              <p style={{ fontSize: 7, fontWeight: 500, color: 'rgba(255,255,255,0.6)', margin: '2px 0 0' }}>28 students · You're their teacher</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, padding: '8px 0', borderTop: '0.5px solid rgba(255,255,255,0.12)', borderBottom: '0.5px solid rgba(255,255,255,0.12)', marginBottom: 8 }}>
              <div style={{ flex: 1, textAlign: 'center' }}>
                <p style={{ fontSize: 5.5, fontWeight: 700, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.12em', textTransform: 'uppercase' as const, margin: '0 0 3px' }}>Class avg</p>
                <p style={{ fontSize: 14, fontWeight: 800, color: '#fff', margin: 0, letterSpacing: '-0.3px' }}>78.4</p>
              </div>
              <div style={{ width: 0.5, background: 'rgba(255,255,255,0.18)' }} />
              <div style={{ flex: 1, textAlign: 'center' }}>
                <p style={{ fontSize: 5.5, fontWeight: 700, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.12em', textTransform: 'uppercase' as const, margin: '0 0 3px' }}>Avg score</p>
                <p style={{ fontSize: 14, fontWeight: 800, color: '#fff', margin: 0, letterSpacing: '-0.3px' }}>82%</p>
              </div>
              <div style={{ width: 0.5, background: 'rgba(255,255,255,0.18)' }} />
              <div style={{ flex: 1, textAlign: 'center' }}>
                <p style={{ fontSize: 5.5, fontWeight: 700, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.12em', textTransform: 'uppercase' as const, margin: '0 0 3px' }}>Need help</p>
                <p style={{ fontSize: 14, fontWeight: 800, color: ORANGE, margin: 0, letterSpacing: '-0.3px' }}>4</p>
              </div>
            </div>

            <div style={{ height: 22, background: '#fff', borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, boxShadow: '0 3px 10px rgba(0,8,60,0.32)' }}>
              <span style={{ fontSize: 7.5, fontWeight: 700, color: B1, letterSpacing: '-0.1px' }}>View class breakdown</span>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke={B1} strokeWidth="2.4"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </div>
          </div>
        </div>

        {/* Student list card */}
        <div style={{ background: '#fff', borderRadius: 14, padding: '8px 9px', boxShadow: '0 6px 18px rgba(0,85,255,0.06)', border: `0.5px solid ${B1}14` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '3px 5px 7px', borderBottom: `0.5px solid ${B1}0d` }}>
            <span style={{ fontSize: 5.5, fontWeight: 700, color: T4, letterSpacing: '0.16em', textTransform: 'uppercase' as const }}>All students</span>
            <span style={{ fontSize: 6, fontWeight: 500, color: T3 }}>Tap any student for insights</span>
          </div>

          {topStudents.map((s, i) => (
            <div key={s.name} style={{
              display: 'flex', alignItems: 'center', gap: 7,
              padding: s.rank <= 3 ? '7px 5px' : '5px 5px',
              borderRadius: s.rank <= 3 ? 9 : 7,
              borderTop: i > 0 ? `0.5px solid ${B1}0d` : 'none',
            }}>
              {/* Rank badge */}
              <div style={{
                width: s.rank <= 3 ? 22 : 18, height: s.rank <= 3 ? 22 : 18,
                borderRadius: s.rank <= 3 ? 6 : 5,
                background: s.rank <= 3 ? rankBg(s.rank) : `${B1}0d`,
                color: s.rank <= 3 ? '#fff' : B1,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: s.rank <= 3 ? 8 : 7, fontWeight: 800,
                boxShadow: s.rank <= 3 ? `0 3px 7px ${rankColor(s.rank)}55` : 'none',
                flexShrink: 0,
              }}>
                {s.rank}
              </div>
              {/* Avatar */}
              <div style={{ width: s.rank <= 3 ? 22 : 18, height: s.rank <= 3 ? 22 : 18, borderRadius: '50%', background: `${B1}14`, color: B1, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 6, fontWeight: 700, flexShrink: 0 }}>
                {s.initials}
              </div>
              {/* Name + meta */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: 8, fontWeight: 700, color: T1, margin: 0, letterSpacing: '-0.15px' }}>{s.name}</p>
                <p style={{ fontSize: 5.5, fontWeight: 600, color: T3, margin: '1px 0 0' }}>Marks {s.marks} · Att {s.att}%</p>
              </div>
              {/* Composite score */}
              <span style={{ fontSize: 11, fontWeight: 800, color: T1, letterSpacing: '-0.3px' }}>{s.composite.toFixed(1)}</span>
            </div>
          ))}

          {/* Need attention divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 4px', margin: '3px 0' }}>
            <div style={{ flex: 1, height: 0.5, background: `${ORANGE}55` }} />
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, padding: '2px 7px', borderRadius: 999, background: `${ORANGE}1a`, border: `0.5px solid ${ORANGE}44` }}>
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: ORANGE }} />
              <span style={{ fontSize: 5.5, fontWeight: 700, color: ORANGE_DEEP, letterSpacing: '0.14em', textTransform: 'uppercase' as const }}>Need attention</span>
            </span>
            <div style={{ flex: 1, height: 0.5, background: `${ORANGE}55` }} />
          </div>

          {needAttention.map(s => (
            <div key={s.name} style={{
              display: 'flex', alignItems: 'center', gap: 7,
              padding: '7px 6px', borderRadius: 8, marginTop: 3,
              background: s.atRisk
                ? 'linear-gradient(90deg, rgba(255,69,58,0.08) 0%, rgba(255,69,58,0.04) 100%)'
                : 'linear-gradient(90deg, rgba(255,136,0,0.06) 0%, rgba(255,136,0,0.03) 100%)',
              border: `0.5px solid ${s.atRisk ? `${RED}40` : `${ORANGE}40`}`,
            }}>
              <div style={{ width: 20, height: 20, borderRadius: 5, background: s.atRisk ? `${RED}22` : `${ORANGE}22`, color: s.atRisk ? RED_DEEP : ORANGE_DEEP, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 7, fontWeight: 800, flexShrink: 0 }}>
                {s.rank}
              </div>
              <div style={{ width: 20, height: 20, borderRadius: '50%', background: s.atRisk ? `${RED}22` : `${ORANGE}22`, color: s.atRisk ? RED_DEEP : ORANGE_DEEP, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 6, fontWeight: 700, flexShrink: 0 }}>
                {s.initials}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: 8, fontWeight: 700, color: T1, margin: 0, letterSpacing: '-0.15px' }}>{s.name}</p>
                <p style={{ fontSize: 5.5, fontWeight: 700, color: s.atRisk ? RED : ORANGE, margin: '1px 0 0' }}>Marks {s.marks} · Att {s.att}%</p>
              </div>
              <span style={{ fontSize: 11, fontWeight: 800, color: s.atRisk ? RED : ORANGE, letterSpacing: '-0.3px' }}>{s.composite.toFixed(1)}</span>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div style={{ textAlign: 'center', marginTop: 9 }}>
          <p style={{ fontSize: 5.5, fontWeight: 500, color: T4, margin: 0, letterSpacing: '0.04em' }}>
            28 students · Live · Composite = 60% marks + 40% attendance
          </p>
        </div>
      </div>
    </IPadShellWithSidebar>
  );
};

export default TeacherLeaderboardIPad;
