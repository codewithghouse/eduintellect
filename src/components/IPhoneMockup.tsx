/**
 * Apple-style iPhone frame that wraps a portrait screenshot.
 *
 * Pairs with `IPadBezel` (the Mac-window frame) — same design language,
 * but a phone chassis: black-titanium edge, thin uniform bezel, rounded
 * screen, Dynamic Island, and side buttons. All sizing is in percentages
 * so the device scales cleanly to whatever width the container gives it;
 * the height follows from a fixed device aspect ratio.
 *
 * The screenshots we drop in are dark (Play Store dark theme), so the
 * black Dynamic Island sits invisibly over their status-bar strip.
 */

interface IPhoneMockupProps {
  src: string;
  alt: string;
  /** Tailwind width/spacing classes for the outer wrapper. */
  className?: string;
}

const IPhoneMockup = ({ src, alt, className = '' }: IPhoneMockupProps) => (
  <div
    className={className}
    style={{ position: 'relative', aspectRatio: '1 / 2.03' }}
  >
    {/* ── Side buttons (sit just under the titanium edge) ── */}
    {/* Left: ringer + volume up + volume down */}
    <span style={{ position: 'absolute', left: '-1.1%', top: '17.5%', width: '1.6%', height: '3.4%', borderRadius: '2px', background: 'linear-gradient(90deg,#0e0e10,#3a3a3c)' }} />
    <span style={{ position: 'absolute', left: '-1.4%', top: '23%', width: '1.8%', height: '7%', borderRadius: '3px', background: 'linear-gradient(90deg,#0e0e10,#3a3a3c)' }} />
    <span style={{ position: 'absolute', left: '-1.4%', top: '32%', width: '1.8%', height: '7%', borderRadius: '3px', background: 'linear-gradient(90deg,#0e0e10,#3a3a3c)' }} />
    {/* Right: power / side button */}
    <span style={{ position: 'absolute', right: '-1.4%', top: '26%', width: '1.8%', height: '10%', borderRadius: '3px', background: 'linear-gradient(270deg,#0e0e10,#3a3a3c)' }} />

    {/* ── Titanium chassis ── */}
    <div
      style={{
        position: 'absolute',
        inset: 0,
        borderRadius: '13.5% / 6.6%',
        background:
          'linear-gradient(145deg,#4d4d50 0%,#1c1c1e 16%,#2c2c2e 48%,#161618 82%,#3d3d40 100%)',
        padding: '2.5%',
        boxShadow:
          '0 0 0 0.5px rgba(0,0,0,0.35), 0 30px 60px -20px rgba(15,23,42,0.45), 0 60px 120px -40px rgba(15,23,42,0.30), inset 0 0 0 0.5px rgba(255,255,255,0.12)',
      }}
    >
      {/* Inner black bezel */}
      <div
        style={{
          height: '100%',
          width: '100%',
          borderRadius: '11.4% / 5.7%',
          background: '#000',
          padding: '1.5%',
        }}
      >
        {/* Screen */}
        <div
          style={{
            position: 'relative',
            height: '100%',
            width: '100%',
            overflow: 'hidden',
            borderRadius: '10% / 4.9%',
            background: '#000',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Black status zone — holds the Dynamic Island and keeps the
              screenshot's top content clear of the island / rounded corners. */}
          <div
            style={{
              flexShrink: 0,
              height: '6.2%',
              position: 'relative',
              background: '#000',
            }}
          >
            <div
              aria-hidden
              style={{
                position: 'absolute',
                top: '32%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '34%',
                height: '46%',
                minHeight: 16,
                borderRadius: '999px',
                background: '#000',
                boxShadow: 'inset 0 0 0 0.5px rgba(255,255,255,0.06)',
              }}
            />
          </div>

          {/* Screenshot fully contained — nothing cropped top or bottom.
              The thin black side margins blend with the dark screenshots. */}
          <div style={{ flex: 1, position: 'relative', overflow: 'hidden', minHeight: 0 }}>
            <img
              src={src}
              alt={alt}
              loading="lazy"
              draggable={false}
              style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', display: 'block' }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default IPhoneMockup;
