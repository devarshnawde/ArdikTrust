import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import CompliancePage from './pages/CompliancePage';
import PenetrationTestingPage from './pages/PenetrationTestingPage';
import IdentityAccessPage from './pages/IdentityAccessPage';
import SecurityAuditsPage from './pages/SecurityAuditsPage';
import SecurityMonitoringPage from './pages/SecurityMonitoringPage';
import ActiveDirectoryPage from './pages/ActiveDirectoryPage';
import IndustriesPage from './pages/IndustriesPage';
import InsightsPage from './pages/InsightsPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';

// 404 Page
function NotFound() {
  return (
    <div className="min-h-screen hero-gradient flex items-center justify-center">
      <div className="text-center text-white px-4">
        <div className="text-9xl font-extrabold font-poppins text-gradient-green mb-4">404</div>
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-blue-200 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <a href="/" className="btn-primary">Return Home</a>
      </div>
    </div>
  );
}

// Simple privacy / terms placeholder
function SimplePage({ title }) {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold font-poppins text-gray-900 mb-6">{title}</h1>
      <p className="text-gray-500 text-lg leading-relaxed">
        This page is coming soon. For questions, contact us at{' '}
        <a href="mailto:connect@ardiktrust.com" className="text-blue-600 hover:underline">connect@ardiktrust.com</a>.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/compliance" element={<CompliancePage />} />
          <Route path="services/penetration-testing" element={<PenetrationTestingPage />} />
          <Route path="services/identity-access" element={<IdentityAccessPage />} />
          <Route path="services/security-audits" element={<SecurityAuditsPage />} />
          <Route path="services/security-monitoring" element={<SecurityMonitoringPage />} />
          <Route path="services/active-directory" element={<ActiveDirectoryPage />} />
          <Route path="industries" element={<IndustriesPage />} />
          <Route path="insights" element={<InsightsPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy" element={<SimplePage title="Privacy Policy" />} />
          <Route path="terms" element={<SimplePage title="Terms of Service" />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
