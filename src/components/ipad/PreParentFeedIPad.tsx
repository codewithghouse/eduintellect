/**
 * Static iPad mockup — Pre-Primary Parent · Daily Feed.
 * Instagram-stories style slot timeline + meals + nap + diaper + teacher
 * notes — the day's rhythm parents actually want, not a 200-page Excel.
 */

import PrePrimaryParentIPadShell from './PrePrimaryParentIPadShell';

const PreParentFeedIPad = () => {
  const NAVY = '#1e3272';
  const PEACH = '#FB923C';
  const MINT = '#10B981';
  const BLUSH = '#EC4899';
  const SKY = '#0EA5E9';
  const LAV = '#A78BFA';
  const BUTTER = '#F59E0B';
  const T1 = '#0F172A';
  const T3 = '#64748B';

  return (
    <PrePrimaryParentIPadShell activePath="/feed">
      <div style={{ background: 'linear-gradient(180deg, #FFF8F0 0%, #F0F9FF 100%)', flex: 1, overflowY: 'auto', minHeight: 0, padding: '10px 12px 12px', fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif" }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 9 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 3 }}>
              <span style={{ width: 4, height: 4, borderRadius: 1, background: PEACH }} />
              <span style={{ fontSize: 6, fontWeight: 700, color: PEACH, letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>Mira&apos;s daily stream</span>
            </div>
            <h1 style={{ fontSize: 20, fontWeight: 800, color: T1, letterSpacing: '-0.5px', lineHeight: 1.05, margin: 0 }}>Today&apos;s feed</h1>
            <div style={{ fontSize: 7.5, color: T3, fontWeight: 500, marginTop: 2 }}>Live · auto-rolled from the teacher&apos;s logs</div>
          </div>
          <span style={{ fontSize: 6, fontWeight: 800, color: '#fff', background: PEACH, padding: '3px 8px', borderRadius: 999, letterSpacing: '0.06em' }}>
            6 events · 1 hour ago
          </span>
        </div>

        {/* Stories strip */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 9, overflow: 'hidden' }}>
          {[
            { l: 'Circle', e: '🎵', c: NAVY,   t: '8:32' },
            { l: 'Snack',  e: '🍪', c: PEACH,  t: '9:15' },
            { l: 'Art',    e: '🎨', c: BLUSH,  t: '10:00' },
            { l: 'Nap',    e: '😴', c: LAV,    t: '10:45' },
            { l: 'Story',  e: '📖', c: SKY,    t: '11:30' },
            { l: 'Lunch',  e: '🍱', c: BUTTER, t: '12:00' },
          ].map(s => (
            <div key={s.l} style={{
              flex: 1, padding: '4px',
              background: `linear-gradient(135deg, ${s.c}, ${s.c}aa)`,
              borderRadius: 12,
              textAlign: 'center',
              boxShadow: `0 3px 8px ${s.c}33`,
            }}>
              <div style={{
                background: '#fff', borderRadius: 10, padding: '5px 4px 7px',
              }}>
                <div style={{ fontSize: 17 }}>{s.e}</div>
                <div style={{ fontSize: 6.5, fontWeight: 800, color: s.c, letterSpacing: '-0.1px', marginTop: 2 }}>{s.l}</div>
                <div style={{ fontSize: 5, color: T3, fontWeight: 700, marginTop: 1 }}>{s.t}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Two-column body */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7 }}>
          {/* Left: live event cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            {/* Meals card */}
            <div style={{ background: '#fff', borderRadius: 11, padding: '8px 9px', boxShadow: '0 3px 9px rgba(15,23,42,0.05)', borderLeft: `2px solid ${PEACH}` }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 6.5, fontWeight: 800, color: PEACH, letterSpacing: '0.16em', textTransform: 'uppercase' as const }}>🍪 Snack · 9:15</span>
                <span style={{ fontSize: 5.5, color: T3, fontWeight: 700 }}>Ate most</span>
              </div>
              <div style={{ fontSize: 8, fontWeight: 700, color: T1, letterSpacing: '-0.1px', marginTop: 3 }}>Banana muffin + apple slices</div>
              <div style={{ display: 'flex', gap: 4, marginTop: 5 }}>
                {['Eaten ~75%', 'No allergens', 'Asked for more'].map(c => (
                  <span key={c} style={{ fontSize: 5.5, fontWeight: 700, color: PEACH, background: `${PEACH}14`, padding: '1.5px 5px', borderRadius: 999, letterSpacing: '0.04em' }}>{c}</span>
                ))}
              </div>
            </div>

            {/* Nap card */}
            <div style={{ background: '#fff', borderRadius: 11, padding: '8px 9px', boxShadow: '0 3px 9px rgba(15,23,42,0.05)', borderLeft: `2px solid ${LAV}` }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 6.5, fontWeight: 800, color: LAV, letterSpacing: '0.16em', textTransform: 'uppercase' as const }}>😴 Nap · 10:45 → 11:27</span>
                <span style={{ fontSize: 5.5, fontWeight: 800, color: '#fff', background: MINT, padding: '1.5px 5px', borderRadius: 999, letterSpacing: '0.06em' }}>Restful</span>
              </div>
              <div style={{ fontSize: 8, fontWeight: 700, color: T1, letterSpacing: '-0.1px', marginTop: 3 }}>42 minutes · Mr. Bear in tow</div>
              <div style={{ height: 4, background: '#F1F5F9', borderRadius: 999, marginTop: 6, overflow: 'hidden' }}>
                <div style={{ width: '76%', height: '100%', background: `linear-gradient(90deg, ${LAV}, ${LAV}aa)`, borderRadius: 999 }} />
              </div>
              <div style={{ fontSize: 5.5, color: T3, fontWeight: 700, marginTop: 3, letterSpacing: '0.04em' }}>
                Average for the class · 38 min
              </div>
            </div>

            {/* Diaper / care card */}
            <div style={{ background: '#fff', borderRadius: 11, padding: '8px 9px', boxShadow: '0 3px 9px rgba(15,23,42,0.05)', borderLeft: `2px solid ${MINT}` }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 6.5, fontWeight: 800, color: MINT, letterSpacing: '0.16em', textTransform: 'uppercase' as const }}>🍃 Care · 9:02 + 12:14</span>
                <span style={{ fontSize: 5.5, color: T3, fontWeight: 700 }}>2 logs</span>
              </div>
              <div style={{ display: 'flex', gap: 4, marginTop: 5 }}>
                <span style={{ fontSize: 5.5, fontWeight: 700, color: MINT, background: `${MINT}14`, padding: '2px 5px', borderRadius: 999, letterSpacing: '0.04em' }}>Dry check · 9:02</span>
                <span style={{ fontSize: 5.5, fontWeight: 700, color: SKY, background: `${SKY}14`, padding: '2px 5px', borderRadius: 999, letterSpacing: '0.04em' }}>Washroom · 12:14</span>
              </div>
            </div>
          </div>

          {/* Right: teacher notes + milestones */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            {/* Note */}
            <div style={{ background: '#fff', borderRadius: 11, padding: '8px 10px', boxShadow: '0 3px 9px rgba(15,23,42,0.05)', borderLeft: `2px solid ${BLUSH}` }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 6.5, fontWeight: 800, color: BLUSH, letterSpacing: '0.16em', textTransform: 'uppercase' as const }}>💌 From Priya · 10:24</span>
                <span style={{ fontSize: 5, fontWeight: 800, color: '#fff', background: NAVY, padding: '1.5px 5px', borderRadius: 999, letterSpacing: '0.06em' }}>Parent visible</span>
              </div>
              <div style={{ fontSize: 7.5, color: T1, fontWeight: 500, letterSpacing: '-0.1px', lineHeight: 1.5, marginTop: 4 }}>
                Mira sorted the puzzle pieces by colour today without help. Asked &ldquo;why is red first?&rdquo; — connected her own answer.
              </div>
              <div style={{ display: 'flex', gap: 4, marginTop: 5 }}>
                <span style={{ fontSize: 5, fontWeight: 700, color: NAVY, background: `${NAVY}10`, padding: '1.5px 4px', borderRadius: 999, letterSpacing: '0.06em' }}>Cognitive</span>
                <span style={{ fontSize: 5, fontWeight: 700, color: MINT, background: `${MINT}10`, padding: '1.5px 4px', borderRadius: 999, letterSpacing: '0.06em' }}>Positive</span>
              </div>
            </div>

            {/* Milestone */}
            <div style={{
              background: `linear-gradient(135deg, ${BUTTER}1f, ${PEACH}10)`,
              borderRadius: 11, padding: '9px 10px',
              position: 'relative', overflow: 'hidden',
              border: `0.5px solid ${BUTTER}33`,
            }}>
              <div aria-hidden style={{ position: 'absolute', right: -4, bottom: -8, fontSize: 32, opacity: 0.16 }}>🌟</div>
              <div style={{ fontSize: 6, color: BUTTER, fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase' as const, marginBottom: 4 }}>🌟 Milestone tagged · today</div>
              <div style={{ fontSize: 8.5, fontWeight: 800, color: T1, letterSpacing: '-0.15px', marginBottom: 4 }}>
                Recognises colours by name
              </div>
              <div style={{ fontSize: 6.5, color: T3, fontWeight: 600, marginBottom: 6 }}>NEP 2020 · Cognitive domain</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                {['Beg', 'Dev', 'Ach', 'Exc'].map((b, i) => (
                  <span key={b} style={{
                    flex: 1, fontSize: 5, fontWeight: 800, padding: '2.5px 0',
                    borderRadius: 999, textAlign: 'center',
                    background: i === 2 ? BUTTER : '#fff',
                    color: i === 2 ? '#fff' : T3,
                    letterSpacing: '0.08em',
                    boxShadow: i === 2 ? `0 2px 5px ${BUTTER}55` : 'none',
                  }}>{b}</span>
                ))}
              </div>
            </div>

            {/* Photo trio */}
            <div style={{ background: '#fff', borderRadius: 11, padding: '8px 9px', boxShadow: '0 3px 9px rgba(15,23,42,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 5 }}>
                <span style={{ fontSize: 6.5, fontWeight: 800, color: BLUSH, letterSpacing: '0.16em', textTransform: 'uppercase' as const }}>📸 Photos · 3 new</span>
                <span style={{ fontSize: 5.5, color: T3, fontWeight: 700 }}>Tap to open Gallery →</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4 }}>
                {[
                  { e: '🎵', g: 'linear-gradient(135deg, #FFE4F0, #DBEAFE)' },
                  { e: '🍪', g: 'linear-gradient(135deg, #FFF4D0, #FFE0B2)' },
                  { e: '🎨', g: 'linear-gradient(135deg, #E0F2FE, #BAE6FD)' },
                ].map((p, i) => (
                  <div key={i} style={{
                    height: 46, borderRadius: 8, background: p.g,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 22, opacity: 0.86,
                  }}>{p.e}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PrePrimaryParentIPadShell>
  );
};

export default PreParentFeedIPad;
