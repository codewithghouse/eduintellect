const SPTabBar = () => (
  <div className="sp-tabbar">
    {['Home', 'Tests', 'Progress', 'Alerts', 'Messages'].map((t, i) => (
      <div key={t} className={`sp-ti ${i === 4 ? 'act' : ''}`}>
        <svg viewBox="0 0 24 24">
          {i === 0 && <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><path d="M9 22V12h6v10" /></>}
          {i === 1 && <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6" /></>}
          {i === 2 && <><path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20V14" /></>}
          {i === 3 && <><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" /></>}
          {i === 4 && <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />}
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

/* ═══════════════════════════════════════════
   SCREEN 1 — MESSAGES (EMPTY STATE)
═══════════════════════════════════════════ */
export const MessagesEmpty = () => (
  <div className="sp-wrap">
    <div className="sp-label">Messages — Empty</div>
    <div className="sp">
      <div className="sp-di" />
      <div className="sp-scroll">
        <SPHeader />

        {/* Stats Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, margin: '16px 16px 0' }}>
          {[
            { val: '3', lbl: 'Total\nMessages', color: '#28396c', bg: 'rgba(40,57,108,.08)', bdr: 'rgba(40,57,108,.13)', stroke: '#28396C', glow: 'rgba(40,57,108,.12)', icon: <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /> },
            { val: '0', lbl: 'Teacher\nMsgs', color: '#1a2340', bg: 'rgba(46,188,113,.1)', bdr: 'rgba(46,188,113,.2)', stroke: '#2EBC71', glow: 'rgba(46,188,113,.14)', icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></> },
            { val: '0', lbl: 'Active\nTeachers', color: '#1a2340', bg: 'rgba(91,111,212,.1)', bdr: 'rgba(91,111,212,.2)', stroke: '#5B6FD4', glow: 'rgba(91,111,212,.12)', icon: <><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></> },
          ].map(s => (
            <div key={s.lbl} style={{ background: '#fff', borderRadius: 18, padding: '12px 10px', boxShadow: '0 0 0 .5px rgba(40,57,108,.06), 0 2px 8px rgba(40,57,108,.06)', border: '.5px solid rgba(40,57,108,.06)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: 3 }}>
              <div style={{ position: 'absolute', top: -14, right: -14, width: 50, height: 50, borderRadius: '50%', background: `radial-gradient(circle,${s.glow} 0%,transparent 70%)`, opacity: 0.5, pointerEvents: 'none' }} />
              <div style={{ width: 26, height: 26, borderRadius: 8, background: s.bg, border: `.5px solid ${s.bdr}`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 4 }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={s.stroke} strokeWidth="2.2" strokeLinecap="round">{s.icon}</svg>
              </div>
              <div style={{ fontSize: 9, fontWeight: 300, letterSpacing: '.07em', textTransform: 'uppercase', color: '#c0c8dc', lineHeight: 1.3, whiteSpace: 'pre-line' }}>{s.lbl}</div>
              <div style={{ fontSize: 20, fontWeight: 300, color: s.color, letterSpacing: '-.5px', lineHeight: 1 }}>{s.val}</div>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div style={{ margin: '16px 16px 0', background: 'linear-gradient(135deg,#28396c,#334880)', borderRadius: 20, padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 11, position: 'relative', overflow: 'hidden', boxShadow: '0 6px 22px rgba(40,57,108,.22)' }}>
          <div style={{ position: 'absolute', top: -26, right: -16, width: 110, height: 110, background: 'radial-gradient(circle,rgba(255,255,255,.07) 0%,transparent 65%)', borderRadius: '50%', pointerEvents: 'none' }} />
          <div style={{ width: 36, height: 36, borderRadius: 11, background: 'rgba(255,255,255,.12)', border: '.5px solid rgba(255,255,255,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative', zIndex: 1 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.85)" strokeWidth="2" strokeLinecap="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>
          </div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 300, color: '#fff', letterSpacing: '-.3px' }}>Teacher Messages</div>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,.5)', marginTop: 1 }}>Direct communication with your teachers</div>
          </div>
        </div>

        {/* Search */}
        <div style={{ margin: '12px 16px 0', position: 'relative' }}>
          <div style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)' }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C0C8DC" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
          </div>
          <div style={{ width: '100%', padding: '12px 14px 12px 38px', background: '#fff', borderRadius: 14, border: '.5px solid rgba(40,57,108,.07)', fontSize: 13, color: '#c0c8dc', boxShadow: '0 0 0 .5px rgba(40,57,108,.06), 0 2px 8px rgba(40,57,108,.06)' }}>
            Search teachers...
          </div>
        </div>

        {/* New Message Button */}
        <div style={{ margin: '10px 16px 0', background: 'linear-gradient(135deg,#28396c,#1e2d57)', borderRadius: 14, padding: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontSize: 14, fontWeight: 300, color: '#fff', position: 'relative', overflow: 'hidden', boxShadow: '0 6px 22px rgba(40,57,108,.26), 0 2px 6px rgba(0,0,0,.1)' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(255,255,255,.1) 0%,transparent 55%)' }} />
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" style={{ position: 'relative', zIndex: 1 }}><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
          <span style={{ position: 'relative', zIndex: 1 }}>New Message</span>
        </div>

        {/* Empty State */}
        <div style={{ margin: '20px 16px 0', background: '#fff', borderRadius: 22, padding: '40px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, boxShadow: '0 0 0 .5px rgba(40,57,108,.06), 0 2px 8px rgba(40,57,108,.06)', border: '.5px solid rgba(40,57,108,.05)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -40, left: '50%', transform: 'translateX(-50%)', width: 200, height: 160, background: 'radial-gradient(ellipse,rgba(40,57,108,.04) 0%,transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ width: 68, height: 68, borderRadius: 22, background: 'linear-gradient(140deg,#f5efe2,#ede5d4)', border: '.5px solid rgba(40,57,108,.13)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 18px rgba(40,57,108,.08), 0 0 0 6px rgba(40,57,108,.04)', marginBottom: 3, position: 'relative', zIndex: 1 }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#28396C" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>
          </div>
          <div style={{ fontSize: 15, fontWeight: 300, color: '#1a2340', letterSpacing: '-.3px', textAlign: 'center' }}>No conversations yet</div>
          <div style={{ fontSize: 12, color: '#8892b0', textAlign: 'center', lineHeight: 1.65, maxWidth: 220 }}>Tap "New Message" above to start a conversation with any of your teachers.</div>
        </div>

        <div style={{ height: 20 }} />
      </div>
      <SPTabBar />
    </div>
  </div>
);

/* ═══════════════════════════════════════════
   SCREEN 2 — SELECT TEACHER
═══════════════════════════════════════════ */
export const MessagesSelectTeacher = () => (
  <div className="sp-wrap">
    <div className="sp-label">Select Teacher</div>
    <div className="sp">
      <div className="sp-di" />
      <div className="sp-scroll">
        <SPHeader />

        {/* Back row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '12px 20px 0', cursor: 'pointer', width: 'fit-content' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#28396C" strokeWidth="2.2" strokeLinecap="round"><polyline points="15 18 9 12 15 6" /></svg>
          <span style={{ fontSize: 13, fontWeight: 400, color: '#28396c', letterSpacing: '-.1px' }}>Messages</span>
        </div>

        {/* Header */}
        <div style={{ padding: '6px 20px 0' }}>
          <div style={{ fontSize: 21, fontWeight: 300, color: '#1a2340', letterSpacing: '-.5px' }}>Select Teacher</div>
          <div style={{ fontSize: 12, color: '#8892b0', marginTop: 3 }}>Choose who you'd like to message</div>
        </div>

        {/* Search */}
        <div style={{ margin: '14px 16px 0', position: 'relative' }}>
          <div style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)' }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C0C8DC" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
          </div>
          <div style={{ width: '100%', padding: '12px 14px 12px 38px', background: '#fff', borderRadius: 14, border: '.5px solid rgba(40,57,108,.07)', fontSize: 13, color: '#c0c8dc', boxShadow: '0 0 0 .5px rgba(40,57,108,.06), 0 2px 8px rgba(40,57,108,.06)' }}>
            Search teachers...
          </div>
        </div>

        {/* Section Label */}
        <div style={{ fontSize: 9, fontWeight: 300, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: 'rgba(40,57,108,.35)', padding: '14px 20px 0', display: 'flex', alignItems: 'center', gap: 8 }}>
          Your Teachers<div style={{ flex: 1, height: '.5px', background: 'rgba(40,57,108,.13)' }} />
        </div>

        {/* Teacher List */}
        <div style={{ margin: '10px 16px 0', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { initials: 'JA', avBg: 'linear-gradient(140deg,#1A6B50,#2EBC71)', avShadow: '0 3px 10px rgba(46,188,113,.28)', online: true, name: 'Jamal Sir', role: 'Class Teacher · Shaik sir', subj: 'English', tagBg: 'rgba(46,188,113,.1)', tagColor: '#1e9a5a', tagBdr: 'rgba(46,188,113,.2)', tagIcon: <><path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" /></> },
            { initials: 'PS', avBg: 'linear-gradient(140deg,#1e2d57,#3d5494)', avShadow: '0 3px 10px rgba(40,57,108,.25)', online: false, name: 'Pasha Sir', role: 'Subject Teacher', subj: 'Islamic Read', tagBg: 'rgba(40,57,108,.08)', tagColor: '#28396c', tagBdr: 'rgba(40,57,108,.13)', tagIcon: <><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></> },
          ].map(t => (
            <div key={t.name} style={{ background: '#fff', borderRadius: 18, padding: '12px 14px', boxShadow: '0 0 0 .5px rgba(40,57,108,.06), 0 2px 8px rgba(40,57,108,.06)', border: '.5px solid rgba(40,57,108,.06)', display: 'flex', alignItems: 'center', gap: 11 }}>
              <div style={{ width: 44, height: 44, borderRadius: 14, background: t.avBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 300, color: '#fff', flexShrink: 0, position: 'relative', boxShadow: t.avShadow }}>
                {t.initials}
                {t.online && <div style={{ position: 'absolute', bottom: -1, right: -1, width: 11, height: 11, background: '#2ebc71', borderRadius: '50%', border: '2px solid #fff' }} />}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 300, color: '#1a2340', letterSpacing: '-.2px' }}>{t.name}</div>
                <div style={{ fontSize: 11, color: '#8892b0', marginTop: 1 }}>{t.role}</div>
                <div style={{ marginTop: 5, display: 'inline-flex', alignItems: 'center', gap: 4, padding: '3px 8px', borderRadius: 100, fontSize: 9, fontWeight: 300, background: t.tagBg, color: t.tagColor, border: `.5px solid ${t.tagBdr}` }}>
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">{t.tagIcon}</svg>
                  {t.subj}
                </div>
              </div>
              <div style={{ width: 30, height: 30, borderRadius: 9, background: 'rgba(40,57,108,.08)', border: '.5px solid rgba(40,57,108,.13)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#28396C" strokeWidth="2.2" strokeLinecap="round"><polyline points="9 18 15 12 9 6" /></svg>
              </div>
            </div>
          ))}
        </div>

        {/* Info Card */}
        <div style={{ margin: '14px 16px 0', background: 'rgba(40,57,108,.08)', borderRadius: 16, padding: '12px 14px', border: '.5px solid rgba(40,57,108,.13)', display: 'flex', alignItems: 'flex-start', gap: 9 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#28396C" strokeWidth="2" strokeLinecap="round" style={{ flexShrink: 0, marginTop: 1 }}><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
          <div style={{ fontSize: 11, color: '#4a5578', lineHeight: 1.6 }}>Messages are reviewed. Keep communication respectful and academic. Replies may take 24–48 hours.</div>
        </div>

        <div style={{ height: 20 }} />
      </div>
      <SPTabBar />
    </div>
  </div>
);

/* ═══════════════════════════════════════════
   SCREEN 3 — ACTIVE CHAT
═══════════════════════════════════════════ */
export const MessagesChat = () => (
  <div className="sp-wrap">
    <div className="sp-label">Active Chat</div>
    <div className="sp" style={{ background: '#F8F5EF' }}>
      <div className="sp-di" />

      {/* Chat Header (navy gradient, no SP header) */}
      <div style={{ background: 'linear-gradient(135deg,#28396c,#334880)', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 10, position: 'relative', overflow: 'hidden', boxShadow: '0 4px 16px rgba(40,57,108,.18)', flexShrink: 0 }}>
        <div style={{ position: 'absolute', top: -26, right: -16, width: 110, height: 110, background: 'radial-gradient(circle,rgba(255,255,255,.07) 0%,transparent 65%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', marginRight: 2, position: 'relative', zIndex: 1 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.7)" strokeWidth="2.2" strokeLinecap="round"><polyline points="15 18 9 12 15 6" /></svg>
        </div>
        <div style={{ width: 36, height: 36, borderRadius: 11, background: 'linear-gradient(140deg,#1A6B50,#2EBC71)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 300, color: '#fff', flexShrink: 0, position: 'relative', zIndex: 1, boxShadow: '0 3px 10px rgba(46,188,113,.3)' }}>
          JA
          <div style={{ position: 'absolute', bottom: -1, right: -1, width: 10, height: 10, background: '#2ebc71', borderRadius: '50%', border: '2px solid #334880' }} />
        </div>
        <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 300, color: '#fff', letterSpacing: '-.2px' }}>Jamal Sir</div>
          <div style={{ fontSize: 10, color: 'rgba(255,255,255,.5)', marginTop: 1, display: 'flex', alignItems: 'center', gap: 4 }}>
            <div style={{ width: 5, height: 5, background: '#2ebc71', borderRadius: '50%', boxShadow: '0 0 0 2px rgba(46,188,113,.25)' }} />
            Online now · Class Teacher
          </div>
        </div>
        <div style={{ display: 'flex', gap: 6, position: 'relative', zIndex: 1 }}>
          {[
            <path key="phone" d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81C2.18 8.2 2 6.6 2 4.82A2 2 0 013.99 2.82h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />,
            <g key="more"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></g>
          ].map((icon, i) => (
            <div key={i} style={{ width: 30, height: 30, borderRadius: 10, background: 'rgba(255,255,255,.12)', border: '.5px solid rgba(255,255,255,.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.8)" strokeWidth="2" strokeLinecap="round">{icon}</svg>
            </div>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, padding: '16px 16px 0', display: 'flex', flexDirection: 'column', gap: 10, overflowY: 'auto', scrollbarWidth: 'none' as const }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '2px 0' }}>
          <div style={{ flex: 1, height: '.5px', background: 'rgba(40,57,108,.07)' }} />
          <div style={{ fontSize: 9, fontWeight: 400, color: '#c0c8dc', letterSpacing: '.04em' }}>Today, Apr 18</div>
          <div style={{ flex: 1, height: '.5px', background: 'rgba(40,57,108,.07)' }} />
        </div>

        {[
          { type: 'received', av: 'JA', avBg: 'linear-gradient(140deg,#1A6B50,#2EBC71)', text: 'Assalamu Alaikum! How can I help you regarding Tanveer\'s progress today?', time: '9:30 AM' },
          { type: 'sent', av: 'T', avBg: 'linear-gradient(140deg,#1e2d57,#3d5494)', text: 'Walaikum Assalam sir! I wanted to discuss Tanveer\'s English performance this term.', time: '9:32 AM ✓✓' },
          { type: 'received', av: 'JA', avBg: 'linear-gradient(140deg,#1A6B50,#2EBC71)', text: 'Of course! Tanveer is doing very well — 98% in English this term. Keep encouraging him to read daily. 📚', time: '9:34 AM' },
          { type: 'sent', av: 'T', avBg: 'linear-gradient(140deg,#1e2d57,#3d5494)', text: 'That\'s wonderful! Thank you so much sir. We will keep supporting him at home. 🙏', time: '9:35 AM ✓✓' },
        ].map((m, i) => (
          <div key={i} style={{ display: 'flex', gap: 7, flexDirection: m.type === 'sent' ? 'row-reverse' : 'row' }}>
            <div style={{ width: 26, height: 26, borderRadius: 9, background: m.avBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 300, color: '#fff', flexShrink: 0, alignSelf: 'flex-end' }}>
              {m.av}
            </div>
            <div style={{ maxWidth: '70%' }}>
              <div style={{
                padding: '10px 12px',
                borderRadius: m.type === 'sent' ? '16px 4px 16px 16px' : '4px 16px 16px 16px',
                background: m.type === 'sent' ? 'linear-gradient(135deg,#28396c,#334880)' : '#fff',
                border: m.type === 'received' ? '.5px solid rgba(40,57,108,.07)' : 'none',
                boxShadow: m.type === 'sent' ? '0 2px 8px rgba(40,57,108,.2)' : '0 1px 6px rgba(40,57,108,.07)',
              }}>
                <div style={{ fontSize: 12, lineHeight: 1.55, fontWeight: 400, color: m.type === 'sent' ? '#fff' : '#1a2340' }}>{m.text}</div>
                <div style={{ fontSize: 9, fontWeight: 500, marginTop: 4, textAlign: 'right', color: m.type === 'sent' ? 'rgba(255,255,255,.5)' : '#c0c8dc' }}>{m.time}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Compose */}
      <div style={{ padding: '10px 14px', background: 'rgba(253,250,244,.96)', borderTop: '.5px solid rgba(40,57,108,.07)', display: 'flex', alignItems: 'flex-end', gap: 8, flexShrink: 0 }}>
        <div style={{ width: 32, height: 32, borderRadius: 10, background: '#f5efe2', border: '.5px solid rgba(40,57,108,.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8892B0" strokeWidth="2" strokeLinecap="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" /></svg>
        </div>
        <div style={{ flex: 1, padding: '10px 14px', background: '#fff', borderRadius: 18, border: '.5px solid rgba(40,57,108,.07)', fontSize: 13, color: '#c0c8dc', boxShadow: '0 1px 4px rgba(40,57,108,.06)' }}>Type a message...</div>
        <div style={{ width: 36, height: 36, borderRadius: 11, background: 'linear-gradient(135deg,#28396c,#334880)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 3px 10px rgba(40,57,108,.25)' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
        </div>
      </div>

      <SPTabBar />
    </div>
  </div>
);
