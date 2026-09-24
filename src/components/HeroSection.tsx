import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Radio, Activity, ShieldCheck, HeartPulse, Sparkles, Clock, Calendar, Users, Zap } from 'lucide-react';
import { TurbineLogo } from './TurbineLogo';

export const HeroSection: React.FC = () => {
  const [adherenceCounter, setAdherenceCounter] = useState(50);
  const [mortalityCounter, setMortalityCounter] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoTimeUpdate = () => {
    if (videoRef.current && videoRef.current.currentTime >= 7) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

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
        
        {/* Full-Bleed 7-Second Muted Video with Scale-Crop to remove bottom-right Gemini watermark */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <video
            ref={videoRef}
            src="/hip_fracture_bg.mp4"
            autoPlay
            muted
            loop
            playsInline
            onTimeUpdate={handleVideoTimeUpdate}
            className="w-[115%] h-[115%] max-w-none object-cover -translate-x-[6%] -translate-y-[6%]"
          />
        </div>

        {/* Light, Crystal-Clear Overlay: Darker only behind left text, vibrant and clear on the animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/35 to-transparent pointer-events-none" />
        
        {/* Dedicated Bottom-Right Watermark Concealment Mask */}
        <div className="absolute -bottom-1 -right-1 w-56 h-36 bg-gradient-to-tl from-slate-950 via-slate-950/60 to-transparent pointer-events-none z-[2]" />

        {/* Bottom smooth edge gradient */}
        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none z-[1]" />
        
        {/* Top subtle shade for navbar clarity */}
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-slate-950/70 to-transparent pointer-events-none" />

        {/* Inner Foreground Layout - Text positioned higher up */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-20 pb-10 sm:pt-24 sm:pb-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          
          {/* Left Hero Content Column with fadeInUp 0.8s staggered entrance */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-4 pt-1 sm:pt-3">
            
            {/* Top Frosted Pill Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-sm font-bold shadow-sm"
            >
              <span className="flex h-2.5 w-2.5 rounded-full bg-white animate-ping" />
              <TurbineLogo size={16} animate={true} variant="white" />
              <span>World's First Implanted Hip Mobility Sensor</span>
            </motion.div>

            {/* Main Headline with Text Reveal */}
            <motion.h1 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
              className="text-4xl sm:text-5xl xl:text-6xl font-black font-heading tracking-tight text-white leading-[1.15] drop-shadow-lg"
            >
              Restoring Independent Living <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-blue-200 to-white drop-shadow-sm">
                After Hip Surgery
              </span>
            </motion.h1>

            {/* Subtitle with Fade-in - Clear, large, humane for 70+ patients */}
            <motion.p 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="text-lg sm:text-xl text-slate-100/95 font-medium leading-relaxed max-w-2xl drop-shadow-md"
            >
              Immediate and safe daily walking is the key to full recovery. <strong>HIPbeacon</strong> is a tiny Swiss-engineered sensor placed inside your hip implant during standard surgery, gently keeping your doctors and family updated on your recovery progress every single day.
            </motion.p>

            {/* Clear Capsule CTA Buttons with Fade-in */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8, ease: "easeOut" }}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              <div className="relative group">
                <div className="absolute -inset-1 rounded-full bg-blue-400/30 blur-sm group-hover:bg-blue-400/50 transition-all duration-700 pointer-events-none" />
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  href="#how-it-works"
                  className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-slate-900 font-bold text-base shadow-2xl hover:bg-blue-50 transition-all group cursor-pointer"
                >
                  <span>See How It Helps You</span>
                  <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.a>
              </div>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                href="#evidence"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold text-base border border-white/30 backdrop-blur-md transition-all duration-300 cursor-pointer"
              >
                <span>Read Clinical Results</span>
              </motion.a>
            </motion.div>

          </div>

          {/* Right Column: Prominent Real Pictures & Senior Telemetry Card */}
          <div className="lg:col-span-5 relative flex flex-col items-center gap-4">
            
            {/* 1. Large, Clear Floating Titanium Sensor Showcase */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-full max-w-md rounded-3xl bg-white/95 backdrop-blur-xl p-4 sm:p-5 shadow-2xl border border-white text-slate-900"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-wider text-blue-700">Official Swiss Implant</span>
                </div>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  HIPbeacon™ Sensor
                </span>
              </div>

              {/* Large, Clear Image of HIPbeacon Hardware */}
              <div className="py-3 flex items-center justify-center bg-gradient-to-b from-slate-50 to-blue-50/50 rounded-2xl border border-slate-100 my-2">
                <img
                  src="/bios_live/hipbeacon_hardware.png"
                  alt="HIPbeacon Titanium Sensor"
                  className="h-28 sm:h-36 w-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="text-xs text-slate-600 font-medium text-center">
                Sub-minute surgical insertion inside standard hip nail. Zero wires, zero maintenance.
              </div>
            </motion.div>

            {/* 2. Prominent Senior Patient Walking Recovery Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-md rounded-3xl bg-white/95 backdrop-blur-xl p-4 sm:p-5 shadow-2xl border border-white text-slate-900"
            >
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-wider text-blue-700">Patient Recovery Feed</span>
                </div>
                <span className="text-xs font-black bg-blue-600 text-white px-2.5 py-0.5 rounded-full shadow-xs">
                  {adherenceCounter}% Target
                </span>
              </div>

              {/* Full Uncropped Senior Patient Photo */}
              <div className="relative rounded-2xl overflow-hidden shadow-xs border border-slate-200/80 mb-3 bg-gradient-to-b from-slate-50 to-blue-50/40 flex items-center justify-center p-2 min-h-[220px] sm:min-h-[240px]">
                <img 
                  src="/bios_live/elderly_patient_walking.jpg" 
                  alt="Senior patient walking safely during recovery" 
                  className="max-h-[230px] sm:max-h-[250px] w-auto max-w-full object-contain drop-shadow-md"
                />
                <div className="absolute bottom-2 left-2 right-2 px-3 py-1.5 rounded-xl bg-slate-900/80 backdrop-blur-md text-white flex items-center justify-between text-xs">
                  <span className="font-bold">Day 14: Walking Safely At Home</span>
                  <span className="text-blue-300 font-mono text-[11px]">Live Verified</span>
                </div>
              </div>

              {/* Senior-friendly reassurance badges */}
              <div className="grid grid-cols-2 gap-2 text-xs font-bold text-slate-700">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>100% Secure Implant</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2">
                  <HeartPulse className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Family Peace of Mind</span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
};
