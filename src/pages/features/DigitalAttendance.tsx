import { CalendarCheck } from 'lucide-react';
import FeaturePageLayout from '../../components/FeaturePageLayout';

const DigitalAttendance = () => (
  <FeaturePageLayout
    eyebrow="Digital Attendance"
    headline="One-tap attendance for every classroom."
    subhead="Teachers mark Present, Absent, or Late from their phone in under 30 seconds — and parents see the update on their dashboard the same minute."
    brand="#00C853"
    iconBg="#DFF7E7"
    icon={<CalendarCheck className="w-7 h-7" />}
    cta={{ label: 'See the Teacher app', href: '/teacher' }}
    sections={[
      {
        title: 'Built for the way teachers actually work',
        body: 'Class roster loads instantly with photos. Long-press a student to mark Late with arrival time, swipe right for Present, swipe left for Absent. The whole class is logged in the time it takes to take roll out loud.',
        bullets: [
          'Roll-call view with student photos for fast recognition',
          'Bulk mark all Present, then flip exceptions',
          'Late arrivals logged with exact time stamp',
        ],
      },
      {
        title: 'Real-time sync to every stakeholder',
        body: 'The moment a teacher saves attendance, the parent dashboard updates with the day\'s status, the principal\'s daily summary refreshes, and the owner\'s cross-branch attendance heatmap reflects the latest numbers.',
        bullets: [
          'Parent app shows today\'s status by 10:00 AM',
          'Principal sees branch-level attendance % by class',
          'Owner sees attendance trends across all branches',
        ],
      },
      {
        title: 'Patterns the human eye misses',
        body: 'The attendance engine surfaces patterns automatically — Monday/Friday absences, repeated lates after lunch, classes with consistent dips. Teachers and principals get nudged when a student\'s pattern crosses a threshold worth attention.',
        bullets: [
          'Automatic day-of-week absence pattern detection',
          'Threshold alerts: 3+ absences in 7 days flagged',
          'Term-level attendance % with trend arrows',
        ],
      },
    ]}
  />
);

export default DigitalAttendance;
