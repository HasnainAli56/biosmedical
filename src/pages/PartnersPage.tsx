import React from 'react';
import { motion } from 'framer-motion';
import { PartnersGrid } from '../components/PartnersGrid';
import { TestimonialsSlider } from '../components/TestimonialsSlider';
import { CtaBanner } from '../components/CtaBanner';
import { TurbineLogo } from '../components/TurbineLogo';
import { Building2, Award, HeartHandshake, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PartnersPage: React.FC = () => {
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
          <span>COLLABORATIVE CLINICAL NETWORK</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading text-slate-900 tracking-tight leading-tight">
          Partnering with World Leaders <br />
          <span className="text-blue-600">In Orthopedic Trauma & Geriatrics</span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
          From the AO Foundation in Davos to leading university hospitals in Germany, the United States, and Switzerland, BIOS Medical collaborates with pioneers across surgery and digital health.
        </p>
      </section>

      {/* 1. Moving Partners Grid Track */}
      <PartnersGrid />

      {/* 2. Testimonials Slider */}
      <TestimonialsSlider />

      {/* 3. Partner Inquiry Callout */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm max-w-3xl mx-auto">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center mx-auto mb-4">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">Join Our Clinical Multi-Center Studies</h3>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Interested in deploying HIPbeacon™ in your trauma ward or university research hospital? Connect with our scientific liaison director.
          </p>
          <div className="mt-5">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shadow-md transition-all"
            >
              <span>Inquire About Partnership</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA Banner */}
      <CtaBanner />
    </motion.div>
  );
};
