import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { GraduationCap, ArrowRight } from 'lucide-react';

export function FeaturedOrganization() {
  const leader = {
    name: "QS. Dr. Mhenga Agneta",
    image: "/qs_mhenga.jpg",
    role: "Deputy Honorary Secretary, TIQS / Reviewer & Expert",
    bio: "QS. Dr. Mhenga Agneta is an Oil and Gas Production Engineer and a Quantity Surveyor holding a PhD and MSc in Oil and Gas Field Development Engineering from China University of Petroleum. She also holds a BSc. in Building Economics from Ardhi University.",
    highlights: [
      "12+ years of experience across Tanzania, China, and the UK.",
      "Expertise: Cost planning, contract administration, feasibility studies.",
      "Project Manager for WEZESHA BINTI project funded by Enabel.",
      "Part-time Lecturer at Ardhi University."
    ]
  };

  return (
    <section className="py-24 bg-[linear-gradient(to_bottom,theme(colors.slate.50),theme(colors.slate.100)_60%,theme(colors.slate.50))] relative overflow-hidden border-b border-slate-200">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-slate-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 border border-red-100">
            Our Leadership
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-slate-900 tracking-tight leading-tight">
            Our Organisation
          </h2>
          <p className="text-slate-500 mt-4 font-light max-w-2xl mx-auto text-base sm:text-lg">
            Led by distinguished professionals with decades of multi-disciplinary expertise across continents.
          </p>
        </div>

        {/* Featured Leader Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/30 border border-slate-200 group hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-1.5 transition-all duration-500">
            {/* Red accent top bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-700 via-red-500 to-red-700" />

            <div className="flex flex-col lg:flex-row gap-0">
              {/* Image Panel */}
              <div className="w-full lg:w-5/12 relative overflow-hidden min-h-[320px] lg:min-h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent z-10 lg:bg-gradient-to-r lg:from-transparent lg:to-slate-900/10" />
                <img
                  src={leader.image}
                  alt={leader.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-[center_top] transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                {/* Floating icon badge */}
                <div className="absolute top-5 left-5 z-20 w-11 h-11 bg-white/95 backdrop-blur-md rounded-2xl flex items-center justify-center text-red-600 shadow-lg border border-white/40">
                  <GraduationCap className="h-5 w-5" />
                </div>
                {/* Name overlay on mobile */}
                <div className="absolute bottom-5 left-5 right-5 z-20 lg:hidden">
                  <h3 className="text-2xl font-black text-white leading-tight drop-shadow-lg">{leader.name}</h3>
                  <p className="text-[11px] font-bold text-red-300 mt-1 uppercase tracking-wide">{leader.role}</p>
                </div>
              </div>

              {/* Content Panel */}
              <div className="w-full lg:w-7/12 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                {/* Name (desktop only) */}
                <div className="hidden lg:block mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 rounded-full border border-red-100 mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                    <span className="text-[9px] font-black text-red-600 uppercase tracking-widest">Key Leadership</span>
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 leading-tight mb-2">{leader.name}</h3>
                  <p className="text-[11px] font-bold text-red-600 uppercase tracking-wide leading-relaxed">{leader.role}</p>
                </div>

                <p className="text-slate-600 leading-relaxed text-base font-light mb-8">
                  {leader.bio}
                </p>

                {/* Highlights */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4 pb-3 border-b border-slate-200">Professional Highlights</h4>
                  <ul className="space-y-3">
                    {leader.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                        <span className="text-red-500 mt-1.5 text-[8px] font-black shrink-0">■</span>
                        <span className="leading-relaxed font-medium">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/organization"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 hover:bg-red-600 text-white font-black tracking-widest uppercase text-xs rounded-xl shadow-xl shadow-slate-900/10 hover:shadow-red-600/30 transition-all duration-300 hover:-translate-y-0.5 group/btn flex-1 sm:flex-none"
                  >
                    <span>Meet the Full Team</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/#contact"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white border-2 border-slate-200 hover:border-red-200 text-slate-700 hover:text-red-600 font-black tracking-widest uppercase text-xs rounded-xl transition-all duration-300 hover:-translate-y-0.5 flex-1 sm:flex-none"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Preview Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="text-slate-400 text-sm font-light">
            And <span className="font-bold text-slate-600">5 more</span> senior technical directors, specialists & associates.
          </p>
          <Link
            to="/organization"
            className="inline-flex items-center gap-1.5 mt-2 text-xs font-black text-red-600 hover:text-red-700 uppercase tracking-widest transition-colors group/view"
          >
            View Full Organisation
            <ArrowRight className="w-3.5 h-3.5 group-hover/view:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
