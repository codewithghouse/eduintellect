import React from 'react';

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
    <div className="sp-brand"><div className="sp-live-dot" /><span className="sp-brand-txt">EduIntellect</span></div>
    <div className="sp-av">T</div>
  </div>
);

const PageHead = () => (
  <div style={{ padding: '14px 20px 0' }}>
    <div style={{ fontSize: 9, fontWeight: 300, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(40,57,108,.4)', marginBottom: 3 }}>Parent Dashboard</div>
    <div style={{ fontSize: 21, fontWeight: 300, color: '#1a2340', letterSpacing: '-.5px' }}>Concept Strengths</div>
    <div style={{ fontSize: 11, color: '#8892b0', marginTop: 2 }}>AI-powered learning tools for <strong style={{ color: '#28396c', fontWeight: 400 }}>Tanveer</strong></div>
  </div>
);

type TabStyle = { gradient: string; color?: string };

const HTabs = ({ active }: { active: string }) => {
  const tabs: { key: string; label: string; style: TabStyle; icon: React.ReactNode }[] = [
    { key: 'strengths', label: 'Strengths', style: { gradient: 'linear-gradient(135deg,#1e9a5a,#2ebc71)' }, icon: <><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></> },
    { key: 'plan', label: 'Study Plan', style: { gradient: 'linear-gradient(135deg,#5b6fd4,#4a5cc8)' }, icon: <><rect x="3" y="4" width="18" height="18" rx="3" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></> },
    { key: 'explain', label: 'Explain', style: { gradient: 'linear-gradient(135deg,#2aacbc,#1a8a9a)' }, icon: <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /> },
    { key: 'practice', label: 'Practice', style: { gradient: 'linear-gradient(135deg,#f59c2a,#e88a15)' }, icon: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /> },
    { key: 'doubt', label: 'Doubt', style: { gradient: 'linear-gradient(135deg,#e85599,#c03070)' }, icon: <><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></> },
  ];
  return (
    <div style={{ padding: '12px 0 0', overflow: 'hidden' }}>
      <div style={{ display: 'flex', gap: 6, padding: '0 20px', overflowX: 'auto', scrollbarWidth: 'none' as const }}>
        {tabs.map(t => {
          const isAct = t.key === active;
          return (
            <div key={t.key} style={{
              display: 'flex', alignItems: 'center', gap: 5, padding: '7px 11px', borderRadius: 12,
              fontSize: 11, fontWeight: 300, whiteSpace: 'nowrap' as const, flexShrink: 0,
              background: isAct ? t.style.gradient : '#fff',
              color: isAct ? '#fff' : '#4a5578',
              border: isAct ? '.5px solid transparent' : '.5px solid rgba(40,57,108,.08)',
              boxShadow: isAct ? '0 3px 10px rgba(40,57,108,.2)' : '0 1px 4px rgba(40,57,108,.05)',
            }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={isAct ? '#fff' : 'currentColor'} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">{t.icon}</svg>
              {t.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════
   SCREEN 1 — STRENGTHS TAB
═══════════════════════════════════════════ */
export const ConceptStrengthsTab = () => (
  <div className="sp-wrap">
    <div className="sp-label">Strengths</div>
    <div className="sp">
      <div className="sp-di" />
      <div className="sp-scroll">
        <SPHeader />
        <PageHead />
        <HTabs active="strengths" />

        {/* Teacher Pills */}
        <div style={{ display: 'flex', gap: 6, padding: '12px 20px 0', flexWrap: 'wrap' }}>
          {[
            { l: 'Shaik sir', act: true },
            { l: 'Islamic Read', act: false },
            { l: 'English', act: false },
          ].map(t => (
            <div key={t.l} style={{
              padding: '6px 12px', borderRadius: 100, fontSize: 11, fontWeight: 300,
              background: t.act ? '#28396c' : '#fff',
              color: t.act ? '#fff' : '#4a5578',
              boxShadow: t.act ? '0 3px 10px rgba(40,57,108,.22)' : '0 1px 4px rgba(40,57,108,.05)',
              border: t.act ? 'none' : '.5px solid rgba(40,57,108,.07)',
            }}>{t.l}</div>
          ))}
        </div>

        {/* Strong Card */}
        <div style={{ margin: '14px 16px 0', background: '#fff', borderRadius: 18, padding: '14px 16px', boxShadow: '0 0 0 .5px rgba(40,57,108,.06), 0 2px 8px rgba(40,57,108,.06), 0 10px 28px rgba(40,57,108,.08)', border: '.5px solid rgba(40,57,108,.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 28, height: 28, borderRadius: 9, background: 'rgba(46,188,113,.1)', border: '.5px solid rgba(46,188,113,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2ebc71" strokeWidth="2.5" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
              </div>
              <span style={{ fontSize: 14, fontWeight: 300, color: '#1a2340', letterSpacing: '-.2px' }}>Strong</span>
            </div>
            <span style={{ fontSize: 14, fontWeight: 300, color: '#1e9a5a', letterSpacing: '-.2px' }}>3</span>
          </div>
          {[
            { n: 'English', pct: 98 },
            { n: 'Unit 1', pct: 89 },
            { n: 'Unit 1', pct: 89 },
          ].map((r, i, arr) => (
            <div key={i} style={{ marginBottom: i < arr.length - 1 ? 10 : 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                <span style={{ fontSize: 12, fontWeight: 500, color: '#4a5578' }}>{r.n}</span>
                <span style={{ fontSize: 12, fontWeight: 300, color: '#1e9a5a' }}>{r.pct}%</span>
              </div>
              <div style={{ height: 5, background: '#ede5d4', borderRadius: 3, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${r.pct}%`, background: 'linear-gradient(90deg,#1e9a5a,#2ebc71)', borderRadius: 3 }} />
              </div>
            </div>
          ))}
        </div>

        {/* Developing Card */}
        <div style={{ margin: '10px 16px 0', background: '#fff', borderRadius: 18, padding: '14px 16px', boxShadow: '0 0 0 .5px rgba(40,57,108,.06), 0 2px 8px rgba(40,57,108,.06)', border: '.5px solid rgba(40,57,108,.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 28, height: 28, borderRadius: 9, background: 'rgba(245,156,42,.1)', border: '.5px solid rgba(245,156,42,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f59c2a" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="10" strokeDasharray="4 2" /></svg>
              </div>
              <span style={{ fontSize: 14, fontWeight: 300, color: '#1a2340' }}>Developing</span>
            </div>
            <span style={{ fontSize: 14, fontWeight: 300, color: '#f59c2a' }}>1</span>
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
              <span style={{ fontSize: 12, fontWeight: 500, color: '#4a5578' }}>English Practical</span>
              <span style={{ fontSize: 12, fontWeight: 300, color: '#f59c2a' }}>75%</span>
            </div>
            <div style={{ height: 5, background: '#ede5d4', borderRadius: 3, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: '75%', background: 'linear-gradient(90deg,#c87a10,#f59c2a)', borderRadius: 3 }} />
            </div>
          </div>
        </div>

        {/* Needs Work Card */}
        <div style={{ margin: '10px 16px 0', background: '#fff', borderRadius: 18, padding: '14px 16px', boxShadow: '0 0 0 .5px rgba(40,57,108,.06), 0 2px 8px rgba(40,57,108,.06)', border: '.5px solid rgba(40,57,108,.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 28, height: 28, borderRadius: 9, background: 'rgba(232,85,85,.09)', border: '.5px solid rgba(232,85,85,.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e85555" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
              </div>
              <span style={{ fontSize: 14, fontWeight: 300, color: '#1a2340' }}>Needs Work</span>
            </div>
            <span style={{ fontSize: 14, fontWeight: 300, color: '#e85555' }}>1</span>
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
              <span style={{ fontSize: 12, fontWeight: 500, color: '#4a5578' }}>Unit 1</span>
              <span style={{ fontSize: 12, fontWeight: 300, color: '#e85555' }}>65%</span>
            </div>
            <div style={{ height: 5, background: '#ede5d4', borderRadius: 3, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: '65%', background: 'linear-gradient(90deg,#b82020,#e85555)', borderRadius: 3 }} />
            </div>
          </div>
          <div style={{ marginTop: 12, padding: '10px 12px', background: 'linear-gradient(135deg,#fffbee,#fff8e0)', borderRadius: 12, border: '.5px solid rgba(245,156,42,.2)', display: 'flex', alignItems: 'flex-start', gap: 8 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c07a10" strokeWidth="2" strokeLinecap="round" style={{ flexShrink: 0, marginTop: 1 }}><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
            <div>
              <div style={{ fontSize: 11, fontWeight: 300, color: '#c07a10', marginBottom: 2 }}>Recommended Focus</div>
              <div style={{ fontSize: 10, color: 'rgba(0,0,0,.45)', lineHeight: 1.55 }}>Spend extra time on unit 1 and practice problems.</div>
            </div>
          </div>
        </div>

        <div style={{ height: 20 }} />
      </div>
      <SPTabBar />
    </div>
  </div>
);

/* ═══════════════════════════════════════════
   SCREEN 2 — STUDY PLAN TAB
═══════════════════════════════════════════ */
export const ConceptStudyPlan = () => (
  <div className="sp-wrap">
    <div className="sp-label">Study Plan</div>
    <div className="sp">
      <div className="sp-di" />
      <div className="sp-scroll">
        <SPHeader />
        <PageHead />
        <HTabs active="plan" />

        {/* AI Study Plan Maker */}
        <div style={{ margin: '16px 16px 0', background: '#fff', borderRadius: 20, padding: 18, boxShadow: '0 0 0 .5px rgba(40,57,108,.06), 0 2px 8px rgba(40,57,108,.06), 0 10px 28px rgba(40,57,108,.08)', border: '.5px solid rgba(40,57,108,.06)' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 42, height: 42, borderRadius: 14, background: 'rgba(91,111,212,.1)', border: '.5px solid rgba(91,111,212,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5b6fd4" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="3" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
            </div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 300, color: '#1a2340', letterSpacing: '-.3px', marginBottom: 3 }}>AI Study Plan Maker</div>
              <div style={{ fontSize: 11, color: '#8892b0', lineHeight: 1.5 }}>Based on Tanveer's weak topics — personalised schedule for today &amp; tomorrow.</div>
            </div>
          </div>

          <div style={{ fontSize: 9, fontWeight: 300, letterSpacing: '.09em', textTransform: 'uppercase', color: '#c0c8dc', marginBottom: 7 }}>Weak Topics Detected</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
            <div style={{ padding: '5px 11px', borderRadius: 100, fontSize: 11, fontWeight: 300, background: 'rgba(232,85,85,.09)', color: '#e85555', border: '.5px solid rgba(232,85,85,.18)' }}>unit 1</div>
            <div style={{ padding: '5px 11px', borderRadius: 100, fontSize: 11, fontWeight: 300, background: 'rgba(245,156,42,.1)', color: '#c07a10', border: '.5px solid rgba(245,156,42,.2)' }}>English Practical</div>
          </div>

          <div style={{ width: '100%', padding: 14, background: 'linear-gradient(135deg,#5b6fd4,#4a5cc8)', borderRadius: 14, fontSize: 14, fontWeight: 300, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, position: 'relative', overflow: 'hidden', boxShadow: '0 5px 20px rgba(91,111,212,.3)' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(255,255,255,.1) 0%,transparent 55%)' }} />
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" style={{ position: 'relative', zIndex: 1 }}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
            <span style={{ position: 'relative', zIndex: 1 }}>Generate Today's Plan</span>
          </div>
        </div>

        {/* Today's Plan */}
        <div style={{ fontSize: 9, fontWeight: 300, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(40,57,108,.35)', padding: '16px 20px 0', display: 'flex', alignItems: 'center', gap: 8 }}>
          Today's Plan<div style={{ flex: 1, height: '.5px', background: 'rgba(40,57,108,.13)' }} />
        </div>
        <div style={{ margin: '10px 16px 0', background: '#fff', borderRadius: 18, padding: 14, boxShadow: '0 0 0 .5px rgba(40,57,108,.06), 0 2px 8px rgba(40,57,108,.06)', border: '.5px solid rgba(40,57,108,.06)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { title: 'Unit 1 — Revision', meta: '9:00 AM · 45 min session', prio: 'High', color: '#e85555', bg: 'rgba(232,85,85,.09)', bdr: 'rgba(232,85,85,.18)' },
              { title: 'English Practical — Practice', meta: '11:00 AM · 30 min session', prio: 'Med', color: '#f59c2a', bg: 'rgba(245,156,42,.1)', bdr: 'rgba(245,156,42,.2)' },
            ].map(s => (
              <div key={s.title} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', background: '#f5efe2', borderRadius: 12, border: '.5px solid rgba(40,57,108,.07)' }}>
                <div style={{ width: 28, height: 28, borderRadius: 9, background: s.bg, border: `.5px solid ${s.bdr}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth="2.2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12, fontWeight: 300, color: '#1a2340' }}>{s.title}</div>
                  <div style={{ fontSize: 10, color: '#8892b0', marginTop: 1 }}>{s.meta}</div>
                </div>
                <div style={{ fontSize: 10, fontWeight: 300, color: s.color, background: s.bg, padding: '3px 8px', borderRadius: 100, border: `.5px solid ${s.bdr}` }}>{s.prio}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ height: 20 }} />
      </div>
      <SPTabBar />
    </div>
  </div>
);

/* ═══════════════════════════════════════════
   SCREEN 3 — EXPLAIN + PRACTICE + DOUBT
═══════════════════════════════════════════ */
export const ConceptExplainPractice = () => (
  <div className="sp-wrap">
    <div className="sp-label">Explain · Practice · Doubt</div>
    <div className="sp">
      <div className="sp-di" />
      <div className="sp-scroll">
        <SPHeader />
        <PageHead />
        <HTabs active="explain" />

        {/* EXPLAIN Card */}
        <div style={{ margin: '16px 16px 0', background: '#fff', borderRadius: 20, padding: 18, boxShadow: '0 0 0 .5px rgba(40,57,108,.06), 0 2px 8px rgba(40,57,108,.06)', border: '.5px solid rgba(40,57,108,.06)' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 42, height: 42, borderRadius: 14, background: 'rgba(42,172,188,.1)', border: '.5px solid rgba(42,172,188,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2aacbc" strokeWidth="2" strokeLinecap="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>
            </div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 300, color: '#1a2340', letterSpacing: '-.3px', marginBottom: 3 }}>24/7 Concept Explainer</div>
              <div style={{ fontSize: 11, color: '#8892b0', lineHeight: 1.5 }}>Type any concept — AI explains it in simple language with a real-world example.</div>
            </div>
          </div>
          <div style={{ position: 'relative', marginBottom: 12 }}>
            <div style={{ width: '100%', padding: '12px 44px 12px 14px', background: '#f5efe2', borderRadius: 12, border: '.5px solid rgba(40,57,108,.07)', fontSize: 12, color: '#c0c8dc' }}>
              e.g. Photosynthesis, Fractions...
            </div>
            <div style={{ position: 'absolute', right: 6, top: '50%', transform: 'translateY(-50%)', width: 30, height: 30, borderRadius: 10, background: 'linear-gradient(135deg,#2aacbc,#1a8a9a)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
            </div>
          </div>
          <div style={{ marginTop: 10 }}>
            <div style={{ fontSize: 9, fontWeight: 300, letterSpacing: '.09em', textTransform: 'uppercase', color: '#c0c8dc', marginBottom: 7 }}>Quick Picks — Your Weak Topics</div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              <div style={{ padding: '5px 11px', borderRadius: 100, fontSize: 11, fontWeight: 300, background: 'rgba(232,85,85,.09)', color: '#e85555', border: '.5px solid rgba(232,85,85,.18)' }}>unit 1</div>
              <div style={{ padding: '5px 11px', borderRadius: 100, fontSize: 11, fontWeight: 300, background: 'rgba(245,156,42,.1)', color: '#c07a10', border: '.5px solid rgba(245,156,42,.2)' }}>English Practical</div>
            </div>
          </div>
        </div>

        {/* PRACTICE Card */}
        <div style={{ fontSize: 9, fontWeight: 300, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(40,57,108,.35)', padding: '16px 20px 0', display: 'flex', alignItems: 'center', gap: 8 }}>
          Practice Generator<div style={{ flex: 1, height: '.5px', background: 'rgba(40,57,108,.13)' }} />
        </div>
        <div style={{ margin: '10px 16px 0', background: '#fff', borderRadius: 20, padding: 18, boxShadow: '0 0 0 .5px rgba(40,57,108,.06), 0 2px 8px rgba(40,57,108,.06)', border: '.5px solid rgba(40,57,108,.06)' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 14 }}>
            <div style={{ width: 42, height: 42, borderRadius: 14, background: 'rgba(245,156,42,.1)', border: '.5px solid rgba(245,156,42,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59c2a" strokeWidth="2" strokeLinecap="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            </div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 300, color: '#1a2340', letterSpacing: '-.3px', marginBottom: 3 }}>Practice Problem Generator</div>
              <div style={{ fontSize: 11, color: '#8892b0', lineHeight: 1.5 }}>AI generates 5 dynamic questions — reveal answers one at a time.</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ flex: 1, padding: '12px 14px', background: '#f5efe2', borderRadius: 12, border: '.5px solid rgba(40,57,108,.07)', fontSize: 12, color: '#c0c8dc' }}>Topic (e.g. Islamic Read)</div>
            <div style={{ padding: '12px 14px', background: 'linear-gradient(135deg,#f59c2a,#e88a15)', borderRadius: 12, fontSize: 12, fontWeight: 300, color: '#fff', display: 'flex', alignItems: 'center', gap: 5, flexShrink: 0, boxShadow: '0 4px 14px rgba(245,156,42,.28)' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round"><polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" /></svg>
              Generate
            </div>
          </div>
        </div>

        {/* DOUBT Card */}
        <div style={{ fontSize: 9, fontWeight: 300, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(40,57,108,.35)', padding: '16px 20px 0', display: 'flex', alignItems: 'center', gap: 8 }}>
          Doubt Solver<div style={{ flex: 1, height: '.5px', background: 'rgba(40,57,108,.13)' }} />
        </div>
        <div style={{ margin: '10px 16px 0', background: '#fff', borderRadius: 20, padding: 18, boxShadow: '0 0 0 .5px rgba(40,57,108,.06), 0 2px 8px rgba(40,57,108,.06)', border: '.5px solid rgba(40,57,108,.06)' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 14 }}>
            <div style={{ width: 42, height: 42, borderRadius: 14, background: 'rgba(232,85,153,.1)', border: '.5px solid rgba(232,85,153,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e85599" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
            </div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 300, color: '#1a2340', letterSpacing: '-.3px', marginBottom: 3 }}>AI Doubt Solver</div>
              <div style={{ fontSize: 11, color: '#8892b0', lineHeight: 1.5 }}>Type your doubt OR upload a photo. AI guides step by step — teaches, doesn't just answer.</div>
            </div>
          </div>
          <div style={{ width: '100%', padding: '12px 14px', background: '#f5efe2', borderRadius: 12, border: '.5px solid rgba(40,57,108,.07)', fontSize: 12, color: '#c0c8dc', minHeight: 70, lineHeight: 1.5 }}>
            Type your doubt here...
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
            <div style={{ flex: 1, padding: 11, background: '#f5efe2', borderRadius: 12, border: '.5px solid rgba(40,57,108,.07)', fontSize: 12, fontWeight: 300, color: '#4a5578', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="3" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
              Upload Photo
            </div>
            <div style={{ flex: 1, padding: 11, background: 'linear-gradient(135deg,#e85599,#c03070)', borderRadius: 12, fontSize: 12, fontWeight: 300, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, boxShadow: '0 4px 14px rgba(232,85,153,.28)' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
              Get Help
            </div>
          </div>
        </div>

        <div style={{ height: 20 }} />
      </div>
      <SPTabBar />
    </div>
  </div>
);
