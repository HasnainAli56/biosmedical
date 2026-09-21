import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TurbineLogo } from './TurbineLogo';
import { 
  ArrowRight, 
  Activity, 
  ShieldAlert, 
  Users, 
  BellRing, 
  Calendar, 
  CheckCircle, 
  AlertTriangle,
  Zap
} from 'lucide-react';

export const BenefitsBentoHub: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState(23);

  // Dynamic telemetry stats changing by day
  const telemetryData: Record<number, { gait: string; weight: string; status: string; statusColor: string }> = {
    21: { gait: '0.62 m/s', weight: '55% bodyweight', status: 'Early Mobilization', statusColor: 'blue' },
    22: { gait: '0.71 m/s', weight: '65% bodyweight', status: 'Steady Progress', statusColor: 'indigo' },
    23: { gait: '0.82 m/s', weight: '78% bodyweight', status: 'Optimal Recovery', statusColor: 'emerald' },
    24: { gait: '0.88 m/s', weight: '85% bodyweight', status: 'Above Target', statusColor: 'emerald' },
    25: { gait: '0.94 m/s', weight: '90% bodyweight', status: 'Independent Walk', statusColor: 'emerald' },
    26: { gait: '1.02 m/s', weight: '98% bodyweight', status: 'Discharge Ready', statusColor: 'emerald' },
  };

  const currentDayData = telemetryData[selectedDay] || telemetryData[23];

  return (
    <section id="benefits" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      
      {/* Section Header with Top entrance */}
      <motion.div 
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-5"
      >
        <div>
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-sm font-bold mb-3">
            <TurbineLogo size={16} animate={true} />
            <span>OUR CLINICAL INNOVATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-slate-900 leading-tight">
            The Breakthrough In <br />
            <span className="text-blue-600">Implanted Mobility Sensing</span>
          </h2>
        </div>

        <motion.a
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          href="#why-choose"
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-blue-100/80 hover:bg-blue-200/80 text-blue-800 font-bold text-sm tracking-wide transition-all self-start md:self-auto group cursor-pointer"
        >
          <span>See How It Works</span>
          <div className="w-5 h-5 rounded-full bg-white text-blue-600 flex items-center justify-center group-hover:translate-x-1 transition-transform">
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </motion.a>
      </motion.div>

      {/* Bento Grid with Central Glowing Turbine Hub (Exact Dribbble Structure) */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

        {/* ============================================================
            Central Glowing Hub (Dead Center in the 4-card quad with pulseGlow 2s)
            ============================================================ */}
        <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none items-center justify-center">
          <div className="relative w-36 h-36 flex items-center justify-center">
            
            {/* Multiple pulsing ripple waves */}
            <motion.div 
              animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full bg-blue-500/20 blur-lg" 
            />
            <motion.div 
              animate={{ scale: [1, 1.25, 1], opacity: [0.7, 0.2, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-2 rounded-full bg-blue-500/20 blur-md" 
            />

            {/* Solid Center Orb with pulseGlow 2s infinite */}
            <motion.div 
              animate={{ 
                scale: [1, 1.08, 1],
                boxShadow: [
                  "0 0 15px rgba(37,99,235,0.4), 0 0 35px rgba(59,130,246,0.2)",
                  "0 0 35px rgba(37,99,235,0.9), 0 0 70px rgba(59,130,246,0.6)",
                  "0 0 15px rgba(37,99,235,0.4), 0 0 35px rgba(59,130,246,0.2)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-full p-1.5 bg-gradient-to-tr from-blue-600 to-indigo-600"
            >
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-24 h-24 rounded-full bg-white shadow-2xl border-4 border-blue-100 flex items-center justify-center p-2 relative z-10"
              >
                <div className="w-full h-full rounded-full bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-700 flex items-center justify-center shadow-inner">
                  <TurbineLogo size={52} variant="white" glow={true} />
                </div>
              </motion.div>
            </motion.div>

            {/* Glowing SVG dashed lines connecting center to all 4 cards */}
            <svg className="absolute w-72 h-72 pointer-events-none -z-10" viewBox="0 0 256 256">
              <line x1="128" y1="128" x2="20" y2="40" stroke="#93c5fd" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
              <line x1="128" y1="128" x2="236" y2="40" stroke="#93c5fd" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
              <line x1="128" y1="128" x2="20" y2="216" stroke="#93c5fd" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
              <line x1="128" y1="128" x2="236" y2="216" stroke="#93c5fd" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
            </svg>
          </div>
        </div>

        {/* ============================================================
            Card 1 (Top Left): Continuous Hip Biomechanics (Slide from Left)
            ============================================================ */}
        <motion.div 
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4, borderColor: '#93c5fd' }}
          className="rounded-3xl bg-[#f5f8fc] border border-slate-200/80 p-6 sm:p-8 flex flex-col justify-between shadow-xs transition-all relative overflow-hidden group"
        >
          <div>
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
                <Activity className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Continuous Hip Biomechanics</h3>
            </div>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
              Direct telemetry from inside the hip implant captures authentic physical loading and gait dynamics.
            </p>
          </div>

          {/* Inset Mockup UI with interactive days */}
          <div className="mt-6 bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-100 relative">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <img 
                  src="/real_bios/markus_windolf_ceo.jpg" 
                  alt="Clinical Investigator" 
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-100"
                />
                <div>
                  <div className="text-xs uppercase font-bold text-slate-500">Clinical Protocol #401</div>
                  <div className="text-sm font-bold text-slate-800">Post-Op Mobilization Cohort</div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200">
                <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
                <span>{currentDayData.status}</span>
              </div>
            </div>

            {/* Calendar Strip (21 to 26) */}
            <div className="grid grid-cols-6 gap-2 py-4">
              {[
                { day: 'Fri', num: 21 },
                { day: 'Sat', num: 22 },
                { day: 'Sun', num: 23 },
                { day: 'Mon', num: 24 },
                { day: 'Tue', num: 25 },
                { day: 'Wed', num: 26 },
              ].map((item) => (
                <button
                  key={item.num}
                  onClick={() => setSelectedDay(item.num)}
                  className={`flex flex-col items-center py-2.5 rounded-xl text-center transition-all cursor-pointer ${
                    selectedDay === item.num
                      ? 'bg-blue-600 text-white shadow-md scale-105'
                      : 'bg-slate-50 text-slate-600 hover:bg-blue-50'
                  }`}
                >
                  <span className="text-xs uppercase font-bold">{item.day}</span>
                  <span className="text-sm font-black">{item.num}</span>
                </button>
              ))}
            </div>

            {/* Telemetry live values */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={selectedDay}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="space-y-2.5"
              >
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 text-sm">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                    <div>
                      <span className="font-bold text-slate-800">Gait Velocity: {currentDayData.gait}</span>
                      <span className="text-xs text-slate-500 block">Day {selectedDay} recovery track</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-amber-700 bg-amber-100/70 px-2.5 py-1 rounded-md">Direct Feed</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 text-sm">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
                    <div>
                      <span className="font-bold text-slate-800">Weight Bearing: {currentDayData.weight}</span>
                      <span className="text-xs text-slate-500 block">Continuous implanted load sensor</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-blue-700 bg-blue-100/70 px-2.5 py-1 rounded-md">Active</span>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute -bottom-3 -right-2 glass-pill px-3.5 py-1.5 rounded-full text-xs font-bold text-blue-800 shadow-md border border-blue-200 animate-float">
              ⚡ Real-time Telemetry
            </div>
          </div>
        </motion.div>

        {/* ============================================================
            Card 2 (Top Right): Digital Biomarker Telemetry (Slide from Right)
            ============================================================ */}
        <motion.div 
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4, borderColor: '#93c5fd' }}
          className="rounded-3xl bg-[#f5f8fc] border border-slate-200/80 p-6 sm:p-8 flex flex-col justify-between shadow-xs transition-all relative overflow-hidden group"
        >
          <div>
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-xs">
                <ShieldAlert className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Predictive Fall & Biomarker Alerts</h3>
            </div>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
              AI predictive algorithms detect micro-instability, asymmetry, and dangerous complications early.
            </p>
          </div>

          {/* Radar Node Layout with smooth animations */}
          <div className="mt-6 bg-white rounded-2xl p-5 shadow-sm border border-slate-100 relative min-h-[230px] flex items-center justify-center overflow-hidden">
            
            {/* Concentric radar rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 rounded-full border border-blue-100/80" 
            />
            <div className="absolute inset-10 rounded-full border border-dashed border-blue-200" />

            {/* Orbiting Sensor Indicators (Standardized to solid blue & yellow) */}
            <motion.div animate={{ y: [-3, 3, -3] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-2 left-6 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700">
              Gait Cadence
            </motion.div>
            <motion.div animate={{ y: [3, -3, 3] }} transition={{ duration: 3.5, repeat: Infinity }} className="absolute top-3 right-6 px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-xs font-bold text-amber-700">
              Axial Strain
            </motion.div>
            <motion.div animate={{ y: [-2, 2, -2] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-3 left-8 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700">
              Step Symmetry
            </motion.div>
            <motion.div animate={{ y: [2, -2, 2] }} transition={{ duration: 3.2, repeat: Infinity }} className="absolute bottom-3 right-8 px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-xs font-bold text-amber-700">
              Fall Hazard Flag
            </motion.div>

            {/* Central Alert Card Stack */}
            <div className="relative z-10 w-full max-w-[280px] bg-white rounded-xl shadow-lg border border-slate-100 p-4 space-y-2.5">
              <div className="flex items-center gap-2 text-sm text-amber-700 font-bold pb-1.5 border-b border-slate-100">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                <span>Biomarker Anomaly Stream</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-700">
                <span className="font-medium">Early Loosening Risk:</span>
                <span className="font-black text-amber-600">Minimal (0.01%)</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-700">
                <span className="font-medium">Fall Probability Score:</span>
                <span className="font-black text-blue-600">Stable (8%)</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-700">
                <span className="font-medium">Continuous DMO Accuracy:</span>
                <span className="font-black text-blue-600">99.8%</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ============================================================
            Card 3 (Bottom Left): Multidisciplinary OGCM Loop (Slide from Left)
            ============================================================ */}
        <motion.div 
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4, borderColor: '#93c5fd' }}
          className="rounded-3xl bg-[#f5f8fc] border border-slate-200/80 p-6 sm:p-8 flex flex-col justify-between shadow-xs transition-all relative overflow-hidden group"
        >
          <div>
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
                <Users className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Multidisciplinary OGCM Co-Management</h3>
            </div>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
              Seamless data loop uniting surgeons, geriatricians, and patients for a proven 22% mortality reduction.
            </p>
          </div>

          {/* Connected Network Diagram using REAL Team Photos */}
          <div className="mt-6 bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-100 relative">
            <div className="flex items-center justify-between relative py-2">
              
              {/* Connecting animated pulse beam line */}
              <div className="absolute top-1/2 left-10 right-10 h-0.5 border-t-2 border-dashed border-blue-200 -translate-y-1/2 z-0" />
              <motion.div 
                animate={{ x: [-50, 180, -50] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-10 w-4 h-1 bg-blue-500 rounded-full blur-[1px] -translate-y-1/2 z-1"
              />

              {/* Node 1: Dr. Markus Windolf */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-13 h-13 rounded-full ring-4 ring-white shadow-md overflow-hidden bg-blue-100">
                  <img src="/real_bios/markus_windolf_ceo.jpg" alt="Dr. Markus Windolf" className="w-full h-full object-cover" />
                </div>
                <span className="text-xs font-bold text-slate-900 mt-2">Trauma Surgeon</span>
                <span className="text-[11px] text-slate-500">Orthopedic Lead</span>
              </div>

              {/* Center Bridge: BIOS-Cloud */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg flex items-center justify-center animate-pulse">
                  <TurbineLogo size={24} variant="white" animate={true} />
                </div>
                <span className="text-[11px] font-black text-blue-700 mt-1 uppercase tracking-wider">BIOS-Cloud</span>
              </div>

              {/* Node 2: Dr. Patrick Stepanek */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-13 h-13 rounded-full ring-4 ring-white shadow-md overflow-hidden bg-amber-100">
                  <img src="/real_bios/patrick_stepanek_coo.jpg" alt="Dr. Patrick Stepanek" className="w-full h-full object-cover" />
                </div>
                <span className="text-xs font-bold text-slate-900 mt-2">Geriatric Lead</span>
                <span className="text-[11px] text-slate-500">Rehabilitation Care</span>
              </div>

            </div>

            <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm text-slate-600">
              <span className="font-medium">Automated Daily Ward Reports</span>
              <span className="font-bold text-blue-600">Live Continuous Telemetry</span>
            </div>
          </div>
        </motion.div>

        {/* ============================================================
            Card 4 (Bottom Right): Actionable Clinical Notifications (Slide from Right)
            ============================================================ */}
        <motion.div 
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4, borderColor: '#93c5fd' }}
          className="rounded-3xl bg-[#f5f8fc] border border-slate-200/80 p-6 sm:p-8 flex flex-col justify-between shadow-xs transition-all relative overflow-hidden group"
        >
          <div>
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-xs">
                <BellRing className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Personalized Clinical Reminders</h3>
            </div>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
              Context-aware recovery triggers replace rigid clinic appointments with remote precision care.
            </p>
          </div>

          {/* Floating Message Stack with Staggered Motion */}
          <div className="mt-6 bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-100 space-y-3">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-3 rounded-xl bg-amber-50/90 border border-amber-200 flex items-start gap-3 shadow-2xs cursor-default"
            >
              <div className="w-7 h-7 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0 text-sm font-bold">
                ✓
              </div>
              <div>
                <div className="text-sm font-bold text-amber-950">Mobilization Target Achieved</div>
                <div className="text-xs text-amber-800 font-medium mt-0.5">Patient took 1,420 steps today — 118% of rehabilitation plan.</div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-3 rounded-xl bg-blue-50/90 border border-blue-200 flex items-start gap-3 shadow-2xs cursor-default"
            >
              <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 text-sm font-bold">
                ⚡
              </div>
              <div>
                <div className="text-sm font-bold text-blue-950">Telehealth Sync Scheduled</div>
                <div className="text-xs text-blue-800 font-medium mt-0.5">Weekly progress evaluation with Dr. Windolf at 10:30 AM.</div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 shadow-2xs cursor-default"
            >
              <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 text-sm font-bold">
                ℹ
              </div>
              <div>
                <div className="text-sm font-bold text-slate-800">Peace of Mind for Families</div>
                <div className="text-xs text-slate-600 font-medium mt-0.5">Immediate remote notifications sent to family caregivers.</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
