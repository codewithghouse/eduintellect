/**
 * Static iPad mockup — Parent · Concept Strengths page.
 * Faithful pixel-shrink of parent-dashboard/src/pages/ConceptStrengthsPage.tsx (desktop).
 *
 * Layout matches source:
 *   1. Toolbar: eyebrow with green pulse dot + h1 "Concept Strengths" + sub
 *      ("AI-powered learning tools for {student}") + avatar
 *   2. Feature tabs (Strengths active, Tutor, AI Practice etc.)
 *   3. Subject pills (active = blue gradient)
 *   4. 3-col mastery grid: Strong / Developing / Needs Work
 *      - icon box + label + count badge + concept rows with progress bars
 *      - "Needs Work" includes Recommended Focus tip box (lightbulb)
 *   5. Concept Mastery Progress trend chart (multi-line)
 */

import ParentIPadShell from './ParentIPadShell';

const ParentConceptStrengthsIPad = () => {
  const B1 = '#0055FF';
  const B2 = '#1166FF';
  const T1 = '#0B0F19';
  const T2 = '#1E2536';
  const T3 = '#5A6275';
  const T4 = '#8C92A4';
  const GREEN = '#00C853';
  const GREEN2 = '#007830';
  const ORANGE = '#FF8800';
  const ORANGE_DEEP = '#884400';
  const RED = '#FF3355';
  const VIOLET = '#7B3FF4';
  const BG2 = '#F4F7FE';

  const subjects = [
    { name: 'Mathematics', active: true },
    { name: 'Science', active: false },
    { name: 'English', active: false },
    { name: 'Social', active: false },
  ];

  const strong = [
    { title: 'Quadratic Equations', pct: 96 },
    { title: 'Newton\'s Laws', pct: 94 },
    { title: 'OOP Principles', pct: 92 },
  ];
  const developing = [
    { title: 'Trigonometric Identities', pct: 74 },
    { title: 'Organic Chemistry', pct: 71 },
    { title: 'Essay Structure', pct: 68 },
  ];
  const needsWork = [
    { title: 'Cell Biology', pct: 52 },
    { title: 'Calculus Limits', pct: 48 },
    { title: 'Periodic Table', pct: 42 },
  ];

  // Trend chart
  const months = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
  const series = [
    { name: 'Math', color: B1, data: [72, 76, 80, 84, 86, 91] },
    { name: 'Science', color: GREEN, data: [68, 70, 73, 78, 80, 82] },
    { name: 'English', color: VIOLET, data: [80, 78, 82, 84, 85, 87] },
  ];
  const W = 240, H = 60;
  const buildPts = (data: number[]) =>
    data.map((v, i) => `${((i / (data.length - 1)) * W).toFixed(1)},${(H - (v / 100) * H).toFixed(1)}`).join(' ');

  return (
    <ParentIPadShell activePath="/concept-strengths">
      <div style={{ background: '#EEF4FF', flex: 1, overflowY: 'auto', minHeight: 0, padding: '10px 12px 12px', fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif" }}>

        {/* Toolbar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 3 }}>
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: GREEN, boxShadow: `0 0 0 2px ${GREEN}33` }} />
              <span style={{ fontSize: 6, fontWeight: 800, color: T4, letterSpacing: '0.14em', textTransform: 'uppercase' as const }}>Parent Dashboard · Concept Strengths</span>
            </div>
            <h1 style={{ fontSize: 18, fontWeight: 800, color: T1, letterSpacing: '-0.5px', lineHeight: 1, margin: 0 }}>Concept Strengths</h1>
            <div style={{ fontSize: 7.5, color: T3, marginTop: 2, fontWeight: 500 }}>
              AI-powered learning tools for <strong style={{ color: B1, fontWeight: 700 }}>Aarav</strong>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 3, padding: '3px 7px', borderRadius: 999, background: `${B1}14`, border: `0.5px solid ${B1}33` }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: B1, boxShadow: `0 0 4px ${B1}88` }} />
              <span style={{ fontSize: 5.5, fontWeight: 800, color: B1 }}>AI syncing…</span>
            </div>
            <div style={{ width: 22, height: 22, borderRadius: '50%', background: `linear-gradient(140deg, ${B1}, ${B2})`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontWeight: 800, boxShadow: `0 3px 10px ${B1}55, 0 0 0 1.5px #fff` }}>A</div>
          </div>
        </div>

        {/* Feature tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 8 }}>
          {[
            { name: 'Strengths', active: true, icon: 'check', grad: `linear-gradient(135deg, ${GREEN}, #66EE88)` },
            { name: 'AI Tutor', active: false, icon: 'spark' },
            { name: 'Topic Map', active: false, icon: 'map' },
            { name: 'Practice', active: false, icon: 'edit' },
          ].map(t => (
            <div key={t.name} style={{
              display: 'flex', alignItems: 'center', gap: 4,
              padding: '4px 9px', borderRadius: 8,
              background: t.active ? t.grad : '#fff',
              color: t.active ? '#fff' : T3,
              border: t.active ? 'none' : `0.5px solid ${B1}1a`,
              fontSize: 7, fontWeight: 800, letterSpacing: '-0.1px',
              boxShadow: t.active ? `0 4px 12px ${GREEN}55` : '0 2px 5px rgba(0,85,255,0.04)',
            }}>
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={t.active ? 2.5 : 2.2}>
                {t.icon === 'check' && <><polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" /></>}
                {t.icon === 'spark' && <><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1" /></>}
                {t.icon === 'map' && <><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" /><line x1="8" y1="2" x2="8" y2="18" /><line x1="16" y1="6" x2="16" y2="22" /></>}
                {t.icon === 'edit' && <><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4z" /></>}
              </svg>
              {t.name}
            </div>
          ))}
        </div>

        {/* Subject pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 8 }}>
          {subjects.map(s => (
            <div key={s.name} style={{
              padding: '3px 9px', borderRadius: 8,
              background: s.active ? `linear-gradient(135deg, ${B1}, ${B2})` : '#fff',
              color: s.active ? '#fff' : T3,
              border: s.active ? 'none' : `0.5px solid ${B1}1a`,
              fontSize: 6.5, fontWeight: 800, letterSpacing: '-0.1px',
              boxShadow: s.active ? `0 3px 8px ${B1}55` : '0 2px 5px rgba(0,85,255,0.04)',
            }}>
              {s.name}
            </div>
          ))}
        </div>

        {/* 3-col mastery grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 7, marginBottom: 7 }}>
          {[
            { label: 'Strong', count: 14, color: GREEN, color2: GREEN2, glow: 'rgba(0,200,83,0.08)', iconBg: `${GREEN}1a`, iconBdr: `${GREEN}38`, bar: `linear-gradient(90deg, ${GREEN}, #66EE88)`, items: strong, icon: 'check' },
            { label: 'Developing', count: 9, color: ORANGE, color2: ORANGE_DEEP, glow: 'rgba(255,136,0,0.08)', iconBg: `${ORANGE}1a`, iconBdr: `${ORANGE}38`, bar: `linear-gradient(90deg, ${ORANGE}, #FFCC44)`, items: developing, icon: 'dashed' },
            { label: 'Needs Work', count: 6, color: RED, color2: RED, glow: 'rgba(255,51,85,0.08)', iconBg: `${RED}1a`, iconBdr: `${RED}38`, bar: `linear-gradient(90deg, ${RED}, #FF88AA)`, items: needsWork, icon: 'alert', focus: 'Cell Biology + Calculus Limits dropped together. Recommend 30-min daily revision.' },
          ].map(b => (
            <div key={b.label} style={{ background: '#fff', borderRadius: 12, padding: 9, position: 'relative', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,85,255,0.10)', border: `0.5px solid ${B1}14` }}>
              <div style={{ position: 'absolute', top: -16, right: -10, width: 60, height: 60, borderRadius: '50%', background: `radial-gradient(circle, ${b.glow} 0%, transparent 70%)` }} />
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6, position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <div style={{ width: 18, height: 18, borderRadius: 5, background: b.iconBg, border: `0.5px solid ${b.iconBdr}`, color: b.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      {b.icon === 'check' && <><circle cx="12" cy="12" r="10" /><polyline points="9 12 11 14 15 10" /></>}
                      {b.icon === 'dashed' && <><circle cx="12" cy="12" r="10" strokeDasharray="3 3" /></>}
                      {b.icon === 'alert' && <><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></>}
                    </svg>
                  </div>
                  <span style={{ fontSize: 8.5, fontWeight: 800, color: T1, letterSpacing: '-0.2px' }}>{b.label}</span>
                </div>
                <div style={{ width: 16, height: 16, borderRadius: 5, background: `linear-gradient(135deg, ${b.color2}, ${b.color})`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 7, fontWeight: 800, boxShadow: `0 2px 5px ${b.color}40` }}>
                  {b.count}
                </div>
              </div>
              <div style={{ position: 'relative', zIndex: 2 }}>
                {b.items.map((c, i) => (
                  <div key={i} style={{ marginBottom: i < b.items.length - 1 ? 5 : 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
                      <span style={{ fontSize: 6, fontWeight: 700, color: T2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', paddingRight: 3 }}>{c.title}</span>
                      <span style={{ fontSize: 6.5, fontWeight: 800, color: b.color2 }}>{c.pct}%</span>
                    </div>
                    <div style={{ height: 4, borderRadius: 999, overflow: 'hidden', background: BG2 }}>
                      <div style={{ height: '100%', width: `${c.pct}%`, background: b.bar, borderRadius: 999 }} />
                    </div>
                  </div>
                ))}
                {b.focus && (
                  <div style={{ marginTop: 6, padding: '5px 7px', borderRadius: 7, background: `${ORANGE}0d`, border: `0.5px solid ${ORANGE}33`, display: 'flex', alignItems: 'flex-start', gap: 4 }}>
                    <div style={{ width: 14, height: 14, borderRadius: 4, background: `${ORANGE}28`, border: `0.5px solid ${ORANGE}40`, color: ORANGE, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 21h6M12 17h0M16 11a4 4 0 00-8 0c0 2 1 3 2 4h4c1-1 2-2 2-4z" /></svg>
                    </div>
                    <div>
                      <div style={{ fontSize: 5.5, fontWeight: 800, color: ORANGE, letterSpacing: '-0.05px', marginBottom: 1 }}>Recommended Focus</div>
                      <div style={{ fontSize: 5.5, color: ORANGE_DEEP, lineHeight: 1.45 }}>{b.focus}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Concept Mastery Progress chart */}
        <div style={{ background: '#fff', borderRadius: 12, padding: '9px 11px', boxShadow: '0 4px 12px rgba(0,85,255,0.10)', border: `0.5px solid ${B1}14` }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
            <div style={{ fontSize: 9, fontWeight: 800, color: T1, letterSpacing: '-0.2px' }}>Concept Mastery Progress</div>
            <div style={{ fontSize: 5.5, color: T4, fontWeight: 600 }}>6 months</div>
          </div>
          <svg width="100%" height={H + 12} viewBox={`0 0 ${W} ${H + 12}`} preserveAspectRatio="none">
            {[0, 25, 50, 75, 100].map(g => (
              <line key={g} x1="0" y1={H - (g / 100) * H} x2={W} y2={H - (g / 100) * H} stroke="rgba(0,85,255,0.07)" strokeWidth="0.5" />
            ))}
            {series.map(s => (
              <polyline key={s.name} points={buildPts(s.data)} fill="none" stroke={s.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            ))}
            {series.flatMap(s => s.data.map((v, i) => {
              const x = (i / (s.data.length - 1)) * W;
              const y = H - (v / 100) * H;
              return <circle key={`${s.name}-${i}`} cx={x} cy={y} r="1.4" fill="#fff" stroke={s.color} strokeWidth="1.1" />;
            }))}
          </svg>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 1, fontSize: 5, color: T4, fontWeight: 600 }}>
            {months.map(m => <span key={m}>{m}</span>)}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 6, justifyContent: 'center' }}>
            {series.map(s => (
              <div key={s.name} style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: s.color }} />
                <span style={{ fontSize: 5.5, fontWeight: 700, color: T3 }}>{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ParentIPadShell>
  );
};

export default ParentConceptStrengthsIPad;
