/**
 * Static iPad mockup — Owner › Branches Comparison page.
 * Mirrors /branches from owner-dashboard.
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
const VIOLET = '#0055FF';
const GOLD = '#FFAA00';

const BRANCHES = [
  { name: 'Edullent Bandra', code: 'BND', students: 1248, teachers: 78, attendance: 94, avg: 86.4, fees: 92, color: BLUE },
  { name: 'Edullent Koramangala', code: 'KOR', students: 1156, teachers: 72, attendance: 91, avg: 84.2, fees: 88, color: VIOLET },
  { name: 'Edullent Saket', code: 'SKT', students: 982, teachers: 60, attendance: 89, avg: 81.0, fees: 85, color: GOLD },
  { name: 'Edullent Jubilee Hills', code: 'JUB', students: 900, teachers: 49, attendance: 86, avg: 76.8, fees: 79, color: ORANGE },
];

const OwnerBranchComparisonIPad = () => (
  <OwnerIPadShell activePath="/branches">
    <div style={{ padding: 12 }}>
      {/* Hero */}
      <div style={{
        borderRadius: 12, padding: '12px 14px',
        background: `linear-gradient(135deg, ${NAVY_DEEP} 0%, ${NAVY} 35%, #0044CC 70%, ${BLUE} 100%)`,
        color: '#fff', marginBottom: 8, position: 'relative', overflow: 'hidden',
        boxShadow: '0 6px 18px rgba(0,8,60,0.22)',
      }}>
        <div style={{ position: 'absolute', top: -25, right: -25, width: 110, height: 110, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,.10) 0%, transparent 65%)' }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ fontSize: 6, fontWeight: 500, color: 'rgba(255,255,255,.7)', letterSpacing: '0.18em', textTransform: 'uppercase' as const, marginBottom: 4 }}>
            Branches Comparison · Apr 2026
          </div>
          <div style={{ fontSize: 16, fontWeight: 400, letterSpacing: '-0.4px' }}>4 branches · side-by-side</div>
          <div style={{ fontSize: 8, color: 'rgba(255,255,255,.6)', marginTop: 3 }}>Drill into any metric · auto-surfaces what's different</div>
        </div>
      </div>

      {/* Comparison table — 4 branches × 5 metrics */}
      <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,.06)', border: '0.5px solid rgba(0,85,255,.07)', marginBottom: 8 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '110px repeat(4, 1fr)', gap: 6, alignItems: 'center', paddingBottom: 6, borderBottom: '0.5px solid #F1F5F9' }}>
          <div style={{ fontSize: 6, fontWeight: 500, color: TT4, textTransform: 'uppercase' as const, letterSpacing: '0.14em' }}>Metric</div>
          {BRANCHES.map(b => (
            <div key={b.code} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
              <div style={{ width: 24, height: 24, borderRadius: 6, background: b.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 7, fontWeight: 600, letterSpacing: '0.04em' }}>{b.code}</div>
              <div style={{ fontSize: 7, fontWeight: 500, color: TT1, textAlign: 'center', lineHeight: 1.1 }}>{b.name.replace('Edullent ', '')}</div>
            </div>
          ))}
        </div>

        {[
          { l: 'Students', vals: BRANCHES.map(b => b.students.toLocaleString()), best: 0 },
          { l: 'Teachers', vals: BRANCHES.map(b => b.teachers.toString()), best: 0 },
          { l: 'Attendance %', vals: BRANCHES.map(b => `${b.attendance}%`), best: 0 },
          { l: 'Avg Score', vals: BRANCHES.map(b => b.avg.toFixed(1)), best: 0 },
          { l: 'Fee Collection', vals: BRANCHES.map(b => `${b.fees}%`), best: 0 },
        ].map((row, ri) => (
          <div key={ri} style={{ display: 'grid', gridTemplateColumns: '110px repeat(4, 1fr)', gap: 6, alignItems: 'center', padding: '7px 0', borderBottom: ri < 4 ? '0.5px solid #F1F5F9' : 'none' }}>
            <div style={{ fontSize: 8, fontWeight: 500, color: TT3, textTransform: 'uppercase' as const, letterSpacing: '0.06em' }}>{row.l}</div>
            {row.vals.map((v, vi) => (
              <div key={vi} style={{
                fontSize: 11, fontWeight: 500, color: vi === 0 ? GREEN : vi === 3 ? RED : TT1,
                textAlign: 'center', letterSpacing: '-0.2px',
              }}>
                {v}
                {vi === 0 && <span style={{ fontSize: 6, marginLeft: 3, color: GREEN, fontWeight: 500 }}>★</span>}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* 2-col: Why Bandra wins + Why Jubilee struggles */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7 }}>
        <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,.06)', border: `0.5px solid ${GREEN}1F` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 7 }}>
            <div style={{ width: 20, height: 20, borderRadius: 6, background: GREEN, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9 }}>★</div>
            <div style={{ fontSize: 9, fontWeight: 500, color: TT1 }}>Why Bandra wins</div>
          </div>
          {[
            'Higher teacher composite avg (89.2)',
            '2 of top 3 students network-wide',
            'Best fee discipline (92% on-time)',
            'Lowest at-risk count (18 students)',
          ].map((p, i) => (
            <div key={i} style={{ display: 'flex', gap: 6, padding: '4px 0', fontSize: 7, color: TT1 }}>
              <span style={{ color: GREEN, fontWeight: 500 }}>•</span>
              {p}
            </div>
          ))}
        </div>

        <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,.06)', border: `0.5px solid ${RED}1F` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 7 }}>
            <div style={{ width: 20, height: 20, borderRadius: 6, background: RED, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M12 3L3 20h18L12 3z" /><line x1="12" y1="9" x2="12" y2="14" /></svg>
            </div>
            <div style={{ fontSize: 9, fontWeight: 500, color: TT1 }}>Why Jubilee struggles</div>
          </div>
          {[
            'Highest teacher attrition (3 left in 60d)',
            '49 critical students (most in network)',
            'Avg score dropped 4.2 in 90 days',
            'Fee collection at 79% (target 88%)',
          ].map((p, i) => (
            <div key={i} style={{ display: 'flex', gap: 6, padding: '4px 0', fontSize: 7, color: TT1 }}>
              <span style={{ color: RED, fontWeight: 500 }}>•</span>
              {p}
            </div>
          ))}
        </div>
      </div>
    </div>
  </OwnerIPadShell>
);

export default OwnerBranchComparisonIPad;
