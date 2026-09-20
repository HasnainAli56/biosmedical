import React from 'react';
import { motion } from 'framer-motion';
import { TurbineLogo } from './TurbineLogo';
import { MapPin, ShieldCheck, Award } from 'lucide-react';

export const PartnersGrid: React.FC = () => {
  const partnerCards = [
    {
      type: 'image',
      image: '/real_bios/davos_alps_hero.jpg',
      alt: 'Davos Swiss Alps Headquarters',
      tag: 'Davos · 1,560m',
      title: 'Alpine Biomechanics Lab',
      offsetY: '-translate-y-2',
      width: 'w-64 sm:w-72 h-52'
    },
    {
      type: 'logo',
      name: 'Innosuisse',
      sub: 'Swiss Innovation Agency · Bern',
      badge: '+CH Federal',
      logoImg: '/real_bios/innosuisse_swiss_flag.png',
      badgeColor: 'bg-red-50 text-red-700 border-red-200',
      offsetY: 'translate-y-3',
      width: 'w-48 sm:w-52 h-44'
    },
    {
      type: 'image',
      image: '/real_bios/clinical_team_review.jpg',
      alt: 'Clinical Investigation Rounds',
      tag: 'Multi-Disciplinary',
      title: 'Trauma & Geriatric Co-Management',
      offsetY: '-translate-y-1',
      width: 'w-64 sm:w-72 h-52'
    },
    {
      type: 'logo',
      name: 'AO Foundation',
      sub: 'Davos · Switzerland',
      badge: 'Trauma Lead',
      short: 'AO',
      iconColor: 'bg-blue-600 text-white',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      offsetY: 'translate-y-2',
      width: 'w-48 sm:w-52 h-44'
    },
    {
      type: 'logo',
      name: 'Swiss Medtech',
      sub: 'Bern · Switzerland',
      badge: 'National Association',
      short: '+CH',
      iconColor: 'bg-red-600 text-white',
      badgeColor: 'bg-red-50 text-red-700 border-red-200',
      offsetY: '-translate-y-3',
      width: 'w-48 sm:w-52 h-44'
    },
    {
      type: 'image',
      image: '/real_bios/digital_health_roadmap.jpg',
      alt: 'Clinical Telemetry Pathway',
      tag: 'Connected Care',
      title: 'Digital Health Telemetry',
      offsetY: 'translate-y-1',
      width: 'w-64 sm:w-72 h-52'
    },
    {
      type: 'logo',
      name: 'NYU Langone',
      sub: 'Department of Orthopedic Surgery',
      badge: 'New York, USA',
      short: 'NYU',
      iconColor: 'bg-purple-600 text-white',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      offsetY: 'translate-y-3',
      width: 'w-48 sm:w-52 h-44'
    },
    {
      type: 'logo',
      name: 'BG Klinik Tübingen',
      sub: 'Reconstructive Surgery',
      badge: 'Level 1 Trauma',
      short: 'BG',
      iconColor: 'bg-emerald-600 text-white',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      offsetY: '-translate-y-2',
      width: 'w-48 sm:w-52 h-44'
    },
    {
      type: 'logo',
      name: 'Innovation Center Davos',
      sub: 'Alpine High-Altitude Tech Hub',
      badge: 'Incubation',
      short: 'ICD',
      iconColor: 'bg-cyan-600 text-white',
      badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
      offsetY: 'translate-y-2',
      width: 'w-48 sm:w-52 h-44'
    }
  ];

  // Duplicate the array for a seamless infinite loop
  const fullTrack = [...partnerCards, ...partnerCards];

  return (
    <section id="partners" className="py-24 overflow-hidden relative">
      
      {/* Header (Exact Dribbble Style from media_1789925686887.png) */}
      <div className="text-center max-w-3xl mx-auto mb-16 px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold mb-4">
          <TurbineLogo size={14} animate={true} />
          <span>OUR PARTNERS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Trusted By Leading <br />
          <span className="text-blue-600">Healthcare Providers & Institutes</span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
          BIOS Medical is developed in the Swiss Alps, partnering with world-renowned trauma institutes, university clinics, and healthcare leaders to advance post-fracture recovery.
        </p>
      </div>

      {/* 
        Horizontal Moving Track with Staggered Height Animation
        Exact layout from media_1789925686887.png & reference video 00:25s - 00:27s
      */}
      <div className="relative w-full overflow-hidden py-8">
        
        {/* Left & Right gradient masks for smooth edge fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#f8fafc] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#f8fafc] to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: [0, -1800] }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "linear"
          }}
          whileHover={{ animationPlayState: 'paused' }}
          className="flex items-center gap-6 sm:gap-8 w-max pl-4"
        >
          {fullTrack.map((card, idx) => (
            <div
              key={idx}
              className={`shrink-0 transition-transform duration-300 hover:scale-105 ${card.offsetY}`}
            >
              {card.type === 'image' ? (
                /* Real Photo Card with overlay */
                <div className={`${card.width} rounded-3xl overflow-hidden shadow-md border border-slate-200/80 relative group cursor-pointer bg-slate-100`}>
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent flex flex-col justify-end p-4">
                    <span className="text-[10px] font-bold text-blue-300 uppercase tracking-wider flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-blue-400" />
                      {card.tag}
                    </span>
                    <span className="text-xs font-bold text-white tracking-wide mt-0.5">
                      {card.title}
                    </span>
                  </div>
                </div>
              ) : (
                /* Partner Logo Box Card */
                <div className={`${card.width} rounded-3xl bg-white p-5 border border-slate-200/80 shadow-md flex flex-col justify-between hover:shadow-xl hover:border-blue-300 transition-all cursor-pointer group`}>
                  <div className="flex items-center justify-between">
                    {card.logoImg ? (
                      <div className="w-10 h-10 rounded-xl bg-red-50 p-1.5 flex items-center justify-center border border-red-100">
                        <img src={card.logoImg} alt={card.name} className="max-w-full max-h-full object-contain" />
                      </div>
                    ) : (
                      <div className={`w-10 h-10 rounded-xl ${card.iconColor} flex items-center justify-center font-black text-xs shadow-xs`}>
                        {card.short}
                      </div>
                    )}
                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider border ${card.badgeColor}`}>
                      {card.badge}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition-colors">
                      {card.name}
                    </h4>
                    <p className="text-[10px] text-slate-500 mt-0.5 leading-snug">
                      {card.sub}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </motion.div>

      </div>

    </section>
  );
};
