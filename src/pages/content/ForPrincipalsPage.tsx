import { Brain, AlertTriangle, Users, BarChart3, Award, Activity } from 'lucide-react';
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

const URL = 'https://edullent.com/for-principals';
const BRAND = '#003ECC';

const FAQS = [
  {
    question: 'What does a Principal Dashboard need to do daily?',
    answer:
      'It needs to recommend, not just report. The Principal Dashboard surfaces the day\'s priority students, teachers needing attention, parent escalations, and a ranked intervention list — with one-click actions per row.',
  },
  {
    question: 'How is the AI Recommendations engine built?',
    answer:
      'It cross-references attendance trends, marks deltas, behaviour signals and parent communication patterns. For each student or class, it suggests the next-best-action with a confidence rating — so principals act on signal, not noise.',
  },
  {
    question: 'How does the Risk Intervention dashboard work?',
    answer:
      'It is the principal\'s daily working board. Every student flagged Critical or Watch shows up here with severity, recommended action and current intervention state. Pure operating tool, not a report.',
  },
  {
    question: 'Can a principal see teacher performance?',
    answer:
      'Yes — the Teacher Leaderboard surfaces composite scores across attendance discipline, class outcomes, parent NPS and grading speed. Filterable by subject, class and term. This is the support tool, not the surveillance tool.',
  },
];

const CAPABILITIES = [
  { title: 'AI Recommendations', description: 'Daily next-best-action engine — ranked by impact, with confidence ratings.', icon: Brain, brand: BRAND },
  { title: 'Risk Intervention', description: 'Operating board for at-risk students. Severity, action, status — all in one view.', icon: AlertTriangle, brand: BRAND },
  { title: 'Teacher Leaderboard', description: 'Composite performance scoring across attendance, outcomes, parent NPS, grading speed.', icon: Award, brand: BRAND },
  { title: 'Class-level analytics', description: 'Subject-by-subject, class-by-class — see which sections are excelling and which need support.', icon: BarChart3, brand: BRAND },
  { title: 'Parent escalations', description: 'Single inbox for parent concerns, routed to the right teacher with context.', icon: Users, brand: BRAND },
  { title: 'Daily operating intelligence', description: 'Not a report. A working dashboard that recommends, surfaces, and connects to action.', icon: Activity, brand: BRAND },
];

const RELATED = [
  { to: '/education-intelligence-platform', title: 'Education Intelligence Platform', description: 'The category Edullent operates in.' },
  { to: '/principal', title: 'Principal Dashboard preview', description: 'Walk through the actual dashboard.' },
  { to: '/for-teachers', title: 'For Teachers', description: 'The AI toolkit that supports your faculty.' },
  { to: '/use-cases/student-performance', title: 'Student performance use case', description: 'How intervention workflows play out in practice.' },
];

const ForPrincipalsPage = () => (
  <>
    <Seo
      title="Edullent for Principals — Daily Operating Intelligence for the School Office"
      description="Run your school on recommendations, not reports. AI-driven risk intervention, teacher leaderboard, class analytics — the operating dashboard for modern principals."
      canonical={URL}
      ogTitle="Edullent for Principals"
      ogDescription="Daily operating intelligence for the people running the school."
      schema={composeSchemaGraph([
        organizationSchema(),
        webPageSchema({
          url: URL,
          name: 'Edullent for Principals',
          description: 'Daily operating intelligence for school principals.',
        }),
        faqPageSchema(FAQS),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'For Principals', path: '/for-principals' },
        ]),
      ])}
    />
    <ContentPage
      breadcrumbs={[
        { name: 'Home', path: '/' },
        { name: 'For Principals', path: '/for-principals' },
      ]}
    >
      <PageHero
        eyebrow="For Principals"
        title="Run the school. On intelligence."
        subtitle="Edullent's Principal Dashboard is the daily operating layer for the office — recommendations, intervention boards, teacher support, class analytics."
        description="Stop reading reports. Start running the school on a board that tells you what to do, who to call, and which student to see — every morning, in priority order."
        primaryCta={{ to: '/contact', label: 'Book a demo' }}
        secondaryCta={{ to: '/principal', label: 'Preview the dashboard' }}
        brand={BRAND}
      />

      <Section eyebrow="What you see" title="Six capabilities. One screen.">
        <FeatureGrid items={CAPABILITIES} columns={3} />
      </Section>

      <Section eyebrow="A day in the life" title="What a principal does differently on Edullent.">
        <div className="bg-white border border-[#e5e5ea] rounded-[20px] p-7 md:p-10 max-w-[920px]">
          <div className="space-y-5 text-[16px] md:text-[17px] text-[#424245] leading-[1.65]">
            <p><strong className="text-[#1d1d1f]">8:45 AM:</strong> Principal arrives. Dashboard already shows 12 students on Watch, 3 Critical. AI Recommendations ranked the top 5 actions for the day.</p>
            <p><strong className="text-[#1d1d1f]">9:30 AM:</strong> Class 9-B teacher flagged in the Teacher Leaderboard — grading speed dropped two weeks running. Quick conversation, not a confrontation.</p>
            <p><strong className="text-[#1d1d1f]">11:00 AM:</strong> Parent escalation inbox shows three new entries. Each routed to the right teacher with context attached. Resolved before lunch.</p>
            <p><strong className="text-[#1d1d1f]">2:30 PM:</strong> Class-level analytics show Section 7-A excelling in Mathematics, falling behind in Science. Curriculum review meeting scheduled.</p>
            <p className="text-[color:var(--brand)] font-medium" style={{ color: BRAND }}>By 5 PM, eight decisions taken — none of them needed a meeting.</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="FAQs" title="Common principal questions.">
        <FaqSection faqs={FAQS} brand={BRAND} />
      </Section>

      <RelatedLinks links={RELATED} brand={BRAND} />

      <CtaBand
        title="Take the school off the report cycle."
        description="A 25-minute walkthrough of the Principal Dashboard — the working board that replaces the weekly review."
        primaryCta={{ to: '/contact', label: 'Book a demo' }}
        secondaryCta={{ to: '/principal', label: 'Preview' }}
      />
    </ContentPage>
  </>
);

export default ForPrincipalsPage;
