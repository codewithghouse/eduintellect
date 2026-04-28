/**
 * Static iPad mockup — Principal · Teacher Leaderboard.
 * Mirrors live page: branch hero + 4 stat cards + period filter +
 * podium (top 3) + ranked rest list with movement indicators.
 */

import PrincipalIPadShell from './PrincipalIPadShell';

const PrincipalTeacherLeaderboardIPad = () => {
  const T1 = '#001040';
  const T3 = '#5070B0';
  const BLUE = '#0055FF';
  const NAVY = '#001040';
  const GOLD = '#FFD700';
  const SILVER = '#C0C0C0';
  const BRONZE = '#CD7F32';
  const GREEN = '#00C853';
  const RED = '#FF3355';

  return (
    <PrincipalIPadShell activePath="/teacher-leaderboard">
      <div style={{ padding: 12 }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 9 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
            <div style={{ width: 26, height: 26, borderRadius: 8, background: `linear-gradient(135deg, ${GOLD}, #FFAA00)`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 010-5H6" /><path d="M18 9h1.5a2.5 2.5 0 000-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17a2 2 0 002 2v0a2 2 0 002-2v-2.34" /><path d="M18 2H6v7a6 6 0 0012 0V2z" /></svg>
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 500, color: T1, letterSpacing: '-0.3px', lineHeight: 1 }}>Teacher Leaderboard</div>
              <div style={{ fontSize: 7, color: T3, marginTop: 2 }}>Auto-ranked by student outcomes + engagement</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 4 }}>
            {['This Term', 'This Month', 'All Time'].map((p, i) => (
              <div key={p} style={{
                fontSize: 7, fontWeight: 600, padding: '4px 9px', borderRadius: 999,
                background: i === 0 ? `linear-gradient(135deg, ${BLUE}, #003ECC)` : '#fff',
                color: i === 0 ? '#fff' : T1,
                border: i === 0 ? 'none' : '0.5px solid #e2e8f0',
                boxShadow: i === 0 ? '0 2px 5px rgba(0,85,255,0.25)' : 'none',
              }}>{p}</div>
            ))}
          </div>
        </div>

        {/* Branch hero */}
        <div style={{
          borderRadius: 11, padding: '11px 13px',
          background: `linear-gradient(135deg, ${NAVY} 0%, #001A66 50%, ${BLUE} 100%)`,
          color: '#fff', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 11,
          position: 'relative', overflow: 'hidden', boxShadow: '0 6px 18px rgba(0,8,60,0.22)',
        }}>
          <div style={{ position: 'absolute', top: -25, right: -25, width: 110, height: 110, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.10), transparent 65%)' }} />
          <div style={{ width: 32, height: 32, borderRadius: 9, background: 'rgba(255,255,255,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.7 5.3H19l-4.3 3.1 1.7 5.3-4.4-3.2-4.3 3.2 1.6-5.3L5 7.3h5.3z" /></svg>
          </div>
          <div style={{ flex: 1, position: 'relative' }}>
            <div style={{ fontSize: 7, fontWeight: 500, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.16em', textTransform: 'uppercase' as const }}>Branch Avg Score</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 5, marginTop: 3 }}>
              <span style={{ fontSize: 30, fontWeight: 300, lineHeight: 1, letterSpacing: '-1.2px' }}>78.4</span>
              <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.6)' }}>/100</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 14, position: 'relative' }}>
            {[
              { l: 'Total', v: '32' },
              { l: 'Top 90+', v: '8' },
              { l: 'Tier', v: 'Good' },
            ].map(s => (
              <div key={s.l}>
                <div style={{ fontSize: 5, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.12em', textTransform: 'uppercase' as const }}>{s.l}</div>
                <div style={{ fontSize: 13, fontWeight: 400, color: '#fff', marginTop: 2 }}>{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 stat cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 7, marginBottom: 9 }}>
          {[
            { l: 'Total Teachers', v: '32', c: BLUE, bg: 'linear-gradient(135deg, #DEE6F8, #F8FAFE)' },
            { l: 'Avg Performance', v: '78.4%', c: '#FF8800', bg: 'linear-gradient(135deg, #FFF6E8, #FFEED4)' },
            { l: 'Active', v: '29', c: BLUE, bg: 'linear-gradient(135deg, #E0E9FF, #F2F6FF)' },
            { l: 'Top Performer', v: 'P. Sharma', c: GOLD, bg: 'linear-gradient(135deg, #FFFBE0, #FFF6CC)' },
          ].map(c => (
            <div key={c.l} style={{ background: c.bg, border: `0.5px solid ${c.c}33`, borderRadius: 11, padding: '8px 10px' }}>
              <div style={{ fontSize: 6, fontWeight: 600, color: c.c, letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 3 }}>{c.l}</div>
              <div style={{ fontSize: c.v.length > 5 ? 12 : 18, fontWeight: c.v.length > 5 ? 500 : 300, color: T1, letterSpacing: '-0.6px', lineHeight: 1 }}>{c.v}</div>
            </div>
          ))}
        </div>

        {/* Podium */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr 1fr', gap: 7, marginBottom: 9, alignItems: 'end' }}>
          {[
            { rank: 2, name: 'Vikram Iyer', subj: 'Physics', score: 86, color: SILVER, ht: 78 },
            { rank: 1, name: 'Priya Sharma', subj: 'Math · Stats', score: 91, color: GOLD, ht: 96 },
            { rank: 3, name: 'Neha Roy', subj: 'English · Lit', score: 79, color: BRONZE, ht: 64 },
          ].map(p => (
            <div key={p.rank} style={{
              background: '#fff', borderRadius: 11, padding: '10px 8px', textAlign: 'center',
              boxShadow: '0 4px 12px rgba(20,40,90,0.07)',
              border: `1px solid ${p.color}55`,
              minHeight: p.ht + 60,
            }}>
              <div style={{
                width: 28, height: 28, borderRadius: '50%',
                background: `linear-gradient(135deg, ${p.color}, ${p.color}AA)`,
                color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 11, fontWeight: 700, margin: '0 auto 6px',
                boxShadow: `0 4px 10px ${p.color}55`,
              }}>{p.rank}</div>
              <div style={{ fontSize: 8, fontWeight: 600, color: T1 }}>{p.name}</div>
              <div style={{ fontSize: 6, color: T3, marginTop: 2 }}>{p.subj}</div>
              <div style={{ fontSize: 18, fontWeight: 300, color: p.color === GOLD ? '#B68900' : T1, marginTop: 6, letterSpacing: '-0.6px' }}>{p.score}</div>
              <div style={{ fontSize: 5, fontWeight: 600, color: T3, letterSpacing: '0.14em', textTransform: 'uppercase' as const }}>Composite</div>
            </div>
          ))}
        </div>

        {/* Ranked rest */}
        <div style={{ background: '#fff', borderRadius: 11, padding: 9, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
            <div style={{ fontSize: 8, fontWeight: 600, color: T1 }}>Ranked 4 → 12</div>
            <div style={{ marginLeft: 'auto', fontSize: 6, color: T3 }}>Movement vs last week</div>
          </div>
          {[
            { rank: 4, name: 'Arjun Khan', subj: 'Chemistry', score: 76, mv: '+2', up: true },
            { rank: 5, name: 'Meera Bose', subj: 'Biology', score: 74, mv: '-1', up: false },
            { rank: 6, name: 'Rahul Nair', subj: 'CompSci', score: 73, mv: '+3', up: true },
            { rank: 7, name: 'Anita Pillai', subj: 'History', score: 71, mv: '0', up: null },
            { rank: 8, name: 'Suresh Patil', subj: 'Hindi', score: 56, mv: '-4', up: false },
          ].map((r, i, arr) => (
            <div key={r.rank} style={{
              display: 'flex', alignItems: 'center', gap: 7,
              padding: '5px 4px',
              borderBottom: i < arr.length - 1 ? '0.5px solid #F1F5F9' : 'none',
            }}>
              <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#E0ECFF', color: BLUE, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 7, fontWeight: 600 }}>{r.rank}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 8, fontWeight: 600, color: T1, lineHeight: 1.1 }}>{r.name}</div>
                <div style={{ fontSize: 6, color: T3, marginTop: 1 }}>{r.subj}</div>
              </div>
              <div style={{ fontSize: 11, fontWeight: 400, color: T1, letterSpacing: '-0.4px' }}>{r.score}</div>
              <span style={{
                fontSize: 6, fontWeight: 600,
                color: r.up === null ? T3 : (r.up ? GREEN : RED),
                background: r.up === null ? '#F1F5F9' : (r.up ? `${GREEN}14` : `${RED}14`),
                padding: '2px 6px', borderRadius: 999, minWidth: 26, textAlign: 'center',
              }}>{r.up === true ? '↑' : r.up === false ? '↓' : '•'} {r.mv}</span>
            </div>
          ))}
        </div>
      </div>
    </PrincipalIPadShell>
  );
};

export default PrincipalTeacherLeaderboardIPad;