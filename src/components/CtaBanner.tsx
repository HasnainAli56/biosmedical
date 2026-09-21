import React from 'react';
import { motion } from 'framer-motion';
import { TurbineLogo } from './TurbineLogo';
import { ArrowRight, Sparkles, Users, MapPin } from 'lucide-react';

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-[32px] overflow-hidden shadow-2xl border border-blue-200 min-h-[380px] flex items-center justify-center p-6 sm:p-12 text-center group"
      >
        
        {/* Real Background Image: Davos Swiss Alps (BIOS Headquarters) */}
        <img
          src="/real_bios/davos_alps_hero.jpg"
          alt="Davos Swiss Alps - BIOS Medical"
          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
        />

        {/* Ambient Dark/Blue Gradient Mask for Perfect Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/70 to-slate-950/85 backdrop-blur-[2px]" />

        {/* Foreground Content */}
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center space-y-5">
          
          {/* Floating Pill Badge */}
          <motion.div 
            whileHover={{ scale: 1.04 }}
            className="glass-pill px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg border border-white/30 backdrop-blur-md cursor-pointer"
          >
            <Users className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-xs font-bold text-white tracking-wide">
              1.7M Hip Fractures Worldwide Annually — Transform The Outcome
            </span>
          </motion.div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Take Control Of Hip Fracture <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-indigo-300">
              Recovery With BIOS Medical
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal max-w-lg">
            Empower your clinical team with real-time continuous Digital Mobility Outcomes (DMO), shorten hospital stays, and prevent life-threatening complications.
          </p>

          {/* White Capsule Pill Button with spring animation */}
          <div className="pt-2">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-slate-900 font-bold text-xs tracking-wider uppercase shadow-2xl hover:bg-blue-50 transition-all group cursor-pointer"
            >
              <span>Request Clinical Consultation</span>
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </motion.a>
          </div>

        </div>

      </motion.div>
    </section>
  );
};
