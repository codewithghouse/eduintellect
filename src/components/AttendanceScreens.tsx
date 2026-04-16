import React from 'react';

const TabProfile = () => <svg viewBox="0 0 18 18"><circle cx="9" cy="7" r="3" /><path d="M3 17c0 0 1.5-4 6-4s6 4 6 4" /></svg>;
const TabClasses = () => <svg viewBox="0 0 18 18"><rect x="2" y="2" width="5" height="5" rx="1.2" /><rect x="11" y="2" width="5" height="5" rx="1.2" /><rect x="2" y="11" width="5" height="5" rx="1.2" /><rect x="11" y="11" width="5" height="5" rx="1.2" /></svg>;

const AttTabBar = () => (
  <div className="ph-tab">
    {[
      { label: 'Dashboard', icon: <TabClasses /> },
      { label: 'Attendance', icon: <svg viewBox="0 0 18 18"><polyline points="2.5,8.5 6,12 13.5,4" /></svg> },
      { label: 'Schedule', icon: <svg viewBox="0 0 18 18"><rect x="2.5" y="3" width="13" height="12" rx="2" /><line x1="6" y1="2" x2="6" y2="5" /><line x1="12" y1="2" x2="12" y2="5" /><line x1="2.5" y1="8" x2="15.5" y2="8" /></svg> },
      { label: 'Profile', icon: <TabProfile /> },
    ].map((t, i) => (
      <div key={t.label} className={`ph-tab-item ${i === 1 ? 'on' : ''}`}>
        {t.icon}<span>{t.label}</span>{i === 1 && <div className="ph-tab-pip" />}
      </div>
    ))}
  </div>
);

const DarkNav = ({ title = 'Attendance', right }: { title?: string; right?: React.ReactNode }) => (
  <div style={{ background: '#08090c', padding: '12px 18px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 4, padding: 3 }}>
      <div style={{ height: '1.5px', width: 18, borderRadius: 2, background: 'rgba(255,255,255,.65)' }} />
      <div style={{ height: '1.5px', width: 12, borderRadius: 2, background: 'rgba(255,255,255,.65)' }} />
      <div style={{ height: '1.5px', width: 18, borderRadius: 2, background: 'rgba(255,255,255,.65)' }} />
    </div>
    <div style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,.8)', letterSpacing: '.07em', textTransform: 'uppercase' as const }}>{title}</div>
    {right || <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#3b5bdb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 500, color: '#fff', border: '2px solid rgba(255,255,255,.15)' }}>JS</div>}
  </div>
);

const Mc = ({ icon, bg, val, label, badge, badgeBg, badgeColor, barW, color }: any) => (
  <div className="ph-mc-stu">
    <div className="ph-mc-stu-top">
      <div className="ph-mc-stu-ico" style={{ background: bg }}>{icon}</div>
      <span style={{ padding: '3px 8px', borderRadius: 20, fontSize: 10, fontWeight: 500, background: badgeBg, color: badgeColor }}>{badge}</span>
    </div>
    <div className="ph-mc-stu-val" style={{ color: color || '#08090c' }}>{val}</div>
    <div className="ph-mc-stu-lbl">{label}</div>
    <div className="ph-mc-stu-bar"><div style={{ height: '100%', borderRadius: 2, background: color || '#3b5bdb', width: barW }} /></div>
  </div>
);

const days = [
  { name: 'Mon', date: 'Apr 6', dots: 'nm', status: 'Not marked', stColor: '#c87014' },
  { name: 'Tue', date: 'Apr 7', dots: 'nm', status: 'Not marked', stColor: '#c87014' },
  { name: 'Wed', date: 'Apr 8', dots: '2P 0A', status: '100.0%', stColor: '#087f5b' },
  { name: 'Thu', date: 'Apr 9', dots: 'nm', status: 'Not marked', stColor: '#c87014' },
  { name: 'Fri', date: 'Apr 10', dots: '1P 1A', status: '50.0%', stColor: '#3b5bdb' },
  { name: 'Mon', date: 'Apr 13', dots: '2P 0A', status: '100.0%', stColor: '#087f5b', highlight: true },
  { name: 'Tue', date: 'Apr 14', dots: 'up', status: 'Upcoming', stColor: '#8c92a4', dim: true },
];

/* ═══ SCREEN 1: Attendance Overview ═══ */
export const AttendanceOverview = () => (
  <div className="phone-wrap">
    <div className="phone-label">Attendance overview</div>
    <div className="phone">
      <div className="ph-bar" />
      <DarkNav />
      <div style={{ background: '#08090c', padding: '4px 18px 22px' }}>
        <div style={{ fontSize: 22, fontWeight: 500, color: '#fff', letterSpacing: '-.4px', marginBottom: 3 }}>Attendance</div>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,.38)' }}>Track and manage student attendance.</div>
      </div>
      <div className="ph-body">
        <div style={{ width: '100%', padding: 13, borderRadius: 13, background: '#3b5bdb', color: '#fff', fontSize: 13, fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7 }}>
          <svg width="14" height="14" style={{ stroke: '#fff', fill: 'none', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as React.CSSProperties} viewBox="0 0 16 16"><polyline points="2.5,8.5 6,12 13.5,4" /></svg>
          Mark today's attendance
        </div>
        <div className="ph-mgrid">
          <Mc icon={<svg style={{ stroke: '#3b5bdb' }} viewBox="0 0 14 14"><rect x="1.5" y="8" width="2.5" height="4" rx=".4" /><rect x="5" y="5" width="2.5" height="7" rx=".4" /><rect x="8.5" y="2" width="2.5" height="10" rx=".4" /></svg>} bg="#edf2ff" val="85.7%" label="Overall rate" badge="+6.1%" badgeBg="#ebfbee" badgeColor="#087f5b" barW="85.7%" color="#3b5bdb" />
          <Mc icon={<svg style={{ stroke: '#087f5b' }} viewBox="0 0 14 14"><path d="M2 11.5c0 0 1.5-1.8 5-1.8s5 1.8 5 1.8" /><circle cx="7" cy="5.5" r="2.5" /></svg>} bg="#ebfbee" val="2" label="Present today" badge="Today" badgeBg="#edf2ff" badgeColor="#3b5bdb" barW="100%" color="#087f5b" />
          <Mc icon={<svg style={{ stroke: '#c92a2a' }} viewBox="0 0 14 14"><path d="M7 1.5L13 12.5H1L7 1.5z" /><line x1="7" y1="5.5" x2="7" y2="8.5" /><circle cx="7" cy="10.2" r=".6" fill="#c92a2a" stroke="none" /></svg>} bg="#fff5f5" val="0" label="Absent today" badge="Secure" badgeBg="#ebfbee" badgeColor="#087f5b" barW="0%" color="#08090c" />
          <Mc icon={<svg style={{ stroke: '#c87014' }} viewBox="0 0 14 14"><circle cx="7" cy="7" r="5" /><polyline points="7,4.5 7,7 9.5,7" /></svg>} bg="#fff9db" val="0" label="Late today" badge="All clear" badgeBg="#ebfbee" badgeColor="#087f5b" barW="0%" color="#08090c" />
        </div>
        <div style={{ display: 'flex', gap: 7 }}>
          {['10B', 'Shaik sir'].map((c, i) => (
            <div key={c} style={{ padding: '7px 16px', borderRadius: 20, fontSize: 12, border: `1px solid ${i === 0 ? '#08090c' : '#e2e5ee'}`, background: i === 0 ? '#08090c' : '#fff', color: i === 0 ? '#fff' : '#42475a', fontWeight: i === 0 ? 500 : 400 }}>{c}</div>
          ))}
        </div>
        <div style={{ background: '#fff', border: '1px solid #e2e5ee', borderRadius: 18, overflow: 'hidden' }}>
          <div style={{ padding: '13px 14px 10px', borderBottom: '1px solid #eceef4' }}>
            <div style={{ fontSize: 14, fontWeight: 500, color: '#08090c' }}>Weekly overview</div>
            <div style={{ fontSize: 10, color: '#8c92a4', marginTop: 2 }}>10B · Apr 6 – Apr 16, 2026</div>
          </div>
          {days.map((d) => (
            <div key={d.date} style={{ display: 'flex', alignItems: 'center', padding: '10px 14px', borderBottom: '1px solid #eceef4', gap: 10, opacity: d.dim ? 0.5 : 1, background: d.highlight ? '#fafbff' : 'transparent' }}>
              <div style={{ width: 36, flexShrink: 0 }}>
                <div style={{ fontSize: 9, fontWeight: 500, color: d.highlight ? '#3b5bdb' : '#8c92a4', textTransform: 'uppercase' as const, letterSpacing: '.05em' }}>{d.name}</div>
                <div style={{ fontSize: 13, fontWeight: 500, color: d.highlight ? '#3b5bdb' : '#08090c' }}>{d.date.split(' ')[1]}</div>
              </div>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 4 }}>
                <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#2f9e44' }} />
                {d.dots !== 'nm' && d.dots !== 'up' && <div style={{ width: 7, height: 7, borderRadius: '50%', background: d.dots.includes('0A') ? '#2f9e44' : '#eceef4' }} />}
                {(d.dots === 'nm' || d.dots === 'up') && <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#eceef4' }} />}
                <span style={{ fontSize: 10, color: '#8c92a4', marginLeft: 2 }}>{d.dots !== 'nm' && d.dots !== 'up' ? d.dots : ''}</span>
              </div>
              <div style={{ fontSize: 11, fontWeight: 500, color: d.stColor, whiteSpace: 'nowrap' as const }}>{d.status}</div>
            </div>
          ))}
        </div>
      </div>
      <AttTabBar />
    </div>
  </div>
);

/* ═══ SCREEN 2: Concerns & Log ═══ */
export const AttendanceConcerns = () => (
  <div className="phone-wrap">
    <div className="phone-label">Concerns & log</div>
    <div className="phone">
      <div className="ph-bar" />
      <DarkNav />
      <div className="ph-body">
        {/* Concerns */}
        <div style={{ background: '#fff', border: '1px solid #e2e5ee', borderRadius: 18, overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '13px 14px', borderBottom: '1px solid #eceef4' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: '#fff5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="12" height="12" style={{ stroke: '#c92a2a', fill: 'none', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as React.CSSProperties} viewBox="0 0 14 14"><path d="M7 1.5L13 12.5H1L7 1.5z" /><line x1="7" y1="5.5" x2="7" y2="8.5" /><circle cx="7" cy="10.2" r=".6" fill="#c92a2a" stroke="none" /></svg>
              </div>
              <div style={{ fontSize: 14, fontWeight: 500, color: '#08090c' }}>Attendance concerns</div>
            </div>
            <div style={{ fontSize: 12, color: '#3b5bdb' }}>View all</div>
          </div>
          <div style={{ padding: '24px 14px', display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: 8 }}>
            <div style={{ width: 36, height: 36, borderRadius: 12, background: '#ebfbee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="16" height="16" style={{ stroke: '#087f5b', fill: 'none', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as React.CSSProperties} viewBox="0 0 16 16"><polyline points="2.5,8.5 6,12 13.5,4" /></svg>
            </div>
            <div style={{ fontSize: 12, color: '#8c92a4', textAlign: 'center' as const }}>All students have good attendance</div>
            <span style={{ padding: '3px 8px', borderRadius: 20, fontSize: 10, fontWeight: 500, background: '#ebfbee', color: '#087f5b' }}>All clear</span>
          </div>
        </div>

        {/* Log */}
        <div style={{ background: '#fff', border: '1px solid #e2e5ee', borderRadius: 18, overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '13px 14px', borderBottom: '1px solid #eceef4' }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: '#edf2ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="12" height="12" style={{ stroke: '#3b5bdb', fill: 'none', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as React.CSSProperties} viewBox="0 0 14 14"><rect x="1.5" y="2" width="11" height="10.5" rx="1.5" /><line x1="4" y1="1" x2="4" y2="3.5" /><line x1="10" y1="1" x2="10" y2="3.5" /><line x1="1.5" y1="5.5" x2="12.5" y2="5.5" /></svg>
            </div>
            <div style={{ fontSize: 14, fontWeight: 500, color: '#08090c' }}>Attendance log</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, padding: '12px 14px', borderBottom: '1px solid #eceef4' }}>
            <div className="ph-fsel">10B</div>
            <div className="ph-fsel">04/13/2026</div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 14px', background: '#f5f6f9' }}>
            <div style={{ fontSize: 10, fontWeight: 500, color: '#8c92a4', letterSpacing: '.05em', textTransform: 'uppercase' as const }}>Student</div>
            <div style={{ fontSize: 10, fontWeight: 500, color: '#8c92a4', letterSpacing: '.05em', textTransform: 'uppercase' as const }}>Status</div>
          </div>
          {[
            { initials: 'TS', name: 'Tanveer Sultana', email: 'tanveersultana84@gmail.com', bg: '#e3fafc', color: '#0c8599' },
            { initials: 'SM', name: 'Syed Muqeeth', email: 'syedabdulmuqeeth43@gmail.com', bg: '#fff9db', color: '#c87014' },
          ].map((s) => (
            <div key={s.initials} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '11px 14px', borderTop: '1px solid #eceef4' }}>
              <div style={{ width: 34, height: 34, borderRadius: '50%', background: s.bg, color: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 500, flexShrink: 0 }}>{s.initials}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: '#08090c' }}>{s.name}</div>
                <div style={{ fontSize: 10, color: '#8c92a4', marginTop: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' as const }}>{s.email}</div>
              </div>
              <span style={{ padding: '3px 8px', borderRadius: 20, fontSize: 10, fontWeight: 500, background: '#ebfbee', color: '#087f5b' }}>Present</span>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div style={{ background: '#fff', border: '1px solid #e2e5ee', borderRadius: 16, padding: 14 }}>
          <div style={{ fontSize: 10, fontWeight: 500, color: '#8c92a4', letterSpacing: '.07em', textTransform: 'uppercase' as const, marginBottom: 10 }}>This week summary</div>
          {[
            { dot: '#2f9e44', label: 'Total present', val: '8', valColor: '#087f5b' },
            { dot: '#c92a2a', label: 'Total absent', val: '1', valColor: '#c92a2a' },
            { dot: '#c87014', label: 'Avg. rate', val: '83.3%', valColor: '#3b5bdb' },
          ].map((r) => (
            <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: r.label !== 'Avg. rate' ? '1px solid #eceef4' : 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 12, color: '#42475a' }}>
                <div style={{ width: 7, height: 7, borderRadius: '50%', background: r.dot }} />{r.label}
              </div>
              <span style={{ fontSize: 13, fontWeight: 500, color: r.valColor }}>{r.val}</span>
            </div>
          ))}
        </div>
      </div>
      <AttTabBar />
    </div>
  </div>
);

/* ═══ SCREEN 3: Mark Attendance ═══ */
export const MarkAttendanceScreen = () => (
  <div className="phone-wrap">
    <div className="phone-label">Mark attendance</div>
    <div className="phone">
      <div className="ph-bar" />
      <DarkNav title="Mark attendance" right={
        <div style={{ padding: '9px 14px', borderRadius: 11, background: '#2f9e44', color: '#fff', fontSize: 12, fontWeight: 500, display: 'flex', alignItems: 'center', gap: 5 }}>
          <svg width="12" height="12" style={{ stroke: '#fff', fill: 'none', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' } as React.CSSProperties} viewBox="0 0 12 12"><polyline points="1.5,6.5 4.5,10 10.5,2.5" /></svg>
          Save
        </div>
      } />
      <div style={{ background: '#08090c', padding: '6px 18px 20px' }}>
        <div style={{ fontSize: 10, fontWeight: 500, color: 'rgba(255,255,255,.3)', letterSpacing: '.06em', textTransform: 'uppercase' as const, marginBottom: 6 }}>10B · Mark attendance</div>
        <div style={{ fontSize: 22, fontWeight: 500, color: '#fff', letterSpacing: '-.4px', lineHeight: 1.15 }}>Monday,<br />April 13</div>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,.38)', marginTop: 5 }}>2026 · Period 2 · English</div>
      </div>
      <div className="ph-body">
        {/* Quick actions */}
        <div style={{ background: '#fff', border: '1px solid #e2e5ee', borderRadius: 16, padding: '13px 14px' }}>
          <div style={{ fontSize: 10, fontWeight: 500, color: '#8c92a4', letterSpacing: '.05em', textTransform: 'uppercase' as const, marginBottom: 9 }}>Quick actions</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            <div style={{ padding: '10px 8px', borderRadius: 10, border: '1px solid #e2e5ee', background: '#f5f6f9', fontSize: 11, fontWeight: 500, color: '#42475a', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
              <svg width="12" height="12" style={{ stroke: '#42475a', fill: 'none', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as React.CSSProperties} viewBox="0 0 13 13"><polyline points="2,7 5,10.5 11,3" /></svg>
              Mark all present
            </div>
            <div style={{ padding: '10px 8px', borderRadius: 10, border: '1px solid #e2e5ee', background: '#f5f6f9', fontSize: 11, fontWeight: 500, color: '#42475a', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
              <svg width="12" height="12" style={{ stroke: '#42475a', fill: 'none', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as React.CSSProperties} viewBox="0 0 13 13"><rect x="2" y="2" width="9" height="9" rx="1.5" /><line x1="4.5" y1="2" x2="4.5" y2="11" /></svg>
              Copy yesterday
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 11, paddingTop: 11, borderTop: '1px solid #eceef4' }}>
            {[
              { dot: '#2f9e44', label: 'Present:', val: '2' },
              { dot: '#c92a2a', label: 'Absent:', val: '0' },
              { dot: '#c87014', label: 'Late:', val: '0' },
            ].map((s) => (
              <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, color: '#42475a' }}>
                <div style={{ width: 7, height: 7, borderRadius: '50%', background: s.dot }} />{s.label} <strong>{s.val}</strong>
              </div>
            ))}
          </div>
        </div>

        {/* Students */}
        <div style={{ background: '#fff', border: '1px solid #e2e5ee', borderRadius: 18, overflow: 'hidden' }}>
          <div style={{ padding: '12px 14px', borderBottom: '1px solid #eceef4' }}>
            <div style={{ fontSize: 13, fontWeight: 500, color: '#08090c' }}>Student attendance</div>
            <div style={{ fontSize: 10, color: '#8c92a4', marginTop: 2 }}>2 students · Tap to change status</div>
          </div>
          {[
            { initials: 'SM', name: 'Syed Muqeeth', roll: 'Roll: 502', bg: '#fff9db', color: '#c87014' },
            { initials: 'TS', name: 'Tanveer Sultana', roll: 'Roll: 501', bg: '#e3fafc', color: '#0c8599' },
          ].map((s) => (
            <div key={s.initials} style={{ padding: 14, borderBottom: '1px solid #eceef4' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <div style={{ width: 38, height: 38, borderRadius: '50%', background: s.bg, color: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 500, flexShrink: 0 }}>{s.initials}</div>
                <div><div style={{ fontSize: 14, fontWeight: 500, color: '#08090c' }}>{s.name}</div><div style={{ fontSize: 11, color: '#8c92a4', marginTop: 1 }}>{s.roll}</div></div>
                <span style={{ padding: '3px 8px', borderRadius: 20, fontSize: 10, fontWeight: 500, background: '#ebfbee', color: '#087f5b', marginLeft: 'auto' }}>Present</span>
              </div>
              <div style={{ display: 'flex', gap: 6, marginBottom: 9 }}>
                {[
                  { label: 'Present', on: true, onBg: '#2f9e44', icon: <svg width="11" height="11" style={{ fill: 'none', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round', stroke: 'currentColor' } as React.CSSProperties} viewBox="0 0 12 12"><polyline points="1.5,6.5 4.5,10 10.5,2.5" /></svg> },
                  { label: 'Absent', on: false, onBg: '#c92a2a', icon: <svg width="11" height="11" style={{ fill: 'none', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round', stroke: 'currentColor' } as React.CSSProperties} viewBox="0 0 12 12"><line x1="3" y1="3" x2="9" y2="9" /><line x1="9" y1="3" x2="3" y2="9" /></svg> },
                  { label: 'Late', on: false, onBg: '#c87014', icon: <svg width="11" height="11" style={{ fill: 'none', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round', stroke: 'currentColor' } as React.CSSProperties} viewBox="0 0 12 12"><circle cx="6" cy="6" r="4.5" /><polyline points="6,3.5 6,6 8.5,6" /></svg> },
                ].map((b) => (
                  <div key={b.label} style={{ flex: 1, padding: '9px 6px', borderRadius: 10, fontSize: 12, fontWeight: 500, border: `1px solid ${b.on ? b.onBg : '#e2e5ee'}`, background: b.on ? b.onBg : '#f5f6f9', color: b.on ? '#fff' : '#42475a', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
                    {b.icon}{b.label}
                  </div>
                ))}
              </div>
              <div style={{ width: '100%', padding: '8px 10px', borderRadius: 9, border: '1px solid #e2e5ee', background: '#f5f6f9', fontSize: 11, color: '#8c92a4' }}>Add note (optional)...</div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '11px 14px', background: '#fff', borderTop: '1px solid #e2e5ee', borderRadius: '0 0 16px 16px' }}>
          <div style={{ fontSize: 11, color: '#8c92a4' }}>Showing 1–2 of 2 students</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, border: '1px solid #e2e5ee', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="12" height="12" style={{ stroke: '#42475a', fill: 'none', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' } as React.CSSProperties} viewBox="0 0 12 12"><polyline points="8,2 4,6 8,10" /></svg>
            </div>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: '#3b5bdb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 500, color: '#fff' }}>1</div>
            <div style={{ width: 28, height: 28, borderRadius: 8, border: '1px solid #e2e5ee', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="12" height="12" style={{ stroke: '#42475a', fill: 'none', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' } as React.CSSProperties} viewBox="0 0 12 12"><polyline points="4,2 8,6 4,10" /></svg>
            </div>
          </div>
        </div>
      </div>
      <AttTabBar />
    </div>
  </div>
);
