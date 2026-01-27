"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { IoSendOutline, IoCheckmarkCircleOutline, IoAlertCircleOutline } from 'react-icons/io5';

const Contact = () => {
  const t = useTranslations();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      type: formData.get('type'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 relative z-10">
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-tight">
            {t('contact_title')}
          </h2>
          <p className="text-xl md:text-2xl text-foreground/40 font-medium leading-relaxed max-w-xl mb-12">
            {t('contact_description')}
          </p>
          
          <div className="grid grid-cols-2 gap-8 mb-12">
            <div>
              <div className="text-primary font-black text-4xl mb-2">99.9%</div>
              <div className="text-xs uppercase tracking-widest font-bold text-foreground/40">Uptime Reliability</div>
            </div>
            <div>
              <div className="text-primary font-black text-4xl mb-2">24/7</div>
              <div className="text-xs uppercase tracking-widest font-bold text-foreground/40">Technical Support</div>
            </div>
          </div>

          <div className="p-8 rounded-[32px] bg-foreground/[0.02] border border-border inline-flex items-center gap-4">
             <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <IoSendOutline size={24} />
             </div>
             <div>
                <div className="text-sm font-black uppercase tracking-widest text-foreground/40 mb-1">Direct Line</div>
                <div className="text-lg font-bold">hello@2zek.com</div>
             </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 md:p-12 rounded-[48px] bg-foreground/[0.02] border border-border backdrop-blur-sm relative group"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-foreground/40 px-2">{t('contact_name')}</label>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-foreground/[0.03] border border-border rounded-2xl px-6 py-4 outline-none focus:border-primary/50 transition-colors font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-foreground/40 px-2">{t('contact_email')}</label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-foreground/[0.03] border border-border rounded-2xl px-6 py-4 outline-none focus:border-primary/50 transition-colors font-medium"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-foreground/40 px-2">{t('contact_company')}</label>
                <input
                  name="company"
                  type="text"
                  placeholder="Inc. / Startup X"
                  className="w-full bg-foreground/[0.03] border border-border rounded-2xl px-6 py-4 outline-none focus:border-primary/50 transition-colors font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-foreground/40 px-2">{t('contact_type')}</label>
                <select
                  name="type"
                  className="w-full bg-foreground/[0.03] border border-border rounded-2xl px-6 py-4 outline-none focus:border-primary/50 transition-colors font-medium appearance-none cursor-pointer"
                >
                  <option value="refactor">{t('contact_type_refactor')}</option>
                  <option value="new_project">{t('contact_type_new')}</option>
                  <option value="devops">{t('contact_type_devops')}</option>
                  <option value="consultancy">{t('contact_type_consultancy')}</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-foreground/40 px-2">{t('contact_message')}</label>
              <textarea
                required
                name="message"
                rows={4}
                placeholder="..."
                className="w-full bg-foreground/[0.03] border border-border rounded-2xl px-6 py-4 outline-none focus:border-primary/50 transition-colors font-medium resize-none"
              ></textarea>
            </div>

            <button
              disabled={loading}
              type="submit"
              className="w-full bg-primary text-primary-foreground font-black py-5 rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:hover:scale-100"
            >
              {loading ? t('contact_sending') : <>{t('contact_send')} <IoArrowForward size={20} /></>}
            </button>

            {/* Status Messages */}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 p-4 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-500 text-sm font-bold"
              >
                <IoCheckmarkCircleOutline size={20} />
                {t('contact_success')}
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-bold"
              >
                <IoAlertCircleOutline size={20} />
                {t('contact_error')}
              </motion.div>
            )}
          </form>
          
          {/* Subtle Glow Overlay */}
          <div className="absolute inset-0 bg-primary/5 rounded-[48px] opacity-0 group-hover:opacity-100 transition-opacity blur-2xl -z-10 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

// Helper component for arrow since it was missing from imports
const IoArrowForward = ({ size }: { size: number }) => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height={size} width={size}>
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

export default Contact;
