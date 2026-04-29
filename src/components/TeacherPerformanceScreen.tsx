/**
 * Live Teacher Performance screen — full-fidelity recreation of principal's
 * Teacher Performance page, sized for RoleScrollShowcase's ContainerScroll.
 */

const TeacherPerformanceScreen = () => {
  const NAVY = '#001040';
  const NAVY_2 = '#001A66';
  const BLUE = '#0055FF';
  const BLUE_2 = '#1166FF';
  const T1 = '#0F172A';
  const T2 = '#1E293B';
  const T3 = '#64748B';
  const T4 = '#94A3B8';
  const GREEN = '#00C853';
  const VIOLET = '#7B3FF4';
  const ORANGE = '#FF8800';
  const GOLD = '#FFAA00';

  const NAV_SECTIONS = [
    { title: 'STUDENTS', items: [
      { label: 'Teachers', icon: 'users' },
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
    { title: 'ASSESSMENTS', items: [
      { label: 'Exams & Results', icon: 'cap' },
      { label: 'Assignments & Marks', icon: 'mark' },
    ]},
    { title: 'PERFORMANCE', items: [
      { label: 'Teacher Performance', icon: 'gauge', active: true },
      { label: 'Teacher Leaderboard', icon: 'trophy' },
      { label: 'Principal Leaderboards', icon: 'leader' },
    ]},
    { title: 'CONFIGURATION', items: [
      { label: 'Fee Structure', icon: 'rupee' },
    ]},
  ];

  const teachers = [
    { initials: 'MR', avatarBg: '#3B5BDB', name: 'Mrs. Priya Mehta', subject: 'Mathematics', subColor: BLUE, classes: 1, students: 31, score: 88, scoreGrade: 'A', vs: '+10%', trend: '+11%' },
    { initials: 'DR', avatarBg: '#6741D9', name: 'Dr. Anil Reddy', subject: 'Science', subColor: VIOLET, classes: 2, students: 61, score: 82, scoreGrade: 'B', vs: '+4%', trend: '+8%' },
    { initials: 'MR', avatarBg: '#0EAFAE', name: 'Mrs. Rashmi Pandey', subject: 'Physics', subColor: '#0EAFAE', classes: 1, students: 32, score: 89, scoreGrade: 'A', vs: '+11%', trend: '+5%' },
    { initials: 'MR', avatarBg: '#FF8800', name: 'Mr. Kiran Patel', subject: 'English', subColor: ORANGE, classes: 3, students: 93, score: 78, scoreGrade: 'B', vs: '+0%', trend: '+5%' },
    { initials: 'MR', avatarBg: '#0055FF', name: 'Mrs. Meena Kapoor', subject: 'English', subColor: ORANGE, classes: 1, students: 33, score: 79, scoreGrade: 'B', vs: '+1%', trend: '+4%' },
    { initials: 'MR', avatarBg: '#00C853', name: 'Mrs. Anita Choudhury', subject: 'Biology', subColor: GREEN, classes: 1, students: 30, score: 87, scoreGrade: 'A', vs: '+9%', trend: '+3%' },
  ];

  return (
    <div style={{ background: '#F4F7FE', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden', fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif" }}>

      {/* Top Header */}
      <div style={{ height: 50, background: '#fff', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 18px', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: NAVY, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7-4.5-9.5-9C-1 6.5 5 1 12 6c7-5 13 .5 9.5 6-2.5 4.5-9.5 9-9.5 9z" /></svg>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: NAVY, letterSpacing: '0.04em' }}>EDULLENT INTERNATIONAL SCHOOL</span>
            <span style={{ fontSize: 8, fontWeight: 600, color: '#94a3b8', letterSpacing: '0.18em', marginTop: 3 }}>MAIN CAMPUS</span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ position: 'relative' }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" />
            </svg>
            <span style={{ position: 'absolute', top: -2, right: -2, width: 6, height: 6, background: '#ef4444', borderRadius: '50%' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', lineHeight: 1 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: '#0f172a' }}>Dr. Vikram Sharma</span>
            <span style={{ fontSize: 8, fontWeight: 600, color: '#64748b', letterSpacing: '0.06em', marginTop: 3 }}>PRINCIPAL</span>
          </div>
          <div style={{ width: 28, height: 28, borderRadius: '50%', background: NAVY_2, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 600 }}>DR</div>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
          </svg>
        </div>
      </div>

      {/* Body */}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden', minHeight: 0 }}>

        {/* Sidebar */}
        <div className="role-screen-sidebar" style={{ width: 200, flexShrink: 0, background: '#fff', borderRight: '1px solid #e2e8f0', padding: '12px 10px', overflowY: 'auto' }}>
          {NAV_SECTIONS.map((sec, sIdx) => (
            <div key={sec.title} style={{ marginTop: sIdx === 0 ? 0 : 11 }}>
              <div style={{ padding: '0 10px', marginBottom: 5, fontSize: 8.5, fontWeight: 600, color: T4, letterSpacing: '0.18em' }}>{sec.title}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {sec.items.map((item: any) => {
                  const active = !!item.active;
                  return (
                    <div key={item.label} style={{
                      display: 'flex', alignItems: 'center', gap: 8,
                      padding: '6px 10px', borderRadius: 8,
                      background: active ? NAVY : 'transparent',
                      color: active ? '#fff' : '#475569',
                      fontSize: 10.5, fontWeight: 500,
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
        <div style={{ flex: 1, padding: '12px 16px', overflow: 'hidden', minWidth: 0 }}>

          {/* Page header */}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 11 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
              <div style={{ width: 32, height: 32, borderRadius: 9, background: `linear-gradient(135deg, ${BLUE}, ${BLUE_2})`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 4px 12px ${BLUE}55` }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 14l4-4" /><path d="M3.34 17a10 10 0 1117.32 0" /></svg>
              </div>
              <div>
                <h1 style={{ fontSize: 17, fontWeight: 700, color: T1, letterSpacing: '-0.4px', margin: 0, lineHeight: 1.1 }}>Teacher Performance</h1>
                <div style={{ display: 'flex', gap: 14, marginTop: 4 }}>
                  {['Impact Analysis', 'Same Subject Across Teachers', 'Same Teacher Across Classes'].map((t, i) => (
                    <span key={t} style={{ fontSize: 9, fontWeight: 600, color: i === 0 ? BLUE : T3 }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 12px', background: '#fff', borderRadius: 8, border: '0.5px solid rgba(0,85,255,0.10)', minWidth: 200 }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={T4} strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
              <span style={{ fontSize: 10, color: T4 }}>Search teacher or subject…</span>
            </div>
          </div>

          {/* Hero gradient card */}
          <div style={{
            background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_2} 35%, ${BLUE} 100%)`,
            borderRadius: 12, padding: '13px 18px', color: '#fff',
            marginBottom: 10, position: 'relative', overflow: 'hidden',
            boxShadow: '0 12px 28px rgba(0,16,64,0.32)',
          }}>
            <div style={{ position: 'absolute', top: -25, right: -25, width: 120, height: 120, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.10) 0%, transparent 65%)' }} />
            <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(255,255,255,0.16)', border: '0.5px solid rgba(255,255,255,0.26)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
                </div>
                <div>
                  <div style={{ fontSize: 9, fontWeight: 700, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>SCHOOL AVG · 17 TEACHERS</div>
                  <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.6px', marginTop: 2, lineHeight: 1 }}>77%</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                <span style={{ display: 'inline-flex', padding: '4px 12px', borderRadius: 999, background: '#FFCC22', color: NAVY, fontSize: 11, fontWeight: 700, letterSpacing: '-0.1px' }}>Strong tier</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '6px 14px', background: 'rgba(255,255,255,0.10)', borderRadius: 8, border: '0.5px solid rgba(255,255,255,0.16)' }}>
                  {[
                    { val: '17', label: 'FACULTY' },
                    { val: '10', label: 'TOP TIER' },
                    { val: '2', label: 'SUPPORT' },
                  ].map(s => (
                    <div key={s.label} style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: 14, fontWeight: 700, lineHeight: 1, letterSpacing: '-0.3px' }}>{s.val}</div>
                      <div style={{ fontSize: 7, fontWeight: 700, color: 'rgba(255,255,255,0.65)', letterSpacing: '0.14em', marginTop: 3 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 4 KPI tiles */}
          <div className="role-screen-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, marginBottom: 10 }}>
            {[
              { label: 'TOTAL TEACHERS', val: '17', sub: 'In branch', color: BLUE, bg: 'linear-gradient(135deg, #DEE6F8 0%, #F8FAFE 100%)', icon: 'users' },
              { label: 'AVG CLASS SCORE', val: '77%', sub: 'Strong', color: VIOLET, bg: 'linear-gradient(135deg, #F2EBFF 0%, #E8DEFC 100%)', icon: 'bar' },
              { label: 'TOP PERFORMERS', val: '10', sub: 'Score ≥ 89%', color: GREEN, bg: 'linear-gradient(135deg, #E8FBEF 0%, #DAF6E4 100%)', icon: 'star' },
              { label: 'NEEDS SUPPORT', val: '2', sub: 'Score < 60%', color: GOLD, bg: 'linear-gradient(135deg, #FFF6E0 0%, #FFEDC4 100%)', icon: 'alert' },
            ].map(c => (
              <div key={c.label} style={{ background: c.bg, borderRadius: 11, padding: '11px 14px', position: 'relative', overflow: 'hidden', border: `0.5px solid ${c.color}33` }}>
                <div style={{ position: 'absolute', bottom: 4, right: 8, color: c.color, opacity: 0.22, lineHeight: 0 }}>
                  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    {c.icon === 'users' && <><circle cx="9" cy="7" r="4" /><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /></>}
                    {c.icon === 'bar' && <><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></>}
                    {c.icon === 'star' && <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />}
                    {c.icon === 'alert' && <><polygon points="12 2 22 22 2 22 12 2" /><line x1="12" y1="9" x2="12" y2="13" /></>}
                  </svg>
                </div>
                <div style={{ width: 24, height: 24, borderRadius: 7, background: `${c.color}28`, color: c.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 5, position: 'relative' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    {c.icon === 'users' && <><circle cx="9" cy="7" r="4" /><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /></>}
                    {c.icon === 'bar' && <><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></>}
                    {c.icon === 'star' && <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />}
                    {c.icon === 'alert' && <><polygon points="12 2 22 22 2 22 12 2" /><line x1="12" y1="9" x2="12" y2="13" /></>}
                  </svg>
                </div>
                <div style={{ fontSize: 8, fontWeight: 700, color: T4, letterSpacing: '0.1em', marginBottom: 3, position: 'relative' }}>{c.label}</div>
                <div style={{ fontSize: 22, fontWeight: 700, color: c.color, letterSpacing: '-0.5px', lineHeight: 1, position: 'relative' }}>{c.val}</div>
                <div style={{ fontSize: 9, fontWeight: 600, color: T3, marginTop: 4, position: 'relative' }}>{c.sub}</div>
              </div>
            ))}
          </div>

          {/* Roster header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 6 }}>
            <span style={{ fontSize: 9, fontWeight: 700, color: T3, letterSpacing: '0.16em', textTransform: 'uppercase' }}>Faculty Performance Roster</span>
            <span style={{ fontSize: 7, fontWeight: 700, color: BLUE, background: `${BLUE}14`, padding: '2px 7px', borderRadius: 999, letterSpacing: '0.06em' }}>17 TEACHERS</span>
          </div>

          {/* Roster table */}
          <div style={{ background: '#fff', borderRadius: 11, boxShadow: '0 4px 12px rgba(0,85,255,0.06)', border: `0.5px solid ${BLUE}14`, overflow: 'hidden' }}>
            {/* Header row */}
            <div style={{ display: 'grid', gridTemplateColumns: '36px 1fr 0.9fr 0.5fr 0.6fr 0.7fr 0.7fr 0.7fr 50px', gap: 6, padding: '8px 12px', borderBottom: `0.5px solid ${BLUE}0d` }}>
              <span></span>
              {['TEACHER', 'SUBJECTS', 'CLASSES', 'STUDENTS', 'AVG SCORE', 'VS SCHOOL', 'TREND', ''].map(h => (
                <span key={h} style={{ fontSize: 8, fontWeight: 700, color: T4, letterSpacing: '0.12em' }}>{h}</span>
              ))}
            </div>
            {teachers.map((t, i) => (
              <div key={t.name} style={{ display: 'grid', gridTemplateColumns: '36px 1fr 0.9fr 0.5fr 0.6fr 0.7fr 0.7fr 0.7fr 50px', gap: 6, alignItems: 'center', padding: '8px 12px', borderBottom: i < teachers.length - 1 ? `0.5px solid ${BLUE}0d` : 'none' }}>
                <div style={{ width: 26, height: 26, borderRadius: '50%', background: t.avatarBg, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700 }}>
                  {t.initials}
                </div>
                <span style={{ fontSize: 11, fontWeight: 600, color: T2 }}>{t.name}</span>
                <span style={{ display: 'inline-flex', alignSelf: 'center', justifySelf: 'flex-start', padding: '3px 9px', borderRadius: 999, background: `${t.subColor}14`, color: t.subColor, fontSize: 9, fontWeight: 600 }}>{t.subject}</span>
                <span style={{ fontSize: 11, fontWeight: 500, color: T2 }}>{t.classes}</span>
                <span style={{ fontSize: 11, fontWeight: 500, color: T2 }}>{t.students}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: GREEN }}>{t.score}%</span>
                  <span style={{ width: 14, height: 14, borderRadius: 4, background: t.scoreGrade === 'A' ? `${GREEN}28` : `${BLUE}28`, color: t.scoreGrade === 'A' ? GREEN : BLUE, fontSize: 8, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{t.scoreGrade}</span>
                </div>
                <span style={{ fontSize: 10, fontWeight: 700, color: GREEN }}>{t.vs}</span>
                <span style={{ fontSize: 10, fontWeight: 700, color: GREEN, display: 'flex', alignItems: 'center', gap: 3 }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /></svg>
                  {t.trend}
                </span>
                <span style={{ fontSize: 9, fontWeight: 700, color: '#fff', background: `linear-gradient(135deg, ${BLUE}, ${BLUE_2})`, padding: '4px 9px', borderRadius: 6, display: 'inline-flex', alignItems: 'center', gap: 3, justifyContent: 'center' }}>
                  View ›
                </span>
              </div>
            ))}
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
    case 'users': return <svg {...props}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>;
    case 'book': return <svg {...props}><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></svg>;
    case 'lib': return <svg {...props}><line x1="4" y1="4" x2="4" y2="20" /><line x1="9" y1="4" x2="9" y2="20" /><line x1="14" y1="4" x2="14" y2="20" /><line x1="19" y1="4" x2="19" y2="20" /></svg>;
    case 'check': return <svg {...props}><path d="M9 11l3 3L22 4" /></svg>;
    case 'shield': return <svg {...props}><path d="M12 2L4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6z" /></svg>;
    case 'msg': return <svg {...props}><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>;
    case 'note': return <svg {...props}><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>;
    case 'cap': return <svg {...props}><path d="M22 10v6M2 10l10-5 10 5-10 5z" /></svg>;
    case 'mark': return <svg {...props}><path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" /></svg>;
    case 'gauge': return <svg {...props}><path d="M12 14l4-4" /><path d="M3.34 17a10 10 0 1117.32 0" /></svg>;
    case 'trophy': return <svg {...props}><path d="M6 9H4.5a2.5 2.5 0 010-5H6" /><path d="M18 9h1.5a2.5 2.5 0 000-5H18" /><path d="M4 22h16" /><path d="M18 2H6v7a6 6 0 0012 0V2z" /></svg>;
    case 'leader': return <svg {...props}><polyline points="3 17 9 11 13 15 21 7" /></svg>;
    case 'rupee': return <svg {...props}><path d="M6 4h12M6 9h12M9 14l5 6M14 4c2 0 4 2 4 5s-2 5-4 5h-8" /></svg>;
    default: return <svg {...props}><circle cx="12" cy="12" r="9" /></svg>;
  }
};

export default TeacherPerformanceScreen;
