import { Link } from 'react-router-dom';
import {
  TrendingUp,
  Users,
  ClipboardCheck,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react';
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
  collectionPageSchema,
  faqPageSchema,
  breadcrumbSchema,
} from '../../components/seo/schemas';

const URL = 'https://edullent.com/customers';
const BRAND = '#0071e3';

interface PilotStory {
  code: 'A' | 'B' | 'C';
  badge: string;
  segment: string;
  profile: string;
  challenge: string;
  deployed: string[];
  outcomes: Array<{ metric: string; label: string }>;
  quote: string;
  quoteRole: string;
}

const STORIES: PilotStory[] = [
  {
    code: 'A',
    badge: 'Pilot School A',
    segment: 'Multi-branch CBSE group · South India',
    profile:
      'A two-campus CBSE group running on spreadsheets, three disconnected mobile apps and one half-built ERP. Roughly 1,400 students between Pre-Primary and Grade 10.',
    challenge:
      'Owner could not see both branches in one view. Attendance for one campus came on email, the other on WhatsApp. Fee reports lagged by a fortnight. Risk students surfaced only at the parent-teacher meeting — by then a term had been lost.',
    deployed: [
      'Owner Dashboard with cross-branch comparison',
      'Principal Dashboard at both campuses',
      'Teacher app for all class-teachers',
      'Parent Connect across both branches',
      'AI Risk Predictor on day one',
    ],
    outcomes: [
      { metric: '~6 weeks earlier', label: 'first risk-student intervention vs. the previous year' },
      { metric: '92%', label: 'parent-side engagement on Parent Connect within 8 weeks' },
      { metric: '1 screen', label: 'replaces the WhatsApp+email+spreadsheet stack for the owner' },
    ],
    quote:
      'For the first time, I open one screen on Monday morning and I can already tell which campus needs me this week.',
    quoteRole: 'Pilot School A · Group Owner',
  },
  {
    code: 'B',
    badge: 'Pilot School B',
    segment: 'Single-campus K-10 · Tier-2 city',
    profile:
      'A growing single-campus K-10 school with ~900 students. Strong academics, weak operational discipline. The principal was personally chasing daily attendance and term-end reports.',
    challenge:
      'Reports took the academic team three working days at the end of every term. Teacher quality was anecdotal — no composite score, no ranking, no coaching list. Parents were demanding more transparency than the school could supply.',
    deployed: [
      'Principal Dashboard',
      'Teacher app + AI lesson summarizer',
      'Parent Connect with daily intelligence',
      'Automatic term-end report generation',
      'Teacher composite scoring',
    ],
    outcomes: [
      { metric: '3 days → 4 hours', label: 'to generate end-of-term reports across grades' },
      { metric: 'Composite score', label: 'replaces gut-feel teacher evaluations' },
      { metric: 'Daily parent ping', label: 'replaces the quarterly PTM as the engagement primitive' },
    ],
    quote:
      'My academic team used to fight reports for three days. Now reports just exist — and we use those days for actual teaching.',
    quoteRole: 'Pilot School B · Principal',
  },
  {
    code: 'C',
    badge: 'Pilot School C',
    segment: 'Pre-Primary + Primary · Hybrid model',
    profile:
      'A Pre-Primary + Primary school with ~420 children, ages 2–10. Parents wanted a daily window into their child without an app the child should ever touch. Teachers wanted to stop building photo collages in WhatsApp.',
    challenge:
      'Pre-Primary class teachers were spending the second half of every day editing photos and writing parent updates by hand. Photos were leaking across WhatsApp groups. Daily routines, milestones and meals were not being captured anywhere durable.',
    deployed: [
      'Pre-Primary Teacher dashboard (operator surface)',
      'Pre-Primary Parent dashboard (monitor-only surface)',
      'Photo Studio + Gallery (per-child)',
      'Daily timeline · meals · sleep · milestones',
      'Strict no-child-facing-surface policy enforced in product',
    ],
    outcomes: [
      { metric: '~60 mins/day saved', label: 'per Pre-Primary class teacher on parent updates' },
      { metric: 'Per-child gallery', label: 'replaces WhatsApp photo dumping' },
      { metric: 'Zero', label: 'child-facing UI — by product policy, not afterthought' },
    ],
    quote:
      'Parents stopped asking what happened today. They could already see it. That changed every parent meeting we ran after.',
    quoteRole: 'Pilot School C · Founder',
  },
];

const COMMON_OUTCOMES = [
  { title: 'Risk surfaces earlier', description: 'On average ~6 weeks earlier than the school\'s previous reporting cadence.', icon: ShieldCheck, brand: BRAND },
  { title: 'One screen per role', description: 'Owners, principals, teachers and parents stop juggling four tools each.', icon: Users, brand: BRAND },
  { title: 'Reports collapse', description: 'End-of-term reporting goes from three days of work to an afternoon — or zero.', icon: ClipboardCheck, brand: BRAND },
  { title: 'Parent engagement compounds', description: 'Daily intelligence to parents pushes engagement past 85% within the first term.', icon: TrendingUp, brand: BRAND },
  { title: 'AI is not an add-on', description: 'Risk Predictor, composite teacher scores and summarizers ship on day one, not at "v2".', icon: Sparkles, brand: BRAND },
];

const FAQS = [
  {
    question: 'Why are the schools anonymized?',
    answer:
      'Pilot institutions chose to participate quietly while the platform matured. We publish outcomes with the partner\'s consent but withhold the institution\'s name until they\'re ready to be public. Edullent never invents school names or fabricates testimonials.',
  },
  {
    question: 'Are these outcomes representative?',
    answer:
      'Yes — these are the three patterns Edullent sees repeatedly: a multi-branch group needing one view, a single-campus school stuck on operational drag, and a Pre-Primary institution needing parent transparency without exposing children to an app. Every Edullent rollout maps to one of these three shapes.',
  },
  {
    question: 'How fast does a typical rollout go?',
    answer:
      'Two to three weeks from contract to first live dashboard for a single-campus school. For multi-branch groups, the owner-level view comes online first, individual branches follow in week-long waves. Edullent is multi-tenant by design — adding a campus is not a re-deploy.',
  },
  {
    question: 'What happens to my school\'s existing systems?',
    answer:
      'Edullent typically replaces the spreadsheet + WhatsApp + standalone-ERP stack. Where a school has a payments or accounting system in place, Edullent integrates rather than displaces. The first 30 days establish what gets retired and what stays.',
  },
  {
    question: 'Can my school become a public reference?',
    answer:
      'Yes — at any time. The default is anonymized until the partner explicitly opts in to a named case study. Many institutions choose to go public after the first full academic year on Edullent, when the numbers are unambiguous.',
  },
];

const RELATED = [
  { to: '/education-intelligence-platform', title: 'Education Intelligence Platform', description: 'The category these institutions chose over a traditional ERP.' },
  { to: '/use-cases', title: 'Use cases', description: 'Browse Edullent by the operational problem you want to solve.' },
  { to: '/school-erp-vs-education-intelligence', title: 'School ERP vs Intelligence', description: 'Why every pilot moved off the ERP framing.' },
  { to: '/for-school-owners', title: 'For School Owners', description: 'The owner-side view that Pilot A relies on.' },
];

const StoryCard: React.FC<{ story: PilotStory }> = ({ story }) => (
  <article className="bg-white rounded-[20px] border border-[#e5e5ea] overflow-hidden">
    <header className="px-6 md:px-10 pt-8 md:pt-10 pb-6 border-b border-[#f0f0f3]">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#0071e3] mb-2">
            {story.badge}
          </div>
          <h3 className="text-[24px] md:text-[32px] font-normal text-[#1d1d1f] tracking-[-0.02em] leading-[1.15] mb-1.5">
            {story.segment}
          </h3>
        </div>
        <span
          className="shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-full text-white text-[18px] font-medium"
          style={{ background: BRAND, boxShadow: `0 8px 22px ${BRAND}40` }}
          aria-hidden
        >
          {story.code}
        </span>
      </div>
      <p className="text-[15px] md:text-[16px] text-[#424245] leading-[1.6] mt-3 max-w-[760px]">
        {story.profile}
      </p>
    </header>

    <div className="grid md:grid-cols-2 gap-0 border-b border-[#f0f0f3]">
      <div className="p-6 md:p-10 border-b md:border-b-0 md:border-r border-[#f0f0f3]">
        <div className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[#86868b] mb-3">
          What was breaking
        </div>
        <p className="text-[14.5px] text-[#424245] leading-[1.65]">{story.challenge}</p>
      </div>
      <div className="p-6 md:p-10">
        <div className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[#86868b] mb-3">
          What was deployed
        </div>
        <ul className="space-y-2">
          {story.deployed.map((d) => (
            <li key={d} className="text-[14.5px] text-[#1d1d1f] leading-[1.55] flex gap-2.5">
              <span
                className="inline-block w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                style={{ background: BRAND }}
              />
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="px-6 md:px-10 py-7 md:py-9 bg-[#fbfbfd]">
      <div className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[#86868b] mb-5">
        Outcomes after first term
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
        {story.outcomes.map((o) => (
          <div key={o.label}>
            <div
              className="text-[22px] md:text-[26px] font-medium tracking-[-0.015em] mb-1"
              style={{ color: BRAND }}
            >
              {o.metric}
            </div>
            <p className="text-[13.5px] text-[#424245] leading-[1.5]">{o.label}</p>
          </div>
        ))}
      </div>
    </div>

    <blockquote className="px-6 md:px-10 py-7 md:py-9 border-t border-[#f0f0f3]">
      <p className="text-[17px] md:text-[20px] text-[#1d1d1f] leading-[1.45] tracking-[-0.005em] font-light italic">
        &ldquo;{story.quote}&rdquo;
      </p>
      <footer className="mt-3 text-[13px] text-[#86868b]">— {story.quoteRole}</footer>
    </blockquote>
  </article>
);

const CustomersPage = () => (
  <>
    <Seo
      title="Customers — How Schools Run on Edullent"
      description="Three patterns repeat across Edullent's pilot institutions: a multi-branch group, a single-campus school, and a Pre-Primary setup. Anonymized stories, real outcomes."
      canonical={URL}
      ogTitle="How schools run on Edullent"
      ogDescription="Anonymized pilot stories — outcomes from real Indian institutions running on Edullent."
      schema={composeSchemaGraph([
        organizationSchema(),
        collectionPageSchema({
          url: URL,
          name: 'Edullent Customers',
          description: 'Anonymized implementation stories from pilot schools running on Edullent.',
        }),
        webPageSchema({
          url: URL,
          name: 'Edullent Customers',
          description: 'How institutions use the Education Intelligence Platform — stories and outcomes.',
        }),
        faqPageSchema(FAQS),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Customers', path: '/customers' },
        ]),
      ])}
    />
    <ContentPage
      breadcrumbs={[
        { name: 'Home', path: '/' },
        { name: 'Customers', path: '/customers' },
      ]}
    >
      <PageHero
        eyebrow="Customers"
        title="Three patterns. Three pilots. One platform."
        subtitle="Edullent's earliest partners chose us quietly. We publish what we changed, on their terms — anonymized until they're ready to be named."
        description="Every Edullent rollout maps to one of three shapes: a multi-branch group needing one view, a single-campus school stuck on operational drag, or a Pre-Primary institution needing parent transparency without putting a child on a screen."
        primaryCta={{ to: '/contact', label: 'Become a partner school' }}
        secondaryCta={{ to: '/education-intelligence-platform', label: 'Why intelligence, not ERP' }}
        brand={BRAND}
      />

      <Section eyebrow="Implementation stories" title="What changed, in their own framing.">
        <div className="space-y-6 md:space-y-8">
          {STORIES.map((story) => (
            <StoryCard key={story.code} story={story} />
          ))}
        </div>
        <p className="text-[12.5px] text-[#86868b] mt-6 max-w-[760px] leading-[1.5]">
          Pilot institutions are anonymized at their request. Outcomes are reported from the
          school&apos;s own first-term measurements. We do not invent institutions, fabricate quotes,
          or attribute outcomes to schools that did not produce them.
        </p>
      </Section>

      <Section
        eyebrow="What repeats"
        title="Five outcomes show up in every pilot."
        subtitle="The story differs by institution. The shape of the result does not."
      >
        <FeatureGrid items={COMMON_OUTCOMES} columns={3} />
      </Section>

      <Section eyebrow="Becoming a partner" title="How a new institution gets onboarded.">
        <div className="bg-white border border-[#e5e5ea] rounded-[20px] p-7 md:p-10 max-w-[920px]">
          <ol className="space-y-5 text-[15px] md:text-[16px] text-[#424245] leading-[1.6]">
            <li className="flex gap-4">
              <span
                className="shrink-0 w-7 h-7 rounded-full inline-flex items-center justify-center text-white text-[13px] font-medium mt-0.5"
                style={{ background: BRAND }}
              >
                1
              </span>
              <span>
                <strong className="text-[#1d1d1f]">Discovery call.</strong> One 25-minute walkthrough
                with the founder. We map your school to one of the three pilot shapes.
              </span>
            </li>
            <li className="flex gap-4">
              <span
                className="shrink-0 w-7 h-7 rounded-full inline-flex items-center justify-center text-white text-[13px] font-medium mt-0.5"
                style={{ background: BRAND }}
              >
                2
              </span>
              <span>
                <strong className="text-[#1d1d1f]">Pilot scoping.</strong> We decide which dashboards
                go live in week one and which integrations carry over from your existing stack.
              </span>
            </li>
            <li className="flex gap-4">
              <span
                className="shrink-0 w-7 h-7 rounded-full inline-flex items-center justify-center text-white text-[13px] font-medium mt-0.5"
                style={{ background: BRAND }}
              >
                3
              </span>
              <span>
                <strong className="text-[#1d1d1f]">Two to three weeks.</strong> Single-campus
                deployments hit production in two weeks. Multi-branch groups bring the owner-side
                view first; campuses follow in week-long waves.
              </span>
            </li>
            <li className="flex gap-4">
              <span
                className="shrink-0 w-7 h-7 rounded-full inline-flex items-center justify-center text-white text-[13px] font-medium mt-0.5"
                style={{ background: BRAND }}
              >
                4
              </span>
              <span>
                <strong className="text-[#1d1d1f]">First-term review.</strong> At the end of the
                first term we compare outcomes to baseline. If you choose to go public, that&apos;s
                the moment the case study becomes named.
              </span>
            </li>
          </ol>
        </div>
      </Section>

      <Section eyebrow="FAQs" title="Questions every new institution asks.">
        <FaqSection faqs={FAQS} brand={BRAND} />
      </Section>

      <RelatedLinks links={RELATED} brand={BRAND} />

      <CtaBand
        title="Become Pilot D."
        description="Edullent partners get the founder on the call, the dashboards in two weeks, and outcomes measured at end of term — anonymized by default."
        primaryCta={{ to: '/contact', label: 'Talk to the founder' }}
        secondaryCta={{ to: '/use-cases', label: 'Browse use cases' }}
      />

      <div className="-mt-6 mb-2 flex">
        <Link
          to="/insights"
          className="inline-flex items-center gap-1.5 text-[13px] text-[#86868b] hover:text-[#1d1d1f] transition-colors"
        >
          Read how we think about it on the Insights blog
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </ContentPage>
  </>
);

export default CustomersPage;
