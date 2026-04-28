/**
 * Static iPad mockup — Owner › AI Risk Predictor page.
 * Mirrors /ai-predictor from owner-dashboard.
 */

import OwnerIPadShell from './OwnerIPadShell';

const VIOLET = '#0055FF';
const VIOLET_DEEP = '#003ECC';
const TT1 = '#001040';
const TT3 = '#5070B0';
const TT4 = '#99AACC';
const RED = '#FF3355';
const ORANGE = '#FF8800';
const GOLD = '#FFAA00';
const GREEN = '#00C853';
const BLUE = '#0055FF';

const OwnerAIRiskPredictorIPad = () => (
  <OwnerIPadShell activePath="/ai-predictor">
    <div style={{ padding: 12 }}>
      {/* AI Hero (violet) */}
      <div style={{
        borderRadius: 12, padding: '12px 14px',
        background: `linear-gradient(135deg, ${VIOLET} 0%, ${VIOLET_DEEP} 100%)`,
        color: '#fff', marginBottom: 8, position: 'relative', overflow: 'hidden',
        boxShadow: '0 6px 18px rgba(0,85,255,.25)',
      }}>
        <div style={{ position: 'absolute', top: -25, right: -25, width: 110, height: 110, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,221,85,.18) 0%, transparent 65%)' }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
            <span style={{ fontSize: 11, color: '#FFDD55' }}>✦</span>
            <span style={{ fontSize: 6, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,.85)' }}>AI Risk Predictor</span>
            <span style={{ marginLeft: 'auto', fontSize: 6, fontWeight: 500, background: 'rgba(255,255,255,.18)', padding: '3px 8px', borderRadius: 999, border: '0.5px solid rgba(255,255,255,.3)' }}>
              <span style={{ color: '#6FFFAA' }}>● </span>Live · Refreshed 2m ago
            </span>
          </div>
          <div style={{ fontSize: 16, fontWeight: 400, letterSpacing: '-0.4px', marginBottom: 4 }}>
            127 students need attention
          </div>
          <div style={{ fontSize: 8, color: 'rgba(255,255,255,.7)', lineHeight: 1.4 }}>
            Multi-signal ML model scoring attendance trend + marks slope + behaviour incidents + parent engagement. Re-runs nightly.
          </div>
        </div>
      </div>

      {/* 4 risk tier cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 7, marginBottom: 8 }}>
        {[
          { tier: 'CRITICAL', v: '23', sub: 'Immediate intervention', color: RED, bg: 'linear-gradient(135deg, #FFEEF0 0%, #FFE2E6 100%)' },
          { tier: 'AT-RISK', v: '54', sub: '4+ negative signals', color: ORANGE, bg: 'linear-gradient(135deg, #FFF6E8 0%, #FFEED4 100%)' },
          { tier: 'WATCH', v: '50', sub: '2-3 signals', color: GOLD, bg: 'linear-gradient(135deg, #FFF6E0 0%, #FFEDC4 100%)' },
          { tier: 'RECOVERED', v: '34', sub: 'Last 30d', color: GREEN, bg: 'linear-gradient(135deg, #E8FBEF 0%, #DAF6E4 100%)' },
        ].map(c => (
          <div key={c.tier} style={{ background: c.bg, border: `0.5px solid ${c.color}33`, borderRadius: 11, padding: '8px 10px' }}>
            <div style={{ fontSize: 6, fontWeight: 500, color: c.color, letterSpacing: '0.14em', textTransform: 'uppercase' as const, marginBottom: 4 }}>{c.tier}</div>
            <div style={{ fontSize: 18, fontWeight: 300, color: TT1, letterSpacing: '-0.7px', lineHeight: 1 }}>{c.v}</div>
            <div style={{ fontSize: 7, fontWeight: 500, color: c.color, marginTop: 3 }}>{c.sub}</div>
          </div>
        ))}
      </div>

      {/* 2-col: Critical list + Signal weights */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 7 }}>
        <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,.06)', border: `0.5px solid ${RED}1F` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 7 }}>
            <div style={{ width: 20, height: 20, borderRadius: 6, background: RED, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 3L3 20h18L12 3z" /><line x1="12" y1="9" x2="12" y2="14" /></svg>
            </div>
            <div style={{ fontSize: 9, fontWeight: 500, color: TT1 }}>Top Critical (auto-flagged)</div>
            <div style={{ marginLeft: 'auto', fontSize: 6, fontWeight: 500, color: RED, background: 'rgba(255,51,85,.10)', padding: '2px 6px', borderRadius: 999 }}>23 NEW</div>
          </div>
          {[
            { name: 'Riya Sharma', branch: 'Bandra', cls: 'Class 10B', score: 92, signals: ['Att 48%', 'Marks ↓ 24%', '3 incidents'] },
            { name: 'Ankit Verma', branch: 'Koramangala', cls: 'Class 9A', score: 88, signals: ['Att 56%', '2 failed tests'] },
            { name: 'Sara Khan', branch: 'Saket', cls: 'Class 8B', score: 81, signals: ['Behaviour ↓', 'Avg 62%'] },
            { name: 'Karan Patel', branch: 'Jubilee Hills', cls: 'Class 10B', score: 76, signals: ['Submission delays', 'Marks slipping'] },
          ].map((s, i) => (
            <div key={i} style={{ padding: '6px 0', borderBottom: i < 3 ? '0.5px solid #F1F5F9' : 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 3 }}>
                <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#FFE2E6', color: '#8A0A22', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 7, fontWeight: 500 }}>
                  {s.name.split(' ').map(p => p[0]).join('')}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 8, fontWeight: 500, color: TT1, lineHeight: 1.2 }}>{s.name}</div>
                  <div style={{ fontSize: 6, color: TT4, marginTop: 1 }}>{s.branch} · {s.cls}</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                  <span style={{ fontSize: 9, fontWeight: 500, color: RED }}>{s.score}/100</span>
                  <span style={{ fontSize: 5, color: TT4, marginTop: 1, letterSpacing: '0.1em' }}>RISK SCORE</span>
                </div>
              </div>
              <div style={{ marginLeft: 28, display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                {s.signals.map(sig => (
                  <span key={sig} style={{ fontSize: 6, fontWeight: 500, color: TT3, background: '#F4F7FE', padding: '2px 6px', borderRadius: 999 }}>{sig}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Signal weights */}
        <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,.06)', border: '0.5px solid rgba(0,85,255,.07)' }}>
          <div style={{ fontSize: 6, fontWeight: 500, color: TT3, letterSpacing: '0.18em', textTransform: 'uppercase' as const, marginBottom: 4 }}>Model Signal Weights</div>
          <div style={{ fontSize: 9, fontWeight: 500, color: TT1, marginBottom: 8 }}>What goes into the score</div>
          {[
            { l: 'Attendance trend', w: 32, c: BLUE },
            { l: 'Marks slope', w: 28, c: VIOLET },
            { l: 'Behaviour incidents', w: 18, c: RED },
            { l: 'Parent engagement', w: 12, c: GREEN },
            { l: 'Submission delays', w: 10, c: ORANGE },
          ].map((s, i) => (
            <div key={i} style={{ marginBottom: 6 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 3 }}>
                <span style={{ fontSize: 7, fontWeight: 500, color: TT1 }}>{s.l}</span>
                <span style={{ fontSize: 7, fontWeight: 500, color: s.c }}>{s.w}%</span>
              </div>
              <div style={{ height: 4, background: '#F1F5F9', borderRadius: 2, overflow: 'hidden' }}>
                <div style={{ background: s.c, height: '100%', width: `${s.w * 2.6}%`, borderRadius: 2 }} />
              </div>
            </div>
          ))}
          <div style={{ marginTop: 8, padding: '6px 8px', background: 'rgba(0,85,255,.06)', border: '0.5px solid rgba(0,85,255,.16)', borderRadius: 7, fontSize: 7, color: TT3, lineHeight: 1.4 }}>
            <b style={{ color: VIOLET, fontWeight: 500 }}>Note:</b> Weights auto-calibrate from outcome data quarterly.
          </div>
        </div>
      </div>
    </div>
  </OwnerIPadShell>
);

export default OwnerAIRiskPredictorIPad;
