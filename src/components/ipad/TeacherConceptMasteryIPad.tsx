/**
 * Static iPad mockup — Concept Mastery page.
 * Mirrors /concept-mastery: header + class picker + 4 stat cards +
 * student × concept heat-map matrix + cold-zone list with re-teach actions.
 */

import IPadShellWithSidebar from './IPadShellWithSidebar';

const TeacherConceptMasteryIPad = () => {
  const BLUE = '#0055FF';
  const TT1 = '#001040';
  const TT3 = '#5070B0';
  const TT4 = '#99AACC';
  const SURFACE = '#F4F7FE';
  const GREEN = '#00C853';
  const RED = '#FF3355';
  const ORANGE = '#FF8800';
  const VIOLET = '#0055FF';
  const GOLD = '#FFAA00';

  // Heat-map cells: 5 students × 6 concepts (mastery 0-100)
  const STUDENTS = ['Aryan R.', 'Riya S.', 'Vikram P.', 'Neha K.', 'Karan M.'];
  const CONCEPTS = ['Quadratics', 'AP', 'Trig', 'Geometry', 'Stats', 'Probability'];
  const matrix = [
    [92, 88, 76, 64, 81, 70],
    [85, 91, 83, 78, 88, 82],
    [54, 62, 48, 38, 55, 42],
    [78, 81, 72, 65, 75, 68],
    [42, 38, 30, 28, 45, 32],
  ];
  const colorFor = (v: number) => {
    if (v >= 85) return GREEN;
    if (v >= 70) return BLUE;
    if (v >= 55) return GOLD;
    if (v >= 40) return ORANGE;
    return RED;
  };
  const bgFor = (v: number) => {
    if (v >= 85) return 'rgba(0,200,83,0.20)';
    if (v >= 70) return 'rgba(0,85,255,0.16)';
    if (v >= 55) return 'rgba(255,170,0,0.20)';
    if (v >= 40) return 'rgba(255,136,0,0.20)';
    return 'rgba(255,51,85,0.22)';
  };

  return (
    <IPadShellWithSidebar activePath="/concept-mastery">
      {/* Header */}
      <div style={{ padding: '12px 14px 6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4 }}>
          <span style={{ width: 4, height: 4, borderRadius: 1, background: BLUE }} />
          <span style={{ fontSize: 7, fontWeight: 500, color: TT3, letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>
            Teacher Dashboard · Concept Mastery
          </span>
        </div>
        <h1 style={{ fontSize: 22, fontWeight: 300, color: TT1, letterSpacing: '-0.7px', lineHeight: 1.05, margin: 0 }}>
          Concept Mastery
        </h1>
        <div style={{ fontSize: 9, fontWeight: 400, color: TT3, marginTop: 3 }}>
          Class 10B · Mathematics — see exactly which topics aren't landing.
        </div>
      </div>

      <div style={{ flex: 1, padding: '6px 12px 12px', overflowY: 'auto', minHeight: 0 }}>
        {/* 4 stat cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 7, marginBottom: 8 }}>
          {[
            { label: 'Avg Mastery', val: '67%', sub: '↑ 4% vs last test', color: BLUE, bg: 'linear-gradient(135deg, #DEE6F8 0%, #F8FAFE 100%)' },
            { label: 'Strong Concepts', val: '2', sub: 'Quadratics · AP', color: GREEN, bg: 'linear-gradient(135deg, #E8FBEF 0%, #DAF6E4 100%)' },
            { label: 'Cold Zones', val: '2', sub: 'Geometry · Probability', color: RED, bg: 'linear-gradient(135deg, #FFEEF0 0%, #FFE2E6 100%)' },
            { label: 'Students Below 50', val: '2', sub: 'Need re-teach', color: ORANGE, bg: 'linear-gradient(135deg, #FFF6E8 0%, #FFEED4 100%)' },
          ].map(c => (
            <div key={c.label} style={{ background: c.bg, border: `0.5px solid ${c.color}33`, borderRadius: 11, padding: '8px 10px' }}>
              <div style={{ fontSize: 6, fontWeight: 500, color: c.color, letterSpacing: '0.14em', textTransform: 'uppercase' as const, marginBottom: 4 }}>{c.label}</div>
              <div style={{ fontSize: 18, fontWeight: 300, color: TT1, letterSpacing: '-0.8px', lineHeight: 1 }}>{c.val}</div>
              <div style={{ fontSize: 7, fontWeight: 500, color: c.color, marginTop: 3 }}>{c.sub}</div>
            </div>
          ))}
        </div>

        {/* Heat-map */}
        <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)', marginBottom: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 7 }}>
            <div style={{ width: 22, height: 22, borderRadius: 7, background: VIOLET, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>
            </div>
            <div style={{ fontSize: 9, fontWeight: 500, color: TT1, letterSpacing: '-0.15px' }}>Mastery Heat-map</div>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 4, alignItems: 'center' }}>
              {[
                { v: '85+', c: GREEN },
                { v: '70-84', c: BLUE },
                { v: '55-69', c: GOLD },
                { v: '40-54', c: ORANGE },
                { v: '<40', c: RED },
              ].map(l => (
                <div key={l.v} style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <span style={{ width: 7, height: 7, borderRadius: 1.5, background: l.c }} />
                  <span style={{ fontSize: 5, fontWeight: 500, color: TT3 }}>{l.v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Matrix */}
          <div style={{ display: 'grid', gridTemplateColumns: `78px repeat(${CONCEPTS.length}, 1fr)`, gap: 3, fontSize: 6 }}>
            {/* Header row */}
            <div />
            {CONCEPTS.map(c => (
              <div key={c} style={{ fontSize: 6, fontWeight: 500, color: TT3, letterSpacing: '0.06em', textTransform: 'uppercase' as const, textAlign: 'center', padding: '0 0 4px' }}>
                {c}
              </div>
            ))}

            {/* Rows */}
            {STUDENTS.map((s, i) => (
              <>
                <div key={s} style={{ fontSize: 7, fontWeight: 500, color: TT1, padding: '6px 4px', display: 'flex', alignItems: 'center' }}>
                  {s}
                </div>
                {matrix[i].map((v, j) => (
                  <div
                    key={j}
                    style={{
                      background: bgFor(v),
                      border: `0.5px solid ${colorFor(v)}33`,
                      borderRadius: 5,
                      padding: '6px 0',
                      textAlign: 'center',
                      fontSize: 8,
                      fontWeight: 500,
                      color: colorFor(v),
                    }}
                  >
                    {v}
                  </div>
                ))}
              </>
            ))}
          </div>
        </div>

        {/* Cold zones + AI suggest */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {/* Cold zones */}
          <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: `0.5px solid ${RED}1F` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 7 }}>
              <div style={{ width: 22, height: 22, borderRadius: 7, background: RED, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 3L3 20h18L12 3z" /><line x1="12" y1="9" x2="12" y2="14" /></svg>
              </div>
              <div style={{ fontSize: 9, fontWeight: 500, color: TT1, letterSpacing: '-0.15px' }}>Cold Zones</div>
              <div style={{ marginLeft: 'auto', fontSize: 6, fontWeight: 500, color: RED, background: 'rgba(255,51,85,0.10)', padding: '2px 6px', borderRadius: 999 }}>2 critical</div>
            </div>
            {[
              { concept: 'Probability', avg: 38, students: '5/5 below 50' },
              { concept: 'Geometry', avg: 51, students: '3/5 below 65' },
              { concept: 'Trigonometry', avg: 62, students: '2/5 below 60' },
            ].map((z, i) => (
              <div key={i} style={{ padding: '6px 0', borderBottom: i < 2 ? '0.5px solid #F1F5F9' : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 3 }}>
                  <div style={{ fontSize: 8, fontWeight: 500, color: TT1 }}>{z.concept}</div>
                  <div style={{ marginLeft: 'auto', fontSize: 9, fontWeight: 500, color: colorFor(z.avg) }}>{z.avg}%</div>
                </div>
                <div style={{ fontSize: 6, color: TT4 }}>{z.students}</div>
              </div>
            ))}
          </div>

          {/* AI re-teach suggestions */}
          <div style={{ background: `linear-gradient(135deg, ${VIOLET} 0%, #003ECC 100%)`, color: '#fff', borderRadius: 11, padding: 10, position: 'relative', overflow: 'hidden', boxShadow: '0 6px 18px rgba(0,85,255,0.22)' }}>
            <div style={{ position: 'absolute', top: -20, right: -20, width: 80, height: 80, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 65%)' }} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 6 }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M12 3v3M12 18v3M3 12h3M18 12h3" /></svg>
                <div style={{ fontSize: 6, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>AI Re-teach Plan</div>
              </div>
              {[
                'Use Khan Academy "Probability with dice" video (Mon)',
                'Pair Karan + Vikram for guided Geometry practice',
                '5-Q quick quiz before Wednesday for Trig recap',
                'Share solved-paper PDF for Probability (auto-emailed)',
              ].map((t, i) => (
                <div key={i} style={{ display: 'flex', gap: 5, padding: '4px 0', borderTop: i > 0 ? '0.5px solid rgba(255,255,255,0.10)' : 'none' }}>
                  <span style={{ fontSize: 7, color: '#FFD166', fontWeight: 500 }}>{i + 1}.</span>
                  <span style={{ fontSize: 7, color: 'rgba(255,255,255,0.9)', lineHeight: 1.35 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </IPadShellWithSidebar>
  );
};

export default TeacherConceptMasteryIPad;
