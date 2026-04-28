/**
 * Static iPad mockup — Owner › Risks & Alerts page.
 * Mirrors /risks from owner-dashboard.
 */

import OwnerIPadShell from './OwnerIPadShell';

const NAVY_DEEP = '#001040';
const NAVY = '#001A66';
const BLUE = '#0055FF';
const TT1 = '#001040';
const TT3 = '#5070B0';
const TT4 = '#99AACC';
const GREEN = '#00C853';
const RED = '#FF3355';
const ORANGE = '#FF8800';
const GOLD = '#FFAA00';

const OwnerRisksAlertsIPad = () => (
  <OwnerIPadShell activePath="/risks">
    <div style={{ padding: 12 }}>
      {/* Hero */}
      <div style={{
        borderRadius: 12, padding: '12px 14px',
        background: `linear-gradient(135deg, ${NAVY_DEEP} 0%, ${NAVY} 35%, #0044CC 70%, ${BLUE} 100%)`,
        color: '#fff', marginBottom: 8, position: 'relative', overflow: 'hidden',
        boxShadow: '0 6px 18px rgba(0,8,60,0.22)',
      }}>
        <div style={{ position: 'absolute', top: -25, right: -25, width: 110, height: 110, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,51,85,.18) 0%, transparent 65%)' }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ fontSize: 6, fontWeight: 500, color: 'rgba(255,255,255,.7)', letterSpacing: '0.18em', textTransform: 'uppercase' as const, marginBottom: 4 }}>
            Risks & Alerts · Network Command Centre
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 4 }}>
            <span style={{ fontSize: 26, fontWeight: 300, letterSpacing: '-1.2px', lineHeight: 1, color: '#FF99AA' }}>14</span>
            <span style={{ fontSize: 11, color: 'rgba(255,255,255,.7)' }}>active alerts across 4 branches</span>
            <span style={{ marginLeft: 'auto', fontSize: 7, fontWeight: 500, color: '#FFD166', background: 'rgba(255,209,102,.16)', border: '0.5px solid rgba(255,209,102,.4)', padding: '4px 10px', borderRadius: 999 }}>
              ● 3 critical · need owner action
            </span>
          </div>
        </div>
      </div>

      {/* 4 severity tier cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 7, marginBottom: 8 }}>
        {[
          { tier: 'Critical', v: '3', sub: 'Owner attention', color: RED, bg: 'linear-gradient(135deg, #FFEEF0 0%, #FFE2E6 100%)' },
          { tier: 'High', v: '5', sub: 'Principal action', color: ORANGE, bg: 'linear-gradient(135deg, #FFF6E8 0%, #FFEED4 100%)' },
          { tier: 'Medium', v: '6', sub: 'Watching', color: GOLD, bg: 'linear-gradient(135deg, #FFF6E0 0%, #FFEDC4 100%)' },
          { tier: 'Resolved 30d', v: '47', sub: 'Healthy turnover', color: GREEN, bg: 'linear-gradient(135deg, #E8FBEF 0%, #DAF6E4 100%)' },
        ].map(c => (
          <div key={c.tier} style={{ background: c.bg, border: `0.5px solid ${c.color}33`, borderRadius: 11, padding: '8px 10px' }}>
            <div style={{ fontSize: 6, fontWeight: 500, color: c.color, letterSpacing: '0.14em', textTransform: 'uppercase' as const, marginBottom: 4 }}>{c.tier}</div>
            <div style={{ fontSize: 18, fontWeight: 300, color: TT1, letterSpacing: '-0.7px', lineHeight: 1 }}>{c.v}</div>
            <div style={{ fontSize: 7, fontWeight: 500, color: c.color, marginTop: 3 }}>{c.sub}</div>
          </div>
        ))}
      </div>

      {/* Active alerts list */}
      <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,.06)', border: '0.5px solid rgba(0,85,255,.07)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 7 }}>
          <div style={{ width: 20, height: 20, borderRadius: 6, background: RED, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M12 3L3 20h18L12 3z" /><line x1="12" y1="9" x2="12" y2="14" /></svg>
          </div>
          <div style={{ fontSize: 9, fontWeight: 500, color: TT1 }}>Active Alerts</div>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 3 }}>
            {['All', 'Critical', 'High', 'Medium', 'Branch ↓'].map((s, i) => (
              <div key={s} style={{ fontSize: 6, fontWeight: 500, color: i === 0 ? '#fff' : TT3, background: i === 0 ? NAVY_DEEP : '#F4F7FE', padding: '3px 7px', borderRadius: 999 }}>{s}</div>
            ))}
          </div>
        </div>

        {[
          { tier: 'CRITICAL', tone: RED, branch: 'Jubilee Hills', headline: 'Teacher attrition spike — 3 left in 60 days', sub: 'Math · Physics · Chemistry departments. Replacements not yet hired.', when: '2h ago' },
          { tier: 'CRITICAL', tone: RED, branch: 'Jubilee Hills', headline: 'Fee collection at 79% (target 88%)', sub: '₹38L pending across 142 families. Q1 close in 12 days.', when: '5h ago' },
          { tier: 'CRITICAL', tone: RED, branch: 'Saket', headline: '49 students moved to Critical risk tier this week', sub: 'AI flagged based on attendance + marks combined slope.', when: 'Yesterday' },
          { tier: 'HIGH', tone: ORANGE, branch: 'Koramangala', headline: 'Avg score dropped 2.4 in Class 10 cohort', sub: 'Mostly driven by Geometry weakness. Re-teach plan auto-suggested.', when: '1d ago' },
          { tier: 'HIGH', tone: ORANGE, branch: 'Bandra', headline: 'Parent NPS dipped from 4.7 → 4.5', sub: 'Triggered by 4 negative reviews in last 14 days. All in same teacher.', when: '2d ago' },
          { tier: 'MEDIUM', tone: GOLD, branch: 'Network', headline: '12 teachers below 70 composite score', sub: 'Coaching sequence auto-assigned. Review in 30 days.', when: '3d ago' },
        ].map((a, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 7, padding: '7px 0', borderBottom: i < 5 ? '0.5px solid #F1F5F9' : 'none' }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: a.tone, marginTop: 4, flexShrink: 0 }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 2 }}>
                <span style={{ fontSize: 5, fontWeight: 500, color: a.tone, background: `${a.tone}1A`, padding: '2px 5px', borderRadius: 999, letterSpacing: '0.1em' }}>{a.tier}</span>
                <span style={{ fontSize: 6, fontWeight: 500, color: TT3 }}>· {a.branch}</span>
                <span style={{ marginLeft: 'auto', fontSize: 6, color: TT4 }}>{a.when}</span>
              </div>
              <div style={{ fontSize: 8, fontWeight: 500, color: TT1, lineHeight: 1.3, marginBottom: 2 }}>{a.headline}</div>
              <div style={{ fontSize: 6, color: TT3, lineHeight: 1.4 }}>{a.sub}</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <div style={{ fontSize: 6, fontWeight: 500, color: '#fff', background: a.tone, padding: '3px 7px', borderRadius: 999 }}>Act</div>
              <div style={{ fontSize: 6, fontWeight: 500, color: BLUE, background: 'rgba(0,85,255,.10)', padding: '3px 7px', borderRadius: 999 }}>Delegate</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </OwnerIPadShell>
);

export default OwnerRisksAlertsIPad;
