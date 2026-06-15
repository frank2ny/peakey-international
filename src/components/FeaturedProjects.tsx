import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { MapPin, Building2, ArrowRight } from 'lucide-react';
import { projectsData } from '../data/projects';

export function FeaturedProjects() {
  const { t } = useTranslation();

  // Show only 3 prominent projects on the home page
  const featuredList = projectsData.slice(0, 3);

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-slate-100 to-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-400/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="relative max-w-[1280px] mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 border border-red-100">
            {t('projects.featuredTitle')}
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-slate-900 tracking-tight leading-tight">
            {t('projects.featuredTitle')}
          </h2>
          <p className="text-slate-500 mt-4 font-light max-w-2xl mx-auto text-base sm:text-lg">
            {t('projects.featuredSubtitle')}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredList.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: 'easeOut' }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/60 shadow-lg shadow-slate-200/50 flex flex-col h-full group hover:shadow-2xl hover:shadow-slate-300/40 hover:-translate-y-2 transition-all duration-500 hover:border-red-100"
            >
              {/* Image Header */}
              <div className="h-60 relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors z-10"></div>
                <img 
                  src={project.img} 
                  alt={project.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute top-4 right-4 z-20">
                  <span className="bg-white/95 backdrop-blur text-red-600 px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-sm">
                    {project.status === 'ONGOING' ? t('projects.ongoing') : t('projects.completed')}
                  </span>
                </div>
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-slate-900/80 backdrop-blur text-white px-3 py-1 rounded-full text-[9px] font-bold tracking-wider">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-6 group-hover:text-red-700 transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <Building2 className="w-4.5 h-4.5 text-slate-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-[9px] uppercase font-bold text-slate-400 tracking-wider mb-0.5">
                          {t('projects.client')}
                        </p>
                        <p className="text-xs font-bold text-slate-700 leading-snug line-clamp-1">
                          {project.client}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-4.5 h-4.5 text-slate-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-[9px] uppercase font-bold text-slate-400 tracking-wider mb-0.5">
                          {t('projects.location')}
                        </p>
                        <p className="text-xs font-bold text-slate-700">
                          {project.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <p className="text-[9px] uppercase font-bold text-slate-400 tracking-wider mb-0.5">
                      {t('projects.value')}
                    </p>
                    <p className="text-sm font-black text-slate-950">
                      {project.value}
                    </p>
                  </div>
                  <Link
                    to="/projects"
                    className="flex items-center justify-center w-9 h-9 rounded-full bg-slate-50 text-slate-500 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm"
                    aria-label="View Project Details"
                  >
                    <ArrowRight className="w-4.5 h-4.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 hover:bg-red-600 text-white font-black tracking-widest uppercase text-xs sm:text-sm rounded-xl shadow-xl shadow-slate-900/10 hover:shadow-red-600/30 transition-all duration-300 hover:-translate-y-0.5 group"
          >
            <span>{t('projects.viewAll')}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
