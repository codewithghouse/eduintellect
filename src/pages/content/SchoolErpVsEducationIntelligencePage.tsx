import Seo from '../../components/seo/Seo';
import ContentPage from '../../components/content/ContentPage';
import PageHero from '../../components/content/PageHero';
import Section from '../../components/content/Section';
import ComparisonTable from '../../components/content/ComparisonTable';
import ProblemSolutionFlow from '../../components/content/ProblemSolutionFlow';
import FaqSection from '../../components/content/FaqSection';
import RelatedLinks from '../../components/content/RelatedLinks';
import CtaBand from '../../components/content/CtaBand';
import {
  composeSchemaGraph,
  organizationSchema,
  articleSchema,
  faqPageSchema,
  breadcrumbSchema,
} from '../../components/seo/schemas';

const URL = 'https://edullent.com/school-erp-vs-education-intelligence';

const FAQS = [
  {
    question: 'What is the difference between a school ERP and an Education Intelligence Platform?',
    answer:
      'A school ERP records operations — attendance, marks, fees, communication. An Education Intelligence Platform turns that data into insights, recommendations and outcomes. ERPs answer "what happened?" Intelligence platforms answer "what should we do?"',
  },
  {
    question: 'Can we use both an ERP and an intelligence platform together?',
    answer:
      'You can, but most institutions consolidate within the first term. Intelligence depends on data being unified — keeping two systems doubles maintenance and dilutes the signal. Edullent includes everything an ERP does, so the consolidation is natural.',
  },
  {
    question: 'Is an intelligence platform overkill for a small school?',
    answer:
      'No. The platform scales down without losing its core value — a 200-student school benefits from at-risk identification, weekly AI summaries and parent engagement just as much as a 5,000-student chain. The intelligence is automatic; you do not configure it.',
  },
  {
    question: 'What does "decision intelligence" mean in practice?',
    answer:
      'It means the home screen recommends an action, not just shows data. Example: instead of an attendance report listing students under 75%, the principal sees a ranked intervention list — student name, severity, recommended action (parent call, counselling, mentor reassignment) and one-click to act.',
  },
  {
    question: 'How long has Education Intelligence as a category existed?',
    answer:
      'The category emerged after 2022 as AI capabilities matured enough to make per-student prediction reliable. Before that, "school analytics" meant aggregate dashboards. Edullent is built specifically for this new category — not retrofitted from an older ERP.',
  },
];

const FLOW = [
  { label: 'ERP captures', description: 'Attendance marks fees in records.' },
  { label: 'Data accumulates', description: 'Months of signal — under-used.' },
  { label: 'Intelligence reads', description: 'AI surfaces risks + opportunities.' },
  { label: 'Decisions surface', description: 'Each role sees next-best-action.' },
  { label: 'Outcomes improve', description: 'Earlier intervention, higher retention.' },
];

const ROWS = [
  { label: 'Records attendance, marks, fees',                left: true,  right: true },
  { label: 'Generates reports on demand',                    left: true,  right: true },
  { label: 'Communicates with parents',                      left: 'Manual',  right: 'AI summaries + real-time' },
  { label: 'Identifies at-risk students',                    left: false, right: true },
  { label: 'Cross-branch comparison + ranking',              left: false, right: true },
  { label: 'Teacher performance scoring',                    left: false, right: true },
  { label: 'AI exam generation + auto-correction',           left: false, right: true },
  { label: 'AI lesson planner',                              left: false, right: true },
  { label: 'Weekly AI summary for parents',                  left: false, right: true },
  { label: 'Next-best-action recommendations',               left: false, right: true },
  { label: 'Built-in decision intelligence',                 left: false, right: true },
  { label: 'Implementation time',                            left: 'Months',  right: '2 weeks' },
  { label: 'Architectural age',                              left: '2005-2015 era',  right: 'Post-2022, AI-native' },
];

const RELATED = [
  { to: '/education-intelligence-platform', title: 'Education Intelligence Platform', description: 'The flagship view of the category.' },
  { to: '/use-cases', title: 'Use cases', description: 'Concrete operational shapes that ERPs cannot address.' },
  { to: '/customers', title: 'Customer stories', description: 'Pilot schools that moved off the ERP framing — and what changed.' },
  { to: '/best-school-management-software-india', title: 'Best School Management Software in India', description: 'Evaluation criteria for modern institutions.' },
];

const SchoolErpVsEducationIntelligencePage = () => (
  <>
    <Seo
      title="School ERP vs Education Intelligence Platform — What Changes"
      description="A traditional school ERP records what happened. An education intelligence platform turns that data into decisions. The full comparison, capability by capability."
      canonical={URL}
      ogTitle="School ERP vs Education Intelligence"
      ogDescription="Where traditional school software stops, and intelligence begins."
      ogType="article"
      schema={composeSchemaGraph([
        organizationSchema(),
        articleSchema({
          url: URL,
          headline: 'School ERP vs Education Intelligence Platform — what changes',
          description: 'Capability-by-capability comparison between traditional school ERPs and education intelligence platforms.',
          datePublished: '2026-05-22',
        }),
        faqPageSchema(FAQS),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'School ERP vs Education Intelligence', path: '/school-erp-vs-education-intelligence' },
        ]),
      ])}
    />
    <ContentPage
      breadcrumbs={[
        { name: 'Home', path: '/' },
        { name: 'School ERP vs Education Intelligence', path: '/school-erp-vs-education-intelligence' },
      ]}
    >
      <PageHero
        eyebrow="Comparison"
        title="School ERP vs Education Intelligence Platform."
        subtitle="Same building blocks. Completely different output."
        description="Traditional school ERPs capture operations. Education intelligence platforms turn those operations into decisions. This page walks through the difference capability by capability — and where Edullent fits."
      />

      <Section
        eyebrow="The shift"
        title="From recording to deciding."
        subtitle="The same school data, processed by two different categories of software, produces two different outcomes."
      >
        <ProblemSolutionFlow steps={FLOW} />
      </Section>

      <Section
        eyebrow="The capability gap"
        title="Where ERPs stop, and intelligence begins."
      >
        <ComparisonTable
          leftTitle="Traditional School ERP"
          rightTitle="Education Intelligence (Edullent)"
          rows={ROWS}
        />
      </Section>

      <Section eyebrow="What this looks like in practice" title="Three real workflows that change.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {[
            {
              t: 'Attendance dropping in 9-B',
              erp: 'ERP shows a weekly attendance report. Principal reads it on Monday, follows up Friday.',
              edu: 'Edullent surfaces 9-B on the principal dashboard with the 3 at-risk students named, parent contact ready, recommended action set.',
            },
            {
              t: 'A parent asks about progress',
              erp: 'Teacher pulls marks, copy-pastes into WhatsApp, hopes the parent reads it.',
              edu: 'Parent already has a Weekly AI Summary on Monday morning — marks slope, attendance, behaviour, concept strengths, recommended practice.',
            },
            {
              t: 'Branch comparison at Group level',
              erp: 'Quarterly meeting, 4 PDFs across 4 campuses, manual comparison, partial picture.',
              edu: 'Owner dashboard side-by-side: attendance, results, fees, brand strength, ranked. AI surfaces the differentiator each month.',
            },
          ].map(({ t, erp, edu }) => (
            <div key={t} className="bg-white border border-[#e5e5ea] rounded-[16px] p-6">
              <div className="text-[15px] font-medium text-[#1d1d1f] mb-3">{t}</div>
              <div className="mb-3">
                <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#86868b] mb-1">ERP</div>
                <p className="text-[13.5px] text-[#424245] leading-[1.55]">{erp}</p>
              </div>
              <div>
                <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#0071e3] mb-1">Edullent</div>
                <p className="text-[13.5px] text-[#1d1d1f] leading-[1.55]">{edu}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="FAQs" title="Common questions about the shift.">
        <FaqSection faqs={FAQS} />
      </Section>

      <RelatedLinks links={RELATED} />

      <CtaBand
        title="Move from reports to decisions."
        description="A 25-minute demo shows how an intelligence platform actually changes day-to-day school operations."
        primaryCta={{ to: '/contact', label: 'Book a demo' }}
        secondaryCta={{ to: '/education-intelligence-platform', label: 'Explore the platform' }}
      />
    </ContentPage>
  </>
);

export default SchoolErpVsEducationIntelligencePage;
