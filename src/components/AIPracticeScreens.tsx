/* ── Shared SP Tab Bar (Tests highlighted) ── */
const SPTabBar = () => (
  <div className="sp-tabbar">
    {['Home', 'Tests', 'Progress', 'Alerts', 'Messages'].map((t, i) => (
      <div key={t} className={`sp-ti ${i === 1 ? 'act' : ''}`}>
        <svg viewBox="0 0 24 24">
          {i === 0 && <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><path d="M9 22V12h6v10" /></>}
          {i === 1 && <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6" /><path d="M16 13H8" /></>}
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
    <div className="sp-brand">
      <div className="sp-live-dot" />
      <span className="sp-brand-txt">EduIntellect</span>
    </div>
    <div className="sp-av">T</div>
  </div>
);

/* ═══════════════════════════════════════════
   SCREEN 1 — AI PRACTICE EXAMS (HOME)
═══════════════════════════════════════════ */
export const AIPracticeHome = () => {
  // Generate heatmap cells: 108 cells (18 cols × 6 rows), last one is "today"
  const cells = Array(108).fill(null).map((_, i) => i === 107 ? 'today' : null);

  return (
    <div className="sp-wrap">
      <div className="sp-label">AI Practice Exams</div>
      <div className="sp">
        <div className="sp-di" />
        <div className="sp-scroll">
          <SPHeader />

          {/* Hero Card */}
          <div style={{ margin: '16px 16px 0', borderRadius: 24, background: 'linear-gradient(140deg,#28396c 0%,#334880 60%,#4a5db8 100%)', padding: '20px 20px 22px', position: 'relative', overflow: 'hidden', boxShadow: '0 0 0 .5px rgba(40,57,108,.08), 0 4px 18px rgba(40,57,108,.09), 0 24px 56px rgba(40,57,108,.13)' }}>
            <div style={{ position: 'absolute', top: -40, right: -24, width: 180, height: 180, background: 'radial-gradient(circle,rgba(255,255,255,.09) 0%,transparent 65%)', borderRadius: '50%', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: -30, left: -10, width: 140, height: 140, background: 'radial-gradient(circle,rgba(91,111,212,.2) 0%,transparent 65%)', borderRadius: '50%', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,.016) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.016) 1px,transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 10px', borderRadius: 100, background: 'rgba(255,255,255,.14)', border: '.5px solid rgba(255,255,255,.22)', fontSize: 9, fontWeight: 700, color: '#fff', letterSpacing: '.04em', marginBottom: 14 }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                AI POWERED · USP Feature
              </div>
              <div style={{ fontSize: 26, fontWeight: 700, color: '#fff', letterSpacing: '-.7px', lineHeight: 1.12, marginBottom: 6 }}>AI Practice<br />Exams</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,.55)', lineHeight: 1.5, marginBottom: 18 }}>Upload syllabus, take AI exams,<br />learn from mistakes.</div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6 }}>
                {[
                  { icon: '🔥', val: '0d', lbl: 'Streak' },
                  { icon: '📝', val: '0', lbl: 'Exams' },
                  { icon: '⭐', val: '—', lbl: 'Best' },
                ].map(s => (
                  <div key={s.lbl} style={{ background: 'rgba(255,255,255,.1)', border: '.5px solid rgba(255,255,255,.16)', borderRadius: 16, padding: '12px 8px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                    <div style={{ fontSize: 20, lineHeight: 1 }}>{s.icon}</div>
                    <div style={{ fontSize: 18, fontWeight: 700, color: '#fff', letterSpacing: '-.4px', lineHeight: 1 }}>{s.val}</div>
                    <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.45)' }}>{s.lbl}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Streak Banner */}
          <div style={{ margin: '12px 16px 0', display: 'flex', alignItems: 'center', gap: 12, background: 'linear-gradient(135deg,rgba(245,197,66,.08),rgba(245,197,66,.04))', borderRadius: 16, padding: '12px 16px', border: '.5px solid rgba(245,197,66,.2)' }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(245,197,66,.12)', border: '.5px solid rgba(245,197,66,.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>🔥</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#1a2340', letterSpacing: '-.2px' }}>Practice Streak</div>
              <div style={{ fontSize: 11, color: '#8892b0', marginTop: 2 }}>Start today to build your streak!</div>
            </div>
            <div style={{ fontSize: 22, fontWeight: 700, color: '#f5c542', letterSpacing: '-.5px' }}>0d</div>
          </div>

          {/* Practice Calendar */}
          <div style={{ margin: '14px 16px 0', background: '#fff', borderRadius: 20, padding: '16px 18px', boxShadow: '0 0 0 .5px rgba(40,57,108,.06), 0 2px 8px rgba(40,57,108,.06), 0 10px 28px rgba(40,57,108,.08)', border: '.5px solid rgba(40,57,108,.06)' }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#1a2340', letterSpacing: '-.3px' }}>Practice Calendar</div>
            <div style={{ fontSize: 11, color: '#8892b0', marginTop: 2 }}>0 days practiced this year</div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(18,1fr)', gap: 3, marginTop: 14 }}>
              {cells.map((c, i) => (
                <div key={i} style={{
                  aspectRatio: '1',
                  borderRadius: 3,
                  background: c === 'today' ? '#28396c' : '#ede5d4',
                  boxShadow: c === 'today' ? '0 0 0 2px rgba(40,57,108,.3), 0 0 0 4px rgba(40,57,108,.1)' : 'none',
                }} />
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 10, paddingTop: 10, borderTop: '.5px solid rgba(40,57,108,.07)' }}>
              <span style={{ fontSize: 9, color: '#c0c8dc', fontWeight: 500 }}>Less</span>
              <div style={{ display: 'flex', gap: 2 }}>
                {['#ede5d4', 'rgba(40,57,108,.15)', 'rgba(40,57,108,.3)', 'rgba(40,57,108,.5)', '#28396c'].map((bg, i) => (
                  <div key={i} style={{ width: 10, height: 10, borderRadius: 2, background: bg }} />
                ))}
              </div>
              <span style={{ fontSize: 9, color: '#c0c8dc', fontWeight: 500 }}>More</span>
            </div>
          </div>

          {/* New Practice Exam Button */}
          <div style={{ margin: '14px 16px 0', background: 'linear-gradient(135deg,#28396c,#1e2d57)', borderRadius: 16, padding: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontSize: 14, fontWeight: 700, color: '#fff', letterSpacing: '-.1px', position: 'relative', overflow: 'hidden', boxShadow: '0 6px 24px rgba(40,57,108,.28), 0 2px 8px rgba(0,0,0,.1)' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(255,255,255,.1) 0%,transparent 55%)' }} />
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" style={{ position: 'relative', zIndex: 1 }}><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg>
            <span style={{ position: 'relative', zIndex: 1 }}>New Practice Exam</span>
          </div>

          {/* Recent Exams label */}
          <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(40,57,108,.35)', padding: '16px 20px 0', display: 'flex', alignItems: 'center', gap: 8 }}>
            Recent Exams<div style={{ flex: 1, height: '.5px', background: 'rgba(40,57,108,.13)' }} />
          </div>

          {/* Exam cards */}
          <div style={{ margin: '10px 16px 0', display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              { name: 'English Mid-Term', meta: 'Apr 10 · 25 questions', pct: '88%', chip: 'Passed', pctColor: '#1e9a5a', bg: 'rgba(46,188,113,.1)', bdr: 'rgba(46,188,113,.2)', stroke: '#2ebc71' },
              { name: 'Islamic Studies Quiz', meta: 'Apr 6 · 15 questions', pct: '72%', chip: 'Review', pctColor: '#f59c2a', bg: 'rgba(245,156,42,.1)', bdr: 'rgba(245,156,42,.2)', stroke: '#f59c2a' },
            ].map(e => (
              <div key={e.name} style={{ background: '#fff', borderRadius: 16, padding: '12px 14px', boxShadow: '0 0 0 .5px rgba(40,57,108,.06), 0 2px 8px rgba(40,57,108,.06)', border: '.5px solid rgba(40,57,108,.06)', display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 38, height: 38, borderRadius: 12, background: e.bg, border: `.5px solid ${e.bdr}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={e.stroke} strokeWidth="2" strokeLinecap="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" /></svg>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#1a2340', letterSpacing: '-.2px' }}>{e.name}</div>
                  <div style={{ fontSize: 10, color: '#8892b0', marginTop: 2 }}>{e.meta}</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 3 }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: e.pctColor, letterSpacing: '-.4px' }}>{e.pct}</div>
                  <div style={{ padding: '2px 8px', borderRadius: 100, fontSize: 9, fontWeight: 700, background: e.bg, color: e.pctColor, border: `.5px solid ${e.bdr}` }}>{e.chip}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ height: 20 }} />
        </div>
        <SPTabBar />
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════
   SCREEN 2 — UPLOAD SYLLABUS
═══════════════════════════════════════════ */
export const AIPracticeUpload = () => {
  return (
    <div className="sp-wrap">
      <div className="sp-label">Upload Syllabus</div>
      <div className="sp">
        <div className="sp-di" />
        <div className="sp-scroll">
          {/* Back row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '12px 20px 0', cursor: 'pointer', width: 'fit-content' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#28396c" strokeWidth="2.2" strokeLinecap="round"><polyline points="15 18 9 12 15 6" /></svg>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#28396c', letterSpacing: '-.1px' }}>Back</span>
          </div>

          {/* Upload Head */}
          <div style={{ padding: '16px 20px 0' }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: '#1a2340', letterSpacing: '-.5px' }}>Upload Syllabus</div>
            <div style={{ fontSize: 12, color: '#8892b0', marginTop: 3 }}>Upload a PDF of your chapter, notes, or syllabus.</div>
          </div>

          {/* Drop Zone */}
          <div style={{ margin: '18px 16px 0', border: '2px dashed rgba(40,57,108,.22)', borderRadius: 22, padding: '42px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, background: 'linear-gradient(135deg,rgba(40,57,108,.025),rgba(40,57,108,.01))', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -36, left: '50%', transform: 'translateX(-50%)', width: 180, height: 150, background: 'radial-gradient(ellipse,rgba(40,57,108,.04) 0%,transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ width: 72, height: 72, borderRadius: 24, background: 'linear-gradient(140deg,#f5efe2,#ede5d4)', border: '.5px solid rgba(40,57,108,.13)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 18px rgba(40,57,108,.08), 0 0 0 6px rgba(40,57,108,.04)', marginBottom: 2, position: 'relative', zIndex: 1 }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#28396c" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.55">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
            </div>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#28396c', letterSpacing: '-.2px', position: 'relative', zIndex: 1 }}>Drop PDF here</div>
            <div style={{ fontSize: 12, color: '#8892b0', textAlign: 'center', lineHeight: 1.55, position: 'relative', zIndex: 1 }}>or tap to browse your files</div>
            <div style={{ fontSize: 10, fontWeight: 600, color: '#c0c8dc', marginTop: 1, position: 'relative', zIndex: 1 }}>Max 20 MB · PDF, DOC, DOCX</div>
          </div>

          {/* Upload Options */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 9, margin: '14px 16px 0' }}>
            {[
              { lbl: 'PDF File', sub: 'Chapter or notes', color: '#e85555', bg: 'rgba(232,85,85,.09)', bdr: 'rgba(232,85,85,.18)', icon: <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="9" y1="15" x2="15" y2="15" /></> },
              { lbl: 'Scan Photo', sub: 'Camera or gallery', color: '#5b6fd4', bg: 'rgba(91,111,212,.1)', bdr: 'rgba(91,111,212,.2)', icon: <><rect x="3" y="3" width="18" height="18" rx="3" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></> },
              { lbl: 'Type Topic', sub: 'Enter manually', color: '#2ebc71', bg: 'rgba(46,188,113,.1)', bdr: 'rgba(46,188,113,.2)', icon: <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /> },
              { lbl: 'From Drive', sub: 'Google Drive', color: '#f59c2a', bg: 'rgba(245,156,42,.1)', bdr: 'rgba(245,156,42,.2)', icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></> },
            ].map(o => (
              <div key={o.lbl} style={{ background: '#fff', borderRadius: 16, padding: '14px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, boxShadow: '0 0 0 .5px rgba(40,57,108,.06), 0 2px 8px rgba(40,57,108,.06)', border: '.5px solid rgba(40,57,108,.06)' }}>
                <div style={{ width: 38, height: 38, borderRadius: 12, background: o.bg, border: `.5px solid ${o.bdr}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={o.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{o.icon}</svg>
                </div>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#1a2340', letterSpacing: '-.2px', textAlign: 'center' }}>{o.lbl}</div>
                <div style={{ fontSize: 10, color: '#8892b0', textAlign: 'center' }}>{o.sub}</div>
              </div>
            ))}
          </div>

          {/* Format Pills */}
          <div style={{ display: 'flex', gap: 6, margin: '14px 16px 0', flexWrap: 'wrap' }}>
            {[
              { lbl: 'PDF', color: '#e85555', bg: 'rgba(232,85,85,.09)', bdr: 'rgba(232,85,85,.18)' },
              { lbl: 'DOCX', color: '#5b6fd4', bg: 'rgba(91,111,212,.1)', bdr: 'rgba(91,111,212,.2)' },
              { lbl: 'JPG / PNG', color: '#1e9a5a', bg: 'rgba(46,188,113,.1)', bdr: 'rgba(46,188,113,.2)' },
              { lbl: 'TXT', color: '#28396c', bg: 'rgba(40,57,108,.08)', bdr: 'rgba(40,57,108,.13)' },
            ].map(p => (
              <div key={p.lbl} style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '5px 10px', borderRadius: 100, fontSize: 10, fontWeight: 700, background: p.bg, color: p.color, border: `.5px solid ${p.bdr}` }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                {p.lbl}
              </div>
            ))}
          </div>

          {/* Upload Button */}
          <div style={{ margin: '14px 16px 0', background: 'linear-gradient(135deg,#28396c,#1e2d57)', borderRadius: 16, padding: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontSize: 14, fontWeight: 700, color: '#fff', position: 'relative', overflow: 'hidden', boxShadow: '0 6px 24px rgba(40,57,108,.28)' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(255,255,255,.1) 0%,transparent 55%)' }} />
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" style={{ position: 'relative', zIndex: 1 }}><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
            <span style={{ position: 'relative', zIndex: 1 }}>Upload &amp; Generate Exam</span>
          </div>

          <div style={{ height: 20 }} />
        </div>
        <SPTabBar />
      </div>
    </div>
  );
};
