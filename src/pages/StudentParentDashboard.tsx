import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import '../styles/phone-mockup.css';
import '../styles/parent-phone.css';
import '../styles/student-phone.css';
import { ParentHome, ParentProfile, ParentTips } from '../components/ParentScreens';
import { StudentProfileScreen, TermOverviewScreen } from '../components/StudentScreens';
import { MyClassesScreen, RegistryScreen } from '../components/MyClassesScreens';
import { TimetableEmpty, TimetableWithClasses } from '../components/TimetableScreens';
import { PerformanceOverview, PerformanceTrend, PerformanceGoals } from '../components/PerformanceScreens';
import { ParentAssignmentsEmpty, ParentAssignmentsFilled } from '../components/ParentAssignmentsScreens';
import { ParentTestsEmpty, ParentTestsFilled } from '../components/ParentTestsScreens';

const StudentParentDashboard = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#fbfbfd]">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-[12px] bg-[#6b35b8] flex items-center justify-content text-white" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Users className="w-5 h-5" />
            </div>
          </div>
          <p className="text-[14px] font-semibold tracking-[-0.01em] mb-2" style={{ color: '#6b35b8' }}>Parent Dashboard</p>
          <h1 className="text-[40px] md:text-[48px] font-semibold text-[#1d1d1f] leading-[1.08] tracking-[-0.035em] mb-4">
            Your child's world. One app.
          </h1>
          <p className="text-[#86868b] text-[17px] max-w-[600px] mx-auto leading-[1.47] tracking-[0.011em]">
            Deep purple premium interface — AI-powered academic health, live performance tracking, weekly reports, and personalized parenting tips.
          </p>
        </motion.div>

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="pp-section-header"
          style={{ textAlign: 'center', marginBottom: 36 }}
        >
          <div className="pp-section-label">EduIntellect Parent App</div>
          <div className="pp-section-title">Smart. Beautiful. Connected.</div>
          <div className="pp-section-desc">Three premium screens showcasing the complete parent experience — from live AI dashboard to downloadable PDF reports.</div>
        </motion.div>

        {/* 3-column grid for the 3 screens */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="pp-sections-grid"
        >
          <ParentHome />
          <ParentProfile />
          <ParentTips />
        </motion.div>

        {/* Student Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginTop: 64, marginBottom: 36 }}
        >
          <div className="pp-section-label" style={{ color: '#28396c' }}>Student Profile</div>
          <div className="pp-section-title">Know your child. Completely.</div>
          <div className="pp-section-desc">Navy-themed student profile with personal info, teacher contacts, term stats, and quick action shortcuts — elegant and informative.</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="sp-sections-grid"
          style={{ justifyItems: 'center' }}
        >
          <StudentProfileScreen />
          <TermOverviewScreen />
        </motion.div>

        {/* My Classes Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginTop: 64, marginBottom: 36 }}
        >
          <div className="pp-section-label" style={{ color: '#28396c' }}>My Classes</div>
          <div className="pp-section-title">Every class. One tap away.</div>
          <div className="pp-section-desc">Color-coded class cards with teacher info, schedules, messaging, enrollment registry, and enrolled teachers — all beautifully organized.</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="sp-sections-grid"
          style={{ justifyItems: 'center' }}
        >
          <MyClassesScreen />
          <RegistryScreen />
        </motion.div>

        {/* Timetable Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginTop: 64, marginBottom: 36 }}
        >
          <div className="pp-section-label" style={{ color: '#28396c' }}>Timetable</div>
          <div className="pp-section-title">Your week. Beautifully planned.</div>
          <div className="pp-section-desc">Interactive day selector, color-coded period cards, week progress strip, and upcoming classes — scheduling made effortless.</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="sp-sections-grid"
          style={{ justifyItems: 'center' }}
        >
          <TimetableEmpty />
          <TimetableWithClasses />
        </motion.div>

        {/* Performance Analytics Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginTop: 64, marginBottom: 36 }}
        >
          <div className="pp-section-label" style={{ color: '#28396c' }}>Performance Analytics</div>
          <div className="pp-section-title">Grades. Trends. Goals.</div>
          <div className="pp-section-desc">Subject-wise progress bars, multi-line trend charts with AI narrative analysis, goal-setting slider, and national benchmark rankings.</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="pp-sections-grid"
        >
          <PerformanceOverview />
          <PerformanceTrend />
          <PerformanceGoals />
        </motion.div>

        {/* Assignments Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginTop: 64, marginBottom: 36 }}
        >
          <div className="pp-section-label" style={{ color: '#28396c' }}>Assignments & Coursework</div>
          <div className="pp-section-title">Stay on top. Every task.</div>
          <div className="pp-section-desc">Horizontal stat pills, smart tab switcher (Pending / Done / Overdue), color-coded assignment cards with deadlines and status — everything at a glance.</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="sp-sections-grid"
          style={{ justifyItems: 'center' }}
        >
          <ParentAssignmentsEmpty />
          <ParentAssignmentsFilled />
        </motion.div>

        {/* Tests & Examinations Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginTop: 64, marginBottom: 36 }}
        >
          <div className="pp-section-label" style={{ color: '#28396c' }}>Tests & Examinations</div>
          <div className="pp-section-title">Assess. Track. Excel.</div>
          <div className="pp-section-desc">Premium hero banner showing the next test, upcoming exam list, recent results with grade chips, and a 4-tier grade breakdown — everything parents need to monitor academic milestones.</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="sp-sections-grid"
          style={{ justifyItems: 'center' }}
        >
          <ParentTestsEmpty />
          <ParentTestsFilled />
        </motion.div>
      </div>
    </div>
  );
};

export default StudentParentDashboard;
