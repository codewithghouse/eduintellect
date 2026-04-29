/**
 * Static iPad mockup — Teacher · Reports page.
 * Faithful pixel-shrink of teacher-dashboard/src/pages/Reports.tsx (desktop).
 *
 * Layout matches source:
 *   1. Page header: eyebrow + h1 "Reports" + subtitle + 2 pills on right (school + count)
 *   2. Hero gradient banner (frosted icon + "Ready" pill + huge "8 types" + 3-stat box)
 *   3. "Available Reports" section header + filter pills (All / PDF only / Excel only)
 *   4. 2x2 grid of report cards with tone bands and format badges
 */

import IPadShellWithSidebar from './IPadShellWithSidebar';

const TeacherPerformanceIPad = () => {
  const B1 = '#0055FF';
  const T1 = '#001040';
  const T3 = '#5070B0';
  const GREEN = '#00C853';
  const TEAL = '#0EAFAE';
  const AMBER = '#F59E0B';
  const RED = '#FF3355';
  const HERO_GRAD = 'linear-gradient(135deg, #000A33 0%, #001A66 32%, #0044CC 68%, #0055FF 100%)';

  const reports = [
    {
      id: 'class_perf', title: 'Class performance report',
      desc: 'Comprehensive analysis of class performance including grades, attendance, and progress trends.',
      badge: 'Popular', badgeBg: `${GREEN}14`, badgeCol: GREEN,
      band: B1, iconBg: `${B1}1a`, iconCol: B1,
      formats: ['PDF', 'Excel'], icon: 'bar',
    },
    {
      id: 'individual_progress', title: 'Individual progress report',
      desc: 'Detailed report for individual students covering all academic metrics and personalised recommendations.',
      badge: 'Detailed', badgeBg: `${TEAL}14`, badgeCol: TEAL,
      band: TEAL, iconBg: `${TEAL}1a`, iconCol: TEAL,
      formats: ['PDF'], icon: 'user',
    },
    {
      id: 'attendance_summary', title: 'Attendance summary',
      desc: 'Monthly or term-wise attendance report with statistics and absentee analysis.',
      badge: 'Monthly', badgeBg: `${AMBER}14`, badgeCol: AMBER,
      band: AMBER, iconBg: `${AMBER}1a`, iconCol: AMBER,
      formats: ['PDF', 'Excel'], icon: 'clock',
    },
    {
      id: 'at_risk', title: 'At-risk students report',
      desc: 'List of students with academic or attendance concerns requiring urgent intervention.',
      badge: 'Alert', badgeBg: `${RED}14`, badgeCol: RED,
      band: RED, iconBg: `${RED}1a`, iconCol: RED,
      formats: ['PDF', 'Excel'], icon: 'alert',
    },
  ];

  return (
    <IPadShellWithSidebar activePath="/leaderboard/teachers">
      <div style={{ background: '#EEF4FF', flex: 1, overflowY: 'auto', minHeight: 0, padding: '10px 12px 12px', fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif" }}>

        {/* Page header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 9 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4 }}>
              <span style={{ width: 4, height: 4, borderRadius: 1, background: B1 }} />
              <span style={{ fontSize: 6, fontWeight: 700, color: T3, letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>Academic Documents</span>
            </div>
            <h1 style={{ fontSize: 22, fontWeight: 700, color: T1, letterSpacing: '-0.7px', lineHeight: 1.05, margin: 0 }}>Reports</h1>
            <div style={{ fontSize: 8, fontWeight: 500, color: T3, marginTop: 3, letterSpacing: '-0.1px' }}>
              Generate and download academic reports.
            </div>
          </div>
          <div style={{ display: 'flex', gap: 4 }}>
            {[
              { icon: 'school', text: 'Edullent Main' },
              { icon: 'doc', text: '4 report types' },
            ].map((p, i) => (
              <div key={i} style={{ padding: '3px 7px', background: `${B1}14`, color: B1, fontSize: 6, fontWeight: 700, borderRadius: 999, letterSpacing: '0.04em', display: 'flex', alignItems: 'center', gap: 3, border: `0.5px solid ${B1}28` }}>
                <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  {p.icon === 'school' ? <><path d="M3 21h18" /><path d="M5 21V7l8-4v18" /><path d="M19 21V11l-6-4" /></> : <><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="9" y1="9" x2="15" y2="9" /><line x1="9" y1="13" x2="15" y2="13" /></>}
                </svg>
                {p.text}
              </div>
            ))}
          </div>
        </div>

        {/* Hero gradient banner */}
        <div style={{
          background: HERO_GRAD, borderRadius: 14, padding: '12px 14px',
          marginBottom: 9, position: 'relative', overflow: 'hidden',
          boxShadow: '0 12px 28px rgba(0,26,102,0.32)',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.10) 0%, transparent 45%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 8 }}>
              <div style={{ width: 26, height: 26, borderRadius: 8, background: 'rgba(255,255,255,0.16)', border: '0.5px solid rgba(255,255,255,0.24)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0 }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="9" y1="9" x2="15" y2="9" /><line x1="9" y1="13" x2="15" y2="13" /><line x1="9" y1="17" x2="13" y2="17" /></svg>
              </div>
              <div>
                <div style={{ fontSize: 6, fontWeight: 700, color: 'rgba(255,255,255,0.8)', letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>Report Center</div>
                <div style={{ fontSize: 6.5, color: 'rgba(255,255,255,0.55)', marginTop: 1, fontWeight: 500, letterSpacing: '-0.1px' }}>Academic year 2025-26</div>
              </div>
              <div style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 4, padding: '3px 8px', borderRadius: 999, background: 'rgba(255,255,255,0.18)', border: '0.5px solid rgba(255,255,255,0.3)', color: '#fff', fontSize: 6, fontWeight: 700 }}>
                <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#00E866', boxShadow: '0 0 6px #00E866' }} />
                Ready
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 14 }}>
              <div>
                <div style={{ fontSize: 36, fontWeight: 800, color: '#fff', letterSpacing: '-1.5px', lineHeight: 1, marginBottom: 5, display: 'flex', alignItems: 'baseline', gap: 4 }}>
                  4
                  <span style={{ fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,0.7)', letterSpacing: '-0.3px' }}>types</span>
                </div>
                <div style={{ fontSize: 7, color: 'rgba(255,255,255,0.78)', fontWeight: 500, letterSpacing: '-0.1px', maxWidth: 200, lineHeight: 1.4 }}>
                  <strong style={{ color: '#fff', fontWeight: 700 }}>12 generated</strong> this week · all formats supported.
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'rgba(255,255,255,0.12)', borderRadius: 8, padding: 1, overflow: 'hidden' }}>
                {[
                  { val: '4', label: 'Types', color: '#fff' },
                  { val: '12', label: 'Generated', color: '#6FFFAA' },
                  { val: '~6s', label: 'Avg Time', color: '#FFDD55' },
                ].map(s => (
                  <div key={s.label} style={{ background: 'rgba(0,10,51,0.7)', padding: '7px 11px', textAlign: 'center', minWidth: 50 }}>
                    <div style={{ fontSize: 12, fontWeight: 800, color: s.color, letterSpacing: '-0.4px' }}>{s.val}</div>
                    <div style={{ fontSize: 5, fontWeight: 700, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.14em', textTransform: 'uppercase' as const, marginTop: 2 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section header + filter pills */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, marginBottom: 7 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 5 }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: T1, letterSpacing: '-0.2px' }}>Available Reports</span>
            <span style={{ fontSize: 6.5, color: T3, fontWeight: 600, letterSpacing: '-0.1px' }}>Click to generate</span>
          </div>
          <div style={{ display: 'flex', gap: 3, background: '#fff', padding: 2, borderRadius: 7, boxShadow: '0 2px 6px rgba(0,85,255,0.06)', border: `0.5px solid ${B1}14` }}>
            {[
              { name: 'All', count: 4, active: true },
              { name: 'PDF only', count: 1, active: false },
              { name: 'Excel only', count: 0, active: false },
            ].map(f => (
              <div key={f.name} style={{
                padding: '4px 8px', borderRadius: 5,
                fontSize: 6.5, fontWeight: 700, letterSpacing: '-0.1px',
                color: f.active ? '#fff' : T3,
                background: f.active ? `linear-gradient(135deg, ${B1}, #1166FF)` : 'transparent',
                boxShadow: f.active ? `0 2px 6px ${B1}55` : 'none',
                display: 'flex', alignItems: 'center', gap: 3,
              }}>
                {f.name}
                <span style={{
                  background: f.active ? 'rgba(255,255,255,0.22)' : '#F4F7FE',
                  color: f.active ? '#fff' : T3,
                  fontSize: 5.5, fontWeight: 700, padding: '0.5px 4px', borderRadius: 999,
                }}>{f.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Report cards 2x2 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7 }}>
          {reports.map(r => (
            <div key={r.id} style={{
              background: '#fff', borderRadius: 11, overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,85,255,0.10), 0 1px 3px rgba(0,85,255,0.06)',
              border: `0.5px solid ${B1}14`,
              position: 'relative',
              borderTop: `2.5px solid ${r.band}`,
            }}>
              <div style={{ padding: '8px 10px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 7, marginBottom: 6 }}>
                  <div style={{ width: 22, height: 22, borderRadius: 6, background: r.iconBg, color: r.iconCol, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      {r.icon === 'bar' && <><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></>}
                      {r.icon === 'user' && <><circle cx="12" cy="7" r="4" /><path d="M5 21c0-3.5 3-6 7-6s7 2.5 7 6" /></>}
                      {r.icon === 'clock' && <><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 16 14" /></>}
                      {r.icon === 'alert' && <><polygon points="12 2 22 22 2 22 12 2" /><line x1="12" y1="9" x2="12" y2="13" /></>}
                    </svg>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 1 }}>
                      <span style={{ fontSize: 8, fontWeight: 700, color: T1, letterSpacing: '-0.2px', lineHeight: 1.2 }}>{r.title}</span>
                    </div>
                    <span style={{ fontSize: 5.5, fontWeight: 700, color: r.badgeCol, background: r.badgeBg, padding: '1.5px 5px', borderRadius: 999, letterSpacing: '0.06em' }}>{r.badge}</span>
                  </div>
                </div>
                <div style={{ fontSize: 6, color: T3, lineHeight: 1.45, marginBottom: 7, fontWeight: 500 }}>{r.desc}</div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', gap: 3 }}>
                    {r.formats.map(f => (
                      <span key={f} style={{ fontSize: 5.5, fontWeight: 700, color: T3, background: '#F4F7FE', padding: '2px 6px', borderRadius: 4, letterSpacing: '0.06em' }}>{f}</span>
                    ))}
                  </div>
                  <div style={{ fontSize: 6.5, fontWeight: 700, color: '#fff', background: `linear-gradient(135deg, ${r.band}, ${r.band}cc)`, padding: '4px 8px', borderRadius: 6, display: 'flex', alignItems: 'center', gap: 3, boxShadow: `0 3px 8px ${r.band}40` }}>
                    Generate
                    <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><polyline points="9 18 15 12 9 6" /></svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </IPadShellWithSidebar>
  );
};

export default TeacherPerformanceIPad;
