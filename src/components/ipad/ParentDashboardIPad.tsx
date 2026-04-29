/**
 * Static iPad mockup — Parent · Dashboard page.
 * Faithful pixel-shrink of parent-dashboard/src/pages/DashboardPage.tsx (desktop).
 *
 * Layout matches source:
 *   1. Greeting "Good morning, Priya 👋" (gradient on name) + sub + date pill + avatar
 *   2. Row 1 (5-col): Academic Health card (3-col) with ring chart + Profile dark
 *      gradient card (2-col) with student details and class teacher/year tiles
 *   3. Row 2 (4 stat cards): Attendance / Pending Work / Upcoming Tests / Recent Grade
 *      with colored gradient bg + faded decorative icon + value + status
 *   4. Class Leaderboard CTA card (gold trophy)
 *   5. AI Live Summary card with sparkles header
 */

import ParentIPadShell from './ParentIPadShell';

const ParentDashboardIPad = () => {
  const IND = '#0055FF';
  const IND2 = '#001A66';
  const IND3 = '#3D7BFF';
  const T1 = '#0B0F19';
  const T2 = '#1E2536';
  const T3 = '#5A6275';
  const T4 = '#8C92A4';
  const GREEN = '#00C853';
  const ORANGE = '#FF8800';
  const GOLD = '#FFAA00';
  const ROSE = '#FF3355';
  const VIOLET = '#7B3FF4';
  const IND_BDR = 'rgba(0,85,255,0.10)';
  const IND_DARK_GRAD = 'linear-gradient(135deg, #050C28 0%, #0A1A52 35%, #0D2BA8 75%, #1438D6 100%)';

  // Ring chart geometry
  const ringR = 18;
  const ringCirc = 2 * Math.PI * ringR;
  const score = 87;
  const ringOffset = ringCirc - (ringCirc * score / 100);

  return (
    <ParentIPadShell activePath="/">
      <div style={{ background: '#EEF4FF', flex: 1, overflowY: 'auto', minHeight: 0, padding: '10px 12px 12px', fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif" }}>

        {/* Greeting */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8, marginBottom: 9 }}>
          <div>
            <h1 style={{ fontSize: 18, fontWeight: 800, color: T1, letterSpacing: '-0.5px', lineHeight: 1.05, margin: 0 }}>
              Good morning,{' '}
              <span style={{ background: `linear-gradient(130deg, ${IND} 0%, ${IND3} 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Priya
              </span> 👋
            </h1>
            <p style={{ fontSize: 7.5, color: T3, marginTop: 3, letterSpacing: '-0.1px', fontWeight: 500 }}>
              Here's how Aarav is doing today
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
              <span style={{ fontSize: 5.5, fontWeight: 800, color: T4, letterSpacing: '0.14em', textTransform: 'uppercase' as const }}>Tuesday</span>
              <span style={{ fontSize: 7, fontWeight: 700, color: T2, marginTop: 1, letterSpacing: '-0.1px' }}>15 October 2025</span>
            </div>
            <div style={{ width: 24, height: 24, borderRadius: 7, background: `linear-gradient(140deg, ${IND} 0%, ${IND2} 100%)`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontWeight: 800, boxShadow: '0 3px 10px rgba(0,85,255,0.28)' }}>PS</div>
          </div>
        </div>

        {/* Row 1: Academic Health (3) + Profile (2) */}
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 7, marginBottom: 7 }}>

          {/* Academic Health */}
          <div style={{ background: '#fff', borderRadius: 14, padding: '10px 12px', position: 'relative', overflow: 'hidden', boxShadow: '0 6px 20px rgba(0,85,255,0.10)', border: `0.5px solid ${IND_BDR}` }}>
            <div style={{ position: 'absolute', top: -30, right: -25, width: 130, height: 130, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,85,255,0.05) 0%, transparent 70%)' }} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 6 }}>
                <div>
                  <h3 style={{ fontSize: 9, fontWeight: 800, color: T1, letterSpacing: '-0.2px', margin: 0 }}>Academic Health</h3>
                  <p style={{ fontSize: 6, color: T3, marginTop: 1, fontWeight: 500 }}>Overall performance indicator</p>
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 3, padding: '2px 7px', borderRadius: 999, fontSize: 5.5, fontWeight: 700, background: `${GREEN}1a`, color: '#0A6A2E', border: `0.5px solid ${GREEN}38`, letterSpacing: '-0.1px' }}>
                  <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
                  Improved by 4%
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 8, marginTop: 8 }}>
                <div>
                  <div style={{ fontSize: 30, fontWeight: 800, color: IND, letterSpacing: '-1.5px', lineHeight: 1 }}>{score}%</div>
                  <div style={{ fontSize: 5.5, fontWeight: 800, color: T4, letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginTop: 5 }}>Good Standing</div>
                </div>
                <div style={{ position: 'relative', width: 50, height: 50, flexShrink: 0 }}>
                  <svg viewBox="0 0 50 50" width="50" height="50" style={{ transform: 'rotate(-90deg)' }}>
                    <defs>
                      <linearGradient id="indGradParent" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={IND3} />
                        <stop offset="100%" stopColor={IND} />
                      </linearGradient>
                    </defs>
                    <circle cx="25" cy="25" r={ringR} fill="none" stroke="rgba(0,85,255,0.09)" strokeWidth="4" />
                    <circle cx="25" cy="25" r={ringR} fill="none" stroke="url(#indGradParent)" strokeWidth="4" strokeLinecap="round" strokeDasharray={ringCirc} strokeDashoffset={ringOffset} />
                  </svg>
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 800, color: T1, letterSpacing: '-0.2px' }}>{score}%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile dark card */}
          <div style={{ background: IND_DARK_GRAD, borderRadius: 14, padding: '10px 11px', position: 'relative', overflow: 'hidden', boxShadow: '0 8px 22px rgba(0,85,255,0.22)', border: '0.5px solid rgba(255,255,255,0.18)' }}>
            <div style={{ position: 'absolute', top: -25, right: -20, width: 100, height: 100, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.11) 0%, transparent 70%)' }} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ width: 30, height: 30, borderRadius: 9, background: 'rgba(255,255,255,0.18)', border: '0.5px solid rgba(255,255,255,0.26)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800, marginBottom: 5 }}>AS</div>
              <div style={{ fontSize: 11, fontWeight: 800, color: '#fff', letterSpacing: '-0.3px' }}>Aarav Sharma</div>
              <div style={{ fontSize: 6, color: 'rgba(255,255,255,0.52)', marginTop: 1 }}>Grade 9A · Roll 12</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, marginTop: 6, borderRadius: 7, overflow: 'hidden', background: 'rgba(255,255,255,0.10)' }}>
                <div style={{ padding: '5px 7px', background: 'rgba(255,255,255,0.07)' }}>
                  <div style={{ fontSize: 5, fontWeight: 800, color: 'rgba(255,255,255,0.38)', letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>Class Teacher</div>
                  <div style={{ fontSize: 7, fontWeight: 700, color: '#fff', marginTop: 1, letterSpacing: '-0.1px' }}>Ms. Iyer</div>
                </div>
                <div style={{ padding: '5px 7px', background: 'rgba(255,255,255,0.07)' }}>
                  <div style={{ fontSize: 5, fontWeight: 800, color: 'rgba(255,255,255,0.38)', letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>Year</div>
                  <div style={{ fontSize: 7, fontWeight: 700, color: '#fff', marginTop: 1, letterSpacing: '-0.1px' }}>2025-26</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 stat cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6, marginBottom: 7 }}>
          {[
            { label: 'Attendance', val: '94%', status: 'On track ✓', sc: GREEN, icon: 'check', bg: 'linear-gradient(135deg, rgba(0,200,83,0.13) 0%, rgba(0,200,83,0.04) 100%)', bdr: 'rgba(0,200,83,0.20)' },
            { label: 'Pending Work', val: '3', status: 'Due this week', sc: ORANGE, icon: 'alert', bg: 'linear-gradient(135deg, rgba(255,136,0,0.13) 0%, rgba(255,136,0,0.04) 100%)', bdr: 'rgba(255,136,0,0.22)' },
            { label: 'Upcoming Tests', val: '2', status: 'Mon · Wed', sc: T4, icon: 'cal', bg: 'linear-gradient(135deg, rgba(0,85,255,0.10) 0%, rgba(0,85,255,0.03) 100%)', bdr: 'rgba(0,85,255,0.20)' },
            { label: 'Recent Grade', val: 'A', status: 'Mathematics', sc: T4, icon: 'star', bg: 'linear-gradient(135deg, rgba(255,51,85,0.10) 0%, rgba(255,51,85,0.03) 100%)', bdr: 'rgba(255,51,85,0.20)' },
          ].map(c => (
            <div key={c.label} style={{ background: c.bg, borderRadius: 10, padding: '8px 10px', position: 'relative', overflow: 'hidden', border: `0.5px solid ${c.bdr}`, boxShadow: '0 4px 12px rgba(0,85,255,0.06)' }}>
              <div style={{ position: 'absolute', bottom: 5, right: 5, opacity: 0.18, lineHeight: 0 }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={c.icon === 'check' ? GREEN : c.icon === 'alert' ? ORANGE : c.icon === 'cal' ? IND : ROSE} strokeWidth="1.5">
                  {c.icon === 'check' && <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /></>}
                  {c.icon === 'alert' && <><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></>}
                  {c.icon === 'cal' && <><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></>}
                  {c.icon === 'star' && <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />}
                </svg>
              </div>
              <div style={{ width: 20, height: 20, borderRadius: 6, background: c.icon === 'check' ? `${GREEN}28` : c.icon === 'alert' ? `${ORANGE}28` : c.icon === 'cal' ? `${IND}24` : `${ROSE}24`, color: c.icon === 'check' ? GREEN : c.icon === 'alert' ? ORANGE : c.icon === 'cal' ? IND : ROSE, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 5, position: 'relative' }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  {c.icon === 'check' && <><circle cx="12" cy="12" r="10" /><polyline points="9 12 11 14 15 10" /></>}
                  {c.icon === 'alert' && <><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></>}
                  {c.icon === 'cal' && <><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /></>}
                  {c.icon === 'star' && <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />}
                </svg>
              </div>
              <div style={{ fontSize: 5.5, fontWeight: 800, color: T4, letterSpacing: '0.08em', textTransform: 'uppercase' as const, position: 'relative' }}>{c.label}</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: T1, letterSpacing: '-0.6px', marginTop: 1, lineHeight: 1, position: 'relative' }}>{c.val}</div>
              <div style={{ fontSize: 5.5, fontWeight: 600, color: c.sc, marginTop: 3, position: 'relative' }}>{c.status}</div>
            </div>
          ))}
        </div>

        {/* Class Leaderboard CTA */}
        <div style={{ background: '#fff', borderRadius: 11, padding: '8px 11px', marginBottom: 7, display: 'flex', alignItems: 'center', gap: 9, position: 'relative', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,85,255,0.06)', border: `0.5px solid ${IND_BDR}` }}>
          <div style={{ position: 'absolute', top: -12, right: -12, width: 60, height: 60, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,170,0,0.18) 0%, transparent 70%)' }} />
          <div style={{ width: 24, height: 24, borderRadius: 7, background: `linear-gradient(135deg, #FFD700, ${GOLD})`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 10px rgba(255,170,0,0.32)', position: 'relative', zIndex: 2 }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4"><path d="M6 9H4.5a2.5 2.5 0 010-5H6" /><path d="M18 9h1.5a2.5 2.5 0 000-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17a2 2 0 002 2v0a2 2 0 002-2v-2.34" /><path d="M18 2H6v7a6 6 0 0012 0V2z" /></svg>
          </div>
          <div style={{ flex: 1, minWidth: 0, position: 'relative', zIndex: 2 }}>
            <div style={{ fontSize: 5.5, fontWeight: 800, color: T4, letterSpacing: '0.1em', textTransform: 'uppercase' as const }}>Class Leaderboard</div>
            <div style={{ fontSize: 9, fontWeight: 800, color: T1, letterSpacing: '-0.25px', marginTop: 1 }}>See where Aarav stands this week</div>
            <div style={{ fontSize: 6, color: T3, marginTop: 1, fontWeight: 500 }}>Weekly ranking · AI insights · personalised plan</div>
          </div>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={IND} strokeWidth="2.2" style={{ flexShrink: 0, position: 'relative', zIndex: 2 }}><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
        </div>

        {/* AI Live Summary */}
        <div style={{ background: '#fff', borderRadius: 11, overflow: 'hidden', boxShadow: '0 6px 16px rgba(0,85,255,0.10)', border: `0.5px solid ${IND_BDR}` }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 10px', borderBottom: `0.5px solid ${IND_BDR}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={IND} strokeWidth="2.4"><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1" /></svg>
              <span style={{ fontSize: 7.5, fontWeight: 800, color: T1, letterSpacing: '-0.15px' }}>AI Live Summary</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, padding: '1px 5px', borderRadius: 999, background: `${GREEN}1a`, fontSize: 5, fontWeight: 800, color: '#0A6A2E', letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>
                <span style={{ width: 3, height: 3, borderRadius: '50%', background: GREEN, boxShadow: `0 0 4px ${GREEN}` }} />
                Live
              </span>
            </div>
            <span style={{ fontSize: 5.5, color: T4, fontWeight: 600 }}>Updated 2h ago</span>
          </div>
          <div style={{ padding: '8px 10px' }}>
            <p style={{ fontSize: 7, color: T2, lineHeight: 1.5, fontWeight: 500, margin: 0 }}>
              <strong style={{ color: T1, fontWeight: 700 }}>Aarav had a strong week.</strong> Math performance is up <strong style={{ color: GREEN, fontWeight: 700 }}>+4%</strong>, attendance solid at 94%. Watch out: Biology Ch.7 quiz on Friday — practice cell biology this evening. Behaviour: <strong style={{ color: VIOLET, fontWeight: 700 }}>2 positives</strong> this week from Ms. Iyer.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 7 }}>
              {[
                { l: 'Math ↑ 4%', c: GREEN },
                { l: 'Att 94%', c: GREEN },
                { l: 'Bio quiz Fri', c: ORANGE },
                { l: '2 positives', c: VIOLET },
              ].map(p => (
                <span key={p.l} style={{ fontSize: 5.5, fontWeight: 700, color: p.c, background: `${p.c}1a`, padding: '2px 6px', borderRadius: 999, letterSpacing: '0.04em' }}>{p.l}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ParentIPadShell>
  );
};

export default ParentDashboardIPad;
