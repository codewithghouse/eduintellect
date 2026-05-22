import { Link } from 'react-router-dom';
import { Clock, ArrowUpRight } from 'lucide-react';
import Seo from '../../../components/seo/Seo';
import ContentPage from '../../../components/content/ContentPage';
import PageHero from '../../../components/content/PageHero';
import Section from '../../../components/content/Section';
import CtaBand from '../../../components/content/CtaBand';
import RelatedLinks from '../../../components/content/RelatedLinks';
import { ARTICLES, CATEGORY_BY_SLUG } from '../../../content/insights';
import {
  composeSchemaGraph,
  organizationSchema,
  collectionPageSchema,
  itemListSchema,
  breadcrumbSchema,
} from '../../../components/seo/schemas';

const URL = 'https://edullent.com/research/trends';

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

const KEY_TRENDS = [
  {
    title: 'From reports to recommendations',
    description:
      'The decision medium is shifting from quarterly reports to live dashboards that recommend next-best-action. Indian institutions are reporting 60-70% reduction in routine meetings.',
  },
  {
    title: 'AI in every teacher workflow',
    description:
      'Exam generation, auto-correction, lesson planning — by 2028, these become embedded in the teacher\'s daily tools, not separate AI panels.',
  },
  {
    title: 'Parent transparency by design',
    description:
      'WhatsApp groups are being quietly replaced by Weekly AI Summaries as the primary parent communication surface. Retention rises with structured weekly clarity.',
  },
  {
    title: 'Multi-branch standardisation through intelligence',
    description:
      '5-branch groups in 2024 are 12-branch groups in 2026. Excel and quarterly meetings cannot operate at that scale — cross-branch intelligence layers are taking over.',
  },
  {
    title: 'Intelligence as default, not premium',
    description:
      'AI risk prediction, weekly summaries, composite teacher scoring — features that look premium in 2026 become table-stakes by 2028. Institutions are planning platform decisions against the 2028 floor.',
  },
];

const TREND_ARTICLES = ARTICLES.filter(
  (a) => a.category === 'future-of-education' || a.slug === 'future-of-school-operations',
);

const RELATED = [
  { to: '/research/articles', title: 'Research Articles', description: 'Long-form analysis on institution intelligence.' },
  { to: '/research/reports', title: 'Reports', description: 'Periodic reports shipping in 2026-2027.' },
  { to: '/future-of-school-management', title: 'The Future of School Management', description: 'Search-landing version of the trend analysis.' },
  { to: '/education-intelligence-platform', title: 'Education Intelligence Platform', description: 'The category the trends point to.' },
];

const ResearchTrendsPage = () => (
  <>
    <Seo
      title="Education Trends — Edullent Research"
      description="Five structural trends reshaping Indian school operations: from reports to recommendations, AI in every workflow, parent transparency, multi-branch standardisation, intelligence by default."
      canonical={URL}
      ogTitle="Edullent Research — Trends"
      ogDescription="Five structural trends reshaping Indian school operations."
      schema={composeSchemaGraph([
        organizationSchema(),
        collectionPageSchema({
          url: URL,
          name: 'Edullent Research — Trends',
          description: 'Trends shaping the future of Indian school operations.',
        }),
        itemListSchema(
          TREND_ARTICLES.map((a) => ({
            name: a.title,
            url: `https://edullent.com/insights/${a.slug}`,
          })),
        ),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Research', path: '/research' },
          { name: 'Trends', path: '/research/trends' },
        ]),
      ])}
    />
    <ContentPage
      breadcrumbs={[
        { name: 'Home', path: '/' },
        { name: 'Research', path: '/research' },
        { name: 'Trends', path: '/research/trends' },
      ]}
    >
      <PageHero
        eyebrow="Research / Trends"
        title="Trends."
        description="Edullent tracks structural trends reshaping Indian school operations. The five movements below are the ones reshaping how institutions will run by 2028 — the lens behind every product and content decision we make."
      />

      <Section eyebrow="The five trends" title="What is moving — and how fast.">
        <div className="space-y-3 md:space-y-4">
          {KEY_TRENDS.map((t, idx) => (
            <div
              key={t.title}
              className="bg-white border border-[#e5e5ea] rounded-[16px] p-6 md:p-7 flex gap-5 md:items-start"
            >
              <div className="text-[28px] md:text-[36px] font-light text-[#0071e3] tracking-[-0.03em] leading-none shrink-0 w-8 md:w-10 text-right">
                {String(idx + 1).padStart(2, '0')}
              </div>
              <div>
                <h3 className="text-[18px] md:text-[20px] font-medium text-[#1d1d1f] tracking-[-0.01em] mb-2">
                  {t.title}
                </h3>
                <p className="text-[14.5px] md:text-[15px] text-[#424245] leading-[1.6] max-w-[760px]">
                  {t.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {TREND_ARTICLES.length > 0 && (
        <Section eyebrow="Read deeper" title="Trend analysis articles.">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {TREND_ARTICLES.map((a) => (
              <Link
                key={a.slug}
                to={`/insights/${a.slug}`}
                className="group bg-white rounded-[16px] border border-[#e5e5ea] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-10px_rgba(0,0,0,0.08)] flex items-start justify-between gap-3"
              >
                <div className="flex-1">
                  <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#0071e3] mb-2.5">
                    {CATEGORY_BY_SLUG.get(a.category)?.name ?? 'Insights'}
                  </div>
                  <h3 className="text-[18px] md:text-[19px] font-medium text-[#1d1d1f] tracking-[-0.01em] mb-2 leading-[1.3] group-hover:text-[#0071e3] transition-colors">
                    {a.title}
                  </h3>
                  <p className="text-[13.5px] text-[#86868b] leading-[1.5] mb-4">{a.subtitle}</p>
                  <div className="flex items-center gap-3 text-[12px] text-[#86868b]">
                    <span>{formatDate(a.publishedAt)}</span>
                    <span>·</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {a.readingMinutes} min
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 shrink-0 text-[#c7c7cc] group-hover:text-[#1d1d1f] transition-colors mt-1" />
              </Link>
            ))}
          </div>
        </Section>
      )}

      <RelatedLinks links={RELATED} />

      <CtaBand
        title="Build for where Indian schools are going."
        description="A 25-minute walkthrough of the platform built for the 2028 floor."
        primaryCta={{ to: '/contact', label: 'Book a demo' }}
        secondaryCta={{ to: '/research', label: 'Back to research' }}
      />
    </ContentPage>
  </>
);

export default ResearchTrendsPage;
