/**
 * Static iPad mockup — Pre-Primary Teacher · Observations.
 * Composes Behaviour notes (3 visibility tiers) + Milestones (NEP 2020
 * 5-domain rubric) — the observation log every Tier-2/3 school inspector
 * asks for and no Excel sheet can produce.
 */

import PrePrimaryTeacherIPadShell from './PrePrimaryTeacherIPadShell';

const PreTeacherObservationsIPad = () => {
  const NAVY = '#1e3272';
  const PEACH = '#FB923C';
  const MINT = '#10B981';
  const SKY = '#0EA5E9';
  const BLUSH = '#EC4899';
  const LAV = '#A78BFA';
  const T1 = '#0F172A';
  const T3 = '#64748B';

  const domains = [
    { key: 'Physical',       short: 'PHY', score: 78, evidence: 12, c: MINT,   e: '🏃' },
    { key: 'Cognitive',      short: 'COG', score: 82, evidence: 9,  c: NAVY,   e: '🧠' },
    { key: 'Language',       short: 'LAN', score: 71, evidence: 14, c: PEACH,  e: '💬' },
    { key: 'Socio-Emotional',short: 'SOC', score: 88, evidence: 11, c: BLUSH,  e: '🤝' },
    { key: 'Creative',       short: 'CRE', score: 75, evidence: 8,  c: LAV,    e: '🎨' },
  ];

  return (
    <PrePrimaryTeacherIPadShell activePath="/milestones">
      <div style={{ background: '#F8FAFC', flex: 1, overflowY: 'auto', minHeight: 0, padding: '10px 12px 12px', fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif" }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 9 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 3 }}>
              <span style={{ width: 4, height: 4, borderRadius: 1, background: NAVY }} />
              <span style={{ fontSize: 6, fontWeight: 700, color: NAVY, letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>NEP 2020 · NCF-FS</span>
            </div>
            <h1 style={{ fontSize: 21, fontWeight: 800, color: T1, letterSpacing: '-0.6px', lineHeight: 1.05, margin: 0 }}>Observations</h1>
            <div style={{ fontSize: 8, fontWeight: 500, color: T3, marginTop: 3 }}>Five domains, four rubric bands, every note tagged to the child &amp; term.</div>
          </div>
          <div style={{ display: 'flex', gap: 4 }}>
            {[
              { v: '54', l: 'Notes · term', c: NAVY },
              { v: '4',  l: 'New today',    c: PEACH },
            ].map(s => (
              <div key={s.l} style={{ padding: '5px 8px', background: '#fff', borderRadius: 9, boxShadow: '0 2px 6px rgba(15,23,42,0.05)', minWidth: 42, textAlign: 'center' }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: s.c, letterSpacing: '-0.3px' }}>{s.v}</div>
                <div style={{ fontSize: 5.5, fontWeight: 700, color: T3, letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginTop: 1 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 5-domain strip */}
        <div style={{ background: '#fff', borderRadius: 12, padding: '10px 11px', marginBottom: 9, boxShadow: '0 4px 12px rgba(15,23,42,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 8 }}>
            <div>
              <div style={{ fontSize: 6, fontWeight: 700, color: PEACH, letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>Class-wide mastery</div>
              <div style={{ fontSize: 11, fontWeight: 800, color: T1, letterSpacing: '-0.3px' }}>NEP 2020 · 5 domains</div>
            </div>
            <div style={{ display: 'flex', gap: 3 }}>
              {['Beginning', 'Developing', 'Achieving', 'Excelling'].map((b, i) => (
                <span key={b} style={{
                  fontSize: 5.5, fontWeight: 700, padding: '2px 5px', borderRadius: 999,
                  background: ['#FEE2E2', '#FEF3C7', '#D1FAE5', '#DBEAFE'][i],
                  color: ['#DC2626', '#92400E', '#047857', '#1E40AF'][i],
                  letterSpacing: '0.04em',
                }}>{b}</span>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 6 }}>
            {domains.map(d => (
              <div key={d.key} style={{
                background: `linear-gradient(135deg, ${d.c}14, ${d.c}06)`,
                borderRadius: 10, padding: '7px 8px',
                border: `0.5px solid ${d.c}26`,
                position: 'relative', overflow: 'hidden',
              }}>
                <div aria-hidden style={{ position: 'absolute', right: -2, bottom: -6, fontSize: 28, opacity: 0.16 }}>{d.e}</div>
                <div style={{ fontSize: 5.5, fontWeight: 700, color: d.c, letterSpacing: '0.16em', textTransform: 'uppercase' as const, marginBottom: 4 }}>
                  {d.short}
                </div>
                <div style={{ fontSize: 7.5, fontWeight: 700, color: T1, letterSpacing: '-0.15px', marginBottom: 5 }}>{d.key}</div>
                <div style={{ height: 4, background: '#fff', borderRadius: 999, overflow: 'hidden', marginBottom: 4 }}>
                  <div style={{ width: `${d.score}%`, height: '100%', background: `linear-gradient(90deg, ${d.c}, ${d.c}cc)`, borderRadius: 999 }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 3 }}>
                  <span style={{ fontSize: 13, fontWeight: 800, color: d.c, letterSpacing: '-0.4px' }}>{d.score}</span>
                  <span style={{ fontSize: 5.5, color: T3, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>/ 100 · {d.evidence} notes</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Composer + recent notes side-by-side */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 7 }}>
          {/* Composer */}
          <div style={{ background: '#fff', borderRadius: 12, padding: '9px 11px', boxShadow: '0 3px 10px rgba(15,23,42,0.05)' }}>
            <div style={{ fontSize: 6, fontWeight: 700, color: PEACH, letterSpacing: '0.18em', textTransform: 'uppercase' as const, marginBottom: 3 }}>New observation</div>
            <div style={{ fontSize: 10, fontWeight: 800, color: T1, letterSpacing: '-0.25px', marginBottom: 7 }}>Log a behaviour note or milestone</div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '5px 7px', background: '#F8FAFC', borderRadius: 7, marginBottom: 5, border: '0.5px solid #E2E8F0' }}>
              <div style={{ width: 16, height: 16, borderRadius: '50%', background: `linear-gradient(135deg, ${MINT}, ${MINT}aa)`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 7, fontWeight: 800 }}>M</div>
              <span style={{ fontSize: 7.5, fontWeight: 700, color: T1 }}>Mira P.</span>
              <span style={{ fontSize: 6, color: T3, fontWeight: 600, marginLeft: 'auto' }}>Change child →</span>
            </div>

            <div style={{ display: 'flex', gap: 4, marginBottom: 5 }}>
              {[
                { l: 'Positive',  c: MINT,   active: true },
                { l: 'Neutral',   c: SKY,    active: false },
                { l: 'Concern',   c: PEACH,  active: false },
              ].map(t => (
                <span key={t.l} style={{
                  flex: 1, textAlign: 'center', padding: '3px 5px', borderRadius: 6,
                  fontSize: 6.5, fontWeight: 700, letterSpacing: '-0.1px',
                  background: t.active ? t.c : `${t.c}10`,
                  color: t.active ? '#fff' : t.c,
                  boxShadow: t.active ? `0 2px 6px ${t.c}44` : 'none',
                }}>
                  {t.l}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 4, marginBottom: 5 }}>
              {['Physical','Cognitive','Language','Social','Creative'].map((d, i) => (
                <span key={d} style={{
                  fontSize: 5.5, fontWeight: 700, padding: '2.5px 5px', borderRadius: 999,
                  background: i === 1 ? `${NAVY}1a` : '#F1F5F9', color: i === 1 ? NAVY : T3,
                  letterSpacing: '0.04em',
                }}>{d}</span>
              ))}
            </div>

            <div style={{ background: '#FFF7ED', borderRadius: 7, padding: '6px 8px', border: '0.5px solid #FED7AA', marginBottom: 6 }}>
              <div style={{ fontSize: 6, color: PEACH, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 2 }}>What happened</div>
              <div style={{ fontSize: 7, color: T1, fontWeight: 500, letterSpacing: '-0.1px', lineHeight: 1.4 }}>
                Mira put the puzzle pieces in colour order without prompting. Asked &ldquo;why is red first?&rdquo; — connected her own answer.
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', gap: 4 }}>
                {[
                  { l: 'Teacher only', c: T3 },
                  { l: 'Principal',    c: NAVY },
                  { l: 'Parent visible', c: MINT, active: true },
                ].map(v => (
                  <span key={v.l} style={{
                    fontSize: 5.5, fontWeight: 700, padding: '2px 5px', borderRadius: 999,
                    background: v.active ? v.c : `${v.c}10`,
                    color: v.active ? '#fff' : v.c,
                    letterSpacing: '0.04em',
                  }}>{v.l}</span>
                ))}
              </div>
              <span style={{ fontSize: 6.5, fontWeight: 800, color: '#fff', background: NAVY, padding: '4px 9px', borderRadius: 7, letterSpacing: '0.04em', boxShadow: `0 3px 8px ${NAVY}55` }}>
                Save observation
              </span>
            </div>
          </div>

          {/* Recent notes */}
          <div style={{ background: '#fff', borderRadius: 12, padding: '9px 10px', boxShadow: '0 3px 10px rgba(15,23,42,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 6 }}>
              <span style={{ fontSize: 9, fontWeight: 800, color: T1, letterSpacing: '-0.2px' }}>Today's notes</span>
              <span style={{ fontSize: 5.5, color: T3, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>auto · sorted</span>
            </div>

            {[
              { who: 'Aarav S.',   tone: MINT, kind: 'Positive', dom: 'Socio-Emotional', text: 'Comforted a friend who was missing home. Initiated the hug himself.', tier: 'Parent visible' },
              { who: 'Ishaan K.',  tone: SKY,  kind: 'Neutral',  dom: 'Language',        text: 'Spoke only Hindi today — usually mixed. Watching for pattern.', tier: 'Teacher only' },
              { who: 'Diya N.',    tone: PEACH,kind: 'Concern',  dom: 'Physical',        text: 'Fell during Art — bruised elbow. Cleaned, parent informed.', tier: 'Principal' },
            ].map(n => (
              <div key={n.who} style={{
                padding: '7px 8px', borderRadius: 8, marginBottom: 5,
                background: '#F8FAFC', borderLeft: `2.5px solid ${n.tone}`,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 3 }}>
                  <span style={{ fontSize: 7.5, fontWeight: 700, color: T1, letterSpacing: '-0.1px' }}>{n.who}</span>
                  <span style={{ fontSize: 5.5, fontWeight: 700, color: n.tone, background: `${n.tone}14`, padding: '1.5px 4px', borderRadius: 999, letterSpacing: '0.04em' }}>{n.kind}</span>
                  <span style={{ fontSize: 5.5, fontWeight: 700, color: T3, letterSpacing: '0.06em', marginLeft: 'auto' }}>{n.dom}</span>
                </div>
                <div style={{ fontSize: 6.5, color: T1, fontWeight: 500, lineHeight: 1.45 }}>{n.text}</div>
                <div style={{ marginTop: 4, fontSize: 5, color: T3, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>👁 {n.tier}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PrePrimaryTeacherIPadShell>
  );
};

export default PreTeacherObservationsIPad;
