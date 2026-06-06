import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Loader2,
  Building2,
  ChevronRight,
  Filter,
} from 'lucide-react';
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { Badge, Card, EmptyState, PageHeader, Toggle } from '../../components/admin/ui';

interface SchoolDoc {
  id: string;
  schoolName?: string;
  ownerName?: string;
  email?: string;
  phone?: string;
  status?: string;
  ownerAccessEnabled?: boolean;
  studentLimit?: number;
  createdAt?: unknown;
}

type StatusFilter = 'all' | 'active' | 'suspended';

export default function AdminSchools() {
  const [schools, setSchools] = useState<SchoolDoc[] | null>(null);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [busyId, setBusyId] = useState<string | null>(null);
  // Per-row edited student-limit values (id → typed string), before saving.
  const [limitDrafts, setLimitDrafts] = useState<Record<string, string>>({});

  const toggleAccess = async (s: SchoolDoc) => {
    const next = !(s.ownerAccessEnabled !== false); // current "on" = !== false
    setBusyId(s.id);
    try {
      await updateDoc(doc(db, 'schools', s.id), {
        ownerAccessEnabled: next,
        ownerAccessUpdatedAt: serverTimestamp(),
      });
    } catch (err) {
      console.warn('[schools] access toggle failed:', err);
    } finally {
      setBusyId(null);
    }
  };

  const saveLimit = async (s: SchoolDoc) => {
    const n = Math.max(0, Math.floor(Number(limitDrafts[s.id]) || 0));
    setBusyId(s.id);
    try {
      await updateDoc(doc(db, 'schools', s.id), {
        studentLimit: n,
        studentLimitUpdatedAt: serverTimestamp(),
      });
      // Clear the draft so the cell falls back to the live (saved) value.
      setLimitDrafts((d) => {
        const next = { ...d };
        delete next[s.id];
        return next;
      });
    } catch (err) {
      console.warn('[schools] student-limit save failed:', err);
    } finally {
      setBusyId(null);
    }
  };

  useEffect(() => {
    const q = query(collection(db, 'schools'), orderBy('createdAt', 'desc'));
    const unsub = onSnapshot(
      q,
      (snap) => {
        setSchools(snap.docs.map((d) => ({ id: d.id, ...(d.data() as object) })));
      },
      (err) => {
        console.warn('[schools] subscribe failed:', err);
        setSchools([]);
      },
    );
    return unsub;
  }, []);

  const filtered = useMemo(() => {
    if (!schools) return [];
    const term = search.trim().toLowerCase();
    return schools.filter((s) => {
      const status = s.status ?? 'active';
      if (statusFilter !== 'all' && status !== statusFilter) return false;
      if (!term) return true;
      const hay = [s.schoolName, s.ownerName, s.email, s.phone, s.id]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      return hay.includes(term);
    });
  }, [schools, search, statusFilter]);

  const loading = schools === null;

  return (
    <>
      <PageHeader
        title="Schools"
        subtitle={
          loading
            ? 'Loading registered schools…'
            : `${filtered.length} of ${schools!.length} schools`
        }
      />

      <Card className="mb-5 p-3 flex flex-col sm:flex-row gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#86868b]" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by school, owner, or email"
            className="w-full bg-[#f5f5f7] border border-[#d2d2d7]/40 rounded-[10px] pl-9 pr-3 py-2.5 text-[14px] outline-none focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3]/20 transition"
          />
        </div>
        <div className="flex items-center gap-1 bg-[#f5f5f7] border border-[#d2d2d7]/40 rounded-[10px] p-1">
          <Filter className="w-3.5 h-3.5 text-[#86868b] mx-1.5" />
          {(['all', 'active', 'suspended'] as StatusFilter[]).map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={[
                'px-3 py-1.5 rounded-[8px] text-[12.5px] capitalize transition',
                statusFilter === s
                  ? 'bg-white text-[#1d1d1f] shadow-sm'
                  : 'text-[#86868b] hover:text-[#1d1d1f]',
              ].join(' ')}
            >
              {s}
            </button>
          ))}
        </div>
      </Card>

      <Card className="overflow-hidden">
        {loading ? (
          <div className="py-16 flex items-center justify-center">
            <Loader2 className="w-5 h-5 text-[#0071e3] animate-spin" />
          </div>
        ) : filtered.length === 0 ? (
          <EmptyState
            icon={<Building2 className="w-5 h-5" />}
            title={schools!.length === 0 ? 'No schools yet' : 'No matches'}
            description={
              schools!.length === 0
                ? 'Schools registered through the public site will appear here.'
                : 'Try a different search term or status filter.'
            }
          />
        ) : (
          <>
            <div className="hidden md:grid grid-cols-[2.2fr_92px_168px_100px_28px] gap-4 px-5 py-3 bg-[#fafafa] border-b border-[#d2d2d7]/40 text-[11px] font-medium uppercase tracking-wider text-[#86868b]">
              <div>School / Owner / Email</div>
              <div>Access</div>
              <div>Student Limit</div>
              <div>Status</div>
              <div></div>
            </div>
            <div className="divide-y divide-[#d2d2d7]/40">
              {filtered.map((s) => {
                const accessOn = s.ownerAccessEnabled !== false;
                const storedLimit =
                  s.studentLimit != null ? String(s.studentLimit) : '';
                const draft = limitDrafts[s.id] ?? storedLimit;
                const dirty = draft.trim() !== storedLimit;
                return (
                  <div
                    key={s.id}
                    className="grid grid-cols-1 md:grid-cols-[2.2fr_92px_168px_100px_28px] gap-2.5 md:gap-4 px-5 py-3.5 hover:bg-[#fafafa] transition md:items-center"
                  >
                    {/* School + owner + email */}
                    <div className="min-w-0">
                      <Link
                        to={`/admin/schools/${s.id}`}
                        className="text-[14px] font-medium text-[#1d1d1f] truncate hover:text-[#0071e3] transition block"
                      >
                        {s.schoolName || 'Untitled school'}
                      </Link>
                      <div className="text-[12px] text-[#86868b] truncate mt-0.5">
                        {s.ownerName || '—'} · {s.email || '—'}
                      </div>
                    </div>

                    {/* Access toggle */}
                    <div className="flex items-center gap-2">
                      <Toggle
                        on={accessOn}
                        busy={busyId === s.id}
                        onClick={() => toggleAccess(s)}
                        aria-label={`Toggle owner access for ${s.schoolName || 'school'}`}
                      />
                      <span className="md:hidden text-[12px] text-[#86868b]">
                        {accessOn ? 'Access on' : 'Access off'}
                      </span>
                    </div>

                    {/* Student limit — inline editable */}
                    <div className="flex items-center gap-1.5">
                      <span className="md:hidden text-[12px] text-[#86868b] w-24">
                        Student limit
                      </span>
                      <input
                        type="number"
                        min={0}
                        step={1}
                        value={draft}
                        onChange={(e) =>
                          setLimitDrafts((d) => ({ ...d, [s.id]: e.target.value }))
                        }
                        placeholder="—"
                        className="w-20 bg-[#f5f5f7] border border-[#d2d2d7]/40 rounded-[8px] px-2 py-1.5 text-[13px] outline-none focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3]/20 transition"
                      />
                      <button
                        onClick={() => saveLimit(s)}
                        disabled={busyId === s.id || !dirty}
                        className="px-2.5 py-1.5 rounded-[8px] text-[12px] font-medium bg-[#0071e3] hover:bg-[#0077ed] text-white transition disabled:opacity-30"
                      >
                        {busyId === s.id ? (
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        ) : (
                          'Save'
                        )}
                      </button>
                    </div>

                    {/* Status */}
                    <div>
                      <Badge tone={s.status === 'suspended' ? 'warning' : 'success'}>
                        {s.status || 'active'}
                      </Badge>
                    </div>

                    {/* Open detail */}
                    <Link
                      to={`/admin/schools/${s.id}`}
                      aria-label="Open school details"
                      className="hidden md:flex justify-end text-[#b0b0b8] hover:text-[#0071e3] transition"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </Card>
    </>
  );
}
