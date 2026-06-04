import { useParams, Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import ContactForm from "../components/ContactForm";
import { CheckCircle, ArrowLeft } from "lucide-react";

const programData: Record<string, { title: string; subtitle: string; duration: string; fees: string; intakes: string[]; highlights: string[]; universities: string[]; eligibility: string[]; process: string[]; }> = {
  "mba-in-dubai": {
    title: "MBA in Dubai / UAE",
    subtitle: "One-year international MBA with paid internships, scholarships & 2-year post-study work visa.",
    duration: "12 – 24 Months",
    fees: "₹ 12 – 25 Lacs",
    intakes: ["January", "May", "September"],
    highlights: ["IELTS optional in many universities", "Average salary AED 15,000+/month", "2-year post-study work visa", "UAE Golden Visa pathway", "Paid internships during MBA"],
    universities: ["SP Jain School of Global Management", "American University of Sharjah", "University of Wollongong Dubai", "Middlesex University Dubai", "Hult International Business School", "INSEAD Abu Dhabi"],
    eligibility: ["Graduation in any discipline with 50%+", "2-3 years work experience preferred", "IELTS 6.0 / TOEFL 80", "GMAT / GRE preferred (optional for some)"],
    process: ["Profile assessment & shortlist", "SOP / LOR / Essays", "Application submission", "Interview prep", "Offer letter & scholarship", "Visa processing", "Departure"]
  },
  "germany": {
    title: "Study in Germany",
    subtitle: "Free public universities, low cost of living, post-study job seeker visa & PR pathway.",
    duration: "2 Years (PG)",
    fees: "₹ 0 – 8 Lacs",
    intakes: ["Winter (October)", "Summer (April)"],
    highlights: ["Tuition-free public universities", "Blocked account € 11,208/year", "18 months job seeker visa", "Fast-track PR after graduation", "English and German programs"],
    universities: ["TU Munich", "Heidelberg University", "LMU Munich", "RWTH Aachen", "TU Berlin", "University of Stuttgart"],
    eligibility: ["Bachelor's with 70%+", "IELTS 6.5 / TOEFL 90", "GRE / GATE for M.Tech", "German language A1-B1 recommended"],
    process: ["Course shortlisting", "APS / document evaluation", "University application", "Blocked account & visa", "Departure"]
  },
  "canada": {
    title: "Study in Canada",
    subtitle: "PGWP work permit, express entry PR pathway & world-class universities.",
    duration: "1 – 2 Years",
    fees: "₹ 15 – 30 Lacs / year",
    intakes: ["Fall (September)", "Winter (January)", "Summer (May)"],
    highlights: ["Post-Graduation Work Permit (PGWP)", "Express Entry PR pathway", "IELTS 6.5 acceptable", "Affordable provinces like Manitoba"],
    universities: ["University of Toronto", "UBC Vancouver", "McGill University", "University of Waterloo", "York University"],
    eligibility: ["Bachelor's with 70%+", "IELTS 6.5 / TOEFL 90", "GMAT 550+ for MBA", "Sufficient GIC & funds"],
    process: ["Profile eval", "Shortlist & apply", "Offer letter", "GIC + loan", "Student visa (SDS)", "Departure"]
  },
  "usa": {
    title: "Study in USA",
    subtitle: "Top global universities, STEM OPT 3-year work authorization & H1B pathway.",
    duration: "1 – 2 Years",
    fees: "₹ 25 – 60 Lacs / year",
    intakes: ["Fall (August)", "Spring (January)"],
    highlights: ["Top 100 QS-ranked universities", "STEM OPT 3-year work visa", "Scholarships & assistantships", "GRE / GMAT waivers for many programs"],
    universities: ["Harvard", "MIT", "Stanford", "UCLA", "University of Chicago", "Columbia", "NYU"],
    eligibility: ["Bachelor's with 70%+", "IELTS 6.5 / TOEFL 90", "GRE 300+ / GMAT 600+", "Bank loan / own funds"],
    process: ["Profile & SOP", "Shortlist", "Apply", "Financial plan", "Visa interview", "Departure"]
  }
};

export default function ProgramPage() {
  const { slug } = useParams();
  const prog = programData[slug || "mba-in-dubai"] || programData["mba-in-dubai"];
  return (
    <>
      <PageHero title={prog.title} subtitle={prog.subtitle} breadcrumb={[{ name: "Home", to: "/" }, { name: "Study Abroad", to: "/study-abroad" }, { name: prog.title }]} />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Link to="/study-abroad" className="text-blue-700 inline-flex items-center gap-2 mb-4 text-sm"><ArrowLeft className="w-4 h-4" /> Back</Link>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-green-50 border border-slate-200">
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">{prog.title}</h1>
              <p className="text-slate-700 mt-3">{prog.subtitle}</p>
              <div className="grid sm:grid-cols-3 gap-3 mt-6">
                <div className="bg-white p-4 rounded-xl"><div className="text-xs text-slate-500">Duration</div><div className="font-bold text-slate-900">{prog.duration}</div></div>
                <div className="bg-white p-4 rounded-xl"><div className="text-xs text-slate-500">Fees</div><div className="font-bold text-slate-900">{prog.fees}</div></div>
                <div className="bg-white p-4 rounded-xl"><div className="text-xs text-slate-500">Intakes</div><div className="font-bold text-slate-900">{prog.intakes.join(", ")}</div></div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900">Highlights</h2>
              <ul className="grid md:grid-cols-2 gap-2 mt-4 text-slate-700">
                {prog.highlights.map(h => <li key={h} className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />{h}</li>)}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900">Top Universities / Business Schools</h2>
              <ul className="mt-4 space-y-2 text-slate-700">
                {prog.universities.map(u => <li key={u} className="flex items-start gap-2 p-3 bg-slate-50 rounded-lg"><CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />{u}</li>)}
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900">Eligibility</h3>
                <ul className="mt-3 space-y-2 text-slate-700 text-sm">{prog.eligibility.map(e => <li key={e} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />{e}</li>)}</ul>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900">Admission Process</h3>
                <ol className="mt-3 space-y-2 text-slate-700 text-sm">{prog.process.map((p, i) => <li key={p} className="flex gap-2"><span className="w-6 h-6 shrink-0 rounded-full bg-gradient-to-br from-blue-700 to-green-600 text-white text-xs font-bold flex items-center justify-center">{i + 1}</span><span>{p}</span></li>)}</ol>
              </div>
            </div>
          </div>
          <aside><ContactForm /></aside>
        </div>
      </section>
    </>
  );
}
