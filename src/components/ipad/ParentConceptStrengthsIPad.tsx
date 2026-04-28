/**
 * Static iPad mockup — Parent · Concept Strengths page.
 * KPI strip + multi-subject mastery line chart + 3 concept buckets
 * (strong / developing / focus) + AI breakdown card.
 */

import ParentIPadShell from './ParentIPadShell';

const ParentConceptStrengthsIPad = () => {
  const BLUE = '#0055FF';
  const TT1 = '#001040';
  const TT3 = '#5070B0';
  const TT4 = '#99AACC';
  const GREEN = '#00C853';
  const ORANGE = '#FF8800';
  const RED = '#FF3355';
  const VIOLET = '#7B3FF4';

  // Multi-line trend (4 subjects across 6 months)
  const months = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
  const series = [
    { name: 'Math', color: BLUE, data: [72, 76, 80, 84, 86, 91] },
    { name: 'Science', color: GREEN, data: [68, 70, 73, 78, 80, 82] },
    { name: 'English', color: VIOLET, data: [80, 78, 82, 84, 85, 87] },
    { name: 'Social', color: ORANGE, data: [60, 64, 66, 65, 68, 70] },
  ];
  const W = 300, H = 70;
  const max = 100, min = 50;
  const buildPts = (data: number[]) =>
    data.map((v, i) => `${((i / (data.length - 1)) * W).toFixed(1)},${(H - ((v - min) / (max - min)) * H).toFixed(1)}`).join(' ');

  return (
    <ParentIPadShell activePath="/concept-strengths">
      <div style={{ padding: '12px 14px 6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4 }}>
          <span style={{ width: 4, height: 4, borderRadius: 1, background: BLUE }} />
          <span style={{ fontSize: 7, fontWeight: 500, color: TT3, letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>
            Parent · Concepts
          </span>
        </div>
        <h1 style={{ fontSize: 22, fontWeight: 300, color: TT1, letterSpacing: '-0.7px', lineHeight: 1.05, margin: 0 }}>
          Concept Strengths
        </h1>
        <div style={{ fontSize: 9, fontWeight: 400, color: TT3, marginTop: 3 }}>
          Topic-level mastery across every subject — see exactly where Aarav is strong and weak.
        </div>
      </div>

      <div style={{ flex: 1, padding: '6px 12px 12px', overflowY: 'auto', minHeight: 0 }}>
        {/* KPI strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 7, marginBottom: 8 }}>
          {[
            { label: 'Mastery Score', val: '78%', sub: '↑ 4% this month', color: GREEN, bg: 'linear-gradient(135deg, #E8FBEF 0%, #DAF6E4 100%)' },
            { label: 'Topics Mastered', val: '47', sub: 'of 62 total', color: BLUE, bg: 'linear-gradient(135deg, #DEE6F8 0%, #F8FAFE 100%)' },
            { label: 'Focus Areas', val: '6', sub: 'need revision', color: ORANGE, bg: 'linear-gradient(135deg, #FFF6E8 0%, #FFEED4 100%)' },
          ].map(c => (
            <div key={c.label} style={{ background: c.bg, border: `0.5px solid ${c.color}33`, borderRadius: 11, padding: '8px 10px' }}>
              <div style={{ fontSize: 6, fontWeight: 500, color: c.color, letterSpacing: '0.14em', textTransform: 'uppercase' as const, marginBottom: 4 }}>{c.label}</div>
              <div style={{ fontSize: 18, fontWeight: 300, color: TT1, letterSpacing: '-0.7px', lineHeight: 1 }}>{c.val}</div>
              <div style={{ fontSize: 6, fontWeight: 500, color: c.color, marginTop: 3 }}>{c.sub}</div>
            </div>
          ))}
        </div>

        {/* Multi-subject line chart */}
        <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)', marginBottom: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="2"><polyline points="3 17 9 11 13 15 21 7" /></svg>
            <div style={{ fontSize: 9, fontWeight: 500, color: TT1 }}>Mastery by Subject</div>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 6 }}>
              {series.map(s => (
                <div key={s.name} style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: s.color }} />
                  <span style={{ fontSize: 6, fontWeight: 500, color: TT3 }}>{s.name}</span>
                </div>
              ))}
            </div>
          </div>
          <svg width="100%" height={H + 14} viewBox={`0 0 ${W} ${H + 14}`} preserveAspectRatio="none">
            {/* grid */}
            {[0, 25, 50, 75, 100].map(g => (
              <line key={g} x1="0" y1={H - (g / 100) * H} x2={W} y2={H - (g / 100) * H} stroke="#F1F5F9" strokeWidth="0.5" />
            ))}
            {series.map(s => (
              <polyline key={s.name} points={buildPts(s.data)} fill="none" stroke={s.color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            ))}
            {series.flatMap(s => s.data.map((v, i) => {
              const x = (i / (s.data.length - 1)) * W;
              const y = H - ((v - min) / (max - min)) * H;
              return <circle key={`${s.name}-${i}`} cx={x} cy={y} r="1.4" fill="#fff" stroke={s.color} strokeWidth="1.1" />;
            }))}
          </svg>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 2, fontSize: 5.5, color: TT4 }}>
            {months.map(m => <span key={m}>{m}</span>)}
          </div>
        </div>

        {/* 3 concept buckets */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 7, marginBottom: 8 }}>
          {/* Strong */}
          <div style={{ background: '#fff', borderRadius: 10, padding: 9, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: `0.5px solid ${GREEN}22` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 6 }}>
              <div style={{ width: 14, height: 14, borderRadius: 4, background: `linear-gradient(135deg, ${GREEN}, ${GREEN}cc)`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="5 13 9 17 19 7" /></svg>
              </div>
              <span style={{ fontSize: 8, fontWeight: 500, color: TT1 }}>Strong</span>
              <span style={{ marginLeft: 'auto', fontSize: 6, fontWeight: 500, color: GREEN }}>14</span>
            </div>
            {[
              { name: 'Quadratic Equations', score: 96, tag: 'Maintained' },
              { name: 'Newton\'s Laws', score: 94, tag: 'Improving' },
              { name: 'OOP Principles', score: 92, tag: 'Maintained' },
              { name: 'Probability', score: 89, tag: 'Improving' },
            ].map((c, i) => (
              <div key={c.name} style={{ padding: '4px 0', borderBottom: i < 3 ? '0.5px solid #F1F5F9' : 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 6.5, fontWeight: 500, color: TT1, lineHeight: 1.2 }}>{c.name}</span>
                  <span style={{ fontSize: 7, fontWeight: 500, color: GREEN }}>{c.score}%</span>
                </div>
                <div style={{ fontSize: 5.5, color: TT4, marginTop: 1 }}>{c.tag}</div>
              </div>
            ))}
          </div>

          {/* Developing */}
          <div style={{ background: '#fff', borderRadius: 10, padding: 9, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: `0.5px solid ${ORANGE}22` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 6 }}>
              <div style={{ width: 14, height: 14, borderRadius: 4, background: `linear-gradient(135deg, ${ORANGE}, #FFCC22)`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="3 17 9 11 13 15 21 7" /></svg>
              </div>
              <span style={{ fontSize: 8, fontWeight: 500, color: TT1 }}>Developing</span>
              <span style={{ marginLeft: 'auto', fontSize: 6, fontWeight: 500, color: ORANGE }}>9</span>
            </div>
            {[
              { name: 'Trigonometric Identities', score: 74, tag: 'Progressing' },
              { name: 'Organic Chemistry', score: 71, tag: 'Progressing' },
              { name: 'Essay Structure', score: 70, tag: 'Steady' },
              { name: 'Indian History', score: 68, tag: 'Progressing' },
            ].map((c, i) => (
              <div key={c.name} style={{ padding: '4px 0', borderBottom: i < 3 ? '0.5px solid #F1F5F9' : 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 6.5, fontWeight: 500, color: TT1, lineHeight: 1.2 }}>{c.name}</span>
                  <span style={{ fontSize: 7, fontWeight: 500, color: ORANGE }}>{c.score}%</span>
                </div>
                <div style={{ fontSize: 5.5, color: TT4, marginTop: 1 }}>{c.tag}</div>
              </div>
            ))}
          </div>

          {/* Focus */}
          <div style={{ background: '#fff', borderRadius: 10, padding: 9, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: `0.5px solid ${RED}22` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 6 }}>
              <div style={{ width: 14, height: 14, borderRadius: 4, background: `linear-gradient(135deg, ${RED}, #FF6677)`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /><circle cx="12" cy="12" r="10" /></svg>
              </div>
              <span style={{ fontSize: 8, fontWeight: 500, color: TT1 }}>Focus Areas</span>
              <span style={{ marginLeft: 'auto', fontSize: 6, fontWeight: 500, color: RED }}>6</span>
            </div>
            {[
              { name: 'Cell Biology', score: 52, tag: 'Needs Focus' },
              { name: 'Calculus Limits', score: 58, tag: 'Needs Focus' },
              { name: 'Periodic Table', score: 60, tag: 'Revisit' },
              { name: 'Geometry Proofs', score: 62, tag: 'Revisit' },
            ].map((c, i) => (
              <div key={c.name} style={{ padding: '4px 0', borderBottom: i < 3 ? '0.5px solid #F1F5F9' : 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 6.5, fontWeight: 500, color: TT1, lineHeight: 1.2 }}>{c.name}</span>
                  <span style={{ fontSize: 7, fontWeight: 500, color: RED }}>{c.score}%</span>
                </div>
                <div style={{ fontSize: 5.5, color: TT4, marginTop: 1 }}>{c.tag}</div>
              </div>
            ))}
          </div>
        </div>

        {/* AI breakdown */}
        <div style={{
          background: `linear-gradient(135deg, #001040 0%, #0B1F3A 50%, #1A2D5A 100%)`,
          borderRadius: 11, padding: 10, color: '#fff', position: 'relative', overflow: 'hidden',
          boxShadow: '0 6px 18px rgba(0,16,64,0.25)',
        }}>
          <div style={{ position: 'absolute', top: -25, right: -25, width: 90, height: 90, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,85,255,0.4) 0%, transparent 65%)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6, position: 'relative', zIndex: 2 }}>
            <div style={{ width: 18, height: 18, borderRadius: 5, background: 'linear-gradient(135deg, #0055FF, #1166FF)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2"><path d="M9 2a3 3 0 00-3 3v.5A3.5 3.5 0 003 9v3a3 3 0 003 3v3a3 3 0 003 3h6a3 3 0 003-3v-3a3 3 0 003-3V9a3.5 3.5 0 00-3-3.5V5a3 3 0 00-3-3z" /></svg>
            </div>
            <div style={{ fontSize: 8, fontWeight: 600, letterSpacing: '0.06em' }}>AI Topic Breakdown</div>
            <div style={{ marginLeft: 'auto', fontSize: 6, color: 'rgba(255,255,255,0.55)' }}>Updated 2h ago</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, position: 'relative', zIndex: 2 }}>
            <div style={{ fontSize: 7, lineHeight: 1.5, color: 'rgba(255,255,255,0.8)' }}>
              <span style={{ color: '#6FFFAA', fontWeight: 600 }}>Strong foundation</span> in algebra, mechanics, and OOP. These are likely to carry forward into Class 10 boards.
            </div>
            <div style={{ fontSize: 7, lineHeight: 1.5, color: 'rgba(255,255,255,0.8)' }}>
              <span style={{ color: '#FFCC22', fontWeight: 600 }}>Watch:</span> Cell Biology + Calculus Limits dropped together — possible pacing issue. Recommend 30-min daily revision.
            </div>
          </div>
        </div>
      </div>
    </ParentIPadShell>
  );
};

export default ParentConceptStrengthsIPad;