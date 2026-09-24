import React from 'react';
import { motion } from 'framer-motion';
import { StickyStepper } from '../components/StickyStepper';
import { CtaBanner } from '../components/CtaBanner';
import { TurbineLogo } from '../components/TurbineLogo';
import { ShieldCheck, TrendingDown, Home, Award } from 'lucide-react';

export const WhyChoosePage: React.FC = () => {
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
          <span>PROVEN CLINICAL ADVANTAGE</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading text-slate-900 tracking-tight leading-tight">
          Why Orthopedic Leaders <br />
          <span className="text-blue-600">Choose HIPbeacon™</span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
          Orthogeriatric Co-Management (OGCM) achieves a proven 22% mortality reduction. HIPbeacon provides continuous objective telemetry to eliminate blind spots in post-operative fracture recovery.
        </p>

        {/* 3 Value Pillars */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto text-left">
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 text-base">Early Mobilization</h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              Objective weight-bearing and gait velocity telemetry from day 1 post-op.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-3">
              <TrendingDown className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 text-base">-22% Mortality</h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              Early detection of immobility, micro-instability, and fall hazards.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
              <Home className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 text-base">Return Home Safe</h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              Shortens acute hospital stays by 4.2 days and prevents nursing home admissions.
            </p>
          </div>
        </div>
      </section>

      {/* 1. Sticky Stepper Section */}
      <StickyStepper />

      {/* 2. Bottom CTA Banner */}
      <CtaBanner />
    </motion.div>
  );
};
