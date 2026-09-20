import React, { useState } from 'react';
import { TurbineLogo } from './TurbineLogo';
import { Plus, Minus, ArrowRight } from 'lucide-react';

export const FaqAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is HIPbeacon™ and how is it implanted?",
      a: "HIPbeacon™ is the world's first implanted hip mobility sensor. It is engineered to integrate seamlessly into standard orthopedic fracture fixation hardware during the routine primary fracture procedure, requiring zero additional surgical incisions or extended operating room time."
    },
    {
      q: "How does the sensor transmit data safely from inside the body?",
      a: "The sensor utilizes state-of-the-art, ultra-low-power radiofrequency telemetry. It securely transmits encrypted biomechanical measurements (gait velocity, step cadence, axial strain, and weight-bearing dynamics) to a bedside gateway without tissue heating or battery compromise."
    },
    {
      q: "How does continuous mobility data reduce mortality by 22%?",
      a: "Orthogeriatric Co-Management (OGCM) clinically demonstrates a 22% reduction in 1-year mortality when patients are mobilized early. HIPbeacon provides the missing continuous telemetry loop, enabling clinical teams to tailor weight-bearing protocols, identify declining patients early, and prevent secondary falls."
    },
    {
      q: "How is patient health data secured and compliant with privacy laws?",
      a: "Patient privacy is paramount. The BIOS cloud data infrastructure complies strictly with Swiss Federal Data Protection (FADP), European GDPR, and US HIPAA guidelines. All telemetry is pseudonymized and protected with AES-256 GCM encryption from the sensor directly to the cloud."
    },
    {
      q: "Can BIOS-Cloud integrate directly with our hospital's EHR system?",
      a: "Yes. BIOS-Cloud provides automated HL7 FHIR standard APIs, enabling bi-directional integration with major Hospital Information Systems including Epic Systems, Oracle Cerner, and hospital PACS archiving."
    },
    {
      q: "Who is behind BIOS Medical AG?",
      a: "BIOS Medical AG was founded in Davos, Switzerland by Dr. Markus Windolf (inventor of the AO Fracture Monitor and on Stanford University's list of the top 2% of global scientists) and Dr. Patrick Stepanek (PhD in flexible robotics and MBA). The team is advised by world leaders including Prof. Dr. Robert Frigg (former CTO of Synthes Inc.)."
    }
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column (Identical to Video) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold">
            <TurbineLogo size={14} animate={true} />
            <span>F.A.Q</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Got Questions? <br />
            <span className="text-blue-600">We've Got Answers!</span>
          </h2>

          <p className="text-base text-slate-600 leading-relaxed max-w-sm">
            Everything you need to know about the HIPbeacon™ implantable sensor, clinical trial protocols, and BIOS-Cloud data integration.
          </p>

          <div className="pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-blue-100/80 hover:bg-blue-200/80 text-blue-800 font-semibold text-xs tracking-wide transition-all group shadow-xs"
            >
              <span>Contact Clinical Team</span>
              <div className="w-5 h-5 rounded-full bg-white text-blue-600 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-3 h-3" />
              </div>
            </a>
          </div>
        </div>

        {/* Right Column: Accordion List (Identical to Video) */}
        <div className="lg:col-span-7 space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? 'bg-white border-blue-200 shadow-md ring-1 ring-blue-100'
                    : 'bg-white/80 hover:bg-white border-slate-200/70 shadow-xs'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-5 sm:px-6 py-4.5 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-800">
                    {faq.q}
                  </span>

                  {/* Circular Plus/Minus Toggle Icon (Identical to Video) */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-50 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};
