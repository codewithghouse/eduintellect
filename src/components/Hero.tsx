import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 -left-10 w-72 h-72 bg-brand-600/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 -right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-brand-400 text-xs md:text-sm font-medium mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-brand-500 animate-pulse"></span>
            The Future of School Management is here
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight mb-8"
          >
            Manage Your School <br />
            <span className="gradient-text">Like a Visionary.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
          >
            A futuristic AI-powered ecosystem designed to connect owners, principals, teachers, and parents in one seamless intelligence hub.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Link to="/register" className="btn-primary px-8 py-4 text-lg flex items-center justify-center gap-2 w-full sm:w-auto shadow-xl shadow-brand-600/30 text-white">
              Get Started Free <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="flex items-center justify-center gap-2 px-8 py-4 text-lg text-white font-medium hover:text-brand-400 transition-colors w-full sm:w-auto">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10">
                <Play className="w-4 h-4 fill-current" />
              </div>
              Watch Demo
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12"
          >
            {['AI Smart Insights', 'Real-time Analytics', 'Parent-Teacher Sync'].map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <CheckCircle2 className="text-brand-500 w-5 h-5" />
                <span className="text-slate-300 font-medium text-sm">{feature}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
