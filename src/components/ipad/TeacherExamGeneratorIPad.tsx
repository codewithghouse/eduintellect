/**
 * Static iPad mockup — Teacher · Exam Generator page.
 * Faithful pixel-shrink of teacher-dashboard/src/pages/Exam.tsx (desktop view).
 *
 * Layout matches the source EXACTLY:
 *   1. Eyebrow + page title + subtitle
 *   2. Hero gradient banner (frosted icon + AI pill + headline)
 *   3. 2-col grid: form (Basics + Paper Setup + Question Types + Generate)
 *      + output panel (generated paper header + actions + body)
 */

import IPadShellWithSidebar from './IPadShellWithSidebar';

const TeacherExamGeneratorIPad = () => {
  const P = '#0957F7';
  const VIOLET = '#7B3FF4';
  const T1 = '#0B0F19';
  const T2 = '#3F4757';
  const T3 = '#6B7280';
  const T4 = '#9AA3B2';
  const SURFACE = '#F4F6FB';
  const SURFACE2 = '#E8ECF5';
  const HERO_GRAD = 'linear-gradient(135deg, #050C28 0%, #0A1A52 35%, #0D2BA8 75%, #1438D6 100%)';

  return (
    <IPadShellWithSidebar activePath="/exam">
      <div style={{ background: '#EEF4FF', flex: 1, overflowY: 'auto', minHeight: 0, padding: '10px 12px 12px', fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif" }}>

        {/* Header */}
        <div style={{ marginBottom: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4 }}>
            <span style={{ width: 4, height: 4, borderRadius: 1, background: P }} />
            <span style={{ fontSize: 6, fontWeight: 700, color: T3, letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>
              Teacher Dashboard · Exam
            </span>
          </div>
          <h1 style={{ fontSize: 22, fontWeight: 800, color: T1, letterSpacing: '-0.7px', lineHeight: 1.05, margin: 0 }}>
            Exam Generator
          </h1>
          <div style={{ fontSize: 8, fontWeight: 500, color: T3, marginTop: 3, letterSpacing: '-0.1px' }}>
            Apni requirements ke hisaab se AI se exam paper banwao.
          </div>
        </div>

        {/* Hero banner */}
        <div style={{
          background: HERO_GRAD,
          borderRadius: 14, padding: '10px 12px', color: '#fff',
          marginBottom: 7, position: 'relative', overflow: 'hidden',
          boxShadow: '0 12px 28px rgba(0,8,60,0.28)',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.09) 0%, transparent 45%)' }} />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: 'rgba(255,255,255,0.14)', border: '0.5px solid rgba(255,255,255,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="9" y1="13" x2="15" y2="13" /><line x1="9" y1="17" x2="15" y2="17" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 6, fontWeight: 700, color: 'rgba(255,255,255,0.72)', letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>AI Exam Paper</div>
                <div style={{ fontSize: 6.5, fontWeight: 500, color: 'rgba(255,255,255,0.5)', marginTop: 1, letterSpacing: '-0.1px' }}>Subject · Grade · Difficulty</div>
              </div>
              <div style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 3, padding: '3px 8px', borderRadius: 999, background: 'rgba(255,170,0,0.2)', border: '0.5px solid rgba(255,170,0,0.5)', color: '#FFE699', fontSize: 6, fontWeight: 700, letterSpacing: '0.05em' }}>
                <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#FFDD55', boxShadow: '0 0 6px #FFDD55' }} />
                AI
              </div>
            </div>
            <div style={{ fontSize: 9.5, fontWeight: 600, color: '#fff', lineHeight: 1.45, letterSpacing: '-0.15px' }}>
              Customize <strong style={{ fontWeight: 800 }}>question types, marks, difficulty</strong> — AI ek exam-ready paper banayega.
            </div>
          </div>
        </div>

        {/* 2-col: Form + Output */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: 7 }}>

          {/* Form card */}
          <div style={{ background: '#fff', borderRadius: 12, padding: 10, boxShadow: '0 4px 12px rgba(0,85,255,0.06)', border: '0.5px solid rgba(0,85,255,0.08)' }}>
            <div style={{ fontSize: 5.5, fontWeight: 700, color: T3, letterSpacing: '0.18em', textTransform: 'uppercase' as const, marginBottom: 5 }}>Basics</div>

            <div style={{ marginBottom: 5 }}>
              <div style={{ fontSize: 5.5, fontWeight: 600, color: T3, marginBottom: 2 }}>Subject</div>
              <div style={{ background: SURFACE, borderRadius: 5, padding: '4px 7px', fontSize: 7, color: T1, fontWeight: 600 }}>Mathematics</div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, marginBottom: 5 }}>
              <div>
                <div style={{ fontSize: 5.5, fontWeight: 600, color: T3, marginBottom: 2 }}>Grade</div>
                <div style={{ background: SURFACE, borderRadius: 5, padding: '4px 7px', fontSize: 7, color: T1, fontWeight: 600, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  Class 10
                  <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke={T4} strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
                </div>
              </div>
              <div>
                <div style={{ fontSize: 5.5, fontWeight: 600, color: T3, marginBottom: 2 }}>Board</div>
                <div style={{ background: SURFACE, borderRadius: 5, padding: '4px 7px', fontSize: 7, color: T1, fontWeight: 600, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  CBSE
                  <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke={T4} strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: 5 }}>
              <div style={{ fontSize: 5.5, fontWeight: 600, color: T3, marginBottom: 2 }}>Topics / Chapters</div>
              <div style={{ background: SURFACE, borderRadius: 5, padding: '5px 7px', fontSize: 6.5, color: T1, fontWeight: 500, lineHeight: 1.45, minHeight: 26 }}>
                Quadratic Equations, Arithmetic Progression, Trigonometry
              </div>
            </div>

            <div style={{ height: 0.5, background: SURFACE2, margin: '7px 0' }} />

            <div style={{ fontSize: 5.5, fontWeight: 700, color: T3, letterSpacing: '0.18em', textTransform: 'uppercase' as const, marginBottom: 5 }}>Paper Setup</div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, marginBottom: 5 }}>
              <div>
                <div style={{ fontSize: 5.5, fontWeight: 600, color: T3, marginBottom: 2 }}>Difficulty</div>
                <div style={{ background: SURFACE, borderRadius: 5, padding: '4px 7px', fontSize: 7, color: T1, fontWeight: 600, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  Mixed
                  <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke={T4} strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
                </div>
              </div>
              <div>
                <div style={{ fontSize: 5.5, fontWeight: 600, color: T3, marginBottom: 2 }}>Duration</div>
                <div style={{ background: SURFACE, borderRadius: 5, padding: '4px 7px', fontSize: 7, color: T1, fontWeight: 600, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  90 minutes
                  <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke={T4} strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, marginBottom: 5 }}>
              <div>
                <div style={{ fontSize: 5.5, fontWeight: 600, color: T3, marginBottom: 2 }}>Total Marks</div>
                <div style={{ background: SURFACE, borderRadius: 5, padding: '4px 7px', fontSize: 7, color: T1, fontWeight: 600 }}>50</div>
              </div>
              <div>
                <div style={{ fontSize: 5.5, fontWeight: 600, color: T3, marginBottom: 2 }}>Questions</div>
                <div style={{ background: SURFACE, borderRadius: 5, padding: '4px 7px', fontSize: 7, color: T1, fontWeight: 600 }}>20</div>
              </div>
            </div>

            <div style={{ marginBottom: 6 }}>
              <div style={{ fontSize: 5.5, fontWeight: 600, color: T3, marginBottom: 3 }}>Question Types</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                {[
                  { name: 'MCQ', active: true },
                  { name: 'Short', active: true },
                  { name: 'Long', active: true },
                  { name: 'True/False', active: false },
                  { name: 'Fill blank', active: false },
                ].map(t => (
                  <div key={t.name} style={{
                    fontSize: 6, fontWeight: 700,
                    padding: '3px 7px', borderRadius: 999,
                    background: t.active ? P : SURFACE,
                    color: t.active ? '#fff' : T2,
                    boxShadow: t.active ? `0 3px 8px ${P}55` : 'none',
                    display: 'flex', alignItems: 'center', gap: 3,
                    letterSpacing: '-0.1px',
                  }}>
                    {t.active && <span style={{ width: 3.5, height: 3.5, borderRadius: '50%', background: '#fff' }} />}
                    {t.name}
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              height: 26, borderRadius: 7, background: P, color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5,
              fontSize: 8.5, fontWeight: 700, letterSpacing: '-0.15px',
              boxShadow: `0 4px 12px ${P}55`,
            }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6"><path d="M12 2l2.5 7h7.5l-6 4.5L18 21l-6-4.5L6 21l2-7.5L2 9h7.5z" /></svg>
              Generate Paper
            </div>
          </div>

          {/* Output panel */}
          <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 4px 12px rgba(0,85,255,0.06)', border: '0.5px solid rgba(0,85,255,0.08)', overflow: 'hidden' }}>
            <div style={{ padding: '8px 10px', background: 'linear-gradient(180deg, #F8FAFE 0%, #fff 100%)', borderBottom: `0.5px solid ${SURFACE2}` }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                <div style={{ fontSize: 5.5, fontWeight: 700, color: VIOLET, letterSpacing: '0.16em', textTransform: 'uppercase' as const }}>EDULLENT HIGH · CLASS 10 · CBSE</div>
                <div style={{ fontSize: 5.5, fontWeight: 700, color: T3 }}>50 marks · 90 min</div>
              </div>
              <div style={{ fontSize: 11, fontWeight: 800, color: T1, letterSpacing: '-0.3px' }}>Mathematics — Term 2 Paper</div>
              <div style={{ fontSize: 6, fontWeight: 500, color: T4, marginTop: 2 }}>Quadratics · AP · Trigonometry</div>
            </div>

            <div style={{ display: 'flex', gap: 4, padding: '6px 10px 0' }}>
              {[
                { label: 'Show Answers', primary: true, icon: '' },
                { label: 'Copy', primary: false, icon: 'copy' },
                { label: 'Print', primary: false, icon: 'print' },
              ].map(b => (
                <div key={b.label} style={{
                  fontSize: 6, fontWeight: 700,
                  padding: '3px 8px', borderRadius: 5,
                  background: b.primary ? P : SURFACE,
                  color: b.primary ? '#fff' : T2,
                  display: 'flex', alignItems: 'center', gap: 3,
                  boxShadow: b.primary ? `0 2px 6px ${P}40` : 'none',
                }}>
                  {b.icon === 'copy' && <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" /></svg>}
                  {b.icon === 'print' && <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" /><rect x="6" y="14" width="12" height="8" /></svg>}
                  {b.label}
                </div>
              ))}
            </div>

            <div style={{ padding: '7px 10px 10px', fontSize: 6.5, color: T1, lineHeight: 1.5 }}>
              <div style={{ fontSize: 6, fontWeight: 700, color: P, letterSpacing: '0.14em', textTransform: 'uppercase' as const, marginBottom: 3 }}>Section A · MCQ (10 × 1 = 10)</div>
              {[
                'If the roots of x² − 4x + k = 0 are equal, find k.',
                'In an AP, a = 5, d = 3. Find the 10th term.',
                'sin(60°) × cos(30°) = ?',
              ].map((q, i) => (
                <div key={i} style={{ marginBottom: 3 }}>
                  <span style={{ fontWeight: 700, color: T2 }}>{i + 1}.</span> <span style={{ color: T1 }}>{q}</span>
                </div>
              ))}

              <div style={{ height: 0.5, background: SURFACE2, margin: '6px 0' }} />

              <div style={{ fontSize: 6, fontWeight: 700, color: P, letterSpacing: '0.14em', textTransform: 'uppercase' as const, marginBottom: 3 }}>Section B · Short (5 × 3 = 15)</div>
              {[
                'Solve: 2x² − 7x + 3 = 0 by factorisation.',
                'Find the sum of first 20 terms of AP: 7, 11, 15, …',
              ].map((q, i) => (
                <div key={i} style={{ marginBottom: 3 }}>
                  <span style={{ fontWeight: 700, color: T2 }}>{i + 11}.</span> <span style={{ color: T1 }}>{q}</span>
                </div>
              ))}

              <div style={{ height: 0.5, background: SURFACE2, margin: '6px 0' }} />

              <div style={{ fontSize: 6, fontWeight: 700, color: P, letterSpacing: '0.14em', textTransform: 'uppercase' as const, marginBottom: 3 }}>Section C · Long (5 × 5 = 25)</div>
              <div style={{ marginBottom: 3 }}>
                <span style={{ fontWeight: 700, color: T2 }}>16.</span> <span style={{ color: T1 }}>Prove the angle sum identity sin(A+B) for A=30°, B=45°. Verify numerically.</span>
              </div>

              <div style={{
                marginTop: 8, height: 22, borderRadius: 6, background: SURFACE,
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4,
                fontSize: 7, fontWeight: 700, color: T2,
              }}>
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 102.13-9.36L1 10" /></svg>
                Start Over
              </div>
            </div>
          </div>
        </div>
      </div>
    </IPadShellWithSidebar>
  );
};

export default TeacherExamGeneratorIPad;
