import { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Award, ArrowLeft, Users, Globe, Star, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const leadership = [
  {
    id: "mhenga",
    name: "QS. Dr. Mhenga Agneta",
    image: "/qs_mhenga.jpg",
    // role: "Deputy Honorary Secretary, TIQS",
        role: "Deputy Honorary Secretary, TIQS",

    tag: "MANAGING DIRECTOR",
    tagColor: "from-red-600 to-rose-500",
    bio: "QS. Dr. Mhenga Agneta is an Oil and Gas Production Engineer and a Quantity Surveyor holding a PhD and MSc in Oil and Gas Field Development Engineering from China University of Petroleum. She also holds a BSc. in Building Economics from Ardhi University.",
    details: [
      "12+ years of experience across Tanzania, China, and the UK.",
      "Expertise: Cost planning, contract administration, feasibility studies.",
      "Project Manager for WEZESHA BINTI project funded by Enabel.",
      "Part-time Lecturer at Ardhi University.",
    ],
    icon: GraduationCap,
    featured: true,
  },
];

const directors = [
  {
    id: "mwamaso",
    name: "CEng. Peter John Mwamaso",
    image: "/CEng. Peter John Mwamaso.jpeg",
    role: "Technical Director (Electromechanical Engineer)",
    tag: "Engineering",
    bio: "Registered as Professional and Consulting Engineer by ERB. Over 25 years of experience in Electrical and Mechanical Engineering.",
    details: [
      "132kV single circuit 54.9km overhead transmission line from Malagarasi hydropower to Kidahwe substation in Kigoma region.",
      "20MVA, 220kV/33kV line in line out substation in Ifakara town Kilombero district.",
      "240MW, 11kV/220kV Kinyerezi II combined cycle power project in Dar Es Salaam.",
      "70km, 33kV distribution line in Kilombero district.",
      "Viva towers commercial/residential complex in Dar Es Salaam.",
      "Rehabilitation for the Mtwara port.",
      "BoT Mwanza multifunctional building.",
    ],
    expertise: [
      "Condition survey and design of new electrical systems.",
      "Construction supervision for electrical installations.",
      "Commissioning and decommissioning of installed equipment.",
      "Training of junior staff in offices and on site.",
    ],
    icon: Briefcase,
  },
  {
    id: "kazoba",
    name: "Arch. Dorothea Gervas Kazoba",
    image: "/Arch.Dorothea Gervas.jpg",
    role: "Technical Director (Architectural Technology)",
    tag: "Architecture",
    bio: "Registered as Professional Architectural Technologist by AQRB. Over 7 years of specialised expertise.",
    details: [
      "Projects include: SUA, GPSA, IFAKARA TOWN COUNCIL.",
      "Expertise in condition surveys, BOQ specifications, QA/QC.",
      "Experience spans commercial, residential, educational and civic projects.",
    ],
    icon: Award,
  },
  {
    id: "titus",
    name: "Titus Frank",
    image: "/team-member-6.jpg",
    role: "Quantity Surveyor",
    tag: "Quantity Surveyor",
    bio: "Quantity Surveyor with experience in construction cost management, BOQ preparation, tender evaluation, contract administration, and project supervision.",
    details: [
      "National ID System Expansion Project Phase II (NIDA).",
      "Construction of 5 Dormitories and 25 Wash Facilities in Kigoma Region.",
      "Bandari Tower and One Stop Centre Building Projects (TPA).",
      "Renovation works for ATCL and TBS facilities.",
    ],
    expertise: [
      "BOQ preparation and cost estimation.",
      "Tender evaluation and contract administration.",
      "Interim payment certificates (IPCs).",
      "Cost control, procurement, and site measurement.",
      "Construction supervision and quality assurance.",
    ],
    experienceSpans: [
      "Commercial buildings.",
      "Institutional and government facilities.",
      "Educational infrastructure.",
      "Building renovation and consultancy services.",
    ],
    icon: Star,
  },
  {
    id: "Hamis",
    name: "Hamis Msigitti",
    image: "/in8a0249.jpg.jpeg",
    role: "Electrical Engineer",
    tag: "Engineering",
    bio: "Electrical Engineer with over 5 years experience in building engineering services and industrial machines installation and maintenance.",
    details: [
      "Proposed completion of Construction Works for Multipurpose Hostel at Mwanza, BOT.",
      "Construction of TANESCO Head Office at Ihumwa Dodoma.",
      "Renovation of TANESCO Umeme Park office at Ubungo Dar es salaam.",
      "Provision of Consultancy Services for Construction of NIDA Regional Registration Offices in Tanzania mainland and Zanzibar.",
    ],
    expertise: [
      "Competent in building electrical consultancy works, including coordination of design and site installation activities.",
      "Competent in technical site supervision and contractor coordination, ensuring compliance with design and standards.",
      "Competent in LV electrical distribution design, load estimation, and equipment sizing for industrial and building projects.",
      "Competent in AutoCAD electrical drawings, including layouts, single line diagrams, and consultancy design support.",
      "Competent in industrial electrical maintenance and fault diagnosis, ensuring system reliability and reduced downtime.",
      "Competent in BOQ and technical specification preparation for electrical building services and industrial projects.",
    ],
    icon: Users,
  },
  {
    id: "Michael",
    name: "Michael Millinga",
    image: "/michael.jpeg",
    role: "Mechanical Engineer",
    tag: "Engineering",
    bio: "Mechanical Engineer with over 5 years experience in industrial maintenance and production and Building engineering services (Mechanical, Plumbing and Firefighting systems).",
    details: [
      "Renovation of NSSF Benjamin Mkapa Towers.",
      "Kibondo and Rombo Dormitories Design and Supervision Project.",
      "National ID System Expansion Project Phase II.",
    ],
    expertise: [
      "Design and supervision of HVAC, Plumbing and Firefighting systems.",
      "Cost estimation for mechanical, plumbing and firefighting systems.",
    ],
    icon: Globe,
  },
];

const tagColors: Record<string, string> = {
  Engineering: "bg-blue-50 text-blue-600 border-blue-100",
  Architecture: "bg-purple-50 text-purple-600 border-purple-100",
  Operations: "bg-amber-50 text-amber-600 border-amber-100",
  Technical: "bg-teal-50 text-teal-600 border-teal-100",
  Projects: "bg-green-50 text-green-600 border-green-100",
  QS: "bg-orange-50 text-orange-600 border-orange-100",
};

export function Organization() {
  const { t } = useTranslation();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "Our Team & Leadership - Peakey International Group";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Meet the core leadership and highly specialized technical directors behind Peakey International Group\'s engineering, architectural, and project management excellence.');
    }
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let intervalId: number;

    const startAutoScroll = () => {
      intervalId = window.setInterval(() => {
        if (!container) return;
        
        // Auto-scroll on mobile screen widths (i.e. if layout wraps/overflows)
        const isScrollable = container.scrollWidth > container.clientWidth;
        if (!isScrollable) return;

        const maxScroll = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft >= maxScroll - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Scroll one card width + gap (approx. 85vw of client width + 24px gap)
          const cardWidth = container.clientWidth * 0.85 + 24;
          container.scrollTo({ left: container.scrollLeft + cardWidth, behavior: 'smooth' });
        }
      }, 4000);
    };

    startAutoScroll();

    // Pause on interaction
    const pauseScroll = () => clearInterval(intervalId);
    const resumeScroll = () => {
      clearInterval(intervalId);
      startAutoScroll();
    };

    container.addEventListener('touchstart', pauseScroll, { passive: true });
    container.addEventListener('touchend', resumeScroll, { passive: true });
    container.addEventListener('mouseenter', pauseScroll);
    container.addEventListener('mouseleave', resumeScroll);

    return () => {
      clearInterval(intervalId);
      if (container) {
        container.removeEventListener('touchstart', pauseScroll);
        container.removeEventListener('touchend', resumeScroll);
        container.removeEventListener('mouseenter', pauseScroll);
        container.removeEventListener('mouseleave', resumeScroll);
      }
    };
  }, []);

  return (
    <div className="flex flex-col w-full bg-white relative z-10 min-h-screen">

      {/* ── Hero Banner ── */}
      <div className="relative overflow-hidden bg-slate-950 pb-32 pt-24 sm:pt-32">
        {/* Decorative grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-12">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest group mb-10"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-600/10 border border-red-600/20 rounded-full text-red-400 text-[10px] font-black uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              {t('nav.organization')}
            </div>
            <h1 className="text-4xl sm:text-6xl font-serif font-black text-white tracking-tight leading-tight mb-6">
              The People Behind<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-300">
                Our Excellence
              </span>
            </h1>
            <p className="text-slate-400 font-light max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Meet our core leadership and highly specialised technical directors — the driving force behind Peakey International's global projects.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap justify-center gap-8 mt-12 pt-10 border-t border-slate-800">
              {[
                { value: `${1 + directors.length}`, label: 'Team Members' },
                { value: '25+', label: 'Years Experience' },
                { value: '10+', label: 'Countries' },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-black text-white mb-1">{s.value}</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Content area raised over banner ── */}
      <div className="max-w-[1280px] mx-auto w-full px-6 sm:px-12 -mt-16 pb-28 relative z-10">

        {/* ── Featured Leader ── */}
        {leadership.map((member, idx) => {
          const Icon = member.icon;
          return (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mb-16 rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/20 bg-white border border-slate-100"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Photo */}
                <div className="relative w-full lg:w-[380px] flex-shrink-0">
                  <div className="aspect-[4/5] lg:aspect-auto lg:h-full min-h-[340px] relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-[center_top]"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent lg:bg-gradient-to-r" />
                    {/* Badge */}
                    <div className={`absolute top-5 left-5 flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${member.tagColor} text-white text-[9px] font-black uppercase tracking-widest shadow-lg`}>
                      <Icon className="w-3 h-3" />
                      {member.tag}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-8 sm:p-12 flex flex-col justify-center">
                  <div className="text-[9px] font-black text-slate-400 uppercase tracking-[0.25em] mb-3">Featured Leader</div>
                  <h2 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 leading-tight mb-2">{member.name}</h2>
                  <p className="text-xs font-black text-red-600 uppercase tracking-widest mb-6">{member.role}</p>
                  <p className="text-slate-600 leading-relaxed text-base font-light mb-8">{member.bio}</p>

                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <div className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Professional Highlights</div>
                    <ul className="space-y-3">
                      {member.details.map((d, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                          <ChevronRight className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* ── Section label ── */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-slate-200" />
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.25em] whitespace-nowrap">Technical Directors & Associates</span>
          <div className="flex-1 h-px bg-slate-200" />
        </div>

        {/* ── Team Grid ── */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-8 sm:pb-0 mb-20 snap-x snap-mandatory -mx-6 px-6 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {directors.map((member, idx) => {
            const Icon = member.icon;
            const tagClass = tagColors[member.tag] ?? "bg-slate-50 text-slate-600 border-slate-100";
            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: "easeIn" }}
                className="group relative bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-2xl hover:shadow-slate-300/40 hover:-translate-y-2 transition-all duration-400 overflow-hidden flex flex-col shrink-0 w-[85vw] sm:w-auto snap-center"
              >
                {/* Hover top bar */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-600 to-rose-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Photo */}
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-[center_top] transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />

                  {/* Icon badge */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-red-600 shadow-md">
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Tag */}
                  <div className={`absolute top-4 left-4 px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border ${tagClass}`}>
                    {member.tag}
                  </div>

                  {/* Name overlay at bottom of photo */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-white font-black text-lg leading-tight drop-shadow-lg">{member.name}</h3>
                    <p className="text-red-300 text-[10px] font-bold uppercase tracking-wide mt-1">{member.role}</p>
                  </div>
                </div>

                {/* Bio & Details */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-slate-500 text-sm leading-relaxed font-light mb-5 line-clamp-3">{member.bio}</p>

                  <div className="mt-auto space-y-2.5">
                    {/* Projects */}
                    {member.details.slice(0, 2).map((d, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-600">
                        <ChevronRight className="w-3.5 h-3.5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{d}</span>
                      </div>
                    ))}
                    {/* Expertise (if present) */}
                    {'expertise' in member && Array.isArray((member as any).expertise) && (
                      <div className="pt-2 border-t border-slate-100 space-y-2">
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Expertise</p>
                        {(member as any).expertise.slice(0, 2).map((e: string, i: number) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs text-slate-600">
                            <ChevronRight className="w-3.5 h-3.5 text-orange-500 mt-0.5 flex-shrink-0" />
                            <span className="leading-relaxed">{e}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden text-center bg-gradient-to-br from-slate-950 via-slate-900 to-rose-950/30 rounded-3xl p-10 sm:p-16 border border-rose-500/10 hover:border-rose-500/20 transition-all duration-500"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-red-600/15 to-rose-500/15 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative">
            <div className="inline-block px-4 py-1.5 bg-rose-600/10 border border-rose-600/20 text-rose-400 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
              Work With Us
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">Ready to Start a Project?</h2>
            <p className="text-slate-400 font-light mb-8 max-w-xl mx-auto">
              Our directors bring decades of multi-disciplinary expertise. Let's discuss how we can deliver excellence for your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-black tracking-widest uppercase text-sm rounded-xl shadow-xl shadow-red-900/20 hover:shadow-rose-600/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                Contact Our Team
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-rose-500/15 hover:bg-white/10 hover:border-rose-500/30 text-white font-black tracking-widest uppercase text-sm rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                View Our Projects
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
