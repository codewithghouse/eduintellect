/**
 * Static iPad mockup — Parent · Performance Analytics page.
 * Faithful pixel-shrink of parent-dashboard/src/pages/PerformancePage.tsx (desktop).
 *
 * Layout matches source:
 *   1. Toolbar: title "Performance Analytics" + subtitle + Grade badge (gradient, right)
 *   2. Overall Performance hero (white card): title + 3 stat tiles (Grade / Average / Trend)
 *   3. Subject cards grid (4-col): icon + name + grade badge + progress bar + status pill
 *   4. Trend area chart (3-col) + AI Narrative card (2-col)
 */

import ParentIPadShell from './ParentIPadShell';

const ParentPerformanceIPad = () => {
  const B1 = '#0055FF';
  const B2 = '#1166FF';
  const T1 = '#0B0F19';
  const T2 = '#1E2536';
  const T3 = '#5A6275';
  const T4 = '#8C92A4';
  const GREEN = '#00C853';
  const ORANGE = '#FF8800';
  const RED = '#FF3355';
  const BG = '#EEF4FF';
  const BG2 = '#F4F7FE';

  const subjects = [
    { name: 'Mathematics', grade: 'A', progress: 92, status: 'on-track', icon: '∑', accent: '#0055FF' },
    { name: 'Computer Sci', grade: 'A', progress: 95, status: 'on-track', icon: '</>', accent: '#7B3FF4' },
    { name: 'Physics', grade: 'A-', progress: 84, status: 'on-track', icon: 'φ', accent: '#0EAFAE' },
    { name: 'Chemistry', grade: 'B+', progress: 78, status: 'stable', icon: '⚗', accent: '#FFAA00' },
    { name: 'Biology', grade: 'C', progress: 58, status: 'attention', icon: '🧬', accent: '#FF3355' },
    { name: 'English', grade: 'A-', progress: 88, status: 'on-track', icon: 'A', accent: '#FF8800' },
  ];

  // Trend points
  const months = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
  const trend = [76, 79, 81, 83, 85, 87];
  const W = 220, H = 70;
  const min = 60, max = 100;
  const pts = trend.map((v, i) =>
    `${((i / (trend.length - 1)) * W).toFixed(1)},${(H - ((v - min) / (max - min)) * H).toFixed(1)}`
  );

  return (
    <ParentIPadShell activePath="/performance">
      <div style={{ background: BG, flex: 1, overflowY: 'auto', minHeight: 0, padding: '10px 12px 12px', fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif" }}>

        {/* Toolbar */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 7, marginBottom: 8 }}>
          <div>
            <div style={{ fontSize: 16, fontWeight: 800, color: T1, letterSpacing: '-0.5px' }}>Performance Analytics</div>
            <div style={{ fontSize: 7.5, color: T3, marginTop: 2, fontWeight: 500 }}>Detailed breakdown of academic progress</div>
          </div>
          <div style={{ width: 30, height: 30, borderRadius: 8, background: `linear-gradient(135deg, ${B1}, ${B2})`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, boxShadow: `0 4px 14px ${B1}55`, flexShrink: 0 }}>A</div>
        </div>

        {/* Overall Performance hero */}
        <div style={{ background: '#fff', borderRadius: 13, padding: '10px 12px', position: 'relative', overflow: 'hidden', marginBottom: 7, boxShadow: '0 6px 20px rgba(0,85,255,0.10)', border: `0.5px solid ${B1}1a` }}>
          <div style={{ position: 'absolute', top: -25, right: -20, width: 110, height: 110, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,85,255,0.06) 0%, transparent 70%)' }} />
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, position: 'relative', zIndex: 2 }}>
            <div>
              <div style={{ fontSize: 9.5, fontWeight: 800, color: T1, letterSpacing: '-0.2px' }}>Overall Performance</div>
              <div style={{ fontSize: 6.5, color: T3, marginTop: 1, fontWeight: 500 }}>Based on all assessments this term</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4 }}>
              <div style={{ background: BG, borderRadius: 9, padding: '6px 10px', border: `0.5px solid ${B1}1a`, textAlign: 'center', minWidth: 56 }}>
                <div style={{ fontSize: 16, fontWeight: 800, color: B1, letterSpacing: '-0.4px' }}>A</div>
                <div style={{ fontSize: 5, fontWeight: 800, color: T4, letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginTop: 1 }}>Grade</div>
              </div>
              <div style={{ background: BG, borderRadius: 9, padding: '6px 10px', border: `0.5px solid ${B1}1a`, textAlign: 'center', minWidth: 56 }}>
                <div style={{ fontSize: 16, fontWeight: 800, color: T1, letterSpacing: '-0.4px' }}>87%</div>
                <div style={{ fontSize: 5, fontWeight: 800, color: T4, letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginTop: 1 }}>Average</div>
              </div>
              <div style={{ background: BG, borderRadius: 9, padding: '6px 10px', border: `0.5px solid ${B1}1a`, textAlign: 'center', minWidth: 56 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="2.4"><line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 5 19 12" /></svg>
                  <div style={{ fontSize: 13, fontWeight: 800, color: GREEN, letterSpacing: '-0.3px' }}>+4.6%</div>
                </div>
                <div style={{ fontSize: 5, fontWeight: 800, color: T4, letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginTop: 1 }}>Trend</div>
              </div>
            </div>
          </div>
        </div>

        {/* Subject cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6, marginBottom: 7 }}>
          {subjects.map(s => {
            const fill = s.progress < 60
              ? `linear-gradient(90deg, ${RED}, #FF6688)`
              : s.progress < 75
                ? `linear-gradient(90deg, ${ORANGE}, #FFAA33)`
                : `linear-gradient(90deg, ${B1}, #4499FF)`;
            const status = s.status === 'attention' ? { label: 'Needs Attention', color: RED, bg: `${RED}1a` } :
                           s.status === 'stable' ? { label: 'Stable', color: ORANGE, bg: `${ORANGE}1a` } :
                           { label: '✓ On Track', color: '#007830', bg: `${GREEN}1a` };
            return (
              <div key={s.name} style={{ background: '#fff', borderRadius: 10, padding: '7px 9px', position: 'relative', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,85,255,0.06)', border: `0.5px solid ${B1}1a` }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                    <div style={{ width: 18, height: 18, borderRadius: 6, background: `linear-gradient(135deg, ${s.accent}, ${s.accent}cc)`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700, boxShadow: `0 3px 8px ${s.accent}40` }}>
                      {s.icon}
                    </div>
                    <span style={{ fontSize: 7.5, fontWeight: 800, color: T1, letterSpacing: '-0.15px' }}>{s.name}</span>
                  </div>
                  <div style={{ width: 16, height: 16, borderRadius: 5, background: `linear-gradient(135deg, ${B1}, ${B2})`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 6.5, fontWeight: 700, boxShadow: `0 2px 5px ${B1}40` }}>
                    {s.grade}
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
                  <span style={{ fontSize: 5.5, fontWeight: 800, color: T2, letterSpacing: '-0.1px' }}>Progress</span>
                  <span style={{ fontSize: 7, fontWeight: 800, color: B1 }}>{s.progress}%</span>
                </div>
                <div style={{ height: 4, borderRadius: 2, overflow: 'hidden', background: BG2, marginBottom: 4 }}>
                  <div style={{ height: '100%', width: `${s.progress}%`, background: fill, borderRadius: 2 }} />
                </div>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 2, padding: '1.5px 5px', borderRadius: 999, fontSize: 5.5, fontWeight: 800, background: status.bg, color: status.color, border: `0.5px solid ${status.color}33` }}>
                  {status.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Trend chart + AI Narrative */}
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 7 }}>

          {/* Trend chart */}
          <div style={{ background: '#fff', borderRadius: 12, padding: '9px 10px', boxShadow: '0 4px 12px rgba(0,85,255,0.10)', border: `0.5px solid ${B1}1a` }}>
            <div style={{ fontSize: 9, fontWeight: 800, color: T1, letterSpacing: '-0.2px' }}>Performance Trend</div>
            <div style={{ fontSize: 5.5, color: T3, marginTop: 1, marginBottom: 5, fontWeight: 500 }}>Score progression across months</div>
            <svg width="100%" height={H + 14} viewBox={`0 0 ${W} ${H + 14}`} preserveAspectRatio="none">
              <defs>
                <linearGradient id="perfTrend" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={B1} stopOpacity="0.25" />
                  <stop offset="100%" stopColor={B1} stopOpacity="0" />
                </linearGradient>
              </defs>
              {[0, 25, 50, 75, 100].map(g => (
                <line key={g} x1="0" y1={H - (g / 100) * H} x2={W} y2={H - (g / 100) * H} stroke="rgba(0,85,255,0.06)" strokeWidth="0.5" strokeDasharray="2 2" />
              ))}
              <polyline points={`0,${H} ${pts.join(' ')} ${W},${H}`} fill="url(#perfTrend)" stroke="none" />
              <polyline points={pts.join(' ')} fill="none" stroke={B1} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              {pts.map((p, i) => {
                const [x, y] = p.split(',').map(Number);
                return <circle key={i} cx={x} cy={y} r="1.6" fill="#fff" stroke={B1} strokeWidth="1.2" />;
              })}
            </svg>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 1, fontSize: 5, color: T3, fontWeight: 600 }}>
              {months.map(m => <span key={m}>{m}</span>)}
            </div>
          </div>

          {/* AI Narrative */}
          <div style={{
            background: 'linear-gradient(135deg, #050C28 0%, #0A1A52 35%, #0D2BA8 75%, #1438D6 100%)',
            borderRadius: 12, padding: 10, color: '#fff', position: 'relative', overflow: 'hidden',
            boxShadow: '0 8px 22px rgba(0,8,60,0.32)',
          }}>
            <div style={{ position: 'absolute', top: -20, right: -15, width: 70, height: 70, borderRadius: '50%', background: 'radial-gradient(circle, rgba(123,63,244,0.4) 0%, transparent 65%)' }} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 6 }}>
                <div style={{ width: 18, height: 18, borderRadius: 5, background: 'linear-gradient(135deg, #7B3FF4, #0055FF)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4"><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1" /></svg>
                </div>
                <div style={{ fontSize: 7.5, fontWeight: 800, letterSpacing: '0.06em' }}>AI Analysis</div>
              </div>
              <div style={{ fontSize: 7, lineHeight: 1.5, color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>
                Aarav is performing <span style={{ color: '#6FFFAA', fontWeight: 700 }}>4.6 pts above</span> class avg. Math &amp; CS are his strongest. Biology dropped 4% — recommend focused revision on cell biology this week.
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3, marginTop: 6 }}>
                {['Math: A', 'Bio: focus', 'Trend: ↑'].map(p => (
                  <span key={p} style={{ fontSize: 5.5, fontWeight: 700, padding: '2px 6px', borderRadius: 999, background: 'rgba(255,255,255,0.14)', border: '0.5px solid rgba(255,255,255,0.22)', color: 'rgba(255,255,255,0.9)' }}>{p}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ParentIPadShell>
  );
};

export default ParentPerformanceIPad;
