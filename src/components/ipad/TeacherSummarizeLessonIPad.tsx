/**
 * Static iPad mockup — Teacher · Summarize Lesson page.
 * Faithful pixel-shrink of teacher-dashboard/src/pages/SummarizeLesson.tsx (desktop).
 *
 * Layout matches source:
 *   1. Page header: "AI POWERED" pill + h1 "Summarize lesson" (gradient on "lesson")
 *      + subtitle "Upload any PDF — AI reads & summarizes it instantly."
 *   2. AI Hero gradient banner with frosted icon + "POWERED BY EDULLENT ENGINE" eyebrow
 *      + Waiting/Ready pill + headline "Any PDF → exam notes ✨" + 3 stat tiles
 *   3. 2-col: Upload zone (dashed border, dropzone with icon + browse btn)
 *      + What you'll get (7 section preview cards)
 */

import IPadShellWithSidebar from './IPadShellWithSidebar';

const TeacherSummarizeLessonIPad = () => {
  const B1 = '#0055FF';
  const T1 = '#001040';
  const T3 = '#5070B0';
  const T4 = '#99AACC';
  const HERO_GRAD = 'linear-gradient(135deg, #000A33 0%, #001A66 32%, #0044CC 68%, #0055FF 100%)';

  const sections = [
    { name: 'Quick Summary', icon: 'doc', color: B1 },
    { name: 'Key Concepts', icon: 'star', color: '#7B3FF4' },
    { name: 'Must Remember', icon: 'pin', color: '#FF8800' },
    { name: 'Examples', icon: 'sparkle', color: '#10B981' },
    { name: 'Practice Qs', icon: 'help', color: '#F59E0B' },
    { name: 'Parent Note', icon: 'msg', color: '#0EAFAE' },
    { name: 'Vocabulary', icon: 'book', color: '#EC4899' },
  ];

  return (
    <IPadShellWithSidebar activePath="/summarize-lesson">
      <div style={{ background: '#EEF4FF', flex: 1, overflowY: 'auto', minHeight: 0, padding: '10px 12px 12px', fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif" }}>

        {/* Page header */}
        <div style={{ marginBottom: 8 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '2px 8px', borderRadius: 999, background: `linear-gradient(135deg, ${B1}, #1166FF)`, color: '#fff', fontSize: 5.5, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' as const, marginBottom: 4, boxShadow: `0 3px 10px ${B1}55` }}>
            <span style={{ color: '#FFDD55', fontSize: 7, lineHeight: 1, filter: 'drop-shadow(0 0 2px rgba(255,221,85,0.6))' }}>✦</span>
            AI Powered
          </div>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: T1, letterSpacing: '-0.7px', lineHeight: 1.05, margin: 0 }}>
            Summarize{' '}
            <span style={{ background: `linear-gradient(135deg, ${B1} 0%, #1166FF 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>lesson</span>
          </h1>
          <div style={{ fontSize: 8, fontWeight: 500, color: T3, marginTop: 3, letterSpacing: '-0.1px' }}>
            Upload any PDF — AI reads &amp; summarizes it instantly.
          </div>
        </div>

        {/* AI Hero */}
        <div style={{
          background: HERO_GRAD, borderRadius: 14, padding: '12px 14px', color: '#fff',
          marginBottom: 9, position: 'relative', overflow: 'hidden',
          boxShadow: '0 12px 28px rgba(0,26,102,0.32)',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 45%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: 14, right: 30, width: 2.5, height: 2.5, background: '#FFDD55', borderRadius: '50%', boxShadow: '-18px 12px 0 -1px rgba(255,255,255,0.7), 10px 18px 0 -1px rgba(255,221,85,0.85), -28px 28px 0 -2px rgba(255,255,255,0.55)' }} />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 9 }}>
              <div style={{ width: 26, height: 26, borderRadius: 8, background: 'rgba(255,255,255,0.16)', border: '0.5px solid rgba(255,255,255,0.28)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFDD55', flexShrink: 0 }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>
              </div>
              <div>
                <div style={{ fontSize: 6, fontWeight: 700, color: 'rgba(255,255,255,0.85)', letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>Powered by Edullent engine</div>
                <div style={{ fontSize: 6.5, color: 'rgba(255,255,255,0.55)', marginTop: 1, fontWeight: 500, letterSpacing: '-0.1px' }}>Smart extraction · Real-time</div>
              </div>
              <div style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 4, padding: '3px 8px', borderRadius: 999, background: 'rgba(255,255,255,0.18)', border: '0.5px solid rgba(255,255,255,0.32)', color: '#fff', fontSize: 6, fontWeight: 700 }}>
                <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#FFDD55', boxShadow: '0 0 6px #FFDD55' }} />
                Waiting
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 14 }}>
              <div>
                <div style={{ fontSize: 17, fontWeight: 800, color: '#fff', letterSpacing: '-0.6px', lineHeight: 1.1, marginBottom: 4 }}>
                  Any PDF → exam notes ✨
                </div>
                <div style={{ fontSize: 7.5, color: 'rgba(255,255,255,0.82)', fontWeight: 500, letterSpacing: '-0.1px', lineHeight: 1.4, maxWidth: 220 }}>
                  Drop a chapter and get <strong style={{ color: '#fff', fontWeight: 700 }}>7 ready-made study sections</strong> back in seconds.
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'rgba(255,255,255,0.12)', borderRadius: 8, padding: 1, overflow: 'hidden' }}>
                {[
                  { val: '7', label: 'Sections', color: '#fff' },
                  { val: '~12s', label: 'Avg Time', color: '#FFDD55' },
                  { val: '20MB', label: 'Max Size', color: '#6FFFAA' },
                ].map(s => (
                  <div key={s.label} style={{ background: 'rgba(0,10,51,0.7)', padding: '7px 11px', textAlign: 'center', minWidth: 50 }}>
                    <div style={{ fontSize: 12, fontWeight: 800, color: s.color, letterSpacing: '-0.4px' }}>{s.val}</div>
                    <div style={{ fontSize: 5, fontWeight: 700, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.14em', textTransform: 'uppercase' as const, marginTop: 2 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 2-col: Upload zone + What you'll get */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7 }}>

          {/* Upload zone — dashed dropzone */}
          <div style={{
            background: '#fff',
            border: `1.5px dashed ${B1}38`,
            borderRadius: 12, padding: '20px 14px',
            textAlign: 'center', position: 'relative', overflow: 'hidden',
            boxShadow: '0 4px 12px rgba(0,85,255,0.10), 0 18px 30px rgba(0,85,255,0.08)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{ position: 'absolute', top: -25, left: '50%', transform: 'translateX(-50%)', width: 140, height: 60, background: `radial-gradient(ellipse, ${B1}22, transparent 70%)` }} />
            <div style={{ position: 'absolute', top: 7, right: 7, background: '#F4F7FE', color: T3, fontSize: 5.5, fontWeight: 700, padding: '2px 6px', borderRadius: 999, letterSpacing: '0.04em', border: `0.5px solid ${B1}14` }}>MAX 20 MB</div>

            <div style={{
              width: 44, height: 44, borderRadius: 12,
              background: `linear-gradient(135deg, ${B1}, #1166FF)`,
              marginBottom: 9,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', position: 'relative',
              boxShadow: `0 8px 18px ${B1}55, inset 0 1px 0 rgba(255,255,255,0.18)`,
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
              <span style={{ position: 'absolute', top: -3, right: -3, fontSize: 11, color: '#FFDD55', textShadow: '0 0 6px rgba(255,221,85,0.8)', lineHeight: 1 }}>✦</span>
            </div>

            <div style={{ fontSize: 11, fontWeight: 800, color: T1, letterSpacing: '-0.3px', marginBottom: 3 }}>
              Drop PDF here
            </div>
            <div style={{ fontSize: 7, color: T3, fontWeight: 500, letterSpacing: '-0.1px', lineHeight: 1.5, marginBottom: 8 }}>
              or click to browse files<br />
              <strong style={{ color: B1, fontWeight: 700 }}>Text-based PDF only</strong>
            </div>

            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 4,
              padding: '5px 12px',
              background: `linear-gradient(135deg, ${B1}, #1166FF)`,
              color: '#fff',
              fontSize: 7.5, fontWeight: 700, borderRadius: 999,
              letterSpacing: '-0.1px',
              boxShadow: `0 5px 12px ${B1}55`,
            }}>
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
              Browse files
            </div>
          </div>

          {/* What you'll get */}
          <div style={{ background: '#fff', borderRadius: 12, padding: 10, boxShadow: '0 4px 12px rgba(0,85,255,0.10)', border: `0.5px solid ${B1}14` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 6 }}>
              <div style={{ width: 18, height: 18, borderRadius: 5, background: `${B1}1a`, color: B1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" /></svg>
              </div>
              <div>
                <div style={{ fontSize: 8.5, fontWeight: 700, color: T1, letterSpacing: '-0.2px' }}>What you'll get</div>
                <div style={{ fontSize: 5.5, color: T4, fontWeight: 500 }}>7 study-ready sections per upload</div>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 }}>
              {sections.map((s, i) => (
                <div key={s.name} style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '4px 6px', background: '#F8FAFE', borderRadius: 6, border: `0.5px solid ${s.color}22` }}>
                  <span style={{ fontSize: 5, fontWeight: 700, color: T4, minWidth: 9 }}>{String(i + 1).padStart(2, '0')}</span>
                  <div style={{ width: 14, height: 14, borderRadius: 4, background: `${s.color}1a`, color: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      {s.icon === 'doc' && <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></>}
                      {s.icon === 'star' && <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />}
                      {s.icon === 'pin' && <><path d="M12 17v5" /><path d="M9 10.76a2 2 0 01-1.11 1.79l-1.78.9A2 2 0 005 15.24V16a1 1 0 001 1h12a1 1 0 001-1v-.76a2 2 0 00-1.11-1.79l-1.78-.9A2 2 0 0115 10.76V7a1 1 0 011-1 2 2 0 000-4H8a2 2 0 000 4 1 1 0 011 1z" /></>}
                      {s.icon === 'sparkle' && <><path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M5.6 18.4L18.4 5.6" /></>}
                      {s.icon === 'help' && <><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></>}
                      {s.icon === 'msg' && <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />}
                      {s.icon === 'book' && <><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></>}
                    </svg>
                  </div>
                  <span style={{ fontSize: 6.5, fontWeight: 700, color: T1, letterSpacing: '-0.1px' }}>{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </IPadShellWithSidebar>
  );
};

export default TeacherSummarizeLessonIPad;
