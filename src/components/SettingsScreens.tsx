const SPTabBar = () => (
  <div className="sp-tabbar">
    {['Home', 'Tests', 'Progress', 'Alerts', 'Settings'].map((t, i) => (
      <div key={t} className={`sp-ti ${i === 4 ? 'act' : ''}`}>
        <svg viewBox="0 0 24 24">
          {i === 0 && <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><path d="M9 22V12h6v10" /></>}
          {i === 1 && <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6" /></>}
          {i === 2 && <><path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20V14" /></>}
          {i === 3 && <><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" /></>}
          {i === 4 && <><circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14" /></>}
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

const SecLbl = ({ children }: { children: React.ReactNode }) => (
  <div style={{ fontSize: 9, fontWeight: 300, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: 'rgba(40,57,108,.35)', padding: '16px 20px 0', display: 'flex', alignItems: 'center', gap: 8 }}>
    {children}<div style={{ flex: 1, height: '.5px', background: 'rgba(40,57,108,.13)' }} />
  </div>
);

/* ═══════════════════════════════════════════
   SCREEN 1 — PORTAL PREFERENCES
═══════════════════════════════════════════ */
export const SettingsPreferences = () => (
  <div className="sp-wrap">
    <div className="sp-label">Portal Preferences</div>
    <div className="sp">
      <div className="sp-di" />
      <div className="sp-scroll">
        <SPHeader />

        {/* System Banner */}
        <div style={{ margin: '14px 16px 0', background: 'linear-gradient(135deg,#28396c,#334880)', borderRadius: 18, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 11, position: 'relative', overflow: 'hidden', boxShadow: '0 4px 16px rgba(40,57,108,.2)' }}>
          <div style={{ position: 'absolute', top: -26, right: -16, width: 110, height: 110, background: 'radial-gradient(circle,rgba(255,255,255,.07) 0%,transparent 65%)', borderRadius: '50%', pointerEvents: 'none' }} />
          <div style={{ width: 32, height: 32, borderRadius: 10, background: 'rgba(255,255,255,.12)', border: '.5px solid rgba(255,255,255,.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative', zIndex: 1 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.8)" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14" /></svg>
          </div>
          <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: 8, fontWeight: 300, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.45)', marginBottom: 2 }}>Institutional Portal Registry</div>
            <div style={{ fontSize: 11, fontWeight: 300, color: '#fff', letterSpacing: '-.1px', display: 'flex', alignItems: 'center', gap: 5 }}>
              <div style={{ width: 5, height: 5, background: '#2ebc71', borderRadius: '50%', boxShadow: '0 0 0 2px rgba(46,188,113,.25)' }} />
              Settings Sync Active
            </div>
          </div>
          <div style={{ padding: '3px 9px', background: 'rgba(46,188,113,.15)', borderRadius: 100, fontSize: 9, fontWeight: 300, color: '#2ebc71', border: '.5px solid rgba(46,188,113,.25)', position: 'relative', zIndex: 1 }}>Live</div>
        </div>

        {/* Page Head */}
        <div style={{ padding: '16px 20px 0' }}>
          <div style={{ fontSize: 23, fontWeight: 300, color: '#1a2340', letterSpacing: '-.6px', marginBottom: 3 }}>Portal Preferences</div>
          <div style={{ fontSize: 11, color: '#8892b0', fontWeight: 400, lineHeight: 1.55 }}>Manage your parental profile and predictive intelligence alerts.</div>
        </div>

        {/* Verified Guardian */}
        <div style={{ margin: '14px 16px 0', background: 'linear-gradient(135deg,rgba(46,188,113,.07),rgba(46,188,113,.03))', borderRadius: 16, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12, border: '.5px solid rgba(46,188,113,.2)', boxShadow: '0 2px 12px rgba(46,188,113,.08)' }}>
          <div style={{ width: 38, height: 38, borderRadius: 12, background: 'rgba(46,188,113,.1)', border: '.5px solid rgba(46,188,113,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2EBC71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 8, fontWeight: 300, letterSpacing: '.1em', textTransform: 'uppercase', color: '#c0c8dc', marginBottom: 2 }}>Identity Status</div>
            <div style={{ fontSize: 13, fontWeight: 300, color: '#1e9a5a', letterSpacing: '-.2px' }}>Verified Guardian</div>
          </div>
          <div style={{ width: 26, height: 26, borderRadius: 8, background: 'rgba(46,188,113,.1)', border: '.5px solid rgba(46,188,113,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2EBC71" strokeWidth="2.5" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
          </div>
        </div>

        <SecLbl>Account Identity Matrix</SecLbl>

        {/* Profile Hero */}
        <div style={{ margin: '12px 16px 0', background: '#fff', borderRadius: 22, padding: '20px 18px 18px', boxShadow: '0 0 0 .5px rgba(40,57,108,.08), 0 4px 18px rgba(40,57,108,.09), 0 24px 56px rgba(40,57,108,.13)', border: '.5px solid rgba(40,57,108,.07)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ position: 'absolute', top: -50, left: '50%', transform: 'translateX(-50%)', width: 220, height: 160, background: 'radial-gradient(ellipse,rgba(40,57,108,.05) 0%,transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', marginBottom: 11 }}>
            <div style={{ width: 72, height: 72, borderRadius: 22, background: 'linear-gradient(140deg,#1e2d57,#3d5494)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, fontWeight: 300, color: '#fff', boxShadow: '0 6px 24px rgba(40,57,108,.28), 0 0 0 3px rgba(255,255,255,.9), 0 0 0 4px rgba(40,57,108,.12)' }}>T</div>
            <div style={{ position: 'absolute', bottom: -4, right: -4, width: 26, height: 26, borderRadius: 8, background: '#28396c', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid white', boxShadow: '0 2px 8px rgba(40,57,108,.25)' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" /><circle cx="12" cy="13" r="4" /></svg>
            </div>
          </div>
          <div style={{ fontSize: 18, fontWeight: 300, color: '#1a2340', letterSpacing: '-.4px', marginBottom: 7 }}>Tanveer Sultana</div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ padding: '4px 10px', borderRadius: 100, fontSize: 10, fontWeight: 300, letterSpacing: '.04em', background: 'rgba(40,57,108,.08)', color: '#28396c', border: '.5px solid rgba(40,57,108,.13)' }}>Parent Guardian</div>
            <div style={{ padding: '4px 10px', borderRadius: 100, fontSize: 10, fontWeight: 300, letterSpacing: '.04em', background: '#f5efe2', color: '#8892b0', border: '.5px solid rgba(40,57,108,.07)' }}>ID: WZ8S2JVT</div>
          </div>
        </div>

        {/* Form Fields */}
        <div style={{ margin: '10px 16px 0', background: '#fff', borderRadius: 20, overflow: 'hidden', boxShadow: '0 0 0 .5px rgba(40,57,108,.06), 0 2px 8px rgba(40,57,108,.06)', border: '.5px solid rgba(40,57,108,.06)' }}>
          {[
            { lbl: 'Authorized Name', txt: 'Tanveer Sultana', muted: false, icon: <><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></> },
            { lbl: 'Primary Email', txt: 'tanveersultana84@gmail.com', muted: false, small: true, icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></> },
            { lbl: 'Contact Line', txt: '+00 000 000 00', muted: true, icon: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81C2.18 8.2 2 6.6 2 4.82A2 2 0 013.99 2.82h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /> },
            { lbl: 'Interface Locality', txt: 'ENG: Institutional English', muted: false, icon: <><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></> },
          ].map((f, i, arr) => (
            <div key={f.lbl} style={{ padding: '12px 16px', borderBottom: i < arr.length - 1 ? '.5px solid rgba(40,57,108,.07)' : 'none' }}>
              <div style={{ fontSize: 8, fontWeight: 300, letterSpacing: '.1em', textTransform: 'uppercase', color: '#c0c8dc', marginBottom: 5 }}>{f.lbl}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                <div style={{ width: 26, height: 26, borderRadius: 8, background: 'rgba(40,57,108,.08)', border: '.5px solid rgba(40,57,108,.13)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#28396C" strokeWidth="2.2" strokeLinecap="round">{f.icon}</svg>
                </div>
                <div style={{ flex: 1, fontSize: f.small ? 12 : 13, fontWeight: 500, color: f.muted ? '#c0c8dc' : '#1a2340', letterSpacing: '-.1px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{f.txt}</div>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C0C8DC" strokeWidth="2.2" strokeLinecap="round" style={{ opacity: 0.5, flexShrink: 0 }}><polyline points="9 18 15 12 9 6" /></svg>
              </div>
            </div>
          ))}
        </div>

        {/* Commit Button */}
        <div style={{ margin: '14px 16px', background: 'linear-gradient(135deg,#28396c,#1e2d57)', borderRadius: 16, padding: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontSize: 14, fontWeight: 300, color: '#fff', letterSpacing: '.02em', position: 'relative', overflow: 'hidden', boxShadow: '0 6px 22px rgba(40,57,108,.26)' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(255,255,255,.1) 0%,transparent 55%)' }} />
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" style={{ position: 'relative', zIndex: 1 }}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
          <span style={{ position: 'relative', zIndex: 1 }}>Commit Changes</span>
        </div>
      </div>
      <SPTabBar />
    </div>
  </div>
);

/* ═══════════════════════════════════════════
   SCREEN 2 — ALERTS MATRIX + SECURITY
═══════════════════════════════════════════ */
export const SettingsAlertsSecurity = () => (
  <div className="sp-wrap">
    <div className="sp-label">Alerts &amp; Security</div>
    <div className="sp">
      <div className="sp-di" />
      <div className="sp-scroll">
        <SPHeader />

        {/* ID Card */}
        <div style={{ margin: '14px 16px 0', background: 'linear-gradient(140deg,#28396c 0%,#334880 60%,#3A5090 100%)', borderRadius: 22, padding: 20, position: 'relative', overflow: 'hidden', boxShadow: '0 0 0 .5px rgba(40,57,108,.08), 0 4px 18px rgba(40,57,108,.09), 0 24px 56px rgba(40,57,108,.13)' }}>
          <div style={{ position: 'absolute', top: -40, right: -24, width: 160, height: 160, background: 'radial-gradient(circle,rgba(255,255,255,.08) 0%,transparent 65%)', borderRadius: '50%', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,.014) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.014) 1px,transparent 1px)', backgroundSize: '22px 22px', pointerEvents: 'none' }} />
          <svg style={{ position: 'absolute', right: -10, bottom: -10, opacity: 0.06, pointerEvents: 'none' }} width="130" height="150" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>

          <div style={{ width: 42, height: 42, borderRadius: 14, background: 'rgba(255,255,255,.15)', border: '.5px solid rgba(255,255,255,.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 300, color: '#fff', marginBottom: 12, position: 'relative', zIndex: 1 }}>T</div>
          <div style={{ fontSize: 18, fontWeight: 300, color: '#fff', letterSpacing: '-.5px', marginBottom: 3, position: 'relative', zIndex: 1 }}>Tanveer Sultana</div>
          <div style={{ fontSize: 8, fontWeight: 300, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)', marginBottom: 16, position: 'relative', zIndex: 1 }}>Grade Subdivision Matrix</div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'rgba(255,255,255,.08)', borderRadius: 14, overflow: 'hidden', position: 'relative', zIndex: 1 }}>
            {[
              { lbl: 'Roll No', val: '001' },
              { lbl: 'Sync ID', val: 'WZ8S2JVT' },
            ].map(m => (
              <div key={m.lbl} style={{ background: 'rgba(255,255,255,.04)', padding: '10px 12px' }}>
                <div style={{ fontSize: 7, fontWeight: 300, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.35)', marginBottom: 3 }}>{m.lbl}</div>
                <div style={{ fontSize: 13, fontWeight: 300, color: '#fff', letterSpacing: '-.2px' }}>{m.val}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Intelligence Alerts Matrix */}
        <SecLbl>Intelligence Alerts Matrix</SecLbl>
        <div style={{ margin: '10px 16px 0', background: '#fff', borderRadius: 20, overflow: 'hidden', boxShadow: '0 0 0 .5px rgba(40,57,108,.06), 0 2px 8px rgba(40,57,108,.06)', border: '.5px solid rgba(40,57,108,.06)' }}>
          <div style={{ padding: '14px 16px 10px', borderBottom: '.5px solid rgba(40,57,108,.07)', display: 'flex', alignItems: 'center', gap: 9 }}>
            <div style={{ width: 32, height: 32, borderRadius: 10, background: 'rgba(245,156,42,.1)', border: '.5px solid rgba(245,156,42,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F59C2A" strokeWidth="2.2" strokeLinecap="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" /></svg>
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 300, color: '#1a2340', letterSpacing: '-.2px' }}>Notification Controls</div>
              <div style={{ fontSize: 10, color: '#8892b0', marginTop: 1 }}>Manage intelligent alert preferences</div>
            </div>
          </div>

          {[
            { title: 'Scholastic Deadlines', sub: 'AI reminders for upcoming assignments', on: true, bg: 'rgba(91,111,212,.1)', bdr: 'rgba(91,111,212,.2)', stroke: '#5B6FD4', icon: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /> },
            { title: 'Real-Time Presence', sub: 'Immediate alerts for attendance logs', on: true, bg: 'rgba(46,188,113,.1)', bdr: 'rgba(46,188,113,.2)', stroke: '#2EBC71', icon: <><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></> },
            { title: 'Scholastic Results', sub: 'Notification upon new grade entry', on: true, bg: 'rgba(40,57,108,.08)', bdr: 'rgba(40,57,108,.13)', stroke: '#28396C', icon: <><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></> },
            { title: 'Assessment Notifications', sub: 'Alerts for new tests scheduled', on: true, bg: 'rgba(245,156,42,.1)', bdr: 'rgba(245,156,42,.2)', stroke: '#F59C2A', icon: <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></> },
            { title: 'Urgent Incident Alerts', sub: 'Critical school notifications only', on: false, bg: 'rgba(232,85,85,.09)', bdr: 'rgba(232,85,85,.18)', stroke: '#E85555', icon: <><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></> },
          ].map((t, i, arr) => (
            <div key={t.title} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '13px 16px', borderBottom: i < arr.length - 1 ? '.5px solid rgba(40,57,108,.07)' : 'none' }}>
              <div style={{ width: 34, height: 34, borderRadius: 11, background: t.bg, border: `.5px solid ${t.bdr}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={t.stroke} strokeWidth="2.2" strokeLinecap="round">{t.icon}</svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, fontWeight: 300, color: '#1a2340', letterSpacing: '-.2px' }}>{t.title}</div>
                <div style={{ fontSize: 10, color: '#8892b0', marginTop: 1 }}>{t.sub}</div>
              </div>
              {/* Toggle */}
              <div style={{ width: 42, height: 24, borderRadius: 12, position: 'relative', flexShrink: 0, background: t.on ? 'linear-gradient(135deg,#1e9a5a,#2ebc71)' : '#ede5d4', boxShadow: t.on ? '0 2px 8px rgba(46,188,113,.3)' : 'none' }}>
                <div style={{ position: 'absolute', top: 2, left: 2, width: 20, height: 20, borderRadius: '50%', background: '#fff', boxShadow: '0 2px 6px rgba(0,0,0,.2)', transform: t.on ? 'translateX(18px)' : 'translateX(0)', transition: 'transform .25s cubic-bezier(.34,1.56,.64,1)' }} />
              </div>
            </div>
          ))}
        </div>

        {/* Security Ops */}
        <SecLbl>Security Operations</SecLbl>
        <div style={{ margin: '10px 16px 0', background: '#fff', borderRadius: 20, overflow: 'hidden', boxShadow: '0 0 0 .5px rgba(40,57,108,.06), 0 2px 8px rgba(40,57,108,.06)', border: '.5px solid rgba(40,57,108,.06)' }}>
          <div style={{ padding: '14px 16px 10px', borderBottom: '.5px solid rgba(40,57,108,.07)', display: 'flex', alignItems: 'center', gap: 9 }}>
            <div style={{ width: 32, height: 32, borderRadius: 10, background: 'rgba(40,57,108,.08)', border: '.5px solid rgba(40,57,108,.13)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#28396C" strokeWidth="2.2" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 300, color: '#1a2340', letterSpacing: '-.2px' }}>Security Ops</div>
              <div style={{ fontSize: 10, color: '#8892b0', marginTop: 1 }}>Encryption &amp; access controls</div>
            </div>
          </div>
          <div style={{ padding: '10px 16px', background: 'rgba(232,85,85,.04)', borderBottom: '.5px solid rgba(40,57,108,.07)' }}>
            <div style={{ fontSize: 10, color: '#8892b0', lineHeight: 1.6, letterSpacing: '-.1px' }}>Encryption and access controls are managed by the <strong style={{ color: '#4a5578', fontWeight: 400 }}>Institutional Administrator</strong>. Contact your school for changes.</div>
          </div>
          {[
            { title: 'Biometric Key', sub: 'Authorized Device', status: 'Active', statusColor: '#1e9a5a', dotColor: '#2ebc71', dotGlow: 'rgba(46,188,113,.2)', iconBg: 'rgba(40,57,108,.08)', iconBdr: 'rgba(40,57,108,.13)', iconStroke: '#28396C', icon: <><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /><circle cx="12" cy="16" r="1" /></> },
            { title: 'Quantum Shield', sub: 'Active Monitoring', status: 'On', statusColor: '#5B6FD4', dotColor: '#5b6fd4', dotGlow: 'rgba(91,111,212,.2)', iconBg: 'rgba(91,111,212,.1)', iconBdr: 'rgba(91,111,212,.2)', iconStroke: '#5B6FD4', icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /> },
          ].map((s, i, arr) => (
            <div key={s.title} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '13px 16px', borderBottom: i < arr.length - 1 ? '.5px solid rgba(40,57,108,.07)' : 'none' }}>
              <div style={{ width: 34, height: 34, borderRadius: 11, background: s.iconBg, border: `.5px solid ${s.iconBdr}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={s.iconStroke} strokeWidth="2.2" strokeLinecap="round">{s.icon}</svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, fontWeight: 300, color: '#1a2340', letterSpacing: '-.2px' }}>{s.title}</div>
                <div style={{ fontSize: 10, color: '#8892b0', marginTop: 1 }}>{s.sub}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 9, fontWeight: 300, color: s.statusColor, flexShrink: 0 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: s.dotColor, boxShadow: `0 0 0 2px ${s.dotGlow}` }} />
                {s.status}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C0C8DC" strokeWidth="2.2" strokeLinecap="round"><polyline points="9 18 15 12 9 6" /></svg>
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
