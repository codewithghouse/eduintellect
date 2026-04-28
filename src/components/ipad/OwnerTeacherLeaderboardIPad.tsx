/**
 * Static iPad mockup — Owner › Teacher Leaderboard page.
 * Mirrors /teacher-leaderboard from owner-dashboard.
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

const OwnerTeacherLeaderboardIPad = () => (
  <OwnerIPadShell activePath="/teacher-leaderboard">
    <div style={{ padding: 12 }}>
      {/* Hero */}
      <div style={{
        borderRadius: 12, padding: '12px 14px',
        background: `linear-gradient(135deg, ${NAVY_DEEP} 0%, ${NAVY} 35%, #0044CC 70%, ${BLUE} 100%)`,
        color: '#fff', marginBottom: 8, position: 'relative', overflow: 'hidden',
        boxShadow: '0 6px 18px rgba(0,8,60,0.22)',
      }}>
        <div style={{ position: 'absolute', top: -25, right: -25, width: 110, height: 110, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,215,0,.18) 0%, transparent 65%)' }} />
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 12 }}>
          <div>
            <div style={{ fontSize: 6, fontWeight: 500, color: 'rgba(255,255,255,.7)', letterSpacing: '0.18em', textTransform: 'uppercase' as const, marginBottom: 4 }}>
              Teacher Leaderboard · Network
            </div>
            <div style={{ fontSize: 16, fontWeight: 400, letterSpacing: '-0.4px' }}>Auto-ranked by outcomes + engagement</div>
            <div style={{ fontSize: 8, color: 'rgba(255,255,255,.6)', marginTop: 3 }}>259 teachers · refreshed every Monday</div>
          </div>
          <div style={{ display: 'flex', gap: 4 }}>
            {['Week', 'Month', 'Term'].map((p, i) => (
              <div key={p} style={{
                padding: '4px 10px', borderRadius: 999, fontSize: 7, fontWeight: 500,
                background: i === 1 ? '#fff' : 'rgba(255,255,255,.16)',
                color: i === 1 ? NAVY_DEEP : '#fff',
                border: '0.5px solid rgba(255,255,255,.24)',
              }}>{p}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Podium top 3 */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr 1fr', gap: 7, marginBottom: 8, alignItems: 'end' }}>
        {[
          { rank: 2, name: 'Priya Iyer', branch: 'Koramangala', subject: 'Math', score: 95.2, c: SILVER, h: 90 },
          { rank: 1, name: 'Vikram Shah', branch: 'Bandra', subject: 'Physics', score: 97.8, c: GOLD, h: 110 },
          { rank: 3, name: 'Aryan Reddy', branch: 'Bandra', subject: 'English', score: 92.4, c: BRONZE, h: 75 },
        ].map(p => (
          <div key={p.rank} style={{
            background: '#fff', border: '0.5px solid rgba(0,85,255,.07)', borderRadius: 11,
            padding: '8px 8px 6px', boxShadow: '0 4px 12px rgba(20,40,90,.06)',
            textAlign: 'center', minHeight: p.h,
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end',
          }}>
            <div style={{
              width: 30, height: 30, borderRadius: '50%',
              background: `linear-gradient(135deg, ${p.c}, ${p.c}DD)`,
              color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 10, fontWeight: 500,
              boxShadow: `0 4px 10px ${p.c}55`, marginBottom: 5,
            }}>#{p.rank}</div>
            <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#EDF2FF', color: '#3B5BDB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontWeight: 500, marginBottom: 4 }}>
              {p.name.split(' ').map(x => x[0]).join('')}
            </div>
            <div style={{ fontSize: 8, fontWeight: 500, color: TT1, lineHeight: 1.1 }}>{p.name}</div>
            <div style={{ fontSize: 6, color: TT4, marginTop: 1 }}>{p.branch} · {p.subject}</div>
            <div style={{ fontSize: 11, fontWeight: 400, color: p.c, marginTop: 3, letterSpacing: '-0.3px' }}>{p.score}</div>
          </div>
        ))}
      </div>

      {/* Rest of network */}
      <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,.06)', border: '0.5px solid rgba(0,85,255,.07)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 7 }}>
          <div style={{ fontSize: 9, fontWeight: 500, color: TT1 }}>Rest of the network</div>
          <div style={{ marginLeft: 'auto', fontSize: 6, fontWeight: 500, color: TT3, background: '#F4F7FE', padding: '3px 7px', borderRadius: 999 }}>256 more</div>
        </div>
        {[
          { r: 4, n: 'Neha Kapoor', br: 'Saket', s: 'Chemistry', score: 91.0, ch: '↑1' },
          { r: 5, n: 'Rahul Mehta', br: 'Bandra', s: 'Biology', score: 89.5, ch: '−' },
          { r: 6, n: 'Sara Khan', br: 'Jubilee Hills', s: 'History', score: 87.2, ch: '↓2' },
          { r: 7, n: 'Akash Gupta', br: 'Koramangala', s: 'Math', score: 85.6, ch: '↑1' },
          { r: 8, n: 'Riya Sharma', br: 'Saket', s: 'English', score: 84.1, ch: '↑3' },
          { r: 9, n: 'Tanvi Desai', br: 'Bandra', s: 'Computer', score: 83.0, ch: '↑2' },
          { r: 10, n: 'Karan Verma', br: 'Koramangala', s: 'Social', score: 81.4, ch: '↓1' },
        ].map((t, i) => (
          <div key={t.r} style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '5px 6px', borderBottom: i < 6 ? '0.5px solid #F1F5F9' : 'none' }}>
            <div style={{ fontSize: 9, fontWeight: 500, color: TT3, minWidth: 18, textAlign: 'center' }}>#{t.r}</div>
            <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#EDF2FF', color: '#3B5BDB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 7, fontWeight: 500 }}>
              {t.n.split(' ').map(p => p[0]).join('')}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 8, fontWeight: 500, color: TT1, lineHeight: 1.2 }}>{t.n}</div>
              <div style={{ fontSize: 6, color: TT4, marginTop: 1 }}>{t.br} · {t.s}</div>
            </div>
            <div style={{ fontSize: 8, fontWeight: 500, color: TT1, minWidth: 30, textAlign: 'right' }}>{t.score}</div>
            <div style={{
              fontSize: 6, fontWeight: 500,
              color: t.ch.includes('↑') ? GREEN : t.ch.includes('↓') ? RED : TT4,
              background: t.ch.includes('↑') ? 'rgba(0,200,83,.12)' : t.ch.includes('↓') ? 'rgba(255,51,85,.12)' : 'rgba(153,170,204,.12)',
              padding: '2px 5px', borderRadius: 999, minWidth: 22, textAlign: 'center',
            }}>{t.ch}</div>
          </div>
        ))}
      </div>
    </div>
  </OwnerIPadShell>
);

export default OwnerTeacherLeaderboardIPad;
