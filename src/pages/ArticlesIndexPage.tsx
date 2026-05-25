import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { FileText } from 'lucide-react';
import { db } from '../lib/firebase';

interface PublishedArticle {
  id: string;
  title?: string;
  slug?: string;
  excerpt?: string;
  coverImage?: string;
  images?: string[];
  publishedAt?: { toDate?: () => Date } | null;
  authorName?: string;
}

function fmtDate(value: PublishedArticle['publishedAt']): string {
  if (!value) return '';
  try {
    const d = value.toDate ? value.toDate() : null;
    if (!d) return '';
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  } catch {
    return '';
  }
}

export default function ArticlesIndexPage() {
  const [articles, setArticles] = useState<PublishedArticle[] | null>(null);

  useEffect(() => {
    const q = query(
      collection(db, 'articles'),
      where('status', '==', 'published'),
      orderBy('publishedAt', 'desc'),
    );
    const unsub = onSnapshot(
      q,
      (snap) => setArticles(snap.docs.map((d) => ({ id: d.id, ...(d.data() as object) }))),
      (err) => {
        console.warn('[articles-public] subscribe failed:', err);
        setArticles([]);
      },
    );
    return unsub;
  }, []);

  const loading = articles === null;

  return (
    <main className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f]">
      <section className="max-w-[1100px] mx-auto px-5 sm:px-8 pt-16 sm:pt-24 pb-10">
        <div className="text-[12px] uppercase tracking-[0.14em] text-[#86868b] mb-3">
          <span className="font-mokoto">Edullent</span> · Articles
        </div>
        <h1 className="text-[40px] sm:text-[52px] font-normal tracking-[-0.025em] leading-[1.05]">
          Articles &amp; updates from the team.
        </h1>
        <p className="text-[15px] sm:text-[17px] text-[#86868b] mt-4 max-w-[640px]">
          Notes, announcements and field reports from inside the Edullent platform.
        </p>
      </section>

      <section className="max-w-[1100px] mx-auto px-5 sm:px-8 pb-24">
        {loading ? (
          <div className="py-16 text-center text-[14px] text-[#86868b]">Loading…</div>
        ) : articles!.length === 0 ? (
          <div className="py-16 text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-white border border-[#e5e5ea] flex items-center justify-center text-[#86868b] mb-3">
              <FileText className="w-5 h-5" />
            </div>
            <div className="text-[15px] text-[#1d1d1f] font-medium">Nothing published yet</div>
            <div className="text-[13px] text-[#86868b] mt-1">Check back soon.</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {articles!.map((a) => {
              const slug = a.slug || a.id;
              const cover = a.coverImage || (a.images && a.images[0]) || null;
              return (
                <Link
                  key={a.id}
                  to={`/articles/${slug}`}
                  className="group bg-white rounded-[18px] border border-[#e5e5ea] overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-14px_rgba(0,0,0,0.08)] flex flex-col"
                >
                  <div className="aspect-[16/9] bg-[#f5f5f7] overflow-hidden">
                    {cover ? (
                      <img
                        src={cover}
                        alt=""
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[#c7c7cc]">
                        <FileText className="w-6 h-6" />
                      </div>
                    )}
                  </div>
                  <div className="p-5 flex flex-col gap-2 flex-1">
                    <div className="text-[16.5px] font-medium tracking-[-0.005em] text-[#1d1d1f] line-clamp-2 group-hover:text-[#0071e3] transition-colors">
                      {a.title || 'Untitled'}
                    </div>
                    {a.excerpt && (
                      <div className="text-[13.5px] text-[#86868b] leading-[1.5] line-clamp-3">
                        {a.excerpt}
                      </div>
                    )}
                    <div className="mt-auto pt-2 text-[11.5px] text-[#86868b] flex items-center gap-2">
                      {fmtDate(a.publishedAt) && <span>{fmtDate(a.publishedAt)}</span>}
                      {a.authorName && (
                        <>
                          <span className="w-1 h-1 rounded-full bg-[#c7c7cc]" />
                          <span>{a.authorName}</span>
                        </>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
