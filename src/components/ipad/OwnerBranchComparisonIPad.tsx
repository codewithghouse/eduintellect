/**
 * Static iPad mockup — Owner · Branches Comparison page.
 * Mirrors owner-dashboard/src/pages/BranchesComparison.tsx with mock data.
 *
 * Layout: 4 KPI cards → 2-col charts (composite ranking bar chart +
 * 6-month attendance trend) → 3-col branch quick-glance cards
 * → selected branch deep analysis with AI source badge + solutions row.
 */

import OwnerIPadShell from './OwnerIPadShell';

const OwnerBranchComparisonIPad = () => {
  const BLUE = '#0a84ff';
  const NAVY = '#001A66';
  const T1 = '#1e294b';
  const T3 = '#64748b';
  const T4 = '#94a3b8';
  const EMERALD = '#10B981';
  const RED = '#ff3b30';
  const GOLD = '#ffcc00';
  const SILVER = '#A8A8B5';
  const BRONZE = '#CD7F32';
  const GREEN_DARK = '#00833A';

  const branches = [
    { rank: 1, name: 'Bandra', city: 'Mumbai West', score: 91, students: 2140, teachers: 68, color: GOLD, trend: '+3.2', trendDir: 'up', context: 'AI-driven Math program rolled in Aug', selected: true },
    { rank: 2, name: 'Powai', city: 'Mumbai NE', score: 84, students: 1820, teachers: 54, color: SILVER, trend: '+1.4', trendDir: 'up', context: 'Strong English & STEM' },
    { rank: 3, name: 'Andheri', city: 'Mumbai West', score: 79, students: 1980, teachers: 62, color: BRONZE, trend: '0.0', trendDir: 'flat', context: 'Steady · NPS at 4.2' },
    { rank: 4, name: 'Goregaon', city: 'Mumbai NW', score: 71, students: 1340, teachers: 41, color: BLUE, trend: '-1.8', trendDir: 'down', context: 'Attendance dipped 4% in Sep' },
    { rank: 5, name: 'Thane', city: 'Thane', score: 64, students: 1140, teachers: 34, color: RED, trend: '-3.6', trendDir: 'down', context: 'Need teacher reinforcement' },
  ];

  const months = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
  const lines = [
    { name: 'Bandra', color: GOLD, data: [88, 89, 90, 91, 92, 91] },
    { name: 'Powai', color: BLUE, data: [82, 83, 84, 85, 86, 84] },
    { name: 'Andheri', color: VIOLET_LINE, data: [78, 79, 80, 79, 81, 79] },
    { name: 'Thane', color: RED, data: [70, 68, 66, 65, 63, 64] },
  ];

  const W = 240, H = 60;
  const min = 50, max = 100;
  const buildPts = (data: number[]) =>
    data.map((v, i) => `${((i / (data.length - 1)) * W).toFixed(1)},${(H - ((v - min) / (max - min)) * H).toFixed(1)}`).join(' ');

  return (
    <OwnerIPadShell activePath="/branches">
      <div style={{ padding: '12px 14px 6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4 }}>
          <span style={{ width: 4, height: 4, borderRadius: 1, background: BLUE }} />
          <span style={{ fontSize: 7, fontWeight: 500, color: T3, letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>
            Owner · Branches
          </span>
        </div>
        <h1 style={{ fontSize: 22, fontWeight: 300, color: T1, letterSpacing: '-0.7px', lineHeight: 1.05, margin: 0 }}>
          Branches Comparison
        </h1>
        <div style={{ fontSize: 9, fontWeight: 400, color: T3, marginTop: 3 }}>
          Cross-branch analytics · performance, attendance, financials.
        </div>
      </div>

      <div style={{ flex: 1, padding: '6px 12px 12px', overflowY: 'auto', minHeight: 0 }}>
        {/* 4 KPI cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 7, marginBottom: 8 }}>
          {[
            { label: 'Total Branches', val: '5', sub: 'Mumbai network', color: BLUE, bg: 'linear-gradient(135deg, #DEE6F8 0%, #F8FAFE 100%)' },
            { label: 'Total Students', val: '8,420', sub: '↑ 6% YoY', color: EMERALD, bg: 'linear-gradient(135deg, #E8FBEF 0%, #DAF6E4 100%)' },
            { label: 'Total Teachers', val: '259', sub: '34 new this term', color: VIOLET_LINE, bg: 'linear-gradient(135deg, #F2EBFF 0%, #E8DEFC 100%)' },
            { label: 'Network Avg', val: '78%', sub: '↑ 2.1% MoM', color: GOLD, bg: 'linear-gradient(135deg, #FFF6E0 0%, #FFEDC4 100%)' },
          ].map(c => (
            <div key={c.label} style={{ background: c.bg, border: `0.5px solid ${c.color}33`, borderRadius: 11, padding: '8px 10px' }}>
              <div style={{ fontSize: 6, fontWeight: 500, color: c.color, letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 4 }}>{c.label}</div>
              <div style={{ fontSize: 18, fontWeight: 300, color: T1, letterSpacing: '-0.7px', lineHeight: 1 }}>{c.val}</div>
              <div style={{ fontSize: 6, fontWeight: 500, color: c.color, marginTop: 3 }}>{c.sub}</div>
            </div>
          ))}
        </div>

        {/* 2-col charts */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 8, marginBottom: 8 }}>
          {/* Composite Ranking — horizontal bars */}
          <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 7 }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
              <div style={{ fontSize: 9, fontWeight: 500, color: T1 }}>Composite Ranking</div>
              <div style={{ marginLeft: 'auto', fontSize: 6, color: T4 }}>Network avg 78%</div>
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

          {/* 6-month attendance trend */}
          <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 5 }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="2"><polyline points="3 17 9 11 13 15 21 7" /></svg>
              <div style={{ fontSize: 8.5, fontWeight: 500, color: T1 }}>6-Month Trend</div>
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
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: l.color }} />
                  <span style={{ fontSize: 5.5, fontWeight: 500, color: T3 }}>{l.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Branch quick-glance cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 6, marginBottom: 8 }}>
          {branches.map(b => (
            <div key={b.name} style={{
              background: b.selected ? `linear-gradient(135deg, #fff 0%, #F8FAFE 100%)` : '#fff',
              borderRadius: 9, padding: '7px 8px',
              boxShadow: b.selected ? `0 6px 18px ${BLUE}30` : '0 4px 12px rgba(20,40,90,0.06)',
              border: b.selected ? `1px solid ${BLUE}66` : '0.5px solid rgba(0,85,255,0.07)',
              position: 'relative',
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
              <div style={{ fontSize: 5, color: T4, marginBottom: 5 }}>{b.city}</div>
              <div style={{ fontSize: 14, fontWeight: 300, color: b.color, letterSpacing: '-0.4px', lineHeight: 1 }}>{b.score}<span style={{ fontSize: 7, color: T4, marginLeft: 1 }}>%</span></div>
              <div style={{ fontSize: 5, color: T4, letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginTop: 1 }}>composite</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 5, fontSize: 5.5, color: T3 }}>
                <span><strong style={{ color: T1 }}>{b.students.toLocaleString()}</strong> stu</span>
                <span><strong style={{ color: T1 }}>{b.teachers}</strong> tch</span>
              </div>
            </div>
          ))}
        </div>

        {/* Selected branch — deep analysis */}
        <div style={{ background: '#fff', borderRadius: 11, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: `1px solid ${BLUE}33`, overflow: 'hidden' }}>
          {/* Header strip */}
          <div style={{
            background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 100%)`,
            padding: '8px 12px',
            color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', top: -20, right: -20, width: 80, height: 80, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,170,0,0.3) 0%, transparent 65%)' }} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ fontSize: 6, fontWeight: 500, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>Selected · Why #1</div>
              <div style={{ fontSize: 13, fontWeight: 400, marginTop: 2 }}>Bandra · Mumbai West</div>
              <div style={{ fontSize: 6, color: 'rgba(255,255,255,0.6)', marginTop: 1 }}>2,140 students · 68 teachers</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, position: 'relative', zIndex: 2 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 3, padding: '2px 6px', background: 'rgba(255,255,255,0.15)', borderRadius: 999, backdropFilter: 'blur(4px)' }}>
                <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#ffcc00" strokeWidth="2"><path d="M12 2v4M12 18v4M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1" /></svg>
                <span style={{ fontSize: 5.5, fontWeight: 600, color: '#ffcc00', letterSpacing: '0.04em' }}>EDULLENT AI · FRESH</span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 16, fontWeight: 300, color: '#ffcc00', letterSpacing: '-0.5px', lineHeight: 1 }}>91%</div>
                <div style={{ fontSize: 5, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginTop: 1 }}>Composite</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 16, fontWeight: 300, letterSpacing: '-0.5px', lineHeight: 1 }}>#1</div>
                <div style={{ fontSize: 5, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginTop: 1 }}>Rank</div>
              </div>
            </div>
          </div>

          <div style={{ padding: 10, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {/* Left: small attendance chart */}
            <div>
              <div style={{ fontSize: 5.5, fontWeight: 600, color: T4, letterSpacing: '0.14em', textTransform: 'uppercase' as const, marginBottom: 4 }}>Attendance · last 6m</div>
              <svg width="100%" height={45} viewBox={`0 0 ${W} 45`} preserveAspectRatio="none">
                <defs>
                  <linearGradient id="bcGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={GOLD} stopOpacity="0.3" />
                    <stop offset="100%" stopColor={GOLD} stopOpacity="0" />
                  </linearGradient>
                </defs>
                <polyline points={`0,${45} ${buildPts(lines[0].data).split(' ').map(p => p.replace(/,([0-9.]+)/, (_, y) => `,${parseFloat(y) * 0.65}`)).join(' ')} ${W},${45}`} fill="url(#bcGrad)" stroke="none" />
                <polyline points={buildPts(lines[0].data).split(' ').map(p => p.replace(/,([0-9.]+)/, (_, y) => `,${parseFloat(y) * 0.65}`)).join(' ')} fill="none" stroke={GOLD} strokeWidth="1.5" />
              </svg>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 5, color: T4 }}>
                {months.map(m => <span key={m}>{m}</span>)}
              </div>
            </div>
            {/* Right: Why #1 bullets */}
            <div>
              <div style={{ fontSize: 5.5, fontWeight: 600, color: T4, letterSpacing: '0.14em', textTransform: 'uppercase' as const, marginBottom: 4 }}>Why #1</div>
              {[
                { label: 'Class Avg', text: '91% — top of network', tone: GREEN_DARK },
                { label: 'Pass Rate', text: '95% across all grades', tone: GREEN_DARK },
                { label: 'Teacher NPS', text: '4.6 / 5 from parents', tone: GREEN_DARK },
                { label: 'AI Practice', text: '82% adoption rate', tone: GREEN_DARK },
              ].map((r, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 5, padding: '2px 0' }}>
                  <span style={{ width: 4, height: 4, borderRadius: '50%', background: r.tone, marginTop: 4, flexShrink: 0 }} />
                  <div style={{ fontSize: 6.5, lineHeight: 1.4 }}>
                    <strong style={{ color: T1 }}>{r.label}</strong>{' '}
                    <span style={{ color: T3 }}>— {r.text}</span>
                  </div>
                </div>
              ))}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3, marginTop: 5 }}>
                {['AI-powered', 'High NPS', 'Strong Math'].map(p => (
                  <span key={p} style={{ fontSize: 5.5, fontWeight: 500, color: GREEN_DARK, background: `${GREEN_DARK}1a`, padding: '2px 5px', borderRadius: 999 }}>✓ {p}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </OwnerIPadShell>
  );
};

const VIOLET_LINE = '#5856d6';

export default OwnerBranchComparisonIPad;
