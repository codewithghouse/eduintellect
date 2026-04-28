import { motion } from 'framer-motion';
import { LayoutDashboard } from 'lucide-react';
import PrincipalDashboardIPad from '../components/ipad/PrincipalDashboardIPad';

const PrincipalDashboard = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-[12px] bg-[#5856d6] flex items-center justify-center text-white">
              <LayoutDashboard className="w-5 h-5" />
            </div>
            <p className="text-[#5856d6] text-[14px] font-light tracking-[-0.01em]">
              Academic Head
            </p>
          </div>
          <h1 className="text-[40px] md:text-[48px] font-light text-[#1d1d1f] leading-[1.08] tracking-[-0.035em] mb-4">
            Principal Dashboard
          </h1>
          <p className="text-[#86868b] text-[17px] max-w-[600px] leading-[1.47] tracking-[0.011em] mb-16">
            Monitor teacher performance, academic risks, and overall school operations from one place.
          </p>
        </motion.div>

        {/* iPad mockup — Principal dashboard view */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-10 lg:gap-14 items-center"
        >
          <div className="w-full">
            <PrincipalDashboardIPad />
          </div>
          <div className="w-full max-w-[480px] mx-auto lg:mx-0">
            <p className="text-[#5856d6] text-[13px] font-light tracking-[-0.01em] mb-3">Academic Command Centre</p>
            <h2 className="text-[#1d1d1f] text-[32px] md:text-[40px] font-light leading-[1.1] tracking-[-0.02em] mb-5">
              Run your school with intelligence.
            </h2>
            <p className="text-[#86868b] text-[16px] leading-[1.55] tracking-[0.005em] mb-7">
              Academic Health Index, today's risk alerts, attendance trends, and teacher performance — every signal you need on one screen.
            </p>
            <div className="space-y-3">
              {[
                'Real-time Academic Health Index (composite score 0-100)',
                "Today's Risk Alerts — students slipping right now",
                '30-day attendance trend with smooth interpolation',
                'Sectioned sidebar — Students / Academics / Operations / Communication',
              ].map((line, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#5856d6] shrink-0" />
                  <p className="text-[#1d1d1f] text-[14px] font-normal leading-[1.5]">{line}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrincipalDashboard;
