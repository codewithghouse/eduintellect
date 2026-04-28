import type { ComponentType } from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import ParentDashboardIPad from '../components/ipad/ParentDashboardIPad';
import ParentPerformanceIPad from '../components/ipad/ParentPerformanceIPad';
import ParentConceptStrengthsIPad from '../components/ipad/ParentConceptStrengthsIPad';
import ParentAIPracticeIPad from '../components/ipad/ParentAIPracticeIPad';
import ParentBehaviourIPad from '../components/ipad/ParentBehaviourIPad';
import ParentSyllabusIPad from '../components/ipad/ParentSyllabusIPad';

const FEATURES: {
  ipad: ComponentType;
  eyebrow: string;
  headline: string;
  body: string;
  bullets: string[];
  brand: string;
}[] = [
  {
    ipad: ParentPerformanceIPad,
    eyebrow: 'Performance Analytics',
    headline: "See exactly how your child is doing — every subject, every month.",
    body: 'Live grade, term average, trend direction, class rank — all in one view. Subject cards show progress against the class average, with AI calling out where attention is needed.',
    bullets: [
      'Hero stats: Grade · Average · Trend · Class Rank',
      'Subject cards with progress bars vs class average',
      '8-month trend chart for the overall average',
      'AI narrative + Goal Setter to close subject-level gaps',
    ],
    brand: '#0055FF',
  },
  {
    ipad: ParentConceptStrengthsIPad,
    eyebrow: 'Concept Strengths',
    headline: 'Stop guessing which topic is weak — see it at a glance.',
    body: "Topic-level mastery scoring across every subject. Three buckets — strong, developing, focus — so you know exactly where your child is solid and where they need help.",
    bullets: [
      'Mastery score, topics mastered, focus areas at a glance',
      'Multi-subject mastery line chart (Math, Science, English, Social)',
      '3 colour-coded concept buckets with per-topic %',
      'AI breakdown surfacing pacing risks and patterns',
    ],
    brand: '#0055FF',
  },
  {
    ipad: ParentAIPracticeIPad,
    eyebrow: 'AI Practice',
    headline: 'Personalised practice on weak topics — generated from the actual textbook.',
    body: "AI generates fresh practice sets every 24h, targeting topics where your child is weakest. Streak tracking, heatmap, and per-attempt scoring keep practice consistent.",
    bullets: [
      'Practice streak hero with attempts, avg score, topics covered',
      '6-week practice heatmap (GitHub-style intensity)',
      'Recent source PDFs + completed attempts with scores',
      'AI auto-generates fresh sets weekly on weak topics',
    ],
    brand: '#FF8800',
  },
  {
    ipad: ParentBehaviourIPad,
    eyebrow: 'Behaviour & Discipline',
    headline: 'No more parent-teacher meeting surprises.',
    body: "Real teacher observations — positives, concerns, and incidents — logged the day they happen. 5-star rating across conduct, punctuality, respect, and participation, with a 6-month trend.",
    bullets: [
      '5-star overall rating + sub-metrics (Conduct/Punctuality/Respect)',
      'Positive Highlights and Areas to Improve, with teacher names',
      '6-month behaviour trend chart',
      '2×2 breakdown grid + term summary (rating · incidents · grade)',
    ],
    brand: '#00C853',
  },
  {
    ipad: ParentSyllabusIPad,
    eyebrow: 'Class Documents',
    headline: 'Every syllabus, note, and worksheet — in one searchable place.',
    body: 'Teachers upload syllabus PDFs, notes, and worksheets directly to the parent portal. Searchable, filterable by file type, with one-tap view and download.',
    bullets: [
      'Searchable doc library with file-type filters (PDF/Doc/XLS/Img)',
      'Auto-organised by subject, date, and uploading teacher',
      '"NEW" badge on uploads from the last 3 days',
      'One-tap View / Download — no email attachments to chase',
    ],
    brand: '#0055FF',
  },
];

const StudentParentDashboard = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-10 h-10 rounded-[12px] flex items-center justify-center text-white"
              style={{ backgroundColor: '#0044CC' }}
            >
              <Users className="w-5 h-5" />
            </div>
            <p
              className="text-[14px] font-light tracking-[-0.01em]"
              style={{ color: '#0044CC' }}
            >
              Parent Dashboard
            </p>
          </div>
          <h1 className="text-[40px] md:text-[48px] font-light text-[#1d1d1f] leading-[1.08] tracking-[-0.035em] mb-4">
            Your child's world. One app.
          </h1>
          <p className="text-[#86868b] text-[17px] max-w-[600px] leading-[1.47] tracking-[0.011em] mb-16">
            AI-powered academic health, live performance tracking, weekly reports, and personalised parenting tips — built for desktop, tablet, and mobile.
          </p>
        </motion.div>

        {/* Hero iPad — overall parent dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-28 grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-10 lg:gap-14 items-center"
        >
          <div className="w-full">
            <ParentDashboardIPad />
          </div>
          <div className="w-full max-w-[480px] mx-auto lg:mx-0">
            <p className="text-[13px] font-light tracking-[-0.01em] mb-3" style={{ color: '#0044CC' }}>Stay close, every day</p>
            <h2 className="text-[#1d1d1f] text-[32px] md:text-[40px] font-light leading-[1.1] tracking-[-0.02em] mb-5">
              Stop waiting for parent-teacher meetings.
            </h2>
            <p className="text-[#86868b] text-[16px] leading-[1.55] tracking-[0.005em] mb-7">
              Live grades, attendance, behaviour notes from teachers, and AI-powered practice recommendations — all in your pocket.
            </p>
            <div className="space-y-3">
              {[
                'Real-time GPA, attendance, and class rank',
                'Subject-wise performance with weekly trends',
                'Behaviour feed (positives + concerns from teachers)',
                'AI Practice streak — personalised drilling on weak topics',
              ].map((line, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#0044CC' }} />
                  <p className="text-[#1d1d1f] text-[14px] font-normal leading-[1.5]">{line}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 5 feature iPads — alternating left / right */}
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

export default StudentParentDashboard;