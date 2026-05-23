import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Seo from '../../../components/seo/Seo';
import ContentPage from '../../../components/content/ContentPage';
import PageHero from '../../../components/content/PageHero';
import Section from '../../../components/content/Section';
import RelatedLinks from '../../../components/content/RelatedLinks';
import CtaBand from '../../../components/content/CtaBand';
import { USE_CASES } from '../../../content/useCases';
import {
  composeSchemaGraph,
  organizationSchema,
  websiteSchema,
  collectionPageSchema,
  itemListSchema,
  breadcrumbSchema,
} from '../../../components/seo/schemas';

const URL = 'https://edullent.com/use-cases';
const BRAND = '#0071e3';

const RELATED = [
  { to: '/education-intelligence-platform', title: 'Education Intelligence Platform', description: 'The category these use cases live inside.' },
  { to: '/customers', title: 'Customer stories', description: 'See how Pilot Schools A, B and C activated these use cases.' },
  { to: '/school-erp-vs-education-intelligence', title: 'School ERP vs Intelligence', description: 'Why each of these is a use case, not a module.' },
  { to: '/insights', title: 'Insights', description: 'Long-form thinking behind every use case on this page.' },
];

const UseCasesIndexPage = () => (
  <>
    <Seo
      title="Use Cases — Edullent Education Intelligence Platform"
      description="Browse Edullent by the operational problem you want to solve — student performance, attendance, parent communication, school analytics, daily operations, and reporting."
      canonical={URL}
      ogTitle="Edullent Use Cases"
      ogDescription="Six use cases that map every Indian school's operational reality."
      schema={composeSchemaGraph([
        organizationSchema(),
        websiteSchema(),
        collectionPageSchema({
          url: URL,
          name: 'Edullent Use Cases',
          description:
            'The six operational problems Edullent addresses — student performance, attendance, communication, analytics, operations, reporting.',
        }),
        itemListSchema(
          USE_CASES.map((u) => ({
            name: u.cardTitle,
            url: `https://edullent.com/use-cases/${u.slug}`,
          })),
        ),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Use Cases', path: '/use-cases' },
        ]),
      ])}
    />
    <ContentPage
      breadcrumbs={[
        { name: 'Home', path: '/' },
        { name: 'Use Cases', path: '/use-cases' },
      ]}
    >
      <PageHero
        eyebrow="Use cases"
        title="Browse Edullent by the problem you want to solve."
        subtitle="Six operational shapes cover every Indian school. Pick the one keeping you up, and start there."
        description="Edullent is not a bag of modules. It's an intelligence layer that resolves to six durable use cases — the same six every school owner, principal, teacher and parent describes when you ask them what's broken."
        primaryCta={{ to: '/contact', label: 'Book a demo' }}
        secondaryCta={{ to: '/customers', label: 'See customer stories' }}
        brand={BRAND}
      />

      <Section eyebrow="The six use cases" title="One per real-world pain.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {USE_CASES.map((u) => {
            const Icon = u.cardIcon;
            return (
              <Link
                key={u.slug}
                to={`/use-cases/${u.slug}`}
                className="group bg-white rounded-[20px] border border-[#e5e5ea] p-6 md:p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-16px_rgba(0,0,0,0.10)] flex flex-col gap-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div
                    className="w-12 h-12 rounded-[14px] flex items-center justify-center"
                    style={{ background: `${BRAND}14`, color: BRAND }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#c7c7cc] group-hover:text-[#1d1d1f] transition-colors mt-1" />
                </div>
                <div>
                  <h3 className="text-[20px] md:text-[22px] font-medium text-[#1d1d1f] tracking-[-0.01em] mb-2 leading-[1.25] group-hover:text-[#0071e3] transition-colors">
                    {u.cardTitle}
                  </h3>
                  <p className="text-[14px] md:text-[15px] text-[#86868b] leading-[1.55]">
                    {u.cardSummary}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      <Section
        eyebrow="How to read these"
        title="Each page answers the same four questions."
      >
        <div className="bg-white border border-[#e5e5ea] rounded-[20px] p-7 md:p-10 max-w-[920px]">
          <ul className="space-y-4 text-[15px] md:text-[16px] text-[#424245] leading-[1.6]">
            <li className="flex gap-3">
              <span className="text-[#0071e3] font-semibold shrink-0">1.</span>
              <span><strong className="text-[#1d1d1f]">What is broken today</strong> — the real-world version Edullent&apos;s pilot schools described.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#0071e3] font-semibold shrink-0">2.</span>
              <span><strong className="text-[#1d1d1f]">The five-step flow</strong> — how signal becomes decision becomes action.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#0071e3] font-semibold shrink-0">3.</span>
              <span><strong className="text-[#1d1d1f]">Role-by-role impact</strong> — what changes for the owner, principal, teacher and parent.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#0071e3] font-semibold shrink-0">4.</span>
              <span><strong className="text-[#1d1d1f]">Outcomes seen in pilots</strong> — the numbers Pilot Schools A, B and C produced in their first term.</span>
            </li>
          </ul>
        </div>
      </Section>

      <RelatedLinks links={RELATED} brand={BRAND} />

      <CtaBand
        title="Pick a use case and book a walkthrough."
        description="A 25-minute walkthrough focused on the one use case you want to solve first. No generic demo."
        primaryCta={{ to: '/contact', label: 'Book a walkthrough' }}
        secondaryCta={{ to: '/customers', label: 'Read customer stories' }}
      />
    </ContentPage>
  </>
);

export default UseCasesIndexPage;
