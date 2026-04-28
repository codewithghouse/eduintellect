import React from 'react';

const SPTabBar = () => (
  <div className="sp-tabbar">
    {['Home', 'Tests', 'Progress', 'Alerts', 'Messages'].map((t, i) => (
      <div key={t} className={`sp-ti ${i === 0 ? 'act' : ''}`}>
        <svg viewBox="0 0 24 24"><path d={i === 0 ? 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z' : i === 1 ? 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z M14 2v6h6' : i === 2 ? 'M18 20V10 M12 20V4 M6 20V14' : i === 3 ? 'M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9 M13.73 21a2 2 0 01-3.46 0' : 'M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z'} /></svg>
        <span>{t}</span>
      </div>
    ))}
  </div>
);

const SPHeader = () => (
  <div className="sp-hdr"><div className="sp-brand"><div className="sp-live-dot" /><span className="sp-brand-txt">Edullent</span></div><div className="sp-av">T</div></div>
);

const HeroBanner = ({ todayCount }: { todayCount: number }) => (
  <div style={{ margin: '14px 16px 0', borderRadius: 24, background: 'linear-gradient(140deg,#28396c,#3d5494)', padding: '22px 20px 24px', position: 'relative', overflow: 'hidden', boxShadow: '0 0 0 .5px rgba(40,57,108,.08), 0 4px 18px rgba(40,57,108,.09), 0 22px 52px rgba(40,57,108,.13)' }}>
    <div style={{ position: 'absolute', top: -30, right: -20, width: 150, height: 150, background: 'radial-gradient(circle,rgba(255,255,255,.1) 0%,transparent 65%)', borderRadius: '50%' }} />
    <div style={{ position: 'absolute', bottom: -40, left: -20, width: 130, height: 130, background: 'radial-gradient(circle,rgba(255,255,255,.06) 0%,transparent 65%)', borderRadius: '50%' }} />
    <div style={{ fontSize: 9, fontWeight: 300, letterSpacing: '.14em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,.5)', marginBottom: 8, position: 'relative', zIndex: 1 }}>Weekly Schedule</div>
    <div style={{ fontSize: 32, fontWeight: 300, color: '#fff', letterSpacing: '-.7px', lineHeight: 1.1, position: 'relative', zIndex: 1, marginBottom: 8 }}>Timetable</div>
    <div style={{ fontSize: 13, color: 'rgba(255,255,255,.55)', position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: 5 }}>Tanveer Sultana <div style={{ width: 4, height: 4, background: 'rgba(255,255,255,.3)', borderRadius: '50%' }} /> Class 10B</div>
    <div style={{ display: 'flex', gap: 0, marginTop: 18, background: 'rgba(255,255,255,.08)', borderRadius: 14, overflow: 'hidden', border: '.5px solid rgba(255,255,255,.1)', position: 'relative', zIndex: 1 }}>
      {[{ v: '5', l: 'School Days' }, { v: '2', l: 'Subjects' }, { v: String(todayCount), l: 'Today' }].map((s, i) => (
        <div key={s.l} style={{ flex: 1, padding: '11px 12px', borderRight: i < 2 ? '.5px solid rgba(255,255,255,.08)' : 'none' }}>
          <div style={{ fontSize: 18, fontWeight: 300, color: '#fff', letterSpacing: '-.4px', lineHeight: 1 }}>{s.v}</div>
          <div style={{ fontSize: 9, fontWeight: 400, letterSpacing: '.06em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,.38)', marginTop: 3 }}>{s.l}</div>
        </div>
      ))}
    </div>
  </div>
);

const days = [
  { name: 'Mon', num: '14' },
  { name: 'Tue', num: '15' },
  { name: 'Wed', num: '16' },
  { name: 'Thu', num: '17' },
  { name: 'Fri', num: '18' },
];

const DaySelector = ({ activeIdx }: { activeIdx: number }) => (
  <div style={{ padding: '16px 16px 0' }}>
    <div style={{ display: 'flex', gap: 7 }}>
      {days.map((d, i) => {
        const isActive = i === activeIdx;
        return (
          <div key={d.name} style={{ display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: 3, padding: '10px 12px', borderRadius: 16, background: isActive ? 'linear-gradient(140deg,#28396c,#334880)' : '#fff', border: isActive ? 'none' : '.5px solid rgba(40,57,108,.07)', flex: 1, boxShadow: isActive ? '0 4px 16px rgba(40,57,108,.28)' : '0 1px 4px rgba(40,57,108,.05)', transform: isActive ? 'scale(1.04)' : 'none' }}>
            <div style={{ fontSize: 10, fontWeight: 300, letterSpacing: '.06em', textTransform: 'uppercase' as const, color: isActive ? 'rgba(255,255,255,.7)' : '#8892b0' }}>{d.name}</div>
            <div style={{ fontSize: 15, fontWeight: 300, color: isActive ? '#fff' : '#1a2340', letterSpacing: '-.2px', lineHeight: 1 }}>{d.num}</div>
            {isActive && <div style={{ fontSize: 8, fontWeight: 300, letterSpacing: '.06em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,.6)', marginTop: 1 }}>Today</div>}
            {isActive && <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#2ebc71', boxShadow: '0 0 0 2px rgba(46,188,113,.25)', marginTop: 2 }} />}
          </div>
        );
      })}
    </div>
  </div>
);

/* ═══ SCREEN 1: Timetable — No Classes ═══ */
export const TimetableEmpty = () => (
  <div className="sp-wrap">
    <div className="sp-label">Timetable — No Classes</div>
    <div className="sp">
      <div className="sp-di" />
      <div className="sp-scroll">
        <SPHeader />
        <HeroBanner todayCount={0} />
        <DaySelector activeIdx={2} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 20px 0' }}>
          <div style={{ fontSize: 20, fontWeight: 300, color: '#1a2340', letterSpacing: '-.4px' }}>Wednesday</div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '4px 10px', borderRadius: 100, background: 'rgba(40,57,108,.09)', border: '.5px solid rgba(40,57,108,.14)', fontSize: 10, fontWeight: 300, color: '#28396c' }}>0 Periods</div>
        </div>
        {/* Empty state */}
        <div style={{ margin: '16px 16px 0', background: '#fff', borderRadius: 24, padding: '44px 28px', display: 'flex', flexDirection: 'column' as const, alignItems: 'center', boxShadow: '0 0 0 .5px rgba(40,57,108,.06), 0 2px 8px rgba(40,57,108,.06), 0 10px 28px rgba(40,57,108,.08)', border: '.5px solid rgba(40,57,108,.07)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -50, left: '50%', transform: 'translateX(-50%)', width: 200, height: 160, background: 'radial-gradient(ellipse,rgba(40,57,108,.04) 0%,transparent 70%)' }} />
          <div style={{ width: 72, height: 72, borderRadius: 22, background: 'linear-gradient(140deg,#f5efe2,#ede5d4)', border: '.5px solid rgba(40,57,108,.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16, boxShadow: '0 4px 20px rgba(40,57,108,.08), 0 0 0 6px rgba(40,57,108,.04)', position: 'relative', zIndex: 1 }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#28396c" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity=".55"><rect x="3" y="4" width="18" height="18" rx="3" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /><line x1="9" y1="15" x2="15" y2="15" /></svg>
          </div>
          <div style={{ fontSize: 16, fontWeight: 300, color: '#1a2340', letterSpacing: '-.3px', marginBottom: 6, textAlign: 'center' as const }}>No Classes Today</div>
          <div style={{ fontSize: 13, color: '#8892b0', textAlign: 'center' as const, lineHeight: 1.55 }}>Wednesday is a free day.<br />Take time to rest and review your notes.</div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '7px 14px', borderRadius: 100, background: 'rgba(46,188,113,.11)', border: '.5px solid rgba(46,188,113,.2)', fontSize: 12, fontWeight: 300, color: '#2ebc71', marginTop: 14 }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
            Enjoy your day off!
          </div>
        </div>
        <div style={{ height: 20 }} />
      </div>
      <SPTabBar />
    </div>
  </div>
);

/* ═══ SCREEN 2: Timetable — With Classes ═══ */
export const TimetableWithClasses = () => (
  <div className="sp-wrap">
    <div className="sp-label">Timetable — With Classes</div>
    <div className="sp">
      <div className="sp-di" />
      <div className="sp-scroll">
        <SPHeader />
        <HeroBanner todayCount={2} />
        <DaySelector activeIdx={0} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 20px 0' }}>
          <div style={{ fontSize: 20, fontWeight: 300, color: '#1a2340', letterSpacing: '-.4px' }}>Monday</div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '4px 10px', borderRadius: 100, background: 'rgba(40,57,108,.09)', border: '.5px solid rgba(40,57,108,.14)', fontSize: 10, fontWeight: 300, color: '#28396c' }}>2 Periods</div>
        </div>

        {/* Period cards */}
        <div style={{ margin: '10px 16px 0', background: '#fff', borderRadius: 18, overflow: 'hidden', boxShadow: '0 0 0 .5px rgba(40,57,108,.06), 0 2px 8px rgba(40,57,108,.06), 0 10px 28px rgba(40,57,108,.08)', border: '.5px solid rgba(40,57,108,.07)' }}>
          {[
            { color: 'linear-gradient(180deg,#28396c,#334880)', subject: 'Class', teacher: 'Jamal Sir · Shaik sir', room: 'R1', roomBg: 'rgba(40,57,108,.09)', roomColor: '#28396c', roomBdr: 'rgba(40,57,108,.14)' },
            { color: 'linear-gradient(180deg,#1a6b8a,#2a9bbf)', subject: 'Islamic Read', teacher: 'Pasha Sir', room: 'R2', roomBg: 'rgba(26,107,138,.1)', roomColor: '#1a6b8a', roomBdr: 'rgba(26,107,138,.2)' },
          ].map((p, i) => (
            <div key={p.subject} style={{ display: 'flex', alignItems: 'stretch', borderBottom: i === 0 ? '.5px solid rgba(40,57,108,.07)' : 'none' }}>
              <div style={{ width: 4, flexShrink: 0, background: p.color }} />
              <div style={{ flex: 1, padding: '13px 14px', display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ minWidth: 44, flexShrink: 0, textAlign: 'center' as const }}>
                  <div style={{ fontSize: 12, fontWeight: 300, color: '#1a2340', letterSpacing: '-.1px' }}>8:30</div>
                  <div style={{ fontSize: 10, color: '#c0c8dc', marginTop: 1 }}>9:30 AM</div>
                </div>
                <div style={{ width: '.5px', background: 'rgba(40,57,108,.07)', alignSelf: 'stretch', flexShrink: 0 }} />
                <div style={{ flex: 1, paddingLeft: 10 }}>
                  <div style={{ fontSize: 14, fontWeight: 300, color: '#1a2340', letterSpacing: '-.1px' }}>{p.subject}</div>
                  <div style={{ fontSize: 11, color: '#8892b0', marginTop: 2 }}>{p.teacher}</div>
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'center', padding: '3px 9px', borderRadius: 100, fontSize: 10, fontWeight: 400, background: p.roomBg, color: p.roomColor, border: `.5px solid ${p.roomBdr}`, flexShrink: 0 }}>{p.room}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Week progress */}
        <div style={{ margin: '12px 16px 0', background: '#fff', borderRadius: 18, padding: '14px 16px', boxShadow: '0 0 0 .5px rgba(40,57,108,.06), 0 2px 8px rgba(40,57,108,.06), 0 10px 28px rgba(40,57,108,.08)', border: '.5px solid rgba(40,57,108,.07)' }}>
          <div style={{ fontSize: 10, fontWeight: 300, letterSpacing: '.08em', textTransform: 'uppercase' as const, color: '#c0c8dc', marginBottom: 12 }}>This Week</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 5 }}>
            {[
              { d: 'Mon', lbl: 'Today', type: 'today' },
              { d: 'Tue', lbl: '2 cls', type: 'future' },
              { d: 'Wed', lbl: 'Free', type: 'future' },
              { d: 'Thu', lbl: '2 cls', type: 'future' },
              { d: 'Fri', lbl: 'Free', type: 'future' },
            ].map((w) => (
              <div key={w.d} style={{ display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: 5 }}>
                <div style={{ width: 30, height: 30, borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 300, letterSpacing: '.04em', textTransform: 'uppercase' as const, ...(w.type === 'today' ? { background: '#28396c', color: '#fff', boxShadow: '0 3px 10px rgba(40,57,108,.25)' } : { background: '#f5efe2', color: '#c0c8dc', border: '.5px solid rgba(40,57,108,.07)' }) }}>{w.d}</div>
                <div style={{ fontSize: 8, color: '#c0c8dc', fontWeight: 400 }}>{w.lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming dark card */}
        <div style={{ margin: '12px 16px 0', background: 'linear-gradient(135deg,#28396c,#1e2d57)', borderRadius: 18, padding: '16px 16px', position: 'relative', overflow: 'hidden', boxShadow: '0 6px 24px rgba(40,57,108,.22)' }}>
          <div style={{ position: 'absolute', top: -24, right: -16, width: 110, height: 110, background: 'radial-gradient(circle,rgba(255,255,255,.07) 0%,transparent 70%)', borderRadius: '50%' }} />
          <div style={{ fontSize: 9, fontWeight: 300, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,.45)', marginBottom: 12, position: 'relative', zIndex: 1 }}>Upcoming Classes</div>
          {[
            { day: 'Tue', subject: 'Class · Shaik sir', time: '08:30 – 09:30 AM · Jamal Sir' },
            { day: 'Thu', subject: 'Islamic Read', time: '08:30 – 09:30 AM · Pasha Sir' },
          ].map((u, i) => (
            <div key={u.day} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: i === 0 ? '.5px solid rgba(255,255,255,.07)' : 'none', position: 'relative', zIndex: 1 }}>
              <div style={{ width: 32, height: 32, borderRadius: 10, background: 'rgba(255,255,255,.1)', border: '.5px solid rgba(255,255,255,.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 300, color: 'rgba(255,255,255,.7)', flexShrink: 0, textTransform: 'uppercase' as const }}>{u.day}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 400, color: '#fff', letterSpacing: '-.1px' }}>{u.subject}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,.45)', marginTop: 2 }}>{u.time}</div>
              </div>
              <div style={{ padding: '3px 8px', borderRadius: 100, fontSize: 10, fontWeight: 300, background: 'rgba(255,255,255,.1)', color: 'rgba(255,255,255,.6)', border: '.5px solid rgba(255,255,255,.1)' }}>1</div>
            </div>
          ))}
        </div>
        <div style={{ height: 20 }} />
      </div>
      <SPTabBar />
    </div>
  </div>
);
