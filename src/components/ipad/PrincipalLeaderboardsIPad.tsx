/**
 * Static iPad mockup — Principal · Leaderboards.
 * Mirrors live page: 4 tab nav (Branches/Principals/Teachers/Students)
 * + StatBar + ranked rows with Gold/Silver/Bronze pool balls + AI insight panel.
 */

import PrincipalIPadShell from './PrincipalIPadShell';

const PrincipalLeaderboardsIPad = () => {
  const T1 = '#001040';
  const T3 = '#5070B0';
  const BLUE = '#0055FF';
  const GOLD = '#FFD700';
  const SILVER = '#C0C0C0';
  const BRONZE = '#CD7F32';
  const GREEN = '#34C759';
  const RED = '#FF453A';

  const ballColor = (rank: number) => {
    if (rank === 1) return GOLD;
    if (rank === 2) return SILVER;
    if (rank === 3) return BRONZE;
    return '#9BB5DD';
  };

  return (
    <PrincipalIPadShell activePath="/leaderboards">
      <div style={{ padding: 12 }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 9 }}>
          <div style={{ width: 26, height: 26, borderRadius: 8, background: `linear-gradient(135deg, ${BLUE}, #003ECC)`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 17 9 11 13 15 21 7" /><polyline points="14 7 21 7 21 14" /></svg>
          </div>
          <div>
            <div style={{ fontSize: 7, color: T3, fontWeight: 500, letterSpacing: '0.04em' }}>Edullent Public School · Week 18</div>
            <div style={{ fontSize: 12, fontWeight: 500, color: T1, letterSpacing: '-0.3px', lineHeight: 1, marginTop: 1 }}>Leaderboards</div>
          </div>
        </div>

        {/* Tab nav */}
        <div style={{ background: '#F1F5F9', borderRadius: 9, padding: 3, display: 'flex', gap: 2, marginBottom: 9 }}>
          {[
            { l: 'Branches', n: 4 },
            { l: 'Principals', n: 4, active: true },
            { l: 'Teachers', n: 32 },
            { l: 'Students', n: 487 },
          ].map(t => (
            <div key={t.l} style={{
              flex: 1, textAlign: 'center', padding: '5px 0',
              borderRadius: 7,
              background: t.active ? '#fff' : 'transparent',
              color: t.active ? BLUE : T3,
              fontSize: 7, fontWeight: 600,
              boxShadow: t.active ? '0 1px 3px rgba(15,23,42,0.08)' : 'none',
              letterSpacing: '0.04em',
            }}>
              {t.l} <span style={{ fontSize: 6, color: t.active ? T3 : '#94a3b8', marginLeft: 2 }}>· {t.n}</span>
            </div>
          ))}
        </div>

        {/* Stat bar */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 7, marginBottom: 9 }}>
          {[
            { l: 'Total Principals', v: '4', sub: 'Across network', c: BLUE },
            { l: 'Network Avg', v: '76.8', sub: 'Composite score', c: GREEN },
            { l: 'Your Rank', v: '#2', sub: 'of 4 · ↑ 1 spot', c: GOLD },
          ].map(c => (
            <div key={c.l} style={{ background: '#fff', border: `0.5px solid ${c.c}33`, borderRadius: 11, padding: '8px 10px', boxShadow: '0 2px 5px rgba(15,23,42,0.04)' }}>
              <div style={{ fontSize: 6, fontWeight: 600, color: c.c, letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 3 }}>{c.l}</div>
              <div style={{ fontSize: 18, fontWeight: 300, color: T1, letterSpacing: '-0.7px', lineHeight: 1 }}>{c.v}</div>
              <div style={{ fontSize: 6, fontWeight: 500, color: T3, marginTop: 4 }}>{c.sub}</div>
            </div>
          ))}
        </div>

        <div style={{ fontSize: 6, fontWeight: 500, color: T3, letterSpacing: '0.14em', textTransform: 'uppercase' as const, marginBottom: 5 }}>
          All Principals · Tap to expand analysis
        </div>

        {/* Ranked rows */}
        <div style={{ background: '#fff', borderRadius: 11, padding: 6, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)', marginBottom: 9 }}>
          {[
            { rank: 1, name: 'Rahul Mehta', branch: 'Bandra · 487 students', score: 84.2, mv: '+1', up: true, you: false },
            { rank: 2, name: 'Anjali Mehta', branch: 'Andheri · 412 students', score: 78.1, mv: '+1', up: true, you: true },
            { rank: 3, name: 'Vikas Sharma', branch: 'Powai · 356 students', score: 74.6, mv: '-1', up: false, you: false },
            { rank: 4, name: 'Sunita Reddy', branch: 'Jubilee · 298 students', score: 70.4, mv: '-1', up: false, you: false },
          ].map((r, i, arr) => (
            <div key={r.rank} style={{
              display: 'flex', alignItems: 'center', gap: 7,
              padding: '7px 6px',
              borderBottom: i < arr.length - 1 ? '0.5px solid #F1F5F9' : 'none',
              background: r.you ? `${BLUE}0A` : 'transparent',
              borderRadius: r.you ? 7 : 0,
              borderLeft: r.you ? `2.5px solid ${BLUE}` : 'none',
              paddingLeft: r.you ? 6 : 6,
            }}>
              <div style={{
                width: 22, height: 22, borderRadius: '50%',
                background: `radial-gradient(circle at 30% 30%, ${ballColor(r.rank)}, ${ballColor(r.rank)}AA)`,
                color: r.rank <= 3 ? '#fff' : T1,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 8, fontWeight: 700,
                boxShadow: `0 2px 6px ${ballColor(r.rank)}66, inset 0 1px 1.5px rgba(255,255,255,0.45)`,
              }}>{r.rank}</div>
              <div style={{ width: 22, height: 22, borderRadius: '50%', background: `${BLUE}1F`, color: BLUE, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 7, fontWeight: 600 }}>
                {r.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <div style={{ fontSize: 8, fontWeight: 600, color: T1, lineHeight: 1.1 }}>{r.name}</div>
                  {r.you && <span style={{ fontSize: 5, fontWeight: 700, color: '#fff', background: BLUE, padding: '1px 5px', borderRadius: 999, letterSpacing: '0.12em' }}>YOU</span>}
                </div>
                <div style={{ fontSize: 6, color: T3, marginTop: 1 }}>{r.branch}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 12, fontWeight: 400, color: T1, letterSpacing: '-0.4px', lineHeight: 1 }}>{r.score}</div>
                <div style={{ fontSize: 5, color: T3, letterSpacing: '0.14em', textTransform: 'uppercase' as const, marginTop: 2 }}>Composite</div>
              </div>
              <span style={{
                fontSize: 6, fontWeight: 600,
                color: r.up ? GREEN : RED,
                background: r.up ? `${GREEN}14` : `${RED}14`,
                padding: '2px 6px', borderRadius: 999, minWidth: 26, textAlign: 'center',
              }}>{r.up ? '↑' : '↓'} {r.mv}</span>
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={T3} strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
            </div>
          ))}
        </div>

        {/* AI Insight (Why #1) */}
        <div style={{ background: `linear-gradient(135deg, #001040 0%, #001A66 50%, ${BLUE} 100%)`, borderRadius: 11, padding: '10px 12px', color: '#fff', position: 'relative', overflow: 'hidden', marginBottom: 7 }}>
          <div style={{ position: 'absolute', top: -25, right: -25, width: 100, height: 100, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.10), transparent 65%)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 5 }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.7 5.3H19l-4.3 3.1 1.7 5.3-4.4-3.2-4.3 3.2 1.6-5.3L5 7.3h5.3z" /></svg>
            <div style={{ fontSize: 7, fontWeight: 600, color: 'rgba(255,255,255,0.85)', letterSpacing: '0.16em', textTransform: 'uppercase' as const }}>Why Bandra Wins</div>
          </div>
          <div style={{ fontSize: 8, lineHeight: 1.5, color: 'rgba(255,255,255,0.92)', marginBottom: 6 }}>
            <strong style={{ color: '#fff' }}>Rahul Mehta (Bandra)</strong> tops the network with 84.2 — driven by 92% attendance discipline and 8 teachers in 90+ band. <strong style={{ color: '#FFD27A' }}>You're 6.1 points behind</strong> — closing the gap needs +3 in faculty composite.
          </div>
          <div style={{ display: 'flex', gap: 5 }}>
            <div style={{ background: 'rgba(255,255,255,0.14)', fontSize: 6, fontWeight: 600, color: '#fff', padding: '4px 8px', borderRadius: 999, letterSpacing: '0.08em' }}>VIEW SOLUTIONS</div>
            <div style={{ background: 'rgba(255,255,255,0.08)', fontSize: 6, fontWeight: 600, color: '#fff', padding: '4px 8px', borderRadius: 999, letterSpacing: '0.08em' }}>COMPARE BRANCH</div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, fontSize: 6, fontWeight: 500, color: T3 }}>
          <svg width="9" height="9" viewBox="0 0 24 24" fill={BLUE}><path d="M12 2l1.7 5.3H19l-4.3 3.1 1.7 5.3-4.4-3.2-4.3 3.2 1.6-5.3L5 7.3h5.3z" /></svg>
          Live data · AI insights cached weekly
        </div>
      </div>
    </PrincipalIPadShell>
  );
};

export default PrincipalLeaderboardsIPad;
