import { Link, useParams } from "react-router-dom";
import { blogs, faqs } from "../data/site";
import PageHero from "../components/PageHero";
import { ArrowLeft, CheckCircle } from "lucide-react";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogs.find((b) => b.slug === slug) || blogs[0];
  return (
    <>
      <PageHero title={post.title} subtitle={post.excerpt} breadcrumb={[{ name: "Home", to: "/" }, { name: "Blog", to: "/blog" }, { name: post.title }]} />
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/blog" className="text-blue-700 inline-flex items-center gap-2 mb-8 text-sm"><ArrowLeft className="w-4 h-4" /> Back to Blog</Link>
          <div className="text-sm text-slate-500 mb-4">{post.category} · {post.date}</div>
          <article className="prose prose-lg max-w-none">
            <p className="text-slate-700 leading-relaxed">
              {post.excerpt} In this comprehensive guide, we break down everything Indian students need to know about pursuing their international education goals with TrueMark Edu.
            </p>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-3">Key Highlights</h2>
            <ul className="space-y-2 text-slate-700">
              {[
                "NMC and WHO-approved universities only",
                "No donation or capitation fee",
                "Direct admission with minimum eligibility",
                "Indian food and hostel facilities",
                "100% visa support and pre-departure briefing",
                "FMGE / NExT preparation assistance"
              ].map(p => <li key={p} className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" /> {p}</li>)}
            </ul>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-3">Why Students Prefer TrueMark Edu</h2>
            <p className="text-slate-700 leading-relaxed">
              We are one of the most trusted study abroad consultancies in India because we follow a zero-hidden-fee, student-first approach. From the first counseling call to airport pickup at your destination country — we stand with our students at every step.
            </p>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-3">Frequently Asked Questions</h2>
            <div className="space-y-3 mt-4">
              {faqs.map((f, i) => (
                <div key={i} className="p-5 bg-white border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-slate-900">Q: {f.q}</h4>
                  <p className="text-slate-700 mt-2 text-sm">A: {f.a}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
