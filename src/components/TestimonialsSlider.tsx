import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TurbineLogo } from './TurbineLogo';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export const TestimonialsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      id: 1,
      quote: "Direct continuous measurement of hip mobility fundamentally transforms orthogeriatric care. The real-time DMO data provides our clinical team with the objective precision needed to push early mobilization safely.",
      name: "Dr. Markus Windolf",
      role: "CEO & Co-Founder BIOS Medical · Inventor of AO Fracture Monitor",
      image: "/real_bios/markus_windolf_ceo.jpg",
      avatar: "/real_bios/markus_windolf_ceo.jpg",
      rating: 5
    },
    {
      id: 2,
      quote: "HIPbeacon is the natural evolution from passive bone fixation to active smart implants. Biomechanical feedback directly from the site of interest addresses the unmet needs of aging populations globally.",
      name: "Dr. Patrick Stepanek",
      role: "COO & Co-Founder BIOS Medical · Flexible Robotics & MedTech Executive",
      image: "/real_bios/patrick_stepanek_coo.jpg",
      avatar: "/real_bios/patrick_stepanek_coo.jpg",
      rating: 5
    },
    {
      id: 3,
      quote: "Building low-power embedded telemetry under IEC 62304 standards ensures continuous patient monitoring without battery concerns or bulky external wearables that fragile patients forget to put on.",
      name: "Viktor Varjas",
      role: "Senior Software Developer · Medical Device Software & Embedded Systems",
      image: "/real_bios/viktor_varjas_dev.jpg",
      avatar: "/real_bios/viktor_varjas_dev.jpg",
      rating: 5
    },
    {
      id: 4,
      quote: "Physical mobilization within 48 hours is the single highest predictor of patient survival. By providing continuous telemetry, BIOS equips multidisciplinary teams with objective data to prevent fatal secondary complications.",
      name: "Multicenter Clinical Co-Management Team",
      role: "Trauma & Orthopedic Investigation Group · Europe & USA",
      image: "/real_bios/clinical_team_review.jpg",
      avatar: "/real_bios/clinical_team_review.jpg",
      rating: 5
    },
    {
      id: 5,
      quote: "The direct biomechanical feedback loop from inside the hip implant bridges the dangerous gap between acute hospital discharge and home rehabilitation, preventing institutionalization.",
      name: "Swiss Alpine MedTech Consortium",
      role: "Davos Research & Clinical Telemetry Working Group",
      image: "/real_bios/digital_health_roadmap.jpg",
      avatar: "/real_bios/digital_health_roadmap.jpg",
      rating: 5
    }
  ];

  // Auto-play animation: automatically advances every 5.5 seconds, pauses on hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Top Header (Slide from Top) */}
      <motion.div 
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-2xl mx-auto mb-10 sm:mb-12"
      >
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-sm font-bold mb-3">
          <TurbineLogo size={16} animate={true} />
          <span>CLINICAL TESTIMONIALS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-slate-900">
          Clinicians & Patients <br />
          <span className="text-blue-600">Trust BIOS Medical</span>
        </h2>
        <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
          World-renowned orthopedic trauma surgeons and rehabilitation pioneers share how continuous implanted mobility data improves recovery.
        </p>
      </motion.div>

      {/* Main Slider Box with Hover-Pause */}
      <div 
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
      >
        
        {/* Left Photo & Navigation Column (Slide from Left) */}
        <motion.div 
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-4 flex flex-col items-center"
        >
          <div className="w-56 h-68 sm:w-60 sm:h-76 rounded-3xl overflow-hidden border-2 border-slate-100 shadow-xl bg-white relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={current.image}
                src={current.image}
                alt={current.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full object-cover object-center"
              />
            </AnimatePresence>
          </div>

          {/* Stepper / Pagination Bar with solid blue chevron buttons */}
          <div className="mt-4 flex items-center justify-between w-56 sm:w-60 px-4 py-3 rounded-full bg-white border border-slate-200/90 shadow-xs">
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="p-1.5 rounded-full hover:bg-blue-50 text-blue-600 transition-colors cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-blue-600" />
            </motion.button>

            <div className="flex items-center gap-2">
              <span className="text-sm font-black text-slate-800">
                {currentIndex + 1} / {testimonials.length}
              </span>
              {!isPaused && (
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" title="Auto-playing" />
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="p-1.5 rounded-full hover:bg-blue-50 text-blue-600 transition-colors cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5 text-blue-600" />
            </motion.button>
          </div>
        </motion.div>

        {/* Right Frosted Testimonial Card (Slide from Right) */}
        <motion.div 
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-8"
        >
          <div className="rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-10 shadow-xl shadow-blue-900/5 relative overflow-hidden">
            
            {/* Top 5 Star Rating (Solid Yellow) */}
            <div className="flex items-center gap-1.5 text-amber-400 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 stroke-amber-400" />
              ))}
            </div>

            {/* Testimonial Quote with Slide transition */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-base sm:text-lg md:text-xl text-slate-900 font-medium leading-relaxed mb-7">
                  "{current.quote}"
                </p>

                {/* Author Row */}
                <div className="flex items-center justify-between pt-5 border-t border-slate-100">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={current.avatar}
                      alt={current.name}
                      className="w-13 h-13 rounded-full object-cover ring-2 ring-blue-100 shadow-xs"
                    />
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900">{current.name}</h4>
                      <p className="text-xs sm:text-sm text-slate-500 max-w-sm leading-snug mt-0.5 font-medium">{current.role}</p>
                    </div>
                  </div>

                  {/* Stylized Quotation Mark */}
                  <div className="text-blue-500/20">
                    <Quote className="w-10 h-10 rotate-180 text-blue-600/30" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </motion.div>

      </div>

    </section>
  );
};
