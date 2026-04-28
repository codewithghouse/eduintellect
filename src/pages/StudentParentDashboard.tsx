import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const StudentParentDashboard = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div
              className="w-10 h-10 rounded-[12px] flex items-center justify-center text-white"
              style={{ backgroundColor: '#6b35b8' }}
            >
              <Users className="w-5 h-5" />
            </div>
          </div>
          <p
            className="text-[14px] font-semibold tracking-[-0.01em] mb-2"
            style={{ color: '#6b35b8' }}
          >
            Parent Dashboard
          </p>
          <h1 className="text-[40px] md:text-[48px] font-semibold text-[#1d1d1f] leading-[1.08] tracking-[-0.035em] mb-4">
            Your child's world. One app.
          </h1>
          <p className="text-[#86868b] text-[17px] max-w-[600px] mx-auto leading-[1.47] tracking-[0.011em]">
            Deep purple premium interface — AI-powered academic health, live performance tracking, weekly reports, and personalized parenting tips.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default StudentParentDashboard;
