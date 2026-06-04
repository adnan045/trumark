import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { CheckCircle, ArrowRight } from "lucide-react";
import ContactForm from "../components/ContactForm";

const programs = [
  { slug: "mba-in-dubai", title: "MBA in Dubai / UAE", tagline: "1-year MBA with paid internships, 2-year post-study visa & PR pathway", fees: "₹ 12 – 25 Lacs", duration: "12 – 24 Months" },
  { slug: "germany", title: "Study in Germany", tagline: "Free public education with low cost of living & excellent job opportunities", fees: "₹ 0 – 8 Lacs", duration: "2 Years (PG)" },
  { slug: "canada", title: "Study in Canada", tagline: "PGWP pathway, permanent residency & world-class universities", fees: "₹ 15 – 30 Lacs", duration: "1 – 2 Years" },
  { slug: "usa", title: "Study in USA", tagline: "Top-ranked universities, STEM programs & post-study OPT work authorization", fees: "₹ 25 – 60 Lacs", duration: "1 – 2 Years" }
];

export default function StudyAbroad() {
  return (
    <>
      <PageHero title="Study Abroad Programs" subtitle="MBA in Dubai, Germany, Canada, USA, UK, Australia & more — with scholarships, admissions, visa & pre-departure support." breadcrumb={[{ name: "Home", to: "/" }, { name: "Study Abroad" }]} />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-green-50 border border-slate-200">
              <h2 className="text-3xl font-extrabold text-slate-900">Programs Beyond MBBS</h2>
              <p className="text-slate-600 mt-3">We help students with Master's, MBA, BBA, Engineering, Data Science, Public Health, Hotel Management & Law programs across Dubai, Germany, Canada, USA, UK & Australia.</p>
              <ul className="grid md:grid-cols-2 gap-2 mt-5 text-slate-700">
                {["Scholarships up to 100% tuition", "Admission in top 100 global universities", "SOP, LOR & profile building", "Loan assistance", "Post-study work visa guidance", "Pre-departure & accommodation support"].map(p => (
                  <li key={p} className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" /> {p}</li>
                ))}
              </ul>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {programs.map((p) => (
                <Link to={`/study-abroad/${p.slug}`} key={p.slug} className="group bg-white rounded-2xl border border-slate-200 hover:shadow-xl transition p-6">
                  <h3 className="text-xl font-bold text-slate-900">{p.title}</h3>
                  <p className="text-sm text-slate-600 mt-2">{p.tagline}</p>
                  <div className="mt-4 text-sm text-slate-500">
                    <div><b className="text-slate-700">Fees:</b> {p.fees}</div>
                    <div><b className="text-slate-700">Duration:</b> {p.duration}</div>
                  </div>
                  <div className="mt-4 text-blue-700 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">Explore <ArrowRight className="w-4 h-4" /></div>
                </Link>
              ))}
            </div>
          </div>
          <aside><ContactForm /></aside>
        </div>
      </section>
    </>
  );
}
