 import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './Layout';

// Import all your pages
import Welcome from './pages/Welcome';
import Dashboard from './pages/Dashboard';
import BrandBuilder from './pages/BrandBuilder';
import MVPCreator from './pages/MVPCreator';
import LoopBuilder from './pages/LoopBuilder';
import Pricing from './pages/Pricing';
import Profile from './pages/Profile';
import InvestorHub from './pages/InvestorHub';
import AdminHub from './pages/AdminHub';
import Marketing from './pages/Marketing';
import Documentation from './pages/Documentation';
import Training from './pages/Training';
import Legal from './pages/Legal';
import LogoGenerator from './pages/LogoGenerator';
import SetupGuide from './pages/SetupGuide';
import RevenueTracking from './pages/RevenueTracking';
import Knowledge from './pages/Knowledge';
import MVPBuilderPreview from './pages/MVPBuilderPreview';
import ContactHub from './pages/ContactHub';
import LegalDocumentGenerator from './pages/LegalDocumentGenerator';
import AutomationHub from './pages/AutomationHub';
import PaymentSuccess from './pages/PaymentSuccess';
import PaymentCancelled from './pages/PaymentCancelled';
import CloudDeployment from './pages/CloudDeployment';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          {/* Public route without layout */}
          <Route path="/Welcome" element={<Welcome />} />
          
          {/* Protected routes with layout */}
          <Route path="/Dashboard" element={<Layout               currentPageName="Dashboard"><Dashboard /></Layout>} />
          <Route path="/BrandBuilder" element={<Layout currentPageName="BrandBuilder"><BrandBuilder /></Layout>} />
          <Route path="/MVPCreator" element={<Layout currentPageName="MVPCreator"><MVPCreator /></Layout>} />
          <Route path="/LoopBuilder" element={<Layout currentPageName="LoopBuilder"><LoopBuilder /></Layout>} />
          <Route path="/Pricing" element={<Layout currentPageName="Pricing"><Pricing /></Layout>} />
          <Route path="/Profile" element={<Layout currentPageName="Profile"><Profile /></Layout>} />
          <Route path="/InvestorHub" element={<Layout currentPageName="InvestorHub"><InvestorHub /></Layout>} />
          <Route path="/AdminHub" element={<Layout currentPageName="AdminHub"><AdminHub /></Layout>} />
          <Route path="/Marketing" element={<Layout currentPageName="Marketing"><Marketing /></Layout>} />
          <Route path="/Documentation" element={<Layout currentPageName="Documentation"><Documentation /></Layout>} />
          <Route path="/Training" element={<Layout currentPageName="Training"><Training /></Layout>} />
          <Route path="/Legal" element={<Layout currentPageName="Legal"><Legal /></Layout>} />
          <Route path="/LogoGenerator" element={<Layout currentPageName="LogoGenerator"><LogoGenerator /></Layout>} />
          <Route path="/SetupGuide" element={<Layout currentPageName="SetupGuide"><SetupGuide /></Layout>} />
          <Route path="/RevenueTracking" element={<Layout currentPageName="RevenueTracking"><RevenueTracking /></Layout>} />
          <Route path="/Knowledge" element={<Layout currentPageName="Knowledge"><Knowledge /></Layout>} />
          <Route path="/MVPBuilderPreview" element={<Layout currentPageName="MVPBuilderPreview"><MVPBuilderPreview /></Layout>} />
          <Route path="/ContactHub" element={<Layout currentPageName="ContactHub"><ContactHub /></Layout>} />
          <Route path="/LegalDocumentGenerator" element={<Layout currentPageName="LegalDocumentGenerator"><LegalDocumentGenerator /></Layout>} />
          <Route path="/AutomationHub" element={<Layout currentPageName="AutomationHub"><AutomationHub /></Layout>} />
          <Route path="/PaymentSuccess" element={<Layout currentPageName="PaymentSuccess"><PaymentSuccess /></Layout>} />
          <Route path="/PaymentCancelled" element={<Layout currentPageName="PaymentCancelled"><PaymentCancelled /></Layout>} />
          <Route path="/CloudDeployment" element={<Layout currentPageName="CloudDeployment"><CloudDeployment /></Layout>} />
          
          {/* Default redirect */}
          <Route path="/" element={<Navigate to="/Welcome" replace />} />
          <Route path="*" element={<Navigate to="/Welcome" replace />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
