import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ['Genius', 'Maestro', 'Strategist', 'Pro'],
    [],
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((n) => (n === titles.length - 1 ? 0 : n + 1));
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  const longest = titles.reduce((a, b) => (a.length > b.length ? a : b));

  return (
    <section className="relative pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-[#fbfbfd]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-[#0071e3]/[0.04] via-transparent to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[980px] mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#0071e3] text-[17px] md:text-[21px] font-normal mb-3 tracking-[-0.01em]"
          >
            The future of school management.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[48px] md:text-[64px] lg:text-[80px] font-normal text-[#1d1d1f] leading-[1.05] tracking-[-0.035em] mb-6"
          >
            <span className="block">Manage Your School.</span>
            <span className="block">
              Like a{' '}
              <span className="relative inline-block overflow-hidden align-bottom leading-[1.05]">
                <span aria-hidden className="invisible">
                  {longest}
                </span>
                {titles.map((title, index) => (
                  <motion.span
                    key={title}
                    className="absolute left-0 right-0 text-center gradient-text font-semibold"
                    initial={{ opacity: 0, y: '-100%' }}
                    transition={{ type: 'spring', stiffness: 50, damping: 12 }}
                    animate={
                      titleNumber === index
                        ? { y: '0%', opacity: 1 }
                        : {
                            y: titleNumber > index ? '-150%' : '150%',
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
              <span className="text-[#1d1d1f]">.</span>
            </span>
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
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#0071e3] hover:bg-[#0077ed] text-white text-[17px] font-normal px-8 py-3 rounded-full transition-all duration-300"
            >
              Book a Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-14 md:mt-16 w-full max-w-[640px]"
          >
            <div className="text-[11px] md:text-[12px] uppercase tracking-[0.16em] text-[#86868b] mb-2.5">
              From the team
            </div>
            <Link
              to="/articles"
              className="group block rounded-[18px] border border-[#e5e5ea] bg-white px-5 py-4 md:px-6 md:py-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-14px_rgba(0,0,0,0.08)] hover:border-[#0071e3]/30"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-11 md:h-11 rounded-[12px] bg-[#0071e3]/10 flex items-center justify-center text-[#0071e3] shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div className="text-left flex-1 min-w-0">
                  <div className="text-[15.5px] md:text-[17px] font-medium text-[#1d1d1f] tracking-[-0.005em] group-hover:text-[#0071e3] transition-colors">
                    Notes from inside the platform.
                  </div>
                  <div className="text-[12.5px] md:text-[13.5px] text-[#86868b] leading-[1.45] mt-0.5">
                    Field reports, product updates and ideas on running modern schools.
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#86868b] group-hover:text-[#0071e3] group-hover:translate-x-0.5 transition-all shrink-0" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
