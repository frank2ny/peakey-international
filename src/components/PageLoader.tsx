import { motion } from 'motion/react';

export function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-white"
      aria-label="Loading page"
    >
      {/* Top progress bar */}
      <motion.div
        className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-red-700 via-red-500 to-red-700"
        initial={{ width: '0%' }}
        animate={{ width: '85%' }}
        transition={{ duration: 0.9, ease: 'easeInOut' }}
      />

      {/* Center content */}
      <div className="flex flex-col items-center gap-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="flex items-center gap-3"
        >
          <img
            src="/pklogo_backup.png"
            alt="Peakey International"
            className="h-12 w-auto drop-shadow-md"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-extrabold tracking-tight text-slate-900">PEAKEY</span>
            <span className="text-red-700 text-[9px] tracking-widest uppercase font-black">International</span>
          </div>
        </motion.div>

        {/* Animated dots */}
        <div className="flex items-center gap-2.5" role="status">
          {[0, 1, 2, 3].map((i) => (
            <motion.span
              key={i}
              className="block rounded-full bg-red-600"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.15,
                ease: 'easeInOut',
              }}
              style={{ width: 8, height: 8 }}
            />
          ))}
        </div>

        {/* Loading label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400"
        >
          Loading
        </motion.p>
      </div>
    </motion.div>
  );
}
