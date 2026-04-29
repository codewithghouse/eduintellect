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
  brand: string;
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
  <section id="pricing" className="py-24 md:py-28 bg-[#fbfbfd] relative overflow-hidden">
    <div className="max-w-[1200px] mx-auto px-6">
      {/* Header */}
      <div className="text-center mb-16">
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

      {/* 3 cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-[1100px] mx-auto">
        {TIERS.map(tier => (
          <PricingCard key={tier.name} tier={tier} />
        ))}
      </div>
    </div>
  </section>
);

const PricingCard = ({ tier }: { tier: Tier }) => {
  const popular = !!tier.popular;
  return (
    <div className="relative">
      {/* Popular badge */}
      {popular && (
        <div className="absolute left-1/2 -translate-x-1/2 -top-3 z-10">
          <div
            className="text-[11px] font-medium tracking-[0.18em] uppercase px-3 py-1.5 rounded-full text-white whitespace-nowrap"
            style={{ background: 'linear-gradient(135deg, #FFAA00, #FF8800)', boxShadow: '0 6px 18px rgba(255,136,0,0.35)' }}
          >
            Most Popular
          </div>
        </div>
      )}

      <div
        className="h-full bg-white rounded-[20px] p-7 md:p-8 transition-all duration-500 hover:-translate-y-1"
        style={{
          border: popular ? `1.5px solid ${tier.brand}` : '0.5px solid rgba(0,0,0,0.08)',
          boxShadow: popular
            ? '0 30px 60px -20px rgba(0,85,255,0.20), 0 12px 24px -10px rgba(0,85,255,0.10)'
            : '0 1px 2px rgba(0,0,0,0.02), 0 12px 28px -10px rgba(0,0,0,0.06)',
        }}
      >
        {/* Header */}
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 14,
            background: tier.iconBg,
            color: tier.brand,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 16,
            boxShadow: `0 6px 16px ${tier.brand}1f`,
          }}
        >
          {tier.icon}
        </div>

        <p className="text-[12px] font-medium tracking-[0.16em] uppercase mb-1.5" style={{ color: tier.brand }}>
          {tier.name} plan
        </p>
        <p className="text-[14px] font-normal text-[#86868b] leading-[1.45] tracking-[0.005em] mb-6 min-h-[40px]">
          {tier.description}
        </p>

        {/* Price */}
        <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-[#f0f0f2]">
          {typeof tier.price === 'number' ? (
            <>
              <span className="text-[20px] font-normal text-[#1d1d1f] tracking-[-0.02em] self-start mt-2">$</span>
              <span className="text-[56px] font-light text-[#1d1d1f] tracking-[-0.04em] leading-none">{tier.price}</span>
              <span className="text-[15px] font-normal text-[#86868b] ml-1">/mo</span>
            </>
          ) : (
            <span className="text-[44px] font-light text-[#1d1d1f] tracking-[-0.03em] leading-none">{tier.price}</span>
          )}
        </div>

        {/* Features */}
        <div className="space-y-3.5 mb-7">
          {tier.features.map(f => (
            <div key={f} className="flex items-start gap-3">
              <div
                style={{
                  width: 20,
                  height: 20,
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
                <Check className="w-3 h-3" strokeWidth={3} />
              </div>
              <span className="text-[14px] font-normal text-[#1d1d1f] leading-[1.45] tracking-[-0.005em]">
                {f}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          className="w-full h-12 rounded-[12px] text-[14px] font-medium tracking-[-0.005em] transition-all duration-200 hover:-translate-y-0.5"
          style={{
            background: popular
              ? `linear-gradient(135deg, ${tier.brand}, #1166FF)`
              : '#1d1d1f',
            color: '#fff',
            boxShadow: popular
              ? `0 8px 22px ${tier.brand}40`
              : '0 6px 16px rgba(29,29,31,0.18)',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          {tier.cta ?? 'Get Started'}
        </button>
      </div>
    </div>
  );
};

export default Pricing;
