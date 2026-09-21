import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TurbineLogo } from './TurbineLogo';
import { ArrowRight, Database, Activity, Server, Radio, Shield, Stethoscope, Cloud, Cpu, LineChart, FileSpreadsheet, Lock } from 'lucide-react';

interface IntegrationItem {
  id: string;
  name: string;
  category: string;
  icon: React.ReactNode;
  row: 'top' | 'mid' | 'bot';
  side: 'left' | 'right';
}

export const RadialIntegrationHub: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>('epic');

  // Left Wing Items (EHR & Gateways)
  const leftItems: IntegrationItem[] = [
    // Top row
    { id: 'epic', name: 'Epic Systems', category: 'EHR Ingest', icon: <Database className="w-4 h-4 text-blue-600" />, row: 'top', side: 'left' },
    { id: 'cerner', name: 'Oracle Cerner', category: 'Hospital Record', icon: <Server className="w-4 h-4 text-indigo-600" />, row: 'top', side: 'left' },
    { id: 'fhir', name: 'HL7 FHIR v4', category: 'Interoperability', icon: <Radio className="w-4 h-4 text-cyan-600" />, row: 'top', side: 'left' },
    { id: 'baxter', name: 'Baxter Platform', category: 'Device Stream', icon: <Cpu className="w-4 h-4 text-blue-700" />, row: 'top', side: 'left' },

    // Mid row
    { id: 'mdeg', name: 'mdeg Swiss Cloud', category: 'GDPR / HIPAA', icon: <Cloud className="w-4 h-4 text-sky-600" />, row: 'mid', side: 'left' },
    { id: 'ble', name: 'Bedside RF Ingest', category: 'Wireless Telemetry', icon: <Radio className="w-4 h-4 text-teal-600" />, row: 'mid', side: 'left' },
    { id: 'pacs', name: 'DICOM / PACS', category: 'Radiology Archive', icon: <FileSpreadsheet className="w-4 h-4 text-purple-600" />, row: 'mid', side: 'left' },

    // Bot row
    { id: 'apple', name: 'Apple Health', category: 'Patient Portal', icon: <Activity className="w-4 h-4 text-rose-500" />, row: 'bot', side: 'left' },
    { id: 'aes', name: 'AES-256 Vault', category: 'Encrypted Stream', icon: <Lock className="w-4 h-4 text-amber-600" />, row: 'bot', side: 'left' },
    { id: 'cal', name: 'Cal Clinical Sync', category: 'Visit Scheduler', icon: <Stethoscope className="w-4 h-4 text-emerald-600" />, row: 'bot', side: 'left' },
  ];

  // Right Wing Items (Registries & AI Analytics)
  const rightItems: IntegrationItem[] = [
    // Top row
    { id: 'ai-engine', name: 'BIOS AI Risk Engine', category: 'Predictive ML', icon: <Cpu className="w-4 h-4 text-purple-600" />, row: 'top', side: 'right' },
    { id: 'mobilise', name: 'Mobilise-D Registry', category: 'EU DMO Benchmark', icon: <LineChart className="w-4 h-4 text-indigo-600" />, row: 'top', side: 'right' },
    { id: 'ao-data', name: 'AO Foundation DB', category: 'Fracture Trials', icon: <Database className="w-4 h-4 text-blue-600" />, row: 'top', side: 'right' },
    { id: 'avegen', name: 'Avegen Health', category: 'Remote Monitoring', icon: <Activity className="w-4 h-4 text-emerald-600" />, row: 'top', side: 'right' },

    // Mid row
    { id: 'ward', name: 'OGCM Ward Tablet', category: 'Geriatric Rounding', icon: <Stethoscope className="w-4 h-4 text-sky-600" />, row: 'mid', side: 'right' },
    { id: 'telehealth', name: 'Telehealth Portal', category: 'Physician Review', icon: <Radio className="w-4 h-4 text-blue-500" />, row: 'mid', side: 'right' },
    { id: 'fall-model', name: 'Fall Hazard Engine', category: 'Asymmetry ML', icon: <Shield className="w-4 h-4 text-amber-500" />, row: 'mid', side: 'right' },

    // Bot row
    { id: 'api-gateway', name: 'REST Clinical API', category: 'Fast Ingest', icon: <Server className="w-4 h-4 text-cyan-600" />, row: 'bot', side: 'right' },
    { id: 'audit', name: 'Audit Compliance', category: 'MDR / FDA Logs', icon: <Lock className="w-4 h-4 text-indigo-700" />, row: 'bot', side: 'right' },
    { id: 'export', name: 'CSV / Parquet Export', category: 'Research Cohorts', icon: <FileSpreadsheet className="w-4 h-4 text-teal-600" />, row: 'bot', side: 'right' },
  ];

  const renderBadge = (item: IntegrationItem, idx: number) => {
    const isHovered = hoveredId === item.id;
    return (
      <motion.button
        key={item.id}
        onMouseEnter={() => setHoveredId(item.id)}
        onClick={() => setHoveredId(item.id)}
        animate={{ y: [-2, 2, -2] }}
        transition={{ duration: 4 + (idx % 3), repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className={`relative inline-flex items-center gap-2 p-2.5 sm:p-3 rounded-full border transition-all duration-300 cursor-pointer shadow-xs ${
          isHovered
            ? 'bg-white border-blue-500 shadow-lg ring-2 ring-blue-100 z-30'
            : 'bg-white/90 hover:bg-white border-slate-200/90 text-slate-700'
        }`}
      >
        <div className="flex items-center justify-center shrink-0">
          {item.icon}
        </div>

        {/* 
          Expanding pill title matching video frame 32s (where hovering expands horizontally with arrow)
        */}
        <AnimatePresence>
          {isHovered && (
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 'auto', opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="inline-flex items-center gap-1.5 overflow-hidden text-xs font-bold text-slate-900 whitespace-nowrap pr-1"
            >
              <span>{item.name}</span>
              <ArrowRight className="w-3 h-3 text-blue-600 shrink-0" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    );
  };

  return (
    <section id="integration" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Header (Matching exact style in frame 30s) */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold mb-3">
          <TurbineLogo size={14} animate={true} />
          <span>INTEGRATION</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Seamlessly Integrate With All <br />
          <span className="text-blue-600">Your Healthcare & Clinical Systems</span>
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
          Our implanted sensor telemetry integrates effortlessly with your hospital information systems and EHRs, ensuring a smooth and connected experience.
        </p>

        <div className="mt-5 flex justify-center">
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="https://bios.mdeg.cloud/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-semibold text-xs tracking-wide shadow-md shadow-blue-500/25 transition-all group cursor-pointer"
          >
            <span>Learn More</span>
            <div className="w-5 h-5 rounded-full bg-white text-blue-600 flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-3 h-3" />
            </div>
          </motion.a>
        </div>
      </div>

      {/* 
        Radial Canvas Layout:
        Center Rotating Blue Orb + Horizontal Branching Lines + Circular Badges that expand on hover!
      */}
      <div className="relative py-10 px-4 sm:px-8 max-w-6xl mx-auto flex items-center justify-center min-h-[360px]">
        
        {/* Subtle background connecting branch lines */}
        <div className="hidden lg:block absolute left-12 right-12 top-1/2 h-0.5 border-t-2 border-dashed border-blue-200/80 -translate-y-1/2 z-0" />
        <div className="hidden lg:block absolute left-24 right-24 top-[32%] h-0.5 border-t border-dashed border-blue-100 -translate-y-1/2 z-0" />
        <div className="hidden lg:block absolute left-24 right-24 top-[68%] h-0.5 border-t border-dashed border-blue-100 -translate-y-1/2 z-0" />

        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Wing Rows */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end space-y-3.5 sm:space-y-5">
            
            {/* Top Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-2.5 sm:gap-3">
              {leftItems.filter(i => i.row === 'top').map((item, i) => renderBadge(item, i))}
            </div>

            {/* Middle Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-2.5 sm:gap-3">
              {leftItems.filter(i => i.row === 'mid').map((item, i) => renderBadge(item, i + 4))}
            </div>

            {/* Bottom Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-2.5 sm:gap-3">
              {leftItems.filter(i => i.row === 'bot').map((item, i) => renderBadge(item, i + 8))}
            </div>

          </div>

          {/* Center Rotating & Pulsing Orb with Large White Turbine Logo */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center relative my-4 lg:my-0">
            
            {/* Concentric ripple aura waves */}
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0.1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-36 h-36 rounded-full bg-blue-400/20 blur-md pointer-events-none"
            />
            <motion.div
              animate={{ scale: [1, 1.25, 1], opacity: [0.7, 0.2, 0.7] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-28 h-28 rounded-full bg-indigo-400/25 blur-sm pointer-events-none"
            />

            {/* Rotating Solid Orb with Large, Highly-Visible White Turbine Logo */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white shadow-2xl border-4 border-blue-100 p-2 flex items-center justify-center relative z-10 cursor-pointer"
            >
              <div className="w-full h-full rounded-full bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-inner">
                <TurbineLogo size={62} variant="white" glow={true} />
              </div>
            </motion.div>

            <span className="mt-2.5 px-3 py-0.5 rounded-full bg-blue-600 text-white text-[9px] font-black uppercase tracking-wider shadow-md">
              BIOS-Cloud
            </span>

          </div>

          {/* Right Wing Rows */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start space-y-3.5 sm:space-y-5">
            
            {/* Top Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
              {rightItems.filter(i => i.row === 'top').map((item, i) => renderBadge(item, i + 12))}
            </div>

            {/* Middle Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
              {rightItems.filter(i => i.row === 'mid').map((item, i) => renderBadge(item, i + 16))}
            </div>

            {/* Bottom Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
              {rightItems.filter(i => i.row === 'bot').map((item, i) => renderBadge(item, i + 20))}
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
