/**
 * Static iPad mockup — Pre-Primary Teacher · Care & Routine consolidated view.
 * Composes the three pre-primary-specific surfaces no K-12 software thinks
 * about: Diaper log + Meals & Nap + Pickup verification.
 */

import PrePrimaryTeacherIPadShell from './PrePrimaryTeacherIPadShell';

const PreTeacherCareRoutineIPad = () => {
  const NAVY = '#1e3272';
  const PEACH = '#FB923C';
  const MINT = '#10B981';
  const SKY = '#0EA5E9';
  const LAV = '#A78BFA';
  const BUTTER = '#F59E0B';
  const T1 = '#0F172A';
  const T3 = '#64748B';

  return (
    <PrePrimaryTeacherIPadShell activePath="/meals-nap">
      <div style={{ background: '#FFF8F0', flex: 1, overflowY: 'auto', minHeight: 0, padding: '10px 12px 12px', fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif" }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 9 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 3 }}>
              <span style={{ width: 4, height: 4, borderRadius: 1, background: PEACH }} />
              <span style={{ fontSize: 6, fontWeight: 700, color: PEACH, letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>The Toddler Day</span>
            </div>
            <h1 style={{ fontSize: 21, fontWeight: 800, color: T1, letterSpacing: '-0.6px', lineHeight: 1.05, margin: 0 }}>Care &amp; Routine</h1>
            <div style={{ fontSize: 8, fontWeight: 500, color: T3, marginTop: 3 }}>Diaper · Meals &amp; Nap · Pickup — all one tap, all logged to the parent feed.</div>
          </div>
          <span style={{ fontSize: 6.5, fontWeight: 700, padding: '3px 8px', borderRadius: 999, background: `${PEACH}18`, color: PEACH, letterSpacing: '0.06em' }}>
            Auto-synced · 09:14 AM
          </span>
        </div>

        {/* Three-column split */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 7 }}>
          {/* DIAPER LOG */}
          <div style={{ background: '#fff', borderRadius: 12, padding: '9px 10px', boxShadow: '0 3px 10px rgba(15,23,42,0.06)', borderTop: `2.5px solid ${MINT}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 6 }}>
              <div style={{ width: 22, height: 22, borderRadius: 6, background: `${MINT}1a`, color: MINT, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20a8 8 0 008-8V4h-8a8 8 0 100 16z" />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 9, fontWeight: 800, color: T1, letterSpacing: '-0.2px' }}>Diaper log</div>
                <div style={{ fontSize: 5.5, color: T3, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' as const }}>5 quick buttons</div>
              </div>
              <span style={{ fontSize: 5.5, fontWeight: 700, color: '#fff', background: MINT, padding: '2px 5px', borderRadius: 999, letterSpacing: '0.06em' }}>14 today</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, marginBottom: 7 }}>
              {[
                { l: 'Wet',     c: SKY,    e: '💧' },
                { l: 'Soiled',  c: PEACH,  e: '🍂' },
                { l: 'Mixed',   c: BUTTER, e: '🌗' },
                { l: 'Dry check', c: MINT, e: '✓' },
                { l: 'Washroom',c: NAVY,   e: '🚸' },
              ].map((b, i) => (
                <div key={b.l} style={{
                  padding: '4px 6px', borderRadius: 7,
                  background: `${b.c}10`, border: `0.5px solid ${b.c}28`,
                  display: 'flex', alignItems: 'center', gap: 4,
                  gridColumn: i === 4 ? 'span 2' : 'span 1',
                }}>
                  <span style={{ fontSize: 9 }}>{b.e}</span>
                  <span style={{ fontSize: 7, fontWeight: 700, color: b.c, letterSpacing: '-0.1px' }}>{b.l}</span>
                </div>
              ))}
            </div>

            <div style={{ fontSize: 6, color: T3, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 4 }}>Recent</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {[
                { who: 'Aarav', t: '9:02', what: 'Wet · clean change', c: SKY },
                { who: 'Tara',  t: '8:48', what: 'Dry check ok',        c: MINT },
                { who: 'Diya',  t: '8:30', what: 'Washroom · assisted', c: NAVY },
              ].map(r => (
                <div key={r.t} style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '3px 6px', borderRadius: 6, background: '#F8FAFC' }}>
                  <span style={{ width: 4, height: 4, borderRadius: '50%', background: r.c }} />
                  <span style={{ fontSize: 6.5, fontWeight: 700, color: T1 }}>{r.who}</span>
                  <span style={{ fontSize: 6, color: T3, fontWeight: 500, flex: 1, minWidth: 0 }}>{r.what}</span>
                  <span style={{ fontSize: 6, color: T3, fontWeight: 700 }}>{r.t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* MEALS & NAP */}
          <div style={{ background: '#fff', borderRadius: 12, padding: '9px 10px', boxShadow: '0 3px 10px rgba(15,23,42,0.06)', borderTop: `2.5px solid ${PEACH}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 6 }}>
              <div style={{ width: 22, height: 22, borderRadius: 6, background: `${PEACH}1a`, color: PEACH, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="9" cy="10" r="0.6" fill="currentColor" />
                  <circle cx="14" cy="9" r="0.6" fill="currentColor" />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 9, fontWeight: 800, color: T1, letterSpacing: '-0.2px' }}>Meals &amp; Nap</div>
                <div style={{ fontSize: 5.5, color: T3, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' as const }}>4 portions · allergen aware</div>
              </div>
              <span style={{ fontSize: 5.5, fontWeight: 700, color: '#fff', background: PEACH, padding: '2px 5px', borderRadius: 999, letterSpacing: '0.06em' }}>Snack · live</span>
            </div>

            <div style={{ display: 'flex', gap: 3, marginBottom: 6 }}>
              {[
                { l: 'B', e: '🍳', d: 'Breakfast', s: 'Most', c: MINT },
                { l: 'S', e: '🍪', d: 'Snack',     s: 'Eating', c: PEACH },
                { l: 'L', e: '🍱', d: 'Lunch',     s: '12:00',  c: T3 },
                { l: 'T', e: '🥛', d: 'Tea',       s: '3:30',   c: T3 },
              ].map(m => (
                <div key={m.l} style={{ flex: 1, padding: '4px', borderRadius: 7, background: `${m.c}10`, border: `0.5px solid ${m.c}28`, textAlign: 'center' }}>
                  <div style={{ fontSize: 14 }}>{m.e}</div>
                  <div style={{ fontSize: 5.5, fontWeight: 700, color: m.c, letterSpacing: '0.06em', textTransform: 'uppercase' as const, marginTop: 1 }}>{m.d}</div>
                  <div style={{ fontSize: 5.5, color: T3, fontWeight: 700, marginTop: 1 }}>{m.s}</div>
                </div>
              ))}
            </div>

            {/* Allergen flag */}
            <div style={{ padding: '5px 7px', background: '#FEF3C7', borderRadius: 7, marginBottom: 6, display: 'flex', alignItems: 'center', gap: 5, border: '0.5px solid #FDE68A' }}>
              <span style={{ fontSize: 11 }}>⚠️</span>
              <span style={{ fontSize: 6.5, fontWeight: 700, color: '#92400E', letterSpacing: '-0.1px' }}>
                <strong>Ananya R.</strong> · contains peanut · alternative served
              </span>
            </div>

            <div style={{ fontSize: 6, color: T3, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 4 }}>Nap timer</div>
            <div style={{ background: `linear-gradient(135deg, ${LAV}18, ${LAV}08)`, borderRadius: 8, padding: '7px 8px', border: `0.5px solid ${LAV}30` }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontSize: 6.5, color: LAV, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>3 napping</span>
                <span style={{ fontSize: 6, color: T3, fontWeight: 700 }}>Avg 42 min</span>
              </div>
              <div style={{ display: 'flex', gap: 3 }}>
                {['Vivaan · 38m', 'Niharika · 44m', 'Krish · 22m'].map(n => (
                  <span key={n} style={{
                    fontSize: 5.5, fontWeight: 700, color: LAV,
                    background: '#fff', padding: '2px 5px', borderRadius: 999,
                    border: `0.5px solid ${LAV}28`, letterSpacing: '-0.1px',
                  }}>
                    😴 {n}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* PICKUP */}
          <div style={{ background: '#fff', borderRadius: 12, padding: '9px 10px', boxShadow: '0 3px 10px rgba(15,23,42,0.06)', borderTop: `2.5px solid ${NAVY}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 6 }}>
              <div style={{ width: 22, height: 22, borderRadius: 6, background: `${NAVY}1a`, color: NAVY, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z" />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 9, fontWeight: 800, color: T1, letterSpacing: '-0.2px' }}>Pickup</div>
                <div style={{ fontSize: 5.5, color: T3, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' as const }}>ID + auth verify</div>
              </div>
              <span style={{ fontSize: 5.5, fontWeight: 700, color: '#fff', background: NAVY, padding: '2px 5px', borderRadius: 999, letterSpacing: '0.06em' }}>3 of 12</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 7 }}>
              {[
                { name: 'Aarav S.',  picker: 'Mother',      tag: 'Verified ID', tone: MINT,   tick: true },
                { name: 'Mira P.',   picker: 'Father',      tag: 'Verified ID', tone: MINT,   tick: true },
                { name: 'Ishaan K.', picker: 'Grandfather', tag: 'Pending photo', tone: BUTTER, tick: false },
                { name: 'Diya N.',   picker: 'Driver · Ram',tag: 'OTP sent',    tone: SKY,    tick: false },
              ].map(p => (
                <div key={p.name} style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  padding: '5px 7px', borderRadius: 7,
                  background: '#F8FAFC', border: `0.5px solid ${p.tone}22`,
                }}>
                  <div style={{
                    width: 16, height: 16, borderRadius: '50%',
                    background: `${p.tone}22`, color: p.tone,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 7, fontWeight: 800,
                  }}>
                    {p.tick ? '✓' : '⏱'}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 7, fontWeight: 700, color: T1, letterSpacing: '-0.1px' }}>{p.name}</div>
                    <div style={{ fontSize: 5.5, color: T3, fontWeight: 600 }}>{p.picker}</div>
                  </div>
                  <span style={{ fontSize: 5, fontWeight: 700, color: p.tone, background: `${p.tone}14`, padding: '1.5px 4px', borderRadius: 999, letterSpacing: '0.04em' }}>{p.tag}</span>
                </div>
              ))}
            </div>

            <div style={{ padding: '5px 7px', background: `linear-gradient(135deg, ${MINT}14, ${MINT}06)`, borderRadius: 7, border: `0.5px solid ${MINT}28` }}>
              <div style={{ fontSize: 6, fontWeight: 700, color: MINT, letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 2 }}>Mismatch alert</div>
              <div style={{ fontSize: 6.5, color: T1, fontWeight: 700, letterSpacing: '-0.1px' }}>
                Auto-flag if photo or OTP fails — principal pinged.
              </div>
            </div>
          </div>
        </div>
      </div>
    </PrePrimaryTeacherIPadShell>
  );
};

export default PreTeacherCareRoutineIPad;
