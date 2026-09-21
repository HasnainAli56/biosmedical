import React from 'react';
import { motion } from 'framer-motion';
import { TurbineLogo } from './TurbineLogo';
import { Award, GraduationCap, MapPin, ExternalLink, Sparkles } from 'lucide-react';

export const AboutLeadership: React.FC = () => {
  const leadership = [
    {
      name: "Dr. Markus Windolf",
      role: "CEO & Co-Founder",
      credentials: "PhD Human Biology · MSc Mechanical Engineering",
      bio: "20 years in orthopedic biomechanics and medical device innovation. Inventor and team-lead of the AO Fracture Monitor (first active implantable sensor for continuous bone healing measurement) and the CE-marked Biphasic Plate. Recognized on Stanford University's list of the world's top 2% of scientists.",
      image: "/real_bios/markus_windolf_ceo.jpg",
      highlight: "Stanford Top 2% Scientist"
    },
    {
      name: "Dr. Patrick Stepanek",
      role: "COO & Co-Founder",
      credentials: "PhD Flexible Robotics · MSc Applied Physics · MBA",
      bio: "Over 20 years of management leadership across Europe and North America. CEO of Anjuna, founding board member of Saturo, and co-founder of Spine Nuances (Coligne spine implants). Passionate about addressing unmet med-tech needs through data-driven scalable solutions.",
      image: "/real_bios/patrick_stepanek_coo.jpg",
      highlight: "20+ Yrs Global MedTech Ops"
    },
    {
      name: "Viktor Varjas",
      role: "Senior Software Developer",
      credentials: "MSc Computer Science · BSc IT Engineering",
      bio: "10+ years specializing in medical device software engineering and IEC 62304 software life-cycles. Former Research Fellow at GE Healthcare and core software architect for the AO Fracture Monitor embedded telemetry at the AO Research Institute Davos.",
      image: "/real_bios/viktor_varjas_dev.jpg",
      highlight: "IEC 62304 Software Expert"
    }
  ];

  const advisors = [
    { name: "Prof. Dr. hc. mult. Robert Frigg", role: "Chairman of Board, 41medical AG · Former CTO Synthes Inc." },
    { name: "Prof. Dr. med. MBA Benedikt Braun", role: "Managing Senior Physician, Reconstructive Surgery, BG Klinik Tübingen" },
    { name: "Dr. Bernd Grimm, PhD", role: "Group Leader Human Motion & Digital Methods, Luxembourg Institute of Health" },
    { name: "Prof. Dr. med. Michael Schütz", role: "Director Jamieson Trauma Institute · Former Director Charité Berlin" },
    { name: "Dr. Bernd Robioneck", role: "Former VP Global R&D Stryker Trauma & Extremities" },
    { name: "Prof. Kenneth A. Egol, MD", role: "Vice Chairman & Professor Orthopedic Trauma, NYU Langone Health" }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
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
          <span>LEADERSHIP & ADVISORY</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
          Founded in the Swiss Alps, <br />
          <span className="text-blue-600">Built on Decades of Orthopedic Expertise</span>
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
          BIOS Medical AG is based in Davos, Switzerland. We combine world-class medical biomechanics with low-power sensor telemetry and machine learning to improve the human condition.
        </p>
      </motion.div>

      {/* Leadership 3 Cards Grid: Member 1 from Left, Member 2 from Bottom, Member 3 from Right */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
        {leadership.map((member, idx) => {
          const initialDirection = idx === 0 ? { opacity: 0, x: -70 } : idx === 1 ? { opacity: 0, y: 70 } : { opacity: 0, x: 70 };

          return (
            <motion.div
              key={idx}
              initial={initialDirection}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="rounded-3xl bg-white border border-slate-200/80 p-5 sm:p-7 shadow-md hover:shadow-2xl hover:border-blue-300 transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden ring-4 ring-blue-50 shadow-md">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute top-0 right-0 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-bold shadow-2xs">
                    {member.highlight}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{member.name}</h3>
                <div className="text-xs font-semibold text-blue-600 mb-1">{member.role}</div>
                <div className="text-[11px] text-slate-500 mb-4 flex items-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5 text-blue-500" />
                  <span>{member.credentials}</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Advisory Board Grid (Slide from Bottom) */}
      <motion.div 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden"
      >
        
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-wider text-blue-400">
              Global Clinical Guidance
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mt-1">
              Scientific Advisory Board
            </h3>
          </div>
          <div className="text-xs text-slate-400 font-medium max-w-xs">
            Guiding clinical trials, regulatory compliance (MDR), and international hospital rollout.
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advisors.map((advisor, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors"
            >
              <div className="text-sm font-bold text-white mb-1">{advisor.name}</div>
              <div className="text-xs text-slate-300 leading-snug">{advisor.role}</div>
            </div>
          ))}
        </div>

      </motion.div>

    </section>
  );
};
