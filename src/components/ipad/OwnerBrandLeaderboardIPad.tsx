/**
 * Static iPad mockup — Owner · Brand Leaderboard page.
 * Mirrors owner-dashboard/src/pages/owner/desktop/OwnerDashboardDesktop.tsx with mock data.
 *
 * Layout: Hero gradient strip with 5 KPIs → 2-col charts (composite bar + 6m trend lines)
 * → 3-col branch quick-glance cards → selected branch deep analysis with AI badge
 * → 3-col solutions row.
 */

import OwnerIPadShell from './OwnerIPadShell';

const OwnerBrandLeaderboardIPad = () => {
  const BLUE = '#0a84ff';
  const NAVY_DEEP = '#000A33';
  const NAVY = '#001A66';
  const T1 = '#1e294b';
  const T3 = '#64748b';
  const T4 = '#94a3b8';
  const EMERALD = '#10B981';
  const RED = '#ff3b30';
  const GOLD = '#ffcc00';
  const SILVER = '#A8A8B5';
  const BRONZE = '#CD7F32';
  const VIOLET = '#5856d6';

  const branches = [
    { rank: 1, name: 'Bandra', score: 91, students: 2140, teachers: 68, color: GOLD, trend: '+3.2', trendDir: 'up', context: 'Network leader' },
    { rank: 2, name: 'Powai', score: 84, students: 1820, teachers: 54, color: SILVER, trend: '+1.4', trendDir: 'up', context: 'Strong STEM' },
    { rank: 3, name: 'Andheri', score: 79, students: 1980, teachers: 62, color: BRONZE, trend: '0.0', trendDir: 'flat', context: 'Steady' },
    { rank: 4, name: 'Goregaon', score: 71, students: 1340, teachers: 41, color: BLUE, trend: '-1.8', trendDir: 'down', context: 'Att dipped' },
    { rank: 5, name: 'Thane', score: 64, students: 1140, teachers: 34, color: RED, trend: '-3.6', trendDir: 'down', context: 'Needs help' },
  ];

  const months = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
  const lines = [
    { name: 'Bandra', color: GOLD, data: [88, 89, 90, 91, 92, 91] },
    { name: 'Powai', color: VIOLET, data: [82, 83, 84, 85, 86, 84] },
    { name: 'Andheri', color: BLUE, data: [78, 79, 80, 79, 81, 79] },
    { name: 'Thane', color: RED, data: [70, 68, 66, 65, 63, 64] },
  ];

  const W = 240, H = 60;
  const min = 50, max = 100;
  const buildPts = (data: number[]) =>
    data.map((v, i) => `${((i / (data.length - 1)) * W).toFixed(1)},${(H - ((v - min) / (max - min)) * H).toFixed(1)}`).join(' ');

  return (
    <OwnerIPadShell activePath="/branch-leaderboard">
      <div style={{ flex: 1, padding: '0 0 12px', overflowY: 'auto', minHeight: 0 }}>
        {/* Hero gradient with 5 KPIs */}
        <div style={{
          background: `linear-gradient(135deg, ${NAVY_DEEP} 0%, ${NAVY} 35%, #0066cc 75%, ${BLUE} 100%)`,
          padding: '14px 14px 16px',
          color: '#fff',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: -30, right: -30, width: 120, height: 120, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,170,0,0.25) 0%, transparent 65%)' }} />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 4 }}>
              <svg width="9" height="9" viewBox="0 0 24 24" fill="#ffcc00"><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" stroke="#ffcc00" strokeWidth="2" /></svg>
              <span style={{ fontSize: 6, fontWeight: 600, color: '#ffcc00', letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>
                Edullent Group · October
              </span>
            </div>
            <h1 style={{ fontSize: 22, fontWeight: 300, letterSpacing: '-0.7px', lineHeight: 1.05, margin: 0 }}>
              Branch Leaderboard
            </h1>
            <div style={{ fontSize: 8.5, color: 'rgba(255,255,255,0.7)', marginTop: 3 }}>
              Composite-ranked across attendance, academics, and fee collection.
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8, marginTop: 10 }}>
              {[
                { label: 'Branches', val: '5' },
                { label: 'Students', val: '8,420' },
                { label: 'Teachers', val: '259' },
                { label: 'Network Avg', val: '78%', accent: '#ffcc00' },
                { label: 'At-Risk', val: '342', accent: '#FF8888' },
              ].map(k => (
                <div key={k.label}>
                  <div style={{ fontSize: 5.5, fontWeight: 500, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.14em', textTransform: 'uppercase' as const, marginBottom: 3 }}>{k.label}</div>
                  <div style={{ fontSize: 17, fontWeight: 300, letterSpacing: '-0.5px', lineHeight: 1, color: k.accent || '#fff' }}>{k.val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ padding: '10px 12px 0' }}>
          {/* 2-col charts */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 8, marginBottom: 8 }}>
            {/* Composite ranking bars */}
            <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 7 }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
                <div style={{ fontSize: 9, fontWeight: 500, color: T1 }}>Where each branch stands</div>
              </div>
              {branches.map((b, i) => (
                <div key={b.name} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '3px 0', borderBottom: i < branches.length - 1 ? '0.5px solid #F1F5F9' : 'none' }}>
                  <span style={{ fontSize: 6.5, fontWeight: 600, color: T4, minWidth: 9 }}>{b.rank}</span>
                  <span style={{ fontSize: 7, fontWeight: 500, color: T1, minWidth: 50 }}>{b.name}</span>
                  <div style={{ flex: 1, height: 8, background: '#F1F5F9', borderRadius: 3, position: 'relative', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${b.score}%`, background: `linear-gradient(90deg, ${b.color}, ${b.color}aa)`, borderRadius: 3 }} />
                    <div style={{ position: 'absolute', left: '78%', top: 0, height: '100%', width: 1, background: T4 }} />
                  </div>
                  <span style={{ fontSize: 7, fontWeight: 600, color: b.color, minWidth: 22, textAlign: 'right' }}>{b.score}%</span>
                </div>
              ))}
            </div>

            {/* Top branches over time */}
            <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 5 }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="2"><polyline points="3 17 9 11 13 15 21 7" /></svg>
                <div style={{ fontSize: 8.5, fontWeight: 500, color: T1 }}>Top branches over time</div>
              </div>
              <svg width="100%" height={H + 12} viewBox={`0 0 ${W} ${H + 12}`} preserveAspectRatio="none">
                {[0, 25, 50, 75, 100].map(g => (
                  <line key={g} x1="0" y1={H - (g / 100) * H} x2={W} y2={H - (g / 100) * H} stroke="#F1F5F9" strokeWidth="0.5" />
                ))}
                {lines.map(l => (
                  <polyline key={l.name} points={buildPts(l.data)} fill="none" stroke={l.color} strokeWidth="1.5" strokeLinecap="round" />
                ))}
              </svg>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 1, fontSize: 5, color: T4 }}>
                {months.map(m => <span key={m}>{m}</span>)}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 5 }}>
                {lines.map(l => (
                  <div key={l.name} style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: l.color }} />
                    <span style={{ fontSize: 5.5, fontWeight: 500, color: T3 }}>{l.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick-glance cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 6, marginBottom: 8 }}>
            {branches.map(b => (
              <div key={b.name} style={{
                background: '#fff', borderRadius: 9, padding: '7px 8px',
                boxShadow: '0 4px 12px rgba(20,40,90,0.06)',
                border: '0.5px solid rgba(0,85,255,0.07)',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
                  <div style={{ width: 14, height: 14, borderRadius: 4, background: `linear-gradient(135deg, ${b.color}, ${b.color}cc)`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 7, fontWeight: 600 }}>
                    {b.rank}
                  </div>
                  <div style={{ fontSize: 5.5, fontWeight: 600, color: b.trendDir === 'up' ? EMERALD : b.trendDir === 'down' ? RED : T4, background: b.trendDir === 'up' ? `${EMERALD}1a` : b.trendDir === 'down' ? `${RED}1a` : '#F1F5F9', padding: '1px 4px', borderRadius: 999 }}>
                    {b.trendDir === 'up' ? '↑' : b.trendDir === 'down' ? '↓' : '—'} {b.trend}
                  </div>
                </div>
                <div style={{ fontSize: 8, fontWeight: 500, color: T1, marginBottom: 1 }}>{b.name}</div>
                <div style={{ fontSize: 14, fontWeight: 300, color: b.color, letterSpacing: '-0.4px', lineHeight: 1, marginTop: 2 }}>{b.score}<span style={{ fontSize: 7, color: T4, marginLeft: 1 }}>%</span></div>
                <div style={{ fontSize: 5, color: T4, letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginTop: 1 }}>composite</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4, fontSize: 5.5, color: T3 }}>
                  <span><strong style={{ color: T1 }}>{b.students.toLocaleString()}</strong></span>
                  <span><strong style={{ color: T1 }}>{b.teachers}</strong> tch</span>
                </div>
              </div>
            ))}
          </div>

          {/* Selected branch — Thane (#5) showing why-not-top + solutions */}
          <div style={{ background: '#fff', borderRadius: 11, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: `1px solid ${RED}33`, overflow: 'hidden' }}>
            <div style={{
              background: `linear-gradient(135deg, ${RED} 0%, #DC2626 100%)`,
              padding: '8px 12px',
              color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: -20, right: -20, width: 80, height: 80, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 65%)' }} />
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ fontSize: 6, fontWeight: 500, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>Why at #5</div>
                <div style={{ fontSize: 13, fontWeight: 400, marginTop: 2 }}>Thane · 1,140 students</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 3, padding: '2px 6px', background: 'rgba(255,255,255,0.18)', borderRadius: 999 }}>
                  <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M12 2v4M12 18v4M5.6 5.6l2.1 2.1" /></svg>
                  <span style={{ fontSize: 5.5, fontWeight: 600, color: '#fff', letterSpacing: '0.04em' }}>EDULLENT AI · CACHED</span>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 16, fontWeight: 300, letterSpacing: '-0.5px', lineHeight: 1 }}>64%</div>
                  <div style={{ fontSize: 5, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginTop: 1 }}>Composite</div>
                </div>
              </div>
            </div>

            {/* Solutions row */}
            <div style={{ padding: 10 }}>
              <div style={{ fontSize: 5.5, fontWeight: 600, color: T4, letterSpacing: '0.14em', textTransform: 'uppercase' as const, marginBottom: 5 }}>Recommended Solutions</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
                {[
                  { num: '01', urgent: true, text: 'Deploy 4 senior teachers from Bandra (Math + Science) for Q4 reinforcement.' },
                  { num: '02', urgent: false, text: 'Launch AI Practice rollout — current adoption only 18% vs 82% at Bandra.' },
                  { num: '03', urgent: false, text: 'Schedule weekly principal review with regional ops head.' },
                ].map((s, i) => (
                  <div key={i} style={{ background: s.urgent ? `${RED}0d` : '#F8FAFE', borderRadius: 8, padding: 8, border: s.urgent ? `0.5px solid ${RED}33` : `0.5px solid ${BLUE}22` }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                      <span style={{ fontSize: 11, fontWeight: 300, color: s.urgent ? RED : BLUE, letterSpacing: '-0.3px' }}>{s.num}</span>
                      {s.urgent && (
                        <span style={{ fontSize: 5.5, fontWeight: 600, color: '#fff', background: RED, padding: '1.5px 5px', borderRadius: 999, display: 'flex', alignItems: 'center', gap: 2, letterSpacing: '0.04em' }}>
                          <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /><circle cx="12" cy="12" r="10" /></svg>
                          URGENT
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: 6.5, color: T1, lineHeight: 1.4 }}>{s.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </OwnerIPadShell>
  );
};

export default OwnerBrandLeaderboardIPad;
