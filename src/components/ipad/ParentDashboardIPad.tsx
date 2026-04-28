/**
 * Static iPad mockup — Parent Dashboard.
 * Sidebar (Parent nav) + Child profile header + 4 quick stats +
 * Subject performance + Concept strength + Today's behaviour feed.
 */

import IPadBezel from './IPadBezel';

const ParentDashboardIPad = () => {
  const NAVY_DEEP = '#0B1F3A';
  const BLUE = '#0055FF';
  const TT1 = '#0B1F3A';
  const TT3 = '#5070B0';
  const TT4 = '#99AACC';
  const GREEN = '#00C853';
  const RED = '#FF3355';
  const ORANGE = '#FF8800';
  const VIOLET = '#7B3FF4';
  const GOLD = '#FFAA00';

  const NAV: { title: string; items: { label: string; icon: string; active?: boolean }[] }[] = [
    { title: 'Overview', items: [{ label: 'Dashboard', icon: 'dashboard', active: true }] },
    {
      title: "Child's Progress",
      items: [
        { label: 'Performance', icon: 'chart' },
        { label: 'Concept Strength', icon: 'brain' },
        { label: 'AI Practice', icon: 'spark' },
        { label: 'Behaviour', icon: 'star' },
      ],
    },
    {
      title: 'School',
      items: [
        { label: 'Attendance', icon: 'check' },
        { label: 'Syllabus', icon: 'lib' },
        { label: 'Tests & Exams', icon: 'cap' },
        { label: 'Fees', icon: 'rupee' },
      ],
    },
    {
      title: 'Communication',
      items: [
        { label: 'Teacher Notes', icon: 'msg' },
        { label: 'School Messages', icon: 'school' },
      ],
    },
    { title: 'Account', items: [{ label: 'Settings', icon: 'gear' }] },
  ];

  return (
    <IPadBezel>
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden', minHeight: 0 }}>
        {/* SIDEBAR */}
        <div style={{ width: 160, flexShrink: 0, padding: '8px 0 8px 8px' }}>
          <div style={{ width: '100%', height: '100%', background: '#fff', borderRadius: 12, boxShadow: '0 6px 18px rgba(15,23,42,0.06)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            <div style={{ padding: '10px 8px 6px', display: 'flex', alignItems: 'center', gap: 6, borderBottom: '1px solid #f1f5f9' }}>
              <div style={{ width: 22, height: 22, borderRadius: 6, background: NAVY_DEEP, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7-4.5-9.5-9C-1 6.5 5 1 12 6c7-5 13 .5 9.5 6-2.5 4.5-9.5 9-9.5 9z" /></svg>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
                <span style={{ fontSize: 8, fontWeight: 500, color: NAVY_DEEP }}>Edullent</span>
                <span style={{ fontSize: 5, fontWeight: 500, color: '#94a3b8', marginTop: 2, letterSpacing: '0.18em' }}>PARENT PORTAL</span>
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
                          boxShadow: item.active ? '0 3px 7px rgba(11,31,58,0.18)' : 'none',
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
          {/* Child profile hero */}
          <div
            style={{
              borderRadius: 12,
              padding: '14px 16px',
              background: `linear-gradient(135deg, ${NAVY_DEEP} 0%, #1A2D5A 50%, #2C4280 100%)`,
              color: '#fff',
              marginBottom: 8,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 6px 18px rgba(11,31,58,0.25)',
            }}
          >
            <div style={{ position: 'absolute', top: -25, right: -25, width: 110, height: 110, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,170,0,0.15) 0%, transparent 65%)' }} />
            <div style={{ width: 50, height: 50, borderRadius: '50%', background: 'linear-gradient(135deg, #FFAA00, #FFD700)', color: '#0B1F3A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 500, boxShadow: '0 6px 18px rgba(255,170,0,0.3)', position: 'relative', zIndex: 2 }}>
              AS
            </div>
            <div style={{ flex: 1, position: 'relative', zIndex: 2 }}>
              <div style={{ fontSize: 7, fontWeight: 500, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>Your Child</div>
              <div style={{ fontSize: 18, fontWeight: 400, marginTop: 3, letterSpacing: '-0.4px' }}>Aarav Sharma</div>
              <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.55)', marginTop: 2 }}>Class 9A · Roll 12 · Edullent High</div>
            </div>
            <div style={{ display: 'flex', gap: 14, position: 'relative', zIndex: 2 }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 16, fontWeight: 400, color: '#FFD700', letterSpacing: '-0.3px' }}>8.6</div>
                <div style={{ fontSize: 6, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginTop: 1 }}>GPA</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 16, fontWeight: 400, color: '#6FFFAA', letterSpacing: '-0.3px' }}>94%</div>
                <div style={{ fontSize: 6, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginTop: 1 }}>Attendance</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 16, fontWeight: 400, color: '#fff', letterSpacing: '-0.3px' }}>#7</div>
                <div style={{ fontSize: 6, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginTop: 1 }}>Class Rank</div>
              </div>
            </div>
          </div>

          {/* 4 stat cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 7, marginBottom: 8 }}>
            {[
              { label: 'Pending HW', val: '3', sub: 'Due this week', color: ORANGE, bg: 'linear-gradient(135deg, #FFF6E8 0%, #FFEED4 100%)' },
              { label: 'Tests This Week', val: '2', sub: 'Mon · Wed', color: BLUE, bg: 'linear-gradient(135deg, #DEE6F8 0%, #F8FAFE 100%)' },
              { label: 'Concept Strength', val: '78%', sub: '↑ 4% this month', color: GREEN, bg: 'linear-gradient(135deg, #E8FBEF 0%, #DAF6E4 100%)' },
              { label: 'Practice Streak', val: '12d', sub: 'Keep it up!', color: VIOLET, bg: 'linear-gradient(135deg, #F2EBFF 0%, #E8DEFC 100%)' },
            ].map(c => (
              <div key={c.label} style={{ background: c.bg, border: `0.5px solid ${c.color}33`, borderRadius: 11, padding: '8px 10px' }}>
                <div style={{ fontSize: 6, fontWeight: 500, color: c.color, letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 4 }}>{c.label}</div>
                <div style={{ fontSize: 18, fontWeight: 300, color: TT1, letterSpacing: '-0.7px', lineHeight: 1 }}>{c.val}</div>
                <div style={{ fontSize: 6, fontWeight: 500, color: c.color, marginTop: 3 }}>{c.sub}</div>
              </div>
            ))}
          </div>

          {/* 2-col: Subject performance + Behaviour feed */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 8 }}>
            {/* Subject performance */}
            <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 7 }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
                <div style={{ fontSize: 9, fontWeight: 500, color: TT1 }}>Subject Performance</div>
                <div style={{ marginLeft: 'auto', fontSize: 6, fontWeight: 500, color: TT4 }}>Term 2</div>
              </div>
              {[
                { name: 'Mathematics', score: 92, color: GREEN, trend: '↑ 5' },
                { name: 'Computer Science', score: 95, color: GREEN, trend: '↑ 3' },
                { name: 'English', score: 88, color: BLUE, trend: '↑ 2' },
                { name: 'Physics', score: 84, color: BLUE, trend: '−' },
                { name: 'Chemistry', score: 78, color: GOLD, trend: '↓ 1' },
                { name: 'Biology', score: 72, color: ORANGE, trend: '↓ 4' },
              ].map((s, i) => (
                <div key={s.name} style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '4px 0', borderBottom: i < 5 ? '0.5px solid #F1F5F9' : 'none' }}>
                  <span style={{ fontSize: 8, fontWeight: 500, color: TT1, minWidth: 90 }}>{s.name}</span>
                  <div style={{ flex: 1, height: 6, background: '#F1F5F9', borderRadius: 3, overflow: 'hidden' }}>
                    <div style={{ background: s.color, height: '100%', width: `${s.score}%`, borderRadius: 3 }} />
                  </div>
                  <span style={{ fontSize: 8, fontWeight: 500, color: s.color, minWidth: 22, textAlign: 'right' }}>{s.score}</span>
                  <span style={{ fontSize: 6, fontWeight: 500, color: s.trend.includes('↑') ? GREEN : s.trend.includes('↓') ? RED : TT4, minWidth: 18 }}>{s.trend}</span>
                </div>
              ))}
            </div>

            {/* Behaviour feed */}
            <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 7 }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill={GOLD} stroke={GOLD} strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" /></svg>
                <div style={{ fontSize: 9, fontWeight: 500, color: TT1 }}>From Teachers</div>
                <div style={{ marginLeft: 'auto', fontSize: 6, fontWeight: 500, color: GREEN, background: 'rgba(0,200,83,0.10)', padding: '2px 6px', borderRadius: 999 }}>5 NEW</div>
              </div>
              {[
                { type: '⭐', text: 'Helped a classmate with quadratics today.', when: '2h ago', tone: GREEN },
                { type: '⭐', text: 'Top scorer in surprise math quiz.', when: 'Yesterday', tone: GREEN },
                { type: '⚠', text: 'Late submission on Geometry HW.', when: '2d ago', tone: ORANGE },
                { type: '⭐', text: 'Volunteered for science fair.', when: '4d ago', tone: GREEN },
              ].map((e, i) => (
                <div key={i} style={{ padding: '5px 0', borderBottom: i < 3 ? '0.5px solid #F1F5F9' : 'none' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 6 }}>
                    <span style={{ fontSize: 9 }}>{e.type}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 7, color: TT1, lineHeight: 1.35 }}>{e.text}</div>
                      <div style={{ fontSize: 6, color: TT4, marginTop: 2 }}>{e.when}</div>
                    </div>
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
    case 'chart': return <svg {...props}><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>;
    case 'brain': return <svg {...props}><path d="M9 2a3 3 0 00-3 3v.5A3.5 3.5 0 003 9v3a3 3 0 003 3v3a3 3 0 003 3h6a3 3 0 003-3v-3a3 3 0 003-3V9a3.5 3.5 0 00-3-3.5V5a3 3 0 00-3-3z" /></svg>;
    case 'spark': return <svg {...props}><path d="M12 3v3M12 18v3M3 12h3M18 12h3" /></svg>;
    case 'star': return <svg {...props}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" /></svg>;
    case 'check': return <svg {...props}><path d="M9 11l3 3L22 4" /></svg>;
    case 'lib': return <svg {...props}><line x1="4" y1="4" x2="4" y2="20" /><line x1="9" y1="4" x2="9" y2="20" /><line x1="14" y1="4" x2="14" y2="20" /></svg>;
    case 'cap': return <svg {...props}><path d="M22 10v6M2 10l10-5 10 5-10 5z" /></svg>;
    case 'rupee': return <svg {...props}><path d="M6 4h12M6 9h12M9 14l5 6M14 4c2 0 4 2 4 5s-2 5-4 5h-8" /></svg>;
    case 'msg': return <svg {...props}><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>;
    case 'school': return <svg {...props}><path d="M3 11l9-8 9 8" /><path d="M5 10v10h14V10" /></svg>;
    case 'gear': return <svg {...props}><circle cx="12" cy="12" r="3" /></svg>;
    default: return <svg {...props}><circle cx="12" cy="12" r="9" /></svg>;
  }
};

export default ParentDashboardIPad;
