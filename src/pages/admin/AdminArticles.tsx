import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Loader2,
  FileText,
  Plus,
  Trash2,
  ExternalLink,
  Pencil,
  Eye,
  EyeOff,
} from 'lucide-react';
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { useAuth } from '../../lib/auth';
import {
  Badge,
  Card,
  EmptyState,
  PageHeader,
  formatDate,
} from '../../components/admin/ui';

interface ArticleDoc {
  id: string;
  title?: string;
  slug?: string;
  excerpt?: string;
  coverImage?: string;
  images?: string[];
  status?: 'draft' | 'published';
  createdAt?: unknown;
  updatedAt?: unknown;
  publishedAt?: unknown;
  authorEmail?: string;
  authorName?: string;
}

export default function AdminArticles() {
  const { user, role } = useAuth();
  const isSuper = role === 'superadmin';
  const [articles, setArticles] = useState<ArticleDoc[] | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const q = query(collection(db, 'articles'), orderBy('updatedAt', 'desc'));
    const unsub = onSnapshot(
      q,
      (snap) => setArticles(snap.docs.map((d) => ({ id: d.id, ...(d.data() as object) }))),
      (err) => {
        console.warn('[articles] subscribe failed:', err);
        setArticles([]);
      },
    );
    return unsub;
  }, []);

  const togglePublish = async (a: ArticleDoc) => {
    setBusyId(a.id);
    setError('');
    try {
      const next = a.status === 'published' ? 'draft' : 'published';
      await updateDoc(doc(db, 'articles', a.id), {
        status: next,
        publishedAt: next === 'published' ? serverTimestamp() : null,
        updatedAt: serverTimestamp(),
      });
    } catch (err) {
      console.error('[articles] toggle publish failed:', err);
      setError('Could not change publish state.');
    } finally {
      setBusyId(null);
    }
  };

  const remove = async (a: ArticleDoc) => {
    const ok = window.confirm(`Delete article "${a.title || 'Untitled'}"? This cannot be undone.`);
    if (!ok) return;
    setBusyId(a.id);
    setError('');
    try {
      await deleteDoc(doc(db, 'articles', a.id));
    } catch (err) {
      console.error('[articles] delete failed:', err);
      setError('Delete failed.');
    } finally {
      setBusyId(null);
    }
  };

  const canDelete = (a: ArticleDoc) =>
    isSuper || (user && a.authorEmail && user.email?.toLowerCase() === a.authorEmail.toLowerCase());

  const loading = articles === null;

  return (
    <>
      <PageHeader
        title="Articles"
        subtitle="Posts that show up on /articles on the public site."
        actions={
          <Link
            to="/admin/articles/new"
            className="bg-[#0071e3] hover:bg-[#0077ed] text-white py-2.5 px-4 rounded-[10px] text-[13.5px] font-medium flex items-center justify-center gap-2 transition"
          >
            <Plus className="w-4 h-4" /> New article
          </Link>
        }
      />

      {error && (
        <div className="mb-5 p-3.5 rounded-[12px] bg-[#ff3b30]/5 border border-[#ff3b30]/20 text-[#ff3b30] text-[13px]">
          {error}
        </div>
      )}

      <Card className="overflow-hidden">
        {loading ? (
          <div className="py-16 flex items-center justify-center">
            <Loader2 className="w-5 h-5 text-[#0071e3] animate-spin" />
          </div>
        ) : (articles ?? []).length === 0 ? (
          <EmptyState
            icon={<FileText className="w-5 h-5" />}
            title="No articles yet"
            description="Tap “New article” to write your first post. All fields are optional — even a single image is enough."
          />
        ) : (
          <div className="divide-y divide-[#d2d2d7]/40">
            {(articles ?? []).map((a) => {
              const isPublished = a.status === 'published';
              const busy = busyId === a.id;
              const cover = a.coverImage || (a.images && a.images[0]) || null;
              return (
                <div
                  key={a.id}
                  className="p-4 sm:p-5 flex flex-col sm:flex-row gap-4 sm:items-start"
                >
                  <div className="w-full sm:w-28 h-28 sm:h-20 rounded-[12px] overflow-hidden bg-[#f5f5f7] shrink-0 flex items-center justify-center">
                    {cover ? (
                      <img
                        src={cover}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <FileText className="w-5 h-5 text-[#c7c7cc]" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <div className="text-[14.5px] font-medium text-[#1d1d1f] truncate">
                        {a.title || 'Untitled'}
                      </div>
                      <Badge tone={isPublished ? 'success' : 'default'}>
                        {isPublished ? 'published' : 'draft'}
                      </Badge>
                      {a.images && a.images.length > 1 && (
                        <Badge tone="info">{a.images.length} images</Badge>
                      )}
                    </div>
                    {a.excerpt && (
                      <div className="text-[13px] text-[#86868b] mt-1 line-clamp-2 leading-snug">
                        {a.excerpt}
                      </div>
                    )}
                    <div className="text-[11.5px] text-[#86868b] mt-2 flex flex-wrap gap-x-3 gap-y-1">
                      <span>Updated {formatDate(a.updatedAt)}</span>
                      {a.authorName || a.authorEmail ? (
                        <span>By {a.authorName || a.authorEmail}</span>
                      ) : null}
                      {a.slug && <span>/articles/{a.slug}</span>}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    {isPublished && a.slug && (
                      <a
                        href={`/articles/${a.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-[8px] text-[#86868b] hover:text-[#0071e3] hover:bg-[#0071e3]/5 transition"
                        aria-label="View public"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    <button
                      onClick={() => togglePublish(a)}
                      disabled={busy}
                      className="p-2 rounded-[8px] text-[#86868b] hover:text-[#34c759] hover:bg-[#34c759]/10 transition disabled:opacity-50"
                      aria-label={isPublished ? 'Unpublish' : 'Publish'}
                    >
                      {busy ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : isPublished ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                    <Link
                      to={`/admin/articles/${a.id}`}
                      className="p-2 rounded-[8px] text-[#86868b] hover:text-[#0071e3] hover:bg-[#0071e3]/5 transition"
                      aria-label="Edit"
                    >
                      <Pencil className="w-4 h-4" />
                    </Link>
                    {canDelete(a) && (
                      <button
                        onClick={() => remove(a)}
                        disabled={busy}
                        className="p-2 rounded-[8px] text-[#86868b] hover:text-[#ff3b30] hover:bg-[#ff3b30]/5 transition disabled:opacity-50"
                        aria-label="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </Card>
    </>
  );
}
