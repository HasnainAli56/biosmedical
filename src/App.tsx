import React from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

// Dedicated Page Components
import { HomePage } from './pages/HomePage';
import { TechnologyPage } from './pages/TechnologyPage';
import { WhyChoosePage } from './pages/WhyChoosePage';
import { EvidencePage } from './pages/EvidencePage';
import { AboutPage } from './pages/AboutPage';
import { PartnersPage } from './pages/PartnersPage';
import { DeploymentPage } from './pages/DeploymentPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { DetailPage } from './pages/DetailPage';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="/why-choose" element={<WhyChoosePage />} />
        <Route path="/evidence" element={<EvidencePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/deployment" element={<DeploymentPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/page/:pageId" element={<DetailPage />} />
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#f8fafc] text-slate-900 overflow-x-hidden selection:bg-blue-600 selection:text-white flex flex-col justify-between">
        <ScrollToTop />
        
        {/* Persistent Global Header with Adaptive State */}
        <Navbar />

        {/* Dynamic Route View with Smooth Page Transitions */}
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
