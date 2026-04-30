import type { ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import OwnerDashboard from './pages/OwnerDashboard';
import PrincipalDashboard from './pages/PrincipalDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import StudentParentDashboard from './pages/StudentParentDashboard';
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
          <Route path="/_preview/owner-dashboard" element={<IPadPreview><OwnerDashboardIPad /></IPadPreview>} />
          <Route path="/_preview/teacher-summarize" element={<IPadPreview><TeacherSummarizeLessonIPad /></IPadPreview>} />
        </Routes>
      </Layout>
      <SplashScreen />
    </Router>
  );
}

export default App;
