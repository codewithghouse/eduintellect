/**
 * Static iPad mockup — Student Behaviour page.
 * Mirrors the real /student-behaviour page: header + 3 stat cards
 * (Star Rating / Behaviour Entries / Active Improvements) + student
 * picker + recent behaviour log + improvement plan list.
 */

import IPadShellWithSidebar from './IPadShellWithSidebar';

const TeacherBehaviourIPad = () => {
  const BLUE = '#0055FF';
  const TT1 = '#001040';
  const TT3 = '#5070B0';
  const TT4 = '#99AACC';
  const SURFACE = '#F4F7FE';
  const GREEN = '#00C853';
  const RED = '#FF3355';
  const ORANGE = '#FF8800';
  const VIOLET = '#7B3FF4';
  const GOLD = '#FFAA00';

  return (
    <IPadShellWithSidebar activePath="/student-behaviour">
      {/* Header */}
      <div style={{ padding: '12px 14px 6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4 }}>
          <span style={{ width: 4, height: 4, borderRadius: 1, background: BLUE }} />
          <span style={{ fontSize: 7, fontWeight: 500, color: TT3, letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>
            Teacher Dashboard · Behaviour
          </span>
        </div>
        <h1 style={{ fontSize: 22, fontWeight: 300, color: TT1, letterSpacing: '-0.7px', lineHeight: 1.05, margin: 0 }}>
          Student Behaviour
        </h1>
        <div style={{ fontSize: 9, fontWeight: 400, color: TT3, marginTop: 3 }}>
          Track positives, log concerns, and run improvement plans per student.
        </div>
      </div>

      <div style={{ flex: 1, padding: '6px 12px 12px', overflowY: 'auto', minHeight: 0 }}>
        {/* Student picker */}
        <div style={{ background: '#fff', borderRadius: 11, padding: 8, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#EDF2FF', color: '#3B5BDB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 500 }}>
            AR
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 9, fontWeight: 500, color: TT1, lineHeight: 1.2 }}>Aryan Reddy</div>
            <div style={{ fontSize: 7, color: TT4, marginTop: 1 }}>Class 10B · Roll 04 · English</div>
          </div>
          <div style={{ display: 'flex', gap: 3 }}>
            <div style={{ fontSize: 6, fontWeight: 500, color: BLUE, background: 'rgba(0,85,255,0.10)', padding: '3px 7px', borderRadius: 999 }}>+ Behaviour</div>
            <div style={{ fontSize: 6, fontWeight: 500, color: '#fff', background: BLUE, padding: '3px 7px', borderRadius: 999 }}>+ Improvement</div>
          </div>
        </div>

        {/* 3 stat cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 7, marginBottom: 8 }}>
          {[
            { label: 'Star Rating', val: '4.6', sub: '12 ratings', color: GOLD, bg: 'linear-gradient(135deg, #FFF6E0 0%, #FFEDC4 100%)' },
            { label: 'Behaviour Entries', val: '8', sub: '5 positive · 3 concern', color: GREEN, bg: 'linear-gradient(135deg, #E8FBEF 0%, #DAF6E4 100%)' },
            { label: 'Active Improvements', val: '2', sub: '1 resolved this month', color: VIOLET, bg: 'linear-gradient(135deg, #F2EBFF 0%, #E8DEFC 100%)' },
          ].map(c => (
            <div key={c.label} style={{ background: c.bg, border: `0.5px solid ${c.color}33`, borderRadius: 11, padding: '8px 10px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ fontSize: 6, fontWeight: 500, color: c.color, letterSpacing: '0.14em', textTransform: 'uppercase' as const, marginBottom: 4 }}>{c.label}</div>
              <div style={{ fontSize: 18, fontWeight: 300, color: TT1, letterSpacing: '-0.8px', lineHeight: 1 }}>{c.val}</div>
              <div style={{ fontSize: 7, fontWeight: 500, color: c.color, marginTop: 3 }}>{c.sub}</div>
            </div>
          ))}
        </div>

        {/* Quick rate */}
        <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)', marginBottom: 8 }}>
          <div style={{ fontSize: 8, fontWeight: 500, color: TT1, marginBottom: 6 }}>Quick rate Aryan today</div>
          <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            {[1, 2, 3, 4, 5].map(n => (
              <svg key={n} width="20" height="20" viewBox="0 0 24 24" fill={n <= 4 ? GOLD : 'none'} stroke={n <= 4 ? GOLD : TT4} strokeWidth="1.6">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />
              </svg>
            ))}
            <div style={{ marginLeft: 'auto', fontSize: 6, fontWeight: 500, color: '#fff', background: BLUE, padding: '4px 9px', borderRadius: 999 }}>Save</div>
          </div>
        </div>

        {/* 2-col: Behaviour Log + Improvement Plans */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {/* Behaviour log */}
          <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 7 }}>
              <div style={{ width: 22, height: 22, borderRadius: 7, background: GREEN, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 13l4 4L19 7" /></svg>
              </div>
              <div style={{ fontSize: 9, fontWeight: 500, color: TT1, letterSpacing: '-0.15px' }}>Recent Behaviour</div>
              <div style={{ marginLeft: 'auto', fontSize: 6, fontWeight: 500, color: TT4 }}>Last 7 days</div>
            </div>
            {[
              { type: 'POSITIVE', text: 'Helped a classmate with quadratic equations.', when: '2h ago', tone: GREEN },
              { type: 'POSITIVE', text: 'Volunteered to lead the lab cleanup.', when: 'Yesterday', tone: GREEN },
              { type: 'CONCERN', text: 'Late submission on Geometry homework.', when: '2d ago', tone: ORANGE },
              { type: 'POSITIVE', text: 'Top scorer in surprise quiz.', when: '4d ago', tone: GREEN },
              { type: 'INCIDENT', text: 'Disrupted class during English period.', when: '6d ago', tone: RED },
            ].map((e, i) => (
              <div key={i} style={{ padding: '6px 0', borderBottom: i < 4 ? '0.5px solid #F1F5F9' : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 2 }}>
                  <span style={{ fontSize: 5, fontWeight: 500, color: e.tone, background: `${e.tone}1A`, padding: '2px 5px', borderRadius: 999, letterSpacing: '0.08em' }}>
                    {e.type}
                  </span>
                  <span style={{ marginLeft: 'auto', fontSize: 6, color: TT4 }}>{e.when}</span>
                </div>
                <div style={{ fontSize: 7, color: TT1, lineHeight: 1.35 }}>{e.text}</div>
              </div>
            ))}
          </div>

          {/* Improvement plans */}
          <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 7 }}>
              <div style={{ width: 22, height: 22, borderRadius: 7, background: VIOLET, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <div style={{ fontSize: 9, fontWeight: 500, color: TT1, letterSpacing: '-0.15px' }}>Improvement Plans</div>
              <div style={{ marginLeft: 'auto', fontSize: 6, fontWeight: 500, color: VIOLET, background: 'rgba(123,63,244,0.10)', padding: '2px 6px', borderRadius: 999 }}>2 active</div>
            </div>
            {[
              { title: 'Submit homework on time', priority: 'HIGH', status: 'active', tone: RED, progress: 60 },
              { title: 'Reduce class disruptions', priority: 'MED', status: 'active', tone: ORANGE, progress: 40 },
              { title: 'Improve handwriting in tests', priority: 'LOW', status: 'resolved', tone: GREEN, progress: 100 },
            ].map((p, i) => (
              <div key={i} style={{ padding: '7px 0', borderBottom: i < 2 ? '0.5px solid #F1F5F9' : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4 }}>
                  <span style={{ fontSize: 5, fontWeight: 500, color: p.tone, background: `${p.tone}1A`, padding: '2px 5px', borderRadius: 999, letterSpacing: '0.08em' }}>
                    {p.priority}
                  </span>
                  <span style={{ fontSize: 7, fontWeight: 500, color: TT1, flex: 1 }}>{p.title}</span>
                  {p.status === 'resolved' && (
                    <span style={{ fontSize: 5, fontWeight: 500, color: GREEN, background: 'rgba(0,200,83,0.12)', padding: '2px 5px', borderRadius: 999 }}>RESOLVED</span>
                  )}
                </div>
                <div style={{ background: SURFACE, height: 4, borderRadius: 2, overflow: 'hidden' }}>
                  <div style={{ background: p.tone, height: '100%', width: `${p.progress}%`, borderRadius: 2 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </IPadShellWithSidebar>
  );
};

export default TeacherBehaviourIPad;
