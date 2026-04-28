/**
 * Static iPad mockup — Owner › Students Intelligence page.
 * Mirrors /students from owner-dashboard.
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

const OwnerStudentIntelligenceIPad = () => (
  <OwnerIPadShell activePath="/students">
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
            Network-wide · Apr 2026
          </div>
          <div style={{ fontSize: 16, fontWeight: 400, letterSpacing: '-0.4px' }}>Students Intelligence</div>
          <div style={{ fontSize: 8, color: 'rgba(255,255,255,.6)', marginTop: 3 }}>Cross-branch student analytics + AI insights</div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 1, marginTop: 10, background: 'rgba(255,255,255,.12)', borderRadius: 8, overflow: 'hidden' }}>
            {[
              { l: 'TOTAL', v: '4,286', col: '#fff' },
              { l: 'AT-RISK', v: '127', col: '#FF99AA' },
              { l: 'TOP 10%', v: '429', col: '#6FFFAA' },
              { l: 'AVG GPA', v: '8.4', col: '#FFDD55' },
              { l: 'ENGAGED', v: '94%', col: '#fff' },
            ].map(s => (
              <div key={s.l} style={{ background: 'rgba(0,20,80,.6)', padding: '7px 8px', textAlign: 'center' }}>
                <div style={{ fontSize: 13, fontWeight: 400, color: s.col, letterSpacing: '-0.3px' }}>{s.v}</div>
                <div style={{ fontSize: 6, fontWeight: 500, color: 'rgba(255,255,255,.55)', letterSpacing: '0.1em', marginTop: 2 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filters row */}
      <div style={{ display: 'flex', gap: 5, marginBottom: 8, alignItems: 'center' }}>
        {['All Branches', 'Bandra', 'Koramangala', 'Saket', 'Jubilee Hills'].map((b, i) => (
          <div key={b} style={{
            padding: '4px 10px', borderRadius: 999, fontSize: 7, fontWeight: 500,
            background: i === 0 ? NAVY_DEEP : '#fff',
            color: i === 0 ? '#fff' : TT3,
            border: `0.5px solid ${i === 0 ? NAVY_DEEP : 'rgba(0,85,255,.10)'}`,
          }}>{b}</div>
        ))}
        <div style={{ marginLeft: 'auto', fontSize: 7, fontWeight: 500, color: BLUE, background: 'rgba(0,85,255,.10)', padding: '4px 10px', borderRadius: 999 }}>
          Export CSV
        </div>
      </div>

      {/* 2-col: Distribution + Top Students */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 7, marginBottom: 8 }}>
        {/* Performance distribution */}
        <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,.06)', border: '0.5px solid rgba(0,85,255,.07)' }}>
          <div style={{ fontSize: 6, fontWeight: 500, color: TT3, letterSpacing: '0.18em', textTransform: 'uppercase' as const, marginBottom: 4 }}>Performance Distribution</div>
          <div style={{ fontSize: 9, fontWeight: 500, color: TT1, marginBottom: 7 }}>4,286 students across 4 branches</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 90, marginTop: 8 }}>
            {[
              { l: '<40', v: 8, c: RED },
              { l: '40-55', v: 16, c: ORANGE },
              { l: '55-70', v: 28, c: '#FFAA00' },
              { l: '70-85', v: 38, c: BLUE },
              { l: '85+', v: 10, c: GREEN },
            ].map(b => (
              <div key={b.l} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
                <div style={{ fontSize: 7, fontWeight: 500, color: b.c }}>{b.v}%</div>
                <div style={{ width: '100%', background: `${b.c}33`, borderRadius: 4, height: `${b.v * 1.6}px`, position: 'relative' }}>
                  <div style={{ background: b.c, borderRadius: 4, height: '100%' }} />
                </div>
                <div style={{ fontSize: 6, fontWeight: 500, color: TT4 }}>{b.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* AI insight card */}
        <div style={{
          background: `linear-gradient(135deg, ${VIOLET} 0%, #003ECC 100%)`,
          color: '#fff', borderRadius: 11, padding: 10,
          boxShadow: '0 6px 18px rgba(0,85,255,.22)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: -20, right: -20, width: 70, height: 70, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,.18) 0%, transparent 65%)' }} />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ fontSize: 6, fontWeight: 500, color: 'rgba(255,255,255,.7)', letterSpacing: '0.18em', textTransform: 'uppercase' as const, marginBottom: 5 }}>
              AI Brand Insight
            </div>
            <div style={{ fontSize: 9, fontWeight: 500, lineHeight: 1.4, marginBottom: 6 }}>
              Bandra is your strongest branch on student outcomes (avg 87.4) — but Saket has caught up most this month (+4.8%).
            </div>
            <div style={{ fontSize: 7, color: 'rgba(255,255,255,.78)', lineHeight: 1.4 }}>
              <b style={{ color: '#FFD166', fontWeight: 500 }}>Action:</b> Replicate Saket's evening-tutoring pilot in Jubilee Hills (lowest avg).
            </div>
          </div>
        </div>
      </div>

      {/* Top students table */}
      <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,.06)', border: '0.5px solid rgba(0,85,255,.07)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 7 }}>
          <div style={{ fontSize: 9, fontWeight: 500, color: TT1 }}>Top 100 Students (network-wide)</div>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 3 }}>
            {['Score', 'Growth', 'Attendance'].map((s, i) => (
              <div key={s} style={{ fontSize: 6, fontWeight: 500, color: i === 0 ? '#fff' : TT3, background: i === 0 ? BLUE : '#F4F7FE', padding: '3px 7px', borderRadius: 999 }}>
                {s}
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '20px 1fr 60px 50px 50px 50px', gap: 6, fontSize: 6, fontWeight: 500, color: TT4, textTransform: 'uppercase' as const, letterSpacing: '0.1em', padding: '4px 0', borderBottom: '0.5px solid #F1F5F9' }}>
          <div>#</div><div>Student</div><div>Branch</div><div style={{ textAlign: 'right' }}>Score</div><div style={{ textAlign: 'right' }}>Att.</div><div style={{ textAlign: 'right' }}>Growth</div>
        </div>
        {[
          { r: 1, n: 'Aarav Sharma', b: 'Bandra', s: 96.2, a: '98%', g: '+4.8' },
          { r: 2, n: 'Diya Patel', b: 'Koramangala', s: 95.7, a: '97%', g: '+3.2' },
          { r: 3, n: 'Vihaan Reddy', b: 'Bandra', s: 94.9, a: '96%', g: '+2.1' },
          { r: 4, n: 'Anaya Singh', b: 'Saket', s: 94.4, a: '99%', g: '+5.4' },
          { r: 5, n: 'Ishaan Joshi', b: 'Bandra', s: 93.8, a: '95%', g: '+1.8' },
          { r: 6, n: 'Sara Khan', b: 'Jubilee Hills', s: 93.1, a: '92%', g: '+0.6' },
          { r: 7, n: 'Karan Mehta', b: 'Koramangala', s: 92.6, a: '94%', g: '+2.9' },
        ].map((s, i) => (
          <div key={s.r} style={{ display: 'grid', gridTemplateColumns: '20px 1fr 60px 50px 50px 50px', gap: 6, fontSize: 8, padding: '4px 0', borderBottom: i < 6 ? '0.5px solid #F1F5F9' : 'none', alignItems: 'center' }}>
            <div style={{ fontWeight: 500, color: TT3 }}>{s.r}</div>
            <div style={{ fontWeight: 500, color: TT1 }}>{s.n}</div>
            <div style={{ fontSize: 7, color: TT4 }}>{s.b}</div>
            <div style={{ textAlign: 'right', fontWeight: 500, color: TT1 }}>{s.s}</div>
            <div style={{ textAlign: 'right', fontSize: 7, color: TT3 }}>{s.a}</div>
            <div style={{ textAlign: 'right', fontSize: 7, fontWeight: 500, color: GREEN }}>{s.g}</div>
          </div>
        ))}
      </div>
    </div>
  </OwnerIPadShell>
);

export default OwnerStudentIntelligenceIPad;
