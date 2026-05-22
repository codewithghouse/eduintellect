import { FileText, Lock, Mail } from 'lucide-react';
import Seo from '../../../components/seo/Seo';
import ContentPage from '../../../components/content/ContentPage';
import PageHero from '../../../components/content/PageHero';
import Section from '../../../components/content/Section';
import CtaBand from '../../../components/content/CtaBand';
import RelatedLinks from '../../../components/content/RelatedLinks';
import {
  composeSchemaGraph,
  organizationSchema,
  collectionPageSchema,
  breadcrumbSchema,
} from '../../../components/seo/schemas';

const URL = 'https://edullent.com/research/reports';

const UPCOMING = [
  {
    title: 'State of Indian School Operations 2026',
    description:
      'A cross-institution view of how Indian schools operate in 2026 — module adoption, decision velocity, AI uptake, multi-branch maturity.',
    eta: 'Coming Q3 2026',
  },
  {
    title: 'AI in the School Office — Benchmarks',
    description:
      'Adoption rates, time saved per role, accuracy benchmarks for AI exam generation, auto-correction and risk prediction across deployed institutions.',
    eta: 'Coming Q4 2026',
  },
  {
    title: 'Multi-Branch Education Group Index',
    description:
      'A periodic index tracking how growing Indian education groups scale operations, retain quality across branches, and adopt the intelligence layer.',
    eta: 'Coming 2027',
  },
];

const RELATED = [
  { to: '/research/articles', title: 'Research Articles', description: 'Long-form analysis on institution intelligence.' },
  { to: '/research/trends', title: 'Trends', description: 'Where school operations are heading.' },
  { to: '/education-intelligence-platform', title: 'Education Intelligence Platform', description: 'The platform behind the research.' },
];

const ResearchReportsPage = () => (
  <>
    <Seo
      title="Research Reports — Edullent"
      description="Edullent Research publishes periodic reports on the state of Indian school operations, AI adoption in education, and multi-branch education groups."
      canonical={URL}
      ogTitle="Edullent Research Reports"
      ogDescription="Periodic reports on Indian school operations and education technology."
      schema={composeSchemaGraph([
        organizationSchema(),
        collectionPageSchema({
          url: URL,
          name: 'Edullent Research Reports',
          description: 'Periodic reports on Indian school operations and AI adoption.',
        }),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Research', path: '/research' },
          { name: 'Reports', path: '/research/reports' },
        ]),
      ])}
    />
    <ContentPage
      breadcrumbs={[
        { name: 'Home', path: '/' },
        { name: 'Research', path: '/research' },
        { name: 'Reports', path: '/research/reports' },
      ]}
    >
      <PageHero
        eyebrow="Research / Reports"
        title="Reports."
        description="Edullent publishes periodic reports on the state of Indian school operations, AI adoption in education, and how multi-branch education groups scale. The first reports are in production now."
      />

      <Section eyebrow="In production" title="Reports shipping in 2026-2027.">
        <div className="space-y-4">
          {UPCOMING.map((r) => (
            <div
              key={r.title}
              className="bg-white border border-[#e5e5ea] rounded-[16px] p-6 md:p-7 flex flex-col md:flex-row gap-5 md:items-start"
            >
              <div className="w-11 h-11 rounded-[12px] bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline gap-3 mb-2">
                  <h3 className="text-[18px] md:text-[20px] font-medium text-[#1d1d1f] tracking-[-0.01em]">
                    {r.title}
                  </h3>
                  <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#0071e3] inline-flex items-center gap-1.5">
                    <Lock className="w-3 h-3" />
                    {r.eta}
                  </span>
                </div>
                <p className="text-[14.5px] text-[#424245] leading-[1.55] max-w-[760px]">
                  {r.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Get notified" title="Be the first to read.">
        <div className="bg-white border border-[#e5e5ea] rounded-[20px] p-7 md:p-10 max-w-[820px] flex flex-col md:flex-row gap-5 md:items-center">
          <div className="w-11 h-11 rounded-[12px] bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center shrink-0">
            <Mail className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h3 className="text-[18px] md:text-[20px] font-medium text-[#1d1d1f] tracking-[-0.01em] mb-1.5">
              On the list before the report ships.
            </h3>
            <p className="text-[14.5px] text-[#424245] leading-[1.55] mb-4">
              Each report is shared with institutions on the early-access list before public
              release. Talk to us to be added.
            </p>
            <a
              href="mailto:edullentofficial@gmail.com?subject=Research%20early-access%20list"
              className="inline-flex items-center text-[14px] font-medium text-[#0071e3] hover:underline"
            >
              edullentofficial@gmail.com →
            </a>
          </div>
        </div>
      </Section>

      <RelatedLinks links={RELATED} />

      <CtaBand
        title="See what the research is built on."
        description="A 25-minute walkthrough of the platform powering institution-level research."
        primaryCta={{ to: '/contact', label: 'Book a demo' }}
        secondaryCta={{ to: '/research', label: 'Back to research' }}
      />
    </ContentPage>
  </>
);

export default ResearchReportsPage;
