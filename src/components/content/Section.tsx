import type { ReactNode } from 'react';

interface SectionProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ eyebrow, title, subtitle, children, className }) => (
  <section className={`mb-16 md:mb-24 ${className ?? ''}`}>
    {(eyebrow || title || subtitle) && (
      <header className="mb-8 md:mb-12">
        {eyebrow && (
          <p className="text-[13px] md:text-[14px] font-semibold tracking-[0.04em] uppercase text-[#0071e3] mb-3">
            {eyebrow}
          </p>
        )}
        {title && (
          <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-normal text-[#1d1d1f] leading-[1.1] tracking-[-0.025em] max-w-[860px] mb-3">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-[17px] md:text-[19px] text-[#424245] leading-[1.5] max-w-[760px]">
            {subtitle}
          </p>
        )}
      </header>
    )}
    {children}
  </section>
);

export default Section;
