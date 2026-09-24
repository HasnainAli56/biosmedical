import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, HeartPulse, Activity, Sparkles, UserCheck } from 'lucide-react';
import { TurbineLogo } from './TurbineLogo';

export const SeniorVisualGallery: React.FC = () => {
  const visualCards = [
    {
      step: '01',
      tag: 'Tiny & Gentle',
      title: 'The HIPbeacon™ Sensor',
      description: 'Engineered in Switzerland from medical-grade titanium. Small as a coin, it fits safely inside your standard hip nail. You will never feel it or notice it.',
      image: '/bios_live/hipbeacon_hardware.png',
      badge: '100% Biocompatible',
      statLabel: 'Sensor Size',
      statValue: 'Sub-Minute Insertion',
      imageBg: 'bg-gradient-to-b from-slate-50 to-blue-50/60',
      imageFit: 'object-contain p-4'
    },
    {
      step: '02',
      tag: 'Safe Placement',
      title: 'Protected Inside The Bone',
      description: 'Your surgeon places the sensor during routine hip fracture surgery. Zero extra cuts or incisions are required. It stays completely shielded inside the titanium implant.',
      image: '/bios_live/hipbeacon_femur.png',
      badge: 'Zero Extra Incisions',
      statLabel: 'Implant Location',
      statValue: 'Inside Femur Nail',
      imageBg: 'bg-white',
      imageFit: 'object-contain p-2'
    },
    {
      step: '03',
      tag: 'Independent Living',
      title: 'Safe Walking & Recovery',
      description: 'Gentle step monitoring ensures you bear the right amount of weight each day. Helps prevent sudden stumbles, early screw loosening, and repeated hospital visits.',
      image: '/bios_live/elderly_patient_walking.jpg',
      badge: 'Day 14 Mobility Target',
      statLabel: 'Walking Safety',
      statValue: '100% Protected',
      imageBg: 'bg-gradient-to-b from-slate-50 to-blue-50/40',
      imageFit: 'object-contain p-2'
    },
    {
      step: '04',
      tag: 'Full Mobility Restored',
      title: 'Active Life & Independence',
      description: 'Regain the freedom and joy to move independently. HIPbeacon ensures you can walk, stay active, and live happily at home without relying on constant assistance.',
      image: '/bios_live/senior_scooter.png',
      badge: 'Active Independence',
      statLabel: 'Hospital Days Saved',
      statValue: '4.2 Days Earlier Home',
      imageBg: 'bg-gradient-to-b from-slate-50 to-blue-50/40',
      imageFit: 'object-contain p-2'
    },
    {
      step: '05',
      tag: '5-Stage Loop',
      title: 'From Surgery to Home Independence',
      description: 'The complete care loop: gentle surgery, daily step measurement, bedside cloud transmission, and real-time medical oversight for a full, confident recovery.',
      image: '/bios_live/clinical_process.png',
      badge: 'Official Clinical Diagram',
      statLabel: 'Complication Risk',
      statValue: '-22% Reduction',
      imageBg: 'bg-white',
      imageFit: 'object-contain p-3'
    },
    {
      step: '06',
      tag: 'Doctor Guidance',
      title: 'Continuous Medical Care',
      description: 'Your orthopedic specialist reviews your healing in real time. Any unusual strain is caught early before complications occur, keeping you safe and active.',
      image: '/bios_live/elderly_recovery_doctor.jpg',
      badge: 'Trauma & Geriatrics Lead',
      statLabel: 'Clinical Oversight',
      statValue: '24/7 Monitored',
      imageBg: 'bg-gradient-to-b from-slate-50 to-blue-50/40',
      imageFit: 'object-contain p-2'
    }
  ];

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Friendly Section Header for 70+ Seniors & Families */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs sm:text-sm font-bold tracking-wide uppercase mb-3.5">
          <TurbineLogo size={15} animate={true} />
          <span>Real Pictures & Technology Overview</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-slate-900 leading-tight">
          How HIPbeacon™ Works <br />
          <span className="text-blue-600">In 6 Simple, Easy Steps</span>
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto">
          Here are authentic photos and diagrams from Swiss medical trials showing exactly how the sensor protects seniors after hip surgery.
        </p>
      </motion.div>

      {/* 6 Visual Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {visualCards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, borderColor: '#6b9abe' }}
            className="rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-2xl hover:border-blue-300 transition-all flex flex-col justify-between overflow-hidden group"
          >
            {/* Large Image Header - uncropped full display */}
            <div className={`relative w-full h-64 sm:h-72 ${card.imageBg} border-b border-slate-100 overflow-hidden flex items-center justify-center p-2`}>
              <img
                src={card.image}
                alt={card.title}
                className={`w-full h-full ${card.imageFit} group-hover:scale-104 transition-transform duration-500`}
              />
              
              {/* Step Pill */}
              <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-black shadow-sm">
                Step {card.step}
              </div>

              {/* Status Badge */}
              <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-blue-700 text-xs font-bold shadow-xs">
                {card.badge}
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
                  {card.tag}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600 font-medium leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Footer Reassurance Metric */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm">
                <span className="text-slate-500 font-medium">{card.statLabel}:</span>
                <span className="font-black text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                  {card.statValue}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Senior Reassurance Bottom Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-12 p-6 sm:p-8 rounded-3xl bg-blue-50/70 border border-blue-200/80 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
            <HeartPulse className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-slate-900">
              Designed for Elderly Patients (Age 70+)
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">
              Zero complicated technology to learn. You just walk, rest, and recover — the sensor handles the rest automatically.
            </p>
          </div>
        </div>

        <a
          href="#consultation"
          className="shrink-0 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
        >
          Ask Your Doctor About HIPbeacon
        </a>
      </motion.div>

    </section>
  );
};
