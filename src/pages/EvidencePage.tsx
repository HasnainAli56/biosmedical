import React from 'react';
import { motion } from 'framer-motion';
import { ClinicalEvidence } from '../components/ClinicalEvidence';
import { CtaBanner } from '../components/CtaBanner';
import { TurbineLogo } from '../components/TurbineLogo';
import { FileText, TrendingUp, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const EvidencePage: React.FC = () => {
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
          <span>EVIDENCE-BASED HEALTH ECONOMICS</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading text-slate-900 tracking-tight leading-tight">
          Clinical Evidence & <br />
          <span className="text-blue-600">Health Economic Impact</span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
          Hip fractures create a worldwide medical emergency. Review the epidemiology data, post-operative mortality surge, and the 6.7x budget explosion projected across European healthcare systems.
        </p>
      </section>

      {/* 1. Clinical Evidence & Health Economic Data Tabs */}
      <ClinicalEvidence />

      {/* 2. Research Dossier Download Strip */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Request Full Clinical Whitepaper Dossier</h3>
              <p className="text-sm text-slate-600 mt-1 max-w-xl">
                Access complete biomechanical validation data, comparative gait velocity curves, and peer-reviewed AO Foundation study publications.
              </p>
            </div>
          </div>

          <Link
            to="/contact"
            className="px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold flex items-center gap-2 shadow-md shrink-0 transition-all"
          >
            <span>Request Research Dossier</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 3. Bottom CTA Banner */}
      <CtaBanner />
    </motion.div>
  );
};
