/**
 * Static iPad mockup — Principal · Risk Students.
 * Mirrors live page: red hero banner + 4 KPI cards + filter tabs +
 * student risk cards with factor chips + AI intervention panel.
 */

import PrincipalIPadShell from './PrincipalIPadShell';

const PrincipalRiskStudentsIPad = () => {
  const T1 = '#001040';
  const T3 = '#5070B0';
  const BLUE = '#0055FF';
  const RED = '#FF3355';
  const GOLD = '#FFAA00';
  const GREEN = '#00C853';

  return (
    <PrincipalIPadShell activePath="/risk-students">
      <div style={{ padding: 12 }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 9 }}>
          <div style={{ width: 26, height: 26, borderRadius: 8, background: `${RED}1F`, color: RED, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={RED} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 21h20L12 2z" /><line x1="12" y1="9" x2="12" y2="13" /><circle cx="12" cy="17" r="0.7" fill={RED} /></svg>
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 500, color: T1, letterSpacing: '-0.3px', lineHeight: 1 }}>Risk Students</div>
            <div style={{ fontSize: 7, color: T3, marginTop: 2 }}>Monitor and intervene with at-risk students</div>
          </div>
        </div>

        {/* Red hero */}
        <div style={{
          borderRadius: 11, padding: '11px 13px',
          background: `linear-gradient(135deg, #660011 0%, #CC0033 50%, ${RED} 100%)`,
          color: '#fff', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 11,
          position: 'relative', overflow: 'hidden', boxShadow: '0 6px 18px rgba(255,51,85,0.25)',
        }}>
          <div style={{ position: 'absolute', top: -25, right: -25, width: 110, height: 110, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.10), transparent 65%)' }} />
          <div style={{ width: 32, height: 32, borderRadius: 9, background: 'rgba(255,255,255,0.16)', border: '0.5px solid rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 21h20L12 2zm0 6l7 12H5L12 8z" /></svg>
          </div>
          <div style={{ flex: 1, position: 'relative' }}>
            <div style={{ fontSize: 7, fontWeight: 500, color: 'rgba(255,255,255,0.75)', letterSpacing: '0.16em', textTransform: 'uppercase' as const }}>Total At-Risk</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 5, marginTop: 3 }}>
              <span style={{ fontSize: 30, fontWeight: 300, lineHeight: 1, letterSpacing: '-1.2px' }}>47</span>
              <span style={{ fontSize: 10, fontWeight: 400, color: 'rgba(255,255,255,0.65)' }}>students</span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, position: 'relative' }}>
            <span style={{ fontSize: 6, fontWeight: 600, color: '#fff', background: 'rgba(255,255,255,0.18)', padding: '3px 7px', borderRadius: 999, letterSpacing: '0.1em' }}>NEEDS ACTION</span>
            <span style={{ fontSize: 6, fontWeight: 600, color: '#FFD8E0', background: 'rgba(0,0,0,0.18)', padding: '3px 7px', borderRadius: 999, letterSpacing: '0.1em' }}>+8 NEW THIS WEEK</span>
          </div>
        </div>

        {/* 4 KPIs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 7, marginBottom: 9 }}>
          {[
            { l: 'Critical', v: 12, sub: 'Immediate action', c: RED, bg: 'linear-gradient(135deg, #FFEEF0, #FFE2E6)' },
            { l: 'Warning', v: 23, sub: 'Monitor closely', c: GOLD, bg: 'linear-gradient(135deg, #FFF6E8, #FFEED4)' },
            { l: 'New This Week', v: 8, sub: 'Just flagged', c: BLUE, bg: 'linear-gradient(135deg, #DEE6F8, #F8FAFE)' },
            { l: 'Monitoring', v: 12, sub: 'Under watch', c: GREEN, bg: 'linear-gradient(135deg, #E8FBEF, #DAF6E4)' },
          ].map(c => (
            <div key={c.l} style={{ background: c.bg, border: `0.5px solid ${c.c}33`, borderRadius: 11, padding: '8px 10px' }}>
              <div style={{ width: 20, height: 20, borderRadius: 5, background: `${c.c}22`, color: c.c, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 4 }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill={c.c}><circle cx="12" cy="12" r="6" /></svg>
              </div>
              <div style={{ fontSize: 6, fontWeight: 600, color: c.c, letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 2 }}>{c.l}</div>
              <div style={{ fontSize: 18, fontWeight: 300, color: T1, letterSpacing: '-0.7px', lineHeight: 1 }}>{c.v}</div>
              <div style={{ fontSize: 6, fontWeight: 500, color: c.c, marginTop: 3 }}>{c.sub}</div>
            </div>
          ))}
        </div>

        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: 5, marginBottom: 9 }}>
          {[
            { l: 'All', v: 47, active: true },
            { l: 'CRITICAL', v: 12, active: false, c: RED },
            { l: 'WARNING', v: 23, active: false, c: GOLD },
            { l: 'MONITORING', v: 12, active: false, c: GREEN },
          ].map(t => (
            <div key={t.l} style={{
              padding: '4px 9px', borderRadius: 999, fontSize: 6, fontWeight: 600,
              background: t.active ? `linear-gradient(135deg, ${BLUE}, #003ECC)` : '#fff',
              color: t.active ? '#fff' : (t.c || T1), letterSpacing: '0.08em',
              border: t.active ? 'none' : '0.5px solid #e2e8f0',
              boxShadow: t.active ? '0 2px 5px rgba(0,85,255,0.25)' : 'none',
            }}>
              {t.l} ({t.v})
            </div>
          ))}
        </div>

        {/* Risk cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7, marginBottom: 9 }}>
          {[
            { name: 'Rohit Yadav', cls: 'Grade 7C', tone: RED, level: 'CRITICAL', att: 48, score: 32, days: 21, factors: ['Att <60%', 'Acad <40%', 'Sudden 22% drop', '5 tasks overdue'], assigned: 'Mr. Sharma' },
            { name: 'Pranav Desai', cls: 'Grade 7B', tone: RED, level: 'CRITICAL', att: 56, score: 38, days: 14, factors: ['Att <60%', 'Acad <40%', '3 incidents'], assigned: 'Ms. Iyer' },
            { name: 'Aditi Joshi', cls: 'Grade 9A', tone: GOLD, level: 'WARNING', att: 62, score: 51, days: 9, factors: ['Att <75%', 'Acad <55%'], assigned: 'Mr. Khan' },
            { name: 'Karan Malhotra', cls: 'Grade 8C', tone: GOLD, level: 'WARNING', att: 71, score: 58, days: 6, factors: ['Tasks 40%', '4 late submissions'], assigned: 'Ms. Roy' },
          ].map((s, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 9, padding: 8, boxShadow: '0 2px 7px rgba(15,23,42,0.05)', borderLeft: `2.5px solid ${s.tone}`, border: '0.5px solid #f1f5f9' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 5 }}>
                <div style={{ width: 22, height: 22, borderRadius: '50%', background: `${s.tone}22`, color: s.tone, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 7, fontWeight: 600 }}>
                  {s.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 8, fontWeight: 600, color: T1, lineHeight: 1.1 }}>{s.name}</div>
                  <div style={{ fontSize: 6, color: T3, marginTop: 1 }}>{s.cls} · Att {s.att}%</div>
                </div>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: s.tone, animation: 'pulse 2s infinite' }} />
                <span style={{ fontSize: 5, fontWeight: 600, color: '#fff', background: s.tone, padding: '2px 5px', borderRadius: 999, letterSpacing: '0.1em' }}>{s.level}</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 3, marginBottom: 5 }}>
                {[
                  { l: 'Risk', v: s.level.slice(0, 4), c: s.tone },
                  { l: 'Days', v: s.days, c: T1 },
                  { l: 'Factors', v: s.factors.length, c: T1 },
                  { l: 'Owner', v: s.assigned.split(' ')[1].slice(0, 5), c: T1 },
                ].map(m => (
                  <div key={m.l} style={{ background: '#F6F8FC', borderRadius: 4, padding: '3px 4px' }}>
                    <div style={{ fontSize: 5, color: T3, letterSpacing: '0.1em', textTransform: 'uppercase' as const }}>{m.l}</div>
                    <div style={{ fontSize: 7, fontWeight: 600, color: m.c }}>{m.v}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 3, flexWrap: 'wrap', marginBottom: 5 }}>
                {s.factors.slice(0, 4).map((f, j) => (
                  <span key={j} style={{ fontSize: 5, fontWeight: 500, color: RED, background: `${RED}14`, padding: '2px 5px', borderRadius: 999, border: `0.5px solid ${RED}33` }}>{f}</span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 4 }}>
                <div style={{ flex: 1, background: BLUE, color: '#fff', fontSize: 6, fontWeight: 500, padding: '4px 0', borderRadius: 5, textAlign: 'center' }}>Schedule Meet</div>
                <div style={{ flex: 1, background: '#001040', color: '#fff', fontSize: 6, fontWeight: 500, padding: '4px 0', borderRadius: 5, textAlign: 'center' }}>Intervention</div>
                <div style={{ flex: 1, background: '#fff', border: `0.5px solid ${BLUE}55`, color: BLUE, fontSize: 6, fontWeight: 500, padding: '4px 0', borderRadius: 5, textAlign: 'center' }}>Notify Parent</div>
              </div>
            </div>
          ))}
        </div>

        {/* AI + Quick actions row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 7 }}>
          <div style={{ background: `linear-gradient(135deg, #001040 0%, #001A66 50%, ${BLUE} 100%)`, borderRadius: 11, padding: '10px 12px', color: '#fff', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -20, right: -20, width: 90, height: 90, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.10), transparent 65%)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 5 }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.7 5.3H19l-4.3 3.1 1.7 5.3-4.4-3.2-4.3 3.2 1.6-5.3L5 7.3h5.3z" /></svg>
              <div style={{ fontSize: 7, fontWeight: 600, color: 'rgba(255,255,255,0.85)', letterSpacing: '0.16em', textTransform: 'uppercase' as const }}>AI Intervention Plan</div>
            </div>
            <div style={{ fontSize: 8, lineHeight: 1.5, color: 'rgba(255,255,255,0.92)' }}>
              <strong style={{ color: '#fff' }}>12 critical students</strong> need parent calls within 24 hrs. <strong style={{ color: '#FFD27A' }}>Rohit Yadav</strong> shows a 22% attendance drop this week — escalate to home visit. Recommend bundled meet for Grade 7 (5 students same trend).
            </div>
          </div>
          <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)' }}>
            <div style={{ fontSize: 8, fontWeight: 600, color: T1, marginBottom: 6 }}>Quick Actions</div>
            {[
              { l: 'Schedule meeting', icon: '📅', c: BLUE },
              { l: 'Assign remedial work', icon: '📝', c: '#0044CC' },
              { l: 'Send parent alerts', icon: '🔔', c: RED },
            ].map((a, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '5px 7px', background: '#F6F8FC', borderRadius: 6, marginBottom: 4, fontSize: 7, fontWeight: 500, color: T1 }}>
                <span style={{ width: 16, height: 16, borderRadius: 4, background: `${a.c}1F`, color: a.c, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8 }}>{a.icon}</span>
                {a.l}
                <span style={{ marginLeft: 'auto', fontSize: 7, color: a.c }}>›</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PrincipalIPadShell>
  );
};

export default PrincipalRiskStudentsIPad;