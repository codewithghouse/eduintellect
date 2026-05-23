import { useParams, Navigate } from 'react-router-dom';
import Seo from '../../../components/seo/Seo';
import ContentPage from '../../../components/content/ContentPage';
import PageHero from '../../../components/content/PageHero';
import Section from '../../../components/content/Section';
import FeatureGrid from '../../../components/content/FeatureGrid';
import ProblemSolutionFlow from '../../../components/content/ProblemSolutionFlow';
import FaqSection from '../../../components/content/FaqSection';
import RelatedLinks from '../../../components/content/RelatedLinks';
import CtaBand from '../../../components/content/CtaBand';
import { getUseCase } from '../../../content/useCases';
import {
  composeSchemaGraph,
  organizationSchema,
  webPageSchema,
  faqPageSchema,
  serviceSchema,
  breadcrumbSchema,
} from '../../../components/seo/schemas';

const BRAND = '#0071e3';

const UseCasePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const useCase = slug ? getUseCase(slug) : undefined;

  if (!useCase) {
    return <Navigate to="/use-cases" replace />;
  }

  const url = `https://edullent.com/use-cases/${useCase.slug}`;

  return (
    <>
      <Seo
        title={useCase.metaTitle}
        description={useCase.metaDescription}
        canonical={url}
        ogTitle={useCase.cardTitle}
        ogDescription={useCase.cardSummary}
        schema={composeSchemaGraph([
          organizationSchema(),
          webPageSchema({
            url,
            name: useCase.metaTitle,
            description: useCase.metaDescription,
          }),
          serviceSchema({
            name: `${useCase.cardTitle} — Edullent`,
            description: useCase.cardSummary,
            url,
          }),
          faqPageSchema(useCase.faqs),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Use Cases', path: '/use-cases' },
            { name: useCase.cardTitle, path: `/use-cases/${useCase.slug}` },
          ]),
        ])}
      />
      <ContentPage
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Use Cases', path: '/use-cases' },
          { name: useCase.cardTitle, path: `/use-cases/${useCase.slug}` },
        ]}
      >
        <PageHero
          eyebrow={useCase.eyebrow}
          title={useCase.heroTitle}
          subtitle={useCase.heroSubtitle}
          description={useCase.heroDescription}
          primaryCta={{ to: '/contact', label: 'Book a walkthrough' }}
          secondaryCta={{ to: '/use-cases', label: 'All use cases' }}
          brand={BRAND}
        />

        <Section eyebrow="The problem" title={useCase.problemTitle}>
          <div className="bg-white border border-[#e5e5ea] rounded-[20px] p-7 md:p-10 max-w-[920px]">
            <p className="text-[16px] md:text-[17px] text-[#424245] leading-[1.65]">
              {useCase.problemBody}
            </p>
          </div>
        </Section>

        <Section
          eyebrow="The flow"
          title="From signal to outcome."
          subtitle="Five steps. The same shape every Edullent use case follows."
        >
          <ProblemSolutionFlow steps={useCase.flow} brand={BRAND} />
        </Section>

        <Section
          eyebrow="What you get"
          title="Capabilities behind this use case."
          subtitle="Real product surfaces, shipping in the platform today."
        >
          <FeatureGrid
            items={useCase.capabilities.map((c) => ({
              title: c.title,
              description: c.description,
              icon: c.icon,
              brand: BRAND,
            }))}
            columns={3}
          />
        </Section>

        <Section eyebrow="Who it changes" title="Role-by-role impact.">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {useCase.roleImpact.map((r) => (
              <div
                key={r.role}
                className="bg-white border border-[#e5e5ea] rounded-[16px] p-5 md:p-6"
              >
                <div
                  className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-2"
                  style={{ color: BRAND }}
                >
                  {r.role}
                </div>
                <p className="text-[14.5px] md:text-[15px] text-[#1d1d1f] leading-[1.55]">
                  {r.benefit}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Outcomes" title="What the pilots produced.">
          <div className="bg-white border border-[#e5e5ea] rounded-[20px] p-7 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {useCase.outcomes.map((o) => (
                <div key={o.label}>
                  <div
                    className="text-[24px] md:text-[30px] font-medium tracking-[-0.015em] mb-1.5"
                    style={{ color: BRAND }}
                  >
                    {o.metric}
                  </div>
                  <p className="text-[13.5px] md:text-[14px] text-[#424245] leading-[1.5]">
                    {o.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-[12.5px] text-[#86868b] mt-6 leading-[1.5]">
              Outcomes measured at Pilot Schools A, B and C in their first term. Anonymized by
              partner request. See <a href="/customers" className="text-[#0071e3] hover:underline">customer stories</a>.
            </p>
          </div>
        </Section>

        <Section eyebrow="FAQs" title="Questions schools ask about this use case.">
          <FaqSection faqs={useCase.faqs} brand={BRAND} />
        </Section>

        <RelatedLinks links={useCase.related} brand={BRAND} />

        <CtaBand
          title={`See ${useCase.cardTitle.toLowerCase()} on Edullent.`}
          description="A 25-minute focused walkthrough on this one use case. Your school structure, your data shape, your real questions."
          primaryCta={{ to: '/contact', label: 'Book a walkthrough' }}
          secondaryCta={{ to: '/use-cases', label: 'Back to use cases' }}
        />
      </ContentPage>
    </>
  );
};

export default UseCasePage;
