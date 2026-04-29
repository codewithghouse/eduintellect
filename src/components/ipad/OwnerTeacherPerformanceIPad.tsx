/**
 * Static iPad mockup — Owner · Teacher Performance page.
 * Mirrors owner-dashboard/src/pages/TeacherPerformance.tsx with mock data.
 *
 * Layout: 4 KPI cards → search + branch filter → monthly aggregate chart
 * → teacher ranked list with progress bars → detail breakdown card.
 */

import OwnerIPadShell from './OwnerIPadShell';

const OwnerTeacherPerformanceIPad = () => {
  const BLUE = '#0055FF';
  const T1 = '#1e294b';
  const T3 = '#64748b';
  const T4 = '#94a3b8';
  const EMERALD = '#10B981';
  const AMBER = '#F59E0B';
  const ROSE = '#EF4444';
  const GOLD = '#FFAA00';

  const tierColor = (s: number) => (s >= 80 ? EMERALD : s >= 60 ? BLUE : s >= 40 ? AMBER : ROSE);

  // Monthly chart data (perf % + att %)
  const months = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
  const perf = [72, 75, 76, 79, 81, 83];
  const att = [88, 86, 89, 91, 90, 92];
  const W = 280, H = 60;
  const min = 50, max = 100;
  const buildPts = (data: number[]) =>
    data.map((v, i) => `${((i / (data.length - 1)) * W).toFixed(1)},${(H - ((v - min) / (max - min)) * H).toFixed(1)}`).join(' ');

  const teachers = [
    { rank: 1, name: 'Priya Iyer', initials: 'PI', branch: 'Bandra', subject: 'Math', score: 92 },
    { rank: 2, name: 'Rohan Khan', initials: 'RK', branch: 'Powai', subject: 'Physics', score: 89 },
    { rank: 3, name: 'Sneha Verma', initials: 'SV', branch: 'Andheri', subject: 'English', score: 86 },
    { rank: 4, name: 'Arjun Pillai', initials: 'AP', branch: 'Goregaon', subject: 'Bio', score: 81 },
    { rank: 5, name: 'Meera Nair', initials: 'MN', branch: 'Thane', subject: 'CS', score: 76 },
    { rank: 6, name: 'Vikram Patel', initials: 'VP', branch: 'Bandra', subject: 'Hindi', score: 68 },
    { rank: 7, name: 'Kavya Singh', initials: 'KS', branch: 'Powai', subject: 'Geo', score: 58 },
  ];

  return (
    <OwnerIPadShell activePath="/teachers">
      <div style={{ padding: '12px 14px 6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4 }}>
          <span style={{ width: 4, height: 4, borderRadius: 1, background: BLUE }} />
          <span style={{ fontSize: 7, fontWeight: 500, color: T3, letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>
            Owner · Teacher Performance
          </span>
        </div>
        <h1 style={{ fontSize: 22, fontWeight: 300, color: T1, letterSpacing: '-0.7px', lineHeight: 1.05, margin: 0 }}>
          Teacher Performance
        </h1>
        <div style={{ fontSize: 9, fontWeight: 400, color: T3, marginTop: 3 }}>
          Performance analytics across all 259 teachers · by subject &amp; class.
        </div>
      </div>

      <div style={{ flex: 1, padding: '6px 12px 12px', overflowY: 'auto', minHeight: 0 }}>
        {/* 4 KPI cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 7, marginBottom: 8 }}>
          {[
            { label: 'Total Teachers', val: '259', sub: 'Across 5 branches', color: BLUE, bg: 'linear-gradient(135deg, #DEE6F8 0%, #F8FAFE 100%)' },
            { label: 'Avg Composite', val: '76%', sub: '↑ 3% MoM', color: EMERALD, bg: 'linear-gradient(135deg, #E8FBEF 0%, #DAF6E4 100%)' },
            { label: 'Need Coaching', val: '14', sub: '< 60% composite', color: ROSE, bg: 'linear-gradient(135deg, #FFE5E9 0%, #FFD0D7 100%)' },
            { label: 'Top Performer', val: 'Priya I.', sub: 'Composite 92%', color: GOLD, bg: 'linear-gradient(135deg, #FFF6E0 0%, #FFEDC4 100%)' },
          ].map(c => (
            <div key={c.label} style={{ background: c.bg, border: `0.5px solid ${c.color}33`, borderRadius: 11, padding: '8px 10px' }}>
              <div style={{ fontSize: 6, fontWeight: 500, color: c.color, letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 4 }}>{c.label}</div>
              <div style={{ fontSize: c.val.length > 4 ? 13 : 18, fontWeight: 300, color: T1, letterSpacing: '-0.5px', lineHeight: 1, marginTop: c.val.length > 4 ? 4 : 0 }}>{c.val}</div>
              <div style={{ fontSize: 6, fontWeight: 500, color: c.color, marginTop: 3 }}>{c.sub}</div>
            </div>
          ))}
        </div>

        {/* Search + branch filter */}
        <div style={{ background: '#fff', borderRadius: 11, padding: 8, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '4px 8px', background: '#F8FAFE', borderRadius: 7, border: `0.5px solid ${BLUE}22`, flex: 1 }}>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={T4} strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            <span style={{ fontSize: 7, color: T4 }}>Search teachers by name…</span>
          </div>
          {[{ name: 'All Branches', active: true }, { name: 'Bandra' }, { name: 'Powai' }, { name: 'Andheri' }].map((b: any) => (
            <div key={b.name} style={{
              fontSize: 6.5, fontWeight: 500,
              padding: '4px 8px', borderRadius: 999,
              background: b.active ? `linear-gradient(135deg, ${BLUE}, #1166FF)` : '#fff',
              color: b.active ? '#fff' : BLUE,
              border: b.active ? 'none' : `0.5px solid ${BLUE}33`,
            }}>{b.name}</div>
          ))}
        </div>

        {/* Monthly aggregate chart + Detail card (2-col) */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 8, marginBottom: 8 }}>
          {/* Chart */}
          <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="2"><polyline points="3 17 9 11 13 15 21 7" /></svg>
              <div style={{ fontSize: 9, fontWeight: 500, color: T1 }}>Monthly Aggregates</div>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: 6 }}>
                {[{ name: 'Performance', color: BLUE }, { name: 'Attendance', color: EMERALD }].map(s => (
                  <div key={s.name} style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: s.color }} />
                    <span style={{ fontSize: 6, fontWeight: 500, color: T3 }}>{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <svg width="100%" height={H + 14} viewBox={`0 0 ${W} ${H + 14}`} preserveAspectRatio="none">
              {[0, 25, 50, 75, 100].map(g => (
                <line key={g} x1="0" y1={H - (g / 100) * H} x2={W} y2={H - (g / 100) * H} stroke="#F1F5F9" strokeWidth="0.5" />
              ))}
              <polyline points={buildPts(perf)} fill="none" stroke={BLUE} strokeWidth="1.6" strokeLinecap="round" />
              <polyline points={buildPts(att)} fill="none" stroke={EMERALD} strokeWidth="1.6" strokeLinecap="round" strokeDasharray="2 2" />
              {perf.map((v, i) => {
                const x = (i / (perf.length - 1)) * W;
                const y = H - ((v - min) / (max - min)) * H;
                return <circle key={i} cx={x} cy={y} r="1.6" fill="#fff" stroke={BLUE} strokeWidth="1.2" />;
              })}
            </svg>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 2, fontSize: 5.5, color: T4 }}>
              {months.map(m => <span key={m}>{m}</span>)}
            </div>
          </div>

          {/* Selected teacher detail card */}
          <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: `0.5px solid ${BLUE}22` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 7 }}>
              <div style={{ width: 26, height: 26, borderRadius: '50%', background: `linear-gradient(135deg, ${GOLD}, ${BLUE})`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontWeight: 600 }}>PI</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 8.5, fontWeight: 500, color: T1, lineHeight: 1.2 }}>Priya Iyer</div>
                <div style={{ fontSize: 6, color: T4 }}>Bandra · Mathematics</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 14, fontWeight: 300, color: EMERALD, letterSpacing: '-0.4px', lineHeight: 1 }}>92%</div>
                <div style={{ fontSize: 5.5, color: T4, letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginTop: 2 }}>Composite</div>
              </div>
            </div>
            <div style={{ fontSize: 5.5, fontWeight: 600, color: T4, letterSpacing: '0.14em', textTransform: 'uppercase' as const, marginBottom: 4 }}>Score breakdown</div>
            {[
              { label: 'Class Avg', weight: 35, val: 91, color: EMERALD },
              { label: 'Pass Rate', weight: 20, val: 95, color: EMERALD },
              { label: 'Attendance', weight: 20, val: 93, color: EMERALD },
              { label: 'Assignments', weight: 15, val: 88, color: BLUE },
              { label: 'Punctuality', weight: 10, val: 90, color: EMERALD },
            ].map((m, i) => (
              <div key={m.label} style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '3px 0', borderBottom: i < 4 ? '0.5px solid #F1F5F9' : 'none' }}>
                <span style={{ fontSize: 6.5, color: T1, minWidth: 50 }}>{m.label}</span>
                <span style={{ fontSize: 5.5, color: T4, minWidth: 18 }}>{m.weight}%</span>
                <div style={{ flex: 1, height: 4, background: '#F1F5F9', borderRadius: 2, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${m.val}%`, background: m.color, borderRadius: 2 }} />
                </div>
                <span style={{ fontSize: 6.5, fontWeight: 600, color: m.color, minWidth: 22, textAlign: 'right' }}>{m.val}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Teacher ranked list */}
        <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 7 }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /></svg>
            <div style={{ fontSize: 9, fontWeight: 500, color: T1 }}>Network Rankings</div>
            <div style={{ marginLeft: 'auto', fontSize: 6, color: T4 }}>Sorted by composite score</div>
          </div>
          {/* Header */}
          <div style={{ display: 'grid', gridTemplateColumns: '20px 1.4fr 0.8fr 0.6fr 1fr 30px', gap: 6, padding: '3px 0 5px', borderBottom: '0.5px solid #F1F5F9' }}>
            {['#', 'Name', 'Branch', 'Subj', 'Score', ''].map((h, i) => (
              <div key={i} style={{ fontSize: 5.5, fontWeight: 600, color: T4, letterSpacing: '0.12em', textTransform: 'uppercase' as const }}>{h}</div>
            ))}
          </div>
          {teachers.map((t, i) => (
            <div key={t.name} style={{ display: 'grid', gridTemplateColumns: '20px 1.4fr 0.8fr 0.6fr 1fr 30px', gap: 6, alignItems: 'center', padding: '4px 0', borderBottom: i < teachers.length - 1 ? '0.5px solid #F1F5F9' : 'none' }}>
              <span style={{ fontSize: 7, fontWeight: 500, color: T4 }}>{t.rank}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, minWidth: 0 }}>
                <div style={{ width: 16, height: 16, borderRadius: '50%', background: `linear-gradient(135deg, ${tierColor(t.score)}, ${BLUE})`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 5.5, fontWeight: 600, flexShrink: 0 }}>
                  {t.initials}
                </div>
                <span style={{ fontSize: 7, fontWeight: 500, color: T1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{t.name}</span>
              </div>
              <span style={{ fontSize: 6.5, color: T3 }}>{t.branch}</span>
              <span style={{ fontSize: 6.5, color: T3 }}>{t.subject}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <div style={{ flex: 1, height: 4, background: '#F1F5F9', borderRadius: 2, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${t.score}%`, background: tierColor(t.score), borderRadius: 2 }} />
                </div>
                <span style={{ fontSize: 6.5, fontWeight: 600, color: tierColor(t.score), minWidth: 20, textAlign: 'right' }}>{t.score}%</span>
              </div>
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={T4} strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
            </div>
          ))}
        </div>
      </div>
    </OwnerIPadShell>
  );
};

export default OwnerTeacherPerformanceIPad;
