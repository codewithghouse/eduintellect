import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-[#fbfbfd]">
      {/* Subtle Apple-style gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-[#0071e3]/[0.04] via-transparent to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[980px] mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#0071e3] text-[17px] md:text-[21px] font-semibold mb-3 tracking-[-0.01em]"
          >
            The future of school management.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[48px] md:text-[64px] lg:text-[80px] font-semibold text-[#1d1d1f] leading-[1.05] tracking-[-0.035em] mb-6"
          >
            Manage Your School.
            <br />
            <span className="gradient-text">Like a Visionary.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#86868b] text-[19px] md:text-[21px] max-w-[600px] mb-10 leading-[1.381] font-normal tracking-[0.011em]"
          >
            An AI-powered ecosystem connecting owners, principals, teachers, and parents in one seamless intelligence hub.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              to="/register"
              className="inline-flex items-center gap-2 bg-[#0071e3] hover:bg-[#0077ed] text-white text-[17px] font-normal px-8 py-3 rounded-full transition-all duration-300"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#features"
              className="inline-flex items-center gap-1 text-[#0071e3] hover:text-[#0077ed] text-[17px] font-normal transition-colors duration-300"
            >
              Learn more <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Apple-style divider line */}
      <div className="max-w-[980px] mx-auto px-6 mt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-t border-[#d2d2d7]/60 pt-10"
        >
          {[
            { label: 'AI Smart Insights', value: 'Built-in' },
            { label: 'Real-time Analytics', value: 'Always On' },
            { label: 'Parent-Teacher Sync', value: 'Seamless' }
          ].map((item, i) => (
            <div key={item.label} className={`text-center py-4 ${i < 2 ? 'sm:border-r border-[#d2d2d7]/40' : ''}`}>
              <p className="text-[28px] font-semibold text-[#1d1d1f] tracking-[-0.026em] mb-1">{item.value}</p>
              <p className="text-[14px] text-[#86868b] tracking-[-0.01em]">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
