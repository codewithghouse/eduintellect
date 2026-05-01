import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Loader2,
  Building2,
  ChevronRight,
  Filter,
} from 'lucide-react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { Badge, Card, EmptyState, PageHeader, formatDate } from '../../components/admin/ui';

interface SchoolDoc {
  id: string;
  schoolName?: string;
  ownerName?: string;
  email?: string;
  phone?: string;
  status?: string;
  createdAt?: unknown;
}

type StatusFilter = 'all' | 'active' | 'suspended';

export default function AdminSchools() {
  const [schools, setSchools] = useState<SchoolDoc[] | null>(null);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');

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
            <div className="hidden md:grid grid-cols-[1.5fr_1fr_1fr_120px_140px_24px] gap-4 px-5 py-3 bg-[#fafafa] border-b border-[#d2d2d7]/40 text-[11px] font-medium uppercase tracking-wider text-[#86868b]">
              <div>School</div>
              <div>Owner</div>
              <div>Email</div>
              <div>Status</div>
              <div>Joined</div>
              <div></div>
            </div>
            <div className="divide-y divide-[#d2d2d7]/40">
              {filtered.map((s) => (
                <Link
                  key={s.id}
                  to={`/admin/schools/${s.id}`}
                  className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_120px_140px_24px] gap-1 md:gap-4 px-5 py-3.5 hover:bg-[#fafafa] transition items-center"
                >
                  <div className="min-w-0">
                    <div className="text-[14px] font-medium text-[#1d1d1f] truncate">
                      {s.schoolName || 'Untitled school'}
                    </div>
                    <div className="text-[11.5px] text-[#86868b] truncate md:hidden">
                      {s.ownerName || '—'} · {s.email || '—'}
                    </div>
                  </div>
                  <div className="hidden md:block text-[13px] text-[#424245] truncate">
                    {s.ownerName || '—'}
                  </div>
                  <div className="hidden md:block text-[13px] text-[#424245] truncate">
                    {s.email || '—'}
                  </div>
                  <div className="hidden md:block">
                    <Badge tone={s.status === 'suspended' ? 'warning' : 'success'}>
                      {s.status || 'active'}
                    </Badge>
                  </div>
                  <div className="hidden md:block text-[12px] text-[#86868b]">
                    {formatDate(s.createdAt)}
                  </div>
                  <ChevronRight className="hidden md:block w-4 h-4 text-[#b0b0b8]" />
                </Link>
              ))}
            </div>
          </>
        )}
      </Card>
    </>
  );
}
