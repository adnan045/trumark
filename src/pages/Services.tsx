import PageHero from "../components/PageHero";
import { services } from "../data/site";
import { GraduationCap, Globe2, Award, FileCheck, BookOpen, Briefcase, Plane, IndianRupee, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const iconMap: Record<string, React.ReactElement> = {
  "stethoscope": <GraduationCap className="w-8 h-8" />,
  "globe": <Globe2 className="w-8 h-8" />,
  "file-check": <FileCheck className="w-8 h-8" />,
  "book-open": <BookOpen className="w-8 h-8" />,
  "graduation-cap": <GraduationCap className="w-8 h-8" />,
  "pen-tool": <BookOpen className="w-8 h-8" />,
  "award": <Award className="w-8 h-8" />,
  "briefcase": <Briefcase className="w-8 h-8" />,
  "map": <Globe2 className="w-8 h-8" />,
  "home": <Award className="w-8 h-8" />,
  "plane": <Plane className="w-8 h-8" />,
  "wallet": <IndianRupee className="w-8 h-8" />
};

export default function Services() {
  return (
    <>
      <PageHero title="Our Services" subtitle="End-to-end services from country selection, university admission, visa processing, coaching, scholarships to departure." breadcrumb={[{ name: "Home", to: "/" }, { name: "Services" }]} />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-xl hover:border-green-300 transition">
                <div className="inline-flex p-3 bg-green-50 text-green-700 rounded-xl">{iconMap[s.icon] || <GraduationCap className="w-8 h-8" />}</div>
                <h3 className="text-lg font-bold text-slate-900 mt-4">{s.title}</h3>
                <p className="text-slate-600 text-sm mt-2">{s.desc}</p>
                <Link to="/contact" className="mt-4 inline-flex items-center gap-1 text-sm text-blue-700 font-semibold hover:gap-2 transition-all">Know More <ArrowRight className="w-4 h-4" /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Why Choose TrueMark Edu?</h2>
            <p className="text-slate-600 mt-4">We bring a student-first approach with complete transparency. No donations, no hidden fees, only honest guidance and direct university admissions.</p>
            <ul className="mt-6 space-y-3 text-slate-700">
              {["Free 1-on-1 counseling session", "Direct partnerships with 50+ universities", "End-to-end documentation support", "IELTS / PTE / OET / NExT coaching", "Loan & scholarship assistance", "Pre-departure & on-ground support"].map(p => (
                <li key={p} className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" /> {p}</li>
              ))}
            </ul>
          </div>
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-lg">
            <h3 className="text-xl font-bold text-slate-900">Simple 6-Step Process</h3>
            <ol className="mt-6 space-y-4">
              {[
                "Free Counseling & Profile Assessment",
                "Shortlist Country & Universities",
                "Application Submission & Offer Letter",
                "Documentation, Loan & Scholarship",
                "Visa Filing & Interview Prep",
                "Pre-departure & Airport Pickup"
              ].map((s, i) => (
                <li key={s} className="flex gap-3">
                  <span className="w-9 h-9 shrink-0 rounded-full bg-gradient-to-br from-blue-700 to-green-600 text-white font-bold flex items-center justify-center">{i + 1}</span>
                  <span className="text-slate-700 pt-1">{s}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
