import { GitBranch, Brain, TrendingUp, Trophy, Shield, AlertTriangle, BarChart3, Layers } from 'lucide-react';
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
  webPageSchema,
  faqPageSchema,
  breadcrumbSchema,
} from '../../components/seo/schemas';

const URL = 'https://edullent.com/for-school-owners';
const BRAND = '#0071e3';

const FAQS = [
  {
    question: 'What does the Owner Dashboard show?',
    answer:
      'Cross-branch performance comparison, group financial summary, branch leaderboard with rankings, AI risk predictor, brand-level student intelligence, teacher performance across campuses. Everything a school owner or chairman needs to run a group at a glance.',
  },
  {
    question: 'Can the Owner Dashboard handle multiple branches?',
    answer:
      'Yes — Edullent is multi-tenant by design. Owners of 2-branch groups and 50-branch chains use the same dashboard structure, with each campus contributing to the network view in real time.',
  },
  {
    question: 'How does the AI Risk Predictor work for an owner?',
    answer:
      'At the network level, the predictor surfaces which branches have rising at-risk populations, which classes are slipping, and which interventions are working — six weeks before traditional reports would show it.',
  },
  {
    question: 'How is teacher performance scored across campuses?',
    answer:
      'A composite score combining attendance discipline, class average, parent NPS and grading speed. Owners see network-wide rankings + branch + subject filters — so the best teachers in the group surface, and weakest get coaching.',
  },
];

const CAPABILITIES = [
  { title: 'Branch comparison', description: 'Live side-by-side: attendance, results, fees, brand strength, growth.', icon: GitBranch, brand: BRAND },
  { title: 'AI Risk Predictor', description: 'Network-wide early warning across at-risk students and slipping branches.', icon: AlertTriangle, brand: BRAND },
  { title: 'Group financials', description: 'Consolidated fee health by branch, term, and student segment.', icon: BarChart3, brand: BRAND },
  { title: 'Brand leaderboard', description: 'Ranked branches month over month, with AI surfacing the differentiator.', icon: Trophy, brand: BRAND },
  { title: 'Teacher performance', description: 'Composite scoring + ranking across every campus in the group.', icon: TrendingUp, brand: BRAND },
  { title: 'Multi-branch architecture', description: 'Per-branch isolation, group-level aggregation. Scales without re-platforming.', icon: Layers, brand: BRAND },
];

const RELATED = [
  { to: '/education-intelligence-platform', title: 'Education Intelligence Platform', description: 'The category Edullent operates in.' },
  { to: '/owner', title: 'Owner Dashboard preview', description: 'Walk through the actual dashboard.' },
  { to: '/for-principals', title: 'For Principals', description: 'Daily operating intelligence for the school principal.' },
  { to: '/customers', title: 'Customer stories', description: 'How chains and groups use Edullent.' },
];

const ForSchoolOwnersPage = () => (
  <>
    <Seo
      title="Edullent for School Owners — Cross-Branch Intelligence for Chairmen and Groups"
      description="Run a multi-branch school group on intelligence, not spreadsheets. AI risk prediction, branch comparison, group financials, teacher performance across every campus."
      canonical={URL}
      ogTitle="Edullent for School Owners"
      ogDescription="Cross-branch intelligence for chairmen and education groups."
      schema={composeSchemaGraph([
        organizationSchema(),
        webPageSchema({
          url: URL,
          name: 'Edullent for School Owners',
          description: 'Multi-branch intelligence for school owners and chairmen.',
        }),
        faqPageSchema(FAQS),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'For School Owners', path: '/for-school-owners' },
        ]),
      ])}
    />
    <ContentPage
      breadcrumbs={[
        { name: 'Home', path: '/' },
        { name: 'For School Owners', path: '/for-school-owners' },
      ]}
    >
      <PageHero
        eyebrow="For School Owners & Chairmen"
        title="See every campus. At a glance. Every day."
        subtitle="Edullent's Owner Dashboard is the operating intelligence layer for school groups — single-campus to 50-branch chains."
        description="Cross-branch comparison, AI risk prediction, group financials, brand leaderboard, teacher performance — every signal a school group produces, ranked and recommended on one screen."
        primaryCta={{ to: '/contact', label: 'Book a demo' }}
        secondaryCta={{ to: '/owner', label: 'Preview the dashboard' }}
        brand={BRAND}
      />

      <Section eyebrow="What you see" title="Six capabilities, one screen." subtitle="The Owner Dashboard surfaces the six things every group leader needs in real time.">
        <FeatureGrid items={CAPABILITIES} columns={3} />
      </Section>

      <Section eyebrow="A day in the life" title="What changes when an owner runs the group on Edullent.">
        <div className="bg-white border border-[#e5e5ea] rounded-[20px] p-7 md:p-10 max-w-[920px]">
          <div className="space-y-5 text-[16px] md:text-[17px] text-[#424245] leading-[1.65]">
            <p><strong className="text-[#1d1d1f]">Monday 9 AM:</strong> Owner opens the dashboard. The brand leaderboard shows Branch C dropped two spots — attendance is the cause. Risk Predictor flags 18 students across the group as Critical.</p>
            <p><strong className="text-[#1d1d1f]">9:15 AM:</strong> One-click drill into Branch C&apos;s attendance. The principal already has the names. The intervention list is pre-built.</p>
            <p><strong className="text-[#1d1d1f]">9:30 AM:</strong> Group financial summary: Branch B is 12% behind on fees this term. Auto-suggested escalation list ready.</p>
            <p><strong className="text-[#1d1d1f]">9:45 AM:</strong> Teacher leaderboard for the month. Top three are surfaced. Bottom three flagged for coaching.</p>
            <p className="text-[#0071e3] font-medium">By 10 AM, three decisions are made. Without intelligence, that would have been a quarterly review.</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="FAQs" title="Common owner questions.">
        <FaqSection faqs={FAQS} brand={BRAND} />
      </Section>

      <RelatedLinks links={RELATED} brand={BRAND} />

      <CtaBand
        title="See your group on intelligence."
        description="A 25-minute walkthrough of the Owner Dashboard, with your real institution structure in mind."
        primaryCta={{ to: '/contact', label: 'Book a demo' }}
        secondaryCta={{ to: '/owner', label: 'Preview' }}
      />
    </ContentPage>
  </>
);

export default ForSchoolOwnersPage;
