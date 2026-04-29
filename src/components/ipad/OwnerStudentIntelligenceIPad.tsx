/**
 * Static iPad mockup — Owner · Students Intelligence page.
 * Mirrors owner-dashboard/src/pages/StudentsIntelligence.tsx with mock data.
 *
 * Layout: 4 KPI cards → Performance Grid heatmap (branches × grades)
 * → Student metrics table with risk tier pills.
 */

import OwnerIPadShell from './OwnerIPadShell';

const OwnerStudentIntelligenceIPad = () => {
  const BLUE = '#0055FF';
  const VIOLET = '#7B3FF4';
  const T1 = '#1e294b';
  const T3 = '#64748b';
  const T4 = '#94a3b8';
  const GREEN = '#10B981';
  const AMBER = '#F59E0B';
  const RED = '#FF3355';

  // Heatmap: 5 branches × 6 grades, values are pass-rate %
  const branches = ['Bandra', 'Andheri', 'Powai', 'Thane', 'Goregaon'];
  const grades = ['G6', 'G7', 'G8', 'G9', 'G10', 'G11'];
  const heat: number[][] = [
    [92, 89, 91, 88, 86, 90],
    [85, 82, 78, 80, 76, 79],
    [88, 86, 84, 87, 81, 85],
    [74, 72, 69, 70, 65, 67],
    [80, 78, 76, 75, 72, 74],
  ];
  const cellColor = (v: number) => {
    if (v >= 88) return '#10B981';
    if (v >= 80) return '#34D399';
    if (v >= 72) return '#F59E0B';
    if (v >= 65) return '#FB923C';
    return '#FF3355';
  };

  const students = [
    { rank: 1, name: 'Aarav Sharma', initials: 'AS', grade: 'G9', att: 96, score: 94, trend: 4, risk: 'Low', riskColor: GREEN },
    { rank: 2, name: 'Diya Patel', initials: 'DP', grade: 'G10', att: 93, score: 91, trend: 2, risk: 'Low', riskColor: GREEN },
    { rank: 3, name: 'Vihaan Iyer', initials: 'VI', grade: 'G8', att: 90, score: 88, trend: 5, risk: 'Low', riskColor: GREEN },
    { rank: 4, name: 'Anaya Singh', initials: 'AN', grade: 'G11', att: 87, score: 84, trend: -1, risk: 'Med', riskColor: AMBER },
    { rank: 5, name: 'Krish Mehta', initials: 'KM', grade: 'G9', att: 78, score: 71, trend: -3, risk: 'Med', riskColor: AMBER },
    { rank: 6, name: 'Riya Kapoor', initials: 'RK', grade: 'G7', att: 72, score: 64, trend: -4, risk: 'High', riskColor: RED },
    { rank: 7, name: 'Aryan Reddy', initials: 'AR', grade: 'G10', att: 68, score: 58, trend: -6, risk: 'High', riskColor: RED },
  ];

  return (
    <OwnerIPadShell activePath="/students">
      <div style={{ padding: '12px 14px 6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4 }}>
          <span style={{ width: 4, height: 4, borderRadius: 1, background: VIOLET }} />
          <span style={{ fontSize: 7, fontWeight: 500, color: T3, letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>
            Owner · Intelligence
          </span>
        </div>
        <h1 style={{ fontSize: 22, fontWeight: 300, color: T1, letterSpacing: '-0.7px', lineHeight: 1.05, margin: 0 }}>
          Students Intelligence
        </h1>
        <div style={{ fontSize: 9, fontWeight: 400, color: T3, marginTop: 3 }}>
          Intelligence-driven student tracking · early risk detection across the network.
        </div>
      </div>

      <div style={{ flex: 1, padding: '6px 12px 12px', overflowY: 'auto', minHeight: 0 }}>
        {/* 4 KPI cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 7, marginBottom: 8 }}>
          {[
            { label: 'Total Students', val: '8,420', sub: 'Across 5 branches', color: BLUE, bg: 'linear-gradient(135deg, #DEE6F8 0%, #F8FAFE 100%)' },
            { label: 'At-Risk', val: '342', sub: '4.1% of network', color: RED, bg: 'linear-gradient(135deg, #FFE5E9 0%, #FFD0D7 100%)' },
            { label: 'Top 10%', val: '842', sub: 'Avg 91.2%', color: GREEN, bg: 'linear-gradient(135deg, #E8FBEF 0%, #DAF6E4 100%)' },
            { label: 'Avg GPA', val: '7.8', sub: '↑ 0.3 vs last term', color: VIOLET, bg: 'linear-gradient(135deg, #F2EBFF 0%, #E8DEFC 100%)' },
          ].map(c => (
            <div key={c.label} style={{ background: c.bg, border: `0.5px solid ${c.color}33`, borderRadius: 11, padding: '8px 10px' }}>
              <div style={{ fontSize: 6, fontWeight: 500, color: c.color, letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 4 }}>{c.label}</div>
              <div style={{ fontSize: 18, fontWeight: 300, color: T1, letterSpacing: '-0.7px', lineHeight: 1 }}>{c.val}</div>
              <div style={{ fontSize: 6, fontWeight: 500, color: c.color, marginTop: 3 }}>{c.sub}</div>
            </div>
          ))}
        </div>

        {/* Performance Grid heatmap */}
        <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)', marginBottom: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 7 }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="2"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg>
            <div style={{ fontSize: 9, fontWeight: 500, color: T1 }}>Performance Grid</div>
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 4, fontSize: 5.5, color: T4 }}>
              <span>Low</span>
              {[RED, '#FB923C', AMBER, '#34D399', GREEN].map((c, i) => <div key={i} style={{ width: 8, height: 8, borderRadius: 1.5, background: c }} />)}
              <span>High</span>
            </div>
          </div>
          {/* Header row */}
          <div style={{ display: 'grid', gridTemplateColumns: '60px repeat(6, 1fr)', gap: 3, marginBottom: 3 }}>
            <div />
            {grades.map(g => <div key={g} style={{ fontSize: 6, fontWeight: 500, color: T4, textAlign: 'center', letterSpacing: '0.06em' }}>{g}</div>)}
          </div>
          {branches.map((b, bi) => (
            <div key={b} style={{ display: 'grid', gridTemplateColumns: '60px repeat(6, 1fr)', gap: 3, marginBottom: 2 }}>
              <div style={{ fontSize: 7, fontWeight: 500, color: T1, display: 'flex', alignItems: 'center' }}>{b}</div>
              {heat[bi].map((v, gi) => (
                <div key={gi} style={{ height: 18, background: cellColor(v), borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 6.5, fontWeight: 600 }}>
                  {v}%
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Student metrics table */}
        <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 7 }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={VIOLET} strokeWidth="2"><circle cx="9" cy="7" r="4" /><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /></svg>
            <div style={{ fontSize: 9, fontWeight: 500, color: T1 }}>Student List</div>
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 5 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 3, padding: '2px 6px', background: '#F8FAFE', borderRadius: 6, border: `0.5px solid ${BLUE}22` }}>
                <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke={T4} strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                <span style={{ fontSize: 6, color: T4 }}>Search…</span>
              </div>
              <span style={{ fontSize: 6, fontWeight: 500, color: BLUE, background: `${BLUE}1a`, padding: '2px 6px', borderRadius: 999 }}>Top 100</span>
            </div>
          </div>
          {/* Header */}
          <div style={{ display: 'grid', gridTemplateColumns: '20px 1fr 28px 30px 30px 26px 32px', gap: 5, padding: '3px 0 5px', borderBottom: '0.5px solid #F1F5F9' }}>
            {['#', 'Name', 'Gr', 'Att', 'Avg', 'Tr', 'Risk'].map(h => (
              <div key={h} style={{ fontSize: 5.5, fontWeight: 600, color: T4, letterSpacing: '0.12em', textTransform: 'uppercase' as const }}>{h}</div>
            ))}
          </div>
          {students.map((s, i) => (
            <div key={s.name} style={{ display: 'grid', gridTemplateColumns: '20px 1fr 28px 30px 30px 26px 32px', gap: 5, alignItems: 'center', padding: '4px 0', borderBottom: i < students.length - 1 ? '0.5px solid #F1F5F9' : 'none' }}>
              <span style={{ fontSize: 7, fontWeight: 500, color: T4 }}>{s.rank}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, minWidth: 0 }}>
                <div style={{ width: 16, height: 16, borderRadius: '50%', background: `linear-gradient(135deg, ${VIOLET}, ${BLUE})`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 6, fontWeight: 600, flexShrink: 0 }}>
                  {s.initials}
                </div>
                <span style={{ fontSize: 7, fontWeight: 500, color: T1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.name}</span>
              </div>
              <span style={{ fontSize: 6.5, color: T3 }}>{s.grade}</span>
              <span style={{ fontSize: 6.5, fontWeight: 500, color: s.att >= 85 ? GREEN : s.att >= 75 ? AMBER : RED }}>{s.att}%</span>
              <span style={{ fontSize: 6.5, fontWeight: 500, color: s.score >= 85 ? GREEN : s.score >= 70 ? AMBER : RED }}>{s.score}%</span>
              <span style={{ fontSize: 6.5, fontWeight: 500, color: s.trend >= 0 ? GREEN : RED }}>{s.trend >= 0 ? '↑' : '↓'}{Math.abs(s.trend)}</span>
              <span style={{ fontSize: 5.5, fontWeight: 600, color: '#fff', background: s.riskColor, padding: '2px 5px', borderRadius: 999, textAlign: 'center', letterSpacing: '0.04em' }}>{s.risk}</span>
            </div>
          ))}
        </div>
      </div>
    </OwnerIPadShell>
  );
};

export default OwnerStudentIntelligenceIPad;
