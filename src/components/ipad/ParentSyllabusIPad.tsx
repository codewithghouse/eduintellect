/**
 * Static iPad mockup — Parent · Syllabus / Class Documents page.
 * Faithful pixel-shrink of parent-dashboard/src/pages/SyllabusPage.tsx (desktop).
 *
 * Layout matches source:
 *   1. Toolbar: h1 "Class Documents" + subtitle + "{N} Documents" gradient pill (right)
 *   2. Search bar + filter pills (All / PDF / DOC / IMG / SHEET)
 *   3. Grid of document cards (3-col): file icon (gradient by type) +
 *      title + file name + size pill + date + uploaded-by + tags (type/subject/New)
 *      + 2 action buttons (View / Download)
 */

import ParentIPadShell from './ParentIPadShell';

const ParentSyllabusIPad = () => {
  const B1 = '#0055FF';
  const B2 = '#1166FF';
  const T1 = '#0B0F19';
  const T3 = '#5A6275';
  const T4 = '#8C92A4';
  const GREEN_D = '#007830';
  const GREEN = '#00C853';
  const RED = '#FF3355';
  const ORANGE = '#FF8800';
  const VIOLET = '#7B3FF4';

  const docs = [
    { type: 'PDF', title: 'Class 9A · Math Syllabus 2026', file: 'math_syllabus_v2.pdf', size: '1.2 MB', when: 'Today', who: 'Mr. Khan', subject: 'Mathematics', isNew: true, color: RED, grad: `linear-gradient(135deg, ${RED}, #FF6688)` },
    { type: 'PDF', title: 'Bio · Cell Biology Notes', file: 'bio_ch7_cells.pdf', size: '4.8 MB', when: 'Yesterday', who: 'Ms. Iyer', subject: 'Biology', isNew: true, color: RED, grad: `linear-gradient(135deg, ${RED}, #FF6688)` },
    { type: 'DOC', title: 'English · Essay Guide', file: 'essay_guide.docx', size: '320 KB', when: '2d ago', who: 'Ms. Verma', subject: 'English', isNew: false, color: B1, grad: `linear-gradient(135deg, ${B1}, ${B2})` },
    { type: 'XLS', title: 'Term 2 Test Schedule', file: 'test_schedule_t2.xlsx', size: '64 KB', when: '4d ago', who: 'Office', subject: 'All', isNew: false, color: ORANGE, grad: `linear-gradient(135deg, ${ORANGE}, #FFAA22)` },
    { type: 'IMG', title: 'Lab Diagram — Mitochondria', file: 'mitochondria_diagram.png', size: '1.8 MB', when: '6d ago', who: 'Ms. Iyer', subject: 'Biology', isNew: false, color: VIOLET, grad: `linear-gradient(135deg, ${VIOLET}, #A66FFF)` },
    { type: 'PDF', title: 'Phys · Mechanics Worksheet', file: 'phys_mechanics.pdf', size: '2.4 MB', when: '1w ago', who: 'Mr. Khan', subject: 'Physics', isNew: false, color: RED, grad: `linear-gradient(135deg, ${RED}, #FF6688)` },
  ];

  return (
    <ParentIPadShell activePath="/syllabus">
      <div style={{ background: '#EEF4FF', flex: 1, overflowY: 'auto', minHeight: 0, padding: '10px 12px 12px', fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif" }}>

        {/* Toolbar */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 7 }}>
          <div>
            <h1 style={{ fontSize: 18, fontWeight: 800, color: T1, letterSpacing: '-0.5px', lineHeight: 1, margin: 0 }}>Class Documents</h1>
            <div style={{ fontSize: 7.5, color: T3, marginTop: 3, fontWeight: 500 }}>Syllabus &amp; notes shared by your teachers</div>
          </div>
          <div style={{ padding: '4px 10px', borderRadius: 999, fontSize: 7, fontWeight: 800, color: '#fff', background: `linear-gradient(135deg, ${B1}, ${B2})`, boxShadow: `0 3px 10px ${B1}40`, letterSpacing: '0.04em' }}>
            6 Documents
          </div>
        </div>

        {/* Search + Filter */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 7 }}>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 5, padding: '6px 9px', background: '#fff', borderRadius: 9, border: `0.5px solid ${B1}1f`, boxShadow: '0 4px 10px rgba(0,85,255,0.06)' }}>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={B1} strokeOpacity="0.4" strokeWidth="2.2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            <span style={{ fontSize: 7, color: T4, fontWeight: 500 }}>Search by title, file name, or teacher…</span>
          </div>
          {[
            { name: 'All', active: true },
            { name: 'PDF', active: false },
            { name: 'DOC', active: false },
            { name: 'IMG', active: false },
            { name: 'SHEET', active: false },
          ].map(f => (
            <div key={f.name} style={{
              padding: '5px 9px', borderRadius: 8,
              fontSize: 6.5, fontWeight: 800, letterSpacing: '-0.1px',
              color: f.active ? '#fff' : T3,
              background: f.active ? `linear-gradient(135deg, ${B1}, ${B2})` : '#fff',
              border: f.active ? 'none' : `0.5px solid ${B1}1f`,
              boxShadow: f.active ? `0 3px 8px ${B1}55` : '0 2px 5px rgba(0,85,255,0.06)',
            }}>{f.name}</div>
          ))}
        </div>

        {/* Document grid 3-col */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
          {docs.map(d => (
            <div key={d.title} style={{ background: '#fff', borderRadius: 11, padding: 9, position: 'relative', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,85,255,0.10)', border: `0.5px solid ${B1}14` }}>
              <div style={{ position: 'absolute', top: -10, right: -8, width: 70, height: 70, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,85,255,0.05) 0%, transparent 70%)' }} />

              {/* Header row */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 6, marginBottom: 6, position: 'relative', zIndex: 2 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: d.grad, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 4px 10px ${d.color}55`, flexShrink: 0 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.1"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 7.5, fontWeight: 800, color: T1, letterSpacing: '-0.15px', lineHeight: 1.25, marginBottom: 2 }}>{d.title}</div>
                  <div style={{ fontSize: 5.5, fontWeight: 600, color: T3, fontFamily: 'monospace', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{d.file}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 3, flexWrap: 'wrap' }}>
                    <span style={{ padding: '1.5px 5px', borderRadius: 999, fontSize: 5, fontWeight: 800, background: `${B1}14`, border: `0.5px solid ${B1}28`, color: B1, letterSpacing: '0.04em' }}>{d.size}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: 5.5, fontWeight: 600, color: T3 }}>
                      <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /></svg>
                      {d.when}
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 2, marginTop: 2 }}>
                    <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke={T3} strokeWidth="2.5"><circle cx="12" cy="7" r="4" /><path d="M5 21c0-3.5 3-6 7-6s7 2.5 7 6" /></svg>
                    <span style={{ fontSize: 5, fontWeight: 800, color: T3, letterSpacing: '0.06em', textTransform: 'uppercase' as const }}>By {d.who}</span>
                  </div>
                </div>
              </div>

              {/* Tags row */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3, marginBottom: 5, position: 'relative', zIndex: 2 }}>
                <span style={{ padding: '1.5px 6px', borderRadius: 999, fontSize: 5, fontWeight: 800, background: `${d.color}1a`, color: d.color, border: `0.5px solid ${d.color}38`, letterSpacing: '0.04em' }}>{d.type}</span>
                <span style={{ padding: '1.5px 6px', borderRadius: 999, fontSize: 5, fontWeight: 800, background: `${B1}14`, color: B1, border: `0.5px solid ${B1}28`, letterSpacing: '0.04em' }}>{d.subject}</span>
                {d.isNew && (
                  <span style={{ padding: '1.5px 6px', borderRadius: 999, fontSize: 5, fontWeight: 800, background: `${GREEN}1a`, color: GREEN_D, border: `0.5px solid ${GREEN}38`, letterSpacing: '0.04em' }}>New</span>
                )}
              </div>

              {/* Action buttons */}
              <div style={{ display: 'flex', gap: 4, position: 'relative', zIndex: 2 }}>
                <div style={{
                  flex: 1, padding: '4px 7px', borderRadius: 6,
                  background: `linear-gradient(135deg, ${B1}, ${B2})`, color: '#fff',
                  fontSize: 6, fontWeight: 800, letterSpacing: '-0.05px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3,
                  boxShadow: `0 3px 8px ${B1}40`,
                }}>
                  <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                  View
                </div>
                <div style={{
                  width: 22, padding: '4px 0', borderRadius: 6,
                  background: '#F4F7FE', color: B1,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: `0.5px solid ${B1}1f`,
                }}>
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ParentIPadShell>
  );
};

export default ParentSyllabusIPad;
