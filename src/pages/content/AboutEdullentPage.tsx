import { Target, Compass, Sparkles } from 'lucide-react';
import Seo from '../../components/seo/Seo';
import ContentPage from '../../components/content/ContentPage';
import PageHero from '../../components/content/PageHero';
import Section from '../../components/content/Section';
import FeatureGrid from '../../components/content/FeatureGrid';
import RelatedLinks from '../../components/content/RelatedLinks';
import CtaBand from '../../components/content/CtaBand';
import {
  composeSchemaGraph,
  organizationSchema,
  websiteSchema,
  webPageSchema,
  breadcrumbSchema,
} from '../../components/seo/schemas';

const URL = 'https://edullent.com/about/edullent';

const PRINCIPLES = [
  {
    title: 'Intelligence over reporting',
    description: 'A dashboard that shows what to do is worth more than ten that show what happened.',
    icon: Target,
    brand: '#0071e3',
  },
  {
    title: 'Every role, one brain',
    description: 'The owner, principal, teacher and parent see different views of the same connected intelligence.',
    icon: Compass,
    brand: '#003ECC',
  },
  {
    title: 'AI is the floor, not the ceiling',
    description: 'AI exam generation, risk prediction and weekly summaries are baseline, not premium add-ons.',
    icon: Sparkles,
    brand: '#7B3FF4',
  },
];

const RELATED = [
  { to: '/education-intelligence-platform', title: 'Education Intelligence Platform', description: 'The category Edullent operates in.' },
  { to: '/what-is-edullent', title: 'What is Edullent', description: 'The platform, the philosophy, who it serves.' },
  { to: '/contact', title: 'Talk to sales', description: 'A 25-minute demo of the four dashboards.' },
];

const AboutEdullentPage = () => (
  <>
    <Seo
      title="About Edullent — The Intelligence Layer for Modern Schools"
      description="Edullent is the intelligence layer between a school and its data. Learn about the team, mission and principles behind the platform powering modern institutions."
      canonical={URL}
      ogTitle="About Edullent"
      ogDescription="The team, mission and principles behind the intelligence layer for modern schools."
      schema={composeSchemaGraph([
        organizationSchema(),
        websiteSchema(),
        webPageSchema({
          url: URL,
          name: 'About Edullent',
          description: 'Team, mission and principles behind Edullent.',
        }),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about/edullent' },
        ]),
      ])}
    />
    <ContentPage
      breadcrumbs={[
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about/edullent' },
      ]}
    >
      <PageHero
        eyebrow="About"
        title="We build the intelligence layer for schools."
        subtitle="Edullent exists to move Indian institutions from running on registers to running on intelligence."
        description="We are an India-built education technology company focused on a single category: turning institution data into decisions. Our platform connects owners, principals, teachers and parents through one shared brain — and our work, in product and in the field, is centred on raising the bar for what modern school operations can look like."
      />

      <Section eyebrow="Mission" title="Schools should operate on intelligence — not on registers, not on guesses, not on yesterday&apos;s reports.">
        <div className="bg-white border border-[#e5e5ea] rounded-[20px] p-7 md:p-10 max-w-[920px]">
          <p className="text-[17px] md:text-[19px] text-[#424245] leading-[1.65] mb-5">
            Every school in India already generates enough data to predict outcomes weeks
            in advance — attendance trends, marks slopes, parent communication patterns,
            fee timing. What&apos;s missing is the layer that reads it.
          </p>
          <p className="text-[17px] md:text-[19px] text-[#424245] leading-[1.65]">
            Edullent is that layer. We are building a single intelligence platform that
            every institution — from a single-campus K-12 school to a 50-branch chain —
            can deploy in two weeks and operate forever.
          </p>
        </div>
      </Section>

      <Section eyebrow="Principles" title="What guides the product.">
        <FeatureGrid items={PRINCIPLES} columns={3} />
      </Section>

      <Section eyebrow="Contact" title="Talk to us.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          <div className="bg-white border border-[#e5e5ea] rounded-[16px] p-6">
            <div className="text-[12px] font-semibold tracking-[0.14em] uppercase text-[#0071e3] mb-2">Sales</div>
            <p className="text-[14px] text-[#424245] mb-3">Book a demo of the four dashboards.</p>
            <a href="https://wa.me/919100600458" target="_blank" rel="noopener noreferrer" className="text-[14px] font-medium text-[#1d1d1f] hover:text-[#0071e3]">
              +91 91006 00458 →
            </a>
          </div>
          <div className="bg-white border border-[#e5e5ea] rounded-[16px] p-6">
            <div className="text-[12px] font-semibold tracking-[0.14em] uppercase text-[#0071e3] mb-2">Support</div>
            <p className="text-[14px] text-[#424245] mb-3">For existing institutions on Edullent.</p>
            <a href="mailto:edullentofficial@gmail.com" className="text-[14px] font-medium text-[#1d1d1f] hover:text-[#0071e3]">
              edullentofficial@gmail.com →
            </a>
          </div>
          <div className="bg-white border border-[#e5e5ea] rounded-[16px] p-6">
            <div className="text-[12px] font-semibold tracking-[0.14em] uppercase text-[#0071e3] mb-2">Press &amp; partnerships</div>
            <p className="text-[14px] text-[#424245] mb-3">Education research and collaborations.</p>
            <a href="mailto:edullentofficial@gmail.com" className="text-[14px] font-medium text-[#1d1d1f] hover:text-[#0071e3]">
              edullentofficial@gmail.com →
            </a>
          </div>
        </div>
      </Section>

      <RelatedLinks links={RELATED} />

      <CtaBand
        title="Run your institution on intelligence."
        description="One platform. Four dashboards. One brain. See what changes."
        primaryCta={{ to: '/contact', label: 'Book a demo' }}
        secondaryCta={{ to: '/education-intelligence-platform', label: 'Explore the platform' }}
      />
    </ContentPage>
  </>
);

export default AboutEdullentPage;
