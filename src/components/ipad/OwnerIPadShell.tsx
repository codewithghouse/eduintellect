/**
 * Owner Dashboard iPad shell — bezel + top header + sectioned floating
 * sidebar + main content slot. Owner-specific nav (mirrors the real
 * owner-dashboard's AppLayout sidebar).
 */

import { ReactNode } from 'react';
import IPadBezel from './IPadBezel';

const NAVY = '#001040';

interface NavItem { label: string; icon: string; path: string; }
interface NavSection { title: string; items: NavItem[]; }

const NAV_SECTIONS: NavSection[] = [
  { title: 'Overview', items: [{ label: 'Dashboard', icon: 'dashboard', path: '/' }] },
  { title: 'Students', items: [
    { label: 'Students Intelligence', icon: 'users', path: '/students' },
    { label: 'AI Risk Predictor', icon: 'brain', path: '/ai-predictor' },
  ]},
  { title: 'Academics', items: [
    { label: 'Academics Overview', icon: 'book', path: '/academics' },
    { label: 'Fee Structure', icon: 'sheet', path: '/fee-structure' },
  ]},
  { title: 'Staff', items: [
    { label: 'Teachers Directory', icon: 'list', path: '/teachers-directory' },
    { label: 'Teacher Performance', icon: 'cap', path: '/teachers' },
    { label: 'Teacher Leaderboard', icon: 'trophy', path: '/teacher-leaderboard' },
    { label: 'Principal Management', icon: 'usercog', path: '/principals' },
    { label: 'DEO Management', icon: 'shield', path: '/deo' },
  ]},
  { title: 'Operations', items: [
    { label: 'Branches Comparison', icon: 'branch', path: '/branches' },
    { label: 'Branch Leaderboard', icon: 'award', path: '/branch-leaderboard' },
    { label: 'Finance & Fees', icon: 'rupee', path: '/finance' },
    { label: 'Risks & Alerts', icon: 'alert', path: '/risks' },
  ]},
  { title: 'Reports', items: [
    { label: 'Reports Center', icon: 'file', path: '/reports' },
    { label: 'Activity Log', icon: 'activity', path: '/audit' },
  ]},
];

interface Props { activePath: string; children: ReactNode; }

const OwnerIPadShell = ({ activePath, children }: Props) => (
  <IPadBezel>
    {/* Top header */}
    <div style={{
      height: 40, background: '#fff', borderBottom: '1px solid #e2e8f0',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 12px', flexShrink: 0,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
        <div style={{
          width: 22, height: 22, borderRadius: 6, background: NAVY,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 7, fontWeight: 600, color: '#fff', letterSpacing: '0.04em',
        }}>EDLT</div>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span style={{ fontSize: 9, fontWeight: 600, color: NAVY, letterSpacing: '0.04em' }}>EDULLENT</span>
          <span style={{ fontSize: 6, fontWeight: 500, color: '#94a3b8', letterSpacing: '0.18em', marginTop: 2, textTransform: 'uppercase' as const }}>Group</span>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ position: 'relative', padding: 3 }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 01-3.46 0" />
          </svg>
          <span style={{ position: 'absolute', top: 3, right: 3, width: 4, height: 4, background: '#ef4444', borderRadius: '50%' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', lineHeight: 1 }}>
          <span style={{ fontSize: 8, fontWeight: 500, color: '#0f172a' }}>Sanjay Choudhary</span>
          <span style={{ fontSize: 6, fontWeight: 500, color: '#64748b', letterSpacing: '0.06em', marginTop: 1, textTransform: 'uppercase' as const }}>Owner</span>
        </div>
        <div style={{
          width: 22, height: 22, borderRadius: '50%', background: NAVY, color: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 8, fontWeight: 500,
        }}>SC</div>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
          <polyline points="16 17 21 12 16 7" />
          <line x1="21" y1="12" x2="9" y2="12" />
        </svg>
      </div>
    </div>

    {/* Body */}
    <div style={{ flex: 1, display: 'flex', overflow: 'hidden', minHeight: 0 }}>
      {/* Sidebar */}
      <div style={{ width: 152, flexShrink: 0, padding: '6px 0 6px 6px' }}>
        <div style={{
          width: '100%', height: '100%', background: '#fff', borderRadius: 11,
          boxShadow: '0 6px 18px rgba(15,23,42,0.06), 0 1px 3px rgba(15,23,42,0.04)',
          display: 'flex', flexDirection: 'column', overflow: 'hidden',
        }}>
          <div style={{ flex: 1, padding: '8px 5px', overflowY: 'auto', minHeight: 0 }}>
            {NAV_SECTIONS.map((sec, sIdx) => (
              <div key={sec.title} style={{ marginTop: sIdx === 0 ? 0 : 7 }}>
                <div style={{
                  padding: '0 7px', marginBottom: 3, fontSize: 6, fontWeight: 500,
                  color: '#94a3b8', textTransform: 'uppercase' as const, letterSpacing: '0.18em',
                }}>{sec.title}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {sec.items.map(item => {
                    const active = item.path === activePath;
                    return (
                      <div key={item.path} style={{
                        display: 'flex', alignItems: 'center', gap: 6,
                        padding: '4px 7px', borderRadius: 6,
                        background: active ? NAVY : 'transparent',
                        color: active ? '#fff' : '#64748b',
                        fontSize: 7, fontWeight: 500,
                        transform: active ? 'scale(1.02)' : 'scale(1)',
                        boxShadow: active ? '0 3px 7px rgba(0,16,64,0.18)' : 'none',
                      }}>
                        <NavIcon name={item.icon} active={active} />
                        <span>{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          <div style={{ padding: 7, borderTop: '1px solid #f1f5f9' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 6,
              padding: '5px 7px', borderRadius: 6,
              color: '#64748b', fontSize: 7, fontWeight: 500,
            }}>
              <NavIcon name="gear" active={false} />
              Settings
            </div>
          </div>
        </div>
      </div>

      {/* Main slot */}
      <div style={{ flex: 1, overflowY: 'auto', minWidth: 0 }}>{children}</div>
    </div>
  </IPadBezel>
);

const NavIcon = ({ name, active }: { name: string; active: boolean }) => {
  const stroke = active ? '#fff' : '#94a3b8';
  const props = { width: 9, height: 9, viewBox: '0 0 24 24', fill: 'none', stroke, strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  switch (name) {
    case 'dashboard': return <svg {...props}><rect x="3" y="3" width="7" height="9" rx="1.5" /><rect x="14" y="3" width="7" height="5" rx="1.5" /><rect x="14" y="12" width="7" height="9" rx="1.5" /><rect x="3" y="16" width="7" height="5" rx="1.5" /></svg>;
    case 'users': return <svg {...props}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>;
    case 'brain': return <svg {...props}><path d="M9 2a3 3 0 00-3 3v.5A3.5 3.5 0 003 9v3a3 3 0 003 3v3a3 3 0 003 3h6a3 3 0 003-3v-3a3 3 0 003-3V9a3.5 3.5 0 00-3-3.5V5a3 3 0 00-3-3z" /></svg>;
    case 'book': return <svg {...props}><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></svg>;
    case 'sheet': return <svg {...props}><rect x="4" y="3" width="16" height="18" rx="2" /><line x1="8" y1="9" x2="16" y2="9" /><line x1="8" y1="13" x2="16" y2="13" /></svg>;
    case 'list': return <svg {...props}><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>;
    case 'cap': return <svg {...props}><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>;
    case 'trophy': return <svg {...props}><path d="M6 9H4.5a2.5 2.5 0 010-5H6" /><path d="M18 9h1.5a2.5 2.5 0 000-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17a2 2 0 002 2v0a2 2 0 002-2v-2.34" /><path d="M18 2H6v7a6 6 0 0012 0V2z" /></svg>;
    case 'usercog': return <svg {...props}><circle cx="9" cy="7" r="4" /><path d="M3 21v-2a4 4 0 014-4h4" /><circle cx="17" cy="17" r="3" /></svg>;
    case 'shield': return <svg {...props}><path d="M12 2L4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6z" /></svg>;
    case 'branch': return <svg {...props}><line x1="6" y1="3" x2="6" y2="15" /><circle cx="18" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M18 9a9 9 0 01-9 9" /></svg>;
    case 'award': return <svg {...props}><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>;
    case 'rupee': return <svg {...props}><path d="M6 4h12M6 9h12M9 14l5 6M14 4c2 0 4 2 4 5s-2 5-4 5h-8" /></svg>;
    case 'alert': return <svg {...props}><path d="M12 2L2 21h20L12 2z" /><line x1="12" y1="9" x2="12" y2="13" /></svg>;
    case 'file': return <svg {...props}><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>;
    case 'activity': return <svg {...props}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>;
    case 'gear': return <svg {...props}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z" /></svg>;
    default: return <svg {...props}><circle cx="12" cy="12" r="9" /></svg>;
  }
};

export default OwnerIPadShell;
