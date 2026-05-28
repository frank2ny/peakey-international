import { motion } from 'motion/react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-12 pt-24 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col border-l-4 border-red-600 pl-6"
      >
        <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg lg:text-xl text-slate-500 max-w-2xl font-light">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
}
