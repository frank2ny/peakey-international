import { useTranslation } from 'react-i18next';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-900 px-8 py-16 mt-auto text-xs text-slate-400 font-light relative z-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-12 lg:grid-cols-4 mb-16">
          <div className="lg:col-span-1 border-r border-slate-800 pr-8">
            <a href="#home" className="flex items-center gap-3 mb-6 transition-opacity hover:opacity-80">
              <img src="/pklogo.png" alt="Peakey International Logo" className="h-10 w-auto brightness-0 invert opacity-90" />
              <span className="text-lg font-extrabold tracking-tight text-white">
                PEAKEY
              </span>
            </a>
            <p className="text-xs text-slate-400 leading-relaxed pr-4 mb-8">
              {t('footer.description')}
            </p>
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-800/50 rounded-full hover:bg-red-600 hover:text-white transition-all text-slate-400 hover:-translate-y-1">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-800/50 rounded-full hover:bg-red-600 hover:text-white transition-all text-slate-400 hover:-translate-y-1">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-800/50 rounded-full hover:bg-red-600 hover:text-white transition-all text-slate-400 hover:-translate-y-1">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-500 mb-6">Company</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#about" className="hover:text-red-500 transition-colors">{t('nav.about')}</a></li>
              <li><a href="#organization" className="hover:text-red-500 transition-colors">{t('nav.organization')}</a></li>
              <li><a href="#partners" className="hover:text-red-500 transition-colors">{t('nav.partners')}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-500 mb-6">Work</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#services" className="hover:text-red-500 transition-colors">{t('nav.services')}</a></li>
              <li><a href="#projects" className="hover:text-red-500 transition-colors">{t('nav.projects')}</a></li>
              <li><a href="#sustainability" className="hover:text-red-500 transition-colors">{t('nav.sustainability')}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-500 mb-6">Connect</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#contact" className="hover:text-red-500 transition-colors">{t('nav.contact')}</a></li>
              <li><a href="#blog" className="hover:text-red-500 transition-colors">{t('nav.blog')}</a></li>
              <li><a href="#gallery" className="hover:text-red-500 transition-colors">{t('nav.gallery')}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500 border-t border-slate-800 pt-8">
          <div>&copy; {new Date().getFullYear()} Peakey International Group. All Rights Reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Compliance</a>
            <a href="#" className="hover:text-white transition-colors">Investor Relations</a>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <span className="text-slate-300 font-bold tracking-widest hidden sm:inline-block">HQ: DAR ES SALAAM, TANZANIA</span>
            <span className="text-slate-700 hidden sm:inline-block">|</span>
            <span className="hover:text-white transition-colors cursor-pointer">peakeyinternational@gmail.com</span>
            <span className="text-slate-700 hidden sm:inline-block">|</span>
            <span className="hover:text-white transition-colors cursor-pointer">+255 719 426 043</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
