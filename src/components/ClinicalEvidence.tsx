import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TurbineLogo } from './TurbineLogo';
import { TrendingUp, AlertOctagon, HeartCrack, Home, ShieldCheck, ArrowRight, FileText, CheckCircle2 } from 'lucide-react';

export const ClinicalEvidence: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'stats' | 'economics'>('stats');

  return (
    <section id="evidence" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header (Slide from Top) */}
      <motion.div 
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold mb-3">
          <TurbineLogo size={14} animate={true} />
          <span>CLINICAL EVIDENCE & HEALTH ECONOMICS</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
          The Urgent Need For <br />
          <span className="text-blue-600">Continuous Post-Fracture Telemetry</span>
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Hip fractures represent a catastrophic health crisis for older adults and healthcare systems worldwide. 
          Here is why real-time data at the implant site changes everything.
        </p>
      </motion.div>

      {/* Main Interactive Card Container (Slide from Bottom) */}
      <motion.div 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-[32px] bg-white border border-slate-200/90 shadow-2xl p-5 sm:p-8 lg:p-10 relative overflow-hidden"
      >
        
        {/* Subtle mesh backdrop glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none" />

        {/* Tab Switcher (Dribbble pill style) */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-full bg-slate-100 border border-slate-200/80 gap-2">
            <button
              onClick={() => setActiveTab('stats')}
              className={`relative px-7 py-3 rounded-full text-sm font-bold transition-colors cursor-pointer ${
                activeTab === 'stats' ? 'text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {activeTab === 'stats' && (
                <motion.div
                  layoutId="activeTabBadge"
                  className="absolute inset-0 rounded-full bg-blue-600 shadow-md"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <HeartCrack className="w-4 h-4 text-blue-500" />
                <span>Global Fracture Mortality (1.7M)</span>
              </span>
            </button>

            <button
              onClick={() => setActiveTab('economics')}
              className={`relative px-7 py-3 rounded-full text-sm font-bold transition-colors cursor-pointer ${
                activeTab === 'economics' ? 'text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {activeTab === 'economics' && (
                <motion.div
                  layoutId="activeTabBadge"
                  className="absolute inset-0 rounded-full bg-blue-600 shadow-md"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-300" />
                <span>Health Economic Explosion (6.7x)</span>
              </span>
            </button>
          </div>
        </div>

        {/* Tab Content Display with Framer Motion AnimatePresence */}
        <AnimatePresence mode="wait">
          {activeTab === 'stats' ? (
            <motion.div
              key="stats"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              {/* Left Column: Real Chart Graphic (Slide from Left) */}
              <motion.div 
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7 bg-[#f4f8fa] rounded-3xl p-7 border border-slate-200/80 shadow-inner relative group"
              >
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200/60 text-sm font-bold text-slate-600">
                  <span className="flex items-center gap-2 text-blue-700 font-extrabold">
                    <TurbineLogo size={16} animate={true} />
                    Official BIOS Clinical Epidemiology
                  </span>
                  <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-black">
                    High Risk Cohort
                  </span>
                </div>

                <div className="relative rounded-2xl overflow-hidden bg-white p-4 shadow-sm border border-slate-100 flex items-center justify-center">
                  <img
                    src="/bios_live/life_threat_chart.png"
                    alt="Life-threatening complications of hip fractures from biosmedical.care"
                    className="w-full max-h-[380px] object-contain"
                  />
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>Source: International Osteoporosis Foundation & BIOS AG</span>
                  <span className="font-bold text-blue-600">HIPbeacon Target Population</span>
                </div>
              </motion.div>

              {/* Right Column: Key Metrics & Narrative (Slide from Right) */}
              <motion.div 
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-5 space-y-6"
              >
                <div>
                  <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-700 mb-1">
                    The Silent Epidemic
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
                    More Than Just A Broken Bone
                  </h3>
                  <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    A hip fracture often marks the rapid deterioration of health for elderly patients. Inability to regain early mobility leads to secondary pneumonia, thrombosis, pressure ulcers, and premature death.
                  </p>
                </div>

                {/* 4 Stat Cards Grid (Standardized to solid blue & yellow) */}
                <div className="grid grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200">
                    <div className="text-3xl font-black text-blue-700">1.7M</div>
                    <div className="text-xs font-bold text-slate-800 mt-1">Fractures Annually</div>
                    <div className="text-xs text-slate-500">Growing worldwide</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200">
                    <div className="text-3xl font-black text-blue-700">25%</div>
                    <div className="text-xs font-bold text-slate-800 mt-1">1-Year Mortality</div>
                    <div className="text-xs text-slate-500">Post-fracture rate</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200">
                    <div className="text-3xl font-black text-blue-700">3-4x</div>
                    <div className="text-xs font-bold text-slate-800 mt-1">Mortality Surge</div>
                    <div className="text-xs text-slate-500">Compared to peers</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200">
                    <div className="text-3xl font-black text-blue-700">10-15%</div>
                    <div className="text-xs font-bold text-slate-800 mt-1">Never Return Home</div>
                    <div className="text-xs text-slate-500">Permanent nursing care</div>
                  </div>
                </div>

                {/* The BIOS Solution Pill */}
                <div className="p-4.5 rounded-2xl bg-blue-50 border border-blue-200 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-blue-950">The BIOS Medical Advantage: -22% Mortality</div>
                    <div className="text-xs sm:text-sm text-blue-800 mt-1 leading-relaxed">
                      Real-time telemetry empowers Orthogeriatric Co-Management (OGCM), driving early weight-bearing and cutting 1-year mortality by 22%.
                    </div>
                  </div>
                </div>

              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="economics"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              {/* Left Column: Real Economic Cost Graphic (Slide from Left) */}
              <motion.div 
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7 bg-[#f4f8fa] rounded-3xl p-7 border border-slate-200/80 shadow-inner relative group"
              >
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200/60 text-sm font-bold text-slate-600">
                  <span className="flex items-center gap-2 text-blue-700 font-extrabold">
                    <TurbineLogo size={16} animate={true} />
                    Projected European Health Economic Model (2020 – 2050)
                  </span>
                  <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-black">
                    6.7x Escalation
                  </span>
                </div>

                <div className="relative rounded-2xl overflow-hidden bg-white p-4 shadow-sm border border-slate-100 flex items-center justify-center">
                  <img
                    src="/bios_live/mobilization_chart.png"
                    alt="Mobilization and Recovery Timeline from biosmedical.care"
                    className="w-full max-h-[380px] object-contain"
                  />
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>Forecast from 614 M€ (2020) to 4,149 M€ (2050)</span>
                  <span className="font-bold text-blue-600">Saving Hospital Budgets</span>
                </div>
              </motion.div>

              {/* Right Column: Health Economics Summary (Slide from Right) */}
              <motion.div 
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-5 space-y-6"
              >
                <div>
                  <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600 mb-1">
                    Fiscal Sustainability
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
                    Preventing The 6.7x Healthcare Budget Shock
                  </h3>
                  <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    By 2050, the aging population will drive European direct fracture care costs from €614M to over €4.1 Billion. Hospitals and health insurers cannot sustain prolonged acute ward stays and readmissions.
                  </p>
                </div>

                {/* Cost metrics */}
                <div className="space-y-3.5">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-slate-900">Shortened Acute Bed Days</div>
                      <div className="text-xs text-slate-500">Earlier mobilization enables safe discharge</div>
                    </div>
                    <span className="text-sm font-black text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200">
                      -4.2 Days
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-slate-900">Reduced Readmission Rate</div>
                      <div className="text-xs text-slate-500">Micro-instability detected before collapse</div>
                    </div>
                    <span className="text-sm font-black text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200">
                      -38%
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-slate-900">Prevented Nursing Home Transitions</div>
                      <div className="text-xs text-slate-500">Restored home independence</div>
                    </div>
                    <span className="text-sm font-black text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200">
                      Significant
                    </span>
                  </div>
                </div>

                {/* Whitepaper CTA */}
                <div className="pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-slate-900 hover:bg-blue-600 text-white font-bold text-sm tracking-wide shadow-md transition-all group cursor-pointer"
                  >
                    <FileText className="w-4 h-4 text-blue-500" />
                    <span>Download Health Economics Dossier</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>

    </section>
  );
};
