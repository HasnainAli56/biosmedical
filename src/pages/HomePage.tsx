import React from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '../components/HeroSection';
import { SeniorVisualGallery } from '../components/SeniorVisualGallery';
import { StickyStepper } from '../components/StickyStepper';
import { BenefitsBentoHub } from '../components/BenefitsBentoHub';
import { ClinicalEvidence } from '../components/ClinicalEvidence';
import { PartnersGrid } from '../components/PartnersGrid';
import { AboutLeadership } from '../components/AboutLeadership';
import { MarqueeTicker } from '../components/MarqueeTicker';
import { TestimonialsSlider } from '../components/TestimonialsSlider';
import { CtaBanner } from '../components/CtaBanner';

export const HomePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* 1. Hero Section with Real Sensor & Real Patient Walking Photo */}
      <HeroSection />

      {/* 2. Visual Technology & Patient Recovery Gallery with Authentic Photos */}
      <SeniorVisualGallery />

      {/* 3. Three-Step Patient Recovery Guide with Real X-ray, Process & Caregiver Images */}
      <StickyStepper />

      {/* 3. Core Capabilities Bento with Real Sensor Positioning & Reassurance */}
      <BenefitsBentoHub />

      {/* 4. Clinical Evidence with Authentic Medical Recovery Charts */}
      <ClinicalEvidence />

      {/* 5. Infinite Ticker Marquee */}
      <MarqueeTicker />

      {/* 6. Healthcare Providers, Clinics & Doctor Review Photo */}
      <PartnersGrid />

      {/* 7. Swiss Biomechanics Team & Scientific Advisory */}
      <AboutLeadership />

      {/* 8. Patient & Surgeon Testimonials */}
      <TestimonialsSlider />

      {/* 9. Bottom Request Consultation Banner */}
      <CtaBanner />
    </motion.div>
  );
};
