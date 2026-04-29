/**
 * Live Principal Dashboard screen — full-fidelity recreation of
 * principal-dashboard's home view, sized to fit inside RoleScrollShowcase's
 * ContainerScroll iPad frame (no inner bezel, no scaled-down fonts).
 */

const PrincipalDashboardScreen = () => {
  const NAVY = '#001040';
  const NAVY_2 = '#001A66';
  const BLUE = '#0055FF';
  const T1 = '#0F172A';
  const T3 = '#64748B';
  const T4 = '#94A3B8';
  const GREEN = '#00C853';
  const ORANGE = '#FF8800';
  const RED = '#FF3355';

  // 30-day attendance trend
  const trend = [86, 87, 86, 88, 87, 89, 90, 88, 89, 90, 91, 90, 91, 92, 91, 92, 93, 92, 93, 94, 93, 94, 93, 94, 95, 94, 95, 94, 95, 96];
  const W = 380, H = 110;
  const min = 84, max = 96;
  const pts = trend.map((v, i) => `${((i / (trend.length - 1)) * W).toFixed(1)},${(H - ((v - min) / (max - min)) * H).toFixed(1)}`).join(' ');

  const NAV_SECTIONS = [
    { title: 'OVERVIEW', items: [{ label: 'Dashboard', icon: 'dashboard', active: true }] },
    { title: 'STUDENTS', items: [
      { label: 'Students', icon: 'users' },
      { label: 'Student Intelligence', icon: 'brain' },
      { label: 'Risk Students', icon: 'alert' },
    ]},
    { title: 'ACADEMICS', items: [
      { label: 'Classes & Sections', icon: 'monitor' },
      { label: 'Teachers', icon: 'cap' },
      { label: 'Academics', icon: 'book' },
      { label: 'Syllabus', icon: 'lib' },
    ]},
    { title: 'OPERATIONS', items: [
      { label: 'Attendance', icon: 'check' },
      { label: 'Discipline & Incidents', icon: 'shield' },
    ]},
    { title: 'COMMUNICATION', items: [
      { label: 'Parent Communication', icon: 'msg' },
      { label: 'Teacher Notes', icon: 'note' },
    ]},
    { title: 'ASSESSMENTS', items: [] },
  ];

  return (
    <div style={{ background: '#F4F7FE', width: '100%', height: '100%', display: 'flex', overflow: 'hidden', fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif" }}>

      {/* Sidebar */}
      <div className="role-screen-sidebar" style={{ width: 200, flexShrink: 0, background: '#fff', borderRight: '1px solid #e2e8f0', padding: '14px 10px', overflowY: 'auto' }}>
        <div style={{ fontSize: 8, fontWeight: 700, color: T4, letterSpacing: '0.18em', marginBottom: 8 }}>NAVIGATION</div>
        {NAV_SECTIONS.map((sec, sIdx) => (
          <div key={sec.title} style={{ marginTop: sIdx === 0 ? 0 : 12 }}>
            <div style={{ padding: '0 10px', marginBottom: 5, fontSize: 9, fontWeight: 600, color: T4, letterSpacing: '0.18em' }}>{sec.title}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {sec.items.map((item: any) => {
                const active = !!item.active;
                return (
                  <div key={item.label} style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    padding: '7px 10px', borderRadius: 8,
                    background: active ? NAVY : 'transparent',
                    color: active ? '#fff' : '#475569',
                    fontSize: 11, fontWeight: 500,
                    boxShadow: active ? '0 3px 8px rgba(0,16,64,0.18)' : 'none',
                  }}>
                    <NavIcon name={item.icon} active={active} />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Main */}
      <div style={{ flex: 1, padding: '14px 18px', overflow: 'hidden', minWidth: 0 }}>

        {/* Page header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <div style={{ width: 36, height: 36, borderRadius: 9, background: `linear-gradient(135deg, ${BLUE}, #1166FF)`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 6px 14px ${BLUE}55` }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7-4.5-9.5-9C-1 6.5 5 1 12 6c7-5 13 .5 9.5 6-2.5 4.5-9.5 9-9.5 9z" /></svg>
          </div>
          <div>
            <h1 style={{ fontSize: 17, fontWeight: 700, color: T1, letterSpacing: '-0.4px', margin: 0, lineHeight: 1.1 }}>Principal Dashboard</h1>
            <p style={{ fontSize: 10, color: T3, margin: '2px 0 0 0', fontWeight: 500 }}>Real-time school intelligence overview</p>
          </div>
        </div>

        {/* Academic Health Index hero */}
        <div style={{
          background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_2} 35%, ${BLUE} 100%)`,
          borderRadius: 12, padding: '14px 18px', color: '#fff',
          marginBottom: 10, position: 'relative', overflow: 'hidden',
          boxShadow: '0 12px 28px rgba(0,16,64,0.32)',
        }}>
          <div style={{ position: 'absolute', top: -25, right: -25, width: 130, height: 130, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 65%)' }} />
          <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
              <div style={{ width: 38, height: 38, borderRadius: 10, background: 'rgba(255,255,255,0.16)', border: '0.5px solid rgba(255,255,255,0.26)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d="M12 21s-7-4.5-9.5-9C-1 6.5 5 1 12 6c7-5 13 .5 9.5 6-2.5 4.5-9.5 9-9.5 9z" /></svg>
              </div>
              <div>
                <div style={{ fontSize: 9, fontWeight: 700, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>Academic Health Index</div>
                <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.7px', marginTop: 2, lineHeight: 1 }}>
                  85.4<span style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', fontWeight: 500, marginLeft: 1 }}>/100</span>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#6FFFAA', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 3, letterSpacing: '-0.3px' }}>
                  ↑ 1.2%
                </div>
                <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.55)', marginTop: 3, letterSpacing: '0.06em' }}>vs Last 7 Days</div>
              </div>
              <div style={{ width: 1, height: 30, background: 'rgba(255,255,255,0.18)' }} />
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', letterSpacing: '-0.3px' }}>Good</div>
                <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.55)', marginTop: 3, letterSpacing: '0.06em' }}>Overall Status</div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 KPI tiles */}
        <div className="role-screen-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, marginBottom: 10 }}>
          {[
            { label: 'TOTAL STUDENTS', val: '487', sub: 'Enrolled this branch', color: BLUE, bg: 'linear-gradient(135deg, #DEE6F8 0%, #F8FAFE 100%)', icon: 'users' },
            { label: 'TEACHERS', val: '32', sub: 'Active staff', color: GREEN, bg: 'linear-gradient(135deg, #E8FBEF 0%, #DAF6E4 100%)', icon: 'cap' },
            { label: "TODAY'S ATTENDANCE", val: '94%', sub: '↑ 2% vs yesterday', color: ORANGE, bg: 'linear-gradient(135deg, #FFF6E0 0%, #FFEDC4 100%)', icon: 'cal' },
            { label: 'PENDING INCIDENTS', val: '3', sub: 'Action required', color: RED, bg: 'linear-gradient(135deg, #FFEEF0 0%, #FFE2E6 100%)', icon: 'alert' },
          ].map(c => (
            <div key={c.label} style={{ background: c.bg, borderRadius: 11, padding: '11px 14px', position: 'relative', overflow: 'hidden', border: `0.5px solid ${c.color}33` }}>
              <div style={{ position: 'absolute', bottom: 6, right: 8, color: c.color, opacity: 0.22, lineHeight: 0 }}>
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  {c.icon === 'users' && <><circle cx="9" cy="7" r="4" /><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /></>}
                  {c.icon === 'cap' && <><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></>}
                  {c.icon === 'cal' && <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></>}
                  {c.icon === 'alert' && <><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /></>}
                </svg>
              </div>
              <div style={{ width: 26, height: 26, borderRadius: 7, background: c.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 7, position: 'relative' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  {c.icon === 'users' && <><circle cx="9" cy="7" r="4" /><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /></>}
                  {c.icon === 'cap' && <><path d="M22 10v6M2 10l10-5 10 5-10 5z" /></>}
                  {c.icon === 'cal' && <><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /></>}
                  {c.icon === 'alert' && <><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /></>}
                </svg>
              </div>
              <div style={{ fontSize: 8, fontWeight: 700, color: T4, letterSpacing: '0.1em', marginBottom: 3, position: 'relative' }}>{c.label}</div>
              <div style={{ fontSize: 22, fontWeight: 700, color: T1, letterSpacing: '-0.5px', lineHeight: 1, position: 'relative' }}>{c.val}</div>
              <div style={{ fontSize: 9, fontWeight: 500, color: T3, marginTop: 4, position: 'relative' }}>{c.sub}</div>
            </div>
          ))}
        </div>

        {/* 2-col: Risk Alerts + Attendance Trend */}
        <div className="role-screen-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>

          {/* Today's Risk Alerts */}
          <div style={{ background: '#fff', borderRadius: 11, padding: '11px 14px', boxShadow: '0 4px 12px rgba(0,85,255,0.06)', border: `0.5px solid ${BLUE}14` }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 9 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: RED, boxShadow: `0 0 5px ${RED}88` }} />
                <span style={{ fontSize: 11, fontWeight: 700, color: T1, letterSpacing: '-0.2px' }}>Today's Risk Alerts</span>
              </div>
              <span style={{ fontSize: 9, fontWeight: 600, color: BLUE }}>View All ›</span>
            </div>
            {[
              { name: 'Rohit Yadav', grade: 'Grade 7C', reason: 'Attendance 48% — At risk', sev: 'CRITICAL', color: RED },
              { name: 'Aditi Joshi', grade: 'Grade 9A', reason: 'Attendance 64% — At risk', sev: 'WARNING', color: ORANGE },
              { name: 'Karan Malhotra', grade: 'Grade 8C', reason: 'Repeated late submissions', sev: 'WARNING', color: ORANGE },
              { name: 'Pranav Desai', grade: 'Grade 7B', reason: 'Avg score 32% — Below passing', sev: 'CRITICAL', color: RED },
              { name: 'Saanvi Bose', grade: 'Grade 6A', reason: 'Avg score 46% — Below passing', sev: 'WARNING', color: ORANGE },
            ].map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '5px 0', borderBottom: i < 4 ? `0.5px solid ${BLUE}0d` : 'none' }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: s.color, flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 10, fontWeight: 600, color: T1 }}>{s.name} — <span style={{ color: T3 }}>{s.grade}</span></div>
                  <div style={{ fontSize: 8.5, color: T3, marginTop: 1 }}>{s.reason}</div>
                </div>
                <span style={{ fontSize: 7, fontWeight: 700, color: '#fff', background: s.color, padding: '2px 7px', borderRadius: 4, letterSpacing: '0.06em' }}>{s.sev}</span>
              </div>
            ))}
          </div>

          {/* Attendance Trend */}
          <div style={{ background: '#fff', borderRadius: 11, padding: '11px 14px', boxShadow: '0 4px 12px rgba(0,85,255,0.06)', border: `0.5px solid ${BLUE}14` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 9 }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /></svg>
              <span style={{ fontSize: 11, fontWeight: 700, color: T1, letterSpacing: '-0.2px' }}>Attendance Trend · 30 Days</span>
            </div>
            <svg width="100%" height={H + 18} viewBox={`0 0 ${W} ${H + 18}`} preserveAspectRatio="none">
              <defs>
                <linearGradient id="attGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={BLUE} stopOpacity="0.18" />
                  <stop offset="100%" stopColor={BLUE} stopOpacity="0" />
                </linearGradient>
              </defs>
              {[84, 87, 90, 93, 96].map((g, i) => (
                <g key={g}>
                  <line x1="0" y1={H - ((g - min) / (max - min)) * H} x2={W} y2={H - ((g - min) / (max - min)) * H} stroke="#F1F5F9" strokeWidth="0.7" />
                  <text x="-2" y={H - ((g - min) / (max - min)) * H + 3} fontSize="8" fill={T4} textAnchor="end">{g}%</text>
                  {void i}
                </g>
              ))}
              <polyline points={`0,${H} ${pts} ${W},${H}`} fill="url(#attGrad)" stroke="none" />
              <polyline points={pts} fill="none" stroke={BLUE} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 2, fontSize: 8, color: T4 }}>
              {[1, 5, 10, 15, 20, 25, 30].map(d => <span key={d}>{d}</span>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavIcon = ({ name, active }: { name: string; active: boolean }) => {
  const stroke = active ? '#fff' : '#94a3b8';
  const props = { width: 12, height: 12, viewBox: '0 0 24 24', fill: 'none', stroke, strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  switch (name) {
    case 'dashboard': return <svg {...props}><rect x="3" y="3" width="7" height="9" rx="1.5" /><rect x="14" y="3" width="7" height="5" rx="1.5" /><rect x="14" y="12" width="7" height="9" rx="1.5" /><rect x="3" y="16" width="7" height="5" rx="1.5" /></svg>;
    case 'users': return <svg {...props}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>;
    case 'brain': return <svg {...props}><path d="M9 2a3 3 0 00-3 3v.5A3.5 3.5 0 003 9v3a3 3 0 003 3v3a3 3 0 003 3h6a3 3 0 003-3v-3a3 3 0 003-3V9a3.5 3.5 0 00-3-3.5V5a3 3 0 00-3-3z" /></svg>;
    case 'alert': return <svg {...props}><polygon points="12 2 22 22 2 22 12 2" /><line x1="12" y1="9" x2="12" y2="13" /></svg>;
    case 'monitor': return <svg {...props}><rect x="2" y="3" width="20" height="14" rx="2" /></svg>;
    case 'cap': return <svg {...props}><path d="M22 10v6M2 10l10-5 10 5-10 5z" /></svg>;
    case 'book': return <svg {...props}><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></svg>;
    case 'lib': return <svg {...props}><line x1="4" y1="4" x2="4" y2="20" /><line x1="9" y1="4" x2="9" y2="20" /><line x1="14" y1="4" x2="14" y2="20" /><line x1="19" y1="4" x2="19" y2="20" /></svg>;
    case 'check': return <svg {...props}><path d="M9 11l3 3L22 4" /></svg>;
    case 'shield': return <svg {...props}><path d="M12 2L4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6z" /></svg>;
    case 'msg': return <svg {...props}><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>;
    case 'note': return <svg {...props}><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>;
    default: return <svg {...props}><circle cx="12" cy="12" r="9" /></svg>;
  }
};

export default PrincipalDashboardScreen;
