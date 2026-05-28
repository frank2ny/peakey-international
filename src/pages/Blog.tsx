import { PageHeader } from '../components/PageHeader';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export function Blog() {
  const { t } = useTranslation();

  const posts = [
    {
      title: "Quarterly Review: Expanding Global Impact",
      date: "October 12, 2023",
      category: "Company Updates",
      excerpt: "A deep dive into our latest initiatives expanding across the European and Asian markets..."
    },
    {
      title: "Sustainability Goals 2025 Announced",
      date: "September 28, 2023",
      category: "Sustainability",
      excerpt: "Peakey International pledges to reduce carbon footprint by an additional 20% by 2025 through comprehensive operational changes."
    },
    {
      title: "Partnership with EcoTech Solutions",
      date: "September 15, 2023",
      category: "Partnerships",
      excerpt: "We are thrilled to announce a strategic partnership with EcoTech to bring next-generation infrastructure tech to our clients."
    }
  ];

  return (
    <div className="flex flex-col w-full bg-[linear-gradient(to_bottom,theme(colors.slate.50),theme(colors.slate.100)_50%,theme(colors.slate.50))] relative z-10 border-b border-slate-200">
      <PageHeader title={t('nav.blog')} subtitle="The latest company updates, insights, and stories." />
      
      <div className="mx-auto max-w-[1280px] w-full px-6 sm:px-12 py-12 pb-24">
        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-8 border-l-4 border-red-600 pl-4">Company Updates</h2>
        <div className="space-y-8">
          {posts.map((post, index) => (
            <motion.article 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden group cursor-pointer bg-[linear-gradient(145deg,theme(colors.white),theme(colors.slate.50))] p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-lg shadow-slate-300/30 flex flex-col md:flex-row gap-8 items-start hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-400/40 hover:border-slate-300 transition-all duration-500"
            >
              <div className="absolute -right-10 top-6 z-10 transform rotate-45 bg-gradient-to-r from-red-600 to-red-500 text-white font-black text-[10px] py-1 px-12 shadow-md shadow-red-900/20 tracking-widest uppercase scale-0 group-hover:scale-100 transition-transform duration-500 origin-center opacity-0 group-hover:opacity-100">
                LATEST
              </div>
              <div className="md:w-1/4 relative z-20">
                <p className="text-[10px] text-red-600 font-bold mb-1 uppercase tracking-wider">{post.date}</p>
                <span className="text-xs font-bold text-slate-500 block">{post.category}</span>
              </div>
              <div className="md:w-3/4">
                <h4 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-red-700 leading-tight mb-3 transition-colors">{post.title}</h4>
                <p className="text-base text-slate-500 leading-relaxed font-light mb-6">{post.excerpt}</p>
                <button className="text-xs font-bold text-red-700 flex items-center gap-2 hover:underline uppercase tracking-widest">
                  READ FULL STORY <span className="text-[14px]">→</span>
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
