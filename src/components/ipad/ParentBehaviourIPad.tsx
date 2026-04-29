/**
 * Static iPad mockup — Parent · Behaviour & Discipline page.
 * Faithful pixel-shrink of parent-dashboard/src/pages/BehaviourPage.tsx (desktop).
 *
 * Layout matches source:
 *   1. Toolbar: blue pulse dot eyebrow + h1 "Behaviour & Discipline" + subtitle
 *      + "{rating} / 5" green pill + avatar
 *   2. Hero Row (5-col): Rating Card (col-3) — 72px green number "Out of 5" +
 *      stars + 3 sub-metrics (Conduct/Punctuality/Respect) with bars
 *      + Breakdown Grid (col-2) — 2x2 stat cards (Conduct/Punct/Respect/Participation)
 *   3. Highlights Row (2-col): Positive Highlights + Areas for Improvement
 */

import ParentIPadShell from './ParentIPadShell';

const ParentBehaviourIPad = () => {
  const B1 = '#0055FF';
  const B2 = '#1166FF';
  const B4 = '#4499FF';
  const T1 = '#0B0F19';
  const T3 = '#5A6275';
  const T4 = '#8C92A4';
  const GREEN = '#00C853';
  const GREEN_D = '#007830';
  const ORANGE = '#FF8800';
  const GOLD = '#FFAA00';
  const VIOLET = '#7B3FF4';
  const BG2 = '#F4F7FE';

  const positives = [
    { text: 'Helped a classmate solve quadratic equations', date: '2h ago', teacher: 'Ms. Iyer', tier: 'Gold', icon: 'trophy' },
    { text: 'Volunteered to lead the lab cleanup', date: 'Yesterday', teacher: 'Mr. Khan', tier: 'Silver', icon: 'heart' },
    { text: 'Top scorer in surprise math quiz', date: '4d ago', teacher: 'Mr. Khan', tier: 'Gold', icon: 'star' },
    { text: 'Organized study group for peers', date: '1w ago', teacher: 'Ms. Verma', tier: 'Bronze', icon: 'users' },
  ];

  const improvements = [
    { text: 'Late submission on Geometry homework', date: '2d ago', teacher: 'Mr. Khan', icon: 'clock' },
    { text: 'Talking during English class', date: '5d ago', teacher: 'Ms. Verma', icon: 'msg' },
    { text: 'Forgot lab coat on practical day', date: '1w ago', teacher: 'Ms. Iyer', icon: 'pkg' },
  ];

  return (
    <ParentIPadShell activePath="/behaviour">
      <div style={{ background: '#EEF4FF', flex: 1, overflowY: 'auto', minHeight: 0, padding: '10px 12px 12px', fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif" }}>

        {/* Toolbar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 3 }}>
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: B1, boxShadow: `0 0 0 2px ${B1}33` }} />
              <span style={{ fontSize: 6, fontWeight: 800, color: T4, letterSpacing: '0.14em', textTransform: 'uppercase' as const }}>Parent Dashboard · Behaviour</span>
            </div>
            <h1 style={{ fontSize: 18, fontWeight: 800, color: T1, letterSpacing: '-0.5px', lineHeight: 1, margin: 0 }}>Behaviour &amp; Discipline</h1>
            <div style={{ fontSize: 7.5, color: T3, marginTop: 3, fontWeight: 500 }}>Teacher observations, positive highlights, and improvement areas</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 3, padding: '3px 8px', borderRadius: 999, background: `${GREEN}14`, color: GREEN_D, fontSize: 5.5, fontWeight: 800, border: `0.5px solid ${GREEN}38` }}>
              <svg width="7" height="7" viewBox="0 0 24 24" fill={GREEN} stroke={GREEN} strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" /></svg>
              4.2 / 5
            </div>
            <div style={{ width: 22, height: 22, borderRadius: '50%', background: `linear-gradient(140deg, ${B1}, ${B2})`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontWeight: 800, boxShadow: `0 3px 10px ${B1}55, 0 0 0 1.5px #fff` }}>A</div>
          </div>
        </div>

        {/* Hero Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 7, marginBottom: 7 }}>

          {/* Rating Card */}
          <div style={{ background: '#fff', borderRadius: 13, padding: '10px 12px', position: 'relative', overflow: 'hidden', boxShadow: '0 6px 18px rgba(0,85,255,0.10)', border: `0.5px solid ${B1}1a` }}>
            <div style={{ position: 'absolute', top: -25, right: -15, width: 130, height: 130, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,200,83,0.08) 0%, transparent 70%)' }} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ fontSize: 10, fontWeight: 800, color: T1, letterSpacing: '-0.2px' }}>Overall Behavior Rating</div>
              <div style={{ fontSize: 6, color: T3, marginTop: 1, marginBottom: 7, fontWeight: 500 }}>Based on teacher observations this term</div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div>
                  <div style={{ fontSize: 36, fontWeight: 800, color: GREEN, letterSpacing: '-1.5px', lineHeight: 1 }}>4.2</div>
                  <div style={{ fontSize: 5.5, fontWeight: 800, color: T4, letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginTop: 5 }}>Out of 5</div>
                </div>
                <div style={{ display: 'flex', gap: 2 }}>
                  {[1, 2, 3, 4, 5].map(n => (
                    <svg key={n} width="16" height="16" viewBox="0 0 24 24" fill={n <= 4 ? GOLD : 'none'} stroke={n <= 4 ? GOLD : T4} strokeWidth="1.6">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />
                    </svg>
                  ))}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6, paddingTop: 7, marginTop: 8, borderTop: `0.5px solid ${B1}14` }}>
                {[
                  { label: 'Conduct', val: 'A', color: GREEN, bar: 88, grad: `linear-gradient(90deg, ${GREEN}, #66EE88)` },
                  { label: 'Punctuality', val: '92%', color: B1, bar: 92, grad: `linear-gradient(90deg, ${B1}, ${B4})` },
                  { label: 'Respect', val: 'A', color: GOLD, bar: 84, grad: `linear-gradient(90deg, ${GOLD}, #FFDD44)` },
                ].map(s => (
                  <div key={s.label}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 3 }}>
                      <span style={{ fontSize: 5.5, fontWeight: 800, color: T4, letterSpacing: '0.1em', textTransform: 'uppercase' as const }}>{s.label}</span>
                      <span style={{ fontSize: 9, fontWeight: 800, color: s.color, letterSpacing: '-0.2px' }}>{s.val}</span>
                    </div>
                    <div style={{ height: 4, borderRadius: 2, overflow: 'hidden', background: BG2 }}>
                      <div style={{ height: '100%', width: `${s.bar}%`, background: s.grad, borderRadius: 2 }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2x2 Breakdown Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 5 }}>
            {[
              { val: 'A', label: 'Conduct', color: GREEN, bg: 'linear-gradient(135deg, rgba(0,200,83,0.13) 0%, rgba(0,200,83,0.04) 100%)', bdr: 'rgba(0,200,83,0.20)', icon: 'check' },
              { val: '92%', label: 'Punctuality', color: B1, bg: 'linear-gradient(135deg, rgba(0,85,255,0.10) 0%, rgba(0,85,255,0.03) 100%)', bdr: 'rgba(0,85,255,0.20)', icon: 'clock' },
              { val: 'A', label: 'Respect', color: GOLD, bg: 'linear-gradient(135deg, rgba(255,170,0,0.13) 0%, rgba(255,170,0,0.04) 100%)', bdr: 'rgba(255,170,0,0.22)', icon: 'star' },
              { val: 'A-', label: 'Participation', color: VIOLET, bg: 'linear-gradient(135deg, rgba(123,63,244,0.12) 0%, rgba(123,63,244,0.04) 100%)', bdr: 'rgba(123,63,244,0.22)', icon: 'users' },
            ].map(c => (
              <div key={c.label} style={{ background: c.bg, borderRadius: 10, padding: '7px 9px', position: 'relative', overflow: 'hidden', border: `0.5px solid ${c.bdr}`, boxShadow: '0 4px 12px rgba(0,85,255,0.06)' }}>
                <div style={{ position: 'absolute', bottom: 4, right: 5, opacity: 0.20, lineHeight: 0 }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={c.color} strokeWidth="1.5">
                    {c.icon === 'check' && <><circle cx="12" cy="12" r="10" /><polyline points="9 12 11 14 15 10" /></>}
                    {c.icon === 'clock' && <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>}
                    {c.icon === 'star' && <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />}
                    {c.icon === 'users' && <><circle cx="9" cy="7" r="4" /><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /></>}
                  </svg>
                </div>
                <div style={{ width: 18, height: 18, borderRadius: 5, background: `${c.color}28`, color: c.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 4, position: 'relative', border: `0.5px solid ${c.color}40` }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    {c.icon === 'check' && <><circle cx="12" cy="12" r="10" /><polyline points="9 12 11 14 15 10" /></>}
                    {c.icon === 'clock' && <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>}
                    {c.icon === 'star' && <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />}
                    {c.icon === 'users' && <><circle cx="9" cy="7" r="4" /><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /></>}
                  </svg>
                </div>
                <div style={{ fontSize: 16, fontWeight: 800, color: c.color, letterSpacing: '-0.4px', lineHeight: 1, marginBottom: 2, position: 'relative' }}>{c.val}</div>
                <div style={{ fontSize: 5.5, fontWeight: 800, color: T4, letterSpacing: '0.1em', textTransform: 'uppercase' as const, position: 'relative' }}>{c.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7 }}>

          {/* Positive Highlights */}
          <div style={{ background: '#fff', borderRadius: 12, padding: 10, boxShadow: '0 4px 12px rgba(0,85,255,0.10)', border: `0.5px solid ${B1}14` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 7 }}>
              <div style={{ width: 22, height: 22, borderRadius: 7, background: `linear-gradient(135deg, ${GREEN}, #66EE88)`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 3px 10px ${GREEN}55` }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4"><path d="M6 9H4.5a2.5 2.5 0 010-5H6" /><path d="M18 9h1.5a2.5 2.5 0 000-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17a2 2 0 002 2v0a2 2 0 002-2v-2.34" /><path d="M18 2H6v7a6 6 0 0012 0V2z" /></svg>
              </div>
              <div>
                <div style={{ fontSize: 8.5, fontWeight: 800, color: T1, letterSpacing: '-0.2px' }}>Positive Highlights</div>
                <div style={{ fontSize: 5.5, color: T3, fontWeight: 500 }}>{positives.length} recorded</div>
              </div>
            </div>
            {positives.map((n, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '5px 6px', background: `${GREEN}0d`, borderRadius: 7, border: `0.5px solid ${GREEN}38`, marginBottom: 4 }}>
                <div style={{ width: 16, height: 16, borderRadius: 4, background: `${GREEN}1a`, color: GREEN, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: `0.5px solid ${GREEN}38` }}>
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    {n.icon === 'trophy' && <><path d="M6 9H4.5a2.5 2.5 0 010-5H6" /><path d="M18 9h1.5a2.5 2.5 0 000-5H18" /><path d="M4 22h16" /></>}
                    {n.icon === 'heart' && <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />}
                    {n.icon === 'star' && <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />}
                    {n.icon === 'users' && <><circle cx="9" cy="7" r="4" /><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /></>}
                  </svg>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 6.5, fontWeight: 800, color: T1, letterSpacing: '-0.05px' }}>{n.text}</div>
                  <div style={{ fontSize: 5, fontWeight: 700, color: T4, marginTop: 1 }}>{n.date} · {n.teacher}</div>
                </div>
                <span style={{ fontSize: 5, fontWeight: 800, color: GREEN_D, background: `${GREEN}14`, padding: '1.5px 5px', borderRadius: 999, border: `0.5px solid ${GREEN}38`, flexShrink: 0 }}>{n.tier}</span>
              </div>
            ))}
          </div>

          {/* Areas for Improvement */}
          <div style={{ background: '#fff', borderRadius: 12, padding: 10, boxShadow: '0 4px 12px rgba(0,85,255,0.10)', border: `0.5px solid ${B1}14` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 7 }}>
              <div style={{ width: 22, height: 22, borderRadius: 7, background: `linear-gradient(135deg, ${ORANGE}, #FFAA22)`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 3px 10px ${ORANGE}55` }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /></svg>
              </div>
              <div>
                <div style={{ fontSize: 8.5, fontWeight: 800, color: T1, letterSpacing: '-0.2px' }}>Areas for Improvement</div>
                <div style={{ fontSize: 5.5, color: T3, fontWeight: 500 }}>{improvements.length} flagged</div>
              </div>
            </div>
            {improvements.map((n, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '5px 6px', background: `${ORANGE}0d`, borderRadius: 7, border: `0.5px solid ${ORANGE}33`, marginBottom: 4 }}>
                <div style={{ width: 16, height: 16, borderRadius: 4, background: `${ORANGE}1a`, color: ORANGE, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: `0.5px solid ${ORANGE}38` }}>
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    {n.icon === 'clock' && <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>}
                    {n.icon === 'msg' && <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />}
                    {n.icon === 'pkg' && <><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /></>}
                  </svg>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 6.5, fontWeight: 800, color: T1, letterSpacing: '-0.05px' }}>{n.text}</div>
                  <div style={{ fontSize: 5, fontWeight: 700, color: T4, marginTop: 1 }}>{n.date} · {n.teacher}</div>
                </div>
                <span style={{ fontSize: 5, fontWeight: 800, color: '#884400', background: `${ORANGE}14`, padding: '1.5px 5px', borderRadius: 999, border: `0.5px solid ${ORANGE}38`, flexShrink: 0 }}>Focus</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ParentIPadShell>
  );
};

export default ParentBehaviourIPad;
