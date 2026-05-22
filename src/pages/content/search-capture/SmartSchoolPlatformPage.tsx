import { Brain, Sparkles, Activity, GitBranch } from 'lucide-react';
import SearchCaptureLayout from './SearchCaptureLayout';

const SmartSchoolPlatformPage = () => (
  <SearchCaptureLayout
    content={{
      path: '/smart-school-platform',
      breadcrumbLabel: 'Smart School Platform',
      seoTitle: 'Smart School Platform for Modern Institutions — Edullent',
      seoDescription:
        '"Smart" is not a feature list — it is whether the platform actually makes the school operate better. See what makes a school platform genuinely smart.',
      ogTitle: 'Smart School Platform',
      ogDescription: 'What makes a school platform genuinely smart in 2026.',
      hero: {
        eyebrow: 'The smart layer',
        title: 'A smart school platform is one that the school actually gets smarter on.',
        subtitle: '"Smart" is not a feature list. It is an outcome.',
        description:
          'Many platforms call themselves "smart" because they have AI features. But smart is whether attendance improves, whether at-risk students get caught earlier, whether teachers spend less time on paperwork. The platform is smart only if the school becomes smarter.',
      },
      sections: [
        {
          eyebrow: 'Four genuine markers',
          title: 'What separates "smart marketing" from a smart platform.',
          features: [
            { title: 'Outcome metrics, not feature counts', description: 'Improvements in attendance, retention, results — measured.', icon: Activity, brand: '#0071e3' },
            { title: 'AI you actually use', description: 'Exam generation and risk prediction used by every teacher and principal — not novelty features.', icon: Sparkles, brand: '#0071e3' },
            { title: 'Decision interfaces', description: 'The home screen tells you what to do, not just what happened.', icon: Brain, brand: '#0071e3' },
            { title: 'Cross-role intelligence', description: 'What the parent sees informs what the teacher sees, informs what the principal sees.', icon: GitBranch, brand: '#0071e3' },
          ],
        },
        {
          eyebrow: 'Edullent\'s definition',
          title: 'Smart, defined as: a school that gets smarter every term.',
          body: [
            'Smart platforms produce smart institutions. The test is simple: is the school making better decisions in month six than in month one? Are at-risk interventions catching more students earlier? Are teachers more confident with their grading?',
            'Edullent is engineered around this test. Every dashboard, every AI capability, every workflow exists to move a school from "running operations" to "running intelligently."',
          ],
        },
      ],
      faqs: [
        {
          question: 'What is a smart school platform?',
          answer:
            'A platform whose intelligence layer measurably improves school outcomes — attendance, retention, results, parent satisfaction. Smart is an outcome of the platform, not a label on its marketing.',
        },
        {
          question: 'Does "smart" require AI?',
          answer:
            'In 2026, yes. Without AI, you cannot do per-student risk prediction, weekly summary generation, or composite teacher scoring at scale. AI is the floor for a genuinely smart platform.',
        },
        {
          question: 'How do you measure if a school platform is making the school smarter?',
          answer:
            'Quarterly: at-risk identification accuracy, intervention success rate, teacher hours saved on paperwork, parent engagement rate, retention rate at term boundary. Edullent surfaces all of these.',
        },
      ],
      related: [
        { to: '/education-intelligence-platform', title: 'Education Intelligence Platform', description: 'The smart category.' },
        { to: '/student-intelligence-platform', title: 'Student Intelligence Platform', description: 'The student-centric view.' },
        { to: '/school-analytics-platform', title: 'School Analytics Platform', description: 'Analytics that drives decisions.' },
        { to: '/advanced-school-software', title: 'Advanced School Software', description: 'What advanced really means.' },
      ],
      ctaTitle: 'Make your school measurably smarter.',
      ctaDescription: 'A 25-minute demo of the dashboards, the AI workflows, and the outcome metrics Edullent surfaces.',
    }}
  />
);

export default SmartSchoolPlatformPage;
