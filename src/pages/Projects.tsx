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
  const hq = { x: 50, y: 55, name: 'African Headquarters (Dar Es Salaam)', role: 'Core Operations Hub' };
  
  const branches = [
    { x: 20, y: 35, name: 'North America', role: 'Strategic Partners' },
    { x: 25, y: 70, name: 'South America', role: 'Engineering Operations' },
    { x: 45, y: 30, name: 'Europe', role: 'Consulting Affiliates' },
    { x: 75, y: 40, name: 'Asia', role: 'Supply Chain Operations' },
    { x: 85, y: 75, name: 'Oceania', role: 'Regional Projects' },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto mb-20 pt-10">
      <div className="text-center mb-12">
         <div className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 border border-red-100">Global Reach</div>
         <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Active Across Continents</h2>
         <p className="text-slate-500 mt-4 font-light max-w-2xl mx-auto">Our cohesive global network seamlessly connects engineering operations and strategic partnerships, driving high-value consulting worldwide.</p>
      </div>

      <div className="relative aspect-[2.2/1] min-h-[400px] w-full bg-[linear-gradient(135deg,theme(colors.slate.50),theme(colors.slate.100))] rounded-3xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-300/30 group p-4 sm:p-8">
        {/* Animated grid background for technical feel */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px] opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-100 via-transparent to-transparent"></div>

        {/* Dynamic connection lines SVG */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
           <defs>
              <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                 <stop offset="0%" stopColor="#dc2626" stopOpacity="0.2" />
                 <stop offset="50%" stopColor="#dc2626" stopOpacity="0.6" />
                 <stop offset="100%" stopColor="#dc2626" stopOpacity="0.2" />
              </linearGradient>
           </defs>
           
           {branches.map((branch, i) => {
             // Control point for a gentle curve
             const cx = (hq.x + branch.x) / 2 + (branch.y > hq.y ? -10 : 10);
             const cy = (hq.y + branch.y) / 2 - 20;
             const path = `M ${hq.x}% ${hq.y}% Q ${cx}% ${cy}% ${branch.x}% ${branch.y}%`;
             
             return (
               <g key={`connection-${i}`}>
                 {/* Base track */}
                 <path 
                   d={path} 
                   fill="none" 
                   stroke="url(#line-gradient)" 
                   strokeWidth="2" 
                   className="opacity-50"
                 />
                 {/* Animated dashed line */}
                 <path 
                   d={path} 
                   fill="none" 
                   stroke="#ef4444" 
                   strokeWidth="2" 
                   strokeDasharray="6 12"
                   className={`animate-[dash_40s_linear_infinite] opacity-60 ${i % 2 === 0 ? '[animation-direction:reverse]' : ''}`}
                 />
                 <circle fill="#dc2626" r="3">
                   <animateMotion 
                     dur={`${3 + (i % 3)}s`} 
                     repeatCount="indefinite" 
                     path={`M ${hq.x} ${hq.y} Q ${cx} ${cy} ${branch.x} ${branch.y}`} 
                   />
                 </circle>
               </g>
             );
           })}
        </svg>

        {/* Render Headquarters */}
        <div 
          className="absolute flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 z-20"
          style={{ top: `${hq.y}%`, left: `${hq.x}%` }}
        >
          <div className="relative w-6 h-6 flex items-center justify-center">
            <span className="absolute w-12 h-12 rounded-full bg-red-600/20 animate-ping"></span>
            <span className="relative w-4 h-4 rounded-full bg-red-600 border-[3px] border-white shadow-lg shadow-red-600/50"></span>
          </div>
          <div className="absolute top-8 bg-white px-4 py-2 rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center min-w-[160px]">
            <span className="text-[9px] uppercase font-black tracking-widest text-red-500 mb-0.5">Headquarters</span>
            <span className="text-xs font-bold text-slate-800 whitespace-nowrap">{hq.name}</span>
          </div>
        </div>

        {/* Render Branches */}
        {branches.map((branch, i) => (
          <div 
             key={`node-${i}`} 
             className="absolute flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 z-10 group cursor-pointer"
             style={{ top: `${branch.y}%`, left: `${branch.x}%` }}
          >
             <div className="relative w-4 h-4 flex items-center justify-center transition-transform hover:scale-125 duration-300">
               <span className="absolute w-full h-full rounded-full bg-slate-900/10"></span>
               <span className="relative w-2.5 h-2.5 rounded-full bg-slate-800 border-2 border-white shadow-sm"></span>
             </div>
             
             {/* Data Card (shows on hover) */}
             <div className="absolute top-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 bg-white px-4 py-2.5 rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center min-w-[140px] pointer-events-none z-30">
                <span className="text-[9px] uppercase font-bold tracking-widest text-slate-400 mb-0.5">{branch.role}</span>
                <span className="text-xs font-bold text-slate-800 whitespace-nowrap">{branch.name}</span>
             </div>
          </div>
        ))}
      </div>
      
      {/* Global Stats bar below network */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {[
          { label: 'Countries Active', value: '45+' },
          { label: 'Global Workforce', value: '850+' },
          { label: 'Projects Completed', value: '1,200+' },
          { label: 'International Partners', value: '15' }
        ].map((stat, i) => (
          <div key={i} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center">
            <span className="text-2xl font-black text-red-600 mb-1">{stat.value}</span>
            <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500">{stat.label}</span>
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
      img: "\tanesco.jpg",
      value: "TSHS. 4,920,350,000"
    },
    {
      title: "NIDA ICT Service Center",
      category: "Government",
      client: "NATIONAL IDENTIFICATION AUTHORITY",
      location: "Kibaha, Coastal Region",
      status: "ONGOING",
      img: "\NIDA.jpeg",
      value: "USD 3,868,245.5"
    },
    {
      title: "NSSF Pension Towers Renovation",
      category: "Commercial",
      client: "NATIONAL SOCIAL SECURITY FUND",
      location: "Dar es Salaam",
      status: "ONGOING",
      img: "\nssf.jpg",
      value: "Confidential"
    },
    {
      title: "Tanzania Embassy Chancery",
      category: "Government",
      client: "MINISTRY OF FOREIGN AFFAIRS",
      location: "Kigali, Rwanda",
      status: "ONGOING",
      img: "\rwanda.jpg",
      value: "USD 23,846,153.85"
    },
    {
      title: "NIDA Integrated Operations Center",
      category: "Government",
      client: "NATIONAL IDENTIFICATION AUTHORITY",
      location: "Dodoma",
      status: "ONGOING",
      img: "\NIDA.jpeg",
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
