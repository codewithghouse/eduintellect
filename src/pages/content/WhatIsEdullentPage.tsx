import { Layers, Brain, Building2, ShieldCheck, GraduationCap, Users } from 'lucide-react';
import Seo from '../../components/seo/Seo';
import ContentPage from '../../components/content/ContentPage';
import PageHero from '../../components/content/PageHero';
import Section from '../../components/content/Section';
import FeatureGrid from '../../components/content/FeatureGrid';
import FaqSection from '../../components/content/FaqSection';
import RelatedLinks from '../../components/content/RelatedLinks';
import CtaBand from '../../components/content/CtaBand';
import {
  composeSchemaGraph,
  organizationSchema,
  websiteSchema,
  webPageSchema,
  faqPageSchema,
  breadcrumbSchema,
} from '../../components/seo/schemas';

const URL = 'https://edullent.com/what-is-edullent';

const FAQS = [
  {
    question: 'What is Edullent in one line?',
    answer:
      'Edullent is the intelligence layer between a school and its data — an AI-powered platform that turns institution data into insights, recommendations and outcomes for owners, principals, teachers and parents.',
  },
  {
    question: 'Is Edullent a school ERP?',
    answer:
      'Edullent includes everything a school ERP does — attendance, fees, marks, communication — and then adds the intelligence layer ERPs lack: AI risk prediction, teacher performance scoring, cross-branch comparison, weekly AI summaries, decision recommendations.',
  },
  {
    question: 'Who is Edullent for?',
    answer:
      'Modern Indian institutions of every scale — single-campus K-12 schools, Pre-Primary networks, multi-branch chains, premium and international schools. Used by school owners, chairmen, principals, deans, teachers, support staff and parents.',
  },
  {
    question: 'What makes Edullent different?',
    answer:
      'Three things. First, decision intelligence on the home screen — not buried in reports. Second, every role gets a dashboard, not just admins — parents see the same intelligence layer the principal sees, scoped to their child. Third, AI is native, not bolted on — exam generation, auto-correction, risk prediction and lesson planning are core, not add-ons.',
  },
  {
    question: 'How is Edullent priced?',
    answer:
      'Edullent uses transparent per-student pricing with plans tuned to school size. All four dashboards, AI capabilities, training, onboarding and data migration are included in every plan. Contact sales for a quote scoped to your institution.',
  },
  {
    question: 'How quickly can a school start using Edullent?',
    answer:
      'Most institutions are operational within 2 weeks. Excel-based data migration, role-by-role training and a guided 2-minute onboarding flow are part of every implementation. The platform is built to be useful from day one — the deeper intelligence emerges as data accumulates.',
  },
];

const PILLARS = [
  {
    title: 'A platform',
    description: 'Four dashboards (Owner, Principal, Teacher, Parent), one shared database, real-time sync.',
    icon: Layers,
    brand: '#0071e3',
  },
  {
    title: 'An intelligence layer',
    description: 'AI risk prediction, composite teacher scoring, decision recommendations, weekly AI summaries.',
    icon: Brain,
    brand: '#003ECC',
  },
  {
    title: 'Built for institutions',
    description: 'Multi-tenant by design, scales from single campus to fifty-branch chains without re-architecting.',
    icon: Building2,
    brand: '#059669',
  },
];

const SERVES = [
  { title: 'Owners & Chairmen', description: 'Cross-branch comparison, group financials, brand leaderboard, AI predictions.', icon: ShieldCheck, brand: '#0071e3' },
  { title: 'Principals', description: 'Daily operating intelligence — recommendations, risk intervention, teacher performance.', icon: Building2, brand: '#003ECC' },
  { title: 'Teachers', description: 'AI exam generator, lesson planner, auto-correction, smart gradebook and attendance.', icon: GraduationCap, brand: '#059669' },
  { title: 'Parents', description: 'Real-time view of academic, attendance and behavioural progress, with AI summaries.', icon: Users, brand: '#d97706' },
];

const RELATED = [
  { to: '/education-intelligence-platform', title: 'Education Intelligence Platform', description: 'The category Edullent operates in.' },
  { to: '/use-cases', title: 'Use cases', description: 'The six operational shapes Edullent addresses.' },
  { to: '/customers', title: 'Customer stories', description: 'How Pilot Schools A, B and C run on Edullent.' },
  { to: '/school-erp-vs-education-intelligence', title: 'School ERP vs Education Intelligence', description: 'Where traditional software stops.' },
];

const WhatIsEdullentPage = () => (
  <>
    <Seo
      title="What is Edullent? — Education Intelligence Platform for Modern Schools"
      description="Edullent is the intelligence layer between a school and its data. AI-powered dashboards for owners, principals, teachers and parents — one platform, every role."
      canonical={URL}
      ogTitle="What is Edullent?"
      ogDescription="The intelligence layer between a school and its data."
      schema={composeSchemaGraph([
        organizationSchema(),
        websiteSchema(),
        webPageSchema({
          url: URL,
          name: 'What is Edullent — Education Intelligence Platform',
          description: 'Definition, capabilities, and who Edullent is built for.',
        }),
        faqPageSchema(FAQS),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'What is Edullent', path: '/what-is-edullent' },
        ]),
      ])}
    />
    <ContentPage
      breadcrumbs={[
        { name: 'Home', path: '/' },
        { name: 'What is Edullent', path: '/what-is-edullent' },
      ]}
    >
      <PageHero
        eyebrow="The definition"
        title="What is Edullent?"
        subtitle="Edullent is an Education Intelligence Platform — the layer between a school and its data."
        description="Traditional school software records operations. Edullent turns those operations into insights, recommendations and outcomes — for owners, principals, teachers and parents. One platform, four dashboards, one connected brain."
        primaryCta={{ to: '/education-intelligence-platform', label: 'Explore the platform' }}
        secondaryCta={{ to: '/contact', label: 'Book a demo' }}
      />

      <Section
        eyebrow="The three pillars"
        title="A platform, an intelligence layer, built for institutions."
      >
        <FeatureGrid items={PILLARS} columns={3} />
      </Section>

      <Section
        eyebrow="Who it serves"
        title="Every role inside a school — connected through one intelligence layer."
        subtitle="From the chairman of a 50-branch group to a parent checking the weekly summary, every Edullent surface speaks to the same underlying brain."
      >
        <FeatureGrid items={SERVES} columns={4} />
      </Section>

      <Section
        eyebrow="The philosophy"
        title="From recording school operations — to running them with intelligence."
      >
        <div className="bg-white border border-[#e5e5ea] rounded-[20px] p-7 md:p-10 max-w-[920px]">
          <p className="text-[17px] md:text-[19px] text-[#1d1d1f] leading-[1.6] mb-5">
            Schools have always generated more data than they could use. Attendance registers,
            marks sheets, fee ledgers, behaviour notes, parent calls. Spread across registers,
            Excel files, WhatsApp groups and last decade&apos;s ERP.
          </p>
          <p className="text-[17px] md:text-[19px] text-[#424245] leading-[1.6] mb-5">
            The result is institutions that <em>react</em> — to a dropout, a complaint, a poor
            result, a fee default — instead of seeing it coming.
          </p>
          <p className="text-[17px] md:text-[19px] text-[#424245] leading-[1.6]">
            Edullent collapses every signal a school produces into one connected brain — and
            then turns that brain into specific, role-aware decisions. Less reporting. More
            running. The intelligence layer for modern Indian schools.
          </p>
        </div>
      </Section>

      <Section eyebrow="FAQs" title="What people ask before getting started.">
        <FaqSection faqs={FAQS} />
      </Section>

      <RelatedLinks links={RELATED} />

      <CtaBand
        title="See Edullent run a school."
        description="A 25-minute demo walks through all four dashboards — what each role sees, what each role decides, and how the intelligence layer connects them."
        primaryCta={{ to: '/contact', label: 'Book a demo' }}
        secondaryCta={{ to: '/education-intelligence-platform', label: 'Explore the platform' }}
      />
    </ContentPage>
  </>
);

export default WhatIsEdullentPage;
