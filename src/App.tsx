import type { ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import OwnerLoginPage from './pages/OwnerLoginPage';
import WelcomePage from './pages/WelcomePage';
import ActivatePage from './pages/ActivatePage';
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
import { AuthProvider } from './lib/auth';

// Content / SEO pages (Phase 1 — category, entity, comparison, role, search-capture)
import EducationIntelligencePlatformPage from './pages/content/EducationIntelligencePlatformPage';
import WhatIsEdullentPage from './pages/content/WhatIsEdullentPage';
import AboutEdullentPage from './pages/content/AboutEdullentPage';
import SchoolErpVsEducationIntelligencePage from './pages/content/SchoolErpVsEducationIntelligencePage';
import ForSchoolOwnersPage from './pages/content/ForSchoolOwnersPage';
import ForPrincipalsPage from './pages/content/ForPrincipalsPage';
import ForTeachersPage from './pages/content/ForTeachersPage';
import ForParentsPage from './pages/content/ForParentsPage';
import BestSchoolManagementSoftwareIndiaPage from './pages/content/search-capture/BestSchoolManagementSoftwareIndiaPage';
import AdvancedSchoolSoftwarePage from './pages/content/search-capture/AdvancedSchoolSoftwarePage';
import ModernSchoolOperatingSystemPage from './pages/content/search-capture/ModernSchoolOperatingSystemPage';
import FutureOfSchoolManagementPage from './pages/content/search-capture/FutureOfSchoolManagementPage';
import SmartSchoolPlatformPage from './pages/content/search-capture/SmartSchoolPlatformPage';
import EducationOperatingSystemPage from './pages/content/search-capture/EducationOperatingSystemPage';
import SchoolAnalyticsPlatformPage from './pages/content/search-capture/SchoolAnalyticsPlatformPage';
import StudentIntelligencePlatformPage from './pages/content/search-capture/StudentIntelligencePlatformPage';

// Content / SEO pages — Phase 2 (insights + research)
import InsightsIndexPage from './pages/content/insights/InsightsIndexPage';
import InsightsCategoryPage from './pages/content/insights/InsightsCategoryPage';
import InsightArticlePage from './pages/content/insights/InsightArticlePage';
import ResearchIndexPage from './pages/content/research/ResearchIndexPage';
import ResearchArticlesPage from './pages/content/research/ResearchArticlesPage';
import ResearchReportsPage from './pages/content/research/ResearchReportsPage';
import ResearchTrendsPage from './pages/content/research/ResearchTrendsPage';

import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminLayout from './components/admin/AdminLayout';
import ProtectedAdminRoute from './components/admin/ProtectedAdminRoute';
import AdminOverview from './pages/admin/AdminOverview';
import AdminSchools from './pages/admin/AdminSchools';
import AdminSchoolDetail from './pages/admin/AdminSchoolDetail';
import AdminAdmins from './pages/admin/AdminAdmins';
import AdminRequests from './pages/admin/AdminRequests';
import AdminInfo from './pages/admin/AdminInfo';
import ContactPage from './pages/ContactPage';

const IPadPreview = ({ children }: { children: ReactNode }) => (
  <div style={{ minHeight: '100vh', background: '#f5f5f7', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40 }}>
    <div style={{ width: 1100 }}>{children}</div>
  </div>
);

function PublicShell({ children }: { children: ReactNode }) {
  const location = useLocation();
  if (location.pathname.startsWith('/admin')) {
    return <>{children}</>;
  }
  return (
    <>
      <Layout>{children}</Layout>
      <SplashScreen />
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <PublicShell>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<OwnerLoginPage />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/activate" element={<ActivatePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/owner" element={<OwnerDashboard />} />
            <Route path="/principal" element={<PrincipalDashboard />} />
            <Route path="/teacher" element={<TeacherDashboard />} />
            <Route path="/parent" element={<StudentParentDashboard />} />
            <Route path="/student-parent" element={<Navigate to="/parent" replace />} />

            {/* Feature pages (linked from footer) */}
            <Route path="/features/ai-monitoring" element={<AIMonitoring />} />
            <Route path="/features/attendance"    element={<DigitalAttendance />} />
            <Route path="/features/reports"       element={<ReportGeneration />} />
            <Route path="/features/fees"          element={<FeeManagement />} />

            {/* Legal pages (linked from footer) */}
            <Route path="/legal/privacy" element={<PrivacyPolicy />} />
            <Route path="/legal/terms"   element={<TermsOfUse />} />
            <Route path="/legal"         element={<Legal />} />

            {/* ── Content / SEO routes — Phase 1 ───────────────────────── */}
            <Route path="/education-intelligence-platform"     element={<EducationIntelligencePlatformPage />} />
            <Route path="/what-is-edullent"                    element={<WhatIsEdullentPage />} />
            <Route path="/about/edullent"                      element={<AboutEdullentPage />} />
            <Route path="/school-erp-vs-education-intelligence" element={<SchoolErpVsEducationIntelligencePage />} />
            <Route path="/for-school-owners"                   element={<ForSchoolOwnersPage />} />
            <Route path="/for-principals"                      element={<ForPrincipalsPage />} />
            <Route path="/for-teachers"                        element={<ForTeachersPage />} />
            <Route path="/for-parents"                         element={<ForParentsPage />} />
            <Route path="/best-school-management-software-india" element={<BestSchoolManagementSoftwareIndiaPage />} />
            <Route path="/top-school-management-software-india"  element={<Navigate to="/best-school-management-software-india" replace />} />
            <Route path="/advanced-school-software"            element={<AdvancedSchoolSoftwarePage />} />
            <Route path="/modern-school-operating-system"      element={<ModernSchoolOperatingSystemPage />} />
            <Route path="/future-of-school-management"         element={<FutureOfSchoolManagementPage />} />
            <Route path="/smart-school-platform"               element={<SmartSchoolPlatformPage />} />
            <Route path="/education-operating-system"          element={<EducationOperatingSystemPage />} />
            <Route path="/school-analytics-platform"           element={<SchoolAnalyticsPlatformPage />} />
            <Route path="/student-intelligence-platform"       element={<StudentIntelligencePlatformPage />} />

            {/* ── Content / SEO routes — Phase 2 (insights + research) ─── */}
            {/* Order matters: more specific paths must come first */}
            <Route path="/insights"                            element={<InsightsIndexPage />} />
            <Route path="/insights/category/:slug"             element={<InsightsCategoryPage />} />
            <Route path="/insights/:slug"                      element={<InsightArticlePage />} />
            <Route path="/research"                            element={<ResearchIndexPage />} />
            <Route path="/research/articles"                   element={<ResearchArticlesPage />} />
            <Route path="/research/reports"                    element={<ResearchReportsPage />} />
            <Route path="/research/trends"                     element={<ResearchTrendsPage />} />

            <Route path="/_preview/owner-dashboard" element={<IPadPreview><OwnerDashboardIPad /></IPadPreview>} />
            <Route path="/_preview/teacher-summarize" element={<IPadPreview><TeacherSummarizeLessonIPad /></IPadPreview>} />

            {/* Admin */}
            <Route path="/admin/login" element={<AdminLoginPage />} />
            <Route
              path="/admin"
              element={
                <ProtectedAdminRoute>
                  <AdminLayout />
                </ProtectedAdminRoute>
              }
            >
              <Route index element={<AdminOverview />} />
              <Route path="schools" element={<AdminSchools />} />
              <Route path="schools/:id" element={<AdminSchoolDetail />} />
              <Route path="requests" element={<AdminRequests />} />
              <Route path="info" element={<AdminInfo />} />
              <Route path="admins" element={<AdminAdmins />} />
            </Route>
          </Routes>
        </PublicShell>
      </Router>
    </AuthProvider>
  );
}

export default App;
