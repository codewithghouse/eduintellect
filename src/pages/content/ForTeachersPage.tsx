import { Sparkles, BookOpen, CheckCircle2, MessageSquare, Calendar, Brain } from 'lucide-react';
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

const URL = 'https://edullent.com/for-teachers';
const BRAND = '#059669';

const FAQS = [
  {
    question: 'How does AI Exam Generator work?',
    answer:
      'You pick subject, class, chapter, blueprint and difficulty. The generator produces a question paper in seconds — editable, exportable, with an auto-correction layer for objective sections and assistance for subjective grading.',
  },
  {
    question: 'Does the AI Lesson Planner replace teacher prep?',
    answer:
      'No — it accelerates it. The planner produces a structured lesson outline based on the chapter, syllabus and class context. Teachers edit, personalise, and use. Prep time drops 60-70%.',
  },
  {
    question: 'How does AI Auto-Correction work for subjective answers?',
    answer:
      'For objective questions, full auto-correction with rubric. For subjective answers, the AI proposes a score and reasoning — the teacher confirms or overrides. The result is faster grading without sacrificing judgment.',
  },
  {
    question: 'Does Edullent help teachers communicate with parents?',
    answer:
      'Yes — direct teacher-parent chat is built in, with context (latest marks, attendance, behaviour) at the top of every conversation. No more separate WhatsApp groups, no lost messages.',
  },
];

const CAPABILITIES = [
  { title: 'AI Exam Paper Generator', description: 'Question papers built to your blueprint and difficulty — in seconds.', icon: Sparkles, brand: BRAND },
  { title: 'AI Lesson Planner', description: 'Structured lesson outlines for any chapter — editable and exportable.', icon: BookOpen, brand: BRAND },
  { title: 'AI Auto-Correction', description: 'Objective: full auto. Subjective: AI-assisted with teacher confirmation.', icon: CheckCircle2, brand: BRAND },
  { title: 'Smart Gradebook', description: 'Every score, every term, every student — searchable and trend-aware.', icon: Brain, brand: BRAND },
  { title: 'Smart Attendance', description: 'Quick mark with bulk operations, auto-syncs to parent view and risk engine.', icon: Calendar, brand: BRAND },
  { title: 'Direct parent chat', description: 'One thread per student. Context attached. No WhatsApp chaos.', icon: MessageSquare, brand: BRAND },
];

const RELATED = [
  { to: '/teacher', title: 'Teacher Dashboard preview', description: 'Walk through the actual dashboard.' },
  { to: '/use-cases/attendance', title: 'Attendance use case', description: 'One-tap class attendance and what it triggers downstream.' },
  { to: '/use-cases/reporting', title: 'Reporting use case', description: 'No more re-typing marks into report templates.' },
  { to: '/insights/ai-in-school-administration', title: 'AI in school administration — practical, not hype', description: 'How AI actually changes a teacher\'s day.' },
];

const ForTeachersPage = () => (
  <>
    <Seo
      title="Edullent for Teachers — AI Tools that Give You Back Your Day"
      description="Less paperwork. More teaching. AI exam paper generator, lesson planner, auto-correction, smart gradebook, parent chat — the teaching workspace for modern classrooms."
      canonical={URL}
      ogTitle="Edullent for Teachers"
      ogDescription="Less paperwork. More teaching. AI tools that give you back your day."
      schema={composeSchemaGraph([
        organizationSchema(),
        webPageSchema({
          url: URL,
          name: 'Edullent for Teachers',
          description: 'AI toolkit for teachers — exam generation, lesson planning, auto-correction, gradebook.',
        }),
        faqPageSchema(FAQS),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'For Teachers', path: '/for-teachers' },
        ]),
      ])}
    />
    <ContentPage
      breadcrumbs={[
        { name: 'Home', path: '/' },
        { name: 'For Teachers', path: '/for-teachers' },
      ]}
    >
      <PageHero
        eyebrow="For Teachers"
        title="Less paperwork. More teaching."
        subtitle="Edullent's Teacher Dashboard packs AI into the day-to-day work that takes the most time — and gives the time back."
        description="Exam papers in seconds. Lesson outlines pre-drafted. Objective sections auto-corrected. A clean gradebook. One parent thread per student, with context. The teaching workspace, modernised."
        primaryCta={{ to: '/contact', label: 'Book a demo' }}
        secondaryCta={{ to: '/teacher', label: 'Preview the dashboard' }}
        brand={BRAND}
      />

      <Section eyebrow="What you get" title="The AI toolkit, built into the teaching workflow.">
        <FeatureGrid items={CAPABILITIES} columns={3} />
      </Section>

      <Section eyebrow="A day in the life" title="What changes for a teacher running their day on Edullent.">
        <div className="bg-white border border-[#e5e5ea] rounded-[20px] p-7 md:p-10 max-w-[920px]">
          <div className="space-y-5 text-[16px] md:text-[17px] text-[#424245] leading-[1.65]">
            <p><strong className="text-[#1d1d1f]">Morning prep:</strong> AI Lesson Planner has the day&apos;s outlines ready. Edit, personalise, take to class.</p>
            <p><strong className="text-[#1d1d1f]">Class time:</strong> Mark attendance in 15 seconds — auto-syncs to risk engine, parent view, principal&apos;s dashboard.</p>
            <p><strong className="text-[#1d1d1f]">After lunch:</strong> Test corrections. Objective auto-scored. Subjective AI-assisted — teacher confirms, scores publish to gradebook and parent app instantly.</p>
            <p><strong className="text-[#1d1d1f]">Evening:</strong> Three parent messages, each with context attached. Answered in five minutes, not fifty.</p>
            <p className="font-medium" style={{ color: BRAND }}>Two hours of paperwork compressed to thirty minutes. Two extra hours of teaching, or rest.</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="FAQs" title="Common teacher questions.">
        <FaqSection faqs={FAQS} brand={BRAND} />
      </Section>

      <RelatedLinks links={RELATED} brand={BRAND} />

      <CtaBand
        title="Take the paperwork off teaching."
        description="A 25-minute walkthrough of the Teacher Dashboard — exam generation, lesson planning, auto-correction, parent chat."
        primaryCta={{ to: '/contact', label: 'Book a demo' }}
        secondaryCta={{ to: '/teacher', label: 'Preview' }}
      />
    </ContentPage>
  </>
);

export default ForTeachersPage;
