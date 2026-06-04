import React, { useState, useEffect } from 'react';
import { PageHeader } from '../components/PageHeader';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Building2, Search, SlidersHorizontal, X, ArrowLeft, Calendar, User, DollarSign, CheckCircle, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { projectsData, Project } from '../data/projects';

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
            const cx = (hq.x + branch.x) / 2 + (branch.y > hq.y ? -10 : 10);
            const cy = (hq.y + branch.y) / 2 - 20;
            const path = `M ${hq.x}% ${hq.y}% Q ${cx}% ${cy}% ${branch.x}% ${branch.y}%`;

            return (
              <g key={`connection-${i}`}>
                <path
                  d={path}
                  fill="none"
                  stroke="url(#line-gradient)"
                  strokeWidth="2"
                  className="opacity-50"
                />
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

            <div className="absolute top-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 bg-white px-4 py-2.5 rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center min-w-[140px] pointer-events-none z-30">
              <span className="text-[9px] uppercase font-bold tracking-widest text-slate-400 mb-0.5">{branch.role}</span>
              <span className="text-xs font-bold text-slate-800 whitespace-nowrap">{branch.name}</span>
            </div>
          </div>
        ))}
      </div>

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

export function Projects() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [sortBy, setSortBy] = useState('value-desc');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Helper to parse values for sorting (convert USD to TSHS roughly for scale equivalence)
  const parseProjectValue = (valStr: string): number => {
    if (valStr.toLowerCase() === 'confidential') return 0;
    const match = valStr.replace(/[^0-9.]/g, '');
    const num = parseFloat(match) || 0;
    if (valStr.toUpperCase().includes('USD')) {
      return num * 2600; // approximate conversion
    }
    return num;
  };

  // Filter and sort logic
  const filteredAndSorted = projectsData
    .filter((p) => {
      const matchesSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.location.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      const matchesStatus = selectedStatus === 'All' || p.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    })
    .sort((a, b) => {
      if (sortBy === 'name-asc') {
        return a.title.localeCompare(b.title);
      }
      if (sortBy === 'name-desc') {
        return b.title.localeCompare(a.title);
      }
      if (sortBy === 'value-desc') {
        return parseProjectValue(b.value) - parseProjectValue(a.value);
      }
      if (sortBy === 'value-asc') {
        return parseProjectValue(a.value) - parseProjectValue(b.value);
      }
      return 0;
    });

  const categories = ['All', 'Government', 'Commercial', 'Infrastructure', 'Residential'];

  return (
    <div className="flex flex-col w-full bg-[linear-gradient(to_bottom,theme(colors.slate.50),theme(colors.slate.100)_50%,theme(colors.slate.50))] relative z-10 overflow-hidden min-h-screen">
      <PageHeader title={t('projects.dashboardTitle')} subtitle={t('projects.dashboardSubtitle')} />

      <div className="max-w-[1280px] mx-auto w-full px-6 sm:px-12 pb-24">
        
        {/* Back Link & Title */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-red-600 transition-colors text-xs font-black uppercase tracking-widest group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {t('projects.backToHome')}
          </Link>
        </div>

        {/* Dashboard Controls */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/60 shadow-lg shadow-slate-200/50 mb-12 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Search Input */}
            <div className="md:col-span-2 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder={t('projects.searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all text-slate-800 placeholder-slate-400"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sorting Select */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all appearance-none cursor-pointer"
              >
                <option value="value-desc">{t('projects.sortValueHigh')}</option>
                <option value="value-asc">{t('projects.sortValueLow')}</option>
                <option value="name-asc">{t('projects.sortAZ')}</option>
                <option value="name-desc">{t('projects.sortZA')}</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <SlidersHorizontal className="w-4.5 h-4.5" />
              </div>
            </div>

          </div>

          <div className="h-px bg-slate-100"></div>

          {/* Filtering Tabs */}
          <div className="flex flex-col gap-4">
            
            {/* Categories */}
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t('projects.categoryLabel')}</span>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => {
                  const count = cat === 'All' 
                    ? projectsData.length 
                    : projectsData.filter(p => p.category === cat).length;

                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 hover:-translate-y-0.5 ${
                        selectedCategory === cat
                          ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                          : 'bg-slate-50 border border-slate-200 text-slate-500 hover:bg-slate-100 hover:text-slate-800'
                      }`}
                    >
                      {cat} <span className={`ml-1 text-[9px] ${selectedCategory === cat ? 'text-red-100' : 'text-slate-400'}`}>({count})</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Statuses */}
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t('projects.statusLabel')}</span>
              <div className="flex flex-wrap gap-2">
                {[
                  { value: 'All', label: t('projects.statusAll') },
                  { value: 'ONGOING', label: t('projects.ongoing') },
                  { value: 'COMPLETED', label: t('projects.completed') }
                ].map((status) => (
                  <button
                    key={status.value}
                    onClick={() => setSelectedStatus(status.value)}
                    className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 hover:-translate-y-0.5 ${
                      selectedStatus === status.value
                        ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/30'
                        : 'bg-slate-50 border border-slate-200 text-slate-500 hover:bg-slate-100 hover:text-slate-800'
                    }`}
                  >
                    {status.label}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Results Grid */}
        {filteredAndSorted.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full text-center py-20 bg-white rounded-3xl border border-slate-200/60 shadow-lg shadow-slate-200/20 max-w-2xl mx-auto px-6"
          >
            <div className="w-16 h-16 bg-red-50 rounded-2xl shadow-inner mb-6 flex items-center justify-center mx-auto border border-red-100">
              <SlidersHorizontal className="text-red-500 w-7 h-7" />
            </div>
            <h4 className="text-xl font-black text-slate-900 mb-3 tracking-tight">{t('projects.noProjects')}</h4>
            <p className="text-sm font-light text-slate-500 max-w-sm mx-auto leading-relaxed">
              {t('projects.noProjectsDesc')}
            </p>
          </motion.div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
          >
            {filteredAndSorted.map((project, idx) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setSelectedProject(project)}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/60 shadow-md shadow-slate-200/50 flex flex-col h-full group hover:shadow-2xl hover:shadow-slate-300/40 hover:-translate-y-2 transition-all duration-500 cursor-pointer"
              >
                {/* Image */}
                <div className="h-60 relative overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors z-10"></div>
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <span className={`px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-sm ${
                      project.status === 'ONGOING' ? 'bg-red-50 text-red-600' : 'bg-emerald-50 text-emerald-600'
                    }`}>
                      {project.status === 'ONGOING' ? t('projects.ongoing') : t('projects.completed')}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-slate-900/80 backdrop-blur text-white px-3 py-1 rounded-full text-[9px] font-bold tracking-wider">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-black text-slate-950 mb-6 group-hover:text-red-700 transition-colors line-clamp-2 leading-snug">
                      {project.title}
                    </h3>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <Building2 className="w-4.5 h-4.5 text-slate-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-[9px] uppercase font-bold text-slate-400 tracking-wider mb-0.5">{t('projects.client')}</p>
                          <p className="text-xs font-bold text-slate-700 leading-snug line-clamp-1">{project.client}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="w-4.5 h-4.5 text-slate-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-[9px] uppercase font-bold text-slate-400 tracking-wider mb-0.5">{t('projects.location')}</p>
                          <p className="text-xs font-bold text-slate-700">{project.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <p className="text-[9px] uppercase font-bold text-slate-400 tracking-wider mb-0.5">{t('projects.value')}</p>
                      <p className="text-sm font-black text-slate-950">{project.value}</p>
                    </div>
                    <span className="text-[10px] font-black text-red-600 group-hover:translate-x-1.5 transition-transform duration-300 flex items-center gap-1 uppercase tracking-wider">
                      Details &rarr;
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        <div className="border-t border-slate-200/80 pt-16">
          <GlobalMap />
        </div>

      </div>

      {/* Case Study Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl shadow-black/30 border border-slate-100 max-w-4xl w-full max-h-[90vh] flex flex-col relative"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Top Banner Image */}
              <div className="h-64 sm:h-80 w-full relative">
                <img 
                  src={selectedProject.img} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 z-10" />
                
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-black/40 hover:bg-black/70 backdrop-blur-md text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all z-30"
                  aria-label={t('projects.close')}
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Banner Content overlay */}
                <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 z-20">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">
                      {selectedProject.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border border-white/20 bg-white/10 backdrop-blur-md text-white`}>
                      {selectedProject.status === 'ONGOING' ? t('projects.ongoing') : t('projects.completed')}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto flex-1 bg-slate-50/50">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  
                  {/* Left Column (Main Info) */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3">
                        {t('projects.detailsTitle')}
                      </h4>
                      <p className="text-slate-600 leading-relaxed font-light text-base">
                        {selectedProject.description}
                      </p>
                    </div>

                    {selectedProject.highlights && selectedProject.highlights.length > 0 && (
                      <div className="bg-white rounded-2xl p-6 border border-slate-200/50 shadow-sm">
                        <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-red-600" />
                          {t('projects.highlights')}
                        </h4>
                        <ul className="space-y-3">
                          {selectedProject.highlights.map((highlight, index) => (
                            <li key={index} className="flex gap-2.5 text-sm text-slate-600 leading-relaxed font-light">
                              <span className="text-red-500 font-bold mt-0.5">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Right Column (Sidebar Specs) */}
                  <div className="lg:col-span-1 space-y-4">
                    <div className="bg-white rounded-2xl p-6 border border-slate-200/50 shadow-sm space-y-5">
                      
                      <div className="flex items-start gap-3.5">
                        <Building2 className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-[9px] uppercase font-bold text-slate-400 tracking-wider mb-0.5">{t('projects.client')}</p>
                          <p className="text-sm font-black text-slate-900 leading-snug">{selectedProject.client}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3.5">
                        <MapPin className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-[9px] uppercase font-bold text-slate-400 tracking-wider mb-0.5">{t('projects.location')}</p>
                          <p className="text-sm font-black text-slate-900 leading-snug">{selectedProject.location}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3.5">
                        <Calendar className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-[9px] uppercase font-bold text-slate-400 tracking-wider mb-0.5">{t('projects.year')}</p>
                          <p className="text-sm font-black text-slate-900 leading-snug">{selectedProject.year}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3.5">
                        <DollarSign className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-[9px] uppercase font-bold text-slate-400 tracking-wider mb-0.5">{t('projects.value')}</p>
                          <p className="text-sm font-black text-slate-900 leading-snug">{selectedProject.value}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3.5">
                        <User className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-[9px] uppercase font-bold text-slate-400 tracking-wider mb-0.5">{t('projects.teamLead')}</p>
                          <p className="text-sm font-black text-slate-900 leading-snug">{selectedProject.teamLead}</p>
                        </div>
                      </div>

                    </div>

                    {/* Inquiry CTA */}
                    <Link
                      to="/#contact"
                      onClick={() => setSelectedProject(null)}
                      className="flex items-center justify-center gap-2 w-full py-4 bg-red-600 hover:bg-slate-900 text-white font-black tracking-widest uppercase text-xs rounded-2xl shadow-lg shadow-red-950/20 transition-all duration-300"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>{t('projects.inquire')}</span>
                    </Link>

                  </div>

                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
