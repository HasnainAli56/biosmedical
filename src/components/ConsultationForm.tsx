import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, CheckCircle, Shield, Building2, User, Mail, 
  Phone, Globe, FileText, Activity, AlertCircle, ArrowRight, Sparkles, MapPin
} from 'lucide-react';

export const ConsultationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phone: '',
    institution: '',
    role: 'Chief of Orthopedic Surgery',
    interest: 'HIPbeacon™ Active Sensor Pilot',
    patientVolume: '100 - 300 Hip Fractures / Year',
    clinicalNotes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clinical dispatch processing
    setTimeout(() => {
      const generatedRef = `BIOS-CH-${Math.floor(10000 + Math.random() * 90000)}`;
      setReferenceId(generatedRef);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      workEmail: '',
      phone: '',
      institution: '',
      role: 'Chief of Orthopedic Surgery',
      interest: 'HIPbeacon™ Active Sensor Pilot',
      patientVolume: '100 - 300 Hip Fractures / Year',
      clinicalNotes: ''
    });
  };

  return (
    <section id="consultation" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs sm:text-sm font-bold tracking-wide uppercase shadow-2xs mb-4">
            <Shield className="w-4 h-4 text-blue-600" />
            <span>Clinical Trial & Institutional Access</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-slate-900 tracking-tight leading-tight">
            Request A Clinical Consultation <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600">
              Or Hospital Ward Deployment
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Connect directly with BIOS Medical AG clinical directors and orthopedic trauma specialists to review trial protocols, hardware technical dossiers, and EHR integration timelines.
          </p>
        </div>

        {/* Main Grid: Form on Left, Clinical Hub on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Interactive Clinical Form */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/90 relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 px-4 text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto border-2 border-blue-200 shadow-lg">
                    <CheckCircle className="w-8 h-8 text-blue-600" />
                  </div>

                  <div>
                    <span className="inline-block px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider mb-2">
                      Inquiry Dispatched · {referenceId}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black font-heading text-slate-900">
                      Clinical Consultation Request Received
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-lg mx-auto leading-relaxed">
                      Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Your clinical brief for <strong className="text-slate-900">{formData.institution}</strong> has been routed to our Chief Medical Officer and Clinical Affairs team in Davos.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-md mx-auto text-xs sm:text-sm text-slate-700 space-y-2 text-left">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Official Reference:</span>
                      <span className="font-bold text-blue-600">{referenceId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Institutional Email:</span>
                      <span className="font-semibold text-slate-900">{formData.workEmail}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Target Clinical Track:</span>
                      <span className="font-semibold text-slate-900">{formData.interest}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Expected Response:</span>
                      <span className="font-semibold text-amber-600">Within 24 Business Hours</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-bold transition-colors cursor-pointer"
                    >
                      Submit Another Consultation Request
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Top Note */}
                  <div className="flex items-center gap-2 p-3.5 rounded-2xl bg-blue-50/70 border border-blue-100 text-blue-900 text-xs sm:text-sm font-medium">
                    <Activity className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Dedicated direct channel for hospital chiefs, trauma surgeons, and clinical researchers.</span>
                  </div>

                  {/* Row 1: Name & Work Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Full Name & Title <span className="text-blue-600">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-blue-600 absolute left-3.5 top-3.5 pointer-events-none" />
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Prof. / Dr. / First Last"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:outline-none text-sm text-slate-900 placeholder-slate-400 transition-colors shadow-2xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Institutional Email <span className="text-blue-600">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-blue-600 absolute left-3.5 top-3.5 pointer-events-none" />
                        <input
                          type="email"
                          name="workEmail"
                          required
                          value={formData.workEmail}
                          onChange={handleChange}
                          placeholder="doctor@hospital.org"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:outline-none text-sm text-slate-900 placeholder-slate-400 transition-colors shadow-2xs"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Institution & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Hospital / Health System <span className="text-blue-600">*</span>
                      </label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 text-blue-600 absolute left-3.5 top-3.5 pointer-events-none" />
                        <input
                          type="text"
                          name="institution"
                          required
                          value={formData.institution}
                          onChange={handleChange}
                          placeholder="e.g. Zurich University Hospital"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:outline-none text-sm text-slate-900 placeholder-slate-400 transition-colors shadow-2xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Phone / Direct Line (Optional)
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-blue-600 absolute left-3.5 top-3.5 pointer-events-none" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+41 ... / +1 ..."
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:outline-none text-sm text-slate-900 placeholder-slate-400 transition-colors shadow-2xs"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Role & Interest Track */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Your Clinical Role
                      </label>
                      <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:outline-none text-sm text-slate-900 transition-colors shadow-2xs"
                      >
                        <option value="Chief of Orthopedic Surgery">Chief of Orthopedic Surgery</option>
                        <option value="Orthopedic Trauma Surgeon">Orthopedic Trauma Surgeon</option>
                        <option value="Geriatrician / Orthogeriatrics Lead">Geriatrician / Orthogeriatrics Lead</option>
                        <option value="Chief Medical Officer / Clinical Director">Chief Medical Officer / Clinical Director</option>
                        <option value="Physiotherapy / Rehab Lead">Physiotherapy / Rehab Lead</option>
                        <option value="Academic Researcher / AO Fellow">Academic Researcher / AO Fellow</option>
                        <option value="Hospital Administrator / Procurement">Hospital Administrator / Procurement</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Primary Area Of Interest
                      </label>
                      <select
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:outline-none text-sm text-slate-900 transition-colors shadow-2xs"
                      >
                        <option value="HIPbeacon™ Active Sensor Pilot">HIPbeacon™ Active Sensor Pilot</option>
                        <option value="BIOS-Cloud DMO Analytics Demo">BIOS-Cloud DMO Analytics Demo</option>
                        <option value="Bedside RF Gateway Ward Deployment">Bedside RF Gateway Ward Deployment</option>
                        <option value="Academic / Multi-Center Clinical Trial">Academic / Multi-Center Clinical Trial</option>
                        <option value="CE-Mark / FDA Regulatory Dossier Access">CE-Mark / FDA Regulatory Dossier Access</option>
                        <option value="Enterprise Hospital Pricing & DRG Analysis">Enterprise Hospital Pricing & DRG Analysis</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Annual Patient Volume */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Estimated Annual Hip Fracture Volume At Facility
                    </label>
                    <select
                      name="patientVolume"
                      value={formData.patientVolume}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:outline-none text-sm text-slate-900 transition-colors shadow-2xs"
                    >
                      <option value="< 100 Hip Fractures / Year">&lt; 100 Fragility Hip Fractures / Year</option>
                      <option value="100 - 300 Hip Fractures / Year">100 – 300 Fragility Hip Fractures / Year (Regional Hospital)</option>
                      <option value="300 - 800 Hip Fractures / Year">300 – 800 Fragility Hip Fractures / Year (Trauma Center)</option>
                      <option value="800+ Hip Fractures / Year">800+ Fragility Hip Fractures / Year (University Healthcare Network)</option>
                    </select>
                  </div>

                  {/* Row 5: Clinical Notes */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Clinical Objectives or Facility Questions
                    </label>
                    <textarea
                      name="clinicalNotes"
                      rows={3}
                      value={formData.clinicalNotes}
                      onChange={handleChange}
                      placeholder="Specify your surgical implants used (e.g. CMN, DHS), current mobilization protocols, or research objectives..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:outline-none text-sm text-slate-900 placeholder-slate-400 transition-colors shadow-2xs"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-slate-500 flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5 text-blue-600" />
                      <span>Compliant with Swiss FADP & EU GDPR. Institutional NDAs available.</span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Routing to Clinical Affairs...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Consultation Brief</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>

          </div>

          {/* Right Column: Direct Swiss Clinical Contact Hub */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Swiss HQ Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-lg space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Swiss Headquarters</h4>
                  <p className="text-xs text-slate-500">Innovation Center Davos</p>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="font-bold text-slate-900 block mb-0.5">BIOS Medical AG</span>
                  <span>Promenade 129 · 7270 Davos Platz, Switzerland</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Direct Telephone:</span>
                  <a href="tel:+41814148000" className="font-bold text-blue-600 hover:underline">
                    +41 81 414 80 00
                  </a>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Clinical Affairs:</span>
                  <a href="mailto:clinical@biosmedical.care" className="font-bold text-blue-600 hover:underline">
                    clinical@biosmedical.care
                  </a>
                </div>

                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-500">Regulatory & Trial Desk:</span>
                  <span className="font-semibold text-slate-800">trials@biosmedical.care</span>
                </div>
              </div>

              {/* Swiss Medtech & Quality Badges */}
              <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-center text-xs">
                <div className="p-2.5 rounded-xl bg-blue-50/70 border border-blue-100 font-bold text-blue-800">
                  ISO 13485:2016
                </div>
                <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-100 font-bold text-amber-800">
                  Swiss Medtech AG
                </div>
              </div>
            </div>

            {/* Fast Turnaround Card - Light Medical Theme */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-blue-50/90 via-white to-sky-50/60 border border-blue-200/90 shadow-lg space-y-4">
              <div className="flex items-center gap-2 text-amber-700 text-xs font-black uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200/80 w-fit">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Rapid Clinical Response</span>
              </div>
              <h4 className="text-lg font-bold font-heading text-slate-900 leading-snug">
                Need Immediate Protocol Review for an Upcoming Trauma Study?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                Our surgical liaison team reviews investigator-initiated study protocols within 48 hours and provides complimentary CAD implant insertion templates.
              </p>
              <div className="pt-1">
                <a
                  href="mailto:trials@biosmedical.care?subject=Immediate%20Trauma%20Protocol%20Review"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-sm group"
                >
                  <span>Email Priority Desk</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
