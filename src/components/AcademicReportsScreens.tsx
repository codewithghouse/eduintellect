const SPTabBar = () => (
  <div className="sp-tabbar">
    {['Home', 'Tests', 'Progress', 'Alerts', 'Messages'].map((t, i) => (
      <div key={t} className={`sp-ti ${i === 2 ? 'act' : ''}`}>
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

const PageHead = () => (
  <div style={{ padding: '16px 20px 0' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 5 }}>
      <div style={{ fontSize: 24, fontWeight: 300, color: '#1a2340', letterSpacing: '-.6px' }}>Academic Reports</div>
      <div style={{ width: 30, height: 30, borderRadius: 10, background: 'rgba(40,57,108,.08)', border: '.5px solid rgba(40,57,108,.13)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#28396C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>
      </div>
    </div>
    <div style={{ fontSize: 8, fontWeight: 300, letterSpacing: '.12em', textTransform: 'uppercase' as const, color: 'rgba(40,57,108,.38)' }}>Authorized Academic Intelligence &amp; Documentation Pipeline</div>
  </div>
);

type ReportCardProps = {
  title: string;
  time: string;
  iconBg: string;
  iconShadow: string;
  icon: React.ReactNode;
  format: 'PDF' | 'Excel';
};

const ReportCard = ({ title, time, iconBg, iconShadow, icon, format }: ReportCardProps) => (
  <div style={{ margin: '12px 16px 0', background: '#fff', borderRadius: 22, boxShadow: '0 0 0 .5px rgba(40,57,108,.08), 0 4px 18px rgba(40,57,108,.09), 0 24px 56px rgba(40,57,108,.13)', border: '.5px solid rgba(40,57,108,.06)', overflow: 'hidden', position: 'relative' }}>
    <div style={{ position: 'absolute', top: -36, right: -18, width: 130, height: 130, background: 'radial-gradient(circle,rgba(40,57,108,.05) 0%,transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

    {/* Top section */}
    <div style={{ padding: '16px 18px 14px', display: 'flex', alignItems: 'flex-start', gap: 12, borderBottom: '.5px solid rgba(40,57,108,.07)' }}>
      <div style={{ width: 42, height: 42, borderRadius: 14, background: iconBg, boxShadow: iconShadow, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(255,255,255,.15) 0%,transparent 55%)' }} />
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 14, fontWeight: 300, color: '#1a2340', letterSpacing: '-.3px', lineHeight: 1.25, marginBottom: 6 }}>{title}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: 9, fontWeight: 300, color: '#8892b0', letterSpacing: '.04em', textTransform: 'uppercase' as const }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
            Faculty
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: 9, fontWeight: 300, color: '#8892b0', letterSpacing: '.04em', textTransform: 'uppercase' as const }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
            {time}
          </div>
        </div>
      </div>
    </div>

    {/* Quote section */}
    <div style={{ padding: '14px 18px', background: '#f5efe2', borderBottom: '.5px solid rgba(40,57,108,.07)', position: 'relative' }}>
      <div style={{ position: 'absolute', left: 18, top: 14, width: 3, height: 'calc(100% - 28px)', background: 'linear-gradient(180deg,#334880,#3d5494)', borderRadius: 2 }} />
      <div style={{ fontSize: 11, color: '#4a5578', lineHeight: 1.7, fontStyle: 'italic', paddingLeft: 13, fontWeight: 400, letterSpacing: '-.1px' }}>"Institutional assessment data compiled by the academic department. This document contains verified academic standing and behavioral metrics."</div>
    </div>

    {/* Bottom actions */}
    <div style={{ padding: '12px 18px', display: 'flex', alignItems: 'center', gap: 9 }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '5px 10px', borderRadius: 100, background: 'linear-gradient(135deg,#5b6fd4,#4a5cc8)', fontSize: 10, fontWeight: 300, color: '#fff', letterSpacing: '.04em', boxShadow: '0 2px 8px rgba(91,111,212,.28)', flexShrink: 0 }}>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>
        Verified
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 1, flex: 1 }}>
        <div style={{ fontSize: 8, fontWeight: 300, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: '#c0c8dc' }}>Format</div>
        <div style={{ fontSize: 11, fontWeight: 300, color: '#4a5578' }}>{format}</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 15px', background: 'linear-gradient(135deg,#28396c,#1e2d57)', borderRadius: 12, fontSize: 11, fontWeight: 300, color: '#fff', boxShadow: '0 4px 14px rgba(40,57,108,.25)', flexShrink: 0, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(255,255,255,.1) 0%,transparent 55%)' }} />
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" style={{ position: 'relative', zIndex: 1 }}><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
        <span style={{ position: 'relative', zIndex: 1 }}>Download</span>
      </div>
    </div>
  </div>
);

/* ═══════════════════════════════════════════
   SCREEN 1 — REPORTS LIST
═══════════════════════════════════════════ */
export const AcademicReportsList = () => (
  <div className="sp-wrap">
    <div className="sp-label">Academic Reports</div>
    <div className="sp">
      <div className="sp-di" />
      <div className="sp-scroll">
        <SPHeader />
        <PageHead />

        {/* Search */}
        <div style={{ margin: '12px 16px 0', position: 'relative' }}>
          <div style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)' }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C0C8DC" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
          </div>
          <div style={{ width: '100%', padding: '12px 14px 12px 38px', background: '#fff', borderRadius: 14, border: '.5px solid rgba(40,57,108,.07)', fontSize: 12, color: '#c0c8dc', boxShadow: '0 0 0 .5px rgba(40,57,108,.06), 0 2px 8px rgba(40,57,108,.06)' }}>
            Search documents...
          </div>
        </div>

        <ReportCard
          title="Parent Communication — April 2026"
          time="Apr 3, 01:26 PM"
          iconBg="linear-gradient(140deg,#5b6fd4,#4a5cc8)"
          iconShadow="0 4px 14px rgba(91,111,212,.28)"
          icon={<><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></>}
          format="PDF"
        />
        <ReportCard
          title="Class Performance — April 2026"
          time="Apr 3, 01:21 PM"
          iconBg="linear-gradient(140deg,#1e2d57,#3d5494)"
          iconShadow="0 4px 14px rgba(40,57,108,.28)"
          icon={<><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></>}
          format="PDF"
        />
        <ReportCard
          title="Student Progress — April 2026"
          time="Apr 3, 01:14 PM"
          iconBg="linear-gradient(140deg,#1A6B50,#2EBC71)"
          iconShadow="0 4px 14px rgba(46,188,113,.28)"
          icon={<><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></>}
          format="Excel"
        />

        <div style={{ height: 20 }} />
      </div>
      <SPTabBar />
    </div>
  </div>
);

/* ═══════════════════════════════════════════
   SCREEN 2 — DOCUMENT POLICY
═══════════════════════════════════════════ */
export const AcademicReportsPolicy = () => (
  <div className="sp-wrap">
    <div className="sp-label">Document Policy</div>
    <div className="sp">
      <div className="sp-di" />
      <div className="sp-scroll">
        <SPHeader />
        <PageHead />

        <ReportCard
          title="Student Progress — April 2026"
          time="Apr 3, 01:14 PM"
          iconBg="linear-gradient(140deg,#1A6B50,#2EBC71)"
          iconShadow="0 4px 14px rgba(46,188,113,.28)"
          icon={<><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></>}
          format="Excel"
        />

        {/* Section Label */}
        <div style={{ fontSize: 9, fontWeight: 300, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: 'rgba(40,57,108,.35)', padding: '18px 20px 0', display: 'flex', alignItems: 'center', gap: 8 }}>
          Document Policy<div style={{ flex: 1, height: '.5px', background: 'rgba(40,57,108,.13)' }} />
        </div>

        {/* Policy Card */}
        <div style={{ margin: '12px 16px 0', background: 'linear-gradient(140deg,#28396c 0%,#334880 60%,#3A5090 100%)', borderRadius: 22, padding: '22px 20px', position: 'relative', overflow: 'hidden', boxShadow: '0 0 0 .5px rgba(40,57,108,.08), 0 4px 18px rgba(40,57,108,.09), 0 24px 56px rgba(40,57,108,.13)' }}>
          <div style={{ position: 'absolute', top: -40, right: -24, width: 170, height: 170, background: 'radial-gradient(circle,rgba(255,255,255,.09) 0%,transparent 65%)', borderRadius: '50%', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: -30, left: -10, width: 140, height: 140, background: 'radial-gradient(circle,rgba(255,255,255,.06) 0%,transparent 65%)', borderRadius: '50%', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,.016) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.016) 1px,transparent 1px)', backgroundSize: '22px 22px', pointerEvents: 'none' }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: 9, fontWeight: 300, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.45)', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 7 }}>
              Infrastructure Policy<div style={{ flex: 1, height: '.5px', background: 'rgba(255,255,255,.1)' }} />
            </div>
            <div style={{ fontSize: 20, fontWeight: 300, color: '#fff', letterSpacing: '-.5px', lineHeight: 1.2, marginBottom: 12 }}>Document Infrastructure Policy</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,.65)', lineHeight: 1.7, fontWeight: 400, letterSpacing: '-.1px', marginBottom: 18 }}>
              Academic reports are generated by the instructional faculty and mirrored to the parent portal for peak transparency. Each document is <strong style={{ color: 'rgba(255,255,255,.9)', fontWeight: 400 }}>cryptographically verified</strong> to ensure record integrity and authenticity.
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'rgba(255,255,255,.08)', borderRadius: 14, overflow: 'hidden' }}>
              {[
                { lbl: 'Retention', val: '30 Days', icon: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></> },
                { lbl: 'Sync Status', val: 'Direct Active', icon: <><polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 102.13-9.36L1 10" /></> },
                { lbl: 'Verification', val: 'Cryptographic', icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></> },
                { lbl: 'Access', val: 'Parent Only', icon: <><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></> },
              ].map(s => (
                <div key={s.lbl} style={{ background: 'rgba(255,255,255,.05)', padding: '12px 13px', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 26, height: 26, borderRadius: 8, background: 'rgba(255,255,255,.1)', border: '.5px solid rgba(255,255,255,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.75)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">{s.icon}</svg>
                  </div>
                  <div>
                    <div style={{ fontSize: 8, fontWeight: 300, letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,.38)' }}>{s.lbl}</div>
                    <div style={{ fontSize: 12, fontWeight: 300, color: '#fff', letterSpacing: '-.1px', marginTop: 1 }}>{s.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Info note */}
        <div style={{ margin: '12px 16px 0', background: 'rgba(40,57,108,.08)', borderRadius: 14, padding: '12px 14px', border: '.5px solid rgba(40,57,108,.13)', display: 'flex', alignItems: 'flex-start', gap: 9 }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#28396C" strokeWidth="2" strokeLinecap="round" style={{ flexShrink: 0, marginTop: 1 }}><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
          <div style={{ fontSize: 11, color: '#4a5578', lineHeight: 1.6, fontWeight: 400 }}>All documents are automatically archived after 30 days. Contact your faculty for older reports or reissuance requests.</div>
        </div>

        <div style={{ height: 20 }} />
      </div>
      <SPTabBar />
    </div>
  </div>
);
