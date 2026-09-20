import React, { useState, useEffect } from 'react';
import { TurbineLogo } from './TurbineLogo';
import { ChevronDown, ArrowRight, Menu, X, Shield, Activity, Database, ExternalLink } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 text-slate-900' 
        : 'py-4 sm:py-5 bg-transparent text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <TurbineLogo size={32} animate={true} glow={true} />
            <div className="flex flex-col">
              <span className={`text-xl font-bold tracking-tight transition-colors ${scrolled ? 'text-slate-900 group-hover:text-blue-600' : 'text-white'}`}>
                BIOS <span className={scrolled ? 'text-blue-600 font-extrabold' : 'text-blue-300 font-extrabold'}>Medical</span>
              </span>
              <span className={`text-[10px] tracking-widest uppercase font-semibold ${scrolled ? 'text-slate-500' : 'text-white/70'}`}>
                Davos · Switzerland
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className={`hidden md:flex items-center gap-7 text-sm font-medium ${scrolled ? 'text-slate-600' : 'text-white/90'}`}>
            <a href="#home" className={`transition-colors ${scrolled ? 'hover:text-blue-600' : 'hover:text-white'}`}>
              Home
            </a>
            
            {/* Dropdown for Solutions */}
            <div 
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button className={`flex items-center gap-1 transition-colors py-2 cursor-pointer ${scrolled ? 'hover:text-blue-600' : 'hover:text-white'}`}>
                <span>Solutions</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} />
              </button>

              {solutionsOpen && (
                <div className="absolute top-full left-0 w-72 pt-2 z-50">
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-3 space-y-1.5 backdrop-blur-xl text-slate-900">
                    <a href="#benefits" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors group">
                      <div className="p-2 rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Activity className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-800 text-xs">HIPbeacon™ Sensor</div>
                        <div className="text-[11px] text-slate-600">World's first implanted hip mobility sensor</div>
                      </div>
                    </a>

                    <a href="#integration" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors group">
                      <div className="p-2 rounded-lg bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                        <Database className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-800 text-xs">BIOS-Cloud Telemetry</div>
                        <div className="text-[11px] text-slate-600">Digital Mobility Outcomes (DMO) & AI</div>
                      </div>
                    </a>

                    <a href="#why-choose" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors group">
                      <div className="p-2 rounded-lg bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        <Shield className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-800 text-xs">OGCM Protocol</div>
                        <div className="text-[11px] text-slate-600">22% mortality rate reduction model</div>
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a href="#why-choose" className={`transition-colors ${scrolled ? 'hover:text-blue-600' : 'hover:text-white'}`}>
              Why HIPbeacon
            </a>

            <a href="#evidence" className={`transition-colors ${scrolled ? 'hover:text-blue-600' : 'hover:text-white'}`}>
              Evidence
            </a>

            <a href="#partners" className={`transition-colors ${scrolled ? 'hover:text-blue-600' : 'hover:text-white'}`}>
              Partners
            </a>

            <a href="#pricing" className={`transition-colors ${scrolled ? 'hover:text-blue-600' : 'hover:text-white'}`}>
              Deployment
            </a>

            <a href="#faq" className={`transition-colors ${scrolled ? 'hover:text-blue-600' : 'hover:text-white'}`}>
              FAQ
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://bios.mdeg.cloud/login"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all flex items-center gap-1.5 ${
                scrolled
                  ? 'text-slate-700 hover:text-blue-600 border border-slate-200 hover:border-blue-400 bg-white/80'
                  : 'text-white hover:bg-white/20 border border-white/40 bg-white/10 backdrop-blur-md'
              }`}
            >
              <span>BIOS-Cloud</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <a
              href="#contact"
              className={`px-5 py-2.5 text-xs font-semibold rounded-full shadow-md transition-all duration-200 flex items-center gap-2 group ${
                scrolled
                  ? 'bg-slate-900 hover:bg-blue-600 text-white'
                  : 'bg-white text-slate-900 hover:bg-blue-50 font-bold'
              }`}
            >
              <span>Experience HIPbeacon</span>
              <div className={`w-5 h-5 rounded-full flex items-center justify-center group-hover:translate-x-0.5 transition-transform ${
                scrolled ? 'bg-white/20 text-white' : 'bg-blue-600 text-white'
              }`}>
                <ArrowRight className="w-3 h-3" />
              </div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl transition-colors ${scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/20'}`}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-slate-100 px-6 py-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-4 text-base font-medium text-slate-700">
            <a 
              href="#home" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-blue-600 border-b border-slate-50"
            >
              Home
            </a>
            <a 
              href="#benefits" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-blue-600 border-b border-slate-50"
            >
              HIPbeacon™ Technology
            </a>
            <a 
              href="#why-choose" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-blue-600 border-b border-slate-50"
            >
              Why Choose Us (22% Mortality Reduction)
            </a>
            <a 
              href="#evidence" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-blue-600 border-b border-slate-50"
            >
              Clinical Evidence & Health Economics
            </a>
            <a 
              href="#partners" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-blue-600 border-b border-slate-50"
            >
              Clinical Partners & Advisory
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-blue-600 border-b border-slate-50"
            >
              Hospital Deployment
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-blue-600"
            >
              FAQ
            </a>
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="https://bios.mdeg.cloud/login"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 rounded-full border border-slate-200 text-sm font-semibold text-slate-700"
              >
                Access BIOS-Cloud Login
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-full bg-blue-600 text-white text-sm font-semibold shadow-md"
              >
                Experience HIPbeacon
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
