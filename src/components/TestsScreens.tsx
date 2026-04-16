import React from 'react';

const TabProfile = () => <svg viewBox="0 0 18 18"><circle cx="9" cy="7" r="3" /><path d="M3 17c0 0 1.5-4 6-4s6 4 6 4" /></svg>;
const TabClasses = () => <svg viewBox="0 0 18 18"><rect x="2" y="2" width="5" height="5" rx="1.2" /><rect x="11" y="2" width="5" height="5" rx="1.2" /><rect x="2" y="11" width="5" height="5" rx="1.2" /><rect x="11" y="11" width="5" height="5" rx="1.2" /></svg>;

const TestsTabBar = () => (
  <div className="ph-tab">
    {[
      { label: 'Dashboard', icon: <TabClasses /> },
      { label: 'Attendance', icon: <svg viewBox="0 0 18 18"><polyline points="2.5,8.5 6,12 13.5,4" /></svg> },
      { label: 'Tests', icon: <svg viewBox="0 0 18 18"><rect x="2" y="2" width="14" height="14" rx="2" /><line x1="5.5" y1="7" x2="12.5" y2="7" /><line x1="5.5" y1="10" x2="9.5" y2="10" /></svg> },
      { label: 'Profile', icon: <TabProfile /> },
    ].map((t, i) => (
      <div key={t.label} className={`ph-tab-item ${i === 2 ? 'on' : ''}`}>
        {t.icon}<span>{t.label}</span>{i === 2 && <div className="ph-tab-pip" />}
      </div>
    ))}
  </div>
);

const DarkNav = () => (
  <div className="ph-set-nav">
    <div className="ph-ham"><div className="ph-ham-line" style={{ height: '1.5px', width: '18px' }} /><div className="ph-ham-line" style={{ height: '1.5px', width: '12px' }} /><div className="ph-ham-line" style={{ height: '1.5px', width: '18px' }} /></div>
    <div className="ph-set-nav-title">Tests &amp; Exams</div>
    <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#3b5bdb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 500, color: '#fff', border: '2px solid rgba(255,255,255,.15)' }}>JS</div>
  </div>
);

export const TestsOverview = () => (
  <div className="phone-wrap">
    <div className="phone-label">Tests &amp; exams overview</div>
    <div className="phone">
      <div className="ph-bar" />
      <div style={{ background: '#08090c' }}>
        <DarkNav />
        <div style={{ padding: '14px 16px 22px' }}>
          <div style={{ fontSize: 9, fontWeight: 500, color: 'rgba(255,255,255,.3)', letterSpacing: '.07em', textTransform: 'uppercase' as const, marginBottom: 4 }}>Tests &amp; Exams</div>
          <div style={{ fontSize: 20, fontWeight: 500, color: '#fff', letterSpacing: '-.4px', lineHeight: 1.15 }}>Track &amp; analyze<br />performance</div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,.3)', marginTop: 3 }}>Manage tests and review class progress.</div>
        </div>
      </div>
      <div className="ph-body">
        <div style={{ width: '100%', padding: 13, borderRadius: 13, background: '#3b5bdb', color: '#fff', fontSize: 13, fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7 }}>+ Create test</div>
        <div className="ph-mgrid">
          {[
            { v: '0', l: 'Upcoming', bg: '#fff9db', c: '#c87014' },
            { v: '1', l: 'Completed', bg: '#ebfbee', c: '#087f5b' },
            { v: '0', l: 'Pending scores', bg: '#fff5f5', c: '#08090c' },
            { v: '73.8%', l: 'Class avg', bg: '#edf2ff', c: '#3b5bdb' },
          ].map((m) => (
            <div key={m.l} className="ph-mc-stu">
              <div className="ph-mc-stu-top"><div className="ph-mc-stu-ico" style={{ background: m.bg }}>📊</div></div>
              <div className="ph-mc-stu-val" style={{ color: m.c }}>{m.v}</div>
              <div className="ph-mc-stu-lbl">{m.l}</div>
              <div className="ph-mc-stu-bar"><div style={{ height: '100%', borderRadius: 2, background: m.c, width: m.v.includes('%') ? m.v : m.v === '0' ? '0%' : '100%' }} /></div>
            </div>
          ))}
        </div>
        <div style={{ background: '#fff', border: '1px solid #e2e5ee', borderRadius: 18, overflow: 'hidden' }}>
          <div style={{ padding: '13px 14px', borderBottom: '1px solid #eceef4', fontSize: 14, fontWeight: 500, color: '#08090c' }}>Test schedule</div>
          <div style={{ padding: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 30, height: 30, borderRadius: 9, background: '#f3f0ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>📝</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 500, color: '#08090c' }}>English</div>
                <div style={{ fontSize: 11, color: '#8c92a4' }}>10B · 2 students · Apr 6, 2026</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TestsTabBar />
    </div>
  </div>
);

export const CreateTestForm = () => (
  <div className="phone-wrap">
    <div className="phone-label">Create test</div>
    <div className="phone">
      <div className="ph-bar" />
      <div style={{ background: '#08090c' }}>
        <DarkNav />
        <div style={{ padding: '14px 18px 22px' }}>
          <div style={{ fontSize: 10, fontWeight: 500, color: 'rgba(255,255,255,.3)', letterSpacing: '.07em', textTransform: 'uppercase' as const, marginBottom: 5 }}>New test</div>
          <div style={{ fontSize: 22, fontWeight: 500, color: '#fff', letterSpacing: '-.4px' }}>Create test</div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,.3)', marginTop: 4 }}>Set up a new test and publish.</div>
        </div>
      </div>
      <div className="ph-body">
        <div style={{ background: '#fff', border: '1px solid #e2e5ee', borderRadius: 18, padding: 14 }}>
          {[
            { l: 'Test name', v: 'e.g. Chapter 5 Unit Test' },
            { l: 'Category', v: 'Unit Test' },
            { l: 'Subject', v: 'English' },
            { l: 'Total marks', v: '100' },
            { l: 'Test date', v: 'Apr 20, 2026' },
          ].map((f) => (
            <div key={f.l} style={{ marginBottom: 12 }}>
              <div style={{ fontSize: 10, fontWeight: 500, color: '#8c92a4', letterSpacing: '.07em', textTransform: 'uppercase' as const, marginBottom: 6 }}>{f.l}</div>
              <div className="ph-field-input">{f.v}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={{ flex: 1, padding: 11, borderRadius: 11, background: '#3b5bdb', color: '#fff', fontSize: 13, fontWeight: 500, textAlign: 'center' as const }}>Create &amp; publish</div>
        </div>
      </div>
      <TestsTabBar />
    </div>
  </div>
);
