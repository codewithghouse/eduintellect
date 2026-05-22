import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export interface RelatedLink {
  to: string;
  title: string;
  description?: string;
}

interface RelatedLinksProps {
  title?: string;
  links: RelatedLink[];
  brand?: string;
}

const RelatedLinks: React.FC<RelatedLinksProps> = ({
  title = 'Continue exploring',
  links,
  brand = '#0071e3',
}) => (
  <section className="mb-16 md:mb-20">
    <h2 className="text-[20px] md:text-[24px] font-medium text-[#1d1d1f] tracking-[-0.015em] mb-6">
      {title}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className="group bg-white rounded-[16px] border border-[#e5e5ea] p-5 md:p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-10px_rgba(0,0,0,0.08)] flex items-start justify-between gap-4"
        >
          <div>
            <div
              className="text-[15px] md:text-[16px] font-medium tracking-[-0.005em] mb-1.5"
              style={{ color: brand }}
            >
              {link.title}
            </div>
            {link.description && (
              <p className="text-[13.5px] text-[#86868b] leading-[1.5]">{link.description}</p>
            )}
          </div>
          <ArrowUpRight
            className="w-4 h-4 shrink-0 text-[#c7c7cc] group-hover:text-[#1d1d1f] transition-colors duration-200 mt-1"
          />
        </Link>
      ))}
    </div>
  </section>
);

export default RelatedLinks;
