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
    const numericTarget = parseFloat(to.replace(/[^\d.]/g, ''));
    const suffix = to.replace(/[\d.]/g, '');

    const controls = animate(count, numericTarget, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
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
    <div id="features">
      {/* Stats Section - Apple dark band */}
      <section className="py-20 bg-[#1d1d1f]">
        <div className="max-w-[980px] mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[40px] md:text-[56px] font-semibold text-white mb-2 tracking-[-0.04em]"
                >
                  <CountUp to={stat.value} />
                </motion.div>
                <div className="text-[#86868b] text-[14px] font-normal tracking-[-0.01em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why EduIntellect - Clean Apple layout */}
      <section className="py-24 bg-[#fbfbfd]">
        <div className="max-w-[980px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 text-[#0071e3] text-[14px] font-semibold mb-4 tracking-[-0.01em]">
                  <Sparkles className="w-4 h-4" /> Why EduIntellect
                </div>
                <h2 className="text-[40px] md:text-[48px] font-semibold text-[#1d1d1f] mb-6 leading-[1.08] tracking-[-0.035em]">
                  Cutting-edge tech meets{' '}
                  <span className="gradient-text">administrative mastery.</span>
                </h2>
                <p className="text-[#86868b] text-[17px] mb-12 leading-[1.47] tracking-[0.011em]">
                  We don't just provide a dashboard — we provide an intelligent colleague that helps you make better decisions every single day.
                </p>
              </motion.div>

              <div className="space-y-8">
                {[
                  { icon: <Zap className="w-5 h-5" />, title: 'Incredible Speed', desc: 'Optimized for mobile and desktop, ensuring zero lag.' },
                  { icon: <Shield className="w-5 h-5" />, title: 'Enterprise Security', desc: 'Secure Firebase-backed architecture for data safety.' },
                  { icon: <Target className="w-5 h-5" />, title: 'Goal-Oriented AI', desc: 'AI that tracks student risks and alerts you instantly.' },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-[#f5f5f7] flex items-center justify-center text-[#0071e3] shrink-0 group-hover:bg-[#0071e3] group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-[#1d1d1f] font-semibold text-[17px] mb-1 tracking-[-0.01em]">{item.title}</h4>
                      <p className="text-[#86868b] text-[15px] leading-[1.47] tracking-[-0.01em]">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="aspect-square rounded-[28px] bg-gradient-to-br from-[#f5f5f7] to-[#e8e8ed] p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent z-10"></div>
                <div className="w-full h-full rounded-[20px] bg-white flex flex-col justify-center items-center text-center relative z-20">
                  <div className="w-20 h-20 bg-[#f5f5f7] rounded-full flex items-center justify-center mb-6">
                    <Zap className="w-10 h-10 text-[#0071e3]" />
                  </div>
                  <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-2 tracking-[-0.02em]">Live Demo Portal</h3>
                  <p className="text-[#86868b] text-[15px] leading-relaxed max-w-[240px]">Experience the power of real-time education technology.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="bg-[#fbfbfd]">
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
