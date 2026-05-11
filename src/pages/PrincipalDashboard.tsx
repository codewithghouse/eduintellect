import type { ComponentType, ReactNode, CSSProperties } from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboard, Brain, AlertTriangle, Gauge, Trophy, Sparkles,
  Activity, TrendingUp, Eye, Users, Target, Clock, ShieldCheck,
  Award, Compass, ChevronRight,
} from 'lucide-react';
import PrincipalDashboardIPad from '../components/ipad/PrincipalDashboardIPad';
import PrincipalStudentIntelligenceIPad from '../components/ipad/PrincipalStudentIntelligenceIPad';
import PrincipalRiskStudentsIPad from '../components/ipad/PrincipalRiskStudentsIPad';
import PrincipalTeacherPerformanceIPad from '../components/ipad/PrincipalTeacherPerformanceIPad';
import PrincipalTeacherLeaderboardIPad from '../components/ipad/PrincipalTeacherLeaderboardIPad';
import PrincipalLeaderboardsIPad from '../components/ipad/PrincipalLeaderboardsIPad';

/* ═══════════════════════════════════════════════════════════════════════
   APPLE-KEYNOTE-DEPTH ROLE PAGE
   ─────────────────────────────────────────────────────────────────────────
   Built for the launch event: an unbroken story-arc from the principal's
   8 AM problem to the platform's resolution, told one USP at a time. Each
   USP gets its own viewport-sized act with:
     · A two-line storyteller intro (problem → solution)
     · A Mac-framed product mockup with anchored callouts pointing to the
       exact pixel the eyebrow phrase refers to
     · Three "decision pillars" — what specific moves this surface unlocks
     · Quantified business impact, never vague (₹, hours, weeks, %)
   Tone follows the magazine_tone_brief: never "platform" / "software".
   Always "Operating System / Intelligence Layer / Decision Engine".
   Every feature is reframed as a decision the principal can act on today.
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
  /** Pill content. */
  text: string;
  /** Lucide icon name as `Sparkles` etc. — optional leading dot accent. */
  Icon?: ComponentType<{ className?: string; size?: number; strokeWidth?: number }>;
  /** Position as CSS — top/right/bottom/left strings. Frame is 1.43:1, so
   *  use percentages that anchor to the design canvas. Negative values
   *  pull callouts outside the frame for that classic Apple keynote feel. */
  pos: CSSProperties;
  /** Accent color — defaults to the section brand. */
  color?: string;
}

interface Act {
  ipad: ComponentType;
  number: string;
  eyebrow: string;
  headline: string;
  /** Two-paragraph storyteller body. First = the problem before Edullent.
   *  Second = how this surface flips the moment. */
  story: [string, string];
  callouts: CalloutAnchor[];
  pillars: [DecisionPillar, DecisionPillar, DecisionPillar];
  impact: [ImpactStat, ImpactStat];
  brand: string;
}

/* ─── 6 USP acts — keynote-grade depth ────────────────────────────────── */

const ACTS: Act[] = [
  {
    ipad: PrincipalDashboardIPad,
    number: '01',
    eyebrow: 'The Command Centre',
    headline: "8 AM clarity, not 8 PM regret.",
    story: [
      "A principal walks in at 8 AM and asks five different people what's happening across the school. By the time the answers arrive — fragmented, conflicting, late — the moment to act has already passed.",
      "Edullent collapses the morning briefing into a single screen. Academic Health Index, today's risk alerts, attendance trajectory — every signal the principal needs is composed and waiting. The day starts with a decision, not a question.",
    ],
    callouts: [
      { text: 'Critical · 7 students', Icon: AlertTriangle, pos: { top: '18%', left: '-3%' }, color: '#FF3355' },
      { text: 'Reason logged inline', Icon: Eye, pos: { top: '46%', right: '-4%' }, color: '#0055FF' },
      { text: 'Next move · prescribed', Icon: Compass, pos: { bottom: '14%', left: '46%' }, color: '#00C853' },
    ],
    pillars: [
      { icon: Activity, title: 'Composite Health Index', body: 'A live 0–100 score blending attendance, marks, discipline and operations — comparable across weeks, branches and years.' },
      { icon: AlertTriangle, title: 'Triage by urgency', body: "Today's risk students arrive sorted by severity. The principal acts on the right three by 9 AM — not the loudest three." },
      { icon: TrendingUp, title: '30-day momentum', body: 'Smooth-interpolated trend lines reveal whether the school is rising, stalling or slipping — long before the term-end report ever lands.' },
    ],
    impact: [
      { value: '60 sec', label: 'Sign-in to school-wide clarity' },
      { value: '₹3–8L', label: 'Per branch / yr saved via earlier intervention' },
    ],
    brand: '#0055FF',
  },
  {
    ipad: PrincipalStudentIntelligenceIPad,
    number: '02',
    eyebrow: 'Student Intelligence',
    headline: 'Every student. Auto-classified. Every week.',
    story: [
      "Most schools discover a struggling student in the term-end report. By then, two months of decline have compounded — and the parent is already asking the principal to explain.",
      "Edullent classifies every student weekly — Weak / Developing / Smart — across attendance, marks and behaviour. The dashboard names them, explains why, and pairs each with a one-tap action: notify the teacher, message the parent, schedule intervention.",
    ],
    callouts: [
      { text: 'Auto-tiered · weekly', Icon: Brain, pos: { top: '14%', left: '-4%' }, color: '#0055FF' },
      { text: 'Reason — not just a label', Icon: Sparkles, pos: { top: '44%', right: '-5%' }, color: '#7c3aed' },
      { text: 'Notify in one tap', Icon: Users, pos: { bottom: '16%', left: '38%' }, color: '#00C853' },
    ],
    pillars: [
      { icon: Target, title: '3-tier classification', body: 'Weak · Developing · Smart with live student counts. No principal-guesswork; the engine cuts the school into the only three groups that matter operationally.' },
      { icon: Brain, title: 'Reason-coded cards', body: 'Each student card carries the why — declining attendance, behaviour spike, falling scores — so the conversation with parents or teachers starts informed.' },
      { icon: Activity, title: 'AI Class Intelligence', body: "A weekly cohort read surfaces who to act on first, what's working, what isn't — composed in the school's own voice." },
    ],
    impact: [
      { value: '52 weeks', label: 'Of per-student visibility — every year' },
      { value: '₹60K–2L', label: 'Recovered revenue per prevented dropout' },
    ],
    brand: '#0055FF',
  },
  {
    ipad: PrincipalRiskStudentsIPad,
    number: '03',
    eyebrow: 'Risk Engine',
    headline: 'Name the dropout six weeks before they leave.',
    story: [
      "Dropouts are never sudden. They're the visible end of a slow decline — three missed weeks here, a parent meeting skipped there, a behaviour incident that wasn't followed up. By the time the family stops paying, the signal has been on for two months.",
      "Edullent reads those signals in real time. Multi-factor risk scoring spans attendance, marks, incidents and assignments — tiered Critical → Warning → Monitoring with an intervention playbook attached to every name. The principal doesn't react to dropouts. The principal prevents them.",
    ],
    callouts: [
      { text: 'Hero count · live', Icon: AlertTriangle, pos: { top: '8%', left: '50%' }, color: '#FF3355' },
      { text: 'Factor chips per student', Icon: Eye, pos: { top: '40%', left: '-5%' }, color: '#FF3355' },
      { text: 'AI intervention plan', Icon: Sparkles, pos: { bottom: '18%', right: '-4%' }, color: '#0055FF' },
    ],
    pillars: [
      { icon: AlertTriangle, title: 'Red-hero risk pool', body: 'A single number every morning: students at academic, behavioural, attendance or fee risk — with the new-this-week delta surfaced beside it.' },
      { icon: Target, title: 'Owner-assigned cases', body: "Each at-risk student carries an assigned coach. No 'someone should look at this' — every name on the screen has someone accountable by Friday." },
      { icon: ShieldCheck, title: 'Intervention playbook', body: 'AI-composed action plan + one-tap quick actions: parent meeting, counsellor referral, tutorial reassignment, fee restructure. The play is prescribed; the principal approves.' },
    ],
    impact: [
      { value: '6 weeks', label: 'Earlier dropout detection vs term-end reports' },
      { value: '₹40–80L', label: 'Prevented annual fee leakage per 1,000-student branch' },
    ],
    brand: '#FF3355',
  },
  {
    ipad: PrincipalTeacherPerformanceIPad,
    number: '04',
    eyebrow: 'Teacher Performance',
    headline: 'Know your top and bottom five — without HOD bias.',
    story: [
      "Teacher reviews live in two corrupted formats today: the HOD's gut feeling, and the year-end student survey that arrives after the contract is already renewed. Both fail the school. One is unfair to good teachers; the other is too late to save weak ones.",
      "Edullent reads outcomes, not opinions. A composite score per teacher — class average, attendance discipline, parent feedback, term-over-term trend — refreshed every Friday. The school sees who is genuinely lifting students, who needs a mentor, and who needs a different role.",
    ],
    callouts: [
      { text: 'Composite · 4 axes', Icon: Gauge, pos: { top: '10%', left: '-4%' }, color: '#0055FF' },
      { text: 'Trend vs school avg', Icon: TrendingUp, pos: { top: '46%', right: '-5%' }, color: '#00C853' },
      { text: 'Mentor pairing · AI', Icon: Sparkles, pos: { bottom: '16%', left: '40%' }, color: '#7c3aed' },
    ],
    pillars: [
      { icon: Gauge, title: 'Outcome-weighted scoring', body: 'Four signals combined into one number per teacher — class avg, attendance, parent feedback, trend. The score answers a question every principal asks: who is actually moving students?' },
      { icon: Award, title: 'Per-teacher card depth', body: 'Subject pills, term-on-term delta, vs school average, tier badge — the principal walks into review meetings with a paper-trail, not a feeling.' },
      { icon: Users, title: 'Auto mentor pairings', body: 'The engine pairs teachers needing coaching with the right top performer — same subject, same grade band — turning the staff room into a self-improving system.' },
    ],
    impact: [
      { value: '4 hours', label: 'Saved per principal per week on review prep' },
      { value: '8–14%', label: 'Average class-score lift after one coaching cycle' },
    ],
    brand: '#0055FF',
  },
  {
    ipad: PrincipalTeacherLeaderboardIPad,
    number: '05',
    eyebrow: 'Teacher Leaderboard',
    headline: 'Healthy competition that moves the needle.',
    story: [
      "Recognition in schools today is a once-a-year affair — Teachers' Day, a plaque, a paragraph in the magazine. Twelve months between signals. The high-performers go unrewarded; the rest go unmoved.",
      "Edullent ranks every teacher weekly on the same composite the principal sees — Gold / Silver / Bronze podium plus the full ranked list with this week's movement. Transparent enough to be trusted. Granular enough to be acted on. The same number the owner sees in the network leaderboard.",
    ],
    callouts: [
      { text: 'Branch avg · live', Icon: Activity, pos: { top: '10%', left: '50%' }, color: '#FFD700' },
      { text: 'Top 3 podium', Icon: Trophy, pos: { top: '40%', left: '-4%' }, color: '#FFD700' },
      { text: 'Weekly ↑↓ delta', Icon: TrendingUp, pos: { bottom: '18%', right: '-4%' }, color: '#00C853' },
    ],
    pillars: [
      { icon: Trophy, title: 'Period toggle', body: 'Term · Month · All-Time — the principal picks the lens. A new teacher who lifted scores 14 points in a month deserves to show up, even if the term scorecard is still building.' },
      { icon: Clock, title: 'Weekly movement', body: 'Up-arrow / down-arrow with positions changed since last week — the leaderboard is alive, not a frozen snapshot from September.' },
      { icon: ShieldCheck, title: 'Network parity', body: 'The same composite metric powers the owner-side branch leaderboard. Principals, teachers and owners all see the same truth.' },
    ],
    impact: [
      { value: '+11%', label: "Avg lift on teachers in bottom half after 90 days' visibility" },
      { value: '52×', label: 'Recognition cycles per year vs annual reviews' },
    ],
    brand: '#FFD700',
  },
  {
    ipad: PrincipalLeaderboardsIPad,
    number: '06',
    eyebrow: 'Network Leaderboards',
    headline: 'See where you rank — and how to close the gap.',
    story: [
      "Most principals operate in a vacuum. Their numbers look fine in isolation; they have no way to know they're third in a five-branch group, or eleventh in a hundred-school network. Without comparison, there's no motivation to improve.",
      "Edullent opens the network. Branches, principals, teachers and students — four leaderboards, ranked across the entire group. The AI explains why Bandra wins this week, what Powai needs to do to overtake, and prescribes the specific moves. Comparison is the most under-used force in school leadership; we make it daily.",
    ],
    callouts: [
      { text: '4 tabs · 4 leaderboards', Icon: LayoutDashboard, pos: { top: '8%', left: '-3%' }, color: '#0055FF' },
      { text: 'AI · Why Bandra wins', Icon: Sparkles, pos: { top: '45%', right: '-5%' }, color: '#7c3aed' },
      { text: 'Close-the-gap solutions', Icon: Compass, pos: { bottom: '16%', left: '42%' }, color: '#00C853' },
    ],
    pillars: [
      { icon: Trophy, title: 'Gold/Silver/Bronze + you', body: 'Pool-ball podium plus a your-row highlight so the principal sees both the winner and their own position in the same glance.' },
      { icon: Sparkles, title: '"Why Bandra wins" AI', body: 'Weekly-cached narrative explains the gap in plain English — the specific signal driving the lead, sourced from real metrics, not guesswork.' },
      { icon: Compass, title: 'Close-the-gap solutions', body: 'Three concrete moves below every leaderboard — not generic advice, but moves tied to the metrics the leading branch is winning on.' },
    ],
    impact: [
      { value: 'Weekly', label: 'Network-wide visibility · cached AI insight' },
      { value: '₹2–5L', label: 'Per branch / yr saved via cross-branch best-practice transfer' },
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
}) => {
  return (
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
            style={{
              position: 'absolute',
              ...c.pos,
              zIndex: 30,
              pointerEvents: 'none',
            }}
            className="hidden md:flex items-center gap-2 px-3.5 py-2 rounded-full bg-white shadow-[0_8px_24px_rgba(15,23,42,0.10),0_0_0_0.5px_rgba(15,23,42,0.06)]"
          >
            <span
              aria-hidden
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: color }}
            />
            {Icon && <Icon size={13} strokeWidth={2.2} style={{ color }} />}
            <span
              className="text-[12px] font-medium tracking-[-0.005em] whitespace-nowrap"
              style={{ color: '#1d1d1f' }}
            >
              {c.text}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};

/* ─── Decision pillar tile ────────────────────────────────────────────── */

const PillarTile = ({
  pillar,
  brand,
  delay,
}: {
  pillar: DecisionPillar;
  brand: string;
  delay: number;
}) => {
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
      <p className="text-[#86868b] text-[14px] leading-[1.55] tracking-[0.005em]">
        {pillar.body}
      </p>
    </motion.div>
  );
};

/* ─── Impact stat row — Apple keynote big number style ────────────────── */

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

/* ─── A single keynote act ─────────────────────────────────────────────── */

const KeynoteAct = ({ act }: { act: Act }) => {
  return (
    <section className="relative py-24 md:py-36 first:pt-12">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* ── Section number + eyebrow ── */}
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
          <span
            className="text-[13px] font-medium tracking-[-0.005em]"
            style={{ color: act.brand }}
          >
            {act.eyebrow}
          </span>
        </motion.div>

        {/* ── Big keynote headline ── */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#1d1d1f] text-[40px] md:text-[60px] lg:text-[72px] font-semibold leading-[1.04] tracking-[-0.035em] mb-10 max-w-[920px]"
        >
          {act.headline}
        </motion.h2>

        {/* ── Storyteller body — 2 paragraphs ── */}
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

        {/* ── Mockup with floating callouts ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-[1100px] mx-auto"
        >
          <MockupWithCallouts Ipad={act.ipad} callouts={act.callouts} />
        </motion.div>

        {/* ── 3 decision pillars ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mt-16 md:mt-20 max-w-[1240px] mx-auto">
          {act.pillars.map((p, i) => (
            <PillarTile
              key={p.title}
              pillar={p}
              brand={act.brand}
              delay={0.05 + i * 0.1}
            />
          ))}
        </div>

        {/* ── Impact row ── */}
        <ImpactRow stats={act.impact} brand={act.brand} />
      </div>

      {/* Faint separator below each act (except last) — keeps the rhythm */}
      <div
        aria-hidden
        className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[140px] h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(15,23,42,0.08), transparent)' }}
      />
    </section>
  );
};

/* ─── Page ──────────────────────────────────────────────────────────────── */

const PrincipalDashboard = () => {
  return (
    <div className="min-h-screen pt-28 pb-12 bg-white">
      {/* ── Hero ── */}
      <div className="max-w-[1240px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-[13px] bg-[#0055FF] flex items-center justify-center text-white shadow-[0_6px_18px_rgba(0,85,255,0.32)]">
              <LayoutDashboard className="w-[22px] h-[22px]" strokeWidth={2.1} />
            </div>
            <p className="text-[#0055FF] text-[14px] font-medium tracking-[-0.005em]">
              For the Academic Head
            </p>
          </div>

          <h1 className="text-[#1d1d1f] text-[44px] md:text-[64px] lg:text-[80px] font-semibold leading-[1.02] tracking-[-0.04em] mb-6 max-w-[1000px]">
            The Principal Dashboard.
            <br />
            <span className="text-[#86868b] font-light">Your school, distilled.</span>
          </h1>

          <p className="text-[#1d1d1f] text-[18px] md:text-[21px] max-w-[760px] leading-[1.45] tracking-[0.005em] font-light mb-4">
            Six surfaces. Six daily decisions. Every signal a school produces — attendance, marks, behaviour, teacher output, network rank — composed into one operating system the principal runs the day from.
          </p>
          <p className="text-[#86868b] text-[15px] md:text-[16px] max-w-[680px] leading-[1.5] tracking-[0.005em]">
            Scroll the keynote — one act per surface, one decision per act.
          </p>
        </motion.div>
      </div>

      {/* ── 6 keynote acts ── */}
      <div className="mt-12 md:mt-20">
        {ACTS.map((act) => (
          <KeynoteAct key={act.number} act={act} />
        ))}
      </div>

      {/* ── Outro CTA ── */}
      <section className="py-28 md:py-36 bg-[#fbfbfd]">
        <div className="max-w-[920px] mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15% 0px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#1d1d1f] text-[34px] md:text-[52px] font-semibold leading-[1.06] tracking-[-0.03em] mb-6"
          >
            The principals who'll lead the next decade
            <br />
            won't be the busiest.
            <span className="bg-gradient-to-r from-[#0055FF] to-[#1166FF] bg-clip-text text-transparent">
              {' '}They'll be the clearest.
            </span>
          </motion.h2>
          <p className="text-[#86868b] text-[16px] md:text-[18px] leading-[1.5] tracking-[0.005em] mb-9 max-w-[600px] mx-auto">
            Edullent gives the principal one screen, one truth, one move every morning. The rest of the school catches up to that clarity.
          </p>
          <a
            href="/register"
            className="inline-flex items-center gap-2 bg-[#0055FF] hover:bg-[#1166FF] text-white text-[16px] font-medium px-7 py-3.5 rounded-full shadow-[0_10px_30px_-8px_rgba(0,85,255,0.5)] transition-colors"
          >
            Open the live demo
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default PrincipalDashboard;
