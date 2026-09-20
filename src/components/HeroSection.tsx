import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Radio, Activity, ShieldCheck, HeartPulse, Sparkles, Clock, Calendar, Users, Zap } from 'lucide-react';
import { TurbineLogo } from './TurbineLogo';

export const HeroSection: React.FC = () => {
  const [adherenceCounter, setAdherenceCounter] = useState(50);
  const [mortalityCounter, setMortalityCounter] = useState(0);

  useEffect(() => {
    // Ticking counter from 50% to 81% (matching exact video frame 02s)
    const timer = setInterval(() => {
      setAdherenceCounter(prev => {
        if (prev >= 81) {
          clearInterval(timer);
          return 81;
        }
        return prev + 1;
      });
    }, 45);

    const timer2 = setInterval(() => {
      setMortalityCounter(prev => {
        if (prev >= 22) {
          clearInterval(timer2);
          return 22;
        }
        return prev + 1;
      });
    }, 60);

    return () => {
      clearInterval(timer);
      clearInterval(timer2);
    };
  }, []);

  return (
    <section id="home" className="pt-2 sm:pt-4 px-2 sm:px-4 lg:px-6 max-w-[1440px] mx-auto">
      
      {/* 
        Single Giant Rounded Viewport Card with Full-Bleed Real Medical Photo 
        (100% Identical to Dribbble Shot & User Screenshot media_1789925286734.png)
      */}
      <div className="relative rounded-[36px] sm:rounded-[44px] overflow-hidden min-h-[660px] sm:min-h-[720px] flex items-center shadow-2xl border border-blue-950/20">
        
        {/* Full-Bleed Real Clinical Photo */}
        <img
          src="/real_bios/clinical_team_review.jpg"
          alt="Clinical doctors reviewing patient recovery data"
          className="absolute inset-0 w-full h-full object-cover object-center scale-102"
        />

        {/* High-End Atmospheric Cyan/Blue Clinical Gradient Mask */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-950/92 via-blue-950/75 to-slate-950/65 backdrop-blur-[1.5px]" />
        <div className="absolute inset-0 bg-radial-at-tl from-sky-500/15 via-transparent to-transparent pointer-events-none" />

        {/* Inner Foreground Layout */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-28 pb-16 sm:pt-36 sm:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Hero Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Top Frosted Pill Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs font-semibold shadow-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <TurbineLogo size={14} animate={true} />
              <span>World's First Implanted Hip Mobility Sensor</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12]"
            >
              Your Implant-Powered <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-blue-200 to-indigo-200">
                Recovery Companion
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="text-sm sm:text-base text-slate-100/90 font-normal leading-relaxed max-w-xl"
            >
              BIOS Medical ensures older adults recover from hip fractures with precision, giving surgeons and geriatricians continuous implanted telemetry to prevent fatal secondary complications.
            </motion.p>

            {/* White Capsule CTA Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="#why-choose"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-slate-900 font-bold text-xs tracking-wider uppercase shadow-2xl hover:bg-blue-50 transition-all group cursor-pointer"
              >
                <span>Get Started for Free</span>
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="https://bios.mdeg.cloud/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/25 backdrop-blur-md transition-all cursor-pointer"
              >
                <span>Launch BIOS-Cloud</span>
              </motion.a>
            </motion.div>

          </div>

          {/* Right Floating Glassmorphic Telemetry Card (Exact Dribbble widget) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            
            {/* 3D Floating HIPbeacon Sensor Graphic */}
            <motion.div
              animate={{ y: [-10, 10, -10], rotate: [-2, 2, -2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-14 right-0 lg:-right-4 w-32 sm:w-40 z-20 pointer-events-none drop-shadow-2xl"
            >
              <img
                src="/real_bios/hipbeacon_implant_sensor.png"
                alt="HIPbeacon titanium implant sensor"
                className="w-full h-auto drop-shadow-2xl"
              />
            </motion.div>

            {/* 
              Picture/Glass Card Comes from Bottom to Up:
              User instruction: "first this picture cards comes from bottom to up then text animation"
            */}
            <motion.div 
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 220, damping: 24, delay: 0.2 }}
              className="relative w-full max-w-md rounded-[32px] bg-white/85 backdrop-blur-2xl p-6 sm:p-7 shadow-2xl border border-white/90 text-slate-900 z-10"
            >
              {/* Top Row: Founders Stack & Adherence Headline */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/60">
                <div className="flex -space-x-2 overflow-hidden">
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="/real_bios/markus_windolf_ceo.jpg" alt="Dr. Markus Windolf" title="Dr. Markus Windolf (CEO)" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="/real_bios/patrick_stepanek_coo.jpg" alt="Dr. Patrick Stepanek" title="Dr. Patrick Stepanek (COO)" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="/real_bios/viktor_varjas_dev.jpg" alt="Viktor Varjas" title="Viktor Varjas (Lead Software Dev)" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
                  {adherenceCounter}% Adherence Rate
                </span>
              </div>

              {/* Big Stat Row */}
              <div className="py-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-slate-900 tracking-tight">
                    {adherenceCounter}%
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                    OF PATIENTS IMPROVED MOBILITY
                  </span>
                </div>
                <div className="mt-1 text-[11px] text-slate-500">
                  OGCM Clinical Cohort · {mortalityCounter}% Mortality Reduction
                </div>
              </div>

              {/* 6 Interactive Feature Pills (Exact Grid from Reference Frame 02s) */}
              <div className="grid grid-cols-2 gap-2 pt-2 text-[10px] font-bold text-slate-700">
                <div className="p-2 rounded-xl bg-slate-50/90 border border-slate-200/70 flex items-center justify-between shadow-2xs hover:bg-white transition-colors cursor-default">
                  <span>TELEHEALTH</span>
                  <Activity className="w-3.5 h-3.5 text-blue-600" />
                </div>
                <div className="p-2 rounded-xl bg-slate-50/90 border border-slate-200/70 flex items-center justify-between shadow-2xs hover:bg-white transition-colors cursor-default">
                  <span>SMART SCHEDULING</span>
                  <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <div className="p-2 rounded-xl bg-slate-50/90 border border-slate-200/70 flex items-center justify-between shadow-2xs hover:bg-white transition-colors cursor-default">
                  <span>ADAPTIVE ALERTS</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
                </div>
                <div className="p-2 rounded-xl bg-slate-50/90 border border-slate-200/70 flex items-center justify-between shadow-2xs hover:bg-white transition-colors cursor-default">
                  <span>24/7 SUPPORT</span>
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
                </div>
                <div className="p-2 rounded-xl bg-slate-50/90 border border-slate-200/70 flex items-center justify-between shadow-2xs hover:bg-white transition-colors cursor-default">
                  <span>AI-ASSISTED NOTES</span>
                  <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                </div>
                <div className="p-2 rounded-xl bg-slate-50/90 border border-slate-200/70 flex items-center justify-between shadow-2xs hover:bg-white transition-colors cursor-default">
                  <span>DMO ANALYTICS</span>
                  <Zap className="w-3.5 h-3.5 text-sky-600" />
                </div>
              </div>

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
};
