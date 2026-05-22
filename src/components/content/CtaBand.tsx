import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CtaBandProps {
  title: string;
  description?: string;
  primaryCta?: { to: string; label: string };
  secondaryCta?: { to: string; label: string };
}

const CtaBand: React.FC<CtaBandProps> = ({
  title,
  description,
  primaryCta = { to: '/contact', label: 'Book a demo' },
  secondaryCta,
}) => (
  <section
    className="rounded-[24px] px-8 py-12 md:px-14 md:py-16 mb-8"
    style={{
      background:
        'linear-gradient(135deg, #14224d 0%, #1e3272 45%, #0a1430 100%)',
    }}
  >
    <div className="max-w-[760px]">
      <h2 className="text-[28px] md:text-[40px] font-normal text-white leading-[1.1] tracking-[-0.025em] mb-3">
        {title}
      </h2>
      {description && (
        <p className="text-[16px] md:text-[18px] text-[#b8c5e6] leading-[1.5] mb-7">
          {description}
        </p>
      )}
      <div className="flex flex-wrap gap-3">
        <Link
          to={primaryCta.to}
          className="inline-flex items-center gap-2 bg-white text-[#1e3272] text-[15px] font-medium px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5"
          style={{ boxShadow: '0 12px 28px rgba(0,0,0,0.2)' }}
        >
          {primaryCta.label} <ArrowRight className="w-4 h-4" />
        </Link>
        {secondaryCta && (
          <Link
            to={secondaryCta.to}
            className="inline-flex items-center gap-2 text-white text-[15px] font-medium px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 transition-all duration-300"
          >
            {secondaryCta.label}
          </Link>
        )}
      </div>
    </div>
  </section>
);

export default CtaBand;
