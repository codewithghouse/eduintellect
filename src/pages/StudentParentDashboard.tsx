import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import ParentDashboardIPad from '../components/ipad/ParentDashboardIPad';

const StudentParentDashboard = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-10 h-10 rounded-[12px] flex items-center justify-center text-white"
              style={{ backgroundColor: '#6b35b8' }}
            >
              <Users className="w-5 h-5" />
            </div>
            <p
              className="text-[14px] font-light tracking-[-0.01em]"
              style={{ color: '#6b35b8' }}
            >
              Parent Dashboard
            </p>
          </div>
          <h1 className="text-[40px] md:text-[48px] font-light text-[#1d1d1f] leading-[1.08] tracking-[-0.035em] mb-4">
            Your child's world. One app.
          </h1>
          <p className="text-[#86868b] text-[17px] max-w-[600px] leading-[1.47] tracking-[0.011em] mb-16">
            AI-powered academic health, live performance tracking, weekly reports, and personalised parenting tips.
          </p>
        </motion.div>

        {/* iPad mockup — Parent dashboard view */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-10 lg:gap-14 items-center"
        >
          <div className="w-full">
            <ParentDashboardIPad />
          </div>
          <div className="w-full max-w-[480px] mx-auto lg:mx-0">
            <p className="text-[13px] font-light tracking-[-0.01em] mb-3" style={{ color: '#6b35b8' }}>Stay close, every day</p>
            <h2 className="text-[#1d1d1f] text-[32px] md:text-[40px] font-light leading-[1.1] tracking-[-0.02em] mb-5">
              Stop waiting for parent-teacher meetings.
            </h2>
            <p className="text-[#86868b] text-[16px] leading-[1.55] tracking-[0.005em] mb-7">
              Live grades, attendance, behaviour notes from teachers, and AI-powered practice recommendations — all in your pocket.
            </p>
            <div className="space-y-3">
              {[
                'Real-time GPA, attendance, and class rank',
                'Subject-wise performance with weekly trends',
                'Behaviour feed (positives + concerns from teachers)',
                'AI Practice streak — personalised drilling on weak topics',
              ].map((line, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#6b35b8' }} />
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

export default StudentParentDashboard;
