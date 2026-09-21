import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { TurbineLogo } from './TurbineLogo';
import { Shield } from 'lucide-react';

export const StatementSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-60px" });
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    if (isInView) {
      // Stage 0: Text only
      // Stage 1 (600ms): Logo appears in a circle
      const t1 = setTimeout(() => setAnimationStage(1), 600);
      // Stage 2 (1600ms): Circle morphs into pill and text expands out
      const t2 = setTimeout(() => setAnimationStage(2), 1600);
      // Stage 3 (2400ms): Second pill (OGCM 22%) expands
      const t3 = setTimeout(() => setAnimationStage(3), 2400);
      // Stage 4 (3100ms): Third pill (avatars) expands
      const t4 = setTimeout(() => setAnimationStage(4), 3100);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(t4);
      };
    }
  }, [isInView]);

  return (
    <section ref={containerRef} className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center relative overflow-hidden">
      
      {/* 
        Sequential Morphing Pill Animation:
        1. Plain text appears first
        2. Circle with turbine logo pops in
        3. Circle smoothly morphs to pill and text "HIPbeacon™" expands out
      */}
      <div className="relative">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold tracking-tight text-slate-800 leading-[1.4] sm:leading-[1.45]">
          
          {/* Row 1: "Our solution [circle -> pill with HIPbeacon™] effectively empowers" */}
          <span className="inline-flex items-center flex-wrap justify-center align-middle">
            <span className="text-slate-900">Our solution</span>

            {/* Morphing Pill Container */}
            <span className="inline-flex items-center align-middle mx-1.5 sm:mx-2 min-h-[38px]">
              {animationStage === 0 && (
                <span className="w-1 inline-block" />
              )}

              {/* Stage 1: Circle with logo only */}
              {animationStage === 1 && (
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="w-8 h-8 rounded-full bg-teal-50 border border-teal-200 shadow-sm flex items-center justify-center shrink-0"
                >
                  <TurbineLogo size={16} animate={true} />
                </motion.span>
              )}

              {/* Stage >= 2: Circle expands to pill and text expands out */}
              {animationStage >= 2 && (
                <motion.span
                  initial={{ width: 32 }}
                  animate={{ width: 'auto' }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-flex items-center overflow-hidden rounded-full bg-teal-50 border border-teal-200 text-teal-700 shadow-sm text-xs sm:text-sm font-bold whitespace-nowrap px-3 py-1.5 gap-1.5"
                >
                  <TurbineLogo size={15} animate={true} />
                  <motion.span
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 'auto', opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden inline-block"
                  >
                    HIPbeacon™
                  </motion.span>
                </motion.span>
              )}
            </span>

            <span className="text-slate-600">effectively empowers</span>
          </span>{' '}

          {/* Row 2: "the orthopedic recovery [pill] industry" */}
          <span className="inline-flex items-center flex-wrap justify-center align-middle">
            <span className="text-slate-600">the orthopedic recovery</span>

            {/* Pill 2: Smoothly expands between "orthopedic recovery" and "ecosystem" */}
            <span className="inline-flex items-center align-middle mx-1.5 sm:mx-2 min-h-[38px]">
              {animationStage >= 3 ? (
                <motion.span
                  initial={{ width: 0, opacity: 0, scale: 0.7 }}
                  animate={{ width: 'auto', opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-flex items-center overflow-hidden align-middle"
                >
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 shadow-sm text-xs sm:text-sm font-bold whitespace-nowrap">
                    <Shield className="w-3.5 h-3.5 text-purple-600" />
                    <span>OGCM 22%</span>
                  </span>
                </motion.span>
              ) : (
                <span className="w-1 inline-block" />
              )}
            </span>

            <span className="text-slate-600">ecosystem</span>
          </span>{' '}

          {/* Row 3: "by enhancing [ (avatars) ] patient outcomes" */}
          <span className="inline-flex items-center flex-wrap justify-center align-middle">
            <span className="text-slate-900">by enhancing</span>

            {/* Pill 3: Smoothly expands parentheses with founder avatars */}
            <span className="inline-flex items-center align-middle mx-1.5 sm:mx-2 min-h-[38px]">
              {animationStage >= 4 ? (
                <motion.span
                  initial={{ width: 0, opacity: 0, scale: 0.7 }}
                  animate={{ width: 'auto', opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-flex items-center overflow-hidden align-middle"
                >
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 shadow-sm whitespace-nowrap">
                    <span className="text-blue-700 font-extrabold text-xs sm:text-sm">(</span>
                    <span className="flex -space-x-1.5">
                      <img className="inline-block h-5 w-5 sm:h-6 sm:w-6 rounded-full ring-2 ring-white object-cover" src="/real_bios/markus_windolf_ceo.jpg" alt="Dr. Markus Windolf" />
                      <img className="inline-block h-5 w-5 sm:h-6 sm:w-6 rounded-full ring-2 ring-white object-cover" src="/real_bios/patrick_stepanek_coo.jpg" alt="Dr. Patrick Stepanek" />
                      <img className="inline-block h-5 w-5 sm:h-6 sm:w-6 rounded-full ring-2 ring-white object-cover" src="/real_bios/viktor_varjas_dev.jpg" alt="Viktor Varjas" />
                    </span>
                    <span className="text-blue-700 font-extrabold text-xs sm:text-sm">)</span>
                  </span>
                </motion.span>
              ) : (
                <span className="w-1 inline-block" />
              )}
            </span>

            <span className="text-slate-500">patient outcomes</span>
          </span>

        </h2>

        {/* Supporting Caption */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 15 }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-xs sm:text-sm md:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed font-normal"
        >
          Continuous Digital Mobility Outcomes (DMO) directly from the hip implant bridge the dangerous post-op gap, enabling early weight-bearing and preventing permanent loss of autonomy.
        </motion.p>
      </div>

    </section>
  );
};
