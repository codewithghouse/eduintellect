/**
 * Static iPad mockup — Teacher · Student Behaviour page.
 * Faithful pixel-shrink of teacher-dashboard/src/pages/StudentBehaviour.tsx.
 *
 * Layout matches source:
 *   1. Eyebrow + page title with blue accent + subtitle
 *   2. Search + student picker pill row (selected = blue)
 *   3. Selected student hero (gradient with frosted avatar + sparkles + 5-star rating)
 *   4. 3-col stat cards (Avg Rating / Behaviour Entries / Active Improvements)
 *   5. Quick Rate card (5 stars + note + Save rating)
 *   6. Behaviour Log + Areas of Improvement (2-col)
 */

import IPadShellWithSidebar from './IPadShellWithSidebar';

const TeacherBehaviourIPad = () => {
  const P = '#0055FF';
  const VIOLET = '#7B3FF4';
  const GREEN = '#00C853';
  const RED = '#FF3355';
  const GOLD = '#FFAA00';
  const T1 = '#0B0F19';
  const T3 = '#6B7280';
  const T4 = '#9AA3B2';
  const SURFACE = '#F4F6FB';
  const HERO_GRAD = 'linear-gradient(135deg, #050C28 0%, #0A1A52 35%, #0D2BA8 75%, #1438D6 100%)';

  const students = [
    { name: 'Aryan R.', initials: 'AR', cls: '10B', active: true },
    { name: 'Priya M.', initials: 'PM', cls: '10B', active: false },
    { name: 'Krish S.', initials: 'KS', cls: '10A', active: false },
    { name: 'Diya P.', initials: 'DP', cls: '9C', active: false },
  ];

  return (
    <IPadShellWithSidebar activePath="/student-behaviour">
      <div style={{ background: '#EEF4FF', flex: 1, overflowY: 'auto', minHeight: 0, padding: '10px 12px 12px', fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif" }}>

        {/* Header */}
        <div style={{ marginBottom: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4 }}>
            <span style={{ width: 4, height: 4, borderRadius: 1, background: P }} />
            <span style={{ fontSize: 6, fontWeight: 700, color: T3, letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>
              Teacher Dashboard · Behaviour &amp; Growth
            </span>
          </div>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: T1, letterSpacing: '-0.7px', lineHeight: 1.05, margin: 0 }}>
            Student <span style={{ color: P }}>behaviour</span>
          </h1>
          <div style={{ fontSize: 8, fontWeight: 500, color: T3, marginTop: 3, letterSpacing: '-0.1px' }}>
            Track behaviour, areas of improvement, and ratings · syncs to parent portal in real time.
          </div>
        </div>

        {/* Search + student picker */}
        <div style={{ background: '#fff', borderRadius: 12, padding: 9, boxShadow: '0 4px 12px rgba(0,85,255,0.06)', border: '0.5px solid rgba(0,85,255,0.08)', marginBottom: 7 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 7 }}>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={T4} strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            <div style={{ flex: 1, padding: '4px 8px', borderRadius: 6, background: SURFACE, fontSize: 7, color: T1, fontWeight: 500 }}>Search students…</div>
            <span style={{ fontSize: 6.5, fontWeight: 700, color: T3 }}>4 / 28</span>
          </div>
          <div style={{ display: 'flex', gap: 4, overflow: 'hidden' }}>
            {students.map(s => (
              <div key={s.name} style={{
                display: 'flex', alignItems: 'center', gap: 4,
                padding: '4px 8px', borderRadius: 999,
                background: s.active ? P : SURFACE,
                color: s.active ? '#fff' : T1,
                border: s.active ? 'none' : `0.5px solid ${P}1a`,
                fontSize: 6.5, fontWeight: 700, letterSpacing: '-0.1px',
                boxShadow: s.active ? `0 3px 8px ${P}55` : 'none',
                whiteSpace: 'nowrap', flexShrink: 0,
              }}>
                <span style={{ width: 13, height: 13, borderRadius: '50%', background: s.active ? 'rgba(255,255,255,0.2)' : `${P}1a`, color: s.active ? '#fff' : P, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 5, fontWeight: 700 }}>
                  {s.initials}
                </span>
                {s.name}
                <span style={{ fontSize: 5.5, opacity: 0.6 }}>· {s.cls}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Selected student hero */}
        <div style={{
          background: HERO_GRAD,
          borderRadius: 14, padding: '11px 12px', color: '#fff',
          marginBottom: 7, position: 'relative', overflow: 'hidden',
          boxShadow: '0 12px 28px rgba(0,8,60,0.28)',
        }}>
          <div style={{ position: 'absolute', top: -25, right: -20, width: 100, height: 100, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 65%)' }} />
          <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 38, height: 38, borderRadius: 10, background: 'rgba(255,255,255,0.16)', border: '0.5px solid rgba(255,255,255,0.26)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: '#fff', flexShrink: 0 }}>
              AR
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 3, padding: '2px 7px', borderRadius: 999, background: 'rgba(255,255,255,0.14)', border: '0.5px solid rgba(255,255,255,0.22)', fontSize: 5.5, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' as const, marginBottom: 4 }}>
                <svg width="6" height="6" viewBox="0 0 24 24" fill="#FFCC22" stroke="none"><path d="M12 2l2 7h7l-5.5 4 2 7-5.5-4-5.5 4 2-7L3 9h7z" /></svg>
                Behaviour profile
              </div>
              <h2 style={{ fontSize: 14, fontWeight: 700, letterSpacing: '-0.4px', margin: 0, color: '#fff', lineHeight: 1.1 }}>
                Aryan Reddy
              </h2>
              <p style={{ fontSize: 7, color: 'rgba(255,255,255,0.72)', fontWeight: 500, margin: '2px 0 0 0' }}>
                Class 10B · Roll 04 · English
              </p>
            </div>
            <div style={{ flexShrink: 0, textAlign: 'center' }}>
              <div style={{ display: 'flex', gap: 1, marginBottom: 2 }}>
                {[1, 2, 3, 4, 5].map(n => (
                  <svg key={n} width="9" height="9" viewBox="0 0 24 24" fill={n <= 4 ? '#FFD060' : 'transparent'} stroke={n <= 4 ? '#FFD060' : 'rgba(255,255,255,0.3)'} strokeWidth="1.5">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />
                  </svg>
                ))}
              </div>
              <div style={{ fontSize: 5.5, fontWeight: 700, color: 'rgba(255,255,255,0.65)', letterSpacing: '0.1em', textTransform: 'uppercase' as const }}>
                4.6 avg · 12
              </div>
            </div>
          </div>
        </div>

        {/* 3-col stat cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 7, marginBottom: 7 }}>
          {[
            { label: 'Avg Rating', val: '4.6', sub: '12 ratings on record', accent: GOLD, bg: 'linear-gradient(135deg, #FFF6E0 0%, #FFEDC4 100%)', icon: 'star' },
            { label: 'Behaviour Entries', val: '8', sub: '5 positive · 3 concern', accent: GREEN, bg: 'linear-gradient(135deg, #E8FBEF 0%, #DAF6E4 100%)', icon: 'alert' },
            { label: 'Active Improvements', val: '2', sub: '1 resolved this month', accent: VIOLET, bg: 'linear-gradient(135deg, #F2EBFF 0%, #E8DEFC 100%)', icon: 'trend' },
          ].map(c => (
            <div key={c.label} style={{ background: c.bg, border: `0.5px solid ${c.accent}33`, borderRadius: 11, padding: '8px 10px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', bottom: 4, right: 6, color: c.accent, opacity: 0.18, lineHeight: 0 }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  {c.icon === 'star' && <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />}
                  {c.icon === 'alert' && <><polygon points="12 2 22 22 2 22 12 2" /><line x1="12" y1="9" x2="12" y2="13" /></>}
                  {c.icon === 'trend' && <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></>}
                </svg>
              </div>
              <div style={{ width: 18, height: 18, borderRadius: 5, background: c.accent, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 5, position: 'relative' }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  {c.icon === 'star' && <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />}
                  {c.icon === 'alert' && <><polygon points="12 2 22 22 2 22 12 2" /><line x1="12" y1="9" x2="12" y2="13" /></>}
                  {c.icon === 'trend' && <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></>}
                </svg>
              </div>
              <div style={{ fontSize: 5.5, fontWeight: 700, color: T4, letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginBottom: 2, position: 'relative' }}>{c.label}</div>
              <div style={{ fontSize: 17, fontWeight: 800, color: T1, letterSpacing: '-0.5px', lineHeight: 1.05, position: 'relative' }}>{c.val}</div>
              <div style={{ fontSize: 5.5, fontWeight: 600, color: c.accent, marginTop: 3, position: 'relative' }}>{c.sub}</div>
            </div>
          ))}
        </div>

        {/* Quick rate card */}
        <div style={{ background: '#fff', borderRadius: 12, padding: 10, boxShadow: '0 4px 12px rgba(0,85,255,0.06)', border: '0.5px solid rgba(0,85,255,0.08)', marginBottom: 7 }}>
          <div style={{ fontSize: 8, fontWeight: 700, color: T1, marginBottom: 6 }}>Quick rate Aryan today</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 6 }}>
            {[1, 2, 3, 4, 5].map(n => (
              <svg key={n} width="20" height="20" viewBox="0 0 24 24" fill={n <= 4 ? GOLD : 'none'} stroke={n <= 4 ? GOLD : T4} strokeWidth="1.6">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />
              </svg>
            ))}
            <span style={{ marginLeft: 4, fontSize: 7, fontWeight: 700, color: T3 }}>4 / 5</span>
          </div>
          <div style={{ background: SURFACE, borderRadius: 6, padding: '5px 8px', fontSize: 6.5, color: T4, marginBottom: 6, fontStyle: 'italic' }}>Optional note (visible to parents)…</div>
          <div style={{ height: 22, borderRadius: 7, background: P, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, fontSize: 7, fontWeight: 700, boxShadow: `0 4px 10px ${P}55` }}>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" /></svg>
            Save rating
          </div>
        </div>

        {/* Behaviour Log + Improvements (2-col) */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7 }}>

          {/* Behaviour Log */}
          <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 4px 12px rgba(0,85,255,0.06)', border: '0.5px solid rgba(0,85,255,0.08)', overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '7px 9px', borderBottom: `0.5px solid ${P}14` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <div style={{ width: 18, height: 18, borderRadius: 5, background: `${P}1a`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={P} strokeWidth="2"><polygon points="12 2 22 22 2 22 12 2" /><line x1="12" y1="9" x2="12" y2="13" /></svg>
                </div>
                <div>
                  <div style={{ fontSize: 8, fontWeight: 700, color: T1 }}>Behaviour Log</div>
                  <div style={{ fontSize: 5.5, color: T3 }}>8 entries · positive + concerns</div>
                </div>
              </div>
              <div style={{ fontSize: 6, fontWeight: 700, color: '#fff', background: P, padding: '3px 7px', borderRadius: 5, display: 'flex', alignItems: 'center', gap: 3, boxShadow: `0 3px 8px ${P}40` }}>
                <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                Add
              </div>
            </div>
            <div style={{ padding: '5px 9px 8px' }}>
              {[
                { type: 'POSITIVE', text: 'Helped a classmate with quadratic equations.', when: '2h ago', tone: GREEN },
                { type: 'POSITIVE', text: 'Volunteered to lead the lab cleanup.', when: 'Yesterday', tone: GREEN },
                { type: 'CONCERN', text: 'Late submission on Geometry homework.', when: '2d ago', tone: '#FF8800' },
                { type: 'POSITIVE', text: 'Top scorer in surprise quiz.', when: '4d ago', tone: GREEN },
                { type: 'INCIDENT', text: 'Disrupted class during English period.', when: '6d ago', tone: RED },
              ].map((inc, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 5, padding: '5px 0', borderBottom: i < 4 ? `0.5px solid ${P}0d` : 'none' }}>
                  <div style={{ width: 5, height: 5, borderRadius: '50%', background: inc.tone, marginTop: 4, flexShrink: 0 }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 1 }}>
                      <span style={{ padding: '1.5px 5px', borderRadius: 3, background: `${inc.tone}1a`, color: inc.tone, fontSize: 5, fontWeight: 700, letterSpacing: '0.08em' }}>{inc.type}</span>
                      <span style={{ fontSize: 5.5, color: T4 }}>{inc.when}</span>
                    </div>
                    <p style={{ fontSize: 6.5, color: T1, lineHeight: 1.4, margin: 0, fontWeight: 500 }}>{inc.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Areas of Improvement */}
          <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 4px 12px rgba(0,85,255,0.06)', border: '0.5px solid rgba(0,85,255,0.08)', overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '7px 9px', borderBottom: `0.5px solid ${P}14` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <div style={{ width: 18, height: 18, borderRadius: 5, background: `${VIOLET}1a`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={VIOLET} strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
                </div>
                <div>
                  <div style={{ fontSize: 8, fontWeight: 700, color: T1 }}>Areas of Improvement</div>
                  <div style={{ fontSize: 5.5, color: T3 }}>2 active · 1 resolved</div>
                </div>
              </div>
              <div style={{ fontSize: 6, fontWeight: 700, color: '#fff', background: VIOLET, padding: '3px 7px', borderRadius: 5, display: 'flex', alignItems: 'center', gap: 3, boxShadow: `0 3px 8px ${VIOLET}40` }}>
                <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                Add
              </div>
            </div>
            <div style={{ padding: '5px 9px 8px' }}>
              {[
                { text: 'Improve handwriting clarity in math papers', priority: 'HIGH', tone: RED, resolved: false },
                { text: 'Reduce late submissions to under 10%', priority: 'MED', tone: '#FF8800', resolved: false },
                { text: 'Punctuality during morning assembly', priority: 'LOW', tone: GREEN, resolved: true },
              ].map((imp, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 6, padding: '5px 0', borderBottom: i < 2 ? `0.5px solid ${P}0d` : 'none', opacity: imp.resolved ? 0.55 : 1 }}>
                  <div style={{ width: 12, height: 12, borderRadius: 3, background: imp.resolved ? GREEN : 'transparent', border: `1.2px solid ${imp.resolved ? GREEN : `${P}40`}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                    {imp.resolved && <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: 6.5, color: T1, lineHeight: 1.4, margin: 0, fontWeight: 600, textDecoration: imp.resolved ? 'line-through' : 'none' }}>{imp.text}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 2 }}>
                      <span style={{ padding: '1.5px 5px', borderRadius: 3, background: `${imp.tone}1a`, color: imp.tone, fontSize: 5, fontWeight: 700, letterSpacing: '0.08em' }}>{imp.priority}</span>
                      <span style={{ fontSize: 5.5, color: T4 }}>{imp.resolved ? 'resolved 2w ago' : 'active'}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </IPadShellWithSidebar>
  );
};

export default TeacherBehaviourIPad;
