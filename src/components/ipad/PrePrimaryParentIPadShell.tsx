/**
 * Pre-Primary Parent Dashboard iPad shell — mirrors the live
 * pre-primary-parent-dashboard sidebar (Today / Child / School / Growth /
 * Personal). Warm peach `#FB923C` accent on top of Edullent navy `#1e3272`
 * to signal early-years parent surface.
 *
 * Pass `activePath` to highlight the matching nav item.
 */

import { ReactNode } from 'react';
import IPadBezel from './IPadBezel';

const NAVY = '#1e3272';
const PEACH = '#FB923C';
const SOFT = '#5B5066';

interface NavItem { label: string; icon: string; path: string }
interface NavSection { title: string; items: NavItem[] }

const NAV_SECTIONS: NavSection[] = [
  { title: 'Overview', items: [{ label: 'Today', icon: 'home', path: '/today' }] },
  {
    title: 'My Child',
    items: [
      { label: 'Child Profile', icon: 'kid',    path: '/child' },
      { label: 'Daily Feed',    icon: 'feed',   path: '/feed' },
      { label: 'Gallery',       icon: 'camera', path: '/gallery' },
    ],
  },
  {
    title: 'School',
    items: [
      { label: 'Notices',  icon: 'mega', path: '/announcements' },
      { label: 'Calendar', icon: 'cal',  path: '/calendar' },
    ],
  },
  {
    title: 'Growth',
    items: [
      { label: 'Milestones', icon: 'star',   path: '/milestones' },
      { label: 'Reports',    icon: 'report', path: '/reports' },
    ],
  },
  {
    title: 'Personal',
    items: [
      { label: 'Settings', icon: 'gear',  path: '/settings' },
      { label: 'Me',       icon: 'user',  path: '/me' },
    ],
  },
];

interface Props {
  activePath: string;
  children: ReactNode;
}

const PrePrimaryParentIPadShell = ({ activePath, children }: Props) => (
  <IPadBezel>
    {/* ── Top header ── */}
    <div
      style={{
        height: 42,
        background: '#fff',
        borderBottom: '1px solid #e9d8c4',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 12px',
        flexShrink: 0,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
        <div
          style={{
            width: 24,
            height: 24,
            borderRadius: 8,
            background: `linear-gradient(135deg, ${PEACH}, #FB7B30)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 3px 8px rgba(251,146,60,0.35)',
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="#fff">
            <path d="M12 21s-7-4.5-9.5-9C-1 6.5 5 1 12 6c7-5 13 .5 9.5 6-2.5 4.5-9.5 9-9.5 9z" />
          </svg>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span className="font-mokoto" style={{ fontSize: 9, fontWeight: 500, color: NAVY, letterSpacing: '0.06em', textTransform: 'uppercase' as const }}>
            Edullent Pre
          </span>
          <span style={{ fontSize: 6, fontWeight: 500, color: '#94a3b8', letterSpacing: '0.18em', textTransform: 'uppercase' as const, marginTop: 2 }}>
            Parent Portal
          </span>
        </div>
      </div>

      {/* Active child switcher */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 5,
        padding: '3px 8px 3px 4px', borderRadius: 999,
        background: `linear-gradient(135deg, ${PEACH}1a, #FCE7F3)`,
        border: `0.5px solid ${PEACH}33`,
      }}>
        <div style={{
          width: 20, height: 20, borderRadius: '50%',
          background: `linear-gradient(135deg, ${PEACH}, #FB7B30)`,
          color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 8, fontWeight: 800,
          border: '1.5px solid #fff',
          boxShadow: `0 2px 5px ${PEACH}55`,
        }}>
          M
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span style={{ fontSize: 7.5, fontWeight: 800, color: NAVY, letterSpacing: '-0.1px' }}>Mira</span>
          <span style={{ fontSize: 5.5, fontWeight: 700, color: PEACH, letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginTop: 1 }}>UKG · Bumblebee</span>
        </div>
        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={NAVY} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ position: 'relative', padding: 3 }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 01-3.46 0" />
          </svg>
          <span style={{ position: 'absolute', top: 3, right: 3, width: 4, height: 4, background: PEACH, borderRadius: '50%' }} />
        </div>
        <div
          style={{
            width: 22,
            height: 22,
            borderRadius: '50%',
            background: NAVY,
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 8,
            fontWeight: 700,
            boxShadow: '0 2px 5px rgba(30,50,114,0.28)',
          }}
        >
          SP
        </div>
      </div>
    </div>

    {/* ── Body: sidebar + content ── */}
    <div style={{ flex: 1, display: 'flex', overflow: 'hidden', minHeight: 0 }}>
      {/* SIDEBAR */}
      <div style={{ width: 138, flexShrink: 0, padding: '6px 0 6px 6px' }}>
        <div
          style={{
            width: '100%',
            height: '100%',
            background: '#fff',
            borderRadius: 11,
            boxShadow: '0 6px 18px rgba(251,146,60,0.08), 0 1px 3px rgba(15,23,42,0.04)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          <div style={{ flex: 1, padding: '8px 5px', overflowY: 'auto', minHeight: 0 }}>
            {NAV_SECTIONS.map((sec, sIdx) => (
              <div key={sec.title} style={{ marginTop: sIdx === 0 ? 0 : 6 }}>
                <div
                  style={{
                    padding: '0 7px',
                    marginBottom: 3,
                    fontSize: 6,
                    fontWeight: 500,
                    color: '#94a3b8',
                    textTransform: 'uppercase' as const,
                    letterSpacing: '0.18em',
                  }}
                >
                  {sec.title}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {sec.items.map(item => {
                    const active = item.path === activePath;
                    return (
                      <div
                        key={item.path}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 6,
                          padding: '4px 7px',
                          borderRadius: 6,
                          background: active ? `linear-gradient(135deg, ${PEACH}, #FB7B30)` : 'transparent',
                          color: active ? '#fff' : '#64748b',
                          fontSize: 8,
                          fontWeight: 500,
                          letterSpacing: '-0.05px',
                          transform: active ? 'scale(1.02)' : 'scale(1)',
                          boxShadow: active ? `0 3px 7px ${PEACH}55` : 'none',
                        }}
                      >
                        <NavIcon name={item.icon} active={active} />
                        <span>{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div style={{ padding: 7, borderTop: '1px solid #fef3e9' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '5px 7px',
                borderRadius: 6,
                color: '#f43f5e',
                fontSize: 8,
                fontWeight: 500,
              }}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
              Sign Out
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT SLOT */}
      <div style={{ flex: 1, overflowY: 'auto', minWidth: 0, color: SOFT }}>
        {children}
      </div>
    </div>
  </IPadBezel>
);

const NavIcon = ({ name, active }: { name: string; active: boolean }) => {
  const stroke = active ? '#fff' : '#94a3b8';
  const props = {
    width: 10,
    height: 10,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke,
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  switch (name) {
    case 'home':
      return <svg {...props}><path d="M3 11l9-8 9 8" /><path d="M5 10v10h14V10" /></svg>;
    case 'kid':
      return <svg {...props}><circle cx="12" cy="7" r="4" /><path d="M5 21c0-3.5 3-6 7-6s7 2.5 7 6" /></svg>;
    case 'feed':
      return <svg {...props}><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></svg>;
    case 'camera':
      return <svg {...props}><path d="M3 7h4l2-3h6l2 3h4v12H3z" /><circle cx="12" cy="13" r="3.5" /></svg>;
    case 'mega':
      return <svg {...props}><path d="M3 11v2l11 5V6z" /><path d="M17 9v6" /><path d="M21 7v10" /></svg>;
    case 'cal':
      return <svg {...props}><rect x="3" y="5" width="18" height="16" rx="2" /><line x1="3" y1="10" x2="21" y2="10" /><line x1="8" y1="3" x2="8" y2="7" /><line x1="16" y1="3" x2="16" y2="7" /></svg>;
    case 'star':
      return <svg {...props}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" /></svg>;
    case 'report':
      return <svg {...props}><rect x="4" y="3" width="16" height="18" rx="2" /><line x1="8" y1="9" x2="16" y2="9" /><line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="13" y2="17" /></svg>;
    case 'gear':
      return <svg {...props}><circle cx="12" cy="12" r="3" /><path d="M19 12a7 7 0 00-.1-1.2l2-1.5-2-3.4-2.4.8a7 7 0 00-2-1.1L14 3h-4l-.5 2.6a7 7 0 00-2 1.1l-2.4-.8-2 3.4 2 1.5a7 7 0 000 2.4l-2 1.5 2 3.4 2.4-.8a7 7 0 002 1.1L10 21h4l.5-2.6a7 7 0 002-1.1l2.4.8 2-3.4-2-1.5c.07-.4.1-.8.1-1.2z" /></svg>;
    case 'user':
      return <svg {...props}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>;
    default:
      return <svg {...props}><circle cx="12" cy="12" r="9" /></svg>;
  }
};

export default PrePrimaryParentIPadShell;
