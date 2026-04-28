/**
 * Static iPad mockup — Owner › Teacher Performance page.
 * Mirrors /teachers from owner-dashboard.
 */

import OwnerIPadShell from './OwnerIPadShell';

const NAVY_DEEP = '#001040';
const NAVY = '#001A66';
const BLUE = '#0055FF';
const TT1 = '#001040';
const TT3 = '#5070B0';
const TT4 = '#99AACC';
const GREEN = '#00C853';
const RED = '#FF3355';
const ORANGE = '#FF8800';
const GOLD = '#FFAA00';

const OwnerTeacherPerformanceIPad = () => (
  <OwnerIPadShell activePath="/teachers">
    <div style={{ padding: 12 }}>
      {/* Hero */}
      <div style={{
        borderRadius: 12, padding: '12px 14px',
        background: `linear-gradient(135deg, ${NAVY_DEEP} 0%, ${NAVY} 35%, #0044CC 70%, ${BLUE} 100%)`,
        color: '#fff', marginBottom: 8, position: 'relative', overflow: 'hidden',
        boxShadow: '0 6px 18px rgba(0,8,60,0.22)',
      }}>
        <div style={{ position: 'absolute', top: -25, right: -25, width: 110, height: 110, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,.10) 0%, transparent 65%)' }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ fontSize: 6, fontWeight: 500, color: 'rgba(255,255,255,.7)', letterSpacing: '0.18em', textTransform: 'uppercase' as const, marginBottom: 4 }}>
            Network Teacher Performance · Apr 2026
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 4 }}>
            <span style={{ fontSize: 26, fontWeight: 300, letterSpacing: '-1.2px', lineHeight: 1 }}>259</span>
            <span style={{ fontSize: 11, color: 'rgba(255,255,255,.6)' }}>active teachers</span>
            <span style={{ marginLeft: 'auto', fontSize: 7, fontWeight: 500, color: '#6FFFAA', background: 'rgba(0,232,102,.18)', border: '0.5px solid rgba(0,232,102,.5)', padding: '4px 10px', borderRadius: 999 }}>
              ↑ 4.2 composite this month
            </span>
          </div>
        </div>
      </div>

      {/* 4 KPI cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 7, marginBottom: 8 }}>
        {[
          { l: 'Avg Composite', v: '84.6', c: BLUE, bg: 'linear-gradient(135deg, #DEE6F8 0%, #F8FAFE 100%)' },
          { l: 'Top Performers', v: '47', c: GREEN, bg: 'linear-gradient(135deg, #E8FBEF 0%, #DAF6E4 100%)', sub: '90+ score' },
          { l: 'Need Coaching', v: '18', c: ORANGE, bg: 'linear-gradient(135deg, #FFF6E8 0%, #FFEED4 100%)', sub: '<70 score' },
          { l: 'Parent NPS', v: '4.6', c: GOLD, bg: 'linear-gradient(135deg, #FFF6E0 0%, #FFEDC4 100%)', sub: 'on 5 · 412 reviews' },
        ].map(c => (
          <div key={c.l} style={{ background: c.bg, border: `0.5px solid ${c.c}33`, borderRadius: 11, padding: '8px 10px' }}>
            <div style={{ fontSize: 6, fontWeight: 500, color: c.c, letterSpacing: '0.14em', textTransform: 'uppercase' as const, marginBottom: 4 }}>{c.l}</div>
            <div style={{ fontSize: 18, fontWeight: 300, color: TT1, letterSpacing: '-0.7px', lineHeight: 1 }}>{c.v}</div>
            {c.sub && <div style={{ fontSize: 6, fontWeight: 500, color: c.c, marginTop: 3 }}>{c.sub}</div>}
          </div>
        ))}
      </div>

      {/* Teacher table */}
      <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,.06)', border: '0.5px solid rgba(0,85,255,.07)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 7 }}>
          <div style={{ fontSize: 9, fontWeight: 500, color: TT1 }}>Teacher Performance — Network</div>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 3 }}>
            {['Composite ↓', 'Branch', 'Subject', 'All'].map((s, i) => (
              <div key={s} style={{ fontSize: 6, fontWeight: 500, color: i === 0 ? '#fff' : TT3, background: i === 0 ? BLUE : '#F4F7FE', padding: '3px 7px', borderRadius: 999 }}>{s}</div>
            ))}
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '20px 1.4fr 70px 70px 60px 60px 60px 60px', gap: 5, fontSize: 6, fontWeight: 500, color: TT4, textTransform: 'uppercase' as const, letterSpacing: '0.1em', padding: '4px 0', borderBottom: '0.5px solid #F1F5F9' }}>
          <div>#</div><div>Teacher</div><div>Branch</div><div>Subject</div><div style={{ textAlign: 'right' }}>Att.</div><div style={{ textAlign: 'right' }}>Class Avg</div><div style={{ textAlign: 'right' }}>NPS</div><div style={{ textAlign: 'right' }}>Score</div>
        </div>
        {[
          { r: 1, n: 'Vikram Shah', br: 'Bandra', s: 'Physics', att: '99%', avg: '88.4', nps: '4.9', score: 97.8, c: GREEN },
          { r: 2, n: 'Priya Iyer', br: 'Koramangala', s: 'Math', att: '98%', avg: '86.1', nps: '4.8', score: 95.2, c: GREEN },
          { r: 3, n: 'Aryan Reddy', br: 'Bandra', s: 'English', att: '98%', avg: '83.6', nps: '4.7', score: 92.4, c: GREEN },
          { r: 4, n: 'Neha Kapoor', br: 'Saket', s: 'Chemistry', att: '96%', avg: '81.0', nps: '4.5', score: 91.0, c: BLUE },
          { r: 5, n: 'Rahul Mehta', br: 'Bandra', s: 'Biology', att: '95%', avg: '79.5', nps: '4.4', score: 89.5, c: BLUE },
          { r: 6, n: 'Sara Khan', br: 'Jubilee Hills', s: 'History', att: '94%', avg: '77.2', nps: '4.3', score: 87.2, c: BLUE },
          { r: 7, n: 'Akash Gupta', br: 'Koramangala', s: 'Math', att: '92%', avg: '75.6', nps: '4.1', score: 85.6, c: GOLD },
          { r: 8, n: 'Riya Sharma', br: 'Saket', s: 'English', att: '90%', avg: '73.1', nps: '3.9', score: 84.1, c: GOLD },
          { r: 9, n: 'Manish Joshi', br: 'Jubilee Hills', s: 'Physics', att: '78%', avg: '62.4', nps: '3.4', score: 64.2, c: RED },
        ].map((t, i) => (
          <div key={t.r} style={{ display: 'grid', gridTemplateColumns: '20px 1.4fr 70px 70px 60px 60px 60px 60px', gap: 5, fontSize: 7, padding: '4px 0', borderBottom: i < 8 ? '0.5px solid #F1F5F9' : 'none', alignItems: 'center' }}>
            <div style={{ fontWeight: 500, color: TT3 }}>{t.r}</div>
            <div style={{ fontSize: 8, fontWeight: 500, color: TT1 }}>{t.n}</div>
            <div style={{ color: TT4, fontSize: 6 }}>{t.br}</div>
            <div style={{ color: TT3, fontSize: 6 }}>{t.s}</div>
            <div style={{ textAlign: 'right', color: TT3 }}>{t.att}</div>
            <div style={{ textAlign: 'right', color: TT3 }}>{t.avg}</div>
            <div style={{ textAlign: 'right', color: TT3 }}>{t.nps}</div>
            <div style={{ textAlign: 'right', fontSize: 8, fontWeight: 500, color: t.c }}>{t.score}</div>
          </div>
        ))}
      </div>
    </div>
  </OwnerIPadShell>
);

export default OwnerTeacherPerformanceIPad;
