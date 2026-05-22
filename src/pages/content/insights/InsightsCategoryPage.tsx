import { Link, useParams, Navigate } from 'react-router-dom';
import { Clock } from 'lucide-react';
import Seo from '../../../components/seo/Seo';
import ContentPage from '../../../components/content/ContentPage';
import PageHero from '../../../components/content/PageHero';
import Section from '../../../components/content/Section';
import CtaBand from '../../../components/content/CtaBand';
import {
  CATEGORIES,
  CATEGORY_BY_SLUG,
  articlesByCategory,
  type ArticleCategory,
} from '../../../content/insights';
import {
  composeSchemaGraph,
  organizationSchema,
  collectionPageSchema,
  itemListSchema,
  breadcrumbSchema,
} from '../../../components/seo/schemas';

const VALID_CATEGORIES = new Set<string>(CATEGORIES.map((c) => c.slug));

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

const InsightsCategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug || !VALID_CATEGORIES.has(slug)) {
    return <Navigate to="/insights" replace />;
  }
  const category = CATEGORY_BY_SLUG.get(slug as ArticleCategory)!;
  const articles = articlesByCategory(slug as ArticleCategory).sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  );

  const url = `https://edullent.com/insights/category/${slug}`;

  return (
    <>
      <Seo
        title={`${category.name} — Edullent Insights`}
        description={category.description}
        canonical={url}
        ogTitle={`${category.name} — Edullent Insights`}
        ogDescription={category.description}
        schema={composeSchemaGraph([
          organizationSchema(),
          collectionPageSchema({
            url,
            name: `${category.name} — Edullent Insights`,
            description: category.description,
          }),
          itemListSchema(
            articles.map((a) => ({
              name: a.title,
              url: `https://edullent.com/insights/${a.slug}`,
            })),
          ),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Insights', path: '/insights' },
            { name: category.name, path: `/insights/category/${slug}` },
          ]),
        ])}
      />
      <ContentPage
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Insights', path: '/insights' },
          { name: category.name, path: `/insights/category/${slug}` },
        ]}
      >
        <PageHero eyebrow="Insights" title={category.name} description={category.description} />

        <Section eyebrow="Articles" title="All articles in this category.">
          {articles.length === 0 ? (
            <div className="bg-white border border-[#e5e5ea] rounded-[20px] p-7 md:p-10 max-w-[720px]">
              <p className="text-[16px] md:text-[17px] text-[#424245] leading-[1.6]">
                No articles in this category yet. We are publishing continuously — check back soon,
                or explore other categories below.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {articles.map((a) => (
                <Link
                  key={a.slug}
                  to={`/insights/${a.slug}`}
                  className="group bg-white rounded-[16px] border border-[#e5e5ea] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-10px_rgba(0,0,0,0.08)]"
                >
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
          )}
        </Section>

        <Section eyebrow="Other categories" title="Continue exploring.">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {CATEGORIES.filter((c) => c.slug !== slug).map((c) => (
              <Link
                key={c.slug}
                to={`/insights/category/${c.slug}`}
                className="group bg-white rounded-[16px] border border-[#e5e5ea] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-10px_rgba(0,0,0,0.08)]"
              >
                <div className="text-[15px] font-medium text-[#1d1d1f] mb-1.5 group-hover:text-[#0071e3] transition-colors">
                  {c.name}
                </div>
                <p className="text-[13px] text-[#86868b] leading-[1.5]">{c.description}</p>
              </Link>
            ))}
          </div>
        </Section>

        <CtaBand
          title="Run your school on intelligence."
          description="A 25-minute demo of the platform behind these articles."
          primaryCta={{ to: '/contact', label: 'Book a demo' }}
          secondaryCta={{ to: '/education-intelligence-platform', label: 'Explore the platform' }}
        />
      </ContentPage>
    </>
  );
};

export default InsightsCategoryPage;
