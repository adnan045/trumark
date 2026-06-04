import { useParams, Link } from "react-router-dom";
import { universities, mbbsCountries, europeCountries } from "../data/site";
import PageHero from "../components/PageHero";
import ContactForm from "../components/ContactForm";
import { CheckCircle, GraduationCap, IndianRupee, Clock, Globe, ArrowLeft } from "lucide-react";

export default function UniversityPage() {
  const { slug } = useParams();
  const u = universities.find((x) => x.slug === slug) || universities[0];
  const allC = [...mbbsCountries, ...europeCountries];
  const country = allC.find((c) => c.name === u.country);

  const sections = [
    { title: "Eligibility Criteria", icon: <GraduationCap className="w-6 h-6" />, items: u.eligibility },
    { title: "Hostel Facilities", icon: <Clock className="w-6 h-6" />, items: [u.hostel] },
    { title: "Indian Food Availability", icon: <IndianRupee className="w-6 h-6" />, items: [u.food] },
    { title: "Recognition", icon: <Globe className="w-6 h-6" />, items: u.recognition },
    { title: "FMGE / NExT Eligibility", icon: <CheckCircle className="w-6 h-6" />, items: [u.fmge] },
    { title: "Admission Process", icon: <GraduationCap className="w-6 h-6" />, items: u.process }
  ];

  return (
    <>
      <PageHero
        title={`${u.name}`}
        subtitle={`${u.country} · ${u.qs} · ${u.duration} · ${u.fees}`}
        breadcrumb={[{ name: "Home", to: "/" }, { name: "Universities", to: "/universities" }, { name: u.name }]}
      />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <Link to="/universities" className="text-blue-700 inline-flex items-center gap-2 mb-8 text-sm"><ArrowLeft className="w-4 h-4" /> Back to Universities</Link>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-green-50 border border-slate-200">
                <div className="text-6xl mb-4">{u.flag}</div>
                <h1 className="text-3xl font-extrabold text-slate-900">{u.name}</h1>
                <p className="text-slate-600 mt-2">{u.country} · {u.qs}</p>
                <div className="grid sm:grid-cols-3 gap-3 mt-6">
                  <div className="bg-white p-4 rounded-xl">
                    <div className="text-xs text-slate-500">Fees</div>
                    <div className="font-bold text-slate-900">{u.fees}</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl">
                    <div className="text-xs text-slate-500">Duration</div>
                    <div className="font-bold text-slate-900">{u.duration}</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl">
                    <div className="text-xs text-slate-500">Medium</div>
                    <div className="font-bold text-slate-900">{u.language}</div>
                  </div>
                </div>
              </div>

              {sections.map((s) => (
                <div key={s.title} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-green-50 text-green-700 rounded-xl">{s.icon}</div>
                    <h2 className="text-xl font-bold text-slate-900">{s.title}</h2>
                  </div>
                  <ul className="space-y-2 text-slate-700">
                    {s.items.map((it, i) => <li key={i} className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" /> {it}</li>)}
                  </ul>
                </div>
              ))}

              {country && (
                <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-700 to-green-600 text-white">
                  <h3 className="text-2xl font-bold">Learn more about MBBS in {country.name}</h3>
                  <p className="mt-2 text-white/90">{country.tagline}</p>
                  <Link to={`/mbbs-abroad/${country.slug}`} className="mt-4 inline-flex items-center gap-2 bg-white text-blue-800 font-semibold px-5 py-2.5 rounded-full hover:shadow-xl transition">View Country Page →</Link>
                </div>
              )}
            </div>
            <aside>
              <ContactForm />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
