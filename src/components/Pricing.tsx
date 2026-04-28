import { GraduationCap, Star, Sparkles, Check } from 'lucide-react';
import type { ReactNode } from 'react';

interface Tier {
  name: string;
  icon: ReactNode;
  price: number | string;
  description: string;
  features: string[];
  popular?: boolean;
  cta?: string;
  /** brand color used for icon, accents, CTA */
  brand: string;
  /** soft tinted bg behind icon */
  iconBg: string;
}

const TIERS: Tier[] = [
  {
    name: 'Starter',
    icon: <GraduationCap className="w-5 h-5" />,
    price: 49,
    description: 'Perfect for small schools or single branches.',
    brand: '#FF9500',
    iconBg: '#FFF4E0',
    features: [
      'Up to 200 students',
      'Core management tools',
      'Basic reports',
      'Email support',
    ],
  },
  {
    name: 'Pro',
    icon: <Star className="w-5 h-5" />,
    price: 129,
    description: 'The complete solution for growing institutions.',
    brand: '#0055FF',
    iconBg: '#E5EDFF',
    popular: true,
    features: [
      'Unlimited students',
      'AI risk monitoring',
      'Advanced analytics',
      'Parent-Teacher app',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    icon: <Sparkles className="w-5 h-5" />,
    price: 'Custom',
    description: 'Advanced features for multi-branch networks.',
    brand: '#7B3FF4',
    iconBg: '#F2EBFF',
    cta: 'Talk to sales',
    features: [
      'Multi-branch sync',
      'Custom AI models',
      'Whitelabel app',
      'Dedicated account manager',
    ],
  },
];

const Pricing = () => (
  <section id="pricing" className="py-28 bg-[#fbfbfd] relative overflow-hidden">
    <div className="max-w-[1200px] mx-auto px-6">
      {/* Header */}
      <div className="text-center mb-20">
        <p className="text-[14px] font-normal tracking-[-0.01em] mb-3" style={{ color: '#0055FF' }}>
          Pricing
        </p>
        <h2 className="text-[40px] md:text-[56px] font-light text-[#1d1d1f] leading-[1.05] tracking-[-0.035em] mb-5">
          Plans built for every school.
        </h2>
        <p className="text-[#86868b] text-[19px] font-light max-w-[540px] mx-auto leading-[1.45] tracking-[0.011em]">
          Pick the plan that matches your vision — switch anytime.
        </p>
      </div>

      {/* 3 iPhone mockups */}
      <div className="flex flex-col md:flex-row items-center md:items-end justify-center gap-8 md:gap-6 lg:gap-10">
        {TIERS.map(tier => (
          <PhonePricingCard key={tier.name} tier={tier} />
        ))}
      </div>
    </div>
  </section>
);

const PhonePricingCard = ({ tier }: { tier: Tier }) => {
  const popular = !!tier.popular;
  return (
    <div className="relative" style={{ width: popular ? 286 : 268 }}>
      {/* Popular badge above phone */}
      {popular && (
        <div className="flex justify-center mb-3">
          <div
            className="text-[11px] font-medium tracking-[0.18em] uppercase px-3 py-1.5 rounded-full text-white"
            style={{ background: 'linear-gradient(135deg, #FFAA00, #FF8800)', boxShadow: '0 6px 18px rgba(255,136,0,0.35)' }}
          >
            Most Popular
          </div>
        </div>
      )}

      {/* iPhone bezel */}
      <div
        style={{
          background: '#1c1c1e',
          borderRadius: 42,
          padding: 9,
          boxShadow: popular
            ? '0 0 0 1.5px rgba(0,85,255,0.30), 0 30px 70px rgba(0,85,255,0.18), 0 60px 120px rgba(15,23,42,0.18)'
            : '0 0 0 1.5px #2c2c2e, 0 24px 56px rgba(15,23,42,0.18), 0 48px 100px rgba(15,23,42,0.14)',
          transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          position: 'relative',
        }}
        className="hover:-translate-y-2"
      >
        {/* Screen */}
        <div
          style={{
            background: '#fff',
            borderRadius: 34,
            overflow: 'hidden',
            position: 'relative',
            aspectRatio: '0.49 / 1',
            display: 'flex',
            flexDirection: 'column',
            fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif",
          }}
        >
          {/* Dynamic Island */}
          <div
            style={{
              position: 'absolute',
              top: 9,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 88,
              height: 24,
              borderRadius: 999,
              background: '#08090c',
              zIndex: 10,
            }}
          />
          {/* Status bar */}
          <div style={{ height: 38, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 22px', flexShrink: 0 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: '#1d1d1f', letterSpacing: '-0.01em' }}>9:41</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#1d1d1f' }}>
              {/* signal */}
              <svg width="14" height="9" viewBox="0 0 18 12"><rect x="0" y="8" width="3" height="4" rx="0.5" fill="currentColor" /><rect x="5" y="5" width="3" height="7" rx="0.5" fill="currentColor" /><rect x="10" y="2" width="3" height="10" rx="0.5" fill="currentColor" /><rect x="15" y="0" width="3" height="12" rx="0.5" fill="currentColor" /></svg>
              {/* wifi */}
              <svg width="13" height="9" viewBox="0 0 18 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M1 4a13 13 0 0116 0" /><path d="M4 7a8 8 0 0110 0" /><circle cx="9" cy="10.5" r="1" fill="currentColor" stroke="none" /></svg>
              {/* battery */}
              <svg width="22" height="10" viewBox="0 0 26 12" fill="none"><rect x="0.5" y="0.5" width="22" height="11" rx="2.5" stroke="currentColor" strokeOpacity="0.5" /><rect x="2" y="2" width="19" height="8" rx="1.5" fill="currentColor" /><rect x="23.5" y="4" width="2" height="4" rx="1" fill="currentColor" opacity="0.5" /></svg>
            </div>
          </div>

          {/* Content */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '14px 22px 22px', minHeight: 0 }}>
            {/* App header — icon + tier name */}
            <div style={{ marginTop: 6, marginBottom: 18 }}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: tier.iconBg,
                  color: tier.brand,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 14,
                  boxShadow: `0 6px 18px ${tier.brand}1f`,
                }}
              >
                {tier.icon}
              </div>
              <div style={{ fontSize: 11, fontWeight: 500, color: tier.brand, letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 4 }}>
                {tier.name} plan
              </div>
              <p style={{ fontSize: 13, fontWeight: 400, color: '#86868b', lineHeight: 1.45, margin: 0, letterSpacing: '0.005em' }}>
                {tier.description}
              </p>
            </div>

            {/* Price */}
            <div style={{ marginBottom: 22, display: 'flex', alignItems: 'baseline', gap: 4 }}>
              {typeof tier.price === 'number' ? (
                <>
                  <span style={{ fontSize: 18, fontWeight: 400, color: '#1d1d1f', letterSpacing: '-0.02em', alignSelf: 'flex-start', marginTop: 8 }}>$</span>
                  <span style={{ fontSize: 52, fontWeight: 300, color: '#1d1d1f', letterSpacing: '-0.04em', lineHeight: 1 }}>{tier.price}</span>
                  <span style={{ fontSize: 14, fontWeight: 400, color: '#86868b', marginLeft: 4 }}>/mo</span>
                </>
              ) : (
                <span style={{ fontSize: 40, fontWeight: 300, color: '#1d1d1f', letterSpacing: '-0.03em', lineHeight: 1 }}>{tier.price}</span>
              )}
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: '#f0f0f2', marginBottom: 18 }} />

            {/* Features */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {tier.features.map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <div
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: '50%',
                      background: tier.iconBg,
                      color: tier.brand,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: 1,
                    }}
                  >
                    <Check className="w-2.5 h-2.5" strokeWidth={3} />
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 400, color: '#1d1d1f', lineHeight: 1.4, letterSpacing: '-0.005em' }}>
                    {f}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              style={{
                marginTop: 22,
                width: '100%',
                height: 46,
                borderRadius: 14,
                border: 'none',
                background: popular
                  ? `linear-gradient(135deg, ${tier.brand}, #1166FF)`
                  : '#1d1d1f',
                color: '#fff',
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: '-0.005em',
                cursor: 'pointer',
                boxShadow: popular
                  ? `0 8px 22px ${tier.brand}40`
                  : '0 6px 16px rgba(29,29,31,0.18)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              className="hover:-translate-y-0.5"
            >
              {tier.cta ?? 'Get Started'}
            </button>

            {/* Home indicator */}
            <div
              style={{
                margin: '14px auto -6px',
                width: 110,
                height: 4,
                borderRadius: 2,
                background: '#1d1d1f',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
