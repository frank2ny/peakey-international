import { PageHeader } from '../components/PageHeader';

export function Placeholder({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <div className="flex flex-col w-full bg-white border-b border-slate-100">
      <PageHeader title={title} subtitle={subtitle} />
      <div className="max-w-[1280px] mx-auto w-full px-6 sm:px-12 pb-24 text-center text-slate-500 text-lg font-light">
        <p>More content and insights for this section are coming soon in our next major global update.</p>
      </div>
    </div>
  );
}
