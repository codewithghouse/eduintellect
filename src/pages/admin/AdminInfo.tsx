import { useEffect, useMemo, useState } from 'react';
import {
  Loader2,
  Inbox,
  Mail,
  Phone,
  MapPin,
  Trash2,
  Search,
  Download,
  Copy,
  Check,
  CheckCircle2,
  Clock,
} from 'lucide-react';
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
  serverTimestamp,
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

interface ContactDoc {
  id: string;
  name?: string;
  schoolName?: string;
  email?: string;
  phone?: string;
  location?: string;
  status?: 'new' | 'contacted' | 'closed' | string;
  createdAt?: unknown;
}

const STATUS_TONE: Record<string, 'warning' | 'success' | 'default' | 'info'> = {
  new: 'warning',
  contacted: 'info',
  closed: 'success',
};

export default function AdminInfo() {
  const { role } = useAuth();
  const isSuper = role === 'superadmin';

  const [rows, setRows] = useState<ContactDoc[] | null>(null);
  const [search, setSearch] = useState('');
  const [busyId, setBusyId] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    const q = query(collection(db, 'contact_submissions'), orderBy('createdAt', 'desc'));
    const unsub = onSnapshot(
      q,
      (snap) => setRows(snap.docs.map((d) => ({ id: d.id, ...(d.data() as object) }))),
      (err) => {
        console.warn('[admin/info] subscribe failed:', err);
        setRows([]);
      },
    );
    return unsub;
  }, []);

  const filtered = useMemo(() => {
    const list = rows ?? [];
    const q = search.trim().toLowerCase();
    if (!q) return list;
    return list.filter((r) =>
      [r.name, r.schoolName, r.email, r.phone, r.location]
        .some((v) => (v ?? '').toString().toLowerCase().includes(q)),
    );
  }, [rows, search]);

  const stats = useMemo(() => {
    const list = rows ?? [];
    return {
      total: list.length,
      new: list.filter((r) => (r.status ?? 'new') === 'new').length,
    };
  }, [rows]);

  const exportCsv = () => {
    const header = ['Name', 'School Name', 'Email', 'Phone', 'Location', 'Status', 'Submitted At'];
    const csvCell = (v: unknown) => {
      const s = v == null ? '' : String(v);
      // Escape CSV — wrap in quotes if it contains comma, quote or newline.
      const needsQuote = /[",\n\r]/.test(s);
      const escaped = s.replace(/"/g, '""');
      return needsQuote ? `"${escaped}"` : escaped;
    };
    const lines = [header.join(',')];
    for (const r of filtered) {
      lines.push([
        csvCell(r.name),
        csvCell(r.schoolName),
        csvCell(r.email),
        csvCell(r.phone),
        csvCell(r.location),
        csvCell(r.status ?? 'new'),
        csvCell(formatDate(r.createdAt)),
      ].join(','));
    }
    // BOM so Excel detects UTF-8 (preserves accents / non-ASCII names).
    const blob = new Blob(['﻿' + lines.join('\n')], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const stamp = new Date().toISOString().slice(0, 10);
    a.href = url;
    a.download = `edullent-contact-submissions-${stamp}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const setStatus = async (row: ContactDoc, next: 'new' | 'contacted' | 'closed') => {
    setBusyId(row.id);
    setError('');
    try {
      await updateDoc(doc(db, 'contact_submissions', row.id), {
        status: next,
        statusUpdatedAt: serverTimestamp(),
      });
    } catch (err) {
      console.error('[admin/info] status update failed:', err);
      setError('Could not update status. Check Firestore permissions.');
    } finally {
      setBusyId(null);
    }
  };

  const remove = async (row: ContactDoc) => {
    if (!isSuper) return;
    if (!window.confirm(`Delete enquiry from ${row.name || row.email || 'this contact'}? This cannot be undone.`)) return;
    setBusyId(row.id);
    setError('');
    try {
      await deleteDoc(doc(db, 'contact_submissions', row.id));
    } catch (err) {
      console.error('[admin/info] delete failed:', err);
      setError('Could not delete enquiry. Check Firestore permissions.');
    } finally {
      setBusyId(null);
    }
  };

  const copyEmail = async (row: ContactDoc) => {
    if (!row.email) return;
    try {
      await navigator.clipboard.writeText(row.email);
      setCopiedId(row.id);
      setTimeout(() => setCopiedId((id) => (id === row.id ? null : id)), 1500);
    } catch {
      /* clipboard blocked — silent */
    }
  };

  const loading = rows === null;

  return (
    <>
      <PageHeader
        title="Info — contact submissions"
        subtitle={
          loading
            ? 'Loading enquiries…'
            : `${stats.total} total · ${stats.new} new`
        }
        actions={
          <button
            onClick={exportCsv}
            disabled={loading || filtered.length === 0}
            className="px-3.5 py-2 rounded-[10px] text-[13px] font-medium border border-[#d2d2d7] text-[#1d1d1f] hover:bg-[#f5f5f7] transition flex items-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Download className="w-3.5 h-3.5" />
            Export CSV
          </button>
        }
      />

      <div className="mb-5 flex items-center gap-2">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-[#86868b] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, school, email, phone or location…"
            className="w-full pl-9 pr-3.5 py-2 rounded-[10px] border border-[#d2d2d7] focus:border-[#0071e3] focus:ring-2 focus:ring-[#0071e3]/15 outline-none text-[13px] bg-white"
          />
        </div>
      </div>

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
        ) : filtered.length === 0 ? (
          <EmptyState
            icon={<Inbox className="w-5 h-5" />}
            title={search ? 'No enquiries match your search' : 'No enquiries yet'}
            description={
              search
                ? 'Try a different search term, or clear the search to see all submissions.'
                : 'When someone submits the contact form on the public website, their enquiry appears here.'
            }
          />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]">
              <thead className="bg-[#f5f5f7] text-[#86868b] text-[11.5px] uppercase tracking-wider">
                <tr>
                  <Th>Name</Th>
                  <Th>School</Th>
                  <Th>Email</Th>
                  <Th>Phone</Th>
                  <Th>Location</Th>
                  <Th>Status</Th>
                  <Th>Submitted</Th>
                  <Th className="text-right pr-4">Actions</Th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#d2d2d7]/40">
                {filtered.map((r) => {
                  const status = (r.status ?? 'new') as string;
                  const tone = STATUS_TONE[status] ?? 'default';
                  const busy = busyId === r.id;
                  return (
                    <tr key={r.id} className="hover:bg-[#fbfbfd] transition-colors">
                      <Td>
                        <div className="font-medium text-[#1d1d1f]">{r.name || '—'}</div>
                      </Td>
                      <Td>
                        <div className="text-[#424245]">{r.schoolName || '—'}</div>
                      </Td>
                      <Td>
                        <div className="flex items-center gap-1.5 text-[#424245]">
                          <Mail className="w-3 h-3 text-[#86868b] shrink-0" />
                          <a
                            href={`mailto:${r.email ?? ''}`}
                            className="hover:text-[#0071e3] truncate max-w-[200px]"
                            title={r.email}
                          >
                            {r.email || '—'}
                          </a>
                          {r.email && (
                            <button
                              onClick={() => copyEmail(r)}
                              className="text-[#86868b] hover:text-[#0071e3] shrink-0"
                              aria-label="Copy email"
                            >
                              {copiedId === r.id ? (
                                <Check className="w-3 h-3 text-[#34c759]" />
                              ) : (
                                <Copy className="w-3 h-3" />
                              )}
                            </button>
                          )}
                        </div>
                      </Td>
                      <Td>
                        <div className="flex items-center gap-1.5 text-[#424245]">
                          <Phone className="w-3 h-3 text-[#86868b] shrink-0" />
                          <a href={`tel:${r.phone ?? ''}`} className="hover:text-[#0071e3]">
                            {r.phone || '—'}
                          </a>
                        </div>
                      </Td>
                      <Td>
                        <div className="flex items-center gap-1.5 text-[#424245]">
                          <MapPin className="w-3 h-3 text-[#86868b] shrink-0" />
                          <span className="truncate max-w-[180px]" title={r.location}>{r.location || '—'}</span>
                        </div>
                      </Td>
                      <Td>
                        <Badge tone={tone}>{status}</Badge>
                      </Td>
                      <Td>
                        <div className="text-[12px] text-[#86868b]">{formatDate(r.createdAt)}</div>
                      </Td>
                      <Td className="text-right pr-4">
                        <div className="inline-flex items-center gap-1">
                          {status === 'new' && (
                            <button
                              onClick={() => setStatus(r, 'contacted')}
                              disabled={busy}
                              className="p-1.5 rounded-[8px] hover:bg-[#0071e3]/10 text-[#0071e3] disabled:opacity-50"
                              title="Mark as contacted"
                            >
                              <Clock className="w-3.5 h-3.5" />
                            </button>
                          )}
                          {status !== 'closed' && (
                            <button
                              onClick={() => setStatus(r, 'closed')}
                              disabled={busy}
                              className="p-1.5 rounded-[8px] hover:bg-[#34c759]/10 text-[#34c759] disabled:opacity-50"
                              title="Mark as closed"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                          {isSuper && (
                            <button
                              onClick={() => remove(r)}
                              disabled={busy}
                              className="p-1.5 rounded-[8px] hover:bg-[#ff3b30]/10 text-[#ff3b30] disabled:opacity-50"
                              title="Delete enquiry"
                            >
                              {busy ? (
                                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                              ) : (
                                <Trash2 className="w-3.5 h-3.5" />
                              )}
                            </button>
                          )}
                        </div>
                      </Td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </Card>

      <div className="mt-6 text-[12px] text-[#86868b] flex items-start gap-2">
        <Inbox className="w-3.5 h-3.5 mt-0.5 shrink-0" />
        <span>
          Submissions arrive from the public <code className="text-[11px]">/contact</code> page.
          Use the clock icon to mark an enquiry as contacted, the tick to close it, and Export CSV
          to download the current view as an Excel-compatible file.
        </span>
      </div>
    </>
  );
}

const Th = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <th className={'text-left font-medium px-4 py-3 ' + className}>{children}</th>
);

const Td = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <td className={'px-4 py-3 align-middle ' + className}>{children}</td>
);
