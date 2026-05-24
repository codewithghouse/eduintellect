/**
 * Pre-Primary Teacher Dashboard iPad shell — mirrors the live
 * pre-primary-teacher-dashboard sidebar (Daily / Care & Routine /
 * Observations / Communication / Class). Edullent navy `#1e3272`.
 *
 * Used by every per-page pre-primary teacher mockup so the chrome stays
 * consistent across the keynote acts.
 *
 * Pass `activePath` to highlight the matching nav item.
 */

import { ReactNode } from 'react';
import IPadBezel from './IPadBezel';

const NAVY = '#1e3272';
const SOFT = '#5070B0';

interface NavItem { label: string; icon: string; path: string }
interface NavSection { title: string; items: NavItem[] }

const NAV_SECTIONS: NavSection[] = [
  { title: 'Overview', items: [{ label: 'Home', icon: 'dashboard', path: '/' }] },
  {
    title: 'Daily',
    items: [
      { label: 'Attendance', icon: 'check', path: '/attendance' },
      { label: 'Roster', icon: 'users', path: '/roster' },
      { label: 'Activities', icon: 'sparkles', path: '/daily-activities' },
    ],
  },
  {
    title: 'Care & Routine',
    items: [
      { label: 'Diaper Log', icon: 'leaf', path: '/diaper' },
      { label: 'Meals & Nap', icon: 'cookie', path: '/meals-nap' },
      { label: 'Pickup', icon: 'shield', path: '/pickup' },
    ],
  },
  {
    title: 'Observations',
    items: [
      { label: 'Behaviour', icon: 'heart', path: '/behavior' },
      { label: 'Milestones', icon: 'star', path: '/milestones' },
      { label: 'Incidents', icon: 'alert', path: '/incidents' },
    ],
  },
  {
    title: 'Communication',
    items: [
      { label: 'Notices', icon: 'mega', path: '/notices' },
      { label: 'Photos', icon: 'camera', path: '/photos' },
      { label: 'Events', icon: 'cal', path: '/events' },
    ],
  },
  {
    title: 'Class',
    items: [
      { label: 'Safety', icon: 'medkit', path: '/safety' },
      { label: 'Settings', icon: 'gear', path: '/class-settings' },
    ],
  },
];

interface Props {
  activePath: string;
  children: ReactNode;
}

const PrePrimaryTeacherIPadShell = ({ activePath, children }: Props) => (
  <IPadBezel>
    {/* ── Top header ── */}
    <div
      style={{
        height: 44,
        background: '#fff',
        borderBottom: '1px solid #e2e8f0',
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
            background: `linear-gradient(135deg, ${NAVY}, #2a4498)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 3px 8px rgba(30,50,114,0.32)',
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 4l9 5-9 5-9-5 9-5z" />
            <path d="M21 14v-5l-9 5-9-5v5" />
            <path d="M12 14v6" />
          </svg>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span className="font-mokoto" style={{ fontSize: 9, fontWeight: 500, color: NAVY, letterSpacing: '0.06em', textTransform: 'uppercase' as const }}>
            Edullent Pre
          </span>
          <span style={{ fontSize: 6, fontWeight: 500, color: '#94a3b8', letterSpacing: '0.18em', textTransform: 'uppercase' as const, marginTop: 2 }}>
            Bumblebee · UKG
          </span>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ position: 'relative', padding: 3 }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 01-3.46 0" />
          </svg>
          <span style={{ position: 'absolute', top: 3, right: 3, width: 4, height: 4, background: '#ef4444', borderRadius: '50%' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', lineHeight: 1 }}>
          <span style={{ fontSize: 8, fontWeight: 500, color: '#0f172a' }}>Priya Menon</span>
          <span style={{ fontSize: 6, fontWeight: 500, color: '#64748b', textTransform: 'uppercase' as const, letterSpacing: '0.06em', marginTop: 1 }}>Class Teacher</span>
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
            fontWeight: 500,
            boxShadow: '0 2px 5px rgba(30,50,114,0.28)',
          }}
        >
          PM
        </div>
      </div>
    </div>

    {/* ── Body: sidebar + content ── */}
    <div style={{ flex: 1, display: 'flex', overflow: 'hidden', minHeight: 0 }}>
      {/* SIDEBAR */}
      <div style={{ width: 150, flexShrink: 0, padding: '6px 0 6px 6px' }}>
        <div
          style={{
            width: '100%',
            height: '100%',
            background: '#fff',
            borderRadius: 11,
            boxShadow: '0 6px 18px rgba(15,23,42,0.06), 0 1px 3px rgba(15,23,42,0.04)',
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
                          background: active ? NAVY : 'transparent',
                          color: active ? '#fff' : '#64748b',
                          fontSize: 8,
                          fontWeight: 500,
                          letterSpacing: '-0.05px',
                          transform: active ? 'scale(1.02)' : 'scale(1)',
                          boxShadow: active ? '0 3px 7px rgba(30,50,114,0.22)' : 'none',
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

          <div style={{ padding: 7, borderTop: '1px solid #f1f5f9' }}>
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
    case 'dashboard':
      return <svg {...props}><rect x="3" y="3" width="7" height="9" rx="1.5" /><rect x="14" y="3" width="7" height="5" rx="1.5" /><rect x="14" y="12" width="7" height="9" rx="1.5" /><rect x="3" y="16" width="7" height="5" rx="1.5" /></svg>;
    case 'check':
      return <svg {...props}><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" /></svg>;
    case 'users':
      return <svg {...props}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /></svg>;
    case 'sparkles':
      return <svg {...props}><path d="M12 3l1.6 4.2L18 9l-4.4 1.8L12 15l-1.6-4.2L6 9l4.4-1.8z" /><path d="M19 17l.7 1.8L21.5 19l-1.8.7L19 21l-.7-1.3L16.5 19l1.8-.2z" /></svg>;
    case 'leaf':
      return <svg {...props}><path d="M11 20a8 8 0 008-8V4h-8a8 8 0 100 16z" /><path d="M2 22c4-6 7-9 11-12" /></svg>;
    case 'cookie':
      return <svg {...props}><circle cx="12" cy="12" r="9" /><circle cx="9" cy="10" r="0.6" fill="currentColor" /><circle cx="14" cy="9" r="0.6" fill="currentColor" /><circle cx="13" cy="14" r="0.6" fill="currentColor" /><circle cx="8" cy="14" r="0.6" fill="currentColor" /></svg>;
    case 'shield':
      return <svg {...props}><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z" /></svg>;
    case 'heart':
      return <svg {...props}><path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 00-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 000-7.8z" /></svg>;
    case 'star':
      return <svg {...props}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" /></svg>;
    case 'alert':
      return <svg {...props}><path d="M12 2L2 21h20L12 2z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12" y2="17" /></svg>;
    case 'mega':
      return <svg {...props}><path d="M3 11v2l11 5V6z" /><path d="M17 9v6" /><path d="M21 7v10" /></svg>;
    case 'camera':
      return <svg {...props}><path d="M3 7h4l2-3h6l2 3h4v12H3z" /><circle cx="12" cy="13" r="3.5" /></svg>;
    case 'cal':
      return <svg {...props}><rect x="3" y="5" width="18" height="16" rx="2" /><line x1="3" y1="10" x2="21" y2="10" /><line x1="8" y1="3" x2="8" y2="7" /><line x1="16" y1="3" x2="16" y2="7" /></svg>;
    case 'medkit':
      return <svg {...props}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V4h8v3" /><line x1="12" y1="11" x2="12" y2="17" /><line x1="9" y1="14" x2="15" y2="14" /></svg>;
    case 'gear':
      return <svg {...props}><circle cx="12" cy="12" r="3" /><path d="M19 12a7 7 0 00-.1-1.2l2-1.5-2-3.4-2.4.8a7 7 0 00-2-1.1L14 3h-4l-.5 2.6a7 7 0 00-2 1.1l-2.4-.8-2 3.4 2 1.5a7 7 0 000 2.4l-2 1.5 2 3.4 2.4-.8a7 7 0 002 1.1L10 21h4l.5-2.6a7 7 0 002-1.1l2.4.8 2-3.4-2-1.5c.07-.4.1-.8.1-1.2z" /></svg>;
    default:
      return <svg {...props}><circle cx="12" cy="12" r="9" /></svg>;
  }
};

export default PrePrimaryTeacherIPadShell;
