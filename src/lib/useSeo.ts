import { useEffect } from 'react';

interface SeoOptions {
  title: string;
  description?: string;
  canonical: string;
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
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

export const useSeo = ({
  title,
  description,
  canonical,
  ogImage,
  ogTitle,
  ogDescription,
}: SeoOptions) => {
  useEffect(() => {
    document.title = title;
    upsertLink('canonical', canonical);
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', ogTitle ?? title);
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonical);
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', ogTitle ?? title);
    const shareDescription = ogDescription ?? description;
    if (description) {
      upsertMeta('meta[name="description"]', 'name', 'description', description);
    }
    if (shareDescription) {
      upsertMeta('meta[property="og:description"]', 'property', 'og:description', shareDescription);
      upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', shareDescription);
    }
    if (ogImage) {
      upsertMeta('meta[property="og:image"]', 'property', 'og:image', ogImage);
      upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);
    }
  }, [title, description, canonical, ogImage, ogTitle, ogDescription]);
};
