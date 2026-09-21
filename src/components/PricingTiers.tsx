import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TurbineLogo } from './TurbineLogo';
import { Check, ArrowRight, Crown } from 'lucide-react';

export const PricingTiers: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const plans = [
    {
      name: "Clinical Research",
      tagline: "Best for university hospitals & investigator-led trials",
      price: "Grant",
      period: "Funded / Academic study",
      icon: "research",
      featured: false,
      features: [
        "Raw HIPbeacon™ sensor stream ingest",
        "Digital Mobility Outcomes (DMO) export",
        "HIPAA & Swiss GDPR compliant data vault",
        "Standard research investigator support",
        "Anonymized biomechanical benchmarks"
      ],
      buttonText: "Join Clinical Trial",
      buttonLink: "#contact"
    },
    {
      name: "Hospital & OGCM Center",
      tagline: "Best for acute trauma clinics & geriatric wards",
      price: "Clinical",
      period: "Per patient / comprehensive care",
      icon: "crown",
      featured: true,
      features: [
        "Real-time continuous BIOS-Cloud telemetry",
        "22% mortality reduction OGCM protocol",
        "Early implant loosening & fall alerts",
        "Clinician ward rounding tablet app",
        "Automated family & caregiver progress updates",
        "24/7 Dedicated clinical monitoring support"
      ],
      buttonText: "Request Hospital Demo",
      buttonLink: "#contact"
    },
    {
      name: "Healthcare Network",
      tagline: "For regional hospital groups & health insurers",
      price: "Enterprise",
      period: "Annual multi-site deployment",
      icon: "network",
      featured: false,
      features: [
        "Native Epic, Cerner & FHIR EHR integration",
        "Health-economic cost saving analytics",
        "Multi-center population AI models",
        "Dedicated Clinical Implementation Director",
        "Onsite orthopedic surgeon training",
        "Custom API pipelines & SLA guarantees"
      ],
      buttonText: "Contact Enterprise Team",
      buttonLink: "#contact"
    }
  ];

  return (
    <section id="pricing" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header (Slide from Top) */}
      <motion.div 
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold mb-3">
          <TurbineLogo size={14} animate={true} />
          <span>DEPLOYMENT MODELS</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading tracking-tight text-slate-900">
          Simple & Flexible <br />
          <span className="text-blue-600">Clinical Deployment Plans</span>
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
          From multi-center research trials to acute hospital-wide OGCM implementations, choose the ideal integration framework for your institution.
        </p>
      </motion.div>

      {/* 3 Cards Grid: Card 1 from Left, Card 2 from Bottom, Card 3 from Right */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {plans.map((plan, idx) => {
          // Highlight if hovered, or default to featured if nothing is hovered
          const isHighlighted = hoveredIdx !== null ? hoveredIdx === idx : plan.featured;

          // Directional entrance: Left (idx 0), Bottom (idx 1), Right (idx 2)
          const initialDirection = idx === 0 ? { opacity: 0, x: -70 } : idx === 1 ? { opacity: 0, y: 70 } : { opacity: 0, x: 70 };

          return (
            <motion.div
              layout
              key={idx}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              initial={initialDirection}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ 
                layout: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1],
                delay: idx * 0.15 
              }}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative cursor-pointer ${
                isHighlighted
                  ? 'bg-white border-2 border-blue-500 shadow-2xl shadow-blue-500/20 -translate-y-2 scale-[1.02] ring-4 ring-blue-100/70 z-20'
                  : 'bg-white border border-slate-200/90 shadow-md hover:border-blue-300'
              }`}
            >
              {/* Top Ribbon */}
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-extrabold tracking-wider uppercase shadow-md flex items-center gap-1.5 whitespace-nowrap">
                  <Crown className="w-3.5 h-3.5 text-amber-300" />
                  <span>Most Recommended Clinical Tier</span>
                </div>
              )}

              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-colors duration-300 ${
                    isHighlighted ? 'bg-blue-600 text-white shadow-md' : 'bg-blue-50 text-blue-600'
                  }`}>
                    <TurbineLogo size={20} variant={isHighlighted ? 'white' : 'default'} animate={isHighlighted} />
                  </div>
                  {plan.featured && (
                    <span className="text-[11px] font-extrabold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                      OGCM Certified
                    </span>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900">{plan.name}</h3>
                <p className="text-xs text-slate-600 mt-1 min-h-[30px]">{plan.tagline}</p>

                {/* Price */}
                <div className="my-5 pb-5 border-b border-slate-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl font-black text-slate-900">{plan.price}</span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">{plan.period}</span>
                </div>

                {/* Features List */}
                <div className="space-y-2.5 mb-7">
                  <div className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">
                    Plan Includes:
                  </div>
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Button */}
              <a
                href={plan.buttonLink}
                className={`w-full py-3 px-5 rounded-full font-bold text-xs tracking-wide flex items-center justify-center gap-2 transition-all duration-300 group ${
                  isHighlighted
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-slate-100 hover:bg-blue-50 text-slate-800 hover:text-blue-700 border border-slate-200 hover:border-blue-300'
                }`}
              >
                <span>{plan.buttonText}</span>
                <div className={`w-5 h-5 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform ${
                  isHighlighted ? 'bg-white/20' : 'bg-slate-200 text-slate-700'
                }`}>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </a>

            </motion.div>
          );
        })}
      </div>

    </section>
  );
};
