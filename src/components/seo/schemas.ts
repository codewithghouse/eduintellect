/**
 * Typed builders for JSON-LD schema objects.
 *
 * Each builder returns a single Schema.org node. Compose multiple nodes
 * into an "@graph" via composeSchemaGraph() before passing to <Seo>.
 *
 * Edullent's canonical Organization node is exported as ORG_REF — every
 * other node references it via @id to avoid duplication and tell Google
 * "this is the same entity."
 */

export type SchemaNode = Record<string, unknown>;

const ORG_ID = 'https://edullent.com/#organization';
const WEBSITE_ID = 'https://edullent.com/#website';
const LOGO_URL = 'https://edullent.com/logo.png';
const SITE_URL = 'https://edullent.com';

export const ORG_REF = { '@id': ORG_ID };

export const organizationSchema = (): SchemaNode => ({
  '@type': 'Organization',
  '@id': ORG_ID,
  name: 'Edullent',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: LOGO_URL,
    width: 1024,
    height: 1024,
    caption: 'Edullent',
  },
});

export const websiteSchema = (): SchemaNode => ({
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: SITE_URL,
  name: 'Edullent',
  publisher: ORG_REF,
});

export const breadcrumbSchema = (
  trail: Array<{ name: string; path: string }>,
): SchemaNode => ({
  '@type': 'BreadcrumbList',
  itemListElement: trail.map((item, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    name: item.name,
    item: `${SITE_URL}${item.path === '/' ? '' : item.path}`,
  })),
});

export const webPageSchema = ({
  url,
  name,
  description,
}: {
  url: string;
  name: string;
  description: string;
}): SchemaNode => ({
  '@type': 'WebPage',
  '@id': `${url}#webpage`,
  url,
  name,
  description,
  isPartOf: { '@id': WEBSITE_ID },
  about: ORG_REF,
});

export const collectionPageSchema = ({
  url,
  name,
  description,
}: {
  url: string;
  name: string;
  description: string;
}): SchemaNode => ({
  '@type': 'CollectionPage',
  '@id': `${url}#collection`,
  url,
  name,
  description,
  isPartOf: { '@id': WEBSITE_ID },
  about: ORG_REF,
});

export const itemListSchema = (
  items: Array<{ name: string; url: string }>,
): SchemaNode => ({
  '@type': 'ItemList',
  itemListElement: items.map((item, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    name: item.name,
    url: item.url,
  })),
});

export const faqPageSchema = (
  faqs: Array<{ question: string; answer: string }>,
): SchemaNode => ({
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

export const articleSchema = ({
  url,
  headline,
  description,
  datePublished,
  dateModified,
  authorName,
  image,
}: {
  url: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  image?: string;
}): SchemaNode => ({
  '@type': 'Article',
  '@id': `${url}#article`,
  headline,
  description,
  url,
  datePublished,
  dateModified: dateModified ?? datePublished,
  author: {
    '@type': authorName ? 'Person' : 'Organization',
    name: authorName ?? 'Edullent',
    ...(authorName ? {} : { '@id': ORG_ID }),
  },
  publisher: ORG_REF,
  image: image ?? `${SITE_URL}/og-image.png`,
  mainEntityOfPage: { '@type': 'WebPage', '@id': url },
});

export const productSchema = ({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}): SchemaNode => ({
  '@type': 'Product',
  name,
  description,
  url,
  brand: ORG_REF,
  image: `${SITE_URL}/og-image.png`,
});

export const softwareApplicationSchema = ({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}): SchemaNode => ({
  '@type': 'SoftwareApplication',
  name,
  description,
  url,
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Web, iOS, Android',
  image: `${SITE_URL}/logo.png`,
  publisher: ORG_REF,
});

export const serviceSchema = ({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}): SchemaNode => ({
  '@type': 'Service',
  name,
  description,
  url,
  provider: ORG_REF,
  areaServed: { '@type': 'Country', name: 'India' },
  serviceType: 'Education Intelligence Platform',
});

export const composeSchemaGraph = (nodes: SchemaNode[]): SchemaNode => ({
  '@context': 'https://schema.org',
  '@graph': nodes,
});
