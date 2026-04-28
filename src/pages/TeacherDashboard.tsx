import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import '../styles/phone-mockup.css';
import { StudentsList, StudentProfileOverview, StudentFeedback } from '../components/StudentScreens';
import { TestsOverview, CreateTestForm } from '../components/TestsScreens';
import { AssignmentsOverview, CreateAssignment } from '../components/AssignmentsScreens';
import { AttendanceOverview, AttendanceConcerns, MarkAttendanceScreen } from '../components/AttendanceScreens';
import TeacherIPadMockup from '../components/TeacherIPadMockup';

/* ───── SVG icon helpers ───── */
const BackArrow = () => (
  <svg viewBox="0 0 14 14"><polyline points="9,2 4,7 9,12" /></svg>
);
const DotsV = () => (
  <svg viewBox="0 0 14 14"><circle cx="7" cy="4" r=".9" /><circle cx="7" cy="7" r=".9" /><circle cx="7" cy="10" r=".9" /></svg>
);
const InfoCircle = () => (
  <svg viewBox="0 0 14 14"><circle cx="7" cy="7" r="5" /><line x1="7" y1="4.5" x2="7" y2="7.5" /><circle cx="7" cy="9.5" r=".5" fill="rgba(255,255,255,.6)" stroke="none" /></svg>
);
const PlusIcon = () => (
  <svg viewBox="0 0 14 14"><line x1="7" y1="2" x2="7" y2="12" /><line x1="2" y1="7" x2="12" y2="7" /></svg>
);
const ClockSm = () => (
  <svg viewBox="0 0 11 11"><circle cx="5.5" cy="5.5" r="4" /><polyline points="5.5,3.5 5.5,5.5 7.5,5.5" /></svg>
);
const CheckSm = () => (
  <svg viewBox="0 0 14 14"><polyline points="2,7.5 5.5,11.5 12,3" /></svg>
);

/* Tab bar icons */
const TabClasses = () => (
  <svg viewBox="0 0 18 18"><rect x="2" y="2" width="5" height="5" rx="1.2" /><rect x="11" y="2" width="5" height="5" rx="1.2" /><rect x="2" y="11" width="5" height="5" rx="1.2" /><rect x="11" y="11" width="5" height="5" rx="1.2" /></svg>
);
const TabSchool = () => (
  <svg viewBox="0 0 18 18"><path d="M2.5 15V8.5L9 4.5l6.5 4V15" /><rect x="6.5" y="11" width="5" height="4" rx=".5" /></svg>
);
const TabSchedule = () => (
  <svg viewBox="0 0 18 18"><rect x="2.5" y="3" width="13" height="12" rx="2" /><line x1="6" y1="2" x2="6" y2="5" /><line x1="12" y1="2" x2="12" y2="5" /><line x1="2.5" y1="8" x2="15.5" y2="8" /></svg>
);
const TabProfile = () => (
  <svg viewBox="0 0 18 18"><circle cx="9" cy="7" r="3" /><path d="M3 17c0 0 1.5-4 6-4s6 4 6 4" /></svg>
);

const TabBar = ({ active }: { active: number }) => (
  <div className="ph-tab">
    {[
      { icon: <TabClasses />, label: 'Classes' },
      { icon: <TabSchool />, label: 'School' },
      { icon: <TabSchedule />, label: 'Schedule' },
      { icon: <TabProfile />, label: 'Profile' },
    ].map((t, i) => (
      <div key={t.label} className={`ph-tab-item ${i === active ? 'on' : ''}`}>
        {t.icon}
        <span>{t.label}</span>
        {i === active && <div className="ph-tab-pip" />}
      </div>
    ))}
  </div>
);

/* ═══════════════════════════════════════
   SCREEN 1 — Student Profile
   ═══════════════════════════════════════ */
const StudentProfile = () => (
  <div className="phone-wrap">
    <div className="phone-label">Student profile</div>
    <div className="phone">
      <div className="ph-bar" />
      <div className="ph-nav">
        <div className="ph-back"><BackArrow /><span>10B</span></div>
        <div className="ph-nav-title">Student</div>
        <div className="ph-nav-action"><DotsV /></div>
      </div>

      <div className="ph-hero1">
        <div className="ph-avatar">AR</div>
        <div className="ph-hero-name">Aryan Reddy</div>
        <div className="ph-hero-sub">Roll 04 · Class 10B · English</div>
        <div className="ph-chips">
          <div className="ph-chip">
            <svg viewBox="0 0 12 12"><polyline points="2,8 5,5 7.5,7.5 10,3" /></svg>
            Improving
          </div>
          <div className="ph-chip">
            <svg viewBox="0 0 12 12"><circle cx="6" cy="6" r="4.5" /><polyline points="6,3.5 6,6 8.5,6" /></svg>
            3 yrs
          </div>
        </div>
      </div>

      <div className="ph-body">
        {/* Metric cards */}
        <div className="ph-grid2">
          <div className="ph-mc">
            <div className="ph-mc-icon" style={{ background: '#edf2ff' }}>
              <svg style={{ stroke: '#3b5bdb' }} viewBox="0 0 12 12"><rect x="1.5" y="7" width="2.5" height="4" rx=".4" /><rect x="4.5" y="4.5" width="2.5" height="6.5" rx=".4" /><rect x="7.5" y="2" width="2.5" height="9" rx=".4" /></svg>
            </div>
            <div className="ph-mc-val" style={{ color: '#3b5bdb' }}>85.7%</div>
            <div className="ph-mc-label">Attendance</div>
            <div className="ph-mc-delta" style={{ color: '#087f5b' }}>
              <svg style={{ stroke: '#087f5b' }} viewBox="0 0 9 9"><polyline points="1.5,6.5 4.5,2 7.5,6.5" /></svg>
              +4% this month
            </div>
          </div>
          <div className="ph-mc">
            <div className="ph-mc-icon" style={{ background: '#f3f0ff' }}>
              <svg style={{ stroke: '#6741d9' }} viewBox="0 0 12 12"><polyline points="1.5,9 4.5,5.5 7,7.5 10.5,3" /><polyline points="8.5,3 10.5,3 10.5,5" /></svg>
            </div>
            <div className="ph-mc-val" style={{ color: '#6741d9' }}>73.8%</div>
            <div className="ph-mc-label">Performance</div>
            <div className="ph-mc-delta" style={{ color: '#087f5b' }}>
              <svg style={{ stroke: '#087f5b' }} viewBox="0 0 9 9"><polyline points="1.5,6.5 4.5,2 7.5,6.5" /></svg>
              +2.1% vs last
            </div>
          </div>
          <div className="ph-mc">
            <div className="ph-mc-icon" style={{ background: '#ebfbee' }}>
              <svg style={{ stroke: '#087f5b' }} viewBox="0 0 12 12"><polyline points="1.5,6.5 4.5,10 10.5,2.5" /></svg>
            </div>
            <div className="ph-mc-val" style={{ color: '#087f5b' }}>12</div>
            <div className="ph-mc-label">Days present</div>
            <div className="ph-mc-delta" style={{ color: '#8c92a4' }}>of 14 total</div>
          </div>
          <div className="ph-mc">
            <div className="ph-mc-icon" style={{ background: '#fff5f5' }}>
              <svg style={{ stroke: '#c92a2a' }} viewBox="0 0 12 12"><circle cx="6" cy="6" r="4.5" /><line x1="6" y1="3.5" x2="6" y2="6.5" /><circle cx="6" cy="8.5" r=".5" fill="#c92a2a" stroke="none" /></svg>
            </div>
            <div className="ph-mc-val" style={{ color: '#c92a2a' }}>2</div>
            <div className="ph-mc-label">Absences</div>
            <div className="ph-mc-delta" style={{ color: '#c87014' }}>
              <svg style={{ stroke: '#c87014' }} viewBox="0 0 9 9"><polyline points="1.5,2.5 4.5,7 7.5,2.5" /></svg>
              +1 this month
            </div>
          </div>
        </div>

        {/* Recent activity */}
        <div className="ph-sec">Recent activity</div>
        <div className="ph-list">
          <div className="ph-list-row">
            <div className="ph-list-left">
              <div className="ph-list-icon" style={{ background: '#ebfbee' }}><svg style={{ stroke: '#087f5b' }} viewBox="0 0 12 12"><polyline points="1.5,6 4,9.5 10.5,2.5" /></svg></div>
              <div><div className="ph-list-text">Present</div><div className="ph-list-sub">Mon Apr 7 · English</div></div>
            </div>
            <span className="ph-badge" style={{ background: '#ebfbee', color: '#087f5b' }}>On time</span>
          </div>
          <div className="ph-list-row">
            <div className="ph-list-left">
              <div className="ph-list-icon" style={{ background: '#fff5f5' }}><svg style={{ stroke: '#c92a2a' }} viewBox="0 0 12 12"><line x1="3" y1="3" x2="9" y2="9" /><line x1="9" y1="3" x2="3" y2="9" /></svg></div>
              <div><div className="ph-list-text">Absent</div><div className="ph-list-sub">Wed Apr 2 · English</div></div>
            </div>
            <span className="ph-badge" style={{ background: '#fff5f5', color: '#c92a2a' }}>Absent</span>
          </div>
          <div className="ph-list-row">
            <div className="ph-list-left">
              <div className="ph-list-icon" style={{ background: '#fff9db' }}><svg style={{ stroke: '#c87014' }} viewBox="0 0 12 12"><circle cx="6" cy="6" r="4.5" /><polyline points="6,3.5 6,6 8.5,6" /></svg></div>
              <div><div className="ph-list-text">Late</div><div className="ph-list-sub">Fri Mar 28 · English</div></div>
            </div>
            <span className="ph-badge" style={{ background: '#fff9db', color: '#c87014' }}>12 min</span>
          </div>
        </div>

        {/* Assignments */}
        <div className="ph-sec">Assignments</div>
        <div className="ph-list">
          <div className="ph-list-row">
            <div className="ph-list-left">
              <div className="ph-list-icon" style={{ background: '#edf2ff' }}><svg style={{ stroke: '#3b5bdb' }} viewBox="0 0 12 12"><rect x="1.5" y="1" width="9" height="10" rx="1.5" /><line x1="3.5" y1="4.5" x2="8.5" y2="4.5" /><line x1="3.5" y1="6.5" x2="7" y2="6.5" /></svg></div>
              <div><div className="ph-list-text">Chapter 5 essay</div><div className="ph-list-sub">Due Apr 15</div></div>
            </div>
            <span className="ph-badge" style={{ background: '#fff9db', color: '#c87014' }}>Pending</span>
          </div>
          <div className="ph-list-row">
            <div className="ph-list-left">
              <div className="ph-list-icon" style={{ background: '#ebfbee' }}><svg style={{ stroke: '#087f5b' }} viewBox="0 0 12 12"><polyline points="1.5,6 4,9.5 10.5,2.5" /></svg></div>
              <div><div className="ph-list-text">Grammar quiz</div><div className="ph-list-sub">Submitted · 88%</div></div>
            </div>
            <span className="ph-badge" style={{ background: '#ebfbee', color: '#087f5b' }}>88%</span>
          </div>
        </div>
      </div>

      <TabBar active={0} />
    </div>
  </div>
);

/* ═══════════════════════════════════════
   SCREEN 2 — Mark Attendance
   ═══════════════════════════════════════ */
const MarkAttendance = () => (
  <div className="phone-wrap">
    <div className="phone-label">Mark attendance</div>
    <div className="phone">
      <div className="ph-bar" />
      <div className="ph-nav">
        <div className="ph-back"><BackArrow /><span>10B</span></div>
        <div className="ph-nav-title">Attendance</div>
        <div className="ph-nav-action"><InfoCircle /></div>
      </div>

      <div className="ph-att-header">
        <div className="ph-att-class">
          <div className="ph-att-thumb">
            <svg viewBox="0 0 20 20"><path d="M3 17V9.5L10 5l7 4.5V17" /><rect x="7.5" y="12" width="5" height="5" rx="1" /></svg>
          </div>
          <div>
            <div className="ph-att-name">Class 10B · English</div>
            <div className="ph-att-sub">Mon, 13 April · Period 2</div>
          </div>
        </div>
        <div className="ph-att-pills">
          <div className="ph-att-pill"><div className="ph-att-pill-val" style={{ color: '#69db7c' }}>3</div><div className="ph-att-pill-label">Present</div></div>
          <div className="ph-att-pill"><div className="ph-att-pill-val" style={{ color: '#ff8787' }}>1</div><div className="ph-att-pill-label">Absent</div></div>
          <div className="ph-att-pill"><div className="ph-att-pill-val" style={{ color: '#ffd43b' }}>0</div><div className="ph-att-pill-label">Late</div></div>
        </div>
      </div>

      <div className="ph-att-body">
        <div className="ph-date-strip">
          <div className="ph-date-left">
            <div className="ph-date-icon">
              <svg viewBox="0 0 12 12"><rect x="1" y="2" width="10" height="9" rx="1.5" /><line x1="3.5" y1="1" x2="3.5" y2="3.5" /><line x1="8.5" y1="1" x2="8.5" y2="3.5" /><line x1="1" y1="5" x2="11" y2="5" /></svg>
            </div>
            <div>
              <div className="ph-date-text">Monday, 13 April</div>
              <div className="ph-date-sub">10:00 – 11:00 AM · Period 2</div>
            </div>
          </div>
          <div className="ph-date-action">Change</div>
        </div>

        <div className="ph-sec">4 students</div>

        <div className="ph-stu-list">
          {[
            { initials: 'AR', name: 'Aryan Reddy', roll: 'Roll 04 · Boy', bg: '#edf2ff', color: '#3b5bdb', status: 'P' },
            { initials: 'SM', name: 'Sneha Mehta', roll: 'Roll 11 · Girl', bg: '#f3f0ff', color: '#6741d9', status: 'P' },
            { initials: 'PK', name: 'Priya Kapoor', roll: 'Roll 07 · Girl', bg: '#e3fafc', color: '#0c8599', status: 'A' },
            { initials: 'RV', name: 'Rohan Verma', roll: 'Roll 15 · Boy', bg: '#fff4e6', color: '#d9480f', status: 'P' },
          ].map((s) => (
            <div key={s.initials} className="ph-stu-item">
              <div className="ph-stu-avatar" style={{ background: s.bg, color: s.color }}>{s.initials}</div>
              <div><div className="ph-stu-name">{s.name}</div><div className="ph-stu-roll">{s.roll}</div></div>
              <div className="ph-toggle">
                <div className={`ph-tog-btn ${s.status === 'P' ? 'ph-tog-p' : 'ph-tog-d'}`}>P</div>
                <div className={`ph-tog-btn ${s.status === 'A' ? 'ph-tog-a' : 'ph-tog-d'}`}>A</div>
                <div className={`ph-tog-btn ${s.status === 'L' ? 'ph-tog-a' : 'ph-tog-d'}`}>L</div>
              </div>
            </div>
          ))}
        </div>

        <button className="ph-submit"><CheckSm />Submit attendance</button>
      </div>

      <TabBar active={0} />
    </div>
  </div>
);

/* ═══════════════════════════════════════
   SCREEN 3 — Weekly Schedule
   ═══════════════════════════════════════ */
const WeeklySchedule = () => (
  <div className="phone-wrap">
    <div className="phone-label">Weekly schedule</div>
    <div className="phone">
      <div className="ph-bar" />
      <div className="ph-nav">
        <div className="ph-back"><BackArrow /><span>Home</span></div>
        <div className="ph-nav-title">Schedule</div>
        <div className="ph-nav-action"><PlusIcon /></div>
      </div>

      <div className="ph-sch-header">
        <div className="ph-sch-month">April 2025</div>
        <div className="ph-sch-title">This week</div>
        <div className="ph-week-strip">
          {[
            { d: 'M', n: '7' }, { d: 'T', n: '8', dot: true }, { d: 'W', n: '9' },
            { d: 'T', n: '10' }, { d: 'F', n: '11', on: true, dot: true },
            { d: 'S', n: '12' }, { d: 'S', n: '13' },
          ].map((w) => (
            <div key={w.n} className={`ph-week-day ${w.on ? 'on' : ''}`}>
              <div className="ph-wd-name">{w.d}</div>
              <div className="ph-wd-num">{w.n}</div>
              {w.dot && <div className="ph-wd-dot" />}
            </div>
          ))}
        </div>
      </div>

      <div className="ph-sch-body">
        <div className="ph-sec">Friday · 11 April</div>

        {/* 8:00 */}
        <div className="ph-ts">
          <div className="ph-ts-time">8:00</div>
          <div className="ph-ts-line"><div className="ph-ts-dot" /><div className="ph-ts-bar" /></div>
          <div className="ph-ts-card c-blue">
            <div className="ph-ts-badge" style={{ background: '#edf2ff', color: '#3b5bdb' }}>Done</div>
            <div className="ph-ts-card-title">Class 10B · English</div>
            <div className="ph-ts-card-sub"><ClockSm />8:00–9:00 · Room 204</div>
          </div>
        </div>

        {/* 10:00 */}
        <div className="ph-ts">
          <div className="ph-ts-time">10:00</div>
          <div className="ph-ts-line"><div className="ph-ts-dot on" /><div className="ph-ts-bar" /></div>
          <div className="ph-ts-card c-purple">
            <div className="ph-ts-badge" style={{ background: '#f3f0ff', color: '#6741d9' }}>Now</div>
            <div className="ph-ts-card-title">Shaik sir · Social</div>
            <div className="ph-ts-card-sub"><ClockSm />10:00–11:00 · Room 101</div>
          </div>
        </div>

        {/* 12:00 */}
        <div className="ph-ts">
          <div className="ph-ts-time">12:00</div>
          <div className="ph-ts-line"><div className="ph-ts-dot" /><div className="ph-ts-bar" /></div>
          <div className="ph-ts-card c-green">
            <div className="ph-ts-badge" style={{ background: '#ebfbee', color: '#087f5b' }}>Up next</div>
            <div className="ph-ts-card-title">Staff meeting</div>
            <div className="ph-ts-card-sub"><ClockSm />12:00–1:00 · Staff room</div>
          </div>
        </div>

        {/* 2:00 */}
        <div className="ph-ts">
          <div className="ph-ts-time">2:00</div>
          <div className="ph-ts-line"><div className="ph-ts-dot" /></div>
          <div className="ph-ts-card c-empty"><div className="ph-empty-text">No classes scheduled</div></div>
        </div>

        <div className="ph-sec">Tomorrow — Sat, 12 April</div>
        <div className="ph-list">
          <div className="ph-list-row">
            <div className="ph-list-left">
              <div className="ph-list-icon" style={{ background: '#edf2ff' }}><svg style={{ stroke: '#3b5bdb' }} viewBox="0 0 12 12"><circle cx="6" cy="6" r="4.5" /><polyline points="6,3.5 6,6 8.5,6" /></svg></div>
              <div><div className="ph-list-text">No classes</div><div className="ph-list-sub">Weekend</div></div>
            </div>
            <span className="ph-badge" style={{ background: '#f5f6f9', color: '#8c92a4' }}>Free</span>
          </div>
        </div>
      </div>

      <TabBar active={2} />
    </div>
  </div>
);

/* ═══════════════════════════════════════
   SCREEN 4 — Settings
   ═══════════════════════════════════════ */
const SettingsTabBar = () => (
  <div className="ph-tab">
    {[
      { label: 'Dashboard', active: false, icon: <TabClasses /> },
      { label: 'Students', active: false, icon: <TabSchool /> },
      { label: 'Reports', active: false, icon: <svg viewBox="0 0 18 18"><rect x="3" y="2" width="12" height="14" rx="2" /><line x1="6" y1="6" x2="12" y2="6" /><line x1="6" y1="9" x2="12" y2="9" /><line x1="6" y1="12" x2="9" y2="12" /></svg> },
      { label: 'Profile', active: true, icon: <TabProfile /> },
    ].map((t) => (
      <div key={t.label} className={`ph-tab-item ${t.active ? 'on' : ''}`}>
        {t.icon}
        <span>{t.label}</span>
        {t.active && <div className="ph-tab-pip" />}
      </div>
    ))}
  </div>
);

const SelectArrow = () => (
  <svg className="ph-fselect-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#8c92a4" strokeWidth="1.5" strokeLinecap="round">
    <polyline points="2,4 6,8 10,4" />
  </svg>
);

const InfoHint = ({ text }: { text: string }) => (
  <div className="ph-fhint">
    <svg viewBox="0 0 11 11"><circle cx="5.5" cy="5.5" r="4.5" /><line x1="5.5" y1="3.5" x2="5.5" y2="6" /><circle cx="5.5" cy="7.5" r=".6" fill="#8c92a4" stroke="none" /></svg>
    {text}
  </div>
);

const SettingsScreen = () => (
  <div className="phone-wrap">
    <div className="phone-label">Settings</div>
    <div className="phone">
      <div className="ph-bar" />

      {/* Dark header */}
      <div className="ph-set-header">
        <div className="ph-set-nav">
          <div className="ph-ham">
            <div className="ph-ham-line" style={{ height: '1.5px', width: '18px' }} />
            <div className="ph-ham-line" style={{ height: '1.5px', width: '12px' }} />
            <div className="ph-ham-line" style={{ height: '1.5px', width: '18px' }} />
          </div>
          <div className="ph-set-nav-title">Settings</div>
          <div className="ph-nav-action" style={{ width: 32, height: 32, borderRadius: '50%', background: '#3b5bdb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 500, color: '#fff', border: '2px solid rgba(255,255,255,.15)' }}>JS</div>
        </div>
        <div className="ph-set-hero">
          <div className="ph-set-eyebrow">Preferences</div>
          <div className="ph-set-title">Settings</div>
          <div className="ph-set-sub">Manage your profile, notifications and preferences.</div>
        </div>
        <div className="ph-action-row">
          <div className="ph-btn-reset">
            <svg width="12" height="12" viewBox="0 0 12 12"><path d="M11,5 A5,5 0 1,1 8.5,1.5" /><polyline points="8.5,0 8.5,2 10.5,2" /></svg>
            Reset
          </div>
          <div className="ph-btn-save">
            <svg width="12" height="12" viewBox="0 0 12 12"><polyline points="1.5,6.5 4.5,10 10.5,2.5" /></svg>
            Save changes
          </div>
        </div>
      </div>

      {/* Scrollable body */}
      <div className="ph-set-scroll">
        <div className="ph-set-body">

          {/* Profile section */}
          <div className="ph-scard">
            <div className="ph-scard-head">
              <div className="ph-scard-icon" style={{ background: '#edf2ff' }}>
                <svg style={{ stroke: '#3b5bdb' }} viewBox="0 0 13 13"><circle cx="6.5" cy="4.5" r="2.5" /><path d="M1.5 11.5s1-3 5-3 5 3 5 3" /></svg>
              </div>
              <div className="ph-scard-title">Profile</div>
              <span style={{ marginLeft: 'auto', fontSize: 10, color: '#3b5bdb', fontWeight: 500 }}>Edit photo</span>
            </div>

            <div className="ph-av-row">
              <div className="ph-big-av">JS</div>
              <div>
                <div className="ph-av-name">Jamal Sir</div>
                <div className="ph-av-email">madarsawebsite121@gmail.com</div>
              </div>
              <div className="ph-av-edit">Edit</div>
            </div>

            <div className="ph-frow">
              <div className="ph-flbl">
                <svg viewBox="0 0 12 12"><circle cx="6" cy="4" r="2.5" /><path d="M1.5 10.5s1-3 4.5-3 4.5 3 4.5 3" /></svg>
                Name
              </div>
              <div className="ph-finput">Jamal Sir</div>
            </div>

            <div className="ph-frow">
              <div className="ph-flbl">
                <svg viewBox="0 0 12 12"><rect x="1" y="2.5" width="10" height="7" rx="1.5" /><polyline points="1,4.5 6,7 11,4.5" /></svg>
                Email
              </div>
              <div className="ph-finput ph-finput-disabled">madarsawebsite121@gmail.com</div>
              <InfoHint text="Managed by school admin" />
            </div>

            <div className="ph-frow">
              <div className="ph-flbl">
                <svg viewBox="0 0 12 12"><path d="M2,3 C2,3 3,2 4.5,2.5 L5.5,4.5 C5.5,4.5 5,5 4.5,5.5 C5,6.5 6,7.5 7,8 C7.5,7.5 8,7 8,7 L10,8 C10.5,10 9.5,10 9.5,10 C7.5,11 2,7 2,3Z" /></svg>
                Phone
              </div>
              <div className="ph-finput">9000688125</div>
            </div>

            <div className="ph-frow">
              <div className="ph-flbl">
                <svg viewBox="0 0 12 12"><rect x="1.5" y="1" width="9" height="10" rx="1.5" /><line x1="3.5" y1="4.5" x2="8.5" y2="4.5" /><line x1="3.5" y1="6.5" x2="6.5" y2="6.5" /></svg>
                Subject
              </div>
              <div className="ph-finput ph-finput-disabled">English</div>
              <InfoHint text="Set by school admin" />
            </div>
          </div>

          {/* Notifications */}
          <div className="ph-scard">
            <div className="ph-scard-head">
              <div className="ph-scard-icon" style={{ background: '#fff9db' }}>
                <svg style={{ stroke: '#c87014' }} viewBox="0 0 13 13"><path d="M6.5 1.5C4.5 1.5 3 3 3 5v3l-1.5 2H11L9.5 8V5C9.5 3 8 1.5 6.5 1.5z" /><line x1="5.5" y1="11" x2="7.5" y2="11" /></svg>
              </div>
              <div className="ph-scard-title">Notifications</div>
              <span style={{ marginLeft: 'auto', fontSize: 10, color: '#3b5bdb', fontWeight: 500 }}>Disable all</span>
            </div>

            {[
              { title: 'Assignments', sub: 'Submission alerts', on: true },
              { title: 'Grading', sub: 'Deadline reminders', on: true },
              { title: 'Attendance', sub: 'Threshold warnings', on: true },
              { title: 'Messages', sub: 'New parent messages', on: true },
              { title: 'Risks & alerts', sub: 'Performance concerns', on: true },
            ].map((n) => (
              <div key={n.title} className="ph-tog-row">
                <div>
                  <div className="ph-tog-title">{n.title}</div>
                  <div className="ph-tog-sub">{n.sub}</div>
                </div>
                <div className={`ph-toggle ${n.on ? 'on' : ''}`} />
              </div>
            ))}
          </div>

          {/* Preferences */}
          <div className="ph-scard">
            <div className="ph-scard-head">
              <div className="ph-scard-icon" style={{ background: '#e3fafc' }}>
                <svg style={{ stroke: '#0c8599' }} viewBox="0 0 13 13"><circle cx="6.5" cy="6.5" r="5" /><circle cx="6.5" cy="6.5" r="2" /><line x1="6.5" y1="1.5" x2="6.5" y2="4.5" /><line x1="6.5" y1="8.5" x2="6.5" y2="11.5" /><line x1="1.5" y1="6.5" x2="4.5" y2="6.5" /><line x1="8.5" y1="6.5" x2="11.5" y2="6.5" /></svg>
              </div>
              <div className="ph-scard-title">Preferences</div>
            </div>

            {[
              { label: 'Dashboard view', value: 'Grid' },
              { label: 'Grade metric', value: 'Percentage' },
              { label: 'Date format', value: 'DD/MM/YYYY' },
              { label: 'Language', value: 'English' },
            ].map((s) => (
              <div key={s.label} className="ph-sel-row">
                <div className="ph-flbl">{s.label}</div>
                <div className="ph-fselect-wrap">
                  <div className="ph-fselect" style={{ padding: '10px 30px 10px 12px' }}>{s.value}</div>
                  <SelectArrow />
                </div>
              </div>
            ))}
          </div>

          {/* Security */}
          <div className="ph-scard">
            <div className="ph-scard-head">
              <div className="ph-scard-icon" style={{ background: '#edf2ff' }}>
                <svg style={{ stroke: '#3b5bdb' }} viewBox="0 0 13 13"><path d="M6.5 1.5L11 3.5V7C11 9.5 6.5 11.5 6.5 11.5S2 9.5 2 7V3.5L6.5 1.5z" /><polyline points="4.5,6.5 6,8 8.5,5" /></svg>
              </div>
              <div className="ph-scard-title">Security</div>
              <span style={{ marginLeft: 'auto', fontSize: 10, fontWeight: 500, background: '#ebfbee', color: '#087f5b', padding: '3px 8px', borderRadius: 20 }}>Secured</span>
            </div>
            <div className="ph-sec-info">
              <svg viewBox="0 0 14 14"><path d="M7 1.5L12 3.5V7C12 10 7 12 7 12S2 10 2 7V3.5L7 1.5z" /><polyline points="5,7 6.5,8.5 9.5,5" /></svg>
              <div>
                <div className="ph-sec-info-title">Security</div>
                <div className="ph-sec-info-sub">Account credentials are managed by your school administrator. Contact admin to change password.</div>
              </div>
            </div>
            <div className="ph-tog-row">
              <div>
                <div className="ph-tog-title">Two-factor auth</div>
                <div className="ph-tog-sub">Extra login protection</div>
              </div>
              <div className="ph-toggle" />
            </div>
            <div className="ph-tog-row">
              <div>
                <div className="ph-tog-title">Login notifications</div>
                <div className="ph-tog-sub">Alert on new device login</div>
              </div>
              <div className="ph-toggle on" />
            </div>
          </div>

          {/* Danger zone */}
          <div className="ph-danger-card">
            <div className="ph-danger-head">
              <div className="ph-scard-icon" style={{ background: '#fff5f5' }}>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="#c92a2a" strokeWidth="1.5" strokeLinecap="round"><path d="M6.5 1.5L12 11.5H1L6.5 1.5z" /><line x1="6.5" y1="5" x2="6.5" y2="8" /><circle cx="6.5" cy="9.5" r=".6" fill="#c92a2a" stroke="none" /></svg>
              </div>
              <div style={{ fontSize: 13, fontWeight: 500, color: '#c92a2a' }}>Danger zone</div>
            </div>
            <div className="ph-danger-row">
              <div>
                <div className="ph-danger-title">Clear all data</div>
                <div className="ph-danger-sub">Remove local cache and preferences</div>
              </div>
              <div className="ph-danger-btn">Clear</div>
            </div>
            <div className="ph-danger-row">
              <div>
                <div className="ph-danger-title">Sign out</div>
                <div className="ph-danger-sub">Log out of your account</div>
              </div>
              <div className="ph-danger-btn">Sign out</div>
            </div>
          </div>

          <div style={{ height: 8 }} />
        </div>
      </div>

      <SettingsTabBar />
    </div>
  </div>
);

/* ═══════════════════════════════════════
   SCREEN 5 — Reports
   ═══════════════════════════════════════ */
const ReportsTabBar = () => (
  <div className="ph-tab">
    {[
      { label: 'Reports', active: true, icon: <svg viewBox="0 0 18 18"><rect x="3" y="2" width="12" height="14" rx="2" /><line x1="6" y1="6" x2="12" y2="6" /><line x1="6" y1="9" x2="12" y2="9" /><line x1="6" y1="12" x2="9" y2="12" /></svg> },
      { label: 'Dashboard', active: false, icon: <TabClasses /> },
      { label: 'Students', active: false, icon: <TabSchool /> },
      { label: 'Profile', active: false, icon: <TabProfile /> },
    ].map((t) => (
      <div key={t.label} className={`ph-tab-item ${t.active ? 'on' : ''}`}>
        {t.icon}
        <span>{t.label}</span>
        {t.active && <div className="ph-tab-pip" />}
      </div>
    ))}
  </div>
);

const reports = [
  {
    id: 'perf', title: 'Class performance report',
    desc: 'Comprehensive analysis of class performance including grades, attendance, and progress trends.',
    badge: 'Popular', badgeBg: '#ebfbee', badgeCol: '#087f5b',
    formats: ['PDF', 'Excel'], iconBg: '#edf2ff', band: '#3b5bdb',
    icon: <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#3b5bdb" strokeWidth="1.5" strokeLinecap="round"><rect x="2" y="8" width="2.5" height="6" rx=".4" /><rect x="6.5" y="5" width="2.5" height="9" rx=".4" /><rect x="11" y="2" width="2.5" height="12" rx=".4" /><polyline points="2,7 6,4 10,5.5 14,1.5" /></svg>,
  },
  {
    id: 'individual', title: 'Individual progress report',
    desc: 'Detailed report for individual students covering all academic metrics and personalised recommendations.',
    badge: 'Detailed', badgeBg: '#e3fafc', badgeCol: '#0c8599',
    formats: ['PDF'], iconBg: '#e3fafc', band: '#0c8599',
    icon: <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#0c8599" strokeWidth="1.5" strokeLinecap="round"><circle cx="8" cy="5.5" r="3" /><path d="M2 14s1.5-3.5 6-3.5 6 3.5 6 3.5" /><polyline points="11,3 12.5,4.5 15,2" /></svg>,
  },
  {
    id: 'attendance', title: 'Attendance summary',
    desc: 'Monthly or term-wise attendance report with statistics and absentee analysis.',
    badge: 'Monthly', badgeBg: '#fff9db', badgeCol: '#c87014',
    formats: ['PDF', 'Excel'], iconBg: '#fff9db', band: '#c87014',
    icon: <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#c87014" strokeWidth="1.5" strokeLinecap="round"><circle cx="8" cy="8" r="6" /><polyline points="8,4.5 8,8 10.5,8" /></svg>,
  },
  {
    id: 'atrisk', title: 'At-risk students report',
    desc: 'List of students with academic or attendance concerns requiring urgent intervention.',
    badge: 'Alert', badgeBg: '#fff5f5', badgeCol: '#c92a2a',
    formats: ['PDF', 'Excel'], iconBg: '#fff5f5', band: '#c92a2a',
    icon: <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="#c92a2a" strokeWidth="1.5" strokeLinecap="round"><path d="M8 2L15 14H1L8 2z" /><line x1="8" y1="6.5" x2="8" y2="10" /><circle cx="8" cy="12" r=".7" fill="#c92a2a" stroke="none" /></svg>,
  },
];

const historyItems = [
  { title: 'Individual progress report — N/A', sub: 'Draft · PDF Format', date: 'Apr 10, 2026 · 05:50 PM', col: '#3b5bdb' },
  { title: 'At-risk students report — N/A', sub: 'Draft · Excel Format', date: 'Apr 9, 2026 · 01:26 PM', col: '#c92a2a' },
  { title: 'Class performance report — 10B', sub: 'Final · PDF Format', date: 'Apr 8, 2026 · 09:10 AM', col: '#2f9e44' },
  { title: 'Attendance summary — Shaik sir', sub: 'Final · Excel Format', date: 'Apr 7, 2026 · 03:44 PM', col: '#c87014' },
];

const ReportsScreen = () => (
  <div className="phone-wrap">
    <div className="phone-label">Reports</div>
    <div className="phone">
      <div className="ph-bar" />

      {/* Dark header */}
      <div className="ph-rpt-header">
        <div className="ph-set-nav">
          <div className="ph-ham">
            <div className="ph-ham-line" style={{ height: '1.5px', width: '18px' }} />
            <div className="ph-ham-line" style={{ height: '1.5px', width: '12px' }} />
            <div className="ph-ham-line" style={{ height: '1.5px', width: '18px' }} />
          </div>
          <div className="ph-set-nav-title">Reports</div>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#3b5bdb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 500, color: '#fff', border: '2px solid rgba(255,255,255,.15)' }}>JS</div>
        </div>
        <div className="ph-rpt-hero">
          <div className="ph-rpt-eyebrow">Academic documents</div>
          <div className="ph-rpt-title">Reports</div>
          <div className="ph-rpt-sub">Generate and download academic reports.</div>
          <div className="ph-rpt-chips">
            <div className="ph-rpt-chip">EduIntellect Main</div>
            <div className="ph-rpt-chip">4 report types</div>
          </div>
        </div>
      </div>

      {/* Scrollable body */}
      <div className="ph-rpt-scroll">
        <div className="ph-rpt-body">
          {/* Filters */}
          <div className="ph-filters">
            <div className="ph-fpill on">All</div>
            <div className="ph-fpill">PDF only</div>
            <div className="ph-fpill">Excel only</div>
          </div>

          {/* Report cards */}
          {reports.map((r) => (
            <div key={r.id} className="ph-rcard">
              <div className="ph-rband" style={{ background: r.band }} />
              <div className="ph-rcbody">
                <div className="ph-rctop">
                  <div className="ph-rcico" style={{ background: r.iconBg }}>{r.icon}</div>
                  <span className="ph-rcbadge" style={{ background: r.badgeBg, color: r.badgeCol }}>{r.badge}</span>
                </div>
                <div className="ph-rctitle">{r.title}</div>
                <div className="ph-rcdesc">{r.desc}</div>
                <div className="ph-rcformats">
                  {r.formats.map((f) => <div key={f} className="ph-fpill-sm">{f}</div>)}
                </div>
                <div className="ph-rcactions">
                  <div className="ph-btn-gen" style={{ background: r.band }}>
                    <svg viewBox="0 0 12 12"><polyline points="6,2 6,8" /><polyline points="3.5,5.5 6,8.5 8.5,5.5" /><line x1="1.5" y1="10.5" x2="10.5" y2="10.5" /></svg>
                    Generate
                  </div>
                  <div className="ph-btn-prev">
                    <svg style={{ stroke: '#8c92a4' }} viewBox="0 0 12 12"><circle cx="6" cy="6" r="2.5" /><path d="M1,6 C1,6 3,2 6,2 C9,2 11,6 11,6 C11,6 9,10 6,10 C3,10 1,6 1,6Z" /></svg>
                    Preview
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* History header */}
          <div className="ph-hist-header">
            <div>
              <div className="ph-hist-title">Intelligence output history</div>
              <div className="ph-hist-sub">Audit trail of generated documents</div>
            </div>
            <div className="ph-hist-link">
              View full audit
              <svg viewBox="0 0 11 11"><polyline points="2,9 9,2" /><polyline points="5,2 9,2 9,6" /></svg>
            </div>
          </div>

          {/* History list */}
          <div className="ph-hlist">
            {historyItems.map((h, i) => (
              <div key={i} className="ph-hitem">
                <div className="ph-hico" style={{ background: h.col + '18', border: `1px solid ${h.col}35` }}>
                  <svg style={{ stroke: h.col }} viewBox="0 0 14 14"><rect x="2" y="1" width="10" height="12" rx="1.5" /><line x1="4.5" y1="5" x2="9.5" y2="5" /><line x1="4.5" y1="7.5" x2="7.5" y2="7.5" /></svg>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="ph-hname">{h.title}</div>
                  <div className="ph-hmeta">
                    <div className="ph-hdot" style={{ background: '#2f9e44' }} />
                    <span className="ph-hmeta-label">{h.sub}</span>
                  </div>
                  <div className="ph-hdate">{h.date}</div>
                </div>
                <div className="ph-hdl">
                  <svg viewBox="0 0 11 11"><polyline points="5.5,2 5.5,8" /><polyline points="3,5.5 5.5,8.5 8,5.5" /></svg>
                </div>
              </div>
            ))}
          </div>

          <div style={{ height: 8 }} />
        </div>
      </div>

      <ReportsTabBar />
    </div>
  </div>
);

/* ═══════════════════════════════════════
   SCREEN 6 — Summarize Lesson (Upload)
   ═══════════════════════════════════════ */
const AiTabBar = ({ active }: { active: number }) => (
  <div className="ph-tab-ai">
    {[
      { label: 'Dashboard', icon: <TabClasses /> },
      { label: 'Students', icon: <TabSchool /> },
      { label: 'AI Tools', icon: <svg viewBox="0 0 18 18"><path d="M7 1L8.5 5H12L9.5 7.5L10.5 11.5L7 9.5L3.5 11.5L4.5 7.5L2 5H5.5Z" /></svg> },
      { label: 'Profile', icon: <TabProfile /> },
    ].map((t, i) => (
      <div key={t.label} className={`ph-tab-item ${i === active ? 'on' : ''}`}>
        {t.icon}
        <span>{t.label}</span>
        {i === active && <div className="ph-tab-pip" />}
      </div>
    ))}
  </div>
);

const wygItems = [
  { text: 'Brief summary', bg: '#f3f0ff', icon: <svg style={{ stroke: '#6741d9' }} viewBox="0 0 12 12"><path d="M6 1L7.2 4.2H10L7.8 6L8.5 9L6 7.5L3.5 9L4.2 6L2 4.2H4.8Z" /></svg> },
  { text: 'Key concepts', bg: '#edf2ff', icon: <svg style={{ stroke: '#3b5bdb' }} viewBox="0 0 12 12"><circle cx="6" cy="6" r="4.5" /><circle cx="6" cy="6" r="2" /></svg> },
  { text: 'Section breakdown', bg: '#ebfbee', icon: <svg style={{ stroke: '#087f5b' }} viewBox="0 0 12 12"><rect x="1.5" y="1" width="9" height="10" rx="1.5" /><line x1="3.5" y1="4.5" x2="8.5" y2="4.5" /><line x1="3.5" y1="7" x2="6.5" y2="7" /></svg> },
  { text: 'Important definitions', bg: '#fff9db', icon: <svg style={{ stroke: '#c87014' }} viewBox="0 0 12 12"><rect x="1.5" y="1" width="9" height="10" rx="1.5" /><line x1="3.5" y1="4.5" x2="8.5" y2="4.5" /><line x1="3.5" y1="7" x2="7.5" y2="7" /><line x1="3.5" y1="9" x2="6" y2="9" /></svg> },
  { text: 'Exam important points', bg: '#fff9db', icon: <svg viewBox="0 0 12 12"><polygon points="6,1 7.5,4.5 11,5 8.5,7.5 9,11 6,9.5 3,11 3.5,7.5 1,5 4.5,4.5" fill="#c87014" stroke="none" /></svg> },
  { text: 'Quick revision points', bg: '#e3fafc', icon: <svg style={{ stroke: '#0c8599' }} viewBox="0 0 12 12"><polyline points="3,8.5 6,3 9,8.5" /><line x1="4" y1="6.5" x2="8" y2="6.5" /></svg> },
];

const SummarizeUpload = () => (
  <div className="phone-wrap">
    <div className="phone-label">Upload form</div>
    <div className="phone">
      <div className="ph-bar" />
      <div style={{ background: '#08090c' }}>
        <div className="ph-set-nav">
          <div className="ph-ham">
            <div className="ph-ham-line" style={{ height: '1.5px', width: '18px' }} />
            <div className="ph-ham-line" style={{ height: '1.5px', width: '12px' }} />
            <div className="ph-ham-line" style={{ height: '1.5px', width: '18px' }} />
          </div>
          <div className="ph-set-nav-title">Summarize Lesson</div>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#6741d9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 500, color: '#fff', border: '2px solid rgba(255,255,255,.15)' }}>JS</div>
        </div>
        <div className="ph-sum-hero">
          <div className="ph-ai-badge">
            <svg viewBox="0 0 10 10"><path d="M5 1L6.5 4H9L7 6L7.8 9L5 7.5L2.2 9L3 6L1 4H3.5Z" /></svg>
            <span>AI powered</span>
          </div>
          <div className="ph-sum-title">Summarize<br />lesson</div>
          <div className="ph-sum-sub">Upload any PDF — AI reads &<br />summarizes it instantly</div>
          <div className="ph-powered">
            <svg viewBox="0 0 10 10"><rect x="1" y="1" width="8" height="8" rx="1.5" /><line x1="3" y1="4" x2="7" y2="4" /><line x1="3" y1="6" x2="5.5" y2="6" /></svg>
            <span>EduIntellect engine</span>
          </div>
        </div>
      </div>

      <div className="ph-body">
        {/* Upload card */}
        <div className="ph-ucard">
          <div className="ph-ucard-head">
            <div className="ph-ucard-ico">
              <svg viewBox="0 0 13 13"><polyline points="6.5,2 6.5,9" /><polyline points="3.5,5 6.5,2 9.5,5" /><line x1="2" y1="11" x2="11" y2="11" /></svg>
            </div>
            <div>
              <div className="ph-ucard-title">Upload PDF</div>
              <div className="ph-ucard-sub">Max 20 MB · Text-based PDF only</div>
            </div>
          </div>
          <div className="ph-ucard-body">
            <div className="ph-dropzone">
              <div className="ph-dz-limit">Max 20 MB</div>
              <div className="ph-dz-ico">
                <svg viewBox="0 0 20 20"><rect x="3" y="2" width="14" height="16" rx="2" /><line x1="6.5" y1="7" x2="13.5" y2="7" /><line x1="6.5" y1="10" x2="13.5" y2="10" /><line x1="6.5" y1="13" x2="10" y2="13" /></svg>
              </div>
              <div className="ph-dz-title">Drop PDF here</div>
              <div className="ph-dz-sub">or tap to browse files</div>
            </div>
          </div>
        </div>

        {/* What you'll get */}
        <div style={{ background: '#fff', border: '1px solid #e2e5ee', borderRadius: 18, overflow: 'hidden' }}>
          <div style={{ padding: '11px 14px', borderBottom: '1px solid #eceef4', display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 26, height: 26, borderRadius: 8, background: '#f3f0ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="11" height="11" style={{ stroke: '#6741d9', fill: 'none', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }} viewBox="0 0 12 12"><path d="M6 1L7.2 4.2H10L7.8 6L8.5 9L6 7.5L3.5 9L4.2 6L2 4.2H4.8Z" /></svg>
            </div>
            <div style={{ fontSize: 12, fontWeight: 500, color: '#08090c' }}>What you'll get</div>
          </div>
          <div style={{ padding: '0 14px' }}>
            {wygItems.map((w) => (
              <div key={w.text} className="ph-wyg-item">
                <div className="ph-wyg-dot" style={{ background: w.bg }}>{w.icon}</div>
                <div className="ph-wyg-text">{w.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Summarize button */}
        <div className="ph-sum-btn">
          <svg viewBox="0 0 14 14"><path d="M7 1L8.5 5H12L9.5 7.5L10.5 11.5L7 9.5L3.5 11.5L4.5 7.5L2 5H5.5Z" /></svg>
          Summarize PDF
        </div>

        {/* Empty state */}
        <div className="ph-empty-result">
          <div className="ph-er-ico">
            <svg viewBox="0 0 20 20"><rect x="3" y="2" width="14" height="16" rx="2" /><line x1="6.5" y1="7" x2="13.5" y2="7" /><line x1="6.5" y1="10" x2="13.5" y2="10" /><line x1="6.5" y1="13" x2="10" y2="13" /></svg>
          </div>
          <div className="ph-er-title">Your summary will appear here</div>
          <div className="ph-er-sub">Upload a PDF and click summarize</div>
        </div>
      </div>

      <AiTabBar active={2} />
    </div>
  </div>
);

/* ═══════════════════════════════════════
   SCREEN 7 — Summarize Lesson (Result)
   ═══════════════════════════════════════ */
const SummarizeResult = () => (
  <div className="phone-wrap">
    <div className="phone-label">Generated summary</div>
    <div className="phone">
      <div className="ph-bar" />
      <div style={{ background: '#08090c' }}>
        <div className="ph-set-nav">
          <div className="ph-ham">
            <div className="ph-ham-line" style={{ height: '1.5px', width: '18px' }} />
            <div className="ph-ham-line" style={{ height: '1.5px', width: '12px' }} />
            <div className="ph-ham-line" style={{ height: '1.5px', width: '18px' }} />
          </div>
          <div className="ph-set-nav-title">Summarize Lesson</div>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#6741d9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 500, color: '#fff', border: '2px solid rgba(255,255,255,.15)' }}>JS</div>
        </div>
      </div>

      {/* Result hero */}
      <div className="ph-result-hero">
        <div className="ph-rh-file">
          <svg viewBox="0 0 13 13"><rect x="2" y="1" width="9" height="11" rx="1.5" /><line x1="4.5" y1="5" x2="8.5" y2="5" /><line x1="4.5" y1="7.5" x2="7" y2="7.5" /></svg>
          <span className="ph-rh-file-name">parts_of_speech.pdf</span>
          <span className="ph-rh-file-size">1.2 MB</span>
        </div>
        <div className="ph-rh-title">Parts of Speech —<br />Complete Summary</div>
        <div className="ph-rh-sub">AI has analysed your PDF and extracted key information across 7 categories.</div>
        <div className="ph-rh-chips">
          <div className="ph-rh-chip"><svg viewBox="0 0 10 10"><polyline points="1.5,6.5 4,9 8.5,2" /></svg>Summarised</div>
          <div className="ph-rh-chip"><svg viewBox="0 0 10 10"><rect x="1" y="1" width="8" height="8" rx="1.5" /><line x1="3" y1="4" x2="7" y2="4" /><line x1="3" y1="6" x2="5.5" y2="6" /></svg>12 pages</div>
          <div className="ph-rh-chip"><svg viewBox="0 0 10 10"><circle cx="5" cy="5" r="3.5" /><polyline points="5,3 5,5 6.5,5" /></svg>~2 min read</div>
        </div>
      </div>

      <div className="ph-body">
        {/* Brief summary */}
        <div className="ph-ssec">
          <div className="ph-ssec-head">
            <div className="ph-ssec-left">
              <div className="ph-ssec-ico" style={{ background: '#f3f0ff' }}><svg style={{ stroke: '#6741d9' }} viewBox="0 0 12 12"><path d="M6 1L7.2 4.2H10L7.8 6L8.5 9L6 7.5L3.5 9L4.2 6L2 4.2H4.8Z" /></svg></div>
              <div className="ph-ssec-title">Brief summary</div>
            </div>
            <span style={{ fontSize: 10, color: '#6741d9', cursor: 'pointer' }}>Expand</span>
          </div>
          <div className="ph-ssec-body">
            <div className="ph-sum-para">Parts of speech are the building blocks of English grammar. The eight parts — noun, pronoun, verb, adjective, adverb, preposition, conjunction, and interjection — each serve a unique function in constructing meaningful sentences.</div>
          </div>
        </div>

        {/* Key concepts */}
        <div className="ph-ssec">
          <div className="ph-ssec-head">
            <div className="ph-ssec-left">
              <div className="ph-ssec-ico" style={{ background: '#edf2ff' }}><svg style={{ stroke: '#3b5bdb' }} viewBox="0 0 12 12"><circle cx="6" cy="6" r="4.5" /><circle cx="6" cy="6" r="2" /></svg></div>
              <div className="ph-ssec-title">Key concepts</div>
            </div>
            <span className="ph-ssec-count" style={{ background: '#edf2ff', color: '#3b5bdb' }}>8</span>
          </div>
          <div className="ph-ssec-body" style={{ padding: '0 13px' }}>
            {[
              { num: 1, text: 'A noun names a person, place, thing, or idea.', tag: 'Noun' },
              { num: 2, text: 'A verb expresses action or a state of being.', tag: 'Verb' },
              { num: 3, text: 'An adjective describes or modifies a noun.', tag: 'Adjective' },
              { num: 4, text: 'An adverb modifies a verb, adjective, or another adverb.', tag: 'Adverb' },
            ].map((k) => (
              <div key={k.num} className="ph-kc-item">
                <div className="ph-kc-num">{k.num}</div>
                <div>
                  <div className="ph-kc-text">{k.text}</div>
                  <div className="ph-kc-tag">{k.tag}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important definitions */}
        <div className="ph-ssec">
          <div className="ph-ssec-head">
            <div className="ph-ssec-left">
              <div className="ph-ssec-ico" style={{ background: '#fff9db' }}><svg style={{ stroke: '#c87014' }} viewBox="0 0 12 12"><rect x="1.5" y="1" width="9" height="10" rx="1.5" /><line x1="3.5" y1="4.5" x2="8.5" y2="4.5" /><line x1="3.5" y1="7" x2="7.5" y2="7" /></svg></div>
              <div className="ph-ssec-title">Important definitions</div>
            </div>
            <span className="ph-ssec-count" style={{ background: '#fff9db', color: '#c87014' }}>5</span>
          </div>
          <div className="ph-ssec-body" style={{ padding: '0 13px' }}>
            {[
              { word: 'Preposition', def: 'A word that shows the relationship between a noun/pronoun and another word (e.g. in, on, at).' },
              { word: 'Conjunction', def: 'A word that connects words, phrases, or clauses (e.g. and, but, or).' },
              { word: 'Interjection', def: 'An exclamatory word expressing strong emotion (e.g. Wow!, Oh!).' },
            ].map((d) => (
              <div key={d.word} className="ph-def-item">
                <div className="ph-def-word">{d.word}</div>
                <div className="ph-def-text">{d.def}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Exam important points */}
        <div className="ph-ssec">
          <div className="ph-ssec-head">
            <div className="ph-ssec-left">
              <div className="ph-ssec-ico" style={{ background: '#fff9db' }}>
                <svg width="11" height="11" viewBox="0 0 12 12"><polygon points="6,1 7.5,4.5 11,5 8.5,7.5 9,11 6,9.5 3,11 3.5,7.5 1,5 4.5,4.5" fill="#c87014" stroke="none" /></svg>
              </div>
              <div className="ph-ssec-title">Exam important points</div>
            </div>
            <span className="ph-ssec-count" style={{ background: '#fff9db', color: '#c87014' }}>4</span>
          </div>
          <div className="ph-ssec-body" style={{ padding: '0 13px' }}>
            {[
              'There are exactly 8 parts of speech — must memorise all names and examples.',
              'The same word can function as different parts of speech depending on context.',
              'Pronouns replace nouns — know all types: personal, relative, demonstrative.',
            ].map((ep, i) => (
              <div key={i} className="ph-ep-item">
                <div className="ph-ep-star"><svg viewBox="0 0 16 16"><polygon points="8,1.5 10,6 15,6.5 11.5,10 12.5,15 8,12.5 3.5,15 4.5,10 1,6.5 6,6" fill="#c87014" /></svg></div>
                <div className="ph-kc-text">{ep}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick revision */}
        <div className="ph-ssec">
          <div className="ph-ssec-head">
            <div className="ph-ssec-left">
              <div className="ph-ssec-ico" style={{ background: '#e3fafc' }}><svg style={{ stroke: '#0c8599' }} viewBox="0 0 12 12"><polyline points="3,8.5 6,3 9,8.5" /><line x1="4" y1="6.5" x2="8" y2="6.5" /></svg></div>
              <div className="ph-ssec-title">Quick revision points</div>
            </div>
            <span className="ph-ssec-count" style={{ background: '#e3fafc', color: '#0c8599' }}>5</span>
          </div>
          <div className="ph-ssec-body" style={{ padding: '0 13px' }}>
            {[
              'Noun — names things. Verb — shows action.',
              'Adjective — describes nouns. Adverb — describes verbs.',
              'Prepositions show relationships. Conjunctions join clauses.',
              'Interjections express emotion — always standalone.',
            ].map((r, i) => (
              <div key={i} className="ph-rev-item">
                <div className="ph-rev-bolt"><svg viewBox="0 0 11 11"><polyline points="6.5,1 3.5,6 6,6 4.5,10 8,5 5.5,5Z" /></svg></div>
                <div className="ph-rev-text">{r}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="ph-act-row">
          <div className="ph-act-btn ph-act-primary">
            <svg viewBox="0 0 12 12"><polyline points="2,8.5 6,4.5 8.5,7 10.5,4.5" /><line x1="3" y1="11" x2="11" y2="11" /></svg>
            Export PDF
          </div>
          <div className="ph-act-btn ph-act-secondary">
            <svg viewBox="0 0 12 12"><polyline points="6,2 6,9" /><polyline points="3,7 6,10 9,7" /></svg>
            Save summary
          </div>
          <div className="ph-act-btn ph-act-secondary" style={{ gridColumn: 'span 2' }}>
            <svg viewBox="0 0 12 12"><path d="M12,6 A5,5 0 1,1 9,2" /><polyline points="9,0.5 9,2 10.5,2" /></svg>
            Summarize another PDF
          </div>
        </div>
      </div>

      <AiTabBar active={2} />
    </div>
  </div>
);

/* ═══════════════════════════════════════
   SCREEN 8 — AI Lesson Planner (Form)
   ═══════════════════════════════════════ */
const LessonPlannerForm = () => (
  <div className="phone-wrap">
    <div className="phone-label">Plan generator form</div>
    <div className="phone">
      <div className="ph-bar" />
      <div style={{ background: '#08090c' }}>
        <div className="ph-set-nav">
          <div className="ph-ham">
            <div className="ph-ham-line" style={{ height: '1.5px', width: '18px' }} />
            <div className="ph-ham-line" style={{ height: '1.5px', width: '12px' }} />
            <div className="ph-ham-line" style={{ height: '1.5px', width: '18px' }} />
          </div>
          <div className="ph-set-nav-title">AI Lesson Planner</div>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#3b5bdb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 500, color: '#fff', border: '2px solid rgba(255,255,255,.15)' }}>JS</div>
        </div>
        <div className="ph-sum-hero">
          <div className="ph-ai-badge">
            <svg viewBox="0 0 10 10"><path d="M5 1L6.5 4H9L7 6L7.8 9L5 7.5L2.2 9L3 6L1 4H3.5Z" /></svg>
            <span>AI powered</span>
          </div>
          <div className="ph-sum-title">AI Lesson<br />Planner</div>
          <div className="ph-sum-sub">Generate classroom-ready lesson plans in seconds</div>
          <div className="ph-powered">
            <svg viewBox="0 0 10 10"><rect x="1" y="1" width="8" height="8" rx="1.5" /><line x1="3.5" y1="4" x2="6.5" y2="4" /><line x1="3.5" y1="6" x2="5.5" y2="6" /></svg>
            <span>EduIntellect engine</span>
          </div>
        </div>
        <div className="ph-action-tabs">
          <div className="ph-atab ph-atab-primary">
            <svg viewBox="0 0 12 12"><path d="M6 1L7.5 4H10L8 6L8.8 9L6 7.5L3.2 9L4 6L2 4H4.5Z" /></svg>
            Generate plan
          </div>
          <div className="ph-atab ph-atab-secondary">
            <svg viewBox="0 0 12 12"><circle cx="6" cy="6" r="4.5" /><polyline points="6,3.5 6,6 8.5,6" /></svg>
            History (1)
          </div>
        </div>
      </div>

      <div className="ph-body">
        <div className="ph-fcard">
          <div className="ph-fcard-head">
            <div className="ph-fcard-head-ico">
              <svg viewBox="0 0 13 13"><path d="M2,10 L11,10 L9,7 L11,4 L2,4 L4,7 Z" /></svg>
            </div>
            <div>
              <div className="ph-fcard-title">Plan details</div>
              <div className="ph-fcard-sub">Fill in to generate your lesson plan</div>
            </div>
          </div>

          <div className="ph-fcard-sec">
            <div className="ph-field">
              <div className="ph-field-lbl">Subject <div className="ph-field-req" /></div>
              <div className="ph-field-input">English</div>
            </div>
          </div>

          <div className="ph-fcard-sec">
            <div className="ph-field">
              <div className="ph-field-lbl">Topic / chapter <div className="ph-field-req" /></div>
              <div className="ph-field-input">parts of speech</div>
            </div>
          </div>

          <div className="ph-fcard-sec">
            <div className="ph-fcard-row">
              <div className="ph-field">
                <div className="ph-field-lbl">Grade</div>
                <div className="ph-field-select">Class 8</div>
              </div>
              <div className="ph-field">
                <div className="ph-field-lbl">Board</div>
                <div className="ph-field-select">CBSE</div>
              </div>
            </div>
          </div>

          <div className="ph-fcard-sec">
            <div className="ph-fcard-row">
              <div className="ph-field">
                <div className="ph-field-lbl">Duration</div>
                <div className="ph-field-select">45 minutes</div>
              </div>
              <div className="ph-field">
                <div className="ph-field-lbl">No. of lessons</div>
                <div className="ph-field-select">1</div>
              </div>
            </div>
          </div>

          <div className="ph-fcard-sec">
            <div className="ph-field">
              <div className="ph-field-lbl">Learning goals <span className="ph-field-opt">(optional)</span></div>
              <div className="ph-field-textarea">What should students know or be able to do after this lesson?</div>
            </div>
          </div>

          <div className="ph-fcard-sec">
            <div className="ph-field">
              <div className="ph-field-lbl">Special considerations <span className="ph-field-opt">(optional)</span></div>
              <div className="ph-field-textarea">e.g. Mixed ability class, no projector available...</div>
            </div>
          </div>
        </div>

        <div className="ph-gen-row">
          <div className="ph-gen-btn">
            <svg viewBox="0 0 14 14"><path d="M7 1L8.5 5H12L9.5 7.5L10.5 11.5L7 9.5L3.5 11.5L4.5 7.5L2 5H5.5Z" /></svg>
            Generate plan
          </div>
          <div className="ph-reset-btn">
            <svg viewBox="0 0 14 14"><path d="M12,7 A5,5 0 1,1 9.5,3" /><polyline points="9.5,1 9.5,3 11.5,3" /></svg>
          </div>
        </div>
      </div>

      <AiTabBar active={2} />
    </div>
  </div>
);

/* ═══════════════════════════════════════
   SCREEN 9 — AI Lesson Planner (Result)
   ═══════════════════════════════════════ */
const phases = [
  { title: 'Introduction / hook', time: '5 min', bg: '#fff9db', border: '#ffe066', color: '#c87014',
    teacher: 'Begin by asking students what parts of speech they have heard about. Record answers on the board.',
    student: 'Students respond and share any prior knowledge or examples.',
    questions: ['Can you name any parts of speech you know?', 'Why is knowing parts of speech important?'] },
  { title: 'Direct instruction', time: '15 min', bg: '#edf2ff', border: '#bac8ff', color: '#3b5bdb',
    teacher: 'Explain each of the eight parts of speech with clear definitions and examples, using a chart for visual aid.',
    student: 'Listen attentively, take notes, and ask questions for clarification.',
    questions: ['What is a noun? Can you give me an example?', 'How does an adjective function in a sentence?'] },
  { title: 'Guided practice', time: '15 min', bg: '#f3f0ff', border: '#d0bfff', color: '#6741d9',
    teacher: 'Provide sentences on the board. Guide students through identifying parts of speech in each sentence.',
    student: 'Work collaboratively to identify parts of speech and explain their choices.',
    questions: ['What part of speech is highlighted here?', 'Why is this word a verb and not a noun?'] },
  { title: 'Independent practice', time: '10 min', bg: '#ebfbee', border: '#8ce99a', color: '#087f5b',
    teacher: 'Distribute a worksheet requiring students to identify parts of speech and write their own examples.',
    student: 'Complete the worksheet independently, applying what they have learned.',
    questions: [] },
  { title: 'Closure / summary', time: '5 min', bg: '#fff5f5', border: '#ffc9c9', color: '#c92a2a',
    teacher: 'Summarize key points by revisiting definitions. Ask students to share one thing they learned.',
    student: 'Share one new thing they learned and ask any final questions.',
    questions: [] },
];

const LessonPlannerResult = () => (
  <div className="phone-wrap">
    <div className="phone-label">Generated lesson plan</div>
    <div className="phone">
      <div className="ph-bar" />
      <div style={{ background: '#08090c' }}>
        <div className="ph-set-nav">
          <div className="ph-ham">
            <div className="ph-ham-line" style={{ height: '1.5px', width: '18px' }} />
            <div className="ph-ham-line" style={{ height: '1.5px', width: '12px' }} />
            <div className="ph-ham-line" style={{ height: '1.5px', width: '18px' }} />
          </div>
          <div className="ph-set-nav-title">AI Lesson Planner</div>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#3b5bdb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 500, color: '#fff', border: '2px solid rgba(255,255,255,.15)' }}>JS</div>
        </div>
      </div>

      {/* Lesson hero */}
      <div className="ph-lesson-hero">
        <div className="ph-lh-chips">
          {['CBSE', 'Class 8', '45 minutes', 'English'].map((c) => (
            <div key={c} className="ph-lh-chip">{c}</div>
          ))}
        </div>
        <div className="ph-lh-title">Understanding Parts of Speech</div>
        <div className="ph-lh-desc">This lesson introduces students to the eight parts of speech in the English language, including their definitions and examples.</div>
        <div className="ph-lh-footer">
          <div className="ph-lh-meta">
            <svg viewBox="0 0 12 12"><rect x="1" y="1.5" width="10" height="9.5" rx="1.5" /><line x1="3.5" y1="5" x2="8.5" y2="5" /><line x1="3.5" y1="7" x2="6.5" y2="7" /></svg>
            <span>English</span>
          </div>
          <div style={{ width: 1, height: 12, background: 'rgba(255,255,255,.2)' }} />
          <div className="ph-lh-meta">
            <svg viewBox="0 0 12 12"><circle cx="6" cy="6" r="4.5" /><line x1="4" y1="4" x2="4" y2="8" /><line x1="8" y1="4" x2="8" y2="8" /></svg>
            <span>1 lesson(s)</span>
          </div>
          <div className="ph-saved-badge">
            <svg viewBox="0 0 10 10"><polyline points="1.5,5.5 3.5,8 8.5,2" /></svg>
            <span>Saved</span>
          </div>
        </div>
      </div>

      <div className="ph-body">
        {/* Learning objectives */}
        <div className="ph-ssec">
          <div className="ph-ssec-head">
            <div className="ph-ssec-left">
              <div className="ph-ssec-ico" style={{ background: '#edf2ff' }}><svg style={{ stroke: '#3b5bdb' }} viewBox="0 0 12 12"><circle cx="6" cy="6" r="4.5" /><circle cx="6" cy="6" r="2" /></svg></div>
              <div className="ph-ssec-title">Learning objectives</div>
            </div>
          </div>
          <div className="ph-ssec-body" style={{ padding: '0 13px' }}>
            {[
              'Define the eight parts of speech: noun, pronoun, verb, adjective, adverb, preposition, conjunction, and interjection.',
              'Identify parts of speech in sentences.',
              'Use parts of speech correctly in their own sentences.',
            ].map((obj, i) => (
              <div key={i} className="ph-obj-item">
                <div className="ph-obj-check"><svg viewBox="0 0 9 9"><polyline points="1.5,4.5 3.5,7 7.5,2" /></svg></div>
                <div className="ph-obj-text">{obj}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Materials */}
        <div className="ph-ssec">
          <div className="ph-ssec-head">
            <div className="ph-ssec-left">
              <div className="ph-ssec-ico" style={{ background: '#fff9db' }}><svg style={{ stroke: '#c87014' }} viewBox="0 0 12 12"><rect x="1.5" y="1" width="9" height="10" rx="1.5" /><line x1="3.5" y1="4.5" x2="8.5" y2="4.5" /><line x1="3.5" y1="7" x2="7" y2="7" /></svg></div>
              <div className="ph-ssec-title">Materials needed</div>
            </div>
          </div>
          <div className="ph-ssec-body">
            <div className="ph-mat-tags">
              {['Whiteboard and markers', 'Printed worksheet', 'Chart — parts of speech'].map((m) => (
                <div key={m} className="ph-mat-tag">{m}</div>
              ))}
            </div>
          </div>
          <div className="ph-prior-lbl">Prior knowledge required</div>
          <div className="ph-prior-text">Students should have basic reading and writing skills in English and a general understanding of sentence structure.</div>
        </div>

        {/* Lesson breakdown */}
        <div className="ph-break-label">Lesson breakdown</div>

        <div className="ph-lesson-num">
          <div className="ph-ln-num">1</div>
          <div>
            <div className="ph-ln-title">Introduction to Parts of Speech</div>
            <div className="ph-ln-meta">
              <svg viewBox="0 0 12 12"><circle cx="6" cy="6" r="4.5" /><polyline points="6,3.5 6,6 8.5,6" /></svg>
              45 minutes · Recognizing the eight parts
            </div>
          </div>
        </div>

        {/* Phase cards */}
        {phases.map((p) => (
          <div key={p.title} className="ph-phase" style={{ background: p.bg, borderColor: p.border }}>
            <div className="ph-phase-head">
              <div className="ph-phase-title" style={{ color: p.color }}>{p.title}</div>
              <div className="ph-phase-time" style={{ color: p.color }}>
                <svg style={{ stroke: p.color }} viewBox="0 0 12 12"><circle cx="6" cy="6" r="4.5" /><polyline points="6,3.5 6,6 8.5,6" /></svg>
                {p.time}
              </div>
            </div>
            <div className="ph-phase-body">
              <div className="ph-phase-lbl" style={{ color: p.color }}>Teacher activity</div>
              <div className="ph-phase-text">{p.teacher}</div>
              <div className="ph-phase-lbl" style={{ color: p.color }}>Student activity</div>
              <div className="ph-phase-text">{p.student}</div>
              {p.questions.length > 0 && (
                <>
                  <div className="ph-phase-lbl" style={{ color: p.color }}>Key questions</div>
                  {p.questions.map((q, i) => (
                    <div key={i} className="ph-phase-q">{q}</div>
                  ))}
                </>
              )}
            </div>
          </div>
        ))}

        {/* Actions */}
        <div className="ph-act-row">
          <div className="ph-act-btn ph-act-primary">
            <svg viewBox="0 0 12 12"><polyline points="2,9 6,5 8.5,7.5 10.5,5" /><line x1="3" y1="11" x2="11" y2="11" /></svg>
            Export PDF
          </div>
          <div className="ph-act-btn ph-act-secondary">
            <svg viewBox="0 0 12 12"><path d="M12,7 A5,5 0 1,1 9.5,3" /><polyline points="9.5,1 9.5,3 11.5,3" /></svg>
            Regenerate
          </div>
        </div>
      </div>

      <AiTabBar active={2} />
    </div>
  </div>
);

/* ═══════════════════════════════════════
   SCREEN 10 — Principal Notes (Inbox)
   ═══════════════════════════════════════ */
const NotesTabBar = () => (
  <div className="ph-tab">
    {[
      { label: 'Dashboard', icon: <TabClasses /> },
      { label: 'Students', icon: <TabSchool /> },
      { label: 'Notes', icon: <svg viewBox="0 0 18 18"><path d="M2 13L16 13L13.5 9L16 5L2 5L4.5 9Z" /></svg> },
      { label: 'Profile', icon: <TabProfile /> },
    ].map((t, i) => (
      <div key={t.label} className={`ph-tab-item ${i === 2 ? 'on' : ''}`}>
        {t.icon}
        <span>{t.label}</span>
        {i === 2 && <div className="ph-tab-pip" />}
      </div>
    ))}
  </div>
);

const ChatBubble = ({ type, text, time, ticks }: { type: 'in' | 'out'; text: string; time: string; ticks?: 'done' | 'sent' }) => (
  <div className={`ph-msg ${type}`}>
    {type === 'in' && (
      <div className="ph-msg-sender">
        <div className="ph-msg-av"><svg viewBox="0 0 12 12"><path d="M1.5 10V6.5L6 4l4.5 2.5V10" /><circle cx="6" cy="5.5" r="1.5" /></svg></div>
        <div className="ph-msg-name">Ghouse Pasha</div>
      </div>
    )}
    <div className={`ph-bubble ${type}`}>
      <div className="ph-bubble-text">{text}</div>
      <div className="ph-bubble-meta">
        <div className="ph-btime">{time}</div>
        {ticks && <svg className={`ph-tick ${ticks}`} viewBox="0 0 14 9"><polyline points="1,5 4,8 8,2" /><polyline points="5,5 8,8 13,2" /></svg>}
      </div>
    </div>
  </div>
);

const PrincipalNotesInbox = () => (
  <div className="phone-wrap">
    <div className="phone-label">Principal notes — inbox</div>
    <div className="phone">
      <div className="ph-bar" />
      <div style={{ background: '#08090c' }}>
        <div className="ph-set-nav">
          <div className="ph-ham">
            <div className="ph-ham-line" style={{ height: '1.5px', width: '18px' }} />
            <div className="ph-ham-line" style={{ height: '1.5px', width: '12px' }} />
            <div className="ph-ham-line" style={{ height: '1.5px', width: '18px' }} />
          </div>
          <div className="ph-set-nav-title">Principal Notes</div>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#3b5bdb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 500, color: '#fff', border: '2px solid rgba(255,255,255,.15)' }}>JS</div>
        </div>
        <div className="ph-sum-hero" style={{ paddingBottom: 12 }}>
          <div style={{ fontSize: 9, fontWeight: 500, color: 'rgba(255,255,255,.28)', letterSpacing: '.07em', textTransform: 'uppercase' as const, marginBottom: 4 }}>Admin communication</div>
          <div className="ph-sum-title">Principal<br />notes</div>
          <div className="ph-sum-sub" style={{ textTransform: 'none' as const, letterSpacing: 0 }}>Direct channel with school administration.</div>
          <div className="ph-hstats">
            <div className="ph-hstat">
              <svg viewBox="0 0 12 12"><path d="M1,8.5 L11,8.5 L9,5.5 L11,2.5 L1,2.5 L3,5.5 Z" /></svg>
              <div><span className="ph-hstat-lbl">Messages</span><div className="ph-hstat-val">2</div></div>
            </div>
            <div className="ph-hstat">
              <svg viewBox="0 0 12 12"><rect x="1" y="2" width="10" height="8" rx="1.5" /><polyline points="1,4.5 6,7 11,4.5" /></svg>
              <div><span className="ph-hstat-lbl">Unread</span><div className="ph-hstat-val">0</div></div>
            </div>
            <div className="ph-hstat">
              <svg viewBox="0 0 12 12"><polyline points="1.5,7 4.5,10 10.5,3" /></svg>
              <div><span className="ph-hstat-lbl">Status</span><div className="ph-hstat-val" style={{ fontSize: 11, letterSpacing: 0 }}>Active</div></div>
            </div>
          </div>
        </div>

        {/* Principal card */}
        <div className="ph-pc">
          <div className="ph-pc-av"><svg viewBox="0 0 20 20"><path d="M2 16V10.5L10 5l8 5.5V16" /><rect x="7.5" y="11" width="5" height="5" rx="1" /><circle cx="10" cy="9" r="2" /></svg></div>
          <div>
            <div className="ph-pc-name">Ghouse Pasha</div>
            <div className="ph-pc-role">School Administration</div>
            <div className="ph-pc-online"><div className="ph-online-dot" /><div className="ph-online-txt">Online · Available</div></div>
          </div>
          <div className="ph-pc-actions">
            <div className="ph-pc-btn"><svg viewBox="0 0 13 13"><path d="M2,3 C2,3 3,2 5,2.5 L6,4.5 C6,4.5 5.5,5 5,5.5 C5.5,6.5 6.5,7.5 7.5,8 C8,7.5 8.5,7 8.5,7 L10.5,8 C11,10 10,10 10,10 C8,11 2,7 2,3Z" /></svg></div>
            <div className="ph-pc-btn"><svg viewBox="0 0 13 13"><circle cx="6.5" cy="3.5" r=".8" fill="rgba(255,255,255,.65)" stroke="none" /><circle cx="6.5" cy="6.5" r=".8" fill="rgba(255,255,255,.65)" stroke="none" /><circle cx="6.5" cy="9.5" r=".8" fill="rgba(255,255,255,.65)" stroke="none" /></svg></div>
          </div>
        </div>
      </div>

      {/* Stat cards */}
      <div className="ph-stat-row">
        <div className="ph-stat-c">
          <div className="ph-stat-top"><svg style={{ stroke: '#3b5bdb' }} viewBox="0 0 12 12"><path d="M1,8.5 L11,8.5 L9,5.5 L11,2.5 L1,2.5 L3,5.5 Z" /></svg><div className="ph-stat-lbl">Messages</div></div>
          <div className="ph-stat-val" style={{ color: '#3b5bdb' }}>2</div>
          <div className="ph-stat-sub">Total sent & received</div>
        </div>
        <div className="ph-stat-c">
          <div className="ph-stat-top"><svg style={{ stroke: '#087f5b' }} viewBox="0 0 12 12"><polyline points="1.5,6.5 4.5,10 10.5,3" /></svg><div className="ph-stat-lbl">Unread</div></div>
          <div className="ph-stat-val" style={{ color: '#087f5b' }}>0</div>
          <div className="ph-stat-sub">All messages read</div>
        </div>
      </div>

      {/* Chat */}
      <div className="ph-chat">
        <div className="ph-date-chip"><span>03 Apr 2026</span></div>
        <ChatBubble type="in" text="hllo sir have to comleted your class" time="06:23" />
        <ChatBubble type="out" text="yes sir done" time="06:24" ticks="done" />
        <div className="ph-typing">
          <div className="ph-tdot" /><div className="ph-tdot" style={{ opacity: .7 }} /><div className="ph-tdot" style={{ opacity: 1 }} />
          <div style={{ fontSize: 10, color: '#8c92a4', marginLeft: 4 }}>Principal typing...</div>
        </div>
      </div>

      <div className="ph-qchips">
        {['Yes sir ✓', 'Will do', 'On my way', 'Please give details'].map((q) => (
          <div key={q} className="ph-qchip">{q}</div>
        ))}
      </div>

      <div className="ph-chat-bar">
        <div className="ph-emoji-btn"><svg viewBox="0 0 14 14"><circle cx="7" cy="7" r="5.5" /><circle cx="4.5" cy="5.5" r=".7" fill="#8c92a4" stroke="none" /><circle cx="9.5" cy="5.5" r=".7" fill="#8c92a4" stroke="none" /><path d="M4.5,8.5 C4.5,10 9.5,10 9.5,8.5" /></svg></div>
        <div className="ph-chat-input">Reply to principal...</div>
        <div className="ph-send-btn"><svg viewBox="0 0 13 13"><line x1="2" y1="6.5" x2="11" y2="6.5" /><polyline points="8,3.5 11,6.5 8,9.5" /></svg></div>
      </div>

      <NotesTabBar />
    </div>
  </div>
);

/* ═══════════════════════════════════════
   SCREEN 11 — Principal Notes (Detail)
   ═══════════════════════════════════════ */
const PrincipalNotesDetail = () => (
  <div className="phone-wrap">
    <div className="phone-label">Principal chat — detail</div>
    <div className="phone">
      <div className="ph-bar" />
      <div style={{ background: '#08090c' }}>
        <div className="ph-set-nav">
          <div className="ph-ham">
            <div className="ph-ham-line" style={{ height: '1.5px', width: '18px' }} />
            <div className="ph-ham-line" style={{ height: '1.5px', width: '12px' }} />
            <div className="ph-ham-line" style={{ height: '1.5px', width: '18px' }} />
          </div>
          <div className="ph-set-nav-title">Principal Notes</div>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#3b5bdb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 500, color: '#fff', border: '2px solid rgba(255,255,255,.15)' }}>JS</div>
        </div>

        {/* Chat header */}
        <div style={{ padding: '8px 16px 20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 10 }}>
            <svg width="13" height="13" style={{ stroke: '#3b5bdb', fill: 'none', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' } as React.CSSProperties} viewBox="0 0 13 13"><polyline points="8,2 3,6.5 8,11" /></svg>
            <span style={{ fontSize: 12, color: '#3b5bdb' }}>Back</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(59,91,219,.2)', border: '1.5px solid rgba(59,91,219,.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="22" height="22" style={{ stroke: '#bac8ff', fill: 'none', strokeWidth: 1.4, strokeLinecap: 'round', strokeLinejoin: 'round' } as React.CSSProperties} viewBox="0 0 20 20"><path d="M2 16V10.5L10 5l8 5.5V16" /><rect x="7.5" y="11" width="5" height="5" rx="1" /><circle cx="10" cy="9" r="2" /></svg>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 16, fontWeight: 500, color: '#fff', letterSpacing: '-.2px' }}>Ghouse Pasha</div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,.35)', marginTop: 2 }}>School Administration · Principal</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 4 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#4cc9a4' }} />
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,.38)' }}>Online now</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info banner */}
      <div className="ph-info-banner">
        <div className="ph-info-card">
          <div className="ph-info-ico"><svg viewBox="0 0 12 12"><path d="M1,8.5 L11,8.5 L9,5.5 L11,2.5 L1,2.5 L3,5.5 Z" /></svg></div>
          <div style={{ flex: 1 }}>
            <div className="ph-info-title">Encrypted channel</div>
            <div className="ph-info-sub">Messages only visible to you and the principal</div>
          </div>
          <svg width="12" height="12" style={{ stroke: '#087f5b', fill: 'none', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' } as React.CSSProperties} viewBox="0 0 12 12"><polyline points="1.5,6.5 4.5,10 10.5,3" /></svg>
        </div>
      </div>

      {/* Chat area */}
      <div className="ph-chat" style={{ paddingTop: 6 }}>
        <div className="ph-date-chip"><span>03 Apr 2026</span></div>
        <ChatBubble type="in" text="hllo sir have to comleted your class" time="06:23" />
        <ChatBubble type="out" text="yes sir done" time="06:24" ticks="done" />

        <div style={{ height: 8 }} />
        <div className="ph-date-chip"><span>11 Apr 2026 · Today</span></div>
        <ChatBubble type="in" text="Sir please submit the student performance report by end of week." time="09:14" />
        <ChatBubble type="out" text="Sure sir, will submit by Friday." time="09:17" ticks="sent" />

        <div className="ph-typing">
          <div className="ph-tdot" /><div className="ph-tdot" style={{ opacity: .7 }} /><div className="ph-tdot" style={{ opacity: 1 }} />
          <div style={{ fontSize: 10, color: '#8c92a4', marginLeft: 3 }}>Typing...</div>
        </div>
      </div>

      <div className="ph-qchips">
        {['Yes sir ✓', 'Will do sir', 'Please give time', 'Noted'].map((q) => (
          <div key={q} className="ph-qchip">{q}</div>
        ))}
      </div>

      <div className="ph-chat-bar">
        <div className="ph-emoji-btn"><svg viewBox="0 0 14 14"><circle cx="7" cy="7" r="5.5" /><circle cx="4.5" cy="5.5" r=".7" fill="#8c92a4" stroke="none" /><circle cx="9.5" cy="5.5" r=".7" fill="#8c92a4" stroke="none" /><path d="M4.5,8.5 C4.5,10 9.5,10 9.5,8.5" /></svg></div>
        <div className="ph-chat-input">Reply to principal...</div>
        <div className="ph-send-btn"><svg viewBox="0 0 13 13"><line x1="2" y1="6.5" x2="11" y2="6.5" /><polyline points="8,3.5 11,6.5 8,9.5" /></svg></div>
      </div>

      <NotesTabBar />
    </div>
  </div>
);

/* ═══════════════════════════════════════
   SCREEN 12 — Parent Notes (List)
   ═══════════════════════════════════════ */
const MessagesTabBar = () => (
  <div className="ph-tab">
    {[
      { label: 'Dashboard', icon: <TabClasses /> },
      { label: 'Students', icon: <TabSchool /> },
      { label: 'Messages', icon: <svg viewBox="0 0 18 18"><path d="M2,12.5 L16,12.5 L13.5,8.5 L16,4.5 L2,4.5 L4.5,8.5 Z" /></svg> },
      { label: 'Profile', icon: <TabProfile /> },
    ].map((t, i) => (
      <div key={t.label} className={`ph-tab-item ${i === 2 ? 'on' : ''}`}>
        {t.icon}
        <span>{t.label}</span>
        {i === 2 && <div className="ph-tab-pip" />}
      </div>
    ))}
  </div>
);

const convos = [
  { initials: 'SM', name: 'Syed Muqeeth', preview: 'Hello sir', time: '01:21', bg: '#fff9db', color: '#c87014', unread: true, cls: '' },
  { initials: 'SM', name: 'Syed Muqeeth', preview: 'need improvement in english speaking', time: '23:17', bg: '#fff9db', color: '#c87014', unread: false, cls: 'Shaik sir' },
  { initials: 'TA', name: 'Tanveer Sultana', preview: '', time: '', bg: '#e3fafc', color: '#0c8599', unread: false, cls: 'Shaik sir' },
  { initials: 'TA', name: 'Tanveer Sultana', preview: '', time: '', bg: '#e3fafc', color: '#0c8599', unread: false, cls: '10B' },
];

const ParentNotesList = () => (
  <div className="phone-wrap">
    <div className="phone-label">Parent communication</div>
    <div className="phone">
      <div className="ph-bar" />
      <div style={{ background: '#08090c' }}>
        <div className="ph-set-nav">
          <div className="ph-ham">
            <div className="ph-ham-line" style={{ height: '1.5px', width: '18px' }} />
            <div className="ph-ham-line" style={{ height: '1.5px', width: '12px' }} />
            <div className="ph-ham-line" style={{ height: '1.5px', width: '18px' }} />
          </div>
          <div className="ph-set-nav-title">Parent Notes</div>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#3b5bdb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 500, color: '#fff', border: '2px solid rgba(255,255,255,.15)' }}>JS</div>
        </div>
        <div style={{ padding: '16px 18px 22px' }}>
          <div style={{ fontSize: 9, fontWeight: 500, color: 'rgba(255,255,255,.3)', letterSpacing: '.07em', textTransform: 'uppercase' as const, marginBottom: 5 }}>Communication</div>
          <div style={{ fontSize: 22, fontWeight: 500, color: '#fff', letterSpacing: '-.5px', lineHeight: 1.1 }}>Parent<br />messages</div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,.3)', marginTop: 4 }}>Stay connected with student parents.</div>
          <div style={{ display: 'flex', gap: 7, marginTop: 14 }}>
            {[
              { label: 'Messages', val: '4' },
              { label: 'Replies', val: '2' },
              { label: 'Parents', val: '2' },
            ].map((c) => (
              <div key={c.label} style={{ padding: '5px 10px', borderRadius: 20, border: '1px solid rgba(255,255,255,.1)', background: 'rgba(255,255,255,.06)', fontSize: 10, color: 'rgba(255,255,255,.6)', display: 'flex', alignItems: 'center', gap: 4 }}>
                <strong style={{ color: '#fff', fontWeight: 500 }}>{c.val}</strong>{c.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="ph-body">
        {/* Stat cards */}
        <div className="ph-stat-row3">
          <div className="ph-stat-c">
            <div className="ph-stat-top"><svg style={{ stroke: '#3b5bdb' }} viewBox="0 0 12 12"><path d="M1,8 L11,8 L9,5 L11,2 L1,2 L3,5 Z" /></svg><div className="ph-stat-lbl">Messages</div></div>
            <div className="ph-stat-val" style={{ color: '#3b5bdb' }}>4</div>
          </div>
          <div className="ph-stat-c">
            <div className="ph-stat-top"><svg style={{ stroke: '#c87014' }} viewBox="0 0 12 12"><rect x="1" y="2" width="10" height="8" rx="1.5" /><polyline points="1,5 6,7.5 11,5" /></svg><div className="ph-stat-lbl">Replies</div></div>
            <div className="ph-stat-val" style={{ color: '#c87014' }}>2</div>
          </div>
          <div className="ph-stat-c">
            <div className="ph-stat-top"><svg style={{ stroke: '#087f5b' }} viewBox="0 0 12 12"><path d="M1.5 10c0 0 1.5-2 4.5-2s4.5 2 4.5 2" /><circle cx="6" cy="5" r="2.5" /></svg><div className="ph-stat-lbl">Students</div></div>
            <div className="ph-stat-val" style={{ color: '#087f5b' }}>2</div>
          </div>
        </div>

        {/* Search */}
        <div className="ph-srch-wrap">
          <svg className="ph-srch-ico" viewBox="0 0 14 14"><circle cx="6" cy="6" r="4" /><line x1="9" y1="9" x2="12.5" y2="12.5" /></svg>
          <div className="ph-srch">Search students or messages...</div>
        </div>

        <div className="ph-sec-label">
          <svg viewBox="0 0 14 14"><path d="M1.5,9.5 L12.5,9.5 L10.5,6.5 L12.5,3.5 L1.5,3.5 L3.5,6.5 Z" /></svg>
          <span>Parent communication</span>
        </div>

        {/* Conversation list */}
        <div className="ph-conv-list">
          {convos.map((c, i) => (
            <div key={i} className={`ph-conv-item ${c.unread ? 'unread' : ''}`}>
              <div className="ph-conv-av" style={{ background: c.bg, color: c.color }}>
                {c.initials}
                {c.unread && <div className="ph-unread-badge" />}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="ph-conv-name">{c.name}</div>
                <div className="ph-conv-preview" style={!c.preview ? { color: '#8c92a4', fontStyle: 'italic' } : {}}>
                  {c.preview ? (
                    <>{c.unread && <svg viewBox="0 0 10 10"><path d="M1,7 L9,7 L7.5,4.5 L9,2 L1,2 L2.5,4.5 Z" /></svg>}{c.preview}</>
                  ) : 'No messages yet'}
                </div>
              </div>
              <div className="ph-conv-right">
                {c.time && <div className="ph-conv-time">{c.time}</div>}
                {c.unread && <span style={{ background: '#c92a2a', color: '#fff', borderRadius: 20, padding: '2px 7px', fontSize: 10, fontWeight: 500 }}>New</span>}
                {c.cls && <div className="ph-conv-class"><svg viewBox="0 0 10 10"><path d="M1 8V5.5L5 3l4 2.5V8" /><rect x="3.5" y="6" width="3" height="2" rx=".4" /></svg>{c.cls}</div>}
                {!c.preview && !c.unread && <span style={{ background: '#eceef4', color: '#8c92a4', borderRadius: 20, padding: '3px 8px', fontSize: 10, fontWeight: 500 }}>Tap to start</span>}
              </div>
            </div>
          ))}
          <div className="ph-no-reply">
            <svg viewBox="0 0 12 12"><circle cx="6" cy="6" r="4.5" /><line x1="6" y1="3.5" x2="6" y2="6.5" /><circle cx="6" cy="8.5" r=".6" fill="#8c92a4" stroke="none" /></svg>
            <span>2 parents haven't received a message yet</span>
          </div>
        </div>

        <div className="ph-compose-btn">
          <svg viewBox="0 0 14 14"><line x1="7" y1="2" x2="7" y2="12" /><line x1="2" y1="7" x2="12" y2="7" /></svg>
          New message to parent
        </div>
      </div>

      <MessagesTabBar />
    </div>
  </div>
);

/* ═══════════════════════════════════════
   SCREEN 13 — Parent Notes (Chat)
   ═══════════════════════════════════════ */
const ParentBubble = ({ type, text, time, ticks }: { type: 'in' | 'out'; text: string; time: string; ticks?: boolean }) => (
  <div className={`ph-msg ${type}`}>
    {type === 'in' && (
      <div className="ph-msg-sender">
        <div style={{ width: 24, height: 24, borderRadius: 8, background: '#eceef4', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="11" height="11" style={{ stroke: '#8c92a4', fill: 'none', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as React.CSSProperties} viewBox="0 0 12 12"><path d="M1 10c0 0 1.5-2 5-2s5 2 5 2" /><circle cx="6" cy="5" r="2.5" /></svg>
        </div>
        <div className="ph-msg-name">Parent</div>
      </div>
    )}
    <div className={`ph-p-bubble ${type}`}>
      <div className="ph-p-bubble-text">{text}</div>
      <div className="ph-p-bubble-meta">
        <div className="ph-p-btime">{time}</div>
        {ticks && <svg className="ph-p-tick read" viewBox="0 0 14 9"><polyline points="1,5 4,8 8,2" /><polyline points="5,5 8,8 13,2" /></svg>}
      </div>
    </div>
  </div>
);

const ParentNotesChat = () => (
  <div className="phone-wrap">
    <div className="phone-label">Chat with parent</div>
    <div className="phone">
      <div className="ph-bar" />
      <div style={{ background: '#08090c' }}>
        <div className="ph-set-nav">
          <div className="ph-ham">
            <div className="ph-ham-line" style={{ height: '1.5px', width: '18px' }} />
            <div className="ph-ham-line" style={{ height: '1.5px', width: '12px' }} />
            <div className="ph-ham-line" style={{ height: '1.5px', width: '18px' }} />
          </div>
          <div className="ph-set-nav-title">Parent Notes</div>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#3b5bdb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 500, color: '#fff', border: '2px solid rgba(255,255,255,.15)' }}>JS</div>
        </div>
        <div className="ph-ch-header">
          <div className="ph-ch-back"><svg viewBox="0 0 13 13"><polyline points="8,2 3,6.5 8,11" /></svg><span>All messages</span></div>
          <div className="ph-ch-row">
            <div className="ph-ch-av" style={{ background: '#fff9db', color: '#c87014' }}>SM</div>
            <div>
              <div className="ph-ch-name">Syed Muqeeth</div>
              <div className="ph-ch-sub">Shaik sir · Parent of Syed Muqeeth</div>
            </div>
            <div className="ph-ch-actions">
              <div className="ph-ch-ico-btn"><svg viewBox="0 0 13 13"><path d="M2,3 C2,3 3,2 5,2.5 L6,4.5 C6,4.5 5.5,5 5,5.5 C5.5,6.5 6.5,7.5 7.5,8 C8,7.5 8.5,7 8.5,7 L10.5,8 C11,10 10,10 10,10 C8,11 2,7 2,3Z" /></svg></div>
              <div className="ph-ch-ico-btn"><svg viewBox="0 0 13 13"><polyline points="2,3 11,3 9.5,5 11,7 2,7 4,5 Z" /></svg></div>
            </div>
          </div>
          <div className="ph-ch-online"><div className="ph-online-dot" /><div className="ph-online-txt">Parent active · Last seen 01:21</div></div>
        </div>
      </div>

      {/* Chat */}
      <div className="ph-chat">
        <div className="ph-date-chip"><span>03 Apr 2026</span></div>
        <ParentBubble type="in" text="hi sir" time="00:14" />
        <ParentBubble type="out" text="yes beta boliye" time="00:15" ticks />

        <div className="ph-date-chip"><span>08 Apr 2026</span></div>
        <ParentBubble type="out" text="need improvement in english speaking" time="23:17" ticks />

        <div className="ph-date-chip"><span>11 Apr 2026</span></div>
        <ParentBubble type="in" text="Hello sir" time="01:21" />

        <div className="ph-typing" style={{ marginTop: 4 }}>
          <div className="ph-tdot" /><div className="ph-tdot" style={{ opacity: .7 }} /><div className="ph-tdot" style={{ opacity: 1 }} />
          <div style={{ fontSize: 10, color: '#8c92a4', marginLeft: 3 }}>Parent is typing...</div>
        </div>
      </div>

      <div className="ph-chat-bar">
        <div className="ph-emoji-btn"><svg viewBox="0 0 14 14"><circle cx="7" cy="7" r="5.5" /><circle cx="4.5" cy="5.5" r=".7" fill="#8c92a4" stroke="none" /><circle cx="9.5" cy="5.5" r=".7" fill="#8c92a4" stroke="none" /><path d="M4.5,8.5 C4.5,10 9.5,10 9.5,8.5" /></svg></div>
        <div className="ph-chat-input">Message parent...</div>
        <div className="ph-send-btn"><svg viewBox="0 0 13 13"><line x1="2" y1="6.5" x2="11" y2="6.5" /><polyline points="8,3.5 11,6.5 8,9.5" /></svg></div>
      </div>

      <MessagesTabBar />
    </div>
  </div>
);

/* ═══════════════════════════════════════
   SCREEN 14-16 — Risks & Alerts
   ═══════════════════════════════════════ */
const AlertsTabBar = () => (
  <div className="ph-tab ph-tab-red">
    {[
      { label: 'Dashboard', icon: <TabClasses /> },
      { label: 'Students', icon: <TabSchool /> },
      { label: 'Alerts', icon: <svg viewBox="0 0 18 18"><path d="M9 2L16.5 15.5H1.5L9 2z" /><line x1="9" y1="7" x2="9" y2="11.5" /><circle cx="9" cy="13.5" r="1" fill="#c92a2a" stroke="none" /></svg> },
      { label: 'Profile', icon: <TabProfile /> },
    ].map((t, i) => (
      <div key={t.label} className={`ph-tab-item ${i === 2 ? 'on' : ''}`}>
        {t.icon}
        <span>{t.label}</span>
        {i === 2 && <div className="ph-tab-pip" />}
      </div>
    ))}
  </div>
);

const metrics = [
  { bg: '#fff5f5', border: '#ffc9c9', icoBg: 'rgba(201,42,42,.12)', stroke: '#c92a2a', color: '#c92a2a', label: 'Critical', badge: 'Urgent', icon: <svg stroke="currentColor" viewBox="0 0 14 14"><path d="M7 1.5L13 12.5H1L7 1.5z" /><line x1="7" y1="5.5" x2="7" y2="8.5" /><circle cx="7" cy="10.2" r=".7" fill="currentColor" stroke="none" /></svg> },
  { bg: '#fff9db', border: '#ffe066', icoBg: 'rgba(200,112,20,.12)', stroke: '#c87014', color: '#c87014', label: 'High priority', badge: 'High', icon: <svg stroke="currentColor" viewBox="0 0 14 14"><circle cx="7" cy="7" r="5.5" /><line x1="7" y1="4.5" x2="7" y2="7.5" /><circle cx="7" cy="9.5" r=".7" fill="currentColor" stroke="none" /></svg> },
  { bg: '#edf2ff', border: '#bac8ff', icoBg: 'rgba(59,91,219,.12)', stroke: '#3b5bdb', color: '#3b5bdb', label: 'Medium priority', badge: 'Medium', icon: <svg stroke="currentColor" viewBox="0 0 14 14"><circle cx="7" cy="7" r="5.5" /><line x1="7" y1="4.5" x2="7" y2="7.5" /><circle cx="7" cy="9.5" r=".7" fill="currentColor" stroke="none" /></svg> },
  { bg: '#ebfbee', border: '#8ce99a', icoBg: 'rgba(47,158,68,.12)', stroke: '#087f5b', color: '#087f5b', label: 'Resolved', badge: 'Resolved', icon: <svg stroke="currentColor" viewBox="0 0 14 14"><polyline points="1.5,7.5 5.5,11 12.5,3.5" /></svg> },
];

const MetricGrid = ({ showBadges = true }: { showBadges?: boolean }) => (
  <div className="ph-mgrid">
    {metrics.map((m) => (
      <div key={m.label} className="ph-mc" style={{ background: m.bg, borderColor: m.border }}>
        <div className="ph-mc-top">
          <div className="ph-mc-ico2" style={{ background: m.icoBg }}><span style={{ display: 'contents', color: m.stroke } as React.CSSProperties}>{m.icon}</span></div>
          {showBadges && <span style={{ padding: '3px 8px', borderRadius: 20, fontSize: 10, fontWeight: 500, background: `${m.stroke}18`, color: m.color }}>{m.badge}</span>}
        </div>
        <div className="ph-mc-val2" style={{ color: m.color }}>0</div>
        <div className="ph-mc-lbl2" style={{ color: m.color, opacity: .7 }}>{m.label}</div>
        <div className="ph-mc-bar"><div className="ph-mc-fill" style={{ width: '0%', background: m.stroke }} /></div>
      </div>
    ))}
  </div>
);

const EmptyAlertPanel = ({ title, subtitle, badgeText }: { title: string; subtitle: string; badgeText: string }) => (
  <div className="ph-alert-panel">
    <div className="ph-panel-head">
      <div className="ph-panel-title">
        <svg style={{ stroke: '#8c92a4' }} viewBox="0 0 14 14"><rect x="1.5" y="2" width="11" height="10.5" rx="1.5" /><line x1="4" y1="1" x2="4" y2="3.5" /><line x1="10" y1="1" x2="10" y2="3.5" /><line x1="1.5" y1="5.5" x2="12.5" y2="5.5" /></svg>
        {title}
      </div>
      <span style={{ padding: '3px 8px', borderRadius: 20, fontSize: 10, fontWeight: 500, background: '#ebfbee', color: '#087f5b' }}>0 active</span>
    </div>
    <div className="ph-empty-wrap">
      <div className="ph-em-ring" style={{ background: '#ebfbee' }}><svg style={{ stroke: '#087f5b' }} viewBox="0 0 22 22"><polyline points="3,11 8,16 19,5" /></svg></div>
      <div className="ph-em-title">{subtitle}</div>
      <div className="ph-em-sub">{badgeText}</div>
    </div>
  </div>
);

const ThresholdCard = ({ title, sub, rows }: { title: string; sub: string; rows: { dot: string; label: string; val: string; valColor: string }[] }) => (
  <div className="ph-thresh">
    <div className="ph-thresh-head">
      <div className="ph-thresh-title">{title}</div>
      <div className="ph-thresh-sub">{sub}</div>
    </div>
    {rows.map((r) => (
      <div key={r.label} className="ph-thresh-row">
        <div className="ph-thresh-left"><div className="ph-thresh-dot" style={{ background: r.dot }} /><div className="ph-thresh-label">{r.label}</div></div>
        <div className="ph-thresh-val" style={{ color: r.valColor }}>{r.val}</div>
      </div>
    ))}
  </div>
);

const AlertsAllTab = () => (
  <div className="phone-wrap">
    <div className="phone-label">All alerts tab</div>
    <div className="phone">
      <div className="ph-bar" />
      <div style={{ background: '#08090c' }}>
        <div className="ph-set-nav">
          <div className="ph-ham"><div className="ph-ham-line" style={{ height: '1.5px', width: '18px' }} /><div className="ph-ham-line" style={{ height: '1.5px', width: '12px' }} /><div className="ph-ham-line" style={{ height: '1.5px', width: '18px' }} /></div>
          <div className="ph-set-nav-title">Risks & Alerts</div>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#3b5bdb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 500, color: '#fff', border: '2px solid rgba(255,255,255,.15)' }}>JS</div>
        </div>
        <div style={{ padding: '16px 18px 24px' }}>
          <div style={{ fontSize: 9, fontWeight: 500, color: 'rgba(255,255,255,.3)', letterSpacing: '.07em', textTransform: 'uppercase' as const, marginBottom: 5 }}>Monitoring</div>
          <div style={{ fontSize: 22, fontWeight: 500, color: '#fff', letterSpacing: '-.5px', lineHeight: 1.1 }}>Risks &<br />alerts</div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,.3)', marginTop: 4 }}>Monitor and respond to student concerns.</div>
          <div style={{ display: 'flex', gap: 7, marginTop: 14 }}>
            {['0 Critical', 'All on track', 'Live'].map((c) => (
              <div key={c} style={{ padding: '5px 10px', borderRadius: 20, border: '1px solid rgba(255,255,255,.1)', background: 'rgba(255,255,255,.06)', fontSize: 10, color: 'rgba(255,255,255,.6)' }}>{c}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="ph-body">
        <MetricGrid />
        <div className="ph-tstrip">
          <div className="ph-tstrip-item on">All (0)</div>
          <div className="ph-tstrip-item">Attendance</div>
          <div className="ph-tstrip-item">Grades</div>
        </div>
        <EmptyAlertPanel title="All alerts" subtitle="All students on track" badgeText="No alerts in any category. Keep up the great work!" />
        <div className="ph-status-card">
          <div className="ph-sc-ico"><svg style={{ stroke: '#087f5b' }} viewBox="0 0 16 16"><polyline points="2.5,8.5 6,12 13.5,4" /></svg></div>
          <div><div className="ph-sc-title">System all clear</div><div className="ph-sc-sub">No critical or high priority alerts active.</div></div>
        </div>
        <div style={{ fontSize: 10, fontWeight: 500, color: '#8c92a4', letterSpacing: '.07em', textTransform: 'uppercase' as const, padding: '0 2px' }}>Quick actions</div>
        <div className="ph-qa-row">
          {[
            { bg: '#fff5f5', stroke: '#c92a2a', label: 'View at-risk', sub: 'See students needing help' },
            { bg: '#edf2ff', stroke: '#3b5bdb', label: 'Send alerts', sub: 'Notify parents directly' },
            { bg: '#ebfbee', stroke: '#087f5b', label: 'Mark resolved', sub: 'Close active alerts' },
            { bg: '#fff9db', stroke: '#c87014', label: 'Export report', sub: 'Download alert log' },
          ].map((q) => (
            <div key={q.label} className="ph-qa-btn">
              <div className="ph-qa-ico" style={{ background: q.bg }}><svg style={{ stroke: q.stroke }} viewBox="0 0 13 13"><polyline points="1.5,7 5,10.5 11.5,3" /></svg></div>
              <div className="ph-qa-lbl">{q.label}</div>
              <div className="ph-qa-sub">{q.sub}</div>
            </div>
          ))}
        </div>
      </div>
      <AlertsTabBar />
    </div>
  </div>
);

const AlertsAttendanceTab = () => (
  <div className="phone-wrap">
    <div className="phone-label">Attendance alerts tab</div>
    <div className="phone">
      <div className="ph-bar" />
      <div style={{ background: '#08090c' }}>
        <div className="ph-set-nav">
          <div className="ph-ham"><div className="ph-ham-line" style={{ height: '1.5px', width: '18px' }} /><div className="ph-ham-line" style={{ height: '1.5px', width: '12px' }} /><div className="ph-ham-line" style={{ height: '1.5px', width: '18px' }} /></div>
          <div className="ph-set-nav-title">Risks & Alerts</div>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#3b5bdb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 500, color: '#fff', border: '2px solid rgba(255,255,255,.15)' }}>JS</div>
        </div>
        <div style={{ padding: '16px 18px 24px' }}>
          <div style={{ fontSize: 9, fontWeight: 500, color: 'rgba(255,255,255,.3)', letterSpacing: '.07em', textTransform: 'uppercase' as const, marginBottom: 5 }}>Attendance monitoring</div>
          <div style={{ fontSize: 22, fontWeight: 500, color: '#fff', letterSpacing: '-.5px', lineHeight: 1.1 }}>Attendance<br />alerts</div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,.3)', marginTop: 4 }}>Students with attendance concerns appear here.</div>
        </div>
      </div>
      <div className="ph-body">
        <MetricGrid showBadges={false} />
        <div className="ph-tstrip">
          <div className="ph-tstrip-item">All (0)</div>
          <div className="ph-tstrip-item on">Attendance</div>
          <div className="ph-tstrip-item">Grades</div>
        </div>
        <EmptyAlertPanel title="Attendance alerts" subtitle="No attendance concerns" badgeText="All students have good attendance records this week." />
        <ThresholdCard title="Alert thresholds" sub="Alerts trigger when students cross these limits" rows={[
          { dot: '#c92a2a', label: 'Critical absence rate', val: '< 60%', valColor: '#c92a2a' },
          { dot: '#c87014', label: 'High priority', val: '60–74%', valColor: '#c87014' },
          { dot: '#3b5bdb', label: 'Medium priority', val: '75–79%', valColor: '#3b5bdb' },
        ]} />
      </div>
      <AlertsTabBar />
    </div>
  </div>
);

const AlertsGradesTab = () => (
  <div className="phone-wrap">
    <div className="phone-label">Grades alerts tab</div>
    <div className="phone">
      <div className="ph-bar" />
      <div style={{ background: '#08090c' }}>
        <div className="ph-set-nav">
          <div className="ph-ham"><div className="ph-ham-line" style={{ height: '1.5px', width: '18px' }} /><div className="ph-ham-line" style={{ height: '1.5px', width: '12px' }} /><div className="ph-ham-line" style={{ height: '1.5px', width: '18px' }} /></div>
          <div className="ph-set-nav-title">Risks & Alerts</div>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#3b5bdb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 500, color: '#fff', border: '2px solid rgba(255,255,255,.15)' }}>JS</div>
        </div>
        <div style={{ padding: '16px 18px 24px' }}>
          <div style={{ fontSize: 9, fontWeight: 500, color: 'rgba(255,255,255,.3)', letterSpacing: '.07em', textTransform: 'uppercase' as const, marginBottom: 5 }}>Grade monitoring</div>
          <div style={{ fontSize: 22, fontWeight: 500, color: '#fff', letterSpacing: '-.5px', lineHeight: 1.1 }}>Grade<br />alerts</div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,.3)', marginTop: 4 }}>Students with grade concerns appear here.</div>
        </div>
      </div>
      <div className="ph-body">
        <MetricGrid showBadges={false} />
        <div className="ph-tstrip">
          <div className="ph-tstrip-item">All (0)</div>
          <div className="ph-tstrip-item">Attendance</div>
          <div className="ph-tstrip-item on">Grades</div>
        </div>
        <EmptyAlertPanel title="Grade alerts" subtitle="No grade concerns" badgeText="All students are performing within acceptable grade ranges." />
        <ThresholdCard title="Grade alert thresholds" sub="Alerts trigger when scores fall below" rows={[
          { dot: '#c92a2a', label: 'Critical (F grade)', val: '< 40%', valColor: '#c92a2a' },
          { dot: '#c87014', label: 'High priority', val: '40–49%', valColor: '#c87014' },
          { dot: '#3b5bdb', label: 'Medium priority', val: '50–59%', valColor: '#3b5bdb' },
        ]} />
        <div className="ph-subj-card">
          <div className="ph-subj-title">Subject health check</div>
          {[
            { name: 'English', bg: '#edf2ff', stroke: '#3b5bdb', pct: 97.5, pctColor: '#087f5b', barColor: '#2f9e44' },
            { name: 'Social', bg: '#f3f0ff', stroke: '#6741d9', pct: 50, pctColor: '#c87014', barColor: '#c87014' },
          ].map((s) => (
            <div key={s.name} className="ph-subj-row">
              <div className="ph-subj-left">
                <div className="ph-subj-ico" style={{ background: s.bg }}><svg style={{ stroke: s.stroke }} viewBox="0 0 12 12"><rect x="1.5" y="1" width="9" height="10" rx="1.5" /><line x1="3.5" y1="4.5" x2="8.5" y2="4.5" /><line x1="3.5" y1="7" x2="6" y2="7" /></svg></div>
                {s.name}
              </div>
              <div className="ph-subj-right">
                <div className="ph-subj-bar"><div className="ph-subj-fill" style={{ width: `${s.pct}%`, background: s.barColor }} /></div>
                <div className="ph-subj-pct" style={{ color: s.pctColor }}>{s.pct}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <AlertsTabBar />
    </div>
  </div>
);

/* ═══════════════════════════════════════
   SCREEN 17 — Concept Mastery (Overview)
   ═══════════════════════════════════════ */
const ConceptsTabBar = () => (
  <div className="ph-tab">
    {[
      { label: 'Dashboard', icon: <TabClasses /> },
      { label: 'Students', icon: <TabSchool /> },
      { label: 'Concepts', icon: <svg viewBox="0 0 18 18"><polyline points="2,13 6,8 9,10.5 13,5 16,7" /><circle cx="6" cy="8" r="1.5" fill="#3b5bdb" stroke="none" /><circle cx="13" cy="5" r="1.5" fill="#3b5bdb" stroke="none" /></svg> },
      { label: 'Profile', icon: <TabProfile /> },
    ].map((t, i) => (
      <div key={t.label} className={`ph-tab-item ${i === 2 ? 'on' : ''}`}>
        {t.icon}
        <span>{t.label}</span>
        {i === 2 && <div className="ph-tab-pip" />}
      </div>
    ))}
  </div>
);

const students = [
  { initials: 'SM', name: 'Syed Muqeeth', roll: 'Roll 897 · Shaik sir', bg: '#fff9db', color: '#c87014' },
  { initials: 'TA', name: 'Tanveer Sultana', roll: 'Roll 898 · Shaik sir', bg: '#e3fafc', color: '#0c8599' },
];

const ConceptMasteryOverview = () => (
  <div className="phone-wrap">
    <div className="phone-label">Concept mastery — overview</div>
    <div className="phone">
      <div className="ph-bar" />
      <div style={{ background: '#08090c' }}>
        <div className="ph-set-nav">
          <div className="ph-ham"><div className="ph-ham-line" style={{ height: '1.5px', width: '18px' }} /><div className="ph-ham-line" style={{ height: '1.5px', width: '12px' }} /><div className="ph-ham-line" style={{ height: '1.5px', width: '18px' }} /></div>
          <div className="ph-set-nav-title">Concept Mastery</div>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#3b5bdb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 500, color: '#fff', border: '2px solid rgba(255,255,255,.15)' }}>JS</div>
        </div>
        <div style={{ padding: '16px 18px 24px' }}>
          <div style={{ fontSize: 9, fontWeight: 500, color: 'rgba(255,255,255,.3)', letterSpacing: '.07em', textTransform: 'uppercase' as const, marginBottom: 5 }}>Concept mastery</div>
          <div style={{ fontSize: 22, fontWeight: 500, color: '#fff', letterSpacing: '-.5px', lineHeight: 1.1 }}>Student<br />understanding</div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,.3)', marginTop: 4 }}>Track concept mastery across all assessed topics.</div>
          <div style={{ display: 'flex', gap: 7, marginTop: 14 }}>
            {['2 Students', '0 Concepts', 'Not assessed'].map((c) => (
              <div key={c} style={{ padding: '5px 10px', borderRadius: 20, border: '1px solid rgba(255,255,255,.1)', background: 'rgba(255,255,255,.06)', fontSize: 10, color: 'rgba(255,255,255,.6)' }}>{c}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="ph-body">
        <div className="ph-toolbar">
          <div className="ph-srch-wrap" style={{ flex: 1 }}>
            <svg className="ph-srch-ico" viewBox="0 0 14 14"><circle cx="6" cy="6" r="4" /><line x1="9" y1="9" x2="12.5" y2="12.5" /></svg>
            <div className="ph-srch">Search student...</div>
          </div>
          <div className="ph-exp-btn">
            <svg viewBox="0 0 12 12"><polyline points="6,2 6,9" /><polyline points="3,7 6,10 9,7" /><line x1="2" y1="10" x2="10" y2="10" /></svg>
            Export
          </div>
        </div>

        <div className="ph-class-sel">Shaik sir — Social</div>

        <div className="ph-legend">
          {[
            { color: '#2f9e44', label: 'Mastered (80%+)' },
            { color: '#c87014', label: 'Developing (50–79%)' },
            { color: '#c92a2a', label: 'Weak (<50%)' },
            { color: '#eceef4', label: 'Not assessed', border: true },
          ].map((l) => (
            <div key={l.label} className="ph-leg">
              <div className="ph-leg-dot" style={{ background: l.color, border: l.border ? '1px solid #e2e5ee' : 'none' }} />
              <div className="ph-leg-lbl">{l.label}</div>
            </div>
          ))}
        </div>

        <div className="ph-ring-card">
          <div className="ph-ring-wrap">
            <svg viewBox="0 0 70 70"><circle cx="35" cy="35" r="28" fill="none" stroke="#eceef4" strokeWidth="6" /></svg>
            <div className="ph-ring-label">
              <div className="ph-ring-val" style={{ color: '#8c92a4' }}>N/A</div>
              <div className="ph-ring-sub">mastery</div>
            </div>
          </div>
          <div>
            <div className="ph-ring-title">Class mastery</div>
            <div className="ph-ring-desc">No concepts assessed yet for Shaik sir — Social.</div>
            <div className="ph-ring-pills">
              <span style={{ padding: '3px 8px', borderRadius: 20, fontSize: 10, fontWeight: 500, background: '#eceef4', color: '#8c92a4' }}>0 mastered</span>
              <span style={{ padding: '3px 8px', borderRadius: 20, fontSize: 10, fontWeight: 500, background: '#eceef4', color: '#8c92a4' }}>0 developing</span>
            </div>
          </div>
        </div>

        <div className="ph-stbl">
          <div className="ph-stbl-head">
            <div className="ph-stbl-th ph-stbl-th-name">Student</div>
            <div className="ph-stbl-th ph-stbl-th-status">Status</div>
            <div className="ph-stbl-th ph-stbl-th-score">Mastery</div>
          </div>
          {students.map((s) => (
            <div key={s.initials + s.name} className="ph-stbl-row">
              <div className="ph-st-name-cell">
                <div className="ph-st-av" style={{ background: s.bg, color: s.color }}>{s.initials}</div>
                <div><div className="ph-st-name">{s.name}</div><div className="ph-st-roll">{s.roll}</div></div>
              </div>
              <div className="ph-st-status"><div className="ph-spill" style={{ background: '#eceef4', color: '#8c92a4' }}><div className="ph-sdot" />Not assessed</div></div>
              <div className="ph-st-score">—</div>
            </div>
          ))}
          <div className="ph-avg-row">
            <div className="ph-avg-lbl"><div className="ph-avg-title">Class average</div><div className="ph-avg-name">Shaik sir</div></div>
            <div className="ph-st-status"><div className="ph-spill" style={{ background: '#eceef4', color: '#8c92a4' }}><div className="ph-sdot" />No data</div></div>
            <div className="ph-st-score">—</div>
          </div>
        </div>

        <div style={{ background: '#edf2ff', border: '1px solid #bac8ff', borderRadius: 14, padding: '13px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: 10, background: 'rgba(59,91,219,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="14" height="14" style={{ stroke: '#3b5bdb', fill: 'none', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as React.CSSProperties} viewBox="0 0 14 14"><circle cx="7" cy="7" r="5.5" /><line x1="7" y1="4.5" x2="7" y2="7.5" /><circle cx="7" cy="9.5" r=".7" fill="#3b5bdb" stroke="none" /></svg>
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 500, color: '#3b5bdb' }}>No concepts tracked yet</div>
            <div style={{ fontSize: 10, color: '#3b5bdb', opacity: .7, marginTop: 2, lineHeight: 1.4 }}>Add concept scores from the Tests & Exams section to see mastery data here.</div>
          </div>
        </div>
      </div>
      <ConceptsTabBar />
    </div>
  </div>
);

/* ═══════════════════════════════════════
   SCREEN 18 — Concept Mastery (Detail)
   ═══════════════════════════════════════ */
const cstatusItems = [
  { title: 'Mastered', bg: '#ebfbee', stroke: '#087f5b', badge: '0 concepts', badgeBg: '#ebfbee', badgeColor: '#087f5b', emptyText: 'No mastered concepts yet.\nKeep practising!' },
  { title: 'Developing', bg: '#fff9db', stroke: '#c87014', badge: '0 concepts', badgeBg: '#fff9db', badgeColor: '#c87014', emptyText: 'No developing concepts.\nStart assessing students.' },
  { title: 'Weak areas', bg: '#fff5f5', stroke: '#c92a2a', badge: 'All clear', badgeBg: '#ebfbee', badgeColor: '#087f5b', emptyText: 'No weak areas detected.\nGreat job, Syed!' },
];

const ConceptMasteryDetail = () => (
  <div className="phone-wrap">
    <div className="phone-label">Student concept detail</div>
    <div className="phone">
      <div className="ph-bar" />
      <div style={{ background: '#08090c' }}>
        <div className="ph-set-nav">
          <div className="ph-ham"><div className="ph-ham-line" style={{ height: '1.5px', width: '18px' }} /><div className="ph-ham-line" style={{ height: '1.5px', width: '12px' }} /><div className="ph-ham-line" style={{ height: '1.5px', width: '18px' }} /></div>
          <div className="ph-set-nav-title">Concept Mastery</div>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#3b5bdb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 500, color: '#fff', border: '2px solid rgba(255,255,255,.15)' }}>JS</div>
        </div>
        <div className="ph-prof-header">
          <div className="ph-prof-back"><svg viewBox="0 0 13 13"><polyline points="8,2 3,6.5 8,11" /></svg><span>All students</span></div>
          <div className="ph-prof-eyebrow">Concept mastery analysis</div>
          <div className="ph-prof-row">
            <div className="ph-prof-av" style={{ background: '#fff9db', color: '#c87014' }}>SM</div>
            <div><div className="ph-prof-name">Syed Muqeeth</div><div className="ph-prof-sub">Shaik sir · Social<br />Roll: 897</div></div>
          </div>
          <div className="ph-prof-actions">
            <div className="ph-prof-ghost"><svg viewBox="0 0 12 12"><circle cx="6" cy="6" r="2.5" /><path d="M1,6 C1,6 3,2 6,2 C9,2 11,6 11,6 C11,6 9,10 6,10 C3,10 1,6 1,6Z" /></svg>View profile</div>
            <div className="ph-prof-solid"><svg viewBox="0 0 12 12"><path d="M2,3 C2,3 3,2 5,2.5 L6,4.5 C6,4.5 5.5,5 5,5.5 C5.5,6.5 6.5,7.5 7.5,8 C8,7.5 8.5,7 8.5,7 L10.5,8 C11,10 10,10 10,10 C8,11 2,7 2,3Z" /></svg>Contact parent</div>
          </div>
        </div>
      </div>

      <div className="ph-body">
        <div className="ph-sum-stat3">
          {[
            { val: '0', label: 'Mastered', bg: '#ebfbee', border: '#8ce99a', color: '#087f5b' },
            { val: '0', label: 'Developing', bg: '#fff9db', border: '#ffe066', color: '#c87014' },
            { val: '0', label: 'Weak', bg: '#fff5f5', border: '#ffc9c9', color: '#c92a2a' },
          ].map((s) => (
            <div key={s.label} className="ph-sum-stat-card" style={{ background: s.bg, border: `1px solid ${s.border}` }}>
              <div className="ph-sum-stat-val" style={{ color: s.color }}>{s.val}</div>
              <div className="ph-sum-stat-lbl" style={{ color: s.color }}>{s.label}</div>
            </div>
          ))}
        </div>

        {cstatusItems.map((c) => {
          const icoColor = c.stroke;
          const emptyColor = c.title === 'Weak areas' ? '#087f5b' : c.stroke;
          const emptyBg = c.title === 'Weak areas' ? '#ebfbee' : c.bg;
          return (
            <div key={c.title} className="ph-cstatus">
              <div className="ph-cstatus-head">
                <div className="ph-cstatus-ico" style={{ background: c.bg, color: icoColor }}>
                  {c.title === 'Mastered' && <svg stroke="currentColor" viewBox="0 0 13 13"><polyline points="1.5,7 5,10.5 11.5,3" /></svg>}
                  {c.title === 'Developing' && <svg stroke="currentColor" viewBox="0 0 13 13"><polyline points="1.5,9 4.5,6 7,8 10.5,4" /><polyline points="8.5,4 10.5,4 10.5,6" /></svg>}
                  {c.title === 'Weak areas' && <svg stroke="currentColor" viewBox="0 0 13 13"><path d="M6.5 1.5L12 11.5H1L6.5 1.5z" /><line x1="6.5" y1="5" x2="6.5" y2="8" /><circle cx="6.5" cy="9.5" r=".6" fill="currentColor" stroke="none" /></svg>}
                </div>
                <div className="ph-cstatus-title">{c.title}</div>
                <span style={{ marginLeft: 'auto', padding: '3px 8px', borderRadius: 20, fontSize: 10, fontWeight: 500, background: c.badgeBg, color: c.badgeColor }}>{c.badge}</span>
              </div>
              <div className="ph-cstatus-body">
                <div className="ph-cstatus-empty">
                  <div className="ph-cem-ico" style={{ background: emptyBg, color: emptyColor }}>
                    <svg stroke="currentColor" viewBox="0 0 13 13"><polyline points="1.5,7 5,10.5 11.5,3" /></svg>
                  </div>
                  <div className="ph-cem-text">{c.emptyText}</div>
                </div>
              </div>
            </div>
          );
        })}

        <div className="ph-rec">
          <div className="ph-rec-head">
            <div className="ph-rec-ico"><svg viewBox="0 0 12 12"><circle cx="6" cy="6" r="4.5" /><line x1="6" y1="3.5" x2="6" y2="6.5" /><circle cx="6" cy="8.5" r=".6" fill="#3b5bdb" stroke="none" /></svg></div>
            <div className="ph-rec-title">Recommended actions</div>
          </div>
          {[
            'Review all completed topics with student to reinforce understanding.',
            'Encourage consistent daily practice across all subject areas.',
            'Add concept assessments from Tests & Exams to track mastery progress.',
          ].map((r, i) => (
            <div key={i} className="ph-rec-item">
              <div className="ph-rec-num">{i + 1}</div>
              <div className="ph-rec-text">{r}</div>
            </div>
          ))}
        </div>

        <div style={{ background: '#ebfbee', border: '1px solid #8ce99a', borderRadius: 13, padding: '12px 13px', display: 'flex', alignItems: 'center', gap: 9 }}>
          <div style={{ width: 30, height: 30, borderRadius: 9, background: 'rgba(47,158,68,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="13" height="13" style={{ stroke: '#087f5b', fill: 'none', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' } as React.CSSProperties} viewBox="0 0 13 13"><polyline points="1.5,7 5,10.5 11.5,3" /></svg>
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 500, color: '#087f5b' }}>No risk alerts</div>
            <div style={{ fontSize: 10, color: '#087f5b', opacity: .75, marginTop: 2, lineHeight: 1.3 }}>Student is performing well across all tracked concepts.</div>
          </div>
        </div>
      </div>
      <ConceptsTabBar />
    </div>
  </div>
);

/* ═══════════════════════════════════════
   SCREEN 19 — Gradebook (Main)
   ═══════════════════════════════════════ */
const GradebookTabBar = () => (
  <div className="ph-tab">
    {[
      { label: 'Dashboard', icon: <TabClasses /> },
      { label: 'Students', icon: <TabSchool /> },
      { label: 'Gradebook', icon: <svg viewBox="0 0 18 18"><rect x="2" y="2" width="14" height="14" rx="2" /><line x1="5.5" y1="6" x2="12.5" y2="6" /><line x1="5.5" y1="9" x2="12.5" y2="9" /><line x1="5.5" y1="12" x2="9" y2="12" /></svg> },
      { label: 'Profile', icon: <TabProfile /> },
    ].map((t, i) => (
      <div key={t.label} className={`ph-tab-item ${i === 2 ? 'on' : ''}`}>
        {t.icon}
        <span>{t.label}</span>
        {i === 2 && <div className="ph-tab-pip" />}
      </div>
    ))}
  </div>
);

const gradeStudents = [
  { initials: 'SM', name: 'Syed Muqeeth', roll: 'Roll 897', bg: '#fff9db', color: '#c87014' },
  { initials: 'TS', name: 'Tanveer Sultana', roll: 'Roll 898', bg: '#e3fafc', color: '#0c8599' },
];

const GradebookMain = () => (
  <div className="phone-wrap">
    <div className="phone-label">Gradebook — main view</div>
    <div className="phone">
      <div className="ph-bar" />
      <div style={{ background: '#08090c' }}>
        <div className="ph-set-nav">
          <div className="ph-ham"><div className="ph-ham-line" style={{ height: '1.5px', width: '18px' }} /><div className="ph-ham-line" style={{ height: '1.5px', width: '12px' }} /><div className="ph-ham-line" style={{ height: '1.5px', width: '18px' }} /></div>
          <div className="ph-set-nav-title">Gradebook</div>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#3b5bdb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 500, color: '#fff', border: '2px solid rgba(255,255,255,.15)' }}>JS</div>
        </div>
        <div style={{ padding: '16px 18px 24px' }}>
          <div style={{ fontSize: 9, fontWeight: 500, color: 'rgba(255,255,255,.3)', letterSpacing: '.07em', textTransform: 'uppercase' as const, marginBottom: 5 }}>Academic records</div>
          <div style={{ fontSize: 22, fontWeight: 500, color: '#fff', letterSpacing: '-.5px', lineHeight: 1.1 }}>Gradebook</div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,.3)', marginTop: 4 }}>Complete academic record for Shaik sir — Social.</div>
          <div style={{ display: 'flex', gap: 7, marginTop: 14 }}>
            {['2 Students', '1 Unit', '0.0 Avg'].map((c) => (
              <div key={c} style={{ padding: '5px 10px', borderRadius: 20, border: '1px solid rgba(255,255,255,.1)', background: 'rgba(255,255,255,.06)', fontSize: 10, color: 'rgba(255,255,255,.6)' }}>{c}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="ph-body">
        <div className="ph-toolbar">
          <div className="ph-srch-wrap" style={{ flex: 1 }}>
            <svg className="ph-srch-ico" viewBox="0 0 14 14"><circle cx="6" cy="6" r="4" /><line x1="9" y1="9" x2="12.5" y2="12.5" /></svg>
            <div className="ph-srch">Search student...</div>
          </div>
          <div className="ph-tool-btn"><svg viewBox="0 0 12 12"><line x1="6" y1="2" x2="6" y2="10" /><line x1="2" y1="6" x2="10" y2="6" /></svg>Column</div>
          <div className="ph-tool-icon"><svg viewBox="0 0 14 14"><path d="M2,3 L12,3 L9,8 L9,12 L5,10 L5,8 Z" /></svg></div>
        </div>

        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <div className="ph-class-sel" style={{ flex: 1 }}>Shaik sir — Social</div>
          <div className="ph-save-btn"><svg viewBox="0 0 12 12"><polyline points="1.5,6.5 4.5,10 10.5,2.5" /></svg>Save</div>
        </div>

        {/* Grade table */}
        <div className="ph-gtable">
          <div className="ph-gt-head">
            <div className="ph-gth ph-gth-student">Student</div>
            <div className="ph-gth ph-gth-unit">Unit 1</div>
            <div className="ph-gth ph-gth-total">Total</div>
            <div className="ph-gth ph-gth-grade">Grade</div>
          </div>
          {gradeStudents.map((s) => (
            <div key={s.initials} className="ph-gt-row">
              <div className="ph-gt-student">
                <div className="ph-gt-av" style={{ background: s.bg, color: s.color }}>{s.initials}</div>
                <div><div className="ph-gt-name">{s.name}</div><div className="ph-gt-roll">{s.roll}</div></div>
              </div>
              <div className="ph-gt-unit">—</div>
              <div className="ph-gt-total">0</div>
              <div className="ph-gt-grade"><div className="ph-gpill ph-gp-f">F</div></div>
            </div>
          ))}
          <div className="ph-gt-avg">
            <div className="ph-gt-avg-lbl"><div className="ph-gt-avg-title">Class average</div><div className="ph-gt-avg-name">Shaik sir</div></div>
            <div className="ph-gt-unit">—</div>
            <div className="ph-gt-total">0.0</div>
            <div className="ph-gt-grade"><div className="ph-gpill ph-gp-f">F</div></div>
          </div>
        </div>

        {/* Stats */}
        <div className="ph-stats-row">
          {[
            { val: '0%', label: 'Class avg', color: '#c92a2a', w: '0%' },
            { val: '0', label: 'Excellent', color: '#087f5b', w: '0%' },
            { val: '2', label: 'At risk', color: '#c92a2a', w: '100%' },
          ].map((s) => (
            <div key={s.label} className="ph-stat-card">
              <div className="ph-stat-card-val" style={{ color: s.color }}>{s.val}</div>
              <div className="ph-stat-card-lbl">{s.label}</div>
              <div className="ph-stat-card-bar"><div style={{ height: '100%', borderRadius: 2, background: s.color, width: s.w }} /></div>
            </div>
          ))}
        </div>

        {/* Distribution */}
        <div className="ph-dist">
          <div className="ph-dist-head">
            <div className="ph-dist-title">Grade distribution</div>
            <span style={{ padding: '3px 8px', borderRadius: 20, fontSize: 10, fontWeight: 500, background: '#eceef4', color: '#8c92a4' }}>Unit 1</span>
          </div>
          <div className="ph-dist-body">
            {[
              { label: 'A (90+)', color: '#087f5b', w: '0%', count: '0' },
              { label: 'B (70–89)', color: '#3b5bdb', w: '0%', count: '0' },
              { label: 'C (50–69)', color: '#c87014', w: '0%', count: '0' },
              { label: 'F (<50)', color: '#c92a2a', w: '100%', count: '2' },
            ].map((d) => (
              <div key={d.label} className="ph-dist-row">
                <div className="ph-dist-lbl" style={{ color: d.color }}>{d.label}</div>
                <div className="ph-dist-bar"><div className="ph-dist-fill" style={{ width: d.w, background: d.color }} /></div>
                <div className="ph-dist-count" style={{ color: d.color }}>{d.count}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="ph-legend">
          {[
            { color: '#2f9e44', label: 'Excellent (90%+)' },
            { color: '#3b5bdb', label: 'Good (70–89%)' },
            { color: '#c87014', label: 'Average (50–69%)' },
            { color: '#c92a2a', label: 'At risk (<50%)' },
          ].map((l) => (
            <div key={l.label} className="ph-leg"><div className="ph-leg-dot" style={{ background: l.color }} /><div className="ph-leg-lbl">{l.label}</div></div>
          ))}
        </div>
      </div>
      <GradebookTabBar />
    </div>
  </div>
);

/* ═══════════════════════════════════════
   SCREEN 20 — Gradebook (Enter Scores)
   ═══════════════════════════════════════ */
const GradebookScores = () => (
  <div className="phone-wrap">
    <div className="phone-label">Enter scores — edit mode</div>
    <div className="phone">
      <div className="ph-bar" />
      <div style={{ background: '#08090c' }}>
        <div className="ph-set-nav">
          <div className="ph-ham"><div className="ph-ham-line" style={{ height: '1.5px', width: '18px' }} /><div className="ph-ham-line" style={{ height: '1.5px', width: '12px' }} /><div className="ph-ham-line" style={{ height: '1.5px', width: '18px' }} /></div>
          <div className="ph-set-nav-title">Gradebook</div>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#3b5bdb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 500, color: '#fff', border: '2px solid rgba(255,255,255,.15)' }}>JS</div>
        </div>
        <div style={{ padding: '16px 18px 24px' }}>
          <div style={{ fontSize: 9, fontWeight: 500, color: 'rgba(255,255,255,.3)', letterSpacing: '.07em', textTransform: 'uppercase' as const, marginBottom: 5 }}>Enter scores</div>
          <div style={{ fontSize: 22, fontWeight: 500, color: '#fff', letterSpacing: '-.5px', lineHeight: 1.1 }}>Unit 1<br />Scores</div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,.3)', marginTop: 4 }}>Shaik sir — Social · Max 100 marks</div>
          <div style={{ display: 'flex', gap: 7, marginTop: 14 }}>
            {['Editing', '2 Students'].map((c) => (
              <div key={c} style={{ padding: '5px 10px', borderRadius: 20, border: '1px solid rgba(255,255,255,.1)', background: 'rgba(255,255,255,.06)', fontSize: 10, color: 'rgba(255,255,255,.6)' }}>{c}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="ph-body">
        {/* Unit info */}
        <div style={{ background: '#fff', border: '1px solid #e2e5ee', borderRadius: 14, padding: '12px 13px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
            <div style={{ width: 34, height: 34, borderRadius: 10, background: '#f3f0ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="15" height="15" style={{ stroke: '#6741d9', fill: 'none', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as React.CSSProperties} viewBox="0 0 14 14"><rect x="2" y="1.5" width="10" height="11" rx="1.5" /><line x1="4.5" y1="5" x2="9.5" y2="5" /><line x1="4.5" y1="7.5" x2="7.5" y2="7.5" /></svg>
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 500, color: '#08090c' }}>Unit 1 assessment</div>
              <div style={{ fontSize: 10, color: '#8c92a4', marginTop: 1 }}>Max 100 marks · Shaik sir</div>
            </div>
          </div>
          <span style={{ padding: '3px 8px', borderRadius: 20, fontSize: 10, fontWeight: 500, background: '#f3f0ff', color: '#6741d9' }}>Active</span>
        </div>

        <div style={{ fontSize: 10, fontWeight: 500, color: '#8c92a4', letterSpacing: '.07em', textTransform: 'uppercase' as const, padding: '0 2px' }}>Student scores</div>

        {/* Score cards */}
        {gradeStudents.map((s) => (
          <div key={s.initials} className="ph-score-card">
            <div className="ph-score-band" style={{ background: s.color }} />
            <div className="ph-score-body">
              <div className="ph-score-header">
                <div className="ph-score-av" style={{ background: s.bg, color: s.color }}>{s.initials}</div>
                <div style={{ flex: 1 }}>
                  <div className="ph-score-name">{s.name}</div>
                  <div className="ph-score-roll">{s.roll} · Class Shaik sir</div>
                </div>
                <div className="ph-gpill ph-gp-f">F</div>
              </div>
              <div style={{ fontSize: 10, fontWeight: 500, color: '#8c92a4', letterSpacing: '.06em', textTransform: 'uppercase' as const, marginBottom: 6 }}>Score — Unit 1</div>
              <div className="ph-score-input">
                <div className="ph-score-field">Enter score</div>
                <div className="ph-score-max">/ 100</div>
              </div>
              <div className="ph-score-progress"><div style={{ height: '100%', borderRadius: 3, background: s.color, width: '0%' }} /></div>
            </div>
          </div>
        ))}

        {/* Grade scale */}
        <div className="ph-grade-scale">
          <div className="ph-grade-scale-title">Grade scale</div>
          <div className="ph-grade-grid">
            {[
              { bg: '#ebfbee', dot: '#2f9e44', text: 'A — 90%+', color: '#087f5b' },
              { bg: '#edf2ff', dot: '#3b5bdb', text: 'B — 70–89%', color: '#3b5bdb' },
              { bg: '#fff9db', dot: '#c87014', text: 'C — 50–69%', color: '#c87014' },
              { bg: '#fff5f5', dot: '#c92a2a', text: 'F — <50%', color: '#c92a2a' },
            ].map((g) => (
              <div key={g.text} className="ph-grade-item" style={{ background: g.bg }}>
                <div className="ph-grade-dot" style={{ background: g.dot }} />
                <div className="ph-grade-text" style={{ color: g.color }}>{g.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Save footer */}
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={{ flex: 1, padding: 12, borderRadius: 12, background: '#2f9e44', color: '#fff', fontSize: 13, fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
            <svg width="13" height="13" style={{ stroke: '#fff', fill: 'none', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' } as React.CSSProperties} viewBox="0 0 13 13"><polyline points="1.5,7 5,10.5 11.5,3" /></svg>
            Save scores
          </div>
          <div style={{ padding: '12px 14px', borderRadius: 12, background: '#fff', border: '1px solid #e2e5ee', color: '#42475a', fontSize: 13 }}>Discard</div>
        </div>
      </div>
      <GradebookTabBar />
    </div>
  </div>
);

/* ═══════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════ */
const TeacherDashboard = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#fbfbfd]">
      <div className="max-w-[1600px] mx-auto px-6">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-[12px] bg-[#34c759] flex items-center justify-center text-white">
              <GraduationCap className="w-5 h-5" />
            </div>
          </div>
          <p className="text-[#34c759] text-[14px] font-normal tracking-[-0.01em] mb-2">Educator App</p>
          <h1 className="text-[40px] md:text-[48px] font-normal text-[#1d1d1f] leading-[1.08] tracking-[-0.035em] mb-4">
            Teacher Dashboard
          </h1>
          <p className="text-[#86868b] text-[17px] max-w-[600px] mx-auto leading-[1.47] tracking-[0.011em]">
            Manage attendance, track student progress, and organize your schedule — all from one powerful interface.
          </p>
        </motion.div>

        {/* iPad desktop mockup (left) + content slot (right) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-10 lg:gap-14 items-center"
        >
          {/* Left — iPad mockup */}
          <div className="w-full">
            <TeacherIPadMockup />
          </div>

          {/* Right — content slot (TODO: fill with copy / features list / CTA) */}
          <div className="w-full max-w-[480px] mx-auto lg:mx-0">
            <p className="text-[#34c759] text-[13px] font-normal tracking-[-0.01em] mb-3">Built for the desk</p>
            <h2 className="text-[#1d1d1f] text-[32px] md:text-[40px] font-light leading-[1.1] tracking-[-0.02em] mb-5">
              Your entire classroom — on one screen.
            </h2>
            <p className="text-[#86868b] text-[16px] leading-[1.55] tracking-[0.005em] mb-7">
              Sidebar nav, real-time stats, today's schedule and your branch rank — everything a teacher needs, organised the way you'd organise a desk.
            </p>
            {/* Bullet points placeholder — replace with whatever you want */}
            <div className="space-y-3">
              {[
                'Sectioned sidebar — Overview, Classroom, Academics, AI & Insights.',
                'Live attendance, pending grading, at-risk students at a glance.',
                "Today's classes timeline with the ongoing class flagged Live.",
                'Branch leaderboard rank with weekly movement and a top tip.',
              ].map((line, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#34c759] shrink-0" />
                  <p className="text-[#1d1d1f] text-[14px] font-normal leading-[1.5] tracking-[0.005em]">{line}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 2-column paired sections grid */}
        <div className="phone-sections-grid">

          {/* Row 1: Classroom + Planning */}
          <motion.div className="phone-section-item" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <div className="phone-section-header">
              <div className="phone-section-label">Classroom Management</div>
              <div className="phone-section-title">Track. Monitor. Improve.</div>
              <div className="phone-section-desc">Student profiles and one-tap attendance marking.</div>
            </div>
            <div className="phone-section-row" style={{ marginTop: 28 }}><StudentProfile /><MarkAttendance /></div>
          </motion.div>

          <motion.div className="phone-section-item" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
            <div className="phone-section-header">
              <div className="phone-section-label">Planning & Organization</div>
              <div className="phone-section-title">Your week. At a glance.</div>
              <div className="phone-section-desc">Schedule visualization and academic report generation.</div>
            </div>
            <div className="phone-section-row" style={{ marginTop: 28 }}><WeeklySchedule /><ReportsScreen /></div>
          </motion.div>

          {/* Row 2: AI Summarizer + AI Planner */}
          <motion.div className="phone-section-item" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <div className="phone-section-header">
              <div className="phone-section-label">Summarize Lesson</div>
              <div className="phone-section-title">AI reads. You teach.</div>
              <div className="phone-section-desc">Upload PDF — get summaries, key concepts, and exam points instantly.</div>
            </div>
            <div className="phone-section-row" style={{ marginTop: 28 }}><SummarizeUpload /><SummarizeResult /></div>
          </motion.div>

          <motion.div className="phone-section-item" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
            <div className="phone-section-header">
              <div className="phone-section-label">AI Lesson Planner</div>
              <div className="phone-section-title">Plan in seconds.</div>
              <div className="phone-section-desc">AI generates classroom-ready plans with phase-by-phase breakdown.</div>
            </div>
            <div className="phone-section-row" style={{ marginTop: 28 }}><LessonPlannerForm /><LessonPlannerResult /></div>
          </motion.div>

          {/* Row 3: Principal Notes + Parent Communication */}
          <motion.div className="phone-section-item" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <div className="phone-section-header">
              <div className="phone-section-label">Principal Notes</div>
              <div className="phone-section-title">Stay connected. Always.</div>
              <div className="phone-section-desc">Encrypted admin channel for instructions and updates.</div>
            </div>
            <div className="phone-section-row" style={{ marginTop: 28 }}><PrincipalNotesInbox /><PrincipalNotesDetail /></div>
          </motion.div>

          <motion.div className="phone-section-item" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
            <div className="phone-section-header">
              <div className="phone-section-label">Parent Communication</div>
              <div className="phone-section-title">Bridge the gap.</div>
              <div className="phone-section-desc">Direct messaging with parents — progress updates and queries.</div>
            </div>
            <div className="phone-section-row" style={{ marginTop: 28 }}><ParentNotesList /><ParentNotesChat /></div>
          </motion.div>

          {/* Row 4: Tests & Exams + Assignments */}
          <motion.div className="phone-section-item" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <div className="phone-section-header">
              <div className="phone-section-label">Tests & Exams</div>
              <div className="phone-section-title">Assess. Analyze.</div>
              <div className="phone-section-desc">Create tests, track scores, and analyze performance.</div>
            </div>
            <div className="phone-section-row" style={{ marginTop: 28 }}><TestsOverview /><CreateTestForm /></div>
          </motion.div>

          <motion.div className="phone-section-item" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
            <div className="phone-section-header">
              <div className="phone-section-label">Assignments</div>
              <div className="phone-section-title">Assign. Collect. Grade.</div>
              <div className="phone-section-desc">Track submissions, grade work, and manage deadlines.</div>
            </div>
            <div className="phone-section-row" style={{ marginTop: 28 }}><AssignmentsOverview /><CreateAssignment /></div>
          </motion.div>

          {/* Row 5: Gradebook + Concept Mastery */}
          <motion.div className="phone-section-item" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <div className="phone-section-header">
              <div className="phone-section-label">Gradebook</div>
              <div className="phone-section-title">Every mark. One place.</div>
              <div className="phone-section-desc">Grade tables, score entry, and distribution charts.</div>
            </div>
            <div className="phone-section-row" style={{ marginTop: 28 }}><GradebookMain /><GradebookScores /></div>
          </motion.div>

          <motion.div className="phone-section-item" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
            <div className="phone-section-header">
              <div className="phone-section-label">Concept Mastery</div>
              <div className="phone-section-title">Know what they know.</div>
              <div className="phone-section-desc">Mastery rings, status breakdowns, and AI recommendations.</div>
            </div>
            <div className="phone-section-row" style={{ marginTop: 28 }}><ConceptMasteryOverview /><ConceptMasteryDetail /></div>
          </motion.div>

          {/* Row 6 (full-width): Risks & Alerts — 3 screens */}
          <motion.div className="phone-section-item phone-section-full" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <div className="phone-section-header" style={{ textAlign: 'center' }}>
              <div className="phone-section-label">Risks & Alerts</div>
              <div className="phone-section-title">Spot risks. Act fast.</div>
              <div className="phone-section-desc" style={{ margin: '0 auto' }}>Color-coded severity levels, threshold settings, and quick actions to keep every student on track.</div>
            </div>
            <div className="phone-section-row" style={{ marginTop: 28, justifyContent: 'center' }}><AlertsAllTab /><AlertsAttendanceTab /><AlertsGradesTab /></div>
          </motion.div>

          {/* Row 7 (full-width): Students — 3 screens */}
          <motion.div className="phone-section-item phone-section-full" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <div className="phone-section-header" style={{ textAlign: 'center' }}>
              <div className="phone-section-label">Student Management</div>
              <div className="phone-section-title">Every student. One view.</div>
              <div className="phone-section-desc" style={{ margin: '0 auto' }}>Directory, profiles, academic tracking, feedback, and behaviour ratings.</div>
            </div>
            <div className="phone-section-row" style={{ marginTop: 28, justifyContent: 'center' }}><StudentsList /><StudentProfileOverview /><StudentFeedback /></div>
          </motion.div>

          {/* Row 8 (full-width): Attendance — 3 screens */}
          <motion.div className="phone-section-item phone-section-full" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <div className="phone-section-header" style={{ textAlign: 'center' }}>
              <div className="phone-section-label">Attendance</div>
              <div className="phone-section-title">Present. Absent. Tracked.</div>
              <div className="phone-section-desc" style={{ margin: '0 auto' }}>Weekly overviews, concern alerts, detailed logs, and one-tap P/A/L marking.</div>
            </div>
            <div className="phone-section-row" style={{ marginTop: 28, justifyContent: 'center' }}><AttendanceOverview /><AttendanceConcerns /><MarkAttendanceScreen /></div>
          </motion.div>

          {/* Row 9: Personalization — centered single */}
          <motion.div className="phone-section-item phone-section-full" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <div className="phone-section-header" style={{ textAlign: 'center' }}>
              <div className="phone-section-label">Personalization</div>
              <div className="phone-section-title">Make it yours.</div>
              <div className="phone-section-desc" style={{ margin: '0 auto' }}>Notifications, preferences, security, and profile management.</div>
            </div>
            <div className="phone-section-row" style={{ marginTop: 28, justifyContent: 'center' }}><SettingsScreen /></div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
