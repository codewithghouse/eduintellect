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

const Hero = () => (
  <div style={{ margin: '16px 16px 0', borderRadius: 24, background: 'linear-gradient(140deg,#28396c 0%,#334880 60%,#3A5090 100%)', padding: '20px 20px 22px', position: 'relative', overflow: 'hidden', boxShadow: '0 0 0 .5px rgba(40,57,108,.08), 0 4px 18px rgba(40,57,108,.09), 0 24px 56px rgba(40,57,108,.13)' }}>
    <div style={{ position: 'absolute', top: -40, right: -24, width: 170, height: 170, background: 'radial-gradient(circle,rgba(255,255,255,.08) 0%,transparent 65%)', borderRadius: '50%', pointerEvents: 'none' }} />
    <div style={{ position: 'absolute', bottom: -30, left: -10, width: 140, height: 140, background: 'radial-gradient(circle,rgba(255,255,255,.05) 0%,transparent 65%)', borderRadius: '50%', pointerEvents: 'none' }} />
    <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.015) 1px,transparent 1px)', backgroundSize: '22px 22px', pointerEvents: 'none' }} />

    <div style={{ position: 'relative', zIndex: 1 }}>
      <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.45)', marginBottom: 7, display: 'flex', alignItems: 'center', gap: 7 }}>
        Payment Center<div style={{ flex: 1, height: '.5px', background: 'rgba(255,255,255,.1)' }} />
      </div>
      <div style={{ fontSize: 32, fontWeight: 700, color: '#fff', letterSpacing: '-.8px', lineHeight: 1.1, marginBottom: 7 }}>Fee Status</div>
      <div style={{ fontSize: 12, color: 'rgba(255,255,255,.5)', marginBottom: 18, display: 'flex', alignItems: 'center', gap: 6 }}>
        Tanveer Sultana
        <div style={{ width: 4, height: 4, background: 'rgba(255,255,255,.3)', borderRadius: '50%' }} />
        Class 10B
      </div>
      <div style={{ display: 'flex', gap: 6 }}>
        {[
          { label: '2025–26', active: true, icon: <><rect x="1" y="4" width="22" height="16" rx="3" /><line x1="1" y1="10" x2="23" y2="10" /></> },
          { label: 'All Terms', active: false, icon: <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /> },
          { label: 'History', active: false, icon: <><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></> },
        ].map(c => (
          <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '7px 12px', borderRadius: 12, background: c.active ? 'rgba(255,255,255,.18)' : 'rgba(255,255,255,.1)', border: `.5px solid ${c.active ? 'rgba(255,255,255,.3)' : 'rgba(255,255,255,.18)'}`, fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.8)' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">{c.icon}</svg>
            {c.label}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const SumCard = ({ variant, lbl, val, tag, icon, stroke, bg, bdr }: { variant: 'paid' | 'pending' | 'overdue'; lbl: string; val: string; tag: string; icon: React.ReactNode; stroke: string; bg: string; bdr: string }) => {
  const glow = variant === 'paid' ? 'rgba(46,188,113,.16)' : variant === 'pending' ? 'rgba(245,156,42,.14)' : 'rgba(232,85,85,.12)';
  const valColor = variant === 'paid' ? '#1e9a5a' : variant === 'pending' ? '#f59c2a' : '#e85555';
  const tagColor = variant === 'paid' ? '#1e9a5a' : variant === 'pending' ? '#f59c2a' : '#c0c8dc';
  return (
    <div style={{ background: '#fff', borderRadius: 18, padding: '14px 10px', boxShadow: '0 0 0 .5px rgba(40,57,108,.06), 0 2px 8px rgba(40,57,108,.06)', border: '.5px solid rgba(40,57,108,.06)', display: 'flex', flexDirection: 'column', gap: 5, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -16, right: -16, width: 56, height: 56, borderRadius: '50%', background: `radial-gradient(circle,${glow} 0%,transparent 70%)`, opacity: 0.5, pointerEvents: 'none' }} />
      <div style={{ width: 28, height: 28, borderRadius: 9, background: bg, border: `.5px solid ${bdr}`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 3 }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round">{icon}</svg>
      </div>
      <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: '#c0c8dc', lineHeight: 1.3, whiteSpace: 'pre-line' }}>{lbl}</div>
      <div style={{ fontSize: val.length > 4 ? 16 : 20, fontWeight: 700, letterSpacing: '-.5px', lineHeight: 1, color: valColor }}>{val}</div>
      <div style={{ fontSize: 9, fontWeight: 600, marginTop: 1, color: tagColor }}>{tag}</div>
    </div>
  );
};

const ContactStrip = () => (
  <div style={{ margin: '12px 16px 0', background: 'rgba(40,57,108,.08)', borderRadius: 16, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10, border: '.5px solid rgba(40,57,108,.13)' }}>
    <div style={{ width: 34, height: 34, borderRadius: 11, background: '#28396c', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 2px 8px rgba(40,57,108,.22)' }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
    </div>
    <div style={{ flex: 1, fontSize: 11, color: '#4a5578', lineHeight: 1.55 }}>Contact your <strong style={{ color: '#28396c', fontWeight: 700 }}>school administration</strong> for payment queries and fee structure.</div>
    <div style={{ width: 26, height: 26, borderRadius: 8, background: 'rgba(40,57,108,.08)', border: '.5px solid rgba(40,57,108,.13)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#28396C" strokeWidth="2.2" strokeLinecap="round"><polyline points="9 18 15 12 9 6" /></svg>
    </div>
  </div>
);

const SecLbl = ({ children }: { children: React.ReactNode }) => (
  <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: 'rgba(40,57,108,.35)', padding: '16px 20px 0', display: 'flex', alignItems: 'center', gap: 8 }}>
    {children}<div style={{ flex: 1, height: '.5px', background: 'rgba(40,57,108,.13)' }} />
  </div>
);

/* ═══════════════════════════════════════════
   SCREEN 1 — FEE STATUS (EMPTY)
═══════════════════════════════════════════ */
export const FeeStatusEmpty = () => (
  <div className="sp-wrap">
    <div className="sp-label">Fee Status — Empty</div>
    <div className="sp">
      <div className="sp-di" />
      <div className="sp-scroll">
        <SPHeader />
        <Hero />

        {/* Summary Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, margin: '14px 16px 0' }}>
          <SumCard variant="paid" lbl="Total\nPaid" val="₹0" tag="Cleared" stroke="#2EBC71" bg="rgba(46,188,113,.1)" bdr="rgba(46,188,113,.2)" icon={<><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></>} />
          <SumCard variant="pending" lbl="Total\nPending" val="₹0" tag="Awaiting" stroke="#F59C2A" bg="rgba(245,156,42,.1)" bdr="rgba(245,156,42,.2)" icon={<><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>} />
          <SumCard variant="overdue" lbl="Overdue\nDues" val="0" tag="None" stroke="#E85555" bg="rgba(232,85,85,.09)" bdr="rgba(232,85,85,.18)" icon={<><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></>} />
        </div>

        {/* Stat Rows List */}
        <div style={{ margin: '14px 16px 0', background: '#fff', borderRadius: 20, overflow: 'hidden', boxShadow: '0 0 0 .5px rgba(40,57,108,.06), 0 2px 8px rgba(40,57,108,.06)', border: '.5px solid rgba(40,57,108,.06)' }}>
          {[
            { label: 'Total Paid', sub: 'All completed payments', amt: '₹0', chipBg: 'rgba(46,188,113,.1)', chipColor: '#1e9a5a', chipBdr: 'rgba(46,188,113,.2)', chip: 'Cleared ✓', amtColor: '#1e9a5a', stroke: '#2EBC71', iconBg: 'rgba(46,188,113,.1)', iconBdr: 'rgba(46,188,113,.2)', icon: <><rect x="1" y="4" width="22" height="16" rx="3" /><line x1="1" y1="10" x2="23" y2="10" /></> },
            { label: 'Total Pending', sub: 'Due this term', amt: '₹0', chipBg: 'rgba(245,156,42,.1)', chipColor: '#C07A10', chipBdr: 'rgba(245,156,42,.2)', chip: 'Awaiting', amtColor: '#f59c2a', stroke: '#F59C2A', iconBg: 'rgba(245,156,42,.1)', iconBdr: 'rgba(245,156,42,.2)', icon: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></> },
            { label: 'Overdue Dues', sub: 'Past due date', amt: '0', chipBg: 'rgba(46,188,113,.1)', chipColor: '#1e9a5a', chipBdr: 'rgba(46,188,113,.2)', chip: 'All Clear ✓', amtColor: '#e85555', stroke: '#E85555', iconBg: 'rgba(232,85,85,.09)', iconBdr: 'rgba(232,85,85,.18)', icon: <><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></> },
          ].map((r, i, arr) => (
            <div key={r.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '13px 16px', borderBottom: i < arr.length - 1 ? '.5px solid rgba(40,57,108,.07)' : 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                <div style={{ width: 36, height: 36, borderRadius: 11, background: r.iconBg, border: `.5px solid ${r.iconBdr}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={r.stroke} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">{r.icon}</svg>
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: '#1a2340', letterSpacing: '-.2px' }}>{r.label}</div>
                  <div style={{ fontSize: 10, color: '#8892b0', marginTop: 1 }}>{r.sub}</div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 3 }}>
                <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-.4px', color: r.amtColor }}>{r.amt}</div>
                <div style={{ padding: '3px 8px', borderRadius: 100, fontSize: 9, fontWeight: 700, background: r.chipBg, color: r.chipColor, border: `.5px solid ${r.chipBdr}` }}>{r.chip}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Records */}
        <SecLbl>Payment Records</SecLbl>
        <div style={{ margin: '10px 16px 0', background: '#fff', borderRadius: 20, padding: 18, boxShadow: '0 0 0 .5px rgba(40,57,108,.06), 0 2px 8px rgba(40,57,108,.06)', border: '.5px solid rgba(40,57,108,.06)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 11, padding: '28px 18px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: -24, left: '50%', transform: 'translateX(-50%)', width: 200, height: 160, background: 'radial-gradient(ellipse,rgba(40,57,108,.04) 0%,transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ width: 64, height: 64, borderRadius: 20, background: 'linear-gradient(140deg,#f5efe2,#ede5d4)', border: '.5px solid rgba(40,57,108,.13)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 18px rgba(40,57,108,.08), 0 0 0 6px rgba(40,57,108,.04)', position: 'relative', zIndex: 1, marginBottom: 2 }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#28396C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"><rect x="1" y="4" width="22" height="16" rx="3" /><line x1="1" y1="10" x2="23" y2="10" /><line x1="8" y1="15" x2="12" y2="15" /><line x1="15" y1="15" x2="17" y2="15" /></svg>
            </div>
            <div style={{ fontSize: 14, fontWeight: 700, color: '#1a2340', letterSpacing: '-.3px', textAlign: 'center' }}>No Fee Records Found</div>
            <div style={{ fontSize: 12, color: '#8892b0', textAlign: 'center', lineHeight: 1.65, maxWidth: 200 }}>Your school has not added any fee records yet. Check back later.</div>
          </div>
        </div>

        <ContactStrip />
        <div style={{ height: 20 }} />
      </div>
      <SPTabBar />
    </div>
  </div>
);

/* ═══════════════════════════════════════════
   SCREEN 2 — WITH PAYMENT RECORDS
═══════════════════════════════════════════ */
export const FeeStatusFilled = () => (
  <div className="sp-wrap">
    <div className="sp-label">With Payment Records</div>
    <div className="sp">
      <div className="sp-di" />
      <div className="sp-scroll">
        <SPHeader />
        <Hero />

        {/* Summary Grid (with data) */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, margin: '14px 16px 0' }}>
          <SumCard variant="paid" lbl="Total\nPaid" val="₹12,500" tag="Cleared ✓" stroke="#2EBC71" bg="rgba(46,188,113,.1)" bdr="rgba(46,188,113,.2)" icon={<><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></>} />
          <SumCard variant="pending" lbl="Total\nPending" val="₹4,000" tag="Due Soon" stroke="#F59C2A" bg="rgba(245,156,42,.1)" bdr="rgba(245,156,42,.2)" icon={<><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>} />
          <SumCard variant="overdue" lbl="Overdue\nDues" val="0" tag="None" stroke="#E85555" bg="rgba(232,85,85,.09)" bdr="rgba(232,85,85,.18)" icon={<><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></>} />
        </div>

        {/* Payment Records */}
        <SecLbl>Payment Records</SecLbl>
        <div style={{ margin: '10px 16px 0', background: '#fff', borderRadius: 20, padding: 18, boxShadow: '0 0 0 .5px rgba(40,57,108,.06), 0 2px 8px rgba(40,57,108,.06)', border: '.5px solid rgba(40,57,108,.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#1a2340', letterSpacing: '-.3px' }}>All Transactions</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, fontWeight: 600, color: '#28396c' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg>
              Filter
            </div>
          </div>

          {[
            { name: 'Term 1 Tuition Fee', date: 'Apr 5, 2026 · Online Payment', amt: '₹6,500', status: 'Paid', paid: true },
            { name: 'Exam Fee — Term 1', date: 'Mar 20, 2026 · Cash', amt: '₹6,000', status: 'Paid', paid: true },
            { name: 'Term 2 Tuition Fee', date: 'Due: Apr 30, 2026', amt: '₹4,000', status: 'Pending', paid: false },
          ].map((r, i, arr) => {
            const iconBg = r.paid ? 'rgba(46,188,113,.1)' : 'rgba(245,156,42,.1)';
            const iconBdr = r.paid ? 'rgba(46,188,113,.2)' : 'rgba(245,156,42,.2)';
            const iconStroke = r.paid ? '#2EBC71' : '#F59C2A';
            const amtColor = r.paid ? '#1e9a5a' : '#f59c2a';
            const chipBg = r.paid ? 'rgba(46,188,113,.1)' : 'rgba(245,156,42,.1)';
            const chipColor = r.paid ? '#1e9a5a' : '#C07A10';
            const chipBdr = r.paid ? 'rgba(46,188,113,.2)' : 'rgba(245,156,42,.2)';
            return (
              <div key={r.name} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '11px 0', borderBottom: i < arr.length - 1 ? '.5px solid rgba(40,57,108,.07)' : 'none' }}>
                <div style={{ width: 36, height: 36, borderRadius: 11, background: iconBg, border: `.5px solid ${iconBdr}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {r.paid ? (
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={iconStroke} strokeWidth="2.2" strokeLinecap="round"><rect x="1" y="4" width="22" height="16" rx="3" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
                  ) : (
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={iconStroke} strokeWidth="2.2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                  )}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#1a2340', letterSpacing: '-.2px' }}>{r.name}</div>
                  <div style={{ fontSize: 10, color: '#8892b0', marginTop: 2 }}>{r.date}</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 3 }}>
                  <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: '-.3px', color: amtColor }}>{r.amt}</div>
                  <div style={{ padding: '3px 8px', borderRadius: 100, fontSize: 9, fontWeight: 700, background: chipBg, color: chipColor, border: `.5px solid ${chipBdr}` }}>{r.status}</div>
                </div>
              </div>
            );
          })}
        </div>

        <ContactStrip />
        <div style={{ height: 20 }} />
      </div>
      <SPTabBar />
    </div>
  </div>
);
