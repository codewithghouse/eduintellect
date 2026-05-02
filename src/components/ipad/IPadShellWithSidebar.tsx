/**
 * Teacher Dashboard iPad shell — bezel + top header + sectioned floating sidebar
 * + main content slot. Used by every per-page iPad mockup so the sidebar &
 * header look consistent across all of them.
 *
 * Pass `activePath` to highlight the matching nav item.
 */

import type { ReactNode } from 'react';
import IPadBezel from './IPadBezel';

const NAVY = '#1e3272';
const NAVY_DEEP = '#001040';
const TT3 = '#5070B0';

interface NavItem {
  label: string;
  icon: string;
  path: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const NAV_SECTIONS: NavSection[] = [
  { title: 'Overview', items: [{ label: 'Dashboard', icon: 'dashboard', path: '/' }] },
  {
    title: 'Classroom',
    items: [
      { label: 'My Classes', icon: 'book', path: '/my-classes' },
      { label: 'Students', icon: 'users', path: '/students' },
      { label: 'Attendance', icon: 'check', path: '/attendance' },
      { label: 'Behaviour', icon: 'star', path: '/student-behaviour' },
    ],
  },
  {
    title: 'Academics',
    items: [
      { label: 'Assignments', icon: 'file', path: '/assignments' },
      { label: 'Tests & Exams', icon: 'cap', path: '/tests' },
      { label: 'Exam Generator', icon: 'sheet', path: '/exam' },
      { label: 'Gradebook', icon: 'mark', path: '/gradebook' },
      { label: 'Concept Mastery', icon: 'brain', path: '/concept-mastery' },
    ],
  },
  {
    title: 'AI & Insights',
    items: [
      { label: 'Lesson Planner', icon: 'spark', path: '/lesson-planner' },
      { label: 'Summarize', icon: 'scroll', path: '/summarize-lesson' },
      { label: 'Risks & Alerts', icon: 'alert', path: '/risks-alerts' },
      { label: 'Leaderboard', icon: 'trophy', path: '/leaderboard' },
      { label: 'Performance', icon: 'chart', path: '/leaderboard/teachers' },
    ],
  },
];

interface Props {
  /** which sidebar item should be highlighted */
  activePath: string;
  /** main content slot (right of sidebar, below header) */
  children: ReactNode;
}

const IPadShellWithSidebar = ({ activePath, children }: Props) => (
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
            borderRadius: 7,
            background: NAVY,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
            <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
          </svg>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span style={{ fontSize: 9, fontWeight: 500, color: NAVY, letterSpacing: '0.06em', textTransform: 'uppercase' as const }}>
            Edullent High
          </span>
          <span style={{ fontSize: 6, fontWeight: 500, color: '#94a3b8', letterSpacing: '0.18em', textTransform: 'uppercase' as const, marginTop: 2 }}>
            English
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
          <span style={{ fontSize: 8, fontWeight: 500, color: '#0f172a' }}>Aryan Reddy</span>
          <span style={{ fontSize: 6, fontWeight: 500, color: '#64748b', textTransform: 'uppercase' as const, letterSpacing: '0.06em', marginTop: 1 }}>Teacher</span>
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
            boxShadow: '0 2px 5px rgba(30,50,114,0.25)',
          }}
        >
          AR
        </div>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
          <polyline points="16 17 21 12 16 7" />
          <line x1="21" y1="12" x2="9" y2="12" />
        </svg>
      </div>
    </div>

    {/* ── Body — natural-height row so the bezel grows with the children
        rather than scrolling internally and hiding content on desktop. ── */}
    <div style={{ display: 'flex', alignItems: 'stretch' }}>
      {/* SIDEBAR */}
      <div style={{ width: 150, flexShrink: 0, padding: '6px 0 6px 6px', alignSelf: 'stretch' }}>
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
              <div key={sec.title} style={{ marginTop: sIdx === 0 ? 0 : 8 }}>
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
                          boxShadow: active ? '0 3px 7px rgba(30,50,114,0.18)' : 'none',
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

      {/* MAIN CONTENT SLOT — height grows with children */}
      <div style={{ flex: 1, minWidth: 0, color: TT3 /* default text color */ }}>
        {children}
      </div>
    </div>
  </IPadBezel>
);

// ───── Inline icon helpers ─────
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
    case 'book':
      return <svg {...props}><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></svg>;
    case 'users':
      return <svg {...props}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /></svg>;
    case 'check':
      return <svg {...props}><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" /></svg>;
    case 'star':
      return <svg {...props}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" /></svg>;
    case 'file':
      return <svg {...props}><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>;
    case 'cap':
      return <svg {...props}><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>;
    case 'sheet':
      return <svg {...props}><rect x="4" y="3" width="16" height="18" rx="2" /><line x1="8" y1="9" x2="16" y2="9" /><line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="13" y2="17" /></svg>;
    case 'mark':
      return <svg {...props}><path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" /></svg>;
    case 'brain':
      return <svg {...props}><path d="M9 2a3 3 0 00-3 3v.5A3.5 3.5 0 003 9v3a3 3 0 003 3v3a3 3 0 003 3h6a3 3 0 003-3v-3a3 3 0 003-3V9a3.5 3.5 0 00-3-3.5V5a3 3 0 00-3-3z" /></svg>;
    case 'spark':
      return <svg {...props}><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" /></svg>;
    case 'scroll':
      return <svg {...props}><path d="M8 21h8a4 4 0 004-4V8a3 3 0 00-3-3H7a3 3 0 00-3 3v9a4 4 0 004 4z" /><line x1="8" y1="9" x2="16" y2="9" /><line x1="8" y1="13" x2="14" y2="13" /></svg>;
    case 'alert':
      return <svg {...props}><path d="M12 2L2 21h20L12 2z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12" y2="17" /></svg>;
    case 'trophy':
      return <svg {...props}><path d="M6 9H4.5a2.5 2.5 0 010-5H6" /><path d="M18 9h1.5a2.5 2.5 0 000-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17a2 2 0 002 2v0a2 2 0 002-2v-2.34" /><path d="M18 2H6v7a6 6 0 0012 0V2z" /></svg>;
    case 'chart':
      return <svg {...props}><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>;
    default:
      return <svg {...props}><circle cx="12" cy="12" r="9" /></svg>;
  }
};

void NAVY_DEEP; // (kept for future hero gradients in pages)

export default IPadShellWithSidebar;
