import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-20 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-white">
      {/* Background Orbs */}
      <div className="absolute top-0 -left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-[140px] -z-10"></div>
      <div className="absolute bottom-0 -right-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-[140px] -z-10"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs md:text-sm font-bold mb-8 shadow-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
            The Future of School Management is here
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[1.05] tracking-tight mb-8"
          >
            Manage Your School <br />
            <span className="gradient-text">Like a Visionary.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed font-medium"
          >
            A futuristic AI-powered ecosystem designed to connect owners, principals, teachers, and parents in one seamless intelligence hub.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Link to="/register" className="btn-primary px-10 py-5 text-lg flex items-center justify-center gap-2 w-full sm:w-auto shadow-2xl shadow-blue-600/30 text-white font-bold">
              Get Started Free <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="flex items-center justify-center gap-3 px-10 py-5 text-lg text-slate-700 font-bold hover:text-blue-600 transition-all w-full sm:w-auto group">
              <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center border border-slate-200 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                <Play className="w-4 h-4 fill-current ml-1" />
              </div>
              Watch Demo
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 border-t border-slate-100 pt-12 w-full"
          >
            {['AI Smart Insights', 'Real-time Analytics', 'Parent-Teacher Sync'].map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <CheckCircle2 className="text-blue-600 w-6 h-6" />
                <span className="text-slate-900 font-bold text-sm uppercase tracking-wider">{feature}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
