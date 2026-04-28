/**
 * Static iPad mockup — Principal Dashboard.
 * Mirrors the live /principal page: sidebar + Academic Health Index hero +
 * 4 stat cards + Today's Risk Alerts + Attendance Trend chart.
 * All hardcoded mock data.
 */

import IPadBezel from './IPadBezel';

const PrincipalDashboardIPad = () => {
  const NAVY_DEEP = '#001040';
  const NAVY = '#001A66';
  const BLUE = '#0055FF';
  const TT1 = '#001040';
  const TT3 = '#5070B0';
  const TT4 = '#99AACC';
  const GREEN = '#00C853';
  const RED = '#FF3355';
  const ORANGE = '#FF8800';
  const VIOLET = '#7B3FF4';

  const NAV: { title: string; items: { label: string; icon: string; active?: boolean }[] }[] = [
    { title: 'Overview', items: [{ label: 'Dashboard', icon: 'dashboard', active: true }] },
    {
      title: 'Students',
      items: [
        { label: 'Students', icon: 'users' },
        { label: 'Student Intelligence', icon: 'brain' },
        { label: 'Risk Students', icon: 'alert' },
      ],
    },
    {
      title: 'Academics',
      items: [
        { label: 'Classes & Sections', icon: 'monitor' },
        { label: 'Teachers', icon: 'cap' },
        { label: 'Academics', icon: 'book' },
        { label: 'Syllabus', icon: 'lib' },
      ],
    },
    {
      title: 'Operations',
      items: [
        { label: 'Attendance', icon: 'check' },
        { label: 'Discipline & Incidents', icon: 'shield' },
      ],
    },
    {
      title: 'Communication',
      items: [
        { label: 'Parent Communication', icon: 'msg' },
        { label: 'Teacher Notes', icon: 'note' },
      ],
    },
    { title: 'Assessments', items: [{ label: 'Reports', icon: 'chart' }] },
  ];

  return (
    <IPadBezel>
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden', minHeight: 0 }}>
        {/* SIDEBAR */}
        <div style={{ width: 160, flexShrink: 0, padding: '8px 0 8px 8px' }}>
          <div
            style={{
              width: '100%',
              height: '100%',
              background: '#fff',
              borderRadius: 12,
              boxShadow: '0 6px 18px rgba(15,23,42,0.06), 0 1px 3px rgba(15,23,42,0.04)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            <div style={{ padding: '10px 8px 6px', borderBottom: '1px solid #f1f5f9' }}>
              <div style={{ fontSize: 6, fontWeight: 500, color: '#94a3b8', letterSpacing: '0.22em', textTransform: 'uppercase' as const }}>
                Navigation
              </div>
            </div>
            <div style={{ flex: 1, padding: '8px 6px', overflowY: 'auto', minHeight: 0 }}>
              {NAV.map((sec, sIdx) => (
                <div key={sec.title} style={{ marginTop: sIdx === 0 ? 0 : 8 }}>
                  <div style={{ padding: '0 8px', marginBottom: 3, fontSize: 6, fontWeight: 500, color: '#94a3b8', textTransform: 'uppercase' as const, letterSpacing: '0.18em' }}>
                    {sec.title}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    {sec.items.map(item => (
                      <div
                        key={item.label}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 7,
                          padding: '4px 8px',
                          borderRadius: 6,
                          background: item.active ? NAVY_DEEP : 'transparent',
                          color: item.active ? '#fff' : '#64748b',
                          fontSize: 8,
                          fontWeight: 500,
                          letterSpacing: '-0.05px',
                          transform: item.active ? 'scale(1.02)' : 'scale(1)',
                          boxShadow: item.active ? '0 3px 7px rgba(0,16,64,0.18)' : 'none',
                        }}
                      >
                        <NavIcon name={item.icon} active={!!item.active} />
                        <span>{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MAIN */}
        <div style={{ flex: 1, padding: 12, overflowY: 'auto', minWidth: 0 }}>
          {/* Page header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: 'rgba(0,85,255,0.12)', color: BLUE, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7-4.5-9.5-9C-1 6.5 5 1 12 6c7-5 13 .5 9.5 6-2.5 4.5-9.5 9-9.5 9z" /></svg>
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 500, color: TT1, letterSpacing: '-0.3px', lineHeight: 1 }}>Principal Dashboard</div>
              <div style={{ fontSize: 7, color: TT3, marginTop: 2 }}>Real-time school intelligence overview</div>
            </div>
          </div>

          {/* Academic Health Index hero */}
          <div
            style={{
              borderRadius: 12,
              padding: '14px 16px',
              background: `linear-gradient(135deg, ${NAVY_DEEP} 0%, ${NAVY} 35%, #0044CC 70%, ${BLUE} 100%)`,
              color: '#fff',
              marginBottom: 8,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 6px 18px rgba(0,8,60,0.22)',
            }}
          >
            <div style={{ position: 'absolute', top: -25, right: -25, width: 110, height: 110, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.10) 0%, transparent 65%)' }} />
            <div style={{ width: 32, height: 32, borderRadius: 9, background: 'rgba(255,255,255,0.14)', border: '0.5px solid rgba(255,255,255,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative', zIndex: 2 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7-4.5-9.5-9C-1 6.5 5 1 12 6c7-5 13 .5 9.5 6-2.5 4.5-9.5 9-9.5 9z" /></svg>
            </div>
            <div style={{ flex: 1, position: 'relative', zIndex: 2 }}>
              <div style={{ fontSize: 7, fontWeight: 500, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>Academic Health Index</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 4 }}>
                <span style={{ fontSize: 32, fontWeight: 300, lineHeight: 1, letterSpacing: '-1.4px' }}>85.4</span>
                <span style={{ fontSize: 12, fontWeight: 400, color: 'rgba(255,255,255,0.6)' }}>/100</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, position: 'relative', zIndex: 2 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <div style={{ fontSize: 11, fontWeight: 500, color: '#6FFFAA' }}>↑ 1.2%</div>
                <div style={{ fontSize: 6, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.04em', marginTop: 2 }}>vs Last 7 Days</div>
              </div>
              <div style={{ width: 1, height: 26, background: 'rgba(255,255,255,0.18)' }} />
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <div style={{ fontSize: 11, fontWeight: 500, color: '#fff' }}>Good</div>
                <div style={{ fontSize: 6, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.04em', marginTop: 2 }}>Overall Status</div>
              </div>
            </div>
          </div>

          {/* 4 stat cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 7, marginBottom: 8 }}>
            {[
              { label: 'Total Students', val: '487', sub: 'Enrolled this branch', color: BLUE, bg: 'linear-gradient(135deg, #DEE6F8 0%, #F8FAFE 100%)', icon: 'users' },
              { label: 'Teachers', val: '32', sub: 'Active staff', color: GREEN, bg: 'linear-gradient(135deg, #E8FBEF 0%, #DAF6E4 100%)', icon: 'cap' },
              { label: "Today's Attendance", val: '94%', sub: '↑ 2% vs yesterday', color: ORANGE, bg: 'linear-gradient(135deg, #FFF6E8 0%, #FFEED4 100%)', icon: 'cal' },
              { label: 'Pending Incidents', val: '3', sub: 'Action required', color: RED, bg: 'linear-gradient(135deg, #FFEEF0 0%, #FFE2E6 100%)', icon: 'alert' },
            ].map(c => (
              <div key={c.label} style={{ background: c.bg, border: `0.5px solid ${c.color}33`, borderRadius: 11, padding: '8px 10px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ width: 22, height: 22, borderRadius: 6, background: `${c.color}1F`, color: c.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 4 }}>
                  <NavIcon name={c.icon} active={false} customStroke={c.color} />
                </div>
                <div style={{ fontSize: 6, fontWeight: 500, color: c.color, letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 3 }}>{c.label}</div>
                <div style={{ fontSize: 18, fontWeight: 300, color: TT1, letterSpacing: '-0.7px', lineHeight: 1 }}>{c.val}</div>
                <div style={{ fontSize: 6, fontWeight: 500, color: c.color, marginTop: 3 }}>{c.sub}</div>
              </div>
            ))}
          </div>

          {/* 2-col: Today's Risk Alerts + Attendance Trend */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {/* Risk Alerts */}
            <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 7 }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={RED} strokeWidth="2"><circle cx="12" cy="12" r="9" /><line x1="12" y1="8" x2="12" y2="12" /><circle cx="12" cy="16" r="0.6" fill={RED} /></svg>
                <div style={{ fontSize: 9, fontWeight: 500, color: TT1 }}>Today's Risk Alerts</div>
                <div style={{ marginLeft: 'auto', fontSize: 6, fontWeight: 500, color: BLUE }}>View All ›</div>
              </div>
              {[
                { name: 'Rohit Yadav — Grade 7C', reason: 'Attendance 48% · At risk', tier: 'CRITICAL', tone: RED },
                { name: 'Aditi Joshi — Grade 9A', reason: 'Attendance 64% · At risk', tier: 'WARNING', tone: ORANGE },
                { name: 'Karan Malhotra — Grade 8C', reason: 'Repeated late submissions', tier: 'WARNING', tone: ORANGE },
                { name: 'Pranav Desai — Grade 7B', reason: 'Avg score 32% · Below passing', tier: 'CRITICAL', tone: RED },
                { name: 'Saanvi Bose — Grade 6A', reason: 'Avg score 46% · Below passing', tier: 'WARNING', tone: ORANGE },
              ].map((a, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '5px 0', borderBottom: i < 4 ? '0.5px solid #F1F5F9' : 'none' }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: a.tone, flexShrink: 0 }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 7, fontWeight: 500, color: TT1, lineHeight: 1.2 }}>{a.name}</div>
                    <div style={{ fontSize: 6, color: TT4, marginTop: 1 }}>{a.reason}</div>
                  </div>
                  <span style={{ fontSize: 5, fontWeight: 500, color: '#fff', background: a.tone, padding: '2px 6px', borderRadius: 999, letterSpacing: '0.1em' }}>{a.tier}</span>
                </div>
              ))}
            </div>

            {/* Attendance Trend chart */}
            <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 7 }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
                <div style={{ fontSize: 9, fontWeight: 500, color: TT1 }}>Attendance Trend · 30 Days</div>
              </div>
              <svg viewBox="0 0 300 130" style={{ width: '100%', height: 130 }}>
                <defs>
                  <linearGradient id="attGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={BLUE} stopOpacity="0.18" />
                    <stop offset="100%" stopColor={BLUE} stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Y-axis labels */}
                {[
                  { v: 96, y: 14 },
                  { v: 93, y: 38 },
                  { v: 90, y: 62 },
                  { v: 87, y: 86 },
                  { v: 84, y: 110 },
                ].map(g => (
                  <g key={g.v}>
                    <text x="0" y={g.y + 3} fontSize="7" fill={TT4}>{g.v}%</text>
                    <line x1="22" y1={g.y} x2="298" y2={g.y} stroke="#F1F5F9" strokeWidth="0.5" />
                  </g>
                ))}
                {/* Area + line */}
                <path
                  d="M 22 88 L 50 84 L 78 80 L 106 78 L 134 72 L 162 70 L 190 60 L 218 58 L 246 50 L 274 42 L 298 36 L 298 110 L 22 110 Z"
                  fill="url(#attGrad)"
                />
                <path
                  d="M 22 88 L 50 84 L 78 80 L 106 78 L 134 72 L 162 70 L 190 60 L 218 58 L 246 50 L 274 42 L 298 36"
                  fill="none"
                  stroke={BLUE}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* X-axis labels */}
                {['1', '5', '10', '15', '20', '25', '30'].map((d, i) => (
                  <text key={d} x={22 + i * 46} y="125" fontSize="7" fill={TT4} textAnchor="middle">{d}</text>
                ))}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </IPadBezel>
  );
};

// Inline icon helper
const NavIcon = ({ name, active, customStroke }: { name: string; active: boolean; customStroke?: string }) => {
  const stroke = customStroke || (active ? '#fff' : '#94a3b8');
  const props = {
    width: 10,
    height: 10,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke,
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  switch (name) {
    case 'dashboard':
      return <svg {...props}><rect x="3" y="3" width="7" height="9" rx="1.5" /><rect x="14" y="3" width="7" height="5" rx="1.5" /><rect x="14" y="12" width="7" height="9" rx="1.5" /><rect x="3" y="16" width="7" height="5" rx="1.5" /></svg>;
    case 'users':
      return <svg {...props}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /></svg>;
    case 'brain':
      return <svg {...props}><path d="M9 2a3 3 0 00-3 3v.5A3.5 3.5 0 003 9v3a3 3 0 003 3v3a3 3 0 003 3h6a3 3 0 003-3v-3a3 3 0 003-3V9a3.5 3.5 0 00-3-3.5V5a3 3 0 00-3-3z" /></svg>;
    case 'alert':
      return <svg {...props}><path d="M12 2L2 21h20L12 2z" /><line x1="12" y1="9" x2="12" y2="13" /></svg>;
    case 'monitor':
      return <svg {...props}><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>;
    case 'cap':
      return <svg {...props}><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>;
    case 'book':
      return <svg {...props}><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></svg>;
    case 'lib':
      return <svg {...props}><line x1="4" y1="4" x2="4" y2="20" /><line x1="9" y1="4" x2="9" y2="20" /><line x1="14" y1="4" x2="14" y2="20" /><line x1="19" y1="4" x2="19" y2="20" /></svg>;
    case 'check':
      return <svg {...props}><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" /></svg>;
    case 'shield':
      return <svg {...props}><path d="M12 2L4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6z" /></svg>;
    case 'msg':
      return <svg {...props}><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>;
    case 'note':
      return <svg {...props}><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>;
    case 'chart':
      return <svg {...props}><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>;
    case 'cal':
      return <svg {...props}><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>;
    default:
      return <svg {...props}><circle cx="12" cy="12" r="9" /></svg>;
  }
};

export default PrincipalDashboardIPad;
