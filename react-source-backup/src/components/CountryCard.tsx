import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Country } from "../data/site";

const IMG = [
  "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400",
  "https://images.pexels.com/photos/27238168/pexels-photo-27238168.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400",
  "https://images.pexels.com/photos/8197551/pexels-photo-8197551.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400",
  "https://images.pexels.com/photos/37762503/pexels-photo-37762503.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400",
  "https://images.pexels.com/photos/7616700/pexels-photo-7616700.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400",
  "https://images.pexels.com/photos/7972353/pexels-photo-7972353.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400",
  "https://images.pexels.com/photos/3885601/pexels-photo-3885601.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400",
  "https://images.pexels.com/photos/30981181/pexels-photo-30981181.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400"
];

export default function CountryCard({ country, to, index = 0 }: { country: Country; to: string; index?: number }) {
  const image = IMG[index % IMG.length];
  return (
    <Link
      to={to}
      className="group relative block rounded-[2rem] overflow-hidden bg-slate-900 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-up"
      style={{ transitionDelay: `${(index % 4) * 80}ms` }}
    >
      {/* Image with scale on hover */}
      <img
        src={image}
        alt={`MBBS in ${country.name}`}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1500ms] ease-out"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-900/10" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-transparent to-green-900/40" />

      {/* Big white flag + big white title */}
      <div className="relative p-6 sm:p-7 min-h-[360px] flex flex-col">
        <div className="flex items-start justify-between">
          <div className="text-6xl sm:text-7xl drop-shadow-2xl">{country.flag}</div>
          <span className="inline-flex items-center gap-1 bg-white text-blue-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-xl">
            {country.duration}
          </span>
        </div>

        <div className="mt-auto">
          <div className="inline-block text-[10px] sm:text-xs tracking-[0.2em] font-extrabold text-green-300 uppercase mb-2">
            MBBS Abroad
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-[1.1] drop-shadow-lg">
            MBBS in {country.name}
          </h3>
          <p className="mt-2 text-sm sm:text-base text-white/90 leading-snug max-w-sm drop-shadow">
            {country.tagline}
          </p>

          <div className="mt-5 grid grid-cols-2 gap-2 max-w-sm">
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl px-3 py-2">
              <div className="text-[10px] uppercase tracking-wider text-white/70">Total Fees</div>
              <div className="text-sm font-extrabold text-white">{country.fees}</div>
            </div>
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl px-3 py-2">
              <div className="text-[10px] uppercase tracking-wider text-white/70">Intakes</div>
              <div className="text-sm font-extrabold text-white truncate">{country.intakes.join(", ")}</div>
            </div>
          </div>

          <div className="mt-6 inline-flex items-center gap-2 bg-white text-slate-900 font-bold text-sm px-5 py-3 rounded-full shadow-xl group-hover:bg-green-400 group-hover:text-slate-900 transition-colors">
            Explore
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}
