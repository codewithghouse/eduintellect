import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock } from 'lucide-react';
import Seo from '../../../components/seo/Seo';
import ContentPage from '../../../components/content/ContentPage';
import PageHero from '../../../components/content/PageHero';
import Section from '../../../components/content/Section';
import CtaBand from '../../../components/content/CtaBand';
import { ARTICLES, CATEGORIES, CATEGORY_BY_SLUG } from '../../../content/insights';
import {
  composeSchemaGraph,
  organizationSchema,
  websiteSchema,
  collectionPageSchema,
  itemListSchema,
  breadcrumbSchema,
} from '../../../components/seo/schemas';

const URL = 'https://edullent.com/insights';

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

const InsightsIndexPage = () => {
  const sorted = [...ARTICLES].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  const featured = sorted[0];
  const rest = sorted.slice(1);

  return (
    <>
      <Seo
        title="Insights — Edullent"
        description="Insights from Edullent on running modern schools — operations, AI, teacher workflows, parent engagement, and the future of Indian education."
        canonical={URL}
        ogTitle="Edullent Insights"
        ogDescription="Articles on running modern schools — operations, AI, the future of Indian education."
        schema={composeSchemaGraph([
          organizationSchema(),
          websiteSchema(),
          collectionPageSchema({
            url: URL,
            name: 'Edullent Insights',
            description: 'Articles on running modern schools.',
          }),
          itemListSchema(
            sorted.map((a) => ({
              name: a.title,
              url: `https://edullent.com/insights/${a.slug}`,
            })),
          ),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Insights', path: '/insights' },
          ]),
        ])}
      />
      <ContentPage
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Insights', path: '/insights' },
        ]}
      >
        <PageHero
          eyebrow="Insights"
          title="On running modern schools."
          subtitle="Articles, frameworks and analysis from Edullent — for the people running Indian institutions today."
        />

        <Section eyebrow="Categories" title="Read by what matters to you.">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                to={`/insights/category/${cat.slug}`}
                className="group bg-white rounded-[16px] border border-[#e5e5ea] p-5 md:p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-10px_rgba(0,0,0,0.08)] flex items-start justify-between gap-3"
              >
                <div>
                  <div className="text-[16px] font-medium text-[#1d1d1f] tracking-[-0.005em] mb-1.5 group-hover:text-[#0071e3] transition-colors">
                    {cat.name}
                  </div>
                  <p className="text-[13px] text-[#86868b] leading-[1.5]">{cat.description}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 shrink-0 text-[#c7c7cc] group-hover:text-[#1d1d1f] transition-colors mt-1" />
              </Link>
            ))}
          </div>
        </Section>

        {featured && (
          <Section eyebrow="Featured" title="Latest from Edullent.">
            <Link
              to={`/insights/${featured.slug}`}
              className="group block bg-white rounded-[20px] border border-[#e5e5ea] p-7 md:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_56px_-20px_rgba(0,0,0,0.10)]"
            >
              <div className="text-[12px] font-semibold tracking-[0.14em] uppercase text-[#0071e3] mb-4">
                {CATEGORY_BY_SLUG.get(featured.category)?.name ?? 'Insights'}
              </div>
              <h3 className="text-[26px] md:text-[36px] font-normal text-[#1d1d1f] tracking-[-0.02em] leading-[1.15] mb-3 group-hover:text-[#0071e3] transition-colors">
                {featured.title}
              </h3>
              <p className="text-[16px] md:text-[18px] text-[#424245] leading-[1.5] max-w-[760px] mb-5">
                {featured.subtitle}
              </p>
              <div className="flex items-center gap-4 text-[13px] text-[#86868b]">
                <span>{formatDate(featured.publishedAt)}</span>
                <span className="w-1 h-1 rounded-full bg-[#c7c7cc]" />
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {featured.readingMinutes} min read
                </span>
              </div>
            </Link>
          </Section>
        )}

        {rest.length > 0 && (
          <Section eyebrow="More articles" title="All insights.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {rest.map((a) => (
                <Link
                  key={a.slug}
                  to={`/insights/${a.slug}`}
                  className="group bg-white rounded-[16px] border border-[#e5e5ea] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-10px_rgba(0,0,0,0.08)]"
                >
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
                </Link>
              ))}
            </div>
          </Section>
        )}

        <CtaBand
          title="See Edullent in action."
          description="Twenty-five minutes. Four dashboards. The intelligence layer behind every article on this page."
          primaryCta={{ to: '/contact', label: 'Book a demo' }}
          secondaryCta={{ to: '/education-intelligence-platform', label: 'Explore the platform' }}
        />
      </ContentPage>
    </>
  );
};

export default InsightsIndexPage;
