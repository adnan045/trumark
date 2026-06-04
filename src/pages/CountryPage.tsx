import { useParams, Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import ContactForm from "../components/ContactForm";
import { mbbsCountries, europeCountries, faqs } from "../data/site";
import { CheckCircle, IndianRupee, Globe, GraduationCap, ArrowLeft, ArrowRight, Clock, Award } from "lucide-react";

export default function CountryPage({ variant }: { variant: "mbbs" | "europe" }) {
  const { slug } = useParams();
  const pool = variant === "europe" ? europeCountries : mbbsCountries;
  const country = pool.find((c) => c.slug === slug) || pool[0];

  return (
    <>
      <PageHero
        title={`MBBS in ${country.name}`}
        subtitle={country.tagline}
        breadcrumb={[{ name: "Home", to: "/" }, { name: variant === "europe" ? "MBBS in Europe" : "MBBS Abroad", to: variant === "europe" ? "/mbbs-in-europe" : "/mbbs-abroad" }, { name: country.name }]}
      />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <Link to={variant === "europe" ? "/mbbs-in-europe" : "/mbbs-abroad"} className="text-blue-700 inline-flex items-center gap-2 mb-8 text-sm"><ArrowLeft className="w-4 h-4" /> Back</Link>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-green-50 border border-slate-200">
                <div className="text-6xl">{country.flag}</div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4">MBBS in {country.name}</h1>
                <p className="text-slate-700 mt-3 text-lg">{country.description}</p>
                <div className="grid sm:grid-cols-3 gap-3 mt-6">
                  {[
                    { icon: <Clock className="w-5 h-5" />, t: "Duration", v: country.duration },
                    { icon: <IndianRupee className="w-5 h-5" />, t: "Fees", v: country.fees },
                    { icon: <Globe className="w-5 h-5" />, t: "Medium", v: country.language },
                  ].map((b) => (
                    <div key={b.t} className="bg-white p-4 rounded-xl flex items-start gap-2">
                      <div className="text-green-700">{b.icon}</div>
                      <div>
                        <div className="text-xs text-slate-500">{b.t}</div>
                        <div className="font-bold text-slate-900 text-sm">{b.v}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Highlights</h2>
                <ul className="grid md:grid-cols-2 gap-2 text-slate-700">
                  {country.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" /> {h}</li>
                  ))}
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white border border-slate-200">
                  <div className="inline-flex p-3 bg-blue-50 text-blue-700 rounded-xl"><GraduationCap className="w-6 h-6" /></div>
                  <h3 className="text-lg font-bold text-slate-900 mt-3">Eligibility Criteria</h3>
                  <ul className="mt-3 space-y-2 text-slate-700 text-sm">
                    {country.eligibility.map((e) => <li key={e} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> {e}</li>)}
                  </ul>
                </div>
                <div className="p-6 rounded-2xl bg-white border border-slate-200">
                  <div className="inline-flex p-3 bg-green-50 text-green-700 rounded-xl"><Award className="w-6 h-6" /></div>
                  <h3 className="text-lg font-bold text-slate-900 mt-3">Recognition</h3>
                  <ul className="mt-3 space-y-2 text-slate-700 text-sm">
                    {country.recognition.map((e) => <li key={e} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> {e}</li>)}
                  </ul>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Top Medical Universities in {country.name}</h2>
                <ul className="space-y-2 text-slate-700">
                  {country.topUniversities.map((u) => <li key={u} className="flex items-start gap-2 p-3 bg-slate-50 rounded-lg"><CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" /> {u}</li>)}
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900">Hostel & Accommodation</h3>
                  <p className="text-sm text-slate-700 mt-2">{country.hostel}</p>
                </div>
                <div className="p-6 rounded-2xl bg-white border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900">Indian Food Availability</h3>
                  <p className="text-sm text-slate-700 mt-2">{country.food}</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Admission Process</h2>
                <ol className="space-y-3">
                  {country.process.map((p, i) => (
                    <li key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl">
                      <span className="w-8 h-8 shrink-0 rounded-full bg-gradient-to-br from-blue-700 to-green-600 text-white text-sm font-bold flex items-center justify-center">{i + 1}</span>
                      <span className="text-slate-700 pt-1">{p}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">FAQs - MBBS in {country.name}</h2>
                <div className="space-y-3">
                  {faqs.map((f, i) => (
                    <div key={i} className="p-5 bg-slate-50 rounded-xl">
                      <h4 className="font-bold text-slate-900 text-sm">{f.q}</h4>
                      <p className="text-slate-700 mt-2 text-sm">{f.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-800 to-green-700 text-white">
                <h2 className="text-2xl md:text-3xl font-bold">Ready to apply for MBBS in {country.name}?</h2>
                <p className="mt-3 text-white/90">Talk to our expert counselor today for free 1-on-1 guidance, country comparison and seat confirmation.</p>
                <Link to="/contact" className="mt-5 inline-flex items-center bg-white text-blue-800 font-semibold px-5 py-3 rounded-full hover:shadow-xl transition">Book Free Counseling <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </div>
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
