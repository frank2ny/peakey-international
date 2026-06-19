import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import { useEffect } from 'react';

export function Home() {
  const { t } = useTranslation();
  const [emblaRef] = useEmblaCarousel({ loop: true, watchDrag: false }, [Autoplay({ delay: 5000, stopOnInteraction: false })]);

  useEffect(() => {
    document.title = "Peakey International Group - Global Engineering Excellence";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Peakey International Group delivers globally recognized standards in structural, civil, and mechanical engineering consulting, along with premium architectural design and project management services.');
    }
  }, []);

  const slides = [
    {
      img: "/WEBSITE DEVELOPMENT/DODOMA JIJI.jpg",
      title: "Active Constructions",
      subtitle: "Transforming the construction industry with monumental structural engineering solutions."
    },
    {
      img: "/WEBSITE DEVELOPMENT/GOBA RESIDENTIAL.jpg",
      title: "Industrial & Mechanical",
      subtitle: "Advanced electro-mechanical engineering supporting factories and complex operations."
    },
    {
      img: "/WEBSITE DEVELOPMENT/IHUMWA 3.jpg",
      title: "Government & Corporate",
      subtitle: "Delivering secure, sustainable architectural designs for public and official institutions."
    },
    {
      img: "/WEBSITE DEVELOPMENT/IHUMWA 2.jpg",
      title: "Government & Corporate",
      subtitle: "Delivering secure, sustainable architectural designs for public and official institutions."
    }
  ];

  return (
    <div className="flex flex-col w-full relative">
      <section className="relative w-full h-[85vh] min-h-[600px] bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden" ref={emblaRef}>
          <div className="flex h-full Touch-pan-y pointer-events-none">
            {slides.map((slide, idx) => (
              <div key={idx} className="relative flex-[0_0_100%] h-full min-w-0">
                <img src={slide.img} alt={slide.title} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative z-20 max-w-[1280px] mx-auto w-full h-full flex items-center px-6 sm:px-12 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl pointer-events-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950/60 backdrop-blur-sm border border-white/10 mb-6 shadow-lg shadow-black/40">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">{t('hero.badge', 'Global Expertise')}</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight" style={{ filter: 'drop-shadow(0px 2px 10px rgba(0,0,0,0.95)) drop-shadow(0px 4px 25px rgba(0,0,0,0.95))' }}>
              {t('hero.title').split(' ').slice(0, 2).join(' ')}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">{t('hero.title').split(' ').slice(2).join(' ')}</span>
            </h1>
            
            <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed mb-8 max-w-2xl font-normal" style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.95), 0 1px 3px rgba(0, 0, 0, 0.95)' }}>
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-red-700 to-red-600 overflow-hidden text-white px-8 py-3.5 rounded-xl text-xs sm:text-sm font-black tracking-widest uppercase transition-all hover:from-red-800 hover:to-red-700 shadow-2xl shadow-red-950/50"
              >
                <span className="relative z-10">{t('hero.cta')}</span>
              </a>
              <a
                href="#projects"
                className="group flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3.5 rounded-xl text-xs sm:text-sm font-black tracking-widest uppercase transition-all hover:bg-white/20"
              >
                {t('hero.secondary_cta', 'Corporate Profile')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Red Consulting Excellence Banner */}
      <div className="w-full bg-red-600 py-3 sm:py-4 flex flex-col items-center justify-center relative shadow-xl z-20 overflow-hidden px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-black text-slate-900 tracking-wider text-center drop-shadow-sm mb-1 leading-tight">PEAKEY INTERNATIONAL</h2>
        <div className="flex items-center justify-center gap-2 md:gap-4 w-full">
           <div className="flex flex-col gap-0.5 items-end hidden sm:flex">
             <div className="h-px w-6 sm:w-12 md:w-20 bg-white/40"></div>
             <div className="h-px w-4 sm:w-8 md:w-14 bg-white/40"></div>
             <div className="h-px w-6 sm:w-12 md:w-20 bg-white/40"></div>
           </div>
           <p className="text-white font-serif tracking-wide text-xs sm:text-sm md:text-base font-medium text-center shadow-red-900/50 uppercase sm:capitalize">Consulting Excellence</p>
           <div className="flex flex-col gap-0.5 items-start hidden sm:flex">
             <div className="h-px w-6 sm:w-12 md:w-20 bg-white/40"></div>
             <div className="h-px w-4 sm:w-8 md:w-14 bg-white/40"></div>
             <div className="h-px w-6 sm:w-12 md:w-20 bg-white/40"></div>
           </div>
        </div>
      </div>

      {/* Stats/Credibility Bar */}
      <section className="bg-[linear-gradient(to_bottom,theme(colors.slate.100),theme(colors.slate.50))] border-y border-slate-200 relative overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-red-600/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-12 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x md:divide-slate-200">
            <div className="text-center px-4 flex flex-col items-center group">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-xl shadow-slate-200/50 mb-4 flex items-center justify-center border border-slate-100 group-hover:-translate-y-1 group-hover:shadow-red-900/10 transition-all">
                <span className="text-2xl font-black text-red-600">12+</span>
              </div>
              <p className="text-[10px] uppercase tracking-widest font-black text-slate-500">Years Exp.</p>
            </div>
            <div className="text-center px-4 flex flex-col items-center group">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-xl shadow-slate-200/50 mb-4 flex items-center justify-center border border-slate-100 group-hover:-translate-y-1 group-hover:shadow-red-900/10 transition-all">
                <span className="text-2xl font-black text-red-600">35+</span>
              </div>
              <p className="text-[10px] uppercase tracking-widest font-black text-slate-500">Our Projects</p>
            </div>
            <div className="text-center px-4 flex flex-col items-center group">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-xl shadow-slate-200/50 mb-4 flex items-center justify-center border border-slate-100 group-hover:-translate-y-1 group-hover:shadow-red-900/10 transition-all text-xs font-black text-red-600">
                AQRB
              </div>
              <p className="text-[10px] uppercase tracking-widest font-black text-slate-500">Registered</p>
            </div>
            <div className="text-center px-4 flex flex-col items-center group">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-xl shadow-slate-200/50 mb-4 flex items-center justify-center border border-slate-100 group-hover:-translate-y-1 group-hover:shadow-red-900/10 transition-all text-xs font-black text-red-600">
                ERB
              </div>
              <p className="text-[10px] uppercase tracking-widest font-black text-slate-500">Registered</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
