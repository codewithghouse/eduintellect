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
        </Routes>
      </Layout>
      <SplashScreen />
    </Router>
  );
}

export default App;
