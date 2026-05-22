import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbsProps {
  trail: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ trail }) => (
  <nav aria-label="Breadcrumb" className="mb-8">
    <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-[#86868b]">
      {trail.map((item, idx) => {
        const isLast = idx === trail.length - 1;
        return (
          <li key={item.path} className="flex items-center gap-1.5">
            {isLast ? (
              <span className="text-[#1d1d1f] font-medium">{item.name}</span>
            ) : (
              <Link
                to={item.path}
                className="hover:text-[#0071e3] transition-colors duration-200"
              >
                {item.name}
              </Link>
            )}
            {!isLast && <ChevronRight className="w-3 h-3 text-[#c7c7cc]" />}
          </li>
        );
      })}
    </ol>
  </nav>
);

export default Breadcrumbs;
