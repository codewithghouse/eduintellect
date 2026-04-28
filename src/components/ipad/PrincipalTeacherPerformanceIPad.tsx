/**
 * Static iPad mockup — Principal · Teacher Performance.
 * Mirrors live page: 4 KPIs + faculty performance teacher cards
 * with class/students/avg/trend metrics + AI summary card.
 */

import PrincipalIPadShell from './PrincipalIPadShell';

const PrincipalTeacherPerformanceIPad = () => {
  const T1 = '#001040';
  const T3 = '#5070B0';
  const BLUE = '#0055FF';
  const GREEN = '#00C853';
  const ORANGE = '#FF8800';
  const RED = '#FF3355';

  return (
    <PrincipalIPadShell activePath="/teacher-performance">
      <div style={{ padding: 12 }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 9 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
            <div style={{ width: 26, height: 26, borderRadius: 8, background: `${BLUE}1F`, color: BLUE, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 14l4-4" /><path d="M3.34 17a10 10 0 1117.32 0" /></svg>
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 500, color: T1, letterSpacing: '-0.3px', lineHeight: 1 }}>Teacher Performance</div>
              <div style={{ fontSize: 7, color: T3, marginTop: 2 }}>Composite scoring · Subject filters · Coaching alerts</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 5 }}>
            <div style={{ background: '#fff', border: `0.5px solid ${BLUE}33`, fontSize: 7, fontWeight: 500, color: T1, padding: '4px 8px', borderRadius: 7 }}>All Subjects</div>
            <div style={{ background: '#fff', border: `0.5px solid ${BLUE}33`, fontSize: 7, fontWeight: 500, color: T1, padding: '4px 8px', borderRadius: 7 }}>This Term</div>
          </div>
        </div>

        {/* 4 KPIs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 7, marginBottom: 9 }}>
          {[
            { l: 'Total Faculty', v: '32', sub: 'Active staff', c: BLUE, bg: 'linear-gradient(135deg, #DEE6F8, #F8FAFE)' },
            { l: 'Avg Composite', v: '78.4', sub: '↑ 2.1 vs last term', c: GREEN, bg: 'linear-gradient(135deg, #E8FBEF, #DAF6E4)' },
            { l: 'Top Performers', v: '8', sub: '90+ composite', c: '#FFAA00', bg: 'linear-gradient(135deg, #FFF6E8, #FFEED4)' },
            { l: 'Need Coaching', v: '4', sub: 'Below 60', c: RED, bg: 'linear-gradient(135deg, #FFEEF0, #FFE2E6)' },
          ].map(c => (
            <div key={c.l} style={{ background: c.bg, border: `0.5px solid ${c.c}33`, borderRadius: 11, padding: '8px 10px' }}>
              <div style={{ width: 20, height: 20, borderRadius: 5, background: `${c.c}22`, color: c.c, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 4 }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={c.c} strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /></svg>
              </div>
              <div style={{ fontSize: 6, fontWeight: 600, color: c.c, letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 2 }}>{c.l}</div>
              <div style={{ fontSize: 18, fontWeight: 300, color: T1, letterSpacing: '-0.7px', lineHeight: 1 }}>{c.v}</div>
              <div style={{ fontSize: 6, fontWeight: 500, color: c.c, marginTop: 3 }}>{c.sub}</div>
            </div>
          ))}
        </div>

        {/* Section header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 7 }}>
          <span style={{ width: 4, height: 14, background: BLUE, borderRadius: 2 }} />
          <div style={{ fontSize: 9, fontWeight: 600, color: T1 }}>Faculty Performance</div>
          <span style={{ fontSize: 6, fontWeight: 600, color: '#fff', background: BLUE, padding: '2px 6px', borderRadius: 999 }}>32</span>
        </div>

        {/* Teacher cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7, marginBottom: 9 }}>
          {[
            { name: 'Priya Sharma', subj: ['Math', 'Stats'], cls: 5, st: 184, avg: 91, trend: '+4.2', tone: GREEN, label: 'EXCELLENT', vsAvg: '+12.6' },
            { name: 'Vikram Iyer', subj: ['Physics'], cls: 4, st: 142, avg: 86, trend: '+2.1', tone: GREEN, label: 'STRONG', vsAvg: '+7.6' },
            { name: 'Neha Roy', subj: ['English', 'Lit'], cls: 6, st: 218, avg: 79, trend: '+0.8', tone: BLUE, label: 'ON TRACK', vsAvg: '+0.6' },
            { name: 'Arjun Khan', subj: ['Chemistry'], cls: 3, st: 108, avg: 71, trend: '-1.4', tone: ORANGE, label: 'DIPPING', vsAvg: '-7.4' },
            { name: 'Meera Bose', subj: ['Biology'], cls: 4, st: 156, avg: 68, trend: '-2.8', tone: ORANGE, label: 'WATCH', vsAvg: '-10.4' },
            { name: 'Suresh Patil', subj: ['Hindi'], cls: 5, st: 182, avg: 56, trend: '-3.5', tone: RED, label: 'NEEDS COACH', vsAvg: '-22.4' },
          ].map((t, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 9, padding: 8, boxShadow: '0 2px 7px rgba(15,23,42,0.05)', borderLeft: `2.5px solid ${t.tone}`, border: '0.5px solid #f1f5f9' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 5 }}>
                <div style={{ width: 24, height: 24, borderRadius: '50%', background: `${t.tone}22`, color: t.tone, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 7, fontWeight: 600 }}>
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 8, fontWeight: 600, color: T1, lineHeight: 1.1 }}>{t.name}</div>
                  <div style={{ display: 'flex', gap: 3, marginTop: 2 }}>
                    {t.subj.map(s => (
                      <span key={s} style={{ fontSize: 5, fontWeight: 500, color: BLUE, background: `${BLUE}14`, padding: '1px 4px', borderRadius: 3 }}>{s}</span>
                    ))}
                  </div>
                </div>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: GREEN }} />
                <span style={{ fontSize: 5, fontWeight: 600, color: '#fff', background: t.tone, padding: '2px 5px', borderRadius: 999, letterSpacing: '0.08em' }}>{t.label}</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 3, marginBottom: 5 }}>
                {[
                  { l: 'Cls', v: t.cls },
                  { l: 'Stu', v: t.st },
                  { l: 'Avg', v: `${t.avg}%`, c: t.tone },
                  { l: 'Trend', v: t.trend, c: t.trend.startsWith('+') ? GREEN : RED },
                ].map(m => (
                  <div key={m.l} style={{ background: '#F6F8FC', borderRadius: 4, padding: '3px 4px' }}>
                    <div style={{ fontSize: 5, color: T3, letterSpacing: '0.1em', textTransform: 'uppercase' as const }}>{m.l}</div>
                    <div style={{ fontSize: 7, fontWeight: 600, color: m.c || T1 }}>{m.v}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginBottom: 5 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 5, fontWeight: 500, color: T3, marginBottom: 2, letterSpacing: '0.06em' }}>
                  <span>CLASS PERFORMANCE</span>
                  <span style={{ color: t.tone }}>{t.avg}%</span>
                </div>
                <div style={{ height: 4, background: '#E0ECFF', borderRadius: 99, overflow: 'hidden' }}>
                  <div style={{ width: `${t.avg}%`, height: '100%', background: `linear-gradient(90deg, ${t.tone}, ${t.tone}CC)` }} />
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 5, color: T3 }}>
                <span style={{ letterSpacing: '0.08em' }}>VS SCHOOL AVG</span>
                <span style={{ fontSize: 6, fontWeight: 600, color: t.vsAvg.startsWith('+') ? GREEN : RED }}>
                  {t.vsAvg}% · {t.vsAvg.startsWith('+') ? 'Above' : 'Below'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* AI summary */}
        <div style={{ background: `linear-gradient(135deg, #001040 0%, #001A66 50%, ${BLUE} 100%)`, borderRadius: 11, padding: '10px 12px', color: '#fff', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -25, right: -25, width: 100, height: 100, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.10), transparent 65%)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.7 5.3H19l-4.3 3.1 1.7 5.3-4.4-3.2-4.3 3.2 1.6-5.3L5 7.3h5.3z" /></svg>
            <div style={{ fontSize: 7, fontWeight: 600, color: 'rgba(255,255,255,0.85)', letterSpacing: '0.16em', textTransform: 'uppercase' as const }}>AI Faculty Summary</div>
          </div>
          <div style={{ fontSize: 8, lineHeight: 1.5, color: 'rgba(255,255,255,0.92)', marginBottom: 7 }}>
            <strong style={{ color: '#FFD27A' }}>Priya Sharma</strong> leads with 91% — recommend her as mentor lead. <strong style={{ color: '#FFB7C2' }}>4 teachers</strong> dipping below 70%; pair them with top performers in 4-week coaching cycle.
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
            {[
              { l: 'Total Faculty', v: '32' },
              { l: 'School Avg', v: '78.4%' },
              { l: 'Need Coaching', v: '4' },
            ].map(s => (
              <div key={s.l} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 7, padding: '6px 8px' }}>
                <div style={{ fontSize: 5, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.12em', textTransform: 'uppercase' as const }}>{s.l}</div>
                <div style={{ fontSize: 13, fontWeight: 400, color: '#fff', marginTop: 2, letterSpacing: '-0.3px' }}>{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PrincipalIPadShell>
  );
};

export default PrincipalTeacherPerformanceIPad;