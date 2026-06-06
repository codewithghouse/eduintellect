import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  User,
  Building2,
  Loader2,
  PauseCircle,
  PlayCircle,
  Trash2,
  Copy,
  Check,
  Users,
  Save,
} from 'lucide-react';
import {
  doc,
  onSnapshot,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { useAuth } from '../../lib/auth';
import { Badge, Card, PageHeader, Toggle, formatDate } from '../../components/admin/ui';

interface SchoolDoc {
  schoolName?: string;
  ownerName?: string;
  email?: string;
  phone?: string;
  address?: string;
  status?: string;
  ownerId?: string;
  role?: string;
  ownerAccessEnabled?: boolean;
  studentLimit?: number;
  createdAt?: unknown;
}

export default function AdminSchoolDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { role } = useAuth();
  const [school, setSchool] = useState<SchoolDoc | null | undefined>(undefined);
  const [busy, setBusy] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');
  const [limitInput, setLimitInput] = useState('');

  // Keep the editable student-limit field in sync with the live doc.
  useEffect(() => {
    if (school) {
      setLimitInput(
        typeof school.studentLimit === 'number' ? String(school.studentLimit) : '',
      );
    }
  }, [school]);

  useEffect(() => {
    if (!id) return;
    const unsub = onSnapshot(
      doc(db, 'schools', id),
      (snap) => {
        if (!snap.exists()) {
          setSchool(null);
        } else {
          setSchool(snap.data() as SchoolDoc);
        }
      },
      (err) => {
        console.warn('[school-detail] subscribe failed:', err);
        setSchool(null);
      },
    );
    return unsub;
  }, [id]);

  if (!id) return null;

  if (school === undefined) {
    return (
      <div className="py-20 flex items-center justify-center">
        <Loader2 className="w-5 h-5 text-[#0071e3] animate-spin" />
      </div>
    );
  }

  if (school === null) {
    return (
      <>
        <Link
          to="/admin/schools"
          className="inline-flex items-center gap-2 text-[13px] text-[#0071e3] hover:underline mb-5"
        >
          <ArrowLeft className="w-4 h-4" /> Back to schools
        </Link>
        <Card className="p-10 text-center">
          <div className="text-[16px] font-medium text-[#1d1d1f]">School not found</div>
          <div className="text-[13px] text-[#86868b] mt-1">
            This record may have been removed.
          </div>
        </Card>
      </>
    );
  }

  const status = school.status ?? 'active';
  const isSuspended = status === 'suspended';
  // "On" when not explicitly disabled — legacy schools (no field) read as enabled.
  const accessEnabled = school.ownerAccessEnabled !== false;
  const limitDirty =
    limitInput.trim() !==
    (typeof school.studentLimit === 'number' ? String(school.studentLimit) : '');

  const toggleStatus = async () => {
    setBusy(true);
    setError('');
    try {
      await updateDoc(doc(db, 'schools', id), {
        status: isSuspended ? 'active' : 'suspended',
        statusUpdatedAt: serverTimestamp(),
      });
    } catch (err) {
      console.error('[school-detail] status update failed:', err);
      setError('Could not update status. Check Firestore permissions.');
    } finally {
      setBusy(false);
    }
  };

  const toggleOwnerAccess = async () => {
    if (!id || !school) return;
    const next = !(school.ownerAccessEnabled !== false); // current "on" = !== false
    setBusy(true);
    setError('');
    try {
      await updateDoc(doc(db, 'schools', id), {
        ownerAccessEnabled: next,
        ownerAccessUpdatedAt: serverTimestamp(),
      });
    } catch (err) {
      console.error('[school-detail] access toggle failed:', err);
      setError('Could not update owner access. Check Firestore permissions.');
    } finally {
      setBusy(false);
    }
  };

  const saveStudentLimit = async () => {
    if (!id) return;
    const n = Math.max(0, Math.floor(Number(limitInput) || 0));
    setBusy(true);
    setError('');
    try {
      await updateDoc(doc(db, 'schools', id), {
        studentLimit: n,
        studentLimitUpdatedAt: serverTimestamp(),
      });
    } catch (err) {
      console.error('[school-detail] student-limit save failed:', err);
      setError('Could not save student limit. Check Firestore permissions.');
    } finally {
      setBusy(false);
    }
  };

  const remove = async () => {
    if (role !== 'superadmin') return;
    const ok = window.confirm(
      `Permanently delete "${school.schoolName ?? id}"? This removes the Firestore record but does NOT delete their Firebase Auth user.`,
    );
    if (!ok) return;
    setBusy(true);
    setError('');
    try {
      await deleteDoc(doc(db, 'schools', id));
      navigate('/admin/schools', { replace: true });
    } catch (err) {
      console.error('[school-detail] delete failed:', err);
      setError('Delete failed. Superadmin permissions required.');
      setBusy(false);
    }
  };

  const copyId = async () => {
    try {
      await navigator.clipboard.writeText(id);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* ignore */
    }
  };

  return (
    <>
      <Link
        to="/admin/schools"
        className="inline-flex items-center gap-2 text-[13px] text-[#0071e3] hover:underline mb-5"
      >
        <ArrowLeft className="w-4 h-4" /> Back to schools
      </Link>

      <PageHeader
        title={school.schoolName || 'Untitled school'}
        subtitle={school.ownerName ? `Owned by ${school.ownerName}` : undefined}
        actions={
          <>
            <button
              onClick={toggleStatus}
              disabled={busy}
              className={[
                'px-3.5 py-2 rounded-[10px] text-[13px] font-medium flex items-center gap-2 transition disabled:opacity-50',
                isSuspended
                  ? 'bg-[#34c759] hover:bg-[#2eb050] text-white'
                  : 'bg-[#ff9500] hover:bg-[#e68600] text-white',
              ].join(' ')}
            >
              {busy ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : isSuspended ? (
                <PlayCircle className="w-4 h-4" />
              ) : (
                <PauseCircle className="w-4 h-4" />
              )}
              {isSuspended ? 'Reactivate' : 'Suspend'}
            </button>
            {role === 'superadmin' && (
              <button
                onClick={remove}
                disabled={busy}
                className="px-3.5 py-2 rounded-[10px] text-[13px] font-medium border border-[#ff3b30]/40 text-[#ff3b30] hover:bg-[#ff3b30]/5 transition flex items-center gap-2 disabled:opacity-50"
              >
                <Trash2 className="w-4 h-4" /> Delete
              </button>
            )}
          </>
        }
      />

      {error && (
        <div className="mb-5 p-3.5 rounded-[12px] bg-[#ff3b30]/5 border border-[#ff3b30]/20 text-[#ff3b30] text-[13px]">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <Card className="p-6 lg:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Badge tone={isSuspended ? 'warning' : 'success'}>{status}</Badge>
            <Badge tone="info">{school.role ?? 'owner'}</Badge>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field icon={<Building2 className="w-4 h-4" />} label="School" value={school.schoolName} />
            <Field icon={<User className="w-4 h-4" />} label="Owner" value={school.ownerName} />
            <Field icon={<Mail className="w-4 h-4" />} label="Email" value={school.email} />
            <Field icon={<Phone className="w-4 h-4" />} label="Phone" value={school.phone} />
            <Field
              icon={<MapPin className="w-4 h-4" />}
              label="Address"
              value={school.address}
              full
            />
          </div>
        </Card>

        <Card className="p-6 self-start">
          <div className="text-[12px] font-medium text-[#86868b] uppercase tracking-wider mb-3">
            Record
          </div>
          <div className="space-y-3 text-[13px]">
            <div>
              <div className="text-[#86868b] text-[11.5px]">Document ID</div>
              <button
                onClick={copyId}
                className="mt-0.5 inline-flex items-center gap-1.5 text-[#1d1d1f] font-mono text-[12px] hover:text-[#0071e3] transition"
              >
                <span className="truncate max-w-[180px]">{id}</span>
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-[#34c759]" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
            <div>
              <div className="text-[#86868b] text-[11.5px]">Owner UID</div>
              <div className="font-mono text-[12px] truncate">{school.ownerId ?? id}</div>
            </div>
            <div>
              <div className="text-[#86868b] text-[11.5px]">Joined</div>
              <div>{formatDate(school.createdAt)}</div>
            </div>
          </div>
        </Card>
      </div>

      {/* ── Access & Student Limit ─────────────────────────────────── */}
      <Card className="p-6 mt-5">
        <div className="text-[12px] font-medium text-[#86868b] uppercase tracking-wider mb-5">
          Access &amp; Student Limit
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Owner dashboard access */}
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="text-[14px] font-medium text-[#1d1d1f]">
                Owner Dashboard Access
              </div>
              <div className="text-[12.5px] text-[#86868b] mt-1 leading-snug">
                {accessEnabled
                  ? 'Owner can sign in and use the owner dashboard.'
                  : 'Owner is blocked from the dashboard until you enable this.'}
              </div>
              <div className="mt-2">
                <Badge tone={accessEnabled ? 'success' : 'warning'}>
                  {accessEnabled ? 'Enabled' : 'Disabled'}
                </Badge>
              </div>
            </div>
            <Toggle
              on={accessEnabled}
              busy={busy}
              onClick={toggleOwnerAccess}
              aria-label="Toggle owner dashboard access"
            />
          </div>

          {/* Student limit */}
          <div className="sm:border-l sm:border-[#d2d2d7]/50 sm:pl-6">
            <div className="flex items-center gap-1.5 text-[14px] font-medium text-[#1d1d1f]">
              <Users className="w-4 h-4 text-[#86868b]" /> Student Limit
            </div>
            <div className="text-[12.5px] text-[#86868b] mt-1 leading-snug">
              The owner sees this as their allowed student count. Standard minimum
              is 200.
            </div>
            <div className="flex items-center gap-2 mt-3">
              <input
                type="number"
                min={0}
                step={1}
                value={limitInput}
                onChange={(e) => setLimitInput(e.target.value)}
                placeholder="e.g. 500"
                className="w-32 bg-[#f5f5f7] border border-[#d2d2d7]/40 rounded-[10px] px-3 py-2 text-[14px] outline-none focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3]/20 transition"
              />
              <button
                onClick={saveStudentLimit}
                disabled={busy || !limitDirty}
                className="px-3.5 py-2 rounded-[10px] text-[13px] font-medium bg-[#0071e3] hover:bg-[#0077ed] text-white transition flex items-center gap-1.5 disabled:opacity-40"
              >
                {busy ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Save className="w-4 h-4" />
                )}
                Save
              </button>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}

function Field({
  icon,
  label,
  value,
  full = false,
}: {
  icon: React.ReactNode;
  label: string;
  value?: string;
  full?: boolean;
}) {
  return (
    <div className={full ? 'sm:col-span-2' : ''}>
      <div className="flex items-center gap-1.5 text-[11.5px] text-[#86868b] uppercase tracking-wider mb-1">
        <span className="text-[#b0b0b8]">{icon}</span>
        {label}
      </div>
      <div className="text-[14px] text-[#1d1d1f] break-words">{value || '—'}</div>
    </div>
  );
}
