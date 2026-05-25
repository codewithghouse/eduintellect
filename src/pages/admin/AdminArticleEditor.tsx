import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  Loader2,
  ArrowLeft,
  Save,
  Upload,
  Trash2,
  Eye,
  Star,
  Image as ImageIcon,
} from 'lucide-react';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';
import { db, storage } from '../../lib/firebase';
import { useAuth } from '../../lib/auth';
import { Card, PageHeader } from '../../components/admin/ui';

interface ArticleDraft {
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  coverImage: string;
  images: string[];
  status: 'draft' | 'published';
}

const EMPTY: ArticleDraft = {
  title: '',
  slug: '',
  excerpt: '',
  body: '',
  coverImage: '',
  images: [],
  status: 'draft',
};

function slugify(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 80);
}

function randomId(): string {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}

export default function AdminArticleEditor() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const isNew = !id || id === 'new';
  const [docId, setDocId] = useState<string | null>(isNew ? null : id ?? null);
  const [draft, setDraft] = useState<ArticleDraft>(EMPTY);
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [info, setInfo] = useState('');
  const [slugTouched, setSlugTouched] = useState(false);

  useEffect(() => {
    if (isNew) return;
    let cancelled = false;
    (async () => {
      try {
        const snap = await getDoc(doc(db, 'articles', id!));
        if (cancelled) return;
        if (!snap.exists()) {
          setError('Article not found.');
          setLoading(false);
          return;
        }
        const data = snap.data() as Partial<ArticleDraft> & { images?: string[] };
        setDraft({
          title: data.title ?? '',
          slug: data.slug ?? '',
          excerpt: data.excerpt ?? '',
          body: data.body ?? '',
          coverImage: data.coverImage ?? '',
          images: Array.isArray(data.images) ? data.images : [],
          status: data.status === 'published' ? 'published' : 'draft',
        });
        setSlugTouched(true);
      } catch (err) {
        console.error('[editor] load failed:', err);
        setError('Could not load article.');
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [id, isNew]);

  // Auto-slug from title until user edits slug manually.
  useEffect(() => {
    if (slugTouched) return;
    setDraft((prev) => ({ ...prev, slug: prev.title ? slugify(prev.title) : '' }));
  }, [draft.title, slugTouched]);

  const ensureDocId = async (): Promise<string> => {
    if (docId) return docId;
    const created = await addDoc(collection(db, 'articles'), {
      title: '',
      status: 'draft',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      authorEmail: user?.email ?? null,
      authorName: user?.displayName ?? null,
      authorUid: user?.uid ?? null,
    });
    setDocId(created.id);
    return created.id;
  };

  const handleFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setUploading(true);
    setError('');
    try {
      const ownerId = await ensureDocId();
      const uploaded: string[] = [];
      for (const file of Array.from(files)) {
        if (!file.type.startsWith('image/')) continue;
        // Hard cap — refuse anything over 10 MB to keep budgets sane.
        if (file.size > 10 * 1024 * 1024) {
          setError(`${file.name} is over 10 MB — skipped.`);
          continue;
        }
        const ext = (file.name.split('.').pop() || 'jpg').toLowerCase().replace(/[^a-z0-9]/g, '') || 'jpg';
        const path = `articles/${ownerId}/${randomId()}.${ext}`;
        const ref = storageRef(storage, path);
        await uploadBytes(ref, file, {
          contentType: file.type || 'image/jpeg',
          cacheControl: 'public, max-age=31536000, immutable',
        });
        const url = await getDownloadURL(ref);
        uploaded.push(url);
      }
      if (uploaded.length > 0) {
        setDraft((prev) => ({
          ...prev,
          images: [...prev.images, ...uploaded],
          coverImage: prev.coverImage || uploaded[0],
        }));
      }
    } catch (err) {
      console.error('[editor] upload failed:', err);
      setError('Image upload failed. Check Storage rules.');
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const removeImage = async (url: string) => {
    setDraft((prev) => {
      const nextImages = prev.images.filter((u) => u !== url);
      return {
        ...prev,
        images: nextImages,
        coverImage: prev.coverImage === url ? (nextImages[0] ?? '') : prev.coverImage,
      };
    });
    // Best-effort cleanup from Storage. Ignore errors — the doc reference is gone.
    try {
      const u = new URL(url);
      // Firebase download URL path looks like /o/<encoded-path>
      const m = u.pathname.match(/\/o\/(.+)$/);
      if (m) {
        const path = decodeURIComponent(m[1]);
        await deleteObject(storageRef(storage, path));
      }
    } catch (err) {
      console.warn('[editor] storage cleanup failed (non-fatal):', err);
    }
  };

  const makeCover = (url: string) => {
    setDraft((prev) => ({ ...prev, coverImage: url }));
  };

  const save = async (publish?: boolean) => {
    setSaving(true);
    setError('');
    setInfo('');
    try {
      const ownerId = await ensureDocId();
      const status: 'draft' | 'published' = publish === undefined ? draft.status : publish ? 'published' : 'draft';
      const finalSlug = draft.slug?.trim() ? slugify(draft.slug.trim()) : ownerId;
      const body = {
        title: draft.title.trim(),
        slug: finalSlug,
        excerpt: draft.excerpt.trim(),
        body: draft.body,
        coverImage: draft.coverImage || (draft.images[0] ?? ''),
        images: draft.images,
        status,
        updatedAt: serverTimestamp(),
        authorEmail: user?.email ?? null,
        authorName: user?.displayName ?? null,
        authorUid: user?.uid ?? null,
        ...(status === 'published' ? { publishedAt: serverTimestamp() } : {}),
      };
      await setDoc(doc(db, 'articles', ownerId), body, { merge: true });
      setDraft((prev) => ({ ...prev, status, slug: finalSlug }));
      setInfo(status === 'published' ? 'Published — visible on the public site.' : 'Saved as draft.');
    } catch (err) {
      console.error('[editor] save failed:', err);
      setError('Could not save article.');
    } finally {
      setSaving(false);
    }
  };

  const publicHref = useMemo(() => {
    if (draft.status !== 'published' || !draft.slug) return null;
    return `/articles/${draft.slug}`;
  }, [draft.status, draft.slug]);

  return (
    <>
      <div className="mb-4">
        <Link
          to="/admin/articles"
          className="inline-flex items-center gap-1.5 text-[13px] text-[#0071e3] hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to articles
        </Link>
      </div>
      <PageHeader
        title={isNew ? 'New article' : 'Edit article'}
        subtitle="Every field is optional. Add a title or just upload images — whatever you need."
        actions={
          <>
            <button
              onClick={() => save(false)}
              disabled={saving}
              className="border border-[#d2d2d7] text-[#1d1d1f] py-2.5 px-4 rounded-[10px] text-[13.5px] font-medium flex items-center gap-2 hover:bg-[#f5f5f7] transition disabled:opacity-50"
            >
              {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
              Save draft
            </button>
            <button
              onClick={() => save(true)}
              disabled={saving}
              className="bg-[#34c759] hover:bg-[#2eb050] text-white py-2.5 px-4 rounded-[10px] text-[13.5px] font-medium flex items-center gap-2 transition disabled:opacity-50"
            >
              <Eye className="w-4 h-4" /> Publish
            </button>
          </>
        }
      />

      {loading ? (
        <div className="py-16 flex items-center justify-center">
          <Loader2 className="w-5 h-5 text-[#0071e3] animate-spin" />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-5">
          <div className="space-y-5">
            <Card className="p-5 space-y-4">
              <Field
                label="Title"
                hint="Optional — shown at the top of the article card."
              >
                <input
                  type="text"
                  value={draft.title}
                  onChange={(e) => setDraft({ ...draft, title: e.target.value })}
                  placeholder="Untitled"
                  className="w-full bg-[#f5f5f7] border border-[#d2d2d7]/40 rounded-[10px] py-2.5 px-3 text-[15px] outline-none focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3]/20 transition"
                />
              </Field>
              <Field
                label="URL slug"
                hint={
                  draft.slug
                    ? `Public path: /articles/${draft.slug}`
                    : 'Auto-generated from the title when left blank.'
                }
              >
                <input
                  type="text"
                  value={draft.slug}
                  onChange={(e) => {
                    setSlugTouched(true);
                    setDraft({ ...draft, slug: slugify(e.target.value) });
                  }}
                  placeholder="example-article"
                  className="w-full bg-[#f5f5f7] border border-[#d2d2d7]/40 rounded-[10px] py-2.5 px-3 text-[14px] font-mono outline-none focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3]/20 transition"
                />
              </Field>
              <Field
                label="Excerpt"
                hint="Optional — a 1–2 line summary used on the listing page."
              >
                <textarea
                  value={draft.excerpt}
                  onChange={(e) => setDraft({ ...draft, excerpt: e.target.value })}
                  rows={2}
                  maxLength={400}
                  placeholder="Short summary…"
                  className="w-full bg-[#f5f5f7] border border-[#d2d2d7]/40 rounded-[10px] py-2.5 px-3 text-[14px] outline-none focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3]/20 transition resize-none"
                />
              </Field>
              <Field
                label="Body"
                hint="Optional. Plain text or Markdown — supports paragraphs and line breaks."
              >
                <textarea
                  value={draft.body}
                  onChange={(e) => setDraft({ ...draft, body: e.target.value })}
                  rows={14}
                  placeholder="Write the article…"
                  className="w-full bg-[#f5f5f7] border border-[#d2d2d7]/40 rounded-[10px] py-3 px-3 text-[14px] leading-relaxed outline-none focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3]/20 transition resize-y"
                />
              </Field>
            </Card>
          </div>

          <div className="space-y-5">
            <Card className="p-5">
              <div className="flex items-center justify-between mb-2.5">
                <div className="text-[13.5px] font-medium text-[#1d1d1f]">Images</div>
                <span className="text-[11.5px] text-[#86868b]">{draft.images.length} uploaded</span>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => handleFiles(e.target.files)}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading}
                className="w-full border-2 border-dashed border-[#d2d2d7] rounded-[12px] py-6 px-4 flex flex-col items-center gap-2 text-[#86868b] hover:text-[#0071e3] hover:border-[#0071e3]/40 hover:bg-[#0071e3]/[0.025] transition disabled:opacity-50"
              >
                {uploading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span className="text-[12.5px]">Uploading…</span>
                  </>
                ) : (
                  <>
                    <Upload className="w-5 h-5" />
                    <span className="text-[12.5px]">Click to upload — multiple OK</span>
                    <span className="text-[11px] text-[#a0a0a8]">PNG / JPG / WebP · up to 10 MB each</span>
                  </>
                )}
              </button>

              {draft.images.length > 0 && (
                <div className="mt-4 grid grid-cols-2 gap-2.5">
                  {draft.images.map((url) => {
                    const isCover = url === draft.coverImage;
                    return (
                      <div
                        key={url}
                        className={[
                          'relative aspect-square rounded-[10px] overflow-hidden border bg-[#f5f5f7]',
                          isCover ? 'border-[#0071e3] ring-1 ring-[#0071e3]/30' : 'border-[#d2d2d7]/50',
                        ].join(' ')}
                      >
                        <img src={url} alt="" className="w-full h-full object-cover" />
                        <div className="absolute inset-x-0 bottom-0 p-1.5 bg-gradient-to-t from-black/55 to-transparent flex items-center justify-between">
                          <button
                            onClick={() => makeCover(url)}
                            className={[
                              'text-[11px] font-medium px-1.5 py-0.5 rounded-md transition flex items-center gap-1',
                              isCover ? 'bg-[#0071e3] text-white' : 'bg-white/90 text-[#1d1d1f] hover:bg-white',
                            ].join(' ')}
                          >
                            <Star className="w-3 h-3" /> {isCover ? 'Cover' : 'Make cover'}
                          </button>
                          <button
                            onClick={() => removeImage(url)}
                            className="text-white/85 hover:text-white p-1 rounded-md hover:bg-white/15"
                            aria-label="Remove"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
              {draft.images.length === 0 && (
                <div className="mt-3 text-[12px] text-[#86868b] flex items-center gap-1.5">
                  <ImageIcon className="w-3.5 h-3.5" /> No images yet — also optional.
                </div>
              )}
            </Card>

            <Card className="p-5 space-y-3">
              <div className="text-[13.5px] font-medium text-[#1d1d1f]">Status</div>
              <div className="text-[12.5px] text-[#86868b] leading-snug">
                Currently <strong className="text-[#1d1d1f]">{draft.status === 'published' ? 'published' : 'draft'}</strong>.
                Drafts are only visible inside the admin.
              </div>
              {publicHref && (
                <a
                  href={publicHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[12.5px] text-[#0071e3] hover:underline"
                >
                  View on public site →
                </a>
              )}
            </Card>
          </div>
        </div>
      )}

      {(error || info) && (
        <div className="fixed bottom-5 right-5 z-50">
          {error && (
            <div className="mb-2 p-3 rounded-[12px] bg-[#ff3b30] text-white text-[13px] shadow-lg max-w-[340px]">
              {error}
            </div>
          )}
          {info && (
            <div className="p-3 rounded-[12px] bg-[#1d1d1f] text-white text-[13px] shadow-lg max-w-[340px]">
              {info}
            </div>
          )}
        </div>
      )}

      {/* Bottom action bar for mobile */}
      <div className="lg:hidden sticky bottom-0 left-0 right-0 mt-6 -mx-5 px-5 py-3 bg-white/95 backdrop-blur border-t border-[#d2d2d7]/50 flex items-center gap-2">
        <button
          onClick={() => navigate('/admin/articles')}
          className="text-[#86868b] py-2 px-2 text-[13px]"
        >
          Cancel
        </button>
        <div className="flex-1" />
        <button
          onClick={() => save(false)}
          disabled={saving}
          className="border border-[#d2d2d7] text-[#1d1d1f] py-2 px-3 rounded-[10px] text-[13px] font-medium flex items-center gap-1.5 disabled:opacity-50"
        >
          <Save className="w-3.5 h-3.5" /> Draft
        </button>
        <button
          onClick={() => save(true)}
          disabled={saving}
          className="bg-[#34c759] text-white py-2 px-3 rounded-[10px] text-[13px] font-medium flex items-center gap-1.5 disabled:opacity-50"
        >
          <Eye className="w-3.5 h-3.5" /> Publish
        </button>
      </div>
    </>
  );
}

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-[12px] font-medium text-[#86868b] ml-1 block">{label}</label>
      {children}
      {hint && <div className="text-[11.5px] text-[#86868b] ml-1">{hint}</div>}
    </div>
  );
}
