const SPTabBar = () => (
  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 76, background: 'rgba(238,232,220,.94)', backdropFilter: 'saturate(180%) blur(24px)', WebkitBackdropFilter: 'saturate(180%) blur(24px)', borderTop: '.5px solid rgba(40,57,108,.12)', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-around', padding: '10px 4px 0', zIndex: 200 }}>
    {['Home', 'Tests', 'Progress', 'Alerts', 'Messages'].map((t, i) => (
      <div key={t} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={i === 4 ? '#28396C' : 'rgba(40,57,108,.28)'} strokeWidth={i === 4 ? 2 : 1.7} strokeLinecap="round" strokeLinejoin="round">
          {i === 0 && <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><path d="M9 22V12h6v10" /></>}
          {i === 1 && <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6" /></>}
          {i === 2 && <><path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20V14" /></>}
          {i === 3 && <><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" /></>}
          {i === 4 && <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />}
        </svg>
        <span style={{ fontSize: 9, color: i === 4 ? '#28396C' : 'rgba(40,57,108,.28)', fontWeight: i === 4 ? 700 : 500 }}>{t}</span>
      </div>
    ))}
  </div>
);

const SenderAvatar = () => (
  <div style={{ width: 30, height: 30, borderRadius: 10, background: 'linear-gradient(140deg,#1e2d57,#3d5494)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: '#fff', flexShrink: 0 }}>G</div>
);

const DatePill = ({ label }: { label: string }) => (
  <div style={{ display: 'flex', justifyContent: 'center', padding: '12px 0 5px' }}>
    <div style={{ background: 'rgba(40,57,108,.1)', borderRadius: 100, padding: '4px 12px', fontSize: 10, fontWeight: 600, color: '#4a5578', letterSpacing: '.02em', border: '.5px solid rgba(40,57,108,.08)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}>
      {label}
    </div>
  </div>
);

/* ═══════════════════════════════════════════
   SCHOOL MESSAGES — Principal Communication
═══════════════════════════════════════════ */
export const SchoolMessages = () => (
  <div className="sp-wrap">
    <div className="sp-label">School Messages</div>
    <div className="sp" style={{ background: '#EEE8DC' }}>
      <div className="sp-di" />

      {/* Sticky Header + Stats */}
      <div style={{ flexShrink: 0, background: 'rgba(253,250,244,.96)', backdropFilter: 'saturate(180%) blur(20px)', WebkitBackdropFilter: 'saturate(180%) blur(20px)', borderBottom: '.5px solid rgba(40,57,108,.08)', zIndex: 100 }}>
        {/* App Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 18px 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 6, height: 6, background: '#2ebc71', borderRadius: '50%', boxShadow: '0 0 0 2px rgba(46,188,113,.2)' }} />
            <span style={{ fontSize: 14, fontWeight: 700, color: '#28396c', letterSpacing: '.02em' }}>EduIntellect</span>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 1px 4px rgba(40,57,108,.1), 0 3px 10px rgba(40,57,108,.06)', position: 'relative' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4A5578" strokeWidth="1.8" strokeLinecap="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" /></svg>
              <div style={{ position: 'absolute', top: 1, right: 1, width: 7, height: 7, background: '#e85555', borderRadius: '50%', border: '1.5px solid #fff' }} />
            </div>
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(140deg,#1e2d57,#3d5494)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#fff', boxShadow: '0 2px 8px rgba(40,57,108,.28)' }}>T</div>
          </div>
        </div>

        {/* Stats Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, padding: '12px 16px' }}>
          {[
            { val: '3', lbl: 'Total\nMessages', color: '#28396c', bg: 'rgba(40,57,108,.08)', bdr: 'rgba(40,57,108,.13)', stroke: '#28396C', glow: 'rgba(40,57,108,.14)', icon: <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /> },
            { val: '0', lbl: 'Unread from\nPrincipal', color: '#f59c2a', bg: 'rgba(245,156,42,.1)', bdr: 'rgba(245,156,42,.2)', stroke: '#F59C2A', glow: 'rgba(245,156,42,.16)', icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></> },
          ].map(s => (
            <div key={s.lbl} style={{ background: '#fff', borderRadius: 16, padding: '12px 12px', boxShadow: '0 0 0 .5px rgba(40,57,108,.06), 0 2px 8px rgba(40,57,108,.06)', border: '.5px solid rgba(40,57,108,.06)', display: 'flex', alignItems: 'center', gap: 10, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: -14, right: -14, width: 50, height: 50, borderRadius: '50%', background: `radial-gradient(circle,${s.glow} 0%,transparent 70%)`, opacity: 0.4, pointerEvents: 'none' }} />
              <div style={{ width: 32, height: 32, borderRadius: 10, background: s.bg, border: `.5px solid ${s.bdr}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={s.stroke} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">{s.icon}</svg>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: '#c0c8dc', lineHeight: 1.3, whiteSpace: 'pre-line' }}>{s.lbl}</div>
                <div style={{ fontSize: 20, fontWeight: 700, color: s.color, letterSpacing: '-.5px', lineHeight: 1 }}>{s.val}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Conversation Header (navy gradient) */}
      <div style={{ background: 'linear-gradient(135deg,#28396c,#334880)', padding: '12px 18px', display: 'flex', alignItems: 'center', gap: 10, position: 'relative', overflow: 'hidden', boxShadow: '0 4px 16px rgba(40,57,108,.2)', flexShrink: 0 }}>
        <div style={{ position: 'absolute', top: -30, right: -20, width: 140, height: 140, background: 'radial-gradient(circle,rgba(255,255,255,.07) 0%,transparent 65%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,.014) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.014) 1px,transparent 1px)', backgroundSize: '22px 22px', pointerEvents: 'none' }} />

        <div style={{ width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0, position: 'relative', zIndex: 1 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.7)" strokeWidth="2.2" strokeLinecap="round"><polyline points="15 18 9 12 15 6" /></svg>
        </div>
        <div style={{ width: 38, height: 38, borderRadius: 12, background: 'rgba(255,255,255,.15)', border: '.5px solid rgba(255,255,255,.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative', zIndex: 1 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.85)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
        </div>
        <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', letterSpacing: '-.2px' }}>Ghouse Pasha</div>
          <div style={{ fontSize: 10, color: 'rgba(255,255,255,.55)', marginTop: 1, fontWeight: 400, display: 'flex', alignItems: 'center', gap: 4 }}>
            <div style={{ width: 5, height: 5, background: '#2ebc71', borderRadius: '50%', boxShadow: '0 0 0 2px rgba(46,188,113,.3)' }} />
            School Administration
          </div>
        </div>
        <div style={{ display: 'flex', gap: 6, position: 'relative', zIndex: 1 }}>
          <div style={{ width: 30, height: 30, borderRadius: 10, background: 'rgba(255,255,255,.12)', border: '.5px solid rgba(255,255,255,.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.8)" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81C2.18 8.2 2 6.6 2 4.82A2 2 0 013.99 2.82h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
          </div>
          <div style={{ width: 30, height: 30, borderRadius: 10, background: 'rgba(255,255,255,.12)', border: '.5px solid rgba(255,255,255,.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.8)" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', scrollbarWidth: 'none' as const, paddingBottom: 100, background: '#EEE8DC' }}>

        <DatePill label="16 Apr 2026" />

        {/* Short msg 1 */}
        <div style={{ padding: '3px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 7 }}>
            <SenderAvatar />
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: '#4a5578', marginBottom: 3, letterSpacing: '-.1px' }}>Ghouse Pasha</div>
              <div style={{ background: '#fff', borderRadius: '4px 16px 16px 16px', padding: '8px 12px', boxShadow: '0 1px 5px rgba(40,57,108,.07)', border: '.5px solid rgba(40,57,108,.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14, maxWidth: 180 }}>
                <div style={{ fontSize: 12, color: '#1a2340', fontWeight: 500, letterSpacing: '-.1px' }}>Ghouse pasha</div>
                <div style={{ fontSize: 9, color: '#c0c8dc', fontWeight: 500 }}>22:50</div>
              </div>
            </div>
          </div>
        </div>

        {/* Short msg 2 */}
        <div style={{ padding: '3px 16px 3px 55px' }}>
          <div style={{ background: '#fff', borderRadius: '4px 16px 16px 16px', padding: '8px 12px', boxShadow: '0 1px 5px rgba(40,57,108,.07)', border: '.5px solid rgba(40,57,108,.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14, maxWidth: 180 }}>
            <div style={{ fontSize: 12, color: '#1a2340', fontWeight: 500, letterSpacing: '-.1px' }}>Ghouse pasha</div>
            <div style={{ fontSize: 9, color: '#c0c8dc', fontWeight: 500 }}>22:50</div>
          </div>
        </div>

        <DatePill label="Yesterday" />

        {/* Long important message */}
        <div style={{ padding: '5px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 7 }}>
            <div style={{ marginTop: 20 }}><SenderAvatar /></div>
            <div style={{ flex: 1, maxWidth: '88%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: '#4a5578', letterSpacing: '-.1px' }}>Ghouse Pasha</div>
                <div style={{ padding: '2px 7px', borderRadius: 100, fontSize: 8, fontWeight: 700, background: 'rgba(40,57,108,.08)', color: '#28396c', border: '.5px solid rgba(40,57,108,.13)', letterSpacing: '.04em', textTransform: 'uppercase' }}>Admin</div>
              </div>
              <div style={{ background: '#fff', borderRadius: '4px 18px 18px 18px', padding: '12px 14px', boxShadow: '0 1px 6px rgba(40,57,108,.08), 0 4px 14px rgba(40,57,108,.06)', border: '.5px solid rgba(40,57,108,.05)', maxWidth: '100%' }}>
                {/* Important banner */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '7px 10px', background: 'rgba(200,160,16,.1)', borderRadius: 9, border: '.5px solid rgba(200,160,16,.22)', marginBottom: 9 }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C8A010" strokeWidth="2.2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                  <div style={{ fontSize: 10, fontWeight: 700, color: '#C8A010', letterSpacing: '.04em', textTransform: 'uppercase' }}>Important Update</div>
                </div>
                <div style={{ fontSize: 12, color: '#1a2340', lineHeight: 1.7, fontWeight: 400, letterSpacing: '-.1px' }}>
                  <p style={{ marginBottom: 7 }}>Dear Parent,</p>
                  <p style={{ marginBottom: 7 }}>This is an important update about <strong style={{ color: '#28396c', fontWeight: 700 }}>Tanveer's</strong> progress.</p>
                  <p style={{ marginBottom: 7 }}>We have observed the following concerns:</p>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 6, margin: '3px 0' }}>
                    <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#28396c', flexShrink: 0, marginTop: 6 }} />
                    <span>No test data recorded yet</span>
                  </div>
                  <p style={{ marginTop: 7, marginBottom: 7 }}>We would like to partner with you to support Tanveer. Please reach out to the class teacher at your earliest convenience so we can agree on a plan together.</p>
                  <p>Thank you for your attention.</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 9, justifyContent: 'flex-end' }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#C0C8DC" strokeWidth="2" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                  <div style={{ fontSize: 9, fontWeight: 500, color: '#c0c8dc' }}>Yesterday, 9:30 AM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DatePill label="Today, Apr 18" />

        {/* Another admin message */}
        <div style={{ padding: '5px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 7 }}>
            <div style={{ marginTop: 20 }}><SenderAvatar /></div>
            <div style={{ flex: 1, maxWidth: '88%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: '#4a5578', letterSpacing: '-.1px' }}>Ghouse Pasha</div>
                <div style={{ padding: '2px 7px', borderRadius: 100, fontSize: 8, fontWeight: 700, background: 'rgba(40,57,108,.08)', color: '#28396c', border: '.5px solid rgba(40,57,108,.13)', letterSpacing: '.04em', textTransform: 'uppercase' }}>Admin</div>
              </div>
              <div style={{ background: '#fff', borderRadius: '4px 18px 18px 18px', padding: '12px 14px', boxShadow: '0 1px 6px rgba(40,57,108,.08), 0 4px 14px rgba(40,57,108,.06)', border: '.5px solid rgba(40,57,108,.05)' }}>
                <div style={{ fontSize: 12, color: '#1a2340', lineHeight: 1.7, fontWeight: 400, letterSpacing: '-.1px' }}>
                  <p style={{ marginBottom: 7 }}>Good morning! We are pleased to inform you that Tanveer's attendance has been recorded as <strong style={{ color: '#1e9a5a', fontWeight: 700 }}>100%</strong> this month. 🎉</p>
                  <p>Please ensure he continues to attend regularly. Thank you!</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 8, justifyContent: 'flex-end' }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#C0C8DC" strokeWidth="2" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                  <div style={{ fontSize: 9, fontWeight: 500, color: '#c0c8dc' }}>9:02 AM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Parent Reply (sent) */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '7px 16px' }}>
          <div style={{ maxWidth: '78%' }}>
            <div style={{ background: 'linear-gradient(135deg,#28396c,#334880)', borderRadius: '16px 4px 16px 16px', padding: '10px 13px', boxShadow: '0 2px 8px rgba(40,57,108,.22)' }}>
              <div style={{ fontSize: 12, color: '#fff', lineHeight: 1.6, fontWeight: 400, letterSpacing: '-.1px' }}>Thank you for the update! We will ensure Tanveer maintains his attendance. 🙏</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 3, marginTop: 7, justifyContent: 'flex-end' }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.5)" strokeWidth="2" strokeLinecap="round"><path d="M20 6L9 17l-5-5" /></svg>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.5)" strokeWidth="2" strokeLinecap="round" style={{ marginLeft: -5 }}><path d="M20 6L9 17l-5-5" /></svg>
                <div style={{ fontSize: 9, fontWeight: 500, color: 'rgba(255,255,255,.5)' }}>9:05 AM</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Compose Bar */}
      <div style={{ position: 'absolute', bottom: 76, left: 0, right: 0, padding: '9px 14px', background: 'rgba(238,232,220,.96)', borderTop: '.5px solid rgba(40,57,108,.08)', display: 'flex', alignItems: 'flex-end', gap: 8, zIndex: 150 }}>
        <div style={{ width: 32, height: 32, borderRadius: 11, background: 'rgba(40,57,108,.1)', border: '.5px solid rgba(40,57,108,.13)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8892B0" strokeWidth="2" strokeLinecap="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" /></svg>
        </div>
        <div style={{ flex: 1, background: '#fff', borderRadius: 18, border: '.5px solid rgba(40,57,108,.1)', padding: '10px 14px', boxShadow: '0 1px 5px rgba(40,57,108,.07)', fontSize: 13, color: '#c0c8dc' }}>
          Type a message...
        </div>
        <div style={{ width: 36, height: 36, borderRadius: 12, background: 'linear-gradient(135deg,#28396c,#334880)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 3px 10px rgba(40,57,108,.25)' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
        </div>
      </div>

      <SPTabBar />
    </div>
  </div>
);
