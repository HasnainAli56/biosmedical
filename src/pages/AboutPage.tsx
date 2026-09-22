import React from 'react';
import { motion } from 'framer-motion';
import { AboutLeadership } from '../components/AboutLeadership';
import { CtaBanner } from '../components/CtaBanner';
import { TurbineLogo } from '../components/TurbineLogo';
import { MapPin, Award, Shield, Users, CheckCircle2 } from 'lucide-react';

export const AboutPage: React.FC = () => {
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
          <span>SWISS PRECISION & MEDTECH PIONEERS</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading text-slate-900 tracking-tight leading-tight">
          Founded in the Swiss Alps, <br />
          <span className="text-blue-600">Driven by World-Class Science</span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
          BIOS Medical AG is headquartered in the Innovation Center Davos, Switzerland. Founded by the inventor of the AO Fracture Monitor and experienced global MedTech executives to bring active sensor intelligence to orthopedic trauma.
        </p>

        {/* Swiss HQ Stats Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto text-left">
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span>Headquarters</span>
            </div>
            <div className="text-2xl font-black text-slate-900">Davos, CH</div>
            <div className="text-xs text-slate-500 mt-1 font-medium">Innovation Center Davos · 1,560m</div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 mb-1">
              <Award className="w-4 h-4 text-amber-500" />
              <span>Recognition</span>
            </div>
            <div className="text-2xl font-black text-slate-900">Top 2%</div>
            <div className="text-xs text-slate-500 mt-1 font-medium">Stanford Global Top 2% Scientists List</div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
              <Shield className="w-4 h-4 text-blue-600" />
              <span>Compliance</span>
            </div>
            <div className="text-2xl font-black text-slate-900">MDR Class IIb</div>
            <div className="text-xs text-slate-500 mt-1 font-medium">EU MDR 2017/745 & Swiss FADP</div>
          </div>
        </div>
      </section>

      {/* 1. Leadership & Scientific Advisory Board */}
      <AboutLeadership />

      {/* 2. Bottom CTA Banner */}
      <CtaBanner />
    </motion.div>
  );
};
