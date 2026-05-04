/**
 * Real USPs lifted verbatim from:
 *   - src/pages/OwnerDashboard.tsx
 *   - src/pages/PrincipalDashboard.tsx
 *   - src/pages/TeacherDashboard.tsx
 *   - src/pages/StudentParentDashboard.tsx
 *
 * Each USP also describes the cursor interaction path the
 * AppleHandCursor should follow on its iPad screen — coordinates are in
 * percent of the iPad screen so they stay correct regardless of size.
 */

export type CursorStop = {
  /** % left within the iPad screen */
  x: number;
  /** % top within the iPad screen */
  y: number;
  /** Frames to spend traveling here from the previous stop */
  travel: number;
  /** Frames to dwell after arriving — set click=true to pulse a click */
  dwell: number;
  click?: boolean;
  /** Optional caption shown at the bottom while at this stop */
  caption?: string;
};

export type USP = {
  id: string;
  eyebrow: string;
  headline: string;
  body: string;
  bullets: string[];
  brand: string;
  /** Background color for the iPad screen mock — keeps each scene visually distinct */
  screenBg: string;
  /** Display name shown in the iPad's mock app header */
  screenLabel: string;
  /** Sequence of cursor interactions on the iPad */
  cursorPath: CursorStop[];
};

export type RoleSpec = {
  id: 'owner' | 'principal' | 'teacher' | 'parent';
  label: string;
  title: string;
  subtitle: string;
  accent: string;
  icon: string;
  usps: USP[];
};

/* ════════════════════════════════════════════════════════════
   OWNER  — 7 USPs
═══════════════════════════════════════════════════════════ */
const ownerUsps: USP[] = [
  {
    id: 'owner-student-intel',
    eyebrow: 'Student Intelligence',
    headline: 'Every student. Every branch. One view.',
    body:
      'Cross-branch student analytics with performance distribution, top performers, and AI-driven brand insights.',
    bullets: [
      'Network-wide stats: Total / At-Risk / Top 10% / Avg GPA / Engaged',
      'Performance distribution histogram across 5 buckets',
      'Top 100 students table with branch, score, attendance, growth',
      'AI Brand Insight surfacing the differentiator each month',
    ],
    brand: '#0055FF',
    screenBg: '#EEF4FF',
    screenLabel: 'Student Intelligence',
    // Varied path: quick hover sweep across KPIs → click into chart → scroll-style descent → click insight
    cursorPath: [
      { x: 22, y: 24, travel: 20, dwell: 12, caption: 'Network-wide student rollup' },
      { x: 38, y: 24, travel: 8, dwell: 8 },
      { x: 56, y: 24, travel: 8, dwell: 10, caption: 'Top 10% — 842 students' },
      { x: 80, y: 36, travel: 18, dwell: 22, click: true, caption: 'Performance distribution' },
      { x: 42, y: 60, travel: 26, dwell: 18, caption: 'Top 100 ranked list' },
      { x: 32, y: 84, travel: 22, dwell: 30, click: true, caption: 'AI Brand Insight surfaced' },
    ],
  },
  {
    id: 'owner-risk-predictor',
    eyebrow: 'AI Risk Predictor',
    headline: 'Catch dropouts six weeks before they happen.',
    body:
      'Multi-signal ML scoring every student weekly across attendance, marks, behaviour and engagement. Tiered Critical → Watch → Recovered.',
    bullets: [
      '4 risk tier cards: Critical / At-Risk / Watch / Recovered',
      'Top critical students with specific signals — Att 48%, Marks ↓ 24%',
      'Model signal weights — transparent explainability',
      'Auto-recalibration from outcome data quarterly',
    ],
    brand: '#FF3355',
    screenBg: '#FFF1F3',
    screenLabel: 'AI Risk Predictor',
    // Snappy alert-feed sweep: cursor moves across 4 tiers row, double-stops on critical, descends list
    cursorPath: [
      { x: 28, y: 18, travel: 14, dwell: 8, caption: '4 risk tiers — refreshed weekly' },
      { x: 46, y: 18, travel: 6, dwell: 6 },
      { x: 64, y: 18, travel: 6, dwell: 6 },
      { x: 82, y: 18, travel: 6, dwell: 14, click: true, caption: '12 students — Critical tier' },
      { x: 28, y: 56, travel: 26, dwell: 14, caption: 'Per-student risk signals' },
      { x: 70, y: 56, travel: 16, dwell: 14, caption: 'Att 48% · Marks ↓ 24%' },
      { x: 50, y: 82, travel: 20, dwell: 26, click: true, caption: 'Send 1-tap intervention' },
    ],
  },
  {
    id: 'owner-teacher-perf',
    eyebrow: 'Teacher Performance',
    headline: 'Know your best teachers — and your weakest — by Friday.',
    body:
      'Composite teacher score across attendance discipline, class average, parent NPS, grading speed. Network-wide ranking with branch and subject filters.',
    bullets: [
      '4 KPIs: Avg Composite / Top Performers / Need Coaching / Parent NPS',
      'Sortable network table with all 259 teachers',
      'Branch + Subject filters, composite-ranked',
      'Color-coded rows by performance band',
    ],
    brand: '#0055FF',
    screenBg: '#EEF4FF',
    screenLabel: 'Teacher Performance',
    cursorPath: [
      { x: 24, y: 16, travel: 22, dwell: 16, caption: 'Composite score across the network' },
      { x: 70, y: 22, travel: 22, dwell: 22, click: true, caption: 'Filter by branch — Bandra' },
      { x: 50, y: 60, travel: 26, dwell: 20, caption: 'Network table — 259 teachers' },
      { x: 30, y: 80, travel: 22, dwell: 28, click: true, caption: 'Color-coded performance bands' },
    ],
  },
  {
    id: 'owner-leaderboard',
    eyebrow: 'Teacher Leaderboard',
    headline: 'Healthy competition that actually moves the needle.',
    body:
      'Auto-ranked weekly by student outcomes and engagement. Podium for top 3, full network rank list, and weekly movement indicators.',
    bullets: [
      'Gold / Silver / Bronze podium for top 3',
      'Period toggle: Week / Month / Term',
      'Network-wide list with weekly movement (↑↓)',
      'Same composite metric the principal sees — full transparency',
    ],
    brand: '#FFD700',
    screenBg: '#FFFBEC',
    screenLabel: 'Teacher Leaderboard',
    cursorPath: [
      { x: 50, y: 22, travel: 24, dwell: 22, caption: 'Gold / Silver / Bronze podium' },
      { x: 78, y: 18, travel: 22, dwell: 18, click: true, caption: 'Toggle Term view' },
      { x: 36, y: 56, travel: 24, dwell: 22, caption: 'Network-wide ranked list' },
      { x: 64, y: 76, travel: 22, dwell: 26, caption: 'Weekly movement — same metric as principals' },
    ],
  },
  {
    id: 'owner-branches',
    eyebrow: 'Branches Comparison',
    headline: 'See which branch is winning — and which is sinking.',
    body:
      'Side-by-side comparison of all branches across students, teachers, attendance, average score and fee collection. AI auto-surfaces winners and laggards.',
    bullets: [
      '4 branches × 5 metrics matrix',
      'Best-in-row highlighted with ★',
      '"Why Bandra wins" / "Why Jubilee struggles" insight cards',
      'One-click drill-down to full branch dashboard',
    ],
    brand: '#0055FF',
    screenBg: '#EEF4FF',
    screenLabel: 'Branches Comparison',
    cursorPath: [
      { x: 50, y: 22, travel: 22, dwell: 18, caption: '4 branches × 5 metrics' },
      { x: 36, y: 44, travel: 22, dwell: 20, click: true, caption: '★ Best-in-row highlighted' },
      { x: 70, y: 64, travel: 24, dwell: 22, caption: '"Why Bandra wins" insight' },
      { x: 24, y: 82, travel: 22, dwell: 26, click: true, caption: 'Drill into branch dashboard' },
    ],
  },
  {
    id: 'owner-brand-leaderboard',
    eyebrow: 'Brand Leaderboard',
    headline: 'Your franchise health, ranked.',
    body:
      'Composite-ranked branch leaderboard with 6-month trends, KPI strip, quick-glance cards and per-branch AI analysis panel.',
    bullets: [
      'Hero KPI strip: Branches / Students / Teachers / Avg / Fees',
      'Composite ranking bar chart — clickable',
      '6-month trend lines for top 4 branches',
      'AI Analysis panel surfaces what the top branch is doing right',
    ],
    brand: '#001040',
    screenBg: '#F2F4FA',
    screenLabel: 'Brand Leaderboard',
    cursorPath: [
      { x: 30, y: 18, travel: 22, dwell: 20, caption: 'Hero KPI strip — franchise health' },
      { x: 70, y: 38, travel: 22, dwell: 22, click: true, caption: 'Composite ranking bars' },
      { x: 36, y: 60, travel: 22, dwell: 22, caption: '6-month trend lines' },
      { x: 64, y: 82, travel: 22, dwell: 26, caption: 'AI Analysis — what top branch is doing right' },
    ],
  },
  {
    id: 'owner-risks-alerts',
    eyebrow: 'Risks & Alerts',
    headline: 'Critical issues escalate to you in seconds.',
    body:
      'Real-time alert feed across attendance crashes, fee defaults, teacher attrition and NPS dips. Severity-tiered with one-tap delegate.',
    bullets: [
      '4 severity tiers: Critical / High / Medium / Resolved 30d',
      'Live alerts with branch context + AI-generated headline',
      'One-tap actions: Act now or Delegate to principal',
      'Forensic audit trail of who-acted-on-what-when',
    ],
    brand: '#FF3355',
    screenBg: '#FFF1F3',
    screenLabel: 'Risks & Alerts',
    cursorPath: [
      { x: 24, y: 20, travel: 22, dwell: 18, caption: '4 severity tiers' },
      { x: 50, y: 44, travel: 22, dwell: 20, click: true, caption: 'Critical alert with branch context' },
      { x: 78, y: 64, travel: 22, dwell: 24, click: true, caption: 'Delegate to principal — one tap' },
      { x: 36, y: 84, travel: 22, dwell: 26, caption: 'Forensic audit trail' },
    ],
  },
];

/* ════════════════════════════════════════════════════════════
   PRINCIPAL  — 6 USPs
═══════════════════════════════════════════════════════════ */
const principalUsps: USP[] = [
  {
    id: 'principal-cmd-centre',
    eyebrow: 'Academic Command Centre',
    headline: 'Run your school with intelligence.',
    body:
      "Academic Health Index, today's risk alerts, attendance trends — every signal you need on one screen.",
    bullets: [
      'Real-time Academic Health Index (composite 0-100)',
      "Today's Risk Alerts — students slipping right now",
      '30-day attendance trend with smooth interpolation',
      'Sectioned sidebar — Students / Academics / Operations / Comms',
    ],
    brand: '#0055FF',
    screenBg: '#EEF4FF',
    screenLabel: 'Academic Command Centre',
    cursorPath: [
      { x: 30, y: 20, travel: 24, dwell: 20, caption: 'Academic Health Index — composite 0-100' },
      { x: 70, y: 30, travel: 22, dwell: 22, click: true, caption: "Today's Risk Alerts" },
      { x: 40, y: 60, travel: 24, dwell: 22, caption: '30-day attendance trend' },
      { x: 12, y: 80, travel: 22, dwell: 26, click: true, caption: 'Sectioned sidebar' },
    ],
  },
  {
    id: 'principal-student-intel',
    eyebrow: 'Student Intelligence',
    headline: 'Auto-classify every student. Weak, developing, smart.',
    body:
      'AI tiers every student weekly across attendance, marks, behaviour. One-click teacher and parent notifications.',
    bullets: [
      '3-tier KPIs: Weak / Developing / Smart with live counts',
      'Per-student card: avg, attendance, tier badge + reason',
      'AI Class Intelligence panel surfaces who to act on first',
      'Notify Teacher / Notify Parent in one tap',
    ],
    brand: '#0055FF',
    screenBg: '#EEF4FF',
    screenLabel: 'Student Intelligence',
    cursorPath: [
      { x: 24, y: 22, travel: 22, dwell: 18, caption: '3-tier KPIs — live class breakdown' },
      { x: 60, y: 22, travel: 22, dwell: 20, click: true, caption: 'Tap Developing tier' },
      { x: 40, y: 56, travel: 24, dwell: 22, caption: 'Per-student card with tier reason' },
      { x: 78, y: 80, travel: 22, dwell: 26, click: true, caption: 'Notify Parent — one tap' },
    ],
  },
  {
    id: 'principal-risk-students',
    eyebrow: 'Risk Students',
    headline: 'Catch dropouts before they happen.',
    body:
      'Multi-signal risk scoring across attendance, marks, incidents and assignments. Critical → Warning → Monitoring tiers with intervention playbook.',
    bullets: [
      'Red hero with total at-risk count + new-this-week badge',
      '4 tier KPIs + filterable risk pool',
      'Risk factor chips per student with assigned owner',
      'AI intervention plan + quick actions panel',
    ],
    brand: '#FF3355',
    screenBg: '#FFF1F3',
    screenLabel: 'Risk Students',
    cursorPath: [
      { x: 30, y: 18, travel: 22, dwell: 18, caption: 'Total at-risk — new this week' },
      { x: 64, y: 36, travel: 22, dwell: 20, click: true, caption: 'Filter — Critical only' },
      { x: 30, y: 60, travel: 24, dwell: 22, caption: 'Risk factor chips per student' },
      { x: 70, y: 80, travel: 22, dwell: 26, click: true, caption: 'AI intervention plan' },
    ],
  },
  {
    id: 'principal-teacher-perf',
    eyebrow: 'Teacher Performance',
    headline: 'Know your top teachers — and your weakest — by Friday.',
    body:
      'Composite scoring across class average, attendance discipline, parent feedback and trends. Pair coaches automatically.',
    bullets: [
      '4 KPIs: Faculty / Avg Composite / Top / Need Coaching',
      'Per-teacher card: subject pills, trend badge, vs school avg',
      'Color-coded tiers: Excellent → Needs Coach',
      'AI summary recommends mentor pairings',
    ],
    brand: '#0055FF',
    screenBg: '#EEF4FF',
    screenLabel: 'Teacher Performance',
    cursorPath: [
      { x: 26, y: 20, travel: 22, dwell: 18, caption: '4 faculty KPIs' },
      { x: 60, y: 50, travel: 24, dwell: 22, click: true, caption: 'Per-teacher card with subject pills' },
      { x: 30, y: 70, travel: 22, dwell: 22, caption: 'Color-coded performance tiers' },
      { x: 78, y: 84, travel: 22, dwell: 26, click: true, caption: 'AI mentor pairings' },
    ],
  },
  {
    id: 'principal-leaderboard',
    eyebrow: 'Teacher Leaderboard',
    headline: 'Healthy competition that moves the needle.',
    body:
      'Auto-ranked weekly by student outcomes. Gold / Silver / Bronze podium plus a ranked list with weekly movement.',
    bullets: [
      'Branch hero with avg score + tier badge',
      'Period toggle: Term / Month / All Time',
      'Top 3 podium + ranked rest with ↑↓ movement',
      'Same composite metric the owner sees — full transparency',
    ],
    brand: '#FFD700',
    screenBg: '#FFFBEC',
    screenLabel: 'Teacher Leaderboard',
    cursorPath: [
      { x: 30, y: 22, travel: 22, dwell: 20, caption: 'Branch avg + tier badge' },
      { x: 64, y: 22, travel: 22, dwell: 18, click: true, caption: 'Switch to All Time' },
      { x: 50, y: 50, travel: 24, dwell: 22, caption: 'Podium — top 3 of the term' },
      { x: 50, y: 80, travel: 22, dwell: 26, caption: 'Weekly movement ↑↓' },
    ],
  },
  {
    id: 'principal-leaderboards',
    eyebrow: 'Principal Leaderboards',
    headline: 'See where you rank in the network.',
    body:
      'Cross-branch leaderboards for branches, principals, teachers and students. AI explains the gap and the play to close it.',
    bullets: [
      '4-tab nav: Branches / Principals / Teachers / Students',
      'Gold / Silver / Bronze pool balls + your-row highlight',
      '"Why Bandra wins" AI insight + close-the-gap solutions',
      'Live data · cached weekly insights',
    ],
    brand: '#0055FF',
    screenBg: '#EEF4FF',
    screenLabel: 'Cross-network Leaderboards',
    cursorPath: [
      { x: 26, y: 16, travel: 22, dwell: 18, caption: '4-tab cross-network nav' },
      { x: 56, y: 16, travel: 18, dwell: 18, click: true, caption: 'Tap Principals' },
      { x: 36, y: 50, travel: 24, dwell: 22, caption: 'Your row highlighted in the rank list' },
      { x: 70, y: 80, travel: 22, dwell: 26, click: true, caption: 'AI close-the-gap solutions' },
    ],
  },
];

/* ════════════════════════════════════════════════════════════
   TEACHER  — 8 USPs
═══════════════════════════════════════════════════════════ */
const teacherUsps: USP[] = [
  {
    id: 'teacher-exam-gen',
    eyebrow: 'AI Exam Generator',
    headline: 'A full exam paper in 30 seconds.',
    body:
      "Pick subject, grade, chapters, difficulty — AI generates question paper, answer key, and Bloom's-taxonomy distribution.",
    bullets: [
      'Question types: MCQ, Short, Long, Fill-in-the-blanks',
      'Grounded in your school syllabus and past papers',
      'Edit, regenerate any section, print or share to students',
    ],
    brand: '#0055FF',
    screenBg: '#EEF4FF',
    screenLabel: 'AI Exam Generator',
    // Form-filling pattern: cursor types into fields one by one, then clicks generate
    cursorPath: [
      { x: 30, y: 28, travel: 14, dwell: 10, click: true, caption: 'Pick subject — Science' },
      { x: 30, y: 38, travel: 8, dwell: 8, click: true, caption: 'Grade — 9' },
      { x: 30, y: 48, travel: 8, dwell: 8, click: true, caption: 'Chapters — 3 selected' },
      { x: 30, y: 58, travel: 8, dwell: 8, click: true, caption: 'Difficulty — Mixed' },
      { x: 56, y: 68, travel: 22, dwell: 18, click: true, caption: 'Generate · 30 seconds' },
      { x: 70, y: 84, travel: 18, dwell: 28, caption: "Bloom's-taxonomy distribution ready" },
    ],
  },
  {
    id: 'teacher-behaviour',
    eyebrow: 'Student Behaviour',
    headline: 'Every star, every concern — never lost.',
    body:
      'Log positives, concerns and incidents in 5 seconds. AI spots patterns and auto-generates improvement plans.',
    bullets: [
      'Quick 1-5 star rating with optional notes',
      'Pattern detection across weeks and months',
      'Visible to parents — positive notes too',
    ],
    brand: '#00C853',
    screenBg: '#EEFBF1',
    screenLabel: 'Student Behaviour',
    cursorPath: [
      { x: 24, y: 22, travel: 22, dwell: 18, caption: 'Pick a student' },
      { x: 56, y: 36, travel: 22, dwell: 22, click: true, caption: 'Tap 5 stars — log positive' },
      { x: 36, y: 64, travel: 22, dwell: 22, caption: 'AI pattern detection' },
      { x: 70, y: 84, travel: 22, dwell: 26, caption: 'Visible to parents instantly' },
    ],
  },
  {
    id: 'teacher-leaderboard',
    eyebrow: 'Teacher Leaderboard',
    headline: 'See where you rank — in real time.',
    body:
      'Branch-wide rankings, refreshed weekly. Composite score across attendance, marks, parent rating and grading speed.',
    bullets: [
      'Podium top 3 + your weekly rank movement',
      'Same metric the principal sees — full transparency',
      'Healthy competition that actually moves the needle',
    ],
    brand: '#FFAA00',
    screenBg: '#FFF8EC',
    screenLabel: 'Teacher Leaderboard',
    cursorPath: [
      { x: 50, y: 22, travel: 22, dwell: 22, caption: 'Top 3 podium' },
      { x: 70, y: 50, travel: 22, dwell: 22, caption: 'Your row — moved up 3 this week' },
      { x: 28, y: 70, travel: 22, dwell: 22, click: true, caption: 'See breakdown' },
      { x: 64, y: 86, travel: 22, dwell: 26, caption: 'Same metric as principals' },
    ],
  },
  {
    id: 'teacher-perf',
    eyebrow: 'Teacher Performance',
    headline: 'Your personal AI coach.',
    body:
      'Composite score breakdown by metric, AI diagnosis of weak spots, and a weekly action plan personalized to you.',
    bullets: [
      '4 KPIs with target progress bars',
      'AI diagnosis tells you the ONE thing to fix this week',
      'Action checklist with predicted score impact (+0.5 to +3.2)',
    ],
    brand: '#0055FF',
    screenBg: '#EEF4FF',
    screenLabel: 'Performance & Coaching',
    cursorPath: [
      { x: 26, y: 22, travel: 22, dwell: 18, caption: 'Composite score breakdown' },
      { x: 64, y: 36, travel: 22, dwell: 22, click: true, caption: 'AI diagnosis — fix this week' },
      { x: 40, y: 64, travel: 22, dwell: 22, caption: 'Predicted impact +1.8' },
      { x: 70, y: 84, travel: 22, dwell: 26, click: true, caption: 'Action checklist' },
    ],
  },
  {
    id: 'teacher-concept-mastery',
    eyebrow: 'Concept Mastery',
    headline: "See exactly which topics aren't landing.",
    body:
      'Heat-map of students × concepts with color-coded mastery. Cold zones surfaced with AI re-teach plans.',
    bullets: [
      'Mastery heat-map auto-built from test data',
      'AI suggests re-teach strategies (videos, pairings, quizzes)',
      'Tracks improvement week-over-week',
    ],
    brand: '#FF3355',
    screenBg: '#FFF1F3',
    screenLabel: 'Concept Mastery',
    cursorPath: [
      { x: 30, y: 26, travel: 22, dwell: 18, caption: 'Heat-map of students × concepts' },
      { x: 56, y: 50, travel: 22, dwell: 22, click: true, caption: 'Cold zone — Photosynthesis' },
      { x: 30, y: 76, travel: 22, dwell: 22, caption: 'AI re-teach plan generated' },
      { x: 70, y: 84, travel: 22, dwell: 26, caption: 'Improvement tracked weekly' },
    ],
  },
  {
    id: 'teacher-risks',
    eyebrow: 'Risks & Alerts',
    headline: 'Catch slipping students before exam day.',
    body:
      'AI scores every student weekly. Critical / At-Risk / Watch tiers with the specific reasons behind each.',
    bullets: [
      'Multi-signal risk model (attendance + marks + behaviour)',
      'One-tap actions: call parent, log note, schedule meet',
      'Auto-clears when student recovers',
    ],
    brand: '#FF8800',
    screenBg: '#FFF6EC',
    screenLabel: 'Risks & Alerts',
    cursorPath: [
      { x: 24, y: 22, travel: 22, dwell: 18, caption: '3 risk tiers — refreshed weekly' },
      { x: 60, y: 44, travel: 22, dwell: 22, click: true, caption: 'Tap Critical' },
      { x: 36, y: 70, travel: 22, dwell: 22, caption: 'Reasons: Att 56%, Marks ↓ 18%' },
      { x: 76, y: 84, travel: 22, dwell: 26, click: true, caption: 'Call parent — one tap' },
    ],
  },
  {
    id: 'teacher-lesson-planner',
    eyebrow: 'AI Lesson Planner',
    headline: 'A complete lesson plan in under a minute.',
    body:
      'Pick chapter, duration and class profile — AI builds objectives, lesson flow, activities, real-life examples and homework.',
    bullets: [
      'Curriculum-aware (CBSE / ICSE / State boards)',
      'Activity-led, visual aids, group-work toggles',
      'Save, edit, share with co-teachers',
    ],
    brand: '#0055FF',
    screenBg: '#EEF4FF',
    screenLabel: 'AI Lesson Planner',
    cursorPath: [
      { x: 22, y: 22, travel: 22, dwell: 18, caption: 'Pick chapter + duration' },
      { x: 50, y: 32, travel: 22, dwell: 22, click: true, caption: 'Generate plan — under a minute' },
      { x: 40, y: 64, travel: 22, dwell: 22, caption: 'Objectives, flow, activities' },
      { x: 76, y: 84, travel: 22, dwell: 26, click: true, caption: 'Share with co-teachers' },
    ],
  },
  {
    id: 'teacher-summarize',
    eyebrow: 'Summarize Lesson',
    headline: 'Any PDF → exam-ready study notes.',
    body:
      'Drop a chapter PDF and get 7 ready-made study sections back in seconds — summary, key concepts, must-remember points, examples, practice, parent note, and vocabulary.',
    bullets: [
      'Text-based PDF support up to 20MB',
      'Auto-shares parent-friendly version to the parent dashboard',
      'Builds a searchable knowledge base of every lesson',
    ],
    brand: '#00C853',
    screenBg: '#EEFBF1',
    screenLabel: 'Summarize Lesson',
    cursorPath: [
      { x: 30, y: 26, travel: 22, dwell: 18, caption: 'Drop chapter PDF' },
      { x: 50, y: 26, travel: 22, dwell: 22, click: true, caption: 'AI parses 20MB instantly' },
      { x: 36, y: 60, travel: 22, dwell: 22, caption: '7 study sections generated' },
      { x: 70, y: 84, travel: 22, dwell: 26, click: true, caption: 'Auto-share to parent dashboard' },
    ],
  },
];

/* ════════════════════════════════════════════════════════════
   PARENT  — Hero + 5 USPs
═══════════════════════════════════════════════════════════ */
const parentUsps: USP[] = [
  {
    id: 'parent-hero',
    eyebrow: 'Stay close, every day',
    headline: 'Stop waiting for parent-teacher meetings.',
    body:
      'Live grades, attendance, behaviour notes from teachers, and AI-powered practice recommendations — all in your pocket.',
    bullets: [
      'Real-time GPA, attendance, and class rank',
      'Subject-wise performance with weekly trends',
      'Behaviour feed (positives + concerns from teachers)',
      'AI Practice streak — personalised drilling on weak topics',
    ],
    brand: '#0044CC',
    screenBg: '#EEF2FB',
    screenLabel: 'Parent Dashboard',
    cursorPath: [
      { x: 30, y: 18, travel: 24, dwell: 22, caption: 'Live GPA, attendance, class rank' },
      { x: 70, y: 36, travel: 22, dwell: 22, click: true, caption: 'Weekly subject trends' },
      { x: 36, y: 60, travel: 22, dwell: 22, caption: 'Behaviour feed from teachers' },
      { x: 70, y: 80, travel: 22, dwell: 26, click: true, caption: 'AI Practice streak' },
    ],
  },
  {
    id: 'parent-performance',
    eyebrow: 'Performance Analytics',
    headline: 'See exactly how your child is doing — every subject, every month.',
    body:
      'Live grade, term average, trend direction and class rank — all in one view. Subject cards show progress against the class average.',
    bullets: [
      'Hero stats: Grade · Average · Trend · Class Rank',
      'Subject cards with progress bars vs class average',
      '8-month trend chart for the overall average',
      'AI narrative + Goal Setter to close subject-level gaps',
    ],
    brand: '#0055FF',
    screenBg: '#EEF4FF',
    screenLabel: 'Performance Analytics',
    cursorPath: [
      { x: 24, y: 18, travel: 22, dwell: 20, caption: 'Grade · Average · Trend · Rank' },
      { x: 60, y: 40, travel: 22, dwell: 22, click: true, caption: 'Subject vs class average' },
      { x: 40, y: 64, travel: 22, dwell: 22, caption: '8-month trend chart' },
      { x: 70, y: 84, travel: 22, dwell: 26, click: true, caption: 'AI Goal Setter' },
    ],
  },
  {
    id: 'parent-concept',
    eyebrow: 'Concept Strengths',
    headline: 'Stop guessing which topic is weak — see it at a glance.',
    body:
      'Topic-level mastery scoring across every subject. Three buckets — strong, developing, focus — so you know exactly where help is needed.',
    bullets: [
      'Mastery score, topics mastered, focus areas at a glance',
      'Multi-subject mastery line chart (Math, Science, English, Social)',
      '3 colour-coded concept buckets with per-topic %',
      'AI breakdown surfacing pacing risks and patterns',
    ],
    brand: '#0055FF',
    screenBg: '#EEF4FF',
    screenLabel: 'Concept Strengths',
    cursorPath: [
      { x: 26, y: 22, travel: 22, dwell: 18, caption: '3 mastery buckets' },
      { x: 56, y: 36, travel: 22, dwell: 22, click: true, caption: 'Multi-subject mastery chart' },
      { x: 36, y: 64, travel: 22, dwell: 22, caption: 'Per-topic % across each bucket' },
      { x: 70, y: 84, travel: 22, dwell: 26, caption: 'AI pacing-risk breakdown' },
    ],
  },
  {
    id: 'parent-practice',
    eyebrow: 'AI Practice',
    headline: 'Personalised practice on weak topics — generated from the actual textbook.',
    body:
      'AI generates fresh practice sets every 24 hours, targeting topics where your child is weakest. Streak tracking, heatmap, and per-attempt scoring keep practice consistent.',
    bullets: [
      'Practice streak hero with attempts, avg score, topics covered',
      '6-week practice heatmap (GitHub-style intensity)',
      'Recent source PDFs + completed attempts with scores',
      'AI auto-generates fresh sets weekly on weak topics',
    ],
    brand: '#FF8800',
    screenBg: '#FFF6EC',
    screenLabel: 'AI Practice',
    // Heatmap traversal — cursor sweeps across the GitHub-style grid
    cursorPath: [
      { x: 24, y: 22, travel: 22, dwell: 12, caption: '14-day streak' },
      { x: 30, y: 50, travel: 18, dwell: 6, caption: '6-week practice heatmap' },
      { x: 44, y: 50, travel: 8, dwell: 6 },
      { x: 58, y: 50, travel: 8, dwell: 6 },
      { x: 72, y: 50, travel: 8, dwell: 8, caption: 'Today — 8/10' },
      { x: 36, y: 78, travel: 24, dwell: 18, click: true, caption: 'Open recent attempt' },
      { x: 76, y: 86, travel: 22, dwell: 22, click: true, caption: 'Generate new set' },
    ],
  },
  {
    id: 'parent-behaviour',
    eyebrow: 'Behaviour & Discipline',
    headline: 'No more parent-teacher meeting surprises.',
    body:
      'Real teacher observations — positives, concerns, and incidents — logged the day they happen. 5-star rating across conduct, punctuality, respect and participation.',
    bullets: [
      '5-star overall rating + sub-metrics (Conduct/Punctuality/Respect)',
      'Positive Highlights and Areas to Improve, with teacher names',
      '6-month behaviour trend chart',
      '2×2 breakdown grid + term summary (rating · incidents · grade)',
    ],
    brand: '#00C853',
    screenBg: '#EEFBF1',
    screenLabel: 'Behaviour & Discipline',
    cursorPath: [
      { x: 30, y: 22, travel: 22, dwell: 20, caption: '5-star overall rating' },
      { x: 64, y: 40, travel: 22, dwell: 22, click: true, caption: 'Positive highlights from teachers' },
      { x: 36, y: 66, travel: 22, dwell: 22, caption: '6-month behaviour trend' },
      { x: 70, y: 84, travel: 22, dwell: 26, caption: 'Term summary at a glance' },
    ],
  },
  {
    id: 'parent-syllabus',
    eyebrow: 'Class Documents',
    headline: 'Every syllabus, note, and worksheet — in one searchable place.',
    body:
      'Teachers upload syllabus PDFs, notes and worksheets directly to the parent portal. Searchable, filterable by file type, with one-tap view and download.',
    bullets: [
      'Searchable doc library with file-type filters (PDF/Doc/XLS/Img)',
      'Auto-organised by subject, date, and uploading teacher',
      '"NEW" badge on uploads from the last 3 days',
      'One-tap View / Download — no email attachments to chase',
    ],
    brand: '#0055FF',
    screenBg: '#EEF4FF',
    screenLabel: 'Class Documents',
    cursorPath: [
      { x: 24, y: 18, travel: 22, dwell: 20, caption: 'Searchable doc library' },
      { x: 56, y: 36, travel: 22, dwell: 22, click: true, caption: 'Filter — PDF only' },
      { x: 36, y: 60, travel: 22, dwell: 22, caption: '"NEW" — uploaded today' },
      { x: 70, y: 84, travel: 22, dwell: 26, click: true, caption: 'Tap to download' },
    ],
  },
];

export const roles: RoleSpec[] = [
  {
    id: 'owner',
    label: 'For Owners',
    title: 'Owner Dashboard',
    subtitle: 'Complete control over your school ecosystem.',
    accent: '#0055FF',
    icon: '🏛',
    usps: ownerUsps,
  },
  {
    id: 'principal',
    label: 'For Principals',
    title: 'Principal Dashboard',
    subtitle: 'Run your school with intelligence.',
    accent: '#0055FF',
    icon: '🎓',
    usps: principalUsps,
  },
  {
    id: 'teacher',
    label: 'For Teachers',
    title: 'Teacher Dashboard',
    subtitle: 'Your personal AI coach for the classroom.',
    accent: '#0055FF',
    icon: '🍎',
    usps: teacherUsps,
  },
  {
    id: 'parent',
    label: 'For Parents',
    title: 'Parent Dashboard',
    subtitle: "Your child's world. One app.",
    accent: '#0044CC',
    icon: '💙',
    usps: parentUsps,
  },
];
