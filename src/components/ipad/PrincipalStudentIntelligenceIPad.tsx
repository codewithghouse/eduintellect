/**
 * Static iPad mockup — Principal · Student Intelligence.
 * Mirrors the live page: 3 tier KPIs (Weak/Developing/Smart) + filter chips
 * + auto-classified student cards + AI Class Intelligence panel.
 */

import PrincipalIPadShell from './PrincipalIPadShell';

const PrincipalStudentIntelligenceIPad = () => {
  const T1 = '#001040';
  const T3 = '#5070B0';
  const BLUE = '#0055FF';
  const RED = '#FF3355';
  const ORANGE = '#FF8800';
  const GREEN = '#00C853';

  return (
    <PrincipalIPadShell activePath="/student-intelligence">
      <div style={{ padding: 12 }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
            <div style={{ width: 26, height: 26, borderRadius: 8, background: `linear-gradient(135deg, ${BLUE}, #1166FF)`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.7 5.3H19l-4.3 3.1 1.7 5.3-4.4-3.2-4.3 3.2 1.6-5.3L5 7.3h5.3z" /></svg>
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 500, color: T1, letterSpacing: '-0.3px', lineHeight: 1 }}>Student Intelligence</div>
              <div style={{ fontSize: 7, color: T3, marginTop: 2 }}>Auto-detected performance tiers · Filter by class · Notify in one click</div>
            </div>
          </div>
          <div style={{ background: `linear-gradient(135deg, #001040, ${BLUE})`, color: '#fff', fontSize: 7, fontWeight: 500, padding: '5px 9px', borderRadius: 7 }}>
            Notify All Class Teachers ›
          </div>
        </div>

        {/* 3 tier KPI cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 7, marginBottom: 9 }}>
          {[
            { label: 'Weak', count: 24, sub: 'Needs immediate attention', color: RED, bg: 'linear-gradient(135deg, #FFEEF0 0%, #FFE2E6 100%)', icon: 'M12 2L2 21h20L12 2z M12 9v4 M12 17h.01' },
            { label: 'Developing', count: 58, sub: 'Moderate performance', color: ORANGE, bg: 'linear-gradient(135deg, #FFF6E8 0%, #FFEED4 100%)', icon: 'M3 17l6-6 4 4 8-8 M14 7h7v7' },
            { label: 'Smart', count: 142, sub: 'Strong performer', color: GREEN, bg: 'linear-gradient(135deg, #E8FBEF 0%, #DAF6E4 100%)', icon: 'M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z' },
          ].map(c => (
            <div key={c.label} style={{ background: c.bg, border: `0.5px solid ${c.color}33`, borderRadius: 11, padding: '9px 11px', position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5 }}>
                <div style={{ width: 22, height: 22, borderRadius: 6, background: `${c.color}1F`, color: c.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={c.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={c.icon} /></svg>
                </div>
                <span style={{ fontSize: 5, fontWeight: 600, color: c.color, letterSpacing: '0.14em', textTransform: 'uppercase' as const }}>Tier</span>
              </div>
              <div style={{ fontSize: 6, fontWeight: 600, color: c.color, letterSpacing: '0.14em', textTransform: 'uppercase' as const, marginBottom: 2 }}>{c.label}</div>
              <div style={{ fontSize: 22, fontWeight: 300, color: T1, letterSpacing: '-0.8px', lineHeight: 1 }}>{c.count}</div>
              <div style={{ fontSize: 6, fontWeight: 500, color: c.color, marginTop: 4 }}>{c.sub}</div>
            </div>
          ))}
        </div>

        {/* Filter row */}
        <div style={{ display: 'flex', gap: 7, marginBottom: 9 }}>
          <div style={{ flex: 1, background: '#fff', border: `0.5px solid ${BLUE}33`, borderRadius: 8, padding: '5px 9px', display: 'flex', alignItems: 'center', gap: 6 }}>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="2"><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            <span style={{ fontSize: 7, color: '#94a3b8' }}>Search students by name or roll…</span>
          </div>
          <div style={{ background: '#fff', border: '0.5px solid #e2e8f0', borderRadius: 8, padding: '5px 9px', display: 'flex', alignItems: 'center', gap: 6, fontSize: 7, fontWeight: 500, color: T1 }}>
            All Classes (224)
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke={T3} strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
          </div>
        </div>

        {/* Section: Weak (active tab) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 7 }}>
          <span style={{ width: 4, height: 14, background: RED, borderRadius: 2 }} />
          <div style={{ fontSize: 9, fontWeight: 600, color: T1 }}>Weak</div>
          <span style={{ fontSize: 6, fontWeight: 600, color: '#fff', background: RED, padding: '2px 6px', borderRadius: 999 }}>24</span>
          <div style={{ marginLeft: 'auto', fontSize: 6, color: T3 }}>Auto-classified · Updated 2 min ago</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7, marginBottom: 9 }}>
          {[
            { name: 'Rohit Yadav', cls: 'Grade 7C · Roll 14', tone: RED, score: 32, att: 48, reason: 'Avg 32% · Att 48% · 4 incidents' },
            { name: 'Pranav Desai', cls: 'Grade 7B · Roll 22', tone: RED, score: 38, att: 56, reason: 'Avg 38% · Att 56% · slipping fast' },
            { name: 'Aditi Joshi', cls: 'Grade 9A · Roll 09', tone: RED, score: 41, att: 62, reason: '5 missed assignments this month' },
            { name: 'Saanvi Bose', cls: 'Grade 6A · Roll 31', tone: RED, score: 44, att: 71, reason: 'Below passing in 3 subjects' },
          ].map((s, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 9, padding: 8, boxShadow: '0 2px 7px rgba(15,23,42,0.05)', borderLeft: `2.5px solid ${s.tone}`, border: '0.5px solid #f1f5f9' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 22, height: 22, borderRadius: '50%', background: `${s.tone}22`, color: s.tone, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 7, fontWeight: 600 }}>
                  {s.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 8, fontWeight: 600, color: T1, lineHeight: 1.1 }}>{s.name}</div>
                  <div style={{ fontSize: 6, color: T3, marginTop: 1 }}>{s.cls}</div>
                </div>
                <span style={{ fontSize: 5, fontWeight: 600, color: '#fff', background: s.tone, padding: '2px 5px', borderRadius: 999, letterSpacing: '0.1em' }}>WEAK</span>
              </div>
              <div style={{ fontSize: 6, color: T3, margin: '5px 0' }}>{s.reason}</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 4, marginBottom: 5 }}>
                {[
                  { l: 'Avg', v: `${s.score}%`, c: s.tone },
                  { l: 'Att', v: `${s.att}%`, c: s.score < 40 ? RED : ORANGE },
                  { l: 'Tier', v: 'Weak', c: s.tone },
                ].map(m => (
                  <div key={m.l} style={{ background: '#F6F8FC', borderRadius: 5, padding: '3px 5px' }}>
                    <div style={{ fontSize: 5, color: T3, letterSpacing: '0.1em', textTransform: 'uppercase' as const }}>{m.l}</div>
                    <div style={{ fontSize: 8, fontWeight: 600, color: m.c }}>{m.v}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 4 }}>
                <div style={{ flex: 1, background: BLUE, color: '#fff', fontSize: 6, fontWeight: 500, padding: '4px 0', borderRadius: 5, textAlign: 'center' }}>AI Analysis</div>
                <div style={{ flex: 1, background: '#fff', border: `0.5px solid ${BLUE}55`, color: BLUE, fontSize: 6, fontWeight: 500, padding: '4px 0', borderRadius: 5, textAlign: 'center' }}>Notify Teacher</div>
                <div style={{ flex: 1, background: `linear-gradient(135deg, ${GREEN}, #00A841)`, color: '#fff', fontSize: 6, fontWeight: 500, padding: '4px 0', borderRadius: 5, textAlign: 'center' }}>Notify Parent</div>
              </div>
            </div>
          ))}
        </div>

        {/* AI Class Intelligence */}
        <div style={{
          background: `linear-gradient(135deg, #001040 0%, #001A66 50%, ${BLUE} 100%)`,
          borderRadius: 11, padding: '10px 12px', color: '#fff', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: -20, right: -20, width: 90, height: 90, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.10), transparent 65%)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 5, position: 'relative' }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.7 5.3H19l-4.3 3.1 1.7 5.3-4.4-3.2-4.3 3.2 1.6-5.3L5 7.3h5.3z" /></svg>
            <div style={{ fontSize: 7, fontWeight: 600, color: 'rgba(255,255,255,0.85)', letterSpacing: '0.16em', textTransform: 'uppercase' as const }}>AI Class Intelligence</div>
            <span style={{ marginLeft: 'auto', width: 5, height: 5, borderRadius: '50%', background: '#6FFFAA', boxShadow: '0 0 7px #6FFFAA' }} />
          </div>
          <div style={{ fontSize: 8, lineHeight: 1.5, color: 'rgba(255,255,255,0.9)', position: 'relative' }}>
            <strong style={{ color: '#fff' }}>24 students</strong> performing below passing threshold across 7 classes. <strong style={{ color: '#FFD27A' }}>Rohit Yadav (32%)</strong> is the lowest — recommend immediate teacher intervention + parent meet within 48 hrs.
          </div>
        </div>
      </div>
    </PrincipalIPadShell>
  );
};

export default PrincipalStudentIntelligenceIPad;