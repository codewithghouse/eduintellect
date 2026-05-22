import Seo from '../../../components/seo/Seo';
import ContentPage from '../../../components/content/ContentPage';
import PageHero from '../../../components/content/PageHero';
import Section from '../../../components/content/Section';
import FeatureGrid, { type FeatureItem } from '../../../components/content/FeatureGrid';
import FaqSection, { type Faq } from '../../../components/content/FaqSection';
import RelatedLinks, { type RelatedLink } from '../../../components/content/RelatedLinks';
import CtaBand from '../../../components/content/CtaBand';
import {
  composeSchemaGraph,
  organizationSchema,
  webPageSchema,
  faqPageSchema,
  breadcrumbSchema,
} from '../../../components/seo/schemas';

export interface SearchCaptureContent {
  path: string;
  breadcrumbLabel: string;
  seoTitle: string;
  seoDescription: string;
  ogTitle: string;
  ogDescription: string;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
  };
  sections: Array<{
    eyebrow?: string;
    title: string;
    subtitle?: string;
    body?: string[];
    features?: FeatureItem[];
  }>;
  faqs: Faq[];
  related: RelatedLink[];
  ctaTitle: string;
  ctaDescription: string;
}

const SearchCaptureLayout: React.FC<{ content: SearchCaptureContent }> = ({ content }) => {
  const url = `https://edullent.com${content.path}`;
  const trail = [
    { name: 'Home', path: '/' },
    { name: content.breadcrumbLabel, path: content.path },
  ];

  return (
    <>
      <Seo
        title={content.seoTitle}
        description={content.seoDescription}
        canonical={url}
        ogTitle={content.ogTitle}
        ogDescription={content.ogDescription}
        schema={composeSchemaGraph([
          organizationSchema(),
          webPageSchema({
            url,
            name: content.seoTitle,
            description: content.seoDescription,
          }),
          faqPageSchema(content.faqs),
          breadcrumbSchema(trail),
        ])}
      />
      <ContentPage breadcrumbs={trail}>
        <PageHero
          eyebrow={content.hero.eyebrow}
          title={content.hero.title}
          subtitle={content.hero.subtitle}
          description={content.hero.description}
          primaryCta={{ to: '/contact', label: 'Book a demo' }}
          secondaryCta={{ to: '/education-intelligence-platform', label: 'Explore the platform' }}
        />

        {content.sections.map((section, idx) => (
          <Section
            key={section.title + idx}
            eyebrow={section.eyebrow}
            title={section.title}
            subtitle={section.subtitle}
          >
            {section.body && (
              <div className="bg-white border border-[#e5e5ea] rounded-[20px] p-7 md:p-10 max-w-[920px] space-y-4 text-[16px] md:text-[17px] text-[#424245] leading-[1.65]">
                {section.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            )}
            {section.features && <FeatureGrid items={section.features} columns={3} />}
          </Section>
        ))}

        <Section eyebrow="FAQs" title="Common questions.">
          <FaqSection faqs={content.faqs} />
        </Section>

        <RelatedLinks links={content.related} />

        <CtaBand
          title={content.ctaTitle}
          description={content.ctaDescription}
          primaryCta={{ to: '/contact', label: 'Book a demo' }}
          secondaryCta={{ to: '/education-intelligence-platform', label: 'Explore the platform' }}
        />
      </ContentPage>
    </>
  );
};

export default SearchCaptureLayout;
