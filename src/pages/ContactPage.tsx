import React from 'react';
import { motion } from 'framer-motion';
import { ConsultationForm } from '../components/ConsultationForm';
import { TurbineLogo } from '../components/TurbineLogo';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="pt-24 sm:pt-28"
    >
      {/* 1. Consultation & Contact Form Component */}
      <ConsultationForm />
    </motion.div>
  );
};
