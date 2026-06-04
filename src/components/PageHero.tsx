import { useEffect } from "react";

export default function PageHero({ title, subtitle, breadcrumb, image }: { title: string; subtitle?: string; breadcrumb?: { name: string; to?: string }[]; image?: string }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 text-white overflow-hidden">
      {image && (
        <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
      )}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-500/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 text-center">
        {breadcrumb && (
          <div className="text-sm text-white/80 mb-4">
            {breadcrumb.map((b, i) => (
              <span key={i}>
                {b.to ? <a href={b.to} className="hover:underline">{b.name}</a> : <span className="text-white">{b.name}</span>}
                {i < breadcrumb.length - 1 && <span className="mx-2">/</span>}
              </span>
            ))}
          </div>
        )}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">{title}</h1>
        {subtitle && <p className="mt-5 text-lg text-white/90 max-w-3xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}
