import { FileBarChart } from 'lucide-react';
import FeaturePageLayout from '../../components/FeaturePageLayout';

const ReportGeneration = () => (
  <FeaturePageLayout
    eyebrow="Report Generation"
    headline="Reports that write themselves."
    subhead="Class performance reports, individual progress reports, term report cards — all generated from live Firestore data, not copy-pasted into Word."
    brand="#FF8800"
    iconBg="#FFF0DC"
    icon={<FileBarChart className="w-7 h-7" />}
    cta={{ label: 'See the Teacher Portal', href: '/teacher' }}
    sections={[
      {
        title: 'Class performance, in one click',
        body: 'A class subject report pulls the class average, top and bottom 5 performers, weak topics, score distribution by band, and attendance correlation — directly from your school\'s real data. No Excel, no manual aggregation, no weekend work.',
        bullets: [
          'Class average and pass-rate auto-computed',
          'Top 5 / Bottom 5 with subject-wise drilldown',
          'Score distribution histogram by band (90+, 75-89, 60-74, <60)',
        ],
      },
      {
        title: 'Individual progress reports for every parent',
        body: 'Each student gets a personalised progress report: trend over the last 6 tests, subject-by-subject breakdown, attendance percentage, assignment completion rate, plus strengths and improvement areas. Generated per student, in seconds.',
        bullets: [
          'Last-6-tests score trend with line chart',
          'Subject breakdown with class-relative ranking',
          'Term-end report cards exported as PDF for printing',
        ],
      },
      {
        title: 'Owner-level business reports',
        body: 'Owners see network-wide performance — branch comparison, fee collection trends, teacher productivity, parent engagement — formatted for board meetings. Export to PDF or share a live link with stakeholders.',
        bullets: [
          'Cross-branch performance comparison with composite scores',
          'Monthly fee collection trends by branch',
          'Board-ready PDF exports with school branding',
        ],
      },
    ]}
  />
);

export default ReportGeneration;
