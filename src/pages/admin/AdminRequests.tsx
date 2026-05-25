import { useEffect, useMemo, useState } from 'react';
import {
  Loader2,
  Inbox,
  Check,
  X,
  Mail,
  ShieldCheck,
  Lock,
  Sparkles,
} from 'lucide-react';
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
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
import {
  ADMIN_SECTIONS,
  type AdminSectionKey,
} from '../../lib/adminSections';

interface RequestDoc {
  id: string;
  uid?: string;
  email?: string;
  displayName?: string;
  photoURL?: string;
  reason?: string;
  status?: string;
  requestedAt?: unknown;
}

export default function AdminRequests() {
  const { user, role } = useAuth();
  const isSuper = role === 'superadmin';

  const [requests, setRequests] = useState<RequestDoc[] | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [error, setError] = useState('');

  // Approval modal state — which request is being approved + which sections
  // are ticked.
  const [approving, setApproving] = useState<RequestDoc | null>(null);
  const [pickedSections, setPickedSections] = useState<AdminSectionKey[]>([]);

  useEffect(() => {
    const q = query(collection(db, 'accessRequests'), orderBy('requestedAt', 'desc'));
    const unsub = onSnapshot(
      q,
      (snap) => {
        setRequests(snap.docs.map((d) => ({ id: d.id, ...(d.data() as object) })));
      },
      (err) => {
        console.warn('[requests] subscribe failed:', err);
        setRequests([]);
      },
    );
    return unsub;
  }, []);

  const pending = useMemo(
    () => (requests ?? []).filter((r) => (r.status ?? 'pending') === 'pending'),
    [requests],
  );

  const openApproval = (req: RequestDoc) => {
    if (!isSuper) return;
    setApproving(req);
    // Sensible default — give every new admin Articles, since that's the
    // most common reason people request access. Superadmin can untick.
    setPickedSections(['articles']);
    setError('');
  };

  const closeApproval = () => {
    setApproving(null);
    setPickedSections([]);
  };

  const togglePicked = (s: AdminSectionKey) => {
    setPickedSections((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s],
    );
  };

  const confirmApproval = async () => {
    if (!isSuper || !user || !approving) return;
    if (!approving.uid) {
      setError('Request is missing a user id.');
      return;
    }
    setBusyId(approving.id);
    setError('');
    try {
      await setDoc(doc(db, 'admins', approving.uid), {
        email: approving.email ?? null,
        displayName: approving.displayName ?? null,
        photoURL: approving.photoURL ?? null,
        role: 'admin',
        sections: pickedSections,
        approvedBy: user.email ?? user.uid,
        approvedAt: serverTimestamp(),
        createdAt: serverTimestamp(),
      });
      await deleteDoc(doc(db, 'accessRequests', approving.id));
      closeApproval();
    } catch (err) {
      console.error('[requests] accept failed:', err);
      setError('Could not accept request. Check Firestore permissions.');
    } finally {
      setBusyId(null);
    }
  };

  const reject = async (req: RequestDoc) => {
    if (!isSuper) return;
    setBusyId(req.id);
    setError('');
    try {
      await deleteDoc(doc(db, 'accessRequests', req.id));
    } catch (err) {
      console.error('[requests] reject failed:', err);
      setError('Could not reject request. Check Firestore permissions.');
    } finally {
      setBusyId(null);
    }
  };

  const loading = requests === null;

  return (
    <>
      <PageHeader
        title="Access requests"
        subtitle={
          loading
            ? 'Loading pending requests…'
            : `${pending.length} pending ${pending.length === 1 ? 'request' : 'requests'}`
        }
      />

      {!isSuper && (
        <div className="mb-5 p-3.5 rounded-[12px] bg-[#0071e3]/5 border border-[#0071e3]/20 text-[#1d1d1f] text-[13px] flex items-start gap-2.5">
          <Lock className="w-4 h-4 text-[#0071e3] mt-0.5 shrink-0" />
          <span>
            Only superadmins can approve or reject requests. You can view them
            in read-only mode.
          </span>
        </div>
      )}

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
        ) : pending.length === 0 ? (
          <EmptyState
            icon={<Inbox className="w-5 h-5" />}
            title="No pending requests"
            description="When someone signs in with Google and asks for access, their request will appear here."
          />
        ) : (
          <div className="divide-y divide-[#d2d2d7]/40">
            {pending.map((req) => {
              const busy = busyId === req.id;
              return (
                <div
                  key={req.id}
                  className="p-5 flex flex-col sm:flex-row sm:items-start gap-4"
                >
                  <div className="flex items-center gap-3 sm:flex-1 min-w-0">
                    {req.photoURL ? (
                      <img
                        src={req.photoURL}
                        alt=""
                        referrerPolicy="no-referrer"
                        className="w-10 h-10 rounded-full object-cover shrink-0"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-[#0071e3]/10 flex items-center justify-center text-[#0071e3] text-[13px] font-medium shrink-0">
                        {(req.displayName || req.email || '?')
                          .split(/[\s@.]+/)
                          .filter(Boolean)
                          .slice(0, 2)
                          .map((s) => s[0]?.toUpperCase())
                          .join('')}
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <div className="text-[14px] font-medium text-[#1d1d1f] truncate">
                          {req.displayName || req.email || 'Unknown user'}
                        </div>
                        <Badge tone="warning">pending</Badge>
                      </div>
                      <div className="text-[12.5px] text-[#86868b] flex items-center gap-1.5 mt-0.5 truncate">
                        <Mail className="w-3 h-3 shrink-0" />
                        <span className="truncate">{req.email ?? '—'}</span>
                      </div>
                      {req.reason && (
                        <div className="mt-2 text-[13px] text-[#424245] leading-snug bg-[#f5f5f7] rounded-[10px] px-3 py-2">
                          “{req.reason}”
                        </div>
                      )}
                      <div className="text-[11.5px] text-[#86868b] mt-2">
                        Requested {formatDate(req.requestedAt)}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 sm:self-center shrink-0">
                    {isSuper ? (
                      <>
                        <button
                          onClick={() => reject(req)}
                          disabled={busy}
                          className="px-3.5 py-2 rounded-[10px] text-[13px] font-medium border border-[#d2d2d7] text-[#1d1d1f] hover:bg-[#f5f5f7] transition flex items-center gap-1.5 disabled:opacity-50"
                        >
                          <X className="w-4 h-4" /> Reject
                        </button>
                        <button
                          onClick={() => openApproval(req)}
                          disabled={busy}
                          className="px-3.5 py-2 rounded-[10px] text-[13px] font-medium bg-[#34c759] hover:bg-[#2eb050] text-white transition flex items-center gap-1.5 disabled:opacity-50"
                        >
                          {busy ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <>
                              <Check className="w-4 h-4" /> Accept
                            </>
                          )}
                        </button>
                      </>
                    ) : (
                      <Badge tone="default">view only</Badge>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </Card>

      <div className="mt-6 text-[12px] text-[#86868b] flex items-start gap-2">
        <ShieldCheck className="w-3.5 h-3.5 mt-0.5 shrink-0" />
        <span>
          Accepting a request creates an <code className="text-[11px]">admins/&lt;uid&gt;</code> record
          with role <strong>admin</strong> and the sections you pick. The user gets access on their next sign-in or page load.
        </span>
      </div>

      {/* ── Approval modal ─────────────────────────────────────────────── */}
      {approving && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={closeApproval}
        >
          <div
            className="w-full max-w-[460px] bg-white rounded-[18px] border border-[#d2d2d7]/40 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-5 border-b border-[#d2d2d7]/40">
              <div className="flex items-center gap-2.5 mb-1">
                <Sparkles className="w-4 h-4 text-[#0071e3]" />
                <span className="text-[12px] font-medium uppercase tracking-wider text-[#0071e3]">
                  Grant admin access
                </span>
              </div>
              <div className="text-[16px] font-medium text-[#1d1d1f] tracking-[-0.01em]">
                {approving.displayName || approving.email || 'Admin'}
              </div>
              <div className="text-[12.5px] text-[#86868b]">{approving.email}</div>
            </div>

            <div className="px-6 py-5">
              <div className="text-[13px] text-[#424245] mb-3">
                Pick which sections this admin can use. Anything left unticked stays hidden in their sidebar.
              </div>
              <div className="space-y-1.5">
                {ADMIN_SECTIONS.map((s) => {
                  const checked = pickedSections.includes(s.key);
                  return (
                    <label
                      key={s.key}
                      className={[
                        'flex items-center gap-3 px-3.5 py-2.5 rounded-[10px] cursor-pointer transition border',
                        checked
                          ? 'bg-[#0071e3]/5 border-[#0071e3]/30'
                          : 'bg-white border-[#d2d2d7]/50 hover:bg-[#fafafa]',
                      ].join(' ')}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => togglePicked(s.key)}
                        className="w-4 h-4 accent-[#0071e3]"
                      />
                      <span className="text-[13.5px] text-[#1d1d1f]">{s.label}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="px-6 pb-5 pt-1 flex items-center justify-end gap-2">
              <button
                onClick={closeApproval}
                className="px-3.5 py-2 rounded-[10px] text-[13px] font-medium border border-[#d2d2d7] text-[#1d1d1f] hover:bg-[#f5f5f7] transition"
              >
                Cancel
              </button>
              <button
                onClick={confirmApproval}
                disabled={busyId === approving.id}
                className="px-3.5 py-2 rounded-[10px] text-[13px] font-medium bg-[#34c759] hover:bg-[#2eb050] text-white transition flex items-center gap-1.5 disabled:opacity-50"
              >
                {busyId === approving.id ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <Check className="w-4 h-4" /> Grant access
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
