import { AlertTriangle, TrendingUp, Lightbulb, Compass } from 'lucide-react';
import SearchCaptureLayout from './SearchCaptureLayout';

const StudentIntelligencePlatformPage = () => (
  <SearchCaptureLayout
    content={{
      path: '/student-intelligence-platform',
      breadcrumbLabel: 'Student Intelligence Platform',
      seoTitle: 'Student Intelligence Platform — Per-Student Decision Layer',
      seoDescription:
        'A student intelligence platform predicts risk, surfaces strengths, and recommends interventions — per student, not per class. See how Edullent makes it operational.',
      ogTitle: 'Student Intelligence Platform',
      ogDescription: 'Per-student decision intelligence for modern schools.',
      hero: {
        eyebrow: 'Student-level intelligence',
        title: 'The student is the unit of intelligence.',
        subtitle: 'Not the class. Not the section. The individual learner.',
        description:
          'Aggregate dashboards tell you classroom averages. A Student Intelligence Platform tells you which individual student needs which intervention — across attendance, performance, behaviour, concepts and engagement.',
      },
      sections: [
        {
          eyebrow: 'What it does',
          title: 'Four per-student capabilities.',
          features: [
            { title: 'Risk score per student', description: 'Multi-signal AI scoring updated weekly. Critical / At-Risk / Watch / Recovered tiers.', icon: AlertTriangle, brand: '#0071e3' },
            { title: 'Performance trajectory', description: 'Slope over time across subjects, not just snapshots.', icon: TrendingUp, brand: '#0071e3' },
            { title: 'Concept strength mapping', description: 'Which topics the student is strong in, weak in, and what to practise next.', icon: Lightbulb, brand: '#0071e3' },
            { title: 'Career direction projection', description: 'Long-view: where the student&apos;s strengths point, with a recommended practice plan.', icon: Compass, brand: '#0071e3' },
          ],
        },
        {
          eyebrow: 'Why per-student matters',
          title: 'Aggregate metrics hide the students who need attention.',
          body: [
            'A class with a 78% average looks fine on a dashboard. Inside it: three students dropping silently from 80 to 55, one student stuck on basics, one quietly excelling without recognition. Aggregate dashboards miss all five stories.',
            'Per-student intelligence is the difference between knowing the average and knowing the student. Edullent builds at this granularity by design — the home screen shows individual students, not classroom averages.',
          ],
        },
      ],
      faqs: [
        {
          question: 'What is a Student Intelligence Platform?',
          answer:
            'A platform that builds and maintains a per-student intelligence profile — risk score, performance trajectory, concept strengths, behavioural signals — and uses it to drive interventions, communications and recommendations across the school.',
        },
        {
          question: 'How is this different from a Learning Management System (LMS)?',
          answer:
            'An LMS delivers content. A Student Intelligence Platform watches what happens with the student and decides what to do next. They complement each other — many schools use an LMS for delivery and Edullent for intelligence.',
        },
        {
          question: 'Does this require special hardware or sensors?',
          answer:
            'No. The intelligence is built from data the school already produces — attendance, marks, behaviour notes, parent communication, fees. No new hardware, no sensors, no biometric overhead.',
        },
      ],
      related: [
        { to: '/education-intelligence-platform', title: 'Education Intelligence Platform', description: 'The full intelligence layer.' },
        { to: '/school-analytics-platform', title: 'School Analytics Platform', description: 'Analytics at branch + class level.' },
        { to: '/insights/why-student-analytics-is-the-new-attendance', title: 'Why student analytics is the new attendance', description: 'How modern schools track what matters.' },
        { to: '/for-principals', title: 'For Principals', description: 'How student intelligence powers daily decisions.' },
      ],
      ctaTitle: 'Make the student the unit of intelligence.',
      ctaDescription: 'A 25-minute walkthrough of per-student risk prediction, concept mapping and intervention workflows.',
    }}
  />
);

export default StudentIntelligencePlatformPage;
