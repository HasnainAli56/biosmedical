import React from 'react';
import { motion } from 'framer-motion';
import { BenefitsBentoHub } from '../components/BenefitsBentoHub';
import { RadialIntegrationHub } from '../components/RadialIntegrationHub';
import { CtaBanner } from '../components/CtaBanner';
import { TurbineLogo } from '../components/TurbineLogo';
import { Activity, Database, Shield, Zap, CheckCircle2 } from 'lucide-react';

export const TechnologyPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="pt-24 sm:pt-28"
    >
      {/* Page Hero Header */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs sm:text-sm font-bold tracking-wide uppercase mb-4">
          <TurbineLogo size={15} animate={true} />
          <span>TECHNOLOGY & INFRASTRUCTURE</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading text-slate-900 tracking-tight leading-tight">
          Next-Generation Implanted Sensing <br />
          <span className="text-blue-600">& Sovereign Cloud Telemetry</span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
          HIPbeacon™ combines ultra-low power biomechanical sensors with automated Digital Mobility Outcomes (DMO) computation and direct HL7 FHIR hospital EHR synchronization.
        </p>

        {/* Feature Pill Tags */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-bold text-slate-700">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200/90 shadow-2xs">
            <CheckCircle2 className="w-4 h-4 text-blue-600" />
            <span>Biocompatible Ti-6Al-4V Titanium</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200/90 shadow-2xs">
            <CheckCircle2 className="w-4 h-4 text-amber-500" />
            <span>Sub-Minute Surgical Insertion</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200/90 shadow-2xs">
            <CheckCircle2 className="w-4 h-4 text-blue-600" />
            <span>AES-256 Cloud Encryption</span>
          </div>
        </div>
      </section>

      {/* 1. Benefits Bento Hub */}
      <BenefitsBentoHub />

      {/* 2. Radial Integration Hub */}
      <RadialIntegrationHub />

      {/* 3. Bottom CTA Banner */}
      <CtaBanner />
    </motion.div>
  );
};
