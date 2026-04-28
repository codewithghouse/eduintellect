import React from 'react';

const PPTabBar = () => (
  <div className="pp-tabbar">
    <div className="pp-ti act"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg><span>Home</span></div>
    <div className="pp-ti"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></svg><span>Tests</span></div>
    <div className="pp-ti"><svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg><span>Progress</span></div>
    <div className="pp-ti"><svg viewBox="0 0 24 24"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" /></svg><span>Alerts</span></div>
    <div className="pp-ti"><svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg><span>Messages</span></div>
  </div>
);

const PPHeader = () => (
  <div className="pp-hdr">
    <div className="pp-brand"><div className="pp-live-dot" /><span className="pp-brand-txt">EduIntellect</span></div>
    <div className="pp-av">S</div>
  </div>
);

/* ═══ SCREEN 1: Home ═══ */
export const ParentHome = () => (
  <div className="pp-wrap">
    <div className="pp-label">Home</div>
    <div className="pp">
      <div className="pp-di" />
      <div className="pp-scroll">
        <PPHeader />
        <div className="pp-greet">
          <div className="pp-greet-title">Good Afternoon,<br /><span className="pp-greet-hl">Syed</span> 👋</div>
          <div className="pp-greet-sub">Here's how Syed is doing today</div>
        </div>
        <div className="pp-health">
          <div className="pp-health-title">Academic Health</div>
          <div className="pp-health-sub">Overall performance indicator</div>
          <div className="pp-health-pill">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
            Stable performance
          </div>
          <div className="pp-health-body">
            <div><div className="pp-health-num">32%</div><div className="pp-health-lbl">Needs Attention</div></div>
            <div className="pp-ring">
              <svg viewBox="0 0 80 80" width="80" height="80">
                <circle fill="none" stroke="#ede8f5" strokeWidth="6" cx="40" cy="40" r="34" />
                <circle fill="none" stroke="#0044CC" strokeWidth="6" strokeLinecap="round" cx="40" cy="40" r="34" strokeDasharray="213.63" strokeDashoffset="145.3" />
              </svg>
              <div className="pp-ring-center">32%</div>
            </div>
          </div>
        </div>
        <div className="pp-sg">
          {[
            { label: 'Attendance', val: '100%', st: 'On track ✓', stColor: '#30d158', icoBg: 'rgba(48,209,88,.1)', icoStroke: '#30d158', icon: <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg> },
            { label: 'Pending Work', val: '0', st: 'Due this week', stColor: '#ff9f0a', icoBg: 'rgba(255,159,10,.1)', icoStroke: '#ff9f0a', icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg> },
            { label: 'Upcoming Tests', val: '0', st: 'Next 7 days', stColor: '#c0b2d4', icoBg: 'rgba(107,53,184,.1)', icoStroke: '#0044CC', icon: <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="3" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg> },
            { label: 'Recent Grade', val: 'C', st: 'General', stColor: '#c0b2d4', icoBg: 'rgba(255,111,163,.1)', icoStroke: '#ff6fa3', icon: <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg> },
          ].map((s) => (
            <div key={s.label} className="pp-sc">
              <div className="pp-sc-ico" style={{ background: s.icoBg, border: `.5px solid ${s.icoStroke}25` }}>
                {React.cloneElement(s.icon as React.ReactElement, { style: { stroke: s.icoStroke } })}
              </div>
              <div className="pp-sc-lbl">{s.label}</div>
              <div className="pp-sc-val">{s.val}</div>
              <div className="pp-sc-st" style={{ color: s.stColor }}>{s.st}</div>
            </div>
          ))}
        </div>
        <div className="pp-ai">
          <div className="pp-ai-hdr">
            <div className="pp-ai-hdr-l"><span style={{ fontSize: 13, opacity: .8 }}>✦</span><span className="pp-ai-hdr-txt">EduIntellect AI · Live</span></div>
            <div className="pp-ai-live"><div style={{ width: 5, height: 5, background: '#30d158', borderRadius: '50%' }} />LIVE</div>
          </div>
          <div className="pp-ai-grid">
            <div className="pp-ai-cell"><div className="pp-ai-cell-lbl">Attendance</div><div className="pp-ai-big">100%</div><div className="pp-ai-pill pp-ai-pill-g">✓ On Track</div></div>
            <div className="pp-ai-cell"><div className="pp-ai-cell-lbl">Avg Score</div><div className="pp-ai-big">32%</div><div className="pp-ai-pill pp-ai-pill-p">Needs Work</div></div>
            <div className="pp-ai-cell"><div className="pp-ai-cell-lbl">Assignments</div><div className="pp-ai-big">0</div><div className="pp-ai-sm">pending</div><div className="pp-ai-pill pp-ai-pill-g">✓ All Done</div></div>
            <div className="pp-ai-cell"><div className="pp-ai-cell-lbl">Recent Test</div><div className="pp-ai-big">C</div><div className="pp-ai-sm">General</div></div>
          </div>
          <div className="pp-ai-insight"><span style={{ fontSize: 14 }}>🤖</span><div className="pp-ai-insight-txt"><strong>Syed Muqeeth</strong> is maintaining a steady performance this term. Keep encouraging consistent effort at home.</div></div>
        </div>
        <div style={{ height: 20 }} />
      </div>
      <PPTabBar />
    </div>
  </div>
);

/* ═══ SCREEN 2: Profile & Report ═══ */
export const ParentProfile = () => (
  <div className="pp-wrap">
    <div className="pp-label">Profile & Report</div>
    <div className="pp">
      <div className="pp-di" />
      <div className="pp-scroll">
        <PPHeader />
        <div className="pp-prof">
          <div className="pp-prof-av">SM</div>
          <div className="pp-prof-name">Syed Muqeeth</div>
          <div className="pp-prof-grade">Grade — Shaik sir</div>
          <div className="pp-prof-meta">
            <div className="pp-pm"><div className="pp-pm-lbl">Class Teacher</div><div className="pp-pm-val">Jamal Sir</div></div>
            <div className="pp-pm"><div className="pp-pm-lbl">Academic Year</div><div className="pp-pm-val">2025–26</div></div>
          </div>
        </div>
        <div className="pp-alerts">
          <div className="pp-alerts-title">Recent Alerts</div>
          <div className="pp-alerts-empty">
            <div className="pp-alerts-ico"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg></div>
            <div className="pp-alerts-txt">No alerts right now</div>
          </div>
        </div>
        <div className="pp-rpt">
          <div className="pp-rpt-top">
            <div className="pp-rpt-ico"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg></div>
            <div><div className="pp-rpt-title">Weekly AI Report</div><div className="pp-rpt-sub">New report available Friday</div></div>
          </div>
          <div className="pp-rpt-note">This is last week's report. A new one can be generated this Friday.</div>
        </div>
        <div className="pp-aim">
          <div className="pp-aim-lbl"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>AI Message</div>
          <div className="pp-aim-txt">Hello! Syed Muqeeth had a wonderful week with perfect attendance. While there were no tests this week, his overall average is at 65%, indicating room for growth. We'll continue supporting him.</div>
        </div>
        <div className="pp-dl">
          {[
            { tag: 'Attendance', txt: 'Syed attended all 4 school days this week, showing excellent reliability.' },
            { tag: 'Tests', txt: 'No tests this week, giving Syed a chance to focus on mastering current lessons.' },
            { tag: 'Assignments', txt: 'Syed submitted all 2 assignments, maintaining a perfect completion record.' },
          ].map((r) => (
            <div key={r.tag} className="pp-dl-row"><div className="pp-dl-tag">{r.tag}</div><div className="pp-dl-txt">{r.txt}</div></div>
          ))}
        </div>
        <div style={{ height: 20 }} />
      </div>
      <PPTabBar />
    </div>
  </div>
);

/* ═══ SCREEN 3: Tips & Insights ═══ */
export const ParentTips = () => (
  <div className="pp-wrap">
    <div className="pp-label">Tips & Insights</div>
    <div className="pp">
      <div className="pp-di" />
      <div className="pp-scroll">
        <PPHeader />
        <div className="pp-perf">
          <div className="pp-perf-tag">Overall Performance</div>
          <div className="pp-perf-title">Needs Attention</div>
          <div className="pp-perf-desc">An overall average of 65% suggests Syed is grasping concepts but would benefit from additional support.</div>
        </div>
        <div className="pp-tips-lbl">AI Improvement Tips</div>
        {[
          { emoji: '💡', bg: 'rgba(255,204,0,.1)', title: 'Encourage Syed to review class materials daily', sub: 'Regular review can help reinforce concepts.' },
          { emoji: '🎯', bg: 'rgba(107,53,184,.1)', title: 'Set small, achievable goals for each subject', sub: 'Breaking down learning boosts confidence over time.' },
        ].map((t) => (
          <div key={t.title} className="pp-tip">
            <div className="pp-tip-ico" style={{ background: t.bg }}>{t.emoji}</div>
            <div><div className="pp-tip-title">{t.title}</div><div className="pp-tip-sub">{t.sub}</div></div>
          </div>
        ))}
        <div className="pp-dl-btn">
          <svg width="16" height="16" style={{ stroke: '#fff', fill: 'none', strokeWidth: 2.2, strokeLinecap: 'round', strokeLinejoin: 'round' } as React.CSSProperties} viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
          Download PDF Report
        </div>
        <div className="pp-tips-lbl" style={{ paddingTop: 4 }}>AI Parenting Tips</div>
        <div className="pp-pt">
          <div className="pp-pt-hdr"><div style={{ fontSize: 20 }}>💡</div><div><div className="pp-pt-title">AI Parenting Tips</div><div className="pp-pt-sub">Based on Syed's current data</div></div></div>
          {[
            { n: '1', title: 'Encourage a daily reading habit of 20 minutes', sub: 'Builds vocabulary and comprehension across all subjects.' },
            { n: '2', title: 'Ensure 8–9 hours of sleep on school nights', sub: 'Adequate sleep improves memory retention and focus.' },
            { n: '3', title: 'Schedule a weekly revision session at home', sub: 'Consistent review prevents cramming and improves retention.' },
          ].map((p) => (
            <div key={p.n} className="pp-pt-item">
              <div className="pp-pt-num">{p.n}</div>
              <div><div className="pp-pt-item-title">{p.title}</div><div className="pp-pt-item-sub">{p.sub}</div></div>
            </div>
          ))}
        </div>
        <div style={{ height: 20 }} />
      </div>
      <PPTabBar />
    </div>
  </div>
);
