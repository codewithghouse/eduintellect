import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import Hero from '../components/Hero';
import PortalShowcase from '../components/PortalShowcase';
import { Target, Shield, Zap, Sparkles } from 'lucide-react';
import Pricing from '../components/Pricing';

const CountUp = ({ to }: { to: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    // Extract base number
    const numericTarget = parseFloat(to.replace(/[^\d.]/g, ''));
    const suffix = to.replace(/[\d.]/g, '');
    
    const controls = animate(count, numericTarget, { 
      duration: 2,
      ease: [0.16, 1, 0.3, 1], // premium cubic-bezier ease
    });
    
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest + suffix);
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [to, count, rounded]);

  return <span>{displayValue}</span>;
};

const Features = () => {
  const stats = [
    { label: 'Schools Trusted', value: '250+' },
    { label: 'AI Features', value: '45+' },
    { label: 'Daily Users', value: '120k+' },
    { label: 'Performance Gain', value: '60%' },
  ];

  return (
    <div id="features" className="bg-white">
      {/* Stats Section */}
      <section className="py-16 border-y border-white/5 bg-[#002147]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-6xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors drop-shadow-2xl"
                >
                  <CountUp to={stat.value} />
                </motion.div>
                <div className="text-blue-200/50 text-[11px] font-black uppercase tracking-[0.3em] font-montserrat">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100 text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles className="w-3 h-3" /> Why EduIntellect?
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
                Cutting-edge tech meets <br />
                <span className="text-blue-600">Administrative Mastery.</span>
              </h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium">
                We don't just provide a dashboard; we provide an intelligent colleague that helps you make better decisions every single day.
              </p>

              <div className="space-y-6">
                {[
                  { icon: <Zap />, title: 'Incredible Speed', desc: 'Optimized for mobile and desktop, ensuring zero lag.' },
                  { icon: <Shield />, title: 'Military-Grade Security', desc: 'Secure Firebase-backed architecture for data safety.' },
                  { icon: <Target />, title: 'Goal-Oriented AI', desc: 'AI that tracks student risks and alerts you instantly.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-blue-600 shrink-0 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              {/* Image Placeholder with Styling */}
              <div className="aspect-square rounded-3xl bg-gradient-to-tr from-blue-50 to-indigo-50 border border-slate-100 p-4 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white to-transparent z-10"></div>
                <div className="w-full h-full rounded-2xl bg-white border border-slate-100 p-8 flex flex-col justify-center items-center text-center shadow-inner">
                   <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-6 animate-pulse">
                      <Zap className="w-12 h-12 text-blue-600" />
                   </div>
                   <h3 className="text-2xl font-bold text-slate-900 mb-2">Live Demo Portal</h3>
                   <p className="text-slate-500 text-sm leading-relaxed">Experience the power of real-time education technology.</p>
                </div>
                {/* Floating elements for effect */}
                <div className="absolute top-10 right-10 w-20 h-20 bg-blue-200/20 rounded-full blur-2xl animate-bounce"></div>
                <div className="absolute bottom-10 left-10 w-16 h-16 bg-indigo-200/20 rounded-full blur-2xl delay-700 animate-pulse"></div>
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
    <div className="bg-white">
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
    </div>
  );
};

export default HomePage;
