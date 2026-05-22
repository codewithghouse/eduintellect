/**
 * Single source of truth for every public route on edullent.com.
 *
 * Used by:
 *  - <Breadcrumbs> to compose trails from path segments
 *  - scripts/build-sitemap.mjs to generate public/sitemap.xml
 *  - Internal cross-linking helpers (related sections, footer columns)
 *
 * Order in this file determines order in sitemap.xml.
 *
 * Conventions:
 *  - `path` always begins with `/` and never has a trailing slash
 *  - `priority` follows the Google sitemap convention (0.0–1.0)
 *  - `changefreq` is a hint, not a contract
 *  - `lastmod` ISO date; bump when content meaningfully changes
 */

export interface PublicRoute {
  path: string;
  title: string;
  breadcrumbLabel: string;
  priority: number;
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
  lastmod: string;
  group:
    | 'core'
    | 'role-product'
    | 'category'
    | 'entity'
    | 'comparison'
    | 'role-marketing'
    | 'search-capture'
    | 'insights'
    | 'research'
    | 'customers'
    | 'use-cases'
    | 'feature'
    | 'legal'
    | 'utility';
}

const TODAY = '2026-05-22';

export const PUBLIC_ROUTES: PublicRoute[] = [
  // ── Core ────────────────────────────────────────────────────────────
  { path: '/', title: 'Home', breadcrumbLabel: 'Home', priority: 1.0, changefreq: 'weekly', lastmod: TODAY, group: 'core' },

  // ── Role-product dashboards (preview / interactive) ───────────────────
  { path: '/owner',     title: 'Owner Dashboard',     breadcrumbLabel: 'Owner Dashboard',     priority: 0.85, changefreq: 'monthly', lastmod: TODAY, group: 'role-product' },
  { path: '/principal', title: 'Principal Dashboard', breadcrumbLabel: 'Principal Dashboard', priority: 0.85, changefreq: 'monthly', lastmod: TODAY, group: 'role-product' },
  { path: '/teacher',   title: 'Teacher Dashboard',   breadcrumbLabel: 'Teacher Dashboard',   priority: 0.85, changefreq: 'monthly', lastmod: TODAY, group: 'role-product' },
  { path: '/parent',    title: 'Parent Dashboard',    breadcrumbLabel: 'Parent Dashboard',    priority: 0.85, changefreq: 'monthly', lastmod: TODAY, group: 'role-product' },

  // ── Category foundation ─────────────────────────────────────────────
  { path: '/education-intelligence-platform', title: 'Education Intelligence Platform', breadcrumbLabel: 'Education Intelligence Platform', priority: 0.95, changefreq: 'monthly', lastmod: TODAY, group: 'category' },

  // ── Entity ──────────────────────────────────────────────────────────
  { path: '/what-is-edullent',                title: 'What is Edullent',                breadcrumbLabel: 'What is Edullent',                priority: 0.9,  changefreq: 'monthly', lastmod: TODAY, group: 'entity' },
  { path: '/about/edullent',                  title: 'About Edullent',                  breadcrumbLabel: 'About',                           priority: 0.85, changefreq: 'monthly', lastmod: TODAY, group: 'entity' },

  // ── Comparison ──────────────────────────────────────────────────────
  { path: '/school-erp-vs-education-intelligence', title: 'School ERP vs Education Intelligence', breadcrumbLabel: 'School ERP vs Education Intelligence', priority: 0.85, changefreq: 'monthly', lastmod: TODAY, group: 'comparison' },

  // ── Role marketing pages ────────────────────────────────────────────
  { path: '/for-school-owners', title: 'Edullent for School Owners', breadcrumbLabel: 'For School Owners', priority: 0.8, changefreq: 'monthly', lastmod: TODAY, group: 'role-marketing' },
  { path: '/for-principals',    title: 'Edullent for Principals',    breadcrumbLabel: 'For Principals',    priority: 0.8, changefreq: 'monthly', lastmod: TODAY, group: 'role-marketing' },
  { path: '/for-teachers',      title: 'Edullent for Teachers',      breadcrumbLabel: 'For Teachers',      priority: 0.8, changefreq: 'monthly', lastmod: TODAY, group: 'role-marketing' },
  { path: '/for-parents',       title: 'Edullent for Parents',       breadcrumbLabel: 'For Parents',       priority: 0.8, changefreq: 'monthly', lastmod: TODAY, group: 'role-marketing' },

  // ── Search capture ──────────────────────────────────────────────────
  { path: '/best-school-management-software-india', title: 'Best School Management Software in India',  breadcrumbLabel: 'Best School Management Software in India', priority: 0.75, changefreq: 'monthly', lastmod: TODAY, group: 'search-capture' },
  { path: '/advanced-school-software',              title: 'Advanced School Software',                  breadcrumbLabel: 'Advanced School Software',                  priority: 0.7,  changefreq: 'monthly', lastmod: TODAY, group: 'search-capture' },
  { path: '/modern-school-operating-system',        title: 'Modern School Operating System',            breadcrumbLabel: 'Modern School Operating System',            priority: 0.7,  changefreq: 'monthly', lastmod: TODAY, group: 'search-capture' },
  { path: '/future-of-school-management',           title: 'The Future of School Management',           breadcrumbLabel: 'Future of School Management',               priority: 0.7,  changefreq: 'monthly', lastmod: TODAY, group: 'search-capture' },
  { path: '/smart-school-platform',                 title: 'Smart School Platform',                     breadcrumbLabel: 'Smart School Platform',                     priority: 0.7,  changefreq: 'monthly', lastmod: TODAY, group: 'search-capture' },
  { path: '/education-operating-system',            title: 'Education Operating System',                breadcrumbLabel: 'Education Operating System',                priority: 0.7,  changefreq: 'monthly', lastmod: TODAY, group: 'search-capture' },
  { path: '/school-analytics-platform',             title: 'School Analytics Platform',                 breadcrumbLabel: 'School Analytics Platform',                 priority: 0.7,  changefreq: 'monthly', lastmod: TODAY, group: 'search-capture' },
  { path: '/student-intelligence-platform',         title: 'Student Intelligence Platform',             breadcrumbLabel: 'Student Intelligence Platform',             priority: 0.7,  changefreq: 'monthly', lastmod: TODAY, group: 'search-capture' },

  // ── Contact + features + legal (existing, included for completeness) ──
  { path: '/contact', title: 'Contact', breadcrumbLabel: 'Contact', priority: 0.7, changefreq: 'monthly', lastmod: TODAY, group: 'core' },
  { path: '/features/ai-monitoring', title: 'AI Monitoring',     breadcrumbLabel: 'AI Monitoring',     priority: 0.6, changefreq: 'monthly', lastmod: TODAY, group: 'feature' },
  { path: '/features/attendance',    title: 'Digital Attendance',breadcrumbLabel: 'Digital Attendance',priority: 0.6, changefreq: 'monthly', lastmod: TODAY, group: 'feature' },
  { path: '/features/reports',       title: 'Report Generation', breadcrumbLabel: 'Report Generation', priority: 0.6, changefreq: 'monthly', lastmod: TODAY, group: 'feature' },
  { path: '/features/fees',          title: 'Fee Management',    breadcrumbLabel: 'Fee Management',    priority: 0.6, changefreq: 'monthly', lastmod: TODAY, group: 'feature' },
  { path: '/legal/privacy', title: 'Privacy Policy',  breadcrumbLabel: 'Privacy Policy',  priority: 0.3, changefreq: 'yearly', lastmod: TODAY, group: 'legal' },
  { path: '/legal/terms',   title: 'Terms of Use',    breadcrumbLabel: 'Terms of Use',    priority: 0.3, changefreq: 'yearly', lastmod: TODAY, group: 'legal' },
  { path: '/legal',         title: 'Legal',           breadcrumbLabel: 'Legal',           priority: 0.3, changefreq: 'yearly', lastmod: TODAY, group: 'legal' },
];

export const ROUTE_BY_PATH = new Map(PUBLIC_ROUTES.map((r) => [r.path, r]));

export const findRoute = (path: string): PublicRoute | undefined => ROUTE_BY_PATH.get(path);
