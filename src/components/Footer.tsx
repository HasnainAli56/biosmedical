import React, { useState } from 'react';
import { ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';
import { PageModal } from './PageModal';

interface FooterProps {
  onOpenPage?: (pageId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPage }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [activeModalId, setActiveModalId] = useState<string | null>(null);

  const handleOpenPage = (pageId: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (onOpenPage) {
      onOpenPage(pageId);
    } else {
      setActiveModalId(pageId);
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="py-10 sm:py-12 bg-white border-t border-slate-200/80 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section: Brand + Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pb-8 border-b border-slate-100">
          
          {/* Left Column: Transparent Logo + Mission */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Transparent Logo without any background card */}
            <div className="flex items-center">
              <img 
                src="/bios_logo_new.png" 
                alt="BIOS Medical - Restore Life" 
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>

            <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed font-normal">
              Pioneering the world's first implanted hip mobility sensor. Restoring patient independence through real-time continuous Digital Mobility Outcomes (DMO).
            </p>

            {/* Newsletter Input Form */}
            {subscribed ? (
              <div className="p-3.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs sm:text-sm font-bold flex items-center gap-2.5 max-w-md">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Thank you! You are subscribed to BIOS Medical updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center max-w-md relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your clinical email..."
                  required
                  className="w-full pl-4 pr-32 py-3 rounded-full bg-slate-50 border border-slate-200/90 focus:outline-none focus:border-blue-500 text-sm text-slate-800 placeholder-slate-400 transition-colors shadow-2xs"
                />
                <button
                  type="submit"
                  className="absolute right-1 px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            {/* Swiss Headquarters */}
            <div className="text-xs sm:text-sm text-slate-600 flex items-center gap-2 pt-1">
              <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
              <button 
                onClick={() => handleOpenPage('impressum')}
                className="font-semibold text-slate-800 hover:text-blue-600 transition-colors text-left cursor-pointer"
              >
                BIOS Medical AG
              </button>
              <span>· Innovation Center Davos, Switzerland</span>
            </div>

          </div>

          {/* Right Columns: Structured Nav Links with Interactive Dedicated Pages */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-xs sm:text-sm">
            
            {/* Column 1: Products */}
            <div>
              <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-3.5">
                Products
              </h4>
              <ul className="space-y-2.5 text-slate-600 font-medium text-xs sm:text-sm">
                <li>
                  <button onClick={(e) => handleOpenPage('hipbeacon', e)} className="hover:text-blue-600 transition-colors text-left cursor-pointer">
                    HIPbeacon™ Sensor
                  </button>
                </li>
                <li>
                  <button onClick={(e) => handleOpenPage('bios-cloud', e)} className="hover:text-blue-600 transition-colors text-left cursor-pointer">
                    BIOS-Cloud Login
                  </button>
                </li>
                <li>
                  <button onClick={(e) => handleOpenPage('dmo-analytics', e)} className="hover:text-blue-600 transition-colors text-left cursor-pointer">
                    DMO Analytics
                  </button>
                </li>
                <li>
                  <button onClick={(e) => handleOpenPage('rf-gateway', e)} className="hover:text-blue-600 transition-colors text-left cursor-pointer">
                    Bedside RF Gateway
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 2: Solutions */}
            <div>
              <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-3.5">
                Solutions
              </h4>
              <ul className="space-y-2.5 text-slate-600 font-medium text-xs sm:text-sm">
                <li>
                  <button onClick={(e) => handleOpenPage('orthopedic-trauma', e)} className="hover:text-blue-600 transition-colors text-left cursor-pointer">
                    Orthopedic Trauma
                  </button>
                </li>
                <li>
                  <button onClick={(e) => handleOpenPage('geriatric-care', e)} className="hover:text-blue-600 transition-colors text-left cursor-pointer">
                    Geriatric Care
                  </button>
                </li>
                <li>
                  <button onClick={(e) => handleOpenPage('mortality-protocol', e)} className="hover:text-blue-600 transition-colors text-left cursor-pointer">
                    22% Mortality Protocol
                  </button>
                </li>
                <li>
                  <button onClick={(e) => handleOpenPage('hospital-wards', e)} className="hover:text-blue-600 transition-colors text-left cursor-pointer">
                    Hospital Wards
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Science */}
            <div>
              <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-3.5">
                Science
              </h4>
              <ul className="space-y-2.5 text-slate-600 font-medium text-xs sm:text-sm">
                <li>
                  <button onClick={(e) => handleOpenPage('ao-studies', e)} className="hover:text-blue-600 transition-colors text-left cursor-pointer">
                    AO Research Studies
                  </button>
                </li>
                <li>
                  <button onClick={(e) => handleOpenPage('mobilise-d', e)} className="hover:text-blue-600 transition-colors text-left cursor-pointer">
                    Mobilise-D Registry
                  </button>
                </li>
                <li>
                  <button onClick={(e) => handleOpenPage('publications', e)} className="hover:text-blue-600 transition-colors text-left cursor-pointer">
                    Clinical Publications
                  </button>
                </li>
                <li>
                  <button onClick={(e) => handleOpenPage('ce-mark', e)} className="hover:text-blue-600 transition-colors text-left cursor-pointer">
                    CE-Mark Roadmap
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Company */}
            <div>
              <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-3.5">
                Company
              </h4>
              <ul className="space-y-2.5 text-slate-600 font-medium text-xs sm:text-sm">
                <li>
                  <button onClick={(e) => handleOpenPage('about-bios', e)} className="hover:text-blue-600 transition-colors text-left cursor-pointer">
                    About BIOS
                  </button>
                </li>
                <li>
                  <button onClick={(e) => handleOpenPage('leadership', e)} className="hover:text-blue-600 transition-colors text-left cursor-pointer">
                    Leadership & Team
                  </button>
                </li>
                <li>
                  <button onClick={(e) => handleOpenPage('advisory-board', e)} className="hover:text-blue-600 transition-colors text-left cursor-pointer">
                    Advisory Board
                  </button>
                </li>
                <li>
                  <button onClick={(e) => handleOpenPage('privacy', e)} className="hover:text-blue-600 transition-colors text-left cursor-pointer">
                    Privacy Policy
                  </button>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-slate-500 gap-3">
          <div>
            © {new Date().getFullYear()} BIOS Medical AG. All rights reserved. Registered in Switzerland (
            <button 
              onClick={() => handleOpenPage('impressum')}
              className="text-blue-600 hover:underline cursor-pointer"
            >
              CHE-371.993.848
            </button>
            ).
          </div>
          <div className="flex items-center gap-5 text-slate-500">
            <button onClick={() => handleOpenPage('privacy')} className="hover:text-blue-600 transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <span>·</span>
            <button onClick={() => handleOpenPage('terms')} className="hover:text-blue-600 transition-colors cursor-pointer">
              Terms of Service
            </button>
            <span>·</span>
            <button onClick={() => handleOpenPage('bios-cloud')} className="hover:text-blue-600 transition-colors cursor-pointer">
              BIOS-Cloud Portal
            </button>
          </div>
        </div>

      </div>

      {/* Dedicated Clinical Page Modal */}
      <PageModal
        pageId={activeModalId}
        onClose={() => setActiveModalId(null)}
        onRequestConsultation={() => {
          setActiveModalId(null);
          const el = document.getElementById('consultation');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

    </footer>
  );
};
