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
    <section id="home" className="w-full relative overflow-hidden">
      
      {/* 
        Full-Bleed Full-Width Viewport Container (Edge-to-Edge with Zero Left/Right Gaps)
      */}
      <div className="relative w-full overflow-hidden min-h-[600px] sm:min-h-[680px] flex items-center shadow-2xl border-b border-blue-900/40">
        
        {/* Full-Bleed Real Clinical Photo with Slow Ambient Animation */}
        <motion.img
          src="/real_bios/clinical_team_review.jpg"
          alt="Clinical doctors reviewing patient recovery data"
          animate={{ 
            scale: [1, 1.08, 1],
            x: [0, -14, 0],
            y: [0, -6, 0]
          }}
          transition={{ 
            duration: 22, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* High-End Atmospheric Cyan/Blue Clinical Gradient Mask */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-950/92 via-blue-950/75 to-slate-950/65 backdrop-blur-[1.5px]" />
        <div className="absolute inset-0 bg-radial-at-tl from-sky-500/15 via-transparent to-transparent pointer-events-none" />

        {/* Inner Foreground Layout */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-28 pb-14 sm:pt-32 sm:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Hero Content Column with fadeInUp 0.8s staggered entrance */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-5">
            
            {/* Top Frosted Pill Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs font-semibold shadow-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <TurbineLogo size={14} animate={true} variant="white" />
              <span>World's First Implanted Hip Mobility Sensor</span>
            </motion.div>

            {/* Main Headline with Text Reveal */}
            <motion.h1 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
              className="text-3xl sm:text-4xl xl:text-5xl font-black font-heading tracking-tight text-white leading-[1.15]"
            >
              Your Implant-Powered <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-blue-200 to-indigo-200">
                Recovery Companion
              </span>
            </motion.h1>

            {/* Subtitle with Fade-in */}
            <motion.p 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="text-xs sm:text-sm md:text-base text-slate-100/90 font-normal leading-relaxed max-w-xl"
            >
              BIOS Medical ensures older adults recover from hip fractures with precision, giving surgeons and geriatricians continuous implanted telemetry to prevent fatal secondary complications.
            </motion.p>

            {/* White Capsule CTA Button with Fade-in */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8, ease: "easeOut" }}
              className="pt-2 flex flex-wrap items-center gap-3.5"
            >
              <div className="relative group">
                {/* Subtle slow glowing ring */}
                <div className="absolute -inset-1 rounded-full bg-blue-400/30 blur-sm group-hover:bg-blue-400/50 transition-all duration-700 pointer-events-none" />
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  href="#why-choose"
                  className="relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-slate-900 font-bold text-xs tracking-wider uppercase shadow-2xl hover:bg-blue-50 transition-all group cursor-pointer"
                >
                  <span>Get Started for Free</span>
                  <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </motion.a>
              </div>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                href="https://bios.mdeg.cloud/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/25 backdrop-blur-md transition-all duration-300 cursor-pointer"
              >
                <span>Launch BIOS-Cloud</span>
              </motion.a>
            </motion.div>

          </div>

          {/* Right Floating Dashboard / UI Telemetry Card (Continuous 4s float animation) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            
            {/* 3D Floating HIPbeacon Sensor Graphic */}
            <motion.div
              animate={{ y: [0, -16, 0], rotate: [-3, 3, -3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 right-0 lg:-right-4 w-28 sm:w-36 z-20 pointer-events-none drop-shadow-2xl"
            >
              <img
                src="/real_bios/hipbeacon_implant_sensor.png"
                alt="HIPbeacon titanium implant sensor"
                className="w-full h-auto drop-shadow-2xl"
              />
            </motion.div>

            {/* 
              Floating Dashboard Card:
              Continuous 4s ease-in-out infinite floating animation
            */}
            <motion.div 
              initial={{ y: 24, opacity: 0 }}
              animate={{ 
                y: [0, -14, 0], 
                opacity: 1 
              }}
              transition={{ 
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 0.8, ease: "easeOut", delay: 0.2 }
              }}
              className="relative w-full max-w-md rounded-[28px] bg-white/95 backdrop-blur-2xl p-5 sm:p-6 shadow-2xl border border-white/95 text-slate-900 z-10"
            >
              {/* Top Row: Founders Stack & Adherence Headline */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-200/60">
                <div className="flex -space-x-2 overflow-hidden">
                  <img className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover" src="/real_bios/markus_windolf_ceo.jpg" alt="Dr. Markus Windolf" title="Dr. Markus Windolf (CEO)" />
                  <img className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover" src="/real_bios/patrick_stepanek_coo.jpg" alt="Dr. Patrick Stepanek" title="Dr. Patrick Stepanek (COO)" />
                  <img className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover" src="/real_bios/viktor_varjas_dev.jpg" alt="Viktor Varjas" title="Viktor Varjas (Lead Software Dev)" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
                  {adherenceCounter}% Adherence Rate
                </span>
              </div>

              {/* Big Stat Row */}
              <div className="py-3.5">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-black font-heading text-slate-900 tracking-tight">
                    {adherenceCounter}%
                  </span>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-700">
                    OF PATIENTS IMPROVED MOBILITY
                  </span>
                </div>
                <div className="mt-0.5 text-[10px] text-slate-500 font-medium">
                  OGCM Clinical Cohort · {mortalityCounter}% Mortality Reduction
                </div>
              </div>

              {/* 6 Interactive Feature Pills */}
              <div className="grid grid-cols-2 gap-2 pt-1 text-[10px] font-bold text-slate-700">
                {[
                  { label: "TELEHEALTH", icon: <Activity className="w-3.5 h-3.5 text-blue-600" /> },
                  { label: "SMART SCHEDULING", icon: <Calendar className="w-3.5 h-3.5 text-emerald-600" /> },
                  { label: "ADAPTIVE ALERTS", icon: <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" /> },
                  { label: "24/7 SUPPORT", icon: <Clock className="w-3.5 h-3.5 text-amber-500" /> },
                  { label: "AI-ASSISTED NOTES", icon: <Sparkles className="w-3.5 h-3.5 text-purple-600" /> },
                  { label: "DMO ANALYTICS", icon: <Zap className="w-3.5 h-3.5 text-sky-600" /> },
                ].map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + idx * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="p-2 rounded-xl bg-slate-50/90 border border-slate-200/70 flex items-center justify-between shadow-2xs hover:bg-white hover:border-blue-300 transition-all cursor-default"
                  >
                    <span>{item.label}</span>
                    {item.icon}
                  </motion.div>
                ))}
              </div>

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
};
