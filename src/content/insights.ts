/**
 * Insights content — single source of truth for /insights/* routes.
 *
 * Each article is a strongly-typed data object. The renderer (ArticleLayout)
 * consumes this shape and produces the page; the router resolves :slug to
 * the article. Adding a new article = add one object here.
 */

export type ArticleCategory =
  | 'principals'
  | 'teachers'
  | 'parents'
  | 'technology'
  | 'future-of-education';

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
}

export interface Article {
  slug: string;
  category: ArticleCategory;
  title: string;
  subtitle: string;
  description: string; // meta description, 150-160 chars
  publishedAt: string; // ISO date
  updatedAt?: string;
  readingMinutes: number;
  intro: string[]; // 1-3 paragraphs before first heading
  sections: ArticleSection[];
  callout?: { title: string; text: string };
}

export interface CategoryMeta {
  slug: ArticleCategory;
  name: string;
  description: string;
}

export const CATEGORIES: CategoryMeta[] = [
  {
    slug: 'principals',
    name: 'For Principals',
    description: 'Operating intelligence, intervention workflows, and the daily mechanics of running a modern school.',
  },
  {
    slug: 'teachers',
    name: 'For Teachers',
    description: 'AI in the classroom, lesson planning, grading workflows, and parent communication that scales.',
  },
  {
    slug: 'parents',
    name: 'For Parents',
    description: 'How parents engage with modern schools — weekly summaries, AI tutoring, real-time progress.',
  },
  {
    slug: 'technology',
    name: 'Technology',
    description: 'Architecture, AI, data — the technical layer beneath modern school operations.',
  },
  {
    slug: 'future-of-education',
    name: 'Future of Education',
    description: 'Where Indian education is heading — trends, research, and structural shifts ahead.',
  },
];

export const ARTICLES: Article[] = [
  {
    slug: 'top-criteria-modern-school-software',
    category: 'technology',
    title: 'Top criteria for choosing modern school management software',
    subtitle: 'A 2026 evaluation framework — beyond attendance and fees.',
    description:
      'The criteria that mattered in 2018 are not the criteria that matter in 2026. A practical framework for evaluating modern school software around intelligence, not modules.',
    publishedAt: '2026-05-22',
    readingMinutes: 7,
    intro: [
      'Most "best school management software" articles in 2026 still grade products against the 2018 checklist. Attendance module — yes. Fee receipt — yes. SMS alerts — yes. Same as everyone else. The market has moved; the checklist has not.',
      'This piece is a practical reframing for school owners and principals evaluating software today: what the modern criteria are, why old ones miss the point, and how to test a product in the room.',
    ],
    sections: [
      {
        heading: 'Why the old checklist fails in 2026',
        paragraphs: [
          'The 2018 checklist measured coverage — how many modules a product had. The implicit assumption was that schools were under-instrumented. They mostly were.',
          'By 2026, almost every commercial school product covers the basics. Attendance, fees, marks, communication — these are no longer differentiators. Grading software on "does it have attendance?" is like grading a smartphone on "does it have a camera?" The answer is yes; the answer is not interesting.',
          'The new question is not "what does it record?" but "what does it decide?"',
        ],
      },
      {
        heading: 'The six modern criteria',
        paragraphs: [
          'First, AI-driven risk prediction. Does the platform identify at-risk students at the individual level, six weeks before a traditional report would? This is the single biggest capability that separates 2026 software from 2018 software.',
          'Second, cross-branch intelligence. If your institution has more than one campus — and most growing ones do — does the platform compare branches side-by-side, ranked, with drill-down? Or does it produce four separate PDFs at quarter-end?',
          'Third, teacher performance scoring. Composite, multi-signal, ranked — not just a record of when grades were submitted. The platform should help you support your strongest teachers and identify your weakest, without manual audits.',
          'Fourth, AI in the teacher workflow. Exam paper generation, auto-correction, lesson planning. If these are sold as paid add-ons, the platform is not AI-native. They should be core.',
          'Fifth, parent intelligence. A Weekly AI Summary that consolidates the child\'s week into a 2-minute read is more useful than 30 SMS alerts. Doubt solvers and concept explainers turn the parent app into a daily-utility surface, not a once-a-term log-in.',
          'Sixth, decision intelligence on the home screen. The dashboard should tell each role what to do today — not just show what happened yesterday. If you have to click into a report to figure out the action, the product is still operating in the 2018 paradigm.',
        ],
      },
      {
        heading: 'How to evaluate in the room',
        paragraphs: [
          'When the vendor demos, ask them to show what a principal sees on Monday morning. If it is a list of reports, the product is operations-grade. If it is a ranked intervention list with recommended actions, the product is intelligence-grade.',
          'Ask: "What does the parent see on Monday morning?" If the answer is "SMS alerts when the child is absent," that product is competing in 2015. If it is "a Weekly AI Summary of academic slope, attendance, behaviour and recommended practice," you are in modern territory.',
          'Ask the technical question: "How does your AI Risk Predictor work?" A real answer will mention specific signals (attendance trend, marks slope, parent communication patterns) and confidence ratings. A vague answer means the AI is marketing, not engineering.',
        ],
      },
      {
        heading: 'The verdict checklist',
        paragraphs: [
          'In a final decision, weight the modern criteria 80% and the 2018 checklist 20%. Almost every credible vendor has the 2018 checklist now; the differentiation is entirely in the intelligence layer.',
          'If you find yourself drawn to a vendor only because they have the basics, that is the market telling you the product is two years behind. Modern schools need modern intelligence — and the gap, as the AI capabilities mature, is widening fast.',
        ],
      },
    ],
    callout: {
      title: 'Edullent is built for the modern checklist.',
      text: 'AI risk prediction, cross-branch intelligence, teacher performance scoring, AI workflows, parent intelligence, and decision dashboards — all included in every plan, all live from day one.',
    },
  },

  {
    slug: 'ai-in-school-administration',
    category: 'technology',
    title: 'AI in school administration — practical, not hype',
    subtitle: 'Where AI actually helps the school office today, and where it does not.',
    description:
      'AI in schools is past the hype cycle. Here is a practical look at what works in the school office in 2026 — and what is still vapourware.',
    publishedAt: '2026-05-22',
    readingMinutes: 6,
    intro: [
      'For two years, every school product has promised "AI" on its homepage. Some of it is real; a lot of it is auto-generating an email and calling it intelligence. This article cuts through.',
      'Below: the AI capabilities that genuinely change a school administrator\'s day in 2026, the ones that do not, and how to roll out AI without breaking the office.',
    ],
    sections: [
      {
        heading: 'What changed in 2024-2026',
        paragraphs: [
          'Three things converged. First, language models became cheap and reliable enough to use on every-day operations, not just edge cases. Second, the models began handling Indian education contexts — Hinglish, multi-board curricula, regional language interfaces — with usable accuracy. Third, schools accumulated enough digital data to give AI something real to work with.',
          'The result is that AI in school administration is no longer a 2027 promise. It is operational today, in offices across India.',
        ],
      },
      {
        heading: 'Where AI genuinely helps',
        paragraphs: [
          'Exam paper generation. A teacher who used to spend two evenings building a Class 9 unit test now spends fifteen minutes. The generator builds to blueprint, difficulty, and chapter — the teacher edits and approves. This is the most consistent win across schools.',
          'Auto-correction for objective sections. MCQs and short-answer questions auto-grade with high accuracy. The score lands in the gradebook and the parent app within the hour. Teacher hours saved per week: 4-6.',
          'Risk prediction. AI cross-references attendance, marks, behaviour and parent communication to identify at-risk students 4-6 weeks earlier than traditional reports. This is the single highest-impact AI capability in school administration — it shifts the office from reactive to preventive.',
          'Weekly summarisation. A two-minute Monday-morning brief generated for each parent — marks slope, attendance, behaviour, practice plan — replaces 30 SMS alerts. Parent engagement rises sharply once schools deploy this.',
          'Lesson planning. Structured chapter-level outlines, generated in seconds, edited by the teacher. Saves 60-70% of prep time without lowering quality.',
        ],
      },
      {
        heading: 'Where AI is still hype',
        paragraphs: [
          'Subjective essay grading at full automation. The AI can propose a score and reasoning, but in 2026 the teacher still needs to confirm. Anyone promising "fully automated subjective grading" is overselling.',
          'AI as a teacher replacement. The AI Concept Explainer reinforces what the teacher taught — it does not teach the chapter from scratch. Schools that try to replace the teacher with AI invariably reverse course within a term.',
          'Predicting individual student outcomes years in advance. AI can identify trends and surface risk over a 6-week window. Predictions over 6+ months are not reliable yet.',
          'Hyper-personalised learning paths at scale. Real personalisation requires data the school often does not have. The marketing claim runs ahead of the data reality.',
        ],
      },
      {
        heading: 'How to roll out AI without breaking the office',
        paragraphs: [
          'Pick one capability, deploy fully, before adding the next. Most failed AI rollouts try to launch six capabilities simultaneously and adoption collapses under training load.',
          'Start with the capability that has the clearest win — exam paper generation, in most schools. Teachers feel the time saved immediately, which creates momentum for the next.',
          'Avoid running the AI as a separate app. The win comes from AI being inside the workflow the teacher and principal already live in. A separate "AI tool" gets ignored within a month.',
          'Measure adoption, not features. A platform with five AI features used by 80% of teachers is more valuable than one with fifteen features used by 12% of teachers.',
        ],
      },
    ],
    callout: {
      title: 'AI is in every Edullent workflow, not bolted on.',
      text: 'Exam generation, auto-correction, lesson planning, risk prediction, weekly summaries — built into the dashboards teachers and principals already use.',
    },
  },

  {
    slug: 'future-of-school-operations',
    category: 'future-of-education',
    title: 'The future of school operations — five shifts in three years',
    subtitle: 'Where Indian schools will be operating by 2028 — and what to build for.',
    description:
      'Five structural shifts reshaping Indian school operations: from reports to recommendations, AI in every workflow, parent transparency, multi-branch standardisation, and intelligence as default.',
    publishedAt: '2026-05-22',
    readingMinutes: 8,
    intro: [
      'School operations in India are in the middle of their biggest structural shift in twenty years. Driven by AI maturity, parent expectations, and the rise of multi-branch chains, the way schools run their offices will look different by 2028.',
      'This piece outlines five shifts to plan for — whether you are an owner deciding on a five-year platform, a principal modernising day-to-day operations, or a software builder figuring out what to ship.',
    ],
    sections: [
      {
        heading: 'Shift 1 — From reports to recommendations',
        paragraphs: [
          'In 2018, the operating model was: data flows into reports, reports flow into meetings, meetings produce decisions. By 2028, that flow will look slow and lossy.',
          'The new model is data flows into intelligence, intelligence surfaces recommendations on dashboards, decisions happen at the surface — not in meetings. The reports still exist, but they are an audit trail, not the decision medium.',
          'Schools that adopt recommendation-driven operations are reporting 60-70% reduction in routine meetings and 4-6 week improvement in intervention timing.',
        ],
      },
      {
        heading: 'Shift 2 — AI in every teacher workflow, not as a tool',
        paragraphs: [
          'Teachers in 2026 still copy-paste between an LMS, an ERP and WhatsApp. By 2028, the AI workflow will be inside the surface they already use — exam generation in the gradebook, lesson planning in the planner, summarisation in the communication thread.',
          'The differentiator stops being "does it have AI?" and becomes "is the AI inside the tool I already use, or do I have to switch?" Schools that solve the second question see daily AI usage above 70%; schools that just bolt on an AI panel see usage below 15%.',
        ],
      },
      {
        heading: 'Shift 3 — Parent transparency by design',
        paragraphs: [
          'The next three years will see the WhatsApp group quietly replaced as the primary parent surface. Not by another chat app — by a Weekly AI Summary delivered Monday morning, with the option to deepen into a one-thread-per-teacher conversation when needed.',
          'Parents prefer structured weekly clarity over thirty unstructured daily messages. Schools prefer not running parallel WhatsApp groups. The platform becomes the channel of record.',
          'The institutions adopting this early are reporting markedly higher retention at term boundaries — parents who feel informed do not leave.',
        ],
      },
      {
        heading: 'Shift 4 — Multi-branch standardisation through intelligence',
        paragraphs: [
          'Indian education groups are scaling fast. A 5-branch group in 2024 is a 12-branch group in 2026. By 2028, 25-branch chains will be common. Excel and quarterly meetings cannot operate at that scale.',
          'The new standardisation tool is not a brand-standards manual — it is a cross-branch intelligence layer. The owner sees attendance, results, fees, teacher performance ranked across every campus, every day. Outliers are visible immediately, interventions are routed in real time.',
          'This is the structural shift that justifies most owner-side investment in modern platforms.',
        ],
      },
      {
        heading: 'Shift 5 — Intelligence as default, not premium',
        paragraphs: [
          'In 2026, AI risk prediction is still a "wow, what does that do?" feature in many sales conversations. By 2028, it will be table stakes — every credible product will have it, and the school that does not have it will be operating with one hand tied.',
          'The same trajectory applies to weekly AI summaries, composite teacher scoring, and decision dashboards. What looks premium in 2026 becomes the floor by 2028. Schools should plan their platform decision on the 2028 floor, not the 2026 ceiling.',
        ],
      },
      {
        heading: 'Where this lands',
        paragraphs: [
          'By 2028, school management software will be evaluated primarily on its intelligence layer. The market leaders will be the platforms that committed to AI-native architecture early and built decision interfaces — not the platforms that retrofitted intelligence onto a 2015 ERP.',
          'For institutions deciding today, the question is: what platform is built for the shifts above, and which one is still operating in the pre-shift world?',
        ],
      },
    ],
    callout: {
      title: 'Edullent is built for the 2028 floor.',
      text: 'AI-native, decision-first, cross-role intelligence layer for modern Indian institutions — designed for the structural shifts ahead, not retrofitted to them.',
    },
  },

  {
    slug: 'why-student-analytics-is-the-new-attendance',
    category: 'principals',
    title: 'Why student analytics is the new attendance',
    subtitle: 'Per-student intelligence is becoming the primary operational metric inside Indian schools.',
    description:
      'Attendance dominated school operations for a decade because it was the only individual-level metric available daily. Per-student analytics now does the same job better.',
    publishedAt: '2026-05-22',
    readingMinutes: 6,
    intro: [
      'Walk into any Indian school office in 2018 and the first conversation of the day was almost certainly about attendance. It was the only operational metric that worked at the individual student level, updated daily, and actionable inside a week.',
      'By 2026, that role is shifting. Per-student analytics — risk score, concept mastery, behavioural signals, communication patterns — is becoming the new primary operating metric. This piece explains why, and how to use it.',
    ],
    sections: [
      {
        heading: 'The attendance era',
        paragraphs: [
          'Attendance worked because it was the rare metric that was individual, daily, and actionable. Marks were quarterly. Behaviour was anecdotal. Fees were monthly. Attendance was the daily signal.',
          'But attendance is a lagging indicator. By the time a student is absent five days in a month, the underlying problem is already three weeks old. The office reacts; it does not prevent.',
        ],
      },
      {
        heading: 'What changed',
        paragraphs: [
          'Two things. First, schools accumulated enough digital data — marks histories, behaviour notes, parent communication logs, fee patterns — that an individual-level analytics layer became possible. Second, AI matured to the point where it could combine those signals into a reliable risk score per student.',
          'For the first time, the school office has a daily individual-level signal that is leading, not lagging. The student who is going to be at risk in three weeks is identifiable today.',
        ],
      },
      {
        heading: 'What student analytics actually contains',
        paragraphs: [
          'A modern student analytics surface tracks six layers per student: risk tier (Critical / At-Risk / Watch / Recovered), performance trajectory (slope across subjects), concept strength mapping (which topics are mastered, which need practice), attendance pattern (not just count — the pattern), behavioural signals (notes, escalations), and parent engagement (communication frequency, sentiment).',
          'Each layer is updated continuously. The principal\'s dashboard shows the 15 students who moved tiers this week — not the 800 students who did not.',
        ],
      },
      {
        heading: 'How institutions actually use it',
        paragraphs: [
          'Morning routine: principal opens the Risk Intervention dashboard. The students who moved into Critical or At-Risk this week are at the top. Each row has a recommended next action — parent call, mentor reassignment, counselling, academic support.',
          'Mid-week: the class teacher of Section 7-B sees three students flagged for falling concept strength in Mathematics. The system suggests a targeted intervention; the teacher executes it.',
          'Term boundary: the Pre-Result Predictor — built on the same analytics — gives the principal an early read on board exam results before the actual exam, so any final-stretch interventions can be timed.',
        ],
      },
      {
        heading: 'Attendance still matters — but as a layer, not the headline',
        paragraphs: [
          'None of this displaces attendance. Attendance is one of the signals the analytics layer reads. But it is no longer the headline metric on the principal\'s dashboard. The headline is risk — a composite signal that includes attendance, marks, behaviour and engagement.',
          'Schools that have made this transition report a measurable shift in operating posture: more time on prevention, less time on damage control.',
        ],
      },
    ],
    callout: {
      title: 'See per-student intelligence in action.',
      text: 'Edullent\'s Risk Intervention dashboard surfaces every at-risk student with recommended next-best-action — daily, ranked, in priority order.',
    },
  },

  {
    slug: 'from-school-erp-to-education-intelligence',
    category: 'technology',
    title: 'From school ERP to education intelligence — a migration story',
    subtitle: 'What changes when an institution moves from operations recording to decision intelligence.',
    description:
      'A practical migration story: what changes inside the office, the technology, and the day-to-day when a school moves from a legacy ERP to a modern intelligence platform.',
    publishedAt: '2026-05-22',
    readingMinutes: 7,
    intro: [
      'Most Indian schools that have used a digital platform for five years or more are running on what is, in 2026 terms, a legacy ERP. The system does the basics — attendance, fees, marks — and does them adequately. So why migrate?',
      'Because the basics are not the bottleneck anymore. The bottleneck is decisions. This article describes what actually changes — in software, in workflows, in outcomes — when an institution makes the migration from ERP to education intelligence.',
    ],
    sections: [
      {
        heading: 'Where school ERPs got stuck',
        paragraphs: [
          'School ERPs in 2015-2020 were built to record. They captured operations accurately, generated reports on demand, and gave the back office a single system to replace its registers and Excel sheets. That was the explicit goal, and most of them achieved it.',
          'Where they got stuck is that the world moved from "we need to capture operations" to "we need to act on what the operations are telling us." ERPs were architected for the first problem; they cannot retrofit themselves into the second.',
          'A 2018 ERP can produce a report saying "attendance in 9-B has dropped 6% this term." It cannot tell the principal which three students caused it, what to do about each, and which interventions are working. That gap is what an intelligence layer fills.',
        ],
      },
      {
        heading: 'What intelligence adds',
        paragraphs: [
          'Four layers, on top of the same captured data: prediction (what is going to happen), ranking (who or what is the priority right now), recommendation (what should be done about it), and verification (did the action work).',
          'The captured data — attendance, marks, fees, communication — is the same in both worlds. The difference is what is sitting on top of it. The ERP has reports. The intelligence platform has prediction-ranking-recommendation-verification, on every dashboard, for every role.',
        ],
      },
      {
        heading: 'How to migrate',
        paragraphs: [
          'Most institutions over-estimate the technical migration and under-estimate the workflow migration. The technical side is largely automated — Excel export, CSV migration, mapping fields. Edullent\'s onboarding handles this in days.',
          'The workflow migration is the real work. Teachers who used to file a report at the end of the week now consult a dashboard at the start of it. Principals who ran weekly meetings to review reports now make decisions at the dashboard surface. Owners who relied on quarterly group meetings now operate on a live group view.',
          'Plan three to four weeks of workflow training, not just technical migration. The technology can switch in days; the operating habits take longer.',
        ],
      },
      {
        heading: 'What to expect after migration',
        paragraphs: [
          'Week 1-2: The team is still in habit-shift mode. Some people open the dashboards; some still ask for the old reports. This is normal and expected.',
          'Week 3-4: First "wow" moments. A principal catches an at-risk student six weeks early. A teacher generates an exam paper in fifteen minutes that used to take two evenings. A parent reads a Weekly AI Summary instead of seeking out a teacher.',
          'Month 2-3: Workflows have shifted. Meetings that used to take an hour finish in fifteen minutes because the dashboard already surfaced the priorities. Quarterly reviews shift from "what happened" to "what to do next."',
          'Month 6: The institution is operating on intelligence, not reports. Outcomes — attendance, retention, results, parent satisfaction — show measurable improvement. The migration justifies itself.',
        ],
      },
      {
        heading: 'When to migrate',
        paragraphs: [
          'The fastest-moving institutions are migrating in 2025-2026. The signal that you are ready is straightforward: your principal can describe what the school does well and where it struggles, but cannot produce the data behind that intuition in under five minutes. That gap is the cost of operating on a legacy ERP.',
          'Closing the gap is what an education intelligence platform does. Migrating is, for most modern Indian institutions, no longer a question of "if" — it is a question of "when, before the gap widens."',
        ],
      },
    ],
    callout: {
      title: 'See what migration to intelligence actually looks like.',
      text: 'Two-week implementation, end-to-end onboarding, role-by-role training. Most institutions are running on intelligence inside the first month.',
    },
  },
];

export const ARTICLE_BY_SLUG = new Map(ARTICLES.map((a) => [a.slug, a]));
export const CATEGORY_BY_SLUG = new Map(CATEGORIES.map((c) => [c.slug, c]));

export const articlesByCategory = (cat: ArticleCategory): Article[] =>
  ARTICLES.filter((a) => a.category === cat);
