import type { ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import OwnerDashboard from './pages/OwnerDashboard';
import PrincipalDashboard from './pages/PrincipalDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import StudentParentDashboard from './pages/StudentParentDashboard';
import AIMonitoring from './pages/features/AIMonitoring';
import DigitalAttendance from './pages/features/DigitalAttendance';
import ReportGeneration from './pages/features/ReportGeneration';
import FeeManagement from './pages/features/FeeManagement';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfUse from './pages/legal/TermsOfUse';
import Legal from './pages/legal/Legal';
import { SplashScreen } from './components/SplashScreen';
import ScrollToTop from './components/ScrollToTop';
import OwnerDashboardIPad from './components/ipad/OwnerDashboardIPad';
import TeacherSummarizeLessonIPad from './components/ipad/TeacherSummarizeLessonIPad';

const IPadPreview = ({ children }: { children: ReactNode }) => (
  <div style={{ minHeight: '100vh', background: '#f5f5f7', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40 }}>
    <div style={{ width: 1100 }}>{children}</div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/owner" element={<OwnerDashboard />} />
          <Route path="/principal" element={<PrincipalDashboard />} />
          <Route path="/teacher" element={<TeacherDashboard />} />
          <Route path="/student-parent" element={<StudentParentDashboard />} />

          {/* Feature pages (linked from footer) */}
          <Route path="/features/ai-monitoring" element={<AIMonitoring />} />
          <Route path="/features/attendance"    element={<DigitalAttendance />} />
          <Route path="/features/reports"       element={<ReportGeneration />} />
          <Route path="/features/fees"          element={<FeeManagement />} />

          {/* Legal pages (linked from footer) */}
          <Route path="/legal/privacy" element={<PrivacyPolicy />} />
          <Route path="/legal/terms"   element={<TermsOfUse />} />
          <Route path="/legal"         element={<Legal />} />

          <Route path="/_preview/owner-dashboard" element={<IPadPreview><OwnerDashboardIPad /></IPadPreview>} />
          <Route path="/_preview/teacher-summarize" element={<IPadPreview><TeacherSummarizeLessonIPad /></IPadPreview>} />
        </Routes>
      </Layout>
      <SplashScreen />
    </Router>
  );
}

export default App;
