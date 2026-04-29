/**
 * Static iPad mockup — Teacher · Risks & Alerts page.
 * Faithful pixel-shrink of teacher-dashboard/src/pages/RisksAlerts.tsx (desktop).
 *
 * Layout matches source:
 *   1. Page header: pulsing dot + eyebrow + h1 with red accent on critical word + subtitle
 *      + "{N} CRITICAL" pill (gradient red) + "View Students" button
 *   2. Dark hero gradient banner (frosted icon + URGENT ACTION pill + huge critical count
 *      + 3 right-side mini stat tiles)
 *   3. 4-col KPI tiles: Critical / High / Medium / Resolved (matte tinted bg, faded large icon)
 *   4. Filter tabs (chips)
 *   5. Risk students list with reason chips
 */

import IPadShellWithSidebar from './IPadShellWithSidebar';

const TeacherRisksAlertsIPad = () => {
  const B1 = '#0055FF';
  const T1 = '#001040';
  const T3 = '#5070B0';
  const T4 = '#99AACC';
  const RED = '#FF3355';
  const ORANGE = '#FF8800';
  const GREEN = '#00C853';
  const HERO_GRAD = 'linear-gradient(135deg, #000A33 0%, #001A66 32%, #0044CC 68%, #0055FF 100%)';

  const tiles = [
    { label: 'Critical', val: '3', sub: 'Needs outreach now', color: RED, bg: 'linear-gradient(135deg, #FFEEF0 0%, #FFE2E6 100%)', icon: 'alert' },
    { label: 'High Priority', val: '7', sub: 'Follow up this week', color: ORANGE, bg: 'linear-gradient(135deg, #FFF6E8 0%, #FFEED4 100%)', icon: 'circle-exc' },
    { label: 'Medium', val: '12', sub: 'Keep monitoring', color: B1, bg: 'linear-gradient(135deg, #EEF4FF 0%, #E4ECFF 100%)', icon: 'info' },
    { label: 'Resolved 7d', val: '8', sub: 'Great follow-through', color: GREEN, bg: 'linear-gradient(135deg, #E8FBEF 0%, #DAF6E4 100%)', icon: 'check' },
  ];

  const tabs = [
    { name: 'All', count: 22, active: true, color: B1 },
    { name: 'Critical', count: 3, active: false, color: RED },
    { name: 'High', count: 7, active: false, color: ORANGE },
    { name: 'Medium', count: 12, active: false, color: B1 },
  ];

  const students = [
    {
      name: 'Aryan Reddy', initials: 'AR', avatarBg: '#7B3FF4',
      cls: '10B · Roll 04', sev: 'CRITICAL', sevColor: RED,
      reasons: [{ l: 'Att 48%', c: RED }, { l: 'Marks ↓ 24%', c: RED }, { l: 'No HW × 6', c: ORANGE }],
      score: 28, since: '3 weeks',
    },
    {
      name: 'Riya Kapoor', initials: 'RK', avatarBg: '#FF8800',
      cls: '10B · Roll 11', sev: 'CRITICAL', sevColor: RED,
      reasons: [{ l: 'Late × 9', c: RED }, { l: 'Marks 41%', c: ORANGE }],
      score: 34, since: '2 weeks',
    },
    {
      name: 'Krish Mehta', initials: 'KM', avatarBg: '#FF3355',
      cls: '10A · Roll 08', sev: 'HIGH', sevColor: ORANGE,
      reasons: [{ l: 'Att 64%', c: ORANGE }, { l: 'Behaviour', c: ORANGE }],
      score: 52, since: '1 week',
    },
  ];

  return (
    <IPadShellWithSidebar activePath="/risks-alerts">
      <div style={{ background: '#EEF4FF', flex: 1, overflowY: 'auto', minHeight: 0, padding: '10px 12px 12px', fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif" }}>

        {/* Page header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 9 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4 }}>
              <span style={{ width: 4, height: 4, borderRadius: 1, background: RED, boxShadow: `0 0 6px ${RED}88` }} />
              <span style={{ fontSize: 6, fontWeight: 700, color: T3, letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>Teacher Dashboard · Critical Watch</span>
            </div>
            <h1 style={{ fontSize: 22, fontWeight: 700, color: T1, letterSpacing: '-0.7px', lineHeight: 1.05, margin: 0 }}>
              Risks &amp; <span style={{ color: RED }}>Alerts</span>
            </h1>
            <div style={{ fontSize: 8, fontWeight: 500, color: T3, marginTop: 3, letterSpacing: '-0.1px' }}>
              3 students need outreach. 8 resolved this week.
            </div>
          </div>
          <div style={{ display: 'flex', gap: 4 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '4px 9px', borderRadius: 7, background: `linear-gradient(135deg, ${RED} 0%, #FF6677 100%)`, color: '#fff', fontSize: 6, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' as const, boxShadow: `0 4px 12px ${RED}55` }}>
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#fff' }} />
              3 Critical Alerts
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '4px 9px', borderRadius: 7, background: '#fff', color: B1, fontSize: 6, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' as const, border: `0.5px solid ${B1}1a`, boxShadow: '0 3px 10px rgba(0,85,255,0.06)' }}>
              <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
              View Students
            </div>
          </div>
        </div>

        {/* Hero banner */}
        <div style={{ background: HERO_GRAD, borderRadius: 14, padding: '12px 14px', color: '#fff', position: 'relative', overflow: 'hidden', boxShadow: '0 12px 28px rgba(0,8,60,0.32)', marginBottom: 9 }}>
          <div style={{ position: 'absolute', top: -25, right: -20, width: 110, height: 110, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,51,85,0.22) 0%, transparent 65%)' }} />
          <div style={{ position: 'absolute', bottom: -30, left: -25, width: 80, height: 80, borderRadius: '50%', background: 'radial-gradient(circle, rgba(111,255,170,0.14) 0%, transparent 65%)' }} />
          <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, flex: 1, minWidth: 0 }}>
              <div style={{ width: 32, height: 32, borderRadius: 9, background: 'rgba(255,255,255,0.16)', border: '0.5px solid rgba(255,255,255,0.26)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 3, padding: '2px 7px', borderRadius: 999, background: 'rgba(255,153,170,0.16)', border: '0.5px solid rgba(255,153,170,0.34)', fontSize: 5.5, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' as const, marginBottom: 4, color: '#FF99AA' }}>
                  Urgent action
                </div>
                <h2 style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.7px', margin: 0, color: '#fff', lineHeight: 1 }}>3</h2>
                <p style={{ fontSize: 7, color: 'rgba(255,255,255,0.78)', fontWeight: 500, margin: '3px 0 0 0', lineHeight: 1.45, maxWidth: 200 }}>
                  <strong style={{ color: '#fff', fontWeight: 700 }}>3 students</strong> need your outreach immediately — flagged critical. Resolved 8 already this week.
                </p>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4, flexShrink: 0 }}>
              {[
                { label: 'Attendance', val: '8', color: '#FFD088' },
                { label: 'Grades', val: '11', color: '#FF99AA' },
                { label: 'Resolved', val: '8', color: '#6FFFAA' },
              ].map(s => (
                <div key={s.label} style={{ background: 'rgba(255,255,255,0.10)', borderRadius: 7, padding: '5px 8px', border: '0.5px solid rgba(255,255,255,0.14)', minWidth: 50 }}>
                  <div style={{ fontSize: 5, fontWeight: 700, color: 'rgba(255,255,255,0.65)', letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 3 }}>{s.label}</div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: s.color, letterSpacing: '-0.3px' }}>{s.val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4-col KPI tiles */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6, marginBottom: 9 }}>
          {tiles.map(k => (
            <div key={k.label} style={{ background: k.bg, borderRadius: 10, padding: '8px 10px', border: `0.5px solid ${k.color}28`, position: 'relative', overflow: 'hidden', boxShadow: '0 4px 12px rgba(20,40,90,0.06)' }}>
              <div style={{ position: 'absolute', right: 6, bottom: 4, color: k.color, opacity: 0.20, lineHeight: 0 }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  {k.icon === 'alert' && <><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /></>}
                  {k.icon === 'circle-exc' && <><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /></>}
                  {k.icon === 'info' && <><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></>}
                  {k.icon === 'check' && <><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></>}
                </svg>
              </div>
              <div style={{ width: 18, height: 18, borderRadius: 5, background: `${k.color}22`, color: k.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 5, position: 'relative' }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  {k.icon === 'alert' && <><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /></>}
                  {k.icon === 'circle-exc' && <><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /></>}
                  {k.icon === 'info' && <><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></>}
                  {k.icon === 'check' && <><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></>}
                </svg>
              </div>
              <div style={{ fontSize: 5.5, fontWeight: 700, color: k.color, letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginBottom: 2, position: 'relative' }}>{k.label}</div>
              <div style={{ fontSize: 17, fontWeight: 800, color: T1, letterSpacing: '-0.5px', lineHeight: 1.05, position: 'relative' }}>{k.val}</div>
              <div style={{ fontSize: 5.5, fontWeight: 600, color: T3, marginTop: 3, position: 'relative' }}>{k.sub}</div>
            </div>
          ))}
        </div>

        {/* Filter tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 8 }}>
          {tabs.map(t => (
            <div key={t.name} style={{
              fontSize: 6.5, fontWeight: 700,
              padding: '4px 9px', borderRadius: 999,
              background: t.active ? `linear-gradient(135deg, ${t.color}, ${t.color}cc)` : '#fff',
              color: t.active ? '#fff' : t.color,
              border: t.active ? 'none' : `0.5px solid ${t.color}33`,
              boxShadow: t.active ? `0 3px 8px ${t.color}55` : '0 2px 5px rgba(0,85,255,0.04)',
              display: 'flex', alignItems: 'center', gap: 3,
            }}>
              {t.name}
              <span style={{ background: t.active ? 'rgba(255,255,255,0.22)' : `${t.color}1a`, color: t.active ? '#fff' : t.color, fontSize: 5.5, fontWeight: 700, padding: '0.5px 4px', borderRadius: 999 }}>{t.count}</span>
            </div>
          ))}
        </div>

        {/* Risk students list */}
        <div style={{ background: '#fff', borderRadius: 12, padding: 9, boxShadow: '0 4px 12px rgba(0,85,255,0.06)', border: `0.5px solid ${B1}14` }}>
          {students.map((s, i) => (
            <div key={s.name} style={{ display: 'flex', alignItems: 'flex-start', gap: 9, padding: '8px 5px', borderTop: i > 0 ? `0.5px solid ${B1}0d` : 'none', borderLeft: `2.5px solid ${s.sevColor}`, marginLeft: -9, paddingLeft: 9 }}>
              <div style={{ width: 26, height: 26, borderRadius: 7, background: s.avatarBg, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontWeight: 700, flexShrink: 0 }}>
                {s.initials}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 2 }}>
                  <span style={{ fontSize: 8.5, fontWeight: 700, color: T1, letterSpacing: '-0.2px' }}>{s.name}</span>
                  <span style={{ fontSize: 5.5, fontWeight: 700, color: '#fff', background: s.sevColor, padding: '1.5px 5px', borderRadius: 999, letterSpacing: '0.06em' }}>{s.sev}</span>
                </div>
                <div style={{ fontSize: 5.5, color: T4, marginBottom: 4 }}>{s.cls} · flagged {s.since} ago</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                  {s.reasons.map(r => (
                    <span key={r.l} style={{ fontSize: 5.5, fontWeight: 700, color: r.c, background: `${r.c}1a`, padding: '1.5px 5px', borderRadius: 4 }}>{r.l}</span>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4, flexShrink: 0 }}>
                <div style={{ fontSize: 12, fontWeight: 800, color: s.sevColor, letterSpacing: '-0.3px', lineHeight: 1 }}>{s.score}</div>
                <div style={{ fontSize: 5, fontWeight: 700, color: T4, letterSpacing: '0.1em', textTransform: 'uppercase' as const }}>risk score</div>
                <div style={{ fontSize: 6, fontWeight: 700, color: '#fff', background: B1, padding: '3px 7px', borderRadius: 5, display: 'flex', alignItems: 'center', gap: 3, boxShadow: `0 3px 8px ${B1}55` }}>
                  Contact parent
                  <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><polyline points="9 18 15 12 9 6" /></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </IPadShellWithSidebar>
  );
};

export default TeacherRisksAlertsIPad;
