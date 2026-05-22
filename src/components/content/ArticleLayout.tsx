import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import type { Article } from '../../content/insights';
import { CATEGORY_BY_SLUG } from '../../content/insights';

interface ArticleLayoutProps {
  article: Article;
  relatedArticles: Article[];
}

const formatDate = (iso: string): string => {
  const d = new Date(iso);
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
};

const ArticleLayout: React.FC<ArticleLayoutProps> = ({ article, relatedArticles }) => {
  const category = CATEGORY_BY_SLUG.get(article.category);

  return (
    <article>
      {/* Title block */}
      <header className="mb-12 md:mb-16 max-w-[820px]">
        <Link
          to={`/insights/category/${article.category}`}
          className="inline-flex text-[12px] md:text-[13px] font-semibold tracking-[0.14em] uppercase text-[#0071e3] hover:underline mb-5"
        >
          {category?.name ?? 'Insights'}
        </Link>
        <h1 className="text-[36px] md:text-[52px] lg:text-[60px] font-normal text-[#1d1d1f] leading-[1.05] tracking-[-0.035em] mb-5">
          {article.title}
        </h1>
        <p className="text-[19px] md:text-[22px] font-light text-[#424245] leading-[1.4] tracking-[-0.005em] mb-7">
          {article.subtitle}
        </p>
        <div className="flex items-center gap-4 text-[13px] text-[#86868b]">
          <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
          <span className="w-1 h-1 rounded-full bg-[#c7c7cc]" />
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {article.readingMinutes} min read
          </span>
        </div>
      </header>

      {/* Intro */}
      <section className="max-w-[760px] mb-12 md:mb-16 space-y-5">
        {article.intro.map((p, i) => (
          <p key={i} className="text-[18px] md:text-[20px] text-[#1d1d1f] leading-[1.55] tracking-[-0.005em]">
            {p}
          </p>
        ))}
      </section>

      {/* Body sections */}
      <div className="max-w-[760px] space-y-12 md:space-y-16">
        {article.sections.map((section, idx) => (
          <section key={section.heading + idx}>
            <h2 className="text-[24px] md:text-[32px] font-medium text-[#1d1d1f] leading-[1.15] tracking-[-0.02em] mb-5">
              {section.heading}
            </h2>
            <div className="space-y-4">
              {section.paragraphs.map((p, i) => (
                <p key={i} className="text-[16px] md:text-[17px] text-[#424245] leading-[1.65]">
                  {p}
                </p>
              ))}
            </div>
          </section>
        ))}

        {article.callout && (
          <section
            className="rounded-[20px] px-7 md:px-9 py-7 md:py-9"
            style={{ background: 'linear-gradient(135deg, #14224d 0%, #1e3272 60%, #0a1430 100%)' }}
          >
            <h3 className="text-[22px] md:text-[26px] font-medium text-white tracking-[-0.015em] mb-3 leading-[1.25]">
              {article.callout.title}
            </h3>
            <p className="text-[15.5px] md:text-[16px] text-[#b8c5e6] leading-[1.55] mb-5 max-w-[680px]">
              {article.callout.text}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-white text-[14px] font-medium px-5 py-2.5 rounded-full border border-white/30 hover:bg-white/10 transition-all duration-300"
            >
              Book a demo <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </section>
        )}
      </div>

      {/* Related articles */}
      {relatedArticles.length > 0 && (
        <section className="mt-20 md:mt-24 pt-12 border-t border-[#e5e5ea]">
          <h2 className="text-[22px] md:text-[26px] font-medium text-[#1d1d1f] tracking-[-0.015em] mb-7">
            Keep reading
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.slug}
                to={`/insights/${rel.slug}`}
                className="group bg-white rounded-[16px] border border-[#e5e5ea] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-10px_rgba(0,0,0,0.08)]"
              >
                <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#0071e3] mb-2.5">
                  {CATEGORY_BY_SLUG.get(rel.category)?.name ?? 'Insights'}
                </div>
                <h3 className="text-[18px] font-medium text-[#1d1d1f] tracking-[-0.01em] mb-2 leading-[1.3] group-hover:text-[#0071e3] transition-colors">
                  {rel.title}
                </h3>
                <p className="text-[13.5px] text-[#86868b] leading-[1.5]">{rel.subtitle}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
};

export default ArticleLayout;
