const fs = require("fs");

let code = fs.readFileSync("generate-html.cjs", "utf8");

// 1. REWRITE buildAbout WITH EXPANDED TEXT
const expandedAbout = `function buildAbout(root) {
  const content = \`
    \${getPageHeroHTML("About TrueMark Edu", "India's most trusted study abroad consultancy helping thousands of students achieve their MBBS and international education dreams.", [{ name: "Home", to: \`\${root}index\` }, { name: "About Us" }])}
    
    <section class="py-20 font-sans">
      <div class="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span class="text-green-700 font-semibold text-sm uppercase tracking-wider">Who We Are</span>
          <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">True guidance. Global destinations.</h2>
          <p class="text-slate-600 mt-4 leading-relaxed">
            TrueMark Edu was founded with a singular, student-first vision: to simplify the complex and often confusing journey of pursuing an <b>MBBS abroad</b>. As a highly reputed <b>study abroad consultancy</b>, we have established ourselves as the premier <b>MBBS consultants in India</b>, known for our absolute transparency, ethical standards, and commitment to long-term student success. Over the past decade, we have successfully guided more than 5,000 Indian students to secure admissions in globally renowned, <b>NMC approved medical universities</b> and <b>MCI approved universities</b> across Georgia, Italy, Uzbekistan, Russia, and Central Asia.
          </p>
          <p class="text-slate-600 mt-4 leading-relaxed">
            We understand that pursuing a medical degree overseas is a life-defining decision for both the student and their family. That is why our team of veteran <b>MBBS abroad consultants</b> works tirelessly to provide hand-held guidance at every single stage—from personal career counseling and university selection to visa clearance and on-ground support in the destination country. We follow a strict <b>MBBS without donation</b> policy, ensuring that deserving students can get top-quality medical seats entirely on the basis of their merit and NEET score.
          </p>
          <p class="text-slate-600 mt-4 leading-relaxed">
            Unlike other agencies that disappear after the student boards their flight, TrueMark Edu maintains an active on-ground presence with dedicated Indian coordinators in Tbilisi, Tashkent, Moscow, and Rome. From university registration and comfortable hostel bookings to arranging hygienic Indian mess services and helping with local bank accounts, we ensure that our students feel completely at home while studying abroad.
          </p>
          <ul class="mt-6 grid md:grid-cols-2 gap-3 text-slate-700">
            \${["10+ Years of Experience", "5000+ Students Placed", "15+ Countries Covered", "Direct University Ties", "No Donation Policy", "24x7 Student Support"].map(p => \`
              <li class="flex items-start gap-2"><i data-lucide="check-circle" class="w-5 h-5 text-green-600 shrink-0 mt-0.5"></i> \${p}</li>
            \`).join("")}
          </ul>
        </div>
        <div class="relative">
          <img src="https://images.pexels.com/photos/7616700/pexels-photo-7616700.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400" alt="Students" class="rounded-3xl shadow-2xl w-full h-[500px] object-cover" />
          <div class="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl hidden md:block">
            <div class="text-4xl font-extrabold text-blue-700">5000+</div>
            <div class="text-slate-600 text-sm font-semibold">Students Admitted</div>
          </div>
          <div class="absolute -top-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl hidden md:block">
            <div class="text-4xl font-extrabold text-green-700">100%</div>
            <div class="text-slate-600 text-sm font-semibold">Visa Success</div>
          </div>
        </div>
      </div>
    </section>

    <!-- IN-DEPTH COMPANY DETAILS SECTION -->
    <section class="py-20 bg-slate-50 font-sans border-t border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid lg:grid-cols-12 gap-12 items-center">
          <div class="lg:col-span-5">
            <span class="text-blue-700 font-semibold text-sm uppercase tracking-wider">Our Services & Expertise</span>
            <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 leading-tight">Complete hand-holding from Day 1 to Graduation</h2>
            <p class="text-slate-600 mt-4 leading-relaxed">
              For any <b>NEET qualified MBBS abroad</b> aspirant, navigating international regulations, transcripts, and student visa processes can be overwhelming. TrueMark Edu serves as a complete <b>study abroad consultancy</b>, providing a seamless, stress-free path to <b>direct MBBS admission abroad</b>. 
            </p>
            <p class="text-slate-600 mt-3 leading-relaxed">
              We take full responsibility for securing your official university invitation letter, managing your student visa file with the embassies, translating your transcripts into the local languages, and ensuring you get a confirmed <b>MBBS seat confirmation</b> well before you fly. Our coaching division also provides top-grade <b>FMGE coaching abroad</b> and <b>NExT exam preparation abroad</b>, helping you crack licensing exams in your very first attempt.
            </p>
          </div>
          <div class="lg:col-span-7 grid md:grid-cols-2 gap-6">
            <div class="p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-xl transition">
              <h3 class="text-lg font-bold text-slate-900">NMC Approved Universities Only</h3>
              <p class="text-sm text-slate-600 mt-2 leading-relaxed">We strictly partner with recognized medical schools featured in the WHO World Directory of Medical Schools and fully approved by the National Medical Commission (NMC) and MCI.</p>
            </div>
            <div class="p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-xl transition">
              <h3 class="text-lg font-bold text-slate-900">Zero Capitation Fees</h3>
              <p class="text-sm text-slate-600 mt-2 leading-relaxed">All admissions are based on your 12th PCB marks and NEET qualification. We follow a strict merit-based policy with direct tuition bank transfers to the universities.</p>
            </div>
            <div class="p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-xl transition">
              <h3 class="text-lg font-bold text-slate-900">Transparent Fee Structure</h3>
              <p class="text-sm text-slate-600 mt-2 leading-relaxed">We provide a complete, written cost breakdown on day one. Absolutely no hidden administrative costs, no unexpected visa charges, and zero surprises.</p>
            </div>
            <div class="p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-xl transition">
              <h3 class="text-lg font-bold text-slate-900">On-Ground Student Support</h3>
              <p class="text-sm text-slate-600 mt-2 leading-relaxed">Our local offices in Georgia, Uzbekistan, and Italy provide 24/7 support during your entire 6-year course, helping with visa renewals, medical checkups, and hostels.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 font-sans">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900">Our Mission, Vision & Values</h2>
          <p class="text-slate-600 mt-3 max-w-xl mx-auto text-sm">Our core principles guide us in delivering honest, professional, and world-class educational consulting services.</p>
        </div>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-xl transition">
            <div class="inline-flex p-3 bg-green-50 text-green-700 rounded-xl"><i data-lucide="target" class="w-8 h-8"></i></div>
            <h3 class="text-xl font-bold text-slate-900 mt-4">Our Mission</h3>
            <p class="text-slate-600 mt-3 leading-relaxed">To make high-quality, international medical and professional education accessible, affordable, and completely hassle-free for every deserving Indian student. We build stable, reliable admission pathways with top foreign universities.</p>
          </div>
          <div class="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-xl transition">
            <div class="inline-flex p-3 bg-green-50 text-green-700 rounded-xl"><i data-lucide="heart" class="w-8 h-8"></i></div>
            <h3 class="text-xl font-bold text-slate-900 mt-4">Our Vision</h3>
            <p class="text-slate-600 mt-3 leading-relaxed">To remain India's most trusted overseas education consultancy, transforming thousands of student careers with honest counseling, premium university tie-ups, and unmatched on-ground assistance abroad.</p>
          </div>
          <div class="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-xl transition">
            <div class="inline-flex p-3 bg-green-50 text-green-700 rounded-xl"><i data-lucide="shield-check" class="w-8 h-8"></i></div>
            <h3 class="text-xl font-bold text-slate-900 mt-4">Our Values</h3>
            <p class="text-slate-600 mt-3 leading-relaxed">100% transparency in fee structures, strict zero-donation policy, student-first counseling approach, and a lifelong commitment to supporting our students during their academic journey.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-slate-50 font-sans border-t border-slate-100">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900">Meet The Leadership</h2>
        <p class="text-slate-600 mt-4 max-w-2xl mx-auto">Our founders and counselors bring decades of combined experience in overseas education.</p>
        <div class="grid md:grid-cols-2 gap-8 mt-10 max-w-4xl mx-auto">
          <div class="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-xl transition">
            <div class="w-24 h-24 rounded-full bg-gradient-to-br from-blue-700 to-green-600 text-white flex items-center justify-center text-3xl font-bold mx-auto">A</div>
            <h3 class="text-xl font-bold text-slate-900 mt-4">Anandita Jitt</h3>
            <div class="text-sm text-green-700 font-semibold">Founder & Counselor</div>
            <p class="text-slate-600 text-sm mt-3">10+ years of experience in overseas MBBS admissions. Personally counsels students for Europe & Georgia.</p>
            <a href="tel:+918287216902" class="text-sm text-blue-700 mt-3 inline-block">+91 82872 16902</a>
          </div>
          <div class="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-xl transition">
            <div class="w-24 h-24 rounded-full bg-gradient-to-br from-blue-700 to-green-600 text-white flex items-center justify-center text-3xl font-bold mx-auto">H</div>
            <h3 class="text-xl font-bold text-slate-900 mt-4">Haidar Ali</h3>
            <div class="text-sm text-green-700 font-semibold">Co-founder & Admissions Head</div>
            <p class="text-slate-600 text-sm mt-3">Visa documentation, university partnerships and on-ground student support across Central Asia.</p>
            <a href="tel:+919999606211" class="text-sm text-blue-700 mt-3 inline-block">+91 99996 06211</a>
          </div>
        </div>
      </div>
    </section>
  \`;
  return wrapPage(content, "About Us", "Learn about TrueMark Edu, our leadership team, our values, and why thousands of Indian families trust us.", "about.html", "about");
}`;

// 2. REWRITE buildMBBSAbroad WITH EXPANDED TEXT
const expandedMBBSAbroad = `function buildMBBSAbroad(root) {
  const content = \`
    \${getPageHeroHTML("MBBS Abroad - The Complete Indian Student Guide", "Study MBBS abroad in NMC-approved universities with zero donation. Compare Georgia, Uzbekistan, Kazakhstan, Russia, Kyrgyzstan, St. Lucia & more.", [{ name: "Home", to: \`\${root}index\` }, { name: "MBBS Abroad" }])}
    
    <section class="py-20 font-sans">
      <div class="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2 space-y-10">
          <div>
            <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900">A Comprehensive Guide to Study MBBS Abroad</h2>
            <p class="text-slate-600 mt-4 leading-relaxed">
              Every year, lakhs of Indian medical aspirants sit for the NEET exam with dreams of securing an MBBS seat. However, due to the extreme shortage of government seats and the astronomical fee structures (often crossing ₹80 Lakhs to ₹1 Crore) of private medical colleges in India, thousands of students are left looking for alternatives. This is where choosing to <b>study MBBS abroad</b> becomes the most smart and viable career decision.
            </p>
            <p class="text-slate-600 mt-4 leading-relaxed">
              By opting for <b>MBBS admission abroad</b> through a trusted <b>MBBS abroad consultant</b> like TrueMark Edu, you can gain direct entry into world-class, government-owned medical universities. We help you compare top options where you can complete your entire **MBBS under 25 lakhs**, including your comfortable hostel stay and hygienic Indian food mess. Every university we partner with is listed in the WHO World Directory of Medical Schools and is fully approved by the National Medical Commission (NMC).
            </p>
            <p class="text-slate-600 mt-4 leading-relaxed">
              These global medical schools follow English-medium instruction, eliminating any language barriers. They also offer excellent clinical exposure with high-volume hospital rotations, helping you prepare extensively for licencing exams. TrueMark Edu ensures a completely smooth <b>direct MBBS admission abroad</b> with guaranteed, written <b>MBBS seat confirmation</b> and absolute transparency from day one.
            </p>
          </div>

          <div>
            <h2 class="text-3xl font-extrabold text-slate-900">Top Countries for MBBS Abroad</h2>
            <p class="text-slate-600 mt-3">Explore and compare NMC-approved, budget-friendly destinations for Indian medical students.</p>
          </div>
          <div class="grid md:grid-cols-2 gap-6">
            \${mbbsCountries.map((c, i) => getCountryCardHTML(c, root, i)).join("")}
          </div>

          <div class="p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-green-50 border border-slate-200">
            <h2 class="text-2xl font-bold text-slate-900">Key Benefits of Pursuing MBBS Abroad</h2>
            <ul class="grid md:grid-cols-2 gap-3 mt-4 text-slate-700">
              \${[
                "Total cost starts from ₹ 18 Lakhs only (entire course)",
                "NMC approved medical universities & MCI recognized",
                "Strict MBBS without donation policy — merit-based only",
                "Direct MBBS admission abroad on 12th PCB & NEET",
                "English medium education — no language barriers",
                "Indian food, mess, and separate hostels available",
                "World-class infrastructure, modern clinics & research facilities",
                "Global degree accepted across India, US, UK, and Europe"
              ].map(p => \`
                <li class="flex items-start gap-2"><i data-lucide="check-circle" class="w-5 h-5 text-green-600 shrink-0 mt-0.5"></i> \${p}</li>
              \`).join("")}
            </ul>
          </div>

          <!-- EXTRA HIGH WORDCOUNT COPY BLOCK -->
          <div class="space-y-4">
            <h2 class="text-2xl font-bold text-slate-900">NMC Guidelines for Indian Students Studying Overseas</h2>
            <p class="text-slate-600 leading-relaxed">
              Before enrolling in any foreign medical college, it is absolutely essential to understand the latest National Medical Commission (NMC) guidelines. The NMC requires that any Indian student wishing to practice medicine back home must graduate from a medical school where the entire course is taught in the <b>English medium</b>, has a duration of at least 54 months (4.5 years), followed by a mandatory 12-month internship in the same university.
            </p>
            <p class="text-slate-600 leading-relaxed">
              At TrueMark Edu, we ensure that every single university we recommend is 100% compliant with these guidelines. This gives you complete peace of mind that your medical degree will be fully recognized in India, making you eligible for the NExT/FMGE screening examinations. Our expert team also offers specialized <b>FMGE coaching abroad</b> and <b>NExT exam preparation abroad</b> resources, ensuring you are fully prepared to pass licensing tests and start practicing medicine in India.
            </p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-slate-900">Student Reviews</h2>
            <div class="grid md:grid-cols-2 gap-4 mt-5">
              \${testimonials.slice(0, 4).map((t, i) => \`
                <div class="p-5 bg-white border border-slate-200 rounded-2xl">
                  <div class="text-yellow-400">
                    <i data-lucide="star" class="w-4 h-4 fill-current inline"></i>
                    <i data-lucide="star" class="w-4 h-4 fill-current inline"></i>
                    <i data-lucide="star" class="w-4 h-4 fill-current inline"></i>
                    <i data-lucide="star" class="w-4 h-4 fill-current inline"></i>
                    <i data-lucide="star" class="w-4 h-4 fill-current inline"></i>
                  </div>
                  <p class="text-slate-700 mt-2 text-sm italic">"\${t.text}"</p>
                  <div class="mt-3 text-sm font-bold text-slate-900">\${t.name}</div>
                  <div class="text-xs text-slate-500">\${t.role}</div>
                </div>
              \`).join("")}
            </div>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <div class="space-y-3">
              \${faqs.map((f, i) => \`
                <div class="p-5 bg-white border border-slate-200 rounded-2xl">
                  <h4 class="font-bold text-slate-900">\${f.q}</h4>
                  <p class="text-slate-700 mt-2 text-sm">\${f.a}</p>
                </div>
              \`).join("")}
            </div>
          </div>
        </div>
        <aside>\${getContactFormHTML()}</aside>
      </div>
    </section>
  \`;
  return wrapPage(content, "MBBS Abroad Guide", "NMC approved medical degrees in Georgia, Central Asia, Russia and the Caribbean.", "mbbs-abroad.html", "mbbs-abroad");
}`;

// 3. REWRITE buildMBBSEurope WITH EXPANDED TEXT
const expandedMBBSEurope = `function buildMBBSEurope(root) {
  const content = \`
    \${getPageHeroHTML("MBBS in Europe", "Study MBBS in Europe - EU-recognized degrees, public universities with zero tuition in Italy, and high FMGE/NExT passing rates in Czech, Romania & Bulgaria.", [{ name: "Home", to: \`\${root}index\` }, { name: "MBBS in Europe" }])}
    
    <section class="py-20 font-sans">
      <div class="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2 space-y-10">
          <div class="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-green-50 border border-slate-200">
            <h2 class="text-3xl font-extrabold text-slate-900">Why Pursue MBBS in Europe?</h2>
            <p class="text-slate-600 mt-3 leading-relaxed">
              For Indian medical students looking for a truly global career, choosing to study <b>MBBS in Europe for Indian students</b> is the ultimate path. European medical schools rank among the oldest, most prestigious medical academies in the world, featuring advanced research infrastructure, state-of-the-art diagnostics, and highly extensive clinical rotations in top EU teaching hospitals.
            </p>
            <p class="text-slate-600 mt-3 leading-relaxed">
              By selecting <b>MBBS in EU countries</b>, you earn an internationally recognized ECTS degree that allows you to easily practice medicine across any of the 27 EU member states, as well as clear international licensing tests like USMLE (USA), PLAB (UK), or NExT (India). Furthermore, studying in a country that is part of the <b>MBBS in Schengen</b> zone means you can travel across Europe visa-free, gaining immense global exposure.
            </p>
            <ul class="grid md:grid-cols-2 gap-3 mt-5 text-slate-700">
              \${["Globally recognized EU degrees", "Zero or extremely low tuition in public universities", "Full English-medium medical curriculum", "Top-ranked schools like Ostrava University, Carol Davila, Warsaw", "Schengen zone travel benefits", "Outstanding FMGE / NExT screening pass rates"].map(p => \`
                <li class="flex items-start gap-2"><i data-lucide="check-circle" class="w-5 h-5 text-green-600 shrink-0 mt-0.5"></i> \${p}</li>
              \`).join("")}
            </ul>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            \${europeCountries.map((c, i) => getCountryCardHTML(c, root, i)).join("")}
          </div>

          <!-- MASSIVE IN-DEPTH EUROPE DETAILS SECTION -->
          <div class="space-y-4">
            <h3 class="text-2xl font-bold text-slate-900">MBBS in Italy & The IMAT Exam Pathway</h3>
            <p class="text-slate-600 leading-relaxed">
              Italy stands out as one of the most incredible destinations for medical education. By clearing the **IMAT (International Medical Admission Test)**, Indian students can study <b>MBBS in Italy</b> at prestigious public universities with <b>almost zero tuition fee</b> (or low annual fees of ₹1 to 3 Lakhs based on family income). 
            </p>
            <p class="text-slate-600 leading-relaxed">
              These universities, such as Sapienza University of Rome, are world leaders in medical research and clinical oncology. TrueMark Edu is India's pioneer <b>MBBS abroad consultant</b> for Italy admissions, providing top-class IMAT preparation resources, document apostille, Declaration of Value (DoV) clearance, and 100% visa processing support.
            </p>
            <h3 class="text-2xl font-bold text-slate-900 mt-6">Study in Ostrava University, Romania, & Poland</h3>
            <p class="text-slate-600 leading-relaxed">
              Apart from Italy, countries like the Czech Republic (featuring the highly respected <b>Ostrava University</b>), Romania (home to the historic <b>Carol Davila University</b>), and Poland (featuring the world-ranked <b>University of Warsaw</b>) offer phenomenal NMC-approved English-medium courses. These universities have historically delivered some of the highest passing ratios in licensing screening tests. With TrueMark Edu, you get direct university ties, absolute clarity in billing, and a guaranteed <b>MBBS seat confirmation</b> process.
            </p>
          </div>

          <div class="p-8 rounded-3xl bg-gradient-to-r from-blue-800 to-green-700 text-white shadow-xl animate-fade-up">
            <h3 class="text-2xl md:text-3xl font-extrabold">IMAT Exam for Italy — Zero Tuition Fee</h3>
            <p class="mt-3 text-white/90 text-lg">Through the IMAT exam, Indian students can study MBBS in Italian public universities at almost zero tuition. Sapienza Rome, Milan, Bologna, Pavia are top choices.</p>
            <a href="\${root}mbbs-in-europe/italy" class="mt-5 inline-flex items-center bg-white text-blue-800 font-bold px-6 py-3 rounded-full hover:shadow-xl transition btn-shine">MBBS in Italy <i data-lucide="arrow-right" class="w-4 h-4 ml-2"></i></a>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <div class="space-y-3">
              \${faqs.slice(0, 4).map((f, i) => \`
                <div class="p-5 bg-white border border-slate-200 rounded-2xl">
                  <h4 class="font-bold text-slate-900">\${f.q}</h4>
                  <p class="text-slate-700 mt-2 text-sm">\${f.a}</p>
                </div>
              \`).join("")}
            </div>
          </div>
        </div>
        <aside>\${getContactFormHTML()}</aside>
      </div>
    </section>
  \`;
  return wrapPage(content, "MBBS in Europe Guide", "EU accredited degree in Italy, Romania, Czech, Slovakia, Bulgaria and Spain.", "mbbs-in-europe.html", "mbbs-in-europe");
}`;

// Replacing the buildAbout, buildMBBSAbroad and buildMBBSEurope in generate-html.cjs
code = code.replace(/function buildAbout\([\s\S]*?^}/m, expandedAbout);
code = code.replace(/function buildMBBSAbroad\([\s\S]*?^}/m, expandedMBBSAbroad);
code = code.replace(/function buildMBBSEurope\([\s\S]*?^}/m, expandedMBBSEurope);

fs.writeFileSync("generate-html.cjs", code);
console.log("Main inner pages content massively expanded with natural human-sounding SEO keywords!");
