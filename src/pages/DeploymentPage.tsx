import React from 'react';
import { motion } from 'framer-motion';
import { PricingTiers } from '../components/PricingTiers';
import { CtaBanner } from '../components/CtaBanner';
import { TurbineLogo } from '../components/TurbineLogo';
import { Layers, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

export const DeploymentPage: React.FC = () => {
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
          <span>INSTITUTIONAL INTEGRATION</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading text-slate-900 tracking-tight leading-tight">
          Flexible Hospital Deployment <br />
          <span className="text-blue-600">& Pilot Trial Models</span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
          From investigator-initiated clinical research trials to acute hospital-wide Orthogeriatric Co-Management (OGCM) integration, select the appropriate framework.
        </p>

        {/* 3 Step Deployment Process */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto text-left">
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
            <span className="text-xs font-black text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">Phase 01</span>
            <h4 className="font-bold text-slate-900 text-base mt-2">Protocol Review</h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              Complementary review of your institutional trial protocol within 48 hours.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
            <span className="text-xs font-black text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">Phase 02</span>
            <h4 className="font-bold text-slate-900 text-base mt-2">Ward Telemetry Setup</h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              Zero-pairing plug-and-play bedside RF gateways installed with zero IT overhead.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
            <span className="text-xs font-black text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">Phase 03</span>
            <h4 className="font-bold text-slate-900 text-base mt-2">EHR & DMO Ingest</h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              Live automated Digital Mobility Outcomes delivered to surgeon ward tablets.
            </p>
          </div>
        </div>
      </section>

      {/* 1. Deployment & Pricing Tiers */}
      <PricingTiers />

      {/* 2. Bottom CTA Banner */}
      <CtaBanner />
    </motion.div>
  );
};
