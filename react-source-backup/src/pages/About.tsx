import PageHero from "../components/PageHero";
import { CheckCircle, Target, Heart, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <>
      <PageHero
        title="About TrueMark Edu"
        subtitle="India's most trusted study abroad consultancy helping thousands of students achieve their MBBS and international education dreams."
        breadcrumb={[{ name: "Home", to: "/" }, { name: "About Us" }]}
      />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-green-700 font-semibold text-sm uppercase tracking-wider">Who We Are</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">True guidance. Global destinations.</h2>
            <p className="text-slate-600 mt-4">Founded with a mission to simplify the complex journey of studying abroad, TrueMark Edu has helped thousands of Indian students secure admissions in top medical universities worldwide. From Georgia to Italy, from Uzbekistan to the Czech Republic — we guide students at every step.</p>
            <p className="text-slate-600 mt-4">We believe in complete transparency, zero donations, and a student-first approach that makes the overseas education journey smooth and stress-free.</p>
            <ul className="mt-6 grid md:grid-cols-2 gap-3 text-slate-700">
              {["10+ Years of Experience", "5000+ Students Placed", "15+ Countries Covered", "Direct University Ties", "No Donation Policy", "24x7 Student Support"].map(p => (
                <li key={p} className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" /> {p}</li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img src="https://images.pexels.com/photos/7616700/pexels-photo-7616700.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400" alt="Students" className="rounded-3xl shadow-2xl w-full h-[500px] object-cover" />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl hidden md:block">
              <div className="text-4xl font-extrabold text-blue-700">5000+</div>
              <div className="text-slate-600 text-sm font-semibold">Students Admitted</div>
            </div>
            <div className="absolute -top-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl hidden md:block">
              <div className="text-4xl font-extrabold text-green-700">100%</div>
              <div className="text-slate-600 text-sm font-semibold">Visa Success</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Our Mission, Vision & Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Target className="w-8 h-8" />, title: "Our Mission", desc: "Make quality medical and international education accessible, affordable and hassle-free for every deserving Indian student." },
              { icon: <Heart className="w-8 h-8" />, title: "Our Vision", desc: "To become India's most trusted study abroad brand, transforming thousands of careers with honest guidance and global opportunities." },
              { icon: <ShieldCheck className="w-8 h-8" />, title: "Our Values", desc: "Transparency, integrity, student-first, zero-donation policy and commitment to long-term student success." }
            ].map(c => (
              <div key={c.title} className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-xl transition">
                <div className="inline-flex p-3 bg-green-50 text-green-700 rounded-xl">{c.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mt-4">{c.title}</h3>
                <p className="text-slate-600 mt-3">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Meet The Leadership</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">Our founders and counselors bring decades of combined experience in overseas education.</p>
          <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-4xl mx-auto">
            {[
              { name: "Anandita Jitt", role: "Founder & Counselor", phone: "+91 82872 16902", bio: "10+ years of experience in overseas MBBS admissions. Personally counsels students for Europe & Georgia." },
              { name: "Haidar Ali", role: "Co-founder & Admissions Head", phone: "+91 99996 06211", bio: "Visa documentation, university partnerships and on-ground student support across Central Asia." }
            ].map((p) => (
              <div key={p.name} className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-xl transition">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-700 to-green-600 text-white flex items-center justify-center text-3xl font-bold mx-auto">{p.name.charAt(0)}</div>
                <h3 className="text-xl font-bold text-slate-900 mt-4">{p.name}</h3>
                <div className="text-sm text-green-700 font-semibold">{p.role}</div>
                <p className="text-slate-600 text-sm mt-3">{p.bio}</p>
                <a href={`tel:${p.phone.replace(/\s/g,"")}`} className="text-sm text-blue-700 mt-3 inline-block">{p.phone}</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
