import { GraduationCap, Star, Sparkles, Check, X } from 'lucide-react';
import type { ReactNode } from 'react';

interface Tier {
  name: string;
  tagline: string;
  icon: ReactNode;
  launchPrice: number;        // ₹ per student / year (LAUNCH)
  regularPrice: number;       // ₹ per student / year (regular, struck through)
  perStudentMonth: number;    // ₹ per student / month (LAUNCH)
  schoolSize: string;
  perSchoolYearRange: string;
  perSchoolMonthRange: string;
  bestFor: string;
  brand: string;
  iconBg: string;
  popular?: boolean;
  cta?: string;
  features: { label: string; value: string | true | false }[];
}

const TIERS: Tier[] = [
  {
    name: 'Starter',
    tagline: 'Small Schools',
    icon: <GraduationCap className="w-5 h-5" />,
    launchPrice: 1500,
    regularPrice: 2500,
    perStudentMonth: 125,
    schoolSize: '100 – 500 students',
    perSchoolYearRange: '₹1.5 L – ₹7.5 L / year',
    perSchoolMonthRange: '₹12.5 K – ₹62.5 K / month',
    bestFor: 'Small private schools, primary-only schools, new institutions',
    brand: '#FF9500',
    iconBg: '#FFF4E0',
    features: [
      { label: 'AI features', value: 'Basic (5 runs / mo)' },
      { label: 'Cloud storage', value: '50 GB' },
      { label: 'WhatsApp notifications', value: '10 K / month' },
      { label: 'Support', value: 'Email · 48 hr response' },
      { label: 'Onboarding', value: 'Self-serve · video library' },
      { label: 'Training', value: 'Video library' },
      { label: 'Data migration', value: 'DIY' },
      { label: 'Custom branding', value: false },
      { label: 'Custom domain', value: false },
      { label: 'API access', value: false },
      { label: 'Custom integrations', value: false },
      { label: 'SLA uptime guarantee', value: false },
    ],
  },
  {
    name: 'Growth',
    tagline: 'Mid-Size Schools',
    icon: <Star className="w-5 h-5" />,
    launchPrice: 1200,
    regularPrice: 2000,
    perStudentMonth: 100,
    schoolSize: '501 – 1,500 students',
    perSchoolYearRange: '₹6 L – ₹18 L / year',
    perSchoolMonthRange: '₹50 K – ₹1.5 L / month',
    bestFor: 'Mid-size CBSE / ICSE / State Board schools',
    brand: '#0055FF',
    iconBg: '#E5EDFF',
    popular: true,
    features: [
      { label: 'AI features', value: 'Standard (50 runs / mo)' },
      { label: 'Cloud storage', value: '200 GB' },
      { label: 'WhatsApp notifications', value: '50 K / month' },
      { label: 'Support', value: 'Email + Phone · business hours' },
      { label: 'Onboarding', value: 'Group session · 4 hours' },
      { label: 'Training', value: 'Live webinars' },
      { label: 'Data migration', value: 'Assisted' },
      { label: 'Custom branding', value: 'Logo only' },
      { label: 'API access', value: 'Read-only' },
      { label: 'SLA uptime guarantee', value: '99 %' },
      { label: 'Custom domain', value: false },
      { label: 'Custom integrations', value: false },
    ],
  },
  {
    name: 'Enterprise',
    tagline: 'Large Schools / Chains',
    icon: <Sparkles className="w-5 h-5" />,
    launchPrice: 900,
    regularPrice: 1500,
    perStudentMonth: 75,
    schoolSize: '1,500+ students',
    perSchoolYearRange: '₹13.5 L+ / year',
    perSchoolMonthRange: '₹1.12 L+ / month',
    bestFor: 'Large schools, school chains, premium institutions',
    brand: '#7B3FF4',
    iconBg: '#F2EBFF',
    cta: 'Talk to sales',
    features: [
      { label: 'AI features', value: 'Unlimited · priority' },
      { label: 'Cloud storage', value: 'Unlimited' },
      { label: 'WhatsApp notifications', value: 'Unlimited' },
      { label: 'Support', value: 'Dedicated AM · 24 / 7 priority' },
      { label: 'Onboarding', value: '1-on-1 · 16 hrs + on-site' },
      { label: 'Training', value: 'On-site training' },
      { label: 'Data migration', value: 'Full-service' },
      { label: 'Custom branding', value: 'Full white-label' },
      { label: 'Custom domain', value: 'Included' },
      { label: 'API access', value: 'Full read/write' },
      { label: 'Custom integrations', value: 'Available' },
      { label: 'SLA uptime guarantee', value: '99.9 %' },
    ],
  },
];

const formatINR = (n: number) => n.toLocaleString('en-IN');

const Pricing = () => (
  <section id="pricing" className="py-24 md:py-28 bg-[#fbfbfd] relative overflow-hidden">
    <div className="max-w-[1200px] mx-auto px-6">
      {/* Launch banner */}
      <div className="flex justify-center mb-6">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-medium tracking-[0.08em] uppercase text-white"
          style={{ background: 'linear-gradient(135deg, #FF3B30, #FF8800)', boxShadow: '0 6px 18px rgba(255,59,48,0.30)' }}
        >
          <Sparkles className="w-3.5 h-3.5" />
          Launch offer · 40 % off · limited time
        </div>
      </div>

      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-[14px] font-normal tracking-[-0.01em] mb-3" style={{ color: '#0055FF' }}>
          Pricing
        </p>
        <h2 className="text-[40px] md:text-[56px] font-light text-[#1d1d1f] leading-[1.05] tracking-[-0.035em] mb-5">
          Plans built for every school.
        </h2>
        <p className="text-[#86868b] text-[19px] font-light max-w-[620px] mx-auto leading-[1.45] tracking-[0.011em]">
          Every plan includes all four dashboards — Owner, Principal, Teacher, Parent.
          Pick the size that fits your school. Switch anytime.
        </p>
      </div>

      {/* 3 cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-[1180px] mx-auto items-stretch">
        {TIERS.map(tier => (
          <PricingCard key={tier.name} tier={tier} />
        ))}
      </div>

      {/* Trust line */}
      <p className="text-center text-[13px] text-[#86868b] mt-10 font-light tracking-[0.005em]">
        All prices in INR · GST extra · No setup fee · Cancel anytime · Volume discounts on Enterprise
      </p>
    </div>
  </section>
);

const PricingCard = ({ tier }: { tier: Tier }) => {
  const popular = !!tier.popular;
  const savePerStudent = tier.regularPrice - tier.launchPrice;

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
        className="h-full bg-white rounded-[20px] p-7 md:p-8 transition-all duration-500 hover:-translate-y-1 flex flex-col"
        style={{
          border: popular ? `1.5px solid ${tier.brand}` : '0.5px solid rgba(0,0,0,0.08)',
          boxShadow: popular
            ? '0 30px 60px -20px rgba(0,85,255,0.20), 0 12px 24px -10px rgba(0,85,255,0.10)'
            : '0 1px 2px rgba(0,0,0,0.02), 0 12px 28px -10px rgba(0,0,0,0.06)',
        }}
      >
        {/* Header: icon + name */}
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
          {tier.name}
        </p>
        <p className="text-[14px] font-normal text-[#1d1d1f] mb-1">{tier.tagline}</p>
        <p className="text-[13px] font-normal text-[#86868b] mb-5">{tier.schoolSize}</p>

        {/* Price block */}
        <div className="mb-5 pb-5 border-b border-[#f0f0f2]">
          {/* Strike + save */}
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[13px] font-normal text-[#86868b] line-through">
              ₹{formatINR(tier.regularPrice)}
            </span>
            <span
              className="text-[10px] font-medium tracking-[0.10em] uppercase px-1.5 py-0.5 rounded text-white"
              style={{ background: tier.brand }}
            >
              40 % off
            </span>
          </div>

          {/* Big launch price */}
          <div className="flex items-baseline gap-1">
            <span className="text-[20px] font-normal text-[#1d1d1f] tracking-[-0.02em] self-start mt-2">₹</span>
            <span className="text-[52px] font-light text-[#1d1d1f] tracking-[-0.04em] leading-none">
              {formatINR(tier.launchPrice)}
            </span>
            <span className="text-[14px] font-normal text-[#86868b] ml-1">/ student / yr</span>
          </div>

          <p className="text-[12px] font-normal text-[#86868b] mt-2 tracking-[0.005em]">
            ₹{tier.perStudentMonth} per student / month · save ₹{formatINR(savePerStudent)} per student / yr
          </p>
        </div>

        {/* Per-school totals */}
        <div className="mb-5 space-y-1">
          <div className="flex items-center justify-between text-[12px]">
            <span className="text-[#86868b]">Per school / year</span>
            <span className="text-[#1d1d1f] font-medium">{tier.perSchoolYearRange}</span>
          </div>
          <div className="flex items-center justify-between text-[12px]">
            <span className="text-[#86868b]">Per school / month</span>
            <span className="text-[#1d1d1f] font-medium">{tier.perSchoolMonthRange}</span>
          </div>
        </div>

        {/* Best for */}
        <div
          className="rounded-xl px-3.5 py-3 mb-5 text-[12px] leading-[1.45]"
          style={{ background: tier.iconBg, color: tier.brand }}
        >
          <span className="font-medium tracking-[0.04em]">Best for: </span>
          <span className="font-normal text-[#1d1d1f]">{tier.bestFor}</span>
        </div>

        {/* Features */}
        <div className="space-y-2.5 mb-7 flex-1">
          {tier.features.map(f => {
            const isFalse = f.value === false;
            const isTrue = f.value === true;
            return (
              <div key={f.label} className="flex items-start gap-2.5">
                <div
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: '50%',
                    background: isFalse ? '#f5f5f7' : tier.iconBg,
                    color: isFalse ? '#c7c7cc' : tier.brand,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: 1,
                  }}
                >
                  {isFalse ? <X className="w-2.5 h-2.5" strokeWidth={3} /> : <Check className="w-2.5 h-2.5" strokeWidth={3} />}
                </div>
                <div className="flex-1 flex items-baseline justify-between gap-2 min-w-0">
                  <span className={`text-[12.5px] font-normal leading-[1.4] tracking-[-0.005em] ${isFalse ? 'text-[#86868b]' : 'text-[#1d1d1f]'}`}>
                    {f.label}
                  </span>
                  {!isTrue && !isFalse && (
                    <span className="text-[12px] font-normal text-[#86868b] text-right shrink-0">
                      {f.value}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
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
