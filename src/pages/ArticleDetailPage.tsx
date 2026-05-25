import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  where,
} from 'firebase/firestore';
import { ArrowLeft, FileText } from 'lucide-react';
import { db } from '../lib/firebase';

interface Article {
  id: string;
  title?: string;
  slug?: string;
  excerpt?: string;
  body?: string;
  coverImage?: string;
  images?: string[];
  publishedAt?: { toDate?: () => Date } | null;
  authorName?: string;
  status?: string;
}

function fmtDate(value: Article['publishedAt']): string {
  if (!value) return '';
  try {
    const d = value.toDate ? value.toDate() : null;
    if (!d) return '';
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  } catch {
    return '';
  }
}

export default function ArticleDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!slug) return;
    let cancelled = false;
    setLoading(true);
    setError('');
    (async () => {
      try {
        // Try slug lookup first (the canonical path).
        const q = query(
          collection(db, 'articles'),
          where('slug', '==', slug),
          where('status', '==', 'published'),
          limit(1),
        );
        const snap = await getDocs(q);
        if (cancelled) return;
        if (!snap.empty) {
          const d = snap.docs[0];
          setArticle({ id: d.id, ...(d.data() as object) });
          setLoading(false);
          return;
        }
        // Fall back to doc-id lookup so old/auto-slug links still resolve.
        const byId = await getDoc(doc(db, 'articles', slug));
        if (cancelled) return;
        if (byId.exists()) {
          const data = byId.data() as { status?: string };
          if (data.status === 'published') {
            setArticle({ id: byId.id, ...(byId.data() as object) });
            setLoading(false);
            return;
          }
        }
        setError('Article not found.');
      } catch (err) {
        console.warn('[article-detail] load failed:', err);
        setError('Could not load article.');
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#fbfbfd] flex items-center justify-center">
        <div className="text-[14px] text-[#86868b]">Loading…</div>
      </main>
    );
  }

  if (error || !article) {
    return (
      <main className="min-h-screen bg-[#fbfbfd] flex items-center justify-center px-5 py-20">
        <div className="text-center max-w-[420px]">
          <div className="w-12 h-12 mx-auto rounded-full bg-white border border-[#e5e5ea] flex items-center justify-center text-[#86868b] mb-3">
            <FileText className="w-5 h-5" />
          </div>
          <h1 className="text-[22px] font-normal tracking-[-0.01em]">Article not found</h1>
          <p className="text-[13px] text-[#86868b] mt-1">{error || 'It might have been moved or unpublished.'}</p>
          <Link
            to="/articles"
            className="inline-flex items-center gap-1.5 mt-5 text-[13px] text-[#0071e3] hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to articles
          </Link>
        </div>
      </main>
    );
  }

  const gallery = (article.images ?? []).filter(
    (u) => u && u !== article.coverImage,
  );

  return (
    <main className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f]">
      <article className="max-w-[820px] mx-auto px-5 sm:px-8 pt-12 sm:pt-20 pb-24">
        <Link
          to="/articles"
          className="inline-flex items-center gap-1.5 text-[12.5px] text-[#0071e3] hover:underline mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> All articles
        </Link>

        {article.title && (
          <h1 className="text-[32px] sm:text-[44px] font-normal tracking-[-0.025em] leading-[1.08] mb-4">
            {article.title}
          </h1>
        )}

        <div className="text-[12.5px] text-[#86868b] flex items-center gap-2 mb-7">
          {fmtDate(article.publishedAt) && <span>{fmtDate(article.publishedAt)}</span>}
          {article.authorName && (
            <>
              <span className="w-1 h-1 rounded-full bg-[#c7c7cc]" />
              <span>{article.authorName}</span>
            </>
          )}
        </div>

        {article.coverImage && (
          <div className="rounded-[20px] overflow-hidden border border-[#e5e5ea] bg-[#f5f5f7] mb-8 sm:mb-10">
            <img src={article.coverImage} alt="" className="w-full h-auto" />
          </div>
        )}

        {article.excerpt && (
          <div className="text-[17.5px] sm:text-[19px] text-[#424245] leading-[1.45] tracking-[-0.005em] mb-7 border-l-2 border-[#0071e3]/30 pl-4">
            {article.excerpt}
          </div>
        )}

        {article.body && (
          <div className="text-[16px] sm:text-[17px] text-[#1d1d1f] leading-[1.65] whitespace-pre-wrap">
            {article.body}
          </div>
        )}

        {gallery.length > 0 && (
          <section className="mt-10">
            <div className="text-[11px] uppercase tracking-[0.14em] text-[#86868b] mb-3">Gallery</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {gallery.map((url) => (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-[14px] overflow-hidden border border-[#e5e5ea] bg-[#f5f5f7]"
                >
                  <img src={url} alt="" loading="lazy" className="w-full h-auto" />
                </a>
              ))}
            </div>
          </section>
        )}
      </article>
    </main>
  );
}
