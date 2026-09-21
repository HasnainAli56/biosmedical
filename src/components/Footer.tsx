import React, { useState } from 'react';
import { ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer id="contact" className="py-10 sm:py-12 bg-white border-t border-slate-200/80 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section: Brand + Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pb-8 border-b border-slate-100">
          
          {/* Left Column: Transparent Logo + Mission */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Transparent Logo without any background card */}
            <div className="flex items-center">
              <img 
                src="/bios_logo.png" 
                alt="BIOS Medical - Restore Life" 
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-600 max-w-sm leading-relaxed font-normal">
              Pioneering the world's first implanted hip mobility sensor. Restoring patient independence through real-time continuous Digital Mobility Outcomes (DMO).
            </p>

            {/* Newsletter Input Form */}
            {subscribed ? (
              <div className="p-3 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2 max-w-md">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Thank you! You are subscribed to BIOS Medical updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center max-w-md relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your clinical or institutional email..."
                  required
                  className="w-full pl-4 pr-32 py-2.5 rounded-full bg-slate-50 border border-slate-200/90 focus:outline-none focus:border-blue-500 text-xs text-slate-800 placeholder-slate-400 transition-colors shadow-2xs"
                />
                <button
                  type="submit"
                  className="absolute right-1 px-4 py-1.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </form>
            )}

            {/* Swiss Headquarters */}
            <div className="text-xs text-slate-500 flex items-center gap-2 pt-1">
              <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span className="font-semibold text-slate-800">BIOS Medical AG</span>
              <span>· Innovation Center Davos, Switzerland</span>
            </div>

          </div>

          {/* Right Columns: Structured Nav Links */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-xs">
            
            {/* Column 1: Products */}
            <div>
              <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-3">
                Products
              </h4>
              <ul className="space-y-2 text-slate-600 font-medium">
                <li><a href="#benefits" className="hover:text-blue-600 transition-colors">HIPbeacon™ Sensor</a></li>
                <li><a href="https://bios.mdeg.cloud/login" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">BIOS-Cloud Login</a></li>
                <li><a href="#benefits" className="hover:text-blue-600 transition-colors">DMO Analytics</a></li>
                <li><a href="#integration" className="hover:text-blue-600 transition-colors">Bedside RF Gateway</a></li>
              </ul>
            </div>

            {/* Column 2: Solutions */}
            <div>
              <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-3">
                Solutions
              </h4>
              <ul className="space-y-2 text-slate-600 font-medium">
                <li><a href="#why-choose" className="hover:text-blue-600 transition-colors">Orthopedic Trauma</a></li>
                <li><a href="#why-choose" className="hover:text-blue-600 transition-colors">Geriatric Care</a></li>
                <li><a href="#why-choose" className="hover:text-blue-600 transition-colors">22% Mortality Protocol</a></li>
                <li><a href="#pricing" className="hover:text-blue-600 transition-colors">Hospital Wards</a></li>
              </ul>
            </div>

            {/* Column 3: Science */}
            <div>
              <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-3">
                Science
              </h4>
              <ul className="space-y-2 text-slate-600 font-medium">
                <li><a href="#evidence" className="hover:text-blue-600 transition-colors">AO Research Studies</a></li>
                <li><a href="#partners" className="hover:text-blue-600 transition-colors">Mobilise-D Registry</a></li>
                <li><a href="#evidence" className="hover:text-blue-600 transition-colors">Clinical Publications</a></li>
                <li><a href="#faq" className="hover:text-blue-600 transition-colors">CE-Mark Roadmap</a></li>
              </ul>
            </div>

            {/* Column 4: Company */}
            <div>
              <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-3">
                Company
              </h4>
              <ul className="space-y-2 text-slate-600 font-medium">
                <li><a href="#about" className="hover:text-blue-600 transition-colors">About BIOS</a></li>
                <li><a href="#leadership" className="hover:text-blue-600 transition-colors">Leadership & Team</a></li>
                <li><a href="#leadership" className="hover:text-blue-600 transition-colors">Advisory Board</a></li>
                <li><a href="https://www.biosmedical.care/dataprivacy" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>
            © {new Date().getFullYear()} BIOS Medical AG. All rights reserved. Registered in Switzerland (CHE-371.993.848).
          </div>
          <div className="flex items-center gap-5 text-slate-500">
            <a href="https://www.biosmedical.care/dataprivacy" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
            <span>·</span>
            <a href="https://bios.mdeg.cloud/login" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">BIOS-Cloud Portal</a>
          </div>
        </div>

      </div>

    </footer>
  );
};
