import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export interface FeatureSection {
  title: string;
  body: string;
  bullets?: string[];
}

export interface FeaturePageProps {
  eyebrow: string;
  headline: string;
  subhead: string;
  brand: string;        // accent hex e.g. '#0055FF'
  iconBg: string;       // accent tint e.g. '#E5EDFF'
  icon: ReactNode;      // lucide icon
  sections: FeatureSection[];
  cta?: { label: string; href: string };
}

const FeaturePageLayout = ({
  eyebrow, headline, subhead, brand, iconBg, icon, sections, cta,
}: FeaturePageProps) => (
  <div className="bg-[#fbfbfd]">
    {/* Hero */}
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-[820px] mx-auto"
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: iconBg,
              color: brand,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20,
              boxShadow: `0 10px 30px ${brand}22`,
            }}
          >
            {icon}
          </div>
          <p
            className="text-[14px] font-medium tracking-[0.16em] uppercase mb-4"
            style={{ color: brand }}
          >
            {eyebrow}
          </p>
          <h1 className="text-[44px] md:text-[64px] font-light text-[#1d1d1f] leading-[1.05] tracking-[-0.035em] mb-6">
            {headline}
          </h1>
          <p className="text-[#86868b] text-[19px] md:text-[21px] font-light leading-[1.45] tracking-[0.011em]">
            {subhead}
          </p>
          {cta && (
            <a
              href={cta.href}
              className="inline-flex items-center justify-center mt-10 px-7 h-12 rounded-[12px] text-[14px] font-medium text-white transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: `linear-gradient(135deg, ${brand}, #1166FF)`,
                boxShadow: `0 8px 22px ${brand}40`,
              }}
            >
              {cta.label}
            </a>
          )}
        </motion.div>
      </div>
    </section>

    {/* Sections */}
    <section className="pb-24 md:pb-32">
      <div className="max-w-[920px] mx-auto px-6 space-y-14 md:space-y-20">
        {sections.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-[20px] p-7 md:p-10 border border-black/5"
            style={{
              boxShadow: '0 1px 2px rgba(0,0,0,0.02), 0 12px 28px -10px rgba(0,0,0,0.06)',
            }}
          >
            <h2 className="text-[26px] md:text-[34px] font-light text-[#1d1d1f] leading-[1.15] tracking-[-0.025em] mb-4">
              {s.title}
            </h2>
            <p className="text-[#424245] text-[16px] md:text-[17px] font-normal leading-[1.55] tracking-[0.005em]">
              {s.body}
            </p>
            {s.bullets && s.bullets.length > 0 && (
              <ul className="mt-6 space-y-3">
                {s.bullets.map(b => (
                  <li key={b} className="flex items-start gap-3">
                    <div
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: '50%',
                        background: iconBg,
                        color: brand,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    >
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    </div>
                    <span className="text-[15px] md:text-[16px] font-normal text-[#1d1d1f] leading-[1.5]">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default FeaturePageLayout;
