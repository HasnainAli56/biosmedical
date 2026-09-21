import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export const PartnersGrid: React.FC = () => {
  const partnerCards = [
    {
      type: 'image',
      image: '/real_bios/clinical_team_review.jpg',
      alt: 'Clinical Investigation Rounds',
      tag: 'Multi-Disciplinary',
      title: 'Trauma & Geriatric Co-Management',
    },
    {
      type: 'logo',
      name: 'AO Foundation',
      sub: 'Davos · Switzerland',
      badge: 'TRAUMA LEAD',
      short: 'AO',
      iconColor: 'bg-blue-600 text-white',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    },
    {
      type: 'logo',
      name: 'Swiss Medtech',
      sub: 'Bern · Switzerland',
      badge: 'NATIONAL ASSOCIATION',
      short: '+CH',
      iconColor: 'bg-red-600 text-white',
      badgeColor: 'bg-red-50 text-red-600 border-red-200',
    },
    {
      type: 'dark',
      tag: '@ CONNECTED CARE',
      title: 'Digital Health Telemetry',
      image: '/real_bios/digital_health_roadmap.jpg',
    },
    {
      type: 'logo',
      name: 'NYU Langone',
      sub: 'Department of Orthopedic Surgery',
      badge: 'NEW YORK, USA',
      short: 'NYU',
      iconColor: 'bg-purple-600 text-white',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    },
    {
      type: 'logo',
      name: 'BG Klinik Tübingen',
      sub: 'Reconstructive Surgery',
      badge: 'LEVEL 1 TRAUMA',
      short: 'BG',
      iconColor: 'bg-emerald-600 text-white',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
    {
      type: 'logo',
      name: 'Innosuisse',
      sub: 'Swiss Innovation Agency · Bern',
      badge: 'FEDERAL AGENCY',
      short: '+CH',
      iconColor: 'bg-red-600 text-white',
      badgeColor: 'bg-red-50 text-red-700 border-red-200',
    },
    {
      type: 'image',
      image: '/real_bios/davos_alps_hero.jpg',
      alt: 'Davos Swiss Alps Headquarters',
      tag: 'Davos · 1,560m',
      title: 'Alpine Biomechanics Lab',
    },
    {
      type: 'logo',
      name: 'Innovation Center Davos',
      sub: 'Alpine High-Altitude Tech Hub',
      badge: 'INCUBATION',
      short: 'ICD',
      iconColor: 'bg-sky-600 text-white',
      badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
    }
  ];

  // Duplicate the array for a seamless infinite loop
  const fullTrack = [...partnerCards, ...partnerCards];

  return (
    <section id="partners" className="py-12 sm:py-16 overflow-hidden relative">
      
      {/* Header (Slide from Top) */}
      <motion.div 
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-heading tracking-tight text-[#2563eb] leading-tight">
          Healthcare Providers & <br />
          Institutes
        </h2>
        <p className="mt-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
          BIOS Medical is developed in the Swiss Alps, partnering with world-renowned trauma institutes, university clinics, and healthcare leaders to advance post-fracture recovery.
        </p>
      </motion.div>

      {/* 
        Infinite Logo Carousel / Marquee Animation (Slide from Bottom):
        animation: marquee 25s linear infinite;
        With pause on hover and smooth looping
      */}
      <motion.div 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full overflow-hidden py-4"
      >
        
        {/* Left & Right gradient masks for smooth edge fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-[#f8fafc] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-[#f8fafc] to-transparent z-10 pointer-events-none" />

        <div 
          className="flex animate-marquee-25s items-center gap-5 sm:gap-6 pl-4"
          style={{ animation: 'marquee 25s linear infinite', willChange: 'transform' }}
        >
          {fullTrack.map((card, idx) => (
            <div
              key={idx}
              className="shrink-0 transition-all duration-300 hover:scale-103"
            >
              {card.type === 'dark' ? (
                /* Center Connected Care Dark Card (Exact Match to Screenshot) */
                <div className="w-64 sm:w-72 h-52 sm:h-56 rounded-[28px] overflow-hidden shadow-lg border border-slate-900 relative group cursor-pointer bg-[#070d19] flex flex-col justify-end p-5">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen group-hover:scale-106 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070d19] via-[#070d19]/60 to-transparent" />
                  
                  {/* Subtle telemetry node ovals */}
                  <div className="absolute top-4 right-5 px-2.5 py-0.5 rounded-full border border-amber-400/40 text-[9px] font-mono text-amber-300 bg-amber-400/10">
                    99.8% DMO
                  </div>

                  <div className="relative z-10">
                    <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-sky-400" />
                      {card.tag}
                    </span>
                    <h4 className="text-sm font-extrabold text-white tracking-wide mt-1">
                      {card.title}
                    </h4>
                  </div>
                </div>
              ) : card.type === 'image' ? (
                /* Real Photo Card with overlay */
                <div className="w-64 sm:w-72 h-52 sm:h-56 rounded-[28px] overflow-hidden shadow-md border border-slate-200/80 relative group cursor-pointer bg-slate-100">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent flex flex-col justify-end p-5">
                    <span className="text-[10px] font-bold text-blue-300 uppercase tracking-wider flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-blue-400" />
                      {card.tag}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide mt-0.5">
                      {card.title}
                    </h4>
                  </div>
                </div>
              ) : (
                /* Partner Logo Box Card (Exact match to Screenshot) */
                <div className="w-64 sm:w-72 h-52 sm:h-56 rounded-[28px] bg-white p-5 sm:p-6 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:shadow-xl hover:border-blue-300 transition-all cursor-pointer group">
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-xl ${card.iconColor} flex items-center justify-center font-black text-xs shadow-xs`}>
                      {card.short}
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider border ${card.badgeColor}`}>
                      {card.badge}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm group-hover:text-blue-600 transition-colors">
                      {card.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                      {card.sub}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </motion.div>

    </section>
  );
};
