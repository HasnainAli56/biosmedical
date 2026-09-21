import React from 'react';
import { motion } from 'framer-motion';
import { TurbineLogo } from './TurbineLogo';

export const MarqueeTicker: React.FC = () => {
  const items = [
    "IMPLANTED HIP MOBILITY SENSOR",
    "22% MORTALITY REDUCTION",
    "BIOS-CLOUD TELEMETRY",
    "DIGITAL MOBILITY OUTCOMES (DMO)",
    "CONTINUOUS REHABILITATION",
    "ORTHOGERIATRIC CO-MANAGEMENT (OGCM)",
    "PREDICTIVE AI RISK MODELING",
    "DIRECT SITE MEASUREMENT",
    "SWISS MEDTECH INNOVATION",
    "PREVENT NURSING HOME ADMISSIONS"
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="py-8 border-y border-slate-200/80 bg-white/60 backdrop-blur-md overflow-hidden relative"
    >
      {/* Edge gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#f8fafc] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f8fafc] to-transparent z-10 pointer-events-none" />

      {/* Looping Track with 25s continuous infinite marquee */}
      <div 
        className="flex animate-marquee-25s whitespace-nowrap"
        style={{ animation: 'marquee 25s linear infinite', willChange: 'transform' }}
      >
        {[...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-7 mx-5">
            <span className="text-sm sm:text-base font-black font-heading tracking-widest text-slate-600 uppercase hover:text-blue-600 transition-colors cursor-default">
              {text}
            </span>
            <div className={idx % 2 === 0 ? "text-blue-600" : "text-amber-500"}>
              <TurbineLogo size={16} animate={false} />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
