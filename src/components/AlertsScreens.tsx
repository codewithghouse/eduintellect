const SPTabBar = ({ badge = 4 }: { badge?: number }) => (
  <div className="sp-tabbar">
    {['Home', 'Tests', 'Progress', 'Alerts', 'Messages'].map((t, i) => (
      <div key={t} className={`sp-ti ${i === 3 ? 'act' : ''}`} style={{ position: 'relative' }}>
        <svg viewBox="0 0 24 24" style={{ position: 'relative' }}>
          {i === 0 && <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><path d="M9 22V12h6v10" /></>}
          {i === 1 && <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6" /></>}
          {i === 2 && <><path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20V14" /></>}
          {i === 3 && <><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" /></>}
          {i === 4 && <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />}
        </svg>
        {i === 3 && (
          <span style={{ position: 'absolute', top: -5, right: 'calc(50% - 16px)', minWidth: 14, height: 14, background: '#e85555', borderRadius: 7, fontSize: 9, fontWeight: 700, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 2px', border: '1.5px solid rgba(253,250,244,.92)' }}>{badge}</span>
        )}
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

const PageHead = ({ newCount }: { newCount: number }) => (
  <div style={{ padding: '16px 20px 0' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 3 }}>
      <div style={{ fontSize: 23, fontWeight: 700, color: '#1a2340', letterSpacing: '-.6px' }}>Alerts &amp; Notifications</div>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '4px 10px', borderRadius: 100, background: 'linear-gradient(135deg,#e85555,#C83030)', fontSize: 10, fontWeight: 700, color: '#fff', boxShadow: '0 2px 8px rgba(232,85,85,.3)', letterSpacing: '.04em' }}>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
        {newCount} New
      </div>
    </div>
    <div style={{ fontSize: 12, color: '#8892b0', fontWeight: 400, marginTop: 1 }}>Stay updated with your child's activities</div>
  </div>
);

const MarkAllRead = () => (
  <div style={{ margin: '12px 16px 0', background: '#fff', borderRadius: 14, padding: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, fontSize: 13, fontWeight: 700, color: '#28396c', boxShadow: '0 0 0 .5px rgba(40,57,108,.06), 0 2px 8px rgba(40,57,108,.06)', border: '.5px solid rgba(40,57,108,.13)' }}>
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#28396C" strokeWidth="2.2" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
    Mark All Read
  </div>
);

const FilterTabs = ({ activeKey }: { activeKey: string }) => {
  const tabs = [
    { key: 'all', label: 'All (4)' },
    { key: 'academic', label: 'Academic (1)' },
    { key: 'attendance', label: 'Attendance (0)' },
    { key: 'general', label: 'General (3)' },
    { key: 'urgent', label: 'Urgent (0)' },
  ];
  return (
    <div style={{ display: 'flex', gap: 6, padding: '12px 16px 0', overflowX: 'auto', scrollbarWidth: 'none' as const }}>
      {tabs.map(t => {
        const act = t.key === activeKey;
        return (
          <div key={t.key} style={{
            padding: '7px 13px', borderRadius: 12,
            fontSize: 11, fontWeight: 700, whiteSpace: 'nowrap' as const, flexShrink: 0,
            background: act ? 'linear-gradient(135deg,#28396c,#334880)' : '#fff',
            color: act ? '#fff' : '#4a5578',
            border: act ? '.5px solid transparent' : '.5px solid rgba(40,57,108,.08)',
            boxShadow: act ? '0 3px 12px rgba(40,57,108,.22)' : '0 1px 4px rgba(40,57,108,.05)',
          }}>{t.label}</div>
        );
      })}
    </div>
  );
};

const SecLbl = ({ children }: { children: React.ReactNode }) => (
  <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: 'rgba(40,57,108,.35)', padding: '16px 20px 0', display: 'flex', alignItems: 'center', gap: 8 }}>
    {children}<div style={{ flex: 1, height: '.5px', background: 'rgba(40,57,108,.13)' }} />
  </div>
);

type AlertCardProps = {
  accentGradient: string;
  iconBg: string;
  iconBdr: string;
  iconStroke: string;
  icon: React.ReactNode;
  title: string;
  priority?: { label: string; bg: string; color: string; bdr: string };
  categoryLabel?: string;
  categoryColor?: string;
  categoryBg?: string;
  categoryBdr?: string;
  body: React.ReactNode;
  date: React.ReactNode;
  dateIcon?: React.ReactNode;
  primaryBtn: { label: string; bg: string; shadow: string; icon: React.ReactNode };
  showUnreadDot?: boolean;
  unreadDotColor?: string;
  cardStyle?: React.CSSProperties;
};

const AlertCard = ({ accentGradient, iconBg, iconBdr, iconStroke, icon, title, priority, categoryLabel = 'General', categoryColor, categoryBg, categoryBdr, body, date, dateIcon, primaryBtn, showUnreadDot, unreadDotColor = '#e85555', cardStyle }: AlertCardProps) => (
  <div style={{ margin: '10px 16px 0', background: '#fff', borderRadius: 20, boxShadow: '0 0 0 .5px rgba(40,57,108,.06), 0 2px 8px rgba(40,57,108,.06), 0 10px 28px rgba(40,57,108,.08)', border: '.5px solid rgba(40,57,108,.06)', overflow: 'hidden', position: 'relative', ...cardStyle }}>
    {/* Accent bar */}
    <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: accentGradient, borderRadius: '4px 0 0 4px' }} />

    {/* Content */}
    <div style={{ padding: '14px 16px 14px 20px' }}>
      {/* Top: icon + info */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 11, marginBottom: 10 }}>
        <div style={{ width: 38, height: 38, borderRadius: 12, background: iconBg, border: `.5px solid ${iconBdr}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={iconStroke} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', marginBottom: 5 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#1a2340', letterSpacing: '-.2px' }}>{title}</div>
            {priority && (
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 3, padding: '2px 8px', borderRadius: 100, fontSize: 9, fontWeight: 700, background: priority.bg, color: priority.color, border: `.5px solid ${priority.bdr}`, letterSpacing: '.03em' }}>
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  {priority.label === 'Good News' ? <><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></> : <><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></>}
                </svg>
                {priority.label}
              </div>
            )}
            <div style={{ padding: '2px 8px', borderRadius: 100, fontSize: 9, fontWeight: 600, background: categoryBg || 'rgba(40,57,108,.08)', color: categoryColor || '#28396c', border: `.5px solid ${categoryBdr || 'rgba(40,57,108,.13)'}` }}>{categoryLabel}</div>
            {showUnreadDot && <div style={{ width: 6, height: 6, background: unreadDotColor, borderRadius: '50%', marginLeft: 'auto', flexShrink: 0, boxShadow: `0 0 0 2px ${unreadDotColor}33` }} />}
          </div>
          <div style={{ fontSize: 12, color: '#4a5578', lineHeight: 1.6, fontWeight: 400, letterSpacing: '-.1px', marginBottom: 7 }}>{body}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 10, color: '#c0c8dc', fontWeight: 500 }}>
            {dateIcon || <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#C0C8DC" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="3" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>}
            {date}
          </div>
        </div>
      </div>

      {/* Recommended Actions label */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 8, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: 'rgba(40,57,108,.35)', marginBottom: 9 }}>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(40,57,108,.35)" strokeWidth="2.2" strokeLinecap="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
        Recommended Actions
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: 8 }}>
        <div style={{ flex: 1, padding: '10px 12px', borderRadius: 11, fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, color: '#fff', background: primaryBtn.bg, boxShadow: primaryBtn.shadow }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">{primaryBtn.icon}</svg>
          {primaryBtn.label}
        </div>
        <div style={{ flex: 1, padding: '10px 12px', borderRadius: 11, fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, color: '#4a5578', background: '#f5efe2', border: '.5px solid rgba(40,57,108,.07)' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
          Acknowledge
        </div>
      </div>
    </div>
  </div>
);

/* ═══════════════════════════════════════════
   SCREEN 1 — ALL ALERTS
═══════════════════════════════════════════ */
export const AlertsAll = () => {
  const orangeAccent = 'linear-gradient(180deg,#F59C2A,#E88010)';
  const navyAccent = 'linear-gradient(180deg,#28396c,#334880)';
  const greenAccent = 'linear-gradient(180deg,#1e9a5a,#2ebc71)';
  const calIcon = <><rect x="3" y="4" width="18" height="18" rx="3" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></>;
  const mediumPriority = { label: 'Medium', bg: 'rgba(245,156,42,.1)', color: '#C07A10', bdr: 'rgba(245,156,42,.2)' };
  const goodNewsPriority = { label: 'Good News', bg: 'rgba(46,188,113,.1)', color: '#1e9a5a', bdr: 'rgba(46,188,113,.2)' };
  const replyBtn = { label: 'Reply to Teacher', bg: 'linear-gradient(135deg,#28396c,#334880)', shadow: '0 3px 10px rgba(40,57,108,.2)', icon: <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /> };
  const viewPerfBtn = { label: 'View Performance', bg: 'linear-gradient(135deg,#1e9a5a,#2ebc71)', shadow: '0 3px 10px rgba(46,188,113,.28)', icon: <><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></> };

  return (
    <div className="sp-wrap">
      <div className="sp-label">Alerts — All</div>
      <div className="sp">
        <div className="sp-di" />
        <div className="sp-scroll">
          <SPHeader />
          <PageHead newCount={4} />
          <MarkAllRead />
          <FilterTabs activeKey="all" />

          <SecLbl>Recent</SecLbl>

          <AlertCard
            accentGradient={orangeAccent}
            iconBg="rgba(245,156,42,.1)" iconBdr="rgba(245,156,42,.2)" iconStroke="#F59C2A"
            icon={calIcon}
            title="Teacher Note"
            priority={mediumPriority}
            body="A note from your teacher — please check the class announcements for this week."
            date="Apr 1, 2026"
            primaryBtn={replyBtn}
          />

          <AlertCard
            accentGradient={orangeAccent}
            iconBg="rgba(245,156,42,.1)" iconBdr="rgba(245,156,42,.2)" iconStroke="#F59C2A"
            icon={calIcon}
            title="Teacher Note"
            priority={mediumPriority}
            body="A note from your teacher — homework submission reminder for this week."
            date="Apr 1, 2026"
            primaryBtn={replyBtn}
          />

          <AlertCard
            accentGradient={navyAccent}
            iconBg="rgba(40,57,108,.08)" iconBdr="rgba(40,57,108,.13)" iconStroke="#28396C"
            icon={<><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></>}
            title="Teacher Note"
            priority={mediumPriority}
            body="A note from your teacher regarding upcoming assessments."
            date="Apr 1, 2026"
            primaryBtn={replyBtn}
            showUnreadDot={true}
            cardStyle={{ borderColor: 'rgba(40,57,108,.13)' }}
          />

          {/* Good News */}
          <AlertCard
            accentGradient={greenAccent}
            iconBg="rgba(46,188,113,.1)" iconBdr="rgba(46,188,113,.2)" iconStroke="#2EBC71"
            icon={<><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" /></>}
            title="Excellent in a subject! 🎉"
            priority={goodNewsPriority}
            categoryLabel="Academic"
            categoryBg="rgba(91,111,212,.1)" categoryColor="#5b6fd4" categoryBdr="rgba(91,111,212,.2)"
            body={<>Tanveer Sultana scored an impressive <strong style={{ color: '#1e9a5a', fontWeight: 700 }}>89%</strong> in "Unit 1". Hard work is clearly paying off — keep encouraging this momentum!</>}
            date="Recent"
            dateIcon={<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#C0C8DC" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>}
            primaryBtn={viewPerfBtn}
            cardStyle={{ background: 'linear-gradient(135deg,rgba(46,188,113,.04),rgba(46,188,113,.02))', borderColor: 'rgba(46,188,113,.2)' }}
          />

          <div style={{ height: 20 }} />
        </div>
        <SPTabBar badge={4} />
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════
   SCREEN 2 — ACADEMIC HIGHLIGHT
═══════════════════════════════════════════ */
export const AlertsAcademic = () => {
  const orangeAccent = 'linear-gradient(180deg,#F59C2A,#E88010)';
  const greenAccent = 'linear-gradient(180deg,#1e9a5a,#2ebc71)';
  const calIcon = <><rect x="3" y="4" width="18" height="18" rx="3" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></>;
  const mediumPriority = { label: 'Medium', bg: 'rgba(245,156,42,.1)', color: '#C07A10', bdr: 'rgba(245,156,42,.2)' };
  const goodNewsPriority = { label: 'Good News', bg: 'rgba(46,188,113,.1)', color: '#1e9a5a', bdr: 'rgba(46,188,113,.2)' };
  const replyBtn = { label: 'Reply to Teacher', bg: 'linear-gradient(135deg,#28396c,#334880)', shadow: '0 3px 10px rgba(40,57,108,.2)', icon: <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /> };
  const viewPerfBtn = { label: 'View Full Performance', bg: 'linear-gradient(135deg,#1e9a5a,#2ebc71)', shadow: '0 3px 10px rgba(46,188,113,.28)', icon: <><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></> };

  return (
    <div className="sp-wrap">
      <div className="sp-label">Academic Alerts</div>
      <div className="sp">
        <div className="sp-di" />
        <div className="sp-scroll">
          <SPHeader />
          <PageHead newCount={1} />
          <MarkAllRead />
          <FilterTabs activeKey="academic" />

          <SecLbl>Academic Highlights</SecLbl>

          <AlertCard
            accentGradient={greenAccent}
            iconBg="rgba(46,188,113,.1)" iconBdr="rgba(46,188,113,.2)" iconStroke="#2EBC71"
            icon={<><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" /></>}
            title="Excellent in a subject! 🎉"
            priority={goodNewsPriority}
            categoryLabel="Academic"
            categoryBg="rgba(91,111,212,.1)" categoryColor="#5b6fd4" categoryBdr="rgba(91,111,212,.2)"
            body={<>Tanveer Sultana scored an impressive <strong style={{ color: '#1e9a5a', fontWeight: 700 }}>89%</strong> in "Unit 1" (a subject). Hard work is clearly paying off — keep encouraging this momentum!</>}
            date="Recent"
            dateIcon={<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#C0C8DC" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>}
            primaryBtn={viewPerfBtn}
            showUnreadDot
            unreadDotColor="#2ebc71"
            cardStyle={{ background: 'linear-gradient(135deg,rgba(46,188,113,.04),rgba(46,188,113,.02))', borderColor: 'rgba(46,188,113,.2)' }}
          />

          <SecLbl>General</SecLbl>

          <AlertCard
            accentGradient={orangeAccent}
            iconBg="rgba(245,156,42,.1)" iconBdr="rgba(245,156,42,.2)" iconStroke="#F59C2A"
            icon={calIcon}
            title="Teacher Note"
            priority={mediumPriority}
            body="A note from your teacher regarding this week's activities."
            date="Apr 1, 2026"
            primaryBtn={replyBtn}
          />

          <div style={{ height: 20 }} />
        </div>
        <SPTabBar badge={4} />
      </div>
    </div>
  );
};
