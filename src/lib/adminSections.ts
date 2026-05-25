// Canonical list of admin-panel sections. The `key` is what we store in
// /admins/{uid}.sections[] and check in the sidebar + route guards.
//
// Superadmin always has access to all sections — `sections` only gates
// role='admin' accounts.
export const ADMIN_SECTIONS = [
  { key: 'overview', label: 'Overview' },
  { key: 'schools',  label: 'Schools'  },
  { key: 'requests', label: 'Requests' },
  { key: 'info',     label: 'Info'     },
  { key: 'admins',   label: 'Admins'   },
  { key: 'articles', label: 'Articles' },
] as const;

export type AdminSectionKey = (typeof ADMIN_SECTIONS)[number]['key'];

export const ADMIN_SECTION_KEYS: AdminSectionKey[] =
  ADMIN_SECTIONS.map((s) => s.key);
