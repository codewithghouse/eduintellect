/**
 * Static iPad mockup — Parent · AI Practice page.
 * Streak hero + practice heatmap + recent sessions + completed exam attempts.
 */

import ParentIPadShell from './ParentIPadShell';

const ParentAIPracticeIPad = () => {
  const BLUE = '#0055FF';
  const TT1 = '#001040';
  const TT3 = '#5070B0';
  const TT4 = '#99AACC';
  const GREEN = '#00C853';
  const ORANGE = '#FF8800';
  const RED = '#FF3355';
  const GOLD = '#FFAA00';

  // 6 weeks × 7 days heat map (intensity 0–4)
  const heat: number[][] = [
    [0, 1, 2, 1, 3, 4, 2],
    [1, 2, 3, 2, 4, 3, 1],
    [2, 3, 4, 3, 2, 4, 3],
    [3, 4, 3, 4, 3, 2, 4],
    [2, 3, 4, 3, 4, 4, 3],
    [3, 4, 4, 3, 4, 0, 0],
  ];
  const heatColor = (n: number) => {
    if (n === 0) return '#F1F5F9';
    if (n === 1) return '#D9F2E2';
    if (n === 2) return '#9FE1B8';
    if (n === 3) return '#42C77A';
    return '#00A040';
  };

  return (
    <ParentIPadShell activePath="/ai-practice">
      <div style={{ padding: '12px 14px 6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4 }}>
          <span style={{ width: 4, height: 4, borderRadius: 1, background: BLUE }} />
          <span style={{ fontSize: 7, fontWeight: 500, color: TT3, letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>
            Parent · AI Practice
          </span>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 4, padding: '2px 7px', background: '#E8FBEF', borderRadius: 999 }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: GREEN, boxShadow: `0 0 6px ${GREEN}` }} />
            <span style={{ fontSize: 6, fontWeight: 500, color: GREEN }}>AI READY</span>
          </div>
        </div>
        <h1 style={{ fontSize: 22, fontWeight: 300, color: TT1, letterSpacing: '-0.7px', lineHeight: 1.05, margin: 0 }}>
          AI Practice
        </h1>
        <div style={{ fontSize: 9, fontWeight: 400, color: TT3, marginTop: 3 }}>
          Personalised drill on weak topics — generated fresh from your textbook.
        </div>
      </div>

      <div style={{ flex: 1, padding: '6px 12px 12px', overflowY: 'auto', minHeight: 0 }}>
        {/* Streak hero */}
        <div style={{
          background: `linear-gradient(135deg, ${ORANGE} 0%, ${GOLD} 100%)`,
          borderRadius: 12, padding: '10px 12px', color: '#fff',
          marginBottom: 8, position: 'relative', overflow: 'hidden',
          boxShadow: '0 6px 18px rgba(255,136,0,0.25)',
          display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <div style={{ position: 'absolute', top: -25, right: -25, width: 100, height: 100, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.25) 0%, transparent 65%)' }} />
          <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, position: 'relative', zIndex: 2 }}>🔥</div>
          <div style={{ flex: 1, position: 'relative', zIndex: 2 }}>
            <div style={{ fontSize: 7, fontWeight: 500, color: 'rgba(255,255,255,0.8)', letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>Practice Streak</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 5, marginTop: 2 }}>
              <span style={{ fontSize: 26, fontWeight: 300, letterSpacing: '-1px', lineHeight: 1 }}>12</span>
              <span style={{ fontSize: 10, fontWeight: 400 }}>days</span>
            </div>
            <div style={{ fontSize: 7, color: 'rgba(255,255,255,0.7)', marginTop: 2 }}>Best ever: 18 days · Keep going!</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, position: 'relative', zIndex: 2, alignItems: 'flex-end' }}>
            <div style={{ display: 'flex', gap: 5 }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 14, fontWeight: 400, lineHeight: 1 }}>47</div>
                <div style={{ fontSize: 5.5, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginTop: 2 }}>Attempts</div>
              </div>
              <div style={{ width: 0.5, background: 'rgba(255,255,255,0.3)' }} />
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 14, fontWeight: 400, lineHeight: 1 }}>82%</div>
                <div style={{ fontSize: 5.5, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginTop: 2 }}>Avg Score</div>
              </div>
              <div style={{ width: 0.5, background: 'rgba(255,255,255,0.3)' }} />
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 14, fontWeight: 400, lineHeight: 1 }}>28</div>
                <div style={{ fontSize: 5.5, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginTop: 2 }}>Topics</div>
              </div>
            </div>
            <div style={{ fontSize: 6, fontWeight: 500, color: '#fff', background: 'rgba(255,255,255,0.18)', padding: '3px 8px', borderRadius: 999 }}>+ Generate Practice</div>
          </div>
        </div>

        {/* Practice heatmap */}
        <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)', marginBottom: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 7 }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="2"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg>
            <div style={{ fontSize: 9, fontWeight: 500, color: TT1 }}>Practice Calendar</div>
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 4, fontSize: 5.5, color: TT4 }}>
              <span>Less</span>
              {[0, 1, 2, 3, 4].map(n => <div key={n} style={{ width: 6, height: 6, borderRadius: 1.5, background: heatColor(n) }} />)}
              <span>More</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 7, alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 1.5, fontSize: 5, color: TT4, paddingTop: 2 }}>
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => <div key={d} style={{ height: 8 }}>{d}</div>)}
            </div>
            <div style={{ display: 'flex', gap: 1.5, flex: 1 }}>
              {heat.map((week, w) => (
                <div key={w} style={{ display: 'flex', flexDirection: 'column', gap: 1.5, flex: 1 }}>
                  {week.map((n, d) => (
                    <div key={d} style={{ height: 8, background: heatColor(n), borderRadius: 1.5 }} />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4, fontSize: 5.5, color: TT4 }}>
            {['6 wks ago', '5w', '4w', '3w', '2w', 'This week'].map(m => <span key={m}>{m}</span>)}
          </div>
        </div>

        {/* 2-col: Recent sessions + Completed attempts */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 8 }}>
          {/* Recent sessions */}
          <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 7 }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
              <div style={{ fontSize: 9, fontWeight: 500, color: TT1 }}>Recent Sources</div>
            </div>
            {[
              { name: 'Bio_Ch7_Cells.pdf', meta: '24 pages · 8 topics', when: 'Today' },
              { name: 'Math_Trig.pdf', meta: '18 pages · 5 topics', when: 'Yesterday' },
              { name: 'Phys_Mechanics.pdf', meta: '32 pages · 11 topics', when: '2d ago' },
              { name: 'Chem_Periodic.pdf', meta: '14 pages · 4 topics', when: '4d ago' },
            ].map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '5px 0', borderBottom: i < 3 ? '0.5px solid #F1F5F9' : 'none' }}>
                <div style={{ width: 18, height: 22, borderRadius: 3, background: `linear-gradient(135deg, ${RED}, #FF6677)`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 5, fontWeight: 600 }}>PDF</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 7, fontWeight: 500, color: TT1, lineHeight: 1.2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.name}</div>
                  <div style={{ fontSize: 5.5, color: TT4, marginTop: 1 }}>{s.meta}</div>
                </div>
                <div style={{ fontSize: 5.5, color: TT4 }}>{s.when}</div>
              </div>
            ))}
          </div>

          {/* Completed exams */}
          <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 7 }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" /></svg>
              <div style={{ fontSize: 9, fontWeight: 500, color: TT1 }}>Completed Attempts</div>
            </div>
            {[
              { name: 'Cell Biology Quiz', score: 92, color: GREEN },
              { name: 'Trigonometry Set 3', score: 86, color: GREEN },
              { name: 'Newton\'s Laws Drill', score: 78, color: BLUE },
              { name: 'Periodic Table Test', score: 64, color: ORANGE },
            ].map((e, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '5px 0', borderBottom: i < 3 ? '0.5px solid #F1F5F9' : 'none' }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 7, fontWeight: 500, color: TT1, lineHeight: 1.2 }}>{e.name}</div>
                  <div style={{ fontSize: 5.5, color: TT4, marginTop: 1 }}>20 questions</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <div style={{ width: 26, height: 26, borderRadius: '50%', background: `${e.color}1a`, color: e.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontWeight: 500 }}>{e.score}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dark summary card */}
        <div style={{
          background: `linear-gradient(135deg, ${BLUE} 0%, #1166FF 100%)`,
          borderRadius: 11, padding: 10, color: '#fff', position: 'relative', overflow: 'hidden',
          boxShadow: '0 6px 18px rgba(0,85,255,0.25)',
        }}>
          <div style={{ position: 'absolute', top: -25, right: -25, width: 90, height: 90, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 65%)' }} />
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', zIndex: 2 }}>
            <div>
              <div style={{ fontSize: 6, fontWeight: 500, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.18em', textTransform: 'uppercase' as const, marginBottom: 3 }}>Total Practice</div>
              <div style={{ fontSize: 7, color: 'rgba(255,255,255,0.85)', maxWidth: 180, lineHeight: 1.4 }}>
                Aarav has practiced <strong style={{ color: '#FFD700' }}>47 sets</strong> covering <strong>28 topics</strong> this term. AI is generating fresh sets every 24h on weak areas.
              </div>
            </div>
            <div style={{ display: 'flex', gap: 14 }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 18, fontWeight: 300, lineHeight: 1, letterSpacing: '-0.5px' }}>47</div>
                <div style={{ fontSize: 5.5, color: 'rgba(255,255,255,0.65)', letterSpacing: '0.14em', textTransform: 'uppercase' as const, marginTop: 2 }}>Sets</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 18, fontWeight: 300, lineHeight: 1, letterSpacing: '-0.5px', color: '#6FFFAA' }}>82%</div>
                <div style={{ fontSize: 5.5, color: 'rgba(255,255,255,0.65)', letterSpacing: '0.14em', textTransform: 'uppercase' as const, marginTop: 2 }}>Avg</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 18, fontWeight: 300, lineHeight: 1, letterSpacing: '-0.5px' }}>28</div>
                <div style={{ fontSize: 5.5, color: 'rgba(255,255,255,0.65)', letterSpacing: '0.14em', textTransform: 'uppercase' as const, marginTop: 2 }}>Topics</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ParentIPadShell>
  );
};

export default ParentAIPracticeIPad;
