import { ArrowRight } from 'lucide-react';

interface FlowStep {
  label: string;
  description?: string;
}

interface ProblemSolutionFlowProps {
  steps: FlowStep[];
  brand?: string;
}

/**
 * Renders the "Data → Insights → Recommendations → Actions → Outcomes" flow.
 * Horizontal on desktop, vertical on mobile. Each step is a card with brand-tinted accent.
 */
const ProblemSolutionFlow: React.FC<ProblemSolutionFlowProps> = ({ steps, brand = '#0071e3' }) => (
  <div className="flex flex-col md:flex-row gap-4 md:gap-3 items-stretch">
    {steps.map((step, idx) => (
      <div key={step.label} className="flex flex-col md:flex-row items-stretch gap-3 md:gap-3 flex-1">
        <div
          className="flex-1 rounded-[16px] p-5 md:p-6 bg-white border border-[#e5e5ea] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-10px_rgba(0,0,0,0.08)]"
        >
          <div
            className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-2"
            style={{ color: brand }}
          >
            Step {idx + 1}
          </div>
          <div className="text-[18px] md:text-[20px] font-medium text-[#1d1d1f] tracking-[-0.01em] mb-2 leading-tight">
            {step.label}
          </div>
          {step.description && (
            <p className="text-[13.5px] text-[#86868b] leading-[1.5]">{step.description}</p>
          )}
        </div>
        {idx < steps.length - 1 && (
          <div className="flex items-center justify-center text-[#c7c7cc] shrink-0">
            <ArrowRight className="w-5 h-5 hidden md:block" />
            <ArrowRight className="w-5 h-5 rotate-90 md:hidden" />
          </div>
        )}
      </div>
    ))}
  </div>
);

export default ProblemSolutionFlow;
