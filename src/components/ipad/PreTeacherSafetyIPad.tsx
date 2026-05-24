/**
 * Static iPad mockup — Pre-Primary Teacher · Safety Dashboard.
 * Class-wide allergen roll-up + per-child medical alerts + authorized
 * pickup register — printable in one tap for substitute teachers.
 */

import PrePrimaryTeacherIPadShell from './PrePrimaryTeacherIPadShell';

const PreTeacherSafetyIPad = () => {
  const NAVY = '#1e3272';
  const RED = '#EF4444';
  const PEACH = '#FB923C';
  const BUTTER = '#F59E0B';
  const MINT = '#10B981';
  const SKY = '#0EA5E9';
  const T1 = '#0F172A';
  const T3 = '#64748B';

  const allergens = [
    { name: 'Peanut',     count: 2, severity: 'critical', tone: RED,    e: '🥜' },
    { name: 'Egg',        count: 3, severity: 'high',     tone: PEACH,  e: '🥚' },
    { name: 'Dairy',      count: 1, severity: 'medium',   tone: BUTTER, e: '🥛' },
    { name: 'Shellfish',  count: 1, severity: 'critical', tone: RED,    e: '🦐' },
    { name: 'Wheat',      count: 1, severity: 'medium',   tone: BUTTER, e: '🌾' },
    { name: 'Soy',        count: 1, severity: 'low',      tone: MINT,   e: '🌱' },
  ];

  const kids = [
    {
      name: 'Aarav S.',
      tier: 'critical',
      flags: ['🥜 Peanut · EpiPen', '🩸 Group B+', '🚸 Mum + Dad only'],
      bloodGroup: 'B+',
      comfort: 'Stuffed elephant',
      tone: RED,
    },
    {
      name: 'Ananya R.',
      tier: 'critical',
      flags: ['🦐 Shellfish · severe', '💊 Inhaler at 1pm', '🚸 Mum + Driver Ram'],
      bloodGroup: 'O+',
      comfort: 'Blue blanket',
      tone: RED,
    },
    {
      name: 'Mira P.',
      tier: 'high',
      flags: ['🥚 Egg · skin reaction', '🩸 Group A+', '🚸 Father + Grandma'],
      bloodGroup: 'A+',
      comfort: 'Pacifier (water-time only)',
      tone: PEACH,
    },
    {
      name: 'Diya N.',
      tier: 'medium',
      flags: ['🥛 Dairy · mild', '🩸 Group O−', '🚸 Mother only'],
      bloodGroup: 'O−',
      comfort: 'Hair tied at nap',
      tone: BUTTER,
    },
  ];

  return (
    <PrePrimaryTeacherIPadShell activePath="/safety">
      <div style={{ background: '#FFF5F5', flex: 1, overflowY: 'auto', minHeight: 0, padding: '10px 12px 12px', fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif" }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 9 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 3 }}>
              <span style={{ width: 4, height: 4, borderRadius: 1, background: RED }} />
              <span style={{ fontSize: 6, fontWeight: 700, color: RED, letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>Peace of mind · Print-ready</span>
            </div>
            <h1 style={{ fontSize: 21, fontWeight: 800, color: T1, letterSpacing: '-0.6px', lineHeight: 1.05, margin: 0 }}>Safety Dashboard</h1>
            <div style={{ fontSize: 8, fontWeight: 500, color: T3, marginTop: 3 }}>Allergens · medical · pickup — the one screen the substitute teacher needs.</div>
          </div>
          <div style={{ display: 'flex', gap: 4 }}>
            <span style={{ padding: '5px 9px', background: '#fff', borderRadius: 9, boxShadow: '0 2px 6px rgba(15,23,42,0.05)', fontSize: 6.5, fontWeight: 800, color: NAVY, letterSpacing: '0.06em', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9" /><rect x="6" y="14" width="12" height="8" /><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" /></svg>
              Print A4
            </span>
            <span style={{ padding: '5px 9px', background: RED, borderRadius: 9, boxShadow: `0 3px 8px ${RED}55`, fontSize: 6.5, fontWeight: 800, color: '#fff', letterSpacing: '0.06em' }}>
              🚨 Emergency call sheet
            </span>
          </div>
        </div>

        {/* Allergen roll-up */}
        <div style={{ background: '#fff', borderRadius: 12, padding: '9px 11px', marginBottom: 9, boxShadow: '0 4px 12px rgba(15,23,42,0.06)' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 7 }}>
            <div>
              <div style={{ fontSize: 6, fontWeight: 700, color: PEACH, letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>Class allergen roll-up</div>
              <div style={{ fontSize: 11, fontWeight: 800, color: T1, letterSpacing: '-0.25px' }}>6 allergens active · 2 critical</div>
            </div>
            <span style={{ fontSize: 6, color: T3, fontWeight: 700, letterSpacing: '0.08em' }}>Pinned to canteen + snack-prep tab</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 5 }}>
            {allergens.map(a => (
              <div key={a.name} style={{
                padding: '6px 7px', borderRadius: 8,
                background: `linear-gradient(135deg, ${a.tone}14, ${a.tone}06)`,
                border: `0.5px solid ${a.tone}33`, textAlign: 'center',
              }}>
                <div style={{ fontSize: 17 }}>{a.e}</div>
                <div style={{ fontSize: 7, fontWeight: 800, color: T1, letterSpacing: '-0.1px', marginTop: 2 }}>{a.name}</div>
                <div style={{ fontSize: 5.5, color: a.tone, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginTop: 2 }}>{a.count} {a.count > 1 ? 'kids' : 'kid'}</div>
                <div style={{ fontSize: 5, color: T3, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginTop: 2 }}>{a.severity}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Per-child cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
          {kids.map(k => (
            <div key={k.name} style={{
              background: '#fff', borderRadius: 10, padding: '8px 10px',
              boxShadow: '0 3px 10px rgba(15,23,42,0.06)',
              borderLeft: `3px solid ${k.tone}`,
              position: 'relative',
            }}>
              <div style={{ position: 'absolute', top: 6, right: 8, display: 'flex', alignItems: 'center', gap: 3 }}>
                <span style={{
                  fontSize: 5, fontWeight: 800, color: '#fff', background: k.tone,
                  padding: '2px 6px', borderRadius: 999, letterSpacing: '0.08em',
                }}>
                  {k.tier.toUpperCase()}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                <div style={{
                  width: 22, height: 22, borderRadius: '50%',
                  background: `linear-gradient(135deg, ${k.tone}, ${k.tone}aa)`,
                  color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 9, fontWeight: 800,
                  boxShadow: `0 2px 5px ${k.tone}55`,
                }}>{k.name[0]}</div>
                <div>
                  <div style={{ fontSize: 9, fontWeight: 800, color: T1, letterSpacing: '-0.2px' }}>{k.name}</div>
                  <div style={{ fontSize: 5.5, color: T3, fontWeight: 700, letterSpacing: '0.06em' }}>Blood · {k.bloodGroup} · Comfort · {k.comfort}</div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {k.flags.map((f, i) => (
                  <div key={i} style={{
                    padding: '3px 7px', borderRadius: 7,
                    background: '#F8FAFC',
                    fontSize: 6.5, fontWeight: 700, color: T1, letterSpacing: '-0.1px',
                    borderLeft: `2px solid ${k.tone}`,
                  }}>{f}</div>
                ))}
              </div>
              <div style={{ marginTop: 6, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 5.5, color: T3, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>Updated · today</span>
                <div style={{ display: 'flex', gap: 3 }}>
                  <span style={{ fontSize: 5.5, fontWeight: 800, color: '#fff', background: MINT, padding: '2px 6px', borderRadius: 999 }}>📞 Mum</span>
                  <span style={{ fontSize: 5.5, fontWeight: 800, color: '#fff', background: SKY, padding: '2px 6px', borderRadius: 999 }}>📞 Doctor</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PrePrimaryTeacherIPadShell>
  );
};

export default PreTeacherSafetyIPad;
