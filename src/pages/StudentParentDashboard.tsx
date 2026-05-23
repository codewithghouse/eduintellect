import type { ComponentType, ReactNode, CSSProperties } from 'react';
import { motion } from 'framer-motion';
import {
  Heart, BarChart3, Brain, Sparkles, Smile, FolderOpen,
  Activity, TrendingUp, Eye, Users, Target, BookOpen, Clock,
  Compass, ChevronRight, Layers, ShieldCheck, Award, Star,
} from 'lucide-react';
import ParentDashboardIPad from '../components/ipad/ParentDashboardIPad';
import ParentPerformanceIPad from '../components/ipad/ParentPerformanceIPad';
import ParentConceptStrengthsIPad from '../components/ipad/ParentConceptStrengthsIPad';
import ParentAIPracticeIPad from '../components/ipad/ParentAIPracticeIPad';
import ParentBehaviourIPad from '../components/ipad/ParentBehaviourIPad';
import ParentSyllabusIPad from '../components/ipad/ParentSyllabusIPad';
import { useSeo } from '../lib/useSeo';

/* ═══════════════════════════════════════════════════════════════════════
   PARENT DASHBOARD — APPLE-KEYNOTE-DEPTH ROLE PAGE
   ─────────────────────────────────────────────────────────────────────────
   Built for the engaged parent. Six acts, one per surface. Each one
   removes a reason to wait for the parent-teacher meeting.
   ════════════════════════════════════════════════════════════════════════ */

interface DecisionPillar {
  icon: ComponentType<{ className?: string; size?: number; strokeWidth?: number }>;
  title: string;
  body: string;
}

interface ImpactStat {
  value: string;
  label: string;
}

interface CalloutAnchor {
  text: string;
  Icon?: ComponentType<{ className?: string; size?: number; strokeWidth?: number }>;
  pos: CSSProperties;
  color?: string;
}

interface Act {
  ipad: ComponentType;
  number: string;
  eyebrow: string;
  headline: string;
  story: [string, string];
  callouts: CalloutAnchor[];
  pillars: [DecisionPillar, DecisionPillar, DecisionPillar];
  impact: [ImpactStat, ImpactStat];
  brand: string;
}

/* ─── 6 USP acts ─────────────────────────────────────────────────────── */

const ACTS: Act[] = [
  {
    ipad: ParentDashboardIPad,
    number: '01',
    eyebrow: 'Today, In One Tap',
    headline: 'Your child\'s day, before they get home.',
    story: [
      "Parents in 2026 ask their child the same three questions every evening — how was school, what did you do today, did you eat — and get the same three answers. Nothing structured, nothing actionable, no early signal.",
      "Edullent's Parent Connect ships a live one-screen read on the child — today's attendance, this week's marks, behaviour notes from teachers, AI practice streak — refreshed as the school day happens. Dinner conversation starts from specifics, not from a guess.",
    ],
    callouts: [
      { text: 'GPA · live', Icon: Activity, pos: { top: '12%', left: '-4%' }, color: '#10B981' },
      { text: 'Behaviour pings', Icon: Smile, pos: { top: '44%', right: '-5%' }, color: '#00C853' },
      { text: 'Today\'s AI summary', Icon: Sparkles, pos: { bottom: '14%', left: '42%' }, color: '#7c3aed' },
    ],
    pillars: [
      { icon: Activity, title: 'Live academic vitals', body: 'GPA, attendance, class rank — refreshed the moment the teacher marks attendance or enters a score. No more "ask at the PTM".' },
      { icon: Smile, title: 'Behaviour feed', body: 'Real teacher notes — positives and concerns — logged the day they happen. The parent sees the small wins, not just the disciplinary call.' },
      { icon: Sparkles, title: 'Daily AI summary', body: 'A one-paragraph read of how the child is tracking this week, written for the parent, not the teacher.' },
    ],
    impact: [
      { value: 'Daily', label: 'Visibility, vs the term-end report card' },
      { value: '60 sec', label: 'Sign-in to the full child snapshot' },
    ],
    brand: '#10B981',
  },
  {
    ipad: ParentPerformanceIPad,
    number: '02',
    eyebrow: 'Performance Analytics',
    headline: 'See exactly how the child is doing — every subject, every month.',
    story: [
      "The report card arrives twice a year. By the time the parent sees a 58 in Mathematics, the term is over, the syllabus has moved on, and the conversation with the teacher is past being useful.",
      "Edullent ships the same data as a live read. Per-subject grade, term average, trend direction, class rank — with progress bars against the class average and an AI narrative explaining where attention is needed. The parent knows by week 3 what they used to learn at month 6.",
    ],
    callouts: [
      { text: 'Per-subject trend', Icon: TrendingUp, pos: { top: '12%', left: '-4%' }, color: '#10B981' },
      { text: 'Vs class average', Icon: Target, pos: { top: '44%', right: '-4%' }, color: '#0055FF' },
      { text: 'AI · what to do', Icon: Sparkles, pos: { bottom: '14%', left: '40%' }, color: '#7c3aed' },
    ],
    pillars: [
      { icon: BarChart3, title: 'Hero stats strip', body: 'Grade · Class Average · Trend · Rank in one row. The parent gets the full read at a glance, every time they open the app.' },
      { icon: TrendingUp, title: '8-month trend chart', body: 'Per-subject trajectory smoothed across the academic year — the slope reveals improvement or slip long before the absolute number triggers concern.' },
      { icon: Sparkles, title: 'AI narrative + goals', body: 'Each report comes with a written explanation in parent-friendly language and a Goal Setter to close subject-level gaps.' },
    ],
    impact: [
      { value: '~6 months', label: 'Earlier than the term-end report card surfaces a slip' },
      { value: 'Per-subject', label: 'Granularity vs the average-score-only report' },
    ],
    brand: '#0055FF',
  },
  {
    ipad: ParentConceptStrengthsIPad,
    number: '03',
    eyebrow: 'Concept Strengths',
    headline: 'Stop guessing which topic is weak — see it.',
    story: [
      "When a child scores 62 in Science, the parent knows the headline but not the cause — was it the chapter on light, the chapter on cells, or both. Tutoring decisions are made on guesswork.",
      "Edullent scores mastery topic by topic. Three colour-coded buckets — strong, developing, focus — with the underlying concepts named. The parent stops paying for full-subject tuition when only three topics need work.",
    ],
    callouts: [
      { text: 'Topic-level mastery', Icon: Brain, pos: { top: '10%', left: '-4%' }, color: '#0055FF' },
      { text: '3-bucket bands', Icon: Layers, pos: { top: '44%', right: '-5%' }, color: '#FB923C' },
      { text: 'AI · pacing read', Icon: Sparkles, pos: { bottom: '14%', left: '42%' }, color: '#7c3aed' },
    ],
    pillars: [
      { icon: Brain, title: 'Per-topic %', body: 'Every chapter broken into named topics, scored 0–100 — the parent finally sees which three topics need home revision, not the whole textbook.' },
      { icon: Layers, title: '3 colour-coded bands', body: 'Strong · Developing · Focus. The grid surfaces the gap visually — a 6-year-old\'s parent and a 14-year-old\'s parent both get it instantly.' },
      { icon: Sparkles, title: 'Pacing-risk AI', body: 'Warns when the school is moving ahead of the child\'s current grasp on basics — so the parent can flag it before the next unit lands.' },
    ],
    impact: [
      { value: 'Topic-level', label: 'Diagnosis vs subject-level guessing' },
      { value: 'Decision-grade', label: 'Read on whether tuition is needed at all' },
    ],
    brand: '#0055FF',
  },
  {
    ipad: ParentAIPracticeIPad,
    number: '04',
    eyebrow: 'AI Practice',
    headline: 'Daily practice on the topics the child actually needs.',
    story: [
      "Practice books at home solve a generic problem the publisher decided. The child practises chapters they already understand and skips the ones that confuse them — the opposite of what should happen.",
      "Edullent's AI Practice generates fresh sets every 24 hours, targeting the topics where the child is weakest — pulled from their actual textbook, in the school's language. Streak tracking, heatmap, per-attempt scoring. Practice becomes targeted, daily and short — not optional, weekly and long.",
    ],
    callouts: [
      { text: 'Streak · 24h refresh', Icon: Clock, pos: { top: '10%', left: '-4%' }, color: '#FB923C' },
      { text: '6-week heatmap', Icon: BarChart3, pos: { top: '44%', right: '-5%' }, color: '#0055FF' },
      { text: 'Source PDF in', Icon: BookOpen, pos: { bottom: '14%', left: '40%' }, color: '#7c3aed' },
    ],
    pillars: [
      { icon: Clock, title: 'Daily streak', body: 'A practice streak counter with avg score and topics covered — short daily reps beat long weekend sessions, and the streak makes it a habit.' },
      { icon: BarChart3, title: '6-week heatmap', body: 'GitHub-style intensity grid — the parent sees engagement consistency at a glance, and the child gets the satisfaction of a filled grid.' },
      { icon: BookOpen, title: 'Source-grounded', body: 'Sets are generated from the child\'s actual textbook PDFs — the questions match what the teacher will set, not a generic publisher\'s.' },
    ],
    impact: [
      { value: '24h', label: 'Refresh cadence on practice content' },
      { value: 'Topic-targeted', label: 'Every set lands on the weakest 3 topics' },
    ],
    brand: '#FB923C',
  },
  {
    ipad: ParentBehaviourIPad,
    number: '05',
    eyebrow: 'Behaviour & Discipline',
    headline: 'No more parent-teacher meeting surprises.',
    story: [
      "Behaviour at school used to surface in two ways — the disciplinary call (always negative) and the year-book photo (always positive). The mile of normal behaviour in between went unrecorded.",
      "Edullent logs teacher observations the day they happen — positives, concerns, incidents. A 5-star rating across conduct, punctuality, respect and participation, with a 6-month trend. The parent walks into PTM informed, with examples — not as a defence lawyer.",
    ],
    callouts: [
      { text: '5-star · 4 axes', Icon: Star, pos: { top: '12%', left: '-4%' }, color: '#00C853' },
      { text: 'Positive vs concern', Icon: Smile, pos: { top: '44%', right: '-5%' }, color: '#10B981' },
      { text: '6-month trend', Icon: TrendingUp, pos: { bottom: '14%', left: '40%' }, color: '#0055FF' },
    ],
    pillars: [
      { icon: Star, title: '5-star composite', body: 'Overall behaviour rating + sub-metrics — conduct, punctuality, respect, participation — each tracked separately for honest reads.' },
      { icon: Smile, title: 'Positive Highlights', body: 'Teachers log the small wins — helped a classmate, raised a thoughtful question, finished a difficult assignment — and the parent sees them daily.' },
      { icon: TrendingUp, title: '6-month trend', body: 'Behaviour rated weekly and charted across half the year — the slope makes pattern shifts obvious before they become incidents.' },
    ],
    impact: [
      { value: 'Same-day', label: 'Visibility on teacher observations' },
      { value: '2×2 grid', label: 'Per-axis trend, not a single feel-good number' },
    ],
    brand: '#00C853',
  },
  {
    ipad: ParentSyllabusIPad,
    number: '06',
    eyebrow: 'Class Documents',
    headline: 'Every syllabus, note and worksheet — in one place.',
    story: [
      "The class WhatsApp group is where school documents go to die. Syllabus PDFs scroll past, worksheets get lost between vacation photos, and the parent is back asking the teacher for the same file in week 3.",
      "Edullent ships a searchable, filterable document library — syllabus, notes, worksheets — auto-organised by subject, date and uploading teacher. NEW badges on recent uploads, one-tap view and download. The class group goes back to being a class group.",
    ],
    callouts: [
      { text: 'File-type filter', Icon: Layers, pos: { top: '12%', left: '-4%' }, color: '#0055FF' },
      { text: '"NEW" · 3-day window', Icon: Sparkles, pos: { top: '46%', right: '-5%' }, color: '#FB923C' },
      { text: 'View / Download', Icon: Eye, pos: { bottom: '14%', left: '42%' }, color: '#00C853' },
    ],
    pillars: [
      { icon: FolderOpen, title: 'Searchable library', body: 'Every PDF, doc, sheet, image — searchable by name, filterable by type. The week-3 panic of "where was that worksheet" disappears.' },
      { icon: Layers, title: 'Auto-organised', body: 'By subject, by date, by uploading teacher — no parent has to maintain folders, ever. The school\'s structure becomes the parent\'s structure.' },
      { icon: ShieldCheck, title: 'Durable record', body: 'Documents stay available the full year — not for 7 days like a WhatsApp media auto-expiry. The syllabus from term 1 is still there in term 3.' },
    ],
    impact: [
      { value: 'Permanent', label: 'Document availability, vs WhatsApp\'s 7-day expiry' },
      { value: '1 tap', label: 'From parent to View / Download' },
    ],
    brand: '#0055FF',
  },
];

/* ─── Mockup with anchored Apple-keynote callouts ─────────────────────── */

const MockupWithCallouts = ({
  Ipad,
  callouts,
}: {
  Ipad: ComponentType;
  callouts: CalloutAnchor[];
}) => (
  <div className="relative w-full">
    <Ipad />
    {callouts.map((c, i) => {
      const Icon = c.Icon;
      const color = c.color || '#0055FF';
      return (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{
            delay: 0.25 + i * 0.18,
            duration: 0.55,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ position: 'absolute', ...c.pos, zIndex: 30, pointerEvents: 'none' }}
          className="hidden md:flex items-center gap-2 px-3.5 py-2 rounded-full bg-white shadow-[0_8px_24px_rgba(15,23,42,0.10),0_0_0_0.5px_rgba(15,23,42,0.06)]"
        >
          <span aria-hidden className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
          {Icon && <Icon size={13} strokeWidth={2.2} style={{ color } as CSSProperties} />}
          <span className="text-[12px] font-medium tracking-[-0.005em] whitespace-nowrap" style={{ color: '#1d1d1f' }}>
            {c.text}
          </span>
        </motion.div>
      );
    })}
  </div>
);

const PillarTile = ({ pillar, brand, delay }: { pillar: DecisionPillar; brand: string; delay: number }) => {
  const Icon = pillar.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-15% 0px' }}
      transition={{ delay, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[20px] border border-[#0055FF]/10 bg-white p-6 md:p-7 shadow-[0_2px_10px_rgba(15,23,42,0.04)]"
    >
      <div
        className="w-11 h-11 rounded-[12px] flex items-center justify-center mb-5"
        style={{ background: `${brand}14`, color: brand }}
      >
        <Icon size={20} strokeWidth={2.1} />
      </div>
      <h4 className="text-[#1d1d1f] text-[18px] font-semibold leading-[1.2] tracking-[-0.015em] mb-2.5">
        {pillar.title}
      </h4>
      <p className="text-[#86868b] text-[14px] leading-[1.55] tracking-[0.005em]">{pillar.body}</p>
    </motion.div>
  );
};

const ImpactRow = ({ stats, brand }: { stats: [ImpactStat, ImpactStat]; brand: string }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 mt-14 md:mt-16 max-w-[820px] mx-auto">
    {stats.map((s, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-15% 0px' }}
        transition={{ delay: 0.1 + i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center sm:text-left"
      >
        <div
          className="text-[44px] md:text-[56px] font-semibold leading-[1] tracking-[-0.035em] mb-3"
          style={{ color: brand }}
        >
          {s.value}
        </div>
        <p className="text-[#86868b] text-[14px] md:text-[15px] leading-[1.45] tracking-[0.005em] max-w-[320px] mx-auto sm:mx-0">
          {s.label}
        </p>
      </motion.div>
    ))}
  </div>
);

const KeynoteAct = ({ act }: { act: Act }): ReactNode => (
  <section className="relative py-24 md:py-36 first:pt-12">
    <div className="max-w-[1240px] mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-15% 0px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-3 mb-5"
      >
        <span
          className="text-[12px] font-medium tabular-nums tracking-[0.1em] px-2.5 py-1 rounded-md"
          style={{ background: `${act.brand}14`, color: act.brand }}
        >
          {act.number}
        </span>
        <span className="text-[13px] font-medium tracking-[-0.005em]" style={{ color: act.brand }}>
          {act.eyebrow}
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-15% 0px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-[#1d1d1f] text-[40px] md:text-[60px] lg:text-[72px] font-semibold leading-[1.04] tracking-[-0.035em] mb-10 max-w-[920px]"
      >
        {act.headline}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-15% 0px' }}
        transition={{ delay: 0.15, duration: 0.7 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 max-w-[1100px] mb-16 md:mb-20"
      >
        <p className="text-[#1d1d1f] text-[17px] md:text-[19px] leading-[1.5] tracking-[0.005em] font-light">
          {act.story[0]}
        </p>
        <p className="text-[#1d1d1f] text-[17px] md:text-[19px] leading-[1.5] tracking-[0.005em] font-light">
          {act.story[1]}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-[1100px] mx-auto"
      >
        <MockupWithCallouts Ipad={act.ipad} callouts={act.callouts} />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mt-16 md:mt-20 max-w-[1240px] mx-auto">
        {act.pillars.map((p, i) => (
          <PillarTile key={p.title} pillar={p} brand={act.brand} delay={0.05 + i * 0.1} />
        ))}
      </div>

      <ImpactRow stats={act.impact} brand={act.brand} />
    </div>

    <div
      aria-hidden
      className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[140px] h-px"
      style={{ background: 'linear-gradient(90deg, transparent, rgba(15,23,42,0.08), transparent)' }}
    />
  </section>
);

const StudentParentDashboard = () => {
  useSeo({
    title: 'Parent Dashboard – Edullent',
    description:
      'Your child\'s school day, in one tap. Live performance, concept-level mastery, AI practice, behaviour notes from teachers, and the class document library — built for the engaged parent.',
    canonical: 'https://edullent.com/parent',
  });
  return (
    <div className="min-h-screen pt-28 pb-12 bg-white">
      <div className="max-w-[1240px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-[13px] bg-[#10B981] flex items-center justify-center text-white shadow-[0_6px_18px_rgba(16,185,129,0.32)]">
              <Heart className="w-[22px] h-[22px]" strokeWidth={2.1} />
            </div>
            <p className="text-[#10B981] text-[14px] font-medium tracking-[-0.005em]">
              For the Engaged Parent
            </p>
          </div>

          <h1 className="text-[#1d1d1f] text-[44px] md:text-[64px] lg:text-[80px] font-semibold leading-[1.02] tracking-[-0.04em] mb-6 max-w-[1000px]">
            The Parent Dashboard.
            <br />
            <span className="text-[#86868b] font-light">Your child&apos;s world. One app.</span>
          </h1>

          <p className="text-[#1d1d1f] text-[18px] md:text-[21px] max-w-[760px] leading-[1.45] tracking-[0.005em] font-light mb-4">
            Six surfaces. Six daily decisions. Every signal a school day produces — academics, mastery, practice, behaviour, documents — composed into one parent-side read that ships the moment it happens.
          </p>
          <p className="text-[#86868b] text-[15px] md:text-[16px] max-w-[680px] leading-[1.5] tracking-[0.005em]">
            Scroll the keynote — one act per surface, one decision per act.
          </p>
        </motion.div>
      </div>

      <div className="mt-12 md:mt-20">
        {ACTS.map((act) => (
          <KeynoteAct key={act.number} act={act} />
        ))}
      </div>

      <section className="py-28 md:py-36 bg-[#fbfbfd]">
        <div className="max-w-[920px] mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15% 0px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#1d1d1f] text-[34px] md:text-[52px] font-semibold leading-[1.06] tracking-[-0.03em] mb-6"
          >
            The parents who&apos;ll raise the next generation
            <br />
            won&apos;t wait for parent-teacher meetings.
            <span className="bg-gradient-to-r from-[#10B981] to-[#0055FF] bg-clip-text text-transparent">
              {' '}They&apos;ll know already.
            </span>
          </motion.h2>
          <p className="text-[#86868b] text-[16px] md:text-[18px] leading-[1.5] tracking-[0.005em] mb-9 max-w-[600px] mx-auto">
            Edullent ships one screen, one truth, one move every day. Dinner-table conversations move from guess to specifics — for the rest of the school year.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#10B981] hover:bg-[#0e9d6c] text-white text-[16px] font-medium px-7 py-3.5 rounded-full shadow-[0_10px_30px_-8px_rgba(16,185,129,0.5)] transition-colors"
          >
            Book a Demo
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default StudentParentDashboard;
