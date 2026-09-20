import React from 'react';
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
    <div className="py-8 border-y border-slate-200/80 bg-white/60 backdrop-blur-md overflow-hidden relative">
      {/* Edge gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#f8fafc] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f8fafc] to-transparent z-10 pointer-events-none" />

      {/* Looping Track */}
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-6 mx-4">
            <span className="text-xs sm:text-sm font-extrabold tracking-widest text-slate-500 uppercase hover:text-blue-600 transition-colors">
              {text}
            </span>
            <div className="text-blue-500/40">
              <TurbineLogo size={14} animate={false} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
