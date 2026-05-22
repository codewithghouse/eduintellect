import { useEffect } from 'react';
import type { SchemaNode } from './schemas';

interface SeoProps {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  schema?: SchemaNode;
  noindex?: boolean;
}

const SCHEMA_ID = 'edullent-page-schema';

const upsertMeta = (
  selector: string,
  attrName: string,
  attrValue: string,
  content: string,
) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const upsertLink = (rel: string, href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

const upsertSchema = (schema: SchemaNode | undefined) => {
  const existing = document.getElementById(SCHEMA_ID);
  if (existing) existing.remove();
  if (!schema) return;
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = SCHEMA_ID;
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};

const Seo: React.FC<SeoProps> = ({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage = 'https://edullent.com/og-image.png',
  ogType = 'website',
  schema,
  noindex = false,
}) => {
  useEffect(() => {
    document.title = title;
    upsertLink('canonical', canonical);

    upsertMeta('meta[name="description"]', 'name', 'description', description);
    upsertMeta(
      'meta[name="robots"]',
      'name',
      'robots',
      noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1',
    );

    upsertMeta('meta[property="og:title"]', 'property', 'og:title', ogTitle ?? title);
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', ogDescription ?? description);
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonical);
    upsertMeta('meta[property="og:image"]', 'property', 'og:image', ogImage);
    upsertMeta('meta[property="og:type"]', 'property', 'og:type', ogType);

    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', ogTitle ?? title);
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', ogDescription ?? description);
    upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);

    upsertSchema(schema);
  }, [title, description, canonical, ogTitle, ogDescription, ogImage, ogType, schema, noindex]);

  return null;
};

export default Seo;
