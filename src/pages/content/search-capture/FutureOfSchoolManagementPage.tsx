import { Brain, AlertTriangle, Sparkles, TrendingUp, Compass } from 'lucide-react';
import SearchCaptureLayout from './SearchCaptureLayout';

const FutureOfSchoolManagementPage = () => (
  <SearchCaptureLayout
    content={{
      path: '/future-of-school-management',
      breadcrumbLabel: 'Future of School Management',
      seoTitle: 'The Future of School Management — Five Shifts in the Next Three Years',
      seoDescription:
        'AI prediction, decision intelligence, parent transparency, teacher AI workflows, multi-branch standardisation — the five shifts shaping the future of school management.',
      ogTitle: 'The Future of School Management',
      ogDescription: 'Five shifts reshaping how schools will operate by 2028.',
      hero: {
        eyebrow: 'Trend analysis',
        title: 'The future of school management is already arriving.',
        subtitle: 'Five shifts that will define how schools operate by 2028.',
        description:
          'The category of school software is in the middle of its biggest shift in twenty years — from operations recording to decision intelligence. These are the five movements quietly reshaping how Indian institutions will work.',
      },
      sections: [
        {
          eyebrow: 'Five shifts',
          title: 'What is moving — and how fast.',
          features: [
            { title: 'From reports to recommendations', description: 'Dashboards that say "do X" replace dashboards that say "X happened."', icon: Brain, brand: '#0071e3' },
            { title: 'AI risk prediction as default', description: 'Per-student early-warning becomes a basic expectation, not a premium feature.', icon: AlertTriangle, brand: '#0071e3' },
            { title: 'AI in the teacher workflow', description: 'Exam generation, auto-correction, lesson planning become daily tools, not novelty.', icon: Sparkles, brand: '#0071e3' },
            { title: 'Parent transparency by design', description: 'Weekly AI summaries replace WhatsApp groups as the primary parent surface.', icon: TrendingUp, brand: '#0071e3' },
            { title: 'Multi-branch standardisation', description: 'Chains enforce a single quality bar across campuses with intelligence, not audits.', icon: Compass, brand: '#0071e3' },
          ],
        },
        {
          eyebrow: 'Why now',
          title: 'Three reasons the shift is accelerating in India.',
          body: [
            'First — AI is finally reliable enough in education contexts. Models that work on Indian curricula, Hinglish, and multi-board systems crossed a usable threshold in 2024-2025.',
            'Second — parent expectations have permanently changed. The same parents who manage their lives on apps now expect their child\'s school to deliver the same clarity.',
            'Third — multi-branch institutions are growing fast. A 5-branch group cannot operate on Excel; a 25-branch group cannot operate on quarterly meetings. The category needed an intelligence answer.',
          ],
        },
        {
          eyebrow: 'Where this lands',
          title: 'What schools will look like by 2028.',
          body: [
            'By 2028, school management software will be evaluated primarily on its intelligence layer — not its module count. The market leaders will be the ones that committed to AI-native architecture early and built decision interfaces, not report builders.',
            'Edullent is built specifically for this future. We are not retrofitting an old ERP. We are building the layer schools will need.',
          ],
        },
      ],
      faqs: [
        {
          question: 'What is the future of school management software?',
          answer:
            'AI-driven decision intelligence — replacing operational ERPs with platforms that turn data into per-role recommendations and outcomes. By 2028, school software will be evaluated on its intelligence layer first, modules second.',
        },
        {
          question: 'Will AI replace school administrators?',
          answer:
            'No. AI compresses the routine work — grading objective sections, generating reports, summarising weekly trends — and gives administrators time to do the human work: coaching, intervention, vision-setting.',
        },
        {
          question: 'How fast is the Indian school market adopting AI tools?',
          answer:
            'Faster than expected. Private institutions, especially mid-size chains, are leading adoption in 2025-2026. The decision is no longer "should we?" — it is "which platform?"',
        },
      ],
      related: [
        { to: '/education-intelligence-platform', title: 'Education Intelligence Platform', description: 'The category leading the shift.' },
        { to: '/modern-school-operating-system', title: 'Modern School Operating System', description: 'The operating layer of the next decade.' },
        { to: '/insights/future-of-school-operations', title: 'Future of School Operations', description: 'Five shifts in operational practice.' },
        { to: '/insights/ai-in-school-administration', title: 'AI in School Administration', description: 'Practical, not hype.' },
      ],
      ctaTitle: 'Build for where schools are going.',
      ctaDescription: 'A 25-minute walkthrough of the intelligence layer Indian schools will run on by 2028.',
    }}
  />
);

export default FutureOfSchoolManagementPage;
