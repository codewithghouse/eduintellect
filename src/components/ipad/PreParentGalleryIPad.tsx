/**
 * Static iPad mockup — Pre-Primary Parent · Gallery.
 * Only photos the parent has consented to — face-mask + auto-exclude
 * filtered server-side. Album grouping by slot/day with a "your consent
 * settings shaped this view" reassurance band.
 */

import PrePrimaryParentIPadShell from './PrePrimaryParentIPadShell';

const PreParentGalleryIPad = () => {
  const NAVY = '#1e3272';
  const PEACH = '#FB923C';
  const MINT = '#10B981';
  const BLUSH = '#EC4899';
  const LAV = '#A78BFA';
  const BUTTER = '#F59E0B';
  const T1 = '#0F172A';
  const T3 = '#64748B';

  const albums = [
    { title: 'Today · Art Corner',  count: 6, c: BLUSH,  e: '🎨', g: 'linear-gradient(135deg, #FCE7F3, #DBEAFE)' },
    { title: 'Today · Garden Walk', count: 4, c: MINT,   e: '🌿', g: 'linear-gradient(135deg, #DCFCE7, #BBF7D0)' },
    { title: 'Yesterday · Music',   count: 8, c: LAV,    e: '🎵', g: 'linear-gradient(135deg, #EDE9FE, #FCE7F3)' },
    { title: 'Mon · Sports Day',    count: 14,c: PEACH,  e: '🏃', g: 'linear-gradient(135deg, #FFE0B2, #FFE4F0)' },
  ];

  return (
    <PrePrimaryParentIPadShell activePath="/gallery">
      <div style={{ background: '#EEF4FF', flex: 1, overflowY: 'auto', minHeight: 0, padding: '10px 12px 12px', fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif" }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 9 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 3 }}>
              <span style={{ width: 4, height: 4, borderRadius: 1, background: BLUSH }} />
              <span style={{ fontSize: 6, fontWeight: 700, color: BLUSH, letterSpacing: '0.18em', textTransform: 'uppercase' as const }}>Your consent shapes this view</span>
            </div>
            <h1 style={{ fontSize: 20, fontWeight: 800, color: T1, letterSpacing: '-0.5px', lineHeight: 1.05, margin: 0 }}>Mira&apos;s gallery</h1>
            <div style={{ fontSize: 7.5, color: T3, fontWeight: 500, marginTop: 2 }}>32 photos · last 14 days · zero overshare</div>
          </div>
          <div style={{ display: 'flex', gap: 4 }}>
            {[
              { l: 'All',       c: BLUSH, active: true },
              { l: 'Cleared',   c: MINT,  active: false },
              { l: 'Masked',    c: PEACH, active: false },
            ].map(f => (
              <span key={f.l} style={{
                fontSize: 6.5, fontWeight: 800, padding: '4px 9px', borderRadius: 999,
                background: f.active ? f.c : '#fff',
                color: f.active ? '#fff' : f.c,
                boxShadow: f.active ? `0 3px 8px ${f.c}55` : '0 1px 3px rgba(15,23,42,0.06)',
                letterSpacing: '0.04em',
              }}>{f.l}</span>
            ))}
          </div>
        </div>

        {/* Consent reassurance band */}
        <div style={{
          background: 'linear-gradient(135deg, #DCFCE7 0%, #DBEAFE 100%)',
          borderRadius: 11, padding: '7px 11px', marginBottom: 9,
          display: 'flex', alignItems: 'center', gap: 9,
          border: '0.5px solid #BBF7D0',
        }}>
          <div style={{
            width: 24, height: 24, borderRadius: '50%',
            background: '#fff', color: MINT,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: `0 2px 5px ${MINT}33`,
          }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 8, fontWeight: 800, color: NAVY, letterSpacing: '-0.15px' }}>You said yes to in-app + group share · no to social</div>
            <div style={{ fontSize: 6, color: T3, fontWeight: 600, marginTop: 1 }}>3 photos hidden because group-mate consent was off · the school never posted them.</div>
          </div>
          <span style={{ fontSize: 5.5, fontWeight: 800, color: '#fff', background: NAVY, padding: '3px 8px', borderRadius: 999, letterSpacing: '0.06em' }}>Edit consent →</span>
        </div>

        {/* Album grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6, marginBottom: 9 }}>
          {albums.map(a => (
            <div key={a.title} style={{
              background: '#fff', borderRadius: 12, padding: 6,
              boxShadow: '0 3px 10px rgba(15,23,42,0.05)',
            }}>
              <div style={{
                height: 60, borderRadius: 8, background: a.g,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 28, opacity: 0.86,
                position: 'relative', overflow: 'hidden',
              }}>
                <span>{a.e}</span>
                <span style={{
                  position: 'absolute', bottom: 3, right: 3,
                  fontSize: 5, fontWeight: 800, color: '#fff', letterSpacing: '0.08em',
                  background: 'rgba(15,23,42,0.55)', padding: '1.5px 5px', borderRadius: 999,
                  backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)',
                }}>{a.count} pics</span>
              </div>
              <div style={{ padding: '5px 4px 2px' }}>
                <div style={{ fontSize: 7, fontWeight: 800, color: T1, letterSpacing: '-0.1px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{a.title}</div>
                <div style={{ fontSize: 5.5, color: a.c, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' as const, marginTop: 1 }}>✓ All cleared</div>
              </div>
            </div>
          ))}
        </div>

        {/* Single photo with detail card */}
        <div style={{ background: '#fff', borderRadius: 14, padding: 9, boxShadow: '0 4px 14px rgba(15,23,42,0.07)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 9 }}>
            <div style={{
              borderRadius: 10, background: 'linear-gradient(135deg, #FCE7F3, #DBEAFE)',
              height: 110, display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative', overflow: 'hidden',
            }}>
              <span style={{ fontSize: 56, opacity: 0.7 }}>🎨</span>
              {[
                { t: 28, l: 28, c: MINT,  n: 'Mira' },
                { t: 30, l: 56, c: MINT,  n: 'Aarav' },
                { t: 62, l: 38, c: PEACH, n: 'Tara' },
              ].map((f, i) => (
                <div key={i} style={{
                  position: 'absolute', top: `${f.t}%`, left: `${f.l}%`,
                  width: '20%', aspectRatio: '1 / 1.15',
                  border: `1.5px solid ${f.c}`, borderRadius: 5,
                  boxShadow: `0 0 0 0.5px ${f.c}55`,
                }}>
                  <div style={{
                    position: 'absolute', top: -10, left: 0, fontSize: 5, fontWeight: 800,
                    color: '#fff', background: f.c, padding: '1px 4px', borderRadius: 3,
                    letterSpacing: '0.04em',
                  }}>{f.n}</div>
                </div>
              ))}
              <span style={{
                position: 'absolute', bottom: 5, right: 5, fontSize: 5.5, fontWeight: 800,
                color: '#fff', background: 'rgba(15,23,42,0.55)', padding: '2px 6px', borderRadius: 999,
                letterSpacing: '0.08em', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)',
              }}>10:14 AM · 3 faces · cleared</span>
            </div>

            <div>
              <div style={{ fontSize: 6, fontWeight: 800, color: BLUSH, letterSpacing: '0.16em', textTransform: 'uppercase' as const, marginBottom: 3 }}>Art corner · today</div>
              <div style={{ fontSize: 10, fontWeight: 800, color: T1, letterSpacing: '-0.2px', marginBottom: 5 }}>Mira&apos;s rainbow sort</div>
              <div style={{ fontSize: 7, color: T3, fontWeight: 500, lineHeight: 1.5, marginBottom: 7 }}>
                Posted by Priya · auto-shared because all 3 children in the frame have in-app consent on.
              </div>

              <div style={{ fontSize: 5.5, color: T3, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase' as const, marginBottom: 4 }}>This photo · consent matrix</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {[
                  { l: 'App',       v: 'Yes',  c: MINT },
                  { l: 'Group share', v: 'Yes', c: MINT },
                  { l: 'Social',    v: 'Off',  c: PEACH },
                  { l: 'Brochure',  v: 'Off',  c: PEACH },
                ].map(r => (
                  <div key={r.l} style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '3px 7px', borderRadius: 6,
                    background: '#F8FAFC',
                  }}>
                    <span style={{ fontSize: 6.5, color: T3, fontWeight: 700, letterSpacing: '0.06em' }}>{r.l}</span>
                    <span style={{ fontSize: 6, fontWeight: 800, color: r.c, background: `${r.c}14`, padding: '1.5px 5px', borderRadius: 999, letterSpacing: '0.06em' }}>{r.v}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: 4, marginTop: 7 }}>
                <span style={{ flex: 1, textAlign: 'center', fontSize: 6.5, fontWeight: 800, color: '#fff', background: NAVY, padding: '4px 6px', borderRadius: 7, letterSpacing: '0.04em' }}>Download</span>
                <span style={{ flex: 1, textAlign: 'center', fontSize: 6.5, fontWeight: 800, color: NAVY, background: '#F8FAFC', padding: '4px 6px', borderRadius: 7, border: `0.5px solid ${NAVY}22`, letterSpacing: '0.04em' }}>Share</span>
                <span style={{ flex: 1, textAlign: 'center', fontSize: 6.5, fontWeight: 800, color: '#fff', background: BUTTER, padding: '4px 6px', borderRadius: 7, letterSpacing: '0.04em' }}>♥ Favourite</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </PrePrimaryParentIPadShell>
  );
};

export default PreParentGalleryIPad;
