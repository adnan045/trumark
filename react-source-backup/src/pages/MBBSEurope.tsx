import PageHero from "../components/PageHero";
import { europeCountries, faqs } from "../data/site";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import CountryCard from "../components/CountryCard";

export default function MBBSEurope() {
  return (
    <>
      <PageHero
        title="MBBS in Europe"
        subtitle="Study MBBS in Europe - EU-recognized degrees, public universities with zero tuition in Italy, and high FMGE/NExT passing rates in Czech, Romania & Bulgaria."
        breadcrumb={[{ name: "Home", to: "/" }, { name: "MBBS in Europe" }]}
      />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-10">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-green-50 border border-slate-200">
              <h2 className="text-3xl font-extrabold text-slate-900">Why MBBS in Europe?</h2>
              <p className="text-slate-600 mt-3">European universities rank among the world's best medical schools. Many public universities charge zero tuition. EU degrees are globally recognized and Indian students get excellent FMGE/NExT results.</p>
              <ul className="grid md:grid-cols-2 gap-3 mt-5 text-slate-700">
                {["EU-WHO-NMC recognized degrees", "Zero or low tuition in public universities", "English-medium curriculum", "Top-ranked universities like Charles, Sapienza, Carol Davila", "Schengen countries — travel Europe", "Best FMGE / NExT pass rates"].map(p => (
                  <li key={p} className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" /> {p}</li>
                ))}
              </ul>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {europeCountries.map((c, i) => (
                <CountryCard key={c.slug} country={c} to={`/mbbs-in-europe/${c.slug}`} index={i} />
              ))}
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-800 to-green-700 text-white shadow-xl animate-fade-up">
              <h3 className="text-2xl md:text-3xl font-extrabold">IMAT Exam for Italy — Zero Tuition Fee</h3>
              <p className="mt-3 text-white/90 text-lg">Through the IMAT exam, Indian students can study MBBS in Italian public universities at almost zero tuition. Sapienza Rome, Milan, Bologna, Pavia are top choices.</p>
              <Link to="/mbbs-in-europe/italy" className="mt-5 inline-flex items-center bg-white text-blue-800 font-bold px-6 py-3 rounded-full hover:shadow-xl transition btn-shine">MBBS in Italy <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {faqs.slice(0, 4).map((f, i) => (
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
