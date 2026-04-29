/**
 * Static iPad mockup — Owner · Students Intelligence page.
 * Faithful pixel-shrink of owner-dashboard/src/pages/StudentsIntelligence.tsx.
 *
 * Layout matches the source EXACTLY:
 *   1. Page head: icon + title + "Add Student" CTA
 *   2. Dark hero banner: huge total number + 3 mini stats (Avg Att / At Risk / High Perf)
 *   3. 4 bright gradient stat cards with faded background icons
 *   4. 3-col charts: Grade Distribution (donut) + Enrollment Trend (area) + Performance by Branch (h-bars)
 *   5. Attendance Heatmap (branch × grade) full-width
 */

import OwnerIPadShell from './OwnerIPadShell';

const OwnerStudentIntelligenceIPad = () => {
  // Tokens mirror source: T1/T3/T4 text, B1 blue, etc.
  const B1 = '#0055FF';
  const T1 = '#0F172A';
  const T3 = '#64748B';
  const T4 = '#94A3B8';
  const GREEN = '#00C853';
  const GOLD = '#F5A524';
  const RED = '#FF3355';
  const VIOLET = '#7B3FF4';

  // Mock data
  const totalEnrollment = 8420;
  const avgAttendance = 92;
  const atRisk = 342;
  const highPerformers = 842;
  const newThisTerm = 184;

  // Grade distribution donut (5 grades)
  const gradeDist = [
    { name: 'G6', value: 1620, color: '#1e3a8a' },
    { name: 'G7', value: 1480, color: '#2563eb' },
    { name: 'G8', value: 1720, color: '#3b82f6' },
    { name: 'G9', value: 1890, color: '#60a5fa' },
    { name: 'G10', value: 1710, color: '#93c5fd' },
  ];
  const totalDonut = gradeDist.reduce((a, b) => a + b.value, 0);

  // Enrollment trend (6 months area)
  const enrollTrend = [7820, 7980, 8120, 8240, 8350, 8420];
  const months = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
  const W_AREA = 175, H_AREA = 90;
  const minE = 7700, maxE = 8500;
  const areaPts = enrollTrend.map((v, i) =>
    `${((i / (enrollTrend.length - 1)) * W_AREA).toFixed(1)},${(H_AREA - ((v - minE) / (maxE - minE)) * H_AREA).toFixed(1)}`
  );

  // Performance by branch horizontal bars
  const perfByBranch = [
    { branch: 'Bandra', value: 91 },
    { branch: 'Powai', value: 84 },
    { branch: 'Andheri', value: 79 },
    { branch: 'Goregaon', value: 71 },
    { branch: 'Thane', value: 64 },
  ];

  // Attendance heatmap: 5 branches × 6 grades
  const branches = ['Bandra', 'Powai', 'Andheri', 'Goregaon', 'Thane'];
  const grades = ['G6', 'G7', 'G8', 'G9', 'G10', 'G11'];
  const heat: number[][] = [
    [98, 96, 97, 95, 96, 95],
    [94, 92, 90, 91, 89, 90],
    [92, 90, 88, 89, 87, 88],
    [86, 84, 82, 83, 81, 82],
    [80, 78, 76, 77, 75, 76],
  ];
  const heatColor = (v: number) => (v >= 95 ? GREEN : v >= 85 ? GOLD : RED);

  // Donut SVG geometry
  const cx = 36, cy = 36, rOuter = 30, rInner = 16;
  let acc = 0;
  const donutArcs = gradeDist.map(d => {
    const frac = d.value / totalDonut;
    const start = acc;
    acc += frac;
    const a0 = 2 * Math.PI * start - Math.PI / 2;
    const a1 = 2 * Math.PI * acc - Math.PI / 2;
    const x0o = cx + rOuter * Math.cos(a0);
    const y0o = cy + rOuter * Math.sin(a0);
    const x1o = cx + rOuter * Math.cos(a1);
    const y1o = cy + rOuter * Math.sin(a1);
    const x0i = cx + rInner * Math.cos(a1);
    const y0i = cy + rInner * Math.sin(a1);
    const x1i = cx + rInner * Math.cos(a0);
    const y1i = cy + rInner * Math.sin(a0);
    const large = frac > 0.5 ? 1 : 0;
    return {
      d: `M ${x0o} ${y0o} A ${rOuter} ${rOuter} 0 ${large} 1 ${x1o} ${y1o} L ${x0i} ${y0i} A ${rInner} ${rInner} 0 ${large} 0 ${x1i} ${y1i} Z`,
      color: d.color,
      name: d.name,
    };
  });

  return (
    <OwnerIPadShell activePath="/students">
      <div style={{ background: '#EEF4FF', flex: 1, overflowY: 'auto', minHeight: 0, padding: '10px 12px 12px' }}>

        {/* ── Page Head ─────────────────────────────────── */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 26, height: 26, borderRadius: 7, background: `linear-gradient(135deg, ${B1}, #1166FF)`, boxShadow: `0 6px 14px ${B1}55`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
            </div>
            <div>
              <h1 style={{ fontSize: 14, fontWeight: 700, color: T1, letterSpacing: '-0.4px', margin: 0, lineHeight: 1.1 }}>Students Intelligence</h1>
              <p style={{ fontSize: 7, fontWeight: 500, color: T3, margin: '2px 0 0 0' }}>Enrollment, performance &amp; behavior analytics</p>
            </div>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '5px 9px', borderRadius: 7, background: `linear-gradient(135deg, ${B1}, #1166FF)`, color: '#fff', fontSize: 6, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' as const, boxShadow: `0 4px 10px ${B1}40` }}>
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
            Add Student
          </div>
        </div>

        {/* ── Dark Hero Banner ──────────────────────────── */}
        <div style={{
          background: 'linear-gradient(135deg, #000A33 0%, #001A66 35%, #0044CC 75%, #0055FF 100%)',
          borderRadius: 14, padding: '12px 14px', color: '#fff',
          marginBottom: 10, position: 'relative', overflow: 'hidden',
          boxShadow: '0 14px 30px rgba(0,8,60,0.32)',
        }}>
          <div style={{ position: 'absolute', top: -25, right: -20, width: 110, height: 110, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 65%)' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 9, flex: 1, minWidth: 0 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: 'rgba(255,255,255,0.16)', border: '0.5px solid rgba(255,255,255,0.26)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2"><circle cx="9" cy="7" r="4" /><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /></svg>
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 3, padding: '2px 7px', borderRadius: 999, background: 'rgba(255,255,255,0.14)', border: '0.5px solid rgba(255,255,255,0.22)', fontSize: 5.5, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' as const, marginBottom: 5 }}>
                  <svg width="7" height="7" viewBox="0 0 24 24" fill="#FFCC22" stroke="none"><path d="M12 2l2 7h7l-5.5 4 2 7-5.5-4-5.5 4 2-7L3 9h7z" /></svg>
                  Academic Intelligence
                </div>
                <h2 style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.7px', margin: 0, lineHeight: 1, color: '#fff' }}>
                  {totalEnrollment.toLocaleString()}
                </h2>
                <p style={{ fontSize: 7, color: 'rgba(255,255,255,0.72)', fontWeight: 500, margin: '4px 0 0 0' }}>
                  Total scholars across 5 branches · +{newThisTerm} new this term
                </p>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 5, flexShrink: 0 }}>
              {[
                { label: 'Avg Att', val: `${avgAttendance}%` },
                { label: 'At Risk', val: atRisk.toString() },
                { label: 'Top Perf', val: highPerformers.toString() },
              ].map(s => (
                <div key={s.label} style={{ background: 'rgba(255,255,255,0.10)', borderRadius: 8, padding: '6px 8px', border: '0.5px solid rgba(255,255,255,0.14)', minWidth: 50 }}>
                  <p style={{ fontSize: 5, fontWeight: 700, color: 'rgba(255,255,255,0.65)', letterSpacing: '0.1em', textTransform: 'uppercase' as const, margin: '0 0 3px 0' }}>{s.label}</p>
                  <p style={{ fontSize: 11, fontWeight: 800, color: '#fff', margin: 0, letterSpacing: '-0.3px' }}>{s.val}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bright Stat Grid (4 cards) ────────────────── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 7, marginBottom: 10 }}>
          {[
            { label: 'Total Enrollment', val: totalEnrollment.toLocaleString(), sub: `+${newThisTerm} this term`, accent: B1, grad: 'linear-gradient(135deg, #DEE6F8 0%, #F8FAFE 100%)', icon: 'users', delta: 'up' },
            { label: 'Avg Attendance', val: `${avgAttendance}%`, sub: 'Across 8,420', accent: GREEN, grad: 'linear-gradient(135deg, #E8FBEF 0%, #DAF6E4 100%)', icon: 'pct', delta: null },
            { label: 'At-Risk', val: atRisk.toString(), sub: '4.1% of total', accent: RED, grad: 'linear-gradient(135deg, #FFE5E9 0%, #FFD0D7 100%)', icon: 'alert', delta: 'down' },
            { label: 'High Performers', val: highPerformers.toString(), sub: '10.0% of total', accent: VIOLET, grad: 'linear-gradient(135deg, #F2EBFF 0%, #E8DEFC 100%)', icon: 'award', delta: 'up' },
          ].map(s => (
            <div key={s.label} style={{ background: s.grad, borderRadius: 11, padding: '8px 10px', position: 'relative', overflow: 'hidden', border: `0.5px solid ${s.accent}33`, boxShadow: '0 4px 12px rgba(0,85,255,0.10)' }}>
              {/* Faded large icon bottom-right */}
              <div style={{ position: 'absolute', bottom: 4, right: 6, color: s.accent, opacity: 0.15, lineHeight: 0 }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  {s.icon === 'users' && <><circle cx="9" cy="7" r="4" /><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /></>}
                  {s.icon === 'pct' && <><line x1="19" y1="5" x2="5" y2="19" /><circle cx="6.5" cy="6.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" /></>}
                  {s.icon === 'alert' && <><polygon points="12 2 22 22 2 22 12 2" /><line x1="12" y1="9" x2="12" y2="13" /></>}
                  {s.icon === 'award' && <><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></>}
                </svg>
              </div>
              {/* Solid icon badge top-left */}
              <div style={{ width: 18, height: 18, borderRadius: 5, background: s.accent, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 5, boxShadow: `0 3px 8px ${s.accent}55`, position: 'relative' }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  {s.icon === 'users' && <><circle cx="9" cy="7" r="4" /><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /></>}
                  {s.icon === 'pct' && <><line x1="19" y1="5" x2="5" y2="19" /><circle cx="6.5" cy="6.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" /></>}
                  {s.icon === 'alert' && <><polygon points="12 2 22 22 2 22 12 2" /><line x1="12" y1="9" x2="12" y2="13" /></>}
                  {s.icon === 'award' && <><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></>}
                </svg>
              </div>
              {s.delta && (
                <div style={{ position: 'absolute', top: 7, right: 7, padding: '1.5px 4px', borderRadius: 4, background: `${s.accent}1a`, fontSize: 5.5, fontWeight: 800, color: s.accent, display: 'flex', alignItems: 'center' }}>
                  {s.delta === 'up' ? '↗' : '↘'}
                </div>
              )}
              <p style={{ fontSize: 5.5, fontWeight: 700, color: T4, letterSpacing: '0.1em', textTransform: 'uppercase' as const, margin: '0 0 2px 0', position: 'relative' }}>{s.label}</p>
              <p style={{ fontSize: 14, fontWeight: 800, color: T1, letterSpacing: '-0.4px', margin: 0, lineHeight: 1.1, position: 'relative' }}>{s.val}</p>
              <p style={{ fontSize: 5.5, fontWeight: 600, color: T3, margin: '3px 0 0 0', position: 'relative' }}>{s.sub}</p>
            </div>
          ))}
        </div>

        {/* ── 3-col Charts Row ──────────────────────────── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 7, marginBottom: 10 }}>
          {/* Grade Distribution donut */}
          <div style={{ background: '#fff', borderRadius: 11, padding: '9px 10px', boxShadow: '0 4px 12px rgba(0,85,255,0.06)', border: '0.5px solid rgba(0,85,255,0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
              <div>
                <h3 style={{ fontSize: 8, fontWeight: 700, color: T1, margin: 0, letterSpacing: '-0.2px' }}>Grade Distribution</h3>
                <p style={{ fontSize: 5, fontWeight: 600, color: T4, margin: '1px 0 0 0', letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>Scholars by grade</p>
              </div>
              <div style={{ width: 18, height: 18, borderRadius: 5, background: `${B1}14`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={B1} strokeWidth="2.3"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width="72" height="72" viewBox="0 0 72 72">
                {donutArcs.map((a, i) => <path key={i} d={a.d} fill={a.color} stroke="#fff" strokeWidth="0.8" />)}
              </svg>
              <div style={{ flex: 1 }}>
                {gradeDist.map(g => (
                  <div key={g.name} style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '1px 0' }}>
                    <span style={{ width: 6, height: 6, borderRadius: 1.5, background: g.color }} />
                    <span style={{ fontSize: 5.5, color: T3, flex: 1 }}>{g.name}</span>
                    <span style={{ fontSize: 5.5, fontWeight: 700, color: T1 }}>{g.value.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enrollment Trend area chart */}
          <div style={{ background: '#fff', borderRadius: 11, padding: '9px 10px', boxShadow: '0 4px 12px rgba(0,85,255,0.06)', border: '0.5px solid rgba(0,85,255,0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
              <div>
                <h3 style={{ fontSize: 8, fontWeight: 700, color: T1, margin: 0, letterSpacing: '-0.2px' }}>Enrollment Trend</h3>
                <p style={{ fontSize: 5, fontWeight: 600, color: T4, margin: '1px 0 0 0', letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>Last 6 months</p>
              </div>
              <div style={{ width: 18, height: 18, borderRadius: 5, background: `${VIOLET}14`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={VIOLET} strokeWidth="2.3"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
              </div>
            </div>
            <svg width="100%" height={H_AREA + 14} viewBox={`0 0 ${W_AREA} ${H_AREA + 14}`} preserveAspectRatio="none">
              <defs>
                <linearGradient id="enGradOw" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={B1} stopOpacity="0.28" />
                  <stop offset="100%" stopColor={B1} stopOpacity="0" />
                </linearGradient>
              </defs>
              {[0, 25, 50, 75, 100].map(g => (
                <line key={g} x1="0" y1={H_AREA - (g / 100) * H_AREA} x2={W_AREA} y2={H_AREA - (g / 100) * H_AREA} stroke="rgba(0,85,255,0.06)" strokeWidth="0.5" strokeDasharray="2 2" />
              ))}
              <polyline points={`0,${H_AREA} ${areaPts.join(' ')} ${W_AREA},${H_AREA}`} fill="url(#enGradOw)" stroke="none" />
              <polyline points={areaPts.join(' ')} fill="none" stroke={B1} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              {areaPts.map((p, i) => {
                const [x, y] = p.split(',').map(Number);
                return <circle key={i} cx={x} cy={y} r="1.6" fill="#fff" stroke={B1} strokeWidth="1.2" />;
              })}
            </svg>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 1, fontSize: 5, color: T3, fontWeight: 600 }}>
              {months.map(m => <span key={m}>{m}</span>)}
            </div>
          </div>

          {/* Performance by Branch horizontal bars */}
          <div style={{ background: '#fff', borderRadius: 11, padding: '9px 10px', boxShadow: '0 4px 12px rgba(0,85,255,0.06)', border: '0.5px solid rgba(0,85,255,0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
              <div>
                <h3 style={{ fontSize: 8, fontWeight: 700, color: T1, margin: 0, letterSpacing: '-0.2px' }}>Perf by Branch</h3>
                <p style={{ fontSize: 5, fontWeight: 600, color: T4, margin: '1px 0 0 0', letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>Avg scores</p>
              </div>
              <div style={{ width: 18, height: 18, borderRadius: 5, background: `${GREEN}14`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="2.3"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
              </div>
            </div>
            {perfByBranch.map(p => (
              <div key={p.branch} style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '2.5px 0' }}>
                <span style={{ fontSize: 6, fontWeight: 700, color: T3, minWidth: 38 }}>{p.branch}</span>
                <div style={{ flex: 1, height: 8, background: '#F1F5F9', borderRadius: 2, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${p.value}%`, background: p.value >= 80 ? GREEN : p.value >= 60 ? GOLD : RED, borderRadius: 2 }} />
                </div>
                <span style={{ fontSize: 6.5, fontWeight: 700, color: T3, minWidth: 18, textAlign: 'right' }}>{p.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Attendance Heatmap ────────────────────────── */}
        <div style={{ background: '#fff', borderRadius: 11, padding: '10px 12px', boxShadow: '0 4px 12px rgba(0,85,255,0.06)', border: '0.5px solid rgba(0,85,255,0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 7 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <div style={{ width: 20, height: 20, borderRadius: 6, background: `linear-gradient(135deg, ${B1}, #1166FF)`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 4px 10px ${B1}40` }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.3"><line x1="19" y1="5" x2="5" y2="19" /><circle cx="6.5" cy="6.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" /></svg>
              </div>
              <div>
                <h3 style={{ fontSize: 8.5, fontWeight: 700, color: T1, margin: 0, letterSpacing: '-0.2px' }}>Attendance Heatmap</h3>
                <p style={{ fontSize: 5, fontWeight: 600, color: T4, margin: '1px 0 0 0', letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>Branch × grade</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 3, padding: '3px 7px', borderRadius: 5, border: `0.5px solid ${B1}33`, background: '#F5F9FF', fontSize: 6, fontWeight: 700, color: T3 }}>
                All Branches
                <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke={T4} strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                {[[GREEN, '95%+'], [GOLD, '85-94%'], [RED, '<85%']].map(([c, l]) => (
                  <div key={l as string} style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                    <div style={{ width: 5, height: 5, borderRadius: '50%', background: c as string }} />
                    <span style={{ fontSize: 5.5, fontWeight: 700, color: T3 }}>{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Header row */}
          <div style={{ display: 'grid', gridTemplateColumns: '60px repeat(6, 1fr)', gap: 4, marginBottom: 4 }}>
            <div style={{ fontSize: 5.5, fontWeight: 700, color: T4, letterSpacing: '0.12em', textTransform: 'uppercase' as const }}>Branch</div>
            {grades.map(g => <div key={g} style={{ fontSize: 5.5, fontWeight: 700, color: T4, textAlign: 'center', letterSpacing: '0.12em', textTransform: 'uppercase' as const }}>{g}</div>)}
          </div>
          {branches.map((b, bi) => (
            <div key={b} style={{ display: 'grid', gridTemplateColumns: '60px repeat(6, 1fr)', gap: 4, marginBottom: 3 }}>
              <div style={{ fontSize: 6.5, fontWeight: 700, color: T3, display: 'flex', alignItems: 'center' }}>{b}</div>
              {heat[bi].map((v, gi) => (
                <div key={gi} style={{ height: 18, background: heatColor(v), borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 6.5, fontWeight: 800, boxShadow: '0 2px 5px rgba(0,0,0,0.06)' }}>
                  {v}%
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </OwnerIPadShell>
  );
};

export default OwnerStudentIntelligenceIPad;
