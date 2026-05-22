import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
  primaryCta?: { to: string; label: string };
  secondaryCta?: { to: string; label: string };
  align?: 'left' | 'center';
  brand?: string;
  children?: ReactNode;
}

const PageHero: React.FC<PageHeroProps> = ({
  eyebrow,
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  align = 'left',
  brand = '#0071e3',
  children,
}) => {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';
  return (
    <section className={`flex flex-col ${alignClass} gap-5 mb-14 md:mb-20`}>
      {eyebrow && (
        <p
          className="inline-flex items-center gap-2 text-[13px] md:text-[14px] font-semibold tracking-[0.04em] uppercase"
          style={{ color: brand }}
        >
          {eyebrow}
        </p>
      )}
      <h1 className="text-[40px] md:text-[64px] lg:text-[72px] font-normal text-[#1d1d1f] leading-[1.05] tracking-[-0.035em] max-w-[920px]">
        {title}
      </h1>
      {subtitle && (
        <p className="text-[20px] md:text-[24px] font-light text-[#1d1d1f] leading-[1.35] tracking-[-0.005em] max-w-[820px]">
          {subtitle}
        </p>
      )}
      {description && (
        <p className="text-[16px] md:text-[18px] text-[#424245] leading-[1.55] max-w-[760px]">
          {description}
        </p>
      )}
      {(primaryCta || secondaryCta) && (
        <div className={`flex flex-wrap gap-3 mt-4 ${align === 'center' ? 'justify-center' : ''}`}>
          {primaryCta && (
            <Link
              to={primaryCta.to}
              className="inline-flex items-center gap-2 text-white text-[15px] font-medium px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: brand, boxShadow: `0 8px 22px ${brand}40` }}
            >
              {primaryCta.label} <ArrowRight className="w-4 h-4" />
            </Link>
          )}
          {secondaryCta && (
            <Link
              to={secondaryCta.to}
              className="inline-flex items-center gap-2 text-[#1d1d1f] text-[15px] font-medium px-6 py-3 rounded-full border border-[#d2d2d7] hover:bg-white transition-all duration-300"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      )}
      {children}
    </section>
  );
};

export default PageHero;
