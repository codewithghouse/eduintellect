const SPTabBar = () => (
  <div className="sp-tabbar">
    {['Home', 'Tests', 'Progress', 'Alerts', 'Messages'].map((t, i) => (
      <div key={t} className={`sp-ti ${i === 2 ? 'act' : ''}`}>
        <svg viewBox="0 0 24 24">
          {i === 0 && <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><path d="M9 22V12h6v10" /></>}
          {i === 1 && <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6" /></>}
          {i === 2 && <><path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20V14" /></>}
          {i === 3 && <><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" /></>}
          {i === 4 && <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />}
        </svg>
        <span>{t}</span>
      </div>
    ))}
  </div>
);

const SPHeader = () => (
  <div className="sp-hdr">
    <div className="sp-brand"><div className="sp-live-dot" /><span className="sp-brand-txt">Edullent</span></div>
    <div className="sp-av">T</div>
  </div>
);

const PageHead = ({ sub }: { sub: string }) => (
  <div style={{ padding: '18px 20px 0' }}>
    <div style={{ fontSize: 9, fontWeight: 300, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(40,57,108,.4)', marginBottom: 4 }}>Parent Dashboard</div>
    <div style={{ fontSize: 23, fontWeight: 300, color: '#1a2340', letterSpacing: '-.6px', lineHeight: 1.15 }}>Behaviour &amp;<br />Discipline</div>
    <div style={{ fontSize: 12, color: '#8892b0', marginTop: 3 }}>{sub.split('Tanveer')[0]}<strong style={{ color: '#28396c', fontWeight: 400 }}>Tanveer</strong>{sub.split('Tanveer')[1]}</div>
  </div>
);

const SecLbl = ({ children }: { children: React.ReactNode }) => (
  <div style={{ fontSize: 9, fontWeight: 300, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: 'rgba(40,57,108,.35)', padding: '18px 20px 0', display: 'flex', alignItems: 'center', gap: 8 }}>
    {children}<div style={{ flex: 1, height: '.5px', background: 'rgba(40,57,108,.13)' }} />
  </div>
);

/* ═══════════════════════════════════════════
   SCREEN 1 — OVERVIEW + HIGHLIGHTS
═══════════════════════════════════════════ */
export const BehaviourOverview = () => (
  <div className="sp-wrap">
    <div className="sp-label">Overview & Highlights</div>
    <div className="sp">
      <div className="sp-di" />
      <div className="sp-scroll">
        <SPHeader />
        <PageHead sub="Observations for Tanveer this term" />

        {/* Rating Hero Card */}
        <div style={{ margin: '16px 16px 0', background: 'linear-gradient(140deg,#28396c 0%,#334880 100%)', borderRadius: 24, padding: '20px 18px', position: 'relative', overflow: 'hidden', boxShadow: '0 0 0 .5px rgba(40,57,108,.08), 0 4px 18px rgba(40,57,108,.09), 0 24px 56px rgba(40,57,108,.13)' }}>
          <div style={{ position: 'absolute', top: -40, right: -24, width: 170, height: 170, background: 'radial-gradient(circle,rgba(255,255,255,.08) 0%,transparent 65%)', borderRadius: '50%', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.015) 1px,transparent 1px)', backgroundSize: '22px 22px', pointerEvents: 'none' }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: 9, fontWeight: 300, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.45)', marginBottom: 5, display: 'flex', alignItems: 'center', gap: 7 }}>
              Overall Rating<div style={{ flex: 1, height: '.5px', background: 'rgba(255,255,255,.1)' }} />
            </div>
            <div style={{ fontSize: 16, fontWeight: 300, color: '#fff', letterSpacing: '-.3px', marginBottom: 3 }}>Overall Behavior Rating</div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,.5)', marginBottom: 18 }}>Based on teacher observations this term</div>

            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 18, marginBottom: 16 }}>
              <div style={{ fontSize: 52, fontWeight: 300, color: '#fff', letterSpacing: '-2px', lineHeight: 1 }}>5.0<span style={{ fontSize: 20, color: 'rgba(255,255,255,.5)', fontWeight: 500 }}>/5</span></div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <div style={{ display: 'flex', gap: 3 }}>
                  {[0, 1, 2, 3, 4].map(i => <span key={i} style={{ fontSize: 18, lineHeight: 1 }}>⭐</span>)}
                </div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,.4)', fontWeight: 400, letterSpacing: '.04em' }}>Perfect Score</div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 1, background: 'rgba(255,255,255,.07)', borderRadius: 14, overflow: 'hidden' }}>
              {[
                { icon: '🏆', val: 'Excellent', lbl: 'Conduct' },
                { icon: '📚', val: 'Active', lbl: 'Engagement' },
                { icon: '🤝', val: 'Positive', lbl: 'Teamwork' },
              ].map(c => (
                <div key={c.lbl} style={{ background: 'rgba(255,255,255,.04)', padding: '11px 10px', display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center' }}>
                  <div style={{ fontSize: 16 }}>{c.icon}</div>
                  <div style={{ fontSize: 11, fontWeight: 300, color: '#fff', lineHeight: 1 }}>{c.val}</div>
                  <div style={{ fontSize: 8, fontWeight: 300, letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,.38)' }}>{c.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Monthly Summary */}
        <SecLbl>Monthly Summary</SecLbl>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, margin: '10px 16px 0' }}>
          {[
            { val: '3', lbl: 'Positives', color: '#1e9a5a', bg: 'rgba(46,188,113,.1)', bdr: 'rgba(46,188,113,.2)', stroke: '#2ebc71', icon: <><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></>, glow: 'rgba(46,188,113,.16)' },
            { val: '0', lbl: 'Incidents', color: '#28396c', bg: 'rgba(40,57,108,.08)', bdr: 'rgba(40,57,108,.13)', stroke: '#28396c', icon: <><circle cx="12" cy="12" r="10" /><line x1="8" y1="12" x2="16" y2="12" /></>, glow: 'rgba(40,57,108,.12)' },
            { val: '5.0', lbl: 'Avg Rating', color: '#c8a010', bg: 'rgba(245,197,66,.12)', bdr: 'rgba(245,197,66,.25)', stroke: '#c8a010', icon: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />, glow: 'rgba(245,197,66,.16)' },
            { val: 'A+', lbl: 'Attitude', color: '#5b6fd4', bg: 'rgba(91,111,212,.1)', bdr: 'rgba(91,111,212,.2)', stroke: '#5b6fd4', icon: <><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></>, glow: 'rgba(91,111,212,.14)' },
          ].map(c => (
            <div key={c.lbl} style={{ background: '#fff', borderRadius: 18, padding: '14px 12px', boxShadow: '0 0 0 .5px rgba(40,57,108,.06), 0 2px 8px rgba(40,57,108,.06)', border: '.5px solid rgba(40,57,108,.06)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: -14, right: -14, width: 56, height: 56, borderRadius: '50%', background: `radial-gradient(circle,${c.glow} 0%,transparent 70%)`, opacity: 0.5, pointerEvents: 'none' }} />
              <div style={{ width: 30, height: 30, borderRadius: 9, background: c.bg, border: `.5px solid ${c.bdr}`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={c.stroke} strokeWidth="2.2" strokeLinecap="round">{c.icon}</svg>
              </div>
              <div style={{ fontSize: 22, fontWeight: 300, letterSpacing: '-.5px', lineHeight: 1, color: c.color, position: 'relative', zIndex: 1 }}>{c.val}</div>
              <div style={{ fontSize: 9, fontWeight: 300, letterSpacing: '.07em', textTransform: 'uppercase', marginTop: 3, color: c.color, position: 'relative', zIndex: 1 }}>{c.lbl}</div>
            </div>
          ))}
        </div>

        {/* Positive Highlights */}
        <SecLbl>Positive Highlights</SecLbl>
        <div style={{ margin: '10px 16px 0', background: '#fff', borderRadius: 22, padding: '16px 18px', boxShadow: '0 0 0 .5px rgba(40,57,108,.06), 0 2px 8px rgba(40,57,108,.06), 0 10px 28px rgba(40,57,108,.08)', border: '.5px solid rgba(40,57,108,.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 14 }}>
            <div style={{ width: 34, height: 34, borderRadius: 11, background: 'rgba(245,197,66,.12)', border: '.5px solid rgba(245,197,66,.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#c8a010" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" /></svg>
            </div>
            <div style={{ fontSize: 15, fontWeight: 300, color: '#1a2340', letterSpacing: '-.3px' }}>Positive Highlights</div>
            <div style={{ marginLeft: 'auto', fontSize: 12, fontWeight: 300, color: '#c8a010', background: 'rgba(245,197,66,.12)', border: '.5px solid rgba(245,197,66,.25)', padding: '3px 9px', borderRadius: 100 }}>3</div>
          </div>

          {[
            { title: 'Academic Excellence', date: 'Apr 1, 2026 · Jamal Sir', badge: 'Star', bg: 'linear-gradient(135deg,rgba(245,197,66,.07),rgba(245,197,66,.03))', bdr: 'rgba(245,197,66,.25)', icoBg: 'rgba(245,197,66,.12)', icoBdr: 'rgba(245,197,66,.25)', stroke: '#c8a010', color: '#c8a010', icon: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /> },
            { title: 'Effort & Dedication', date: 'Apr 1, 2026 · Pasha Sir', badge: 'Effort', bg: 'linear-gradient(135deg,rgba(46,188,113,.07),rgba(46,188,113,.03))', bdr: 'rgba(46,188,113,.2)', icoBg: 'rgba(46,188,113,.1)', icoBdr: 'rgba(46,188,113,.2)', stroke: '#2ebc71', color: '#1e9a5a', icon: <><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" /></> },
            { title: 'Creative Thinking', date: 'Apr 1, 2026 · Jamal Sir', badge: 'Idea', bg: 'linear-gradient(135deg,rgba(91,111,212,.07),rgba(91,111,212,.03))', bdr: 'rgba(91,111,212,.2)', icoBg: 'rgba(91,111,212,.1)', icoBdr: 'rgba(91,111,212,.2)', stroke: '#5b6fd4', color: '#5b6fd4', icon: <><line x1="9" y1="18" x2="15" y2="18" /><line x1="10" y1="22" x2="14" y2="22" /><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1.45.56 2.75 1.5 3.5.76.76 1.23 1.52 1.41 2.5" /></> },
          ].map((r, i, arr) => (
            <div key={r.title} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '10px 12px', borderRadius: 14, background: r.bg, border: `.5px solid ${r.bdr}`, marginBottom: i < arr.length - 1 ? 7 : 0 }}>
              <div style={{ width: 32, height: 32, borderRadius: 10, background: r.icoBg, border: `.5px solid ${r.icoBdr}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={r.stroke} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">{r.icon}</svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, fontWeight: 300, color: '#1a2340', letterSpacing: '-.2px' }}>{r.title}</div>
                <div style={{ fontSize: 10, color: '#8892b0', marginTop: 2 }}>{r.date}</div>
              </div>
              <div style={{ padding: '3px 9px', borderRadius: 100, fontSize: 9, fontWeight: 300, background: r.icoBg, color: r.color, border: `.5px solid ${r.icoBdr}`, flexShrink: 0 }}>{r.badge}</div>
            </div>
          ))}
        </div>

        <div style={{ height: 20 }} />
      </div>
      <SPTabBar />
    </div>
  </div>
);

/* ═══════════════════════════════════════════
   SCREEN 2 — IMPROVEMENT + TREND
═══════════════════════════════════════════ */
export const BehaviourTrend = () => (
  <div className="sp-wrap">
    <div className="sp-label">Improvement & Trend</div>
    <div className="sp">
      <div className="sp-di" />
      <div className="sp-scroll">
        <SPHeader />
        <PageHead sub="Trend & Improvement for Tanveer" />

        {/* Areas for Improvement */}
        <SecLbl>Areas for Improvement</SecLbl>
        <div style={{ margin: '10px 16px 0', background: '#fff', borderRadius: 20, padding: '16px 18px', boxShadow: '0 0 0 .5px rgba(40,57,108,.06), 0 2px 8px rgba(40,57,108,.06), 0 10px 28px rgba(40,57,108,.08)', border: '.5px solid rgba(40,57,108,.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 12 }}>
            <div style={{ width: 34, height: 34, borderRadius: 11, background: 'rgba(245,156,42,.1)', border: '.5px solid rgba(245,156,42,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#f59c2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
            </div>
            <div style={{ fontSize: 15, fontWeight: 300, color: '#1a2340', letterSpacing: '-.3px' }}>Areas for Improvement</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 9, padding: 14 }}>
            <div style={{ width: 50, height: 50, borderRadius: 16, background: 'rgba(46,188,113,.1)', border: '.5px solid rgba(46,188,113,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 0 5px rgba(46,188,113,.04)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2ebc71" strokeWidth="2" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
            </div>
            <div style={{ fontSize: 13, fontWeight: 300, color: '#1e9a5a', textAlign: 'center' }}>No areas for improvement!</div>
            <div style={{ fontSize: 11, color: '#8892b0', textAlign: 'center', lineHeight: 1.55 }}>No improvement areas recorded this term.<br />Tanveer is doing great — keep it up!</div>
          </div>
        </div>

        {/* Behavior Trend Chart */}
        <SecLbl>Behaviour Trend</SecLbl>
        <div style={{ margin: '10px 16px 0', background: '#fff', borderRadius: 22, padding: 18, boxShadow: '0 0 0 .5px rgba(40,57,108,.06), 0 2px 8px rgba(40,57,108,.06)', border: '.5px solid rgba(40,57,108,.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
            <div style={{ fontSize: 15, fontWeight: 300, color: '#1a2340', letterSpacing: '-.3px' }}>Behavior Trend</div>
            <div style={{ fontSize: 10, fontWeight: 300, color: '#1e9a5a', background: 'rgba(46,188,113,.1)', border: '.5px solid rgba(46,188,113,.2)', padding: '4px 10px', borderRadius: 100, display: 'flex', alignItems: 'center', gap: 3 }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
              Improving
            </div>
          </div>

          <div style={{ position: 'relative', height: 150 }}>
            <svg viewBox="0 0 310 150" style={{ width: '100%', height: '100%' }} xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="behNavyGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#28396C" stopOpacity=".18" />
                  <stop offset="100%" stopColor="#28396C" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="behLineGrad" x1="0" y1="0" x2="100%" y2="0">
                  <stop offset="0%" stopColor="#334880" />
                  <stop offset="100%" stopColor="#28396C" />
                </linearGradient>
              </defs>
              <text x="4" y="18" fontSize="8" fill="#C0C8DC" fontFamily="DM Sans,sans-serif">5</text>
              <text x="4" y="51" fontSize="8" fill="#C0C8DC" fontFamily="DM Sans,sans-serif">4</text>
              <text x="4" y="84" fontSize="8" fill="#C0C8DC" fontFamily="DM Sans,sans-serif">3</text>
              <text x="4" y="117" fontSize="8" fill="#C0C8DC" fontFamily="DM Sans,sans-serif">2</text>
              <text x="4" y="142" fontSize="8" fill="#C0C8DC" fontFamily="DM Sans,sans-serif">1</text>
              <line x1="24" y1="15" x2="304" y2="15" stroke="#EDE5D4" strokeWidth=".5" />
              <line x1="24" y1="48" x2="304" y2="48" stroke="#EDE5D4" strokeWidth=".5" />
              <line x1="24" y1="81" x2="304" y2="81" stroke="#EDE5D4" strokeWidth=".5" />
              <line x1="24" y1="114" x2="304" y2="114" stroke="#EDE5D4" strokeWidth=".5" />
              <polygon fill="url(#behNavyGrad)" points="40,48 115,48 190,30 285,15 285,138 40,138" />
              <polyline fill="none" stroke="url(#behLineGrad)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" points="40,48 115,48 190,30 285,15" />
              <circle cx="40" cy="48" r="4.5" fill="#28396C" stroke="white" strokeWidth="2" />
              <circle cx="115" cy="48" r="4.5" fill="white" stroke="#28396C" strokeWidth="2" />
              <circle cx="190" cy="30" r="4.5" fill="white" stroke="#28396C" strokeWidth="2" />
              <circle cx="285" cy="15" r="5.5" fill="#28396C" stroke="white" strokeWidth="2.5" />
              <rect x="250" y="20" width="50" height="26" rx="8" fill="white" />
              <rect x="250" y="20" width="50" height="26" rx="8" fill="none" stroke="rgba(40,57,108,0.08)" strokeWidth=".5" />
              <text x="275" y="30" fontSize="7.5" fill="#8892B0" fontFamily="DM Sans,sans-serif" textAnchor="middle">Apr</text>
              <text x="275" y="41" fontSize="10" fill="#28396C" fontFamily="DM Sans,sans-serif" textAnchor="middle" fontWeight="700">5.0 ⭐</text>
              <text x="33" y="144" fontSize="7.5" fill="#C0C8DC" fontFamily="DM Sans,sans-serif">Jan</text>
              <text x="108" y="144" fontSize="7.5" fill="#C0C8DC" fontFamily="DM Sans,sans-serif">Feb</text>
              <text x="183" y="144" fontSize="7.5" fill="#C0C8DC" fontFamily="DM Sans,sans-serif">Mar</text>
              <text x="278" y="144" fontSize="7.5" fill="#C0C8DC" fontFamily="DM Sans,sans-serif">Apr</text>
            </svg>
          </div>

          <div style={{ display: 'flex', gap: 12, marginTop: 10, alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 10, fontWeight: 400, color: '#4a5578' }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#28396c' }} />
              Behavior Rating
            </div>
            <div style={{ marginLeft: 'auto', color: '#1e9a5a', display: 'flex', alignItems: 'center', gap: 3, fontSize: 10, fontWeight: 400 }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
              4.0 → 5.0
            </div>
          </div>
        </div>

        {/* Teacher Comments */}
        <SecLbl>Teacher Comments</SecLbl>
        <div style={{ margin: '10px 16px 0', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { initials: 'JS', color: 'linear-gradient(140deg,#1a6b50,#2ebc71)', name: 'Jamal Sir', meta: 'Apr 1, 2026 · Class Teacher', text: '"Tanveer consistently shows excellent conduct, participates actively in class, and is a positive influence on peers."' },
            { initials: 'PS', color: 'linear-gradient(140deg,#1e2d57,#3d5494)', name: 'Pasha Sir', meta: 'Apr 1, 2026 · Islamic Read', text: '"Tanveer is attentive, respectful and shows dedication. A wonderful student to teach."' },
          ].map(c => (
            <div key={c.name} style={{ background: '#fff', borderRadius: 16, padding: '14px 16px', boxShadow: '0 0 0 .5px rgba(40,57,108,.06), 0 2px 8px rgba(40,57,108,.06)', border: '.5px solid rgba(40,57,108,.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 9 }}>
                <div style={{ width: 32, height: 32, borderRadius: 10, background: c.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 300, color: '#fff', flexShrink: 0 }}>{c.initials}</div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 300, color: '#1a2340', letterSpacing: '-.2px' }}>{c.name}</div>
                  <div style={{ fontSize: 10, color: '#8892b0', marginTop: 1 }}>{c.meta}</div>
                </div>
                <div style={{ marginLeft: 'auto', display: 'flex', gap: 1 }}>
                  {[0, 1, 2, 3, 4].map(i => <span key={i} style={{ fontSize: 12 }}>⭐</span>)}
                </div>
              </div>
              <div style={{ fontSize: 12, color: '#4a5578', lineHeight: 1.65 }}>{c.text}</div>
            </div>
          ))}
        </div>

        <div style={{ height: 20 }} />
      </div>
      <SPTabBar />
    </div>
  </div>
);
