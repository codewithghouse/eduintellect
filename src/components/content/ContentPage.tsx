import type { ReactNode } from 'react';
import Breadcrumbs, { type BreadcrumbItem } from '../seo/Breadcrumbs';

interface ContentPageProps {
  children: ReactNode;
  breadcrumbs?: BreadcrumbItem[];
  maxWidth?: number;
}

/**
 * Standard wrapper for every static content page.
 * Clears the fixed navbar, applies a consistent max-width, renders
 * a breadcrumb trail at the top.
 */
const ContentPage: React.FC<ContentPageProps> = ({ children, breadcrumbs, maxWidth = 1100 }) => (
  <div className="bg-[#fbfbfd] min-h-screen">
    <div className="pt-[80px] md:pt-[100px]" />
    <div className="mx-auto px-6 pb-24 md:pb-32" style={{ maxWidth }}>
      {breadcrumbs && breadcrumbs.length > 0 && <Breadcrumbs trail={breadcrumbs} />}
      {children}
    </div>
  </div>
);

export default ContentPage;
