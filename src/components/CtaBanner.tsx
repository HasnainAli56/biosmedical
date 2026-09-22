import React from 'react';
import { motion } from 'framer-motion';
import { TurbineLogo } from './TurbineLogo';
import { ArrowRight, Sparkles, Users, MapPin } from 'lucide-react';

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-[32px] overflow-hidden shadow-xl border border-blue-200/90 min-h-[360px] flex items-center justify-center p-6 sm:p-12 text-center group bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/60"
      >
        
        {/* Real Background Image with light subtle medical blend */}
        <div className="absolute inset-0 opacity-15 mix-blend-multiply pointer-events-none">
          <img
            src="/real_bios/davos_alps_hero.jpg"
            alt="Davos Swiss Alps - BIOS Medical"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
          />
        </div>

        {/* Ambient luminous glow circles */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-indigo-400/15 rounded-full blur-3xl pointer-events-none" />

        {/* Foreground Content */}
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center space-y-5">
          
          {/* Floating Pill Badge */}
          <motion.div 
            whileHover={{ scale: 1.04 }}
            className="bg-white border border-blue-200/90 px-5 py-2 rounded-full flex items-center gap-2.5 shadow-sm cursor-default animate-float"
          >
            <Users className="w-4 h-4 text-amber-500 shrink-0" />
            <span className="text-xs sm:text-sm font-bold text-slate-800 tracking-wide">
              1.7M Hip Fractures Worldwide Annually — Transform The Outcome
            </span>
          </motion.div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-slate-900 tracking-tight leading-tight">
            Take Control Of Hip Fracture <br />
            <span className="text-blue-600">
              Recovery With BIOS Medical
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium max-w-xl">
            Empower your clinical team with real-time continuous Digital Mobility Outcomes (DMO), shorten hospital stays, and prevent life-threatening complications.
          </p>

          {/* High-visibility Action Button */}
          <div className="pt-2">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm tracking-wider uppercase shadow-lg shadow-blue-500/25 transition-all group cursor-pointer"
            >
              <span>Request Clinical Consultation</span>
              <div className="w-6 h-6 rounded-full bg-white text-blue-600 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </motion.a>
          </div>

        </div>

      </motion.div>
    </section>
  );
};
