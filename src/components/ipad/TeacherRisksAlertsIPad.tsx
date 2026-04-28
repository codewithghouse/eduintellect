/**
 * Static iPad mockup — Risks & Alerts page.
 * Mirrors /risks-alerts: header + 4 stat cards (Critical / At-Risk / Watch / Resolved)
 * + main risk list with reasons + outreach action buttons + AI insight banner.
 */

import IPadShellWithSidebar from './IPadShellWithSidebar';

const TeacherRisksAlertsIPad = () => {
  const BLUE = '#0055FF';
  const TT1 = '#001040';
  const TT3 = '#5070B0';
  const TT4 = '#99AACC';
  const SURFACE = '#F4F7FE';
  const GREEN = '#00C853';
  const RED = '#FF3355';
  const ORANGE = '#FF8800';
  const VIOLET = '#7B3FF4';
  const GOLD = '#FFAA00';

  return (
    <IPadShellWithSidebar activePath="/risks-alerts">
      <div style={{ padding: '12px 14px 6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4 }}>
          <span style={{ width: 4, height: 4, borderRadius: 1, background: BLUE }} />
          <span style={{ fontSize: 7, fontWeight: 500, color: TT3, letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>
            Teacher Dashboard · Risks & Alerts
          </span>
        </div>
        <h1 style={{ fontSize: 22, fontWeight: 300, color: TT1, letterSpacing: '-0.7px', lineHeight: 1.05, margin: 0 }}>
          Risks & Alerts
        </h1>
        <div style={{ fontSize: 9, fontWeight: 400, color: TT3, marginTop: 3 }}>
          Students sliding on attendance, marks, or behaviour — surfaced before exam day.
        </div>
      </div>

      <div style={{ flex: 1, padding: '6px 12px 12px', overflowY: 'auto', minHeight: 0 }}>
        {/* 4 stat cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 7, marginBottom: 8 }}>
          {[
            { label: 'Critical', val: '3', sub: 'Need outreach today', color: RED, bg: 'linear-gradient(135deg, #FFEEF0 0%, #FFE2E6 100%)' },
            { label: 'At-Risk', val: '7', sub: 'Watching closely', color: ORANGE, bg: 'linear-gradient(135deg, #FFF6E8 0%, #FFEED4 100%)' },
            { label: 'Recovering', val: '4', sub: 'Trending upward', color: BLUE, bg: 'linear-gradient(135deg, #DEE6F8 0%, #F8FAFE 100%)' },
            { label: 'Resolved', val: '12', sub: 'Last 30 days', color: GREEN, bg: 'linear-gradient(135deg, #E8FBEF 0%, #DAF6E4 100%)' },
          ].map(c => (
            <div key={c.label} style={{ background: c.bg, border: `0.5px solid ${c.color}33`, borderRadius: 11, padding: '8px 10px' }}>
              <div style={{ fontSize: 6, fontWeight: 500, color: c.color, letterSpacing: '0.14em', textTransform: 'uppercase' as const, marginBottom: 4 }}>{c.label}</div>
              <div style={{ fontSize: 18, fontWeight: 300, color: TT1, letterSpacing: '-0.8px', lineHeight: 1 }}>{c.val}</div>
              <div style={{ fontSize: 7, fontWeight: 500, color: c.color, marginTop: 3 }}>{c.sub}</div>
            </div>
          ))}
        </div>

        {/* AI Insight banner */}
        <div style={{ background: `linear-gradient(135deg, ${VIOLET} 0%, #5915C0 100%)`, color: '#fff', borderRadius: 11, padding: '9px 12px', display: 'flex', alignItems: 'center', gap: 9, marginBottom: 8, position: 'relative', overflow: 'hidden', boxShadow: '0 6px 18px rgba(123,63,244,0.20)' }}>
          <div style={{ position: 'absolute', top: -20, right: -20, width: 80, height: 80, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 65%)' }} />
          <div style={{ width: 26, height: 26, borderRadius: 8, background: 'rgba(255,255,255,0.18)', border: '0.5px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 2 }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M12 3v3M12 18v3M3 12h3M18 12h3" /></svg>
          </div>
          <div style={{ flex: 1, zIndex: 2 }}>
            <div style={{ fontSize: 6, fontWeight: 500, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.18em', textTransform: 'uppercase' as const, marginBottom: 2 }}>AI Insight</div>
            <div style={{ fontSize: 8, color: '#fff', lineHeight: 1.4 }}>
              <b style={{ fontWeight: 500 }}>Riya Sharma</b> went from "Watch" → "Critical" this week. Attendance crashed 24% after Apr 18. Recommend immediate parent call.
            </div>
          </div>
          <div style={{ fontSize: 6, fontWeight: 500, color: '#fff', background: 'rgba(255,255,255,0.18)', padding: '4px 8px', borderRadius: 999, letterSpacing: '0.08em', flexShrink: 0, zIndex: 2 }}>
            CALL
          </div>
        </div>

        {/* Risk list */}
        <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 7 }}>
            <div style={{ width: 22, height: 22, borderRadius: 7, background: RED, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 3L3 20h18L12 3z" /><line x1="12" y1="9" x2="12" y2="14" /><circle cx="12" cy="17" r="0.6" fill="currentColor" /></svg>
            </div>
            <div style={{ fontSize: 9, fontWeight: 500, color: TT1, letterSpacing: '-0.15px' }}>At-Risk Students</div>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 3 }}>
              {['All', 'Critical', 'At-Risk', 'Watch'].map((f, i) => (
                <div
                  key={f}
                  style={{
                    fontSize: 6,
                    fontWeight: 500,
                    color: i === 1 ? '#fff' : TT3,
                    background: i === 1 ? RED : SURFACE,
                    padding: '3px 8px',
                    borderRadius: 999,
                    letterSpacing: '0.04em',
                  }}
                >
                  {f}
                </div>
              ))}
            </div>
          </div>

          {[
            {
              name: 'Riya Sharma', cls: 'Class 10B · Roll 14', tone: RED, tier: 'CRITICAL',
              reasons: ['Attendance 48% (-24% vs Mar)', 'Marks dropped 18% in 2 weeks', 'Missed 3 assignments'],
              actions: ['Call Parent', 'Log Note'],
            },
            {
              name: 'Ankit Verma', cls: 'Class 9A · Roll 22', tone: RED, tier: 'CRITICAL',
              reasons: ['Attendance 56% (chronic)', 'Failed last 2 unit tests'],
              actions: ['Call Parent', 'Counselling'],
            },
            {
              name: 'Sara Khan', cls: 'Class 8B · Roll 07', tone: ORANGE, tier: 'AT-RISK',
              reasons: ['3 behaviour incidents in 7 days', 'Class avg dropped to 62%'],
              actions: ['Schedule Meet', 'Log Note'],
            },
            {
              name: 'Karan Patel', cls: 'Class 10B · Roll 19', tone: GOLD, tier: 'WATCH',
              reasons: ['Marks slowly trending down', 'Submission delays growing'],
              actions: ['Check-in', 'Log Note'],
            },
          ].map((s, i) => (
            <div key={s.name} style={{ padding: '8px 0', borderBottom: i < 3 ? '0.5px solid #F1F5F9' : 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <div style={{ width: 26, height: 26, borderRadius: '50%', background: `${s.tone}1A`, color: s.tone, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontWeight: 500 }}>
                  {s.name.split(' ').map(p => p[0]).join('')}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 9, fontWeight: 500, color: TT1, lineHeight: 1.2 }}>{s.name}</div>
                  <div style={{ fontSize: 6, color: TT4, marginTop: 1 }}>{s.cls}</div>
                </div>
                <div style={{ fontSize: 5, fontWeight: 500, color: s.tone, background: `${s.tone}1A`, padding: '3px 7px', borderRadius: 999, letterSpacing: '0.1em' }}>
                  {s.tier}
                </div>
              </div>
              <div style={{ marginLeft: 34, display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 4 }}>
                {s.reasons.map((r, j) => (
                  <div key={j} style={{ fontSize: 6, fontWeight: 500, color: TT3, background: SURFACE, padding: '2px 6px', borderRadius: 999 }}>
                    • {r}
                  </div>
                ))}
              </div>
              <div style={{ marginLeft: 34, display: 'flex', gap: 4 }}>
                {s.actions.map(a => (
                  <div key={a} style={{ fontSize: 6, fontWeight: 500, color: a.includes('Call') || a.includes('Counselling') ? '#fff' : BLUE, background: a.includes('Call') || a.includes('Counselling') ? s.tone : 'rgba(0,85,255,0.10)', padding: '3px 8px', borderRadius: 999 }}>
                    {a}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </IPadShellWithSidebar>
  );
};

export default TeacherRisksAlertsIPad;
