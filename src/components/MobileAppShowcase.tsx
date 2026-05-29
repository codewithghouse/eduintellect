import { motion } from 'framer-motion';
import type { CSSProperties, ComponentType } from 'react';
import { Sparkles, Zap, ShieldCheck, Bell } from 'lucide-react';
import IPhoneMockup from './IPhoneMockup';

/** Google Play logo — 4 gradient facets for the official glossy look. */
const GooglePlayMark = ({ size = 26 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
    <defs>
      <linearGradient id="gpGreen" x1="3" y1="3" x2="12.5" y2="12" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#00EF8B" />
        <stop offset="1" stopColor="#00C75F" />
      </linearGradient>
      <linearGradient id="gpYellow" x1="7" y1="7" x2="21.5" y2="12" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#FFD500" />
        <stop offset="1" stopColor="#FFA600" />
      </linearGradient>
      <linearGradient id="gpBlue" x1="3" y1="12" x2="12.5" y2="21" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#00DBFF" />
        <stop offset="1" stopColor="#009FFF" />
      </linearGradient>
      <linearGradient id="gpRed" x1="9" y1="13" x2="21.5" y2="12" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#FF5066" />
        <stop offset="1" stopColor="#FB1C36" />
      </linearGradient>
    </defs>
    <polygon points="3,2.6 3,12 12.5,7.3" fill="url(#gpGreen)" />
    <polygon points="3,12 12.5,7.3 21.5,12" fill="url(#gpYellow)" />
    <polygon points="3,12 3,21.4 12.5,16.7" fill="url(#gpBlue)" />
    <polygon points="3,12 12.5,16.7 21.5,12" fill="url(#gpRed)" />
  </svg>
);

const phones = [
  {
    src: '/dashboards/playstore-1.png',
    alt: 'Edullent Owner app on Google Play — Early Access',
    caption: 'Live in early access',
    rotate: -4,
  },
  {
    src: '/dashboards/playstore-2.png',
    alt: 'Search “Edullent” on the Google Play Store',
    caption: 'Just search “Edullent”',
    rotate: 4,
  },
];

interface Callout {
  text: string;
  Icon: ComponentType<{ size?: number; strokeWidth?: number; style?: CSSProperties }>;
  color: string;
  pos: CSSProperties;
}

const callouts: Callout[] = [
  { text: 'AI-powered insights', Icon: Sparkles, color: '#1e3272', pos: { top: '5%', left: '-2%' } },
  { text: 'Real-time, every update', Icon: Zap, color: '#0055FF', pos: { top: '13%', right: '-3%' } },
  { text: 'Private & secure', Icon: ShieldCheck, color: '#059669', pos: { bottom: '16%', left: '-1%' } },
  { text: 'Instant parent alerts', Icon: Bell, color: '#d97706', pos: { bottom: '8%', right: '0%' } },
];

const MobileAppShowcase = () => (
  <section className="py-20 md:py-28 bg-[#fbfbfd] overflow-hidden">
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="text-center mb-14 md:mb-20">
        <p className="text-[14px] font-normal tracking-[0.08em] mb-3 text-[#0071e3] uppercase">
          Now in early access
        </p>
        <h2 className="text-[36px] md:text-[52px] font-light text-[#1d1d1f] leading-[1.05] tracking-[-0.035em] mb-4">
          Soon in your pocket.
        </h2>
        <p className="text-[#86868b] text-[18px] md:text-[19px] font-light max-w-[640px] mx-auto leading-[1.45]">
          The Edullent dashboards are rolling out on Google Play. Early access is live
          now — the full launch is just around the corner.
        </p>
      </div>

      {/* Phones + glow + anchored callouts */}
      <div className="relative mx-auto max-w-[760px]">
        {/* Soft spotlight glow behind the phones */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 z-0"
          style={{
            height: '120%',
            background:
              'radial-gradient(46% 42% at 50% 46%, rgba(0,85,255,0.14), rgba(30,50,114,0.07) 48%, rgba(251,251,253,0) 72%)',
            filter: 'blur(8px)',
          }}
        />

        {/* Anchored keynote callouts (desktop only) */}
        {callouts.map((c, i) => {
          const Icon = c.Icon;
          return (
            <motion.div
              key={c.text}
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-15% 0px' }}
              transition={{ delay: 0.35 + i * 0.16, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: 'absolute', ...c.pos, zIndex: 30, pointerEvents: 'none' }}
              className="hidden md:flex items-center gap-2 px-3.5 py-2 rounded-full bg-white shadow-[0_8px_24px_rgba(15,23,42,0.10),0_0_0_0.5px_rgba(15,23,42,0.06)]"
            >
              <span aria-hidden className="w-1.5 h-1.5 rounded-full" style={{ background: c.color }} />
              <Icon size={13} strokeWidth={2.2} style={{ color: c.color }} />
              <span className="text-[12px] font-medium tracking-[-0.005em] whitespace-nowrap text-[#1d1d1f]">
                {c.text}
              </span>
            </motion.div>
          );
        })}

        {/* Two phones */}
        <div className="relative z-10 flex flex-col items-center gap-12 sm:flex-row sm:items-center sm:justify-center sm:gap-8 md:gap-14">
          {phones.map(({ src, alt, caption, rotate }, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 48, rotate: rotate * 0.5, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, rotate, scale: 1 }}
              viewport={{ once: true, margin: '-12% 0px' }}
              transition={{ duration: 0.9, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <IPhoneMockup src={src} alt={alt} className="w-[250px] md:w-[300px]" />
              <span className="mt-6 text-[13.5px] font-medium text-[#6e6e73] tracking-[-0.01em]">
                {caption}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Value props — desktop floats these as callouts; mobile gets a compact grid. */}
      <div className="mt-12 grid grid-cols-2 gap-2.5 max-w-[420px] mx-auto md:hidden">
        {callouts.map((c) => {
          const Icon = c.Icon;
          return (
            <div
              key={c.text}
              className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-2xl bg-white shadow-[0_4px_14px_rgba(15,23,42,0.06),0_0_0_0.5px_rgba(15,23,42,0.05)]"
            >
              <Icon size={14} strokeWidth={2.2} style={{ color: c.color }} />
              <span className="text-[12px] font-medium leading-tight tracking-[-0.005em] text-center text-[#1d1d1f]">
                {c.text}
              </span>
            </div>
          );
        })}
      </div>

      {/* Coming-soon Google Play badge */}
      <div className="mt-12 md:mt-16 flex flex-col items-center gap-3">
        <div
          className="inline-flex items-center gap-3 rounded-[14px] bg-[#1d1d1f] px-5 py-2.5 select-none"
          style={{ boxShadow: '0 10px 30px -12px rgba(0,0,0,0.45)' }}
          aria-label="Coming soon on Google Play"
        >
          <GooglePlayMark size={27} />
          <span className="flex flex-col leading-none text-left">
            <span className="text-[9.5px] font-medium tracking-[0.14em] text-white/70 uppercase">
              Coming soon on
            </span>
            <span className="text-[19px] font-semibold tracking-[-0.01em] text-white mt-0.5">
              Google Play
            </span>
          </span>
        </div>
        <p className="text-[12.5px] text-[#a1a1a6]">
          Public launch coming soon · iOS to follow
        </p>
      </div>
    </div>
  </section>
);

export default MobileAppShowcase;
