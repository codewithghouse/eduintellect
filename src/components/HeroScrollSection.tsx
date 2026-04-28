import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  Bell,
  GraduationCap,
  Users,
  TrendingUp,
  BarChart3,
  CheckCircle2,
  Brain,
  ShieldCheck,
  LineChart,
} from 'lucide-react';

/**
 * Scroll choreography (drives every motion value below):
 *   0.00 – 0.18   →  Hero copy + small laptop visible
 *   0.18 – 0.42   →  Laptop scales 1 → 5.2 (camera moves into the screen)
 *   0.42 – 0.62   →  We're "inside" — fullscreen content takes over
 *   0.62 – 0.85   →  Laptop scales back 5.2 → 1 (we exit)
 *   0.85 – 1.00   →  Laptop normal again, hands off to next section
 */
const HeroScrollSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Hero copy fades + lifts + blurs
  const heroY = useTransform(scrollYProgress, [0, 0.18], [0, -120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroBlur = useTransform(
    scrollYProgress,
    [0, 0.18],
    ['blur(0px)', 'blur(10px)'],
  );

  // Laptop: 1 → 5.2 → 1   (zoom in, hold, zoom out)
  const laptopScale = useTransform(
    scrollYProgress,
    [0, 0.18, 0.42, 0.62, 0.85, 1],
    [1, 1, 5.2, 5.2, 1, 1],
  );
  const laptopY = useTransform(scrollYProgress, [0, 0.15], [40, 0]);

  // Dashboard inside the laptop fades out as we plunge into the screen
  const dashOpacity = useTransform(scrollYProgress, [0.28, 0.42], [1, 0]);
  const dashBlur = useTransform(
    scrollYProgress,
    [0.28, 0.42],
    ['blur(0px)', 'blur(6px)'],
  );

  // Fullscreen "inside" content: cross-fades with the dashboard at peak zoom
  const insideOpacity = useTransform(
    scrollYProgress,
    [0.4, 0.5, 0.6, 0.7],
    [0, 1, 1, 0],
  );
  const insideScale = useTransform(
    scrollYProgress,
    [0.4, 0.5, 0.6, 0.7],
    [1.08, 1, 1, 1.04],
  );
  const insideContentY = useTransform(
    scrollYProgress,
    [0.4, 0.7],
    [60, -60],
  );

  // Dark backdrop while we're "inside" the screen
  const insideBgOpacity = useTransform(
    scrollYProgress,
    [0.38, 0.48, 0.62, 0.72],
    [0, 1, 1, 0],
  );

  // Parallax background blobs (slow), dim while inside
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const bgOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.55, 0.75, 1],
    [1, 0.5, 0.2, 0.5, 1],
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-[460vh] bg-[#fbfbfd]"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Parallax decorative background */}
        <motion.div
          aria-hidden
          style={{ y: bgY, opacity: bgOpacity }}
          className="absolute inset-0 -z-10 pointer-events-none"
        >
          <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-gradient-to-br from-[#0071e3]/[0.10] via-[#003ECC]/[0.04] to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#0071e3]/[0.07] to-transparent rounded-full blur-3xl" />
          <div className="absolute top-[40%] right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#1166FF]/[0.06] to-transparent rounded-full blur-3xl" />
        </motion.div>

        {/* Hero copy — sits above the laptop, fades up on enter */}
        <motion.div
          style={{
            y: heroY,
            opacity: heroOpacity,
            filter: heroBlur,
          }}
          className="absolute top-[10%] md:top-[12%] left-1/2 -translate-x-1/2 z-20 px-6 text-center max-w-[920px] w-full"
        >
          <p className="inline-flex items-center gap-2 text-[#0071e3] text-[14px] md:text-[15px] font-semibold mb-4 tracking-[-0.01em]">
            <Sparkles className="w-4 h-4" /> Built for the next decade of education
          </p>
          <h2 className="text-[36px] md:text-[58px] lg:text-[72px] font-semibold text-[#1d1d1f] leading-[1.04] tracking-[-0.04em] mb-4">
            One dashboard.{' '}
            <span className="gradient-text">Every insight.</span>
          </h2>
          <p className="text-[#86868b] text-[16px] md:text-[19px] max-w-[600px] mx-auto leading-[1.45] mb-7 tracking-[0.011em]">
            Scroll down — step inside the platform.
          </p>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 bg-[#0071e3] hover:bg-[#0077ed] text-white text-[16px] font-medium px-6 py-2.5 rounded-full shadow-[0_10px_40px_-10px_rgba(0,113,227,0.55)] transition-all duration-300"
          >
            Try the live demo <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Laptop — scales 1 → 5.2 → 1 around viewport center */}
        <motion.div
          style={{
            scale: laptopScale,
            y: laptopY,
          }}
          className="relative z-10 w-[94vw] max-w-[1100px] origin-center"
        >
          <LaptopFrame>
            {/* Dashboard fades + blurs as we zoom into the screen */}
            <motion.div
              style={{ opacity: dashOpacity, filter: dashBlur }}
              className="absolute inset-0 will-change-transform"
            >
              <DashboardUI />
            </motion.div>
          </LaptopFrame>
        </motion.div>

        {/* "Inside the screen" — dark backdrop while we're in there */}
        <motion.div
          aria-hidden
          style={{ opacity: insideBgOpacity }}
          className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-br from-[#0a0a0f] via-[#0f1424] to-[#1a0b2e]"
        />

        {/* "Inside the screen" — fullscreen content */}
        <motion.div
          style={{
            opacity: insideOpacity,
            scale: insideScale,
          }}
          className="absolute inset-0 z-40 flex items-center justify-center px-6 pointer-events-none"
        >
          <motion.div
            style={{ y: insideContentY }}
            className="text-center max-w-[1100px] w-full"
          >
            <InsideContent />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

/* -------------------- Laptop frame (CSS, no external image) -------------------- */
const LaptopFrame = ({ children }: { children: React.ReactNode }) => (
  <div className="relative w-full select-none">
    {/* Lid / screen */}
    <div className="relative mx-auto w-full aspect-[16/10] rounded-t-[20px] bg-[#1d1d1f] p-[10px] md:p-[12px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.45)]">
      <div className="absolute inset-x-0 top-[3px] flex justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-[#3b3b3d]" />
      </div>
      <div className="relative w-full h-full rounded-[10px] overflow-hidden bg-white">
        {children}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.04] to-white/[0.10]" />
      </div>
    </div>

    {/* Hinge / base */}
    <div className="relative mx-auto" style={{ width: '108%', marginLeft: '-4%' }}>
      <div className="h-[14px] bg-gradient-to-b from-[#cfcfd4] via-[#a9a9af] to-[#7d7d83] rounded-b-[14px] shadow-[0_18px_30px_-12px_rgba(0,0,0,0.35)]" />
      <div className="mx-auto w-[120px] h-[6px] -mt-[1px] rounded-b-[6px] bg-[#86868b]/60" />
    </div>
  </div>
);

/* -------------------- Inside-the-screen full-bleed content -------------------- */
const InsideContent = () => {
  const cards = [
    {
      icon: <Brain className="w-5 h-5" />,
      title: 'AI that thinks ahead',
      desc: 'Predicts attendance dips, flags at-risk students before they fall behind.',
    },
    {
      icon: <LineChart className="w-5 h-5" />,
      title: 'Live performance graphs',
      desc: 'Class, grade and school KPIs update the moment data lands.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: 'Enterprise-grade safety',
      desc: 'Encrypted Firebase backend with role-based access for every portal.',
    },
  ];

  return (
    <div className="text-white">
      <p className="inline-flex items-center gap-2 text-[#7aa9ff] text-[13px] md:text-[14px] font-semibold mb-4 tracking-[-0.01em]">
        <Sparkles className="w-4 h-4" /> Inside EduIntellect
      </p>
      <h3 className="text-[34px] md:text-[56px] lg:text-[68px] font-semibold leading-[1.04] tracking-[-0.04em] mb-5">
        Step inside the{' '}
        <span className="bg-gradient-to-r from-[#7aa9ff] via-[#c084fc] to-[#f0abfc] bg-clip-text text-transparent">
          future of school ops.
        </span>
      </h3>
      <p className="text-white/70 text-[15px] md:text-[18px] max-w-[640px] mx-auto leading-[1.5] mb-10 md:mb-14">
        One intelligent layer over your entire institution — owners, principals,
        teachers and parents, all in sync.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 max-w-[960px] mx-auto">
        {cards.map((c) => (
          <div
            key={c.title}
            className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-5 md:p-6 text-left"
          >
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#7aa9ff] mb-3">
              {c.icon}
            </div>
            <div className="font-semibold text-[15px] md:text-[16px] mb-1.5 tracking-[-0.01em]">
              {c.title}
            </div>
            <div className="text-white/60 text-[13px] md:text-[14px] leading-snug">
              {c.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* -------------------- Default dashboard UI in the laptop screen -------------------- */
const DashboardUI = () => (
  <div className="w-full h-full bg-gradient-to-br from-[#fafafd] via-white to-[#f4f4f7] p-3 md:p-5">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-[#0071e3] flex items-center justify-center">
          <GraduationCap className="w-4 h-4 text-white" />
        </div>
        <span className="font-semibold text-[#1d1d1f] text-[13px] md:text-[14px]">
          EduIntellect
        </span>
        <span className="hidden md:inline text-[12px] text-[#86868b] ml-1">
          / Principal Dashboard
        </span>
      </div>
      <div className="flex items-center gap-3">
        <Bell className="w-4 h-4 text-[#86868b]" />
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#0071e3] to-[#1166FF]" />
      </div>
    </div>

    <div className="grid grid-cols-4 gap-2 md:gap-3 mb-3 md:mb-4">
      {[
        { icon: <Users className="w-3.5 h-3.5" />, label: 'Students', value: '1,284' },
        { icon: <TrendingUp className="w-3.5 h-3.5" />, label: 'Attendance', value: '96.4%' },
        { icon: <BarChart3 className="w-3.5 h-3.5" />, label: 'Avg. Score', value: '82.1' },
        { icon: <CheckCircle2 className="w-3.5 h-3.5" />, label: 'Tasks Done', value: '347' },
      ].map((c) => (
        <div
          key={c.label}
          className="bg-white rounded-xl border border-[#e8e8ed] p-2.5 md:p-3"
        >
          <div className="flex items-center gap-1.5 text-[#86868b] text-[10px] md:text-[11px] mb-1">
            {c.icon}
            <span>{c.label}</span>
          </div>
          <div className="text-[#1d1d1f] font-semibold text-[15px] md:text-[18px] tracking-[-0.02em]">
            {c.value}
          </div>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-3 gap-2 md:gap-3 mb-3 md:mb-4">
      <div className="col-span-2 bg-white rounded-xl border border-[#e8e8ed] p-3 md:p-4">
        <div className="flex items-center justify-between mb-2 md:mb-3">
          <span className="text-[11px] md:text-[13px] font-semibold text-[#1d1d1f]">
            Performance trend
          </span>
          <span className="text-[10px] md:text-[11px] text-[#86868b]">Last 30 days</span>
        </div>
        <svg viewBox="0 0 300 90" className="w-full h-[70px] md:h-[90px]">
          <defs>
            <linearGradient id="gline" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0071e3" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#0071e3" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 70 L25 60 L50 64 L75 50 L100 55 L125 38 L150 42 L175 30 L200 33 L225 22 L250 26 L275 14 L300 18 L300 90 L0 90 Z"
            fill="url(#gline)"
          />
          <path
            d="M0 70 L25 60 L50 64 L75 50 L100 55 L125 38 L150 42 L175 30 L200 33 L225 22 L250 26 L275 14 L300 18"
            fill="none"
            stroke="#0071e3"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="bg-white rounded-xl border border-[#e8e8ed] p-3 md:p-4">
        <div className="text-[11px] md:text-[13px] font-semibold text-[#1d1d1f] mb-2">
          AI alerts
        </div>
        <ul className="space-y-2">
          {[
            'Class 8B attendance dipped 6%',
            '3 students at retention risk',
            'Math scores up 12% vs. last term',
          ].map((t) => (
            <li
              key={t}
              className="text-[10px] md:text-[11px] text-[#86868b] leading-snug flex gap-1.5"
            >
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#0071e3] shrink-0" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="bg-white rounded-xl border border-[#e8e8ed] p-3 md:p-4">
      <div className="text-[11px] md:text-[13px] font-semibold text-[#1d1d1f] mb-2">
        Recent activity
      </div>
      <div className="divide-y divide-[#f0f0f3]">
        {[
          { name: 'Aarav Sharma', action: 'submitted Physics test', meta: '2m ago' },
          { name: 'Diya Patel', action: 'marked present (period 4)', meta: '6m ago' },
          { name: 'Ms. Iyer', action: 'posted assignment to 9A', meta: '11m ago' },
        ].map((row) => (
          <div
            key={row.name + row.meta}
            className="flex items-center justify-between py-1.5 md:py-2"
          >
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-br from-[#0071e3] to-[#1166FF]" />
              <div className="text-[10px] md:text-[12px] text-[#1d1d1f]">
                <span className="font-medium">{row.name}</span>{' '}
                <span className="text-[#86868b]">{row.action}</span>
              </div>
            </div>
            <span className="text-[10px] md:text-[11px] text-[#86868b]">{row.meta}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default HeroScrollSection;
