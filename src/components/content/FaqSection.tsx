import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface Faq {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: Faq[];
  brand?: string;
}

const FaqItem: React.FC<{ faq: Faq; brand: string }> = ({ faq, brand }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#e5e5ea] last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-4 text-left py-5 group"
        aria-expanded={open}
      >
        <span className="text-[17px] md:text-[18px] font-medium text-[#1d1d1f] tracking-[-0.01em] leading-[1.4]">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 shrink-0 mt-1 text-[#86868b] transition-transform duration-300 group-hover:text-[#1d1d1f] ${open ? 'rotate-180' : ''}`}
          style={open ? { color: brand } : undefined}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{
          maxHeight: open ? '500px' : '0px',
          opacity: open ? 1 : 0,
        }}
      >
        <p className="pb-5 text-[15px] md:text-[16px] text-[#424245] leading-[1.6] max-w-[820px]">
          {faq.answer}
        </p>
      </div>
    </div>
  );
};

const FaqSection: React.FC<FaqSectionProps> = ({ faqs, brand = '#0071e3' }) => (
  <div className="rounded-[20px] border border-[#e5e5ea] bg-white px-5 md:px-7">
    {faqs.map((faq) => (
      <FaqItem key={faq.question} faq={faq} brand={brand} />
    ))}
  </div>
);

export default FaqSection;
