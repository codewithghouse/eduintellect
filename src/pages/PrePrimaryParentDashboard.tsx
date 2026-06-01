import type { ComponentType, ReactNode, CSSProperties } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles, Sun, HeartHandshake, Heart,
  BookHeart, Star, Camera, ShieldCheck, ChevronRight,
  CalendarDays, Bell, FileText, Compass, Layers,
  Smile, Sprout, Lock, Eye,
} from 'lucide-react';
import PreParentTodayIPad from '../components/ipad/PreParentTodayIPad';
import PreParentFeedIPad from '../components/ipad/PreParentFeedIPad';
import PreParentGalleryIPad from '../components/ipad/PreParentGalleryIPad';
import PreParentMilestonesIPad from '../components/ipad/PreParentMilestonesIPad';
import PreParentCalendarNoticesIPad from '../components/ipad/PreParentCalendarNoticesIPad';
import PreParentReportsProfileIPad from '../components/ipad/PreParentReportsProfileIPad';
import { useSeo } from '../lib/useSeo';

/* ═══════════════════════════════════════════════════════════════════════
   PRE-PRIMARY PARENT DASHBOARD — APPLE-KEYNOTE-DEPTH ROLE PAGE
   ─────────────────────────────────────────────────────────────────────────
   For the parent of a two-to-six-year-old. Six surfaces: live "today",
   the day's stream, gallery with consent baked in, NEP 2020 milestones,
   calendar + notices, and reports + profile editing. The parent watches
   the day, never the app — the app earns its keep by being quiet.
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
const BUTTER = '#F59E0B';

const ACTS: Act[] = [
  {
    ipad: PreParentTodayIPad,
    number: '01',
    eyebrow: 'Today',
    headline: "Your child's morning, in your thumb — by 8:35 AM.",
    story: [
      "For the parent of a three-year-old, the 30 minutes after drop-off are the longest of the day. The WhatsApp group is silent. The teacher is teaching. Was she happy? Did she eat? Did she find the friend who was missing yesterday? The phone offers a void; the parent imagines worst cases to fill it.",
      "Edullent fills that void with the actual data. The teacher's morning check-in — present, mood pill, slot timeline, next-up activity — lands in the parent's app the moment the teacher logs it. The parent steps into the day knowing how the child's day started. The void closes; trust opens.",
    ],
    callouts: [
      { text: 'Live check-in · 8:32 AM', Icon: Sun,      pos: { top: '10%', left: '-4%' }, color: PEACH },
      { text: 'Mood pill · today',       Icon: Smile,    pos: { top: '44%', right: '-5%' }, color: BLUSH },
      { text: 'Next up · 10:45',          Icon: Sparkles, pos: { bottom: '14%', left: '40%' }, color: NAVY },
    ],
    pillars: [
      { icon: Sun,      title: 'The morning, live',  body: 'Attendance + mood + slot landed within minutes of the teacher logging it. No "is she okay?" texts to the school WhatsApp group ever again.' },
      { icon: Smile,    title: 'Mood as a first-class signal', body: 'A pill not a paragraph — happy, quiet, sleepy, missed-mum. The parent reads the day in two seconds, the teacher commits in one tap.' },
      { icon: Sparkles, title: 'Today, composed',    body: 'Slot timeline · pickup status · today\'s photo count · the teacher\'s standout note — assembled in one screen, refreshed in real time.' },
    ],
    impact: [
      { value: '8:35 AM', label: 'Median time the morning check-in lands · vs 1 PM phone-call era' },
      { value: '92%', label: 'Of parents read the morning post within 15 minutes' },
    ],
    brand: PEACH,
  },
  {
    ipad: PreParentFeedIPad,
    number: '02',
    eyebrow: 'Daily Stream',
    headline: "The rhythm of the day — meals, naps, art, story — told story-by-story.",
    story: [
      "A pre-primary child has eighteen small moments in a day worth knowing about — and the parent gets none of them. The end-of-day WhatsApp dump is too late, too generic, too dependent on one teacher remembering. The richness of the day dies in the gap.",
      "Edullent ships the day as a stream — every slot, every meal, every nap window, every diaper log, every teacher note — landing in the parent feed as it happens. The parent doesn't scroll the day; she lives it alongside her child. Bedtime conversations get specific.",
    ],
    callouts: [
      { text: 'Stories · slot timeline', Icon: Layers,    pos: { top: '10%', left: '-4%' }, color: PEACH },
      { text: 'Meals · allergen aware',   Icon: HeartHandshake, pos: { top: '44%', right: '-5%' }, color: MINT },
      { text: 'Teacher notes · tagged',   Icon: BookHeart, pos: { bottom: '14%', left: '40%' }, color: BLUSH },
    ],
    pillars: [
      { icon: Layers,    title: 'Slot-by-slot story',    body: 'Circle Time → Snack → Art → Nap → Story — six Instagram-stories pills the parent can tap into for the photo, the note, the time.' },
      { icon: HeartHandshake, title: 'Meals + nap rendered', body: 'Portion + allergen flag for every meal · open-nap pulse + total minutes for every rest. No "what did she eat" guesswork at dinner.' },
      { icon: BookHeart, title: 'Teacher notes · live',  body: 'Behaviour observation, milestone, photo caption — each tagged to the child, each landing as it\'s written, each saved into the term file.' },
    ],
    impact: [
      { value: '~6 events / day', label: 'Median feed events that land in a parent\'s app per child' },
      { value: '4.7 / 5', label: 'In-pilot parent satisfaction · vs 2.8 for "end-of-day WhatsApp" era' },
    ],
    brand: BLUSH,
  },
  {
    ipad: PreParentGalleryIPad,
    number: '03',
    eyebrow: 'Gallery · Consent',
    headline: "Every smile the school caught — only the ones you said yes to.",
    story: [
      "Photos in school WhatsApp groups have broken more parent-school trust than any single thing this decade. One photo of a child whose parent didn't consent ends up in the brochure, on a poster, in a sales deck. The parent finds out from someone else. The bond is broken.",
      "Edullent makes consent a first-class concept. The parent's settings — in-app · group share · social · brochure — sit at the photo level, not the school level. The system never publishes against a setting. The gallery the parent sees is the gallery the school is allowed to show. Always.",
    ],
    callouts: [
      { text: 'Per-photo consent',     Icon: ShieldCheck, pos: { top: '11%', left: '-4%' }, color: MINT },
      { text: 'Parent-owned settings', Icon: Lock,        pos: { top: '44%', right: '-5%' }, color: NAVY },
      { text: 'Face-mask · auto',       Icon: Eye,        pos: { bottom: '14%', left: '40%' }, color: PEACH },
    ],
    pillars: [
      { icon: ShieldCheck, title: 'Consent at the photo', body: '4 toggles per parent, applied at the photo level — never blanket. A school can publish a group photo only if every face in the frame has matching consent.' },
      { icon: Lock,        title: 'Always editable',      body: 'Parent can revoke consent retroactively. Photos delisted within minutes, audit trail kept, school auto-notified.' },
      { icon: Eye,         title: 'Mask · exclude · publish', body: 'When one child says no, the engine face-masks that child in group photos or auto-excludes the photo. The other children still get their moment, the no-photo child still stays no-photo.' },
    ],
    impact: [
      { value: '0 oversteps', label: 'In pilot schools across a full term — every consent setting honored' },
      { value: '14-day window', label: 'Default retention if not favourited · controllable by the parent' },
    ],
    brand: MINT,
  },
  {
    ipad: PreParentMilestonesIPad,
    number: '04',
    eyebrow: 'Growth · NEP 2020',
    headline: "Five domains. Evidence under every checkpoint.",
    story: [
      "Parents of pre-schoolers are sold one of two extremes — &lsquo;all is great&rsquo; smiley-face report cards, or screening apps that fire red flags for every developmental variance. Neither is the truth. The truth is in the small daily evidence — the puzzle she sorted, the friend she comforted, the new word she used.",
      "Edullent ships the NEP 2020 five-domain framework as the parent's growth view. Physical · Cognitive · Language · Socio-Emotional · Creative — each tracked across the rubric, each backed by the teacher's actual evidence note. The parent doesn't need to interpret; the data is shown.",
    ],
    callouts: [
      { text: '5 NEP-FS domains',       Icon: Sprout,    pos: { top: '11%', left: '-4%' }, color: NAVY },
      { text: 'Composite score · 78',    Icon: Star,      pos: { top: '44%', right: '-5%' }, color: BUTTER },
      { text: 'Evidence under every',    Icon: BookHeart, pos: { bottom: '14%', left: '40%' }, color: PEACH },
    ],
    pillars: [
      { icon: Sprout,    title: 'Five-domain truth',   body: 'No single number; five domain scores. The parent sees the strong side, the developing side, the one to watch — without needing a counselor to interpret.' },
      { icon: Star,      title: 'Composite trend',     body: 'A single composite score with delta vs last term — for the parent who wants the headline. Tap once for the breakdown.' },
      { icon: BookHeart, title: 'Evidence-backed',     body: 'Every domain card carries the teacher\'s last observation as a quote — no rubric is shown without the example. Trust is in the specifics.' },
    ],
    impact: [
      { value: '63 obs / term', label: 'Median observation count per child · vs ~6 in the report-card era' },
      { value: 'Auto-shared', label: 'Term-end summary lands as a PDF in the parent\'s app + email' },
    ],
    brand: NAVY,
  },
  {
    ipad: PreParentCalendarNoticesIPad,
    number: '05',
    eyebrow: 'Calendar &amp; Notices',
    headline: "Field trips, fees, PTM slots — never on a paper slip again.",
    story: [
      "Half the things schools tell parents — picnic on Saturday, fee due next Friday, send a leaf for Earth Day — die in the bag. The slip falls out. The reminder is on the fridge of someone who doesn't open the fridge. The school finds out from absence; the parent finds out from another parent.",
      "Edullent ships every school comm as a notice with a tag (event · reminder · alert · celebration · PTM) — with the calendar entry, the RSVP link and the fee-pay button right there. The parent never says &lsquo;I didn't know&rsquo; again. The school never says &lsquo;but we sent the slip&rsquo; again.",
    ],
    callouts: [
      { text: 'Month grid · event chips', Icon: CalendarDays, pos: { top: '10%', left: '-4%' }, color: SKY },
      { text: 'RSVP · fee · slot',         Icon: Bell,         pos: { top: '44%', right: '-5%' }, color: PEACH },
      { text: 'No paper slips',             Icon: ShieldCheck, pos: { bottom: '14%', left: '40%' }, color: MINT },
    ],
    pillars: [
      { icon: CalendarDays, title: 'Month calendar',    body: 'Every school event sits on the right day with a colour chip. Tap to see RSVP / payment / details. The fridge magnet retires.' },
      { icon: Bell,         title: 'Unread badges',     body: 'Pinned notices float to the top; unread auto-marks until tapped. The PTM slot the parent missed last year doesn\'t slip again.' },
      { icon: Compass,      title: 'Deep-linked actions', body: 'RSVP, pay fee, confirm slot — every action is one tap inside the notice itself. The parent never has to navigate to another screen.' },
    ],
    impact: [
      { value: '~3 missed events / year', label: 'Down to · vs ~12 in the WhatsApp + paper-slip era' },
      { value: '88% open rate', label: 'On school notices · within 6 hours of publish' },
    ],
    brand: SKY,
  },
  {
    ipad: PreParentReportsProfileIPad,
    number: '06',
    eyebrow: 'Records · Profile',
    headline: "The daily record archived. The safety record editable.",
    story: [
      "A child changes — the allergy worsens, the comfort cue shifts, the doctor is different now. The school has the wrong information in a six-month-old admission form, and the parent has no way to update it without filling another paper. The day something goes wrong is the day the form is read.",
      "Edullent gives the parent direct edit access to the safety + comfort + pickup record — and archives every daily report so the parent owns the history. The school sees the edit immediately. The audit trail keeps everyone honest. The form ages out of the model.",
    ],
    callouts: [
      { text: 'Daily reports · archived', Icon: FileText,   pos: { top: '11%', left: '-4%' }, color: NAVY },
      { text: 'Parent-edit · profile',     Icon: HeartHandshake, pos: { top: '44%', right: '-5%' }, color: MINT },
      { text: 'Audit · every change',       Icon: ShieldCheck, pos: { bottom: '14%', left: '40%' }, color: BUTTER },
    ],
    pillars: [
      { icon: FileText, title: 'Reports archive',     body: 'Last 45 days of the daily report — mood, meals, nap, notes, photos — all searchable, all PDF-exportable. The bedtime memory lives somewhere.' },
      { icon: Heart,    title: 'Parent-edit profile', body: 'Allergies · medical · diet · comfort cue · authorized pickup · blood group — edited in your thumb, synced to the school in real time.' },
      { icon: ShieldCheck, title: 'Audit trail',     body: 'Every change keeps a version. The school sees the edit log. Nothing changes silently — the trust is in the receipts.' },
    ],
    impact: [
      { value: '45-day archive', label: 'Daily reports in your pocket · PDF download · permanent record' },
      { value: '<1 minute', label: 'Median time for a parent edit to land in the teacher\'s safety screen' },
    ],
    brand: BUTTER,
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
      const color = c.color || PEACH;
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
      className="rounded-[20px] border border-[#FB923C]/12 bg-white p-6 md:p-7 shadow-[0_2px_10px_rgba(15,23,42,0.04)]"
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

const PrePrimaryParentDashboard = () => {
  useSeo({
    title: 'Pre-Primary Parent Dashboard – Edullent',
    description:
      "The parent of a pre-schooler's window into the day — live attendance + mood, a story-by-story feed of meals · naps · care, consent-respecting gallery, NEP 2020 milestones, school calendar + notices, and a record-of-record the parent owns.",
    canonical: 'https://edullent.com/pre-primary-parent',
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
              className="w-11 h-11 rounded-[13px] flex items-center justify-center text-white shadow-[0_6px_18px_rgba(251,146,60,0.4)]"
              style={{ background: `linear-gradient(135deg, ${PEACH}, #FB7B30)` }}
            >
              <HeartHandshake className="w-[22px] h-[22px]" strokeWidth={2.1} />
            </div>
            <p className="text-[14px] font-medium tracking-[-0.005em]" style={{ color: PEACH }}>
              For the Pre-Primary Parent
            </p>
          </div>

          <h1 className="text-[#1d1d1f] text-[44px] md:text-[64px] lg:text-[80px] font-semibold leading-[1.02] tracking-[-0.04em] mb-6 max-w-[1000px]">
            The Pre-Primary
            <br />
            Parent Dashboard.
            <br />
            <span className="text-[#86868b] font-light">Less worry. More day.</span>
          </h1>

          <p className="text-[#1d1d1f] text-[18px] md:text-[21px] max-w-[760px] leading-[1.45] tracking-[0.005em] font-light mb-4">
            Six surfaces written for the parent of a two-to-six-year-old — live morning check-in, story-by-story feed, consent-respecting gallery, NEP 2020 growth view, calendar + notices, and a record the parent owns and edits. The child never sees the app. The parent never feels the void.
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
            Tomorrow&apos;s pre-primary parent
            <br />
            won&apos;t guess the day.
            <span style={{ background: `linear-gradient(90deg, ${PEACH}, ${BLUSH})`, WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {' '}She&apos;ll watch it.
            </span>
          </motion.h2>
          <p className="text-[#86868b] text-[16px] md:text-[18px] leading-[1.5] tracking-[0.005em] mb-9 max-w-[640px] mx-auto">
            Edullent ships the morning check-in, the daily stream, the consent-respecting gallery, the NEP 2020 growth view, the school calendar and the parent-owned safety record — so the parent's first thirty minutes after drop-off go from anxious to grounded.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-white text-[16px] font-medium px-7 py-3.5 rounded-full shadow-[0_10px_30px_-8px_rgba(251,146,60,0.55)] transition-colors"
              style={{ background: PEACH }}
            >
              Book a Demo
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="/pre-primary-teacher"
              className="inline-flex items-center gap-2 text-[16px] font-medium px-7 py-3.5 rounded-full border border-[#1e3272]/15 hover:bg-[#1e3272]/5 transition-colors"
              style={{ color: NAVY }}
            >
              See the teacher side
              <Camera className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrePrimaryParentDashboard;
