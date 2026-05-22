import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import Seo from '../../../components/seo/Seo';
import ContentPage from '../../../components/content/ContentPage';
import PageHero from '../../../components/content/PageHero';
import Section from '../../../components/content/Section';
import CtaBand from '../../../components/content/CtaBand';
import { ARTICLES, CATEGORY_BY_SLUG } from '../../../content/insights';
import {
  composeSchemaGraph,
  organizationSchema,
  collectionPageSchema,
  itemListSchema,
  breadcrumbSchema,
} from '../../../components/seo/schemas';

const URL = 'https://edullent.com/research/articles';

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

// Cross-list insight articles as research articles — they are written to
// the same standard and serve both audiences. As deeper, dedicated research
// pieces are written, they will be appended here separately.
const ResearchArticlesPage = () => {
  const sorted = [...ARTICLES].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  return (
    <>
      <Seo
        title="Research Articles — Edullent"
        description="Long-form research articles from Edullent on institution intelligence, AI in education, modern school operations and the future of Indian institutions."
        canonical={URL}
        ogTitle="Edullent Research Articles"
        ogDescription="Long-form analysis on institution intelligence and modern Indian schools."
        schema={composeSchemaGraph([
          organizationSchema(),
          collectionPageSchema({
            url: URL,
            name: 'Edullent Research Articles',
            description: 'Long-form research from Edullent on modern school operations.',
          }),
          itemListSchema(
            sorted.map((a) => ({
              name: a.title,
              url: `https://edullent.com/insights/${a.slug}`,
            })),
          ),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Research', path: '/research' },
            { name: 'Articles', path: '/research/articles' },
          ]),
        ])}
      />
      <ContentPage
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Research', path: '/research' },
          { name: 'Articles', path: '/research/articles' },
        ]}
      >
        <PageHero
          eyebrow="Research / Articles"
          title="Research articles."
          description="Long-form analysis from the Edullent team. Articles grounded in operating reality, written for people running institutions."
        />

        <Section eyebrow="All articles" title="Read by date.">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {sorted.map((a) => (
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

        <CtaBand
          title="Stay close to the research."
          description="Talk to us about the next piece, co-publication, or institution-level studies."
          primaryCta={{ to: '/contact', label: 'Talk to us' }}
          secondaryCta={{ to: '/research', label: 'Back to research' }}
        />
      </ContentPage>
    </>
  );
};

export default ResearchArticlesPage;
