import type { ComponentType } from 'react';
import { motion } from 'framer-motion';
import { UserCog } from 'lucide-react';
import OwnerStudentIntelligenceIPad from '../components/ipad/OwnerStudentIntelligenceIPad';
import OwnerAIRiskPredictorIPad from '../components/ipad/OwnerAIRiskPredictorIPad';
import OwnerTeacherPerformanceIPad from '../components/ipad/OwnerTeacherPerformanceIPad';
import OwnerTeacherLeaderboardIPad from '../components/ipad/OwnerTeacherLeaderboardIPad';
import OwnerBranchComparisonIPad from '../components/ipad/OwnerBranchComparisonIPad';
import OwnerBrandLeaderboardIPad from '../components/ipad/OwnerBrandLeaderboardIPad';
import OwnerRisksAlertsIPad from '../components/ipad/OwnerRisksAlertsIPad';

const FEATURES: {
  ipad: ComponentType;
  eyebrow: string;
  headline: string;
  body: string;
  bullets: string[];
  brand: string;
}[] = [
  {
    ipad: OwnerStudentIntelligenceIPad,
    eyebrow: 'Student Intelligence',
    headline: 'Every student. Every branch. One view.',
    body: 'Cross-branch student analytics with performance distribution, top performers, and AI-driven brand insights.',
    bullets: [
      'Network-wide stats: Total / At-Risk / Top 10% / Avg GPA / Engaged',
      'Performance distribution histogram (5 buckets)',
      'Top 100 students table with branch, score, attendance, growth',
      'AI Brand Insight surfacing the differentiator each month',
    ],
    brand: '#0055FF',
  },
  {
    ipad: OwnerAIRiskPredictorIPad,
    eyebrow: 'AI Risk Predictor',
    headline: 'Catch dropouts 6 weeks before they happen.',
    body: "Multi-signal ML scoring every student weekly across attendance, marks, behaviour and engagement. Tiered Critical → Watch → Recovered.",
    bullets: [
      '4 risk tier cards: Critical / At-Risk / Watch / Recovered',
      'Top critical students with specific signals (Att 48%, Marks ↓ 24%, etc.)',
      'Model signal weights — transparent explainability',
      'Auto-recalibration from outcome data quarterly',
    ],
    brand: '#0055FF',
  },
  {
    ipad: OwnerTeacherPerformanceIPad,
    eyebrow: 'Teacher Performance',
    headline: 'Know your best teachers — and your weakest — by Friday.',
    body: 'Composite teacher score across attendance discipline, class average, parent NPS, grading speed. Network-wide ranking + branch + subject filters.',
    bullets: [
      '4 KPIs: Avg Composite / Top Performers / Need Coaching / Parent NPS',
      'Sortable network table with all 259 teachers',
      'Branch + Subject filters, composite-ranked',
      'Color-coded rows by performance band',
    ],
    brand: '#0055FF',
  },
  {
    ipad: OwnerTeacherLeaderboardIPad,
    eyebrow: 'Teacher Leaderboard',
    headline: 'Healthy competition that actually moves the needle.',
    body: 'Auto-ranked weekly by student outcomes + engagement. Podium top 3, full network rank list, weekly movement indicators.',
    bullets: [
      'Gold / Silver / Bronze podium for top 3',
      'Period toggle: Week / Month / Term',
      'Network-wide list with weekly movement (↑↓)',
      'Same composite metric the principal sees — full transparency',
    ],
    brand: '#FFD700',
  },
  {
    ipad: OwnerBranchComparisonIPad,
    eyebrow: 'Branches Comparison',
    headline: 'See which branch is winning — and which is sinking.',
    body: 'Side-by-side comparison of all branches across students, teachers, attendance, avg score, fee collection. AI auto-surfaces winners and laggards.',
    bullets: [
      '4 branches × 5 metrics matrix',
      'Best-in-row highlighted with ★',
      '"Why Bandra wins" / "Why Jubilee struggles" insight cards',
      'One-click drill-down to full branch dashboard',
    ],
    brand: '#0055FF',
  },
  {
    ipad: OwnerBrandLeaderboardIPad,
    eyebrow: 'Brand Leaderboard',
    headline: 'Your franchise health, ranked.',
    body: 'Composite-ranked branch leaderboard with 6-month trends, KPI strip, quick-glance cards, and per-branch AI analysis panel.',
    bullets: [
      'Hero KPI strip: Branches / Students / Teachers / Avg / Fees',
      'Composite ranking bar chart — clickable',
      '6-month trend lines for top 4 branches',
      'AI Analysis panel surfaces what the top branch is doing right',
    ],
    brand: '#001040',
  },
  {
    ipad: OwnerRisksAlertsIPad,
    eyebrow: 'Risks & Alerts',
    headline: 'Critical issues escalate to you in seconds.',
    body: 'Real-time alert feed across attendance crashes, fee defaults, teacher attrition, NPS dips. Severity-tiered with one-tap delegate.',
    bullets: [
      '4 severity tiers: Critical / High / Medium / Resolved 30d',
      'Live alerts with branch context + AI-generated headline',
      'One-tap actions: Act now or Delegate to principal',
      'Forensic audit trail of who-acted-on-what-when',
    ],
    brand: '#FF3355',
  },
];

const OwnerDashboard = () => {
  return (
    <div className="owner-page-sf min-h-screen pt-28 pb-20" style={{ background: '#f5f5f7' }}>
      <style dangerouslySetInnerHTML={{ __html: `
        /* ── Typography: SF Pro Display, weight 400 end-to-end ── */
        .owner-page-sf,
        .owner-page-sf *,
        .owner-page-sf *::before,
        .owner-page-sf *::after {
          font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
          font-weight: 400 !important;
          font-style: normal !important;
        }
        .owner-page-sf input,
        .owner-page-sf textarea,
        .owner-page-sf select,
        .owner-page-sf button,
        .owner-page-sf option,
        .owner-page-sf text,
        .owner-page-sf tspan {
          font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
          font-weight: 400 !important;
        }
        .owner-page-sf b,
        .owner-page-sf strong,
        .owner-page-sf em,
        .owner-page-sf i {
          font-weight: 400 !important;
          font-style: normal !important;
        }

        /* ── Premium Apple-style baseline ── */
        .owner-page-sf {
          color: #1d1d1f;
        }

        /* ── Headings + body text: Apple grays ── */
        .owner-page-sf h1,
        .owner-page-sf h2,
        .owner-page-sf h3 {
          color: #1d1d1f !important;
          letter-spacing: -0.02em !important;
        }
        .owner-page-sf p {
          color: #6e6e73 !important;
        }

        /* ── Eyebrow brand color refinement (page-level) ── */
        .owner-page-sf .eyebrow,
        .owner-page-sf [class*="text-[#0071e3]"] {
          color: #0066cc !important;
        }

        /* ── Bullet markers + accent dots: subtle premium blue ── */
        .owner-page-sf [style*="background: #0071e3"],
        .owner-page-sf [style*="background:#0071e3"] {
          background: #0066cc !important;
        }

        /* ── Reset any overly bright shadows on outer iPad bezels ── */
        .owner-page-sf .max-w-\\[1400px\\] > div {
          /* alternating sections */
        }
      ` }} />
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-[12px] bg-[#0071e3] flex items-center justify-center text-white">
              <UserCog className="w-5 h-5" />
            </div>
            <p className="text-[#0071e3] text-[14px] font-normal tracking-[-0.01em]">
              Administration
            </p>
          </div>
          <h1 className="text-[40px] md:text-[48px] font-light text-[#1d1d1f] leading-[1.08] tracking-[-0.035em] mb-4">
            Owner Dashboard
          </h1>
          <p className="text-[#86868b] text-[17px] max-w-[600px] leading-[1.47] tracking-[0.011em] mb-20">
            Complete control over your school ecosystem. Track growth, finances, and multi-branch performance.
          </p>
        </motion.div>

        {/* 7 feature iPads — alternating left / right */}
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

export default OwnerDashboard;
