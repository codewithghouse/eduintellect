import type { ComponentType } from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard } from 'lucide-react';
import PrincipalDashboardIPad from '../components/ipad/PrincipalDashboardIPad';
import PrincipalStudentIntelligenceIPad from '../components/ipad/PrincipalStudentIntelligenceIPad';
import PrincipalRiskStudentsIPad from '../components/ipad/PrincipalRiskStudentsIPad';
import PrincipalTeacherPerformanceIPad from '../components/ipad/PrincipalTeacherPerformanceIPad';
import PrincipalTeacherLeaderboardIPad from '../components/ipad/PrincipalTeacherLeaderboardIPad';
import PrincipalLeaderboardsIPad from '../components/ipad/PrincipalLeaderboardsIPad';

const FEATURES: {
  ipad: ComponentType;
  eyebrow: string;
  headline: string;
  body: string;
  bullets: string[];
  brand: string;
}[] = [
  {
    ipad: PrincipalDashboardIPad,
    eyebrow: 'Academic Command Centre',
    headline: 'Run your school with intelligence.',
    body: 'Academic Health Index, today\'s risk alerts, attendance trends — every signal you need on one screen.',
    bullets: [
      'Real-time Academic Health Index (composite 0-100)',
      "Today's Risk Alerts — students slipping right now",
      '30-day attendance trend with smooth interpolation',
      'Sectioned sidebar — Students / Academics / Operations / Comms',
    ],
    brand: '#0055FF',
  },
  {
    ipad: PrincipalStudentIntelligenceIPad,
    eyebrow: 'Student Intelligence',
    headline: 'Auto-classify every student. Weak, developing, smart.',
    body: 'AI tiers every student weekly across attendance, marks, behaviour. One-click teacher + parent notifications.',
    bullets: [
      '3-tier KPIs: Weak / Developing / Smart with live counts',
      'Per-student card: avg, attendance, tier badge + reason',
      'AI Class Intelligence panel surfaces who to act on first',
      'Notify Teacher / Notify Parent in one tap',
    ],
    brand: '#0055FF',
  },
  {
    ipad: PrincipalRiskStudentsIPad,
    eyebrow: 'Risk Students',
    headline: 'Catch dropouts before they happen.',
    body: 'Multi-signal risk scoring across attendance, marks, incidents and assignments. Critical → Warning → Monitoring tiers with intervention playbook.',
    bullets: [
      'Red hero with total at-risk count + new-this-week badge',
      '4 tier KPIs + filterable risk pool',
      'Risk factor chips per student with assigned owner',
      'AI intervention plan + quick actions panel',
    ],
    brand: '#FF3355',
  },
  {
    ipad: PrincipalTeacherPerformanceIPad,
    eyebrow: 'Teacher Performance',
    headline: 'Know your top teachers — and your weakest — by Friday.',
    body: 'Composite scoring across class average, attendance discipline, parent feedback and trends. Pair coaches automatically.',
    bullets: [
      '4 KPIs: Faculty / Avg Composite / Top / Need Coaching',
      'Per-teacher card: subject pills, trend badge, vs school avg',
      'Color-coded tiers: Excellent → Needs Coach',
      'AI summary recommends mentor pairings',
    ],
    brand: '#0055FF',
  },
  {
    ipad: PrincipalTeacherLeaderboardIPad,
    eyebrow: 'Teacher Leaderboard',
    headline: 'Healthy competition that moves the needle.',
    body: 'Auto-ranked weekly by student outcomes. Gold / Silver / Bronze podium + ranked list with weekly movement.',
    bullets: [
      'Branch hero with avg score + tier badge',
      'Period toggle: Term / Month / All Time',
      'Top 3 podium + ranked rest with ↑↓ movement',
      'Same composite metric the owner sees — full transparency',
    ],
    brand: '#FFD700',
  },
  {
    ipad: PrincipalLeaderboardsIPad,
    eyebrow: 'Principal Leaderboards',
    headline: 'See where you rank in the network.',
    body: 'Cross-branch leaderboards for branches, principals, teachers and students. AI explains the gap and the play to close it.',
    bullets: [
      '4-tab nav: Branches / Principals / Teachers / Students',
      'Gold / Silver / Bronze pool balls + your-row highlight',
      '"Why Bandra wins" AI insight + close-the-gap solutions',
      'Live data · cached weekly insights',
    ],
    brand: '#0055FF',
  },
];

const PrincipalDashboard = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-[12px] bg-[#0055FF] flex items-center justify-center text-white">
              <LayoutDashboard className="w-5 h-5" />
            </div>
            <p className="text-[#0055FF] text-[14px] font-light tracking-[-0.01em]">
              Academic Head
            </p>
          </div>
          <h1 className="text-[40px] md:text-[48px] font-light text-[#1d1d1f] leading-[1.08] tracking-[-0.035em] mb-4">
            Principal Dashboard
          </h1>
          <p className="text-[#86868b] text-[17px] max-w-[600px] leading-[1.47] tracking-[0.011em] mb-20">
            Monitor teacher performance, academic risks, and school operations from one place.
          </p>
        </motion.div>

        {/* Feature iPads — alternating left / right */}
        {FEATURES.map((f, i) => {
          const ipadOnLeft = i % 2 === 0;
          const Ipad = f.ipad;
          return (
            <motion.div
              key={f.eyebrow}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-28 grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-10 lg:gap-14 items-center"
            >
              <div className={`w-full ${ipadOnLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                <Ipad />
              </div>

              <div className={`w-full max-w-[480px] mx-auto lg:mx-0 ${ipadOnLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                <p className="text-[13px] font-normal tracking-[-0.01em] mb-3" style={{ color: f.brand }}>{f.eyebrow}</p>
                <h2 className="text-[#1d1d1f] text-[32px] md:text-[40px] font-light leading-[1.1] tracking-[-0.02em] mb-5">
                  {f.headline}
                </h2>
                <p className="text-[#86868b] text-[16px] leading-[1.55] tracking-[0.005em] mb-7">
                  {f.body}
                </p>
                <div className="space-y-3">
                  {f.bullets.map((line, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <span className="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0" style={{ background: f.brand }} />
                      <p className="text-[#1d1d1f] text-[14px] font-normal leading-[1.5]">{line}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default PrincipalDashboard;
