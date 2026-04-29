/**
 * Static iPad mockup — Teacher · Concept Mastery page.
 * Faithful pixel-shrink of teacher-dashboard/src/pages/ConceptMastery.tsx.
 *
 * Layout matches source:
 *   1. Header: eyebrow + h1 + subtitle
 *   2. Class picker card + search + export buttons
 *   3. HERO Class Mastery (dark gradient with frosted icon + status pill +
 *      huge percentage + status legend)
 *   4. Section header: "Students" + count
 *   5. Student cards: side band + avatar + name + mastery pill + concept rows
 *      with colored progress bars
 */

import IPadShellWithSidebar from './IPadShellWithSidebar';

const TeacherConceptMasteryIPad = () => {
  const B1 = '#0055FF';
  const VIOLET = '#7B3FF4';
  const T1 = '#001040';
  const T2 = '#002080';
  const T3 = '#5070B0';
  const T4 = '#99AACC';
  const GREEN = '#00C853';
  const ORANGE = '#FF8800';
  const RED = '#FF3355';
  const SURFACE = '#F4F7FE';
  const HERO_GRAD = 'linear-gradient(135deg, #000A33 0%, #001A66 32%, #0044CC 68%, #0055FF 100%)';

  const concepts = ['Quadratics', 'Trigonometry', 'AP', 'Probability'];

  const students = [
    { name: 'Aarav Sharma', initials: 'AS', avatarBg: '#7B3FF4', mastery: 88, band: 'Mastered', bandColor: GREEN, concepts: [92, 85, 91, 84] },
    { name: 'Diya Patel', initials: 'DP', avatarBg: '#0EAFAE', mastery: 92, band: 'Mastered', bandColor: GREEN, concepts: [95, 90, 94, 89] },
    { name: 'Krish Mehta', initials: 'KM', avatarBg: '#FF8800', mastery: 64, band: 'Developing', bandColor: ORANGE, concepts: [72, 58, 64, 62] },
    { name: 'Riya Kapoor', initials: 'RK', avatarBg: '#FF3355', mastery: 42, band: 'Weak', bandColor: RED, concepts: [55, 38, 41, 34] },
  ];

  return (
    <IPadShellWithSidebar activePath="/concept-mastery">
      <div style={{ background: '#EEF4FF', flex: 1, overflowY: 'auto', minHeight: 0, padding: '10px 12px 12px', fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif" }}>

        {/* Header */}
        <div style={{ marginBottom: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4 }}>
            <span style={{ width: 4, height: 4, borderRadius: 1, background: B1 }} />
            <span style={{ fontSize: 6, fontWeight: 700, color: T3, letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>
              Teacher Dashboard · Mastery
            </span>
          </div>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: T1, letterSpacing: '-0.7px', lineHeight: 1.05, margin: 0 }}>
            Concept Mastery
          </h1>
          <div style={{ fontSize: 8, fontWeight: 500, color: T3, marginTop: 3, letterSpacing: '-0.1px' }}>
            Track student understanding across assessed concepts.
          </div>
        </div>

        {/* Class picker + search + export */}
        <div style={{ display: 'flex', gap: 5, marginBottom: 8 }}>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 7, padding: '6px 9px', background: '#fff', borderRadius: 9, boxShadow: '0 4px 12px rgba(0,85,255,0.10)', border: `0.5px solid ${B1}14` }}>
            <div style={{ width: 22, height: 22, borderRadius: 6, background: VIOLET, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 5.5, fontWeight: 700, color: T3, letterSpacing: '0.16em', textTransform: 'uppercase' as const }}>Viewing</div>
              <div style={{ fontSize: 8, fontWeight: 700, color: T1, letterSpacing: '-0.15px', marginTop: 1 }}>10B · Mathematics</div>
            </div>
            <span style={{ color: T4, fontSize: 12, lineHeight: 1, flexShrink: 0 }}>›</span>
          </div>
          <div style={{ width: 28, height: 28, borderRadius: 7, background: B1, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 4px 10px ${B1}55`, flexShrink: 0 }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.5" y2="16.5" /></svg>
          </div>
          <div style={{ width: 28, height: 28, borderRadius: 7, background: '#fff', color: B1, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,85,255,0.10)', border: `0.5px solid ${B1}14`, flexShrink: 0 }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
          </div>
        </div>

        {/* HERO — Class Mastery */}
        <div style={{
          background: HERO_GRAD,
          borderRadius: 14, padding: '12px 14px',
          marginBottom: 8, position: 'relative', overflow: 'hidden',
          boxShadow: '0 12px 28px rgba(0,8,60,0.28)',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.09) 0%, transparent 45%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 9 }}>
              <div style={{ width: 26, height: 26, borderRadius: 8, background: 'rgba(255,255,255,0.14)', border: '0.5px solid rgba(255,255,255,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0 }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M9 11H3v8h6v-8zM15 3h-6v16h6V3zM21 13h-6v6h6v-6z" /></svg>
              </div>
              <div>
                <div style={{ fontSize: 6, fontWeight: 700, color: 'rgba(255,255,255,0.72)', letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>Class Mastery</div>
                <div style={{ fontSize: 6.5, color: 'rgba(255,255,255,0.5)', marginTop: 1, fontWeight: 500, letterSpacing: '-0.1px' }}>4 concepts · 10B Math</div>
              </div>
              <div style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 3, padding: '3px 8px', borderRadius: 999, background: 'rgba(255,208,96,0.2)', border: '0.5px solid rgba(255,208,96,0.5)', color: '#FFD060', fontSize: 6, fontWeight: 700, letterSpacing: '0.05em' }}>
                <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#FFD060', boxShadow: '0 0 6px #FFD060' }} />
                Developing
              </div>
            </div>
            <div style={{ fontSize: 36, fontWeight: 800, color: '#fff', letterSpacing: '-1.5px', lineHeight: 1, marginBottom: 5, display: 'flex', alignItems: 'baseline', gap: 1 }}>
              76
              <span style={{ fontSize: 16, fontWeight: 700, color: 'rgba(255,255,255,0.65)', letterSpacing: '-0.4px' }}>%</span>
            </div>
            <div style={{ fontSize: 7, color: 'rgba(255,255,255,0.72)', fontWeight: 500, letterSpacing: '-0.1px', marginBottom: 9 }}>
              <strong style={{ color: '#fff', fontWeight: 700 }}>Mixed performance</strong> — 1 at risk, 2 mastering unit.
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
              {[
                { l: 'Mastered ≥ 80%', c: '#6FFFAA' },
                { l: 'Developing ≥ 50%', c: '#FFD060' },
                { l: 'Weak < 50%', c: '#FF9AA9' },
              ].map(item => (
                <div key={item.l} style={{ display: 'inline-flex', alignItems: 'center', gap: 3, padding: '2px 7px', borderRadius: 999, background: 'rgba(255,255,255,0.08)', border: '0.5px solid rgba(255,255,255,0.15)', fontSize: 5.5, fontWeight: 700, color: 'rgba(255,255,255,0.85)' }}>
                  <span style={{ width: 4, height: 4, borderRadius: '50%', background: item.c, boxShadow: `0 0 4px ${item.c}` }} />
                  {item.l}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section head */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 5, padding: '0 2px 6px' }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: T1, letterSpacing: '-0.25px' }}>Students</span>
          <span style={{ fontSize: 6, color: T3, fontWeight: 600, letterSpacing: '-0.1px' }}>4 assessed · 4 concepts</span>
        </div>

        {/* Student cards */}
        {students.map(s => (
          <div key={s.name} style={{
            background: '#fff', borderRadius: 12, padding: '8px 10px', marginBottom: 5,
            boxShadow: '0 4px 12px rgba(0,85,255,0.10)',
            border: `0.5px solid ${B1}14`,
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 2.5, background: s.bandColor }} />

            <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 7 }}>
              <div style={{ width: 24, height: 24, borderRadius: 7, background: s.avatarBg, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 7.5, fontWeight: 700, flexShrink: 0 }}>
                {s.initials}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 8.5, fontWeight: 700, color: T1, letterSpacing: '-0.2px', lineHeight: 1.2 }}>{s.name}</div>
                <div style={{ fontSize: 5.5, color: T3, marginTop: 1, fontWeight: 500, display: 'flex', alignItems: 'center', gap: 3 }}>
                  <span>10B</span><span style={{ color: T4 }}>·</span><span>4 concepts assessed</span>
                </div>
              </div>
              <div style={{
                padding: '2px 7px', borderRadius: 999,
                background: `${s.bandColor}22`, color: s.bandColor,
                fontSize: 5.5, fontWeight: 700, letterSpacing: '0.06em', flexShrink: 0,
                display: 'flex', alignItems: 'center', gap: 3,
              }}>
                <span style={{ width: 4, height: 4, borderRadius: '50%', background: s.bandColor }} />
                {s.band}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 }}>
              {concepts.map((h, i) => {
                const pct = s.concepts[i];
                const c = pct >= 80 ? GREEN : pct >= 50 ? ORANGE : RED;
                const grad = pct >= 80 ? 'linear-gradient(90deg, #00E866, #00C853)' : pct >= 50 ? 'linear-gradient(90deg, #FFAA00, #FF8800)' : 'linear-gradient(90deg, #FF5577, #FF3355)';
                return (
                  <div key={h} style={{ background: SURFACE, borderRadius: 7, padding: '4px 7px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
                      <div style={{ fontSize: 6.5, fontWeight: 700, color: T2, letterSpacing: '-0.1px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', paddingRight: 4 }}>{h}</div>
                      <div style={{ fontSize: 7.5, fontWeight: 700, color: c, letterSpacing: '-0.2px', flexShrink: 0 }}>{pct}%</div>
                    </div>
                    <div style={{ height: 3.5, background: '#EAF0FB', borderRadius: 999, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${pct}%`, background: grad, borderRadius: 999 }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </IPadShellWithSidebar>
  );
};

export default TeacherConceptMasteryIPad;
