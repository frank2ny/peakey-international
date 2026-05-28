import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { MapPin, Building2, Calendar } from 'lucide-react';

const TiltProjectCard: React.FC<{ project: any, idx: number, isExpanded: boolean, onToggle: () => void }> = ({ project, idx, isExpanded, onToggle }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      className="flex-[0_0_100%] sm:flex-[0_0_60%] lg:flex-[0_0_40%] min-w-0 p-2"
      style={{ perspective: 1000 }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onToggle}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="bg-[linear-gradient(145deg,theme(colors.white),theme(colors.slate.50))] rounded-3xl overflow-hidden border border-slate-200 shadow-lg shadow-slate-300/30 group h-full flex flex-col transition-all duration-500 hover:shadow-2xl hover:shadow-slate-400/40 hover:-translate-y-2 relative will-change-transform cursor-pointer hover:border-slate-300"
      >
        
        {/* Decorative Ribbon */}
        <div className="absolute -right-12 top-7 z-30 transform rotate-45 bg-gradient-to-r from-red-700 to-red-500 text-white font-black text-[10px] py-1 px-14 shadow-lg tracking-widest uppercase scale-0 group-hover:scale-100 transition-transform duration-500 origin-center opacity-0 group-hover:opacity-100" style={{ transform: "translateZ(30px) rotate(45deg)" }}>
          Active
        </div>

        <div className="h-64 relative overflow-hidden" style={{ transform: "translateZ(20px)" }}>
          <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors z-10"></div>
          <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          
          <div className="absolute top-4 right-4 z-20">
            <span className="bg-white/90 backdrop-blur text-red-600 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
              {project.status}
            </span>
          </div>
        </div>
        
        <div className="p-8 flex-1 flex flex-col" style={{ transform: "translateZ(10px)" }}>
          <div className="flex items-start justify-between mb-4">
             <h3 className="text-xl font-black text-slate-900 line-clamp-2">{project.title}</h3>
             <button className="flex-shrink-0 ml-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-red-50 group-hover:text-red-600 transition-colors">
               <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
               </motion.div>
             </button>
          </div>
          
          <div className="space-y-4 flex-1">
            <div className="flex items-start gap-3">
              <Building2 className="w-4 h-4 text-slate-400 mt-0.5" />
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Client</p>
                <p className="text-xs font-bold text-slate-700 leading-snug">{project.client}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-slate-400 mt-0.5" />
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Location</p>
                <p className="text-xs font-bold text-slate-700">{project.location}</p>
              </div>
            </div>
          </div>
          
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-slate-100 mt-4 mb-2">
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed font-light">
                    {project.description || "Comprehensive delivery including architectural planning, structural integrity assessments, and complete lifecycle project management."}
                  </p>
                  <div className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-slate-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Team Lead</p>
                      <p className="text-xs font-bold text-slate-700">{project.teamLead || "Engineering Leadership"}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-4 pt-4 border-t border-slate-200">
            <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">Project Value</p>
            <p className="text-sm font-black text-slate-900">{project.value}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function GlobalMap() {
  const locations = [
    { top: '35%', left: '22%', name: 'North America Projects' },
    { top: '65%', left: '32%', name: 'South America Operations' },
    { top: '55%', left: '52%', name: 'African Headquarters (Dar Es Salaam)' },
    { top: '30%', left: '50%', name: 'European Partners' },
    { top: '45%', left: '72%', name: 'Asian Markets' },
    { top: '75%', left: '85%', name: 'Oceania Reach' },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto mb-20 pt-10">
      <div className="text-center mb-10">
         <div className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 border border-red-100">Global Reach</div>
         <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Active Across Continents</h2>
         <p className="text-slate-500 mt-4 font-light max-w-2xl mx-auto">Our footprint spans the globe, delivering high-value consulting and structural engineering excellence regardless of borders.</p>
      </div>
      <div className="relative aspect-[2/1] w-full bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 shadow-inner group">
        {/* Abstract Map Graphic (Grid) */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-100/50"></div>
        
        {/* Continents rough outlines / abstract representation */}
        <svg className="absolute inset-0 w-full h-full text-slate-200 fill-current opacity-50" viewBox="0 0 1000 500" preserveAspectRatio="none">
           <path d="M 150 100 Q 200 50 300 150 T 250 300 T 150 100 M 450 100 Q 550 50 600 200 T 450 350 T 450 100 M 650 50 Q 800 100 850 250 T 700 300 T 650 50 M 200 350 Q 300 350 250 450 T 150 400 T 200 350 M 800 350 Q 900 300 950 400 T 800 450 T 800 350" />
        </svg>

        {locations.map((loc, i) => (
          <div 
             key={i} 
             className="absolute flex items-center justify-center cursor-crosshair transform -translate-x-1/2 -translate-y-1/2 z-10"
             style={{ top: loc.top, left: loc.left }}
          >
             <span className="absolute w-8 h-8 rounded-full bg-red-600/20 animate-ping"></span>
             <span className="absolute w-4 h-4 rounded-full bg-red-600/40 animate-pulse"></span>
             <span className="relative w-2 h-2 rounded-full bg-red-600 border border-white shadow-sm transition-transform duration-300 hover:scale-150"></span>
             
             {/* Tooltip */}
             <div className="absolute top-full mt-3 opacity-0 group-hover:opacity-100 hover:opacity-100 transition-opacity bg-slate-900 text-white text-[10px] font-black uppercase tracking-wider py-1.5 px-3 rounded shadow-xl whitespace-nowrap pointer-events-none">
                {loc.name}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 border-solid border-b-slate-900 border-b-4 border-l-transparent border-l-4 border-r-transparent border-r-4"></div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectCardSkeleton() {
  return (
    <div className="flex-[0_0_100%] sm:flex-[0_0_60%] lg:flex-[0_0_40%] min-w-0 p-2">
      <div className="bg-slate-50/50 rounded-3xl overflow-hidden border border-slate-100 flex flex-col h-full animate-pulse shadow-sm min-h-[460px]">
        <div className="h-64 bg-slate-200/50 w-full relative">
          <div className="absolute top-4 right-4 z-20">
            <div className="bg-slate-300/50 h-6 w-20 rounded-full"></div>
          </div>
        </div>
        <div className="p-8 flex-1 flex flex-col gap-6">
          <div className="flex justify-between items-start">
            <div className="h-7 bg-slate-200/60 rounded-md w-3/4"></div>
            <div className="w-8 h-8 rounded-full bg-slate-200/50 flex-shrink-0 ml-4"></div>
          </div>
          <div className="space-y-5 flex-1 mt-2">
            <div className="flex gap-3">
               <div className="w-4 h-4 bg-slate-200/50 rounded-sm mt-0.5"></div>
               <div className="space-y-2.5 flex-1">
                 <div className="h-2 bg-slate-200/60 rounded w-12"></div>
                 <div className="h-3 bg-slate-200/50 rounded w-1/2"></div>
               </div>
            </div>
            <div className="flex gap-3">
               <div className="w-4 h-4 bg-slate-200/50 rounded-sm mt-0.5"></div>
               <div className="space-y-2.5 flex-1">
                 <div className="h-2 bg-slate-200/60 rounded w-16"></div>
                 <div className="h-3 bg-slate-200/50 rounded w-2/3"></div>
               </div>
            </div>
          </div>
          <div className="mt-2 pt-4 border-t border-slate-100">
            <div className="h-2 bg-slate-200/60 rounded w-20 mb-3"></div>
            <div className="h-4 bg-slate-200/50 rounded w-1/3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [filter, setFilter] = React.useState('All');
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start', dragFree: true }, [Autoplay({ delay: 4000, stopOnInteraction: true })]);

  React.useEffect(() => {
    // Simulate network delay for skeleton showcase
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      title: "TANESCO Head Office",
      category: "Government",
      client: "TANZANIA ELECTRIC SUPPLY COMPANY LIMITED",
      location: "Ihumwa, Dodoma",
      status: "ONGOING",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      value: "TSHS. 4,920,350,000"
    },
    {
      title: "NIDA ICT Service Center",
      category: "Government",
      client: "NATIONAL IDENTIFICATION AUTHORITY",
      location: "Kibaha, Coastal Region",
      status: "ONGOING",
      img: "https://images.unsplash.com/photo-1545607567-cda49e0db4df?auto=format&fit=crop&q=80&w=800",
      value: "USD 3,868,245.5"
    },
    {
      title: "NSSF Pension Towers Renovation",
      category: "Commercial",
      client: "NATIONAL SOCIAL SECURITY FUND",
      location: "Dar es Salaam",
      status: "ONGOING",
      img: "https://images.unsplash.com/photo-1577402830867-0c74ce52e72c?auto=format&fit=crop&q=80&w=800",
      value: "Confidential"
    },
    {
      title: "Tanzania Embassy Chancery",
      category: "Government",
      client: "MINISTRY OF FOREIGN AFFAIRS",
      location: "Kigali, Rwanda",
      status: "ONGOING",
      img: "https://images.unsplash.com/photo-1448697138198-9aa6d0d84bf4?auto=format&fit=crop&q=80&w=800",
      value: "USD 23,846,153.85"
    },
    {
      title: "NIDA Integrated Operations Center",
      category: "Government",
      client: "NATIONAL IDENTIFICATION AUTHORITY",
      location: "Dodoma",
      status: "ONGOING",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
      value: "USD 19,067,434.05"
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="flex flex-col w-full bg-[linear-gradient(to_bottom,theme(colors.slate.50),theme(colors.slate.100)_50%,theme(colors.slate.50))] relative z-10 overflow-hidden">
      <PageHeader title="Our Projects" subtitle="A showcase of our monumental structural and civil engineering endeavors globally." />
      
      <div className="max-w-[1280px] mx-auto w-full px-6 sm:px-12 pb-24">
        
        <GlobalMap />
        
        <div className="text-center mb-10 pt-10 border-t border-slate-100">
           <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-8">Featured Projects</h3>
           
           <div className="flex flex-wrap justify-center gap-2 mb-8">
             {['All', 'Commercial', 'Government', 'Infrastructure', 'Residential'].map(cat => (
               <button 
                 key={cat} 
                 onClick={() => { setFilter(cat); setExpandedIndex(null); }}
                 className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 hover:-translate-y-1 ${filter === cat ? 'bg-red-600 text-white shadow-xl shadow-red-900/30 border-transparent' : 'bg-white border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-red-600 hover:border-red-200 hover:shadow-lg hover:shadow-red-900/5'}`}
               >
                 {cat}
               </button>
             ))}
           </div>
        </div>

        {isLoading ? (
          <div className="flex gap-6 sm:gap-8 overflow-hidden py-4 px-2">
            {[1, 2, 3].map((i) => (
              <ProjectCardSkeleton key={i} />
            ))}
          </div>
        ) : filteredProjects.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full text-center py-20 bg-slate-50 rounded-3xl border border-slate-100 shadow-inner group transition-all duration-300 hover:bg-slate-100"
          >
            <div className="w-16 h-16 bg-white rounded-2xl shadow-xl shadow-slate-200/50 mb-6 flex items-center justify-center mx-auto border border-slate-100 group-hover:-translate-y-2 group-hover:shadow-red-900/10 transition-all duration-500">
              <span className="text-red-500 text-2xl font-black">!</span>
            </div>
            <h4 className="text-xl font-black text-slate-900 mb-3 tracking-tight">No Projects Found</h4>
             <p className="text-sm font-light text-slate-500 max-w-sm mx-auto leading-relaxed">
               We couldn't find any active projects in the <span className="font-bold text-red-600">'{filter}'</span> category right now. Please check back later or try exploring another category.
             </p>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative" 
            ref={emblaRef} 
            key={filter}
          >
            <div className="flex gap-6 sm:gap-8 Touch-pan-y cursor-grab active:cursor-grabbing py-4 px-2">
              {filteredProjects.map((project, idx) => (
                <TiltProjectCard 
                  key={project.title} 
                  project={project} 
                  idx={idx} 
                  isExpanded={expandedIndex === idx}
                  onToggle={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                />
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
}
