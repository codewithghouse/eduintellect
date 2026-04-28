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
import { AIPracticeHome, AIPracticeUpload } from '../components/AIPracticeScreens';
import { ConceptStrengthsTab, ConceptStudyPlan, ConceptExplainPractice } from '../components/ConceptStrengthsScreens';
import { BehaviourOverview, BehaviourTrend } from '../components/BehaviourScreens';
import { MessagesEmpty, MessagesSelectTeacher, MessagesChat } from '../components/MessagesScreens';
import { SchoolMessages } from '../components/SchoolMessagesScreen';
import { FeeStatusEmpty, FeeStatusFilled } from '../components/FeeStatusScreens';
import { AcademicReportsList, AcademicReportsPolicy } from '../components/AcademicReportsScreens';
import { AlertsAll, AlertsAcademic } from '../components/AlertsScreens';
import { SettingsPreferences, SettingsAlertsSecurity } from '../components/SettingsScreens';

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
          <p className="text-[14px] font-normal tracking-[-0.01em] mb-2" style={{ color: '#6b35b8' }}>Parent Dashboard</p>
          <h1 className="text-[40px] md:text-[48px] font-normal text-[#1d1d1f] leading-[1.08] tracking-[-0.035em] mb-4">
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

        {/* AI Practice Exams Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginTop: 64, marginBottom: 36 }}
        >
          <div className="pp-section-label" style={{ color: '#28396c' }}>AI Practice Exams · USP Feature</div>
          <div className="pp-section-title">Upload. Practice. Master.</div>
          <div className="pp-section-desc">Revolutionary AI-powered practice exams — upload any syllabus PDF, get auto-generated questions, track your streak with a GitHub-style heatmap, and learn from every mistake.</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="sp-sections-grid"
          style={{ justifyItems: 'center' }}
        >
          <AIPracticeHome />
          <AIPracticeUpload />
        </motion.div>

        {/* Concept Strengths Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginTop: 64, marginBottom: 36 }}
        >
          <div className="pp-section-label" style={{ color: '#28396c' }}>Concept Strengths · AI Learning Suite</div>
          <div className="pp-section-title">Identify. Explain. Excel.</div>
          <div className="pp-section-desc">Five powerful AI tools in one — strength analysis, personalized study plans, instant concept explainer, practice problem generator, and Socratic doubt solver with photo upload.</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="pp-sections-grid"
        >
          <ConceptStrengthsTab />
          <ConceptStudyPlan />
          <ConceptExplainPractice />
        </motion.div>

        {/* Behaviour & Discipline Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginTop: 64, marginBottom: 36 }}
        >
          <div className="pp-section-label" style={{ color: '#28396c' }}>Behaviour &amp; Discipline</div>
          <div className="pp-section-title">Character. Conduct. Growth.</div>
          <div className="pp-section-desc">Beyond grades — track your child's behavioral journey with teacher-rated star scores, positive highlights, monthly summaries, trend charts, and personalized teacher comments.</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="sp-sections-grid"
          style={{ justifyItems: 'center' }}
        >
          <BehaviourOverview />
          <BehaviourTrend />
        </motion.div>

        {/* Messages Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginTop: 64, marginBottom: 36 }}
        >
          <div className="pp-section-label" style={{ color: '#28396c' }}>Direct Messaging</div>
          <div className="pp-section-title">Parents. Teachers. Connected.</div>
          <div className="pp-section-desc">Seamless two-way messaging with your child's teachers — search, select a teacher, and chat in real-time with rich chat bubbles, online indicators, read receipts, and file attachments.</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="pp-sections-grid"
        >
          <MessagesEmpty />
          <MessagesSelectTeacher />
          <MessagesChat />
        </motion.div>

        {/* School Administration Messages Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginTop: 64, marginBottom: 36 }}
        >
          <div className="pp-section-label" style={{ color: '#28396c' }}>School Administration · Principal's Direct Line</div>
          <div className="pp-section-title">Every announcement. Delivered with purpose.</div>
          <div className="pp-section-desc">Official school communications — no more missed WhatsApp forwards or lost paper notes. Principals broadcast important updates directly to parents with priority banners, timestamped delivery, read receipts, and a permanent record for compliance and accountability.</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <SchoolMessages />
        </motion.div>

        {/* Fee Status Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginTop: 64, marginBottom: 36 }}
        >
          <div className="pp-section-label" style={{ color: '#28396c' }}>Fee Status · Complete Financial Clarity</div>
          <div className="pp-section-title">Every rupee. Accounted for.</div>
          <div className="pp-section-desc">End the era of paper receipts, WhatsApp follow-ups, and missed deadlines. A single source of truth for tuition fees, exam charges, and term payments — with transaction history, status chips, overdue alerts, and direct admin contact. Built for transparency, designed to delight.</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="sp-sections-grid"
          style={{ justifyItems: 'center' }}
        >
          <FeeStatusEmpty />
          <FeeStatusFilled />
        </motion.div>

        {/* Academic Reports Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginTop: 64, marginBottom: 36 }}
        >
          <div className="pp-section-label" style={{ color: '#28396c' }}>Academic Reports · Verified Documentation Pipeline</div>
          <div className="pp-section-title">Every report. Verified. Authoritative.</div>
          <div className="pp-section-desc">Institutional-grade academic documentation — faculty-generated reports, delivered directly to parents with cryptographic verification, 30-day archival, quote previews, and one-tap downloads. Trust built into every document. Compliance by design.</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="sp-sections-grid"
          style={{ justifyItems: 'center' }}
        >
          <AcademicReportsList />
          <AcademicReportsPolicy />
        </motion.div>

        {/* Alerts & Notifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginTop: 64, marginBottom: 36 }}
        >
          <div className="pp-section-label" style={{ color: '#28396c' }}>Alerts &amp; Notifications · Actionable Intelligence</div>
          <div className="pp-section-title">Nothing slips through. Ever.</div>
          <div className="pp-section-desc">A smart alerts center that doesn't just notify — it recommends next steps. Priority-coded cards, category filters (Academic · Attendance · General · Urgent), celebration of good news, and one-tap actions like <em>Reply to Teacher</em> or <em>View Performance</em>. Every notification ends with a decision, not a dead end.</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="sp-sections-grid"
          style={{ justifyItems: 'center' }}
        >
          <AlertsAll />
          <AlertsAcademic />
        </motion.div>

        {/* Portal Preferences / Settings Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginTop: 64, marginBottom: 36 }}
        >
          <div className="pp-section-label" style={{ color: '#28396c' }}>Portal Preferences · Enterprise-Grade Account Control</div>
          <div className="pp-section-title">Your settings. Your signal.</div>
          <div className="pp-section-desc">A sovereign account command center for verified guardians — identity verification, granular notification matrix, biometric key management, and institutional-grade security operations. Built with transparency and trust at every layer. Consent-driven. Privacy-first. Zero dark patterns.</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="sp-sections-grid"
          style={{ justifyItems: 'center' }}
        >
          <SettingsPreferences />
          <SettingsAlertsSecurity />
        </motion.div>
      </div>
    </div>
  );
};

export default StudentParentDashboard;
