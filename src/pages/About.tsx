import { useTranslation } from 'react-i18next';
import { PageHeader } from '../components/PageHeader';
import { motion } from 'motion/react';
import { Target, Lightbulb, HeartHandshake, ShieldCheck, Flame, BarChart } from 'lucide-react';

export function About() {
  const { t } = useTranslation();

  const values = [
    { icon: ShieldCheck, title: "Integrity", desc: "Upholding the highest standards of professionalism." },
    { icon: Flame, title: "Sustainability", desc: "Commitment to environmentally sustainable design and practices." },
    { icon: Lightbulb, title: "Innovation", desc: "Leveraging modern methods and technology." },
    { icon: HeartHandshake, title: "Collaboration", desc: "Engaging stakeholders throughout the lifecycle." },
    { icon: Target, title: "Excellence", desc: "Superior outcomes through meticulous planning." }
  ];

  return (
    <div className="flex flex-col w-full relative z-10 bg-[linear-gradient(to_bottom,theme(colors.slate.50),theme(colors.slate.100)_50%,theme(colors.slate.50))]">
      <PageHeader title={t('nav.about')} subtitle="Discover our vision, mission, and the core competencies that define us." />
      
      <div className="max-w-[1280px] mx-auto w-full px-6 sm:px-12 py-12 border-b border-slate-200/60">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-1.5 bg-red-100 text-red-700 rounded-full text-[10px] font-black uppercase tracking-widest mb-2">Company Overview</div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
              A Multi-Disciplinary Group Delivering <span className="text-red-600">Global Excellence.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed font-light">
              Established in 2012, PEAKEY International has grown from an Electrical Engineering firm into a robust, multi-disciplinary organization driving transformative projects worldwide.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
              Fully registered with the Architects and Quantity Surveyors Registration Board (AQRB) and the Engineers Registration Board (ERB) in Tanzania, our footprint spans ambitious local initiatives and highly specialized international infrastructure.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-red-700 to-red-500 rounded-3xl blur-2xl opacity-30 transform translate-y-8 translate-x-8"></div>
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" 
              alt="Team Strategy" 
              className="relative w-full h-auto aspect-square lg:aspect-[4/3] object-cover rounded-3xl shadow-lg border border-white transition-all duration-500 hover:shadow-2xl hover:shadow-slate-400/50 hover:-translate-y-2"
            />
            
            <div className="absolute -bottom-6 left-4 sm:-bottom-8 sm:-left-8 bg-white p-5 sm:p-6 rounded-2xl shadow-2xl shadow-slate-300/50 border border-slate-200 max-w-[calc(100%-2rem)]">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                  <BarChart className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-black text-slate-900">100%</h4>
                  <p className="text-[9px] sm:text-[10px] uppercase font-bold text-slate-500 tracking-wider">Quality Focused</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission / Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[linear-gradient(135deg,theme(colors.white),theme(colors.slate.50))] rounded-3xl p-10 shadow-lg shadow-slate-300/30 border border-slate-200 relative overflow-hidden group hover:shadow-2xl hover:shadow-slate-400/40 hover:-translate-y-2 transition-all duration-500 font-sans"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Target className="w-32 h-32" />
            </div>
            <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-red-900/20">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-4">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed font-light text-lg">
              To transform the construction and consultancy industry by providing excellent international consulting services characterized by quality, innovation, transparency and adherence to international standards.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-slate-900 rounded-3xl p-10 shadow-lg shadow-slate-900/50 border border-slate-800 relative overflow-hidden group font-sans bg-gradient-to-br from-slate-900 to-slate-800 hover:shadow-2xl hover:shadow-slate-900/80 hover:-translate-y-2 transition-all duration-500"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Flame className="w-32 h-32" />
            </div>
            <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-red-500 mb-8 border border-white/20">
              <Flame className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-black text-white mb-4">Our Mission</h3>
            <ul className="text-slate-300 leading-relaxed space-y-4 font-light">
              <li className="flex gap-3"><span className="text-red-500 text-lg">▪</span> Deliver cost-effective, sustainable, and aesthetically pleasing solutions.</li>
              <li className="flex gap-3"><span className="text-red-500 text-lg">▪</span> Prioritize client interests with efficiency, trust, and responsiveness.</li>
              <li className="flex gap-3"><span className="text-red-500 text-lg">▪</span> Earn stakeholder trust through quality services and value for money.</li>
            </ul>
          </motion.div>
        </div>

        {/* Values Section: Creative Tree Structure */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
            <div className="inline-block px-4 py-1.5 bg-slate-50 text-slate-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-3 border border-slate-200">What Drives Us</div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">Core Values</h2>
            <p className="text-slate-500 font-light max-w-lg mx-auto">The fundamental principles branching out to shape our global operations and deliver excellence.</p>
        </div>
        
        <div className="relative max-w-5xl mx-auto py-4 px-4 sm:px-0">
          {/* Central Trunk / Stem */}
          <div className="absolute top-0 bottom-0 left-[38px] md:left-1/2 w-1.5 bg-gradient-to-b from-slate-100 via-red-200 to-slate-100 rounded-full transform md:-translate-x-1/2 flex flex-col justify-between items-center py-4">
             {/* Decorative flowing particles could be simulated with CSS, keeping it clean */}
          </div>
          
          <div className="space-y-6 md:space-y-4 relative z-10">
            {values.map((v, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                 className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
               >
                 {/* Spacer for alternating layout */}
                 <div className="hidden md:block flex-1"></div>
                 
                 {/* Connection Node / Tree Joint */}
                 <div className="absolute left-[39px] md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20 w-16 h-16">
                   <div className={`absolute top-1/2 transform -translate-y-1/2 hidden md:block h-[2px] w-12 lg:w-24 bg-gradient-to-${i % 2 === 0 ? 'l' : 'r'} from-red-300 to-transparent ${i % 2 === 0 ? 'right-full' : 'left-full'}`}></div>
                   <motion.div 
                     whileHover={{ scale: 1.15, rotate: 5 }}
                     className="w-14 h-14 rounded-2xl md:rounded-full bg-white shadow-xl shadow-red-900/20 border-[3px] border-red-500 flex items-center justify-center relative group cursor-pointer z-10 overflow-hidden"
                   >
                     <div className="absolute inset-0 bg-red-50 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                     <v.icon className="w-6 h-6 text-red-600 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                     {/* Gentle pulse */}
                     <div className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-20 duration-[3s]"></div>
                   </motion.div>
                 </div>

                 {/* Branch Content Card */}
                 <div className={`flex-1 w-full pl-24 md:pl-0 ${i % 2 === 0 ? 'md:pr-12 md:text-right lg:pr-24' : 'md:pl-12 md:text-left lg:pl-24'}`}>
                   <motion.div
                     whileHover={{ y: -5, scale: 1.02 }}
                     className={`bg-[linear-gradient(145deg,theme(colors.white),theme(colors.slate.50))] p-8 sm:p-10 rounded-3xl shadow-lg border relative group hover:shadow-2xl transition-all duration-500 ${
                       i % 2 === 0 
                         ? 'shadow-slate-200/40 border-slate-100 hover:shadow-red-900/10 hover:border-red-200 md:rounded-tr-md' 
                         : 'shadow-slate-200/40 border-slate-100 hover:shadow-red-900/10 hover:border-red-200 md:rounded-tl-md'
                     }`}
                   >
                     {/* Subtle branch background graphic */}
                     <div className={`absolute top-0 opacity-[0.03] pointer-events-none transform transition-transform duration-700 group-hover:scale-110 group-hover:opacity-[0.05] ${i % 2 === 0 ? 'left-4 rotate-[-15deg]' : 'right-4 rotate-[15deg]'}`}>
                       <v.icon className="w-40 h-40" />
                     </div>
                     
                     <div className={`flex flex-col relative z-10 ${i % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                       <span className="text-red-500 font-black text-4xl opacity-20 mb-2 font-serif">0{i + 1}</span>
                       <h4 className="text-2xl font-black text-slate-900 mb-3 drop-shadow-sm">{v.title}</h4>
                       <p className="text-base text-slate-500 font-light leading-relaxed">{v.desc}</p>
                     </div>
                   </motion.div>
                 </div>
               </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
