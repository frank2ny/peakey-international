import { useTranslation } from 'react-i18next';
import { Linkedin, Twitter, Instagram, ShieldCheck, Award, MapPin, Mail, Phone } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-900 border-t-4 border-red-600 px-8 py-16 mt-auto text-xs text-slate-400 font-light relative z-20 overflow-hidden">
      {/* Decorative subtle background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-800/20 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="mx-auto max-w-[1280px] relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 mb-16">
          <div className="lg:col-span-5 lg:border-r border-slate-800/80 lg:pr-8">
            <a href="#home" className="flex items-center gap-3 mb-6 transition-opacity hover:opacity-80">
              <img src="\pklogo.png" alt="Peakey International Logo" className="h-12 w-auto brightness-0 invert opacity-100 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-white leading-none">
                  PEAKEY
                </span>
                <span className="text-[9px] font-bold tracking-[0.2em] text-red-500 uppercase mt-1">International Group</span>
              </div>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed pr-4 mb-8 max-w-sm">
              {t('footer.description')}
            </p>
            
            {/* Certifications / Professional Bodies */}
            <div className="mb-8">
              <h4 className="text-[10px] font-black tracking-widest text-slate-500 uppercase mb-4">Certifications & Accreditations</h4>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-slate-800/40 px-3 py-1.5 rounded-md border border-slate-700/50">
                  <ShieldCheck className="w-4 h-4 text-red-500" />
                  <span className="text-[10px] font-bold text-slate-300">CRB Registered</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800/40 px-3 py-1.5 rounded-md border border-slate-700/50">
                  <Award className="w-4 h-4 text-red-500" />
                  <span className="text-[10px] font-bold text-slate-300">ERB Certified</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800/40 px-3 py-1.5 rounded-md border border-slate-700/50">
                  <ShieldCheck className="w-4 h-4 text-red-500" />
                  <span className="text-[10px] font-bold text-slate-300">AQRB Registered</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-800 rounded-full hover:bg-red-600 hover:text-white transition-all text-slate-300 hover:shadow-lg hover:shadow-red-600/20">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-800 rounded-full hover:bg-red-600 hover:text-white transition-all text-slate-300 hover:shadow-lg hover:shadow-red-600/20">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-800 rounded-full hover:bg-red-600 hover:text-white transition-all text-slate-300 hover:shadow-lg hover:shadow-red-600/20">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-black tracking-[0.2em] uppercase text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600"></span> {t('footer.company')}
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#about" className="hover:text-red-400 transition-colors">{t('nav.about')}</a></li>
              <li><a href="#organization" className="hover:text-red-400 transition-colors">{t('nav.organization')}</a></li>
              <li><a href="#partners" className="hover:text-red-400 transition-colors">{t('nav.partners')}</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-black tracking-[0.2em] uppercase text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600"></span> {t('footer.work')}
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#services" className="hover:text-red-400 transition-colors">{t('nav.services')}</a></li>
              <li><a href="#projects" className="hover:text-red-400 transition-colors">{t('nav.projects')}</a></li>
              <li><a href="#sustainability" className="hover:text-red-400 transition-colors">{t('nav.sustainability')}</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[11px] font-black tracking-[0.2em] uppercase text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600"></span> {t('footer.contact_info')}
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 font-light">Dar es Salaam, Tanzania<br/>Global Operations Hub</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-red-500 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="mailto:info@peakeyinternational.com" className="hover:text-white transition-colors">info@peakeyinternational.com</a>
                  <a href="mailto:peakeyinternational@gmail.com" className="hover:text-white transition-colors text-slate-500">peakeyinternational@gmail.com</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
                <a href="tel:+255719426043" className="hover:text-white transition-colors">+255 719 426 043</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-[11px] text-slate-500 border-t border-slate-800/80 pt-8">
          <div className="font-bold tracking-wider uppercase">
            &copy; {new Date().getFullYear()} Peakey International Group. {t('footer.rights')}
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.compliance')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
