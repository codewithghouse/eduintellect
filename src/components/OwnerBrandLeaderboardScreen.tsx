/**
 * Live Branch Leaderboard screen — full-fidelity recreation of
 * owner-dashboard's main desktop view, sized to fit inside RoleScrollShowcase's
 * ContainerScroll iPad frame (no inner bezel, no scaled-down fonts).
 *
 * Used in RoleScrollShowcase as the actual screen instead of a static PNG.
 */

const OwnerBrandLeaderboardScreen = () => {
  const NAVY_DEEP = '#000A33';
  const NAVY = '#001A66';
  const BLUE = '#0055FF';
  const T1 = '#0F172A';
  const T3 = '#64748B';
  const T4 = '#94A3B8';
  const EMERALD = '#10B981';
  const RED = '#FF3333';
  const GOLD = '#FFAA00';
  const SILVER = '#A8A8B5';
  const BRONZE = '#CD7F32';
  const VIOLET = '#7B3FF4';

  const branches = [
    { rank: 1, name: 'Edullent Bandra', score: 91, students: 2140, teachers: 68, color: GOLD, trend: '+3.2', trendDir: 'up' },
    { rank: 2, name: 'Edullent Powai', score: 84, students: 1820, teachers: 54, color: SILVER, trend: '+1.4', trendDir: 'up' },
    { rank: 3, name: 'Edullent Andheri', score: 79, students: 1980, teachers: 62, color: BRONZE, trend: '0.0', trendDir: 'flat' },
    { rank: 4, name: 'Edullent Goregaon', score: 71, students: 1340, teachers: 41, color: BLUE, trend: '-1.8', trendDir: 'down' },
    { rank: 5, name: 'Edullent Thane', score: 64, students: 1140, teachers: 34, color: RED, trend: '-3.6', trendDir: 'down' },
  ];

  const months = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
  const lines = [
    { name: 'Edullent Bandra', color: GOLD, data: [88, 89, 90, 91, 92, 91] },
    { name: 'Edullent Powai', color: VIOLET, data: [82, 83, 84, 85, 86, 84] },
    { name: 'Edullent Andheri', color: BLUE, data: [78, 79, 80, 79, 81, 79] },
  ];

  const W = 380, H = 110;
  const min = 50, max = 100;
  const buildPts = (data: number[]) =>
    data.map((v, i) => `${((i / (data.length - 1)) * W).toFixed(1)},${(H - ((v - min) / (max - min)) * H).toFixed(1)}`).join(' ');

  const NAV_SECTIONS = [
    { title: 'OVERVIEW', items: [{ label: 'Dashboard', icon: 'dashboard' }] },
    { title: 'STUDENTS', items: [{ label: 'Students Intelligence', icon: 'users' }, { label: 'AI Risk Predictor', icon: 'brain' }] },
    { title: 'ACADEMICS', items: [{ label: 'Academics Overview', icon: 'book' }, { label: 'Fee Structure', icon: 'sheet' }] },
    { title: 'STAFF', items: [{ label: 'Teachers Directory', icon: 'list' }, { label: 'Teacher Performance', icon: 'cap' }, { label: 'Teacher Leaderboard', icon: 'trophy' }, { label: 'Principal Management', icon: 'usercog' }, { label: 'DEO Management', icon: 'shield' }] },
    { title: 'OPERATIONS', items: [{ label: 'Branches Comparison', icon: 'branch' }, { label: 'Branch Leaderboard', icon: 'award', active: true }, { label: 'Finance & Fees', icon: 'rupee' }, { label: 'Risks & Alerts', icon: 'alert' }] },
  ];

  return (
    <div style={{ background: '#EEF4FF', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif", overflow: 'hidden' }}>

      {/* ── Top Header ── */}
      <div style={{
        height: 52, background: '#fff', borderBottom: '1px solid #e2e8f0',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 18px', flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 30, height: 30, borderRadius: 8, background: NAVY_DEEP, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700, color: '#fff', letterSpacing: '0.04em' }}>EDLT</div>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: NAVY_DEEP, letterSpacing: '0.04em' }}>EDULLENT</span>
            <span style={{ fontSize: 9, fontWeight: 600, color: '#94a3b8', letterSpacing: '0.18em', marginTop: 3, textTransform: 'uppercase' }}>Group</span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ position: 'relative', padding: 4 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" />
            </svg>
            <span style={{ position: 'absolute', top: 4, right: 4, width: 6, height: 6, background: '#ef4444', borderRadius: '50%' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', lineHeight: 1 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: '#0f172a' }}>School Chairman</span>
            <span style={{ fontSize: 9, fontWeight: 500, color: '#64748b', letterSpacing: '0.06em', marginTop: 2, textTransform: 'uppercase' }}>Owner</span>
          </div>
          <div style={{ width: 30, height: 30, borderRadius: '50%', background: NAVY, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 600 }}>SC</div>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
          </svg>
        </div>
      </div>

      {/* ── Body ── */}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden', minHeight: 0 }}>

        {/* Sidebar */}
        <div className="role-screen-sidebar" style={{ width: 200, flexShrink: 0, padding: '10px 0 10px 10px' }}>
          <div style={{
            width: '100%', height: '100%', background: '#fff', borderRadius: 14,
            boxShadow: '0 6px 18px rgba(15,23,42,0.06), 0 1px 3px rgba(15,23,42,0.04)',
            display: 'flex', flexDirection: 'column', overflow: 'hidden',
          }}>
            <div style={{ flex: 1, padding: '12px 8px', overflowY: 'auto', minHeight: 0 }}>
              {NAV_SECTIONS.map((sec, sIdx) => (
                <div key={sec.title} style={{ marginTop: sIdx === 0 ? 0 : 10 }}>
                  <div style={{ padding: '0 10px', marginBottom: 5, fontSize: 9, fontWeight: 600, color: '#94a3b8', letterSpacing: '0.18em' }}>{sec.title}</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {sec.items.map((item: any) => {
                      const active = !!item.active;
                      return (
                        <div key={item.label} style={{
                          display: 'flex', alignItems: 'center', gap: 8,
                          padding: '7px 10px', borderRadius: 8,
                          background: active ? NAVY_DEEP : 'transparent',
                          color: active ? '#fff' : '#64748b',
                          fontSize: 11, fontWeight: 500,
                          boxShadow: active ? '0 3px 7px rgba(0,16,64,0.18)' : 'none',
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
            <div style={{ padding: 10, borderTop: '1px solid #f1f5f9' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 10px', borderRadius: 8, color: '#64748b', fontSize: 11, fontWeight: 500 }}>
                <NavIcon name="gear" active={false} />
                Settings
              </div>
            </div>
          </div>
        </div>

        {/* Main scroll area */}
        <div style={{ flex: 1, overflow: 'hidden', minWidth: 0, padding: '10px 14px 10px 8px' }}>

          {/* Hero banner */}
          <div style={{
            background: `linear-gradient(135deg, ${NAVY_DEEP} 0%, ${NAVY} 35%, #0044CC 75%, ${BLUE} 100%)`,
            borderRadius: 14, padding: '18px 22px', color: '#fff',
            marginBottom: 12, position: 'relative', overflow: 'hidden',
            boxShadow: '0 14px 40px rgba(0,8,60,0.32)',
          }}>
            <div style={{ position: 'absolute', top: -40, right: -30, width: 220, height: 220, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,170,0,0.20) 0%, transparent 65%)' }} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 10px', borderRadius: 999, background: 'rgba(255,255,255,0.14)', border: '0.5px solid rgba(255,255,255,0.22)', marginBottom: 8 }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="#FFCC22"><path d="M12 2l2 7h7l-5.5 4 2 7-5.5-4-5.5 4 2-7L3 9h7z" stroke="#FFCC22" strokeWidth="2" /></svg>
                <span style={{ fontSize: 10, fontWeight: 700, color: '#FFCC22', letterSpacing: '0.18em', textTransform: 'uppercase' }}>Edullent Group of Schools · April</span>
              </div>
              <h1 style={{ fontSize: 26, fontWeight: 600, letterSpacing: '-0.6px', lineHeight: 1.05, margin: 0 }}>
                Branch Leaderboard
              </h1>
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', marginTop: 5, fontWeight: 400 }}>
                Composite-ranked across attendance, academic results, and fee collection.
              </p>
              <div className="role-screen-grid-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8, marginTop: 14 }}>
                {[
                  { label: 'BRANCHES', val: '4' },
                  { label: 'STUDENTS', val: '4,286' },
                  { label: 'TEACHERS', val: '259' },
                  { label: 'NETWORK AVG', val: '87.0', sub: 'Top 91.0', accent: '#6FFFAA' },
                  { label: 'AT-RISK', val: '142', sub: 'across the network', accent: '#FFCC22' },
                ].map(k => (
                  <div key={k.label} style={{ background: 'rgba(255,255,255,0.10)', borderRadius: 8, padding: '8px 10px', border: '0.5px solid rgba(255,255,255,0.14)' }}>
                    <div style={{ fontSize: 8, fontWeight: 700, color: 'rgba(255,255,255,0.65)', letterSpacing: '0.14em', marginBottom: 4 }}>{k.label}</div>
                    <div style={{ fontSize: 18, fontWeight: 700, color: k.accent || '#fff', letterSpacing: '-0.4px', lineHeight: 1 }}>{k.val}</div>
                    {k.sub && <div style={{ fontSize: 8, fontWeight: 500, color: 'rgba(255,255,255,0.55)', marginTop: 3 }}>{k.sub}</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2-col charts */}
          <div className="role-screen-grid-2" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 10, marginBottom: 12 }}>

            {/* Composite ranking horizontal bars */}
            <div style={{ background: '#fff', borderRadius: 12, padding: '12px 14px', boxShadow: '0 4px 12px rgba(0,85,255,0.06)', border: '0.5px solid rgba(0,85,255,0.07)' }}>
              <div style={{ fontSize: 9, fontWeight: 700, color: T3, letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 4 }}>Composite Ranking</div>
              <h3 style={{ fontSize: 13, fontWeight: 700, color: T1, letterSpacing: '-0.2px', margin: '0 0 10px' }}>Where each branch stands this month</h3>
              {branches.slice(0, 4).map(b => (
                <div key={b.name} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <span style={{ fontSize: 10, fontWeight: 600, color: T3, minWidth: 110 }}>{b.name}</span>
                  <div style={{ flex: 1, height: 18, background: '#F1F5F9', borderRadius: 4, position: 'relative', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${b.score}%`, background: `linear-gradient(90deg, ${b.color}, ${b.color}cc)`, borderRadius: 4 }} />
                  </div>
                </div>
              ))}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, fontSize: 8, color: T4, paddingLeft: 118 }}>
                {[0, 25, 50, 75, 100].map(n => <span key={n}>{n}</span>)}
              </div>
              <div style={{ marginTop: 5, fontSize: 8, color: T4, fontWeight: 500, paddingLeft: 118 }}>Click any bar to load its analysis below · Network average 87.0</div>
            </div>

            {/* Top branches over time */}
            <div style={{ background: '#fff', borderRadius: 12, padding: '12px 14px', boxShadow: '0 4px 12px rgba(0,85,255,0.06)', border: '0.5px solid rgba(0,85,255,0.07)' }}>
              <div style={{ fontSize: 9, fontWeight: 700, color: T3, letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 4 }}>6-Month Attendance Trend</div>
              <h3 style={{ fontSize: 13, fontWeight: 700, color: T1, letterSpacing: '-0.2px', margin: '0 0 8px' }}>Top branches over time</h3>
              <svg width="100%" height={H + 18} viewBox={`0 0 ${W} ${H + 18}`} preserveAspectRatio="none">
                {[0, 25, 50, 75, 100].map(g => (
                  <line key={g} x1="0" y1={H - (g / 100) * H} x2={W} y2={H - (g / 100) * H} stroke="#F1F5F9" strokeWidth="0.7" />
                ))}
                {[0, 25, 50, 75, 100].map(g => (
                  <text key={g} x="-2" y={H - (g / 100) * H + 3} fontSize="8" fill={T4} textAnchor="end">{g}</text>
                ))}
                {lines.map(l => (
                  <polyline key={l.name} points={buildPts(l.data)} fill="none" stroke={l.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                ))}
                {lines.flatMap(l => l.data.map((v, i) => {
                  const x = (i / (l.data.length - 1)) * W;
                  const y = H - ((v - min) / (max - min)) * H;
                  return <circle key={`${l.name}-${i}`} cx={x} cy={y} r="2.5" fill="#fff" stroke={l.color} strokeWidth="1.6" />;
                }))}
              </svg>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 2, fontSize: 8, color: T4 }}>
                {months.map(m => <span key={m}>{m}</span>)}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 8, justifyContent: 'center' }}>
                {lines.map(l => (
                  <div key={l.name} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <span style={{ width: 7, height: 7, borderRadius: '50%', background: l.color }} />
                    <span style={{ fontSize: 8, fontWeight: 600, color: T3 }}>{l.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick-glance ranking cards */}
          <div>
            <div style={{ fontSize: 9, fontWeight: 700, color: T3, letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 4 }}>All Branches</div>
            <h3 style={{ fontSize: 13, fontWeight: 700, color: T1, letterSpacing: '-0.2px', margin: '0 0 8px' }}>Quick-glance ranking cards</h3>
            <div className="role-screen-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
              {branches.slice(0, 4).map(b => (
                <div key={b.name} style={{ background: '#fff', borderRadius: 10, padding: '10px 12px', boxShadow: '0 4px 12px rgba(0,85,255,0.06)', border: '0.5px solid rgba(0,85,255,0.07)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
                    <div style={{ width: 18, height: 18, borderRadius: 5, background: `linear-gradient(135deg, ${b.color}, ${b.color}cc)`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700 }}>{b.rank}</div>
                    <span style={{ fontSize: 8, fontWeight: 600, color: b.trendDir === 'up' ? EMERALD : b.trendDir === 'down' ? RED : T4 }}>{b.trendDir === 'up' ? '↑' : b.trendDir === 'down' ? '↓' : '—'} {b.trend}</span>
                  </div>
                  <div style={{ fontSize: 10, fontWeight: 700, color: T1, lineHeight: 1.2 }}>{b.name}</div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: b.color, letterSpacing: '-0.4px', marginTop: 2, lineHeight: 1 }}>{b.score}<span style={{ fontSize: 8, color: T4, marginLeft: 1, fontWeight: 500 }}>%</span></div>
                </div>
              ))}
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
    case 'book': return <svg {...props}><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></svg>;
    case 'sheet': return <svg {...props}><rect x="4" y="3" width="16" height="18" rx="2" /><line x1="8" y1="9" x2="16" y2="9" /><line x1="8" y1="13" x2="16" y2="13" /></svg>;
    case 'list': return <svg {...props}><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /></svg>;
    case 'cap': return <svg {...props}><path d="M22 10v6M2 10l10-5 10 5-10 5z" /></svg>;
    case 'trophy': return <svg {...props}><path d="M6 9H4.5a2.5 2.5 0 010-5H6" /><path d="M18 9h1.5a2.5 2.5 0 000-5H18" /><path d="M4 22h16" /><path d="M18 2H6v7a6 6 0 0012 0V2z" /></svg>;
    case 'usercog': return <svg {...props}><circle cx="9" cy="7" r="4" /><path d="M3 21v-2a4 4 0 014-4h4" /><circle cx="17" cy="17" r="3" /></svg>;
    case 'shield': return <svg {...props}><path d="M12 2L4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6z" /></svg>;
    case 'branch': return <svg {...props}><line x1="6" y1="3" x2="6" y2="15" /><circle cx="18" cy="6" r="3" /><circle cx="6" cy="18" r="3" /></svg>;
    case 'award': return <svg {...props}><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>;
    case 'rupee': return <svg {...props}><path d="M6 4h12M6 9h12M9 14l5 6M14 4c2 0 4 2 4 5s-2 5-4 5h-8" /></svg>;
    case 'alert': return <svg {...props}><path d="M12 2L2 21h20L12 2z" /><line x1="12" y1="9" x2="12" y2="13" /></svg>;
    case 'gear': return <svg {...props}><circle cx="12" cy="12" r="3" /></svg>;
    default: return <svg {...props}><circle cx="12" cy="12" r="9" /></svg>;
  }
};

export default OwnerBrandLeaderboardScreen;
