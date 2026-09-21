import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatementSection } from './components/StatementSection';
import { ClinicalEvidence } from './components/ClinicalEvidence';
import { BenefitsBentoHub } from './components/BenefitsBentoHub';
import { StickyStepper } from './components/StickyStepper';
import { TestimonialsSlider } from './components/TestimonialsSlider';
import { PartnersGrid } from './components/PartnersGrid';
import { MarqueeTicker } from './components/MarqueeTicker';
import { RadialIntegrationHub } from './components/RadialIntegrationHub';
import { PricingTiers } from './components/PricingTiers';
import { AboutLeadership } from './components/AboutLeadership';
import { FaqAccordion } from './components/FaqAccordion';
import { CtaBanner } from './components/CtaBanner';
import { ConsultationForm } from './components/ConsultationForm';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 overflow-x-hidden selection:bg-blue-600 selection:text-white">
      {/* 1. Header & Navigation */}
      <Navbar />

      <main>
        {/* 2. Hero Section (00:01 - 00:03) */}
        <HeroSection />

        {/* 3. Kinetic Statement Highlight with Expanding Text & Pills (00:04 - 00:06) */}
        <StatementSection />

        {/* 4. Benefits Quad-Grid with Central Glowing Rotating Hub (00:07 - 00:10) */}
        <BenefitsBentoHub />

        {/* 5. Sticky Vertical Stepper (00:11 - 00:17) */}
        <StickyStepper />

        {/* 6. Testimonials Slider (00:18 - 00:21) */}
        <TestimonialsSlider />

        {/* 7. Clinical Partners Horizontal Moving Track (00:22 - 00:26) */}
        <PartnersGrid />

        {/* 8. Infinite Ticker Marquee (00:27) */}
        <MarqueeTicker />

        {/* 9. Radial Architecture & EHR Integration Hub (00:28 - 00:34) */}
        <RadialIntegrationHub />

        {/* 10. Simple & Flexible Deployment Plans (00:35 - 00:40) */}
        <PricingTiers />

        {/* 11. Clinical Evidence & Health Economic Data (Official BIOS Charts) */}
        <ClinicalEvidence />

        {/* 12. Swiss Leadership & Scientific Advisory Board */}
        <AboutLeadership />

        {/* 12. FAQ Accordion (00:41 - 00:43) */}
        <FaqAccordion />

        {/* 13. Full-Width Bottom Hero Banner CTA (00:44 - 00:46) */}
        <CtaBanner />

        {/* 14. Comprehensive Clinical Consultation & Trial Request Form */}
        <div id="contact" className="scroll-mt-20" />
        <ConsultationForm />
      </main>

      {/* 15. Modern Footer with Interactive Pages Modal */}
      <Footer />
    </div>
  );
};

export default App;
