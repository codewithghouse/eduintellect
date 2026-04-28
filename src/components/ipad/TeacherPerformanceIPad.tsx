/**
 * Static iPad mockup — Teacher Performance page (self-view).
 * Mirrors /leaderboard/teachers/insights: composite score hero +
 * 4 metric cards (attendance / class avg / parent rating / grading speed) +
 * AI diagnosis card + AI action plan list.
 */

import IPadShellWithSidebar from './IPadShellWithSidebar';

const TeacherPerformanceIPad = () => {
  const NAVY_DEEP = '#001040';
  const NAVY = '#001A66';
  const BLUE = '#0055FF';
  const TT1 = '#001040';
  const TT3 = '#5070B0';
  const TT4 = '#99AACC';
  const GREEN = '#00C853';
  const RED = '#FF3355';
  const ORANGE = '#FF8800';
  const VIOLET = '#7B3FF4';
  const GOLD = '#FFAA00';

  const HERO_GRAD = `linear-gradient(135deg, ${NAVY_DEEP} 0%, ${NAVY} 35%, #0044CC 70%, ${BLUE} 100%)`;

  return (
    <IPadShellWithSidebar activePath="/leaderboard/teachers">
      {/* Header */}
      <div style={{ padding: '12px 14px 6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4 }}>
          <span style={{ width: 4, height: 4, borderRadius: 1, background: BLUE }} />
          <span style={{ fontSize: 7, fontWeight: 500, color: TT3, letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>
            Teacher Dashboard · Performance
          </span>
        </div>
        <h1 style={{ fontSize: 22, fontWeight: 300, color: TT1, letterSpacing: '-0.7px', lineHeight: 1.05, margin: 0 }}>
          Your Performance
        </h1>
        <div style={{ fontSize: 9, fontWeight: 400, color: TT3, marginTop: 3 }}>
          Composite score, metric breakdown, and AI-suggested improvements.
        </div>
      </div>

      <div style={{ flex: 1, padding: '6px 12px 12px', overflowY: 'auto', minHeight: 0 }}>
        {/* Hero composite */}
        <div style={{ borderRadius: 14, padding: '14px 16px', background: HERO_GRAD, position: 'relative', overflow: 'hidden', marginBottom: 8, boxShadow: '0 6px 18px rgba(0,8,60,0.22)' }}>
          <div style={{ position: 'absolute', top: -25, right: -25, width: 100, height: 100, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,232,102,0.18) 0%, transparent 65%)' }} />
          <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <div style={{ width: 28, height: 28, borderRadius: 9, background: 'rgba(255,255,255,0.14)', border: '0.5px solid rgba(255,255,255,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M3 3v18h18" /><path d="M7 14l4-4 4 4 5-5" /></svg>
            </div>
            <div>
              <div style={{ fontSize: 7, fontWeight: 500, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>Composite Score</div>
              <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.55)', marginTop: 2 }}>4-week rolling · weighted</div>
            </div>
            <div style={{ marginLeft: 'auto', fontSize: 7, fontWeight: 500, color: '#6FFFAA', background: 'rgba(0,232,102,0.18)', border: '0.5px solid rgba(0,232,102,0.5)', padding: '4px 10px', borderRadius: 999, letterSpacing: '0.04em' }}>
              ↑ 4.2 this month
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, position: 'relative', zIndex: 2 }}>
            <span style={{ fontSize: 50, fontWeight: 300, color: '#fff', lineHeight: 1, letterSpacing: '-2.4px' }}>92.4</span>
            <span style={{ fontSize: 18, fontWeight: 300, color: 'rgba(255,255,255,0.6)' }}>/ 100</span>
            <div style={{ marginLeft: 'auto', fontSize: 8, color: 'rgba(255,255,255,0.7)' }}>
              <b style={{ fontWeight: 500, color: '#FFD166' }}>Top 17%</b> of branch
            </div>
          </div>
        </div>

        {/* 4 metric cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 7, marginBottom: 8 }}>
          {[
            { label: 'Attendance Discipline', val: '98%', sub: '0 missed days', color: GREEN, bg: '#E8FBEF', target: 95, current: 98 },
            { label: 'Class Average', val: '83.6%', sub: '↑ 3.1 vs Mar', color: BLUE, bg: '#DEE6F8', target: 80, current: 84 },
            { label: 'Parent Rating', val: '4.7', sub: 'on 5 · 22 reviews', color: GOLD, bg: '#FFF6E0', target: 4.5, current: 4.7 },
            { label: 'Grading Speed', val: '1.4 d', sub: 'avg turnaround', color: VIOLET, bg: '#F2EBFF', target: 2, current: 1.4 },
          ].map(c => (
            <div key={c.label} style={{ background: c.bg, border: `0.5px solid ${c.color}33`, borderRadius: 11, padding: '8px 10px' }}>
              <div style={{ fontSize: 6, fontWeight: 500, color: c.color, letterSpacing: '0.14em', textTransform: 'uppercase' as const, marginBottom: 4 }}>{c.label}</div>
              <div style={{ fontSize: 18, fontWeight: 300, color: TT1, letterSpacing: '-0.8px', lineHeight: 1 }}>{c.val}</div>
              <div style={{ fontSize: 7, fontWeight: 500, color: c.color, marginTop: 3, marginBottom: 5 }}>{c.sub}</div>
              <div style={{ background: 'rgba(255,255,255,0.5)', height: 3, borderRadius: 2, overflow: 'hidden' }}>
                <div style={{ background: c.color, height: '100%', width: '85%', borderRadius: 2 }} />
              </div>
            </div>
          ))}
        </div>

        {/* AI Diagnosis + Action Plan */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 8 }}>
          {/* Diagnosis */}
          <div style={{ background: `linear-gradient(135deg, ${VIOLET} 0%, #5915C0 100%)`, color: '#fff', borderRadius: 11, padding: 12, position: 'relative', overflow: 'hidden', boxShadow: '0 6px 18px rgba(123,63,244,0.22)' }}>
            <div style={{ position: 'absolute', top: -20, right: -20, width: 80, height: 80, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 65%)' }} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 6 }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M12 3v3M12 18v3M3 12h3M18 12h3" /></svg>
                <div style={{ fontSize: 6, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>AI Diagnosis</div>
              </div>
              <div style={{ fontSize: 9, fontWeight: 500, lineHeight: 1.4, marginBottom: 5 }}>You're strong on attendance + grading speed.</div>
              <div style={{ fontSize: 7, lineHeight: 1.45, color: 'rgba(255,255,255,0.85)' }}>
                Class 9A has slipped from 86% → 81% average over 3 weeks. Re-teaching Geometry could lift composite to <b style={{ color: '#FFD166', fontWeight: 500 }}>94+</b>.
              </div>
            </div>
          </div>

          {/* Action plan */}
          <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 7 }}>
              <div style={{ width: 22, height: 22, borderRadius: 7, background: BLUE, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              <div style={{ fontSize: 9, fontWeight: 500, color: TT1, letterSpacing: '-0.15px' }}>This week's actions</div>
              <div style={{ marginLeft: 'auto', fontSize: 6, fontWeight: 500, color: BLUE, background: 'rgba(0,85,255,0.10)', padding: '2px 6px', borderRadius: 999 }}>4 picked</div>
            </div>
            {[
              { task: 'Re-teach Geometry chapter to Class 9A', impact: '+3.2', tone: GREEN, done: true },
              { task: 'Send progress note to 5 at-risk parents', impact: '+0.8', tone: BLUE, done: true },
              { task: 'Add 1 quick quiz before Wed for 9A', impact: '+1.4', tone: GOLD, done: false },
              { task: 'Schedule 10-min office hours daily', impact: '+0.6', tone: VIOLET, done: false },
              { task: 'Review last 5 lowest-graded papers', impact: '+0.5', tone: ORANGE, done: false },
            ].map((a, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '4px 0', borderBottom: i < 4 ? '0.5px solid #F1F5F9' : 'none' }}>
                <div style={{ width: 12, height: 12, borderRadius: 3, background: a.done ? GREEN : 'transparent', border: a.done ? 'none' : `1px solid ${TT4}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {a.done && (
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                  )}
                </div>
                <div style={{ flex: 1, fontSize: 7, fontWeight: a.done ? 400 : 500, color: a.done ? TT4 : TT1, textDecoration: a.done ? 'line-through' : 'none', lineHeight: 1.3 }}>
                  {a.task}
                </div>
                <div style={{ fontSize: 6, fontWeight: 500, color: a.tone, background: `${a.tone}1A`, padding: '2px 5px', borderRadius: 999 }}>{a.impact}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </IPadShellWithSidebar>
  );
};

export default TeacherPerformanceIPad;
