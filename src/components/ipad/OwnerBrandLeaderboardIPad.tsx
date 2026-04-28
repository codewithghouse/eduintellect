/**
 * Static iPad mockup — Owner › Brand Leaderboard page.
 * Mirrors /branch-leaderboard from owner-dashboard (the OwnerDashboardDesktop view).
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
const GOLD = '#FFD700';
const SILVER = '#A8A8B5';
const BRONZE = '#8B5A2B';
const VIOLET = '#0055FF';

const OwnerBrandLeaderboardIPad = () => (
  <OwnerIPadShell activePath="/branch-leaderboard">
    <div style={{ padding: 12 }}>
      {/* Hero strip — dark navy */}
      <div style={{
        borderRadius: 12, padding: '14px 16px',
        background: `linear-gradient(135deg, ${NAVY_DEEP} 0%, ${NAVY} 35%, #0044CC 70%, ${BLUE} 100%)`,
        color: '#fff', marginBottom: 8, position: 'relative', overflow: 'hidden',
        boxShadow: '0 6px 18px rgba(0,8,60,0.22)',
      }}>
        <div style={{ position: 'absolute', top: -25, right: -25, width: 110, height: 110, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,215,0,.16) 0%, transparent 65%)' }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
            <span style={{
              fontSize: 6, fontWeight: 500, color: '#FFD166',
              letterSpacing: '0.18em', textTransform: 'uppercase' as const,
              background: 'rgba(255,209,102,.18)', padding: '3px 7px', borderRadius: 999,
            }}>⚡ Edullent Group · April 2026</span>
          </div>
          <div style={{ fontSize: 18, fontWeight: 400, color: '#fff', letterSpacing: '-0.5px' }}>Branch Leaderboard</div>
          <div style={{ fontSize: 8, color: 'rgba(255,255,255,.55)', marginTop: 3 }}>Composite-ranked across attendance, academic results, and fee collection.</div>

          {/* 5 KPI tiles */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 1, marginTop: 10, background: 'rgba(255,255,255,.12)', borderRadius: 8, overflow: 'hidden' }}>
            {[
              { l: 'BRANCHES', v: '4' },
              { l: 'STUDENTS', v: '4,286' },
              { l: 'TEACHERS', v: '259' },
              { l: 'NETWORK AVG', v: '87.0', sub: 'Top 91.0', col: '#6FFFAA' },
              { l: 'FEES Q1', v: '₹4.2 Cr', col: '#FFDD55' },
            ].map(s => (
              <div key={s.l} style={{ background: 'rgba(0,20,80,.6)', padding: '8px 10px' }}>
                <div style={{ fontSize: 6, fontWeight: 500, color: 'rgba(255,255,255,.55)', letterSpacing: '0.12em' }}>{s.l}</div>
                <div style={{ fontSize: 13, fontWeight: 400, color: s.col || '#fff', marginTop: 2, letterSpacing: '-0.3px' }}>{s.v}</div>
                {s.sub && <div style={{ fontSize: 5, color: 'rgba(255,255,255,.5)', marginTop: 1 }}>{s.sub}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2-col charts: Composite ranking + 6-month trend */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7, marginBottom: 8 }}>
        <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,.06)', border: '0.5px solid rgba(0,85,255,.07)' }}>
          <div style={{ fontSize: 6, fontWeight: 500, color: TT3, letterSpacing: '0.18em', textTransform: 'uppercase' as const, marginBottom: 4 }}>Composite Ranking</div>
          <div style={{ fontSize: 9, fontWeight: 500, color: TT1, marginBottom: 8 }}>Where each branch stands this month</div>
          {[
            { name: 'Edullent Bandra', score: 91, color: BLUE },
            { name: 'Edullent Koramangala', score: 87, color: SILVER },
            { name: 'Edullent Saket', score: 78, color: BRONZE },
            { name: 'Edullent Jubilee Hills', score: 75, color: RED },
          ].map(b => (
            <div key={b.name} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 5 }}>
              <div style={{ fontSize: 7, color: TT3, minWidth: 80 }}>{b.name.replace('Edullent ', '')}</div>
              <div style={{ flex: 1, height: 14, background: '#F1F5F9', borderRadius: 3, overflow: 'hidden', position: 'relative' }}>
                <div style={{ background: b.color, height: '100%', width: `${b.score}%`, borderRadius: 3 }} />
                <span style={{ position: 'absolute', right: 4, top: '50%', transform: 'translateY(-50%)', fontSize: 6, fontWeight: 500, color: '#fff' }}>{b.score}</span>
              </div>
            </div>
          ))}
          <div style={{ marginTop: 6, padding: '5px 8px', background: '#F4F7FE', borderRadius: 6, fontSize: 6, fontWeight: 500, color: BLUE, textAlign: 'center' }}>
            Click any bar for full analysis · Network avg 87.0
          </div>
        </div>

        <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,.06)', border: '0.5px solid rgba(0,85,255,.07)' }}>
          <div style={{ fontSize: 6, fontWeight: 500, color: TT3, letterSpacing: '0.18em', textTransform: 'uppercase' as const, marginBottom: 4 }}>6-Month Composite Trend</div>
          <div style={{ fontSize: 9, fontWeight: 500, color: TT1, marginBottom: 6 }}>Top branches over time</div>
          <svg viewBox="0 0 300 110" style={{ width: '100%', height: 110 }}>
            {[
              { v: 100, y: 8 },
              { v: 75, y: 38 },
              { v: 50, y: 68 },
              { v: 25, y: 82 },
              { v: 0, y: 96 },
            ].map(g => (
              <g key={g.v}>
                <text x="0" y={g.y + 3} fontSize="7" fill={TT4}>{g.v}</text>
                <line x1="20" y1={g.y} x2="298" y2={g.y} stroke="#F1F5F9" strokeWidth="0.5" />
              </g>
            ))}
            <path d="M 22 32 L 70 30 L 118 28 L 166 26 L 214 24 L 262 22 L 298 22" fill="none" stroke={BLUE} strokeWidth="2" strokeLinecap="round" />
            <path d="M 22 38 L 70 36 L 118 34 L 166 33 L 214 32 L 262 30 L 298 30" fill="none" stroke={GOLD} strokeWidth="2" strokeLinecap="round" />
            <path d="M 22 42 L 70 40 L 118 39 L 166 38 L 214 37 L 262 36 L 298 36" fill="none" stroke={VIOLET} strokeWidth="2" strokeLinecap="round" />
            <path d="M 22 56 L 70 54 L 118 60 L 166 64 L 214 62 L 262 58 L 298 56" fill="none" stroke={RED} strokeWidth="2" strokeLinecap="round" />
            {['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'].map((m, i) => (
              <text key={m} x={22 + i * 48} y="108" fontSize="7" fill={TT4} textAnchor="middle">{m}</text>
            ))}
          </svg>
          <div style={{ display: 'flex', gap: 8, marginTop: 4, flexWrap: 'wrap' }}>
            {[
              { l: 'Bandra', c: BLUE },
              { l: 'Koramangala', c: GOLD },
              { l: 'Saket', c: VIOLET },
              { l: 'Jubilee', c: RED },
            ].map(l => (
              <div key={l.l} style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: l.c }} />
                <span style={{ fontSize: 5, color: TT3, fontWeight: 500 }}>{l.l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3-col branch quick-glance cards */}
      <div style={{ marginBottom: 8 }}>
        <div style={{ fontSize: 6, fontWeight: 500, color: TT3, letterSpacing: '0.18em', textTransform: 'uppercase' as const, marginBottom: 4 }}>All Branches</div>
        <div style={{ fontSize: 9, fontWeight: 500, color: TT1, marginBottom: 6 }}>Quick-glance ranking cards</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6 }}>
          {[
            { rank: 1, name: 'Bandra', score: 91, color: GOLD, growth: '+3.2', students: 1248 },
            { rank: 2, name: 'Koramangala', score: 87, color: SILVER, growth: '+1.4', students: 1156 },
            { rank: 3, name: 'Saket', score: 78, color: BRONZE, growth: '−0.6', students: 982 },
            { rank: 4, name: 'Jubilee Hills', score: 75, color: RED, growth: '−1.2', students: 900 },
          ].map(b => (
            <div key={b.name} style={{ background: '#fff', borderRadius: 9, padding: 8, border: `0.5px solid ${b.color}33`, boxShadow: '0 4px 10px rgba(20,40,90,.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4 }}>
                <div style={{ width: 20, height: 20, borderRadius: '50%', background: `linear-gradient(135deg, ${b.color}, ${b.color}DD)`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontWeight: 500 }}>#{b.rank}</div>
                <div style={{ fontSize: 8, fontWeight: 500, color: TT1 }}>{b.name}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                <span style={{ fontSize: 14, fontWeight: 400, color: b.color, letterSpacing: '-0.4px' }}>{b.score}</span>
                <span style={{ fontSize: 6, color: b.growth.startsWith('+') ? GREEN : RED, fontWeight: 500 }}>{b.growth}</span>
              </div>
              <div style={{ fontSize: 6, color: TT4, marginTop: 3 }}>{b.students.toLocaleString()} students</div>
            </div>
          ))}
        </div>
      </div>

      {/* AI insight panel for selected branch */}
      <div style={{
        background: `linear-gradient(135deg, ${VIOLET} 0%, #003ECC 100%)`,
        color: '#fff', borderRadius: 11, padding: 10,
        boxShadow: '0 6px 18px rgba(0,85,255,.22)',
        position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'flex-start', gap: 9,
      }}>
        <div style={{ position: 'absolute', top: -20, right: -20, width: 80, height: 80, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,.18) 0%, transparent 65%)' }} />
        <div style={{ width: 28, height: 28, borderRadius: 8, background: 'rgba(255,255,255,.18)', border: '0.5px solid rgba(255,255,255,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative', zIndex: 2 }}>
          <span style={{ fontSize: 14, color: '#FFDD55' }}>✦</span>
        </div>
        <div style={{ flex: 1, position: 'relative', zIndex: 2 }}>
          <div style={{ fontSize: 6, fontWeight: 500, color: 'rgba(255,255,255,.7)', letterSpacing: '0.18em', textTransform: 'uppercase' as const, marginBottom: 3 }}>
            AI Analysis · Bandra (Top branch)
          </div>
          <div style={{ fontSize: 8, color: '#fff', lineHeight: 1.45 }}>
            Bandra leads on 4 of 5 metrics. Their <b style={{ color: '#FFD166', fontWeight: 500 }}>evening tutoring pilot</b> moved avg score from 82.1 → 86.4 in 90 days. <b style={{ color: '#FFD166', fontWeight: 500 }}>Roll out to Jubilee Hills</b> (lowest avg) — projected lift +3.8 in 90d.
          </div>
        </div>
      </div>
    </div>
  </OwnerIPadShell>
);

export default OwnerBrandLeaderboardIPad;
