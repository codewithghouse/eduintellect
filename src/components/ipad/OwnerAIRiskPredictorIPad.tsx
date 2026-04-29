/**
 * Static iPad mockup — Owner · AI Risk Predictor page.
 * Mirrors owner-dashboard/src/pages/AIPredictorPage.tsx with mock data.
 *
 * Layout: Hero stat strip → 4 risk tier cards (Critical / High / Watch / Safe)
 * → search + filter pills → expandable student risk cards (with fail %, metrics, expanded factors)
 * → How-it-works banner.
 */

import OwnerIPadShell from './OwnerIPadShell';

const OwnerAIRiskPredictorIPad = () => {
  const BLUE = '#0a84ff';
  const T1 = '#1e294b';
  const T3 = '#64748b';
  const T4 = '#94a3b8';
  const RED = '#ff3b30';
  const ORANGE = '#ff9500';
  const AMBER = '#F59E0B';
  const GREEN = '#10B981';

  const tiers = [
    { label: 'Critical', val: 28, sub: '> 75% fail prob', color: RED, grad: 'linear-gradient(135deg, #ff3b30 0%, #DC2626 100%)' },
    { label: 'High Risk', val: 64, sub: '50–75% fail prob', color: ORANGE, grad: 'linear-gradient(135deg, #ff9500 0%, #EA580C 100%)' },
    { label: 'Watch List', val: 142, sub: '25–50% fail prob', color: AMBER, grad: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)' },
    { label: 'Safe', val: 8186, sub: '< 25% fail prob', color: GREEN, grad: 'linear-gradient(135deg, #10B981 0%, #059669 100%)' },
  ];

  const studentsAlert = [
    {
      name: 'Aryan Reddy', initials: 'AR', branch: 'Bandra · G10', tier: 'Critical', tierColor: RED,
      tierGrad: 'linear-gradient(135deg, #ff3b30 0%, #DC2626 100%)',
      prob: 82, att: 48, score: 41, trend: -12, expanded: true,
      factors: ['Att 48% (3w↓)', 'Marks ↓ 24%', 'No HW × 6', 'Late × 9'],
      tests: [38, 41, 35, 44, 39, 36],
    },
    {
      name: 'Riya Kapoor', initials: 'RK', branch: 'Powai · G7', tier: 'High', tierColor: ORANGE,
      tierGrad: 'linear-gradient(135deg, #ff9500 0%, #EA580C 100%)',
      prob: 68, att: 64, score: 58, trend: -7, expanded: false,
    },
    {
      name: 'Krish Mehta', initials: 'KM', branch: 'Andheri · G9', tier: 'Watch', tierColor: AMBER,
      tierGrad: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
      prob: 42, att: 78, score: 71, trend: -3, expanded: false,
    },
    {
      name: 'Anaya Singh', initials: 'AN', branch: 'Goregaon · G11', tier: 'Watch', tierColor: AMBER,
      tierGrad: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
      prob: 36, att: 81, score: 73, trend: -2, expanded: false,
    },
  ];

  return (
    <OwnerIPadShell activePath="/ai-predictor">
      <div style={{ padding: '12px 14px 6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4 }}>
          <span style={{ width: 4, height: 4, borderRadius: 1, background: BLUE }} />
          <span style={{ fontSize: 7, fontWeight: 500, color: T3, letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>
            Owner · AI Predictor
          </span>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 4, padding: '2px 7px', background: '#E8FBEF', borderRadius: 999 }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: GREEN, boxShadow: `0 0 6px ${GREEN}` }} />
            <span style={{ fontSize: 6, fontWeight: 500, color: GREEN }}>MODEL LIVE</span>
          </div>
        </div>
        <h1 style={{ fontSize: 22, fontWeight: 300, color: T1, letterSpacing: '-0.7px', lineHeight: 1.05, margin: 0 }}>
          AI Risk Predictor
        </h1>
        <div style={{ fontSize: 9, fontWeight: 400, color: T3, marginTop: 3 }}>
          Probability of failing this semester · with explanations. Catches dropouts 6 weeks early.
        </div>
      </div>

      <div style={{ flex: 1, padding: '6px 12px 12px', overflowY: 'auto', minHeight: 0 }}>
        {/* 4 risk tier cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 7, marginBottom: 8 }}>
          {tiers.map(t => (
            <div key={t.label} style={{ background: t.grad, borderRadius: 11, padding: '8px 10px', color: '#fff', position: 'relative', overflow: 'hidden', boxShadow: `0 6px 18px ${t.color}40` }}>
              <div style={{ position: 'absolute', top: -15, right: -15, width: 60, height: 60, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 65%)' }} />
              <div style={{ fontSize: 6, fontWeight: 600, color: 'rgba(255,255,255,0.85)', letterSpacing: '0.14em', textTransform: 'uppercase' as const, marginBottom: 4, position: 'relative' }}>{t.label}</div>
              <div style={{ fontSize: 18, fontWeight: 300, letterSpacing: '-0.7px', lineHeight: 1, position: 'relative' }}>{t.val.toLocaleString()}</div>
              <div style={{ fontSize: 6, fontWeight: 500, color: 'rgba(255,255,255,0.8)', marginTop: 3, position: 'relative' }}>{t.sub}</div>
            </div>
          ))}
        </div>

        {/* Search + filter pills */}
        <div style={{ background: '#fff', borderRadius: 11, padding: 8, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)', marginBottom: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '4px 8px', background: '#F8FAFE', borderRadius: 7, border: `0.5px solid ${BLUE}22`, marginBottom: 6 }}>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={T4} strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            <span style={{ fontSize: 7, color: T4 }}>Search students by name or roll no…</span>
          </div>
          <div style={{ display: 'flex', gap: 4 }}>
            {[
              { name: 'All', count: 8420, active: false, color: BLUE },
              { name: 'Critical', count: 28, active: true, color: RED, grad: 'linear-gradient(135deg, #ff3b30, #DC2626)' },
              { name: 'High', count: 64, active: false, color: ORANGE },
              { name: 'Watch', count: 142, active: false, color: AMBER },
              { name: 'Safe', count: 8186, active: false, color: GREEN },
            ].map(p => (
              <div key={p.name} style={{
                fontSize: 6.5, fontWeight: 500,
                padding: '3px 8px', borderRadius: 999,
                background: p.active ? p.grad || p.color : '#fff',
                color: p.active ? '#fff' : p.color,
                border: p.active ? 'none' : `0.5px solid ${p.color}33`,
                display: 'flex', alignItems: 'center', gap: 3,
              }}>
                {p.name} <span style={{ opacity: 0.7, fontSize: 5.5 }}>{p.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Student risk cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5, marginBottom: 8 }}>
          {studentsAlert.map(s => (
            <div key={s.name} style={{ background: '#fff', borderRadius: 10, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)', overflow: 'hidden', borderLeft: `3px solid ${s.tierColor}` }}>
              <div style={{ padding: 9, display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 24, height: 24, borderRadius: '50%', background: s.tierGrad, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 7, fontWeight: 600, flexShrink: 0 }}>
                  {s.initials}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 2 }}>
                    <span style={{ fontSize: 8.5, fontWeight: 500, color: T1 }}>{s.name}</span>
                    <span style={{ fontSize: 5.5, fontWeight: 600, color: '#fff', background: s.tierGrad, padding: '1.5px 5px', borderRadius: 999, letterSpacing: '0.06em' }}>{s.tier.toUpperCase()}</span>
                  </div>
                  <div style={{ fontSize: 6, color: T4 }}>{s.branch}</div>
                </div>
                {/* Probability bar */}
                <div style={{ width: 80, flexShrink: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 5.5, color: T4, marginBottom: 2 }}>
                    <span>Fail prob</span>
                    <span style={{ fontWeight: 600, color: s.tierColor }}>{s.prob}%</span>
                  </div>
                  <div style={{ height: 4, background: '#F1F5F9', borderRadius: 2, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${s.prob}%`, background: s.tierGrad, borderRadius: 2 }} />
                  </div>
                </div>
                {/* 3 mini metrics */}
                <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
                  {[
                    { label: 'Att', val: `${s.att}%`, color: s.att >= 75 ? GREEN : s.att >= 60 ? AMBER : RED },
                    { label: 'Avg', val: `${s.score}%`, color: s.score >= 70 ? GREEN : s.score >= 55 ? AMBER : RED },
                    { label: 'Trd', val: `${s.trend > 0 ? '+' : ''}${s.trend}`, color: s.trend >= 0 ? GREEN : RED },
                  ].map(m => (
                    <div key={m.label} style={{ textAlign: 'center', minWidth: 22 }}>
                      <div style={{ fontSize: 5, color: T4, letterSpacing: '0.06em', textTransform: 'uppercase' as const }}>{m.label}</div>
                      <div style={{ fontSize: 7, fontWeight: 600, color: m.color, marginTop: 1 }}>{m.val}</div>
                    </div>
                  ))}
                </div>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={T4} strokeWidth="2" style={{ flexShrink: 0, transform: s.expanded ? 'rotate(180deg)' : 'none' }}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>

              {/* Expanded panel for first card */}
              {s.expanded && (
                <div style={{ padding: '9px 9px 11px', borderTop: '0.5px solid #F1F5F9', background: '#FAFBFE' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 8 }}>
                    {/* Risk factors */}
                    <div>
                      <div style={{ fontSize: 5.5, fontWeight: 600, color: T4, letterSpacing: '0.14em', textTransform: 'uppercase' as const, marginBottom: 4 }}>Risk factors</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3, marginBottom: 6 }}>
                        {s.factors!.map(f => (
                          <span key={f} style={{ fontSize: 6, fontWeight: 500, color: RED, background: `${RED}1a`, padding: '2px 6px', borderRadius: 999 }}>{f}</span>
                        ))}
                      </div>
                      <div style={{ fontSize: 5.5, fontWeight: 600, color: T4, letterSpacing: '0.14em', textTransform: 'uppercase' as const, marginBottom: 4 }}>Recent tests</div>
                      <div style={{ display: 'flex', gap: 3 }}>
                        {s.tests!.map((t, i) => (
                          <div key={i} style={{ width: 22, height: 22, borderRadius: 5, background: t < 40 ? `${RED}1a` : t < 50 ? `${AMBER}1a` : `${GREEN}1a`, color: t < 40 ? RED : t < 50 ? AMBER : GREEN, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 6.5, fontWeight: 600 }}>
                            {t}
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Recommendation */}
                    <div>
                      <div style={{ fontSize: 5.5, fontWeight: 600, color: T4, letterSpacing: '0.14em', textTransform: 'uppercase' as const, marginBottom: 4 }}>AI Recommendation</div>
                      <div style={{ background: '#fff', borderRadius: 6, padding: 7, fontSize: 6.5, color: T1, lineHeight: 1.4, border: `0.5px solid ${BLUE}22`, marginBottom: 5 }}>
                        Notify parent immediately. Schedule remedial Math + Bio. 4-week recovery plan likely.
                      </div>
                      <div style={{ fontSize: 6, fontWeight: 500, color: '#fff', background: `linear-gradient(135deg, ${BLUE}, #0a84ff)`, padding: '4px 8px', borderRadius: 6, textAlign: 'center' }}>
                        Generate Parent Link →
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* How-it-works banner */}
        <div style={{
          background: 'linear-gradient(135deg, #001040 0%, #0B1F3A 50%, #4F1FB7 100%)',
          borderRadius: 11, padding: 10, color: '#fff', position: 'relative', overflow: 'hidden',
          boxShadow: '0 6px 18px rgba(0,16,64,0.25)',
        }}>
          <div style={{ position: 'absolute', top: -25, right: -25, width: 90, height: 90, borderRadius: '50%', background: 'radial-gradient(circle, rgba(123,63,244,0.5) 0%, transparent 65%)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, position: 'relative', zIndex: 2 }}>
            <div style={{ width: 22, height: 22, borderRadius: 6, background: 'linear-gradient(135deg, #5856d6, #0a84ff)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2"><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1" /></svg>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 8, fontWeight: 600, letterSpacing: '0.06em' }}>How the model works</div>
              <div style={{ fontSize: 6.5, color: 'rgba(255,255,255,0.75)', marginTop: 2, lineHeight: 1.4 }}>
                Weekly score across <span style={{ color: '#ffcc00' }}>Attendance (35%)</span> · <span style={{ color: '#ffcc00' }}>Marks trend (30%)</span> · <span style={{ color: '#ffcc00' }}>Behaviour (20%)</span> · <span style={{ color: '#ffcc00' }}>Engagement (15%)</span>. Auto-recalibrated quarterly from outcome data.
              </div>
            </div>
          </div>
        </div>
      </div>
    </OwnerIPadShell>
  );
};

export default OwnerAIRiskPredictorIPad;
