import { useEffect, useMemo, useState } from 'react';
import {
  Building2,
  CheckCircle2,
  PauseCircle,
  Inbox,
  Loader2,
  ArrowUpRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { collection, onSnapshot, query, orderBy, limit, where } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { Card, PageHeader, StatCard, Badge, formatDate } from '../../components/admin/ui';

interface SchoolDoc {
  id: string;
  schoolName?: string;
  ownerName?: string;
  email?: string;
  status?: string;
  createdAt?: unknown;
}

export default function AdminOverview() {
  const [schools, setSchools] = useState<SchoolDoc[] | null>(null);
  const [pendingRequests, setPendingRequests] = useState(0);

  useEffect(() => {
    const q = query(collection(db, 'schools'), orderBy('createdAt', 'desc'), limit(200));
    const unsub = onSnapshot(
      q,
      (snap) => {
        setSchools(snap.docs.map((d) => ({ id: d.id, ...(d.data() as object) })));
      },
      (err) => {
        console.warn('[overview] schools subscribe failed:', err);
        setSchools([]);
      },
    );
    return unsub;
  }, []);

  useEffect(() => {
    const q = query(collection(db, 'accessRequests'), where('status', '==', 'pending'));
    const unsub = onSnapshot(
      q,
      (snap) => setPendingRequests(snap.size),
      (err) => {
        console.warn('[overview] requests subscribe failed:', err);
        setPendingRequests(0);
      },
    );
    return unsub;
  }, []);

  const stats = useMemo(() => {
    const all = schools ?? [];
    const active = all.filter((s) => (s.status ?? 'active') === 'active').length;
    const suspended = all.filter((s) => s.status === 'suspended').length;
    return { total: all.length, active, suspended };
  }, [schools]);

  const recent = (schools ?? []).slice(0, 6);
  const loading = schools === null;

  return (
    <>
      <PageHeader
        title="Overview"
        subtitle="Live snapshot of registrations and platform health."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          label="Total schools"
          value={loading ? '—' : stats.total}
          icon={<Building2 className="w-5 h-5" />}
        />
        <StatCard
          label="Active"
          value={loading ? '—' : stats.active}
          tone="success"
          icon={<CheckCircle2 className="w-5 h-5" />}
        />
        <StatCard
          label="Suspended"
          value={loading ? '—' : stats.suspended}
          tone="warning"
          icon={<PauseCircle className="w-5 h-5" />}
        />
        <Link to="/admin/requests" className="block">
          <StatCard
            label="Pending requests"
            value={pendingRequests}
            hint={pendingRequests > 0 ? 'Tap to review' : 'All caught up'}
            tone={pendingRequests > 0 ? 'danger' : 'default'}
            icon={<Inbox className="w-5 h-5" />}
          />
        </Link>
      </div>

      <Card className="overflow-hidden">
        <div className="px-5 py-4 border-b border-[#d2d2d7]/40 flex items-center justify-between">
          <div>
            <div className="text-[15px] font-medium text-[#1d1d1f]">Recent schools</div>
            <div className="text-[12px] text-[#86868b]">Most recent registrations</div>
          </div>
          <Link
            to="/admin/schools"
            className="text-[13px] text-[#0071e3] hover:underline flex items-center gap-1"
          >
            View all <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {loading ? (
          <div className="py-12 flex items-center justify-center">
            <Loader2 className="w-5 h-5 text-[#0071e3] animate-spin" />
          </div>
        ) : recent.length === 0 ? (
          <div className="py-12 text-center text-[13px] text-[#86868b]">
            No schools registered yet.
          </div>
        ) : (
          <div className="divide-y divide-[#d2d2d7]/40">
            {recent.map((s) => (
              <Link
                key={s.id}
                to={`/admin/schools/${s.id}`}
                className="flex items-center justify-between px-5 py-3.5 hover:bg-[#fafafa] transition"
              >
                <div className="min-w-0">
                  <div className="text-[14px] font-medium text-[#1d1d1f] truncate">
                    {s.schoolName || 'Untitled school'}
                  </div>
                  <div className="text-[12px] text-[#86868b] truncate">
                    {s.ownerName || '—'} · {s.email || '—'}
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-[12px] text-[#86868b] hidden sm:inline">
                    {formatDate(s.createdAt)}
                  </span>
                  <Badge tone={s.status === 'suspended' ? 'warning' : 'success'}>
                    {s.status || 'active'}
                  </Badge>
                </div>
              </Link>
            ))}
          </div>
        )}
      </Card>
    </>
  );
}
