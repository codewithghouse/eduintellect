import { IndianRupee } from 'lucide-react';
import FeaturePageLayout from '../../components/FeaturePageLayout';

const FeeManagement = () => (
  <FeaturePageLayout
    eyebrow="Fee Management"
    headline="Collect more, chase less."
    subhead="Track fee structures, dues, and collection across every branch — and predict who is likely to default before the date arrives."
    brand="#7B3FF4"
    iconBg="#F2EBFF"
    icon={<IndianRupee className="w-7 h-7" />}
    cta={{ label: 'See the Owner Portal', href: '/owner' }}
    sections={[
      {
        title: 'Structures, classes, and exceptions in one place',
        body: 'Define fee structures per class, term, or grade. Apply discounts and exceptions per student without breaking the rule for everyone else. Owners see the full structure across all branches; principals manage their own branch.',
        bullets: [
          'Per-class and per-grade fee structures',
          'Per-student discounts with audit trail',
          'Term-wise installment plans',
        ],
      },
      {
        title: 'Default prediction that pays for itself',
        body: 'Schools lose 8–15% of revenue to fee defaults every year. Edullent\'s rule-based fee predictor scores every student\'s likelihood of defaulting next month — based on payment history, attendance correlation, and outstanding balance. A timely 8-week reminder recovers 5%+ of revenue, every year.',
        bullets: [
          'Default probability score per student (0–100)',
          'Risk tiers: Low / Medium / High',
          'Recommended action per student (reminder, meeting, plan)',
        ],
      },
      {
        title: 'Parent-side transparency',
        body: 'Parents see exactly what is due, what is paid, and what is upcoming. Receipts auto-generate. WhatsApp and email reminders go out without the office having to lift a finger. Less awkward conversations, more on-time payments.',
        bullets: [
          'Parent dashboard shows complete fee history',
          'Auto-generated receipts after every payment',
          'Reminder schedule customisable per branch',
        ],
      },
    ]}
  />
);

export default FeeManagement;
