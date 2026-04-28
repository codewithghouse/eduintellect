/**
 * Static iPad mockup — Teacher Exam Generator page.
 * Mirrors the real /exam page: header + AI hero banner + 2-col layout
 * (form fields on left, generated paper preview on right). All mock data.
 */

import IPadShellWithSidebar from './IPadShellWithSidebar';

const TeacherExamGeneratorIPad = () => {
  const NAVY = '#001040';
  const BLUE = '#0055FF';
  const TT1 = '#001040';
  const TT3 = '#5070B0';
  const TT4 = '#99AACC';
  const SURFACE = '#F4F7FE';
  const GOLD = '#FFAA00';

  const HERO_GRAD = 'linear-gradient(135deg, #001040 0%, #001A66 35%, #0044CC 70%, #0055FF 100%)';

  return (
    <IPadShellWithSidebar activePath="/exam">
      {/* ── Page header ── */}
      <div style={{ padding: '12px 14px 6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4 }}>
          <span style={{ width: 4, height: 4, borderRadius: 1, background: BLUE }} />
          <span style={{ fontSize: 7, fontWeight: 500, color: TT3, letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>
            Teacher Dashboard · Exam
          </span>
        </div>
        <h1 style={{ fontSize: 22, fontWeight: 300, color: TT1, letterSpacing: '-0.7px', lineHeight: 1.05, margin: 0 }}>
          Exam Generator
        </h1>
        <div style={{ fontSize: 9, fontWeight: 400, color: TT3, marginTop: 3 }}>
          Apni requirements ke hisaab se AI se exam paper banwao.
        </div>
      </div>

      {/* ── Main scroll area ── */}
      <div style={{ flex: 1, padding: '0 12px 12px', overflowY: 'auto', minHeight: 0 }}>
        {/* Hero banner */}
        <div
          style={{
            borderRadius: 14,
            padding: '12px 14px',
            background: HERO_GRAD,
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 6px 18px rgba(0,8,60,0.22)',
            marginBottom: 10,
          }}
        >
          <div style={{ position: 'absolute', top: -25, right: -25, width: 100, height: 100, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 65%)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6, position: 'relative', zIndex: 2 }}>
            <div style={{ width: 26, height: 26, borderRadius: 8, background: 'rgba(255,255,255,0.14)', border: '0.5px solid rgba(255,255,255,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="9" y1="13" x2="15" y2="13" />
                <line x1="9" y1="17" x2="15" y2="17" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 7, fontWeight: 500, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>AI Exam Paper</div>
              <div style={{ fontSize: 8, fontWeight: 400, color: 'rgba(255,255,255,0.55)', marginTop: 2 }}>Subject · Grade · Difficulty</div>
            </div>
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 4, padding: '3px 9px', borderRadius: 999, background: 'rgba(255,170,0,0.2)', border: '0.5px solid rgba(255,170,0,0.5)', color: '#FFE699', fontSize: 8, fontWeight: 500 }}>
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#FFDD55', boxShadow: '0 0 5px #FFDD55' }} />
              AI
            </div>
          </div>
          <div style={{ fontSize: 10, fontWeight: 400, color: '#fff', lineHeight: 1.4, position: 'relative', zIndex: 2 }}>
            Customize <b style={{ fontWeight: 500 }}>question types, marks, difficulty</b> — AI ek exam-ready paper banayega.
          </div>
        </div>

        {/* 2-col: Form left, Output right */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: 8 }}>
          {/* Form */}
          <div style={{ background: '#fff', borderRadius: 12, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)' }}>
            <div style={{ fontSize: 7, fontWeight: 500, color: TT3, letterSpacing: '0.18em', textTransform: 'uppercase' as const, marginBottom: 7 }}>Basics</div>
            {[
              { label: 'Subject', value: 'Mathematics' },
              { label: 'Grade', value: 'Class 10' },
              { label: 'Board', value: 'CBSE' },
            ].map(f => (
              <div key={f.label} style={{ marginBottom: 7 }}>
                <div style={{ fontSize: 6, fontWeight: 500, color: TT4, letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 3 }}>{f.label}</div>
                <div style={{ background: SURFACE, padding: '5px 8px', borderRadius: 6, fontSize: 8, fontWeight: 500, color: TT1 }}>{f.value}</div>
              </div>
            ))}

            <div style={{ marginBottom: 7 }}>
              <div style={{ fontSize: 6, fontWeight: 500, color: TT4, letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 3 }}>Topics</div>
              <div style={{ background: SURFACE, padding: '5px 8px', borderRadius: 6, fontSize: 7, fontWeight: 400, color: TT1, lineHeight: 1.4 }}>
                Quadratic Equations, Arithmetic Progression, Trigonometry
              </div>
            </div>

            <div style={{ height: 1, background: SURFACE, margin: '8px 0' }} />
            <div style={{ fontSize: 7, fontWeight: 500, color: TT3, letterSpacing: '0.18em', textTransform: 'uppercase' as const, marginBottom: 7 }}>Paper Setup</div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginBottom: 7 }}>
              {[
                { label: 'Difficulty', value: 'Medium' },
                { label: 'Duration', value: '90 min' },
                { label: 'Total Marks', value: '50' },
                { label: 'Questions', value: '20' },
              ].map(f => (
                <div key={f.label}>
                  <div style={{ fontSize: 6, fontWeight: 500, color: TT4, letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 3 }}>{f.label}</div>
                  <div style={{ background: SURFACE, padding: '4px 7px', borderRadius: 6, fontSize: 8, fontWeight: 500, color: TT1 }}>{f.value}</div>
                </div>
              ))}
            </div>

            <div style={{ marginBottom: 7 }}>
              <div style={{ fontSize: 6, fontWeight: 500, color: TT4, letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 3 }}>Question Types</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                {[
                  { label: 'MCQ', on: true },
                  { label: 'Short', on: true },
                  { label: 'Long', on: true },
                  { label: 'Fill', on: false },
                  { label: 'True/False', on: false },
                ].map(t => (
                  <div
                    key={t.label}
                    style={{
                      padding: '3px 7px',
                      borderRadius: 999,
                      fontSize: 6,
                      fontWeight: 500,
                      background: t.on ? BLUE : SURFACE,
                      color: t.on ? '#fff' : TT3,
                      letterSpacing: '0.04em',
                    }}
                  >
                    {t.label}
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              style={{
                width: '100%',
                padding: '8px 0',
                borderRadius: 8,
                background: BLUE,
                color: '#fff',
                fontSize: 9,
                fontWeight: 500,
                border: 'none',
                marginTop: 4,
                boxShadow: `0 4px 12px ${BLUE}55`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 5,
              }}
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
              </svg>
              Generate with AI
            </button>
          </div>

          {/* Output: generated paper preview */}
          <div style={{ background: '#fff', borderRadius: 12, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 7 }}>
              <div style={{ width: 22, height: 22, borderRadius: 7, background: BLUE, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 9, fontWeight: 500, color: TT1, letterSpacing: '-0.15px' }}>Mathematics — Class 10 (CBSE)</div>
                <div style={{ fontSize: 7, color: TT3, marginTop: 1 }}>50 marks · 20 questions · 90 min</div>
              </div>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: 4 }}>
                <div style={{ fontSize: 6, fontWeight: 500, color: BLUE, background: 'rgba(0,85,255,0.10)', padding: '3px 7px', borderRadius: 999 }}>Print</div>
                <div style={{ fontSize: 6, fontWeight: 500, color: '#fff', background: BLUE, padding: '3px 7px', borderRadius: 999 }}>Export PDF</div>
              </div>
            </div>

            {/* Section A: MCQ */}
            <div style={{ background: 'rgba(0,85,255,0.04)', border: '1px solid rgba(0,85,255,0.12)', borderRadius: 8, padding: 8, marginBottom: 6 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4 }}>
                <span style={{ fontSize: 6, fontWeight: 500, color: BLUE, letterSpacing: '0.12em', textTransform: 'uppercase' as const }}>Section A · MCQ</span>
                <span style={{ marginLeft: 'auto', fontSize: 6, color: TT4, fontWeight: 500 }}>10 × 1 = 10 marks</span>
              </div>
              {[
                'If α and β are roots of x² − 5x + 6 = 0, find α + β.',
                'The 7th term of an AP whose first term is 3 and common difference 4 is:',
                'Value of sin 30° × cos 60° + cos 30° × sin 60° equals:',
              ].map((q, i) => (
                <div key={i} style={{ fontSize: 7, fontWeight: 400, color: TT1, marginBottom: 3, lineHeight: 1.4 }}>
                  <b style={{ color: BLUE, fontWeight: 500 }}>Q{i + 1}.</b> {q}
                </div>
              ))}
            </div>

            {/* Section B: Short */}
            <div style={{ background: 'rgba(255,170,0,0.06)', border: '1px solid rgba(255,170,0,0.18)', borderRadius: 8, padding: 8, marginBottom: 6 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4 }}>
                <span style={{ fontSize: 6, fontWeight: 500, color: GOLD, letterSpacing: '0.12em', textTransform: 'uppercase' as const }}>Section B · Short</span>
                <span style={{ marginLeft: 'auto', fontSize: 6, color: TT4, fontWeight: 500 }}>6 × 3 = 18 marks</span>
              </div>
              {[
                'Solve: 2x² − 7x + 3 = 0 by factorization.',
                'Find sum of first 30 terms of AP: 4, 7, 10, …',
              ].map((q, i) => (
                <div key={i} style={{ fontSize: 7, fontWeight: 400, color: TT1, marginBottom: 3, lineHeight: 1.4 }}>
                  <b style={{ color: GOLD, fontWeight: 500 }}>Q{i + 11}.</b> {q}
                </div>
              ))}
            </div>

            {/* Section C: Long */}
            <div style={{ background: 'rgba(123,63,244,0.05)', border: '1px solid rgba(123,63,244,0.16)', borderRadius: 8, padding: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4 }}>
                <span style={{ fontSize: 6, fontWeight: 500, color: '#7B3FF4', letterSpacing: '0.12em', textTransform: 'uppercase' as const }}>Section C · Long</span>
                <span style={{ marginLeft: 'auto', fontSize: 6, color: TT4, fontWeight: 500 }}>4 × 5.5 = 22 marks</span>
              </div>
              <div style={{ fontSize: 7, fontWeight: 400, color: TT1, lineHeight: 1.4 }}>
                <b style={{ color: '#7B3FF4', fontWeight: 500 }}>Q17.</b> Prove that the sum of first n terms of an AP whose first term is a and common difference d is given by Sₙ = n/2 [2a + (n−1)d]. Hence find S₂₀ for the AP: 7, 11, 15, …
              </div>
            </div>
          </div>
        </div>
      </div>
    </IPadShellWithSidebar>
  );
};

export default TeacherExamGeneratorIPad;
