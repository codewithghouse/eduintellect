import type { ComponentType, ReactNode, CSSProperties } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles, Sun, HeartHandshake, Shapes, Leaf, Cookie,
  BookHeart, Star, Camera, ShieldCheck, AlertTriangle, ChevronRight,
  Smile, Eye, Layers, Activity, Compass, BellRing,
} from 'lucide-react';
import PreTeacherTodayHubIPad from '../components/ipad/PreTeacherTodayHubIPad';
import PreTeacherAttendanceMoodIPad from '../components/ipad/PreTeacherAttendanceMoodIPad';
import PreTeacherCareRoutineIPad from '../components/ipad/PreTeacherCareRoutineIPad';
import PreTeacherObservationsIPad from '../components/ipad/PreTeacherObservationsIPad';
import PreTeacherPhotoStudioIPad from '../components/ipad/PreTeacherPhotoStudioIPad';
import PreTeacherSafetyIPad from '../components/ipad/PreTeacherSafetyIPad';
import { useSeo } from '../lib/useSeo';

/* ═══════════════════════════════════════════════════════════════════════
   PRE-PRIMARY TEACHER DASHBOARD — APPLE-KEYNOTE-DEPTH ROLE PAGE
   ─────────────────────────────────────────────────────────────────────────
   Built for the pre-primary class teacher (Playgroup · Nursery · LKG · UKG).
   Six surfaces: Today · Attendance+Mood · Care & Routine · Observations
   (NEP 2020) · Photo Studio (consent) · Safety. The teacher walks out
   of the classroom with the day recorded, not with sticky notes.
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

const NAVY = '#1e3272';
const PEACH = '#FB923C';
const MINT = '#10B981';
const BLUSH = '#EC4899';
const SKY = '#0EA5E9';
const RED = '#EF4444';

const ACTS: Act[] = [
  {
    ipad: PreTeacherTodayHubIPad,
    number: '01',
    eyebrow: 'The Morning',
    headline: 'Walk into class with the day already composed.',
    story: [
      "In a pre-primary room the morning is forty small decisions before nine-thirty. Who is missing, who needs the gentle hello, which child is in which slot, whose snack to watch for peanuts. The information lives in the teacher's head — and on a paper attendance sheet that the parents will never see.",
      "Edullent opens to a single screen: today's slots laid out, the four care-actions (attendance · diaper · meals · note) within a thumb's reach, the morning mood already auto-summarised for the parent feed. The teacher stops being a notebook. She becomes the room.",
    ],
    callouts: [
      { text: 'Slot timeline · live', Icon: Sun,        pos: { top: '10%', left: '-4%' }, color: PEACH },
      { text: '4 care quick-actions', Icon: HeartHandshake, pos: { top: '44%', right: '-5%' }, color: BLUSH },
      { text: 'Mood snapshot · 8:42', Icon: Sparkles,   pos: { bottom: '12%', left: '40%' }, color: NAVY },
    ],
    pillars: [
      { icon: Sun,        title: 'The day at a glance',  body: 'Every slot of the pre-primary day — Circle Time, Snack, Art, Nap, Story — laid out on one strip with live status. Done · live · next · planned.' },
      { icon: HeartHandshake, title: 'Care, one tap each', body: 'Mark attendance, log a diaper, save a meal, write a note — the four care actions live on the home screen, not buried two layers deep.' },
      { icon: Sparkles,   title: 'Mood auto-rolled',     body: 'Every child checked in with a mood pill. The class-wide snapshot lands in the parent feed at 9 AM without the teacher writing a word.' },
    ],
    impact: [
      { value: '~25 min', label: 'Saved every morning vs the paper attendance + notebook era' },
      { value: '0 sticky notes', label: 'Needed to remember a meal-allergy or sleepy child' },
    ],
    brand: PEACH,
  },
  {
    ipad: PreTeacherAttendanceMoodIPad,
    number: '02',
    eyebrow: 'Attendance + Mood',
    headline: "Every child marked, and how they walked in — by 8:30 AM.",
    story: [
      "Pre-primary attendance is not a checkbox. A child who is present but missing-mum needs a different morning than a child who is present and bouncing. K-12 attendance software has no concept of mood; the teacher writes it into the back of a notebook that no one will read again.",
      "Edullent treats mood as first-class data. Each present-tap pairs with a mood pill — happy, quiet, sleepy, missed-mum — and that signal flows into the parent feed, the principal's morning report, and the end-of-week observation roll-up. The teacher's instinct becomes the record.",
    ],
    callouts: [
      { text: 'Mood pill per child', Icon: Smile,       pos: { top: '11%', left: '-4%' }, color: BLUSH },
      { text: 'Class-wide snapshot', Icon: Activity,    pos: { top: '46%', right: '-5%' }, color: MINT },
      { text: 'Parent feed live',    Icon: BellRing,    pos: { bottom: '14%', left: '40%' }, color: NAVY },
    ],
    pillars: [
      { icon: Smile,     title: '4-mood vocabulary',   body: 'Happy · quiet · sleepy · missed-mum — the four pills that cover 95% of pre-primary mornings. One tap, no typing.' },
      { icon: Activity,  title: 'Live class snapshot', body: 'The room-wide mood distribution composes itself in real time — so the principal can sense the day without walking in.' },
      { icon: BellRing,  title: 'Parent feed by 9 AM', body: 'Each child\'s parent sees their own check-in with the mood — the &lsquo;reached safely&rsquo; the WhatsApp group used to attempt, but personal.' },
    ],
    impact: [
      { value: '92%', label: 'Of parents read the mood pill within 15 minutes of the morning post' },
      { value: '4 pills', label: 'Cover what 200 words of teacher-notes used to' },
    ],
    brand: BLUSH,
  },
  {
    ipad: PreTeacherCareRoutineIPad,
    number: '03',
    eyebrow: 'Care & Routine',
    headline: "The toddler-day logged in one screen — diaper, meals, nap.",
    story: [
      "Pre-primary has three logs no K-12 software thinks about — the diaper register, the meals + allergens log, the nap timer. The school keeps them on paper because every existing &lsquo;school management software&rsquo; was built for high-school report cards. The parent of a three-year-old gets none of it.",
      "Edullent ships the three as first-class surfaces. Quick-log buttons for diaper. Four meals with allergen flash and parallel nap timers. A pickup queue with photo + OTP verification. Built for the rhythm of a pre-primary room, not retrofitted from a K-12 grade-book.",
    ],
    callouts: [
      { text: 'Diaper · 5 quick logs', Icon: Leaf,      pos: { top: '10%', left: '-4%' }, color: MINT },
      { text: 'Allergen flash · live', Icon: Cookie,    pos: { top: '44%', right: '-5%' }, color: PEACH },
      { text: 'Pickup · photo + OTP',  Icon: ShieldCheck, pos: { bottom: '14%', left: '42%' }, color: NAVY },
    ],
    pillars: [
      { icon: Leaf,       title: 'Diaper register, digital', body: 'Wet · soiled · mixed · dry-check · washroom — five buttons, one tap each, time-stamped + parent-visible.' },
      { icon: Cookie,     title: 'Meals with allergen flash', body: 'Four meal types · four portion sizes. Allergens auto-detected from the snack menu — the system warns the teacher before the spoon lands.' },
      { icon: ShieldCheck, title: 'Pickup, verified',         body: 'Photo + OTP + authorized-list match for every child handover. Mismatch auto-pings the principal — never &lsquo;who is this person taking my child&rsquo; again.' },
    ],
    impact: [
      { value: '0 paper logs', label: 'Replaced — diaper register, snack log, pickup register, all in one app' },
      { value: '1 tap', label: 'Per care event · what used to be three columns of a paper sheet' },
    ],
    brand: MINT,
  },
  {
    ipad: PreTeacherObservationsIPad,
    number: '04',
    eyebrow: 'Observations · NEP 2020',
    headline: "Five domains, four rubrics — every note tagged to the framework.",
    story: [
      "NEP 2020 and the NCF-FS rewrote how pre-primary growth should be measured — five learning domains, four rubric bands, evidence-based observation. Most schools already write the notes; nobody is tagging them. At inspection time, the file is a stack of paper a teacher composed the night before.",
      "Edullent ships the framework as the data model. Every observation lands on a child + a domain + a rubric band + a visibility tier (teacher · principal · parent). The end-of-term report writes itself from the evidence, not from the teacher's memory of who did what.",
    ],
    callouts: [
      { text: '5 domains · NEP 2020', Icon: Layers,      pos: { top: '10%', left: '-4%' }, color: NAVY },
      { text: '4-band rubric',         Icon: BookHeart,  pos: { top: '44%', right: '-4%' }, color: PEACH },
      { text: '3 visibility tiers',    Icon: Eye,        pos: { bottom: '12%', left: '40%' }, color: MINT },
    ],
    pillars: [
      { icon: Layers,    title: 'Five-domain coverage', body: 'Physical · Cognitive · Language · Socio-Emotional · Creative. Every note is forced to land on a domain — coverage gaps become visible at term-end.' },
      { icon: BookHeart, title: 'Rubric-band scoring',  body: 'Beginning · Developing · Achieving · Excelling — applied per topic, not per term. The picture is a heatmap, not a single number.' },
      { icon: Eye,       title: 'Tiered visibility',    body: 'Teacher-only · principal · parent-visible. The note that helps the next teacher need not become a WhatsApp forward — the system decides, the teacher commits once.' },
    ],
    impact: [
      { value: 'Inspection-ready', label: 'NEP 2020 + NCF-FS evidence file generates automatically each term' },
      { value: '54 notes / term', label: 'Median in pilots — vs ~6 in the paper-notebook era' },
    ],
    brand: NAVY,
  },
  {
    ipad: PreTeacherPhotoStudioIPad,
    number: '05',
    eyebrow: 'Photo Studio · Consent',
    headline: "Class photos with every parent's permission — built in.",
    story: [
      "A class teacher takes twenty photos a day. WhatsApp pushes them to the group. Two parents quietly didn't want their child on social. The school finds out from a phone call on Saturday morning. The trust is gone before the term is.",
      "Edullent ships photos with consent as a first-class concept. Face-detection identifies each child in the frame, the consent matrix dictates publish · face-mask · auto-exclude, and the teacher uploads with one tap knowing zero parents have been crossed. The Saturday call never happens.",
    ],
    callouts: [
      { text: 'AI · face-detect',     Icon: Camera,       pos: { top: '11%', left: '-4%' }, color: BLUSH },
      { text: 'Per-child consent',    Icon: ShieldCheck,  pos: { top: '44%', right: '-5%' }, color: MINT },
      { text: 'Mask · exclude · publish', Icon: Sparkles, pos: { bottom: '14%', left: '40%' }, color: NAVY },
    ],
    pillars: [
      { icon: Camera,     title: 'Face detection at upload', body: 'Every face in the frame is identified against the class roster. Photos without a face match get flagged for review — strangers never sneak through.' },
      { icon: ShieldCheck, title: 'Consent matrix · per child', body: 'Each parent sets four toggles — in-app · social · group share · brochure. The system never publishes against a setting.' },
      { icon: Sparkles,   title: 'Auto-mask · auto-exclude', body: 'When one child in a group photo has consent off, the engine face-masks that child or auto-excludes the photo entirely. One tap from teacher, zero risk.' },
    ],
    impact: [
      { value: '0 consent breaches', label: 'In pilot schools across a full term — vs 3-7 incidents the year before' },
      { value: '~10 sec', label: 'Per class photo · what manual review used to take an hour to clear' },
    ],
    brand: BLUSH,
  },
  {
    ipad: PreTeacherSafetyIPad,
    number: '06',
    eyebrow: 'Safety Dashboard',
    headline: "One screen the substitute teacher needs — and the parents trust.",
    story: [
      "A substitute teacher walks into a pre-primary classroom and inherits twelve children's allergies, medical notes, blood groups, comfort cues and authorized pickup lists — most of it nowhere in writing. Every absence is a liability waiting for the day it goes wrong.",
      "Edullent collapses the safety record into one printable A4 — allergens rolled up class-wide, per-child medical alerts surfaced by severity, authorized pickup register tappable to call. The substitute teacher walks in informed; the regular teacher walks out covered.",
    ],
    callouts: [
      { text: 'Class allergen roll-up',  Icon: AlertTriangle, pos: { top: '10%', left: '-4%' }, color: RED },
      { text: 'Per-child severity badge', Icon: ShieldCheck,  pos: { top: '44%', right: '-5%' }, color: PEACH },
      { text: 'One-tap call · doctor + parent', Icon: Compass, pos: { bottom: '14%', left: '40%' }, color: MINT },
    ],
    pillars: [
      { icon: AlertTriangle, title: 'Class-wide allergen roll-up', body: 'Every allergen in the class surfaced with count + severity — pinned to the canteen + snack-prep tab. Cross-contamination becomes visible.' },
      { icon: ShieldCheck,   title: 'Per-child severity tier',     body: 'Critical · high · medium · low — sorted automatically. The new teacher knows whose EpiPen, whose inhaler, whose comfort blanket before lunch.' },
      { icon: Compass,       title: 'Tap to call · auto-trail',    body: 'Mother · father · doctor · driver — all in one card, all one tap. Every call timestamps itself into the incident log.' },
    ],
    impact: [
      { value: 'Print-ready A4', label: 'Substitute-teacher handover sheet · auto-generated from the live data' },
      { value: '1 screen', label: 'For 12 children · what used to be 3 filing cabinets and a WhatsApp scramble' },
    ],
    brand: RED,
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
      const color = c.color || NAVY;
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
      className="rounded-[20px] border border-[#1e3272]/10 bg-white p-6 md:p-7 shadow-[0_2px_10px_rgba(15,23,42,0.04)]"
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

const PrePrimaryTeacherDashboard = () => {
  useSeo({
    title: 'Pre-Primary Teacher Dashboard – Edullent',
    description:
      "Built for the pre-primary classroom — slot timeline, mood-aware attendance, diaper + meals + nap logs, NEP 2020 five-domain observations, consent-first photo studio, and a safety dashboard the substitute teacher can read in 30 seconds.",
    canonical: 'https://edullent.com/pre-primary-teacher',
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
            <div
              className="w-11 h-11 rounded-[13px] flex items-center justify-center text-white shadow-[0_6px_18px_rgba(30,50,114,0.32)]"
              style={{ background: `linear-gradient(135deg, ${NAVY}, #2a4498)` }}
            >
              <Shapes className="w-[22px] h-[22px]" strokeWidth={2.1} />
            </div>
            <p className="text-[14px] font-medium tracking-[-0.005em]" style={{ color: NAVY }}>
              For the Pre-Primary Class Teacher
            </p>
          </div>

          <h1 className="text-[#1d1d1f] text-[44px] md:text-[64px] lg:text-[80px] font-semibold leading-[1.02] tracking-[-0.04em] mb-6 max-w-[1000px]">
            The Pre-Primary
            <br />
            Teacher Dashboard.
            <br />
            <span className="text-[#86868b] font-light">Notebooks closed. Children watched.</span>
          </h1>

          <p className="text-[#1d1d1f] text-[18px] md:text-[21px] max-w-[760px] leading-[1.45] tracking-[0.005em] font-light mb-4">
            Six surfaces written for two-to-six-year-olds — slot timeline, mood-aware attendance, diaper + meals + nap, NEP 2020 observations, consent-first photo studio, and a safety screen the substitute teacher trusts. Built mobile-first; the children never see it.
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
            Tomorrow&apos;s pre-primary teacher
            <br />
            won&apos;t carry a notebook.
            <span style={{ background: `linear-gradient(90deg, ${PEACH}, ${BLUSH})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {' '}She&apos;ll carry the room.
            </span>
          </motion.h2>
          <p className="text-[#86868b] text-[16px] md:text-[18px] leading-[1.5] tracking-[0.005em] mb-9 max-w-[640px] mx-auto">
            Edullent ships the slot timeline, the care logs, the NEP-aligned observations, the consent-respecting photo studio and the substitute-ready safety screen — so the pre-primary teacher&apos;s hours go back to the children.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-white text-[16px] font-medium px-7 py-3.5 rounded-full shadow-[0_10px_30px_-8px_rgba(30,50,114,0.5)] transition-colors"
              style={{ background: NAVY }}
            >
              Book a Demo
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="/pre-primary-parent"
              className="inline-flex items-center gap-2 text-[16px] font-medium px-7 py-3.5 rounded-full border border-[#1e3272]/15 hover:bg-[#1e3272]/5 transition-colors"
              style={{ color: NAVY }}
            >
              See the parent side
              <Star className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrePrimaryTeacherDashboard;
