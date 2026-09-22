import React from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '../components/HeroSection';
import { StatementSection } from '../components/StatementSection';
import { BenefitsBentoHub } from '../components/BenefitsBentoHub';
import { MarqueeTicker } from '../components/MarqueeTicker';
import { TestimonialsSlider } from '../components/TestimonialsSlider';
import { CtaBanner } from '../components/CtaBanner';
import { ArrowRight, ShieldCheck, Activity, Database, HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Kinetic Statement Highlight */}
      <StatementSection />

      {/* 3. Core Capabilities Bento Preview */}
      <BenefitsBentoHub />

      {/* 4. Quick Portal Links Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            to="/why-choose"
            className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Clinical Protocol</span>
              <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">22% Mortality Reduction</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Learn how continuous objective telemetry enables early weight-bearing and safe home discharge.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:text-blue-700">
              <span>Explore Stepper Protocol</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            to="/evidence"
            className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Activity className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Epidemiology & Economics</span>
              <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Health Economic Model</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Review European fracture growth data and how continuous monitoring prevents budget shocks.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:text-blue-700">
              <span>View Clinical Charts</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            to="/technology"
            className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Database className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Hospital EHR Ingest</span>
              <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Radial Integration Hub</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Connects directly to Epic, Cerner, and hospital HL7 FHIR databases with bank-grade encryption.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:text-blue-700">
              <span>Explore Integrations</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>

      {/* 5. Infinite Ticker Marquee */}
      <MarqueeTicker />

      {/* 6. Clinical Testimonials Slider */}
      <TestimonialsSlider />

      {/* 7. Bottom CTA Banner */}
      <CtaBanner />
    </motion.div>
  );
};
