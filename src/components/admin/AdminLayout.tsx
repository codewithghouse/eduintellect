import { useEffect, useState, type ReactNode } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Building2,
  ShieldCheck,
  LogOut,
  Menu,
  X,
  ExternalLink,
  Inbox,
  Mail,
} from 'lucide-react';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { useAuth } from '../../lib/auth';

interface NavItem {
  to: string;
  label: string;
  icon: ReactNode;
  end?: boolean;
  badgeKey?: 'requests' | 'info';
}

const NAV: NavItem[] = [
  { to: '/admin', label: 'Overview', icon: <LayoutDashboard className="w-4 h-4" />, end: true },
  { to: '/admin/schools', label: 'Schools', icon: <Building2 className="w-4 h-4" /> },
  { to: '/admin/requests', label: 'Requests', icon: <Inbox className="w-4 h-4" />, badgeKey: 'requests' },
  { to: '/admin/info', label: 'Info', icon: <Mail className="w-4 h-4" />, badgeKey: 'info' },
  { to: '/admin/admins', label: 'Admins', icon: <ShieldCheck className="w-4 h-4" /> },
];

export default function AdminLayout() {
  const { user, role, signOut } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [pendingRequests, setPendingRequests] = useState(0);
  const [newSubmissions, setNewSubmissions] = useState(0);

  useEffect(() => {
    const q = query(collection(db, 'accessRequests'), where('status', '==', 'pending'));
    const unsub = onSnapshot(
      q,
      (snap) => setPendingRequests(snap.size),
      (err) => {
        console.warn('[layout] pending requests subscribe failed:', err);
        setPendingRequests(0);
      },
    );
    return unsub;
  }, []);

  useEffect(() => {
    const q = query(collection(db, 'contact_submissions'), where('status', '==', 'new'));
    const unsub = onSnapshot(
      q,
      (snap) => setNewSubmissions(snap.size),
      (err) => {
        console.warn('[layout] new submissions subscribe failed:', err);
        setNewSubmissions(0);
      },
    );
    return unsub;
  }, []);

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin/login', { replace: true });
  };

  const initials = (user?.displayName || user?.email || '?')
    .split(/[\s@.]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0]?.toUpperCase())
    .join('');

  const badgeFor = (key?: 'requests' | 'info') => {
    if (key === 'requests' && pendingRequests > 0) return pendingRequests;
    if (key === 'info' && newSubmissions > 0) return newSubmissions;
    return null;
  };

  return (
    <div className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f]">
      {/* Mobile top bar */}
      <div className="lg:hidden sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-[#d2d2d7]/60 px-4 h-14 flex items-center justify-between">
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-9 h-9 rounded-[10px] flex items-center justify-center hover:bg-[#f5f5f7] relative"
          aria-label="Toggle navigation"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          {(pendingRequests > 0 || newSubmissions > 0) && !open && (
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#ff3b30]" />
          )}
        </button>
        <div className="text-[15px] font-medium tracking-[-0.01em]">Edullent Admin</div>
        <div className="w-9 h-9 rounded-full bg-[#0071e3]/10 flex items-center justify-center text-[#0071e3] text-[12px] font-medium">
          {initials}
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={[
            'fixed lg:sticky top-0 left-0 z-30 h-screen w-[260px] shrink-0 bg-white border-r border-[#d2d2d7]/50',
            'transition-transform duration-300 ease-out',
            open ? 'translate-x-0' : '-translate-x-full',
            'lg:translate-x-0',
          ].join(' ')}
        >
          <div className="h-16 px-5 flex items-center gap-2.5 border-b border-[#d2d2d7]/50">
            <div className="w-8 h-8 rounded-[8px] bg-[#0071e3] flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-white" />
            </div>
            <div className="leading-tight">
              <div className="text-[14px] font-medium tracking-[-0.01em]">Edullent</div>
              <div className="text-[11px] text-[#86868b]">Admin Console</div>
            </div>
          </div>

          <nav className="p-3 space-y-0.5">
            {NAV.map((item) => {
              const badge = badgeFor(item.badgeKey);
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    [
                      'flex items-center justify-between gap-3 px-3 py-2.5 rounded-[10px] text-[13.5px] transition',
                      isActive
                        ? 'bg-[#0071e3]/10 text-[#0071e3] font-medium'
                        : 'text-[#424245] hover:bg-[#f5f5f7]',
                    ].join(' ')
                  }
                >
                  <span className="flex items-center gap-3">
                    {item.icon}
                    <span>{item.label}</span>
                  </span>
                  {badge !== null && (
                    <span className="bg-[#ff3b30] text-white text-[10.5px] font-medium px-1.5 min-w-[18px] h-[18px] rounded-full inline-flex items-center justify-center">
                      {badge}
                    </span>
                  )}
                </NavLink>
              );
            })}
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-[#d2d2d7]/50 bg-white">
            <div className="px-2 py-2 flex items-center gap-3">
              {user?.photoURL ? (
                <img
                  src={user.photoURL}
                  alt=""
                  referrerPolicy="no-referrer"
                  className="w-9 h-9 rounded-full object-cover"
                />
              ) : (
                <div className="w-9 h-9 rounded-full bg-[#0071e3]/10 flex items-center justify-center text-[#0071e3] text-[12px] font-medium">
                  {initials}
                </div>
              )}
              <div className="min-w-0 flex-1">
                <div className="text-[12.5px] font-medium truncate">
                  {user?.displayName || 'Admin'}
                </div>
                <div className="text-[11px] text-[#86868b] truncate">
                  {role === 'superadmin' ? 'Superadmin' : 'Admin'} · {user?.email}
                </div>
              </div>
            </div>
            <button
              onClick={handleSignOut}
              className="mt-2 w-full flex items-center justify-center gap-2 py-2 rounded-[10px] border border-[#d2d2d7]/70 text-[#1d1d1f] text-[13px] hover:bg-[#f5f5f7] transition"
            >
              <LogOut className="w-3.5 h-3.5" />
              Sign out
            </button>
          </div>
        </aside>

        {/* Backdrop on mobile */}
        {open && (
          <div
            className="fixed inset-0 z-20 bg-black/30 lg:hidden"
            onClick={() => setOpen(false)}
          />
        )}

        {/* Main */}
        <main className="flex-1 min-w-0">
          <div className="hidden lg:flex h-16 px-8 items-center justify-between border-b border-[#d2d2d7]/50 bg-white/60 backdrop-blur sticky top-0 z-10">
            <div className="text-[13px] text-[#86868b]">Edullent platform · Admin Console</div>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-[#0071e3] hover:underline flex items-center gap-1.5"
            >
              View public site <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="p-5 lg:p-8 max-w-[1280px] mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
