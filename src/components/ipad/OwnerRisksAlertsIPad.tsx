/**
 * Static iPad mockup — Owner · Risks & Alerts page.
 * Mirrors owner-dashboard/src/pages/RisksAlerts.tsx with mock data.
 *
 * Layout: 4 KPI cards → branch dropdown → 3-col charts (donut by category +
 * dual-line risk trend + per-branch bar chart) → active alerts feed with
 * gradient left border + icon badges + status pills.
 */

import OwnerIPadShell from './OwnerIPadShell';

const OwnerRisksAlertsIPad = () => {
  const BLUE = '#0a84ff';
  const T1 = '#1e294b';
  const T3 = '#64748b';
  const T4 = '#94a3b8';
  const RED = '#ff3b30';
  const RED_2 = '#DC2626';
  const GOLD = '#F59E0B';
  const GOLD_2 = '#D97706';
  const EMERALD = '#10B981';
  const VIOLET = '#5856d6';

  // Donut: 4 categories
  const donut = [
    { name: 'Attendance', val: 38, color: RED },
    { name: 'Fee Default', val: 28, color: GOLD },
    { name: 'Performance', val: 22, color: VIOLET },
    { name: 'Behaviour', val: 12, color: BLUE },
  ];
  const total = donut.reduce((a, b) => a + b.val, 0);

  // Risk trend: 6 months, critical + warning lines
  const months = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
  const critical = [22, 26, 31, 28, 32, 28];
  const warning = [58, 62, 70, 64, 72, 64];
  const W = 200, H = 60;
  const min = 0, max = 80;
  const buildPts = (data: number[]) =>
    data.map((v, i) => `${((i / (data.length - 1)) * W).toFixed(1)},${(H - ((v - min) / (max - min)) * H).toFixed(1)}`).join(' ');

  // Per-branch bar chart
  const branchRisks = [
    { name: 'Bandra', val: 12, color: EMERALD },
    { name: 'Powai', val: 28, color: GOLD },
    { name: 'Andheri', val: 22, color: GOLD },
    { name: 'Goregaon', val: 38, color: RED },
    { name: 'Thane', val: 42, color: RED },
  ];
  const maxRisk = Math.max(...branchRisks.map(b => b.val));

  const alerts = [
    { title: 'Fee Default — Q3', sub: '124 students · ₹14.6L outstanding · Bandra branch', tier: 'CRITICAL', tone: RED, grad: `linear-gradient(135deg, ${RED} 0%, ${RED_2} 100%)`, icon: 'rupee', when: '2h ago' },
    { title: 'Attendance Crash — Class 9B', sub: 'Avg dropped to 64% in Goregaon · 18 students at risk', tier: 'CRITICAL', tone: RED, grad: `linear-gradient(135deg, ${RED} 0%, ${RED_2} 100%)`, icon: 'users', when: '5h ago' },
    { title: 'Teacher Attrition — 3 in Q3', sub: 'Powai branch · Math/Science teachers exiting', tier: 'WARNING', tone: GOLD, grad: `linear-gradient(135deg, ${GOLD} 0%, ${GOLD_2} 100%)`, icon: 'cap', when: '1d ago' },
    { title: 'Parent NPS dipped 0.4', sub: 'Thane branch · investigating per-grade scores', tier: 'WARNING', tone: GOLD, grad: `linear-gradient(135deg, ${GOLD} 0%, ${GOLD_2} 100%)`, icon: 'msg', when: '2d ago' },
  ];

  // Donut SVG
  const cx = 30, cy = 30, r = 22, sw = 8;
  let acc = 0;
  const donutArcs = donut.map(d => {
    const frac = d.val / total;
    const start = acc;
    acc += frac;
    const angleLen = frac * 2 * Math.PI;
    const x1 = cx + r * Math.cos(2 * Math.PI * start - Math.PI / 2);
    const y1 = cy + r * Math.sin(2 * Math.PI * start - Math.PI / 2);
    const x2 = cx + r * Math.cos(2 * Math.PI * acc - Math.PI / 2);
    const y2 = cy + r * Math.sin(2 * Math.PI * acc - Math.PI / 2);
    const large = angleLen > Math.PI ? 1 : 0;
    return { d: `M ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2}`, color: d.color };
  });

  return (
    <OwnerIPadShell activePath="/risks">
      <div style={{ padding: '12px 14px 6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4 }}>
          <span style={{ width: 4, height: 4, borderRadius: 1, background: RED }} />
          <span style={{ fontSize: 7, fontWeight: 500, color: T3, letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>
            Owner · Risks &amp; Alerts
          </span>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 4, padding: '2px 7px', background: `${RED}1a`, borderRadius: 999 }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: RED, animation: 'pulse 2s infinite' }} />
            <span style={{ fontSize: 6, fontWeight: 600, color: RED }}>2 CRITICAL</span>
          </div>
        </div>
        <h1 style={{ fontSize: 22, fontWeight: 300, color: T1, letterSpacing: '-0.7px', lineHeight: 1.05, margin: 0 }}>
          Risks &amp; Alerts
        </h1>
        <div style={{ fontSize: 9, fontWeight: 400, color: T3, marginTop: 3 }}>
          Early warning system · real-time risk monitoring across all 5 branches.
        </div>
      </div>

      <div style={{ flex: 1, padding: '6px 12px 12px', overflowY: 'auto', minHeight: 0 }}>
        {/* 4 KPI cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 7, marginBottom: 8 }}>
          {[
            { label: 'Critical', val: '8', sub: 'Immediate action', color: RED, grad: `linear-gradient(135deg, ${RED} 0%, ${RED_2} 100%)` },
            { label: 'Warnings', val: '24', sub: 'Watch list', color: GOLD, grad: `linear-gradient(135deg, ${GOLD} 0%, ${GOLD_2} 100%)` },
            { label: 'Resolved 30d', val: '46', sub: '↑ 12 vs last month', color: EMERALD, grad: `linear-gradient(135deg, ${EMERALD} 0%, #059669 100%)` },
            { label: 'System Health', val: '92%', sub: 'All systems green', color: BLUE, grad: `linear-gradient(135deg, ${BLUE} 0%, #0a84ff 100%)` },
          ].map(c => (
            <div key={c.label} style={{ background: c.grad, borderRadius: 11, padding: '8px 10px', color: '#fff', position: 'relative', overflow: 'hidden', boxShadow: `0 6px 18px ${c.color}40` }}>
              <div style={{ position: 'absolute', top: -15, right: -15, width: 60, height: 60, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 65%)' }} />
              <div style={{ fontSize: 6, fontWeight: 600, color: 'rgba(255,255,255,0.85)', letterSpacing: '0.14em', textTransform: 'uppercase' as const, marginBottom: 4, position: 'relative' }}>{c.label}</div>
              <div style={{ fontSize: 18, fontWeight: 300, letterSpacing: '-0.7px', lineHeight: 1, position: 'relative' }}>{c.val}</div>
              <div style={{ fontSize: 6, fontWeight: 500, color: 'rgba(255,255,255,0.85)', marginTop: 3, position: 'relative' }}>{c.sub}</div>
            </div>
          ))}
        </div>

        {/* 3-col charts */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr 1fr', gap: 7, marginBottom: 8 }}>
          {/* Donut by category */}
          <div style={{ background: '#fff', borderRadius: 11, padding: 9, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)' }}>
            <div style={{ fontSize: 8, fontWeight: 500, color: T1, marginBottom: 6 }}>By category</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <svg width="60" height="60" viewBox="0 0 60 60">
                {donutArcs.map((a, i) => (
                  <path key={i} d={a.d} fill="none" stroke={a.color} strokeWidth={sw} strokeLinecap="butt" />
                ))}
                <text x={cx} y={cy + 1} textAnchor="middle" fontSize="10" fontWeight="600" fill={T1}>{total}</text>
                <text x={cx} y={cy + 9} textAnchor="middle" fontSize="4" fill={T4} letterSpacing="0.06em">TOTAL</text>
              </svg>
              <div style={{ flex: 1 }}>
                {donut.map(d => (
                  <div key={d.name} style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '1px 0' }}>
                    <span style={{ width: 5, height: 5, borderRadius: 1, background: d.color }} />
                    <span style={{ fontSize: 5.5, color: T3, flex: 1 }}>{d.name}</span>
                    <span style={{ fontSize: 6, fontWeight: 600, color: T1 }}>{d.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Risk trend dual-line */}
          <div style={{ background: '#fff', borderRadius: 11, padding: 9, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 5 }}>
              <span style={{ fontSize: 8, fontWeight: 500, color: T1 }}>Risk trend</span>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: 5 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                  <span style={{ width: 6, height: 1.5, background: RED }} />
                  <span style={{ fontSize: 5.5, color: T3 }}>Critical</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                  <span style={{ width: 6, height: 1.5, background: GOLD }} />
                  <span style={{ fontSize: 5.5, color: T3 }}>Warning</span>
                </div>
              </div>
            </div>
            <svg width="100%" height={H + 12} viewBox={`0 0 ${W} ${H + 12}`} preserveAspectRatio="none">
              {[0, 25, 50, 75, 100].map(g => (
                <line key={g} x1="0" y1={H - (g / 100) * H} x2={W} y2={H - (g / 100) * H} stroke="#F1F5F9" strokeWidth="0.5" />
              ))}
              <polyline points={buildPts(warning)} fill="none" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" />
              <polyline points={buildPts(critical)} fill="none" stroke={RED} strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 1, fontSize: 5, color: T4 }}>
              {months.map(m => <span key={m}>{m}</span>)}
            </div>
          </div>

          {/* Per-branch bar chart */}
          <div style={{ background: '#fff', borderRadius: 11, padding: 9, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)' }}>
            <div style={{ fontSize: 8, fontWeight: 500, color: T1, marginBottom: 6 }}>By branch</div>
            {branchRisks.map(b => (
              <div key={b.name} style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '2px 0' }}>
                <span style={{ fontSize: 6, color: T3, minWidth: 38 }}>{b.name}</span>
                <div style={{ flex: 1, height: 7, background: '#F1F5F9', borderRadius: 2, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${(b.val / maxRisk) * 100}%`, background: b.color, borderRadius: 2 }} />
                </div>
                <span style={{ fontSize: 6, fontWeight: 600, color: b.color, minWidth: 14, textAlign: 'right' }}>{b.val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Active alerts feed */}
        <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 7 }}>
            <div style={{ width: 18, height: 18, borderRadius: 5, background: `linear-gradient(135deg, ${RED}, ${RED_2})`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polygon points="12 2 22 22 2 22 12 2" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
            </div>
            <div style={{ fontSize: 9, fontWeight: 500, color: T1 }}>Active Alerts</div>
            <div style={{ marginLeft: 'auto', fontSize: 6, color: T4 }}>4 active · 2 critical</div>
          </div>
          {alerts.map((a, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 7px', borderLeft: `3px solid ${a.tone}`, background: '#FAFBFE', borderRadius: '0 8px 8px 0', marginBottom: i < alerts.length - 1 ? 5 : 0 }}>
              <div style={{ width: 22, height: 22, borderRadius: 6, background: a.grad, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {a.icon === 'rupee' && <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M6 4h12M6 9h12M9 14l5 6M14 4c2 0 4 2 4 5s-2 5-4 5h-8" /></svg>}
                {a.icon === 'users' && <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><circle cx="9" cy="7" r="4" /><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /></svg>}
                {a.icon === 'cap' && <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /></svg>}
                {a.icon === 'msg' && <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 1 }}>
                  <span style={{ fontSize: 8, fontWeight: 500, color: T1 }}>{a.title}</span>
                  <span style={{ fontSize: 5.5, fontWeight: 600, color: '#fff', background: a.grad, padding: '1.5px 5px', borderRadius: 999, letterSpacing: '0.06em' }}>{a.tier}</span>
                </div>
                <div style={{ fontSize: 6.5, color: T3, marginBottom: 1 }}>{a.sub}</div>
                <div style={{ fontSize: 5.5, color: T4 }}>{a.when}</div>
              </div>
              <div style={{ display: 'flex', gap: 4, flexShrink: 0 }}>
                <div style={{ fontSize: 6, fontWeight: 500, color: '#fff', background: `linear-gradient(135deg, ${BLUE}, #0a84ff)`, padding: '4px 8px', borderRadius: 6 }}>Act now</div>
                <div style={{ fontSize: 6, fontWeight: 500, color: T3, background: '#F1F5F9', padding: '4px 8px', borderRadius: 6 }}>Delegate</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </OwnerIPadShell>
  );
};

export default OwnerRisksAlertsIPad;
