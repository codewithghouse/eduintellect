import { Check, X } from 'lucide-react';

interface Row {
  label: string;
  left: string | boolean;
  right: string | boolean;
}

interface ComparisonTableProps {
  leftTitle: string;
  rightTitle: string;
  rows: Row[];
  leftBrand?: string;
  rightBrand?: string;
}

const Cell = ({ value, brand }: { value: string | boolean; brand: string }) => {
  if (typeof value === 'boolean') {
    return value ? (
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center"
        style={{ background: `${brand}22`, color: brand }}
      >
        <Check className="w-4 h-4" strokeWidth={3} />
      </div>
    ) : (
      <div className="w-7 h-7 rounded-full bg-[#f5f5f7] text-[#c7c7cc] flex items-center justify-center">
        <X className="w-4 h-4" strokeWidth={3} />
      </div>
    );
  }
  return <span className="text-[14px] md:text-[15px] text-[#1d1d1f] leading-[1.45]">{value}</span>;
};

const ComparisonTable: React.FC<ComparisonTableProps> = ({
  leftTitle,
  rightTitle,
  rows,
  leftBrand = '#86868b',
  rightBrand = '#0071e3',
}) => (
  <div className="rounded-[20px] border border-[#e5e5ea] bg-white overflow-hidden">
    <div className="grid grid-cols-[1.2fr_1fr_1fr] md:grid-cols-[1.4fr_1fr_1fr]">
      <div className="bg-[#fafafa] px-4 md:px-6 py-4 text-[11px] md:text-[12px] font-semibold tracking-[0.14em] uppercase text-[#86868b] border-b border-[#e5e5ea]">
        Capability
      </div>
      <div
        className="bg-[#fafafa] px-4 md:px-6 py-4 text-[13px] md:text-[14px] font-semibold border-b border-[#e5e5ea]"
        style={{ color: leftBrand }}
      >
        {leftTitle}
      </div>
      <div
        className="bg-[#fafafa] px-4 md:px-6 py-4 text-[13px] md:text-[14px] font-semibold border-b border-[#e5e5ea]"
        style={{ color: rightBrand }}
      >
        {rightTitle}
      </div>
      {rows.map((row, idx) => (
        <div key={row.label} className="contents">
          <div
            className={`px-4 md:px-6 py-4 text-[13.5px] md:text-[14px] text-[#1d1d1f] ${idx % 2 === 1 ? 'bg-[#fafafa]' : ''} ${idx < rows.length - 1 ? 'border-b border-[#e5e5ea]' : ''}`}
          >
            {row.label}
          </div>
          <div
            className={`px-4 md:px-6 py-4 ${idx % 2 === 1 ? 'bg-[#fafafa]' : ''} ${idx < rows.length - 1 ? 'border-b border-[#e5e5ea]' : ''}`}
          >
            <Cell value={row.left} brand={leftBrand} />
          </div>
          <div
            className={`px-4 md:px-6 py-4 ${idx % 2 === 1 ? 'bg-[#fafafa]' : ''} ${idx < rows.length - 1 ? 'border-b border-[#e5e5ea]' : ''}`}
          >
            <Cell value={row.right} brand={rightBrand} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ComparisonTable;
