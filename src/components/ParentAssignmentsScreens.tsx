import React from 'react';

const SPTabBar = () => (
  <div className="sp-tabbar">
    {['Home', 'Tests', 'Progress', 'Alerts', 'Messages'].map((t, i) => (
      <div key={t} className={`sp-ti ${i === 1 ? 'act' : ''}`}>
        <svg viewBox="0 0 24 24"><path d={i === 0 ? 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10' : i === 1 ? 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z M14 2v6h6 M16 13H8' : i === 2 ? 'M18 20V10 M12 20V4 M6 20V14' : i === 3 ? 'M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9 M13.73 21a2 2 0 01-3.46 0' : 'M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z'} /></svg>
        <span>{t}</span>
      </div>
    ))}
  </div>
);

const SPH = () => (<div className="sp-hdr"><div className="sp-brand"><div className="sp-live-dot" /><span className="sp-brand-txt">EduIntellect</span></div><div className="sp-av">T</div></div>);

const PageHead = () => (
  <div style={{ padding: '18px 20px 0' }}>
    <div style={{ fontSize: 24, fontWeight: 700, color: '#1a2340', letterSpacing: '-.5px', lineHeight: 1.15 }}>Assignments &<br />Coursework</div>
    <div style={{ fontSize: 12, color: '#8892b0', marginTop: 4 }}>Manage submissions and track academic tasks</div>
  </div>
);

/* ═══ SCREEN 1: Pending Empty ═══ */
export const ParentAssignmentsEmpty = () => (
  <div className="sp-wrap">
    <div className="sp-label">Pending — Empty</div>
    <div className="sp">
      <div className="sp-di" />
      <div className="sp-scroll">
        <SPH />
        <PageHead />
        {/* Stats scroll */}
        <div style={{ overflow: 'hidden', paddingTop: 14 }}>
          <div style={{ display: 'flex', gap: 8, padding: '0 20px', overflowX: 'auto' as const }}>
            {[
              { lbl: 'Completion', val: '93%', sub: 'All time', color: '#1e9a5a', icoBg: 'rgba(46,188,113,.1)', bdr: 'rgba(46,188,113,.2)', icoC: '#2ebc71', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg> },
              { lbl: 'On-Time', val: '96%', sub: 'Submitted', color: '#5b6fd4', icoBg: 'rgba(91,111,212,.1)', bdr: 'rgba(91,111,212,.2)', icoC: '#5b6fd4', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> },
              { lbl: 'Avg Score', val: '82%', sub: 'This term', color: '#f59c2a', icoBg: 'rgba(245,156,42,.1)', bdr: 'rgba(245,156,42,.2)', icoC: '#f59c2a', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg> },
            ].map((s) => (
              <div key={s.lbl} style={{ background: '#fff', borderRadius: 18, padding: '14px 16px', display: 'flex', flexDirection: 'column' as const, gap: 3, boxShadow: '0 0 0 .5px rgba(40,57,108,.06), 0 2px 8px rgba(40,57,108,.06), 0 10px 28px rgba(40,57,108,.08)', border: '.5px solid rgba(40,57,108,.06)', flexShrink: 0, minWidth: 110 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                  <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: '#c0c8dc' }}>{s.lbl}</div>
                  <div style={{ width: 26, height: 26, borderRadius: 8, background: s.icoBg, border: `.5px solid ${s.bdr}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: s.icoC }}>{s.icon}</div>
                </div>
                <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-.6px', lineHeight: 1, color: s.color }}>{s.val}</div>
                <div style={{ fontSize: 10, fontWeight: 500, marginTop: 2, color: s.color }}>{s.sub}</div>
              </div>
            ))}
            <div style={{ background: '#28396c', borderRadius: 18, padding: '14px 16px', display: 'flex', flexDirection: 'column' as const, gap: 3, boxShadow: '0 6px 22px rgba(40,57,108,.28)', flexShrink: 0, minWidth: 110 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,.45)' }}>Pending</div>
                <div style={{ width: 26, height: 26, borderRadius: 8, background: 'rgba(255,255,255,.12)', border: '.5px solid rgba(255,255,255,.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.8)" strokeWidth="2.5" strokeLinecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                </div>
              </div>
              <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-.6px', lineHeight: 1, color: '#fff' }}>0</div>
              <div style={{ fontSize: 10, fontWeight: 500, marginTop: 2, color: 'rgba(255,255,255,.45)' }}>Due soon</div>
            </div>
          </div>
        </div>

        {/* Tab switcher */}
        <div style={{ margin: '16px 16px 0', background: '#f5efe2', borderRadius: 16, padding: 3, display: 'flex', gap: 2, border: '.5px solid rgba(40,57,108,.07)' }}>
          {[{ t: 'Pending', c: '0', a: true }, { t: 'Done', c: '0' }, { t: 'Overdue', c: '0' }].map((b) => (
            <div key={b.t} style={{ flex: 1, padding: '9px 4px', borderRadius: 13, fontSize: 11, fontWeight: 700, textAlign: 'center' as const, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, ...(b.a ? { background: 'linear-gradient(135deg,#28396c,#334880)', color: '#fff', boxShadow: '0 3px 12px rgba(40,57,108,.25)' } : { color: '#8892b0' }) }}>
              {b.t}
              <div style={{ minWidth: 16, height: 16, borderRadius: 8, fontSize: 9, fontWeight: 700, padding: '0 4px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: b.a ? 'rgba(255,255,255,.2)' : 'rgba(40,57,108,.1)', color: b.a ? '#fff' : '#4a5578' }}>{b.c}</div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        <div style={{ margin: '12px 16px 0', background: '#fff', borderRadius: 24, padding: '44px 28px', display: 'flex', flexDirection: 'column' as const, alignItems: 'center', boxShadow: '0 0 0 .5px rgba(40,57,108,.06), 0 2px 8px rgba(40,57,108,.06), 0 10px 28px rgba(40,57,108,.08)', border: '.5px solid rgba(40,57,108,.06)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -50, left: '50%', transform: 'translateX(-50%)', width: 200, height: 170, background: 'radial-gradient(ellipse,rgba(40,57,108,.04) 0%,transparent 70%)' }} />
          <div style={{ width: 78, height: 78, borderRadius: 24, background: 'linear-gradient(140deg,#f5efe2,#ede5d4)', border: '.5px solid rgba(40,57,108,.13)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18, boxShadow: '0 4px 20px rgba(40,57,108,.08), 0 0 0 6px rgba(40,57,108,.04)', position: 'relative', zIndex: 1 }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#28396c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity=".5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><polyline points="9 15 11 17 15 13" /></svg>
          </div>
          <div style={{ fontSize: 16, fontWeight: 700, color: '#1a2340', letterSpacing: '-.3px', marginBottom: 6, textAlign: 'center' as const }}>All Caught Up!</div>
          <div style={{ fontSize: 12, color: '#8892b0', textAlign: 'center' as const, lineHeight: 1.6, maxWidth: 200 }}>No pending assignments right now. Check back later or explore completed work.</div>
          <div style={{ marginTop: 20, padding: '12px 24px', background: 'linear-gradient(135deg,#28396c,#334880)', borderRadius: 14, fontSize: 13, fontWeight: 700, color: '#fff', boxShadow: '0 6px 22px rgba(40,57,108,.28)', display: 'flex', alignItems: 'center', gap: 8, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(255,255,255,.1) 0%,transparent 55%)' }} />
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg>
            Browse Completed
          </div>
        </div>
        <div style={{ height: 20 }} />
      </div>
      <SPTabBar />
    </div>
  </div>
);

/* ═══ SCREEN 2: With Assignments ═══ */
const assignCards = [
  { status: 'pending', band: 'linear-gradient(180deg,#f59c2a,#f5b842)', subject: 'English · Unit 3', title: 'Essay on Modern Literature', chipBg: 'rgba(245,156,42,.1)', chipC: '#c07a10', chipBdr: 'rgba(245,156,42,.2)', chipTxt: 'Pending', due: 'Due Apr 20', teacher: 'Jamal Sir', right: '4 days left', rightC: '#c07a10' },
  { status: 'pending', band: 'linear-gradient(180deg,#f59c2a,#f5b842)', subject: 'Islamic Read · Ch 5', title: 'Quran Recitation Practice', chipBg: 'rgba(245,156,42,.1)', chipC: '#c07a10', chipBdr: 'rgba(245,156,42,.2)', chipTxt: 'Pending', due: 'Due Apr 22', teacher: 'Pasha Sir', right: '6 days left', rightC: '#c07a10' },
  { status: 'overdue', band: 'linear-gradient(180deg,#e85555,#ff7070)', subject: 'English Practical', title: 'Comprehension Worksheet', chipBg: 'rgba(232,85,85,.09)', chipC: '#e85555', chipBdr: 'rgba(232,85,85,.18)', chipTxt: 'Overdue', due: 'Apr 10 (missed)', teacher: 'Jamal Sir', right: '6 days overdue', rightC: '#e85555' },
  { status: 'completed', band: 'linear-gradient(180deg,#1e9a5a,#2ebc71)', subject: 'English · Unit 2', title: 'Grammar Exercise Set', chipBg: 'rgba(46,188,113,.1)', chipC: '#1e9a5a', chipBdr: 'rgba(46,188,113,.2)', chipTxt: 'Done', due: 'Submitted Apr 8', teacher: 'Score: 89%', right: '✓ On time', rightC: '#1e9a5a' },
];

export const ParentAssignmentsFilled = () => (
  <div className="sp-wrap">
    <div className="sp-label">With Assignments</div>
    <div className="sp">
      <div className="sp-di" />
      <div className="sp-scroll">
        <SPH />
        <PageHead />

        {/* Overview banner */}
        <div style={{ margin: '14px 16px 0', background: 'linear-gradient(140deg,#28396c,#1e2d57)', borderRadius: 20, padding: 16, position: 'relative', overflow: 'hidden', boxShadow: '0 0 0 .5px rgba(40,57,108,.08), 0 4px 18px rgba(40,57,108,.09), 0 24px 56px rgba(40,57,108,.12)' }}>
          <div style={{ position: 'absolute', top: -30, right: -16, width: 140, height: 140, background: 'radial-gradient(circle,rgba(255,255,255,.08) 0%,transparent 65%)', borderRadius: '50%' }} />
          <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,.45)', marginBottom: 12, position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: 6 }}>This Term Overview<div style={{ flex: 1, height: '.5px', background: 'rgba(255,255,255,.1)' }} /></div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 1, background: 'rgba(255,255,255,.07)', borderRadius: 14, overflow: 'hidden', position: 'relative', zIndex: 1 }}>
            {[{ v: '93%', l: 'Completion' }, { v: '96%', l: 'On-Time' }, { v: '82%', l: 'Avg Score' }].map((c) => (
              <div key={c.l} style={{ background: 'rgba(255,255,255,.04)', padding: '12px 8px', display: 'flex', flexDirection: 'column' as const, gap: 3, alignItems: 'center' }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: '#fff', letterSpacing: '-.5px', lineHeight: 1 }}>{c.v}</div>
                <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,.4)' }}>{c.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tab switcher */}
        <div style={{ margin: '14px 16px 0', background: '#f5efe2', borderRadius: 16, padding: 3, display: 'flex', gap: 2, border: '.5px solid rgba(40,57,108,.07)' }}>
          {[{ t: 'Pending', c: '2', a: true }, { t: 'Done', c: '8' }, { t: 'Overdue', c: '1' }].map((b) => (
            <div key={b.t} style={{ flex: 1, padding: '9px 4px', borderRadius: 13, fontSize: 11, fontWeight: 700, textAlign: 'center' as const, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, ...(b.a ? { background: 'linear-gradient(135deg,#28396c,#334880)', color: '#fff', boxShadow: '0 3px 12px rgba(40,57,108,.25)' } : { color: '#8892b0' }) }}>
              {b.t}
              <div style={{ minWidth: 16, height: 16, borderRadius: 8, fontSize: 9, fontWeight: 700, padding: '0 4px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: b.a ? 'rgba(255,255,255,.2)' : 'rgba(40,57,108,.1)', color: b.a ? '#fff' : '#4a5578' }}>{b.c}</div>
            </div>
          ))}
        </div>

        {/* Assignment cards */}
        <div style={{ margin: '12px 16px 0', display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
          {assignCards.map((a, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 18, padding: '14px 16px', boxShadow: '0 0 0 .5px rgba(40,57,108,.06), 0 2px 8px rgba(40,57,108,.06), 0 10px 28px rgba(40,57,108,.08)', border: '.5px solid rgba(40,57,108,.06)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, borderRadius: '4px 0 0 4px', background: a.band }} />
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 9, paddingLeft: 6 }}>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase' as const, color: '#c0c8dc', marginBottom: 3 }}>{a.subject}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#1a2340', letterSpacing: '-.2px', lineHeight: 1.3 }}>{a.title}</div>
                </div>
                <div style={{ padding: '4px 10px', borderRadius: 100, fontSize: 10, fontWeight: 700, background: a.chipBg, color: a.chipC, border: `.5px solid ${a.chipBdr}`, flexShrink: 0, display: 'flex', alignItems: 'center', gap: 4 }}>{a.chipTxt}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingLeft: 6, paddingTop: 8, borderTop: '.5px solid rgba(40,57,108,.07)', flexWrap: 'wrap' as const }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 10, fontWeight: 500, color: '#8892b0' }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#8892b0" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="3" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /></svg>
                  {a.due}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 10, fontWeight: 500, color: '#8892b0' }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#8892b0" strokeWidth="2" strokeLinecap="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                  {a.teacher}
                </div>
                <div style={{ fontSize: 10, fontWeight: 600, color: a.rightC, marginLeft: 'auto' }}>{a.right}</div>
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
