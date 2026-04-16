import React from 'react';

const SPTabBar = () => (
  <div className="sp-tabbar">
    {['Home', 'Tests', 'Progress', 'Alerts', 'Messages'].map((t, i) => (
      <div key={t} className={`sp-ti ${i === 2 ? 'act' : ''}`}>
        <svg viewBox="0 0 24 24"><path d={i === 0 ? 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10' : i === 1 ? 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z M14 2v6h6' : i === 2 ? 'M18 20V10 M12 20V4 M6 20V14' : i === 3 ? 'M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9 M13.73 21a2 2 0 01-3.46 0' : 'M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z'} /></svg>
        <span>{t}</span>
      </div>
    ))}
  </div>
);
const SPH = () => (<div className="sp-hdr"><div className="sp-brand"><div className="sp-live-dot" /><span className="sp-brand-txt">EduIntellect</span></div><div className="sp-av">T</div></div>);

const subjects = [
  { name: 'English', grade: 'A+', pct: 98, color: '#2ebc71', gradeBg: 'rgba(46,188,113,.1)', gradeBdr: 'rgba(46,188,113,.2)', status: 'Outstanding', fillClass: 'green' },
  { name: 'English Practical', grade: 'B+', pct: 75, color: '#1a7a8a', gradeBg: 'rgba(42,172,188,.1)', gradeBdr: 'rgba(42,172,188,.2)', status: 'Improving', fillClass: 'teal' },
  { name: 'Unit 1', grade: 'A', pct: 89, color: '#28396c', gradeBg: 'rgba(40,57,108,.08)', gradeBdr: 'rgba(40,57,108,.13)', status: 'Excellent', fillClass: 'navy' },
];

const fillColors: Record<string, string> = { green: 'linear-gradient(90deg,#1e9a5a,#2ebc71)', teal: 'linear-gradient(90deg,#1a7a8a,#2aacbc)', navy: 'linear-gradient(90deg,#1e2d57,#334880)' };

/* ═══ SCREEN 1: Overview ═══ */
export const PerformanceOverview = () => (
  <div className="sp-wrap">
    <div className="sp-label">Overview</div>
    <div className="sp">
      <div className="sp-di" />
      <div className="sp-scroll">
        <SPH />
        <div style={{ padding: '18px 20px 0' }}>
          <div style={{ fontSize: 24, fontWeight: 700, color: '#1a2340', letterSpacing: '-.5px', display: 'flex', alignItems: 'center', gap: 8 }}>
            Performance Analytics
            <div style={{ width: 26, height: 26, borderRadius: 8, background: 'linear-gradient(140deg,#28396c,#334880)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#fff', boxShadow: '0 2px 8px rgba(40,57,108,.25)' }}>A</div>
          </div>
          <div style={{ fontSize: 12, color: '#8892b0', marginTop: 4 }}>Detailed breakdown of academic progress</div>
        </div>
        {/* Overall card */}
        <div style={{ margin: '14px 16px 0', background: '#fff', borderRadius: 22, padding: 18, boxShadow: '0 0 0 .5px rgba(40,57,108,.08), 0 4px 18px rgba(40,57,108,.09), 0 22px 52px rgba(40,57,108,.12)', border: '.5px solid rgba(40,57,108,.07)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -50, right: -30, width: 170, height: 170, background: 'radial-gradient(circle,rgba(40,57,108,.05) 0%,transparent 65%)', borderRadius: '50%' }} />
          <div style={{ fontSize: 16, fontWeight: 700, color: '#1a2340', letterSpacing: '-.2px' }}>Overall Performance</div>
          <div style={{ fontSize: 11, color: '#8892b0', marginTop: 2 }}>Based on all assessments this term</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginTop: 14 }}>
            {[{ v: 'A', l: 'Grade', c: '#2ebc71' }, { v: '87%', l: 'Average', c: '#28396c' }, { v: '↑ +8%', l: 'Trend', c: '#2ebc71' }].map((s) => (
              <div key={s.l} style={{ background: '#f5efe2', borderRadius: 16, padding: '14px 10px', display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: 5, border: '.5px solid rgba(40,57,108,.07)' }}>
                <div style={{ fontSize: s.l === 'Trend' ? 18 : 24, fontWeight: 700, letterSpacing: '-.6px', lineHeight: 1, color: s.c }}>{s.v}</div>
                <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase' as const, color: '#c0c8dc' }}>{s.l}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 14, paddingTop: 14, borderTop: '.5px solid rgba(40,57,108,.07)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 11, fontWeight: 600 }}><span style={{ color: '#8892b0' }}>Term Progress</span><span style={{ color: '#28396c' }}>87%</span></div>
            <div style={{ height: 5, background: '#ede5d4', borderRadius: 3, overflow: 'hidden' }}><div style={{ height: '100%', borderRadius: 3, background: 'linear-gradient(90deg,#1e2d57,#334880)', width: '87%' }} /></div>
          </div>
        </div>
        <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: 'rgba(40,57,108,.35)', padding: '16px 20px 0', display: 'flex', alignItems: 'center', gap: 8 }}>Subject Performance<div style={{ flex: 1, height: '.5px', background: 'rgba(40,57,108,.13)' }} /></div>
        {/* Subjects */}
        <div style={{ margin: '10px 16px 0', background: '#fff', borderRadius: 18, overflow: 'hidden', boxShadow: '0 0 0 .5px rgba(40,57,108,.06), 0 2px 8px rgba(40,57,108,.06), 0 10px 28px rgba(40,57,108,.08)', border: '.5px solid rgba(40,57,108,.06)' }}>
          {subjects.map((s, i) => (
            <div key={s.name} style={{ padding: '14px 16px', borderBottom: i < subjects.length - 1 ? '.5px solid rgba(40,57,108,.07)' : 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 30, height: 30, borderRadius: 10, background: s.gradeBg, border: `.5px solid ${s.gradeBdr}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth="2" strokeLinecap="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" /></svg>
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#1a2340', letterSpacing: '-.1px' }}>{s.name}</div>
                </div>
                <div style={{ padding: '4px 10px', borderRadius: 100, fontSize: 12, fontWeight: 700, background: s.gradeBg, color: s.color, border: `.5px solid ${s.gradeBdr}` }}>{s.grade}</div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}><span style={{ fontSize: 10, fontWeight: 600, color: '#8892b0' }}>Progress</span><span style={{ fontSize: 12, fontWeight: 700, color: '#1a2340' }}>{s.pct}%</span></div>
              <div style={{ height: 5, background: '#ede5d4', borderRadius: 3, overflow: 'hidden', marginBottom: 6 }}><div style={{ height: '100%', borderRadius: 3, background: fillColors[s.fillClass], width: `${s.pct}%` }} /></div>
              <div style={{ fontSize: 10, fontWeight: 600, color: s.color }}>{s.status}</div>
            </div>
          ))}
        </div>
        <div style={{ height: 20 }} />
      </div>
      <SPTabBar />
    </div>
  </div>
);

/* ═══ SCREEN 2: Trend & AI ═══ */
export const PerformanceTrend = () => (
  <div className="sp-wrap">
    <div className="sp-label">Trend & AI Analysis</div>
    <div className="sp">
      <div className="sp-di" />
      <div className="sp-scroll">
        <SPH />
        <div style={{ padding: '18px 20px 0' }}>
          <div style={{ fontSize: 24, fontWeight: 700, color: '#1a2340', letterSpacing: '-.5px' }}>Performance Trend</div>
          <div style={{ fontSize: 12, color: '#8892b0', marginTop: 4 }}>Jan – Apr progress across subjects</div>
        </div>
        {/* Chart card */}
        <div style={{ margin: '12px 16px 0', background: '#fff', borderRadius: 20, padding: 16, boxShadow: '0 0 0 .5px rgba(40,57,108,.06), 0 2px 8px rgba(40,57,108,.06), 0 10px 28px rgba(40,57,108,.08)', border: '.5px solid rgba(40,57,108,.06)' }}>
          <svg viewBox="0 0 300 140" width="100%" style={{ display: 'block' }}>
            <defs>
              <linearGradient id="gG2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#2EBC71" stopOpacity=".15" /><stop offset="100%" stopColor="#2EBC71" stopOpacity="0" /></linearGradient>
              <linearGradient id="gT2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#2AACBC" stopOpacity=".12" /><stop offset="100%" stopColor="#2AACBC" stopOpacity="0" /></linearGradient>
            </defs>
            <line x1="30" y1="10" x2="290" y2="10" stroke="#ede5d4" strokeWidth=".5" />
            <line x1="30" y1="40" x2="290" y2="40" stroke="#ede5d4" strokeWidth=".5" />
            <line x1="30" y1="70" x2="290" y2="70" stroke="#ede5d4" strokeWidth=".5" />
            <line x1="30" y1="100" x2="290" y2="100" stroke="#ede5d4" strokeWidth=".5" />
            <line x1="30" y1="125" x2="290" y2="125" stroke="#ede5d4" strokeWidth=".5" />
            <text x="6" y="14" fontSize="8" fill="#c0c8dc">100</text>
            <text x="10" y="44" fontSize="8" fill="#c0c8dc">80</text>
            <text x="10" y="74" fontSize="8" fill="#c0c8dc">60</text>
            <text x="42" y="137" fontSize="8" fill="#c0c8dc">Jan</text>
            <text x="112" y="137" fontSize="8" fill="#c0c8dc">Feb</text>
            <text x="182" y="137" fontSize="8" fill="#c0c8dc">Mar</text>
            <text x="252" y="137" fontSize="8" fill="#c0c8dc">Apr</text>
            {/* English */}
            <polyline fill="none" stroke="#2ebc71" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" points="50,75 120,60 190,25 260,12" />
            <polygon fill="url(#gG2)" points="50,75 120,60 190,25 260,12 260,125 50,125" />
            <circle cx="260" cy="12" r="4" fill="#2ebc71" stroke="#fff" strokeWidth="2" />
            {/* Practical */}
            <polyline fill="none" stroke="#2aacbc" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" points="50,95 120,92 190,75 260,45" />
            <polygon fill="url(#gT2)" points="50,95 120,92 190,75 260,45 260,125 50,125" />
            <circle cx="260" cy="45" r="4" fill="#2aacbc" stroke="#fff" strokeWidth="2" />
            {/* Unit 1 */}
            <polyline fill="none" stroke="#28396c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" points="50,88 120,80 190,42 260,22" />
            <circle cx="260" cy="22" r="4" fill="#28396c" stroke="#fff" strokeWidth="2" />
          </svg>
          <div style={{ display: 'flex', gap: 14, marginTop: 10, flexWrap: 'wrap' as const }}>
            {[{ c: '#2ebc71', l: 'English' }, { c: '#2aacbc', l: 'Eng Practical' }, { c: '#28396c', l: 'Unit 1' }].map((lg) => (
              <div key={lg.l} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 10, fontWeight: 600, color: '#4a5578' }}><div style={{ width: 7, height: 7, borderRadius: '50%', background: lg.c }} />{lg.l}</div>
            ))}
          </div>
        </div>
        {/* AI card */}
        <div style={{ margin: '12px 16px 0', background: 'linear-gradient(140deg,#28396c,#1e2d57)', borderRadius: 20, padding: 16, position: 'relative', overflow: 'hidden', boxShadow: '0 8px 32px rgba(40,57,108,.25)' }}>
          <div style={{ position: 'absolute', top: -30, right: -16, width: 130, height: 130, background: 'radial-gradient(circle,rgba(255,255,255,.07) 0%,transparent 65%)', borderRadius: '50%' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 12, position: 'relative', zIndex: 1 }}>
            <div style={{ width: 32, height: 32, borderRadius: 10, background: 'rgba(255,255,255,.12)', border: '.5px solid rgba(255,255,255,.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.8)" strokeWidth="2" strokeLinecap="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
            </div>
            <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,.5)' }}>AI Narrative Analysis</div>
          </div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,.88)', lineHeight: 1.7, position: 'relative', zIndex: 1 }}>Tanveer is performing best in English with <strong style={{ color: '#fff', fontWeight: 600 }}>98%</strong> this term — an excellent result. Overall performance is outstanding.</div>
          <div style={{ marginTop: 12, paddingTop: 12, borderTop: '.5px solid rgba(255,255,255,.08)', display: 'flex', alignItems: 'center', gap: 5, position: 'relative', zIndex: 1 }}>
            <div style={{ width: 5, height: 5, background: '#2ebc71', borderRadius: '50%', boxShadow: '0 0 0 2px rgba(46,188,113,.25)' }} />
            <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,.35)' }}>Generated from real-time data</div>
          </div>
        </div>
        <div style={{ height: 20 }} />
      </div>
      <SPTabBar />
    </div>
  </div>
);

/* ═══ SCREEN 3: Goals & Benchmarks ═══ */
export const PerformanceGoals = () => (
  <div className="sp-wrap">
    <div className="sp-label">Goals & Benchmarks</div>
    <div className="sp">
      <div className="sp-di" />
      <div className="sp-scroll">
        <SPH />
        {/* AI card */}
        <div style={{ margin: '14px 16px 0', background: 'linear-gradient(140deg,#28396c,#1e2d57)', borderRadius: 20, padding: 16, position: 'relative', overflow: 'hidden', boxShadow: '0 8px 32px rgba(40,57,108,.25)' }}>
          <div style={{ position: 'absolute', top: -30, right: -16, width: 130, height: 130, background: 'radial-gradient(circle,rgba(255,255,255,.07) 0%,transparent 65%)', borderRadius: '50%' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 12, position: 'relative', zIndex: 1 }}>
            <div style={{ width: 32, height: 32, borderRadius: 10, background: 'rgba(255,255,255,.12)', border: '.5px solid rgba(255,255,255,.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>⚡</div>
            <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,.5)' }}>AI Narrative Analysis</div>
          </div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,.88)', lineHeight: 1.7, position: 'relative', zIndex: 1 }}>Tanveer is performing best in English with <strong style={{ color: '#fff', fontWeight: 600 }}>98%</strong> — outstanding! Keep up the great work!</div>
        </div>
        {/* Goal setting */}
        <div style={{ margin: '12px 16px 0', background: '#fff', borderRadius: 20, padding: 16, boxShadow: '0 0 0 .5px rgba(40,57,108,.06), 0 2px 8px rgba(40,57,108,.06), 0 10px 28px rgba(40,57,108,.08)', border: '.5px solid rgba(40,57,108,.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <div style={{ width: 40, height: 40, borderRadius: 13, background: 'rgba(245,156,42,.1)', border: '.5px solid rgba(245,156,42,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>🎯</div>
            <div><div style={{ fontSize: 15, fontWeight: 700, color: '#1a2340', letterSpacing: '-.2px' }}>Goal Setting AI</div><div style={{ fontSize: 11, color: '#8892b0', marginTop: 2 }}>Set a target and get a personalised plan</div></div>
          </div>
          <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.09em', textTransform: 'uppercase' as const, color: '#c0c8dc', marginBottom: 6 }}>Subject</div>
          <div style={{ width: '100%', padding: '11px 14px', background: '#f5efe2', borderRadius: 12, border: '.5px solid rgba(40,57,108,.07)', fontSize: 13, fontWeight: 500, color: '#1a2340', marginBottom: 14, display: 'flex', justifyContent: 'space-between' }}>English — Current: 98%<span style={{ opacity: .35 }}>▼</span></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}><span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase' as const, color: '#c0c8dc' }}>Target Score</span><span style={{ fontSize: 14, fontWeight: 700, color: '#f59c2a' }}>80%</span></div>
          <div style={{ position: 'relative', marginBottom: 6 }}>
            <div style={{ height: 5, background: '#ede5d4', borderRadius: 3, overflow: 'hidden' }}><div style={{ height: '100%', background: 'linear-gradient(90deg,#f59c2a,#f5b842)', borderRadius: 3, width: '60%' }} /></div>
            <div style={{ position: 'absolute', top: '50%', left: '60%', transform: 'translate(-50%,-50%)', width: 18, height: 18, borderRadius: '50%', background: '#fff', boxShadow: '0 2px 8px rgba(40,57,108,.2), 0 0 0 2.5px rgba(245,156,42,.25)', border: '2px solid #f59c2a' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9, fontWeight: 600, color: '#c0c8dc', marginBottom: 12 }}><span>50%</span><span>75%</span><span>100%</span></div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, padding: '12px 14px', background: 'rgba(46,188,113,.1)', borderRadius: 14, border: '.5px solid rgba(46,188,113,.2)' }}>
            <div style={{ fontSize: 16, flexShrink: 0, marginTop: 1 }}>✅</div>
            <div><div style={{ fontSize: 13, fontWeight: 700, color: '#1e9a5a', letterSpacing: '-.1px' }}>Target already achieved in English!</div><div style={{ fontSize: 11, color: 'rgba(30,154,90,.7)', marginTop: 2 }}>Maintain consistency to stay at this level.</div></div>
          </div>
        </div>
        {/* Benchmark */}
        <div style={{ margin: '12px 16px 0', background: '#fff', borderRadius: 20, padding: 16, boxShadow: '0 0 0 .5px rgba(40,57,108,.06), 0 2px 8px rgba(40,57,108,.06), 0 10px 28px rgba(40,57,108,.08)', border: '.5px solid rgba(40,57,108,.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <div style={{ width: 40, height: 40, borderRadius: 13, background: 'rgba(40,57,108,.08)', border: '.5px solid rgba(40,57,108,.13)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>🏆</div>
            <div><div style={{ fontSize: 15, fontWeight: 700, color: '#1a2340', letterSpacing: '-.2px' }}>Benchmark Insights</div><div style={{ fontSize: 11, color: '#8892b0', marginTop: 2 }}>Where Tanveer stands vs benchmarks</div></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {[
              { name: 'English', emoji: '🏆', rank: 'Top 10%', rankBg: 'rgba(46,188,113,.1)', rankC: '#1e9a5a', rankBdr: 'rgba(46,188,113,.2)', score: '98%' },
              { name: 'Eng Practical', emoji: '📐', rank: 'Top 40%', rankBg: 'rgba(42,172,188,.1)', rankC: '#1a7a8a', rankBdr: 'rgba(42,172,188,.2)', score: '75%' },
            ].map((b) => (
              <div key={b.name} style={{ background: '#f5efe2', borderRadius: 16, padding: '14px 12px', border: '.5px solid rgba(40,57,108,.07)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}><span style={{ fontSize: 12, fontWeight: 600, color: '#1a2340' }}>{b.name}</span><span style={{ fontSize: 16 }}>{b.emoji}</span></div>
                <div style={{ display: 'inline-flex', padding: '4px 9px', borderRadius: 100, fontSize: 11, fontWeight: 700, background: b.rankBg, color: b.rankC, border: `.5px solid ${b.rankBdr}`, marginBottom: 5 }}>{b.rank}</div>
                <div style={{ fontSize: 11, color: '#8892b0' }}>Score: {b.score}</div>
              </div>
            ))}
            <div style={{ gridColumn: 'span 2', background: '#f5efe2', borderRadius: 16, padding: '14px 12px', border: '.5px solid rgba(40,57,108,.07)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}><span style={{ fontSize: 12, fontWeight: 600, color: '#1a2340' }}>Unit 1</span><span style={{ fontSize: 16 }}>⭐</span></div>
              <div style={{ display: 'inline-flex', padding: '4px 9px', borderRadius: 100, fontSize: 11, fontWeight: 700, background: 'rgba(245,156,42,.1)', color: '#c07a10', border: '.5px solid rgba(245,156,42,.2)', marginBottom: 5 }}>Top 20%</div>
              <div style={{ fontSize: 11, color: '#8892b0' }}>Score: 89%</div>
            </div>
          </div>
          <div style={{ fontSize: 10, color: '#c0c8dc', lineHeight: 1.55, marginTop: 12, paddingTop: 12, borderTop: '.5px solid rgba(40,57,108,.07)' }}>Rankings based on national academic performance benchmarks. No other student's data is used.</div>
        </div>
        <div style={{ height: 20 }} />
      </div>
      <SPTabBar />
    </div>
  </div>
);
