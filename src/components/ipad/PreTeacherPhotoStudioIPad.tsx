/**
 * Static iPad mockup — Pre-Primary Teacher · Photo Studio.
 * Face-detected photos with per-child consent matrix — the differentiator
 * that lets a school post a class photo without breaking a single
 * parent's consent setting.
 */

import PrePrimaryTeacherIPadShell from './PrePrimaryTeacherIPadShell';

const PreTeacherPhotoStudioIPad = () => {
  const NAVY = '#1e3272';
  const PEACH = '#FB923C';
  const MINT = '#10B981';
  const SKY = '#0EA5E9';
  const BLUSH = '#EC4899';
  const RED = '#EF4444';
  const T1 = '#0F172A';
  const T3 = '#64748B';

  const photos = [
    { title: 'Circle Time',  faces: 7, ok: 7, mask: 0, ban: 0, gradient: 'linear-gradient(135deg, #FFE4F0, #DBEAFE)', emoji: '🎵' },
    { title: 'Snack Hour',   faces: 5, ok: 4, mask: 1, ban: 0, gradient: 'linear-gradient(135deg, #FFF4D0, #FFE0B2)', emoji: '🍪' },
    { title: 'Art Corner',   faces: 6, ok: 5, mask: 0, ban: 1, gradient: 'linear-gradient(135deg, #E0F2FE, #BAE6FD)', emoji: '🎨' },
    { title: 'Garden Walk',  faces: 8, ok: 6, mask: 2, ban: 0, gradient: 'linear-gradient(135deg, #DCFCE7, #BBF7D0)', emoji: '🌿' },
  ];

  return (
    <PrePrimaryTeacherIPadShell activePath="/photos">
      <div style={{ background: '#FCF6FF', flex: 1, overflowY: 'auto', minHeight: 0, padding: '10px 12px 12px', fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif" }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 9 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 3 }}>
              <span style={{ width: 4, height: 4, borderRadius: 1, background: BLUSH }} />
              <span style={{ fontSize: 6, fontWeight: 700, color: BLUSH, letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>Faces with permission</span>
            </div>
            <h1 style={{ fontSize: 21, fontWeight: 800, color: T1, letterSpacing: '-0.6px', lineHeight: 1.05, margin: 0 }}>Photo Studio</h1>
            <div style={{ fontSize: 8, fontWeight: 500, color: T3, marginTop: 3 }}>AI face-detect + per-child consent — face-mask or auto-exclude in one tap.</div>
          </div>
          <div style={{ display: 'flex', gap: 4 }}>
            {[
              { v: '24', l: 'Photos · today', c: NAVY },
              { v: '92%',l: 'Consent ok',     c: MINT },
              { v: '3',  l: 'Need review',    c: PEACH },
            ].map(s => (
              <div key={s.l} style={{ padding: '5px 8px', background: '#fff', borderRadius: 9, boxShadow: '0 2px 6px rgba(15,23,42,0.05)', minWidth: 42, textAlign: 'center' }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: s.c, letterSpacing: '-0.3px' }}>{s.v}</div>
                <div style={{ fontSize: 5.5, fontWeight: 700, color: T3, letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginTop: 1 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Consent legend */}
        <div style={{ background: '#fff', borderRadius: 11, padding: '7px 11px', marginBottom: 9, boxShadow: '0 3px 10px rgba(15,23,42,0.05)', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 6.5, color: T3, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase' as const }}>Consent state</span>
          {[
            { l: 'Cleared · publish ok', c: MINT, e: '✓' },
            { l: 'Face mask · auto-blur', c: PEACH, e: '⊘' },
            { l: 'No photo · auto-exclude', c: RED, e: '✕' },
            { l: 'Pending parent confirm', c: SKY, e: '⏱' },
          ].map(s => (
            <div key={s.l} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ width: 12, height: 12, borderRadius: '50%', background: `${s.c}1a`, color: s.c, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 7, fontWeight: 800 }}>{s.e}</span>
              <span style={{ fontSize: 6.5, color: T1, fontWeight: 700, letterSpacing: '-0.1px' }}>{s.l}</span>
            </div>
          ))}
        </div>

        {/* Photo grid 2x2 with detected faces */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7, marginBottom: 9 }}>
          {photos.map(p => (
            <div key={p.title} style={{
              background: '#fff', borderRadius: 12, padding: 7,
              boxShadow: '0 4px 14px rgba(15,23,42,0.07)',
            }}>
              <div style={{
                position: 'relative', height: 90, borderRadius: 8, overflow: 'hidden',
                background: p.gradient,
              }}>
                <div aria-hidden style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 38, opacity: 0.32 }}>{p.emoji}</div>

                {/* Mocked face detection rectangles */}
                {[
                  { t: 8,  l: 14, w: 18, c: MINT,  label: 'Aarav' },
                  { t: 10, l: 42, w: 17, c: MINT,  label: 'Mira' },
                  { t: 12, l: 70, w: 18, c: PEACH, label: 'Ishaan' },
                  { t: 50, l: 24, w: 16, c: MINT,  label: 'Tara' },
                  { t: 52, l: 56, w: 17, c: p.ban > 0 ? RED : MINT, label: p.ban > 0 ? 'Krish' : 'Rohan' },
                ].slice(0, p.faces > 4 ? 5 : 4).map((f, i) => (
                  <div key={i} style={{
                    position: 'absolute', top: `${f.t}%`, left: `${f.l}%`,
                    width: `${f.w}%`, aspectRatio: '1 / 1.1',
                    border: `1px solid ${f.c}`,
                    borderRadius: 4,
                    boxShadow: `0 0 0 0.5px ${f.c}55`,
                  }}>
                    <div style={{
                      position: 'absolute', top: -8, left: 0, fontSize: 4.5, fontWeight: 800,
                      color: '#fff', background: f.c, padding: '0.5px 3px', borderRadius: 2,
                      letterSpacing: '0.04em',
                    }}>{f.label}</div>
                  </div>
                ))}

                <div style={{
                  position: 'absolute', bottom: 4, right: 4,
                  fontSize: 5.5, fontWeight: 800, color: '#fff',
                  background: 'rgba(15,23,42,0.55)', padding: '1.5px 5px',
                  borderRadius: 999, letterSpacing: '0.08em',
                  display: 'flex', alignItems: 'center', gap: 3,
                  backdropFilter: 'blur(4px)',
                }}>
                  <span style={{ width: 4, height: 4, borderRadius: '50%', background: MINT, boxShadow: `0 0 4px ${MINT}` }} />
                  {p.faces} faces · AI detected
                </div>
              </div>

              <div style={{ padding: '6px 4px 2px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: 8.5, fontWeight: 700, color: T1, letterSpacing: '-0.15px' }}>{p.title}</span>
                  <span style={{ fontSize: 5.5, color: T3, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' as const }}>10:14 AM</span>
                </div>
                <div style={{ display: 'flex', gap: 3 }}>
                  <span style={{ fontSize: 5.5, fontWeight: 700, color: MINT, background: `${MINT}14`, padding: '1.5px 5px', borderRadius: 999 }}>✓ {p.ok} cleared</span>
                  {p.mask > 0 && <span style={{ fontSize: 5.5, fontWeight: 700, color: PEACH, background: `${PEACH}14`, padding: '1.5px 5px', borderRadius: 999 }}>⊘ {p.mask} masked</span>}
                  {p.ban > 0 && <span style={{ fontSize: 5.5, fontWeight: 700, color: RED, background: `${RED}14`, padding: '1.5px 5px', borderRadius: 999 }}>✕ {p.ban} excluded</span>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Consent matrix slice */}
        <div style={{ background: '#fff', borderRadius: 12, padding: '9px 11px', boxShadow: '0 3px 10px rgba(15,23,42,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 6 }}>
            <span style={{ fontSize: 9, fontWeight: 800, color: T1, letterSpacing: '-0.15px' }}>Consent matrix · Bumblebee class</span>
            <span style={{ fontSize: 5.5, color: T3, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const }}>parent-owned · always editable</span>
          </div>

          <div style={{ display: 'flex', gap: 4 }}>
            {[
              { name: 'Aarav S.',   inApp: MINT, social: MINT, group: MINT, brochure: PEACH },
              { name: 'Mira P.',    inApp: MINT, social: MINT, group: MINT, brochure: MINT },
              { name: 'Ishaan K.',  inApp: MINT, social: PEACH,group: MINT, brochure: RED },
              { name: 'Krish A.',   inApp: RED,  social: RED,  group: RED,  brochure: RED },
              { name: 'Diya N.',    inApp: MINT, social: MINT, group: PEACH,brochure: PEACH },
              { name: 'Vivaan M.',  inApp: MINT, social: MINT, group: MINT, brochure: MINT },
            ].map(p => (
              <div key={p.name} style={{
                flex: 1, padding: '6px 5px', borderRadius: 8,
                background: '#F8FAFC', textAlign: 'center',
                border: '0.5px solid #E2E8F0',
              }}>
                <div style={{ fontSize: 6, fontWeight: 700, color: T1, letterSpacing: '-0.1px', marginBottom: 4 }}>{p.name}</div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                  {[p.inApp, p.social, p.group, p.brochure].map((c, i) => (
                    <span key={i} title={['App', 'Social', 'Group', 'Brochure'][i]} style={{
                      width: 8, height: 8, borderRadius: 2,
                      background: c, boxShadow: `0 1px 2px ${c}55`,
                    }} />
                  ))}
                </div>
                <div style={{ fontSize: 4.5, color: T3, fontWeight: 700, letterSpacing: '0.06em', marginTop: 3 }}>APP · SOC · GRP · BRO</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PrePrimaryTeacherIPadShell>
  );
};

export default PreTeacherPhotoStudioIPad;
