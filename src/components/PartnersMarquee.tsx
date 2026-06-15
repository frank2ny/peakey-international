import { useRef } from 'react';
import { motion } from 'motion/react';

const partners = [
  { name: 'CPI International Ltd', logo: '/partners/partner-cpi.jpg', subtitle: 'Corporate Performance Improvement' },
  { name: 'National Examinations Council of Tanzania', logo: '/partners/partner-necta.jpg', subtitle: 'NECTA' },
  { name: 'PT. Multitama Karyatronindo', logo: '/partners/partner-mk.jpg', subtitle: 'Mechanical & Kentunnel Contractor' },
  { name: 'Peace Success Tanzania Ltd', logo: '/partners/partner-peace.jpg', subtitle: 'Tanzania' },
  { name: 'National Identification Authority', logo: '/partners/partner-nida.jpg', subtitle: 'NIDA Tanzania' },
];

// Duplicate the list for a seamless infinite loop
const scrollList = [...partners, ...partners, ...partners];

export function PartnersMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 bg-[linear-gradient(to_bottom,theme(colors.slate.50),theme(colors.white)_50%,theme(colors.slate.50))] relative overflow-hidden border-b border-slate-200">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-400/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-6 sm:px-12 mb-14">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 border border-red-100">
            Trusted Partners
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-slate-900 tracking-tight leading-tight mb-4">
            Our Partners
          </h2>
          <p className="text-slate-500 font-light max-w-xl mx-auto text-base sm:text-lg">
            Collaborating with leading organisations and institutions to deliver exceptional results worldwide.
          </p>
        </motion.div>
      </div>

      {/* Scrolling Marquee Track */}
      <div className="relative w-full overflow-hidden">
        {/* Fade masks left and right */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <div
          ref={trackRef}
          className="flex items-center gap-6 sm:gap-10 animate-marquee w-max hover:[animation-play-state:paused]"
        >
          {scrollList.map((partner, idx) => (
            <div
              key={`${partner.name}-${idx}`}
              className="flex-shrink-0 flex flex-col items-center gap-4 group cursor-default"
            >
              {/* Logo Card */}
              <div className="w-36 sm:w-44 h-24 sm:h-28 bg-white rounded-2xl border border-slate-200/80 shadow-md shadow-slate-200/50 flex items-center justify-center p-4 sm:p-5 group-hover:shadow-xl group-hover:shadow-slate-300/40 group-hover:-translate-y-1.5 group-hover:border-red-200 transition-all duration-400">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              {/* Partner Name */}
              <div className="text-center">
                <p className="text-[10px] font-black text-slate-600 tracking-wide uppercase leading-tight max-w-[140px]">
                  {partner.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="relative max-w-[1280px] mx-auto px-6 sm:px-12 mt-16"
      >
        <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-around gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {[
            { value: '5+', label: 'Institutional Partners' },
            { value: '12+', label: 'Years of Collaboration' },
            { value: '10+', label: 'Countries Served' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center px-6 py-2 sm:py-0 w-full sm:w-auto">
              <span className="text-4xl font-black text-red-600 mb-1">{stat.value}</span>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
