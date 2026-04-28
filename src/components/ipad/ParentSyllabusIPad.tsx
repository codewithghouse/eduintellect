/**
 * Static iPad mockup — Parent · Syllabus / Class Documents page.
 * Header with doc count + search + filter chips + document list +
 * library summary card.
 */

import ParentIPadShell from './ParentIPadShell';

const ParentSyllabusIPad = () => {
  const BLUE = '#0055FF';
  const TT1 = '#001040';
  const TT3 = '#5070B0';
  const TT4 = '#99AACC';
  const GREEN = '#00C853';
  const ORANGE = '#FF8800';
  const RED = '#FF3355';

  const docs = [
    { type: 'PDF', color: RED, title: 'Class 9A · Math Syllabus 2026', file: 'math_syllabus_v2.pdf', size: '1.2 MB', when: 'Today', who: 'Mr. Khan', subject: 'Mathematics', isNew: true },
    { type: 'PDF', color: RED, title: 'Bio · Cell Biology Notes', file: 'bio_ch7_cells.pdf', size: '4.8 MB', when: 'Yesterday', who: 'Ms. Iyer', subject: 'Biology', isNew: true },
    { type: 'DOC', color: BLUE, title: 'English · Essay Structure Guide', file: 'essay_guide.docx', size: '320 KB', when: '2d ago', who: 'Ms. Verma', subject: 'English', isNew: false },
    { type: 'XLS', color: ORANGE, title: 'Term 2 Test Schedule', file: 'test_schedule_t2.xlsx', size: '64 KB', when: '4d ago', who: 'Office', subject: 'All', isNew: false },
    { type: 'PDF', color: RED, title: 'Physics · Mechanics Worksheet', file: 'phys_mechanics.pdf', size: '2.4 MB', when: '1w ago', who: 'Mr. Khan', subject: 'Physics', isNew: false },
  ];

  return (
    <ParentIPadShell activePath="/syllabus">
      <div style={{ padding: '12px 14px 6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4 }}>
          <span style={{ width: 4, height: 4, borderRadius: 1, background: BLUE }} />
          <span style={{ fontSize: 7, fontWeight: 500, color: TT3, letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>
            Parent · Syllabus
          </span>
          <div style={{ marginLeft: 'auto', fontSize: 6, fontWeight: 600, color: '#fff', background: `linear-gradient(135deg, ${BLUE}, #1166FF)`, padding: '3px 8px', borderRadius: 999 }}>23 DOCS</div>
        </div>
        <h1 style={{ fontSize: 22, fontWeight: 300, color: TT1, letterSpacing: '-0.7px', lineHeight: 1.05, margin: 0 }}>
          Class Documents
        </h1>
        <div style={{ fontSize: 9, fontWeight: 400, color: TT3, marginTop: 3 }}>
          Syllabus, notes, and worksheets shared by Aarav's teachers.
        </div>
      </div>

      <div style={{ flex: 1, padding: '6px 12px 12px', overflowY: 'auto', minHeight: 0 }}>
        {/* Search + filter chips */}
        <div style={{ background: '#fff', borderRadius: 11, padding: 8, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)', marginBottom: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '5px 9px', background: '#F8FAFE', borderRadius: 8, border: `0.5px solid ${BLUE}22`, marginBottom: 6 }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={TT4} strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            <span style={{ fontSize: 8, color: TT4 }}>Search documents…</span>
          </div>
          <div style={{ display: 'flex', gap: 4 }}>
            {[
              { name: 'All', active: true, count: 23 },
              { name: 'PDF', active: false, count: 14 },
              { name: 'Docs', active: false, count: 5 },
              { name: 'Sheets', active: false, count: 2 },
              { name: 'Images', active: false, count: 2 },
            ].map(c => (
              <div key={c.name} style={{
                fontSize: 7, fontWeight: 500,
                padding: '4px 9px', borderRadius: 999,
                background: c.active ? `linear-gradient(135deg, ${BLUE}, #1166FF)` : '#fff',
                color: c.active ? '#fff' : BLUE,
                border: c.active ? 'none' : `0.5px solid ${BLUE}33`,
                display: 'flex', alignItems: 'center', gap: 4,
              }}>
                {c.name} <span style={{ opacity: 0.7, fontSize: 5.5 }}>{c.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Document list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 8 }}>
          {docs.map((d, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 10, padding: 9, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)', display: 'flex', alignItems: 'center', gap: 9 }}>
              <div style={{ width: 30, height: 36, borderRadius: 5, background: `linear-gradient(135deg, ${d.color}, ${d.color}aa)`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 7, fontWeight: 700, letterSpacing: '0.05em', flexShrink: 0, position: 'relative' }}>
                {d.type}
                <div style={{ position: 'absolute', top: 2, right: 2, width: 6, height: 6, borderRadius: 1, background: 'rgba(255,255,255,0.4)' }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 2 }}>
                  <span style={{ fontSize: 8.5, fontWeight: 500, color: TT1, lineHeight: 1.2 }}>{d.title}</span>
                  {d.isNew && <span style={{ fontSize: 5.5, fontWeight: 600, color: '#fff', background: GREEN, padding: '1.5px 5px', borderRadius: 999, letterSpacing: '0.06em' }}>NEW</span>}
                </div>
                <div style={{ fontSize: 6, color: TT4, marginBottom: 3, fontFamily: 'monospace' }}>{d.file}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 5.5, fontWeight: 500, color: BLUE, background: `${BLUE}1a`, padding: '1.5px 5px', borderRadius: 999 }}>{d.size}</span>
                  <span style={{ fontSize: 5.5, fontWeight: 500, color: TT3, background: '#F1F5F9', padding: '1.5px 5px', borderRadius: 999 }}>{d.subject}</span>
                  <span style={{ fontSize: 5.5, color: TT4 }}>· {d.when}</span>
                  <span style={{ fontSize: 5.5, color: TT4 }}>· {d.who}</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 4, flexShrink: 0 }}>
                <div style={{ fontSize: 6.5, fontWeight: 500, color: '#fff', background: `linear-gradient(135deg, ${BLUE}, #1166FF)`, padding: '4px 9px', borderRadius: 999, display: 'flex', alignItems: 'center', gap: 3 }}>
                  <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                  View
                </div>
                <div style={{ width: 22, height: 22, borderRadius: 5, background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: BLUE }}>
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Library summary */}
        <div style={{
          background: `linear-gradient(135deg, ${BLUE} 0%, #1166FF 100%)`,
          borderRadius: 11, padding: 10, color: '#fff', position: 'relative', overflow: 'hidden',
          boxShadow: '0 6px 18px rgba(0,85,255,0.25)',
        }}>
          <div style={{ position: 'absolute', top: -25, right: -25, width: 90, height: 90, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 65%)' }} />
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', zIndex: 2 }}>
            <div>
              <div style={{ fontSize: 6, fontWeight: 500, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.18em', textTransform: 'uppercase' as const, marginBottom: 3 }}>Document Library</div>
              <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.85)', lineHeight: 1.4, maxWidth: 200 }}>
                All teacher uploads in one place — auto-organised by subject and date.
              </div>
            </div>
            <div style={{ display: 'flex', gap: 14 }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 18, fontWeight: 300, lineHeight: 1, letterSpacing: '-0.5px' }}>23</div>
                <div style={{ fontSize: 5.5, color: 'rgba(255,255,255,0.65)', letterSpacing: '0.14em', textTransform: 'uppercase' as const, marginTop: 2 }}>Total</div>
              </div>
              <div style={{ width: 0.5, background: 'rgba(255,255,255,0.3)' }} />
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 18, fontWeight: 300, lineHeight: 1, letterSpacing: '-0.5px' }}>14</div>
                <div style={{ fontSize: 5.5, color: 'rgba(255,255,255,0.65)', letterSpacing: '0.14em', textTransform: 'uppercase' as const, marginTop: 2 }}>PDFs</div>
              </div>
              <div style={{ width: 0.5, background: 'rgba(255,255,255,0.3)' }} />
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 18, fontWeight: 300, lineHeight: 1, letterSpacing: '-0.5px', color: '#FFD700' }}>48 MB</div>
                <div style={{ fontSize: 5.5, color: 'rgba(255,255,255,0.65)', letterSpacing: '0.14em', textTransform: 'uppercase' as const, marginTop: 2 }}>Storage</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ParentIPadShell>
  );
};

export default ParentSyllabusIPad;
