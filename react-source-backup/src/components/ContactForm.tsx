import { useState } from "react";

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", country: "MBBS Abroad - Georgia", message: "" });
  const [done, setDone] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return alert("Please provide your name and phone number.");
    const text = `Hi TrueMark Edu! My name is ${form.name}. My number is ${form.phone}. Email: ${form.email}. Interest: ${form.country}. Message: ${form.message}`;
    window.open(`https://wa.me/918287216902?text=${encodeURIComponent(text)}`, "_blank");
    setDone(true);
    setForm({ name: "", phone: "", email: "", country: "MBBS Abroad - Georgia", message: "" });
    setTimeout(() => setDone(false), 5000);
  };

  return (
    <form onSubmit={submit} className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 space-y-4">
      <div>
        <h3 className="text-xl font-bold text-slate-900">Book Free Counseling</h3>
        <p className="text-sm text-slate-500">Get a 1-on-1 session with our expert counselors today.</p>
      </div>
      <input required name="name" value={form.name} onChange={onChange} placeholder="Your Name *" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-600 focus:outline-none text-sm" />
      <input required name="phone" value={form.phone} onChange={onChange} placeholder="Phone / WhatsApp *" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-600 focus:outline-none text-sm" />
      <input type="email" name="email" value={form.email} onChange={onChange} placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-600 focus:outline-none text-sm" />
      <select name="country" value={form.country} onChange={onChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-600 focus:outline-none text-sm bg-white">
        <option>MBBS Abroad - Georgia</option>
        <option>MBBS Abroad - Uzbekistan</option>
        <option>MBBS Abroad - Kazakhstan</option>
        <option>MBBS Abroad - Russia</option>
        <option>MBBS Abroad - Kyrgyzstan</option>
        <option>MBBS Abroad - St. Lucia</option>
        <option>MBBS in Europe - Italy</option>
        <option>MBBS in Europe - Romania</option>
        <option>MBBS in Europe - Czech</option>
        <option>MBBS in Europe - Bulgaria</option>
        <option>MBBS in Europe - Spain</option>
        <option>MBBS in Europe - Slovakia</option>
        <option>MBA in Dubai</option>
        <option>Other Study Abroad</option>
        <option>IELTS / PTE / OET Coaching</option>
        <option>NExT / FMGE Coaching</option>
      </select>
      {!compact && (
        <textarea name="message" value={form.message} onChange={onChange} rows={3} placeholder="Your message (optional)" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-600 focus:outline-none text-sm" />
      )}
      <button type="submit" className="w-full bg-gradient-to-r from-blue-700 to-green-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition">
        Submit &amp; Talk on WhatsApp
      </button>
      {done && <p className="text-sm text-green-600 text-center">Thank you! We will connect with you on WhatsApp shortly.</p>}
      <p className="text-xs text-slate-400 text-center">Your data is 100% secure and never shared.</p>
    </form>
  );
}
