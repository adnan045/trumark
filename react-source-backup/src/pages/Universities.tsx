import PageHero from "../components/PageHero";
import { universities } from "../data/site";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const IMG = [
  "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400",
  "https://images.pexels.com/photos/27238168/pexels-photo-27238168.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=1200",
  "https://images.pexels.com/photos/8197551/pexels-photo-8197551.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=1200",
  "https://images.pexels.com/photos/37762503/pexels-photo-37762503.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=1200",
  "https://images.pexels.com/photos/8197558/pexels-photo-8197558.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=1200",
  "https://images.pexels.com/photos/7972353/pexels-photo-7972353.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=1200"
];

export default function Universities() {
  return (
    <>
      <PageHero title="Top Medical Universities" subtitle="Explore NMC & WHO approved medical universities across 15+ countries. Each university page includes fees, eligibility, hostel, food, recognition and FMGE eligibility." breadcrumb={[{ name: "Home", to: "/" }, { name: "Universities" }]} />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {universities.map((u, i) => (
            <div key={u.slug} className="group bg-white rounded-3xl border border-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all overflow-hidden">
              <div className="relative h-56 overflow-hidden">
                <img src={IMG[i % IMG.length]} alt={u.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute top-4 left-4 bg-white/95 text-slate-900 px-3 py-1.5 rounded-full text-xs font-bold">{u.flag} {u.country}</div>
                <div className="absolute top-4 right-4 bg-yellow-400 text-slate-900 px-3 py-1.5 rounded-full text-xs font-bold">{u.qs}</div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-blue-700 transition">{u.name}</h3>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-slate-50 p-3 rounded-xl">
                    <div className="text-xs text-slate-500">Fees</div>
                    <div className="font-bold text-slate-900 text-sm">{u.fees}</div>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl">
                    <div className="text-xs text-slate-500">Duration</div>
                    <div className="font-bold text-slate-900 text-sm">{u.duration}</div>
                  </div>
                </div>
                <Link to={`/universities/${u.slug}`} className="mt-5 text-blue-700 font-bold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">View University Details <ArrowRight className="w-4 h-4" /></Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
