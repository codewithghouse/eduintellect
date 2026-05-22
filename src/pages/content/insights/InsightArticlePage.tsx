import { useParams, Navigate } from 'react-router-dom';
import Seo from '../../../components/seo/Seo';
import ContentPage from '../../../components/content/ContentPage';
import ArticleLayout from '../../../components/content/ArticleLayout';
import {
  ARTICLE_BY_SLUG,
  CATEGORY_BY_SLUG,
  articlesByCategory,
  ARTICLES,
} from '../../../content/insights';
import {
  composeSchemaGraph,
  organizationSchema,
  websiteSchema,
  articleSchema,
  breadcrumbSchema,
} from '../../../components/seo/schemas';

const InsightArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? ARTICLE_BY_SLUG.get(slug) : undefined;

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  const url = `https://edullent.com/insights/${article.slug}`;
  const category = CATEGORY_BY_SLUG.get(article.category);

  // Related: 2 from same category, then fill with most recent others if needed
  const sameCategory = articlesByCategory(article.category).filter((a) => a.slug !== article.slug);
  const otherCategories = ARTICLES.filter(
    (a) => a.category !== article.category && a.slug !== article.slug,
  );
  const related = [...sameCategory, ...otherCategories].slice(0, 4);

  const trail = [
    { name: 'Home', path: '/' },
    { name: 'Insights', path: '/insights' },
    ...(category ? [{ name: category.name, path: `/insights/category/${category.slug}` }] : []),
    { name: article.title, path: `/insights/${article.slug}` },
  ];

  return (
    <>
      <Seo
        title={`${article.title} — Edullent`}
        description={article.description}
        canonical={url}
        ogTitle={article.title}
        ogDescription={article.subtitle}
        ogType="article"
        schema={composeSchemaGraph([
          organizationSchema(),
          websiteSchema(),
          articleSchema({
            url,
            headline: article.title,
            description: article.description,
            datePublished: article.publishedAt,
            dateModified: article.updatedAt,
          }),
          breadcrumbSchema(trail),
        ])}
      />
      <ContentPage breadcrumbs={trail}>
        <ArticleLayout article={article} relatedArticles={related} />
      </ContentPage>
    </>
  );
};

export default InsightArticlePage;
