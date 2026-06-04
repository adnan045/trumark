import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronDown, MapPin } from "lucide-react";
import { mbbsCountries, europeCountries } from "../data/site";

export default function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);

  const close = () => {
    setOpen(null);
    setMobile(false);
  };

  const MegaItem = ({ label, groups, to }: { label: string; groups?: { title: string; items: { name: string; to: string }[] }[]; to?: string }) => (
    <div
      className="relative"
      onMouseEnter={() => setOpen(label)}
      onMouseLeave={() => setOpen(null)}
    >
      {to ? (
        <NavLink to={to} className={({isActive}) => `inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-700 ${isActive ? "text-blue-700" : ""}`}>
          {label}
        </NavLink>
      ) : (
        <button className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-700">
          {label} <ChevronDown className="w-3.5 h-3.5" />
        </button>
      )}
      {groups && open === label && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50 min-w-[720px]">
          <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-6 grid grid-cols-2 gap-6">
            {groups.map((g) => (
              <div key={g.title}>
                <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-3">{g.title}</div>
                <ul className="space-y-2">
                  {g.items.map((it) => (
                    <li key={it.to}>
                      <Link to={it.to} onClick={close} className="block text-sm text-slate-700 hover:text-green-700 hover:pl-2 transition-all py-1">
                        {it.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const mbbsGroup = {
    title: "MBBS Abroad - Countries",
    items: [
      { name: "MBBS Abroad Overview", to: "/mbbs-abroad" },
      ...mbbsCountries.map((c) => ({ name: `MBBS in ${c.name}`, to: `/mbbs-abroad/${c.slug}` }))
    ]
  };

  const europeGroup = {
    title: "MBBS in Europe",
    items: [
      { name: "MBBS in Europe Overview", to: "/mbbs-in-europe" },
      ...europeCountries.map((c) => ({ name: `MBBS in ${c.name}`, to: `/mbbs-in-europe/${c.slug}` }))
    ]
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="bg-blue-900 text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 py-1.5 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-4">
            <span className="inline-flex items-center gap-1"><MapPin className="w-3 h-3" /> C95, Sector 2, Noida, 201301</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="tel:+918287216902" className="inline-flex items-center gap-1 hover:text-green-300"><Phone className="w-3 h-3" /> +91 82872 16902</a>
            <a href="mailto:contact@truemarkedu.com" className="inline-flex items-center gap-1 hover:text-green-300"><Mail className="w-3 h-3" /> contact@truemarkedu.com</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.svg" alt="TrueMark Edu" className="h-14 w-auto" />
          </Link>
          <nav className="hidden lg:flex items-center">
            <MegaItem label="Home" to="/" />
            <MegaItem label="MBBS Abroad" groups={[mbbsGroup]} />
            <MegaItem label="MBBS in Europe" groups={[europeGroup]} />
            <MegaItem label="Study Abroad" groups={[{ title: "Study Abroad Programs", items: [{ name: "Study Abroad Overview", to: "/study-abroad" }, { name: "MBA in Dubai / UAE", to: "/study-abroad/mba-in-dubai" }, { name: "Study in Germany", to: "/study-abroad/germany" }, { name: "Study in Canada", to: "/study-abroad/canada" }, { name: "Study in USA", to: "/study-abroad/usa" }] }]} />
            <MegaItem label="Universities" to="/universities" />
            <MegaItem label="Services" to="/services" />
            <MegaItem label="Blog" to="/blog" />
            <MegaItem label="About" to="/about" />
            <MegaItem label="Contact" to="/contact" />
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/contact" className="hidden md:inline-flex items-center bg-gradient-to-r from-blue-700 to-green-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow hover:shadow-lg transition">
              Free Counseling
            </Link>
            <button className="lg:hidden text-slate-700" onClick={() => setMobile((m) => !m)} aria-label="menu">
              {mobile ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      {mobile && (
        <div className="lg:hidden border-t border-slate-200 bg-white max-h-[70vh] overflow-auto">
          <div className="px-4 py-3 space-y-1 text-sm">
            <Link to="/" onClick={close} className="block py-2 text-slate-700 font-medium">Home</Link>
            <div className="py-1">
              <div className="font-semibold text-blue-700 py-1">MBBS Abroad</div>
              <div className="pl-3 space-y-1">
                <Link to="/mbbs-abroad" onClick={close} className="block py-1 text-slate-700">MBBS Abroad Overview</Link>
                {mbbsCountries.map((c) => (
                  <Link key={c.slug} to={`/mbbs-abroad/${c.slug}`} onClick={close} className="block py-1 text-slate-700">MBBS in {c.name}</Link>
                ))}
              </div>
            </div>
            <div className="py-1">
              <div className="font-semibold text-blue-700 py-1">MBBS in Europe</div>
              <div className="pl-3 space-y-1">
                <Link to="/mbbs-in-europe" onClick={close} className="block py-1 text-slate-700">MBBS in Europe Overview</Link>
                {europeCountries.map((c) => (
                  <Link key={c.slug} to={`/mbbs-in-europe/${c.slug}`} onClick={close} className="block py-1 text-slate-700">MBBS in {c.name}</Link>
                ))}
              </div>
            </div>
            <Link to="/study-abroad" onClick={close} className="block py-2 text-slate-700 font-medium">Study Abroad</Link>
            <Link to="/universities" onClick={close} className="block py-2 text-slate-700 font-medium">Universities</Link>
            <Link to="/services" onClick={close} className="block py-2 text-slate-700 font-medium">Services</Link>
            <Link to="/blog" onClick={close} className="block py-2 text-slate-700 font-medium">Blog</Link>
            <Link to="/about" onClick={close} className="block py-2 text-slate-700 font-medium">About</Link>
            <Link to="/contact" onClick={close} className="block py-2 text-slate-700 font-medium">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
