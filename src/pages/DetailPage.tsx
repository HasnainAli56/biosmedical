import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FOOTER_PAGES } from '../components/PageModal';
import { CtaBanner } from '../components/CtaBanner';
import { TurbineLogo } from '../components/TurbineLogo';
import { ArrowLeft, CheckCircle, Shield, ArrowRight, MapPin } from 'lucide-react';

export const DetailPage: React.FC = () => {
  const { pageId } = useParams<{ pageId: string }>();
  const content = pageId ? FOOTER_PAGES[pageId] : null;

  if (!content) {
    return <Navigate to="/" replace />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="pt-24 sm:pt-28"
    >
      {/* Back button & Breadcrumb */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Overview</span>
        </Link>
      </div>

      {/* Main Page Header */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-700 text-white shadow-xl relative overflow-hidden">
          <div className="flex items-center gap-2.5 mb-4 flex-wrap">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 text-white border border-white/30">
              {content.category}
            </span>
            <span className="px-3.5 py-1 rounded-full text-xs font-black tracking-wide bg-blue-600 text-white border border-blue-400/60 shadow-xs">
              {content.badge}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-white leading-tight">
            {content.title}
          </h1>

          <p className="text-base sm:text-lg text-blue-100 font-medium mt-3 leading-relaxed max-w-3xl">
            {content.subtitle}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-4 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8">
        {/* Summary Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
          <h2 className="text-sm font-black uppercase tracking-wider text-blue-700 mb-2">
            Clinical Overview
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            {content.summary}
          </p>
        </div>

        {/* Clinical Metrics if available */}
        {content.clinicalMetrics && content.clinicalMetrics.length > 0 && (
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-3.5">
              Key Clinical & Operational Metrics
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {content.clinicalMetrics.map((m, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                  <div className="text-xs text-slate-500 font-semibold">{m.label}</div>
                  <div className="text-2xl sm:text-3xl font-black text-blue-600 font-heading mt-1">{m.value}</div>
                  <div className="text-xs font-medium text-slate-600 mt-1">{m.change}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Points */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
          <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-5">
            Technical Specifications & Protocols
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {content.keyPoints.map((kp, idx) => (
              <div key={idx} className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{kp.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">{kp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regulatory Note */}
        {content.regulatoryNote && (
          <div className="p-5 rounded-2xl bg-blue-50 border border-blue-200 text-blue-900 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
            <Shield className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
            <span>{content.regulatoryNote}</span>
          </div>
        )}

        {/* Bottom Contact CTA */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-blue-50/80 via-white to-sky-50/50 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-lg font-bold text-slate-900">Interested in {content.title}?</h4>
            <p className="text-xs sm:text-sm text-slate-600">Request clinical specifications or trial participation.</p>
          </div>
          <Link
            to="/contact"
            className="px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm flex items-center gap-2 shadow-md transition-all shrink-0"
          >
            <span>Request Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner />
    </motion.div>
  );
};
