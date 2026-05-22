import { Link } from 'react-router-dom';
import { FileText, BarChart3, TrendingUp, ArrowUpRight } from 'lucide-react';
import Seo from '../../../components/seo/Seo';
import ContentPage from '../../../components/content/ContentPage';
import PageHero from '../../../components/content/PageHero';
import Section from '../../../components/content/Section';
import CtaBand from '../../../components/content/CtaBand';
import {
  composeSchemaGraph,
  organizationSchema,
  websiteSchema,
  collectionPageSchema,
  breadcrumbSchema,
} from '../../../components/seo/schemas';

const URL = 'https://edullent.com/research';

const PILLARS = [
  {
    to: '/research/articles',
    title: 'Research Articles',
    description: 'Long-form analysis on institution intelligence, AI in education, modern school operations.',
    icon: FileText,
  },
  {
    to: '/research/reports',
    title: 'Reports',
    description: 'Periodic reports on the state of Indian school operations, education technology adoption and category benchmarks.',
    icon: BarChart3,
  },
  {
    to: '/research/trends',
    title: 'Trends',
    description: 'Trend analysis on where school operations are heading — AI, parent engagement, multi-branch scaling.',
    icon: TrendingUp,
  },
];

const ResearchIndexPage = () => (
  <>
    <Seo
      title="Research — Edullent"
      description="Edullent Research publishes long-form analysis, reports and trend pieces on institution intelligence, AI in education, and the future of Indian school operations."
      canonical={URL}
      ogTitle="Edullent Research"
      ogDescription="Long-form analysis on institution intelligence and the future of Indian schools."
      schema={composeSchemaGraph([
        organizationSchema(),
        websiteSchema(),
        collectionPageSchema({
          url: URL,
          name: 'Edullent Research',
          description: 'Long-form analysis, reports and trend pieces from Edullent.',
        }),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Research', path: '/research' },
        ]),
      ])}
    />
    <ContentPage
      breadcrumbs={[
        { name: 'Home', path: '/' },
        { name: 'Research', path: '/research' },
      ]}
    >
      <PageHero
        eyebrow="Research"
        title="Edullent Research."
        subtitle="Long-form analysis on institution intelligence, AI in education, and the future of Indian school operations."
        description="Three streams: research articles, periodic reports, and trend analysis. Written by the Edullent team for school owners, principals, policymakers and researchers."
      />

      <Section eyebrow="The streams" title="Three publishing tracks.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {PILLARS.map(({ to, title, description, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              className="group bg-white rounded-[16px] border border-[#e5e5ea] p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_-14px_rgba(0,0,0,0.10)] flex flex-col"
            >
              <div className="w-11 h-11 rounded-[12px] flex items-center justify-center mb-5 bg-[#0071e3]/10 text-[#0071e3]">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-[18px] md:text-[20px] font-medium text-[#1d1d1f] tracking-[-0.01em] mb-2 group-hover:text-[#0071e3] transition-colors">
                {title}
              </h3>
              <p className="text-[13.5px] text-[#86868b] leading-[1.55] mb-5 flex-1">{description}</p>
              <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#0071e3]">
                Explore <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="The thesis" title="Why Edullent invests in research.">
        <div className="bg-white border border-[#e5e5ea] rounded-[20px] p-7 md:p-10 max-w-[920px] space-y-4 text-[16px] md:text-[17px] text-[#424245] leading-[1.65]">
          <p>
            Indian school operations is one of the largest, least-instrumented systems in the
            country. Every signal that matters — attendance, performance, engagement, financial
            health — exists, but is rarely turned into category-level understanding.
          </p>
          <p>
            Edullent Research exists to close that gap. We publish analysis grounded in operating
            reality, not vendor narrative. Articles, reports and trend pieces aimed at people
            actually running institutions, not the keynote stage.
          </p>
          <p>
            Where the platform is the operating layer, the research is the meaning-making layer.
            Both are part of how we build the intelligence layer Indian schools deserve.
          </p>
        </div>
      </Section>

      <CtaBand
        title="Get the next report when it ships."
        description="Talk to our team about institution-level research, partnerships or co-publication. A 25-minute conversation gets you on the list."
        primaryCta={{ to: '/contact', label: 'Talk to us' }}
        secondaryCta={{ to: '/insights', label: 'Read the latest insights' }}
      />
    </ContentPage>
  </>
);

export default ResearchIndexPage;
