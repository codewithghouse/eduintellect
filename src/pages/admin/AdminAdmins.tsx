import { useEffect, useMemo, useState } from 'react';
import {
  Loader2,
  ShieldCheck,
  Trash2,
  UserPlus,
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
import { Badge, Card, EmptyState, PageHeader, formatDate } from '../../components/admin/ui';

interface AdminDoc {
  id: string;
  email?: string;
  displayName?: string;
  role?: string;
  invitedBy?: string;
  createdAt?: unknown;
  inviteEmail?: string;
}

export default function AdminAdmins() {
  const { user, role: myRole } = useAuth();
  const isSuper = myRole === 'superadmin';

  const [admins, setAdmins] = useState<AdminDoc[] | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ email: '', role: 'admin' as 'admin' | 'superadmin' });

  useEffect(() => {
    const q = query(collection(db, 'admins'), orderBy('createdAt', 'desc'));
    const unsub = onSnapshot(
      q,
      (snap) => {
        setAdmins(snap.docs.map((d) => ({ id: d.id, ...(d.data() as object) })));
      },
      (err) => {
        console.warn('[admins] subscribe failed:', err);
        setAdmins([]);
      },
    );
    return unsub;
  }, []);

  const sortedAdmins = useMemo(() => admins ?? [], [admins]);

  const addInvite = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isSuper || !user) return;
    const email = form.email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email.');
      return;
    }
    setBusy(true);
    setError('');
    try {
      const id = `invite_${email.replace(/[^a-z0-9]/g, '_')}`;
      await setDoc(doc(db, 'admins', id), {
        inviteEmail: email,
        role: form.role,
        invitedBy: user.email ?? user.uid,
        createdAt: serverTimestamp(),
      });
      setForm({ email: '', role: 'admin' });
    } catch (err) {
      console.error('[admins] add failed:', err);
      setError('Could not create invite. Verify Firestore rules allow superadmins to write admins/.');
    } finally {
      setBusy(false);
    }
  };

  const remove = async (id: string, email?: string) => {
    if (!isSuper) return;
    if (user && id === user.uid) {
      setError("You can't remove your own admin record.");
      return;
    }
    const ok = window.confirm(
      `Revoke admin access for ${email ?? id}? They will lose access immediately on next page load.`,
    );
    if (!ok) return;
    setBusy(true);
    setError('');
    try {
      await deleteDoc(doc(db, 'admins', id));
    } catch (err) {
      console.error('[admins] delete failed:', err);
      setError('Delete failed. Superadmin permissions required.');
    } finally {
      setBusy(false);
    }
  };

  const loading = admins === null;

  return (
    <>
      <PageHeader
        title="Admins"
        subtitle="Control who can access the admin console."
      />

      {!isSuper && (
        <div className="mb-5 p-3.5 rounded-[12px] bg-[#0071e3]/5 border border-[#0071e3]/20 text-[#1d1d1f] text-[13px] flex items-start gap-2.5">
          <Lock className="w-4 h-4 text-[#0071e3] mt-0.5 shrink-0" />
          <span>
            You're signed in as <strong>admin</strong>. Only superadmins can add or
            remove admin access.
          </span>
        </div>
      )}

      {isSuper && (
        <Card className="p-5 mb-5">
          <form
            onSubmit={addInvite}
            className="grid grid-cols-1 sm:grid-cols-[1fr_160px_auto] gap-3 items-end"
          >
            <div className="space-y-1.5">
              <label className="text-[12px] font-medium text-[#86868b] ml-1">
                Email address
              </label>
              <input
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                type="email"
                required
                placeholder="newadmin@school.com"
                className="w-full bg-[#f5f5f7] border border-[#d2d2d7]/40 rounded-[10px] py-2.5 px-3 text-[14px] outline-none focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3]/20 transition"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[12px] font-medium text-[#86868b] ml-1">Role</label>
              <select
                value={form.role}
                onChange={(e) =>
                  setForm({ ...form, role: e.target.value as 'admin' | 'superadmin' })
                }
                className="w-full bg-[#f5f5f7] border border-[#d2d2d7]/40 rounded-[10px] py-2.5 px-3 text-[14px] outline-none focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3]/20 transition"
              >
                <option value="admin">Admin</option>
                <option value="superadmin">Superadmin</option>
              </select>
            </div>
            <button
              type="submit"
              disabled={busy}
              className="bg-[#0071e3] hover:bg-[#0077ed] disabled:opacity-50 text-white py-2.5 px-4 rounded-[10px] text-[14px] font-medium flex items-center justify-center gap-2 transition"
            >
              {busy ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  <UserPlus className="w-4 h-4" /> Invite
                </>
              )}
            </button>
          </form>
          <p className="mt-3 text-[12px] text-[#86868b] leading-snug">
            Invites are stored as pending records. When the invitee signs in with
            Google using this exact email, they're auto-promoted to a real admin
            record on first login (handled in <code className="text-[11px]">auth.tsx</code>).
          </p>
          {error && (
            <div className="mt-3 p-2.5 rounded-[10px] bg-[#ff3b30]/5 border border-[#ff3b30]/20 text-[#ff3b30] text-[12.5px]">
              {error}
            </div>
          )}
        </Card>
      )}

      <Card className="overflow-hidden">
        {loading ? (
          <div className="py-16 flex items-center justify-center">
            <Loader2 className="w-5 h-5 text-[#0071e3] animate-spin" />
          </div>
        ) : sortedAdmins.length === 0 ? (
          <EmptyState
            icon={<ShieldCheck className="w-5 h-5" />}
            title="No admins yet"
            description="Set VITE_ADMIN_BOOTSTRAP_EMAILS in your .env to grant the first superadmin, then add others from here."
          />
        ) : (
          <div className="divide-y divide-[#d2d2d7]/40">
            <div className="hidden md:grid grid-cols-[1.5fr_1fr_140px_140px_90px] gap-4 px-5 py-3 bg-[#fafafa] border-b border-[#d2d2d7]/40 text-[11px] font-medium uppercase tracking-wider text-[#86868b]">
              <div>Email</div>
              <div>Name</div>
              <div>Role</div>
              <div>Invited</div>
              <div></div>
            </div>
            {sortedAdmins.map((a) => {
              const email = a.email ?? a.inviteEmail ?? '—';
              const isPending = !a.email && !!a.inviteEmail;
              const isSelf = user && a.id === user.uid;
              return (
                <div
                  key={a.id}
                  className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_140px_140px_90px] gap-1 md:gap-4 px-5 py-3.5 items-center"
                >
                  <div className="min-w-0 flex items-center gap-2">
                    <div className="text-[14px] text-[#1d1d1f] truncate">{email}</div>
                    {isPending && <Badge tone="warning">pending</Badge>}
                    {isSelf && <Badge tone="info">you</Badge>}
                  </div>
                  <div className="text-[13px] text-[#424245] truncate">
                    {a.displayName ?? '—'}
                  </div>
                  <div>
                    <Badge tone={a.role === 'superadmin' ? 'info' : 'default'}>
                      {a.role ?? 'admin'}
                    </Badge>
                  </div>
                  <div className="text-[12px] text-[#86868b]">
                    {formatDate(a.createdAt)}
                  </div>
                  <div className="flex md:justify-end">
                    {isSuper && !isSelf && (
                      <button
                        onClick={() => remove(a.id, email)}
                        disabled={busy}
                        className="p-2 rounded-[8px] text-[#86868b] hover:text-[#ff3b30] hover:bg-[#ff3b30]/5 transition disabled:opacity-50"
                        aria-label="Revoke"
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
