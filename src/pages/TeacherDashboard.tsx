import type { ComponentType, ReactNode, CSSProperties } from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap, FileText, BookOpen, FlaskConical, Brain, AlertTriangle,
  Activity, TrendingUp, Eye, Users, Target, Sparkles, Clock,
  Compass, ChevronRight, Layers, ShieldCheck, Award,
} from 'lucide-react';
import TeacherPerformanceIPad from '../components/ipad/TeacherPerformanceIPad';
import TeacherConceptMasteryIPad from '../components/ipad/TeacherConceptMasteryIPad';
import TeacherLessonPlannerIPad from '../components/ipad/TeacherLessonPlannerIPad';
import TeacherExamGeneratorIPad from '../components/ipad/TeacherExamGeneratorIPad';
import TeacherSummarizeLessonIPad from '../components/ipad/TeacherSummarizeLessonIPad';
import TeacherRisksAlertsIPad from '../components/ipad/TeacherRisksAlertsIPad';
import { useSeo } from '../lib/useSeo';

/* ═══════════════════════════════════════════════════════════════════════
   TEACHER DASHBOARD — APPLE-KEYNOTE-DEPTH ROLE PAGE
   ─────────────────────────────────────────────────────────────────────────
   Built for the classroom teacher. Six acts, one per surface. Each act
   tells the same shape: problem before Edullent → solution it composes.
   AI tools come first; reporting comes last. The teacher leaves with
   hours back per week.
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
    ipad: TeacherPerformanceIPad,
    number: '01',
    eyebrow: 'My Classes',
    headline: 'Walk in knowing what every section needs today.',
    story: [
      "Most teachers walk into the staff room and start the day from memory — who was absent yesterday, whose marks slipped last week, which class needs the gentler tone today. The information is in fifteen places; the morning has none of it.",
      "Edullent collapses the morning into a single screen for the teacher. Each section's attendance, average, top movers and slips, plus the principal's note from yesterday — composed and ready. The teacher walks into the first class with the day's specifics, not yesterday's intentions.",
    ],
    callouts: [
      { text: 'Section-level vitals', Icon: Activity, pos: { top: '12%', left: '-4%' }, color: '#0055FF' },
      { text: 'Top movers · this week', Icon: TrendingUp, pos: { top: '44%', right: '-5%' }, color: '#00C853' },
      { text: 'Principal\'s note', Icon: Sparkles, pos: { bottom: '14%', left: '40%' }, color: '#7c3aed' },
    ],
    pillars: [
      { icon: Activity, title: 'Section overview', body: 'Attendance + class average + behaviour count for every section the teacher handles — all in one strip, refreshed every morning.' },
      { icon: TrendingUp, title: 'Top movers + slips', body: 'Who climbed this week, who fell — surfaced by the engine, not by memory. The pre-class glance the staff room never delivered.' },
      { icon: Award, title: 'Composite score · live', body: 'The same composite the principal sees — visible to the teacher first. No surprises in the review meeting.' },
    ],
    impact: [
      { value: '5 min', label: 'Morning prep, vs 25 minutes of asking around' },
      { value: 'Daily', label: 'Visibility cadence on student trajectory' },
    ],
    brand: '#0055FF',
  },
  {
    ipad: TeacherConceptMasteryIPad,
    number: '02',
    eyebrow: 'Concept Mastery',
    headline: 'Find the topic that\'s sinking the class — by Thursday.',
    story: [
      "When a class fails a test, the teacher does not know whether it was one topic, one chapter, or the whole unit. Re-teaching everything is a week the syllabus does not have; re-teaching nothing is the next test going the same way.",
      "Edullent scores mastery at the topic level for every student in every subject. Three buckets — strong, developing, focus — with the underlying topics named. The teacher knows exactly which 3 concepts the class needs Friday's period spent on, not the whole chapter.",
    ],
    callouts: [
      { text: 'Topic-level scoring', Icon: Brain, pos: { top: '10%', left: '-4%' }, color: '#0055FF' },
      { text: '3-bucket bands', Icon: Layers, pos: { top: '44%', right: '-5%' }, color: '#FB923C' },
      { text: 'AI · pacing risk', Icon: Sparkles, pos: { bottom: '14%', left: '42%' }, color: '#7c3aed' },
    ],
    pillars: [
      { icon: Brain, title: 'Per-topic mastery score', body: 'Every chapter broken into named topics — each scored 0–100 per student, then rolled up to the class. The teacher prepares on the topic, not the chapter.' },
      { icon: Layers, title: '3 colour-coded bands', body: 'Strong · Developing · Focus. The grid finds the weakest topic instantly — and the strongest, which the teacher can stop revising.' },
      { icon: Sparkles, title: 'Pacing-risk AI', body: 'The engine warns when a class is moving too fast on a topic with weak underlying basics — before the next unit makes it worse.' },
    ],
    impact: [
      { value: '70%', label: 'Of re-teaching effort focused on the 3 actual weak topics' },
      { value: '~2 hrs/wk', label: 'Saved by skipping topics the class has mastered' },
    ],
    brand: '#0055FF',
  },
  {
    ipad: TeacherLessonPlannerIPad,
    number: '03',
    eyebrow: 'AI Lesson Planner',
    headline: 'A 45-minute lesson plan, in 30 seconds.',
    story: [
      "Lesson planning is the chore every teacher loses Sundays to. The format is fixed, the syllabus is fixed, the learning outcomes are fixed — and yet every plan is written by hand, every week.",
      "Edullent's AI Lesson Planner generates a board-ready 45-minute plan in the school's own format — learning objectives, activity flow, time-stamped sequence, recap questions, board work — from one prompt. The teacher edits, approves, and moves on. Sundays return to the teacher.",
    ],
    callouts: [
      { text: 'School-format output', Icon: FileText, pos: { top: '10%', left: '-4%' }, color: '#0055FF' },
      { text: 'Time-stamped flow', Icon: Clock, pos: { top: '44%', right: '-4%' }, color: '#FB923C' },
      { text: 'Edit · approve · ship', Icon: Sparkles, pos: { bottom: '14%', left: '40%' }, color: '#7c3aed' },
    ],
    pillars: [
      { icon: FileText, title: 'School-format aware', body: 'Plans land in the institution\'s own template — same headings, same field order, same length. No copy-paste reformat.' },
      { icon: Clock, title: 'Time-stamped activity flow', body: 'Every plan ships with minute-level activity sequencing — opener, instruction, practice, recap, exit — so 45 minutes plan as 45 minutes.' },
      { icon: Sparkles, title: 'Recap + board work', body: 'The plan includes board work prompts and 3 recap questions — the chunks teachers rebuild from scratch every Sunday, generated up-front.' },
    ],
    impact: [
      { value: '~4 hrs/wk', label: 'Saved per teacher on lesson planning' },
      { value: '30 sec', label: 'From prompt to first draft' },
    ],
    brand: '#FB923C',
  },
  {
    ipad: TeacherExamGeneratorIPad,
    number: '04',
    eyebrow: 'AI Exam Generator',
    headline: 'A unit test, in the school\'s pattern, from one prompt.',
    story: [
      "Question paper setting takes a teacher an evening per unit — pulling from old papers, balancing difficulty, matching the board pattern, building the answer key separately. Half of it is mechanical work.",
      "Edullent's AI Exam Generator builds the paper end-to-end — section-wise distribution, difficulty mix, blueprint compliance, answer key, marking scheme. CBSE / ICSE / state-board patterns are pre-loaded; the teacher picks topics, picks difficulty, ships. The mechanical half disappears.",
    ],
    callouts: [
      { text: 'Board pattern · pre-loaded', Icon: FlaskConical, pos: { top: '12%', left: '-4%' }, color: '#FB923C' },
      { text: 'Blueprint · auto-balanced', Icon: Target, pos: { top: '46%', right: '-5%' }, color: '#0055FF' },
      { text: 'Answer key · included', Icon: ShieldCheck, pos: { bottom: '14%', left: '42%' }, color: '#00C853' },
    ],
    pillars: [
      { icon: FlaskConical, title: 'Board-pattern engine', body: 'CBSE / ICSE / state-board section weighting, time allotment and difficulty distribution built in. The output looks like the school\'s own paper.' },
      { icon: Target, title: 'Topic + difficulty picker', body: 'The teacher chooses which 4 topics to test and the difficulty band — the engine builds the paper around those constraints, not around a default template.' },
      { icon: ShieldCheck, title: 'Answer key + marking scheme', body: 'Every generated paper ships with a teacher-side answer key and marking scheme — the second half of the chore, removed.' },
    ],
    impact: [
      { value: '~2 hrs', label: 'Per unit test, returned to the teacher' },
      { value: 'Per-topic', label: 'Coverage matched to the class\'s actual weak areas' },
    ],
    brand: '#FB923C',
  },
  {
    ipad: TeacherSummarizeLessonIPad,
    number: '05',
    eyebrow: 'Summarize the Lesson',
    headline: 'Yesterday\'s class, distilled into a one-page parent note.',
    story: [
      "After a 45-minute lesson, the teacher has to compose a short summary for the parents — what was taught, what to revise at home, what's coming next. The lesson is fresh; the writing is not. Most teachers either skip it or send the same generic line every week.",
      "Edullent listens to the lesson (or the teacher's voice note) and ships a parent-ready summary in the school's tone — key concepts, home-work, revision pointer, next-class preview. The teacher reviews, approves, sends. Communication becomes a by-product of teaching, not a second job.",
    ],
    callouts: [
      { text: 'Voice / recording in', Icon: BookOpen, pos: { top: '10%', left: '-4%' }, color: '#0055FF' },
      { text: 'Parent-tone output', Icon: Users, pos: { top: '44%', right: '-5%' }, color: '#7c3aed' },
      { text: 'One-tap send', Icon: Compass, pos: { bottom: '14%', left: '40%' }, color: '#00C853' },
    ],
    pillars: [
      { icon: BookOpen, title: 'Audio in, summary out', body: 'A voice memo or class recording becomes a structured note — concept list, home-work, next-class preview — in the school\'s standard format.' },
      { icon: Users, title: 'Parent-tone composition', body: 'Output is written for parents, not for the teacher\'s own notes — simpler vocabulary, single concept per line, no syllabus jargon.' },
      { icon: ShieldCheck, title: 'Review · approve · ship', body: 'The teacher edits if needed and approves before sending. The AI drafts; the teacher decides. Always.' },
    ],
    impact: [
      { value: '~10 min', label: 'Per class returned to the teacher' },
      { value: 'Daily', label: 'Parent communication cadence that used to be weekly' },
    ],
    brand: '#7c3aed',
  },
  {
    ipad: TeacherRisksAlertsIPad,
    number: '06',
    eyebrow: 'Risks & Alerts',
    headline: 'See the slipping student before the test confirms it.',
    story: [
      "When a student starts to slip, the signs are obvious in hindsight — three missed days, a quiet behaviour shift, a low practice score. In real time, the teacher is teaching forty other students and the signal is lost.",
      "Edullent's risk feed surfaces the slipping student to the teacher with the specific reason — attendance, marks, behaviour, assignment lag — and a one-tap action: schedule a check-in, flag to the principal, ping the parent. The teacher catches the slip in week 3, not at term-end.",
    ],
    callouts: [
      { text: 'Risk · per student', Icon: AlertTriangle, pos: { top: '10%', left: '-4%' }, color: '#FF3355' },
      { text: 'Reason chips', Icon: Eye, pos: { top: '44%', right: '-5%' }, color: '#FF3355' },
      { text: 'One-tap action', Icon: Compass, pos: { bottom: '14%', left: '40%' }, color: '#00C853' },
    ],
    pillars: [
      { icon: AlertTriangle, title: 'Class-scoped risk feed', body: 'The teacher sees only the students in their own classes — flagged with severity, ranked by urgency, sorted into a workable Friday list.' },
      { icon: Eye, title: 'Reason chips per card', body: 'Each at-risk student arrives with named signals — attendance 62%, last test 41%, behaviour incident Tuesday — so the conversation can start informed.' },
      { icon: ShieldCheck, title: 'One-tap routing', body: 'Schedule a check-in, flag to the principal, ping the parent — the action is one tap, the trail is captured automatically.' },
    ],
    impact: [
      { value: '~6 weeks', label: 'Earlier than the term-end report surfaces the same slip' },
      { value: '+11%', label: 'Average recovery rate on flagged students within a term' },
    ],
    brand: '#FF3355',
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

const TeacherDashboard = () => {
  useSeo({
    title: 'Teacher Dashboard – Edullent',
    description:
      'Walk into class knowing what every section needs. AI lesson planner, exam generator, lesson summarizer, concept mastery + risk feed — built for classroom teachers.',
    canonical: 'https://edullent.com/teacher',
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
            <div className="w-11 h-11 rounded-[13px] bg-[#0055FF] flex items-center justify-center text-white shadow-[0_6px_18px_rgba(0,85,255,0.32)]">
              <GraduationCap className="w-[22px] h-[22px]" strokeWidth={2.1} />
            </div>
            <p className="text-[#0055FF] text-[14px] font-medium tracking-[-0.005em]">
              For the Classroom Teacher
            </p>
          </div>

          <h1 className="text-[#1d1d1f] text-[44px] md:text-[64px] lg:text-[80px] font-semibold leading-[1.02] tracking-[-0.04em] mb-6 max-w-[1000px]">
            The Teacher Dashboard.
            <br />
            <span className="text-[#86868b] font-light">Sundays back. Mondays prepared.</span>
          </h1>

          <p className="text-[#1d1d1f] text-[18px] md:text-[21px] max-w-[760px] leading-[1.45] tracking-[0.005em] font-light mb-4">
            Six surfaces. Six daily decisions. Every signal a class produces — attendance, mastery, behaviour, risk — composed into one screen, plus AI for the chores that used to take Sundays.
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
            The best teachers in the next decade
            <br />
            won't write more plans.
            <span className="bg-gradient-to-r from-[#0055FF] to-[#1166FF] bg-clip-text text-transparent">
              {' '}They'll teach more class.
            </span>
          </motion.h2>
          <p className="text-[#86868b] text-[16px] md:text-[18px] leading-[1.5] tracking-[0.005em] mb-9 max-w-[600px] mx-auto">
            Edullent ships the lesson plan, the unit test, the parent note and the risk feed — so the teacher&apos;s hours go back to the classroom.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#0055FF] hover:bg-[#1166FF] text-white text-[16px] font-medium px-7 py-3.5 rounded-full shadow-[0_10px_30px_-8px_rgba(0,85,255,0.5)] transition-colors"
          >
            Book a Demo
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default TeacherDashboard;
