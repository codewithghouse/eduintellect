/**
 * Static iPad mockup — Parent · AI Practice page (home view).
 * Faithful pixel-shrink of parent-dashboard/src/pages/AIPracticePage.tsx (desktop).
 *
 * Layout matches source:
 *   1. Toolbar: green pulse dot eyebrow + h1 "AI Practice Exams" + subtitle
 *      + "USP Feature" pill + avatar
 *   2. Hero Row (3-col): Hero card (col-2) with "AI POWERED" pill, h2 "Practice Smart.",
 *      "+ New Practice Exam" button, 3 stat tiles (Streak/Exams/Best)
 *      + Streak Card (col-1) with flame icon, big "Xd" number, Avg Score bar
 *   3. Main Row (3-col): Practice Calendar (col-2) heatmap + Recent Exams (col-1) list
 */

import ParentIPadShell from './ParentIPadShell';

const ParentAIPracticeIPad = () => {
  const B1 = '#0055FF';
  const B2 = '#1166FF';
  const B4 = '#4499FF';
  const T1 = '#0B0F19';
  const T3 = '#5A6275';
  const T4 = '#8C92A4';
  const GREEN = '#00C853';
  const ORANGE = '#FF8800';
  const RED = '#FF3355';
  const GOLD = '#FFCC22';
  const BG = '#EEF4FF';
  const BG2 = '#F4F7FE';

  // Heatmap: 14 weeks × 7 days
  const heat: number[][] = Array.from({ length: 14 }, (_, w) =>
    Array.from({ length: 7 }, () => {
      const r = Math.random();
      if (w >= 12) return 0; // recent low/none
      if (r > 0.7) return 4;
      if (r > 0.5) return 3;
      if (r > 0.3) return 2;
      if (r > 0.15) return 1;
      return 0;
    })
  );
  // Make recent week active
  heat[13] = [4, 3, 4, 2, 3, 0, 0];
  const heatColor = (n: number) => {
    if (n === 0) return BG2;
    if (n === 1) return 'rgba(0,85,255,0.15)';
    if (n === 2) return 'rgba(0,85,255,0.30)';
    if (n === 3) return 'rgba(0,85,255,0.55)';
    return B1;
  };

  return (
    <ParentIPadShell activePath="/ai-practice">
      <div style={{ background: BG, flex: 1, overflowY: 'auto', minHeight: 0, padding: '10px 12px 12px', fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif" }}>

        {/* Toolbar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 3 }}>
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: GREEN, boxShadow: `0 0 0 2px ${GREEN}33` }} />
              <span style={{ fontSize: 6, fontWeight: 800, color: T4, letterSpacing: '0.14em', textTransform: 'uppercase' as const }}>Parent Dashboard · AI Practice</span>
            </div>
            <h1 style={{ fontSize: 18, fontWeight: 800, color: T1, letterSpacing: '-0.5px', lineHeight: 1, margin: 0 }}>AI Practice Exams</h1>
            <div style={{ fontSize: 7.5, color: T3, marginTop: 3, fontWeight: 500 }}>Upload syllabus, take AI exams, learn from mistakes.</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 3, padding: '3px 7px', borderRadius: 999, background: `${B1}14`, color: B1, fontSize: 5.5, fontWeight: 800, border: `0.5px solid ${B1}38` }}>
              <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1" /></svg>
              USP Feature
            </div>
            <div style={{ width: 22, height: 22, borderRadius: '50%', background: `linear-gradient(140deg, ${B1}, ${B2})`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontWeight: 800, boxShadow: `0 3px 10px ${B1}55, 0 0 0 1.5px #fff` }}>A</div>
          </div>
        </div>

        {/* Hero Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 7, marginBottom: 7 }}>

          {/* Hero card */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(0,85,255,0.10) 0%, rgba(0,85,255,0.03) 100%)',
            borderRadius: 13, padding: '10px 12px', position: 'relative', overflow: 'hidden',
            boxShadow: '0 6px 18px rgba(0,85,255,0.10)',
            border: `0.5px solid ${B1}33`,
          }}>
            <div style={{ position: 'absolute', top: 5, right: 7, opacity: 0.14, lineHeight: 0 }}>
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke={B1} strokeWidth="1.6"><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" /></svg>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, alignItems: 'center', position: 'relative', zIndex: 2 }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 3, padding: '2px 7px', borderRadius: 999, background: `${B1}1a`, border: `0.5px solid ${B1}38`, color: B1, fontSize: 5.5, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase' as const, marginBottom: 5 }}>
                  <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2v4M12 18v4M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1" /></svg>
                  AI Powered
                </div>
                <h2 style={{ fontSize: 18, fontWeight: 800, color: T1, letterSpacing: '-0.5px', lineHeight: 1.05, margin: 0 }}>
                  Practice<br />Smart.
                </h2>
                <p style={{ fontSize: 7, color: T3, marginTop: 5, lineHeight: 1.5, fontWeight: 500 }}>
                  Upload your syllabus and let AI generate personalised exams.
                </p>
                <div style={{
                  marginTop: 7, height: 22, display: 'inline-flex', alignItems: 'center', gap: 4, padding: '0 11px',
                  borderRadius: 8, background: `linear-gradient(135deg, ${B1}, ${B2})`, color: '#fff',
                  fontSize: 7, fontWeight: 800, letterSpacing: '-0.1px',
                  boxShadow: `0 4px 12px ${B1}55`,
                }}>
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                  New Practice Exam
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4 }}>
                {[
                  { icon: '🔥', val: '12d', label: 'Streak', bg: `${ORANGE}1a`, bdr: `${ORANGE}38`, color: ORANGE },
                  { icon: 'bar', val: '47', label: 'Exams', bg: `${B1}14`, bdr: `${B1}33`, color: B1 },
                  { icon: '⭐', val: '94%', label: 'Best', bg: `${GOLD}1f`, bdr: `${GOLD}4d`, color: '#A66800' },
                ].map(s => (
                  <div key={s.label} style={{ borderRadius: 9, padding: '7px 5px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, background: s.bg, border: `0.5px solid ${s.bdr}` }}>
                    <div style={{ fontSize: 13, lineHeight: 1, marginBottom: 1 }}>
                      {s.icon === 'bar' ? <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={B1} strokeWidth="2.2"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg> : s.icon}
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 800, color: T1, letterSpacing: '-0.4px', lineHeight: 1 }}>{s.val}</div>
                    <div style={{ fontSize: 5, fontWeight: 800, color: s.color, letterSpacing: '0.1em', textTransform: 'uppercase' as const }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Streak card */}
          <div style={{ background: '#fff', borderRadius: 13, padding: '10px 11px', position: 'relative', overflow: 'hidden', boxShadow: '0 6px 18px rgba(0,85,255,0.10)', border: `0.5px solid ${B1}1a` }}>
            <div style={{ position: 'absolute', top: -15, right: -10, width: 70, height: 70, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,136,0,0.10) 0%, transparent 70%)' }} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 5 }}>
                <div style={{ width: 26, height: 26, borderRadius: 8, background: `linear-gradient(135deg, ${ORANGE}, ${GOLD})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, boxShadow: '0 3px 10px rgba(255,136,0,0.35)' }}>🔥</div>
                <div>
                  <div style={{ fontSize: 8, fontWeight: 800, color: T1, letterSpacing: '-0.15px' }}>Practice Streak</div>
                  <div style={{ fontSize: 5.5, color: T3, fontWeight: 500 }}>Keep the fire going!</div>
                </div>
              </div>
              <div style={{ fontSize: 22, fontWeight: 800, color: ORANGE, letterSpacing: '-0.7px', lineHeight: 1 }}>
                12<span style={{ fontSize: 11, color: T4 }}>d</span>
              </div>
              <div style={{ marginTop: 8, paddingTop: 6, borderTop: `0.5px solid ${B1}14` }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
                  <span style={{ fontSize: 5.5, fontWeight: 800, color: T4, letterSpacing: '0.1em', textTransform: 'uppercase' as const }}>Avg Score</span>
                  <span style={{ fontSize: 9, fontWeight: 800, color: GREEN }}>82%</span>
                </div>
                <div style={{ height: 4, borderRadius: 2, overflow: 'hidden', background: BG2 }}>
                  <div style={{ height: '100%', width: '82%', background: `linear-gradient(90deg, ${B1}, ${B4})`, borderRadius: 2 }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Row: Calendar + Recent */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 7 }}>

          {/* Practice Calendar */}
          <div style={{ background: '#fff', borderRadius: 12, padding: '9px 11px', boxShadow: '0 4px 12px rgba(0,85,255,0.10)', border: `0.5px solid ${B1}1a` }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
              <div>
                <div style={{ fontSize: 9, fontWeight: 800, color: T1, letterSpacing: '-0.2px' }}>Practice Calendar</div>
                <div style={{ fontSize: 5.5, color: T3, marginTop: 1, fontWeight: 500 }}>47 days practiced this term</div>
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 3, padding: '2px 7px', borderRadius: 999, background: `${ORANGE}1a`, color: '#884400', fontSize: 5.5, fontWeight: 800, border: `0.5px solid ${ORANGE}38` }}>
                🔥 12 day streak
              </div>
            </div>
            {/* Heatmap grid */}
            <div style={{ display: 'flex', gap: 2 }}>
              {heat.map((week, wi) => (
                <div key={wi} style={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1 }}>
                  {week.map((n, di) => (
                    <div key={di} style={{ width: '100%', height: 7, borderRadius: 1.5, background: heatColor(n) }} />
                  ))}
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 6, fontSize: 5.5, fontWeight: 700, color: T4 }}>
              <span>Less</span>
              {[BG2, 'rgba(0,85,255,0.15)', 'rgba(0,85,255,0.30)', 'rgba(0,85,255,0.55)', B1].map((c, i) => (
                <div key={i} style={{ width: 7, height: 7, borderRadius: 1.5, background: c }} />
              ))}
              <span>More</span>
            </div>
          </div>

          {/* Recent Exams */}
          <div style={{ background: '#fff', borderRadius: 12, padding: 9, boxShadow: '0 4px 12px rgba(0,85,255,0.10)', border: `0.5px solid ${B1}1a` }}>
            <div style={{ fontSize: 9, fontWeight: 800, color: T1, letterSpacing: '-0.2px', marginBottom: 6 }}>Recent Exams</div>
            {[
              { title: 'Cell Biology Quiz', date: 'Today', q: 20, pct: 92, status: 'pass' },
              { title: 'Trigonometry Set 3', date: 'Yesterday', q: 15, pct: 86, status: 'pass' },
              { title: 'Newton Drill', date: '2d ago', q: 12, pct: 64, status: 'review' },
              { title: 'Periodic Table', date: '4d ago', q: 25, pct: 42, status: 'fail' },
            ].map(a => {
              const c = a.status === 'pass' ? GREEN : a.status === 'review' ? ORANGE : RED;
              return (
                <div key={a.title} style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '4px 5px', background: BG, borderRadius: 7, border: `0.5px solid ${B1}14`, marginBottom: 4 }}>
                  <div style={{ width: 18, height: 18, borderRadius: 5, background: `${c}1a`, border: `0.5px solid ${c}38`, color: c, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 6.5, fontWeight: 800, color: T1, letterSpacing: '-0.05px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{a.title}</div>
                    <div style={{ fontSize: 5, color: T3, marginTop: 1 }}>{a.date} · {a.q}Q</div>
                  </div>
                  <span style={{ fontSize: 8.5, fontWeight: 800, color: c, letterSpacing: '-0.2px' }}>{a.pct}%</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ParentIPadShell>
  );
};

export default ParentAIPracticeIPad;
