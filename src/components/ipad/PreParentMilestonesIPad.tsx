/**
 * Static iPad mockup — Pre-Primary Parent · Milestones.
 * NEP 2020 five-domain progress for the active child, with the evidence
 * (teacher observation excerpt) under every checkpoint. Distinct from
 * a school report card — this is the growth file, not the grade sheet.
 */

import PrePrimaryParentIPadShell from './PrePrimaryParentIPadShell';

const PreParentMilestonesIPad = () => {
  const NAVY = '#1e3272';
  const PEACH = '#FB923C';
  const MINT = '#10B981';
  const BLUSH = '#EC4899';
  const LAV = '#A78BFA';
  const BUTTER = '#F59E0B';
  const T1 = '#0F172A';
  const T3 = '#64748B';

  const domains = [
    { key: 'Physical',       short: 'Physical',     score: 76, evidence: 14, c: MINT,   e: '🏃', recent: 'Hopped on one foot · 4 sec' },
    { key: 'Cognitive',      short: 'Cognitive',    score: 82, evidence: 11, c: NAVY,   e: '🧠', recent: 'Recognises colours by name' },
    { key: 'Language',       short: 'Language',     score: 71, evidence: 16, c: PEACH,  e: '💬', recent: 'Speaks in full sentences' },
    { key: 'Socio-Emotional',short: 'Social',       score: 88, evidence: 13, c: BLUSH,  e: '🤝', recent: 'Comforted a crying friend' },
    { key: 'Creative',       short: 'Creative',     score: 75, evidence: 9,  c: LAV,    e: '🎨', recent: 'Mixed paints to make orange' },
  ];

  return (
    <PrePrimaryParentIPadShell activePath="/milestones">
      <div style={{ background: 'linear-gradient(180deg, #FFF8F0, #F0FDF4)', flex: 1, overflowY: 'auto', minHeight: 0, padding: '10px 12px 12px', fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif" }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 9 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 3 }}>
              <span style={{ width: 4, height: 4, borderRadius: 1, background: BUTTER }} />
              <span style={{ fontSize: 6, fontWeight: 700, color: BUTTER, letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>NEP 2020 · evidence under every check</span>
            </div>
            <h1 style={{ fontSize: 20, fontWeight: 800, color: T1, letterSpacing: '-0.5px', lineHeight: 1.05, margin: 0 }}>Mira&apos;s growth</h1>
            <div style={{ fontSize: 7.5, color: T3, fontWeight: 500, marginTop: 2 }}>5 domains · 63 observations this term</div>
          </div>
          <div style={{ display: 'flex', gap: 4 }}>
            {[
              { v: '78', l: 'Overall · /100', c: NAVY },
              { v: '4',  l: 'Domains in green', c: MINT },
              { v: '+12',l: 'Vs last term',   c: PEACH },
            ].map(s => (
              <div key={s.l} style={{ padding: '5px 8px', background: '#fff', borderRadius: 9, boxShadow: '0 2px 6px rgba(15,23,42,0.05)', minWidth: 42, textAlign: 'center' }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: s.c, letterSpacing: '-0.3px' }}>{s.v}</div>
                <div style={{ fontSize: 5.5, fontWeight: 700, color: T3, letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginTop: 1 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Overall hero ring */}
        <div style={{
          background: '#fff', borderRadius: 14, padding: '10px 12px', marginBottom: 9,
          boxShadow: '0 4px 14px rgba(15,23,42,0.06)',
          display: 'grid', gridTemplateColumns: '0.55fr 1fr', gap: 12, alignItems: 'center',
        }}>
          {/* Score ring */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', height: 100 }}>
            <svg width="100" height="100" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="42" fill="none" stroke="#F1F5F9" strokeWidth="9" />
              <circle cx="50" cy="50" r="42" fill="none"
                stroke={NAVY} strokeWidth="9" strokeLinecap="round"
                strokeDasharray={`${(78/100) * (2 * Math.PI * 42)} ${(2 * Math.PI * 42)}`}
                transform="rotate(-90 50 50)" />
            </svg>
            <div style={{ position: 'absolute', textAlign: 'center' }}>
              <div style={{ fontSize: 26, fontWeight: 800, color: T1, letterSpacing: '-0.8px', lineHeight: 1 }}>78</div>
              <div style={{ fontSize: 5.5, color: T3, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase' as const, marginTop: 2 }}>This term</div>
            </div>
          </div>

          <div>
            <div style={{ fontSize: 6, color: PEACH, fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase' as const, marginBottom: 3 }}>Achieving · trending up</div>
            <div style={{ fontSize: 12, fontWeight: 800, color: T1, letterSpacing: '-0.3px', lineHeight: 1.15, marginBottom: 4 }}>
              Mira is consistent across cognitive &amp; socio-emotional growth — Language is the one to watch.
            </div>
            <div style={{ fontSize: 7, color: T3, fontWeight: 500, lineHeight: 1.45 }}>
              78 / 100 composite · Beginning · Developing · <strong style={{ color: NAVY }}>Achieving</strong> · Excelling. Next term&apos;s focus has been auto-suggested for her teacher.
            </div>
          </div>
        </div>

        {/* 5-domain detail */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          {domains.map(d => (
            <div key={d.key} style={{
              background: '#fff', borderRadius: 11, padding: '8px 10px',
              boxShadow: '0 3px 9px rgba(15,23,42,0.05)',
              borderLeft: `2.5px solid ${d.c}`,
              display: 'grid', gridTemplateColumns: '0.6fr 1fr 1.1fr', gap: 8, alignItems: 'center',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <span style={{ fontSize: 18 }}>{d.e}</span>
                <div>
                  <div style={{ fontSize: 5.5, fontWeight: 800, color: d.c, letterSpacing: '0.16em', textTransform: 'uppercase' as const }}>NEP-FS</div>
                  <div style={{ fontSize: 9, fontWeight: 800, color: T1, letterSpacing: '-0.15px' }}>{d.short}</div>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 3 }}>
                  <span style={{ fontSize: 13, fontWeight: 800, color: d.c, letterSpacing: '-0.4px' }}>{d.score}</span>
                  <span style={{ fontSize: 5.5, color: T3, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>{d.evidence} notes</span>
                </div>
                <div style={{ height: 4.5, background: '#F1F5F9', borderRadius: 999, overflow: 'hidden', marginBottom: 3 }}>
                  <div style={{ width: `${d.score}%`, height: '100%', background: `linear-gradient(90deg, ${d.c}, ${d.c}cc)`, borderRadius: 999 }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  {['Beg', 'Dev', 'Ach', 'Exc'].map((b, i) => {
                    const idx = d.score >= 80 ? 3 : d.score >= 65 ? 2 : d.score >= 50 ? 1 : 0;
                    const active = i === idx;
                    return (
                      <span key={b} style={{
                        flex: 1, fontSize: 4.8, fontWeight: 800, padding: '2px 0', textAlign: 'center',
                        borderRadius: 999,
                        background: active ? d.c : '#F8FAFC',
                        color: active ? '#fff' : T3,
                        letterSpacing: '0.06em',
                      }}>{b}</span>
                    );
                  })}
                </div>
              </div>

              <div style={{
                padding: '5px 8px', borderRadius: 7,
                background: `${d.c}10`, border: `0.5px solid ${d.c}22`,
              }}>
                <div style={{ fontSize: 5.5, fontWeight: 800, color: d.c, letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 2 }}>Latest evidence</div>
                <div style={{ fontSize: 6.5, color: T1, fontWeight: 600, letterSpacing: '-0.1px', lineHeight: 1.4 }}>&ldquo;{d.recent}&rdquo;</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PrePrimaryParentIPadShell>
  );
};

export default PreParentMilestonesIPad;
