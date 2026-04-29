/**
 * Live Parent Performance Analytics screen — full-fidelity recreation of
 * parent-dashboard's Performance page, sized for RoleScrollShowcase's
 * ContainerScroll iPad frame.
 */

const ParentPerformanceScreen = () => {
  const NAVY_DEEP = '#0B1F3A';
  const BLUE = '#0055FF';
  const BLUE_2 = '#1166FF';
  const T1 = '#0F172A';
  const T2 = '#1E293B';
  const T3 = '#64748B';
  const T4 = '#94A3B8';
  const GREEN = '#00C853';
  const SIDEBAR_BG = '#FBF6E8';

  const NAV = [
    { title: 'OVERVIEW', items: [
      { label: 'Dashboard', icon: 'home' },
      { label: 'My Child', icon: 'user' },
    ]},
    { title: 'ACADEMICS', items: [
      { label: 'Classes', icon: 'book' },
      { label: 'Timetable', icon: 'cal' },
      { label: 'Syllabus', icon: 'lib' },
      { label: 'Performance', icon: 'chart', active: true },
      { label: 'Concept Strengths', icon: 'brain' },
    ]},
    { title: 'TASKS & TESTS', items: [
      { label: 'Attendance', icon: 'check' },
      { label: 'Assignments', icon: 'file' },
      { label: 'Tests & Exams', icon: 'cap' },
    ]},
    { title: 'INSIGHTS', items: [
      { label: 'AI Practice', icon: 'spark' },
      { label: 'Behaviour', icon: 'star' },
    ]},
    { title: 'COMMUNICATION', items: [
      { label: 'Teacher Notes', icon: 'msg' },
    ]},
  ];

  const subjects = [
    { name: 'Mathematics', icon: '∑', accent: BLUE, progress: 90, grade: 'A+' },
    { name: 'English', icon: 'A', accent: '#7B3FF4', progress: 75, grade: 'B+' },
    { name: 'Hindi', icon: 'अ', accent: '#FF8800', progress: 88, grade: 'A' },
    { name: 'Science', icon: '⚗', accent: '#0EAFAE', progress: 85, grade: 'A' },
    { name: 'Social Studies', icon: '🌐', accent: '#0055FF', progress: 80, grade: 'A' },
    { name: 'Computer Science', icon: '</>', accent: GREEN, progress: 85, grade: 'A' },
  ];

  // Performance trend
  const months = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
  const trend = [76, 79, 81, 83, 85, 87];
  const W = 460, H = 90;
  const min = 60, max = 100;
  const pts = trend.map((v, i) =>
    `${((i / (trend.length - 1)) * W).toFixed(1)},${(H - ((v - min) / (max - min)) * H).toFixed(1)}`
  );

  return (
    <div style={{ background: '#F4F7FE', width: '100%', height: '100%', display: 'flex', overflow: 'hidden', fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif" }}>

      {/* Sidebar */}
      <div className="role-screen-sidebar" style={{ width: 200, flexShrink: 0, background: SIDEBAR_BG, padding: '14px 10px', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '0 8px', marginBottom: 14 }}>
          <div style={{ width: 28, height: 28, borderRadius: 9, background: NAVY_DEEP, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7-4.5-9.5-9C-1 6.5 5 1 12 6c7-5 13 .5 9.5 6-2.5 4.5-9.5 9-9.5 9z" /></svg>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: NAVY_DEEP, letterSpacing: '0.04em' }}>EDULLENT</span>
            <span style={{ fontSize: 7, fontWeight: 600, color: '#94a3b8', letterSpacing: '0.18em', marginTop: 3 }}>PARENT PORTAL</span>
          </div>
        </div>

        {/* Nav */}
        <div style={{ flex: 1 }}>
          {NAV.map((sec, sIdx) => (
            <div key={sec.title} style={{ marginTop: sIdx === 0 ? 0 : 10 }}>
              <div style={{ padding: '0 10px', marginBottom: 4, fontSize: 8.5, fontWeight: 600, color: T4, letterSpacing: '0.18em' }}>{sec.title}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {sec.items.map((item: any) => {
                  const active = !!item.active;
                  return (
                    <div key={item.label} style={{
                      display: 'flex', alignItems: 'center', gap: 8,
                      padding: '6px 10px', borderRadius: 8,
                      background: active ? NAVY_DEEP : 'transparent',
                      color: active ? '#fff' : '#475569',
                      fontSize: 10.5, fontWeight: 500,
                      boxShadow: active ? '0 3px 8px rgba(11,31,58,0.18)' : 'none',
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

        {/* User card */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px', marginTop: 10, borderTop: '0.5px solid rgba(11,31,58,0.10)' }}>
          <div style={{ width: 28, height: 28, borderRadius: '50%', background: NAVY_DEEP, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700 }}>A</div>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: T1 }}>Aarav Sharma</span>
            <span style={{ fontSize: 8, fontWeight: 500, color: T4, marginTop: 2, letterSpacing: '0.04em' }}>9A · 12</span>
          </div>
        </div>
      </div>

      {/* Main */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', minWidth: 0 }}>

        {/* Top header */}
        <div style={{ height: 44, background: '#fff', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 18px', flexShrink: 0 }}>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: NAVY_DEEP, letterSpacing: '0.06em' }}>EDULLENT DEMO SCHOOL</span>
            <span style={{ fontSize: 8, fontWeight: 600, color: '#94a3b8', letterSpacing: '0.18em', marginTop: 3 }}>MAIN CAMPUS</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="1.8"><polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 102.13-9.36L1 10" /></svg>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', lineHeight: 1 }}>
              <span style={{ fontSize: 10, fontWeight: 600, color: '#0f172a' }}>Aarav Sharma</span>
              <span style={{ fontSize: 8, fontWeight: 500, color: '#64748b', letterSpacing: '0.06em', marginTop: 3 }}>GUARDIAN</span>
            </div>
            <div style={{ width: 26, height: 26, borderRadius: '50%', background: NAVY_DEEP, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700 }}>A</div>
          </div>
        </div>

        <div style={{ flex: 1, padding: '14px 18px', overflow: 'hidden' }}>

          {/* Page title */}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 11 }}>
            <div>
              <h1 style={{ fontSize: 18, fontWeight: 700, color: T1, letterSpacing: '-0.4px', margin: 0, lineHeight: 1.1 }}>Performance Analytics</h1>
              <p style={{ fontSize: 10, color: T3, margin: '3px 0 0 0', fontWeight: 500 }}>Detailed breakdown of academic progress</p>
            </div>
            <div style={{ width: 30, height: 30, borderRadius: 9, background: `linear-gradient(135deg, ${BLUE}, ${BLUE_2})`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, boxShadow: `0 4px 12px ${BLUE}55` }}>A-</div>
          </div>

          {/* Overall Performance hero */}
          <div style={{ background: '#fff', borderRadius: 12, padding: '12px 16px', marginBottom: 10, position: 'relative', overflow: 'hidden', boxShadow: '0 6px 18px rgba(0,85,255,0.06)', border: `0.5px solid ${BLUE}1a` }}>
            <div style={{ position: 'absolute', top: -25, right: -20, width: 110, height: 110, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,85,255,0.05) 0%, transparent 70%)' }} />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', zIndex: 2 }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: T1, letterSpacing: '-0.2px' }}>Overall Performance</div>
                <div style={{ fontSize: 9, color: T3, marginTop: 2, fontWeight: 500 }}>Based on all assessments this term</div>
              </div>
              <div style={{ display: 'flex', gap: 6 }}>
                <div style={{ background: '#F4F7FE', borderRadius: 10, padding: '8px 16px', textAlign: 'center', border: `0.5px solid ${BLUE}1a`, minWidth: 70 }}>
                  <div style={{ fontSize: 18, fontWeight: 700, color: BLUE, letterSpacing: '-0.4px', lineHeight: 1 }}>A-</div>
                  <div style={{ fontSize: 7, fontWeight: 700, color: T4, letterSpacing: '0.1em', marginTop: 4 }}>GRADE</div>
                </div>
                <div style={{ background: '#F4F7FE', borderRadius: 10, padding: '8px 16px', textAlign: 'center', border: `0.5px solid ${BLUE}1a`, minWidth: 70 }}>
                  <div style={{ fontSize: 18, fontWeight: 700, color: T1, letterSpacing: '-0.4px', lineHeight: 1 }}>84%</div>
                  <div style={{ fontSize: 7, fontWeight: 700, color: T4, letterSpacing: '0.1em', marginTop: 4 }}>AVERAGE</div>
                </div>
                <div style={{ background: '#F4F7FE', borderRadius: 10, padding: '8px 16px', textAlign: 'center', border: `0.5px solid ${GREEN}38`, minWidth: 70 }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: GREEN, letterSpacing: '-0.3px', lineHeight: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6"><line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 5 19 12" /></svg>
                    +6%
                  </div>
                  <div style={{ fontSize: 7, fontWeight: 700, color: T4, letterSpacing: '0.1em', marginTop: 4 }}>TREND</div>
                </div>
              </div>
            </div>
          </div>

          {/* Subject cards 4-col */}
          <div className="role-screen-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, marginBottom: 10 }}>
            {subjects.map(s => {
              const fill = s.progress >= 80 ? `linear-gradient(90deg, ${BLUE}, #4499FF)` : s.progress >= 60 ? `linear-gradient(90deg, #FF8800, #FFAA33)` : `linear-gradient(90deg, #FF3355, #FF6688)`;
              return (
                <div key={s.name} style={{ background: '#fff', borderRadius: 11, padding: '10px 12px', boxShadow: '0 4px 12px rgba(0,85,255,0.06)', border: `0.5px solid ${BLUE}14` }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 7 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <div style={{ width: 22, height: 22, borderRadius: 6, background: `linear-gradient(135deg, ${s.accent}, ${s.accent}cc)`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, boxShadow: `0 3px 8px ${s.accent}40` }}>
                        {s.icon}
                      </div>
                      <span style={{ fontSize: 10, fontWeight: 700, color: T1, letterSpacing: '-0.15px' }}>{s.name}</span>
                    </div>
                    <div style={{ width: 22, height: 22, borderRadius: 6, background: `linear-gradient(135deg, ${BLUE}, ${BLUE_2})`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700, boxShadow: `0 2px 6px ${BLUE}40` }}>
                      {s.grade}
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 3 }}>
                    <span style={{ fontSize: 8, fontWeight: 700, color: T2 }}>Progress</span>
                    <span style={{ fontSize: 10, fontWeight: 700, color: BLUE }}>{s.progress}%</span>
                  </div>
                  <div style={{ height: 5, borderRadius: 3, overflow: 'hidden', background: '#F4F7FE', marginBottom: 6 }}>
                    <div style={{ height: '100%', width: `${s.progress}%`, background: fill, borderRadius: 3 }} />
                  </div>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, padding: '2px 8px', borderRadius: 999, fontSize: 8, fontWeight: 700, background: `${GREEN}1a`, color: '#007830', border: `0.5px solid ${GREEN}38` }}>
                    ✓ On Track
                  </span>
                </div>
              );
            })}
          </div>

          {/* Trend chart + AI Narrative */}
          <div className="role-screen-grid-2" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 10 }}>

            {/* Trend chart */}
            <div style={{ background: '#fff', borderRadius: 11, padding: '11px 14px', boxShadow: '0 4px 12px rgba(0,85,255,0.06)', border: `0.5px solid ${BLUE}14` }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: T1, letterSpacing: '-0.2px' }}>Performance Trend</div>
              <div style={{ fontSize: 8.5, color: T3, marginTop: 1, marginBottom: 6, fontWeight: 500 }}>Score progression across months</div>
              <svg width="100%" height={H + 16} viewBox={`0 0 ${W} ${H + 16}`} preserveAspectRatio="none">
                <defs>
                  <linearGradient id="parPerfArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={BLUE} stopOpacity="0.22" />
                    <stop offset="100%" stopColor={BLUE} stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[0, 25, 50, 75, 100].map(g => (
                  <line key={g} x1="0" y1={H - (g / 100) * H} x2={W} y2={H - (g / 100) * H} stroke="rgba(0,85,255,0.06)" strokeWidth="0.5" />
                ))}
                <polyline points={`0,${H} ${pts.join(' ')} ${W},${H}`} fill="url(#parPerfArea)" stroke="none" />
                <polyline points={pts.join(' ')} fill="none" stroke={BLUE} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                {pts.map((p, i) => {
                  const [x, y] = p.split(',').map(Number);
                  return <circle key={i} cx={x} cy={y} r="2" fill="#fff" stroke={BLUE} strokeWidth="1.4" />;
                })}
              </svg>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 1, fontSize: 8, color: T4, fontWeight: 600 }}>
                {months.map(m => <span key={m}>{m}</span>)}
              </div>
            </div>

            {/* AI Narrative */}
            <div style={{
              background: `linear-gradient(135deg, #050C28 0%, #0A1A52 35%, #0D2BA8 75%, ${BLUE} 100%)`,
              borderRadius: 11, padding: '12px 14px', color: '#fff', position: 'relative', overflow: 'hidden',
              boxShadow: '0 8px 22px rgba(0,8,60,0.32)',
            }}>
              <div style={{ position: 'absolute', top: -20, right: -15, width: 90, height: 90, borderRadius: '50%', background: 'radial-gradient(circle, rgba(123,63,244,0.4) 0%, transparent 65%)' }} />
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                  <div style={{ width: 22, height: 22, borderRadius: 6, background: 'linear-gradient(135deg, #7B3FF4, #0055FF)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4"><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1" /></svg>
                  </div>
                  <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: '0.12em' }}>AI NARRATIVE ANALYSIS</div>
                </div>
                <div style={{ fontSize: 10, lineHeight: 1.6, color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>
                  Aarav is performing best in <strong style={{ color: '#fff', fontWeight: 700 }}>Mathematics</strong> with 90% this term — an excellent result. The overall average of 84% reflects consistent effort. A little more daily revision can push it to the next level.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavIcon = ({ name, active }: { name: string; active: boolean }) => {
  const stroke = active ? '#fff' : '#64748b';
  const props = { width: 12, height: 12, viewBox: '0 0 24 24', fill: 'none', stroke, strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  switch (name) {
    case 'home': return <svg {...props}><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /></svg>;
    case 'user': return <svg {...props}><circle cx="12" cy="7" r="4" /><path d="M5 21c0-3.5 3-6 7-6s7 2.5 7 6" /></svg>;
    case 'book': return <svg {...props}><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></svg>;
    case 'cal': return <svg {...props}><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>;
    case 'lib': return <svg {...props}><line x1="4" y1="4" x2="4" y2="20" /><line x1="9" y1="4" x2="9" y2="20" /><line x1="14" y1="4" x2="14" y2="20" /><line x1="19" y1="4" x2="19" y2="20" /></svg>;
    case 'chart': return <svg {...props}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>;
    case 'brain': return <svg {...props}><path d="M9 2a3 3 0 00-3 3v.5A3.5 3.5 0 003 9v3a3 3 0 003 3v3a3 3 0 003 3h6a3 3 0 003-3v-3a3 3 0 003-3V9a3.5 3.5 0 00-3-3.5V5a3 3 0 00-3-3z" /></svg>;
    case 'check': return <svg {...props}><path d="M9 11l3 3L22 4" /></svg>;
    case 'file': return <svg {...props}><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>;
    case 'cap': return <svg {...props}><path d="M22 10v6M2 10l10-5 10 5-10 5z" /></svg>;
    case 'spark': return <svg {...props}><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1" /></svg>;
    case 'star': return <svg {...props}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" /></svg>;
    case 'msg': return <svg {...props}><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>;
    default: return <svg {...props}><circle cx="12" cy="12" r="9" /></svg>;
  }
};

export default ParentPerformanceScreen;