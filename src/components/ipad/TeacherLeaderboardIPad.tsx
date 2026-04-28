/**
 * Static iPad mockup — Teacher Leaderboard page (branch-wide rankings).
 * Mirrors /leaderboard/teachers: hero with current rank + podium top 3 +
 * rest-of-list rankings + "your stats" sidebar card.
 */

import IPadShellWithSidebar from './IPadShellWithSidebar';

const TeacherLeaderboardIPad = () => {
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

  const HERO_GRAD = `linear-gradient(135deg, ${NAVY_DEEP} 0%, ${NAVY} 35%, #0044CC 70%, ${BLUE} 100%)`;

  return (
    <IPadShellWithSidebar activePath="/leaderboard">
      {/* Header */}
      <div style={{ padding: '12px 14px 6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4 }}>
          <span style={{ width: 4, height: 4, borderRadius: 1, background: BLUE }} />
          <span style={{ fontSize: 7, fontWeight: 500, color: TT3, letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>
            Teacher Dashboard · Leaderboard
          </span>
        </div>
        <h1 style={{ fontSize: 22, fontWeight: 300, color: TT1, letterSpacing: '-0.7px', lineHeight: 1.05, margin: 0 }}>
          Teacher Rankings
        </h1>
        <div style={{ fontSize: 9, fontWeight: 400, color: TT3, marginTop: 3 }}>
          Branch-wide rankings, refreshed every Monday morning.
        </div>
      </div>

      <div style={{ flex: 1, padding: '6px 12px 12px', overflowY: 'auto', minHeight: 0 }}>
        {/* Hero — Your rank */}
        <div style={{ borderRadius: 14, padding: '14px 16px', background: HERO_GRAD, position: 'relative', overflow: 'hidden', marginBottom: 8, boxShadow: '0 6px 18px rgba(0,8,60,0.22)' }}>
          <div style={{ position: 'absolute', top: -25, right: -25, width: 100, height: 100, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,215,0,0.18) 0%, transparent 65%)' }} />
          <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 50, height: 50, borderRadius: 14, background: `linear-gradient(135deg, ${GOLD}, #FFAA00)`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 500, boxShadow: '0 6px 18px rgba(255,170,0,0.4)' }}>
              #3
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 7, fontWeight: 500, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.18em', textTransform: 'uppercase' as const, marginBottom: 3 }}>Your Rank · Edullent High</div>
              <div style={{ fontSize: 16, fontWeight: 400, color: '#fff', letterSpacing: '-0.4px' }}>3 of 18 teachers</div>
              <div style={{ fontSize: 8, color: '#6FFFAA', marginTop: 2 }}>↑ Up 2 spots from last week</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 2 }}>
              <div style={{ fontSize: 26, fontWeight: 300, color: '#fff', lineHeight: 1, letterSpacing: '-1px' }}>92.4</div>
              <div style={{ fontSize: 7, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.12em', textTransform: 'uppercase' as const }}>Composite</div>
            </div>
          </div>
        </div>

        {/* Podium top 3 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr 1fr', gap: 7, marginBottom: 8, alignItems: 'end' }}>
          {[
            { rank: 2, name: 'Priya Iyer', score: 95.2, dept: 'Mathematics', initials: 'PI', color: SILVER, height: 90 },
            { rank: 1, name: 'Vikram Shah', score: 97.8, dept: 'Physics', initials: 'VS', color: GOLD, height: 110 },
            { rank: 3, name: 'Aryan Reddy', score: 92.4, dept: 'English', initials: 'AR', color: BRONZE, height: 75, you: true },
          ].map(p => (
            <div
              key={p.rank}
              style={{
                background: '#fff',
                border: p.you ? `1.5px solid ${BLUE}` : '0.5px solid rgba(0,85,255,0.07)',
                borderRadius: 11,
                padding: '8px 8px 6px',
                boxShadow: '0 4px 12px rgba(20,40,90,0.06)',
                textAlign: 'center',
                minHeight: p.height,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: `linear-gradient(135deg, ${p.color}, ${p.color}DD)`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 500, boxShadow: `0 4px 10px ${p.color}55`, marginBottom: 6 }}>
                #{p.rank}
              </div>
              <div style={{ width: 26, height: 26, borderRadius: '50%', background: '#EDF2FF', color: '#3B5BDB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontWeight: 500, marginBottom: 4 }}>
                {p.initials}
              </div>
              <div style={{ fontSize: 8, fontWeight: 500, color: TT1, lineHeight: 1.1 }}>{p.name}</div>
              <div style={{ fontSize: 6, color: TT4, marginTop: 1 }}>{p.dept}</div>
              <div style={{ fontSize: 11, fontWeight: 400, color: p.color, marginTop: 3, letterSpacing: '-0.3px' }}>{p.score}</div>
              {p.you && <div style={{ fontSize: 5, fontWeight: 500, color: BLUE, background: 'rgba(0,85,255,0.10)', padding: '2px 5px', borderRadius: 999, marginTop: 3, letterSpacing: '0.08em' }}>YOU</div>}
            </div>
          ))}
        </div>

        {/* Rest of list */}
        <div style={{ background: '#fff', borderRadius: 11, padding: 8, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6, padding: '0 4px' }}>
            <div style={{ fontSize: 8, fontWeight: 500, color: TT1 }}>Rest of the branch</div>
            <div style={{ marginLeft: 'auto', fontSize: 6, fontWeight: 500, color: TT3, background: 'rgba(0,85,255,0.06)', padding: '2px 6px', borderRadius: 999 }}>15 more</div>
          </div>
          {[
            { rank: 4, name: 'Neha Kapoor', dept: 'Chemistry', initials: 'NK', score: 91.0, change: '↑1' },
            { rank: 5, name: 'Rahul Mehta', dept: 'Biology', initials: 'RM', score: 89.5, change: '−' },
            { rank: 6, name: 'Sara Khan', dept: 'History', initials: 'SK', score: 87.2, change: '↓2' },
            { rank: 7, name: 'Akash Gupta', dept: 'Mathematics', initials: 'AG', score: 85.6, change: '↑1' },
            { rank: 8, name: 'Riya Sharma', dept: 'English', initials: 'RS', score: 84.1, change: '↑3' },
          ].map((t, i) => (
            <div key={t.rank} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '5px 6px', borderBottom: i < 4 ? '0.5px solid #F1F5F9' : 'none' }}>
              <div style={{ fontSize: 9, fontWeight: 500, color: TT3, minWidth: 18, textAlign: 'center' }}>#{t.rank}</div>
              <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#EDF2FF', color: '#3B5BDB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 7, fontWeight: 500 }}>
                {t.initials}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 8, fontWeight: 500, color: TT1, lineHeight: 1.2 }}>{t.name}</div>
                <div style={{ fontSize: 6, color: TT4, marginTop: 1 }}>{t.dept}</div>
              </div>
              <div style={{ fontSize: 8, fontWeight: 500, color: TT1, minWidth: 30, textAlign: 'right' }}>{t.score}</div>
              <div
                style={{
                  fontSize: 6,
                  fontWeight: 500,
                  color: t.change.includes('↑') ? GREEN : t.change.includes('↓') ? RED : TT4,
                  background: t.change.includes('↑') ? 'rgba(0,200,83,0.12)' : t.change.includes('↓') ? 'rgba(255,51,85,0.12)' : 'rgba(153,170,204,0.12)',
                  padding: '2px 5px',
                  borderRadius: 999,
                  minWidth: 22,
                  textAlign: 'center',
                }}
              >
                {t.change}
              </div>
            </div>
          ))}
        </div>
      </div>
    </IPadShellWithSidebar>
  );
};

export default TeacherLeaderboardIPad;
