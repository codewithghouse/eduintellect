/**
 * Static iPad mockup — Pre-Primary Teacher · Attendance with mood pills.
 * Mirrors pre-primary-teacher-dashboard's Attendance page where every
 * child gets a present/absent toggle plus a mood pill (😊 😐 😢 😴).
 */

import PrePrimaryTeacherIPadShell from './PrePrimaryTeacherIPadShell';

const PreTeacherAttendanceMoodIPad = () => {
  const NAVY = '#1e3272';
  const MINT = '#10B981';
  const PEACH = '#FB923C';
  const BLUSH = '#EC4899';
  const SKY = '#0EA5E9';
  const T1 = '#0F172A';
  const T3 = '#64748B';

  const kids = [
    { name: 'Aarav S.',   status: 'present', mood: '😊', moodLabel: 'happy', tone: MINT,   age: 'UKG · 5y' },
    { name: 'Mira P.',    status: 'present', mood: '😊', moodLabel: 'happy', tone: MINT,   age: 'UKG · 5y' },
    { name: 'Ishaan K.',  status: 'present', mood: '😐', moodLabel: 'quiet', tone: SKY,    age: 'UKG · 5y' },
    { name: 'Ananya R.',  status: 'present', mood: '😊', moodLabel: 'happy', tone: MINT,   age: 'UKG · 5y' },
    { name: 'Vivaan M.',  status: 'present', mood: '😴', moodLabel: 'sleepy',tone: '#A78BFA', age: 'UKG · 5y' },
    { name: 'Saanvi T.',  status: 'present', mood: '😊', moodLabel: 'happy', tone: MINT,   age: 'UKG · 5y' },
    { name: 'Krish A.',   status: 'absent',  mood: '—',  moodLabel: 'called in', tone: '#F87171', age: 'UKG · 5y' },
    { name: 'Tara V.',    status: 'present', mood: '😐', moodLabel: 'quiet', tone: SKY,    age: 'UKG · 5y' },
    { name: 'Rohan G.',   status: 'present', mood: '😊', moodLabel: 'happy', tone: MINT,   age: 'UKG · 5y' },
    { name: 'Diya N.',    status: 'present', mood: '😢', moodLabel: 'missed mum', tone: BLUSH, age: 'UKG · 5y' },
    { name: 'Kabir J.',   status: 'present', mood: '😊', moodLabel: 'happy', tone: MINT,   age: 'UKG · 5y' },
    { name: 'Niharika L.',status: 'present', mood: '😴', moodLabel: 'sleepy',tone: '#A78BFA', age: 'UKG · 5y' },
  ];

  return (
    <PrePrimaryTeacherIPadShell activePath="/attendance">
      <div style={{ background: '#EEF4FF', flex: 1, overflowY: 'auto', minHeight: 0, padding: '10px 12px 12px', fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif" }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 9 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 3 }}>
              <span style={{ width: 4, height: 4, borderRadius: 1, background: NAVY }} />
              <span style={{ fontSize: 6, fontWeight: 700, color: NAVY, letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>Daily Vitals</span>
            </div>
            <h1 style={{ fontSize: 21, fontWeight: 800, color: T1, letterSpacing: '-0.6px', lineHeight: 1.05, margin: 0 }}>Attendance &amp; Mood</h1>
            <div style={{ fontSize: 8, fontWeight: 500, color: T3, marginTop: 3 }}>Tap a child to mark present and log how they walked in.</div>
          </div>
          <div style={{ display: 'flex', gap: 4 }}>
            {[
              { v: '11', l: 'Present', c: MINT },
              { v: '1',  l: 'Absent',  c: '#F87171' },
              { v: '92%',l: 'Today',   c: NAVY },
            ].map(s => (
              <div key={s.l} style={{ padding: '5px 8px', background: '#fff', borderRadius: 9, boxShadow: '0 2px 6px rgba(15,23,42,0.05)', minWidth: 38, textAlign: 'center' }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: s.c, letterSpacing: '-0.3px' }}>{s.v}</div>
                <div style={{ fontSize: 5.5, fontWeight: 700, color: T3, letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginTop: 1 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mood distribution strip */}
        <div style={{ background: '#fff', borderRadius: 11, padding: '8px 10px', marginBottom: 9, boxShadow: '0 3px 10px rgba(15,23,42,0.04)' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 6 }}>
            <span style={{ fontSize: 8, fontWeight: 700, color: T1, letterSpacing: '-0.15px' }}>Mood snapshot · 8:42 AM</span>
            <span style={{ fontSize: 6, color: T3, fontWeight: 600 }}>Auto-rolled into parent feed</span>
          </div>
          <div style={{ display: 'flex', gap: 5 }}>
            {[
              { emoji: '😊', label: 'Happy',     count: 7, tone: MINT },
              { emoji: '😐', label: 'Quiet',     count: 2, tone: SKY },
              { emoji: '😴', label: 'Sleepy',    count: 2, tone: '#A78BFA' },
              { emoji: '😢', label: 'Missed mum',count: 1, tone: BLUSH },
            ].map(m => (
              <div key={m.label} style={{
                flex: 1, padding: '6px 8px', borderRadius: 8,
                background: `linear-gradient(135deg, ${m.tone}14, ${m.tone}06)`,
                border: `0.5px solid ${m.tone}22`,
                display: 'flex', alignItems: 'center', gap: 6,
              }}>
                <div style={{ fontSize: 16 }}>{m.emoji}</div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 800, color: m.tone, letterSpacing: '-0.3px' }}>{m.count}</div>
                  <div style={{ fontSize: 5.5, color: T3, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' as const, marginTop: 1 }}>{m.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Roster grid 4x3 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6 }}>
          {kids.map(k => {
            const isAbsent = k.status === 'absent';
            return (
              <div key={k.name} style={{
                background: '#fff', borderRadius: 10, padding: '7px 8px',
                border: `0.5px solid ${isAbsent ? '#FECACA' : '#E5E7EB'}`,
                boxShadow: '0 2px 6px rgba(15,23,42,0.04)',
                position: 'relative',
                opacity: isAbsent ? 0.85 : 1,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 5 }}>
                  <div style={{
                    width: 20, height: 20, borderRadius: '50%',
                    background: `linear-gradient(135deg, ${k.tone}, ${k.tone}aa)`,
                    color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 8, fontWeight: 800, letterSpacing: '-0.2px',
                    boxShadow: `0 2px 5px ${k.tone}44`,
                  }}>
                    {k.name[0]}
                  </div>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div style={{ fontSize: 7.5, fontWeight: 700, color: T1, letterSpacing: '-0.15px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{k.name}</div>
                    <div style={{ fontSize: 5.5, color: T3, fontWeight: 600, letterSpacing: '0.04em' }}>{k.age}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{
                    fontSize: 5.5, fontWeight: 700, padding: '2px 6px', borderRadius: 999,
                    background: isAbsent ? '#FEE2E2' : `${MINT}18`,
                    color: isAbsent ? '#DC2626' : MINT,
                    letterSpacing: '0.08em', textTransform: 'uppercase' as const,
                  }}>
                    {isAbsent ? 'Absent' : 'In'}
                  </span>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 3,
                    padding: '1.5px 5px', borderRadius: 999,
                    background: isAbsent ? '#F1F5F9' : `${k.tone}14`,
                    transform: 'rotate(-2deg)',
                  }}>
                    <span style={{ fontSize: 9 }}>{k.mood}</span>
                    <span style={{ fontSize: 5.5, fontWeight: 700, color: isAbsent ? T3 : k.tone, letterSpacing: '0.04em' }}>{k.moodLabel}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <div style={{ marginTop: 9, fontSize: 6.5, color: T3, fontWeight: 600, textAlign: 'center', letterSpacing: '0.04em' }}>
          Saved at 8:42 AM · Parent feed updates in real time · Mood used for the daily report
        </div>
      </div>
    </PrePrimaryTeacherIPadShell>
  );
};

export default PreTeacherAttendanceMoodIPad;
