import { useEffect, useMemo, useState } from 'react';
import {
  Loader2,
  ShieldCheck,
  Trash2,
  UserPlus,
  Lock,
  SlidersHorizontal,
  Check,
  X as XIcon,
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
  updateDoc,
} from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { useAuth } from '../../lib/auth';
import { Badge, Card, EmptyState, PageHeader, formatDate } from '../../components/admin/ui';
import {
  ADMIN_SECTIONS,
  ADMIN_SECTION_KEYS,
  type AdminSectionKey,
} from '../../lib/adminSections';

interface AdminDoc {
  id: string;
  email?: string;
  displayName?: string;
  role?: string;
  invitedBy?: string;
  createdAt?: unknown;
  inviteEmail?: string;
  sections?: string[];
  permanent?: boolean;
}

function normalizeSections(raw: unknown): AdminSectionKey[] {
  if (!Array.isArray(raw)) return [];
  return raw.filter(
    (v): v is AdminSectionKey =>
      typeof v === 'string' &&
      (ADMIN_SECTION_KEYS as readonly string[]).includes(v),
  );
}

export default function AdminAdmins() {
  const { user, role: myRole } = useAuth();
  const isSuper = myRole === 'superadmin';

  const [admins, setAdmins] = useState<AdminDoc[] | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState<{
    email: string;
    role: 'admin' | 'superadmin';
    sections: AdminSectionKey[];
  }>({ email: '', role: 'admin', sections: ['articles'] });

  // Section-edit modal state.
  const [editing, setEditing] = useState<AdminDoc | null>(null);
  const [editingSections, setEditingSections] = useState<AdminSectionKey[]>([]);
  const [savingEdit, setSavingEdit] = useState(false);

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

  const toggleFormSection = (s: AdminSectionKey) => {
    setForm((prev) => ({
      ...prev,
      sections: prev.sections.includes(s)
        ? prev.sections.filter((x) => x !== s)
        : [...prev.sections, s],
    }));
  };

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
        sections: form.role === 'superadmin' ? [...ADMIN_SECTION_KEYS] : form.sections,
        invitedBy: user.email ?? user.uid,
        createdAt: serverTimestamp(),
      });
      setForm({ email: '', role: 'admin', sections: ['articles'] });
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

  const openEdit = (a: AdminDoc) => {
    setEditing(a);
    setEditingSections(normalizeSections(a.sections));
    setError('');
  };

  const closeEdit = () => {
    setEditing(null);
    setEditingSections([]);
  };

  const toggleEditSection = (s: AdminSectionKey) => {
    setEditingSections((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s],
    );
  };

  const saveEdit = async () => {
    if (!isSuper || !editing) return;
    setSavingEdit(true);
    setError('');
    try {
      await updateDoc(doc(db, 'admins', editing.id), {
        sections: editingSections,
        updatedAt: serverTimestamp(),
      });
      closeEdit();
    } catch (err) {
      console.error('[admins] section update failed:', err);
      setError('Could not update sections. Superadmin permissions required.');
    } finally {
      setSavingEdit(false);
    }
  };

  const loading = admins === null;

  return (
    <>
      <PageHeader
        title="Admins"
        subtitle="Control who can access the admin console and which sections they see."
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
          <form onSubmit={addInvite} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_160px_auto] gap-3 items-end">
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
            </div>

            {form.role === 'admin' && (
              <div className="space-y-2">
                <label className="text-[12px] font-medium text-[#86868b] ml-1 block">
                  Sections this admin can use
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {ADMIN_SECTIONS.map((s) => {
                    const on = form.sections.includes(s.key);
                    return (
                      <button
                        type="button"
                        key={s.key}
                        onClick={() => toggleFormSection(s.key)}
                        className={[
                          'px-3 py-1.5 rounded-full text-[12.5px] border transition',
                          on
                            ? 'bg-[#0071e3]/10 text-[#0071e3] border-[#0071e3]/30'
                            : 'bg-white text-[#424245] border-[#d2d2d7]/60 hover:bg-[#fafafa]',
                        ].join(' ')}
                      >
                        {s.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {form.role === 'superadmin' && (
              <div className="text-[12px] text-[#86868b] leading-snug">
                Superadmins automatically have access to every section.
              </div>
            )}
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
            <div className="hidden md:grid grid-cols-[1.4fr_1fr_120px_1.2fr_110px_70px] gap-4 px-5 py-3 bg-[#fafafa] border-b border-[#d2d2d7]/40 text-[11px] font-medium uppercase tracking-wider text-[#86868b]">
              <div>Email</div>
              <div>Name</div>
              <div>Role</div>
              <div>Sections</div>
              <div>Invited</div>
              <div></div>
            </div>
            {sortedAdmins.map((a) => {
              const email = a.email ?? a.inviteEmail ?? '—';
              const isPending = !a.email && !!a.inviteEmail;
              const isSelf = user && a.id === user.uid;
              const sectionList = normalizeSections(a.sections);
              const isSuperRow = a.role === 'superadmin';
              return (
                <div
                  key={a.id}
                  className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_120px_1.2fr_110px_70px] gap-1 md:gap-4 px-5 py-3.5 items-center"
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
                    <Badge tone={isSuperRow ? 'info' : 'default'}>
                      {a.role ?? 'admin'}
                    </Badge>
                  </div>
                  <div className="min-w-0">
                    {isSuperRow ? (
                      <span className="text-[12px] text-[#86868b]">All sections</span>
                    ) : sectionList.length === 0 ? (
                      <span className="text-[12px] text-[#a55b00] bg-[#ff9500]/10 border border-[#ff9500]/30 px-2 py-0.5 rounded-full">
                        none
                      </span>
                    ) : (
                      <div className="flex flex-wrap gap-1">
                        {sectionList.map((sk) => (
                          <span
                            key={sk}
                            className="text-[11.5px] bg-[#f5f5f7] text-[#424245] border border-[#d2d2d7]/60 px-2 py-0.5 rounded-full"
                          >
                            {ADMIN_SECTIONS.find((x) => x.key === sk)?.label ?? sk}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="text-[12px] text-[#86868b]">
                    {formatDate(a.createdAt)}
                  </div>
                  <div className="flex md:justify-end items-center gap-1">
                    {isSuper && !isSuperRow && !isPending && (
                      <button
                        onClick={() => openEdit(a)}
                        className="p-2 rounded-[8px] text-[#86868b] hover:text-[#0071e3] hover:bg-[#0071e3]/5 transition"
                        aria-label="Edit sections"
                      >
                        <SlidersHorizontal className="w-4 h-4" />
                      </button>
                    )}
                    {isSuper && !isSelf && !a.permanent && (
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

      {/* ── Edit sections modal ─────────────────────────────────────── */}
      {editing && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={closeEdit}
        >
          <div
            className="w-full max-w-[460px] bg-white rounded-[18px] border border-[#d2d2d7]/40 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-5 border-b border-[#d2d2d7]/40 flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="text-[12px] font-medium uppercase tracking-wider text-[#0071e3]">
                  Edit sections
                </div>
                <div className="text-[16px] font-medium text-[#1d1d1f] tracking-[-0.01em] truncate">
                  {editing.displayName || editing.email || 'Admin'}
                </div>
                <div className="text-[12.5px] text-[#86868b] truncate">{editing.email}</div>
              </div>
              <button
                onClick={closeEdit}
                className="p-2 rounded-[8px] text-[#86868b] hover:text-[#1d1d1f] hover:bg-[#f5f5f7] transition shrink-0"
                aria-label="Close"
              >
                <XIcon className="w-4 h-4" />
              </button>
            </div>

            <div className="px-6 py-5">
              <div className="space-y-1.5">
                {ADMIN_SECTIONS.map((s) => {
                  const checked = editingSections.includes(s.key);
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
                        onChange={() => toggleEditSection(s.key)}
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
                onClick={closeEdit}
                className="px-3.5 py-2 rounded-[10px] text-[13px] font-medium border border-[#d2d2d7] text-[#1d1d1f] hover:bg-[#f5f5f7] transition"
              >
                Cancel
              </button>
              <button
                onClick={saveEdit}
                disabled={savingEdit}
                className="px-3.5 py-2 rounded-[10px] text-[13px] font-medium bg-[#0071e3] hover:bg-[#0077ed] text-white transition flex items-center gap-1.5 disabled:opacity-50"
              >
                {savingEdit ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <Check className="w-4 h-4" /> Save
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
