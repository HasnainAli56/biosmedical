import React from 'react';
import { motion } from 'framer-motion';
import { TurbineLogo } from './TurbineLogo';
import { Shield, Sparkles, Activity } from 'lucide-react';

export const StatementSection: React.FC = () => {
  return (
    <section className="py-28 sm:py-40 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center relative overflow-hidden">
      
      {/* 
        Exact expanding text animation from media_1789925360507.png & frames 04s-06s:
        Starts as clean plain text, then inline pills smoothly expand and push words apart!
      */}
      <div className="relative">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-slate-800 leading-[1.35] sm:leading-[1.45]">
          
          {/* Row 1: "Our solution [pill] effectively empowers" */}
          <span className="inline-flex items-center flex-wrap justify-center align-middle">
            <span className="text-slate-900">Our solution</span>

            {/* Pill 1: Smoothly expands between "Our solution" and "effectively empowers" */}
            <motion.span
              initial={{ width: 0, opacity: 0, scale: 0.6 }}
              whileInView={{ width: 'auto', opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 180, damping: 20, delay: 0.4 }}
              className="inline-flex items-center overflow-hidden align-middle mx-2"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 shadow-sm text-sm font-bold whitespace-nowrap">
                <TurbineLogo size={16} animate={true} />
                <span>HIPbeacon™</span>
              </span>
            </motion.span>

            <span className="text-slate-600">effectively empowers</span>
          </span>{' '}

          {/* Row 2: "the orthopedic recovery [pill] industry" */}
          <span className="inline-flex items-center flex-wrap justify-center align-middle">
            <span className="text-slate-600">the orthopedic recovery</span>

            {/* Pill 2: Smoothly expands between "orthopedic recovery" and "industry" */}
            <motion.span
              initial={{ width: 0, opacity: 0, scale: 0.6 }}
              whileInView={{ width: 'auto', opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 180, damping: 20, delay: 0.65 }}
              className="inline-flex items-center overflow-hidden align-middle mx-2"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 shadow-sm text-sm font-bold whitespace-nowrap">
                <Shield className="w-4 h-4 text-purple-600" />
                <span>OGCM 22%</span>
              </span>
            </motion.span>

            <span className="text-slate-600">ecosystem</span>
          </span>{' '}

          {/* Row 3: "by enhancing [ (avatars) ] patient outcomes" */}
          <span className="inline-flex items-center flex-wrap justify-center align-middle">
            <span className="text-slate-900">by enhancing</span>

            {/* Pill 3: Smoothly expands parentheses with founder avatars */}
            <motion.span
              initial={{ width: 0, opacity: 0, scale: 0.6 }}
              whileInView={{ width: 'auto', opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 180, damping: 20, delay: 0.9 }}
              className="inline-flex items-center overflow-hidden align-middle mx-2"
            >
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 shadow-sm whitespace-nowrap">
                <span className="text-blue-700 font-extrabold text-sm">(</span>
                <span className="flex -space-x-1.5">
                  <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover" src="/real_bios/markus_windolf_ceo.jpg" alt="Dr. Markus Windolf" />
                  <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover" src="/real_bios/patrick_stepanek_coo.jpg" alt="Dr. Patrick Stepanek" />
                  <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover" src="/real_bios/viktor_varjas_dev.jpg" alt="Viktor Varjas" />
                </span>
                <span className="text-blue-700 font-extrabold text-sm">)</span>
              </span>
            </motion.span>

            <span className="text-slate-400">patient outcomes</span>
          </span>

        </h2>

        {/* Supporting Caption */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-8 text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed font-normal"
        >
          Continuous Digital Mobility Outcomes (DMO) directly from the hip implant bridge the dangerous post-op gap, enabling early weight-bearing and preventing permanent loss of autonomy.
        </motion.p>
      </div>

    </section>
  );
};
