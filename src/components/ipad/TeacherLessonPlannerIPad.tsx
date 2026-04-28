/**
 * Static iPad mockup — AI Lesson Planner page (1:1 replica of /lesson-planner).
 * Faithful reproduction of the real LessonPlanGenerator desktop view.
 * Same colors, same layout, same components — only data is hardcoded.
 */

import IPadShellWithSidebar from './IPadShellWithSidebar';

const TeacherLessonPlannerIPad = () => {
  return (
    <IPadShellWithSidebar activePath="/lesson-planner">
      <div style={{ background: '#EEF4FF', padding: '12px 14px 14px', minHeight: '100%' }}>
        {/* Page header row + tabs */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 12, marginBottom: 10 }}>
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 5,
                fontSize: 6,
                fontWeight: 500,
                color: '#fff',
                letterSpacing: '0.18em',
                textTransform: 'uppercase' as const,
                marginBottom: 8,
                background: 'linear-gradient(135deg, #001A66 0%, #0055FF 50%, #1166FF 100%)',
                padding: '4px 10px 4px 7px',
                borderRadius: 999,
                boxShadow: '0 1px 2px rgba(0,85,255,.25), 0 3px 8px rgba(0,85,255,.3), inset 0 0.5px 0 rgba(255,255,255,.2)',
              }}
            >
              <span style={{ fontSize: 9, color: '#FFDD55', filter: 'drop-shadow(0 0 3px rgba(255,221,85,.6))' }}>✦</span>
              AI Powered
            </div>
            <h1 style={{ fontSize: 22, fontWeight: 400, color: '#001040', letterSpacing: '-0.7px', lineHeight: 1.05, margin: 0 }}>
              AI Lesson{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #0055FF 0%, #1166FF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Planner
              </span>
            </h1>
            <div style={{ fontSize: 8, fontWeight: 400, color: '#5070B0', marginTop: 4 }}>
              Generate classroom-ready lesson plans in seconds.
            </div>
          </div>

          {/* Tabs */}
          <div
            style={{
              display: 'inline-flex',
              gap: 3,
              background: '#fff',
              padding: 3,
              borderRadius: 8,
              boxShadow: '0 0.5px 1px rgba(0,85,255,.04), 0 2px 8px rgba(0,85,255,.08)',
              border: '0.5px solid rgba(0,85,255,.07)',
            }}
          >
            <div
              style={{
                padding: '5px 12px',
                borderRadius: 6,
                fontSize: 8,
                fontWeight: 500,
                color: '#fff',
                background: 'linear-gradient(135deg, #0055FF, #1166FF)',
                boxShadow: '0 1px 2px rgba(0,85,255,.22), 0 3px 7px rgba(0,85,255,.3)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 5,
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" width="9" height="9">
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6z" />
              </svg>
              Generate
            </div>
            <div
              style={{
                padding: '5px 12px',
                borderRadius: 6,
                fontSize: 8,
                fontWeight: 500,
                color: '#5070B0',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 5,
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" width="9" height="9">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              History
              <span style={{ background: '#F4F7FE', color: '#5070B0', fontSize: 7, fontWeight: 500, padding: '0 5px', borderRadius: 999 }}>12</span>
            </div>
          </div>
        </div>

        {/* AI Hero */}
        <div
          style={{
            background: 'linear-gradient(135deg, #000A33 0%, #001A66 32%, #0044CC 68%, #0055FF 100%)',
            borderRadius: 14,
            padding: 14,
            marginBottom: 8,
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 1px 2px rgba(0,26,102,.2), 0 8px 22px rgba(0,26,102,.32)',
          }}
        >
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,.12) 0%, transparent 45%)', pointerEvents: 'none' }} />
          {/* Twinkles */}
          <div
            style={{
              position: 'absolute',
              top: 14,
              right: 24,
              width: 2,
              height: 2,
              background: '#FFDD55',
              borderRadius: '50%',
              boxShadow:
                '-18px 12px 0 -0.5px rgba(255,255,255,.7), 9px 18px 0 -0.5px rgba(255,221,85,.85), -28px 26px 0 -1px rgba(255,255,255,.55), -8px 30px 0 -0.5px rgba(255,221,85,.9), -38px 8px 0 -1px rgba(255,255,255,.4)',
              pointerEvents: 'none',
            }}
          />

          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 9,
                  background: 'rgba(255,255,255,.16)',
                  border: '0.5px solid rgba(255,255,255,.28)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFDD55',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 4V2M15 16v-2M8 9h2M20 9h2M17.8 11.8L19 13M15 9h0M17.8 6.2L19 5M3 21l9-9M12.2 6.2L11 5" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 7, fontWeight: 500, color: 'rgba(255,255,255,.85)', letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>
                  Powered by Edullent engine
                </div>
                <div style={{ fontSize: 8, color: 'rgba(255,255,255,.55)', marginTop: 2, fontWeight: 400 }}>Curriculum-aligned · Real-time</div>
              </div>
              <div
                style={{
                  marginLeft: 'auto',
                  background: 'rgba(255,255,255,.18)',
                  border: '0.5px solid rgba(255,255,255,.32)',
                  color: '#fff',
                  padding: '4px 10px',
                  borderRadius: 999,
                  fontSize: 7,
                  fontWeight: 500,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 5,
                }}
              >
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#FFDD55', boxShadow: '0 0 6px #FFDD55' }} />
                Live
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: 18, fontWeight: 400, color: '#fff', letterSpacing: '-0.6px', lineHeight: 1.1, marginBottom: 4 }}>
                  Craft lessons in seconds <span style={{ color: '#FFDD55' }}>✨</span>
                </div>
                <div style={{ fontSize: 8, fontWeight: 400, color: 'rgba(255,255,255,.82)', lineHeight: 1.4 }}>
                  Just pick a subject, class, and topic — <b style={{ fontWeight: 500, color: '#fff' }}>the AI handles the rest</b>.
                </div>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: 1,
                  background: 'rgba(255,255,255,.12)',
                  borderRadius: 8,
                  padding: 1,
                  overflow: 'hidden',
                  minWidth: 200,
                }}
              >
                {[
                  { v: '12', l: 'GENERATED', col: '#fff' },
                  { v: '~8s', l: 'AVG TIME', col: '#FFDD55' },
                  { v: '100%', l: 'SAVED', col: '#6FFFAA' },
                ].map(s => (
                  <div key={s.l} style={{ background: 'rgba(0,10,51,.7)', padding: '7px 10px', textAlign: 'center' }}>
                    <div style={{ fontSize: 13, fontWeight: 400, color: s.col, letterSpacing: '-0.3px' }}>{s.v}</div>
                    <div style={{ fontSize: 5, fontWeight: 500, color: 'rgba(255,255,255,.6)', letterSpacing: '0.12em', marginTop: 2 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pro Tip card */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(0,85,255,.08), rgba(17,102,255,.04))',
            border: '0.5px solid rgba(0,85,255,.2)',
            borderRadius: 10,
            padding: '8px 10px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: 7,
            marginBottom: 8,
          }}
        >
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: 7,
              background: 'linear-gradient(135deg, #0055FF, #1166FF)',
              color: '#FFDD55',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 11,
              boxShadow: '0 1px 2px rgba(0,85,255,.2), 0 3px 7px rgba(0,85,255,.25)',
              flexShrink: 0,
            }}
          >
            ⚡
          </div>
          <div style={{ flex: 1, fontSize: 8, color: '#002080', lineHeight: 1.4, fontWeight: 400 }}>
            <b style={{ color: '#0055FF', fontWeight: 500 }}>Pro tip:</b> The more specific your topic, the better the lesson plan. Try "Noun types with examples" instead of just "Nouns".
          </div>
        </div>

        {/* Form grid: 2-column */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7, marginBottom: 8 }}>
          {/* Subject — full row */}
          <div
            style={{
              gridColumn: '1 / -1',
              background: '#fff',
              borderRadius: 12,
              padding: '10px 12px',
              boxShadow: '0 0 0 0.5px rgba(0,85,255,.10), 0 4px 12px rgba(0,85,255,.10)',
              border: '0.5px solid rgba(0,85,255,.07)',
            }}
          >
            <div style={{ fontSize: 6, fontWeight: 500, color: '#5070B0', letterSpacing: '0.15em', textTransform: 'uppercase' as const, marginBottom: 7, display: 'flex', alignItems: 'center', gap: 4 }}>
              Subject
              <span style={{ color: '#FF3355', fontSize: 8, fontWeight: 500 }}>*</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
              {[
                { key: 'English', label: 'English', emoji: '📝', active: false },
                { key: 'Mathematics', label: 'Math', emoji: '🔢', active: true },
                { key: 'Science', label: 'Science', emoji: '🔬', active: false },
                { key: 'Social', label: 'Social', emoji: '🌍', active: false },
                { key: 'Computer', label: 'Computer', emoji: '💻', active: false },
              ].map(sc => (
                <div
                  key={sc.key}
                  style={{
                    padding: '5px 11px',
                    borderRadius: 999,
                    background: sc.active ? 'linear-gradient(135deg, #0055FF, #1166FF)' : '#F4F7FE',
                    color: sc.active ? '#fff' : '#002080',
                    fontSize: 8,
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                    border: sc.active ? '0.5px solid #0055FF' : '0.5px solid rgba(0,85,255,.07)',
                    boxShadow: sc.active ? '0 1px 2px rgba(0,85,255,.22), 0 3px 7px rgba(0,85,255,.28)' : 'none',
                  }}
                >
                  <span style={{ fontSize: 9 }}>{sc.emoji}</span>
                  {sc.label}
                </div>
              ))}
            </div>
          </div>

          {/* Class */}
          <div
            style={{
              background: '#fff',
              borderRadius: 12,
              padding: '10px 12px',
              boxShadow: '0 0 0 0.5px rgba(0,85,255,.10), 0 4px 12px rgba(0,85,255,.10)',
              border: '0.5px solid rgba(0,85,255,.07)',
            }}
          >
            <div style={{ fontSize: 6, fontWeight: 500, color: '#5070B0', letterSpacing: '0.15em', textTransform: 'uppercase' as const, marginBottom: 7, display: 'flex', alignItems: 'center', gap: 4 }}>
              Class
              <span style={{ color: '#FF3355', fontSize: 8, fontWeight: 500 }}>*</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: 3 }}>
              {['6', '7', '8', '9', '10', '11', '12'].map(c => {
                const active = c === '10';
                return (
                  <div
                    key={c}
                    style={{
                      padding: '5px 0',
                      borderRadius: 6,
                      background: active ? 'linear-gradient(135deg, #0055FF, #1166FF)' : '#F4F7FE',
                      color: active ? '#fff' : '#5070B0',
                      fontSize: 8,
                      fontWeight: 500,
                      textAlign: 'center',
                      border: active ? '0.5px solid #0055FF' : '0.5px solid rgba(0,85,255,.07)',
                      boxShadow: active ? '0 1px 2px rgba(0,85,255,.22)' : 'none',
                    }}
                  >
                    {c}
                  </div>
                );
              })}
              <div
                style={{
                  padding: '5px 0',
                  borderRadius: 6,
                  background: '#F4F7FE',
                  color: '#5070B0',
                  fontSize: 8,
                  fontWeight: 500,
                  textAlign: 'center',
                  border: '0.5px solid rgba(0,85,255,.07)',
                }}
              >
                +
              </div>
            </div>
          </div>

          {/* Board */}
          <div
            style={{
              background: '#fff',
              borderRadius: 12,
              padding: '10px 12px',
              boxShadow: '0 0 0 0.5px rgba(0,85,255,.10), 0 4px 12px rgba(0,85,255,.10)',
              border: '0.5px solid rgba(0,85,255,.07)',
            }}
          >
            <div style={{ fontSize: 6, fontWeight: 500, color: '#5070B0', letterSpacing: '0.15em', textTransform: 'uppercase' as const, marginBottom: 7 }}>
              Board
            </div>
            <div style={{ display: 'flex', gap: 2, background: '#F4F7FE', padding: 2, borderRadius: 7 }}>
              {['CBSE', 'ICSE', 'State Board'].map(b => {
                const active = b === 'CBSE';
                return (
                  <div
                    key={b}
                    style={{
                      flex: 1,
                      padding: '5px 8px',
                      borderRadius: 5,
                      fontSize: 8,
                      fontWeight: 500,
                      color: active ? '#0055FF' : '#5070B0',
                      background: active ? '#fff' : 'transparent',
                      boxShadow: active ? '0 1px 2px rgba(0,0,0,.04), 0 2px 5px rgba(0,85,255,.15)' : 'none',
                      textAlign: 'center',
                    }}
                  >
                    {b}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Topic — full row */}
          <div
            style={{
              gridColumn: '1 / -1',
              background: '#fff',
              borderRadius: 12,
              padding: '10px 12px',
              boxShadow: '0 0 0 0.5px rgba(0,85,255,.10), 0 4px 12px rgba(0,85,255,.10)',
              border: '0.5px solid rgba(0,85,255,.07)',
            }}
          >
            <div style={{ fontSize: 6, fontWeight: 500, color: '#5070B0', letterSpacing: '0.15em', textTransform: 'uppercase' as const, marginBottom: 7, display: 'flex', alignItems: 'center', gap: 4 }}>
              Lesson Topic
              <span style={{ color: '#FF3355', fontSize: 8, fontWeight: 500 }}>*</span>
            </div>
            <div
              style={{
                width: '100%',
                padding: '8px 10px',
                background: '#fff',
                border: '0.5px solid #0055FF',
                borderRadius: 8,
                fontSize: 9,
                fontWeight: 500,
                color: '#001040',
                boxShadow: '0 0 0 2px rgba(0,85,255,.12)',
              }}
            >
              Quadratic Equations — Standard Form & Solving Methods
            </div>
            <div style={{ fontSize: 7, color: '#99AACC', marginTop: 5, fontWeight: 400, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>What should the AI teach?</span>
              <span style={{ color: '#5070B0', fontWeight: 500 }}>52 / 120</span>
            </div>
          </div>

          {/* Lessons */}
          <div
            style={{
              background: '#fff',
              borderRadius: 12,
              padding: '10px 12px',
              boxShadow: '0 0 0 0.5px rgba(0,85,255,.10), 0 4px 12px rgba(0,85,255,.10)',
              border: '0.5px solid rgba(0,85,255,.07)',
            }}
          >
            <div style={{ fontSize: 6, fontWeight: 500, color: '#5070B0', letterSpacing: '0.15em', textTransform: 'uppercase' as const, marginBottom: 7 }}>
              Lessons
            </div>
            <div style={{ display: 'flex', alignItems: 'center', background: '#F4F7FE', border: '0.5px solid rgba(0,85,255,.07)', borderRadius: 8, overflow: 'hidden' }}>
              <div style={{ width: 30, height: 32, background: 'transparent', color: '#0055FF', fontSize: 14, fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>−</div>
              <div style={{ flex: 1, textAlign: 'center', fontSize: 12, fontWeight: 500, color: '#001040', letterSpacing: '-0.3px' }}>3</div>
              <div style={{ width: 30, height: 32, background: 'transparent', color: '#0055FF', fontSize: 14, fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+</div>
            </div>
          </div>

          {/* Duration */}
          <div
            style={{
              background: '#fff',
              borderRadius: 12,
              padding: '10px 12px',
              boxShadow: '0 0 0 0.5px rgba(0,85,255,.10), 0 4px 12px rgba(0,85,255,.10)',
              border: '0.5px solid rgba(0,85,255,.07)',
            }}
          >
            <div style={{ fontSize: 6, fontWeight: 500, color: '#5070B0', letterSpacing: '0.15em', textTransform: 'uppercase' as const, marginBottom: 7 }}>
              Duration
            </div>
            <div style={{ display: 'flex', alignItems: 'center', background: '#F4F7FE', border: '0.5px solid rgba(0,85,255,.07)', borderRadius: 8, overflow: 'hidden' }}>
              <div style={{ width: 30, height: 32, background: 'transparent', color: '#0055FF', fontSize: 14, fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>−</div>
              <div style={{ flex: 1, textAlign: 'center', fontSize: 12, fontWeight: 500, color: '#001040', letterSpacing: '-0.3px' }}>
                45<span style={{ color: '#5070B0', fontSize: 8, fontWeight: 500, marginLeft: 3 }}>min</span>
              </div>
              <div style={{ width: 30, height: 32, background: 'transparent', color: '#0055FF', fontSize: 14, fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+</div>
            </div>
          </div>

          {/* Include in Plan — full row */}
          <div
            style={{
              gridColumn: '1 / -1',
              background: '#fff',
              borderRadius: 12,
              padding: '10px 12px',
              boxShadow: '0 0 0 0.5px rgba(0,85,255,.10), 0 4px 12px rgba(0,85,255,.10)',
              border: '0.5px solid rgba(0,85,255,.07)',
            }}
          >
            <div style={{ fontSize: 6, fontWeight: 500, color: '#5070B0', letterSpacing: '0.15em', textTransform: 'uppercase' as const, marginBottom: 7, display: 'flex', alignItems: 'center', gap: 4 }}>
              Include in Plan
              <span style={{ color: '#99AACC', fontWeight: 400, letterSpacing: 0, textTransform: 'none' as const, fontSize: 7 }}>(optional)</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
              {[
                { key: 'objectives', emoji: '🎯', label: 'Learning objectives', active: true },
                { key: 'activities', emoji: '📋', label: 'Activities', active: true },
                { key: 'quiz', emoji: '❓', label: 'Quiz questions', active: true },
                { key: 'homework', emoji: '📚', label: 'Homework', active: false },
                { key: 'visual', emoji: '🎨', label: 'Visual aids', active: false },
                { key: 'rubric', emoji: '📊', label: 'Rubric', active: false },
              ].map(p => (
                <div
                  key={p.key}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 4,
                    padding: '4px 10px',
                    borderRadius: 999,
                    background: p.active ? 'rgba(0,85,255,.1)' : '#F4F7FE',
                    color: p.active ? '#0055FF' : '#002080',
                    fontSize: 7,
                    fontWeight: 500,
                    border: p.active ? '0.5px solid rgba(0,85,255,.25)' : '0.5px solid rgba(0,85,255,.07)',
                  }}
                >
                  <span style={{ fontSize: 8 }}>{p.emoji}</span>
                  {p.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action row: Reset + Generate */}
        <div style={{ display: 'flex', gap: 7, alignItems: 'center' }}>
          <div
            style={{
              height: 34,
              padding: '0 14px',
              borderRadius: 9,
              background: '#fff',
              color: '#5070B0',
              border: '0.5px solid rgba(0,85,255,.07)',
              fontSize: 8,
              fontWeight: 500,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 5,
              boxShadow: '0 0.5px 1px rgba(0,85,255,.04), 0 2px 5px rgba(0,85,255,.06)',
            }}
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12a9 9 0 0118 0 9 9 0 01-15 6.7L3 16" />
              <polyline points="3 21 3 16 8 16" />
            </svg>
            Reset form
          </div>
          <div
            style={{
              flex: 1,
              height: 34,
              borderRadius: 10,
              background: 'linear-gradient(135deg, #0044CC 0%, #0055FF 50%, #1166FF 100%)',
              color: '#fff',
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '-0.3px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 7,
              boxShadow: '0 1px 2px rgba(0,26,102,.3), 0 6px 16px rgba(0,85,255,.42), inset 0 0.5px 0 rgba(255,255,255,.2)',
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="#FFDD55" style={{ filter: 'drop-shadow(0 0 4px rgba(255,221,85,.55))' }}>
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6z" />
            </svg>
            Generate Lesson Plan
          </div>
        </div>
      </div>
    </IPadShellWithSidebar>
  );
};

export default TeacherLessonPlannerIPad;
