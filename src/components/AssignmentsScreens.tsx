import React from 'react';

const TabProfile = () => <svg viewBox="0 0 18 18"><circle cx="9" cy="7" r="3" /><path d="M3 17c0 0 1.5-4 6-4s6 4 6 4" /></svg>;
const TabClasses = () => <svg viewBox="0 0 18 18"><rect x="2" y="2" width="5" height="5" rx="1.2" /><rect x="11" y="2" width="5" height="5" rx="1.2" /><rect x="2" y="11" width="5" height="5" rx="1.2" /><rect x="11" y="11" width="5" height="5" rx="1.2" /></svg>;

const AssignTabBar = () => (
  <div className="ph-tab">
    {[
      { label: 'Dashboard', icon: <TabClasses /> },
      { label: 'Attendance', icon: <svg viewBox="0 0 18 18"><polyline points="2.5,8.5 6,12 13.5,4" /></svg> },
      { label: 'Assignments', icon: <svg viewBox="0 0 18 18"><rect x="2" y="2" width="14" height="14" rx="2" /><line x1="5.5" y1="7" x2="12.5" y2="7" /><line x1="5.5" y1="10" x2="10" y2="10" /></svg> },
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

const DarkNav = () => (
  <div style={{ background: '#08090c', padding: '12px 18px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 4, padding: 3 }}>
      <div style={{ height: '1.5px', width: 18, borderRadius: 2, background: 'rgba(255,255,255,.6)' }} />
      <div style={{ height: '1.5px', width: 12, borderRadius: 2, background: 'rgba(255,255,255,.6)' }} />
      <div style={{ height: '1.5px', width: 18, borderRadius: 2, background: 'rgba(255,255,255,.6)' }} />
    </div>
    <div style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,.8)', letterSpacing: '.07em', textTransform: 'uppercase' as const }}>Assignments</div>
    <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#3b5bdb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 500, color: '#fff', border: '2px solid rgba(255,255,255,.15)' }}>JS</div>
  </div>
);

/* ═══ SCREEN 1: Assignments Overview ═══ */
export const AssignmentsOverview = () => (
  <div className="phone-wrap">
    <div className="phone-label">Assignments overview</div>
    <div className="phone">
      <div className="ph-bar" />
      <DarkNav />
      <div style={{ background: '#08090c', padding: '4px 18px 22px' }}>
        <div style={{ fontSize: 22, fontWeight: 500, color: '#fff', letterSpacing: '-.4px', marginBottom: 3 }}>Assignments</div>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,.35)' }}>Create, manage and grade student work.</div>
      </div>

      <div className="ph-body">
        {/* CTA */}
        <div style={{ width: '100%', padding: 13, borderRadius: 13, background: '#3b5bdb', color: '#fff', fontSize: 13, fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7 }}>
          <svg width="14" height="14" style={{ stroke: '#fff', fill: 'none', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' } as React.CSSProperties} viewBox="0 0 14 14"><line x1="7" y1="2" x2="7" y2="12" /><line x1="2" y1="7" x2="12" y2="7" /></svg>
          Create assignment
        </div>

        {/* Metrics */}
        <div className="ph-mgrid">
          {[
            { icon: <svg style={{ stroke: '#3b5bdb' }} viewBox="0 0 14 14"><rect x="2" y="1.5" width="10" height="11" rx="1.5" /><line x1="4.5" y1="5" x2="9.5" y2="5" /><line x1="4.5" y1="7.5" x2="8" y2="7.5" /><line x1="4.5" y1="10" x2="7" y2="10" /></svg>, bg: '#edf2ff', val: '0', label: 'Total active', badge: 'Active', badgeBg: '#eceef4', badgeColor: '#8c92a4', w: '0%', color: '#08090c' },
            { icon: <svg style={{ stroke: '#c87014' }} viewBox="0 0 14 14"><rect x="2" y="2" width="10" height="10" rx="1.5" /><line x1="5" y1="1" x2="5" y2="3.5" /><line x1="9" y1="1" x2="9" y2="3.5" /><line x1="2" y1="6" x2="12" y2="6" /></svg>, bg: '#fff9db', val: '0', label: 'Due this week', badge: 'All clear', badgeBg: '#ebfbee', badgeColor: '#087f5b', w: '0%', color: '#08090c' },
            { icon: <svg style={{ stroke: '#c92a2a' }} viewBox="0 0 14 14"><circle cx="7" cy="7" r="5.5" /><line x1="7" y1="4.5" x2="7" y2="7.5" /><circle cx="7" cy="9.5" r=".7" fill="#c92a2a" stroke="none" /></svg>, bg: '#fff5f5', val: '2', label: 'Pending grading', badge: 'Needs review', badgeBg: '#fff9db', badgeColor: '#c87014', w: '60%', color: '#c92a2a' },
            { icon: <svg style={{ stroke: '#087f5b' }} viewBox="0 0 14 14"><polyline points="2,7.5 5.5,11 12,3.5" /></svg>, bg: '#ebfbee', val: '100%', label: 'Avg. submission', badge: 'Great', badgeBg: '#ebfbee', badgeColor: '#087f5b', w: '100%', color: '#087f5b' },
          ].map((m) => (
            <div key={m.label} className="ph-mc-stu">
              <div className="ph-mc-stu-top">
                <div className="ph-mc-stu-ico" style={{ background: m.bg }}>{m.icon}</div>
                <span style={{ padding: '3px 8px', borderRadius: 20, fontSize: 10, fontWeight: 500, background: m.badgeBg, color: m.badgeColor }}>{m.badge}</span>
              </div>
              <div className="ph-mc-stu-val" style={{ color: m.color }}>{m.val}</div>
              <div className="ph-mc-stu-lbl">{m.label}</div>
              <div className="ph-mc-stu-bar"><div style={{ height: '100%', borderRadius: 2, background: m.color === '#08090c' ? '#3b5bdb' : m.color, width: m.w }} /></div>
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="ph-srch-wrap"><svg className="ph-srch-ico" viewBox="0 0 16 16"><circle cx="6.5" cy="6.5" r="4" /><line x1="9.5" y1="9.5" x2="13.5" y2="13.5" /></svg><div className="ph-srch">Search assignments...</div></div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: 7, overflowX: 'auto' as const }}>
          {['All', 'To grade', 'Submitted', 'Draft'].map((f, i) => (
            <div key={f} style={{ padding: '6px 13px', borderRadius: 20, fontSize: 11, fontWeight: i === 0 ? 500 : 400, background: i === 0 ? '#08090c' : '#fff', color: i === 0 ? '#fff' : '#42475a', border: `1px solid ${i === 0 ? '#08090c' : '#e2e5ee'}`, whiteSpace: 'nowrap' as const, flexShrink: 0 }}>{f}</div>
          ))}
        </div>

        {/* Assignment card */}
        <div style={{ background: '#fff', border: '1px solid #e2e5ee', borderRadius: 18, overflow: 'hidden' }}>
          <div style={{ height: 4, background: '#c87014' }} />
          <div style={{ padding: 14 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 4 }}>
              <div>
                <div style={{ fontSize: 15, fontWeight: 500, color: '#08090c', letterSpacing: '-.1px' }}>Advance SQL</div>
                <div style={{ fontSize: 11, color: '#8c92a4', marginBottom: 10, lineHeight: 1.4 }}>Write the SQL query from your own database.</div>
              </div>
              <span style={{ padding: '3px 9px', borderRadius: 20, fontSize: 10, fontWeight: 500, background: '#fff9db', color: '#c87014', marginLeft: 8, flexShrink: 0 }}>2 to grade</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, color: '#42475a' }}>
                <svg width="11" height="11" style={{ stroke: '#8c92a4', fill: 'none', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as React.CSSProperties} viewBox="0 0 12 12"><path d="M2 10V6L6 3l4 3v4" /><rect x="4.5" y="7.5" width="3" height="2.5" rx=".5" /></svg>
                Class 10B
              </div>
              <div style={{ fontSize: 11, color: '#c92a2a', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 4 }}>
                <svg width="10" height="10" style={{ stroke: '#c92a2a', fill: 'none', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as React.CSSProperties} viewBox="0 0 11 11"><circle cx="5.5" cy="5.5" r="4" /><polyline points="5.5,3 5.5,5.5 7.5,5.5" /></svg>
                Due 4d ago
              </div>
            </div>
            <div style={{ marginBottom: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#8c92a4', marginBottom: 5 }}><span>Submissions</span><span style={{ fontWeight: 500, color: '#08090c' }}>2 / 2</span></div>
              <div style={{ height: 5, borderRadius: 3, background: '#eceef4', overflow: 'hidden' }}><div style={{ height: '100%', borderRadius: 3, background: '#2f9e44', width: '100%' }} /></div>
            </div>
            <div style={{ display: 'flex', gap: 3, alignItems: 'center', padding: '4px 0 2px' }}>
              <div style={{ display: 'flex' }}>
                {[{ bg: '#e3fafc', color: '#0c8599', text: 'TS' }, { bg: '#fff9db', color: '#c87014', text: 'SM' }].map((a, i) => (
                  <div key={a.text} style={{ width: 20, height: 20, borderRadius: '50%', background: a.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 7, fontWeight: 400, color: a.color, border: '1.5px solid #fff', marginLeft: i > 0 ? -5 : 0 }}>{a.text}</div>
                ))}
              </div>
              <span style={{ fontSize: 10, color: '#8c92a4' }}>All submitted</span>
            </div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', borderTop: '1px solid #eceef4', paddingTop: 12, marginTop: 10 }}>
              <div style={{ flex: 1, padding: 10, borderRadius: 11, background: '#3b5bdb', color: '#fff', fontSize: 12, fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                <svg width="12" height="12" style={{ stroke: '#fff', fill: 'none', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as React.CSSProperties} viewBox="0 0 13 13"><polyline points="2,7 5.5,11 11.5,2.5" /></svg>
                Grade submissions
              </div>
              <div style={{ width: 36, height: 36, borderRadius: 10, border: '1px solid #e2e5ee', background: '#f5f6f9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="13" height="13" style={{ stroke: '#c92a2a', fill: 'none', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as React.CSSProperties} viewBox="0 0 13 13"><polyline points="2,3.5 11,3.5" /><path d="M4.5,3.5v-1.5a1,1 0 0,1 1-1h2a1,1 0 0,1 1,1v1.5" /><path d="M5,5.5v4" /><path d="M8,5.5v4" /><rect x="2.5" y="3.5" width="8" height="8" rx="1.5" /></svg>
              </div>
            </div>
          </div>
        </div>

        {/* Empty hint */}
        <div style={{ background: '#fff', border: '1.5px dashed #e2e5ee', borderRadius: 16, padding: '20px 14px', display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: 8 }}>
          <div style={{ width: 36, height: 36, borderRadius: 11, background: '#edf2ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="16" height="16" style={{ stroke: '#3b5bdb', fill: 'none', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as React.CSSProperties} viewBox="0 0 16 16"><line x1="8" y1="3" x2="8" y2="13" /><line x1="3" y1="8" x2="13" y2="8" /></svg>
          </div>
          <div style={{ fontSize: 12, fontWeight: 500, color: '#42475a' }}>Add another assignment</div>
          <div style={{ fontSize: 10, color: '#8c92a4', textAlign: 'center' as const, lineHeight: 1.4 }}>Create more assignments to track student progress across classes.</div>
        </div>
      </div>
      <AssignTabBar />
    </div>
  </div>
);

/* ═══ SCREEN 2: Create Assignment ═══ */
export const CreateAssignment = () => (
  <div className="phone-wrap">
    <div className="phone-label">Create assignment</div>
    <div className="phone">
      <div className="ph-bar" />
      <DarkNav />
      <div style={{ background: '#08090c', padding: '4px 18px 22px' }}>
        <div style={{ fontSize: 10, fontWeight: 500, color: 'rgba(255,255,255,.3)', letterSpacing: '.07em', textTransform: 'uppercase' as const, marginBottom: 5 }}>New assignment</div>
        <div style={{ fontSize: 22, fontWeight: 500, color: '#fff', letterSpacing: '-.4px', lineHeight: 1.15 }}>Create<br />assignment</div>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,.32)', marginTop: 5 }}>Fill in details and publish to your class.</div>
        <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
          <div style={{ padding: '9px 16px', borderRadius: 11, border: '1px solid rgba(255,255,255,.15)', background: 'rgba(255,255,255,.07)', color: 'rgba(255,255,255,.7)', fontSize: 12, fontWeight: 500 }}>Cancel</div>
          <div style={{ flex: 1, padding: '9px 14px', borderRadius: 11, background: '#2f9e44', color: '#fff', fontSize: 12, fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
            <svg width="12" height="12" style={{ stroke: '#fff', fill: 'none', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' } as React.CSSProperties} viewBox="0 0 12 12"><polyline points="1.5,6.5 4.5,10 10.5,2.5" /></svg>
            Publish now
          </div>
        </div>
      </div>

      <div className="ph-body">
        <div style={{ background: '#fff', border: '1px solid #e2e5ee', borderRadius: 18, padding: '16px 14px', display: 'flex', flexDirection: 'column' as const, gap: 14 }}>
          {/* Class */}
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 6 }}>
            <div style={{ fontSize: 10, fontWeight: 500, color: '#8c92a4', letterSpacing: '.07em', textTransform: 'uppercase' as const }}>Select class</div>
            <div style={{ display: 'flex', gap: 7 }}>
              {['10B', 'Shaik sir'].map((c, i) => (
                <div key={c} style={{ padding: '8px 16px', borderRadius: 20, fontSize: 12, border: `1px solid ${i === 0 ? '#08090c' : '#e2e5ee'}`, background: i === 0 ? '#08090c' : '#f5f6f9', color: i === 0 ? '#fff' : '#42475a', fontWeight: i === 0 ? 500 : 400 }}>{c}</div>
              ))}
            </div>
          </div>
          <div style={{ height: 1, background: '#eceef4', margin: '0 -14px' }} />

          {/* Title */}
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 6 }}>
            <div style={{ fontSize: 10, fontWeight: 500, color: '#8c92a4', letterSpacing: '.07em', textTransform: 'uppercase' as const }}>Assignment title</div>
            <div className="ph-field-input">e.g. Chapter 5 Worksheet</div>
          </div>
          <div style={{ height: 1, background: '#eceef4', margin: '0 -14px' }} />

          {/* Due date */}
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 6 }}>
            <div style={{ fontSize: 10, fontWeight: 500, color: '#8c92a4', letterSpacing: '.07em', textTransform: 'uppercase' as const }}>Due date</div>
            <div style={{ position: 'relative' as const }}>
              <div className="ph-field-input">04 / 20 / 2026</div>
              <svg width="14" height="14" style={{ position: 'absolute' as const, right: 11, top: '50%', transform: 'translateY(-50%)', stroke: '#8c92a4', fill: 'none', strokeWidth: 1.4, strokeLinecap: 'round', pointerEvents: 'none' as const } as React.CSSProperties} viewBox="0 0 14 14"><rect x="1.5" y="2" width="11" height="10.5" rx="1.5" /><line x1="4" y1="1" x2="4" y2="3.5" /><line x1="10" y1="1" x2="10" y2="3.5" /><line x1="1.5" y1="5.5" x2="12.5" y2="5.5" /></svg>
            </div>
          </div>
          <div style={{ height: 1, background: '#eceef4', margin: '0 -14px' }} />

          {/* Max marks */}
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 6 }}>
            <div style={{ fontSize: 10, fontWeight: 500, color: '#8c92a4', letterSpacing: '.07em', textTransform: 'uppercase' as const }}>Max marks</div>
            <div className="ph-field-input">e.g. 100</div>
          </div>
          <div style={{ height: 1, background: '#eceef4', margin: '0 -14px' }} />

          {/* Instructions */}
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 6 }}>
            <div style={{ fontSize: 10, fontWeight: 500, color: '#8c92a4', letterSpacing: '.07em', textTransform: 'uppercase' as const }}>Instructions</div>
            <div className="ph-field-textarea">Describe the assignment objectives and what students need to submit...</div>
          </div>
          <div style={{ height: 1, background: '#eceef4', margin: '0 -14px' }} />

          {/* Upload */}
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 6 }}>
            <div style={{ fontSize: 10, fontWeight: 500, color: '#8c92a4', letterSpacing: '.07em', textTransform: 'uppercase' as const }}>Attachment (PDF · optional)</div>
            <div className="ph-dropzone" style={{ borderColor: '#e2e5ee', background: '#f5f6f9' }}>
              <div style={{ width: 38, height: 38, borderRadius: 12, background: '#edf2ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="16" height="16" style={{ stroke: '#3b5bdb', fill: 'none', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as React.CSSProperties} viewBox="0 0 16 16"><polyline points="4,10 8,6 12,10" /><line x1="8" y1="6" x2="8" y2="14" /><path d="M4,6 C4,4 5,2 8,2 C11,2 12,4 12,6" /></svg>
              </div>
              <div style={{ fontSize: 12, fontWeight: 500, color: '#3b5bdb' }}>Click to upload PDF</div>
              <div style={{ fontSize: 10, color: '#8c92a4' }}>Max file size 5 MB</div>
            </div>
          </div>
        </div>

        {/* Preview */}
        <div style={{ background: '#fff', border: '1px solid #e2e5ee', borderRadius: 16, padding: '12px 13px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 8 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#c87014' }} />
            <div style={{ fontSize: 10, fontWeight: 500, color: '#8c92a4', letterSpacing: '.06em', textTransform: 'uppercase' as const }}>Preview</div>
          </div>
          <div style={{ fontSize: 13, fontWeight: 500, color: '#08090c', marginBottom: 2 }}>Chapter 5 Worksheet</div>
          <div style={{ fontSize: 10, color: '#8c92a4', display: 'flex', alignItems: 'center', gap: 8 }}>
            <span>Class 10B</span><span>·</span><span>Due Apr 20</span><span>·</span><span>Max 100 marks</span>
          </div>
        </div>
      </div>
      <AssignTabBar />
    </div>
  </div>
);
