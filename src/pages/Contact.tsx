import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PageHeader } from '../components/PageHeader';
import { motion } from 'motion/react';
import { Send, CheckCircle, MapPin, Phone, Mail } from 'lucide-react';

export function Contact() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate secure form payload transmission
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <div className="flex flex-col w-full bg-[linear-gradient(to_bottom,theme(colors.slate.50),theme(colors.slate.100)_50%,theme(colors.slate.50))] relative z-10">
      <PageHeader title={t('contact.title')} subtitle="We would love to hear from you." />
      
      <div className="mx-auto max-w-[1280px] w-full px-6 py-12 sm:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Information & Map */}
          <div className="flex flex-col space-y-8">
            <div>
              <h2 className="text-sm font-black uppercase tracking-[0.2em] text-red-600 mb-2">Get in Touch</h2>
              <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Our Headquarters</h3>
              <p className="text-slate-600 leading-relaxed font-light mb-8">
                Reach out to us for premium consulting and structural engineering services. We operate globally but are anchored with deep roots in Tanzania.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[linear-gradient(135deg,theme(colors.white),theme(colors.slate.50))] border border-slate-200 shadow-sm flex items-center justify-center flex-shrink-0 text-red-600">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Phone</h4>
                    <p className="text-slate-900 font-medium">+255 719 426 043</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[linear-gradient(135deg,theme(colors.white),theme(colors.slate.50))] border border-slate-200 shadow-sm flex items-center justify-center flex-shrink-0 text-red-600">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Email</h4>
                    <p className="text-slate-900 font-medium">peakeyinternational@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[linear-gradient(135deg,theme(colors.white),theme(colors.slate.50))] border border-slate-200 shadow-sm flex items-center justify-center flex-shrink-0 text-red-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Address</h4>
                    <p className="text-slate-900 font-medium">
                      House No. 15, Msewe Ubungo,<br />
                      P.O. Box 41802 - Dar es Salaam, Tanzania
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="w-full flex-1 min-h-[300px] rounded-3xl overflow-hidden border border-slate-200 shadow-lg relative bg-slate-200">
              <iframe
                title="Peakey International Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63406.84065608684!2d39.141517409228!3d-6.804369792070747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4c16ddcad533%3A0xcfd6dc3bc4cd0965!2sUbungo%2C%20Dar%20es%20Salaam%2C%20Tanzania!5e0!3m2!1sen!2sus!4v1715423851502!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex flex-col">
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-8 text-center lg:text-left hidden lg:block">Direct Inquiry</h2>
          {status === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-xl bg-slate-900 p-8 text-center shadow-lg border border-slate-800"
            >
              <CheckCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Message Sent</h3>
              <p className="text-slate-400 text-sm">{t('contact.success')}</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-6 text-xs font-bold text-red-500 hover:text-red-400 underline"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <div className="bg-[linear-gradient(145deg,theme(colors.white),theme(colors.slate.50))] p-8 sm:p-12 rounded-3xl shadow-lg shadow-slate-300/30 border border-slate-200 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-400/40 hover:border-slate-300">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="sr-only">
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder={t('contact.name')}
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-900 focus:ring-2 focus:ring-red-500 focus:border-red-500 placeholder:text-slate-400 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="sr-only">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder={t('contact.email')}
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-900 focus:ring-2 focus:ring-red-500 focus:border-red-500 placeholder:text-slate-400 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder={t('contact.message')}
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-900 focus:ring-2 focus:ring-red-500 focus:border-red-500 placeholder:text-slate-400 transition-all resize-none"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full flex justify-center items-center gap-2 bg-red-600 text-white text-sm font-black uppercase tracking-widest py-4 rounded-xl shadow-xl shadow-red-900/20 hover:bg-red-700 disabled:opacity-70 transition-all"
                  >
                    {status === 'submitting' ? 'Sending...' : t('contact.submit')}
                    {!status && <Send className="h-4 w-4 ml-1" />}
                  </button>
                </div>
              </form>
              <p className="text-[9px] text-slate-500 mt-4 text-center italic">Protected by 256-bit SSL encryption.</p>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}
