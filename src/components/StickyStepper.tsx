import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TurbineLogo } from './TurbineLogo';
import { Check, ArrowRight, Activity, Sparkles, ShieldCheck, HeartPulse } from 'lucide-react';

export const StickyStepper: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      badge: "STEP 01: GENTLE IMPLANTATION",
      title: "Seamlessly Placed During Standard Surgery",
      description: "No extra surgeries or incisions are required. The tiny Swiss HIPbeacon sensor is inserted directly inside your standard orthopedic hip nail during routine treatment, immediately ready to protect your recovery.",
      points: [
        "Zero additional surgical incisions required",
        "Encased safely inside your standard titanium hip implant",
        "Automatically activates and monitors your mobility from Day 1"
      ],
      image: "/bios_live/hipbeacon_femur.png",
      pillColor: "bg-blue-600 text-white",
      floatingTag: "Safe Inside Bone Implant",
      floatingStat: "Swiss Medical Titanium"
    },
    {
      id: 2,
      badge: "STEP 02: RECOVERY TELEMETRY",
      title: "Your Doctor & Caregivers Stay Informed",
      description: "As you begin walking, HIPbeacon gently measures your step rhythm and weight-bearing. Encrypted data reaches your medical team so they can guide your rehabilitation and prevent sudden falls.",
      points: [
        "Continuous daily step count & weight-bearing measurement",
        "Early warning alerts if bones or screws experience excess strain",
        "Proven 22% reduction in secondary post-surgery complications"
      ],
      image: "/bios_live/clinical_process.png",
      pillColor: "bg-blue-600 text-white",
      floatingTag: "Continuous Care Loop",
      floatingStat: "22% Complication Reduction"
    },
    {
      id: 3,
      badge: "STEP 03: INDEPENDENT LIVING",
      title: "Regaining Mobility & Returning Safely Home",
      description: "The primary wish of older adults is to remain independent and live at home. HIPbeacon supports safe mobilization, shortens acute hospital stays, and helps prevent unwanted nursing home admissions.",
      points: [
        "Shortens acute hospital stays by over 4 days on average",
        "Helps seniors regain confidence and avoid nursing home transfer",
        "Provides daily reassurance and peace of mind for families"
      ],
      image: "/bios_live/senior_scooter.png",
      pillColor: "bg-blue-600 text-white",
      floatingTag: "Safe Living at Home",
      floatingStat: "Hospital Days Saved: -4.2"
    }
  ];

  // Auto-advance step every 6.5 seconds if user isn't clicking
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [steps.length]);

  const current = steps[activeStep];

  return (
    <section id="why-choose" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Top Header with Top entrance */}
      <motion.div 
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold mb-3">
          <TurbineLogo size={14} animate={true} />
          <span>WHY CHOOSE US</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading tracking-tight text-slate-900">
          Why Choose <span className="text-blue-600">HIPbeacon?</span>
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
          With the world's first implanted hip mobility sensor and BIOS-Cloud data infrastructure, 
          ensure every hip fracture patient receives precision recovery, avoiding fatal complications.
        </p>
      </motion.div>

      {/* Main Stepper Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Vertical Stepper Indicator (Slide from Left) */}
        <motion.div 
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:flex lg:col-span-1 flex-col items-center"
        >
          <div className="relative flex flex-col items-center space-y-16">
            
            {/* Background vertical line */}
            <div className="absolute top-4 bottom-4 w-1 bg-slate-200 rounded-full z-0" />
            
            {/* Active animated progress fill line */}
            <motion.div 
              className="absolute top-4 w-1 bg-blue-600 rounded-full z-0 origin-top"
              animate={{ height: activeStep === 0 ? '0%' : activeStep === 1 ? '50%' : '100%' }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
            
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <motion.button
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-all cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/40 ring-4 ring-blue-100 scale-110'
                      : 'bg-white text-slate-500 border-2 border-slate-200 hover:border-blue-400'
                  }`}
                >
                  {step.id}
                </motion.button>
              );
            })}

          </div>
        </motion.div>

        {/* Center Showcase Visual (Slide from Bottom) */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 relative"
        >
          <div className="relative mx-auto max-w-md lg:max-w-none">
            
            {/* Dynamic Colored Backdrop Card */}
            <div className="rounded-[32px] p-6 sm:p-8 bg-gradient-to-br from-blue-50/70 via-white to-slate-50 border border-slate-200/90 shadow-xl transition-colors duration-500">
              
              {/* Image Frame Container with AnimatePresence */}
              <div className="relative rounded-2xl overflow-hidden shadow-md bg-white aspect-[4/3] sm:aspect-[14/11] flex items-center justify-center p-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 80, scale: 0.94 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -60, scale: 1.04 }}
                    transition={{ type: "spring", stiffness: 220, damping: 24 }}
                    className="w-full h-full flex items-center justify-center relative"
                  >
                    {/* Real Image Render */}
                    <img
                      src={current.image}
                      alt={current.title}
                      className="max-w-full max-h-full object-contain filter drop-shadow-lg"
                    />

                    {/* Step 1 Extra: Anatomical Femur Overlay */}
                    {current.id === 1 && (
                      <img
                        src="/real_bios/femur_anatomy_outline.png"
                        alt="Femur Outline"
                        className="absolute inset-0 w-full h-full object-contain opacity-25 pointer-events-none"
                      />
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Floating Top Pill on Image with float 4s */}
                <div className="absolute top-4 right-4 glass-pill px-4 py-2 rounded-full flex items-center gap-2 shadow-md z-10 animate-float">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-bold text-slate-800">{current.floatingTag}</span>
                </div>

                {/* Floating Bottom Telemetry Widget on Image with float 4s delayed */}
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl glass-panel p-4 shadow-xl border border-white/90 flex items-center justify-between z-10 animate-float-delayed">
                  <div>
                    <span className="text-xs uppercase font-black tracking-wider text-blue-700 block">
                      Clinical Status
                    </span>
                    <span className="text-sm font-bold text-slate-900">
                      {current.floatingStat}
                    </span>
                  </div>
                  <div className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold shadow-xs ${current.pillColor}`}>
                    <Activity className="w-3.5 h-3.5 animate-pulse" />
                    <span>Real-Time</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Mobile / Tablet Horizontal Stepper Selector */}
            <div className="flex lg:hidden justify-center items-center gap-3 mt-4">
              {steps.map((step, idx) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`px-5 py-2 rounded-full text-sm font-bold transition-all cursor-pointer ${
                    activeStep === idx
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  Step {step.id}
                </button>
              ))}
            </div>

          </div>
        </motion.div>

        {/* Right Content Column (Slide from Right) */}
        <motion.div 
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 space-y-6"
        >
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold">
                {current.badge}
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
                {current.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {current.description}
              </p>

              {/* Checklist Bullets */}
              <div className="space-y-3 pt-2">
                {current.points.map((point, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <span className="text-base font-semibold text-slate-800">{point}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA button */}
              <div className="pt-4">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="#partners"
                  className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-slate-900 hover:bg-blue-600 text-white font-bold text-sm tracking-wide shadow-md transition-all group cursor-pointer"
                >
                  <span>Explore Clinical Evidence</span>
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </motion.a>
              </div>

            </motion.div>
          </AnimatePresence>

        </motion.div>

      </div>

    </section>
  );
};
