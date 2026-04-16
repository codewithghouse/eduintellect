/* eslint-disable @typescript-eslint/no-unused-vars */
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
    <div style={{ fontSize: 24, fontWeight: 700, color: '#1a2340', letterSpacing: '-.5px', lineHeight: 1.15 }}>Tests &amp;<br />Examinations</div>
    <div style={{ fontSize: 12, color: '#8892b0', marginTop: 4 }}>Track upcoming assessments and latest outcomes</div>
  </div>
);

const Hero = ({ empty }: { empty: boolean }) => (
  <div style={{ margin: '14px 16px 0', borderRadius: 22, background: 'linear-gradient(140deg,#28396c,#334880)', padding: '20px 18px 22px', position: 'relative', overflow: 'hidden', boxShadow: '0 0 0 .5px rgba(40,57,108,.08), 0 4px 18px rgba(40,57,108,.09), 0 24px 56px rgba(40,57,108,.12)' }}>
    <div style={{ position: 'absolute', top: -40, right: -24, width: 150, height: 150, background: 'radial-gradient(circle,rgba(255,255,255,.08) 0%,transparent 65%)', borderRadius: '50%' }} />
    <div style={{ width: 40, height: 40, borderRadius: 13, background: 'rgba(255,255,255,.12)', border: '.5px solid rgba(255,255,255,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14, position: 'relative', zIndex: 1 }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="3" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
    </div>
    <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,.5)', marginBottom: 6, position: 'relative', zIndex: 1 }}>Coming Up Next</div>
    <div style={{ fontSize: 20, fontWeight: 700, color: '#fff', letterSpacing: '-.4px', lineHeight: 1.15, marginBottom: 8, position: 'relative', zIndex: 1 }}>{empty ? 'No upcoming tests' : 'English Mid-Term'}</div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, position: 'relative', zIndex: 1, marginBottom: 16 }}>
      <div style={{ width: 5, height: 5, borderRadius: '50%', background: empty ? 'rgba(255,255,255,.3)' : 'rgba(46,188,113,.7)' }} />
      <span style={{ fontSize: 11, color: 'rgba(255,255,255,.5)', fontWeight: 500 }}>{empty ? '9:00 AM • Enjoy your free time!' : 'Apr 20 • 9:00 AM • Jamal Sir'}</span>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'rgba(255,255,255,.08)', borderRadius: 14, overflow: 'hidden', position: 'relative', zIndex: 1 }}>
      {[{ v: empty ? '0' : '1', l: 'This Week' }, { v: empty ? '0' : '3', l: 'This Term' }].map((s) => (
        <div key={s.l} style={{ background: 'rgba(255,255,255,.04)', padding: '12px 14px', display: 'flex', flexDirection: 'column' as const, gap: 3 }}>
          <div style={{ fontSize: 20, fontWeight: 700, color: '#fff', letterSpacing: '-.4px', lineHeight: 1 }}>{s.v}</div>
          <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: '.09em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,.38)' }}>{s.l}</div>
        </div>
      ))}
    </div>
  </div>
);

const SecLbl = ({ children }: { children: React.ReactNode }) => (
  <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: 'rgba(40,57,108,.35)', padding: '16px 20px 0', display: 'flex', alignItems: 'center', gap: 8 }}>
    {children}<div style={{ flex: 1, height: '.5px', background: 'rgba(40,57,108,.13)' }} />
  </div>
);

const ListCard = ({ children }: { children: React.ReactNode }) => (
  <div style={{ margin: '10px 16px 0', background: '#fff', borderRadius: 18, padding: '16px 18px', boxShadow: '0 0 0 .5px rgba(40,57,108,.06), 0 2px 8px rgba(40,57,108,.06), 0 10px 28px rgba(40,57,108,.08)', border: '.5px solid rgba(40,57,108,.06)' }}>{children}</div>
);

const MiniEmpty = ({ icon, txt }: { icon: React.ReactNode; txt: string }) => (
  <div style={{ display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: 9, padding: '16px 8px' }}>
    <div style={{ width: 46, height: 46, borderRadius: 14, background: 'linear-gradient(140deg,#f5efe2,#ede5d4)', border: '.5px solid rgba(40,57,108,.13)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 0 4px rgba(40,57,108,.03)' }}>
      {icon}
    </div>
    <div style={{ fontSize: 12, color: '#8892b0', fontWeight: 500, textAlign: 'center' as const }}>{txt}</div>
  </div>
);

const GradeBreakdown = ({ counts, taken }: { counts: number[]; taken: number }) => (
  <ListCard>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
      <div style={{ fontSize: 14, fontWeight: 700, color: '#1a2340', letterSpacing: '-.2px' }}>Grade Breakdown</div>
      <div style={{ fontSize: 10, fontWeight: 600, color: '#8892b0' }}>{taken} tests taken</div>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
      {[
        { val: counts[0], lbl: 'A Grade', bg: 'rgba(46,188,113,.08)', bdr: 'rgba(46,188,113,.18)', color: '#1e9a5a' },
        { val: counts[1], lbl: 'B Grade', bg: 'rgba(40,57,108,.06)', bdr: 'rgba(40,57,108,.13)', color: '#28396c' },
        { val: counts[2], lbl: 'C Grade', bg: 'rgba(245,156,42,.07)', bdr: 'rgba(245,156,42,.18)', color: '#c07a10' },
        { val: counts[3], lbl: 'Below C', bg: 'rgba(232,85,85,.07)', bdr: 'rgba(232,85,85,.18)', color: '#c03030' },
      ].map((g) => (
        <div key={g.lbl} style={{ borderRadius: 14, padding: '12px 10px', display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: 4, background: g.bg, border: `.5px solid ${g.bdr}` }}>
          <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-.7px', lineHeight: 1, color: g.color }}>{g.val}</div>
          <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.07em', textTransform: 'uppercase' as const, color: g.color }}>{g.lbl}</div>
        </div>
      ))}
    </div>
  </ListCard>
);

/* ═══ SCREEN 1: No Tests ═══ */
export const ParentTestsEmpty = () => (
  <div className="sp-wrap">
    <div className="sp-label">No Tests</div>
    <div className="sp">
      <div className="sp-di" />
      <div className="sp-scroll">
        <SPH />
        <PageHead />
        <Hero empty />
        <SecLbl>Upcoming Tests</SecLbl>
        <ListCard><MiniEmpty icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#28396c" strokeWidth="1.6" strokeLinecap="round" opacity=".45"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>} txt="No upcoming tests" /></ListCard>
        <SecLbl>Recent Results</SecLbl>
        <ListCard><MiniEmpty icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#28396c" strokeWidth="1.6" strokeLinecap="round" opacity=".45"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>} txt="No results yet" /></ListCard>
        <SecLbl>This Term Performance</SecLbl>
        <GradeBreakdown counts={[0, 0, 0, 0]} taken={0} />
        <div style={{ height: 20 }} />
      </div>
      <SPTabBar />
    </div>
  </div>
);

/* ═══ SCREEN 2: With Tests ═══ */
export const ParentTestsFilled = () => (
  <div className="sp-wrap">
    <div className="sp-label">With Tests</div>
    <div className="sp">
      <div className="sp-di" />
      <div className="sp-scroll">
        <SPH />
        <PageHead />
        <Hero empty={false} />

        {/* Upcoming */}
        <SecLbl>Upcoming Tests</SecLbl>
        <ListCard>
          {[
            { ico: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#28396c" strokeWidth="2" strokeLinecap="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" /></svg>, icoBg: 'rgba(40,57,108,.08)', icoBdr: 'rgba(40,57,108,.13)', name: 'English Mid-Term', sub: 'Apr 20 · 9:00 AM · Jamal Sir', badge: '4d left', bBg: 'rgba(245,156,42,.1)', bC: '#c07a10', bBdr: 'rgba(245,156,42,.2)' },
            { ico: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a7a8a" strokeWidth="2" strokeLinecap="round"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></svg>, icoBg: 'rgba(42,172,188,.09)', icoBdr: 'rgba(42,172,188,.18)', name: 'Islamic Studies Test', sub: 'Apr 24 · 10:00 AM · Pasha Sir', badge: '8d left', bBg: 'rgba(40,57,108,.08)', bC: '#28396c', bBdr: 'rgba(40,57,108,.13)' },
          ].map((t, i) => (
            <div key={t.name} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: i === 0 ? '.5px solid rgba(40,57,108,.07)' : 'none' }}>
              <div style={{ width: 36, height: 36, borderRadius: 11, background: t.icoBg, border: `.5px solid ${t.icoBdr}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{t.ico}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#1a2340', letterSpacing: '-.2px' }}>{t.name}</div>
                <div style={{ fontSize: 10, color: '#8892b0', marginTop: 2 }}>{t.sub}</div>
              </div>
              <div style={{ padding: '4px 10px', borderRadius: 100, fontSize: 10, fontWeight: 700, background: t.bBg, color: t.bC, border: `.5px solid ${t.bBdr}`, flexShrink: 0 }}>{t.badge}</div>
            </div>
          ))}
        </ListCard>

        {/* Recent Results */}
        <SecLbl>Recent Results</SecLbl>
        <ListCard>
          {[
            { grade: 'A', gBg: 'rgba(46,188,113,.1)', gBdr: 'rgba(46,188,113,.2)', gC: '#1e9a5a', name: 'English Unit 2 Test', sub: 'Apr 8 · Jamal Sir', score: '92%', sC: '#1e9a5a' },
            { grade: 'B+', gBg: 'rgba(40,57,108,.08)', gBdr: 'rgba(40,57,108,.13)', gC: '#28396c', name: 'Islamic Reading Quiz', sub: 'Apr 3 · Pasha Sir', score: '78%', sC: '#28396c' },
          ].map((r, i) => (
            <div key={r.name} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: i === 0 ? '.5px solid rgba(40,57,108,.07)' : 'none' }}>
              <div style={{ width: 36, height: 36, borderRadius: 11, background: r.gBg, border: `.5px solid ${r.gBdr}`, color: r.gC, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, flexShrink: 0 }}>{r.grade}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#1a2340', letterSpacing: '-.2px' }}>{r.name}</div>
                <div style={{ fontSize: 10, color: '#8892b0', marginTop: 2 }}>{r.sub}</div>
              </div>
              <div style={{ fontSize: 16, fontWeight: 700, color: r.sC, letterSpacing: '-.3px', flexShrink: 0 }}>{r.score}</div>
            </div>
          ))}
        </ListCard>

        <SecLbl>This Term Performance</SecLbl>
        <GradeBreakdown counts={[2, 1, 0, 0]} taken={3} />
        <div style={{ height: 20 }} />
      </div>
      <SPTabBar />
    </div>
  </div>
);
