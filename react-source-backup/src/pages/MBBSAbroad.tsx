import PageHero from "../components/PageHero";
import { mbbsCountries, testimonials, faqs } from "../data/site";
import { CheckCircle, Star } from "lucide-react";
import ContactForm from "../components/ContactForm";
import CountryCard from "../components/CountryCard";

export default function MBBSAbroad() {
  return (
    <>
      <PageHero
        title="MBBS Abroad - The Complete Indian Student Guide"
        subtitle="Study MBBS abroad in NMC-approved universities with zero donation. Compare Georgia, Uzbekistan, Kazakhstan, Russia, Kyrgyzstan, St. Lucia & more."
        breadcrumb={[{ name: "Home", to: "/" }, { name: "MBBS Abroad" }]}
      />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Top Countries for MBBS Abroad</h2>
              <p className="text-slate-600 mt-3">Explore all the NMC-approved, budget-friendly destinations for Indian medical aspirants.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mbbsCountries.map((c, i) => (
                <CountryCard key={c.slug} country={c} to={`/mbbs-abroad/${c.slug}`} index={i} />
              ))}
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-green-50 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900">Why Study MBBS Abroad?</h2>
              <ul className="grid md:grid-cols-2 gap-3 mt-4 text-slate-700">
                {["Total cost starts from ₹ 18 Lakhs only", "NMC & WHO approved universities", "No donation / No capitation fees", "Direct admission on 12th marks & NEET", "English medium education", "Indian food & hostel available", "Modern hospitals & clinical training", "Global degree, worldwide practice options"].map(p => (
                  <li key={p} className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" /> {p}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">Student Reviews</h2>
              <div className="grid md:grid-cols-2 gap-4 mt-5">
                {testimonials.slice(0, 4).map((t, i) => (
                  <div key={i} className="p-5 bg-white border border-slate-200 rounded-2xl">
                    <div className="text-yellow-400"><Star className="inline w-4 h-4" /><Star className="inline w-4 h-4" /><Star className="inline w-4 h-4" /><Star className="inline w-4 h-4" /><Star className="inline w-4 h-4" /></div>
                    <p className="text-slate-700 mt-2 text-sm italic">"{t.text}"</p>
                    <div className="mt-3 text-sm font-bold text-slate-900">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {faqs.map((f, i) => (
                  <div key={i} className="p-5 bg-white border border-slate-200 rounded-2xl">
                    <h4 className="font-bold text-slate-900">{f.q}</h4>
                    <p className="text-slate-700 mt-2 text-sm">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <aside><ContactForm /></aside>
        </div>
      </section>
    </>
  );
}
