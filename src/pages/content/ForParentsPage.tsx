import { Sparkles, MessageSquare, TrendingUp, Lightbulb, Compass, Calendar } from 'lucide-react';
import Seo from '../../components/seo/Seo';
import ContentPage from '../../components/content/ContentPage';
import PageHero from '../../components/content/PageHero';
import Section from '../../components/content/Section';
import FeatureGrid from '../../components/content/FeatureGrid';
import FaqSection from '../../components/content/FaqSection';
import RelatedLinks from '../../components/content/RelatedLinks';
import CtaBand from '../../components/content/CtaBand';
import {
  composeSchemaGraph,
  organizationSchema,
  webPageSchema,
  faqPageSchema,
  breadcrumbSchema,
} from '../../components/seo/schemas';

const URL = 'https://edullent.com/for-parents';
const BRAND = '#d97706';

const FAQS = [
  {
    question: 'What does the Weekly AI Summary include?',
    answer:
      'A single Monday-morning view of the child\'s academic slope, attendance, behaviour, concept strengths, recommended practice, and any teacher notes. Replaces ten WhatsApp messages and three teacher calls.',
  },
  {
    question: 'How does the AI Doubt Solver work?',
    answer:
      'A child takes a photo of a homework problem or types a question. The AI explains the concept, shows the steps, and offers a similar practice question — supervised by the school&apos;s curriculum context.',
  },
  {
    question: 'Is the AI Tutor a replacement for school teaching?',
    answer:
      'No — it complements. The AI Concept Explainer reinforces what was taught in class, fills small gaps, and gives the child confidence between lessons. The teacher remains the primary educator.',
  },
  {
    question: 'How do I message my child\'s teacher?',
    answer:
      'Direct Teacher Chat is built in — one thread per child per teacher, with the child\'s recent context already in view. No separate apps, no WhatsApp group fatigue.',
  },
];

const CAPABILITIES = [
  { title: 'Weekly AI Summary', description: 'One screen, every Monday. Marks slope, attendance, behaviour, concept strengths, practice plan.', icon: Sparkles, brand: BRAND },
  { title: 'AI Doubt Solver', description: 'Photo or text — AI explains, shows steps, gives a similar practice.', icon: Lightbulb, brand: BRAND },
  { title: 'AI Concept Explainer', description: 'A patient tutor for whatever was covered in class — reinforced at home.', icon: Compass, brand: BRAND },
  { title: 'Performance + attendance', description: 'Real-time picture of academic and attendance trends — across terms.', icon: TrendingUp, brand: BRAND },
  { title: 'Direct teacher chat', description: 'One thread per teacher per child. Context already attached.', icon: MessageSquare, brand: BRAND },
  { title: 'Career direction projection', description: 'Long-view: where the child\'s strengths point, with practice plans to support.', icon: Calendar, brand: BRAND },
];

const RELATED = [
  { to: '/parent', title: 'Parent Dashboard preview', description: 'Walk through the actual dashboard.' },
  { to: '/use-cases/communication', title: 'Parent communication use case', description: 'Why Parent Connect replaces the class WhatsApp group.' },
  { to: '/customers', title: 'Customer stories', description: 'How Pilot School C ran the parent-facing layer with zero child-facing UI.' },
  { to: '/insights/why-student-analytics-is-the-new-attendance', title: 'Why student analytics is the new attendance', description: 'How modern schools track what really matters.' },
];

const ForParentsPage = () => (
  <>
    <Seo
      title="Edullent for Parents — Stay Close to Every Milestone"
      description="Weekly AI summary, doubt solver, concept explainer, direct teacher chat. The parent view of a modern school — clear, calm, and always current."
      canonical={URL}
      ogTitle="Edullent for Parents"
      ogDescription="Stay close to every milestone — in real time."
      schema={composeSchemaGraph([
        organizationSchema(),
        webPageSchema({
          url: URL,
          name: 'Edullent for Parents',
          description: 'The parent view of an education intelligence platform.',
        }),
        faqPageSchema(FAQS),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'For Parents', path: '/for-parents' },
        ]),
      ])}
    />
    <ContentPage
      breadcrumbs={[
        { name: 'Home', path: '/' },
        { name: 'For Parents', path: '/for-parents' },
      ]}
    >
      <PageHero
        eyebrow="For Parents"
        title="Stay close to every milestone."
        subtitle="Edullent gives parents the same intelligence layer the school runs on — scoped to their child."
        description="A weekly AI summary. A patient AI tutor. A doubt solver in your pocket. One thread per teacher with context attached. The parent app modern Indian schools have been waiting for."
        primaryCta={{ to: '/contact', label: 'Talk to your school' }}
        secondaryCta={{ to: '/parent', label: 'Preview the dashboard' }}
        brand={BRAND}
      />

      <Section eyebrow="What you see" title="Six capabilities. One screen.">
        <FeatureGrid items={CAPABILITIES} columns={3} />
      </Section>

      <Section eyebrow="A week in the life" title="What changes for a parent on Edullent.">
        <div className="bg-white border border-[#e5e5ea] rounded-[20px] p-7 md:p-10 max-w-[920px]">
          <div className="space-y-5 text-[16px] md:text-[17px] text-[#424245] leading-[1.65]">
            <p><strong className="text-[#1d1d1f]">Monday 8 AM:</strong> Weekly AI Summary arrives. Two-minute read. You know your child&apos;s week before the school day starts.</p>
            <p><strong className="text-[#1d1d1f]">Tuesday evening:</strong> Child stuck on a maths problem. Photo into AI Doubt Solver. Step-by-step explanation. Similar practice generated.</p>
            <p><strong className="text-[#1d1d1f]">Thursday:</strong> Quick chat with the science teacher — context already attached. No WhatsApp group, no "kaun teacher hain?", no lost message.</p>
            <p><strong className="text-[#1d1d1f]">Saturday:</strong> Career projection updates. Concept strengths now point clearly toward two streams. Practice plan suggests reinforcement.</p>
            <p className="font-medium" style={{ color: BRAND }}>No anxiety. No surprises. No "I should have known earlier."</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="FAQs" title="Common parent questions.">
        <FaqSection faqs={FAQS} brand={BRAND} />
      </Section>

      <RelatedLinks links={RELATED} brand={BRAND} />

      <CtaBand
        title="Ask your school about Edullent."
        description="If your school doesn&apos;t use Edullent yet, send them this page. Or book a demo and we&apos;ll reach out to your institution."
        primaryCta={{ to: '/contact', label: 'Book a demo' }}
        secondaryCta={{ to: '/parent', label: 'Preview' }}
      />
    </ContentPage>
  </>
);

export default ForParentsPage;
