/**
 * Static iPad mockup — Parent · Behaviour & Discipline page.
 * Rating hero with stars + sub-metrics + positives/improvements lists +
 * trend chart + 2x2 breakdown grid + term summary.
 */

import ParentIPadShell from './ParentIPadShell';

const ParentBehaviourIPad = () => {
  const BLUE = '#0055FF';
  const TT1 = '#001040';
  const TT3 = '#5070B0';
  const TT4 = '#99AACC';
  const GREEN = '#00C853';
  const ORANGE = '#FF8800';
  const GOLD = '#FFAA00';
  const VIOLET = '#7B3FF4';

  // behaviour trend: 6 months, rating out of 5
  const trend = [3.8, 4.0, 3.9, 4.1, 4.3, 4.2];
  const W = 280, H = 50;
  const max = 5, min = 3;
  const pts = trend.map((v, i) =>
    `${((i / (trend.length - 1)) * W).toFixed(1)},${(H - ((v - min) / (max - min)) * H).toFixed(1)}`
  );

  return (
    <ParentIPadShell activePath="/behaviour">
      <div style={{ padding: '12px 14px 6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4 }}>
          <span style={{ width: 4, height: 4, borderRadius: 1, background: BLUE }} />
          <span style={{ fontSize: 7, fontWeight: 500, color: TT3, letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>
            Parent · Behaviour
          </span>
        </div>
        <h1 style={{ fontSize: 22, fontWeight: 300, color: TT1, letterSpacing: '-0.7px', lineHeight: 1.05, margin: 0 }}>
          Behaviour & Discipline
        </h1>
        <div style={{ fontSize: 9, fontWeight: 400, color: TT3, marginTop: 3 }}>
          Real teacher observations from this term — no surprises at parent-teacher meetings.
        </div>
      </div>

      <div style={{ flex: 1, padding: '6px 12px 12px', overflowY: 'auto', minHeight: 0 }}>
        {/* Rating hero */}
        <div style={{ background: '#fff', borderRadius: 12, padding: '12px 14px', boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 32, fontWeight: 300, color: GREEN, letterSpacing: '-1.2px', lineHeight: 1 }}>4.2</div>
            <div style={{ fontSize: 6, fontWeight: 500, color: TT4, letterSpacing: '0.14em', textTransform: 'uppercase' as const, marginTop: 3 }}>Out of 5</div>
            <div style={{ display: 'flex', gap: 1.5, marginTop: 5, justifyContent: 'center' }}>
              {[1, 2, 3, 4, 5].map(n => (
                <svg key={n} width="9" height="9" viewBox="0 0 24 24" fill={n <= 4 ? GOLD : 'none'} stroke={n <= 4 ? GOLD : '#E2E8F0'} strokeWidth="1.6">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />
                </svg>
              ))}
            </div>
          </div>
          <div style={{ width: 0.5, height: 60, background: '#E2E8F0' }} />
          <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
            {[
              { label: 'Conduct', val: 4.5, color: GREEN },
              { label: 'Punctuality', val: 4.0, color: BLUE },
              { label: 'Respect', val: 4.3, color: GOLD },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontSize: 6, fontWeight: 500, color: TT4, letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 3 }}>{s.label}</div>
                <div style={{ fontSize: 16, fontWeight: 400, color: s.color, letterSpacing: '-0.5px', lineHeight: 1 }}>{s.val}</div>
                <div style={{ height: 4, background: '#F1F5F9', borderRadius: 2, marginTop: 5 }}>
                  <div style={{ height: '100%', width: `${(s.val / 5) * 100}%`, background: s.color, borderRadius: 2 }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2-col: Positives + Improvements */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 8 }}>
          {/* Positives */}
          <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: `0.5px solid ${GREEN}22` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 7 }}>
              <div style={{ width: 18, height: 18, borderRadius: 5, background: `linear-gradient(135deg, ${GREEN}, ${GREEN}cc)`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M6 9H4.5a2.5 2.5 0 010-5H6" /><path d="M18 9h1.5a2.5 2.5 0 000-5H18" /><path d="M4 22h16" /><path d="M18 2H6v7a6 6 0 0012 0V2z" /></svg>
              </div>
              <div style={{ fontSize: 9, fontWeight: 500, color: TT1 }}>Positive Highlights</div>
              <span style={{ marginLeft: 'auto', fontSize: 6, fontWeight: 500, color: GREEN }}>+12 this term</span>
            </div>
            {[
              { icon: '🏆', text: 'Won inter-house science quiz.', when: 'Today', who: 'Ms. Iyer', tag: 'Gold' },
              { icon: '⭐', text: 'Helped a classmate with quadratics.', when: '2d ago', who: 'Mr. Khan', tag: 'Good' },
              { icon: '💡', text: 'Volunteered to lead lab cleanup.', when: '4d ago', who: 'Ms. Pillai', tag: 'Nice' },
              { icon: '❤', text: 'Top scorer in surprise math quiz.', when: '1w ago', who: 'Mr. Khan', tag: 'Gold' },
            ].map((n, i) => (
              <div key={i} style={{ display: 'flex', gap: 6, padding: '5px 0', borderBottom: i < 3 ? '0.5px solid #F1F5F9' : 'none' }}>
                <span style={{ fontSize: 11, marginTop: 1 }}>{n.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 7, fontWeight: 500, color: TT1, lineHeight: 1.3 }}>{n.text}</div>
                  <div style={{ fontSize: 5.5, color: TT4, marginTop: 2 }}>{n.when} · {n.who}</div>
                </div>
                <span style={{ fontSize: 5.5, fontWeight: 500, color: GREEN, background: `${GREEN}1a`, padding: '2px 5px', borderRadius: 999, alignSelf: 'flex-start' }}>{n.tag}</span>
              </div>
            ))}
          </div>

          {/* Improvements */}
          <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: `0.5px solid ${ORANGE}22` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 7 }}>
              <div style={{ width: 18, height: 18, borderRadius: 5, background: `linear-gradient(135deg, ${ORANGE}, ${GOLD})`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 9v4M12 17h.01" /><circle cx="12" cy="12" r="9" /></svg>
              </div>
              <div style={{ fontSize: 9, fontWeight: 500, color: TT1 }}>Areas to Improve</div>
              <span style={{ marginLeft: 'auto', fontSize: 6, fontWeight: 500, color: ORANGE }}>3 active</span>
            </div>
            {[
              { icon: '⏰', text: 'Late to morning assembly twice this week.', when: 'Today', who: 'Ms. Pillai', tag: 'Focus' },
              { icon: '📝', text: 'Geometry HW submitted late.', when: '3d ago', who: 'Mr. Khan', tag: 'Note' },
              { icon: '🎒', text: 'Forgot lab coat on practical day.', when: '5d ago', who: 'Ms. Iyer', tag: 'Note' },
              { icon: '💬', text: 'Talking during English class.', when: '1w ago', who: 'Ms. Verma', tag: 'Focus' },
            ].map((n, i) => (
              <div key={i} style={{ display: 'flex', gap: 6, padding: '5px 0', borderBottom: i < 3 ? '0.5px solid #F1F5F9' : 'none' }}>
                <span style={{ fontSize: 11, marginTop: 1 }}>{n.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 7, fontWeight: 500, color: TT1, lineHeight: 1.3 }}>{n.text}</div>
                  <div style={{ fontSize: 5.5, color: TT4, marginTop: 2 }}>{n.when} · {n.who}</div>
                </div>
                <span style={{ fontSize: 5.5, fontWeight: 500, color: ORANGE, background: `${ORANGE}1a`, padding: '2px 5px', borderRadius: 999, alignSelf: 'flex-start' }}>{n.tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trend chart + 2x2 grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 8, marginBottom: 8 }}>
          {/* Trend */}
          <div style={{ background: '#fff', borderRadius: 11, padding: 10, boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: '0.5px solid rgba(0,85,255,0.07)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="2"><polyline points="3 17 9 11 13 15 21 7" /></svg>
              <div style={{ fontSize: 9, fontWeight: 500, color: TT1 }}>Behaviour Trend</div>
              <div style={{ marginLeft: 'auto', fontSize: 6, fontWeight: 500, color: GREEN }}>↑ 0.4 this term</div>
            </div>
            <svg width="100%" height={H + 14} viewBox={`0 0 ${W} ${H + 14}`} preserveAspectRatio="none">
              <defs>
                <linearGradient id="behavGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={BLUE} stopOpacity="0.3" />
                  <stop offset="100%" stopColor={BLUE} stopOpacity="0" />
                </linearGradient>
              </defs>
              <polyline points={`0,${H} ${pts.join(' ')} ${W},${H}`} fill="url(#behavGrad)" stroke="none" />
              <polyline points={pts.join(' ')} fill="none" stroke={BLUE} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              {pts.map((p, i) => {
                const [x, y] = p.split(',').map(Number);
                return <circle key={i} cx={x} cy={y} r="1.8" fill="#fff" stroke={BLUE} strokeWidth="1.2" />;
              })}
            </svg>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 2, fontSize: 5.5, color: TT4 }}>
              {['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'].map(m => <span key={m}>{m}</span>)}
            </div>
          </div>

          {/* 2x2 breakdown grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
            {[
              { label: 'Conduct', val: '4.5', color: GREEN, icon: '✓' },
              { label: 'Punctuality', val: '4.0', color: BLUE, icon: '⏰' },
              { label: 'Respect', val: '4.3', color: GOLD, icon: '⭐' },
              { label: 'Participation', val: '4.4', color: VIOLET, icon: '🙋' },
            ].map(b => (
              <div key={b.label} style={{ background: '#fff', borderRadius: 8, padding: '6px 8px', boxShadow: '0 4px 12px rgba(20,40,90,0.06)', border: `0.5px solid ${b.color}22`, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: -8, right: -8, fontSize: 28, opacity: 0.15 }}>{b.icon}</div>
                <div style={{ fontSize: 5.5, fontWeight: 500, color: b.color, letterSpacing: '0.14em', textTransform: 'uppercase' as const, marginBottom: 2, position: 'relative' }}>{b.label}</div>
                <div style={{ fontSize: 16, fontWeight: 300, color: TT1, letterSpacing: '-0.5px', lineHeight: 1, position: 'relative' }}>{b.val}</div>
                <div style={{ fontSize: 5.5, color: TT4, marginTop: 2, position: 'relative' }}>out of 5</div>
              </div>
            ))}
          </div>
        </div>

        {/* Term summary */}
        <div style={{
          background: `linear-gradient(140deg, ${BLUE} 0%, #1166FF 50%, #2277FF 100%)`,
          borderRadius: 11, padding: 10, color: '#fff', position: 'relative', overflow: 'hidden',
          boxShadow: '0 6px 18px rgba(0,85,255,0.25)',
        }}>
          <div style={{ position: 'absolute', top: -25, right: -25, width: 90, height: 90, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 65%)' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 2 }}>
            <div>
              <div style={{ fontSize: 6, fontWeight: 500, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>Term 2 Summary</div>
              <div style={{ fontSize: 11, fontWeight: 400, marginTop: 2 }}>Solid term, trending upward.</div>
            </div>
            <div style={{ display: 'flex', gap: 16 }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 18, fontWeight: 300, lineHeight: 1, letterSpacing: '-0.5px', color: '#FFD700' }}>4.2</div>
                <div style={{ fontSize: 5.5, color: 'rgba(255,255,255,0.65)', letterSpacing: '0.14em', textTransform: 'uppercase' as const, marginTop: 2 }}>Rating</div>
              </div>
              <div style={{ width: 0.5, background: 'rgba(255,255,255,0.3)' }} />
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 18, fontWeight: 300, lineHeight: 1, letterSpacing: '-0.5px' }}>3</div>
                <div style={{ fontSize: 5.5, color: 'rgba(255,255,255,0.65)', letterSpacing: '0.14em', textTransform: 'uppercase' as const, marginTop: 2 }}>Incidents</div>
              </div>
              <div style={{ width: 0.5, background: 'rgba(255,255,255,0.3)' }} />
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 18, fontWeight: 300, lineHeight: 1, letterSpacing: '-0.5px', color: '#6FFFAA' }}>A</div>
                <div style={{ fontSize: 5.5, color: 'rgba(255,255,255,0.65)', letterSpacing: '0.14em', textTransform: 'uppercase' as const, marginTop: 2 }}>Grade</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ParentIPadShell>
  );
};

export default ParentBehaviourIPad;
