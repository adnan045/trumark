import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, GraduationCap, Globe2, Award, FileCheck, BookOpen, Briefcase, Users, Plane, Phone, Star, ShieldCheck, Stethoscope, Landmark, Flame, TrendingUp, Building2 } from "lucide-react";
import { mbbsCountries, europeCountries, services, testimonials, blogs, universities, faqs } from "../data/site";
import ContactForm from "../components/ContactForm";
import CountryCard from "../components/CountryCard";

const IMG = {
  hero: "https://images.pexels.com/photos/32213424/pexels-photo-32213424.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1800",
  campus: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400",
  students: "https://images.pexels.com/photos/7616700/pexels-photo-7616700.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400",
  students2: "https://images.pexels.com/photos/37762503/pexels-photo-37762503.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400",
  airport: "https://images.pexels.com/photos/30981181/pexels-photo-30981181.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400",
  classroom: "https://images.pexels.com/photos/8197551/pexels-photo-8197551.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400",
  classroom2: "https://images.pexels.com/photos/8197558/pexels-photo-8197558.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400",
  dubai: "https://images.pexels.com/photos/30554306/pexels-photo-30554306.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400",
  university: "https://images.pexels.com/photos/27238168/pexels-photo-27238168.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400",
  students3: "https://images.pexels.com/photos/7972353/pexels-photo-7972353.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400",
  departure: "https://images.pexels.com/photos/3885601/pexels-photo-3885601.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400"
};

const featureIcons: Record<string, React.ReactElement> = {
  "stethoscope": <Stethoscope className="w-7 h-7" />,
  "globe": <Globe2 className="w-7 h-7" />,
  "file-check": <FileCheck className="w-7 h-7" />,
  "book-open": <BookOpen className="w-7 h-7" />,
  "graduation-cap": <GraduationCap className="w-7 h-7" />,
  "pen-tool": <BookOpen className="w-7 h-7" />,
  "award": <Award className="w-7 h-7" />,
  "briefcase": <Briefcase className="w-7 h-7" />,
  "map": <Globe2 className="w-7 h-7" />,
  "home": <Landmark className="w-7 h-7" />,
  "plane": <Plane className="w-7 h-7" />,
  "wallet": <GraduationCap className="w-7 h-7" />
};

export default function Home() {
  return (
    <>
      {/* HERO with background image */}
      <section className="relative text-white overflow-hidden min-h-[640px] md:min-h-[720px] flex items-center">
        <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: `url(${IMG.hero})` }} />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-blue-900/80 to-green-900/70" />
        <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28 grid lg:grid-cols-12 gap-10 items-center w-full">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/30 rounded-full px-4 py-1.5 text-sm mb-6">
              <Award className="w-4 h-4 text-green-300" /> India's #1 MBBS Abroad Consultant
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
              Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-yellow-200">MBBS Abroad</span><br />
              Journey Begins Here
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
              Study MBBS in <b>NMC & WHO approved</b> universities across Europe, Georgia, Uzbekistan, Kazakhstan & Russia. <b>Zero donation.</b> Direct admission. 100% visa success.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-shine inline-flex items-center gap-2 bg-white text-blue-900 font-bold px-7 py-3.5 rounded-full hover:shadow-2xl hover:-translate-y-0.5 transition-all animate-pulse-soft">
                Get Free Counseling <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+918287216902" className="btn-shine inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-7 py-3.5 rounded-full transition-all shadow-lg">
                <Phone className="w-4 h-4" /> +91 82872 16902
              </a>
              <a href="https://wa.me/918287216902" className="btn-shine inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white font-bold px-7 py-3.5 rounded-full transition-all">
                💬 WhatsApp Us
              </a>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
              {[{ num: "15+", label: "Countries" }, { num: "5000+", label: "Students Placed" }, { num: "100%", label: "Visa Success" }, { num: "50+", label: "Universities" }].map((s) => (
                <div key={s.label} className="border-l-2 border-green-400 pl-4">
                  <div className="text-3xl md:text-4xl font-extrabold">{s.num}</div>
                  <div className="text-sm text-white/80">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-2 shadow-2xl">
              <ContactForm compact />
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar with icons */}
      <section className="bg-gradient-to-r from-blue-900 to-green-800 text-white animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {[
            { i: <ShieldCheck className="w-6 h-6" />, t: "NMC Approved" },
            { i: <Globe2 className="w-6 h-6" />, t: "WHO Listed" },
            { i: <Flame className="w-6 h-6" />, t: "No Donation" },
            { i: <CheckCircle className="w-6 h-6" />, t: "Direct Admission" },
            { i: <Users className="w-6 h-6" />, t: "Indian Food" },
            { i: <Plane className="w-6 h-6" />, t: "100% Visa" }
          ].map(x => (
            <div key={x.t} className="flex flex-col items-center gap-2">
              <div className="p-2 bg-white/15 rounded-xl">{x.i}</div>
              <div className="font-semibold text-sm">{x.t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* University Partners Marquee */}
      <section className="py-10 bg-white border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-5 text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-slate-500 font-bold">Partner Universities</div>
        </div>
        <div className="relative flex overflow-hidden">
          <div className="flex gap-8 animate-marquee shrink-0">
            {[
              "Carol Davila Bucharest", "Charles University Prague", "Sapienza University Rome", "Semmelweis Budapest",
              "Sofia Medical University", "University of Warsaw", "Tbilisi State Medical", "Kazakh National Medical",
              "Tashkent Medical Academy", "Moscow State Medical", "Comenius University", "University of Barcelona",
              "Aureus University St. Lucia", "Asian Medical Institute"
            ].concat([
              "Carol Davila Bucharest", "Charles University Prague", "Sapienza University Rome", "Semmelweis Budapest",
              "Sofia Medical University", "University of Warsaw", "Tbilisi State Medical", "Kazakh National Medical",
              "Tashkent Medical Academy", "Moscow State Medical", "Comenius University", "University of Barcelona",
              "Aureus University St. Lucia", "Asian Medical Institute"
            ]).map((n, i) => (
              <div key={i} className="shrink-0 flex items-center gap-2 bg-slate-50 border border-slate-200 text-slate-700 font-semibold px-5 py-3 rounded-full text-sm hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition whitespace-nowrap">
                <GraduationCap className="w-4 h-4" /> {n}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Why section split image */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative animate-slide-left">
            <img src={IMG.campus} alt="Medical university campus" className="rounded-3xl shadow-2xl w-full h-[500px] object-cover" />
            <img src={IMG.students} alt="Medical students" className="absolute -bottom-8 -right-8 w-60 h-60 object-cover rounded-3xl shadow-2xl border-4 border-white hidden md:block animate-float" />
            <div className="absolute -top-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl hidden md:block animate-float" style={{ animationDelay: "0.5s" }}>
              <div className="text-4xl font-extrabold text-blue-700">5000+</div>
              <div className="text-slate-600 text-sm font-semibold">Happy Students</div>
            </div>
          </div>
          <div className="animate-slide-right">
            <span className="inline-block bg-green-100 text-green-700 text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full">Why TrueMark Edu</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 leading-tight">
              We make your <span className="text-blue-700">MBBS abroad</span> dream come true — <span className="text-green-700">truly.</span>
            </h2>
            <p className="text-slate-600 mt-5 text-lg leading-relaxed">
              From your first counseling call to airport pickup abroad — TrueMark Edu stands with you at every step. We partner with <b>NMC-approved universities</b> only, ensuring your degree is recognized in India and globally.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { t: "10+ Years of Experience", d: "Trusted by thousands of Indian families across every state." },
                { t: "University Direct Admissions", d: "Official partnerships with 50+ universities — no middlemen." },
                { t: "Zero Hidden Fee", d: "Complete transparency in fees and no capitation or donation." },
                { t: "On-Ground Support Abroad", d: "Indian coordinators in Georgia, Uzbekistan, Russia, Kazakhstan & Europe." }
              ].map((x) => (
                <div key={x.t} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition">
                  <div className="shrink-0 p-2.5 rounded-xl bg-gradient-to-br from-blue-700 to-green-600 text-white">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{x.t}</div>
                    <div className="text-slate-600 text-sm">{x.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MBBS Countries - cards with flag bg images */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full">MBBS Abroad</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4">Popular Destinations</h2>
            <p className="text-slate-600 mt-4 text-lg">NMC approved universities in 15+ countries. Compare fees, eligibility, lifestyle and apply in minutes.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mbbsCountries.map((c, i) => (
              <CountryCard key={c.slug} country={c} to={`/mbbs-abroad/${c.slug}`} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Europe BIG split section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-[2.5rem] overflow-hidden grid lg:grid-cols-2 bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 text-white shadow-2xl">
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <span className="inline-block bg-white/15 backdrop-blur border border-white/30 text-white text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full w-fit">MBBS in Europe</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mt-5 leading-tight">
                EU Degree. <br /> Global Career. <br /><span className="text-green-300">Zero Tuition in Italy.</span>
              </h2>
              <p className="mt-6 text-lg text-white/90 leading-relaxed">
                Study MBBS in Europe's top public and private universities. Charles University Prague, Carol Davila Bucharest, Sapienza Rome, Sofia Medical University & many more — all NMC, WHO & EU recognized.
              </p>
              <ul className="mt-8 grid sm:grid-cols-2 gap-3 text-white/90">
                {["EU & WHO Recognized", "English Medium", "Best FMGE/NExT Results", "Schengen Countries", "Zero / Low Tuition", "Modern Hospitals"].map(p => (
                  <li key={p} className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-300 shrink-0" /> {p}</li>
                ))}
              </ul>
              <Link to="/mbbs-in-europe" className="mt-10 inline-flex items-center gap-2 bg-white text-blue-900 font-bold px-7 py-3.5 rounded-full hover:shadow-2xl transition-all w-fit">
                Explore Europe <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative min-h-[400px] lg:min-h-full">
              <img src={IMG.students2} alt="MBBS in Europe students" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4">
                {europeCountries.slice(0, 4).map(c => (
                  <Link to={`/mbbs-in-europe/${c.slug}`} key={c.slug} className="bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl p-4 hover:bg-white/25 transition">
                    <div className="text-3xl">{c.flag}</div>
                    <div className="font-bold mt-2">{c.name}</div>
                    <div className="text-xs text-white/80">{c.duration}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers / Stats with image background */}
      <section className="relative py-24 text-white">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMG.classroom})` }} />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 to-green-900/90" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold">Trusted By Students From All Over India</h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">Highest success rate, zero complaints, and 24×7 student support — that's what makes TrueMark Edu India's most loved overseas education consultancy.</p>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "5000+", label: "Students Admitted", icon: <Users className="w-8 h-8" /> },
              { num: "15+", label: "Countries", icon: <Globe2 className="w-8 h-8" /> },
              { num: "100%", label: "Visa Success", icon: <Award className="w-8 h-8" /> },
              { num: "50+", label: "University Partners", icon: <Building2 className="w-8 h-8" /> }
            ].map(s => (
              <div key={s.label} className="bg-white/10 border border-white/20 backdrop-blur-md rounded-3xl p-8">
                <div className="inline-flex p-3 bg-white/15 rounded-2xl mb-3">{s.icon}</div>
                <div className="text-5xl font-extrabold text-green-300">{s.num}</div>
                <div className="mt-2 text-sm font-semibold text-white/90">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4">End-to-End Study Abroad Services</h2>
            <p className="text-slate-600 mt-4 text-lg">From profile assessment to airport pickup — we handle everything so you can focus on your future.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 9).map((s, i) => (
              <div key={s.title}
                className="group relative p-8 rounded-3xl bg-white border border-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden animate-fade-up"
                style={{ transitionDelay: `${(i % 3) * 100}ms` }}
              >
                <div className="absolute top-0 right-0 text-[120px] font-extrabold text-slate-100 leading-none group-hover:text-blue-50 group-hover:text-[130px] transition-all">{String(i + 1).padStart(2, "0")}</div>
                <div className="relative">
                  <div className="inline-flex p-4 bg-gradient-to-br from-blue-100 to-green-100 text-blue-700 rounded-2xl group-hover:scale-110 transition-transform shadow-sm">
                    {featureIcons[s.icon] || <GraduationCap className="w-7 h-7" />}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mt-5">{s.title}</h3>
                  <p className="text-slate-600 mt-3 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 animate-fade-up">
            <Link to="/services" className="btn-shine inline-flex items-center gap-2 bg-gradient-to-r from-blue-700 to-green-600 text-white font-bold px-8 py-3.5 rounded-full hover:shadow-2xl transition-all">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Top Universities big section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
            <span className="inline-block bg-green-100 text-green-700 text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full">Top Universities</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4">World-Class Medical Universities</h2>
            <p className="text-slate-600 mt-4 text-lg">NMC & WHO approved universities with proven FMGE/NExT results. Each university page has full fee, eligibility, hostel & admission process.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {universities.map((u, i) => (
              <Link to={`/universities/${u.slug}`} key={u.slug}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-fade-up"
                style={{ transitionDelay: `${(i % 3) * 100}ms` }}
              >
                <div className="relative h-60 overflow-hidden">
                  <img src={[IMG.campus, IMG.university, IMG.classroom, IMG.students2, IMG.classroom2, IMG.students3][i % 6]} alt={u.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent" />
                  <div className="absolute top-4 left-4 bg-white text-slate-900 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                    {u.flag} {u.country}
                  </div>
                  <div className="absolute top-4 right-4 bg-yellow-400 text-slate-900 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                    {u.qs}
                  </div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="text-xl md:text-2xl font-extrabold text-white leading-tight drop-shadow-lg">{u.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-gradient-to-br from-blue-50 to-green-50 p-4 rounded-2xl text-center">
                      <div className="text-[11px] uppercase tracking-wider text-slate-500">Fees</div>
                      <div className="font-extrabold text-slate-900 mt-1">{u.fees}</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-green-50 p-4 rounded-2xl text-center">
                      <div className="text-[11px] uppercase tracking-wider text-slate-500">Duration</div>
                      <div className="font-extrabold text-slate-900 mt-1">{u.duration}</div>
                    </div>
                  </div>
                  <div className="mt-5 flex items-center justify-center gap-2 text-white bg-gradient-to-r from-blue-700 to-green-600 font-bold text-sm py-3 rounded-2xl group-hover:shadow-xl transition-all">
                    View Full Details <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* IMAT / Study in Italy banner with image */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full">IMAT Exam</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 leading-tight">
              Study MBBS in Italy at <span className="text-blue-700">Zero Tuition</span> in Public Universities
            </h2>
            <p className="text-slate-600 mt-5 text-lg leading-relaxed">
              The IMAT exam is your gateway to Italy's world-class public medical universities — Sapienza Rome, University of Milan, Bologna, Pavia & more — with annual tuition as low as ₹ 1-3 Lakhs only. TrueMark Edu provides complete IMAT coaching and guaranteed admission guidance.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[{ n: "₹ 1-3L", l: "Annual Tuition" }, { n: "6 Yrs", l: "Duration" }, { n: "English", l: "Medium" }].map(x => (
                <div key={x.l} className="p-5 bg-slate-50 rounded-2xl text-center">
                  <div className="text-2xl font-extrabold text-green-700">{x.n}</div>
                  <div className="text-sm text-slate-600">{x.l}</div>
                </div>
              ))}
            </div>
            <Link to="/mbbs-in-europe/italy" className="mt-10 inline-flex items-center gap-2 bg-gradient-to-r from-blue-700 to-green-600 text-white font-bold px-7 py-3.5 rounded-full hover:shadow-2xl transition-all">
              MBBS in Italy <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="order-1 lg:order-2 relative">
            <img src={IMG.classroom2} alt="Students in Italy" className="rounded-[2.5rem] shadow-2xl w-full h-[500px] object-cover" />
            <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-2xl p-5 max-w-xs">
              <div className="flex gap-1 text-yellow-400">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}</div>
              <div className="mt-2 text-sm text-slate-700">Got into Sapienza University Rome through TrueMark Edu. The IMAT coaching was life-changing!</div>
              <div className="mt-2 text-xs text-slate-500 font-semibold">— Sneha Reddy, 2024</div>
            </div>
          </div>
        </div>
      </section>

      {/* MBA Dubai with dubai image */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-green-950 text-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <img src={IMG.dubai} alt="Dubai skyline" className="rounded-[2.5rem] shadow-2xl w-full h-[500px] object-cover" />
            <div className="absolute -bottom-6 -right-6 bg-green-500 text-white p-6 rounded-2xl shadow-2xl hidden md:block">
              <div className="text-3xl font-extrabold">AED 15K+</div>
              <div className="text-sm">Avg. Starting Salary</div>
            </div>
          </div>
          <div>
            <span className="inline-block bg-white/10 backdrop-blur border border-white/30 text-white text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full">Study Abroad</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-5 leading-tight">
              MBA in <span className="text-green-300">Dubai / UAE</span><br />With Paid Internship & PR
            </h2>
            <p className="text-white/90 mt-5 text-lg leading-relaxed">
              Study MBA at top business schools in Dubai — SP Jain, American University of Sharjah, University of Wollongong, Middlesex, Hult & INSEAD. 1-Year program. 2-Year post-study work visa. UAE Golden Visa pathway.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {["Top B-Schools", "Paid Internships", "2-Yr Work Visa", "UAE Golden Visa"].map(x => (
                <div key={x} className="flex items-start gap-3 bg-white/10 backdrop-blur p-4 rounded-2xl border border-white/20">
                  <CheckCircle className="w-5 h-5 text-green-300 mt-0.5 shrink-0" />
                  <span className="font-semibold">{x}</span>
                </div>
              ))}
            </div>
            <Link to="/study-abroad/mba-in-dubai" className="mt-10 inline-flex items-center gap-2 bg-white text-blue-900 font-bold px-7 py-3.5 rounded-full hover:shadow-2xl transition-all">
              MBA in Dubai <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full">Student Reviews</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4">Real Stories. Real Success.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i}
                className="relative p-8 rounded-3xl bg-white border border-slate-200 hover:shadow-2xl transition animate-fade-up"
                style={{ transitionDelay: `${(i % 3) * 100}ms` }}
              >
                <div className="text-yellow-400 flex gap-0.5 mb-3">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-slate-700 text-lg leading-relaxed italic">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-3 pt-5 border-t border-slate-100">
                  <img src={[IMG.students, IMG.students2, IMG.students3, IMG.classroom, IMG.classroom2, IMG.departure][i % 6]} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-100" />
                  <div>
                    <div className="font-bold text-slate-900">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process - 6 steps */}
      <section className="relative py-24 text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${IMG.airport})` }} />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-green-900" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
            <span className="inline-block bg-white/15 backdrop-blur border border-white/30 text-white text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full">Admission Process</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4">6 Simple Steps to Your MBBS Abroad</h2>
            <p className="text-white/80 mt-4 text-lg">From counseling to airport pickup — we manage everything in under 60 days.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Free Counseling", d: "1-on-1 session with expert counselor to shortlist country & universities.", icon: <Users className="w-7 h-7" /> },
              { t: "Profile Assessment", d: "Review marks, NEET score & documents. Prepare SOP & LOR.", icon: <FileCheck className="w-7 h-7" /> },
              { t: "University Application", d: "Direct submission to partner universities with priority processing.", icon: <Landmark className="w-7 h-7" /> },
              { t: "Offer Letter", d: "Receive official university offer letter within 15-30 days.", icon: <Award className="w-7 h-7" /> },
              { t: "Visa Processing", d: "Complete loan, visa documentation and interview preparation.", icon: <Globe2 className="w-7 h-7" /> },
              { t: "Departure", d: "Pre-departure briefing, airport pickup & on-ground support abroad.", icon: <Plane className="w-7 h-7" /> }
            ].map((s, i) => (
              <div key={i}
                className="relative p-8 rounded-3xl bg-white hover:shadow-2xl hover:-translate-y-1 transition-all animate-fade-up"
                style={{ transitionDelay: `${(i % 3) * 100}ms` }}
              >
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-700 to-green-600 text-white flex items-center justify-center text-2xl font-extrabold shadow-lg">
                  {i + 1}
                </div>
                <div className="inline-flex p-3 bg-gradient-to-br from-blue-100 to-green-100 text-blue-700 rounded-2xl">{s.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mt-4">{s.t}</h3>
                <p className="text-slate-600 mt-2 text-sm leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition">
                <h4 className="font-bold text-slate-900 text-lg flex items-start gap-3"><span className="text-green-600">Q{String(i + 1).padStart(2, "0")}.</span>{f.q}</h4>
                <p className="text-slate-700 mt-3 pl-8 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog with images */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-14">
            <div>
              <span className="inline-block bg-green-100 text-green-700 text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full">Latest Articles</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4">From Our Blog</h2>
            </div>
            <Link to="/blog" className="inline-flex items-center gap-2 text-blue-700 font-bold">View All <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((b, i) => (
              <Link to={`/blog/${b.slug}`} key={b.slug} className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all">
                <div className="relative h-56 overflow-hidden">
                  <img src={[IMG.campus, IMG.classroom, IMG.dubai, IMG.airport, IMG.university, IMG.students][i % 6]} alt={b.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-white/95 text-slate-900 px-3 py-1.5 rounded-full text-xs font-bold">{b.category}</div>
                </div>
                <div className="p-6">
                  <div className="text-xs text-slate-500">{b.date}</div>
                  <h3 className="text-lg font-bold text-slate-900 mt-2 group-hover:text-blue-700 transition">{b.title}</h3>
                  <p className="text-sm text-slate-600 mt-3">{b.excerpt}</p>
                  <div className="mt-5 text-blue-700 font-bold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">Read Article <ArrowRight className="w-4 h-4" /></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Big CTA with airport image */}
      <section className="relative py-28 text-white overflow-hidden">
        <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: `url(${IMG.departure})` }} />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 to-green-900/90" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <TrendingUp className="w-12 h-12 mx-auto text-green-300" />
          <h2 className="text-4xl md:text-6xl font-extrabold mt-6 leading-tight">
            Ready to Start Your MBBS Abroad Journey?
          </h2>
          <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto">
            Book your free 1-on-1 counseling session today. We'll help you shortlist the best country and university based on your profile, budget & career goals — absolutely free.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-blue-900 font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:-translate-y-1 transition-all text-lg">
              Book Free Counseling <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="https://wa.me/918287216902" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg text-lg">
              💬 WhatsApp Now
            </a>
            <a href="tel:+918287216902" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/30 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full transition-all text-lg">
              <Phone className="w-5 h-5" /> Call +91 82872 16902
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
