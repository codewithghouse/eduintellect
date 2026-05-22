import { BarChart3, AlertTriangle, GitBranch, Brain } from 'lucide-react';
import SearchCaptureLayout from './SearchCaptureLayout';

const SchoolAnalyticsPlatformPage = () => (
  <SearchCaptureLayout
    content={{
      path: '/school-analytics-platform',
      breadcrumbLabel: 'School Analytics Platform',
      seoTitle: 'School Analytics Platform — Decision Intelligence for Institutions',
      seoDescription:
        'A modern school analytics platform turns data into decisions. AI risk prediction, branch comparison, teacher performance — analytics that drives outcomes, not reports.',
      ogTitle: 'School Analytics Platform',
      ogDescription: 'Analytics that drives decisions — not just reports.',
      hero: {
        eyebrow: 'Analytics for institutions',
        title: 'A school analytics platform is only useful if it drives a decision.',
        subtitle: 'The era of "look at this graph" school analytics is over.',
        description:
          'Modern school analytics is not a Power BI report bolted on top of an ERP. It is decision intelligence — AI predicting risk, ranking branches, scoring teachers, surfacing actions. Edullent is built specifically for this approach.',
      },
      sections: [
        {
          eyebrow: 'What modern analytics does',
          title: 'Four capabilities every school analytics platform needs.',
          features: [
            { title: 'AI risk prediction', description: 'Per-student early warning across attendance, marks, behaviour. Not aggregate trends.', icon: AlertTriangle, brand: '#0071e3' },
            { title: 'Cross-branch comparison', description: 'Side-by-side, ranked, drill-down — across every campus.', icon: GitBranch, brand: '#0071e3' },
            { title: 'Composite scoring', description: 'Multi-signal scoring for teachers, branches, students. Single number, full context.', icon: BarChart3, brand: '#0071e3' },
            { title: 'Decision interfaces', description: 'Analytics surfaces an action, not just a chart.', icon: Brain, brand: '#0071e3' },
          ],
        },
        {
          eyebrow: 'The old vs the new',
          title: 'Power BI is not a school analytics platform.',
          body: [
            'Many schools today use a generic BI tool — Power BI, Tableau, or a custom Excel dashboard — connected to their ERP. The dashboards are technically correct and almost entirely unused.',
            'A real school analytics platform is purpose-built. It knows what "at risk" means in the Indian curriculum context, what makes a teacher score high, what differentiates a branch performing in Goregaon vs Andheri. It speaks the language of the school office, not the BI vendor.',
          ],
        },
      ],
      faqs: [
        {
          question: 'What is a school analytics platform?',
          answer:
            'A purpose-built analytics layer for educational institutions — covering per-student risk prediction, branch comparison, teacher performance scoring and decision recommendations. Distinct from generic BI tools.',
        },
        {
          question: 'Can we just use Power BI for school analytics?',
          answer:
            'You can — and many schools do, with low usage. Generic BI tools require heavy configuration, ongoing data engineering, and rarely deliver the decision-ready interfaces school offices need. A purpose-built platform compresses this to weeks, not quarters.',
        },
        {
          question: 'What kind of insights does a school analytics platform produce?',
          answer:
            'At-risk students six weeks before traditional reports show it, branch leaderboards with AI surfacing the differentiator, teacher composite scores filterable by subject and class, fee health by branch and term, parent NPS scores, intervention success rates.',
        },
      ],
      related: [
        { to: '/student-intelligence-platform', title: 'Student Intelligence Platform', description: 'Analytics at the student level.' },
        { to: '/education-intelligence-platform', title: 'Education Intelligence Platform', description: 'The full intelligence layer.' },
        { to: '/smart-school-platform', title: 'Smart School Platform', description: 'Smart, defined by outcomes.' },
        { to: '/for-school-owners', title: 'For School Owners', description: 'Analytics from the owner&apos;s seat.' },
      ],
      ctaTitle: 'Move from reports to decisions.',
      ctaDescription: 'A 25-minute walkthrough of school analytics that actually drives action.',
    }}
  />
);

export default SchoolAnalyticsPlatformPage;
