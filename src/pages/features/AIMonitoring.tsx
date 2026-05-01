import { Brain } from 'lucide-react';
import FeaturePageLayout from '../../components/FeaturePageLayout';

const AIMonitoring = () => (
  <FeaturePageLayout
    eyebrow="AI Student Monitoring"
    headline="Spot at-risk students before grades slip."
    subhead="Edullent's risk predictor scans attendance, scores, score trends, and fee patterns to surface students who need attention — weeks before report cards do."
    brand="#0055FF"
    iconBg="#E5EDFF"
    icon={<Brain className="w-7 h-7" />}
    cta={{ label: 'See it in the Owner Portal', href: '/owner' }}
    sections={[
      {
        title: 'Rule-based predictions you can trust',
        body: 'Every risk score is computed from real numbers, not generated text. The model weighs attendance (40%), score average (35%), score trend (15%), and fee defaults (10%) into a single probability between 0–100. No hallucinations, no surprises.',
        bullets: [
          'Critical / High / Watch / Safe risk tiers with clear thresholds',
          'Each prediction shows the exact factors driving the score',
          'Updates live as attendance, scores and fees flow in',
        ],
      },
      {
        title: 'Built for principals and owners',
        body: 'The Owner dashboard rolls risk up across all branches in your network so you see where intervention budget should land first. Principals get a per-class view with one-click actions: schedule parent meeting, assign mentor, log intervention.',
        bullets: [
          'Branch-level and class-level risk heatmaps',
          'Drill from network → branch → class → student in three clicks',
          'Intervention log keeps every action traceable',
        ],
      },
      {
        title: 'Designed for parent trust',
        body: 'Parents see a friendly, deterministic explanation of how their child is tracking — no scary AI jargon. When a child slips into the Watch tier, the parent dashboard shows the specific subjects and the exact attendance pattern, alongside a recommended action.',
        bullets: [
          'Plain-language risk summaries written from data',
          'Direct link to teacher messaging when action is needed',
          'Weekly parent-facing report keeps families in the loop',
        ],
      },
    ]}
  />
);

export default AIMonitoring;
