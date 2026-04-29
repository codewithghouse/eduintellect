/**
 * Static iPad mockup — Owner · Teacher Leaderboard page.
 * Mirrors owner-dashboard/src/pages/TeacherLeaderboard.tsx with mock data.
 *
 * Layout: 4 KPI cards → period tabs + branch filter
 * → 3-column gold/silver/bronze podium with crown on rank 1
 * → full network rankings table with reason badges + composite bars.
 */

import OwnerIPadShell from './OwnerIPadShell';

const OwnerTeacherLeaderboardIPad = () => {
  const BLUE = '#0055FF';
  const T1 = '#1e294b';
  const T3 = '#64748b';
  const T4 = '#94a3b8';
  const EMERALD = '#10B981';
  const VIOLET = '#7B3FF4';
  const GOLD = '#FFAA00';
  const SILVER = '#A8A8B5';
  const BRONZE = '#CD7F32';

  const podium = [
    { rank: 2, name: 'Rohan Khan', initials: 'RK', branch: 'Powai · Physics', score: 89, color: SILVER, bg: 'linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%)', reasons: ['Top NPS', 'Pass +12%'] },
    { rank: 1, name: 'Priya Iyer', initials: 'PI', branch: 'Bandra · Math', score: 92, color: GOLD, bg: 'linear-gradient(135deg, #FFF6E0 0%, #FFEDC4 100%)', reasons: ['Top NPS', 'Class Avg 91', 'Best Att'], crown: true },
    { rank: 3, name: 'Sneha Verma', initials: 'SV', branch: 'Andheri · English', score: 86, color: BRONZE, bg: 'linear-gradient(135deg, #FCE7C8 0%, #F4D6A0 100%)', reasons: ['Mentor', 'Pass 92%'] },
  ];

  const fullList = [
    { rank: 4, name: 'Arjun Pillai', initials: 'AP', branch: 'Goregaon', score: 81, reasons: ['Pass 88%'], move: 1 },
    { rank: 5, name: 'Meera Nair', initials: 'MN', branch: 'Thane', score: 76, reasons: ['Active'], move: -1 },
    { rank: 6, name: 'Vikram Patel', initials: 'VP', branch: 'Bandra', score: 68, reasons: ['Steady'], move: 0 },
    { rank: 7, name: 'Kavya Singh', initials: 'KS', branch: 'Powai', score: 58, reasons: ['Coaching'], move: -2 },
  ];

  return (
    <OwnerIPadShell activePath="/teacher-leaderboard">
      <div style={{ padding: '12px 14px 6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4 }}>
          <span style={{ width: 4, height: 4, borderRadius: 1, background: GOLD }} />
          <span style={{ fontSize: 7, fontWeight: 500, color: T3, letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>
            Owner · Leaderboard
          </span>
        </div>
        <h1 style={{ fontSize: 22, fontWeight: 300, color: T1, letterSpacing: '-0.7px', lineHeight: 1.05, margin: 0 }}>
          Teacher Leaderboard
        </h1>
        <div style={{ fontSize: 9, fontWeight: 400, color: T3, marginTop: 3 }}>
          Auto-ranked weekly by student outcomes + engagement.
        </div>
      </div>

      <div style={{ flex: 1, padding: '6px 12px 12px', overflowY: 'auto', minHeight: 0 }}>
        {/* Top controls — period + branch */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
          <div style={{ display: 'flex', background: '#fff', borderRadius: 8, padding: 2, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)' }}>
            {['Week', 'Month', 'Term'].map((p, i) => (
              <div key={p} style={{
                fontSize: 6.5, fontWeight: 500,
                padding: '4px 9px', borderRadius: 6,
                background: i === 1 ? `linear-gradient(135deg, ${BLUE}, #1166FF)` : 'transparent',
                color: i === 1 ? '#fff' : T3,
              }}>{p}</div>
            ))}
          </div>
          <div style={{ flex: 1 }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '4px 8px', background: '#fff', borderRadius: 8, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)' }}>
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke={T4} strokeWidth="2"><line x1="6" y1="3" x2="6" y2="15" /><circle cx="18" cy="6" r="3" /><circle cx="6" cy="18" r="3" /></svg>
            <span style={{ fontSize: 6.5, color: T1, fontWeight: 500 }}>All Branches</span>
            <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke={T4} strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
          </div>
        </div>

        {/* Podium — 3 cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr 1fr', gap: 7, marginBottom: 8, alignItems: 'flex-end' }}>
          {podium.map(p => (
            <div key={p.rank} style={{
              background: p.bg,
              borderRadius: 12,
              padding: p.crown ? '12px 10px' : '10px 9px',
              border: `0.5px solid ${p.color}55`,
              boxShadow: `0 8px 22px ${p.color}33`,
              position: 'relative',
              overflow: 'visible',
              marginTop: p.crown ? 0 : 8,
            }}>
              {/* Rank badge */}
              <div style={{ position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%)', width: 22, height: 22, borderRadius: '50%', background: `linear-gradient(135deg, ${p.color}, #fff 110%)`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700, boxShadow: `0 4px 10px ${p.color}66`, border: '1.5px solid #fff' }}>
                {p.rank}
              </div>
              {p.crown && (
                <div style={{ position: 'absolute', top: -22, left: '50%', transform: 'translateX(-50%)', fontSize: 14 }}>👑</div>
              )}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 8 }}>
                <div style={{ width: p.crown ? 36 : 30, height: p.crown ? 36 : 30, borderRadius: '50%', background: '#fff', border: `2px solid ${p.color}`, color: p.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: p.crown ? 11 : 9, fontWeight: 600, marginBottom: 5 }}>
                  {p.initials}
                </div>
                <div style={{ fontSize: p.crown ? 9 : 8, fontWeight: 500, color: T1, textAlign: 'center', lineHeight: 1.2 }}>{p.name}</div>
                <div style={{ fontSize: 5.5, color: T4, marginTop: 1, textAlign: 'center' }}>{p.branch}</div>
                <div style={{ fontSize: p.crown ? 18 : 15, fontWeight: 300, color: p.color, letterSpacing: '-0.5px', marginTop: 4, lineHeight: 1 }}>{p.score}%</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3, marginTop: 5, justifyContent: 'center' }}>
                  {p.reasons.map(r => (
                    <span key={r} style={{ fontSize: 5.5, fontWeight: 500, color: p.color, background: '#fff', padding: '1.5px 5px', borderRadius: 999, border: `0.5px solid ${p.color}33` }}>{r}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Search bar */}
        <div style={{ background: '#fff', borderRadius: 11, padding: 8, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '3px 8px', background: '#F8FAFE', borderRadius: 7, border: `0.5px solid ${BLUE}22`, flex: 1 }}>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={T4} strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            <span style={{ fontSize: 7, color: T4 }}>Search teachers…</span>
          </div>
          <span style={{ fontSize: 6, fontWeight: 500, color: BLUE, background: `${BLUE}1a`, padding: '3px 7px', borderRadius: 999 }}>259 total</span>
        </div>

        {/* Full rankings list */}
        <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 7 }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={VIOLET} strokeWidth="2"><polyline points="3 17 9 11 13 15 21 7" /></svg>
            <div style={{ fontSize: 9, fontWeight: 500, color: T1 }}>Network Rankings</div>
            <div style={{ marginLeft: 'auto', fontSize: 6, color: T4 }}>Movement vs last week</div>
          </div>
          {fullList.map((t, i) => (
            <div key={t.name} style={{ display: 'grid', gridTemplateColumns: '20px 22px 1fr 0.7fr 0.8fr 1fr 30px', gap: 6, alignItems: 'center', padding: '5px 0', borderBottom: i < fullList.length - 1 ? '0.5px solid #F1F5F9' : 'none' }}>
              <span style={{ fontSize: 7, fontWeight: 500, color: T4 }}>{t.rank}</span>
              <div style={{ width: 18, height: 18, borderRadius: '50%', background: `linear-gradient(135deg, ${BLUE}, ${VIOLET})`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 6, fontWeight: 600 }}>
                {t.initials}
              </div>
              <span style={{ fontSize: 7, fontWeight: 500, color: T1 }}>{t.name}</span>
              <span style={{ fontSize: 6.5, color: T3 }}>{t.branch}</span>
              <span style={{ fontSize: 5.5, fontWeight: 500, color: BLUE, background: `${BLUE}1a`, padding: '2px 5px', borderRadius: 999, textAlign: 'center', justifySelf: 'flex-start' }}>{t.reasons[0]}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <div style={{ flex: 1, height: 4, background: '#F1F5F9', borderRadius: 2, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${t.score}%`, background: t.score >= 80 ? EMERALD : t.score >= 60 ? BLUE : '#F59E0B', borderRadius: 2 }} />
                </div>
                <span style={{ fontSize: 6.5, fontWeight: 600, color: T1, minWidth: 22, textAlign: 'right' }}>{t.score}%</span>
              </div>
              <span style={{ fontSize: 7, fontWeight: 600, color: t.move > 0 ? EMERALD : t.move < 0 ? '#EF4444' : T4, textAlign: 'right' }}>
                {t.move > 0 ? `↑${t.move}` : t.move < 0 ? `↓${Math.abs(t.move)}` : '—'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </OwnerIPadShell>
  );
};

export default OwnerTeacherLeaderboardIPad;
