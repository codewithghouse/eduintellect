/**
 * Static iPad mockup — Pre-Primary Parent · Today (Home) surface.
 * Mirrors pre-primary-parent-dashboard/src/pages/Home.tsx — live
 * attendance + mood + slot timeline + next-up + pickup + latest note +
 * latest milestone in a single thumb-friendly view.
 */

import PrePrimaryParentIPadShell from './PrePrimaryParentIPadShell';

const PreParentTodayIPad = () => {
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
    <PrePrimaryParentIPadShell activePath="/today">
      <div style={{ background: 'linear-gradient(180deg, #FFF8F0 0%, #FCF5FF 100%)', flex: 1, overflowY: 'auto', minHeight: 0, padding: '10px 12px 12px', fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif" }}>
        {/* Greeting hero */}
        <div style={{
          background: 'linear-gradient(135deg, #FFE4F0 0%, #FFE0B2 55%, #DBEAFE 100%)',
          borderRadius: 18, padding: '12px 16px', marginBottom: 9,
          position: 'relative', overflow: 'hidden',
          boxShadow: '0 6px 18px rgba(251,146,60,0.10)',
        }}>
          <div aria-hidden style={{ position: 'absolute', right: 10, top: 6, fontSize: 36, opacity: 0.8 }}>🌈</div>
          <div style={{ fontSize: 6, fontWeight: 700, color: PEACH, letterSpacing: '0.18em', textTransform: 'uppercase' as const, marginBottom: 4 }}>
            Tuesday · 21 April
          </div>
          <div style={{ fontSize: 18, fontWeight: 800, color: T1, letterSpacing: '-0.5px', lineHeight: 1.1, marginBottom: 4 }}>
            Mira&apos;s world today 🌟
          </div>
          <div style={{ fontSize: 8.5, color: T3, fontWeight: 500, maxWidth: 280 }}>
            She walked in <strong style={{ color: T1 }}>happy</strong> at 8:32 AM. Now in Art Corner.
          </div>
        </div>

        {/* Live attendance + mood pill */}
        <div style={{ background: '#fff', borderRadius: 14, padding: '10px 12px', marginBottom: 9, boxShadow: '0 4px 12px rgba(15,23,42,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{
              width: 34, height: 34, borderRadius: '50%',
              background: `linear-gradient(135deg, ${MINT}, ${MINT}aa)`,
              color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 13, fontWeight: 800,
              boxShadow: `0 3px 8px ${MINT}55`,
              border: '2px solid #fff',
            }}>
              M
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <span style={{ fontSize: 11, fontWeight: 800, color: T1, letterSpacing: '-0.25px' }}>Mira is present</span>
                <span style={{ fontSize: 5.5, fontWeight: 800, color: MINT, background: `${MINT}18`, padding: '1.5px 5px', borderRadius: 999, letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>since 8:32</span>
              </div>
              <div style={{ fontSize: 7, color: T3, fontWeight: 600, marginTop: 2 }}>Mood logged by Priya teacher</div>
            </div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 4,
              padding: '4px 8px', borderRadius: 999,
              background: `${BLUSH}1a`, transform: 'rotate(-2deg)',
              border: `0.5px solid ${BLUSH}33`,
            }}>
              <span style={{ fontSize: 14 }}>😊</span>
              <span style={{ fontSize: 7, fontWeight: 800, color: BLUSH, letterSpacing: '-0.1px' }}>Happy</span>
            </div>
          </div>
        </div>

        {/* 4-tile care row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 5, marginBottom: 9 }}>
          {[
            { l: 'Meals',    v: '3 of 4',  s: 'Lunch coming', c: PEACH,  e: '🍪' },
            { l: 'Nap',      v: '42 min',  s: 'Woke at 1:10', c: LAV,    e: '😴' },
            { l: 'Care',     v: '2 logs',  s: 'Dry-check ok', c: MINT,   e: '🍃' },
            { l: 'Photos',   v: '6 today', s: 'Tap to view',  c: BLUSH,  e: '📸' },
          ].map(t => (
            <div key={t.l} style={{
              background: '#fff', borderRadius: 12, padding: '7px 8px',
              boxShadow: '0 3px 9px rgba(15,23,42,0.05)',
              borderTop: `2px solid ${t.c}`,
              position: 'relative', overflow: 'hidden',
            }}>
              <div aria-hidden style={{ position: 'absolute', right: -4, bottom: -10, fontSize: 30, opacity: 0.12 }}>{t.e}</div>
              <div style={{ fontSize: 5.5, fontWeight: 700, color: t.c, letterSpacing: '0.16em', textTransform: 'uppercase' as const }}>{t.l}</div>
              <div style={{ fontSize: 13, fontWeight: 800, color: T1, letterSpacing: '-0.4px', marginTop: 2 }}>{t.v}</div>
              <div style={{ fontSize: 5.5, color: T3, fontWeight: 600, marginTop: 1 }}>{t.s}</div>
            </div>
          ))}
        </div>

        {/* Slot timeline + next-up */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: 7, marginBottom: 9 }}>
          <div style={{ background: '#fff', borderRadius: 12, padding: '9px 11px', boxShadow: '0 3px 10px rgba(15,23,42,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 6 }}>
              <span style={{ fontSize: 9, fontWeight: 800, color: T1, letterSpacing: '-0.2px' }}>Today&apos;s slots</span>
              <span style={{ fontSize: 6, color: PEACH, fontWeight: 700, letterSpacing: '0.06em' }}>Art Corner · live</span>
            </div>
            <div style={{ display: 'flex', gap: 3 }}>
              {[
                { t: '8:30', n: 'Circle', s: 'done', c: MINT },
                { t: '9:15', n: 'Snack',  s: 'done', c: MINT },
                { t: '10:00',n: 'Art',    s: 'live', c: PEACH },
                { t: '10:45',n: 'Nap',    s: 'next', c: SKY },
                { t: '11:30',n: 'Story',  s: 'planned', c: T3 },
              ].map(s => (
                <div key={s.t} style={{
                  flex: 1, padding: '5px 5px',
                  background: s.s === 'live' ? `${s.c}14` : (s.s === 'done' ? '#F8FAFC' : '#fff'),
                  borderRadius: 8, border: `0.5px solid ${s.c}28`,
                }}>
                  <div style={{ fontSize: 5.5, color: T3, fontWeight: 700, letterSpacing: '0.06em' }}>{s.t}</div>
                  <div style={{ fontSize: 7.5, fontWeight: 800, color: T1, letterSpacing: '-0.15px' }}>{s.n}</div>
                  <div style={{ marginTop: 3, fontSize: 5, color: s.c, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>{s.s}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: `linear-gradient(135deg, ${PEACH}1a, ${BLUSH}10)`, borderRadius: 12, padding: '9px 11px', position: 'relative', overflow: 'hidden' }}>
            <div aria-hidden style={{ position: 'absolute', right: -6, bottom: -10, fontSize: 36, opacity: 0.16 }}>🎨</div>
            <div style={{ fontSize: 5.5, color: PEACH, fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase' as const, marginBottom: 4 }}>Next up · 10:45</div>
            <div style={{ fontSize: 10, fontWeight: 800, color: T1, letterSpacing: '-0.2px', lineHeight: 1.2, marginBottom: 4 }}>Nap with Mr. Bear</div>
            <div style={{ fontSize: 7, color: T3, fontWeight: 600, lineHeight: 1.4 }}>
              Mira always carries her stuffed elephant — packed in her bag.
            </div>
          </div>
        </div>

        {/* Teacher note + milestone */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7 }}>
          <div style={{ background: '#fff', borderRadius: 12, padding: '9px 11px', boxShadow: '0 3px 10px rgba(15,23,42,0.05)', borderLeft: `2.5px solid ${MINT}` }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 4 }}>
              <span style={{ fontSize: 6, color: MINT, fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase' as const }}>💌 Teacher note</span>
              <span style={{ fontSize: 5.5, color: T3, fontWeight: 700 }}>9:14 AM · Priya</span>
            </div>
            <div style={{ fontSize: 8, color: T1, fontWeight: 600, letterSpacing: '-0.1px', lineHeight: 1.45, marginBottom: 4 }}>
              Mira sorted the puzzle pieces by colour without prompting today. She asked why red goes first — connected her own answer.
            </div>
            <span style={{ fontSize: 5.5, fontWeight: 700, color: NAVY, background: `${NAVY}10`, padding: '2px 5px', borderRadius: 999, letterSpacing: '0.04em' }}>Cognitive · positive</span>
          </div>

          <div style={{ background: '#fff', borderRadius: 12, padding: '9px 11px', boxShadow: '0 3px 10px rgba(15,23,42,0.05)', borderLeft: `2.5px solid ${BUTTER}` }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 4 }}>
              <span style={{ fontSize: 6, color: BUTTER, fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase' as const }}>🌟 Milestone</span>
              <span style={{ fontSize: 5.5, color: T3, fontWeight: 700 }}>This week</span>
            </div>
            <div style={{ fontSize: 8, color: T1, fontWeight: 600, letterSpacing: '-0.1px', lineHeight: 1.45, marginBottom: 5 }}>
              Recognises colours by name · Cognitive domain
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              {['Beginning', 'Developing', 'Achieving', 'Excelling'].map((b, i) => (
                <span key={b} style={{
                  flex: 1, fontSize: 4.8, fontWeight: 800, padding: '2.5px 0', borderRadius: 999, textAlign: 'center',
                  background: i === 2 ? BUTTER : '#F8FAFC',
                  color: i === 2 ? '#fff' : T3,
                  letterSpacing: '0.06em',
                  boxShadow: i === 2 ? `0 2px 5px ${BUTTER}55` : 'none',
                }}>{b}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PrePrimaryParentIPadShell>
  );
};

export default PreParentTodayIPad;
