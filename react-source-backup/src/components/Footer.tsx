import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const FacebookIcon = () => (<svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>);
const TwitterIcon = () => (<svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.8a8.5 8.5 0 0 1-2.4.7 4.2 4.2 0 0 0 1.8-2.3 8.4 8.4 0 0 1-2.6 1 4.2 4.2 0 0 0-7.2 3.8 12 12 0 0 1-8.7-4.4 4.2 4.2 0 0 0 1.3 5.6 4.2 4.2 0 0 1-1.9-.5v.1a4.2 4.2 0 0 0 3.4 4.1 4.2 4.2 0 0 1-1.9.1 4.2 4.2 0 0 0 3.9 2.9A8.4 8.4 0 0 1 2 19.5 12 12 0 0 0 8.3 21.4c7.9 0 12.2-6.6 12.2-12.2v-.6A8.7 8.7 0 0 0 22 5.8z"/></svg>);
const InstagramIcon = () => (<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>);
const LinkedinIcon = () => (<svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.86-3.04-1.86 0-2.15 1.45-2.15 2.95v5.66H9.32V9h3.42v1.56h.05c.48-.9 1.64-1.86 3.38-1.86 3.62 0 4.28 2.38 4.28 5.48v6.27zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zm1.78 13.02H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.22 0z"/></svg>);
const YoutubeIcon = () => (<svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg>);

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img 
              src="/logo.png" 
              onError={(e) => {
                e.currentTarget.onerror = null; // prevents infinite loop
                e.currentTarget.src = "/logo.svg";
              }}
              alt="TrueMark Edu" 
              className="h-12 mb-4 brightness-0 invert opacity-90" 
            />
            <p className="text-sm leading-relaxed mb-4">TrueMark Edu is India's most trusted study abroad consultancy helping students secure admissions in top medical universities across Europe, Central Asia & Dubai.</p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-blue-600 transition"><FacebookIcon /></a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-blue-400 transition"><TwitterIcon /></a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-pink-500 transition"><InstagramIcon /></a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-blue-700 transition"><LinkedinIcon /></a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-red-600 transition"><YoutubeIcon /></a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">MBBS Abroad</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/mbbs-abroad/georgia" className="hover:text-green-400">MBBS in Georgia</Link></li>
              <li><Link to="/mbbs-abroad/uzbekistan" className="hover:text-green-400">MBBS in Uzbekistan</Link></li>
              <li><Link to="/mbbs-abroad/kazakhstan" className="hover:text-green-400">MBBS in Kazakhstan</Link></li>
              <li><Link to="/mbbs-abroad/russia" className="hover:text-green-400">MBBS in Russia</Link></li>
              <li><Link to="/mbbs-abroad/kyrgyzstan" className="hover:text-green-400">MBBS in Kyrgyzstan</Link></li>
              <li><Link to="/mbbs-abroad/st-lucia" className="hover:text-green-400">MBBS in St. Lucia</Link></li>
              <li><Link to="/mbbs-in-europe" className="hover:text-green-400">MBBS in Europe</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-green-400">About Us</Link></li>
              <li><Link to="/services" className="hover:text-green-400">Services</Link></li>
              <li><Link to="/universities" className="hover:text-green-400">Universities</Link></li>
              <li><Link to="/blog" className="hover:text-green-400">Blog</Link></li>
              <li><Link to="/study-abroad/mba-in-dubai" className="hover:text-green-400">MBA in Dubai</Link></li>
              <li><Link to="/contact" className="hover:text-green-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2"><MapPin className="w-4 h-4 text-green-400 shrink-0 mt-1" />
                <span>C95, Sector 2, Noida, Uttar Pradesh 201301</span>
              </li>
              <li className="flex gap-2"><Phone className="w-4 h-4 text-green-400 shrink-0" />
                <span><a href="tel:+918287216902" className="hover:text-green-400">+91 82872 16902</a></span>
              </li>
              <li className="flex gap-2"><Phone className="w-4 h-4 text-green-400 shrink-0" />
                <span><a href="tel:+919999606211" className="hover:text-green-400">+91 99996 06211</a></span>
              </li>
              <li className="flex gap-2"><Mail className="w-4 h-4 text-green-400 shrink-0" />
                <span><a href="mailto:contact@truemarkedu.com" className="hover:text-green-400">contact@truemarkedu.com</a></span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap justify-between items-center text-xs text-slate-400">
          <span>© {new Date().getFullYear()} TrueMark Edu. All rights reserved.</span>
          <div className="flex gap-4">
            <Link to="/" className="hover:text-green-400">Privacy Policy</Link>
            <Link to="/" className="hover:text-green-400">Terms of Service</Link>
            <Link to="/contact" className="hover:text-green-400">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
