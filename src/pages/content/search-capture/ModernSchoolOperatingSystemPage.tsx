import { Layers, Workflow, GitBranch, Brain } from 'lucide-react';
import SearchCaptureLayout from './SearchCaptureLayout';

const ModernSchoolOperatingSystemPage = () => (
  <SearchCaptureLayout
    content={{
      path: '/modern-school-operating-system',
      breadcrumbLabel: 'Modern School Operating System',
      seoTitle: 'The Modern School Operating System — Edullent',
      seoDescription:
        'A school operating system unifies every role under one intelligence layer. See what a modern school OS looks like — and how Edullent builds it.',
      ogTitle: 'Modern School Operating System',
      ogDescription: 'One operating layer for every role in a modern school.',
      hero: {
        eyebrow: 'The operating layer',
        title: 'A modern school deserves a modern operating system.',
        subtitle: 'Not five disconnected apps. One operating layer.',
        description:
          'Most schools today run on a patchwork — ERP for fees, WhatsApp for parents, Google Sheets for analysis, separate app for attendance. A modern school operating system replaces the patchwork with one connected layer.',
      },
      sections: [
        {
          eyebrow: 'What an OS does',
          title: 'Four properties of a true school operating system.',
          features: [
            { title: 'Single data layer', description: 'Every signal from every role lives in one place, in real time.', icon: Layers, brand: '#0071e3' },
            { title: 'Workflow orchestration', description: 'Routine actions (mark attendance, escalate concern, generate report) flow without app switching.', icon: Workflow, brand: '#0071e3' },
            { title: 'Multi-tenant + multi-branch', description: 'Per-campus isolation, group-level aggregation, no re-platforming for chains.', icon: GitBranch, brand: '#0071e3' },
            { title: 'Intelligence as a service', description: 'AI risk prediction, summaries, recommendations sit on top of the OS — every role consumes them.', icon: Brain, brand: '#0071e3' },
          ],
        },
        {
          eyebrow: 'The patchwork problem',
          title: 'Why most schools still operate in fragments.',
          body: [
            'A typical Indian school today uses: an ERP for fees, attendance via biometric or app, WhatsApp groups for parent communication, Google Sheets or Excel for analysis, paper or PDFs for reports, separate apps for exam generation if any.',
            'Each tool does its narrow job. Nothing connects. The principal cannot see across them in one view. Parents experience inconsistent messaging. Teachers spend half their day switching apps and reconciling.',
            'A school operating system fixes this not by adding another tool, but by replacing the patchwork.',
          ],
        },
      ],
      faqs: [
        {
          question: 'What is a school operating system?',
          answer:
            'A single connected layer that handles operations, communication, intelligence and workflows for every role in a school — replacing the patchwork of ERP + WhatsApp + Excel + separate apps that most institutions still use.',
        },
        {
          question: 'How is this different from a school management software?',
          answer:
            'School management software typically focuses on administrative records. A school operating system extends to every role surface (parent, teacher, principal, owner) and includes the intelligence layer that turns records into decisions.',
        },
        {
          question: 'Can a school operating system replace WhatsApp?',
          answer:
            'For school-related communication, yes — and most institutions report that doing so dramatically reduces noise. Teacher-parent threads with context attached are more useful than WhatsApp groups, and they keep the conversation searchable and bounded.',
        },
      ],
      related: [
        { to: '/education-intelligence-platform', title: 'Education Intelligence Platform', description: 'The intelligence layer that sits on top.' },
        { to: '/education-operating-system', title: 'Education Operating System', description: 'The broader category framing.' },
        { to: '/what-is-edullent', title: 'What is Edullent', description: 'Edullent as a school OS.' },
        { to: '/advanced-school-software', title: 'Advanced School Software', description: 'What advanced means in 2026.' },
      ],
      ctaTitle: 'Move your school to one operating layer.',
      ctaDescription: 'A 25-minute walkthrough of how a school OS replaces the ERP-plus-WhatsApp-plus-Excel patchwork.',
    }}
  />
);

export default ModernSchoolOperatingSystemPage;
