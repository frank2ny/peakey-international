import { useTranslation } from 'react-i18next';
import { PageHeader } from '../components/PageHeader';
import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Award, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Organization() {
  const { t } = useTranslation();

  const team = [
    {
      id: "mhenga",
      name: "QS. Dr. Mhenga Agneta",
      image: "/qs_mhenga.jpg",
      role: "Deputy Honorary Secretary, TIQS / Reviewer & Expert",
      bio: "QS. Dr. Mhenga Agneta is an Oil and Gas Production Engineer and a Quantity Surveyor holding a PhD and MSc in Oil and Gas Field Development Engineering from China University of Petroleum, China. She also holds a BSc. Degree in Building Economics from Ardhi University.",
      details: [
        "12+ years of experience across Tanzania, China, and the UK.",
        "Expertise: Cost planning, contract administration, feasibility studies.",
        "Project Manager for WEZESHA BINTI project funded by Enabel.",
        "Part-time Lecturer at Ardhi University."
      ],
      icon: GraduationCap
    },
    {
      id: "mwamaso",
      name: "CEng. Peter John Mwamaso",
      image: "/CEng. Peter John Mwamaso.jpeg",
      role: "Technical Director (Services Engineering)",
      bio: "CEng. Peter John Mwamaso is a Technical Director of the Services Engineering Department. Registered as Professional and Consulting Engineer by ERB. He has over 25 years of experience in Electrical and Mechanical Engineering.",
      details: [
        "Specializes in fault diagnostics and oil & gas technology safety.",
        "Electrical design for TOTAL, GAP OIL/GAPCO, MGS oil storage deports.",
        "Design engineer for FCDO (DFID) and World Bank supported water projects."
      ],
      icon: Briefcase
    },
    {
      id: "kazoba",
      name: "Arch. Dorothea Gervas Kazoba",
      image: "/Arch.Dorothea Gervas.jpg",
      role: "Technical Director (Architectural Technology)",
      bio: "Arch. Dorothea Gervas Kazoba is a Technical Director of the Architectural Technology Department. Registered as Professional Architectural Technologist by AQRB. Over 7 years of specialized expertise.",
      details: [
        "Projects include: SUA, GPSA, IFAKARA TOWN COUNCIL.",
        "Expertise in condition surveys, BOQ specifications, QA/QC.",
        "Experience spans commercial, residential, educational, and civic projects."
      ],
      icon: Award
    }
  ];

  return (
    <div className="flex flex-col w-full bg-[linear-gradient(to_bottom,theme(colors.slate.50),theme(colors.slate.100)_50%,theme(colors.slate.50))] relative z-10 overflow-hidden min-h-screen">
      <PageHeader title={t('nav.organization')} subtitle="Meet our core leadership and highly specialized technical directors guiding global projects." />

      <div className="max-w-[1280px] mx-auto w-full px-6 sm:px-12 pb-24">

        {/* Back Link */}
        <div className="mb-10 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-red-600 transition-colors text-xs font-black uppercase tracking-widest group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          {/* Team Count Badge */}
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">{team.length} Senior Directors</span>
          </div>
        </div>

        <div className="flex flex-col gap-16 lg:gap-24 mb-24">
          {team.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative overflow-hidden group flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-start bg-[linear-gradient(145deg,theme(colors.white),theme(colors.slate.50))] p-6 sm:p-10 rounded-3xl shadow-lg shadow-slate-300/30 border border-slate-200 hover:shadow-2xl hover:shadow-slate-400/40 transition-all duration-500 hover:-translate-y-2`}
            >
              {/* Accent top-bar for hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-700 via-red-500 to-red-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className={`absolute ${idx % 2 !== 0 ? '-left-12' : '-right-12'} top-8 z-10 transform ${idx % 2 !== 0 ? '-rotate-45' : 'rotate-45'} bg-gradient-to-r from-red-700 to-red-500 text-white font-black text-[10px] py-1.5 px-14 shadow-lg shadow-red-900/20 tracking-widest uppercase scale-0 group-hover:scale-100 transition-transform duration-500 origin-center opacity-0 group-hover:opacity-100`}>
                Director
              </div>

              {/* Image & Caption */}
              <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start group/img relative z-20">
                <div className="w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-slate-400/50 mb-6 relative border border-slate-200">
                  <div className="absolute inset-0 bg-slate-900/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-[center_top] transition-transform duration-700 ease-out group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800";
                    }}
                  />
                  <div className="absolute top-4 left-4 z-20 w-10 h-10 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-center text-red-600 shadow-sm">
                    <member.icon className="h-5 w-5" />
                  </div>
                </div>

                <div className={`w-full max-w-sm flex flex-col text-center ${idx % 2 !== 0 ? 'lg:text-right items-center lg:items-end' : 'lg:text-left items-center lg:items-start'}`}>
                  <h3 className="text-2xl font-black text-slate-900 leading-tight">{member.name}</h3>
                  <p className="text-[11px] font-bold text-red-600 mt-2 uppercase tracking-wide leading-relaxed">{member.role}</p>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="w-full lg:w-2/3 flex flex-col py-2 lg:py-6">
                <p className="text-slate-600 leading-relaxed text-lg font-light mb-8 max-w-3xl">
                  {member.bio}
                </p>

                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/50">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 pb-4 border-b border-slate-100">Professional Highlights</h4>
                  <ul className="space-y-4">
                    {member.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-4 text-sm text-slate-700">
                        <span className="text-red-500 mt-1.5 text-[8px]">■</span>
                        <span className="leading-relaxed font-medium">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-white rounded-3xl p-10 sm:p-16 border border-slate-200 shadow-lg"
        >
          <div className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-red-100">
            Work With Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight">Ready to Start a Project?</h2>
          <p className="text-slate-500 font-light mb-8 max-w-xl mx-auto">Our directors bring decades of multi-disciplinary expertise. Let's discuss how we can deliver excellence for your next project.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-red-600 hover:bg-slate-900 text-white font-black tracking-widest uppercase text-sm rounded-xl shadow-xl shadow-red-600/20 hover:shadow-slate-900/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Our Team
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white border-2 border-slate-200 hover:border-red-200 text-slate-700 hover:text-red-600 font-black tracking-widest uppercase text-sm rounded-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              View Our Projects
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
