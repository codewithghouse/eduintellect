/**
 * Static iPad mockup — Pre-Primary Parent · Reports archive + Profile.
 * Combines the past-daily-reports list (left) with the editable child
 * profile (right) — health, allergens, pickup, comfort cues. The "record
 * the parent owns" without ever asking the school to email a PDF.
 */

import PrePrimaryParentIPadShell from './PrePrimaryParentIPadShell';

const PreParentReportsProfileIPad = () => {
  const NAVY = '#1e3272';
  const PEACH = '#FB923C';
  const MINT = '#10B981';
  const BLUSH = '#EC4899';
  const SKY = '#0EA5E9';
  const RED = '#EF4444';
  const BUTTER = '#F59E0B';
  const T1 = '#0F172A';
  const T3 = '#64748B';

  const reports = [
    { d: '21 Apr', day: 'Tue', mood: '😊', meals: 4, nap: 42, notes: 2, photos: 6, status: 'live' },
    { d: '20 Apr', day: 'Mon', mood: '😊', meals: 4, nap: 36, notes: 1, photos: 4, status: 'published' },
    { d: '18 Apr', day: 'Sat', mood: '😐', meals: 3, nap: 48, notes: 3, photos: 9, status: 'published' },
    { d: '17 Apr', day: 'Fri', mood: '😊', meals: 4, nap: 41, notes: 1, photos: 5, status: 'published' },
    { d: '16 Apr', day: 'Thu', mood: '😴', meals: 2, nap: 55, notes: 2, photos: 3, status: 'published' },
  ];

  return (
    <PrePrimaryParentIPadShell activePath="/reports">
      <div style={{ background: '#EEF4FF', flex: 1, overflowY: 'auto', minHeight: 0, padding: '10px 12px 12px', fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif" }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 9 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 3 }}>
              <span style={{ width: 4, height: 4, borderRadius: 1, background: NAVY }} />
              <span style={{ fontSize: 6, fontWeight: 700, color: NAVY, letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>The record · owned by you</span>
            </div>
            <h1 style={{ fontSize: 20, fontWeight: 800, color: T1, letterSpacing: '-0.5px', lineHeight: 1.05, margin: 0 }}>Reports &amp; Profile</h1>
            <div style={{ fontSize: 7.5, color: T3, fontWeight: 500, marginTop: 2 }}>Daily reports archived · child profile editable in your thumb</div>
          </div>
          <div style={{ display: 'flex', gap: 4 }}>
            {[
              { v: '45',  l: 'Reports · 30 days', c: NAVY },
              { v: '156', l: 'Photos archived',   c: BLUSH },
              { v: '8',   l: 'Notes from teacher',c: MINT },
            ].map(s => (
              <div key={s.l} style={{ padding: '5px 8px', background: '#fff', borderRadius: 9, boxShadow: '0 2px 6px rgba(15,23,42,0.05)', minWidth: 42, textAlign: 'center' }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: s.c, letterSpacing: '-0.3px' }}>{s.v}</div>
                <div style={{ fontSize: 5.5, fontWeight: 700, color: T3, letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginTop: 1 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 8 }}>
          {/* Reports archive */}
          <div style={{ background: '#fff', borderRadius: 12, padding: '9px 11px', boxShadow: '0 4px 12px rgba(15,23,42,0.06)' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 7 }}>
              <div>
                <div style={{ fontSize: 6, fontWeight: 800, color: PEACH, letterSpacing: '0.16em', textTransform: 'uppercase' as const }}>Daily reports · auto-published 6 PM</div>
                <div style={{ fontSize: 10, fontWeight: 800, color: T1, letterSpacing: '-0.2px' }}>Last 30 days</div>
              </div>
              <div style={{ display: 'flex', gap: 3 }}>
                <span style={{ fontSize: 5.5, fontWeight: 700, padding: '2px 6px', borderRadius: 999, background: PEACH, color: '#fff', letterSpacing: '0.06em' }}>30D</span>
                <span style={{ fontSize: 5.5, fontWeight: 700, padding: '2px 6px', borderRadius: 999, background: '#F8FAFC', color: T3, letterSpacing: '0.06em' }}>90D</span>
                <span style={{ fontSize: 5.5, fontWeight: 700, padding: '2px 6px', borderRadius: 999, background: '#F8FAFC', color: T3, letterSpacing: '0.06em' }}>Term</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {reports.map(r => (
                <div key={r.d} style={{
                  display: 'grid', gridTemplateColumns: 'auto 1fr auto', alignItems: 'center', gap: 8,
                  padding: '6px 8px', borderRadius: 8,
                  background: r.status === 'live' ? `linear-gradient(135deg, ${PEACH}10, ${PEACH}04)` : '#F8FAFC',
                  border: r.status === 'live' ? `0.5px solid ${PEACH}33` : '0.5px solid #E2E8F0',
                }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: 8,
                    background: '#fff', border: `0.5px solid ${NAVY}22`,
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 1px 3px rgba(15,23,42,0.05)',
                  }}>
                    <div style={{ fontSize: 5.5, color: T3, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>{r.day}</div>
                    <div style={{ fontSize: 10, fontWeight: 800, color: NAVY, letterSpacing: '-0.2px', lineHeight: 1 }}>{r.d.split(' ')[0]}</div>
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 2 }}>
                      <span style={{ fontSize: 12 }}>{r.mood}</span>
                      <span style={{ fontSize: 7.5, fontWeight: 800, color: T1, letterSpacing: '-0.1px' }}>{r.d} report</span>
                      {r.status === 'live' && (
                        <span style={{ fontSize: 5, fontWeight: 800, color: '#fff', background: PEACH, padding: '1px 5px', borderRadius: 999, letterSpacing: '0.08em' }}>LIVE</span>
                      )}
                    </div>
                    <div style={{ display: 'flex', gap: 5, fontSize: 5.5, color: T3, fontWeight: 700, letterSpacing: '0.06em' }}>
                      <span>🍪 {r.meals}/4</span>
                      <span>😴 {r.nap}m</span>
                      <span>💌 {r.notes} notes</span>
                      <span>📸 {r.photos}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: 3 }}>
                    <span style={{ fontSize: 5.5, fontWeight: 800, color: NAVY, background: `${NAVY}10`, padding: '3px 7px', borderRadius: 7, letterSpacing: '0.06em' }}>Open</span>
                    <span style={{ fontSize: 5.5, fontWeight: 800, color: '#fff', background: NAVY, padding: '3px 7px', borderRadius: 7, letterSpacing: '0.06em' }}>PDF</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile */}
          <div style={{ background: '#fff', borderRadius: 12, padding: '9px 11px', boxShadow: '0 4px 12px rgba(15,23,42,0.06)' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 7 }}>
              <div>
                <div style={{ fontSize: 6, fontWeight: 800, color: MINT, letterSpacing: '0.16em', textTransform: 'uppercase' as const }}>Mira&apos;s profile · parent-edit</div>
                <div style={{ fontSize: 10, fontWeight: 800, color: T1, letterSpacing: '-0.2px' }}>Safety + comfort</div>
              </div>
              <span style={{ fontSize: 5.5, fontWeight: 800, color: '#fff', background: MINT, padding: '3px 7px', borderRadius: 999, letterSpacing: '0.06em' }}>✓ Synced</span>
            </div>

            {/* Mini hero */}
            <div style={{
              padding: '8px 10px', borderRadius: 10, marginBottom: 7,
              background: 'linear-gradient(135deg, #FFE4F0, #DBEAFE)',
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <div style={{
                width: 32, height: 32, borderRadius: '50%',
                background: `linear-gradient(135deg, ${PEACH}, #FB7B30)`,
                color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 13, fontWeight: 800,
                border: '2px solid #fff', boxShadow: `0 3px 7px ${PEACH}55`,
              }}>M</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: T1, letterSpacing: '-0.25px' }}>Mira Patel</div>
                <div style={{ fontSize: 6, fontWeight: 700, color: NAVY, letterSpacing: '0.08em', marginTop: 1 }}>UKG · Bumblebee · 5y 2m</div>
              </div>
            </div>

            {/* Edit rows */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {[
                { label: 'Allergies',        value: 'Egg · skin reaction',         tone: PEACH, e: '🥚' },
                { label: 'Medical alerts',   value: 'None ongoing',                tone: MINT,  e: '🩺' },
                { label: 'Blood group',      value: 'A+ · confirmed',              tone: RED,   e: '🩸' },
                { label: 'Diet',             value: 'Vegetarian',                  tone: MINT,  e: '🌱' },
                { label: 'Comfort cue',      value: 'Stuffed elephant at nap',     tone: BLUSH, e: '🧸' },
                { label: 'Authorized pickup',value: 'Mum · Dad · Grandma Sushma',  tone: NAVY,  e: '🚸' },
                { label: 'Doctor',           value: 'Dr. Kavita · 9988-7700',      tone: SKY,   e: '📞' },
              ].map(r => (
                <div key={r.label} style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  padding: '5px 8px', borderRadius: 7,
                  background: '#F8FAFC',
                  border: `0.5px solid ${r.tone}1f`,
                }}>
                  <div style={{
                    width: 18, height: 18, borderRadius: 5,
                    background: `${r.tone}14`, color: r.tone,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 9,
                  }}>{r.e}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 5.5, color: T3, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' as const }}>{r.label}</div>
                    <div style={{ fontSize: 7, fontWeight: 700, color: T1, letterSpacing: '-0.1px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.value}</div>
                  </div>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={r.tone} strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 113 3L7 19l-4 1 1-4z" />
                  </svg>
                </div>
              ))}
            </div>

            {/* Audit footer */}
            <div style={{
              marginTop: 7, padding: '6px 8px', borderRadius: 7,
              background: `linear-gradient(135deg, ${BUTTER}14, ${PEACH}08)`,
              border: `0.5px solid ${BUTTER}22`,
              display: 'flex', alignItems: 'center', gap: 5,
            }}>
              <span style={{ fontSize: 11 }}>📜</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 6, fontWeight: 800, color: BUTTER, letterSpacing: '0.12em', textTransform: 'uppercase' as const }}>Audit · every change tracked</div>
                <div style={{ fontSize: 6, color: T3, fontWeight: 600, marginTop: 1, letterSpacing: '-0.05px' }}>School + parent both see the version history. Nothing changes silently.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PrePrimaryParentIPadShell>
  );
};

export default PreParentReportsProfileIPad;
