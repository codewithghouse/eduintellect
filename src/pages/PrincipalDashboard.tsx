import { motion } from 'framer-motion';
import { LayoutDashboard } from 'lucide-react';

const PrincipalDashboard = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#fbfbfd]">
      <div className="max-w-[980px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-[12px] bg-[#5856d6] flex items-center justify-center text-white">
              <LayoutDashboard className="w-5 h-5" />
            </div>
            <p className="text-[#5856d6] text-[14px] font-normal tracking-[-0.01em]">Academic Head</p>
          </div>
          <h1 className="text-[40px] md:text-[48px] font-normal text-[#1d1d1f] leading-[1.08] tracking-[-0.035em] mb-4">
            Principal Dashboard
          </h1>
          <p className="text-[#86868b] text-[17px] max-w-[600px] leading-[1.47] tracking-[0.011em] mb-12">
            Monitor teacher performance, academic risks, and overall school operations from one place.
          </p>
        </motion.div>

        {/* Content will be added here */}
        <div className="bg-white rounded-[20px] border border-[#d2d2d7]/40 p-12 text-center">
          <p className="text-[#86868b] text-[15px]">Dashboard content coming soon.</p>
        </div>
      </div>
    </div>
  );
};

export default PrincipalDashboard;
