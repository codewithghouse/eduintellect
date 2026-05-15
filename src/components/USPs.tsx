import { motion } from 'framer-motion';
import {
  ShieldAlert,
  Layers,
  FileText,
  BookOpen,
  UserCircle2,
  Users,
  Network,
  Rocket,
  Sparkles,
} from 'lucide-react';
import type { ReactNode } from 'react';

interface USP {
  eyebrow: string;
  headline: string;
  body: string;
  icon: ReactNode;
  accent: string;
  accentBg: string;
}

const USPS: USP[] = [
  {
    eyebrow: 'Risk Detection',
    headline: 'Spot the risk. Get the fix.',
    body:
      'Edullent detects struggling students early and tells you exactly what to do — parent meeting, tutorial reassignment, weekly follow-up. The system doesn’t point at the problem. It hands you the solution.',
    icon: <ShieldAlert className="w-6 h-6" />,
    accent: '#FF3B30',
    accentBg: '#FFE9E7',
  },
  {
    eyebrow: 'Branch Comparison',
    headline: 'Every campus on one screen.',
    body:
      'Profitability, academics, fee health, teacher productivity, attendance — live, side by side. For the first time, leadership sees the full group honestly.',
    icon: <Layers className="w-6 h-6" />,
    accent: '#0071e3',
    accentBg: '#E5F0FF',
  },
  {
    eyebrow: 'AI Exam Generator',
    headline: 'Papers in minutes. Marks in days.',
    body:
      'Edullent generates balanced, exam-ready papers from the chapters you choose — and helps correct them after. Every teacher gets four to five hours back, every week. Teachers are free to teach again.',
    icon: <FileText className="w-6 h-6" />,
    accent: '#34C759',
    accentBg: '#E5F8EB',
  },
  {
    eyebrow: 'AI Lesson Planner',
    headline: 'Preparation, not exhaustion.',
    body:
      'Structured lesson plans for every chapter — objectives, activities, examples, assessments. Editable, syllabus-aligned. The teacher walks into class prepared, calm and confident.',
    icon: <BookOpen className="w-6 h-6" />,
    accent: '#AF52DE',
    accentBg: '#F2EBFF',
  },
  {
    eyebrow: 'Student Profile',
    headline: 'The strongest admission tool a school can have.',
    body:
      'Every student gets a deep, multi-dimensional profile — academics, attendance, behaviour, career direction, weekly progress, remedial paths, parent feedback. Open the dashboard in an admission meeting and parents stop negotiating. They close.',
    icon: <UserCircle2 className="w-6 h-6" />,
    accent: '#FF9500',
    accentBg: '#FFF4E0',
  },
  {
    eyebrow: 'Parent Engagement Suite',
    headline: 'Your school’s brand, every Monday morning.',
    body:
      'Career projection, AI weekly summary, AI tutor, doubt solver, attendance trend, fee status and direct teacher feedback. Every Monday, the parent sees what the school has been doing for their child all week.',
    icon: <Users className="w-6 h-6" />,
    accent: '#FF2D92',
    accentBg: '#FFE7F2',
  },
  {
    eyebrow: 'Four Dashboards. One Brain.',
    headline: 'One school. One source of truth.',
    body:
      'Owner, Principal, Teacher and Parent — four separate dashboards built on one shared database. A mark a teacher enters reaches the parent without anyone forwarding it. A decision the owner takes is visible to every principal instantly.',
    icon: <Network className="w-6 h-6" />,
    accent: '#5856D6',
    accentBg: '#ECEBFB',
  },
  {
    eyebrow: 'Built to Scale',
    headline: 'Live in days, not quarters.',
    body:
      'Register the school in two minutes, add branches, invite teachers by email, import students from an Excel sheet. Whether the group has one campus today or thirty next year, the architecture holds — tenant isolation, security and branch-level data separation built in from day one.',
    icon: <Rocket className="w-6 h-6" />,
    accent: '#00C7BE',
    accentBg: '#DEF7F5',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 },
  }),
};

const USPs = () => (
  <section id="usps" className="py-24 md:py-32 bg-[#fbfbfd] relative overflow-hidden">
    <div className="max-w-[1200px] mx-auto px-6">
      {/* Section header */}
      <div className="text-center mb-16 md:mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0071e3]/8 text-[#0071e3] text-[12px] font-medium mb-5 tracking-[0.06em] uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          What makes Edullent different
        </div>
        <h2 className="text-[40px] md:text-[56px] font-light text-[#1d1d1f] leading-[1.05] tracking-[-0.035em] mb-5">
          Other school software stores.
          <br />
          <span className="text-[#0071e3]">Edullent thinks.</span>
        </h2>
        <p className="text-[#86868b] text-[19px] font-light max-w-[680px] mx-auto leading-[1.47] tracking-[0.011em]">
          Eight reasons leadership teams, principals, teachers and parents trust Edullent
          as the intelligence layer for their school.
        </p>
      </div>

      {/* USP grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {USPS.map((usp, i) => (
          <motion.div
            key={usp.eyebrow}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-10% 0px' }}
            variants={fadeUp}
            custom={i}
            className="group relative bg-white rounded-[22px] p-7 md:p-9 transition-all duration-500 hover:-translate-y-1"
            style={{
              border: '0.5px solid rgba(0,0,0,0.08)',
              boxShadow:
                '0 1px 2px rgba(0,0,0,0.02), 0 12px 28px -10px rgba(0,0,0,0.06)',
            }}
          >
            {/* Accent stripe */}
            <div
              className="absolute top-0 left-7 md:left-9 right-7 md:right-9 h-[3px] rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: usp.accent }}
            />

            {/* Icon */}
            <div
              className="flex items-center justify-center rounded-[14px] mb-5"
              style={{
                width: 52,
                height: 52,
                background: usp.accentBg,
                color: usp.accent,
                boxShadow: `0 6px 18px ${usp.accent}22`,
              }}
            >
              {usp.icon}
            </div>

            {/* Eyebrow */}
            <p
              className="text-[11px] font-medium tracking-[0.16em] uppercase mb-2"
              style={{ color: usp.accent }}
            >
              {usp.eyebrow}
            </p>

            {/* Headline */}
            <h3 className="text-[24px] md:text-[26px] font-normal text-[#1d1d1f] leading-[1.18] tracking-[-0.02em] mb-3">
              {usp.headline}
            </h3>

            {/* Body */}
            <p className="text-[15px] md:text-[15.5px] font-normal text-[#424245] leading-[1.55] tracking-[0.005em]">
              {usp.body}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Coming-next pill */}
      <div className="mt-14 md:mt-16 text-center">
        <div
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white"
          style={{
            border: '0.5px solid rgba(0,0,0,0.08)',
            boxShadow: '0 8px 22px -10px rgba(0,113,227,0.18)',
          }}
        >
          <span
            className="text-[10px] font-medium tracking-[0.16em] uppercase px-2 py-0.5 rounded-full text-white"
            style={{ background: 'linear-gradient(135deg, #0071e3, #5856D6)' }}
          >
            Coming next
          </span>
          <span className="text-[13.5px] font-normal text-[#1d1d1f]">
            <strong className="font-medium">Pre-Result Predictor</strong> — predict how the class
            will perform <em>before</em> the exam, and fix what matters while there is still time.
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default USPs;
