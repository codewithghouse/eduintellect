import type { LucideIcon } from 'lucide-react';

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
  brand?: string;
}

interface FeatureGridProps {
  items: FeatureItem[];
  columns?: 2 | 3 | 4;
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ items, columns = 3 }) => {
  const colsClass =
    columns === 2 ? 'md:grid-cols-2' : columns === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3';
  return (
    <div className={`grid grid-cols-1 ${colsClass} gap-4 md:gap-5`}>
      {items.map(({ title, description, icon: Icon, brand = '#0071e3' }) => (
        <div
          key={title}
          className="bg-white rounded-[16px] border border-[#e5e5ea] p-5 md:p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-10px_rgba(0,0,0,0.08)]"
        >
          <div
            className="w-11 h-11 rounded-[12px] flex items-center justify-center mb-4"
            style={{ background: `${brand}14`, color: brand }}
          >
            <Icon className="w-5 h-5" />
          </div>
          <h3 className="text-[16px] md:text-[17px] font-medium text-[#1d1d1f] tracking-[-0.005em] mb-2">
            {title}
          </h3>
          <p className="text-[13.5px] md:text-[14px] text-[#86868b] leading-[1.55]">{description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;
