/**
 * Static iPad mockup — Parent · Performance Analytics page.
 * Hero stat strip + subject cards with progress bars + trend chart +
 * AI narrative card + benchmark insights.
 */

import ParentIPadShell from './ParentIPadShell';

const ParentPerformanceIPad = () => {
  const BLUE = '#0055FF';
  const BLUE_2 = '#1166FF';
  const TT1 = '#001040';
  const TT3 = '#5070B0';
  const TT4 = '#99AACC';
  const GREEN = '#00C853';
  const ORANGE = '#FF8800';
  const RED = '#FF3355';
  const GOLD = '#FFAA00';

  const subjects = [
    { name: 'Mathematics', score: 92, color: GREEN, status: 'On Track', icon: '∑' },
    { name: 'Computer Sci.', score: 95, color: GREEN, status: 'Excellent', icon: '</>' },
    { name: 'Physics', score: 84, color: BLUE, status: 'On Track', icon: 'φ' },
    { name: 'Chemistry', score: 78, color: GOLD, status: 'Stable', icon: '⚗' },
    { name: 'Biology', score: 68, color: ORANGE, status: 'Watch', icon: '🧬' },
    { name: 'English', score: 88, color: BLUE, status: 'On Track', icon: 'A' },
  ];

  // Trend chart points (avg score over months)
  const trend = [72, 76, 74, 79, 82, 85, 84, 87];
  const W = 300, H = 60;
  const max = 100, min = 60;
  const pts = trend.map((v, i) => {
    const x = (i / (trend.length - 1)) * W;
    const y = H - ((v - min) / (max - min)) * H;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });

  return (
    <ParentIPadShell activePath="/performance">
      <div style={{ padding: '12px 14px 6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4 }}>
          <span style={{ width: 4, height: 4, borderRadius: 1, background: BLUE }} />
          <span style={{ fontSize: 7, fontWeight: 500, color: TT3, letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>
            Parent · Performance
          </span>
        </div>
        <h1 style={{ fontSize: 22, fontWeight: 300, color: TT1, letterSpacing: '-0.7px', lineHeight: 1.05, margin: 0 }}>
          Performance Analytics
        </h1>
        <div style={{ fontSize: 9, fontWeight: 400, color: TT3, marginTop: 3 }}>
          Detailed breakdown of Aarav's academic progress this term.
        </div>
      </div>

      <div style={{ flex: 1, padding: '6px 12px 12px', overflowY: 'auto', minHeight: 0 }}>
        {/* Hero stat strip */}
        <div style={{
          background: `linear-gradient(135deg, ${BLUE} 0%, ${BLUE_2} 100%)`,
          borderRadius: 12, padding: '10px 12px', color: '#fff',
          marginBottom: 8, position: 'relative', overflow: 'hidden',
          boxShadow: '0 6px 18px rgba(0,85,255,0.25)',
        }}>
          <div style={{ position: 'absolute', top: -20, right: -20, width: 90, height: 90, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 65%)' }} />
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 18, position: 'relative', zIndex: 2 }}>
            <div>
              <div style={{ fontSize: 6, fontWeight: 500, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>Grade</div>
              <div style={{ fontSize: 24, fontWeight: 300, letterSpacing: '-0.8px', lineHeight: 1, marginTop: 3 }}>A</div>
            </div>
            <div>
              <div style={{ fontSize: 6, fontWeight: 500, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>Average</div>
              <div style={{ fontSize: 24, fontWeight: 300, letterSpacing: '-0.8px', lineHeight: 1, marginTop: 3 }}>84.2%</div>
            </div>
            <div>
              <div style={{ fontSize: 6, fontWeight: 500, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>Trend</div>
              <div style={{ fontSize: 16, fontWeight: 400, color: '#6FFFAA', marginTop: 5 }}>↑ 4.6%</div>
            </div>
            <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
              <div style={{ fontSize: 6, fontWeight: 500, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>Class Rank</div>
              <div style={{ fontSize: 18, fontWeight: 400, marginTop: 4 }}>#7 <span style={{ fontSize: 7, color: 'rgba(255,255,255,0.6)' }}>/ 42</span></div>
            </div>
          </div>
        </div>

        {/* Subject cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 7, marginBottom: 8 }}>
          {subjects.map(s => (
            <div key={s.name} style={{ background: '#fff', borderRadius: 10, padding: '8px 10px', boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                <div style={{ width: 22, height: 22, borderRadius: 6, background: `linear-gradient(135deg, ${s.color}, ${s.color}cc)`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 600 }}>
                  {s.icon}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 8, fontWeight: 500, color: TT1, lineHeight: 1.2 }}>{s.name}</div>
                  <div style={{ fontSize: 6, color: TT4, marginTop: 1 }}>Term 2 · 12 tests</div>
                </div>
                <div style={{ fontSize: 13, fontWeight: 400, color: s.color, letterSpacing: '-0.4px' }}>{s.score}</div>
              </div>
              <div style={{ height: 5, background: '#F1F5F9', borderRadius: 3, overflow: 'hidden', marginBottom: 4 }}>
                <div style={{ height: '100%', width: `${s.score}%`, background: `linear-gradient(90deg, ${s.color}, ${s.color}aa)`, borderRadius: 3 }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 6, fontWeight: 500, color: s.color, background: `${s.color}1a`, padding: '2px 6px', borderRadius: 999 }}>{s.status}</span>
                <span style={{ fontSize: 6, color: TT4 }}>vs 76% class avg</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trend chart */}
        <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)', marginBottom: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="2"><polyline points="3 17 9 11 13 15 21 7" /></svg>
            <div style={{ fontSize: 9, fontWeight: 500, color: TT1 }}>Performance Trend</div>
            <div style={{ marginLeft: 'auto', fontSize: 6, fontWeight: 500, color: TT4 }}>Last 8 months</div>
          </div>
          <svg width="100%" height={H + 14} viewBox={`0 0 ${W} ${H + 14}`} preserveAspectRatio="none">
            <defs>
              <linearGradient id="perfGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={BLUE} stopOpacity="0.35" />
                <stop offset="100%" stopColor={BLUE} stopOpacity="0" />
              </linearGradient>
            </defs>
            <polyline points={`0,${H} ${pts.join(' ')} ${W},${H}`} fill="url(#perfGrad)" stroke="none" />
            <polyline points={pts.join(' ')} fill="none" stroke={BLUE} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            {pts.map((p, i) => {
              const [x, y] = p.split(',').map(Number);
              return <circle key={i} cx={x} cy={y} r="1.8" fill="#fff" stroke={BLUE} strokeWidth="1.2" />;
            })}
          </svg>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 2, fontSize: 5.5, color: TT4 }}>
            {['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'].map(m => <span key={m}>{m}</span>)}
          </div>
        </div>

        {/* AI narrative card + Goal setter */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 8 }}>
          <div style={{
            background: `linear-gradient(135deg, #001040 0%, #0B1F3A 50%, #1A2D5A 100%)`,
            borderRadius: 11, padding: 10, color: '#fff', position: 'relative', overflow: 'hidden',
            boxShadow: '0 6px 18px rgba(0,16,64,0.25)',
          }}>
            <div style={{ position: 'absolute', top: -25, right: -25, width: 80, height: 80, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,85,255,0.4) 0%, transparent 65%)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6, position: 'relative', zIndex: 2 }}>
              <div style={{ width: 18, height: 18, borderRadius: 5, background: 'linear-gradient(135deg, #0055FF, #1166FF)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2"><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1" /></svg>
              </div>
              <div style={{ fontSize: 8, fontWeight: 600, letterSpacing: '0.06em' }}>AI Analysis</div>
            </div>
            <div style={{ fontSize: 7.5, lineHeight: 1.5, color: 'rgba(255,255,255,0.85)', position: 'relative', zIndex: 2 }}>
              Aarav is performing <span style={{ color: '#6FFFAA' }}>4.6 pts above</span> class avg. Math & CS are his strongest. Biology dropped 4% this month — recommend focused revision on cell biology.
            </div>
          </div>

          <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
              <div style={{ width: 16, height: 16, borderRadius: 5, background: `linear-gradient(135deg, ${ORANGE}, ${GOLD})`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9 }}>🎯</div>
              <div style={{ fontSize: 8, fontWeight: 500, color: TT1 }}>Goal Setter</div>
            </div>
            <div style={{ fontSize: 6, color: TT4, marginBottom: 4 }}>Target for Biology</div>
            <div style={{ height: 5, background: '#F1F5F9', borderRadius: 3, position: 'relative', marginBottom: 5 }}>
              <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: '68%', background: `linear-gradient(90deg, ${ORANGE}, ${GOLD})`, borderRadius: 3 }} />
              <div style={{ position: 'absolute', left: '85%', top: -2, width: 1.5, height: 9, background: ORANGE }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 6, color: TT4 }}>
              <span>Now: <strong style={{ color: ORANGE }}>68%</strong></span>
              <span>Target: <strong style={{ color: TT1 }}>85%</strong></span>
            </div>
            <div style={{ marginTop: 6, padding: '5px 7px', background: '#FFF6E8', borderRadius: 6, fontSize: 6.5, color: '#8B4400', lineHeight: 1.4 }}>
              <strong>17%</strong> gap. ~3 weeks of focused practice should close it.
            </div>
          </div>
        </div>

        {/* Benchmark insights */}
        <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)', marginTop: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 7 }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
            <div style={{ fontSize: 9, fontWeight: 500, color: TT1 }}>Benchmark vs Class Average</div>
          </div>
          {[
            { name: 'Math', you: 92, avg: 76, color: GREEN },
            { name: 'CS', you: 95, avg: 81, color: GREEN },
            { name: 'Physics', you: 84, avg: 74, color: BLUE },
            { name: 'Biology', you: 68, avg: 72, color: RED },
          ].map((b, i) => (
            <div key={b.name} style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '4px 0', borderBottom: i < 3 ? '0.5px solid #F1F5F9' : 'none' }}>
              <span style={{ fontSize: 7, fontWeight: 500, color: TT1, minWidth: 50 }}>{b.name}</span>
              <div style={{ flex: 1, height: 6, background: '#F1F5F9', borderRadius: 3, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: `${b.you}%`, background: b.color, borderRadius: 3 }} />
                <div style={{ position: 'absolute', left: `${b.avg}%`, top: -1, width: 1.5, height: 8, background: ORANGE }} />
              </div>
              <span style={{ fontSize: 7, fontWeight: 500, color: b.color, minWidth: 24, textAlign: 'right' }}>{b.you}%</span>
            </div>
          ))}
        </div>
      </div>
    </ParentIPadShell>
  );
};

export default ParentPerformanceIPad;
