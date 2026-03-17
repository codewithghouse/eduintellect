import React from 'react';
import Hero from '../components/Hero';
import PortalShowcase from '../components/PortalShowcase';
import { Target, Shield, Zap, Sparkles } from 'lucide-react';
import Pricing from '../components/Pricing';
import { motion } from 'framer-motion';

const Features = () => {
  const stats = [
    { label: 'Schools Trusted', value: '250+' },
    { label: 'AI Features', value: '45+' },
    { label: 'Daily Users', value: '120k+' },
    { label: 'Performance Gain', value: '60%' },
  ];

  return (
    <div id="features" className="bg-slate-950">
      {/* Stats Section */}
      <section className="py-12 border-y border-slate-900 border-dashed">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="text-3xl md:text-5xl font-black text-white mb-2 group-hover:text-brand-400 transition-colors">{stat.value}</div>
                <div className="text-slate-500 text-sm font-medium uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles className="w-3 h-3" /> Why EduIntellect?
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Cutting-edge tech meets <br />
                <span className="text-brand-400 text-glow">Administrative Mastery.</span>
              </h2>
              <p className="text-slate-400 text-lg mb-10">
                We don't just provide a dashboard; we provide an intelligent colleague that helps you make better decisions every single day.
              </p>

              <div className="space-y-6">
                {[
                  { icon: <Zap />, title: 'Incredible Speed', desc: 'Optimized for mobile and desktop, ensuring zero lag.' },
                  { icon: <Shield />, title: 'Military-Grade Security', desc: 'Secure Firebase-backed architecture for data safety.' },
                  { icon: <Target />, title: 'Goal-Oriented AI', desc: 'AI that tracks student risks and alerts you instantly.' },
                ].map((item, i) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-brand-500 shrink-0 shadow-inner">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              {/* Image Placeholder with Styling */}
              <div className="aspect-square rounded-3xl bg-gradient-to-tr from-brand-600/20 to-blue-600/10 border border-white/10 p-4 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950 to-transparent z-10"></div>
                <div className="w-full h-full rounded-2xl bg-slate-900 border border-slate-800 p-8 flex flex-col justify-center items-center text-center">
                   <div className="w-24 h-24 bg-brand-500/10 rounded-full flex items-center justify-center mb-6 animate-pulse">
                      <Zap className="w-12 h-12 text-brand-400" />
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-2">Live Demo Portal</h3>
                   <p className="text-slate-500 text-sm">Experience the power of real-time education technology.</p>
                </div>
                {/* Floating elements for effect */}
                <div className="absolute top-10 right-10 w-20 h-20 bg-brand-500/30 rounded-full blur-xl animate-bounce"></div>
                <div className="absolute bottom-10 left-10 w-16 h-16 bg-blue-500/20 rounded-full blur-xl delay-700 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const HomePage = () => {
  return (
    <>
      <Hero />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Features />
      </motion.div>
      <PortalShowcase />
      <Pricing />
    </>
  );
};

export default HomePage;
