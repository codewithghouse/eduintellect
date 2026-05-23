/**
 * Single source of truth for /use-cases content.
 *
 * Each entry drives:
 *  - the use-cases index page (cards)
 *  - the dynamic /use-cases/:slug detail page
 *  - sitemap.xml inclusion
 *
 * Order in this array = order on the index page.
 */

import type { LucideIcon } from 'lucide-react';
import {
  Brain,
  CalendarCheck,
  MessageSquareText,
  BarChart3,
  Settings2,
  FileBarChart,
} from 'lucide-react';

export type UseCaseSlug =
  | 'student-performance'
  | 'attendance'
  | 'communication'
  | 'analytics'
  | 'operations'
  | 'reporting';

export interface UseCaseFaq {
  question: string;
  answer: string;
}

export interface UseCaseStep {
  label: string;
  description?: string;
}

export interface UseCaseCapability {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface UseCaseRoleImpact {
  role: 'Owner' | 'Principal' | 'Teacher' | 'Parent';
  benefit: string;
}

export interface UseCase {
  slug: UseCaseSlug;
  /** Card label on the index page. */
  cardTitle: string;
  /** One-line summary on the index card. */
  cardSummary: string;
  /** Icon for the index card. */
  cardIcon: LucideIcon;

  /** Long-form metadata. */
  metaTitle: string;
  metaDescription: string;

  /** Page hero. */
  eyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;

  /** Problem framing — what's broken before Edullent. */
  problemTitle: string;
  problemBody: string;

  /** 5-step Data → Outcome flow. */
  flow: UseCaseStep[];

  /** Edullent's capabilities relevant to this use case. */
  capabilities: UseCaseCapability[];

  /** Role-by-role benefit. */
  roleImpact: UseCaseRoleImpact[];

  /** Outcomes seen in pilots. */
  outcomes: Array<{ metric: string; label: string }>;

  /** FAQs (also feed FAQ schema). */
  faqs: UseCaseFaq[];

  /** Related routes shown at the bottom of the page. */
  related: Array<{ to: string; title: string; description: string }>;
}

export const USE_CASES: UseCase[] = [
  // ─── 1. Student performance ─────────────────────────────────────────
  {
    slug: 'student-performance',
    cardTitle: 'Student performance',
    cardSummary:
      'Predict which students are slipping before a test confirms it. Turn term-end shock into early intervention.',
    cardIcon: Brain,

    metaTitle: 'Student Performance Intelligence — Edullent Use Case',
    metaDescription:
      'Predict slipping students six weeks before the test does. Concept strengths, risk prediction, and per-student trajectories for every classroom in your school.',

    eyebrow: 'Use case',
    heroTitle: 'Stop discovering at-risk students at the end of the term.',
    heroSubtitle:
      'Edullent turns the test marks, attendance pattern and concept-level signal into a per-student trajectory — six weeks before the report card.',
    heroDescription:
      'A student doesn\'t fail in the exam — they fail in the seventh week of the term. Edullent\'s student performance intelligence catches the drift at week three.',

    problemTitle: 'What schools live with today',
    problemBody:
      'Performance is reviewed twice a year — the mid-term and the final. By the time a teacher sees a slip on paper, the student has been falling behind for thirty class hours. There is no concept-level diagnosis, no risk score, no intervention list. The PTM exists to deliver bad news after the term is over.',

    flow: [
      { label: 'Capture', description: 'Marks, concept strengths, attendance, assignment scores — every signal a student generates in the LMS.' },
      { label: 'Score', description: 'Edullent\'s engine computes a per-student trajectory updated daily.' },
      { label: 'Predict', description: 'The Risk Predictor flags Critical / At-risk / Stable / Excelling weeks before a test would.' },
      { label: 'Recommend', description: 'Each flagged student arrives with a suggested intervention list — concept, peer, parent or 1:1 plan.' },
      { label: 'Resolve', description: 'Teachers act. Parents are looped in via Parent Connect. The next week\'s data reflects the change.' },
    ],

    capabilities: [
      { title: 'AI Risk Predictor', description: 'Four-tier risk classification updated as new marks land.', icon: Brain },
      { title: 'Concept strengths', description: 'Subject-level drilldown to the topic that\'s dragging the student.', icon: BarChart3 },
      { title: 'Performance trends', description: 'Per-student trajectory across terms, with peer-class context.', icon: BarChart3 },
      { title: 'Intervention list', description: 'AI surfaces what to do, not just who is at risk.', icon: Brain },
      { title: 'Parent loop', description: 'Daily intelligence to parents — they see the drift, not the post-mortem.', icon: MessageSquareText },
      { title: 'Branch comparison', description: 'For groups: which campus has rising at-risk populations.', icon: BarChart3 },
    ],

    roleImpact: [
      { role: 'Owner', benefit: 'Network-wide risk view — which branch is producing the most slipping students this term.' },
      { role: 'Principal', benefit: 'A live list of who needs intervention this week, ranked by urgency.' },
      { role: 'Teacher', benefit: 'Per-class risk heatmap and the suggested intervention for each flagged student.' },
      { role: 'Parent', benefit: 'A weekly read of how their child is actually doing — not how they did three months ago.' },
    ],

    outcomes: [
      { metric: '~6 weeks earlier', label: 'first risk-student intervention vs. previous year' },
      { metric: '4-tier', label: 'risk classification — Critical / At-risk / Stable / Excelling' },
      { metric: 'Daily', label: 'trajectory refresh — not term-end snapshot' },
    ],

    faqs: [
      {
        question: 'Does the Risk Predictor work in the first weeks of a new academic year?',
        answer:
          'Yes. Edullent carries forward the previous year\'s signal where available, and starts producing usable predictions after the first two graded data points of the new term. Schools usually see meaningful risk classifications by week three.',
      },
      {
        question: 'How is "risk" actually computed?',
        answer:
          'It\'s a composite — recent marks trend, attendance pattern, assignment completion velocity, and concept-strength regression. The composite is calibrated per-school, so it understands what "normal" looks like in your institution, not someone else\'s.',
      },
      {
        question: 'Do teachers have to override the AI?',
        answer:
          'No — the AI never decides for the teacher. It surfaces the student and the suggested intervention. The teacher chooses. Edullent\'s design rule: AI ranks and recommends; humans decide and act.',
      },
      {
        question: 'Will parents see the same risk classification as teachers?',
        answer:
          'No. Parents see a softer, parent-facing read of trajectory — what to watch, what to ask, what the school is already doing. The internal Critical / At-risk language stays inside the institution.',
      },
    ],

    related: [
      { to: '/use-cases/analytics', title: 'School analytics', description: 'See the underlying analytics that power risk prediction.' },
      { to: '/use-cases/reporting', title: 'Reporting', description: 'How performance signal becomes report cards in hours, not days.' },
      { to: '/for-principals', title: 'For Principals', description: 'How a principal runs a school on this signal.' },
      { to: '/insights/why-student-analytics-is-the-new-attendance', title: 'Why student analytics is the new attendance', description: 'The frame Edullent thinks in.' },
    ],
  },

  // ─── 2. Attendance ──────────────────────────────────────────────────
  {
    slug: 'attendance',
    cardTitle: 'Attendance',
    cardSummary:
      'Daily attendance becomes a leading indicator, not a paper trail. One tap from teachers, intelligence for everyone else.',
    cardIcon: CalendarCheck,

    metaTitle: 'Digital Attendance Intelligence — Edullent Use Case',
    metaDescription:
      'One-tap attendance for teachers. Pattern detection for principals. Parent push notifications. Branch comparison for owners. The whole stack on one signal.',

    eyebrow: 'Use case',
    heroTitle: 'Attendance is a leading indicator. Treat it that way.',
    heroSubtitle:
      'Edullent turns the daily attendance ritual into a network-wide signal — and removes the paperwork at the source.',
    heroDescription:
      'Most schools collect attendance and lose it inside a register. Edullent makes the same one-tap-per-student input visible at every level — parent, teacher, principal, owner — within seconds.',

    problemTitle: 'What schools live with today',
    problemBody:
      'Attendance gets marked twice — once in a register, once in a parent WhatsApp group. Patterns hide in the register: the student missing every Monday, the class with creeping absence on the second day of a unit. Parents find out their child was absent at the parent-teacher meeting, three weeks later.',

    flow: [
      { label: 'Mark', description: 'One-tap class roster on the Teacher app. No login friction.' },
      { label: 'Sync', description: 'Live to the Principal dashboard the same second.' },
      { label: 'Notify', description: 'Absent-student parent gets a push within minutes — not at PTM.' },
      { label: 'Detect', description: 'Edullent flags repeating patterns: Monday absentees, post-lunch dropouts, cohort drift.' },
      { label: 'Decide', description: 'Owners and principals see attendance as a leading indicator of dropout risk, not a compliance entry.' },
    ],

    capabilities: [
      { title: 'One-tap roster', description: 'Class-wise attendance with zero typing.', icon: CalendarCheck },
      { title: 'Live propagation', description: 'Teacher → Principal → Parent in the same second.', icon: MessageSquareText },
      { title: 'Pattern detection', description: 'Repeat absentees, low days, drift by class and section.', icon: BarChart3 },
      { title: 'Parent push', description: 'Auto-notify parents the moment a child is marked absent.', icon: MessageSquareText },
      { title: 'Branch view', description: 'For groups: which campus is sliding on attendance this week.', icon: BarChart3 },
      { title: 'Audit trail', description: 'Every edit, override and correction stamped — useful at the next inspection.', icon: CalendarCheck },
    ],

    roleImpact: [
      { role: 'Owner', benefit: 'Branch-by-branch attendance comparison — which campus has the leakage.' },
      { role: 'Principal', benefit: 'Today\'s attendance map of the school, plus a "students of concern" list.' },
      { role: 'Teacher', benefit: 'Mark the whole class in under 15 seconds. Done.' },
      { role: 'Parent', benefit: 'Real-time push the moment a child is marked absent — no more month-old surprises.' },
    ],

    outcomes: [
      { metric: '~15 seconds', label: 'to mark an entire class — vs. minutes of paperwork' },
      { metric: 'Live', label: 'parent notification — not weekly summary' },
      { metric: 'Pattern alerts', label: 'on repeat absentees, drift, and post-break dropouts' },
    ],

    faqs: [
      {
        question: 'What if the class teacher is absent — who marks attendance?',
        answer:
          'Edullent supports substitution: any logged-in teacher with class access can mark on behalf of the assigned teacher, and the entry is stamped as a delegated mark in the audit trail.',
      },
      {
        question: 'Does attendance work offline?',
        answer:
          'The Teacher app caches a partially-marked class if the device loses connectivity, and syncs the moment a signal returns. Schools in patchy-signal locations rely on this regularly.',
      },
      {
        question: 'Can attendance be edited after a class ends?',
        answer:
          'Yes — within a school-configurable window, with audit. After the window closes, edits require a principal-level override and are flagged.',
      },
      {
        question: 'Does Edullent integrate with biometric or RFID attendance systems?',
        answer:
          'Yes — Edullent ingests external attendance feeds and treats them as one input alongside teacher-marked attendance. Conflicts are surfaced; nothing is silently overwritten.',
      },
    ],

    related: [
      { to: '/features/attendance', title: 'Digital Attendance feature', description: 'Walkthrough of the attendance feature itself.' },
      { to: '/use-cases/analytics', title: 'Analytics', description: 'Attendance plus marks plus engagement — combined into per-student signal.' },
      { to: '/use-cases/communication', title: 'Parent communication', description: 'The auto-notify pipeline that attendance hooks into.' },
      { to: '/for-teachers', title: 'For Teachers', description: 'The teacher-facing experience.' },
    ],
  },

  // ─── 3. Parent communication ────────────────────────────────────────
  {
    slug: 'communication',
    cardTitle: 'Parent communication',
    cardSummary:
      'Replace the WhatsApp group, the printed circular and the term-end PTM with a single daily intelligence feed per parent.',
    cardIcon: MessageSquareText,

    metaTitle: 'Parent Communication — Edullent Use Case',
    metaDescription:
      'Move parents off WhatsApp groups and onto a per-child daily intelligence feed. Push notifications, attendance pings, performance reads — one channel.',

    eyebrow: 'Use case',
    heroTitle: 'Parents already want this. The school is the bottleneck.',
    heroSubtitle:
      'Edullent replaces the WhatsApp group, the printed circular and the quarterly PTM with a per-child daily intelligence feed.',
    heroDescription:
      'Parents in 2026 expect what they already get from every other vendor in their life: a personalized, real-time, structured read. Edullent ships that read for every child in the school, with zero teacher effort beyond marking class.',

    problemTitle: 'What schools live with today',
    problemBody:
      'Communication leaks across three channels: a class WhatsApp group, a printed circular nobody reads, and the quarterly parent-teacher meeting. Nothing is personalized to the child. Teachers spend hours writing the same update fifty times. Parents stop opening the WhatsApp group by month three.',

    flow: [
      { label: 'Capture', description: 'Attendance, marks, behaviour, milestones, photos — all generated by routine class activity.' },
      { label: 'Personalize', description: 'The parent feed is filtered to their child only — no class-wide noise.' },
      { label: 'Push', description: 'Attendance pings, performance reads and milestone updates land in Parent Connect automatically.' },
      { label: 'Broadcast', description: 'School-wide announcements still ship in one click — but no longer compete with the daily feed.' },
      { label: 'Measure', description: 'Edullent reports back to the principal: which parents are engaged, which are dormant, which to call.' },
    ],

    capabilities: [
      { title: 'Per-child feed', description: 'Parents see their child\'s timeline, nothing else.', icon: MessageSquareText },
      { title: 'Push notifications', description: 'Attendance, marks, milestones — instant.', icon: MessageSquareText },
      { title: 'School broadcasts', description: 'One-tap for announcements, with delivery + read receipts.', icon: MessageSquareText },
      { title: 'Photo galleries', description: 'Per-child gallery — especially load-bearing for Pre-Primary.', icon: MessageSquareText },
      { title: 'Engagement scoring', description: 'See which parents are reading and which need a personal call.', icon: BarChart3 },
      { title: 'Pre-Primary safe', description: 'Communication never touches a child-facing app — by product policy.', icon: MessageSquareText },
    ],

    roleImpact: [
      { role: 'Owner', benefit: 'School-wide parent engagement number — what your brand actually delivers.' },
      { role: 'Principal', benefit: 'Engagement leaderboard by class, plus the "parents to call" shortlist.' },
      { role: 'Teacher', benefit: 'Marking class is the communication. No separate writing.' },
      { role: 'Parent', benefit: 'A clean daily read of just their child — no WhatsApp noise, no missed circulars.' },
    ],

    outcomes: [
      { metric: '92%', label: 'parent-side engagement on Parent Connect within 8 weeks at Pilot School A' },
      { metric: 'Zero', label: 'extra writing burden on the class teacher' },
      { metric: '1 channel', label: 'replaces WhatsApp + circular + PTM as the spine' },
    ],

    faqs: [
      {
        question: 'Will parents still use WhatsApp anyway?',
        answer:
          'Some will. The goal is not to ban WhatsApp — it\'s to move the structured, child-specific, school-of-record communication into Edullent. Once parents start getting daily intelligence in Parent Connect, the WhatsApp group naturally shrinks to social chatter.',
      },
      {
        question: 'What about parents without smartphones?',
        answer:
          'Edullent supports low-data web access from any browser, and schools regularly export the same updates as printed letters for the small fraction of households that need it. The product is built for India\'s real device distribution, not a US assumption.',
      },
      {
        question: 'How is Parent Connect different from a generic school app?',
        answer:
          'Generic school apps ship a chat box. Edullent ships personalized per-child intelligence — attendance, marks, behaviour, milestones, photos — automatically generated by the school\'s normal day. There\'s no second job called "writing updates".',
      },
      {
        question: 'Are messages from parents one-way only?',
        answer:
          'No. Parents can message teachers, with school-level moderation rules. But the spine of communication is school → parent, structured and durable, not a chat thread that disappears.',
      },
    ],

    related: [
      { to: '/for-parents', title: 'For Parents', description: 'The parent-side experience in full.' },
      { to: '/use-cases/attendance', title: 'Attendance', description: 'The first signal parents see arrive.' },
      { to: '/use-cases/operations', title: 'School operations', description: 'How communication fits into the operational fabric.' },
      { to: '/insights/from-school-erp-to-education-intelligence', title: 'From ERP to intelligence', description: 'Why "circulars and chat" is not the spine.' },
    ],
  },

  // ─── 4. Analytics ───────────────────────────────────────────────────
  {
    slug: 'analytics',
    cardTitle: 'School analytics',
    cardSummary:
      'See your school the way the data sees it — not the way the calendar sees it. Trends, drift, leaderboards, comparisons.',
    cardIcon: BarChart3,

    metaTitle: 'School Analytics Platform — Edullent Use Case',
    metaDescription:
      'See your school the way the data sees it. Cross-class trends, branch comparison, teacher composite scores, parent engagement leaderboards. Live, not quarterly.',

    eyebrow: 'Use case',
    heroTitle: 'See your school the way the data sees it.',
    heroSubtitle:
      'Edullent\'s analytics layer reads every signal the school produces — attendance, marks, behaviour, parent engagement, teacher performance — and rank-orders it live.',
    heroDescription:
      'Most schools don\'t lack data. They lack the layer that makes data legible to a non-analyst. Edullent is that layer.',

    problemTitle: 'What schools live with today',
    problemBody:
      'The data sits in registers, mark-sheets, fee software and three WhatsApp exports. Pulling a single trend — say, attendance vs. marks correlation across a class — is a week of work for the academic team. Most schools simply never ask the question.',

    flow: [
      { label: 'Ingest', description: 'Every signal generated by Edullent\'s dashboards flows into the analytics layer.' },
      { label: 'Normalize', description: 'Per-school baselines, per-subject calibration, per-cohort context.' },
      { label: 'Rank', description: 'Branches, classes, teachers, parents, students — all rank-ordered live.' },
      { label: 'Surface', description: 'The right number for the right role, on the right dashboard.' },
      { label: 'Drill', description: 'One click from any number to the underlying students, classes or teachers.' },
    ],

    capabilities: [
      { title: 'Branch leaderboard', description: 'Live cross-branch rank with AI surfacing the differentiator.', icon: BarChart3 },
      { title: 'Teacher composite', description: 'Multi-factor teacher score across attendance discipline, class results and parent NPS.', icon: BarChart3 },
      { title: 'Risk Predictor', description: 'Per-student trajectory updated daily.', icon: Brain },
      { title: 'Parent engagement', description: 'Class-wise engagement leaderboard for the principal.', icon: BarChart3 },
      { title: 'Attendance patterns', description: 'Pattern detection across days, classes and cohorts.', icon: CalendarCheck },
      { title: 'Drill-through', description: 'Every number on every dashboard drills to the underlying records.', icon: BarChart3 },
    ],

    roleImpact: [
      { role: 'Owner', benefit: 'A live, ranked view of every signal across every branch.' },
      { role: 'Principal', benefit: 'A weekly read of the school in five numbers — and what changed.' },
      { role: 'Teacher', benefit: 'Per-class heatmaps, not a quarterly average that hides the slip.' },
      { role: 'Parent', benefit: 'A clean read of their child against class context, without exposing other students.' },
    ],

    outcomes: [
      { metric: 'One screen', label: 'replaces the academic team\'s end-of-term Excel ritual' },
      { metric: 'Live', label: 'rank-ordering — not quarterly snapshots' },
      { metric: '6+ ranked lists', label: 'branches, classes, teachers, parents, students, subjects' },
    ],

    faqs: [
      {
        question: 'Do we need a data scientist to use this?',
        answer:
          'No. Edullent\'s analytics layer is for school owners, principals and teachers — people who run schools, not Jupyter notebooks. Every number arrives with the suggested next action.',
      },
      {
        question: 'Can I export the data to my own tools?',
        answer:
          'Yes — Edullent exposes role-scoped exports for accounting tools and BI dashboards. Owners can pull cross-branch summaries; principals can pull campus-level breakdowns.',
      },
      {
        question: 'Are the analytics scoped per role?',
        answer:
          'Strictly. Teachers see their classes. Principals see their campus. Owners see the group. Parents see their child. No leakage, no shared dashboards — that\'s a foundational rule.',
      },
      {
        question: 'How is "live" different from "real-time"?',
        answer:
          'Edullent updates analytics within seconds of a source-of-truth event (attendance mark, test entry, fee receipt). For most school decisions that\'s real-time enough — and the heavier aggregations refresh hourly.',
      },
    ],

    related: [
      { to: '/school-analytics-platform', title: 'School Analytics Platform', description: 'The platform-level positioning page.' },
      { to: '/use-cases/student-performance', title: 'Student performance', description: 'The analytics that catch slipping students.' },
      { to: '/use-cases/reporting', title: 'Reporting', description: 'How analytics becomes reports parents and boards read.' },
      { to: '/education-intelligence-platform', title: 'Education Intelligence Platform', description: 'Why analytics is core, not an add-on.' },
    ],
  },

  // ─── 5. Operations ──────────────────────────────────────────────────
  {
    slug: 'operations',
    cardTitle: 'School operations',
    cardSummary:
      'Timetables, substitutions, fees, alerts, settings — the everyday operational fabric without the spreadsheet mess.',
    cardIcon: Settings2,

    metaTitle: 'School Operations — Edullent Use Case',
    metaDescription:
      'Run the school\'s operational spine on Edullent — timetables, substitutions, fees, alerts, settings — without spreadsheets, WhatsApp groups, or scattered ERPs.',

    eyebrow: 'Use case',
    heroTitle: 'The daily fabric — without the spreadsheet mess.',
    heroSubtitle:
      'Edullent handles the everyday operational layer most schools survive with three half-built tools and one heroic office manager.',
    heroDescription:
      'Timetables, substitutions, fee status, alerts, settings, branch configuration — the routine work that has to happen every day for a school to function. Edullent ships this as a single coherent layer, not a bag of features.',

    problemTitle: 'What schools live with today',
    problemBody:
      'The timetable is in Excel. Substitutions are managed on WhatsApp. Fee status lives in a different software. Alerts go through the office. The result: every operational change requires four updates in four places, and one of them gets missed every week.',

    flow: [
      { label: 'Configure', description: 'School structure, classes, sections, teachers and timetables set once.' },
      { label: 'Run', description: 'Daily operations — substitutions, alerts, fee actions — flow through one surface.' },
      { label: 'Notify', description: 'Stakeholders are auto-informed where it matters — parents on absence, owner on overdue fees.' },
      { label: 'Audit', description: 'Every operational change leaves a trail. Useful at inspection time.' },
      { label: 'Iterate', description: 'Configuration evolves through the year — Edullent doesn\'t require a re-deploy.' },
    ],

    capabilities: [
      { title: 'Timetable', description: 'Class-wise, teacher-wise, with substitution baked in.', icon: Settings2 },
      { title: 'Fee status', description: 'Live, drillable, with parent reminders auto-shipped.', icon: BarChart3 },
      { title: 'Alerts engine', description: 'School broadcasts, role-scoped alerts, holiday updates.', icon: MessageSquareText },
      { title: 'Settings', description: 'Per-school configuration without engineering involvement.', icon: Settings2 },
      { title: 'Branch fabric', description: 'Multi-branch groups: per-branch isolation with group-level aggregation.', icon: Settings2 },
      { title: 'Audit trail', description: 'Every operational change stamped — useful for inspections.', icon: Settings2 },
    ],

    roleImpact: [
      { role: 'Owner', benefit: 'Group-wide operational health on one dashboard — fees, attendance, anomalies.' },
      { role: 'Principal', benefit: 'Substitutions, timetable changes, fee alerts — done from one place.' },
      { role: 'Teacher', benefit: 'Today\'s schedule, today\'s substitutions, today\'s alerts — already in the app.' },
      { role: 'Parent', benefit: 'Fee status, holiday schedule, school broadcasts — no separate "office number".' },
    ],

    outcomes: [
      { metric: 'One surface', label: 'replaces timetable + WhatsApp + fee software + email circular' },
      { metric: 'Two-week rollout', label: 'for a single-campus operational layer' },
      { metric: 'Branch-aware', label: 'multi-tenant fabric — no re-platforming to add a campus' },
    ],

    faqs: [
      {
        question: 'How does substitution work day-to-day?',
        answer:
          'When a teacher is marked absent, Edullent surfaces an eligible-substitute list for the principal — based on free periods, subject expertise and recent load. One tap notifies the chosen substitute and updates the affected class.',
      },
      {
        question: 'Can fee reminders be customized per school?',
        answer:
          'Yes — schools control the cadence, the wording template, the parent channel and the escalation list. Edullent\'s defaults are sensible; the toggles are real.',
      },
      {
        question: 'What about hostel, transport, or library modules?',
        answer:
          'Edullent\'s spine is the intelligence + daily operational layer. Hostel and transport modules are on the roadmap and ship for institutions that need them; the core platform doesn\'t depend on them.',
      },
      {
        question: 'How does multi-branch operational configuration work?',
        answer:
          'Each branch is isolated by default — its own timetable, its own fee structure, its own teacher roster. Group-level settings cascade down where the owner explicitly opts in. Nothing leaks across branches without a deliberate decision.',
      },
    ],

    related: [
      { to: '/features/fees', title: 'Fee Management feature', description: 'The fee operational surface in detail.' },
      { to: '/use-cases/reporting', title: 'Reporting', description: 'How operational data becomes management reports.' },
      { to: '/for-principals', title: 'For Principals', description: 'How a principal runs operations on Edullent.' },
      { to: '/modern-school-operating-system', title: 'Modern School Operating System', description: 'The platform framing for operations.' },
    ],
  },

  // ─── 6. Reporting ───────────────────────────────────────────────────
  {
    slug: 'reporting',
    cardTitle: 'Reporting',
    cardSummary:
      'Reports that already exist — term cards, board summaries, parent reads. From three days of pain to a single click.',
    cardIcon: FileBarChart,

    metaTitle: 'Automated School Reporting — Edullent Use Case',
    metaDescription:
      'Term-end report cards, board summaries, parent reads — all generated from live signal. Three days of academic team work becomes a single click.',

    eyebrow: 'Use case',
    heroTitle: 'Reports that already exist.',
    heroSubtitle:
      'Edullent generates the term-end report, the management summary and the parent read from the same live signal — no separate data-entry ritual at the end of every term.',
    heroDescription:
      'In most Indian schools, the academic team spends three days at term end re-typing what they already know into a report template. Edullent removes that step entirely.',

    problemTitle: 'What schools live with today',
    problemBody:
      'Reporting is a separate job. The marks are entered in one system, the attendance in another, the behaviour notes on paper — and then the academic team manually stitches it back together into a report card. Owners get a one-page summary at the AGM, six months after the events it describes.',

    flow: [
      { label: 'Collect', description: 'All term signal — marks, attendance, behaviour, milestones — lives in Edullent already.' },
      { label: 'Compose', description: 'Term cards, board summaries and parent reads are generated from the same source.' },
      { label: 'Personalize', description: 'Each parent sees their child\'s report; each board member sees their slice.' },
      { label: 'Distribute', description: 'PDF, print, and in-app — one click, multiple destinations.' },
      { label: 'Archive', description: 'Every issued report is durably stored, searchable and audit-trailed.' },
    ],

    capabilities: [
      { title: 'Term-end report cards', description: 'Auto-generated from live marks + attendance + behaviour.', icon: FileBarChart },
      { title: 'Board summaries', description: 'A one-pager for the management committee — generated, not assembled.', icon: FileBarChart },
      { title: 'Parent reads', description: 'A parent-friendly version of the same data, child by child.', icon: MessageSquareText },
      { title: 'AI Risk attach', description: 'Risk classification attached to each student\'s report for internal use.', icon: Brain },
      { title: 'Branch report', description: 'For groups: a per-branch and group-level rollup.', icon: BarChart3 },
      { title: 'Archive + audit', description: 'Every issued report is durably stored and searchable.', icon: FileBarChart },
    ],

    roleImpact: [
      { role: 'Owner', benefit: 'A board-ready group summary every month — auto-built from live signal.' },
      { role: 'Principal', benefit: 'Term cards generated in hours, not three working days.' },
      { role: 'Teacher', benefit: 'No re-entry of marks into a report template — they\'re already in.' },
      { role: 'Parent', benefit: 'A clean, child-focused term read — same data, friendlier framing.' },
    ],

    outcomes: [
      { metric: '3 days → 4 hours', label: 'to generate end-of-term reports at Pilot School B' },
      { metric: 'Zero', label: 'manual re-entry of marks into report templates' },
      { metric: 'One source', label: 'feeds the term card, the parent read and the board summary' },
    ],

    faqs: [
      {
        question: 'Can the report card template be customized to my school\'s format?',
        answer:
          'Yes. Edullent supports school-specific templates — letterhead, grading scheme, remarks structure, signature blocks. The data is the engine; the presentation is yours.',
      },
      {
        question: 'What about board exam reports?',
        answer:
          'For CBSE / ICSE / state board reporting, Edullent generates the underlying data sheets the school submits, and surfaces the same data internally for prediction and intervention long before the official cycle.',
      },
      {
        question: 'Can parents download or print the report?',
        answer:
          'Yes — Parent Connect ships the term card as a downloadable PDF and a clean in-app read. Schools that want only one of those can configure that per term.',
      },
      {
        question: 'Are AI-generated remarks reviewable before issue?',
        answer:
          'Yes. AI-suggested remarks always pass through a teacher review queue before they\'re attached to a report. Edullent\'s rule: AI drafts, teacher approves, school issues.',
      },
    ],

    related: [
      { to: '/features/reports', title: 'Report Generation feature', description: 'The feature page for report generation.' },
      { to: '/use-cases/student-performance', title: 'Student performance', description: 'The performance layer that feeds the report.' },
      { to: '/use-cases/analytics', title: 'School analytics', description: 'The analytics layer behind every report.' },
      { to: '/customers', title: 'Customer stories', description: 'How Pilot School B collapsed reporting from three days to four hours.' },
    ],
  },
];

export const USE_CASE_BY_SLUG = new Map<UseCaseSlug, UseCase>(
  USE_CASES.map((u) => [u.slug, u]),
);

export const getUseCase = (slug: string): UseCase | undefined =>
  USE_CASE_BY_SLUG.get(slug as UseCaseSlug);
