import { Brain, GitBranch, AlertTriangle, Sparkles, BarChart3, Users } from 'lucide-react';
import SearchCaptureLayout from './SearchCaptureLayout';

const BestSchoolManagementSoftwareIndiaPage = () => (
  <SearchCaptureLayout
    content={{
      path: '/best-school-management-software-india',
      breadcrumbLabel: 'Best School Management Software in India',
      seoTitle: 'Best School Management Software in India 2026 — Edullent',
      seoDescription:
        'A modern evaluation framework for choosing the best school management software in India — and how Education Intelligence is changing what "best" means.',
      ogTitle: 'Best School Management Software in India',
      ogDescription: 'Evaluation framework + modern criteria + how Edullent fits.',
      hero: {
        eyebrow: 'Evaluation guide',
        title: 'Choosing the best school management software in India — in 2026.',
        subtitle: 'The criteria that mattered in 2018 are not the criteria that matter in 2026.',
        description:
          'Most "best school management software" comparisons still grade products on attendance modules and fee reports. This guide reframes evaluation around the capabilities modern Indian institutions actually need — and where Edullent fits in.',
      },
      sections: [
        {
          eyebrow: 'The modern checklist',
          title: 'Six capabilities to evaluate — beyond attendance and fees.',
          features: [
            { title: 'AI-driven risk prediction', description: 'Per-student risk scoring, not just per-class reports.', icon: AlertTriangle, brand: '#0071e3' },
            { title: 'Cross-branch intelligence', description: 'Side-by-side branch comparison, ranking, drill-down.', icon: GitBranch, brand: '#0071e3' },
            { title: 'Teacher performance scoring', description: 'Composite, multi-signal, ranked. Used for support, not surveillance.', icon: BarChart3, brand: '#0071e3' },
            { title: 'AI in the teacher workflow', description: 'Exam paper generation, lesson planning, auto-correction.', icon: Sparkles, brand: '#0071e3' },
            { title: 'Parent intelligence', description: 'Weekly AI summary, doubt solver, concept explainer — not just SMS alerts.', icon: Users, brand: '#0071e3' },
            { title: 'Decision intelligence', description: 'Home screen recommends the next action, not just shows the data.', icon: Brain, brand: '#0071e3' },
          ],
        },
        {
          eyebrow: 'What changed in 2024-2026',
          title: 'Why old comparisons are now misleading.',
          body: [
            'Until 2022, school software in India competed on coverage — how many modules, how many forms, how many reports. The race was completeness.',
            'After 2022, AI capabilities matured to the point where per-student prediction, AI grading, and decision recommendations became reliable in the Indian context. The race shifted from coverage to intelligence.',
            'A product that was "best in 2020" can now be technically capable but structurally outdated — built to record operations, not to inform decisions. Evaluating modern school software means looking past the module count to the intelligence layer.',
          ],
        },
        {
          eyebrow: 'Edullent\'s position',
          title: 'Why we exist in this category.',
          body: [
            'Edullent is built for the post-2022 reality. We do not compete on "we also have an attendance module." We compete on what the school does with the attendance data once captured.',
            'Owners get cross-branch intelligence. Principals get next-best-action. Teachers get AI tools that compress their workload. Parents get a weekly summary worth reading.',
            'If your evaluation criteria are still anchored to the 2018 checklist, every product looks similar. If they are anchored to 2026 reality, the gap becomes obvious.',
          ],
        },
      ],
      faqs: [
        {
          question: 'What features should "best school management software" in India have?',
          answer:
            'Beyond the basics (attendance, fees, marks, communication), modern criteria include AI-driven risk prediction, cross-branch intelligence, teacher performance scoring, AI in the teacher workflow (exam generation, auto-correction), parent intelligence (weekly summaries, doubt solver), and decision intelligence on the home screen.',
        },
        {
          question: 'Is cloud-based school management software better than on-premise?',
          answer:
            'For modern institutions, yes — cloud is the default. Multi-branch sync, real-time intelligence, automatic security updates, and parent app delivery all require cloud infrastructure. On-premise systems struggle with all four.',
        },
        {
          question: 'How much does school management software cost in India?',
          answer:
            'Pricing varies widely — from ₹50 per student per year for basic ERPs to ₹2,000+ for full education intelligence platforms with AI capabilities. Edullent offers transparent per-student pricing — contact sales for a quote scoped to your institution.',
        },
        {
          question: 'Can the same software work for K-12 and Pre-Primary?',
          answer:
            'It needs different workflows. Pre-Primary requires no child-facing app, parent-led engagement, and teacher-operated documentation. K-12 layers in student dashboards, AI tutoring, exam generation. Edullent ships both as integrated modules with shared infrastructure.',
        },
      ],
      related: [
        { to: '/education-intelligence-platform', title: 'Education Intelligence Platform', description: 'The category Edullent operates in.' },
        { to: '/school-erp-vs-education-intelligence', title: 'School ERP vs Education Intelligence', description: 'Where traditional software stops.' },
        { to: '/what-is-edullent', title: 'What is Edullent', description: 'The platform, the philosophy, who it serves.' },
        { to: '/future-of-school-management', title: 'The Future of School Management', description: 'Where school operations are heading.' },
      ],
      ctaTitle: 'Evaluate Edullent against your checklist.',
      ctaDescription: 'A 25-minute demo lets you compare capability-by-capability against any school management software you are considering.',
    }}
  />
);

export default BestSchoolManagementSoftwareIndiaPage;
