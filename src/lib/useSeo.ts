import { useEffect } from 'react';

interface SeoOptions {
  title: string;
  description?: string;
  canonical: string;
  ogImage?: string;
}

const upsertMeta = (selector: string, attrName: string, attrValue: string, content: string) => {
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

export const useSeo = ({ title, description, canonical, ogImage }: SeoOptions) => {
  useEffect(() => {
    document.title = title;
    upsertLink('canonical', canonical);
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', title);
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonical);
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    if (description) {
      upsertMeta('meta[name="description"]', 'name', 'description', description);
      upsertMeta('meta[property="og:description"]', 'property', 'og:description', description);
      upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    }
    if (ogImage) {
      upsertMeta('meta[property="og:image"]', 'property', 'og:image', ogImage);
      upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);
    }
  }, [title, description, canonical, ogImage]);
};
