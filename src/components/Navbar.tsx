import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => setActiveHash(window.location.hash || '#home');
    window.addEventListener('hashchange', handleHashChange);
    if (window.location.hash) setActiveHash(window.location.hash);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const changeLanguage = (lng: string) => i18n.changeLanguage(lng);

  const navLinks = [
    { path: '#home', label: t('nav.home') },
    { path: '#about', label: t('nav.about') },
    { path: '#organization', label: t('nav.organization') },
    { path: '#services', label: t('nav.services') },
    { path: '#projects', label: t('nav.projects') },
    { path: '#blog', label: t('nav.blog') },
    { path: '#contact', label: t('nav.contact') },
  ];

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg py-3' : 'bg-white py-5 shadow-sm'
    }`}>
      <div className="mx-auto flex items-center justify-between max-w-[1280px] px-6 sm:px-12">
        <a href="#home" className="flex items-center gap-3 transition-transform hover:scale-105 z-50 relative" onClick={(e) => { if (isOpen) { setIsOpen(false); } }}>
          <img src="/pklogo.png" alt="Peakey International Logo" className="h-12 w-auto drop-shadow-md" />
          <span className="text-xl font-extrabold tracking-tight text-slate-900 hidden sm:flex flex-col leading-tight">
            <span>PEAKEY</span>
            <span className="text-red-700 text-[10px] tracking-widest uppercase">International</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex lg:items-center lg:gap-6 bg-slate-50/50 px-6 py-2.5 rounded-full border border-slate-100">
          <div className="flex gap-6 text-xs font-bold uppercase tracking-widest text-slate-500">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={() => setActiveHash(link.path)}
                className={`relative transition-all py-1 whitespace-nowrap overflow-hidden group ${
                  activeHash === link.path ? 'text-red-700' : 'hover:text-red-600'
                }`}
              >
                {link.label}
                <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-red-600 transition-transform duration-300 ${activeHash === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </a>
            ))}
          </div>
          
          <div className="h-4 w-px bg-slate-300 mx-2"></div>
          
          <div className="relative flex items-center bg-slate-200/50 rounded-full p-1 cursor-pointer">
             <div 
               className={`absolute inset-y-1 w-[32px] bg-white rounded-full shadow-sm transition-transform duration-300 ease-out ${
                 i18n.language.startsWith('sw') ? 'translate-x-[32px]' : 'translate-x-0'
               }`}
             ></div>
             <button 
               onClick={() => changeLanguage('en')} 
               className={`relative z-10 w-[32px] py-1 text-[10px] font-black transition-colors ${
                 i18n.language.startsWith('en') ? 'text-red-700' : 'text-slate-500 hover:text-slate-700'
               }`}
             >
               EN
             </button>
             <button 
               onClick={() => changeLanguage('sw')} 
               className={`relative z-10 w-[32px] py-1 text-[10px] font-black transition-colors ${
                 i18n.language.startsWith('sw') ? 'text-red-700' : 'text-slate-500 hover:text-slate-700'
               }`}
             >
               SW
             </button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2.5 z-50 relative bg-slate-50 border border-slate-200 rounded-full hover:bg-slate-100 hover:border-slate-300 transition-all duration-300 shadow-sm"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
            {isOpen ? <X className="h-5 w-5 text-red-600" /> : <Menu className="h-5 w-5 text-slate-800" />}
          </motion.div>
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-white flex flex-col pt-20 px-4 lg:hidden h-[100dvh]"
          >
            <div className="flex flex-col gap-0.5 overflow-y-auto pb-8 h-full">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + idx * 0.05, duration: 0.3, ease: 'easeOut' }}
                  key={link.path}
                  href={link.path}
                  onClick={() => { setIsOpen(false); setActiveHash(link.path); }}
                  className={`group flex items-center justify-between w-full py-3 transition-all outline-none ${
                    activeHash === link.path ? 'px-4 bg-slate-50 rounded-lg shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]' : 'px-4 hover:bg-slate-50 hover:rounded-lg'
                  }`}
                >
                  <span className={`text-[12px] sm:text-[13px] uppercase tracking-[0.15em] transition-colors ${
                    activeHash === link.path ? 'text-red-600 font-black' : 'text-slate-500 font-bold group-hover:text-slate-900'
                  }`}>
                    {link.label}
                  </span>
                  <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    activeHash === link.path ? 'bg-red-600 scale-100' : 'bg-transparent scale-0 group-hover:scale-100 group-hover:bg-slate-300'
                  }`}></div>
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="mt-auto pt-4 pb-4 border-t border-slate-50"
              >
                <div className="relative flex items-center bg-slate-50 border border-slate-100 rounded-full p-1.5 max-w-[160px] mx-auto shadow-inner">
                   <div 
                     className={`absolute inset-y-1.5 w-[calc(50%-6px)] bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-transform duration-300 ease-out ${
                       i18n.language.startsWith('sw') ? 'translate-x-[100%]' : 'translate-x-0'
                     }`}
                   ></div>
                   <button 
                     onClick={() => { changeLanguage('en'); setIsOpen(false); }} 
                     className={`relative z-10 flex-1 py-1.5 text-[10px] sm:text-[11px] font-black tracking-[0.15em] transition-colors uppercase ${
                       i18n.language.startsWith('en') ? 'text-red-700' : 'text-slate-400 hover:text-slate-700'
                     }`}
                   >
                     English
                   </button>
                   <button 
                     onClick={() => { changeLanguage('sw'); setIsOpen(false); }} 
                     className={`relative z-10 flex-1 py-1.5 text-[10px] sm:text-[11px] font-black tracking-[0.15em] transition-colors uppercase ${
                       i18n.language.startsWith('sw') ? 'text-red-700' : 'text-slate-400 hover:text-slate-700'
                     }`}
                   >
                     Swahili
                   </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
