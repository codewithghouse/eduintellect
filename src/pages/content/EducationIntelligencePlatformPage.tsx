import {
  Database,
  Brain,
  Lightbulb,
  Workflow,
  TrendingUp,
  Shield,
  Sparkles,
  Layers,
  Users,
  LineChart,
  Bell,
  GitBranch,
} from 'lucide-react';
import Seo from '../../components/seo/Seo';
import ContentPage from '../../components/content/ContentPage';
import PageHero from '../../components/content/PageHero';
import Section from '../../components/content/Section';
import ProblemSolutionFlow from '../../components/content/ProblemSolutionFlow';
import ComparisonTable from '../../components/content/ComparisonTable';
import FaqSection from '../../components/content/FaqSection';
import FeatureGrid from '../../components/content/FeatureGrid';
import RelatedLinks from '../../components/content/RelatedLinks';
import CtaBand from '../../components/content/CtaBand';
import {
  composeSchemaGraph,
  organizationSchema,
  websiteSchema,
  productSchema,
  serviceSchema,
  faqPageSchema,
  breadcrumbSchema,
} from '../../components/seo/schemas';

const URL = 'https://edullent.com/education-intelligence-platform';

const FAQS = [
  {
    question: 'What is an Education Intelligence Platform?',
    answer:
      'An Education Intelligence Platform is the layer that sits between a school and its data. Instead of just recording operations like a traditional ERP, it turns that data into insights, recommendations and outcomes for every role — owners, principals, teachers and parents.',
  },
  {
    question: 'How is this different from a School ERP?',
    answer:
      'A School ERP records what happened. An Education Intelligence Platform tells you what to do about it. ERP captures attendance, fees, marks. Intelligence layers find at-risk students six weeks early, identify which teacher needs support, surface which branch is leading and why, and suggest the next action — not just the next report.',
  },
  {
    question: 'Who uses Edullent inside a school?',
    answer:
      'Four roles, one connected platform: the Owner / Chairman gets cross-branch intelligence; the Principal gets daily operating intelligence; the Teacher gets AI tools for grading, planning, communication; the Parent gets visibility into the child\'s academic, attendance and behavioural picture.',
  },
  {
    question: 'Does Edullent replace existing systems?',
    answer:
      'Edullent can fully replace a legacy school ERP, or sit on top of one. Most institutions consolidate onto Edullent within the first term because the dashboards depend on data being in one place.',
  },
  {
    question: 'Which institutions is this built for?',
    answer:
      'Modern Indian schools — single-campus K-12 and Pre-Primary institutions, multi-branch chains, premium and international schools. The platform scales from one campus to fifty branches without architectural changes.',
  },
  {
    question: 'How long does implementation take?',
    answer:
      'Most institutions are live in 2 weeks. Excel-based migration handles legacy data; onboarding and training are included. The platform is designed to be operational from day one, with deeper intelligence emerging as the platform learns the institution\'s patterns.',
  },
];

const FLOW_STEPS = [
  { label: 'Institution Data', description: 'Attendance, marks, fees, behaviour, communication — every signal in one place.' },
  { label: 'Insights', description: 'AI surfaces what matters: who is at risk, which teacher is over-stretched, where fees are slipping.' },
  { label: 'Recommendations', description: 'Each insight becomes a next-best-action — not a report, but a decision.' },
  { label: 'Actions', description: 'One-click communication, intervention workflows, scheduled follow-ups across every role.' },
  { label: 'Outcomes', description: 'Better attendance, higher retention, stronger results, lower admin time, healthier institution.' },
];

const FEATURES = [
  {
    title: 'Cross-branch intelligence',
    description: 'Side-by-side comparison of every campus on attendance, results, fees, brand strength and growth.',
    icon: GitBranch,
    brand: '#0071e3',
  },
  {
    title: 'AI Risk Predictor',
    description: 'Identifies at-risk students 6 weeks before performance drops or dropout signals appear.',
    icon: Bell,
    brand: '#003ECC',
  },
  {
    title: 'Teacher performance',
    description: 'Composite scoring across attendance discipline, class outcomes, parent NPS and grading speed.',
    icon: TrendingUp,
    brand: '#059669',
  },
  {
    title: 'Decision intelligence',
    description: 'Owner, principal and teacher dashboards that recommend the next action — not just show the data.',
    icon: Brain,
    brand: '#7B3FF4',
  },
  {
    title: 'Unified parent view',
    description: 'Real-time academic, attendance and behavioural picture for every parent — across school years.',
    icon: Users,
    brand: '#d97706',
  },
  {
    title: 'Multi-tenant by design',
    description: 'Per-school isolation, per-branch dashboards, role-based access. Built for chains from day one.',
    icon: Layers,
    brand: '#0071e3',
  },
];

const COMPARISON_ROWS = [
  { label: 'Records operations (attendance, fees, marks)',     left: true,  right: true },
  { label: 'AI-driven risk prediction',                         left: false, right: true },
  { label: 'Cross-branch comparison + ranking',                 left: false, right: true },
  { label: 'Teacher performance composite scoring',             left: false, right: true },
  { label: 'Actionable recommendations per role',               left: false, right: true },
  { label: 'AI exam generation + auto-correction',              left: false, right: true },
  { label: 'Weekly AI summaries for parents',                   left: false, right: true },
  { label: 'Decision intelligence on the home screen',          left: false, right: true },
  { label: 'Implementation in 2 weeks',                         left: 'Months',  right: '2 weeks' },
];

const RELATED = [
  { to: '/use-cases', title: 'Use cases', description: 'Browse the platform by the operational problem you want to solve.' },
  { to: '/customers', title: 'Customer stories', description: 'How Pilot Schools A, B and C run on the intelligence layer.' },
  { to: '/what-is-edullent', title: 'What is Edullent', description: 'The platform, the philosophy, who it serves.' },
  { to: '/school-erp-vs-education-intelligence', title: 'School ERP vs Education Intelligence', description: 'Where traditional software stops and intelligence begins.' },
];

const EducationIntelligencePlatformPage = () => (
  <>
    <Seo
      title="Education Intelligence Platform for Modern Institutions — Edullent"
      description="Edullent is the intelligence layer between a school and its data. Turn institution data into insights, recommendations and outcomes for every role."
      canonical={URL}
      ogTitle="Edullent — Education Intelligence Platform"
      ogDescription="The intelligence layer between a school and its data."
      schema={composeSchemaGraph([
        organizationSchema(),
        websiteSchema(),
        productSchema({
          name: 'Edullent Education Intelligence Platform',
          description: 'An education intelligence platform that turns institution data into insights, recommendations and outcomes across owner, principal, teacher and parent roles.',
          url: URL,
        }),
        serviceSchema({
          name: 'Education Intelligence Platform',
          description: 'Decision intelligence layer for modern schools — risk prediction, cross-branch comparison, teacher performance, AI workflows.',
          url: URL,
        }),
        faqPageSchema(FAQS),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Education Intelligence Platform', path: '/education-intelligence-platform' },
        ]),
      ])}
    />
    <ContentPage
      breadcrumbs={[
        { name: 'Home', path: '/' },
        { name: 'Education Intelligence Platform', path: '/education-intelligence-platform' },
      ]}
    >
      <PageHero
        eyebrow="The category"
        title="The Education Intelligence Platform for modern institutions."
        subtitle="Edullent is the intelligence layer between a school and its data — turning operations into insights, insights into decisions, decisions into outcomes."
        description="Traditional software records what happens in a school. Edullent tells you what to do next — for the owner, the principal, the teacher, the parent. One platform, four dashboards, one connected brain."
        primaryCta={{ to: '/contact', label: 'Book a demo' }}
        secondaryCta={{ to: '/what-is-edullent', label: 'What is Edullent?' }}
      />

      <Section
        eyebrow="The flow"
        title="From data to decisions to outcomes."
        subtitle="Every signal a school produces — attendance, marks, fees, behaviour, communication — flows through five stages. Edullent owns the middle three."
      >
        <ProblemSolutionFlow steps={FLOW_STEPS} />
      </Section>

      <Section
        eyebrow="The capability layer"
        title="What an intelligence platform actually does."
        subtitle="These are not features. They are the six capabilities that separate Edullent from every school ERP in the market."
      >
        <FeatureGrid items={FEATURES} columns={3} />
      </Section>

      <Section
        eyebrow="The comparison"
        title="Traditional School ERP vs Edullent."
        subtitle="ERPs capture data. Intelligence platforms turn data into decisions. Same building blocks, completely different output."
      >
        <ComparisonTable
          leftTitle="Traditional School ERP"
          rightTitle="Edullent — Education Intelligence"
          rows={COMPARISON_ROWS}
        />
      </Section>

      <Section
        eyebrow="The four roles"
        title="One platform. Four dashboards. One brain."
        subtitle="Every role sees a different view, but the data underneath is one connected system — updated in real-time across roles."
      >
        <FeatureGrid
          columns={4}
          items={[
            { title: 'Owner / Chairman', description: 'Cross-branch comparison, AI risk predictor, group financials, brand leaderboard.', icon: Shield, brand: '#0071e3' },
            { title: 'Principal', description: 'AI recommendations, teacher leaderboard, risk intervention, class analytics.', icon: LineChart, brand: '#003ECC' },
            { title: 'Teacher', description: 'AI exam generator, lesson planner, auto-correction, smart gradebook, attendance.', icon: Sparkles, brand: '#059669' },
            { title: 'Parent', description: 'AI doubt solver, weekly summary, career projection, direct teacher chat.', icon: Users, brand: '#d97706' },
          ]}
        />
      </Section>

      <Section
        eyebrow="Outcomes"
        title="What changes when a school operates on intelligence."
        subtitle="Not vague benefits — measurable shifts that institutions report in the first two terms."
      >
        <FeatureGrid
          columns={3}
          items={[
            { title: 'Earlier intervention', description: 'At-risk students surfaced 4-6 weeks before performance drops.', icon: Bell, brand: '#0071e3' },
            { title: 'Faster admin', description: 'Routine reporting time drops by 60-70% with AI summaries and auto-correction.', icon: Workflow, brand: '#059669' },
            { title: 'Higher retention', description: 'Parents who see a weekly AI summary stay closer to academic progress — and renew.', icon: TrendingUp, brand: '#7B3FF4' },
            { title: 'Clearer accountability', description: 'Teacher and branch performance is visible, ranked and explainable — no more guessing.', icon: Lightbulb, brand: '#003ECC' },
            { title: 'Better hiring decisions', description: 'Composite teacher scoring + parent NPS show who to retain, develop, and replace.', icon: Database, brand: '#d97706' },
            { title: 'Network-wide standards', description: 'Multi-branch institutions enforce a single quality bar across every campus.', icon: Layers, brand: '#0071e3' },
          ]}
        />
      </Section>

      <Section eyebrow="FAQs" title="The basics, answered.">
        <FaqSection faqs={FAQS} />
      </Section>

      <RelatedLinks links={RELATED} />

      <CtaBand
        title="See the intelligence layer in action."
        description="A 25-minute demo shows you the four dashboards, the AI workflows, and what changes when a school operates on decisions, not reports."
        primaryCta={{ to: '/contact', label: 'Book a demo' }}
        secondaryCta={{ to: '/what-is-edullent', label: 'Learn more' }}
      />
    </ContentPage>
  </>
);

export default EducationIntelligencePlatformPage;
