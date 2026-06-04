import PageHero from "../components/PageHero";
import { blogs } from "../data/site";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <>
      <PageHero title="Blog & Articles" subtitle="Latest articles, guides and updates on MBBS abroad, European admissions, IMAT, FMGE and international education." breadcrumb={[{ name: "Home", to: "/" }, { name: "Blog" }]} />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((b) => (
            <Link to={`/blog/${b.slug}`} key={b.slug} className="group bg-white rounded-2xl border border-slate-200 hover:shadow-xl transition overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-700 to-green-600 flex items-center justify-center text-white text-5xl">📚</div>
              <div className="p-6">
                <div className="text-xs text-green-700 font-semibold">{b.category} · {b.date}</div>
                <h3 className="text-lg font-bold text-slate-900 mt-2 group-hover:text-blue-700 transition">{b.title}</h3>
                <p className="text-sm text-slate-600 mt-2">{b.excerpt}</p>
                <div className="mt-4 text-blue-700 font-semibold text-sm">Read Article →</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
