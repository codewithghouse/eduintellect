/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

const SPTabBar = ({ activeIdx = 3 }: { activeIdx?: number }) => (
  <div className="sp-tabbar">
    {[
      { label: 'Home', d: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10' },
      { label: 'Tests', d: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z M14 2v6h6' },
      { label: 'Progress', d: 'M18 20V10 M12 20V4 M6 20V14' },
      { label: 'Profile', d: 'M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2 M12 3a4 4 0 100 8 4 4 0 000-8' },
      { label: 'Messages', d: 'M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z' },
    ].map((t, i) => (
      <div key={t.label} className={`sp-ti ${i === activeIdx ? 'act' : ''}`}>
        <svg viewBox="0 0 24 24"><path d={t.d} /></svg>
        <span>{t.label}</span>
      </div>
    ))}
  </div>
);

const SPHeader = () => (
  <div className="sp-hdr">
    <div className="sp-brand"><div className="sp-live-dot" /><span className="sp-brand-txt">Edullent</span></div>
    <div className="sp-av">S</div>
  </div>
);

const MailIcon = () => (
  <div className="sp-mail-btn"><svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg></div>
);

const Teachers = () => (
  <div className="sp-teachers">
    {[
      { initials: 'JS', name: 'Jamal Sir', role: 'Class Teacher · Shaik sir', bg: 'linear-gradient(140deg,#1e7a5a,#2ebc71)' },
      { initials: 'PS', name: 'Pasha Sir', role: 'Islamic Read', bg: 'linear-gradient(140deg,#2ebc71,#1e9e5c)' },
    ].map((t) => (
      <div key={t.initials} className="sp-teacher-row">
        <div className="sp-teacher-av" style={{ background: t.bg }}>{t.initials}</div>
        <div style={{ flex: 1 }}><div className="sp-teacher-name">{t.name}</div><div className="sp-teacher-role">{t.role}</div></div>
        <MailIcon />
      </div>
    ))}
  </div>
);

const InfoGrid = () => (
  <div className="sp-info-grid">
    {['Date of Birth', 'Blood Group', 'Emergency Contact', 'Admission Date'].map((l) => (
      <div key={l} className="sp-info-cell"><div className="sp-info-lbl">{l}</div><div className="sp-info-val sp-info-empty">Not set</div></div>
    ))}
  </div>
);

/* ═══ SCREEN 1: Student Profile ═══ */
export const StudentProfileScreen = () => (
  <div className="sp-wrap">
    <div className="sp-label">Student Profile</div>
    <div className="sp">
      <div className="sp-di" />
      <div className="sp-scroll">
        <SPHeader />
        <div className="sp-page-title"><div className="sp-page-title-text">Student Profile</div><div className="sp-active-badge">Active</div></div>
        <div className="sp-edit-btn">
          <svg viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
          Edit Profile
        </div>
        <div className="sp-prof-hero">
          <div className="sp-prof-av">SM</div>
          <div className="sp-prof-name">Syed Muqeeth</div>
          <div className="sp-tag-row">
            <div className="sp-tag sp-tag-active">Active</div>
            <div className="sp-tag sp-tag-year">2025–26</div>
            <div className="sp-tag sp-tag-grade">Grade Shaik Sir</div>
          </div>
        </div>
        <div className="sp-sec-hdr"><div className="sp-sec-txt">Personal Info</div><div className="sp-sec-line" /></div>
        <InfoGrid />
        <div className="sp-sec-title">Teachers</div>
        <Teachers />
        <div style={{ height: 20 }} />
      </div>
      <SPTabBar />
    </div>
  </div>
);

/* ═══ SCREEN 2: Term Overview ═══ */
export const TermOverviewScreen = () => (
  <div className="sp-wrap">
    <div className="sp-label">Term Overview</div>
    <div className="sp">
      <div className="sp-di" />
      <div className="sp-scroll">
        <SPHeader />
        <div className="sp-sec-hdr" style={{ marginTop: 16 }}><div className="sp-sec-txt">Personal Info</div><div className="sp-sec-line" /></div>
        <InfoGrid />
        <div className="sp-sec-title">Teachers</div>
        <Teachers />
        <div className="sp-stats-banner">
          <div className="sp-sb-title">Quick Summary</div>
          <div className="sp-sb-grid">
            {[
              { val: '100%', lbl: 'Attendance' },
              { val: '0/0', lbl: 'Assignments' },
              { val: '0', lbl: 'Tests Taken' },
              { val: '—', lbl: 'Average Grade' },
            ].map((s) => (
              <div key={s.lbl}><div className="sp-sb-val">{s.val}</div><div className="sp-sb-lbl">{s.lbl}</div></div>
            ))}
          </div>
        </div>
        <div className="sp-sec-hdr"><div className="sp-sec-txt">This Term Overview</div><div className="sp-sec-line" /></div>
        <div className="sp-overview">
          {[
            { emoji: '✅', bg: 'rgba(46,188,113,.1)', label: 'Attendance', val: '100%', valColor: '#2ebc71' },
            { emoji: '📋', bg: 'rgba(40,57,108,.1)', label: 'Assignments', val: '0/0', valColor: '#2ebc71' },
            { emoji: '📝', bg: 'rgba(245,156,42,.1)', label: 'Tests Taken', val: '0', valColor: '#f59c2a' },
            { emoji: '⭐', bg: '#fffae8', label: 'Average Grade', val: '—', valColor: '#2ebc71' },
          ].map((o) => (
            <div key={o.label} className="sp-ov-row">
              <div className="sp-ov-ico" style={{ background: o.bg }}>{o.emoji}</div>
              <div className="sp-ov-label">{o.label}</div>
              <div className="sp-ov-val" style={{ color: o.valColor }}>{o.val}</div>
            </div>
          ))}
        </div>
        <div className="sp-sec-hdr"><div className="sp-sec-txt">Quick Actions</div><div className="sp-sec-line" /></div>
        <div className="sp-qa">
          {[
            { bg: 'rgba(40,57,108,.1)', stroke: '#28396c', label: 'View Report', sub: 'Weekly AI', d: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z M14 2v6h6 M16 13H8' },
            { bg: 'rgba(46,188,113,.1)', stroke: '#2ebc71', label: 'Attendance', sub: '100% This term', d: 'M9 11l3 3L22 4 M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11' },
            { bg: 'rgba(245,156,42,.1)', stroke: '#f59c2a', label: 'Tests', sub: '0 upcoming', d: 'M12 2a10 10 0 100 20 10 10 0 000-20z M12 6v6l4 2' },
            { bg: 'rgba(40,57,108,.06)', stroke: '#4a5578', label: 'Message', sub: 'Contact teacher', d: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6' },
          ].map((q) => (
            <div key={q.label} className="sp-qa-btn">
              <div className="sp-qa-ico" style={{ background: q.bg }}><svg style={{ stroke: q.stroke }} viewBox="0 0 24 24"><path d={q.d} /></svg></div>
              <div><div className="sp-qa-lbl">{q.label}</div><div className="sp-qa-sub">{q.sub}</div></div>
            </div>
          ))}
        </div>
        <div style={{ height: 20 }} />
      </div>
      <SPTabBar />
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════
   TEACHER DASHBOARD — Student management screens
   (imported by TeacherDashboard.tsx)
   ═══════════════════════════════════════════════════════ */
const TNav = () => (<div className="ph-set-nav"><div className="ph-ham"><div className="ph-ham-line" style={{ height: '1.5px', width: '18px' }} /><div className="ph-ham-line" style={{ height: '1.5px', width: '12px' }} /><div className="ph-ham-line" style={{ height: '1.5px', width: '18px' }} /></div><div className="ph-set-nav-title">Students</div><div style={{ width: 32, height: 32, borderRadius: '50%', background: '#3b5bdb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 500, color: '#fff', border: '2px solid rgba(255,255,255,.15)' }}>JS</div></div>);
const TProfHdr = () => (<div className="ph-prof-header"><div className="ph-prof-back"><svg viewBox="0 0 13 13"><polyline points="8,2 3,6.5 8,11" /></svg><span>All students</span></div><div className="ph-prof-eyebrow">Student profile</div><div className="ph-prof-row"><div className="ph-prof-av" style={{ background: '#fff9db', color: '#c87014' }}>SM</div><div><div className="ph-prof-name">Syed Muqeeth</div><div className="ph-prof-sub">Class Shaik sir · Roll: 897</div></div></div><div className="ph-prof-actions"><div className="ph-prof-ghost">Message</div><div className="ph-prof-solid">Contact parent</div></div></div>);
const StudentsTab = () => (<div className="ph-tab">{[{ l: 'Dashboard' }, { l: 'Students' }, { l: 'Tests' }, { l: 'Profile' }].map((t, i) => (<div key={t.l} className={`ph-tab-item ${i === 1 ? 'on' : ''}`}><svg viewBox="0 0 18 18"><rect x="2" y="2" width="14" height="14" rx="2" /></svg><span>{t.l}</span>{i === 1 && <div className="ph-tab-pip" />}</div>))}</div>);

const stuCards = [
  { ini: 'SM', name: 'Syed Muqeeth', roll: 'Shaik sir · Roll 897', bg: '#fff9db', col: '#c87014', band: '#c87014', bdg: 'Attention', bdgBg: '#fff9db', att: 86, avg: 50, avgC: '#c87014' },
  { ini: 'TA', name: 'Tanveer Sultana', roll: 'Shaik sir · Roll 898', bg: '#e3fafc', col: '#0c8599', band: '#2f9e44', bdg: 'Good', bdgBg: '#ebfbee', bdgC: '#087f5b', att: 86, avg: 97.5, avgC: '#087f5b' },
];

export const StudentsList = () => (
  <div className="phone-wrap"><div className="phone-label">Students overview</div><div className="phone"><div className="ph-bar" /><div style={{ background: '#08090c' }}><TNav /><div style={{ padding: '14px 16px 22px' }}><div style={{ fontSize: 20, fontWeight: 500, color: '#fff', letterSpacing: '-.4px' }}>Your students</div><div style={{ fontSize: 11, color: 'rgba(255,255,255,.3)', marginTop: 3 }}>View and manage students across classes.</div></div></div><div className="ph-body"><div className="ph-srch-wrap"><svg className="ph-srch-ico" viewBox="0 0 14 14"><circle cx="6" cy="6" r="4" /><line x1="9" y1="9" x2="12.5" y2="12.5" /></svg><div className="ph-srch">Search by name or roll...</div></div>{stuCards.map((s) => (<div key={s.ini+s.name} className="ph-stcard"><div className="ph-stcard-band" style={{ background: s.band }} /><div className="ph-stcard-body"><div className="ph-stcard-top"><div className="ph-stcard-info"><div className="ph-stcard-av" style={{ background: s.bg, color: s.col }}>{s.ini}</div><div><div className="ph-stcard-name">{s.name}</div><div className="ph-stcard-roll">{s.roll}</div></div></div><span style={{ padding: '3px 8px', borderRadius: 20, fontSize: 10, fontWeight: 500, background: s.bdgBg, color: s.bdgC || s.col }}>{s.bdg}</span></div><div className="ph-stcard-bars"><div className="ph-bar-row"><div className="ph-bar-lbl">Attendance</div><div className="ph-bar-track"><div className="ph-bar-fill" style={{ width: `${s.att}%`, background: '#3b5bdb' }} /></div><div className="ph-bar-pct" style={{ color: '#3b5bdb' }}>{s.att}%</div></div><div className="ph-bar-row"><div className="ph-bar-lbl">Avg. score</div><div className="ph-bar-track"><div className="ph-bar-fill" style={{ width: `${s.avg}%`, background: s.avgC }} /></div><div className="ph-bar-pct" style={{ color: s.avgC }}>{s.avg}%</div></div></div><div className="ph-view-btn">View profile</div></div></div>))}</div><StudentsTab /></div></div>
);

export const StudentProfileOverview = () => (
  <div className="phone-wrap"><div className="phone-label">Student profile</div><div className="phone"><div className="ph-bar" /><div style={{ background: '#08090c' }}><TNav /><TProfHdr /></div><div className="ph-tab-strip"><div className="ph-tab-strip-item on">Overview</div><div className="ph-tab-strip-item">Academic</div><div className="ph-tab-strip-item">Attendance</div><div className="ph-tab-strip-item">Feedback</div></div><div className="ph-body"><div style={{ background: '#fff', border: '1px solid #e2e5ee', borderRadius: 16, padding: 13 }}><div style={{ fontSize: 13, fontWeight: 500, color: '#08090c', marginBottom: 10 }}>Quick stats</div><div className="ph-qgrid">{[{ v: '86%', l: 'Attendance', c: '#087f5b' }, { v: '50%', l: 'Avg. score', c: '#c87014' }, { v: 'N/A', l: 'Submission', c: '#8c92a4' }, { v: '1', l: 'Tests', c: '#3b5bdb' }].map((q) => (<div key={q.l} className="ph-qcard"><div className="ph-q-val" style={{ color: q.c }}>{q.v}</div><div className="ph-q-lbl">{q.l}</div></div>))}</div></div><div style={{ background: '#ebfbee', border: '1px solid #8ce99a', borderRadius: 13, padding: '11px 13px', display: 'flex', alignItems: 'center', gap: 9 }}><div style={{ fontSize: 12, fontWeight: 500, color: '#087f5b' }}>No risk alerts — performing well.</div></div></div><StudentsTab /></div></div>
);

export const StudentFeedback = () => (
  <div className="phone-wrap"><div className="phone-label">Feedback & behaviour</div><div className="phone"><div className="ph-bar" /><div style={{ background: '#08090c' }}><TNav /><TProfHdr /></div><div className="ph-tab-strip"><div className="ph-tab-strip-item">Overview</div><div className="ph-tab-strip-item">Academic</div><div className="ph-tab-strip-item on">Feedback</div><div className="ph-tab-strip-item">Behaviour</div></div><div className="ph-body"><div style={{ background: '#fff', border: '1px solid #e2e5ee', borderRadius: 16, overflow: 'hidden' }}><div style={{ padding: '12px 13px', borderBottom: '1px solid #eceef4', fontSize: 13, fontWeight: 500, color: '#08090c' }}>Write growth feedback</div><div style={{ padding: 13 }}><div className="ph-fb-input">Enter feedback...</div><div style={{ marginTop: 9, padding: 11, borderRadius: 11, background: '#3b5bdb', color: '#fff', fontSize: 12, fontWeight: 500, textAlign: 'center' as const }}>Send feedback</div></div></div><div style={{ background: '#fff', border: '1px solid #e2e5ee', borderRadius: 16, overflow: 'hidden' }}><div style={{ padding: '12px 13px', borderBottom: '1px solid #eceef4', fontSize: 13, fontWeight: 500, color: '#08090c' }}>Past feedback · 2</div>{[{ t: '"Masha Allah good performance"', d: '28/03' }, { t: '"Nice in social subject"', d: '26/03' }].map((f, i) => (<div key={i} style={{ padding: '10px 13px', borderBottom: i < 1 ? '1px solid #eceef4' : 'none' }}><div className="ph-fb-quote">{f.t}</div><div className="ph-fb-meta"><span>{f.d}</span></div></div>))}</div><div style={{ background: '#fff', border: '1px solid #e2e5ee', borderRadius: 16, padding: 13 }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}><div style={{ fontSize: 13, fontWeight: 500, color: '#08090c' }}>Behaviour</div><span style={{ padding: '3px 8px', borderRadius: 20, fontSize: 10, fontWeight: 500, background: '#fff9db', color: '#c87014' }}>5/5</span></div><div className="ph-star-row">{[1,2,3,4,5].map((s) => (<div key={s} className="ph-star"><svg viewBox="0 0 14 14"><polygon points="7,1.5 8.8,5.5 13,6 10,9 10.8,13 7,11 3.2,13 4,9 1,6 5.2,5.5" fill="#c87014" /></svg></div>))}</div></div></div><StudentsTab /></div></div>
);
