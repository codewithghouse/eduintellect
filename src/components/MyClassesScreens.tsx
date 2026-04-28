import React from 'react';

const SPTabBar = () => (
  <div className="sp-tabbar">
    {[
      { label: 'Home', active: true },
      { label: 'Tests' },
      { label: 'Progress' },
      { label: 'Alerts' },
      { label: 'Messages' },
    ].map((t) => (
      <div key={t.label} className={`sp-ti ${t.active ? 'act' : ''}`}>
        <svg viewBox="0 0 24 24"><path d={t.active ? 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z' : t.label === 'Tests' ? 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z M14 2v6h6' : t.label === 'Progress' ? 'M18 20V10 M12 20V4 M6 20V14' : t.label === 'Alerts' ? 'M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9 M13.73 21a2 2 0 01-3.46 0' : 'M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z'} /></svg>
        <span>{t.label}</span>
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
  <div style={{ padding: '18px 20px 0' }}>
    <div style={{ fontSize: 9, fontWeight: 300, letterSpacing: '.12em', textTransform: 'uppercase' as const, color: 'rgba(40,57,108,.5)', marginBottom: 6 }}>Parent Dashboard</div>
    <div style={{ fontSize: 26, fontWeight: 300, color: '#1e2d57', letterSpacing: '-.6px', lineHeight: 1.1 }}>My Classes</div>
    <div style={{ fontSize: 13, color: 'rgba(40,57,108,.45)', marginTop: 4 }}>All enrolled subjects for <strong style={{ color: '#28396c', fontWeight: 400 }}>Tanveer Sultana</strong></div>
  </div>
);

interface ClassCardProps { theme: string; subject: string; subjectIcon: React.ReactNode; teacherInit: string; teacherName: string; teacherBg: string; }
const ClassCard = ({ theme, subject, subjectIcon, teacherInit, teacherName, teacherBg }: ClassCardProps) => (
  <div style={{ margin: '18px 16px 0', borderRadius: 24, overflow: 'hidden', boxShadow: '0 0 0 .5px rgba(40,57,108,.08), 0 4px 18px rgba(40,57,108,.09), 0 22px 52px rgba(40,57,108,.13)' }}>
    {/* Hero */}
    <div style={{ background: theme, padding: '18px 18px 20px', position: 'relative', overflow: 'hidden', minHeight: 130 }}>
      <div style={{ position: 'absolute', top: -24, right: -24, width: 140, height: 140, background: 'radial-gradient(circle,rgba(255,255,255,.14) 0%,transparent 70%)', borderRadius: '50%' }} />
      <div style={{ position: 'absolute', top: 14, right: 14, display: 'inline-flex', alignItems: 'center', gap: 4, padding: '4px 10px', borderRadius: 100, background: 'rgba(255,255,255,.18)', border: '.5px solid rgba(255,255,255,.3)', fontSize: 10, fontWeight: 300, color: '#fff' }}>
        <div style={{ width: 5, height: 5, background: '#2ebc71', borderRadius: '50%', boxShadow: '0 0 0 2px rgba(46,188,113,.3)' }} />Active
      </div>
      <div style={{ width: 40, height: 40, borderRadius: 13, background: 'rgba(255,255,255,.15)', border: '.5px solid rgba(255,255,255,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12, backdropFilter: 'blur(8px)' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" /></svg>
      </div>
      <div style={{ fontSize: 20, fontWeight: 300, color: '#fff', letterSpacing: '-.3px', marginBottom: 8 }}>Class</div>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '5px 10px', borderRadius: 100, background: 'rgba(255,255,255,.15)', border: '.5px solid rgba(255,255,255,.22)', fontSize: 11, fontWeight: 400, color: 'rgba(255,255,255,.9)', backdropFilter: 'blur(8px)' }}>
        {subjectIcon}{subject}
      </div>
    </div>
    {/* Body */}
    <div style={{ background: '#fff', padding: '16px 16px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingBottom: 14, borderBottom: '.5px solid rgba(40,57,108,.07)', marginBottom: 14 }}>
        <div style={{ width: 42, height: 42, borderRadius: 13, background: teacherBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 300, color: '#fff', flexShrink: 0, boxShadow: '0 4px 14px rgba(0,0,0,.15)' }}>{teacherInit}</div>
        <div><div style={{ fontSize: 9, fontWeight: 300, letterSpacing: '.09em', textTransform: 'uppercase' as const, color: 'rgba(40,57,108,.35)' }}>Teacher</div><div style={{ fontSize: 15, fontWeight: 300, color: '#1e2d57', letterSpacing: '-.2px', marginTop: 2 }}>{teacherName}</div></div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 14 }}>
        <div style={{ background: '#fdfaf4', borderRadius: 12, padding: '11px 12px', border: '.5px solid rgba(40,57,108,.07)' }}>
          <div style={{ fontSize: 8, fontWeight: 300, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: 'rgba(40,57,108,.35)', marginBottom: 4 }}>Schedule</div>
          <div style={{ fontSize: 13, fontWeight: 400, color: '#1e2d57' }}>08:30 – 09:30 AM</div>
        </div>
        <div style={{ background: '#fdfaf4', borderRadius: 12, padding: '11px 12px', border: '.5px solid rgba(40,57,108,.07)' }}>
          <div style={{ fontSize: 8, fontWeight: 300, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: 'rgba(40,57,108,.35)', marginBottom: 4 }}>Year</div>
          <div style={{ fontSize: 13, fontWeight: 400, color: '#1e2d57' }}>2025–26</div>
        </div>
      </div>
      <div style={{ margin: '0 -16px', padding: 14, background: theme, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontSize: 14, fontWeight: 300, color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(255,255,255,.1) 0%,transparent 55%)' }} />
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>
        Message Teacher <span style={{ opacity: .7 }}>›</span>
      </div>
    </div>
  </div>
);

/* ═══ SCREEN 1: My Classes ═══ */
export const MyClassesScreen = () => (
  <div className="sp-wrap">
    <div className="sp-label">My Classes</div>
    <div className="sp">
      <div className="sp-di" />
      <div className="sp-scroll">
        <SPHeader />
        <PageHead />
        <ClassCard theme="linear-gradient(140deg,#28396c,#334880)" subject="Shaik Sir" subjectIcon={<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><circle cx="12" cy="8" r="4" /><path d="M6 20v-2a4 4 0 014-4h4a4 4 0 014 4v2" /></svg>} teacherInit="JS" teacherName="Jamal Sir" teacherBg="linear-gradient(140deg,#1a6b50,#2ebc71)" />
        <ClassCard theme="linear-gradient(140deg,#1a6b8a,#2a9bbf)" subject="Islamic Read" subjectIcon={<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></svg>} teacherInit="PS" teacherName="Pasha Sir" teacherBg="linear-gradient(140deg,#1e2d57,#334880)" />
        <div style={{ height: 20 }} />
      </div>
      <SPTabBar />
    </div>
  </div>
);

/* ═══ SCREEN 2: Registry & Enrollment ═══ */
export const RegistryScreen = () => (
  <div className="sp-wrap">
    <div className="sp-label">Registry & Enrollment</div>
    <div className="sp">
      <div className="sp-di" />
      <div className="sp-scroll">
        <SPHeader />
        <PageHead />
        <ClassCard theme="linear-gradient(140deg,#1a6b8a,#2a9bbf)" subject="Islamic Read" subjectIcon={<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></svg>} teacherInit="PS" teacherName="Pasha Sir" teacherBg="linear-gradient(140deg,#1e2d57,#334880)" />

        {/* Registry banner */}
        <div style={{ margin: '14px 16px 0', background: 'linear-gradient(135deg,#28396c,#1e2d57)', borderRadius: 20, padding: 18, position: 'relative', overflow: 'hidden', boxShadow: '0 8px 32px rgba(40,57,108,.25)' }}>
          <div style={{ position: 'absolute', top: -40, right: -30, width: 150, height: 150, background: 'radial-gradient(circle,rgba(255,255,255,.07) 0%,transparent 70%)', borderRadius: '50%' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16, position: 'relative', zIndex: 1 }}>
            <div style={{ width: 44, height: 44, borderRadius: 14, background: 'rgba(255,255,255,.1)', border: '.5px solid rgba(255,255,255,.16)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.75)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>
            </div>
            <div>
              <div style={{ fontSize: 9, fontWeight: 300, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,.45)', marginBottom: 3 }}>Enrollment Verified</div>
              <div style={{ fontSize: 16, fontWeight: 300, color: '#fff', letterSpacing: '-.2px' }}>Academic Registry Active</div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'rgba(255,255,255,.08)', borderRadius: 14, overflow: 'hidden', position: 'relative', zIndex: 1 }}>
            <div style={{ background: 'rgba(255,255,255,.04)', padding: '14px 16px' }}>
              <div style={{ fontSize: 28, fontWeight: 300, color: '#fff', letterSpacing: '-1px', lineHeight: 1 }}>2</div>
              <div style={{ fontSize: 9, fontWeight: 400, letterSpacing: '.09em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,.4)', marginTop: 3 }}>Subjects</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,.04)', padding: '14px 16px' }}>
              <div style={{ fontSize: 28, fontWeight: 300, color: '#fff', letterSpacing: '-1px', lineHeight: 1 }}>2</div>
              <div style={{ fontSize: 9, fontWeight: 400, letterSpacing: '.09em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,.4)', marginTop: 3 }}>Teachers</div>
            </div>
          </div>
        </div>

        {/* Teachers list */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '18px 20px 0' }}>
          <div style={{ fontSize: 9, fontWeight: 300, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: 'rgba(40,57,108,.38)' }}>Enrolled Teachers</div>
          <div style={{ flex: 1, height: '.5px', background: 'rgba(40,57,108,.14)' }} />
        </div>
        <div style={{ margin: '10px 16px 0', background: '#fff', borderRadius: 18, overflow: 'hidden', boxShadow: '0 0 0 .5px rgba(40,57,108,.06), 0 2px 8px rgba(40,57,108,.06), 0 10px 28px rgba(40,57,108,.08)', border: '.5px solid rgba(40,57,108,.06)' }}>
          {[
            { ini: 'JS', name: 'Jamal Sir', role: 'Class Teacher · Shaik sir', bg: 'linear-gradient(140deg,#1a6b50,#2ebc71)' },
            { ini: 'PS', name: 'Pasha Sir', role: 'Islamic Read', bg: 'linear-gradient(140deg,#1e2d57,#334880)' },
          ].map((t, i) => (
            <div key={t.ini} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '13px 14px', borderBottom: i === 0 ? '.5px solid rgba(40,57,108,.07)' : 'none' }}>
              <div style={{ width: 42, height: 42, borderRadius: 13, background: t.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 300, color: '#fff', flexShrink: 0 }}>{t.ini}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 400, color: '#1e2d57' }}>{t.name}</div>
                <div style={{ fontSize: 11, color: '#8892b0', marginTop: 1 }}>{t.role}</div>
              </div>
              <div style={{ width: 30, height: 30, borderRadius: 9, background: 'rgba(40,57,108,.09)', border: '.5px solid rgba(40,57,108,.14)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#28396c" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
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
