import { Brain, Sparkles, Layers, BarChart3 } from 'lucide-react';
import SearchCaptureLayout from './SearchCaptureLayout';

const AdvancedSchoolSoftwarePage = () => (
  <SearchCaptureLayout
    content={{
      path: '/advanced-school-software',
      breadcrumbLabel: 'Advanced School Software',
      seoTitle: 'Advanced School Software for Modern Institutions — Edullent',
      seoDescription:
        'Advanced school software in 2026 means AI-driven intelligence, not more modules. See what advanced actually looks like — and how Edullent is built for it.',
      ogTitle: 'Advanced School Software',
      ogDescription: 'What "advanced" actually means in 2026 — and how Edullent delivers.',
      hero: {
        eyebrow: 'For modern institutions',
        title: 'What "advanced school software" really means in 2026.',
        subtitle: '"Advanced" used to mean more modules. Now it means more intelligence.',
        description:
          'A school product is no longer advanced because it has 40 modules. It is advanced because it turns the data those modules collect into decisions for the people running the school.',
      },
      sections: [
        {
          eyebrow: 'The four markers of advanced',
          title: 'How to spot software built for the next decade.',
          features: [
            { title: 'AI-native, not bolted on', description: 'AI grading, risk prediction, exam generation built into core — not sold as add-ons.', icon: Sparkles, brand: '#0071e3' },
            { title: 'Decision-first dashboards', description: 'Home screen recommends action; reports are a layer below, not the headline.', icon: Brain, brand: '#0071e3' },
            { title: 'Connected role surfaces', description: 'Owner, principal, teacher, parent share one brain — not separate apps.', icon: Layers, brand: '#0071e3' },
            { title: 'Intelligence on day one', description: 'Useful from week one, not after months of configuration consulting.', icon: BarChart3, brand: '#0071e3' },
          ],
        },
        {
          eyebrow: 'Edullent\'s take',
          title: 'Advanced means usable advanced.',
          body: [
            'Plenty of school products are technically advanced — sophisticated reports, complex permission systems, deep configuration. Most go unused.',
            'Advanced school software in 2026 means advanced capability that the office actually uses — by Monday morning, not after a six-month rollout. The benchmark is whether a principal makes a decision with it in week one, not whether the IT team built it correctly in month six.',
          ],
        },
      ],
      faqs: [
        {
          question: 'What makes school software "advanced"?',
          answer:
            'AI-native architecture, decision-first dashboards, connected role surfaces, and immediate usability. A product is only advanced if the people in the school office actually use the advanced parts.',
        },
        {
          question: 'How is advanced school software different from a regular ERP?',
          answer:
            'A regular ERP records and reports. Advanced school software predicts, recommends and acts. The difference is whether the software helps you decide — or just helps you document.',
        },
        {
          question: 'Does advanced mean expensive?',
          answer:
            'No. Modern AI infrastructure has compressed the cost curve dramatically. Edullent offers transparent per-student pricing with all advanced capabilities included in every plan — no AI surcharges, no premium tier paywalls.',
        },
      ],
      related: [
        { to: '/education-intelligence-platform', title: 'Education Intelligence Platform', description: 'The flagship view.' },
        { to: '/modern-school-operating-system', title: 'Modern School Operating System', description: 'The operating layer for modern schools.' },
        { to: '/future-of-school-management', title: 'The Future of School Management', description: 'Where the category is heading.' },
        { to: '/best-school-management-software-india', title: 'Best School Management Software in India', description: 'Modern evaluation criteria.' },
      ],
      ctaTitle: 'See advanced school software in use.',
      ctaDescription: 'A 25-minute demo showing the four dashboards in real working mode.',
    }}
  />
);

export default AdvancedSchoolSoftwarePage;
