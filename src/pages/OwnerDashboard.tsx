import type { ComponentType, ReactNode, CSSProperties } from 'react';
import { motion } from 'framer-motion';
import {
  Crown, Trophy, GitBranch, AlertTriangle, Gauge, Bell,
  Activity, TrendingUp, Eye, Users, Target, Shield,
  Sparkles, Compass, BarChart3, Layers, ChevronRight,
} from 'lucide-react';
import OwnerDashboardIPad from '../components/ipad/OwnerDashboardIPad';
import OwnerBrandLeaderboardIPad from '../components/ipad/OwnerBrandLeaderboardIPad';
import OwnerBranchComparisonIPad from '../components/ipad/OwnerBranchComparisonIPad';
import OwnerAIRiskPredictorIPad from '../components/ipad/OwnerAIRiskPredictorIPad';
import OwnerTeacherPerformanceIPad from '../components/ipad/OwnerTeacherPerformanceIPad';
import OwnerRisksAlertsIPad from '../components/ipad/OwnerRisksAlertsIPad';
import { useSeo } from '../lib/useSeo';

/* ═══════════════════════════════════════════════════════════════════════
   OWNER DASHBOARD — APPLE-KEYNOTE-DEPTH ROLE PAGE
   ─────────────────────────────────────────────────────────────────────────
   Built for the school owner / chairman of a multi-branch group.
   Six acts, one per surface. Each act tells the same story shape:
     · problem before Edullent → solution it composes
     · Mac-framed product mockup with anchored callouts
     · 3 decision pillars + 2 quantified impact stats
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
    ipad: OwnerDashboardIPad,
    number: '01',
    eyebrow: 'The Control Tower',
    headline: 'Every campus. One screen. Every morning.',
    story: [
      "An owner running three branches today opens three WhatsApp groups, two spreadsheets and a quarterly review deck — and still cannot answer the simplest question: which branch needs me this week?",
      "Edullent collapses the group into a single board. Brand health index, branch-by-branch attendance, fee trajectory, today's escalations — composed into one operating view that lives at the chairman level. The morning starts with a decision, not a meeting.",
    ],
    callouts: [
      { text: 'Brand Health · live', Icon: Activity, pos: { top: '12%', left: '-4%' }, color: '#1e3272' },
      { text: 'Per-branch drilldown', Icon: GitBranch, pos: { top: '44%', right: '-5%' }, color: '#0055FF' },
      { text: 'Today\'s 3 decisions', Icon: Compass, pos: { bottom: '16%', left: '42%' }, color: '#00C853' },
    ],
    pillars: [
      { icon: Activity, title: 'Brand Health Index', body: 'A composite 0–100 score per branch and group — attendance + marks + fees + parent NPS — comparable week-over-week and campus-to-campus.' },
      { icon: GitBranch, title: 'Branch-of-the-day', body: 'The dashboard surfaces which campus needs the owner this week. Not gut-feel, not the loudest principal — the data picks.' },
      { icon: Compass, title: 'Decision queue', body: 'Three suggested moves every morning — sign-offs, escalations, transfers — composed from the underlying signal.' },
    ],
    impact: [
      { value: '90 sec', label: 'Sign-in to network-wide clarity' },
      { value: '4 hrs / wk', label: 'Owner time recovered from review meetings' },
    ],
    brand: '#1e3272',
  },
  {
    ipad: OwnerBrandLeaderboardIPad,
    number: '02',
    eyebrow: 'Brand Leaderboard',
    headline: 'Your franchise health, ranked.',
    story: [
      "Most groups do not know they are stagnating. Each branch reports proudly on its own gains; nothing surfaces the relative truth — who is actually pulling the brand up, who is dragging it down.",
      "Edullent ranks every branch on the same composite the principal sees. A board-ready leaderboard with 6-month trend lines, ranked KPI strip, and an AI panel that explains what the top branch is doing the others are not. The chairman walks into the next AGM with the answer already on screen.",
    ],
    callouts: [
      { text: 'Composite rank · 6 mo', Icon: Trophy, pos: { top: '10%', left: '-4%' }, color: '#FFD700' },
      { text: 'Top-branch trend', Icon: TrendingUp, pos: { top: '44%', right: '-5%' }, color: '#00C853' },
      { text: 'AI · what they\'re doing right', Icon: Sparkles, pos: { bottom: '14%', left: '40%' }, color: '#7c3aed' },
    ],
    pillars: [
      { icon: Trophy, title: 'Composite ranking', body: 'Branches ordered on the same composite metric the principals are measured by. Identical math, identical truth — no two ledger problem.' },
      { icon: TrendingUp, title: '6-month trend lines', body: 'Per-branch trajectory across the last two terms — the slope reveals which campus is on the way up before the absolute number does.' },
      { icon: Sparkles, title: '"Why they win" AI', body: 'A weekly-cached narrative explains the specific signal driving the leading branch — pacing, retention, fee discipline — sourced from real metrics.' },
    ],
    impact: [
      { value: 'Weekly', label: 'Refreshed network-wide ranking' },
      { value: '₹2–5L', label: 'Per branch / yr from cross-branch best-practice transfer' },
    ],
    brand: '#FFD700',
  },
  {
    ipad: OwnerBranchComparisonIPad,
    number: '03',
    eyebrow: 'Branches, Compared',
    headline: 'See who is winning — and who is sinking — by Friday.',
    story: [
      "Comparing branches across a group usually requires the group office to wait for monthly reports, copy them into Excel, and reformat them into a slide. By the time the comparison lands, the operational moment is over.",
      "Edullent ships the comparison live. Every branch against every other on five operational metrics — students, teachers, attendance, average score, fee collection — best-in-row marked, gap surfaced, AI explanation of why one is leading. The Monday review becomes a 5-minute confirmation, not a 2-hour build.",
    ],
    callouts: [
      { text: 'Best-in-row · auto-marked', Icon: Target, pos: { top: '8%', left: '-3%' }, color: '#00C853' },
      { text: 'Gap, in points', Icon: BarChart3, pos: { top: '44%', right: '-5%' }, color: '#FF3355' },
      { text: 'AI · why they\'re ahead', Icon: Sparkles, pos: { bottom: '14%', left: '42%' }, color: '#7c3aed' },
    ],
    pillars: [
      { icon: GitBranch, title: '5-metric matrix', body: 'Every branch × every metric in one table. The eye finds the weakest cell instantly — and one click drills into the underlying class, teacher or cohort.' },
      { icon: Target, title: 'Best-in-row marker', body: 'A star against the leader on every row makes "who to learn from" unambiguous. The conversation moves from blame to imitation.' },
      { icon: Sparkles, title: 'Comparative narrative', body: 'AI surfaces why one branch is ahead — without the chairman having to triangulate three reports. The reasoning is in plain English.' },
    ],
    impact: [
      { value: '5 min', label: 'To build a board-ready cross-branch comparison' },
      { value: '52×', label: 'Comparison cycles per year vs monthly review decks' },
    ],
    brand: '#00C853',
  },
  {
    ipad: OwnerAIRiskPredictorIPad,
    number: '04',
    eyebrow: 'AI Risk Predictor',
    headline: 'See the dropout six weeks before they leave.',
    story: [
      "Across a multi-branch group, dropouts surface as a fee-collection problem two months after the academic problem started. By the time the finance team escalates, the family has already chosen the competing school down the road.",
      "Edullent scores every student weekly across attendance, marks, behaviour and engagement — tiered Critical / At-Risk / Watch / Recovered, with the specific signals named on every card. The owner sees the at-risk pool by branch, the new-this-week delta, and the intervention list. Dropout becomes a prevented event, not a reported one.",
    ],
    callouts: [
      { text: '4-tier risk · live', Icon: AlertTriangle, pos: { top: '10%', left: '-4%' }, color: '#FF3355' },
      { text: 'Signal-coded reason', Icon: Eye, pos: { top: '45%', right: '-5%' }, color: '#FF3355' },
      { text: 'Intervention list', Icon: Shield, pos: { bottom: '14%', left: '40%' }, color: '#0055FF' },
    ],
    pillars: [
      { icon: AlertTriangle, title: '4-tier classification', body: 'Critical · At-Risk · Watch · Recovered. The chairman knows exactly how many students across the group are about to leave — and how many were saved last quarter.' },
      { icon: Eye, title: 'Reason-coded cards', body: 'Each at-risk student arrives with the specific signal — attendance at 48%, marks down 24%, behaviour incident logged Tuesday. No interpretation work needed.' },
      { icon: Shield, title: 'Auto-recalibration', body: 'The model re-weights itself every quarter against outcome data. The longer the group runs Edullent, the better the model gets at its specific patterns.' },
    ],
    impact: [
      { value: '6 weeks', label: 'Earlier than term-end reports surface the same student' },
      { value: '₹40–80L', label: 'Prevented annual fee leakage per 1,000-student branch' },
    ],
    brand: '#FF3355',
  },
  {
    ipad: OwnerTeacherPerformanceIPad,
    number: '05',
    eyebrow: 'Teacher Network',
    headline: 'Your best and weakest teachers — across every campus.',
    story: [
      "In a group of any size, the chairman has no reliable read on the teaching bench. Each principal has their favourites; HR has their lists; the truth lives in the student outcomes — which nobody is aggregating up.",
      "Edullent composes a single composite teacher score across the network — attendance discipline, class average, parent NPS, grading speed — refreshed every Friday. Filter by branch, by subject, by tier. The chairman knows who to promote, who to pair with a mentor, and who to let go — with evidence the principal cannot dispute.",
    ],
    callouts: [
      { text: '4 KPI · composite', Icon: Gauge, pos: { top: '12%', left: '-4%' }, color: '#0055FF' },
      { text: 'Subject + branch filter', Icon: Layers, pos: { top: '46%', right: '-4%' }, color: '#0055FF' },
      { text: 'Tier badge per row', Icon: Trophy, pos: { bottom: '14%', left: '40%' }, color: '#FFD700' },
    ],
    pillars: [
      { icon: Gauge, title: 'Outcome-weighted score', body: 'Four signals merged into one number per teacher across every branch in the group — the only fair lens for cross-campus comparison.' },
      { icon: Users, title: 'Auto mentor pairings', body: 'The engine pairs teachers needing coaching with the right top performer — same subject, same grade band — turning the group into a self-improving system.' },
      { icon: Trophy, title: 'Network rank + tier', body: 'Each teacher carries a rank against the full group and a tier badge — the basis for raises, transfers and renewals.' },
    ],
    impact: [
      { value: '8–14%', label: 'Average class-score lift after one coaching cycle' },
      { value: '52×', label: 'Recognition cycles per year vs annual reviews' },
    ],
    brand: '#0055FF',
  },
  {
    ipad: OwnerRisksAlertsIPad,
    number: '06',
    eyebrow: 'Risks & Alerts',
    headline: 'Critical issues reach the chairman in seconds.',
    story: [
      "In most groups, a crisis at a branch is something the chairman hears about days later — usually because a parent escalated to a board member. By then the headline has been written somewhere uncomfortable.",
      "Edullent's alert spine flags severity-tiered events as they happen — attendance crashes, fee defaults, teacher attrition, NPS dips. One-tap delegate to the right principal with the trail captured. The chairman shows up first, not last.",
    ],
    callouts: [
      { text: 'Severity-tiered feed', Icon: Bell, pos: { top: '10%', left: '-3%' }, color: '#FF3355' },
      { text: 'Branch context', Icon: GitBranch, pos: { top: '44%', right: '-5%' }, color: '#0055FF' },
      { text: 'Delegate · one tap', Icon: Compass, pos: { bottom: '14%', left: '42%' }, color: '#00C853' },
    ],
    pillars: [
      { icon: Bell, title: '4 severity tiers', body: 'Critical · High · Medium · Resolved-30d. The owner inbox is ranked the way operations actually work, not by chronology.' },
      { icon: GitBranch, title: 'Branch-tagged context', body: 'Every alert arrives with the originating branch, the AI-generated one-line headline, and the relevant principal already named.' },
      { icon: Shield, title: 'Audit trail', body: 'Who acted, when, what they decided — captured automatically for governance and board-pack reporting.' },
    ],
    impact: [
      { value: 'Real-time', label: 'Owner-side escalation latency, vs days' },
      { value: '1 tap', label: 'From alert to delegated decision' },
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

/* ─── Decision pillar tile ────────────────────────────────────────────── */

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

/* ─── Impact stat row ─────────────────────────────────────────────────── */

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

/* ─── Page ──────────────────────────────────────────────────────────────── */

const OwnerDashboard = () => {
  useSeo({
    title: 'Owner Dashboard – Edullent',
    description:
      'See every campus at a glance. Brand leaderboard, branch comparison, AI risk prediction, teacher network performance — the chairman control tower for multi-branch institutions.',
    canonical: 'https://edullent.com/owner',
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
            <div className="w-11 h-11 rounded-[13px] bg-[#1e3272] flex items-center justify-center text-white shadow-[0_6px_18px_rgba(30,50,114,0.32)]">
              <Crown className="w-[22px] h-[22px]" strokeWidth={2.1} />
            </div>
            <p className="text-[#1e3272] text-[14px] font-medium tracking-[-0.005em]">
              For the Chairman & Group Owner
            </p>
          </div>

          <h1 className="text-[#1d1d1f] text-[44px] md:text-[64px] lg:text-[80px] font-semibold leading-[1.02] tracking-[-0.04em] mb-6 max-w-[1000px]">
            The Owner Dashboard.
            <br />
            <span className="text-[#86868b] font-light">Your group, in focus.</span>
          </h1>

          <p className="text-[#1d1d1f] text-[18px] md:text-[21px] max-w-[760px] leading-[1.45] tracking-[0.005em] font-light mb-4">
            Six surfaces. Six daily decisions. Every signal a school group produces — brand health, branch rank, teacher quality, dropout risk, network escalations — composed into one operating view the chairman runs the group from.
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
            The chairmen who'll build the next chain
            <br />
            won't be the busiest.
            <span className="bg-gradient-to-r from-[#1e3272] to-[#0055FF] bg-clip-text text-transparent">
              {' '}They'll be the most informed.
            </span>
          </motion.h2>
          <p className="text-[#86868b] text-[16px] md:text-[18px] leading-[1.5] tracking-[0.005em] mb-9 max-w-[600px] mx-auto">
            Edullent gives the owner one screen for the whole group — and one move every morning. The principals catch up to that clarity within a term.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#1e3272] hover:bg-[#28427e] text-white text-[16px] font-medium px-7 py-3.5 rounded-full shadow-[0_10px_30px_-8px_rgba(30,50,114,0.5)] transition-colors"
          >
            Book a Demo
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default OwnerDashboard;
