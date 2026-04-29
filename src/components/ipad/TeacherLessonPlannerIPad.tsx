/**
 * Static iPad mockup — Teacher · AI Lesson Planner page.
 * Faithful pixel-shrink of teacher-dashboard/src/pages/LessonPlanGenerator.tsx (desktop).
 *
 * Layout matches source:
 *   1. Page header: "AI POWERED" pill + h1 "AI Lesson Planner" (gradient on "Planner")
 *      + subtitle + Tabs (Generate active / History badge)
 *   2. AI Hero gradient banner with frosted icon + "POWERED BY EDULLENT ENGINE" eyebrow
 *      + Live pill + headline "Craft lessons in seconds ✨" + 3 stat tiles
 *   3. AI Tip card (blue tinted, ⚡ icon, pro-tip text)
 *   4. Form: Subject chips + Class chips + Topic input + Duration + Generate button
 */

import IPadShellWithSidebar from './IPadShellWithSidebar';

const TeacherLessonPlannerIPad = () => {
  const B1 = '#0055FF';
  const T1 = '#001040';
  const T2 = '#002080';
  const T3 = '#5070B0';
  const SURFACE = '#F4F6FB';
  const HERO_GRAD = 'linear-gradient(135deg, #000A33 0%, #001A66 32%, #0044CC 68%, #0055FF 100%)';

  return (
    <IPadShellWithSidebar activePath="/lesson-planner">
      <div style={{ background: '#EEF4FF', flex: 1, overflowY: 'auto', minHeight: 0, padding: '10px 12px 12px', fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif" }}>

        {/* Page header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 8, marginBottom: 9 }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '2px 8px', borderRadius: 999, background: `linear-gradient(135deg, ${B1}, #1166FF)`, color: '#fff', fontSize: 5.5, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' as const, marginBottom: 4, boxShadow: `0 3px 10px ${B1}55` }}>
              <span style={{ color: '#FFDD55', fontSize: 7, lineHeight: 1, filter: 'drop-shadow(0 0 2px rgba(255,221,85,0.6))' }}>✦</span>
              AI Powered
            </div>
            <h1 style={{ fontSize: 22, fontWeight: 700, color: T1, letterSpacing: '-0.7px', lineHeight: 1.05, margin: 0 }}>
              AI Lesson{' '}
              <span style={{ background: `linear-gradient(135deg, ${B1} 0%, #1166FF 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Planner</span>
            </h1>
            <div style={{ fontSize: 8, fontWeight: 500, color: T3, marginTop: 3, letterSpacing: '-0.1px' }}>
              Generate classroom-ready lesson plans in seconds.
            </div>
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: 3, background: '#fff', padding: 2, borderRadius: 7, boxShadow: '0 2px 6px rgba(0,85,255,0.06)', border: `0.5px solid ${B1}14` }}>
            {[
              { name: 'Generate', active: true, icon: 'star' },
              { name: 'History', active: false, icon: 'clock', badge: 12 },
            ].map(t => (
              <div key={t.name} style={{
                padding: '4px 9px', borderRadius: 5,
                fontSize: 6.5, fontWeight: 700, letterSpacing: '-0.1px',
                color: t.active ? '#fff' : T3,
                background: t.active ? `linear-gradient(135deg, ${B1}, #1166FF)` : 'transparent',
                boxShadow: t.active ? `0 2px 6px ${B1}55` : 'none',
                display: 'flex', alignItems: 'center', gap: 3,
              }}>
                <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  {t.icon === 'star' && <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6z" />}
                  {t.icon === 'clock' && <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>}
                </svg>
                {t.name}
                {t.badge !== undefined && (
                  <span style={{ background: '#F4F7FE', color: T3, fontSize: 5.5, fontWeight: 700, padding: '0.5px 4px', borderRadius: 999 }}>{t.badge}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* AI Hero */}
        <div style={{
          background: HERO_GRAD, borderRadius: 14, padding: '12px 14px', color: '#fff',
          marginBottom: 9, position: 'relative', overflow: 'hidden',
          boxShadow: '0 12px 28px rgba(0,26,102,0.32)',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 45%)', pointerEvents: 'none' }} />
          {/* Twinkle dots */}
          <div style={{ position: 'absolute', top: 14, right: 30, width: 2.5, height: 2.5, background: '#FFDD55', borderRadius: '50%', boxShadow: '-18px 12px 0 -1px rgba(255,255,255,0.7), 10px 18px 0 -1px rgba(255,221,85,0.85), -28px 28px 0 -2px rgba(255,255,255,0.55), -8px 32px 0 -1px rgba(255,221,85,0.9)' }} />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 9 }}>
              <div style={{ width: 26, height: 26, borderRadius: 8, background: 'rgba(255,255,255,0.16)', border: '0.5px solid rgba(255,255,255,0.28)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFDD55', flexShrink: 0 }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M15 4V2M15 16v-2M8 9h2M20 9h2M17.8 11.8L19 13M15 9h0M17.8 6.2L19 5M3 21l9-9M12.2 6.2L11 5" /></svg>
              </div>
              <div>
                <div style={{ fontSize: 6, fontWeight: 700, color: 'rgba(255,255,255,0.85)', letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>Powered by Edullent engine</div>
                <div style={{ fontSize: 6.5, color: 'rgba(255,255,255,0.55)', marginTop: 1, fontWeight: 500, letterSpacing: '-0.1px' }}>Curriculum-aligned · Real-time</div>
              </div>
              <div style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 4, padding: '3px 8px', borderRadius: 999, background: 'rgba(255,255,255,0.18)', border: '0.5px solid rgba(255,255,255,0.32)', color: '#fff', fontSize: 6, fontWeight: 700 }}>
                <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#FFDD55', boxShadow: '0 0 6px #FFDD55' }} />
                Live
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 14 }}>
              <div>
                <div style={{ fontSize: 17, fontWeight: 800, color: '#fff', letterSpacing: '-0.6px', lineHeight: 1.1, marginBottom: 4 }}>
                  Craft lessons in seconds ✨
                </div>
                <div style={{ fontSize: 7.5, color: 'rgba(255,255,255,0.82)', fontWeight: 500, letterSpacing: '-0.1px', lineHeight: 1.4, maxWidth: 200 }}>
                  Just pick a subject, class, and topic — <strong style={{ color: '#fff', fontWeight: 700 }}>the AI handles the rest</strong>.
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'rgba(255,255,255,0.12)', borderRadius: 8, padding: 1, overflow: 'hidden' }}>
                {[
                  { val: '12', label: 'Generated', color: '#fff' },
                  { val: '~8s', label: 'Avg Time', color: '#FFDD55' },
                  { val: '100%', label: 'Saved', color: '#6FFFAA' },
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

        {/* AI Tip card */}
        <div style={{
          background: `linear-gradient(135deg, ${B1}14, #1166FF08)`,
          border: `0.5px solid ${B1}33`,
          borderRadius: 9, padding: '7px 9px',
          display: 'flex', alignItems: 'center', gap: 7, marginBottom: 8,
        }}>
          <div style={{ width: 20, height: 20, borderRadius: 6, background: `linear-gradient(135deg, ${B1}, #1166FF)`, color: '#FFDD55', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 10, boxShadow: `0 3px 8px ${B1}40` }}>⚡</div>
          <div style={{ flex: 1, fontSize: 7, color: T2, lineHeight: 1.5, fontWeight: 500, letterSpacing: '-0.1px' }}>
            <strong style={{ color: B1, fontWeight: 700 }}>Pro tip:</strong> The more specific your topic, the better the lesson plan. Try "Noun types with examples" instead of just "Nouns".
          </div>
        </div>

        {/* Form grid */}
        <div style={{ background: '#fff', borderRadius: 12, padding: 10, boxShadow: '0 4px 12px rgba(0,85,255,0.06)', border: `0.5px solid ${B1}14` }}>

          {/* Subject */}
          <div style={{ marginBottom: 8 }}>
            <div style={{ fontSize: 5.5, fontWeight: 700, color: T3, letterSpacing: '0.16em', textTransform: 'uppercase' as const, marginBottom: 4, display: 'flex', alignItems: 'center', gap: 3 }}>
              Subject<span style={{ color: '#FF3355' }}>*</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
              {[
                { name: 'Mathematics', active: true },
                { name: 'Science', active: false },
                { name: 'English', active: false },
                { name: 'Hindi', active: false },
                { name: 'Social', active: false },
                { name: 'CS', active: false },
              ].map(s => (
                <div key={s.name} style={{
                  fontSize: 6.5, fontWeight: 700,
                  padding: '4px 9px', borderRadius: 999,
                  background: s.active ? `linear-gradient(135deg, ${B1}, #1166FF)` : SURFACE,
                  color: s.active ? '#fff' : T2,
                  boxShadow: s.active ? `0 3px 8px ${B1}55` : 'none',
                  letterSpacing: '-0.1px',
                  display: 'flex', alignItems: 'center', gap: 3,
                }}>
                  {s.active && <span style={{ width: 3.5, height: 3.5, borderRadius: '50%', background: '#fff' }} />}
                  {s.name}
                </div>
              ))}
            </div>
          </div>

          {/* Class + Duration row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7, marginBottom: 8 }}>
            <div>
              <div style={{ fontSize: 5.5, fontWeight: 700, color: T3, letterSpacing: '0.16em', textTransform: 'uppercase' as const, marginBottom: 4, display: 'flex', alignItems: 'center', gap: 3 }}>
                Class<span style={{ color: '#FF3355' }}>*</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                {['8', '9', '10', '11', '12'].map(c => (
                  <div key={c} style={{
                    fontSize: 6.5, fontWeight: 700,
                    padding: '4px 9px', borderRadius: 5,
                    background: c === '10' ? `linear-gradient(135deg, ${B1}, #1166FF)` : SURFACE,
                    color: c === '10' ? '#fff' : T2,
                    boxShadow: c === '10' ? `0 3px 8px ${B1}55` : 'none',
                  }}>
                    {c}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontSize: 5.5, fontWeight: 700, color: T3, letterSpacing: '0.16em', textTransform: 'uppercase' as const, marginBottom: 4 }}>Duration</div>
              <div style={{ background: SURFACE, borderRadius: 5, padding: '5px 9px', fontSize: 7, color: T1, fontWeight: 700, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                45 minutes
                <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke={T3} strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
              </div>
            </div>
          </div>

          {/* Topic */}
          <div style={{ marginBottom: 8 }}>
            <div style={{ fontSize: 5.5, fontWeight: 700, color: T3, letterSpacing: '0.16em', textTransform: 'uppercase' as const, marginBottom: 4, display: 'flex', alignItems: 'center', gap: 3 }}>
              Topic / chapter<span style={{ color: '#FF3355' }}>*</span>
            </div>
            <div style={{ background: SURFACE, borderRadius: 5, padding: '6px 9px', fontSize: 7.5, color: T1, fontWeight: 600, lineHeight: 1.4 }}>
              Quadratic equations — solving by factorisation, completing the square, and quadratic formula.
            </div>
          </div>

          {/* Learning objectives chips */}
          <div style={{ marginBottom: 9 }}>
            <div style={{ fontSize: 5.5, fontWeight: 700, color: T3, letterSpacing: '0.16em', textTransform: 'uppercase' as const, marginBottom: 4 }}>Learning style</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
              {[
                { name: 'Discussion-based', active: true },
                { name: 'Hands-on', active: true },
                { name: 'Visual examples', active: false },
                { name: 'Group work', active: false },
              ].map(s => (
                <div key={s.name} style={{
                  fontSize: 6, fontWeight: 700,
                  padding: '3px 7px', borderRadius: 999,
                  background: s.active ? `${B1}1a` : '#fff',
                  color: s.active ? B1 : T3,
                  border: `0.5px solid ${s.active ? B1 : T3}33`,
                  display: 'flex', alignItems: 'center', gap: 3,
                }}>
                  {s.active && <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5"><polyline points="20 6 9 17 4 12" /></svg>}
                  {s.name}
                </div>
              ))}
            </div>
          </div>

          {/* Generate button */}
          <div style={{
            height: 26, borderRadius: 8, background: `linear-gradient(135deg, ${B1}, #1166FF)`, color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5,
            fontSize: 9, fontWeight: 700, letterSpacing: '-0.15px',
            boxShadow: `0 6px 16px ${B1}55`,
          }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6"><path d="M12 2l2.5 7h7.5l-6 4.5L18 21l-6-4.5L6 21l2-7.5L2 9h7.5z" /></svg>
            Generate Lesson Plan
          </div>
        </div>
      </div>
    </IPadShellWithSidebar>
  );
};

export default TeacherLessonPlannerIPad;
