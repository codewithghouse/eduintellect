/**
 * Static iPad mockup — Pre-Primary Parent · Calendar + Notices combined.
 * Shows the month grid with event chips on the left + an Announcements
 * feed on the right. "Field-trip slip" and "fee reminder" never on paper
 * again.
 */

import PrePrimaryParentIPadShell from './PrePrimaryParentIPadShell';

const PreParentCalendarNoticesIPad = () => {
  const NAVY = '#1e3272';
  const PEACH = '#FB923C';
  const MINT = '#10B981';
  const BLUSH = '#EC4899';
  const SKY = '#0EA5E9';
  const BUTTER = '#F59E0B';
  const T1 = '#0F172A';
  const T3 = '#64748B';

  const weeks = [
    [{ d: 30, m: false }, { d: 31, m: false }, { d: 1, m: true, evt: 'holi' }, { d: 2, m: true }, { d: 3, m: true }, { d: 4, m: true }, { d: 5, m: true }],
    [{ d: 6, m: true }, { d: 7, m: true, evt: 'ptm' }, { d: 8, m: true }, { d: 9, m: true }, { d: 10, m: true }, { d: 11, m: true, evt: 'fee' }, { d: 12, m: true }],
    [{ d: 13, m: true }, { d: 14, m: true }, { d: 15, m: true, evt: 'trip' }, { d: 16, m: true }, { d: 17, m: true }, { d: 18, m: true }, { d: 19, m: true }],
    [{ d: 20, m: true }, { d: 21, m: true, today: true, evt: 'live' }, { d: 22, m: true, evt: 'celeb' }, { d: 23, m: true }, { d: 24, m: true }, { d: 25, m: true }, { d: 26, m: true }],
    [{ d: 27, m: true }, { d: 28, m: true, evt: 'exam' }, { d: 29, m: true }, { d: 30, m: true }, { d: 1, m: false }, { d: 2, m: false }, { d: 3, m: false }],
  ];

  const eventColor: Record<string, string> = {
    holi: BLUSH, ptm: NAVY, fee: BUTTER, trip: MINT, live: PEACH, celeb: BLUSH, exam: SKY,
  };

  return (
    <PrePrimaryParentIPadShell activePath="/calendar">
      <div style={{ background: '#EEF4FF', flex: 1, overflowY: 'auto', minHeight: 0, padding: '10px 12px 12px', fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif" }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 9 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 3 }}>
              <span style={{ width: 4, height: 4, borderRadius: 1, background: SKY }} />
              <span style={{ fontSize: 6, fontWeight: 700, color: SKY, letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>What&apos;s coming</span>
            </div>
            <h1 style={{ fontSize: 20, fontWeight: 800, color: T1, letterSpacing: '-0.5px', lineHeight: 1.05, margin: 0 }}>Calendar &amp; Notices</h1>
            <div style={{ fontSize: 7.5, color: T3, fontWeight: 500, marginTop: 2 }}>Field trips · fee dates · PTM slots · celebrations — no more paper slips.</div>
          </div>
          <span style={{ fontSize: 6.5, fontWeight: 800, color: '#fff', background: PEACH, padding: '4px 10px', borderRadius: 999, letterSpacing: '0.06em' }}>
            2 unread · 1 RSVP due
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.45fr 1fr', gap: 8 }}>
          {/* Calendar */}
          <div style={{ background: '#fff', borderRadius: 13, padding: '9px 10px', boxShadow: '0 4px 14px rgba(15,23,42,0.06)' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 7 }}>
              <span style={{ fontSize: 11, fontWeight: 800, color: T1, letterSpacing: '-0.25px' }}>April 2026</span>
              <div style={{ display: 'flex', gap: 4 }}>
                <span style={{ fontSize: 5.5, fontWeight: 700, padding: '2px 6px', borderRadius: 999, background: `${PEACH}14`, color: PEACH, letterSpacing: '0.08em' }}>● Today</span>
                <span style={{ fontSize: 5.5, fontWeight: 700, padding: '2px 6px', borderRadius: 999, background: `${NAVY}10`, color: NAVY, letterSpacing: '0.08em' }}>● PTM</span>
                <span style={{ fontSize: 5.5, fontWeight: 700, padding: '2px 6px', borderRadius: 999, background: `${MINT}14`, color: MINT, letterSpacing: '0.08em' }}>● Trip</span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 3, marginBottom: 4 }}>
              {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d => (
                <div key={d} style={{ fontSize: 5.5, fontWeight: 800, color: T3, letterSpacing: '0.12em', textAlign: 'center', textTransform: 'uppercase' as const }}>{d}</div>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 3 }}>
              {weeks.flat().map((c, i) => {
                const dotColor = c.evt ? eventColor[c.evt] : null;
                return (
                  <div key={i} style={{
                    aspectRatio: '1 / 1',
                    background: c.today ? `linear-gradient(135deg, ${PEACH}, ${BLUSH})` : '#F8FAFC',
                    color: c.today ? '#fff' : (c.m ? T1 : '#cbd5e1'),
                    borderRadius: 7,
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    boxShadow: c.today ? `0 3px 8px ${PEACH}55` : 'none',
                    border: c.today ? 'none' : '0.5px solid #E2E8F0',
                    position: 'relative',
                  }}>
                    <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: '-0.2px' }}>{c.d}</div>
                    {dotColor && !c.today && (
                      <div style={{ position: 'absolute', bottom: 4, width: 4, height: 4, borderRadius: '50%', background: dotColor }} />
                    )}
                    {c.today && <div style={{ position: 'absolute', bottom: 3, fontSize: 4.5, fontWeight: 800, letterSpacing: '0.08em' }}>NOW</div>}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Notices feed */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            {[
              {
                kind: 'event', emoji: '🎒', title: 'Field trip · Nehru Planetarium', meta: '15 Apr · 9:00 → 12:30',
                body: 'Pack a water bottle + sun hat. RSVP by 10 Apr · 1 child waitlist remaining.',
                tone: MINT, tag: 'RSVP needed', unread: true,
              },
              {
                kind: 'reminder', emoji: '💳', title: 'Fee · Term 2 due 11 April', meta: '4 days remaining',
                body: 'Pay in-app or at the office. Auto-receipt + reminder before due date.',
                tone: BUTTER, tag: 'Reminder', unread: false,
              },
              {
                kind: 'event', emoji: '👩‍🏫', title: 'Parent-Teacher Meeting · slot 4', meta: '7 Apr · 4:00 → 4:20 PM',
                body: 'Slot confirmed with Priya — agenda: language progress + screen-time.',
                tone: NAVY, tag: 'Calendar', unread: true,
              },
              {
                kind: 'celeb', emoji: '🎉', title: 'Earth Day celebration', meta: '22 Apr · all-day',
                body: 'Send a leaf or seed from home. No uniform — children come in green.',
                tone: BLUSH, tag: 'Celebration', unread: false,
              },
            ].map((n, i) => (
              <div key={i} style={{
                background: '#fff', borderRadius: 11, padding: '8px 10px',
                boxShadow: '0 3px 9px rgba(15,23,42,0.05)',
                borderLeft: `2.5px solid ${n.tone}`,
                position: 'relative',
              }}>
                {n.unread && <span style={{ position: 'absolute', top: 7, right: 8, width: 6, height: 6, borderRadius: '50%', background: PEACH, boxShadow: `0 0 6px ${PEACH}` }} />}
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 5, marginBottom: 3 }}>
                  <span style={{ fontSize: 11 }}>{n.emoji}</span>
                  <span style={{ fontSize: 8, fontWeight: 800, color: T1, letterSpacing: '-0.15px', flex: 1, minWidth: 0 }}>{n.title}</span>
                </div>
                <div style={{ fontSize: 5.5, fontWeight: 700, color: n.tone, letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: 3 }}>{n.meta}</div>
                <div style={{ fontSize: 6.5, color: T3, fontWeight: 500, lineHeight: 1.4, marginBottom: 4 }}>{n.body}</div>
                <span style={{ fontSize: 5, fontWeight: 800, color: n.tone, background: `${n.tone}14`, padding: '1.5px 5px', borderRadius: 999, letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>{n.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PrePrimaryParentIPadShell>
  );
};

export default PreParentCalendarNoticesIPad;
