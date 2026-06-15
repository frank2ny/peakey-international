export function Placeholder({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <div className="flex flex-col w-full bg-white border-b border-slate-200">
      <div className="relative max-w-[1280px] mx-auto px-6 sm:px-12 pt-24 pb-8 w-full">
        <div className="text-center">
          <div className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 border border-red-100">
            Showcase
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-slate-900 tracking-tight leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-slate-500 mt-4 font-light max-w-2xl mx-auto text-base sm:text-lg">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto w-full px-6 sm:px-12 pb-24 text-center text-slate-500 text-lg font-light">
        <p>More content and insights for this section are coming soon in our next major global update.</p>
      </div>
    </div>
  );
}
