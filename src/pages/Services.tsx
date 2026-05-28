import { useTranslation } from 'react-i18next';
import { PageHeader } from '../components/PageHeader';
import { motion } from 'motion/react';
import { Download } from 'lucide-react';

export function Services() {
  const { t } = useTranslation();

  const services = [
    {
      id: "project-management",
      title: "Project Management",
      img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "contract-management",
      title: "Contract Management",
      img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "architectural",
      title: "Architectural",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "quantity-surveying",
      title: "Quantity Surveying",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "electrical-engineering",
      title: "Electrical Engineering",
      img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "mechanical-engineering",
      title: "Mechanical Engineering",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "ict-engineering",
      title: "ICT Engineering",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <div className="flex flex-col w-full relative z-10 border-b border-slate-200 bg-[linear-gradient(to_bottom,theme(colors.slate.50),theme(colors.slate.100))]">
      <PageHeader title={t('nav.services')} subtitle="Transforming the construction and consultancy industry with comprehensive expertise." />
      
      <div className="w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-slate-100 to-slate-200/80 px-6 sm:px-12 py-16 pb-32">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center">
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16 max-w-5xl mx-auto mb-20">
            {services.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center w-36 sm:w-48 lg:w-56 group cursor-pointer"
              >
                <div className="w-32 h-32 sm:w-44 sm:h-44 lg:w-52 lg:h-52 rounded-full overflow-hidden border-4 sm:border-[6px] border-red-600 shadow-xl p-1 bg-white mb-4 sm:mb-6 transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(220,38,38,0.4)] relative">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <div className="absolute inset-0 bg-slate-900/10 z-10 group-hover:bg-transparent transition-colors"></div>
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                  </div>
                </div>
                
                <h3 className="text-center font-bold text-red-600 tracking-wide text-sm sm:text-base lg:text-lg">
                  {service.title.split(' ').map((word, i) => (
                    <span key={i} className="block leading-tight">{word}</span>
                  ))}
                </h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a 
              href="#" 
              className="inline-flex items-center gap-3 bg-red-600 text-white rounded-full px-10 py-5 font-black tracking-widest text-lg md:text-xl uppercase transition-all shadow-xl shadow-red-900/20 hover:bg-red-700 hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-900/40"
            >
              Company Profile
              <Download className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}
