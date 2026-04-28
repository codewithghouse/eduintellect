/**
 * Static iPad mockup — Owner Dashboard.
 * Sidebar + Branch Leaderboard hero + 4 KPI cards + branch ranking bar chart +
 * 6-month attendance trend line chart. All hardcoded.
 */

import IPadBezel from './IPadBezel';

const OwnerDashboardIPad = () => {
  const NAVY_DEEP = '#001040';
  const NAVY = '#001A66';
  const BLUE = '#0055FF';
  const TT1 = '#001040';
  const TT3 = '#5070B0';
  const TT4 = '#99AACC';
  const GOLD = '#FFD700';
  const SILVER = '#A8A8B5';
  const BRONZE = '#8B5A2B';
  const RED = '#FF3355';
  const GREEN = '#00C853';

  const NAV: { title: string; items: { label: string; icon: string; active?: boolean }[] }[] = [
    { title: 'Overview', items: [{ label: 'Dashboard', icon: 'dashboard' }] },
    {
      title: 'Students',
      items: [
        { label: 'Students Intelligence', icon: 'brain' },
        { label: 'AI Risk Predictor', icon: 'alert' },
      ],
    },
    {
      title: 'Academics',
      items: [
        { label: 'Academics Overview', icon: 'book' },
        { label: 'Fee Structure', icon: 'rupee' },
      ],
    },
    {
      title: 'Staff',
      items: [
        { label: 'Teachers Directory', icon: 'cap' },
        { label: 'Teacher Performance', icon: 'chart' },
        { label: 'Teacher Leaderboard', icon: 'trophy' },
        { label: 'Principal Management', icon: 'users' },
        { label: 'DEO Management', icon: 'shield' },
      ],
    },
    {
      title: 'Operations',
      items: [
        { label: 'Branches Comparison', icon: 'compare' },
        { label: 'Branch Leaderboard', icon: 'trophy', active: true },
        { label: 'Finance & Fees', icon: 'rupee' },
        { label: 'Risks & Alerts', icon: 'alert' },
      ],
    },
    { title: 'Account', items: [{ label: 'Settings', icon: 'gear' }] },
  ];

  return (
    <IPadBezel>
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden', minHeight: 0 }}>
        {/* SIDEBAR */}
        <div style={{ width: 162, flexShrink: 0, padding: '8px 0 8px 8px' }}>
          <div style={{ width: '100%', height: '100%', background: '#fff', borderRadius: 12, boxShadow: '0 6px 18px rgba(15,23,42,0.06)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            <div style={{ padding: '10px 8px 6px', display: 'flex', alignItems: 'center', gap: 6, borderBottom: '1px solid #f1f5f9' }}>
              <div style={{ width: 22, height: 22, borderRadius: 6, background: NAVY_DEEP, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontWeight: 500 }}>EDLT</div>
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
                <span style={{ fontSize: 8, fontWeight: 500, color: NAVY_DEEP }}>EDLT</span>
                <span style={{ fontSize: 5, fontWeight: 500, color: '#94a3b8', marginTop: 2, letterSpacing: '0.18em' }}>EDULLENT</span>
              </div>
            </div>
            <div style={{ flex: 1, padding: '8px 6px', overflowY: 'auto', minHeight: 0 }}>
              {NAV.map((sec, sIdx) => (
                <div key={sec.title} style={{ marginTop: sIdx === 0 ? 0 : 8 }}>
                  <div style={{ padding: '0 8px', marginBottom: 3, fontSize: 6, fontWeight: 500, color: '#94a3b8', textTransform: 'uppercase' as const, letterSpacing: '0.18em' }}>{sec.title}</div>
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
                          transform: item.active ? 'scale(1.02)' : 'scale(1)',
                          boxShadow: item.active ? '0 3px 7px rgba(0,16,64,0.18)' : 'none',
                        }}
                      >
                        <Icon name={item.icon} active={!!item.active} />
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
          {/* Hero — Branch Leaderboard */}
          <div
            style={{
              borderRadius: 12,
              padding: '14px 16px',
              background: `linear-gradient(135deg, ${NAVY_DEEP} 0%, ${NAVY} 35%, #0044CC 70%, ${BLUE} 100%)`,
              color: '#fff',
              marginBottom: 8,
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 6px 18px rgba(0,8,60,0.22)',
            }}
          >
            <div style={{ position: 'absolute', top: -25, right: -25, width: 110, height: 110, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,215,0,0.16) 0%, transparent 65%)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6, position: 'relative', zIndex: 2 }}>
              <span style={{ fontSize: 6, fontWeight: 500, color: '#FFD166', letterSpacing: '0.18em', textTransform: 'uppercase' as const, background: 'rgba(255,209,102,0.18)', padding: '2px 6px', borderRadius: 999 }}>
                ⚡ Edullent Group of Schools · April
              </span>
            </div>
            <div style={{ fontSize: 18, fontWeight: 400, color: '#fff', letterSpacing: '-0.5px', position: 'relative', zIndex: 2 }}>Branch Leaderboard</div>
            <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.55)', marginTop: 3, position: 'relative', zIndex: 2 }}>Composite-ranked across attendance, academic results, and fee collection.</div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, borderRadius: 8, overflow: 'hidden', marginTop: 10, background: 'rgba(255,255,255,0.12)', position: 'relative', zIndex: 2 }}>
              {[
                { label: 'BRANCHES', val: '4' },
                { label: 'STUDENTS', val: '4,286' },
                { label: 'TEACHERS', val: '259' },
                { label: 'NETWORK AVG', val: '87.0', sub: 'Top 91.0', col: '#6FFFAA' },
              ].map(s => (
                <div key={s.label} style={{ background: 'rgba(0,20,80,0.55)', padding: '8px 10px' }}>
                  <div style={{ fontSize: 6, fontWeight: 500, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.12em' }}>{s.label}</div>
                  <div style={{ fontSize: 14, fontWeight: 400, color: s.col || '#fff', marginTop: 2, letterSpacing: '-0.3px' }}>{s.val}</div>
                  {s.sub && <div style={{ fontSize: 5, color: 'rgba(255,255,255,0.5)', marginTop: 1 }}>{s.sub}</div>}
                </div>
              ))}
            </div>
          </div>

          {/* 2-col: Composite Ranking + Attendance Trend */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {/* Composite Ranking */}
            <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)' }}>
              <div style={{ fontSize: 6, fontWeight: 500, color: TT3, letterSpacing: '0.18em', textTransform: 'uppercase' as const, marginBottom: 4 }}>Composite Ranking</div>
              <div style={{ fontSize: 9, fontWeight: 500, color: TT1, marginBottom: 8 }}>Where each branch stands this month</div>
              {[
                { name: 'Edullent Bandra', score: 91, color: BLUE },
                { name: 'Edullent Koramangala', score: 87, color: SILVER },
                { name: 'Edullent Saket', score: 78, color: BRONZE },
                { name: 'Edullent Jubilee Hills', score: 92, color: RED },
              ].map(b => (
                <div key={b.name} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                  <div style={{ fontSize: 7, color: TT3, minWidth: 78 }}>{b.name}</div>
                  <div style={{ flex: 1, height: 14, background: '#F1F5F9', borderRadius: 3, overflow: 'hidden', position: 'relative' }}>
                    <div style={{ background: b.color, height: '100%', width: `${b.score}%`, borderRadius: 3 }} />
                    <span style={{ position: 'absolute', right: 4, top: '50%', transform: 'translateY(-50%)', fontSize: 6, fontWeight: 500, color: '#fff' }}>{b.score}</span>
                  </div>
                </div>
              ))}
              <div style={{ marginTop: 6, padding: '5px 8px', background: '#F4F7FE', borderRadius: 6, fontSize: 6, fontWeight: 500, color: BLUE, textAlign: 'center' }}>
                Click any bar to load its analysis · Network average 87.0
              </div>
            </div>

            {/* 6-month chart */}
            <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)' }}>
              <div style={{ fontSize: 6, fontWeight: 500, color: TT3, letterSpacing: '0.18em', textTransform: 'uppercase' as const, marginBottom: 4 }}>6-Month Attendance Trend</div>
              <div style={{ fontSize: 9, fontWeight: 500, color: TT1, marginBottom: 6 }}>Top branches over time</div>
              <svg viewBox="0 0 300 110" style={{ width: '100%', height: 110 }}>
                {[
                  { v: 100, y: 8 },
                  { v: 75, y: 38 },
                  { v: 50, y: 68 },
                  { v: 25, y: 82 },
                  { v: 0, y: 96 },
                ].map(g => (
                  <g key={g.v}>
                    <text x="0" y={g.y + 3} fontSize="7" fill={TT4}>{g.v}</text>
                    <line x1="20" y1={g.y} x2="298" y2={g.y} stroke="#F1F5F9" strokeWidth="0.5" />
                  </g>
                ))}
                {/* 3 lines */}
                <path d="M 22 32 L 70 30 L 118 28 L 166 26 L 214 24 L 262 22 L 298 22" fill="none" stroke={BLUE} strokeWidth="2" strokeLinecap="round" />
                <path d="M 22 38 L 70 36 L 118 34 L 166 33 L 214 32 L 262 30 L 298 30" fill="none" stroke={GOLD} strokeWidth="2" strokeLinecap="round" />
                <path d="M 22 42 L 70 40 L 118 39 L 166 38 L 214 37 L 262 36 L 298 36" fill="none" stroke="#7B3FF4" strokeWidth="2" strokeLinecap="round" />
                {['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'].map((m, i) => (
                  <text key={m} x={22 + i * 48} y="108" fontSize="7" fill={TT4} textAnchor="middle">{m}</text>
                ))}
              </svg>
              <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
                {[
                  { l: 'Edullent Bandra', c: BLUE },
                  { l: 'Edullent Koramangala', c: GOLD },
                  { l: 'Edullent Saket', c: '#7B3FF4' },
                ].map(l => (
                  <div key={l.l} style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: l.c }} />
                    <span style={{ fontSize: 5, color: TT3, fontWeight: 500 }}>{l.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* All Branches: Quick-glance ranking cards */}
          <div style={{ marginTop: 8 }}>
            <div style={{ fontSize: 6, fontWeight: 500, color: TT3, letterSpacing: '0.18em', textTransform: 'uppercase' as const, marginBottom: 4 }}>All Branches</div>
            <div style={{ fontSize: 9, fontWeight: 500, color: TT1, marginBottom: 6 }}>Quick-glance ranking cards</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6 }}>
              {[
                { rank: 1, name: 'Bandra', score: 91, color: GOLD, growth: '+3.2' },
                { rank: 2, name: 'Koramangala', score: 87, color: SILVER, growth: '+1.4' },
                { rank: 3, name: 'Saket', score: 78, color: BRONZE, growth: '−0.6' },
                { rank: 4, name: 'Jubilee Hills', score: 75, color: RED, growth: '−1.2' },
              ].map(b => (
                <div key={b.name} style={{ background: '#fff', borderRadius: 9, padding: 8, border: `0.5px solid ${b.color}33`, boxShadow: '0 4px 10px rgba(20,40,90,0.05)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4 }}>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', background: `linear-gradient(135deg, ${b.color}, ${b.color}DD)`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontWeight: 500 }}>#{b.rank}</div>
                    <div style={{ fontSize: 8, fontWeight: 500, color: TT1 }}>{b.name}</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                    <span style={{ fontSize: 14, fontWeight: 400, color: b.color, letterSpacing: '-0.4px' }}>{b.score}</span>
                    <span style={{ fontSize: 6, color: b.growth.startsWith('+') ? GREEN : RED, fontWeight: 500 }}>{b.growth}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </IPadBezel>
  );
};

const Icon = ({ name, active }: { name: string; active: boolean }) => {
  const stroke = active ? '#fff' : '#94a3b8';
  const props = { width: 10, height: 10, viewBox: '0 0 24 24', fill: 'none', stroke, strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  switch (name) {
    case 'dashboard': return <svg {...props}><rect x="3" y="3" width="7" height="9" rx="1.5" /><rect x="14" y="3" width="7" height="5" rx="1.5" /><rect x="14" y="12" width="7" height="9" rx="1.5" /><rect x="3" y="16" width="7" height="5" rx="1.5" /></svg>;
    case 'brain': return <svg {...props}><path d="M9 2a3 3 0 00-3 3v.5A3.5 3.5 0 003 9v3a3 3 0 003 3v3a3 3 0 003 3h6a3 3 0 003-3v-3a3 3 0 003-3V9a3.5 3.5 0 00-3-3.5V5a3 3 0 00-3-3z" /></svg>;
    case 'alert': return <svg {...props}><path d="M12 2L2 21h20L12 2z" /></svg>;
    case 'book': return <svg {...props}><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /></svg>;
    case 'rupee': return <svg {...props}><path d="M6 4h12M6 9h12M9 14l5 6M14 4c2 0 4 2 4 5s-2 5-4 5h-8" /></svg>;
    case 'cap': return <svg {...props}><path d="M22 10v6M2 10l10-5 10 5-10 5z" /></svg>;
    case 'chart': return <svg {...props}><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>;
    case 'trophy': return <svg {...props}><path d="M6 9H4.5a2.5 2.5 0 010-5H6" /><path d="M18 9h1.5a2.5 2.5 0 000-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17a2 2 0 002 2v0a2 2 0 002-2v-2.34" /><path d="M18 2H6v7a6 6 0 0012 0V2z" /></svg>;
    case 'users': return <svg {...props}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>;
    case 'shield': return <svg {...props}><path d="M12 2L4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6z" /></svg>;
    case 'compare': return <svg {...props}><line x1="9" y1="3" x2="9" y2="21" /><line x1="15" y1="3" x2="15" y2="21" /><polyline points="6 7 9 4 12 7" /><polyline points="12 17 15 20 18 17" /></svg>;
    case 'gear': return <svg {...props}><circle cx="12" cy="12" r="3" /></svg>;
    default: return <svg {...props}><circle cx="12" cy="12" r="9" /></svg>;
  }
};

export default OwnerDashboardIPad;
