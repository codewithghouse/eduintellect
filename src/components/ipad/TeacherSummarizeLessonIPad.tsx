/**
 * Static iPad mockup — Summarize Lesson page.
 * Mirrors /summarize-lesson: input area (text/audio/PDF) + AI-extracted output:
 * key concepts, must-remember points, follow-up questions, parent-friendly summary.
 */

import IPadShellWithSidebar from './IPadShellWithSidebar';

const TeacherSummarizeLessonIPad = () => {
  const BLUE = '#0055FF';
  const TT1 = '#001040';
  const TT3 = '#5070B0';
  const TT4 = '#99AACC';
  const SURFACE = '#F4F7FE';
  const GREEN = '#00C853';
  const VIOLET = '#0055FF';
  const GOLD = '#FFAA00';
  const ORANGE = '#FF8800';

  const HERO_GRAD = `linear-gradient(135deg, ${VIOLET} 0%, #003ECC 100%)`;

  return (
    <IPadShellWithSidebar activePath="/summarize-lesson">
      <div style={{ padding: '12px 14px 6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4 }}>
          <span style={{ width: 4, height: 4, borderRadius: 1, background: VIOLET }} />
          <span style={{ fontSize: 7, fontWeight: 500, color: TT3, letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>
            Teacher Dashboard · Summarize Lesson
          </span>
        </div>
        <h1 style={{ fontSize: 22, fontWeight: 300, color: TT1, letterSpacing: '-0.7px', lineHeight: 1.05, margin: 0 }}>
          Summarize Lesson
        </h1>
        <div style={{ fontSize: 9, fontWeight: 400, color: TT3, marginTop: 3 }}>
          Drop a recording, transcript, or PDF — AI extracts everything that matters.
        </div>
      </div>

      <div style={{ flex: 1, padding: '6px 12px 12px', overflowY: 'auto', minHeight: 0 }}>
        {/* AI Hero */}
        <div style={{ borderRadius: 14, padding: '12px 14px', background: HERO_GRAD, color: '#fff', position: 'relative', overflow: 'hidden', marginBottom: 8, boxShadow: '0 6px 18px rgba(0,85,255,0.22)' }}>
          <div style={{ position: 'absolute', top: -25, right: -25, width: 100, height: 100, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 65%)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, position: 'relative', zIndex: 2 }}>
            <div style={{ width: 28, height: 28, borderRadius: 9, background: 'rgba(255,255,255,0.18)', border: '0.5px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M8 21h8a4 4 0 004-4V8a3 3 0 00-3-3H7a3 3 0 00-3 3v9a4 4 0 004 4z" /><line x1="8" y1="9" x2="16" y2="9" /></svg>
            </div>
            <div>
              <div style={{ fontSize: 7, fontWeight: 500, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>Multi-modal AI</div>
              <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.55)', marginTop: 2 }}>Audio · Text · PDF — all sources welcome</div>
            </div>
            <div style={{ marginLeft: 'auto', fontSize: 7, fontWeight: 500, color: '#6FFFAA', background: 'rgba(0,232,102,0.18)', border: '0.5px solid rgba(0,232,102,0.5)', padding: '4px 10px', borderRadius: 999 }}>
              ✓ Done
            </div>
          </div>
        </div>

        {/* 2-col: Input left, AI Output right */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: 8 }}>
          {/* Input area */}
          <div style={{ background: '#fff', borderRadius: 12, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)' }}>
            <div style={{ fontSize: 7, fontWeight: 500, color: TT3, letterSpacing: '0.18em', textTransform: 'uppercase' as const, marginBottom: 7 }}>Source</div>

            {/* Tabs */}
            <div style={{ display: 'flex', gap: 3, marginBottom: 8 }}>
              {[
                { label: '🎙 Audio', on: true },
                { label: '📄 Text', on: false },
                { label: '📑 PDF', on: false },
              ].map(t => (
                <div key={t.label} style={{ flex: 1, padding: '5px 0', textAlign: 'center', borderRadius: 6, fontSize: 7, fontWeight: 500, background: t.on ? BLUE : SURFACE, color: t.on ? '#fff' : TT3 }}>
                  {t.label}
                </div>
              ))}
            </div>

            {/* File pill */}
            <div style={{ background: SURFACE, borderRadius: 8, padding: 8, marginBottom: 6 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 22, height: 22, borderRadius: 6, background: VIOLET, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M19.07 4.93a10 10 0 010 14.14" /></svg>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 8, fontWeight: 500, color: TT1, lineHeight: 1.2 }}>quadratic-class-10b.m4a</div>
                  <div style={{ fontSize: 6, color: TT4, marginTop: 1 }}>42 min · 18.4 MB · Apr 28</div>
                </div>
                <div style={{ fontSize: 6, fontWeight: 500, color: GREEN, background: 'rgba(0,200,83,0.12)', padding: '2px 6px', borderRadius: 999 }}>Transcribed</div>
              </div>
              {/* Waveform mock */}
              <div style={{ marginTop: 6, display: 'flex', alignItems: 'center', gap: 1, height: 22 }}>
                {Array.from({ length: 60 }).map((_, i) => {
                  const h = 6 + Math.abs(Math.sin(i * 0.5) * 14);
                  return <div key={i} style={{ flex: 1, height: h, background: i < 28 ? VIOLET : '#D9D9E5', borderRadius: 1 }} />;
                })}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 4 }}>
                <span style={{ fontSize: 6, fontWeight: 500, color: TT3 }}>19:24</span>
                <span style={{ fontSize: 6, fontWeight: 500, color: TT4 }}>42:00</span>
              </div>
            </div>

            <div style={{ height: 1, background: SURFACE, margin: '8px 0' }} />
            <div style={{ fontSize: 7, fontWeight: 500, color: TT3, letterSpacing: '0.18em', textTransform: 'uppercase' as const, marginBottom: 6 }}>Options</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3, marginBottom: 8 }}>
              {[
                { label: 'Key concepts', on: true },
                { label: 'Must remember', on: true },
                { label: 'Follow-up Qs', on: true },
                { label: 'Parent summary', on: true },
              ].map(t => (
                <div key={t.label} style={{ padding: '3px 7px', borderRadius: 999, fontSize: 6, fontWeight: 500, background: t.on ? VIOLET : SURFACE, color: t.on ? '#fff' : TT3 }}>
                  {t.label}
                </div>
              ))}
            </div>

            <button type="button" style={{ width: '100%', padding: '8px 0', borderRadius: 8, background: VIOLET, color: '#fff', fontSize: 9, fontWeight: 500, border: 'none', boxShadow: `0 4px 12px ${VIOLET}55`, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M12 3v3M12 18v3M3 12h3M18 12h3" /></svg>
              Summarize with AI
            </button>
          </div>

          {/* AI Output */}
          <div style={{ background: '#fff', borderRadius: 12, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 7 }}>
              <div style={{ width: 22, height: 22, borderRadius: 7, background: VIOLET, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="14 2 14 8 20 8" /><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /></svg>
              </div>
              <div>
                <div style={{ fontSize: 9, fontWeight: 500, color: TT1, letterSpacing: '-0.15px' }}>Quadratic Equations — Class 10B</div>
                <div style={{ fontSize: 7, color: TT3, marginTop: 1 }}>Apr 28 · 42 min lesson · 4 sections</div>
              </div>
              <div style={{ marginLeft: 'auto', fontSize: 6, fontWeight: 500, color: '#fff', background: BLUE, padding: '3px 7px', borderRadius: 999 }}>Share to Parents</div>
            </div>

            {/* Key Concepts */}
            <div style={{ background: 'rgba(0,85,255,0.04)', border: '1px solid rgba(0,85,255,0.12)', borderRadius: 8, padding: 8, marginBottom: 6 }}>
              <div style={{ fontSize: 6, fontWeight: 500, color: BLUE, letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 4 }}>🔑 Key Concepts</div>
              {[
                'Standard form ax² + bx + c = 0 (a ≠ 0)',
                'Solving by factorization · completing square · quadratic formula',
                'Discriminant D = b² − 4ac → nature of roots',
              ].map((c, i) => (
                <div key={i} style={{ fontSize: 7, color: TT1, lineHeight: 1.4, marginBottom: 2 }}>
                  <b style={{ color: BLUE, fontWeight: 500 }}>•</b> {c}
                </div>
              ))}
            </div>

            {/* Must Remember */}
            <div style={{ background: 'rgba(255,170,0,0.06)', border: '1px solid rgba(255,170,0,0.18)', borderRadius: 8, padding: 8, marginBottom: 6 }}>
              <div style={{ fontSize: 6, fontWeight: 500, color: GOLD, letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 4 }}>⚡ Must Remember</div>
              <div style={{ fontSize: 7, color: TT1, lineHeight: 1.4 }}>
                <b style={{ color: GOLD, fontWeight: 500 }}>Quadratic formula:</b> x = [−b ± √(b² − 4ac)] / 2a · <b style={{ color: GOLD, fontWeight: 500 }}>D &gt; 0</b> = 2 real roots · <b style={{ color: GOLD, fontWeight: 500 }}>D = 0</b> = equal roots · <b style={{ color: GOLD, fontWeight: 500 }}>D &lt; 0</b> = no real roots.
              </div>
            </div>

            {/* Follow-up Questions */}
            <div style={{ background: 'rgba(0,85,255,0.05)', border: '1px solid rgba(0,85,255,0.16)', borderRadius: 8, padding: 8, marginBottom: 6 }}>
              <div style={{ fontSize: 6, fontWeight: 500, color: VIOLET, letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 4 }}>❓ Follow-up Questions</div>
              {[
                'Can a quadratic have only 1 root? When?',
                'How does discriminant relate to graph shape?',
                'Real-life: where do we see quadratics outside math class?',
              ].map((q, i) => (
                <div key={i} style={{ fontSize: 7, color: TT1, lineHeight: 1.4, marginBottom: 2 }}>
                  <b style={{ color: VIOLET, fontWeight: 500 }}>Q{i + 1}.</b> {q}
                </div>
              ))}
            </div>

            {/* Parent Summary */}
            <div style={{ background: 'rgba(0,200,83,0.06)', border: '1px solid rgba(0,200,83,0.16)', borderRadius: 8, padding: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4 }}>
                <span style={{ fontSize: 6, fontWeight: 500, color: GREEN, letterSpacing: '0.12em', textTransform: 'uppercase' as const }}>👨‍👩‍👧 Parent-Friendly Summary</span>
                <span style={{ marginLeft: 'auto', fontSize: 6, fontWeight: 500, color: GREEN, background: 'rgba(0,200,83,0.12)', padding: '2px 6px', borderRadius: 999 }}>Auto-shared</span>
              </div>
              <div style={{ fontSize: 7, color: TT1, lineHeight: 1.45 }}>
                Today, your child learned how to solve <b style={{ fontWeight: 500 }}>quadratic equations</b> — equations where the highest power is 2. They covered three solving methods and how to predict the type of solution. Practice problems are in NCERT Ex 4.3 (Q1–5).
              </div>
            </div>
          </div>
        </div>
      </div>
    </IPadShellWithSidebar>
  );
};

export default TeacherSummarizeLessonIPad;
