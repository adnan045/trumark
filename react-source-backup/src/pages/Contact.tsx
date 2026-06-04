import PageHero from "../components/PageHero";
import ContactForm from "../components/ContactForm";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <>
      <PageHero title="Contact TrueMark Edu" subtitle="Get in touch with our expert counselors. We're happy to help you with any questions about MBBS abroad, Europe admissions, visa and coaching." breadcrumb={[{ name: "Home", to: "/" }, { name: "Contact" }]} />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            {[
              { icon: <MapPin className="w-6 h-6" />, title: "Office Address", lines: ["C95, Sector 2, Noida,", "Uttar Pradesh 201301, India"] },
              { icon: <Phone className="w-6 h-6" />, title: "Call / WhatsApp", lines: ["Anandita Jitt: +91 82872 16902", "Haidar Ali: +91 99996 06211"] },
              { icon: <Mail className="w-6 h-6" />, title: "Email", lines: ["contact@truemarkedu.com", "admissions@truemarkedu.com"] },
              { icon: <Clock className="w-6 h-6" />, title: "Working Hours", lines: ["Mon - Sat: 10:00 AM - 7:00 PM", "Sunday: By Appointment"] }
            ].map(c => (
              <div key={c.title} className="p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition">
                <div className="flex gap-4">
                  <div className="inline-flex p-3 bg-green-50 text-green-700 rounded-xl shrink-0">{c.icon}</div>
                  <div>
                    <h4 className="font-bold text-slate-900">{c.title}</h4>
                    {c.lines.map((l, i) => <p key={i} className="text-sm text-slate-600">{l}</p>)}
                  </div>
                </div>
              </div>
            ))}
            <a href="https://wa.me/918287216902" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-6 rounded-2xl bg-green-600 text-white hover:bg-green-700 transition">
              <MessageCircle className="w-6 h-6" />
              <div>
                <div className="font-bold">Chat with us on WhatsApp</div>
                <div className="text-sm opacity-90">Quick replies, 100% free counseling</div>
              </div>
            </a>
          </div>
          <div className="lg:col-span-2">
            <ContactForm />
            <div className="mt-6 rounded-2xl overflow-hidden border border-slate-200 h-80">
              <iframe
                title="TrueMark Edu Office Map"
                src="https://www.google.com/maps?q=C95,+Sector+2,+Noida,+201301&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
