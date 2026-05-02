/**
 * Parent Dashboard iPad shell — bezel + top header + sectioned floating sidebar
 * + main content slot. Used by every per-page parent iPad mockup so the sidebar
 * & header look consistent across all of them.
 *
 * Pass `activePath` to highlight the matching nav item.
 */

import type { ReactNode } from 'react';
import IPadBezel from './IPadBezel';

const NAVY_DEEP = '#0B1F3A';
const BLUE = '#0055FF';

interface NavItem { label: string; icon: string; path: string; }
interface NavSection { title: string; items: NavItem[]; }

const NAV_SECTIONS: NavSection[] = [
  { title: 'Overview', items: [{ label: 'Dashboard', icon: 'dashboard', path: '/' }] },
  {
    title: "Child's Progress",
    items: [
      { label: 'Performance', icon: 'chart', path: '/performance' },
      { label: 'Concept Strength', icon: 'brain', path: '/concept-strengths' },
      { label: 'AI Practice', icon: 'spark', path: '/ai-practice' },
      { label: 'Behaviour', icon: 'star', path: '/behaviour' },
    ],
  },
  {
    title: 'School',
    items: [
      { label: 'Attendance', icon: 'check', path: '/attendance' },
      { label: 'Syllabus', icon: 'lib', path: '/syllabus' },
      { label: 'Tests & Exams', icon: 'cap', path: '/tests' },
      { label: 'Fees', icon: 'rupee', path: '/fees' },
    ],
  },
  {
    title: 'Communication',
    items: [
      { label: 'Teacher Notes', icon: 'msg', path: '/notes' },
      { label: 'School Messages', icon: 'school', path: '/messages' },
    ],
  },
];

interface Props { activePath: string; children: ReactNode; }

const ParentIPadShell = ({ activePath, children }: Props) => (
  <IPadBezel>
    {/* Top header */}
    <div style={{
      height: 38, background: '#fff', borderBottom: '1px solid #e2e8f0',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 12px', flexShrink: 0,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
        <div style={{
          width: 22, height: 22, borderRadius: 6, background: NAVY_DEEP,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff',
        }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21s-7-4.5-9.5-9C-1 6.5 5 1 12 6c7-5 13 .5 9.5 6-2.5 4.5-9.5 9-9.5 9z" />
          </svg>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span style={{ fontSize: 8, fontWeight: 600, color: NAVY_DEEP, letterSpacing: '0.02em' }}>Edullent High</span>
          <span style={{ fontSize: 6, fontWeight: 500, color: '#94a3b8', letterSpacing: '0.16em', marginTop: 2, textTransform: 'uppercase' as const }}>Parent Portal</span>
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
          <span style={{ fontSize: 8, fontWeight: 500, color: '#0f172a' }}>Priya Sharma</span>
          <span style={{ fontSize: 6, fontWeight: 500, color: '#64748b', letterSpacing: '0.06em', marginTop: 1, textTransform: 'uppercase' as const }}>Parent</span>
        </div>
        <div style={{
          width: 22, height: 22, borderRadius: '50%',
          background: 'linear-gradient(135deg, #FFAA00, #FFD700)', color: NAVY_DEEP,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 8, fontWeight: 600,
        }}>PS</div>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
          <polyline points="16 17 21 12 16 7" />
          <line x1="21" y1="12" x2="9" y2="12" />
        </svg>
      </div>
    </div>

    {/* Body — natural-height row so the bezel grows with the children
        rather than scrolling internally and hiding content on desktop. */}
    <div style={{ display: 'flex', alignItems: 'stretch' }}>
      {/* Sidebar */}
      <div style={{ width: 152, flexShrink: 0, padding: '6px 0 6px 6px', alignSelf: 'stretch' }}>
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
                        background: active ? NAVY_DEEP : 'transparent',
                        color: active ? '#fff' : '#64748b',
                        fontSize: 7, fontWeight: 500,
                        transform: active ? 'scale(1.02)' : 'scale(1)',
                        boxShadow: active ? '0 3px 7px rgba(11,31,58,0.18)' : 'none',
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

      {/* Main slot — height grows with children */}
      <div style={{ flex: 1, minWidth: 0 }}>{children}</div>
    </div>
  </IPadBezel>
);

const NavIcon = ({ name, active }: { name: string; active: boolean }) => {
  const stroke = active ? '#fff' : '#94a3b8';
  const props = { width: 9, height: 9, viewBox: '0 0 24 24', fill: 'none', stroke, strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  switch (name) {
    case 'dashboard': return <svg {...props}><rect x="3" y="3" width="7" height="9" rx="1.5" /><rect x="14" y="3" width="7" height="5" rx="1.5" /><rect x="14" y="12" width="7" height="9" rx="1.5" /><rect x="3" y="16" width="7" height="5" rx="1.5" /></svg>;
    case 'chart': return <svg {...props}><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>;
    case 'brain': return <svg {...props}><path d="M9 2a3 3 0 00-3 3v.5A3.5 3.5 0 003 9v3a3 3 0 003 3v3a3 3 0 003 3h6a3 3 0 003-3v-3a3 3 0 003-3V9a3.5 3.5 0 00-3-3.5V5a3 3 0 00-3-3z" /></svg>;
    case 'spark': return <svg {...props}><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" /></svg>;
    case 'star': return <svg {...props}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" /></svg>;
    case 'check': return <svg {...props}><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" /></svg>;
    case 'lib': return <svg {...props}><line x1="4" y1="4" x2="4" y2="20" /><line x1="9" y1="4" x2="9" y2="20" /><line x1="14" y1="4" x2="14" y2="20" /><line x1="19" y1="4" x2="19" y2="20" /></svg>;
    case 'cap': return <svg {...props}><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>;
    case 'rupee': return <svg {...props}><path d="M6 4h12M6 9h12M9 14l5 6M14 4c2 0 4 2 4 5s-2 5-4 5h-8" /></svg>;
    case 'msg': return <svg {...props}><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>;
    case 'school': return <svg {...props}><path d="M3 11l9-8 9 8" /><path d="M5 10v10h14V10" /></svg>;
    case 'gear': return <svg {...props}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z" /></svg>;
    default: return <svg {...props}><circle cx="12" cy="12" r="9" /></svg>;
  }
};

void BLUE;

export default ParentIPadShell;