import { Layers, GitBranch, Brain, Workflow } from 'lucide-react';
import SearchCaptureLayout from './SearchCaptureLayout';

const EducationOperatingSystemPage = () => (
  <SearchCaptureLayout
    content={{
      path: '/education-operating-system',
      breadcrumbLabel: 'Education Operating System',
      seoTitle: 'Education Operating System for Institutions — Edullent',
      seoDescription:
        'An Education Operating System is the connected layer beneath every school role — replacing fragmented ERPs, communication apps and spreadsheets with one operating layer.',
      ogTitle: 'Education Operating System',
      ogDescription: 'The connected layer beneath every school role.',
      hero: {
        eyebrow: 'The operating layer',
        title: 'The Education Operating System for modern institutions.',
        subtitle: 'One connected layer beneath every role — owner, principal, teacher, parent.',
        description:
          'Just as iOS connects every app, every service, every interaction beneath a single layer, an Education Operating System connects every role and every workflow inside a school beneath one intelligence layer. Edullent is built as that layer for Indian institutions.',
      },
      sections: [
        {
          eyebrow: 'What an OS is',
          title: 'Four traits of a genuine education OS.',
          features: [
            { title: 'Unified data plane', description: 'One source of truth. Every role reads and writes from the same brain.', icon: Layers, brand: '#0071e3' },
            { title: 'Cross-role workflows', description: 'A teacher marking attendance flows into parent view, risk engine, principal dashboard.', icon: Workflow, brand: '#0071e3' },
            { title: 'Multi-instance scale', description: 'Per-school, per-branch isolation; group-level aggregation; no rebuild for chains.', icon: GitBranch, brand: '#0071e3' },
            { title: 'Intelligence as a built-in service', description: 'AI prediction, summarisation, recommendation available to every surface — not bolted on.', icon: Brain, brand: '#0071e3' },
          ],
        },
        {
          eyebrow: 'Why it matters',
          title: 'The fragmentation tax most schools pay.',
          body: [
            'Without an operating system, schools pay a "fragmentation tax" — measured in hours spent reconciling between apps, messages lost between WhatsApp and the ERP, decisions made on incomplete data, and parent confusion at the receiving end.',
            'An Education Operating System eliminates the tax by collapsing the fragments into one operating layer. The improvement is not just efficiency — it is decision quality.',
          ],
        },
      ],
      faqs: [
        {
          question: 'What is an Education Operating System?',
          answer:
            'A unified operating layer for a school or education group — connecting data, workflows, communication and intelligence beneath every role surface (owner, principal, teacher, parent). Replaces the typical patchwork of ERP + WhatsApp + Excel + separate apps.',
        },
        {
          question: 'How is this different from a school management software?',
          answer:
            'School management software typically handles administrative records. An Education Operating System extends to every role — including parents and teachers — and includes intelligence as a built-in service, not a separate product.',
        },
        {
          question: 'Is the term "education operating system" mainstream?',
          answer:
            'It is becoming mainstream as the industry matures. Just as "fintech operating system" emerged in banking and "developer operating system" in software, education is converging on the operating-system framing as fragmentation becomes the bottleneck.',
        },
      ],
      related: [
        { to: '/modern-school-operating-system', title: 'Modern School Operating System', description: 'The same concept, school-scoped framing.' },
        { to: '/education-intelligence-platform', title: 'Education Intelligence Platform', description: 'The intelligence layer that sits on the OS.' },
        { to: '/what-is-edullent', title: 'What is Edullent', description: 'Edullent as the education OS.' },
        { to: '/future-of-school-management', title: 'The Future of School Management', description: 'Where the category is heading.' },
      ],
      ctaTitle: 'Move to a real education operating system.',
      ctaDescription: 'A 25-minute walkthrough of what changes when fragmentation becomes one operating layer.',
    }}
  />
);

export default EducationOperatingSystemPage;
