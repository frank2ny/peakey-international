import { useEffect } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Sparkles, Calendar } from 'lucide-react';

export function Blog() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = "Publications & Blog - Peakey International Group";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Stay tuned for Peakey International Group\'s latest company updates, event calendars, project announcements, and global engineering insights.');
    }
  }, []);

  return (
    <div className="flex flex-col w-full bg-[linear-gradient(to_bottom,theme(colors.slate.50),theme(colors.slate.100)_50%,theme(colors.slate.50))] relative z-10 min-h-[70vh] flex-1">
      <div className="relative max-w-[1280px] mx-auto px-6 sm:px-12 pt-32 pb-8 w-full">
        <div className="text-center">
          <div className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 border border-red-100">
            News & Events
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-slate-900 tracking-tight leading-tight">
            {t('nav.blog')}
          </h2>
          <p className="text-slate-500 mt-4 font-light max-w-2xl mx-auto text-base sm:text-lg">
            Stay tuned for our latest company updates, stories, and global news.
          </p>
        </div>
      </div>
      
      <div className="mx-auto max-w-[1280px] w-full px-6 sm:px-12 py-12 pb-32 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden w-full max-w-2xl bg-white rounded-3xl p-10 sm:p-16 border border-slate-200/60 shadow-xl shadow-slate-200/50 text-center"
        >
          {/* Decorative design elements */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-red-600/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative flex flex-col items-center">
            {/* Animated Icon Container */}
            <motion.div 
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="w-16 h-16 bg-red-50 rounded-2xl shadow-inner mb-8 flex items-center justify-center border border-red-100"
            >
              <Sparkles className="w-8 h-8 text-red-600" />
            </motion.div>
            
            <h3 className="text-2xl sm:text-4xl font-serif font-black text-slate-900 tracking-tight leading-tight mb-4">
              Amazing Things Are Coming
            </h3>
            
            <p className="text-slate-500 font-light max-w-md mx-auto text-base leading-relaxed mb-8">
              We are currently preparing our news feed and event calendar to bring you high-value insights, project launch announcements, and expert commentary.
            </p>

            <div className="inline-flex items-center gap-2 px-4.5 py-2 bg-slate-50 border border-slate-200/60 rounded-xl text-slate-400 text-[10px] font-black uppercase tracking-widest">
              <Calendar className="w-3.5 h-3.5 text-slate-400 animate-pulse" />
              Launching Soon
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
