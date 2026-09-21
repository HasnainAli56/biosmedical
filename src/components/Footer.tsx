import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TurbineLogo } from './TurbineLogo';
import { ArrowRight, Mail, MapPin, Building, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isWatermarkBlue, setIsWatermarkBlue] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer id="contact" className="pt-12 sm:pt-16 pb-8 bg-white border-t border-slate-200/80 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section: Brand + Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-slate-100">
          
          {/* Left Column: Logo + Newsletter */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2.5">
              <TurbineLogo size={32} animate={true} glow={true} />
              <span className="text-2xl font-bold tracking-tight text-slate-900">
                BIOS <span className="text-blue-600 font-extrabold">Medical</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 max-w-sm leading-relaxed">
              Join our scientific & clinical briefing to receive updates on HIPbeacon™ validation studies, regulatory milestones, and orthogeriatric care models.
            </p>

            {/* Newsletter Input Form */}
            {subscribed ? (
              <div className="p-3.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Thank you! You are subscribed to BIOS Medical updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center max-w-md relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your clinical / professional email..."
                  required
                  className="w-full pl-4 pr-32 py-3 rounded-full bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-500 text-xs text-slate-800"
                />
                <button
                  type="submit"
                  className="absolute right-1 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-xs cursor-pointer"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </form>
            )}

            {/* Swiss Headquarters Badge */}
            <div className="pt-2 text-xs text-slate-600 space-y-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span className="font-semibold text-slate-800">BIOS Medical AG</span> · Innovation Center Davos
              </div>
              <div className="text-[11px] pl-5.5 text-slate-600">
                Obere Strasse 22, CH-7270 Davos, Switzerland (CHE-371.993.848)
              </div>
            </div>
          </div>

          {/* Right Columns: Nav Links */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8 text-xs">
            
            {/* Column 1 */}
            <div>
              <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-4">
                Products
              </h4>
              <ul className="space-y-2.5 text-slate-600 font-medium">
                <li><a href="#benefits" className="hover:text-blue-600 transition-colors">HIPbeacon™ Sensor</a></li>
                <li><a href="https://bios.mdeg.cloud/login" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">BIOS-Cloud Login</a></li>
                <li><a href="#benefits" className="hover:text-blue-600 transition-colors">DMO Analytics Engine</a></li>
                <li><a href="#integration" className="hover:text-blue-600 transition-colors">Bedside RF Gateway</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-4">
                Solutions
              </h4>
              <ul className="space-y-2.5 text-slate-600 font-medium">
                <li><a href="#why-choose" className="hover:text-blue-600 transition-colors">Orthopedic Trauma</a></li>
                <li><a href="#why-choose" className="hover:text-blue-600 transition-colors">Geriatric Co-Management</a></li>
                <li><a href="#why-choose" className="hover:text-blue-600 transition-colors">22% Mortality Reduction</a></li>
                <li><a href="#pricing" className="hover:text-blue-600 transition-colors">Hospital Wards</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-4">
                Science
              </h4>
              <ul className="space-y-2.5 text-slate-600 font-medium">
                <li><a href="#partners" className="hover:text-blue-600 transition-colors">AO Research Studies</a></li>
                <li><a href="#partners" className="hover:text-blue-600 transition-colors">Mobilise-D Initiative</a></li>
                <li><a href="#faq" className="hover:text-blue-600 transition-colors">Clinical Publications</a></li>
                <li><a href="#faq" className="hover:text-blue-600 transition-colors">CE-Mark Roadmap</a></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-4">
                Company
              </h4>
              <ul className="space-y-2.5 text-slate-600 font-medium">
                <li><a href="#about" className="hover:text-blue-600 transition-colors">About BIOS</a></li>
                <li><a href="#leadership" className="hover:text-blue-600 transition-colors">Leadership & Founders</a></li>
                <li><a href="#advisory" className="hover:text-blue-600 transition-colors">Advisory Board</a></li>
                <li><a href="https://www.biosmedical.care/dataprivacy" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

          </div>

        </div>

      </div>

      {/* ============================================================
          Large Readable Watermark Typography 
          (Turns vibrant blue after animation completes as requested by user)
          ============================================================ */}
      <div className="w-full text-center my-4 select-none pointer-events-none overflow-hidden relative">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          onAnimationComplete={() => setIsWatermarkBlue(true)}
          className="relative"
        >
          <span className={`text-[11vw] sm:text-[13vw] font-black tracking-tighter block leading-none select-none transition-colors duration-1000 ${
            isWatermarkBlue
              ? 'text-blue-600/90 drop-shadow-sm'
              : 'text-slate-200/80'
          }`}>
            BIOS Medical
          </span>
        </motion.div>
      </div>

      {/* ============================================================
          Bottom Copyright & Legal Links 
          (Placed at the absolute bottom of the footer as requested)
          ============================================================ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-100 pt-6">
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>
            © {new Date().getFullYear()} BIOS Medical AG. All rights reserved. Registered in Graubünden, Switzerland.
          </div>
          <div className="flex items-center gap-5 text-slate-500">
            <a href="https://www.biosmedical.care/dataprivacy" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms of Use</a>
            <span>·</span>
            <a href="https://bios.mdeg.cloud/login" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">BIOS-Cloud Portal</a>
          </div>
        </div>
      </div>

    </footer>
  );
};
