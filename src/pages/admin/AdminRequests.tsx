import { useEffect, useMemo, useState } from 'react';
import {
  Loader2,
  Inbox,
  Check,
  X,
  Mail,
  ShieldCheck,
  Lock,
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

  const accept = async (req: RequestDoc) => {
    if (!isSuper || !user) return;
    if (!req.uid) {
      setError('Request is missing a user id.');
      return;
    }
    setBusyId(req.id);
    setError('');
    try {
      await setDoc(doc(db, 'admins', req.uid), {
        email: req.email ?? null,
        displayName: req.displayName ?? null,
        photoURL: req.photoURL ?? null,
        role: 'admin',
        approvedBy: user.email ?? user.uid,
        approvedAt: serverTimestamp(),
        createdAt: serverTimestamp(),
      });
      await deleteDoc(doc(db, 'accessRequests', req.id));
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
                          onClick={() => accept(req)}
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
          with role <strong>admin</strong>. The user gets access on their next sign-in or page load.
        </span>
      </div>
    </>
  );
}
