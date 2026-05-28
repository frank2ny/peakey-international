import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export function Home() {
  const { t } = useTranslation();
  const [emblaRef] = useEmblaCarousel({ loop: true, watchDrag: false }, [Autoplay({ delay: 5000, stopOnInteraction: false })]);

  const slides = [
    {
      img: "/hero1.jpg",
      title: "Active Constructions",
      subtitle: "Transforming the construction industry with monumental structural engineering solutions."
    },
    {
      img: "/hero2.jpg",
      title: "Industrial & Mechanical",
      subtitle: "Advanced electro-mechanical engineering supporting factories and complex operations."
    },
    {
      img: "/hero3.jpg",
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
                <div className="absolute inset-0 bg-slate-900/30 mix-blend-multiply z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent z-10" />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">{t('hero.badge', 'Global Expertise')}</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight drop-shadow-xl">
              {t('hero.title').split(' ').slice(0, 2).join(' ')}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">{t('hero.title').split(' ').slice(2).join(' ')}</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-10 max-w-2xl font-light">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-red-700 to-red-600 overflow-hidden text-white px-8 py-4 rounded-xl text-sm sm:text-base font-black tracking-widest uppercase transition-all hover:from-red-800 hover:to-red-700 shadow-2xl shadow-red-900/50"
              >
                <span className="relative z-10">{t('hero.cta')}</span>
              </a>
              <a
                href="#projects"
                className="group flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl text-sm sm:text-base font-black tracking-widest uppercase transition-all hover:bg-white/20 hover:bg-white/30"
              >
                {t('hero.secondary_cta', 'Corporate Profile')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Red Consulting Excellence Banner */}
      <div className="w-full bg-red-600 py-8 md:py-10 flex flex-col items-center justify-center relative shadow-xl z-20 overflow-hidden px-4">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-black text-slate-900 tracking-wider text-center drop-shadow-sm mb-2 leading-tight">PEAKEY INTERNATIONAL</h2>
        <div className="flex items-center justify-center gap-2 md:gap-5 w-full">
           <div className="flex flex-col gap-1 items-end hidden sm:flex">
             <div className="h-0.5 w-8 sm:w-16 md:w-32 bg-white/40"></div>
             <div className="h-0.5 w-6 sm:w-12 md:w-24 bg-white/40"></div>
             <div className="h-0.5 w-8 sm:w-16 md:w-32 bg-white/40"></div>
           </div>
           <p className="text-white font-serif tracking-wide text-lg sm:text-xl md:text-3xl font-medium text-center shadow-red-900/50 uppercase sm:capitalize">Consulting Excellence</p>
           <div className="flex flex-col gap-1 items-start hidden sm:flex">
             <div className="h-0.5 w-8 sm:w-16 md:w-32 bg-white/40"></div>
             <div className="h-0.5 w-6 sm:w-12 md:w-24 bg-white/40"></div>
             <div className="h-0.5 w-8 sm:w-16 md:w-32 bg-white/40"></div>
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
                <span className="text-2xl font-black text-red-600">50+</span>
              </div>
              <p className="text-[10px] uppercase tracking-widest font-black text-slate-500">Global Projects</p>
            </div>
            <div className="text-center px-4 flex flex-col items-center group">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-xl shadow-slate-200/50 mb-4 flex items-center justify-center border border-slate-100 group-hover:-translate-y-1 group-hover:shadow-red-900/10 transition-all text-xs font-black text-red-600">
                AQRB
              </div>
              <p className="text-[10px] uppercase tracking-widest font-black text-slate-500">Certified</p>
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
