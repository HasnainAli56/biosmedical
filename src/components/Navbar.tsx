import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { TurbineLogo } from './TurbineLogo';
import { ChevronDown, ArrowRight, Menu, X, Shield, Activity, Database, ExternalLink } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Use solid light navbar on subpages, or on homepage when scrolled
  const isSolid = !isHome || scrolled;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isSolid 
        ? 'py-2.5 sm:py-3 bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 text-slate-900' 
        : 'py-3.5 sm:py-4 bg-transparent text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo with adequate right spacing and no-shrink */}
          <Link to="/" className="flex items-center shrink-0 py-1 mr-2 sm:mr-4 lg:mr-6">
            <img 
              src="/bios_logo_new.png" 
              alt="BIOS Medical - Restore Life" 
              className={`h-8 sm:h-10 w-auto object-contain transition-all duration-300 ${
                isSolid ? '' : 'brightness-0 invert drop-shadow-sm'
              }`}
            />
          </Link>

          {/* Desktop Navigation Links - Clean typography without any background pill */}
          <nav className={`hidden xl:flex items-center gap-6 2xl:gap-7 text-sm font-semibold whitespace-nowrap ${
            isSolid ? 'text-slate-700' : 'text-white/95'
          }`}>
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => `transition-colors whitespace-nowrap py-1 ${
                isActive 
                  ? isSolid ? 'text-blue-600 font-bold' : 'text-sky-300 font-black' 
                  : isSolid ? 'hover:text-blue-600' : 'hover:text-white'
              }`}
            >
              Home
            </NavLink>
            
            {/* Dropdown for Solutions */}
            <div 
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button className={`bg-transparent border-0 outline-none flex items-center gap-1 py-1 transition-colors cursor-pointer whitespace-nowrap ${
                location.pathname.startsWith('/technology') || location.pathname.startsWith('/page')
                  ? isSolid ? 'text-blue-600 font-bold' : 'text-sky-300 font-black'
                  : isSolid ? 'hover:text-blue-600' : 'hover:text-white'
              }`}>
                <span>Solutions</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} />
              </button>

              {solutionsOpen && (
                <div className="absolute top-full left-0 w-80 pt-2 z-50">
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-3 space-y-1.5 backdrop-blur-xl text-slate-900">
                    <Link 
                      to="/technology" 
                      onClick={() => setSolutionsOpen(false)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/80 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Activity className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-sm">Technology & Bento</div>
                        <div className="text-xs text-slate-500">Breakthrough implanted sensing</div>
                      </div>
                    </Link>

                    <Link 
                      to="/page/hipbeacon" 
                      onClick={() => setSolutionsOpen(false)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/80 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Activity className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-sm">HIPbeacon™ Sensor</div>
                        <div className="text-xs text-slate-500">Sub-minute surgical insertion</div>
                      </div>
                    </Link>

                    <Link 
                      to="/page/bios-cloud" 
                      onClick={() => setSolutionsOpen(false)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-amber-50/80 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-amber-100 text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                        <Database className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-sm">BIOS-Cloud Ingest</div>
                        <div className="text-xs text-slate-500">Digital Mobility Outcomes (DMO)</div>
                      </div>
                    </Link>

                    <Link 
                      to="/why-choose" 
                      onClick={() => setSolutionsOpen(false)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/80 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Shield className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-sm">OGCM Protocol</div>
                        <div className="text-xs text-slate-500">22% mortality reduction model</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <NavLink 
              to="/why-choose" 
              className={({ isActive }) => `transition-colors whitespace-nowrap py-1 ${
                isActive 
                  ? isSolid ? 'text-blue-600 font-bold' : 'text-sky-300 font-black' 
                  : isSolid ? 'hover:text-blue-600' : 'hover:text-white'
              }`}
            >
              Why HIPbeacon
            </NavLink>

            <NavLink 
              to="/evidence" 
              className={({ isActive }) => `transition-colors whitespace-nowrap py-1 ${
                isActive 
                  ? isSolid ? 'text-blue-600 font-bold' : 'text-sky-300 font-black' 
                  : isSolid ? 'hover:text-blue-600' : 'hover:text-white'
              }`}
            >
              Evidence
            </NavLink>

            <NavLink 
              to="/about" 
              className={({ isActive }) => `transition-colors whitespace-nowrap py-1 ${
                isActive 
                  ? isSolid ? 'text-blue-600 font-bold' : 'text-sky-300 font-black' 
                  : isSolid ? 'hover:text-blue-600' : 'hover:text-white'
              }`}
            >
              About
            </NavLink>

            <NavLink 
              to="/partners" 
              className={({ isActive }) => `transition-colors whitespace-nowrap py-1 ${
                isActive 
                  ? isSolid ? 'text-blue-600 font-bold' : 'text-sky-300 font-black' 
                  : isSolid ? 'hover:text-blue-600' : 'hover:text-white'
              }`}
            >
              Partners
            </NavLink>

            <NavLink 
              to="/deployment" 
              className={({ isActive }) => `transition-colors whitespace-nowrap py-1 ${
                isActive 
                  ? isSolid ? 'text-blue-600 font-bold' : 'text-sky-300 font-black' 
                  : isSolid ? 'hover:text-blue-600' : 'hover:text-white'
              }`}
            >
              Deployment
            </NavLink>

            <NavLink 
              to="/faq" 
              className={({ isActive }) => `transition-colors whitespace-nowrap py-1 ${
                isActive 
                  ? isSolid ? 'text-blue-600 font-bold' : 'text-sky-300 font-black' 
                  : isSolid ? 'hover:text-blue-600' : 'hover:text-white'
              }`}
            >
              FAQ
            </NavLink>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            <a
              href="https://bios.mdeg.cloud/login"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-3.5 py-2 text-xs font-bold rounded-full transition-all flex items-center gap-1.5 whitespace-nowrap ${
                isSolid
                  ? 'text-slate-700 hover:text-blue-600 border border-slate-200 hover:border-blue-400 bg-white/90'
                  : 'text-white hover:bg-white/20 border border-white/40 bg-white/10 backdrop-blur-md'
              }`}
            >
              <span>BIOS-Cloud</span>
              <ExternalLink className="w-3 h-3 text-amber-400" />
            </a>

            <Link
              to="/contact"
              className={`px-4.5 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold rounded-full shadow-md transition-all duration-200 flex items-center gap-2 whitespace-nowrap group ${
                isSolid
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-white text-slate-900 hover:bg-blue-50 font-black'
              }`}
            >
              <span>Experience HIPbeacon</span>
              <div className={`w-4 h-4 rounded-full flex items-center justify-center group-hover:translate-x-0.5 transition-transform ${
                isSolid ? 'bg-white/20 text-white' : 'bg-blue-600 text-white'
              }`}>
                <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          </div>

          {/* Mobile / Tablet Menu Button (Shown on screens below xl) */}
          <div className="xl:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl transition-colors ${
                isSolid ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/20'
              }`}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/95 backdrop-blur-2xl border-b border-slate-100 px-6 py-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-3 text-base font-medium text-slate-700">
            <Link 
              to="/" 
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 border-b border-slate-50 ${location.pathname === '/' ? 'text-blue-600 font-bold' : 'hover:text-blue-600'}`}
            >
              Home
            </Link>
            <Link 
              to="/technology" 
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 border-b border-slate-50 ${location.pathname === '/technology' ? 'text-blue-600 font-bold' : 'hover:text-blue-600'}`}
            >
              HIPbeacon™ Technology
            </Link>
            <Link 
              to="/why-choose" 
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 border-b border-slate-50 ${location.pathname === '/why-choose' ? 'text-blue-600 font-bold' : 'hover:text-blue-600'}`}
            >
              Why Choose Us (22% Mortality Reduction)
            </Link>
            <Link 
              to="/evidence" 
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 border-b border-slate-50 ${location.pathname === '/evidence' ? 'text-blue-600 font-bold' : 'hover:text-blue-600'}`}
            >
              Clinical Evidence & Health Economics
            </Link>
            <Link 
              to="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 border-b border-slate-50 ${location.pathname === '/about' ? 'text-blue-600 font-bold' : 'hover:text-blue-600'}`}
            >
              About & Advisory Board
            </Link>
            <Link 
              to="/partners" 
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 border-b border-slate-50 ${location.pathname === '/partners' ? 'text-blue-600 font-bold' : 'hover:text-blue-600'}`}
            >
              Clinical Partners & Testimonials
            </Link>
            <Link 
              to="/deployment" 
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 border-b border-slate-50 ${location.pathname === '/deployment' ? 'text-blue-600 font-bold' : 'hover:text-blue-600'}`}
            >
              Hospital Deployment
            </Link>
            <Link 
              to="/faq" 
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 ${location.pathname === '/faq' ? 'text-blue-600 font-bold' : 'hover:text-blue-600'}`}
            >
              FAQ
            </Link>
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="https://bios.mdeg.cloud/login"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 rounded-full border border-slate-200 text-sm font-semibold text-slate-700"
              >
                Access BIOS-Cloud Login
              </a>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-full bg-blue-600 text-white text-sm font-semibold shadow-md"
              >
                Experience HIPbeacon
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
