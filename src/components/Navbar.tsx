import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#home');
  const [scrolled, setScrolled] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const dropdownTimeoutRef = useRef<number | null>(null);
  
  const location = useLocation();
  const isProjectsPage = location.pathname === '/projects';
  const isServicesPage = location.pathname === '/services';
  const isOrganizationPage = location.pathname === '/organization';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isProjectsPage) {
      setActiveHash('#projects');
      return;
    }
    if (isServicesPage) {
      setActiveHash('#services');
      return;
    }
    if (isOrganizationPage) {
      setActiveHash('#organization');
      return;
    }
    const handleHashChange = () => setActiveHash(window.location.hash || '#home');
    window.addEventListener('hashchange', handleHashChange);
    if (window.location.hash) setActiveHash(window.location.hash);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [isProjectsPage, isServicesPage, isOrganizationPage]);

  useEffect(() => {
    if (isProjectsPage || isServicesPage || isOrganizationPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let currentHash = activeHash;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentHash = `#${entry.target.id}`;
          }
        });
        if (currentHash !== activeHash && currentHash) {
          setActiveHash(currentHash);
        }
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );

    const navLinksList = ['home', 'about', 'organization', 'services', 'projects', 'blog', 'contact'];
    navLinksList.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [activeHash, isProjectsPage, isServicesPage, isOrganizationPage]);

  const changeLanguage = (lng: string) => i18n.changeLanguage(lng);

  const navLinks = [
    { path: '#home', label: t('nav.home') },
    { path: '#about', label: t('nav.about') },
    { path: '#organization', label: t('nav.organization') },
    { path: '#services', label: t('nav.services'), hasDropdown: true },
    { path: '#projects', label: t('nav.projects') },
    { path: '#blog', label: t('nav.blog') },
    { path: '#contact', label: t('nav.contact') },
  ];

  const subServices = [
    { id: 'project-management', key: 'projectManagement' },
    { id: 'architectural', key: 'architectural' },
    { id: 'quantity-surveying', key: 'quantitySurveying' },
    { id: 'ict-engineering', key: 'ictEngineering' },
    { id: 'electrical-engineering', key: 'electricalEngineering' },
    { id: 'mechanical-engineering', key: 'mechanicalEngineering' },
    { id: 'contract-management', key: 'contractManagement' },
  ];

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      window.clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setDesktopDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = window.setTimeout(() => {
      setDesktopDropdownOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        window.clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  const renderNavLink = (link: typeof navLinks[0], className: string) => {
    const isProjectsLink = link.path === '#projects';
    const isServicesLink = link.path === '#services';
    const isOrganizationLink = link.path === '#organization';
    const isActive = activeHash === link.path;
    const underline = (
      <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-red-600 transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
    );

    if (isServicesLink) {
      return (
        <div 
          key={link.path}
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            onClick={() => {
              if (isServicesPage) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                setDesktopDropdownOpen(!desktopDropdownOpen);
              }
            }}
            className={`${className} flex items-center gap-1 cursor-pointer`}
          >
            <span>{link.label}</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${desktopDropdownOpen ? 'rotate-180 text-red-600' : 'text-slate-400'}`} />
            {underline}
          </button>

          {/* Desktop Dropdown Box */}
          <AnimatePresence>
            {desktopDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-3xl border border-slate-200/60 shadow-2xl p-2.5 z-[100] flex flex-col gap-0.5"
              >
                {/* Option to load all services */}
                <Link
                  to="/services"
                  onClick={() => {
                    setDesktopDropdownOpen(false);
                    setActiveHash('#services');
                  }}
                  className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-[10px] font-black uppercase tracking-wider text-slate-800 hover:text-red-700 hover:bg-slate-50 transition-colors duration-300 border-b border-slate-100 mb-1"
                >
                  <span>All Services Portfolio</span>
                  <span className="text-red-600 font-bold">&rarr;</span>
                </Link>

                {subServices.map((sub) => (
                  <Link
                    key={sub.id}
                    to={`/services#${sub.id}`}
                    onClick={() => {
                      setDesktopDropdownOpen(false);
                      setActiveHash('#services');
                    }}
                    className="flex items-center gap-2.5 w-full px-4 py-2.5 text-left text-[11px] font-bold uppercase tracking-wider text-slate-500 hover:text-red-700 hover:bg-red-50/50 rounded-xl transition-all duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 opacity-0 hover:opacity-100 transition-opacity"></span>
                    <span>{t(`services.${sub.key}`)}</span>
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }

    if (isOrganizationLink) {
      return (
        <Link
          key={link.path}
          to="/organization"
          onClick={() => {
            setActiveHash('#organization');
          }}
          className={className}
        >
          {link.label}
          {underline}
        </Link>
      );
    }

    if (isProjectsLink) {
      return (
        <Link
          key={link.path}
          to="/projects"
          onClick={() => {
            setActiveHash('#projects');
          }}
          className={className}
        >
          {link.label}
          {underline}
        </Link>
      );
    }

    if (isProjectsPage || isServicesPage || isOrganizationPage) {
      return (
        <Link
          key={link.path}
          to={`/${link.path}`}
          onClick={() => {
            setActiveHash(link.path);
          }}
          className={className}
        >
          {link.label}
          {underline}
        </Link>
      );
    }

    return (
      <a
        key={link.path}
        href={link.path}
        onClick={() => {
          setActiveHash(link.path);
        }}
        className={className}
      >
        {link.label}
        {underline}
      </a>
    );
  };

  const renderMobileNavLink = (link: typeof navLinks[0], idx: number, onClick: () => void) => {
    const isProjectsLink = link.path === '#projects';
    const isServicesLink = link.path === '#services';
    const isOrganizationLink = link.path === '#organization';
    const isActive = activeHash === link.path;
    const content = (
      <>
        <span className={`text-[12px] sm:text-[13px] uppercase tracking-[0.15em] transition-colors ${
          isActive ? 'text-red-600 font-black' : 'text-slate-500 font-bold group-hover:text-slate-900'
        }`}>
          {link.label}
        </span>
        {!isServicesLink && (
          <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
            isActive ? 'bg-red-600 scale-100' : 'bg-transparent scale-0 group-hover:scale-100 group-hover:bg-slate-300'
          }`}></div>
        )}
      </>
    );

    const className = `group flex items-center justify-between w-full py-3 transition-all outline-none ${
      isActive ? 'px-4 bg-slate-50 rounded-lg shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]' : 'px-4 hover:bg-slate-50 hover:rounded-lg'
    }`;

    if (isServicesLink) {
      return (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.05 + idx * 0.05, duration: 0.3, ease: 'easeOut' }}
          key={link.path}
          className="flex flex-col w-full"
        >
          <button
            onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
            className={`${className} flex items-center justify-between w-full text-left`}
          >
            {content}
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileServicesExpanded ? 'rotate-180 text-red-600' : 'text-slate-400'}`} />
          </button>

          {/* Mobile Collapsible Sub-menu */}
          <AnimatePresence>
            {mobileServicesExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden pl-4 flex flex-col bg-slate-50/50 rounded-xl mt-1 border border-slate-100"
              >
                {/* Option to load all services */}
                <Link
                  to="/services"
                  onClick={() => {
                    setIsOpen(false);
                    setMobileServicesExpanded(false);
                    setActiveHash('#services');
                  }}
                  className="py-2.5 pr-4 text-[10px] uppercase tracking-widest font-black text-slate-700 border-b border-slate-100 flex items-center justify-between"
                >
                  <span>All Services Portfolio</span>
                  <span className="text-red-600 font-bold">&rarr;</span>
                </Link>

                {subServices.map((sub) => (
                  <Link
                    key={sub.id}
                    to={`/services#${sub.id}`}
                    onClick={() => {
                      setIsOpen(false);
                      setMobileServicesExpanded(false);
                      setActiveHash('#services');
                    }}
                    className="py-2 pr-4 text-[10px] uppercase tracking-[0.12em] font-bold text-slate-500 hover:text-red-600 block transition-colors"
                  >
                    {t(`services.${sub.key}`)}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      );
    }

    if (isOrganizationLink) {
      return (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.05 + idx * 0.05, duration: 0.3, ease: 'easeOut' }}
          key={link.path}
        >
          <Link to="/organization" onClick={onClick} className={className}>
            {content}
          </Link>
        </motion.div>
      );
    }

    if (isProjectsLink) {
      return (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.05 + idx * 0.05, duration: 0.3, ease: 'easeOut' }}
          key={link.path}
        >
          <Link to="/projects" onClick={onClick} className={className}>
            {content}
          </Link>
        </motion.div>
      );
    }

    if (isProjectsPage || isServicesPage || isOrganizationPage) {
      return (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.05 + idx * 0.05, duration: 0.3, ease: 'easeOut' }}
          key={link.path}
        >
          <Link to={`/${link.path}`} onClick={onClick} className={className}>
            {content}
          </Link>
        </motion.div>
      );
    }

    return (
      <motion.a
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.05 + idx * 0.05, duration: 0.3, ease: 'easeOut' }}
        key={link.path}
        href={link.path}
        onClick={onClick}
        className={className}
      >
        {content}
      </motion.a>
    );
  };

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg py-2' : 'bg-white py-3 shadow-sm'
    }`}>
      <div className="mx-auto flex items-center justify-between max-w-[1280px] px-4 sm:px-12">
        {isProjectsPage || isServicesPage || isOrganizationPage ? (
          <Link
            to="/"
            className="flex items-center gap-2 transition-transform hover:scale-105 z-50 relative"
            onClick={() => {
              if (isOpen) setIsOpen(false);
              setActiveHash('#home');
            }}
          >
            <img src="/pklogo.png" alt="Peakey International Logo" className="h-9 sm:h-10 w-auto drop-shadow-md" />
            <span className="text-lg font-extrabold tracking-tight text-slate-900 hidden sm:flex flex-col leading-tight">
              <span>PEAKEY</span>
              <span className="text-red-700 text-[9px] tracking-widest uppercase">International</span>
            </span>
          </Link>
        ) : (
          <a
            href="#home"
            className="flex items-center gap-2 transition-transform hover:scale-105 z-50 relative"
            onClick={() => {
              if (isOpen) setIsOpen(false);
              setActiveHash('#home');
            }}
          >
            <img src="/pklogo.png" alt="Peakey International Logo" className="h-9 sm:h-10 w-auto drop-shadow-md" />
            <span className="text-lg font-extrabold tracking-tight text-slate-900 hidden sm:flex flex-col leading-tight">
              <span>PEAKEY</span>
              <span className="text-red-700 text-[9px] tracking-widest uppercase">International</span>
            </span>
          </a>
        )}

        {/* Desktop Nav */}
        <nav className="hidden lg:flex lg:items-center lg:gap-6 bg-slate-50/50 px-6 py-1.5 rounded-full border border-slate-100">
          <div className="flex gap-6 text-xs font-bold uppercase tracking-widest text-slate-500">
            {navLinks.map((link) =>
              renderNavLink(
                link,
                `relative transition-all py-1 whitespace-nowrap overflow-hidden group ${
                  activeHash === link.path ? 'text-red-700' : 'hover:text-red-600'
                }`
              )
            )}
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
            className="fixed inset-0 z-40 bg-white flex flex-col pt-16 px-4 lg:hidden h-[100dvh]"
          >
            <div className="flex flex-col gap-0.5 overflow-y-auto pb-8 h-full">
              {navLinks.map((link, idx) =>
                renderMobileNavLink(link, idx, () => {
                  setIsOpen(false);
                  setActiveHash(link.path);
                })
              )}
              
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
