const fs = require("fs");
const path = require("path");

// --- DATA FROM SITE.TS ---
const mbbsCountries = [
  {
    slug: "georgia",
    name: "Georgia",
    flag: "🇬🇪",
    tagline: "Affordable MBBS with European standards",
    duration: "6 Years",
    fees: "₹ 25 – 35 Lacs (Total)",
    language: "English Medium",
    intakes: ["September", "March"],
    topUniversities: ["Tbilisi State Medical University", "Ivane Javakhishvili Tbilisi State University", "David Tvildiani Medical University", "Batumi Shota Rustaveli State University"],
    highlights: ["NMC & WHO Approved", "No Entrance Exam", "Easy Visa Process", "Indian Food Available", "Low Cost of Living"],
    description: "Georgia has become a top destination for Indian students looking to study MBBS abroad at an affordable cost without compromising on quality of education. Universities follow European standards with globally recognized degrees.",
    eligibility: ["NEET Qualified", "50% in PCB (General) / 40% (SC/ST)", "17+ years of age", "English Proficiency - Basic"],
    hostel: "University hostels with 2/3 sharing rooms, attached washrooms, Wi-Fi & laundry. Cost approx ₹ 30,000/month.",
    food: "Indian food, tiffin services and full mess available in and around campus.",
    recognition: ["NMC (National Medical Commission)", "WHO (World Health Organization)", "ECFMG - USA", "GMC - UK"],
    fmge: "Eligible for FMGE / NExT screening test conducted by NMC.",
    process: ["1. Free Counseling", "2. Application Submission", "3. Offer Letter", "4. Invitation Letter", "5. Visa Processing", "6. Departure & Airport Pickup"]
  },
  {
    slug: "uzbekistan",
    name: "Uzbekistan",
    flag: "🇺🇿",
    tagline: "Cheapest MBBS abroad under 20 Lakhs",
    duration: "6 Years",
    fees: "₹ 18 – 22 Lacs (Total)",
    language: "English Medium",
    intakes: ["September", "February"],
    topUniversities: ["Tashkent Medical Academy", "Samarkand State Medical Institute", "Bukhara State Medical Institute", "Fergana Medical Institute"],
    highlights: ["Lowest total fees", "100% NMC approved", "Direct admission", "Safe country", "MCI passing rate high"],
    description: "Uzbekistan is the cheapest MBBS abroad destination with total cost under 20 Lakhs including hostel and food. Universities are government-owned and world-class.",
    eligibility: ["NEET Qualified", "50% in PCB", "Age 17+", "No IELTS required"],
    hostel: "Government hostels with Indian students block, 24/7 security, kitchen.",
    food: "Full Indian mess available in hostel premises. North & South Indian cuisine.",
    recognition: ["NMC Approved", "WHO Listed", "WFME Recognized"],
    fmge: "Fully eligible for FMGE/NExT. High passing ratio among Indian students.",
    process: ["1. Registration", "2. Document verification", "3. University offer", "4. Visa", "5. Fly to Uzbekistan"]
  },
  {
    slug: "kazakhstan",
    name: "Kazakhstan",
    flag: "🇰🇿",
    tagline: "Top-ranked medical universities in Central Asia",
    duration: "5 Years + 1 Year Internship",
    fees: "₹ 22 – 30 Lacs (Total)",
    language: "English Medium",
    intakes: ["September", "March"],
    topUniversities: ["Al-Farabi Kazakh National University", "Kazakh National Medical University", "Karaganda State Medical University", "Astana Medical University"],
    highlights: ["Ranked universities", "Modern infrastructure", "MCI approved", "Indian diaspora", "Affordable"],
    description: "Kazakhstan offers one of the most structured MBBS programs with English-medium education and practical exposure. Degrees are globally accepted.",
    eligibility: ["NEET Qualified", "50% in PCB", "17+ age"],
    hostel: "On-campus modern hostels with single/double rooms.",
    food: "Indian food mess and tiffin services available.",
    recognition: ["NMC", "WHO", "ECFMG"],
    fmge: "Eligible for NExT/FMGE screening.",
    process: ["Counseling → Application → Offer → Visa → Departure"]
  },
  {
    slug: "russia",
    name: "Russia",
    flag: "🇷🇺",
    tagline: "Globally-recognized medical universities with 60+ years of excellence",
    duration: "6 Years",
    fees: "₹ 30 – 45 Lacs (Total)",
    language: "English Medium",
    intakes: ["September", "March"],
    topUniversities: ["Kazan Federal University", "Moscow State Medical University", "Northern State Medical University", "Bashkir State Medical University"],
    highlights: ["Top 100 global medical universities", "Low cost of living", "Indian mess", "Government universities"],
    description: "Russia has been the traditional favorite of Indian medical aspirants. Universities provide world-class medical education with global recognition.",
    eligibility: ["NEET Qualified", "50% in PCB", "17+ years"],
    hostel: "Well-furnished hostels with Indian students' accommodation.",
    food: "Indian mess available on campus.",
    recognition: ["NMC", "WHO", "UNESCO"],
    fmge: "Eligible for NExT/FMGE.",
    process: ["1. Counseling 2. Application 3. Offer 4. Visa 5. Departure"]
  },
  {
    slug: "kyrgyzstan",
    name: "Kyrgyzstan",
    flag: "🇰🇬",
    tagline: "Budget-friendly MBBS in Central Asia",
    duration: "6 Years",
    fees: "₹ 20 – 28 Lacs (Total)",
    language: "English Medium",
    intakes: ["September", "March"],
    topUniversities: ["Asian Medical Institute", "Kyrgyz State Medical Academy", "International School of Medicine"],
    highlights: ["Affordable fees", "NMC approved", "Direct admission", "Indian mess"],
    description: "Kyrgyzstan offers economical MBBS programs with English medium instruction. Ideal for students looking at budget options abroad.",
    eligibility: ["NEET Qualified", "50% in PCB"],
    hostel: "Hostel facilities with Indian food mess.",
    food: "North Indian and South Indian food available.",
    recognition: ["NMC", "WHO"],
    fmge: "Eligible for NExT.",
    process: ["Counseling → Application → Visa → Fly"]
  },
  {
    slug: "st-lucia",
    name: "St. Lucia",
    flag: "🇱🇨",
    tagline: "Caribbean MBBS with US curriculum & clinical rotations",
    duration: "4.5 Years + 1 Year Rotation",
    fees: "₹ 25 – 35 Lacs (Total)",
    language: "English Medium",
    intakes: ["January", "May", "September"],
    topUniversities: ["Aureus University School of Medicine", "Spartan Health Sciences University", "University of Science, Arts & Technology"],
    highlights: ["US-based curriculum", "Clinical rotation in USA", "Direct admission", "English speaking country"],
    description: "St. Lucia in the Caribbean provides US-model MBBS with direct pathway to USMLE and clinical rotations across USA, UK and Canada.",
    eligibility: ["12th pass with PCB", "NEET qualified", "Basic English"],
    hostel: "On-campus hostels with modern amenities.",
    food: "International and Indian cuisine.",
    recognition: ["ECFMG eligible", "WHO", "CAAM-HP"],
    fmge: "Eligible for NExT/FMGE.",
    process: ["Application → Screening → Offer → Visa → Enrollment"]
  },
  {
    slug: "india",
    name: "India",
    flag: "🇮🇳",
    tagline: "Deemed & Private MBBS admissions without donation",
    duration: "5.5 Years + 1 Year Internship",
    fees: "₹ 40 – 1.2 Cr (Total)",
    language: "English / Regional",
    intakes: ["August / September"],
    topUniversities: ["KMC Manipal", "CMC Vellore", "St. Johns Bangalore", "AIIMS (through NEET)"],
    highlights: ["Direct admission support", "Management & NRI quota", "Top private colleges"],
    description: "We help Indian students secure MBBS seats in top deemed and private medical colleges across India through counseling and admission guidance.",
    eligibility: ["NEET qualified with good rank", "12th PCB 50%"],
    hostel: "College hostels available.",
    food: "Indian mess on campus.",
    recognition: ["NMC"],
    fmge: "Not required (Indian degree).",
    process: ["NEET counseling guidance, choice filling, document verification, admission."]
  }
];

const europeCountries = [
  {
    slug: "italy",
    name: "Italy",
    flag: "🇮🇹",
    tagline: "MBBS through IMAT - Free education in public universities",
    duration: "6 Years",
    fees: "₹ 8 – 25 Lacs (Total)",
    language: "English Medium",
    intakes: ["September"],
    topUniversities: ["Sapienza University of Rome", "University of Milan", "University of Bologna", "University of Pavia", "Humanitas University"],
    highlights: ["Free tuition in public universities", "IMAT entrance", "European life", "Scholarships available"],
    description: "Italy is one of the best countries in Europe for Indian students. Public universities charge zero or very low tuition; IMAT exam is the pathway.",
    eligibility: ["NEET Qualified", "50% PCB", "IMAT Score", "17+ age"],
    hostel: "Student accommodation and private apartments.",
    food: "Indian restaurants and kitchens available in major cities.",
    recognition: ["NMC", "WHO", "EU Recognized"],
    fmge: "Eligible for NExT/FMGE.",
    process: ["IMAT Registration → Exam → Ranking → Enrollment → Visa"]
  },
  {
    slug: "spain",
    name: "Spain",
    flag: "🇪🇸",
    tagline: "MBBS & Medical PG in Europe's top destination",
    duration: "6 Years (MBBS)",
    fees: "₹ 40 – 70 Lacs (Total)",
    language: "English / Spanish",
    intakes: ["September"],
    topUniversities: ["University of Barcelona", "Autonomous University of Madrid", "University of Navarra", "University of Valencia"],
    highlights: ["PG pathway after MBBS", "EU lifestyle", "Clinical training", "Global degree"],
    description: "Spain offers MBBS and direct PG pathway in Europe. Universities are ranked among the best globally and provide extensive clinical exposure.",
    eligibility: ["NEET Qualified", "50% PCB", "Spanish proficiency helpful"],
    hostel: "Student residences, shared flats.",
    food: "Mediterranean & Indian food easily available.",
    recognition: ["NMC", "WHO", "EU"],
    fmge: "Eligible for NExT.",
    process: ["Application → University assessment → Visa → Enrollment"]
  },
  {
    slug: "romania",
    name: "Romania",
    flag: "🇷🇴",
    tagline: "EU MBBS at Carol Davila & top universities",
    duration: "6 Years",
    fees: "₹ 40 – 60 Lacs (Total)",
    language: "English Medium",
    intakes: ["October"],
    topUniversities: ["Carol Davila University of Medicine and Pharmacy Bucharest", "Grigore T. Popa University of Medicine Iasi", "University of Medicine and Pharmacy Cluj-Napoca"],
    highlights: ["EU degree", "NMC approved", "Top medical universities", "Schengen country"],
    description: "Romania is part of the European Union and Schengen area. Universities like Carol Davila are among Europe's finest with global alumni.",
    eligibility: ["NEET Qualified", "50% PCB", "University entrance test"],
    hostel: "University hostels and private accommodation.",
    food: "Indian restaurants available in Bucharest.",
    recognition: ["NMC", "WHO", "EU"],
    fmge: "Eligible for NExT/FMGE.",
    process: ["1. Application 2. Entrance exam 3. Visa 4. Enrollment"]
  },
  {
    slug: "bulgaria",
    name: "Bulgaria",
    flag: "🇧🇬",
    tagline: "Affordable EU MBBS - Sofia University",
    duration: "6 Years",
    fees: "₹ 35 – 55 Lacs (Total)",
    language: "English Medium",
    intakes: ["October"],
    topUniversities: ["Sofia Medical University", "Plovdiv Medical University", "Varna Medical University"],
    highlights: ["EU Member", "Schengen candidate", "English medium", "Low cost"],
    description: "Bulgaria offers some of the most affordable EU MBBS programs with Sofia Medical University being the flagship.",
    eligibility: ["NEET", "50% PCB", "Entrance test"],
    hostel: "Hostel and private housing.",
    food: "Indian food outlets available.",
    recognition: ["NMC", "WHO", "EU"],
    fmge: "Eligible for NExT.",
    process: ["Application → Entrance → Offer → Visa"]
  },
  {
    slug: "czech",
    name: "Czech Republic",
    flag: "🇨🇿",
    tagline: "Charles University - among Europe's oldest & top medical schools",
    duration: "6 Years",
    fees: "₹ 70 – 90 Lacs (Total)",
    language: "English Medium",
    intakes: ["September"],
    topUniversities: ["Charles University (Prague, Plzen, Hradec Kralove)", "Masaryk University", "Palacky University"],
    highlights: ["Charles University 1348 AD", "Top EU research", "High FMGE passing"],
    description: "Czech Republic and Charles University attract the best medical aspirants. It has one of the highest FMGE/NExT pass rates in Europe.",
    eligibility: ["NEET Qualified", "50% PCB", "University entrance test (Biology, Chemistry)"],
    hostel: "Student dormitories & apartments.",
    food: "Indian restaurants in Prague.",
    recognition: ["NMC", "WHO", "EU"],
    fmge: "Eligible for NExT. Excellent pass percentage.",
    process: ["Apply → Entrance Exam → Enroll → Visa"]
  },
  {
    slug: "slovakia",
    name: "Slovakia",
    flag: "🇸🇰",
    tagline: "EU MBBS in the heart of Europe",
    duration: "6 Years",
    fees: "₹ 60 – 80 Lacs (Total)",
    language: "English Medium",
    intakes: ["September"],
    topUniversities: ["Comenius University Bratislava", "Pavol Jozef Safarik University Kosice", "University of Trnava"],
    highlights: ["EU & Schengen", "English medium", "Safe country"],
    description: "Slovakia is a quiet, safe EU country with English-medium MBBS programs at Comenius University and Kosice Medical School.",
    eligibility: ["NEET Qualified", "50% PCB", "Entrance test"],
    hostel: "Student hostels and apartments.",
    food: "Indian food and dining options.",
    recognition: ["NMC", "WHO", "EU"],
    fmge: "Eligible for NExT.",
    process: ["Application → Entrance → Offer → Visa"]
  }
];

const universities = [
  {
    slug: "carol-davila-bucharest",
    name: "Carol Davila University of Medicine and Pharmacy",
    country: "Romania",
    flag: "🇷🇴",
    qs: "Top 200",
    fees: "₹ 7 – 9 Lacs/Year",
    duration: "6 Years",
    language: "English",
    eligibility: ["NEET Qualified", "50% in PCB", "University Entrance Exam"],
    hostel: "On-campus dormitory available at approx ₹ 25,000/month.",
    food: "Indian restaurants and mess facility available nearby.",
    recognition: ["NMC", "WHO", "EU", "WFME"],
    fmge: "Eligible for NExT/FMGE.",
    process: ["Counseling → Entrance → Offer → Visa → Departure"]
  },
  {
    slug: "charles-university-prague",
    name: "Charles University, Prague",
    country: "Czech Republic",
    flag: "🇨🇿",
    qs: "#153 QS World",
    fees: "₹ 12 – 15 Lacs/Year",
    duration: "6 Years",
    language: "English",
    eligibility: ["NEET Qualified", "50% PCB", "Entrance Test"],
    hostel: "Student dormitory with meals available.",
    food: "Indian mess and restaurants in Prague.",
    recognition: ["NMC", "WHO", "EU"],
    fmge: "NExT eligible. High pass rate.",
    process: ["Application → Entrance → Offer → Visa"]
  },
  {
    slug: "semmelweis-university",
    name: "Semmelweis University, Budapest",
    country: "Hungary",
    flag: "🇭🇺",
    qs: "Top 250",
    fees: "₹ 10 – 13 Lacs/Year",
    duration: "6 Years",
    language: "English",
    eligibility: ["NEET", "50% PCB", "Entrance test"],
    hostel: "Hostels near campus.",
    food: "Indian food nearby.",
    recognition: ["NMC", "WHO", "EU"],
    fmge: "Eligible for NExT.",
    process: ["Apply → Entrance → Visa → Fly"]
  },
  {
    slug: "sofia-medical-university",
    name: "Sofia Medical University",
    country: "Bulgaria",
    flag: "🇧🇬",
    qs: "Top EU Medical",
    fees: "₹ 6 – 8 Lacs/Year",
    duration: "6 Years",
    language: "English",
    eligibility: ["NEET", "50% PCB", "Entrance"],
    hostel: "Hostel available.",
    food: "Indian food available.",
    recognition: ["NMC", "WHO", "EU"],
    fmge: "Eligible for NExT.",
    process: ["Apply → Exam → Visa → Fly"]
  },
  {
    slug: "university-of-warsaw",
    name: "University of Warsaw",
    country: "Poland",
    flag: "🇵🇱",
    qs: "Top 300",
    fees: "₹ 8 – 12 Lacs/Year",
    duration: "6 Years",
    language: "English",
    eligibility: ["NEET", "50% PCB", "Entrance"],
    hostel: "Student housing.",
    food: "Indian options.",
    recognition: ["NMC", "WHO", "EU"],
    fmge: "NExT eligible.",
    process: ["Apply → Exam → Visa"]
  },
  {
    slug: "sapienza-university-rome",
    name: "Sapienza University of Rome",
    country: "Italy",
    flag: "🇮🇹",
    qs: "#134 QS",
    fees: "₹ 1 – 3 Lacs/Year (public)",
    duration: "6 Years",
    language: "English",
    eligibility: ["NEET", "50% PCB", "IMAT Score"],
    hostel: "Student accommodation.",
    food: "Indian mess & restaurants.",
    recognition: ["NMC", "WHO", "EU"],
    fmge: "Eligible for NExT.",
    process: ["IMAT → Rank → Enroll → Visa"]
  }
];

const testimonials = [
  { name: "Rohan Mehta", role: "MBBS, Tbilisi State Medical University, Georgia", text: "TrueMark Edu made my MBBS in Georgia dream come true. From counseling to visa, everything was smooth. Highly recommended!", rating: 5 },
  { name: "Priya Sharma", role: "MBBS, Carol Davila, Romania", text: "The team guided me through the IMAT and European admissions process. I got into my dream university in Bucharest. Thank you TrueMark!", rating: 5 },
  { name: "Aarav Singh", role: "MBBS, Uzbekistan", text: "Cheapest MBBS abroad option with TrueMark. They told me about Uzbekistan and I saved so much money. Good faculty and Indian food there.", rating: 5 },
  { name: "Ananya Gupta", role: "MBA, Dubai", text: "Best consultancy for MBA in Dubai. Got admission with scholarship. The SOP team was fantastic!", rating: 5 },
  { name: "Kunal Verma", role: "MBBS, Charles University, Czech Republic", text: "TrueMark Edu prepared me for the Charles University entrance test. I cracked it in first attempt. Great mentorship!", rating: 5 },
  { name: "Sneha Reddy", role: "MBBS, Sapienza University, Rome, Italy", text: "Studying MBBS in Italy was unbelievable. TrueMark Edu's IMAT coaching and documentation support is unmatched.", rating: 5 }
];

const services = [
  { title: "MBBS Abroad Counseling", icon: "stethoscope", desc: "Free personalized MBBS abroad guidance with country & university comparison, fee structure and eligibility check." },
  { title: "MBBS in Europe", icon: "globe", desc: "Admission in EU universities including Italy, Romania, Bulgaria, Czech, Slovakia, Spain and Hungary." },
  { title: "Visa Assistance", icon: "file-check", desc: "End-to-end visa documentation, SOP, LOR, financial planning and interview preparation." },
  { title: "IELTS / PTE / OET Coaching", icon: "book-open", desc: "Live & classroom coaching for IELTS, PTE and OET with mock tests and band-score improvement." },
  { title: "NExT / FMGE Coaching", icon: "graduation-cap", desc: "Targeted coaching for FMGE/NExT screening test for students returning from abroad medical universities." },
  { title: "SOP & LOR Writing", icon: "pen-tool", desc: "Admission-winning SOP, LOR, essays and personal statements tailored to top global universities." },
  { title: "Scholarship Guidance", icon: "award", desc: "Help apply for merit-based, need-based and country-specific scholarships up to 100% tuition coverage." },
  { title: "MBA in Dubai / UAE", icon: "briefcase", desc: "Admission in top business schools in Dubai with paid internships, post-study work visa and PR pathway." },
  { title: "Study Abroad - Europe", icon: "map", desc: "Complete study abroad programs for EU countries - Germany, France, Spain, Italy, Poland." },
  { title: "Hostel & Accommodation", icon: "home", desc: "Verified hostel, PG and apartment bookings near university campuses with Indian food option." },
  { title: "Pre-departure Briefing", icon: "plane", desc: "Packing, currency, culture, SIM, banking and airport pickup arrangements before you fly." },
  { title: "Loan Assistance", icon: "wallet", desc: "Tie-ups with leading banks for collateral and non-collateral education loans at lowest interest rates." }
];

const blogs = [
  { slug: "mbbs-abroad-complete-guide", title: "MBBS Abroad - A Complete Guide for Indian Students in 2026", date: "12 Jan 2026", category: "MBBS Abroad", excerpt: "Everything you need to know about MBBS abroad including countries, fees, eligibility, NMC guidelines and visa process." },
  { slug: "mbbs-in-europe-cost", title: "MBBS in Europe - Total Cost, Universities & Admission Process", date: "08 Jan 2026", category: "Europe", excerpt: "Compare MBBS in Italy, Romania, Bulgaria, Czech and other EU countries. Find the right European medical university for you." },
  { slug: "imat-exam-preparation", title: "IMAT Exam 2026 - Syllabus, Dates, Preparation Strategy", date: "02 Jan 2026", category: "Italy", excerpt: "International Medical Admission Test (IMAT) complete guide to get into Italian public medical universities with zero tuition." },
  { slug: "cheapest-mbbs-abroad", title: "Cheapest MBBS Abroad Countries for Indian Students Under 25 Lakhs", date: "28 Dec 2025", category: "MBBS Abroad", excerpt: "Looking for budget MBBS abroad? Check Uzbekistan, Kyrgyzstan, Georgia and Kazakhstan with total fees under 25 Lakhs." },
  { slug: "next-exam-preparation-tips", title: "NExT Exam Preparation Tips for FMGE Aspirants", date: "20 Dec 2025", category: "FMGE", excerpt: "Smart study plan, subject-wise weightage, and mock test strategy to crack NExT/FMGE in your first attempt." },
  { slug: "mba-in-dubai-guide", title: "MBA in Dubai - Top Colleges, Fees, Placements & PR", date: "15 Dec 2025", category: "Study Abroad", excerpt: "Complete guide to MBA in UAE/Dubai. Explore top B-schools, cost of living, 2-year post-study work visa and PR options." }
];

const faqs = [
  { q: "Is MBBS abroad a good option for Indian students?", a: "Yes, MBBS abroad is highly recommended for students who could not get a government medical seat in India. Universities are NMC/WHO approved and degrees are globally recognized." },
  { q: "What is the total cost of MBBS abroad?", a: "Total cost ranges from ₹ 18 Lacs (Uzbekistan) to ₹ 90 Lacs (Czech Republic). Popular options like Georgia cost ₹ 25-35 Lacs total including hostel and food." },
  { q: "Is NEET required for MBBS abroad?", a: "Yes, NEET qualification is mandatory for Indian students to be eligible for the NMC screening test (NExT/FMGE) after completing MBBS abroad." },
  { q: "Is there any donation or capitation fee?", a: "No. In countries like Georgia, Uzbekistan, Russia, Kazakhstan and most European universities, there is NO donation. You pay only tuition and hostel fees." },
  { q: "How long does the admission process take?", a: "Typically 30-60 days from application to visa. We handle the complete process including university application, documentation and visa." },
  { q: "Do you provide FMGE/NExT coaching?", a: "Yes, we provide dedicated FMGE/NExT online coaching to our students so they can practice India alongside their MBBS abroad." }
];

const programs = [
  { slug: "mba-in-dubai", title: "MBA in Dubai / UAE", tagline: "1-year MBA with paid internships, 2-year post-study visa & PR pathway", fees: "₹ 12 – 25 Lacs", duration: "12 – 24 Months" },
  { slug: "germany", title: "Study in Germany", tagline: "Free public education with low cost of living & excellent job opportunities", fees: "₹ 0 – 8 Lacs", duration: "2 Years (PG)" },
  { slug: "canada", title: "Study in Canada", tagline: "PGWP pathway, permanent residency & world-class universities", fees: "₹ 15 – 30 Lacs", duration: "1 – 2 Years" },
  { slug: "usa", title: "Study in USA", tagline: "Top-ranked universities, STEM programs & post-study OPT work authorization", fees: "₹ 25 – 60 Lacs", duration: "1 – 2 Years" }
];

const programData = {
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

const IMG = {
  hero: "https://images.pexels.com/photos/32213424/pexels-photo-32213424.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1800",
  campus: "https://images.pexels.com/photos/33977829/pexels-photo-33977829.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400",
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

const countryCardImages = [
  "https://images.pexels.com/photos/33977829/pexels-photo-33977829.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400",
  "https://images.pexels.com/photos/27238168/pexels-photo-27238168.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400",
  "https://images.pexels.com/photos/8197551/pexels-photo-8197551.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400",
  "https://images.pexels.com/photos/37762503/pexels-photo-37762503.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400",
  "https://images.pexels.com/photos/7616700/pexels-photo-7616700.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400",
  "https://images.pexels.com/photos/7972353/pexels-photo-7972353.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400",
  "https://images.pexels.com/photos/3885601/pexels-photo-3885601.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400",
  "https://images.pexels.com/photos/30981181/pexels-photo-30981181.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400"
];

// Helper to determine path depth (relative path to root)
function getRootPrefix(filepath) {
  const depth = filepath.split("/").length - 1;
  return depth === 0 ? "./" : "../".repeat(depth);
}

// Helper to dynamically adjust relative paths inside injected header/footer HTML
function adjustPaths(html, root) {
  if (root === "./") return html;
  return html.replace(/(href|src)="([^"]+)"/g, (match, attr, val) => {
    if (val.startsWith("http") || val.startsWith("mailto") || val.startsWith("tel") || val.startsWith("#") || val.startsWith("/")) {
      return match;
    }
    return `${attr}="${root}${val}"`;
  });
}

// Helper to highlight the active menu item in header
function highlightActiveMenu(html, activeMenu) {
  if (!activeMenu) return html;
  
  // Replace: class="... text-slate-700 hover:text-blue-700 ..." ... data-menu="about"
  const regex = new RegExp(`class="([^"]*)text-slate-700 hover:text-blue-700([^"]*)"([^>]*data-menu="${activeMenu}")`, "g");
  let result = html.replace(regex, `class="$1text-blue-700 font-bold$2"$3`);
  
  // Replace: data-menu="about" ... class="... text-slate-700 hover:text-blue-700 ..."
  const regex2 = new RegExp(`(data-menu="${activeMenu}"[^>]*class="[^"]*)text-slate-700 hover:text-blue-700([^"]*")`, "g");
  result = result.replace(regex2, `$1text-blue-700 font-bold$2`);
  
  return result;
}

// Global page wrap template (reads header.html and footer.html on-the-fly!)
function wrapPage(content, title, subtitle, filepath, activeMenu = "") {
  const root = getRootPrefix(filepath);
  
  // Read header and footer templates
  let headerHTML = fs.readFileSync("header.html", "utf8");
  let footerHTML = fs.readFileSync("footer.html", "utf8");
  
  // Adjust links inside templates based on depth
  headerHTML = adjustPaths(headerHTML, root);
  footerHTML = adjustPaths(footerHTML, root);
  
  // Highlight active menu in header
  headerHTML = highlightActiveMenu(headerHTML, activeMenu);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | TrueMark Edu - Study Abroad</title>
  <meta name="description" content="${subtitle || "TrueMark Edu is India's most trusted study abroad medical consultancy."}">
  
  <!-- Font and Stylesheet -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="${root}style.css">
  
  <!-- Lucide Icons Browser Script CDN -->
  <script src="https://unpkg.com/lucide@latest"></script>
</head>
<body class="min-h-screen flex flex-col bg-white text-slate-800 font-sans antialiased">

  <!-- Header Section -->
  <header class="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
    ${headerHTML}
  </header>

  <main class="flex-1">
    ${content}
  </main>

  <!-- Footer Section -->
  <footer class="bg-slate-900 text-slate-300">
    ${footerHTML}
  </footer>

  <!-- Floating WhatsApp & Scroll Back to Top Button -->
  <a href="https://wa.me/918287216902" target="_blank" rel="noopener noreferrer" class="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center animate-bounce duration-1000" aria-label="WhatsApp">
    <svg class="w-7 h-7 fill-white" viewBox="0 0 24 24">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.859-4.42 9.863-9.864.002-2.637-1.023-5.11-2.884-6.974C16.573 1.8 14.1 1.777 12.001 1.777c-5.44 0-9.866 4.418-9.87 9.864 0 1.758.463 3.473 1.337 4.988L2.427 20.87l4.22-1.716zM17.7 14.93c-.312-.156-1.848-.91-2.134-1.015-.286-.105-.494-.156-.701.156-.207.312-.804 1.015-.986 1.22-.182.207-.364.234-.676.078-1.284-.641-2.128-1.085-2.97-2.528-.22-.377.22-.35.63-1.17.068-.13.034-.247-.017-.35-.05-.105-.494-1.19-.677-1.63-.177-.428-.357-.37-.494-.37h-.42c-.143 0-.377.053-.574.27-.197.218-.752.735-.752 1.79 0 1.054.767 2.073.873 2.217.106.143 1.51 2.3 3.655 3.228.51.22.908.351 1.218.45.513.162.98.14 1.35.084.41-.06 1.848-.756 2.11-.1.263-.736.263-1.365.185-1.48-.078-.115-.286-.182-.598-.338z"/>
    </svg>
  </a>

  <!-- JS Logic File -->
  <script src="${root}script.js"></script>
</body>
</html>`;
}

// Contact Form Template Component
function getContactFormHTML() {
  return `<form id="counseling-form" class="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 space-y-4">
    <div>
      <h3 class="text-xl font-bold text-slate-900">Book Free Counseling</h3>
      <p class="text-sm text-slate-500">Get a 1-on-1 session with our expert counselors today.</p>
    </div>
    <input required type="text" name="name" id="form-name" placeholder="Your Name *" class="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-600 focus:outline-none text-sm" />
    <input required type="tel" name="phone" id="form-phone" placeholder="Phone / WhatsApp *" class="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-600 focus:outline-none text-sm" />
    <input type="email" name="email" id="form-email" placeholder="Email Address" class="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-600 focus:outline-none text-sm" />
    <select name="country" id="form-country" class="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-600 focus:outline-none text-sm bg-white">
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
    <textarea name="message" id="form-message" rows="3" placeholder="Your message (optional)" class="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-600 focus:outline-none text-sm"></textarea>
    <button type="submit" class="w-full bg-gradient-to-r from-blue-700 to-green-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition">
      Submit &amp; Talk on WhatsApp
    </button>
    <div id="form-done-msg" class="hidden text-sm text-green-600 text-center">Thank you! We will connect with you on WhatsApp shortly.</div>
    <p class="text-xs text-slate-400 text-center">Your data is 100% secure and never shared.</p>
  </form>`;
}

// Page Hero HTML Template
function getPageHeroHTML(title, subtitle, breadcrumb = [], image = "") {
  return `<section class="relative bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 text-white overflow-hidden">
    ${image ? `<div class="absolute inset-0 opacity-20 bg-cover bg-center" style="background-image: url('${image}')"></div>` : ""}
    <div class="absolute -top-40 -right-40 w-96 h-96 bg-green-500/30 rounded-full blur-3xl"></div>
    <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl"></div>
    <div class="relative max-w-7xl mx-auto px-4 py-16 md:py-24 text-center">
      ${breadcrumb.length > 0 ? `
        <div class="text-sm text-white/80 mb-4">
          ${breadcrumb.map((b, i) => b.to ? `<a href="${b.to}" class="hover:underline">${b.name}</a>` : `<span class="text-white">${b.name}</span>`).join(" <span class='mx-2'>/</span> ")}
        </div>
      ` : ""}
      <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight">${title}</h1>
      ${subtitle ? `<p class="mt-5 text-lg text-white/90 max-w-3xl mx-auto">${subtitle}</p>` : ""}
    </div>
  </section>`;
}

// Country Card Component HTML
function getCountryCardHTML(c, root, index) {
  const image = countryCardImages[index % countryCardImages.length];
  return `<a href="${root}mbbs-abroad/${c.slug}" class="group relative block rounded-[2rem] overflow-hidden bg-slate-900 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-up" style="transition-delay: ${(index % 4) * 80}ms">
    <img src="${image}" alt="MBBS in ${c.name}" loading="lazy" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1500ms] ease-out" />
    <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-900/10"></div>
    <div class="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-transparent to-green-900/40"></div>
    <div class="relative p-6 sm:p-7 min-h-[360px] flex flex-col">
      <div class="flex items-start justify-between">
        <div class="text-6xl sm:text-7xl font-extrabold text-white drop-shadow-2xl">${c.flag}</div>
        <span class="inline-flex items-center gap-1 bg-white text-blue-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-xl">
          ${c.duration}
        </span>
      </div>
      <div class="mt-auto">
        <div class="inline-block text-[10px] sm:text-xs tracking-[0.2em] font-extrabold text-green-300 uppercase mb-2">MBBS Abroad</div>
        <h3 class="text-3xl sm:text-4xl font-extrabold text-white leading-[1.1] drop-shadow-lg">MBBS in ${c.name}</h3>
        <p class="mt-2 text-sm sm:text-base text-white/90 leading-snug max-w-sm drop-shadow">${c.tagline}</p>
        <div class="mt-5 grid grid-cols-2 gap-2 max-w-sm">
          <div class="bg-white/10 backdrop-blur border border-white/20 rounded-xl px-3 py-2">
            <div class="text-[10px] uppercase tracking-wider text-white/70">Total Fees</div>
            <div class="text-sm font-extrabold text-white">${c.fees}</div>
          </div>
          <div class="bg-white/10 backdrop-blur border border-white/20 rounded-xl px-3 py-2">
            <div class="text-[10px] uppercase tracking-wider text-white/70">Intakes</div>
            <div class="text-sm font-extrabold text-white truncate">${c.intakes.join(", ")}</div>
          </div>
        </div>
        <div class="mt-6 inline-flex items-center gap-2 bg-white text-slate-900 font-bold text-sm px-5 py-3 rounded-full shadow-xl group-hover:bg-green-400 group-hover:text-slate-900 transition-colors">
          Explore <i data-lucide="arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform"></i>
        </div>
      </div>
    </div>
  </a>`;
}

// ---------------- PAGES GENERATION ----------------

// 1. HOME PAGE (index.html)
function buildHome(root) {
  const content = `
    <!-- HERO -->
    <section class="relative text-white overflow-hidden min-h-[640px] md:min-h-[720px] flex items-center">
      <div class="absolute inset-0 bg-center bg-cover" style="background-image: url('${IMG.hero}')"></div>
      <div class="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-blue-900/80 to-green-900/70"></div>
      <div class="absolute top-20 right-10 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-10 left-10 w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-3xl"></div>

      <div class="relative max-w-7xl mx-auto px-4 py-20 md:py-28 grid lg:grid-cols-12 gap-10 items-center w-full">
        <div class="lg:col-span-7">
          <div class="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/30 rounded-full px-4 py-1.5 text-sm mb-6">
            <i data-lucide="award" class="w-4 h-4 text-green-300"></i> India's #1 MBBS Abroad Consultant
          </div>
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            Your <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-yellow-200">MBBS Abroad</span><br />
            Journey Begins Here
          </h1>
          <p class="mt-6 text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
            Study MBBS in <b>NMC & WHO approved</b> universities across Europe, Georgia, Uzbekistan, Kazakhstan & Russia. <b>Zero donation.</b> Direct admission. 100% visa success.
          </p>
          <div class="mt-10 flex flex-wrap gap-4">
            <a href="${root}contact" class="btn-shine inline-flex items-center gap-2 bg-white text-blue-900 font-bold px-7 py-3.5 rounded-full hover:shadow-2xl hover:-translate-y-0.5 transition-all animate-pulse-soft">
              Get Free Counseling <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </a>
            <a href="tel:+918287216902" class="btn-shine inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-7 py-3.5 rounded-full transition-all shadow-lg">
              <i data-lucide="phone" class="w-4 h-4"></i> +91 82872 16902
            </a>
            <a href="https://wa.me/918287216902" class="btn-shine inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white font-bold px-7 py-3.5 rounded-full transition-all">
              💬 WhatsApp Us
            </a>
          </div>
          <div class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
            <div class="border-l-2 border-green-400 pl-4">
              <div class="text-3xl md:text-4xl font-extrabold">15+</div>
              <div class="text-sm text-white/80">Countries</div>
            </div>
            <div class="border-l-2 border-green-400 pl-4">
              <div class="text-3xl md:text-4xl font-extrabold">5000+</div>
              <div class="text-sm text-white/80">Students Placed</div>
            </div>
            <div class="border-l-2 border-green-400 pl-4">
              <div class="text-3xl md:text-4xl font-extrabold">100%</div>
              <div class="text-sm text-white/80">Visa Success</div>
            </div>
            <div class="border-l-2 border-green-400 pl-4">
              <div class="text-3xl md:text-4xl font-extrabold">50+</div>
              <div class="text-sm text-white/80">Universities</div>
            </div>
          </div>
        </div>
        <div class="lg:col-span-5">
          <div class="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-2 shadow-2xl">
            ${getContactFormHTML()}
          </div>
        </div>
      </div>
    </section>

    <!-- Trust bar -->
    <section class="bg-gradient-to-r from-blue-900 to-green-800 text-white animate-fade-in">
      <div class="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
        <div class="flex flex-col items-center gap-2">
          <div class="p-2 bg-white/15 rounded-xl"><i data-lucide="shield-check" class="w-6 h-6"></i></div>
          <div class="font-semibold text-sm">NMC Approved</div>
        </div>
        <div class="flex flex-col items-center gap-2">
          <div class="p-2 bg-white/15 rounded-xl"><i data-lucide="globe-2" class="w-6 h-6"></i></div>
          <div class="font-semibold text-sm">WHO Listed</div>
        </div>
        <div class="flex flex-col items-center gap-2">
          <div class="p-2 bg-white/15 rounded-xl"><i data-lucide="flame" class="w-6 h-6"></i></div>
          <div class="font-semibold text-sm">No Donation</div>
        </div>
        <div class="flex flex-col items-center gap-2">
          <div class="p-2 bg-white/15 rounded-xl"><i data-lucide="check-circle" class="w-6 h-6"></i></div>
          <div class="font-semibold text-sm">Direct Admission</div>
        </div>
        <div class="flex flex-col items-center gap-2">
          <div class="p-2 bg-white/15 rounded-xl"><i data-lucide="users" class="w-6 h-6"></i></div>
          <div class="font-semibold text-sm">Indian Food</div>
        </div>
        <div class="flex flex-col items-center gap-2">
          <div class="p-2 bg-white/15 rounded-xl"><i data-lucide="plane" class="w-6 h-6"></i></div>
          <div class="font-semibold text-sm">100% Visa</div>
        </div>
      </div>
    </section>

    <!-- University Marquee -->
    <section class="py-10 bg-white border-y border-slate-100 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 mb-5 text-center">
        <div class="text-xs uppercase tracking-[0.3em] text-slate-500 font-bold">Partner Universities</div>
      </div>
      <div class="relative flex overflow-hidden">
        <div class="flex gap-8 animate-marquee shrink-0">
          ${[
            "Carol Davila Bucharest", "Charles University Prague", "Sapienza University Rome", "Semmelweis Budapest",
            "Sofia Medical University", "University of Warsaw", "Tbilisi State Medical", "Kazakh National Medical",
            "Tashkent Medical Academy", "Moscow State Medical", "Comenius University", "University of Barcelona",
            "Aureus University St. Lucia", "Asian Medical Institute"
          ].concat([
            "Carol Davila Bucharest", "Charles University Prague", "Sapienza University Rome", "Semmelweis Budapest",
            "Sofia Medical University", "University of Warsaw", "Tbilisi State Medical", "Kazakh National Medical",
            "Tashkent Medical Academy", "Moscow State Medical", "Comenius University", "University of Barcelona",
            "Aureus University St. Lucia", "Asian Medical Institute"
          ]).map((n) => `
            <div class="shrink-0 flex items-center gap-2 bg-slate-50 border border-slate-200 text-slate-700 font-semibold px-5 py-3 rounded-full text-sm hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition whitespace-nowrap">
              <i data-lucide="graduation-cap" class="w-4 h-4"></i> ${n}
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- About split -->
    <section class="py-24">
      <div class="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        <div class="relative animate-slide-left">
          <img src="${IMG.campus}" alt="Medical university campus" class="rounded-3xl shadow-2xl w-full h-[500px] object-cover" />
          <img src="${IMG.students}" alt="Medical students" class="absolute -bottom-8 -right-8 w-60 h-60 object-cover rounded-3xl shadow-2xl border-4 border-white hidden md:block animate-float" />
          <div class="absolute -top-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl hidden md:block animate-float" style="animation-delay: 0.5s">
            <div class="text-4xl font-extrabold text-blue-700">5000+</div>
            <div class="text-slate-600 text-sm font-semibold">Happy Students</div>
          </div>
        </div>
        <div class="animate-slide-right">
          <span class="inline-block bg-green-100 text-green-700 text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full">Why TrueMark Edu</span>
          <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 leading-tight">
            We make your <span class="text-blue-700">MBBS abroad</span> dream come true — <span class="text-green-700">truly.</span>
          </h2>
          <p class="text-slate-600 mt-5 text-lg leading-relaxed">
            From your first counseling call to airport pickup abroad — TrueMark Edu stands with you at every step. We partner with <b>NMC-approved universities</b> only, ensuring your degree is recognized in India and globally.
          </p>
          <div class="mt-8 space-y-4">
            ${[
              { t: "10+ Years of Experience", d: "Trusted by thousands of Indian families across every state." },
              { t: "University Direct Admissions", d: "Official partnerships with 50+ universities — no middlemen." },
              { t: "Zero Hidden Fee", d: "Complete transparency in fees and no capitation or donation." },
              { t: "On-Ground Support Abroad", d: "Indian coordinators in Georgia, Uzbekistan, Russia, Kazakhstan & Europe." }
            ].map(x => `
              <div class="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition">
                <div class="shrink-0 p-2.5 rounded-xl bg-gradient-to-br from-blue-700 to-green-600 text-white">
                  <i data-lucide="check-circle" class="w-5 h-5"></i>
                </div>
                <div>
                  <div class="font-bold text-slate-900">${x.t}</div>
                  <div class="text-slate-600 text-sm">${x.d}</div>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    </section>

    <!-- Popular Destinations -->
    <section class="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <span class="inline-block bg-blue-100 text-blue-700 text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full">MBBS Abroad</span>
          <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4">Popular Destinations</h2>
          <p class="text-slate-600 mt-4 text-lg">NMC approved universities in 15+ countries. Compare fees, eligibility, lifestyle and apply in minutes.</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          ${mbbsCountries.map((c, i) => getCountryCardHTML(c, root, i)).join("")}
        </div>
      </div>
    </section>

    <!-- Europe split -->
    <section class="py-24">
      <div class="max-w-7xl mx-auto px-4">
        <div class="rounded-[2.5rem] overflow-hidden grid lg:grid-cols-2 bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 text-white shadow-2xl">
          <div class="p-12 lg:p-16 flex flex-col justify-center">
            <span class="inline-block bg-white/15 backdrop-blur border border-white/30 text-white text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full w-fit">MBBS in Europe</span>
            <h2 class="text-4xl md:text-5xl font-extrabold mt-5 leading-tight">
              EU Degree. <br /> Global Career. <br /><span class="text-green-300">Zero Tuition in Italy.</span>
            </h2>
            <p class="mt-6 text-lg text-white/90 leading-relaxed">
              Study MBBS in Europe's top public and private universities. Charles University Prague, Carol Davila Bucharest, Sapienza Rome, Sofia Medical University & many more — all NMC, WHO & EU recognized.
            </p>
            <ul class="mt-8 grid sm:grid-cols-2 gap-3 text-white/90">
              ${["EU & WHO Recognized", "English Medium", "Best FMGE/NExT Results", "Schengen Countries", "Zero / Low Tuition", "Modern Hospitals"].map(p => `
                <li class="flex items-center gap-2"><i data-lucide="check-circle" class="w-5 h-5 text-green-300 shrink-0"></i> ${p}</li>
              `).join("")}
            </ul>
            <a href="${root}mbbs-in-europe" class="mt-10 inline-flex items-center gap-2 bg-white text-blue-900 font-bold px-7 py-3.5 rounded-full hover:shadow-2xl transition-all w-fit">
              Explore Europe <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </a>
          </div>
          <div class="relative min-h-[400px] lg:min-h-full">
            <img src="${IMG.students2}" alt="MBBS in Europe students" class="absolute inset-0 w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-transparent"></div>
            <div class="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4">
              ${europeCountries.slice(0, 4).map(c => `
                <a href="${root}mbbs-in-europe/${c.slug}" class="bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl p-4 hover:bg-white/25 transition block">
                  <div class="text-3xl">${c.flag}</div>
                  <div class="font-bold mt-2 text-white">${c.name}</div>
                  <div class="text-xs text-white/80">${c.duration}</div>
                </a>
              `).join("")}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Numbers -->
    <section class="relative py-24 text-white">
      <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('${IMG.classroom}')"></div>
      <div class="absolute inset-0 bg-gradient-to-br from-blue-950/95 to-green-900/90"></div>
      <div class="relative max-w-7xl mx-auto px-4 text-center">
        <h2 class="text-4xl md:text-5xl font-extrabold">Trusted By Students From All Over India</h2>
        <p class="mt-4 text-lg text-white/80 max-w-2xl mx-auto">Highest success rate, zero complaints, and 24×7 student support — that's what makes TrueMark Edu India's most loved overseas education consultancy.</p>
        <div class="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="bg-white/10 border border-white/20 backdrop-blur-md rounded-3xl p-8">
            <div class="inline-flex p-3 bg-white/15 rounded-2xl mb-3"><i data-lucide="users" class="w-8 h-8"></i></div>
            <div class="text-5xl font-extrabold text-green-300">5000+</div>
            <div class="mt-2 text-sm font-semibold text-white/90">Students Admitted</div>
          </div>
          <div class="bg-white/10 border border-white/20 backdrop-blur-md rounded-3xl p-8">
            <div class="inline-flex p-3 bg-white/15 rounded-2xl mb-3"><i data-lucide="globe-2" class="w-8 h-8"></i></div>
            <div class="text-5xl font-extrabold text-green-300">15+</div>
            <div class="mt-2 text-sm font-semibold text-white/90">Countries</div>
          </div>
          <div class="bg-white/10 border border-white/20 backdrop-blur-md rounded-3xl p-8">
            <div class="inline-flex p-3 bg-white/15 rounded-2xl mb-3"><i data-lucide="award" class="w-8 h-8"></i></div>
            <div class="text-5xl font-extrabold text-green-300">100%</div>
            <div class="mt-2 text-sm font-semibold text-white/90">Visa Success</div>
          </div>
          <div class="bg-white/10 border border-white/20 backdrop-blur-md rounded-3xl p-8">
            <div class="inline-flex p-3 bg-white/15 rounded-2xl mb-3"><i data-lucide="building-2" class="w-8 h-8"></i></div>
            <div class="text-5xl font-extrabold text-green-300">50+</div>
            <div class="mt-2 text-sm font-semibold text-white/90">University Partners</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="py-24 bg-gradient-to-b from-white to-slate-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <span class="inline-block bg-blue-100 text-blue-700 text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full">Our Services</span>
          <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4">End-to-End Study Abroad Services</h2>
          <p class="text-slate-600 mt-4 text-lg">From profile assessment to airport pickup — we handle everything so you can focus on your future.</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${services.slice(0, 9).map((s, i) => `
            <div class="group relative p-8 rounded-3xl bg-white border border-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden animate-fade-up" style="transition-delay: ${(i % 3) * 100}ms">
              <div class="absolute top-0 right-0 text-[120px] font-extrabold text-slate-100 leading-none group-hover:text-blue-50 group-hover:text-[130px] transition-all">${String(i + 1).padStart(2, "0")}</div>
              <div class="relative">
                <div class="inline-flex p-4 bg-gradient-to-br from-blue-100 to-green-100 text-blue-700 rounded-2xl group-hover:scale-110 transition-transform shadow-sm">
                  <i data-lucide="${s.icon}" class="w-7 h-7"></i>
                </div>
                <h3 class="text-xl font-bold text-slate-900 mt-5">${s.title}</h3>
                <p class="text-slate-600 mt-3 leading-relaxed">${s.desc}</p>
              </div>
            </div>
          `).join("")}
        </div>
        <div class="text-center mt-12 animate-fade-up">
          <a href="${root}services" class="btn-shine inline-flex items-center gap-2 bg-gradient-to-r from-blue-700 to-green-600 text-white font-bold px-8 py-3.5 rounded-full hover:shadow-2xl transition-all">
            View All Services <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </a>
        </div>
      </div>
    </section>

    <!-- World Class Universities -->
    <section class="py-24 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <span class="inline-block bg-green-100 text-green-700 text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full">Top Universities</span>
          <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4">World-Class Medical Universities</h2>
          <p class="text-slate-600 mt-4 text-lg">NMC & WHO approved universities with proven FMGE/NExT results. Each university page has full fee, eligibility, hostel & admission process.</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${universities.map((u, i) => `
            <a href="${root}universities/${u.slug}" class="group relative overflow-hidden rounded-3xl bg-white shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-fade-up" style="transition-delay: ${(i % 3) * 100}ms">
              <div class="relative h-60 overflow-hidden">
                <img src="${[IMG.campus, IMG.university, IMG.classroom, IMG.students2, IMG.classroom2, IMG.students3][i % 6]}" alt="${u.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent"></div>
                <div class="absolute top-4 left-4 bg-white text-slate-900 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                  ${u.flag} ${u.country}
                </div>
                <div class="absolute top-4 right-4 bg-yellow-400 text-slate-900 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                  ${u.qs}
                </div>
                <div class="absolute bottom-5 left-5 right-5">
                  <h3 class="text-xl md:text-2xl font-extrabold text-white leading-tight drop-shadow-lg">${u.name}</h3>
                </div>
              </div>
              <div class="p-6">
                <div class="grid grid-cols-2 gap-3 text-sm">
                  <div class="bg-gradient-to-br from-blue-50 to-green-50 p-4 rounded-2xl text-center">
                    <div class="text-[11px] uppercase tracking-wider text-slate-500">Fees</div>
                    <div class="font-extrabold text-slate-900 mt-1">${u.fees}</div>
                  </div>
                  <div class="bg-gradient-to-br from-blue-50 to-green-50 p-4 rounded-2xl text-center">
                    <div class="text-[11px] uppercase tracking-wider text-slate-500">Duration</div>
                    <div class="font-extrabold text-slate-900 mt-1">${u.duration}</div>
                  </div>
                </div>
                <div class="mt-5 flex items-center justify-center gap-2 text-white bg-gradient-to-r from-blue-700 to-green-600 font-bold text-sm py-3 rounded-2xl group-hover:shadow-xl transition-all">
                  View Full Details <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </div>
              </div>
            </a>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- Study in Italy Zero Tuition -->
    <section class="py-24">
      <div class="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
        <div class="order-2 lg:order-1">
          <span class="inline-block bg-yellow-100 text-yellow-800 text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full">IMAT Exam</span>
          <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 leading-tight">
            Study MBBS in Italy at <span class="text-blue-700">Zero Tuition</span> in Public Universities
          </h2>
          <p class="text-slate-600 mt-5 text-lg leading-relaxed">
            The IMAT exam is your gateway to Italy's world-class public medical universities — Sapienza Rome, University of Milan, Bologna, Pavia & more — with annual tuition as low as ₹ 1-3 Lakhs only. TrueMark Edu provides complete IMAT coaching and guaranteed admission guidance.
          </p>
          <div class="mt-8 grid grid-cols-3 gap-4">
            <div class="p-5 bg-slate-50 rounded-2xl text-center">
              <div class="text-2xl font-extrabold text-green-700">₹ 1-3L</div>
              <div class="text-sm text-slate-600">Annual Tuition</div>
            </div>
            <div class="p-5 bg-slate-50 rounded-2xl text-center">
              <div class="text-2xl font-extrabold text-green-700">6 Yrs</div>
              <div class="text-sm text-slate-600">Duration</div>
            </div>
            <div class="p-5 bg-slate-50 rounded-2xl text-center">
              <div class="text-2xl font-extrabold text-green-700">English</div>
              <div class="text-sm text-slate-600">Medium</div>
            </div>
          </div>
          <a href="${root}mbbs-in-europe/italy" class="mt-10 inline-flex items-center gap-2 bg-gradient-to-r from-blue-700 to-green-600 text-white font-bold px-7 py-3.5 rounded-full hover:shadow-2xl transition-all">
            MBBS in Italy <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </a>
        </div>
        <div class="order-1 lg:order-2 relative">
          <img src="${IMG.classroom2}" alt="Students in Italy" class="rounded-[2.5rem] shadow-2xl w-full h-[500px] object-cover" />
          <div class="absolute bottom-6 left-6 bg-white rounded-2xl shadow-2xl p-5 max-w-xs">
            <div class="flex gap-1 text-yellow-400">
              <i data-lucide="star" class="w-4 h-4 fill-current"></i>
              <i data-lucide="star" class="w-4 h-4 fill-current"></i>
              <i data-lucide="star" class="w-4 h-4 fill-current"></i>
              <i data-lucide="star" class="w-4 h-4 fill-current"></i>
              <i data-lucide="star" class="w-4 h-4 fill-current"></i>
            </div>
            <div class="mt-2 text-sm text-slate-700">Got into Sapienza University Rome through TrueMark Edu. The IMAT coaching was life-changing!</div>
            <div class="mt-2 text-xs text-slate-500 font-semibold">— Sneha Reddy, 2024</div>
          </div>
        </div>
      </div>
    </section>

    <!-- MBA in Dubai -->
    <section class="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-green-950 text-white">
      <div class="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
        <div class="relative">
          <img src="${IMG.dubai}" alt="Dubai skyline" class="rounded-[2.5rem] shadow-2xl w-full h-[500px] object-cover" />
          <div class="absolute -bottom-6 -right-6 bg-green-500 text-white p-6 rounded-2xl shadow-2xl hidden md:block">
            <div class="text-3xl font-extrabold">AED 15K+</div>
            <div class="text-sm">Avg. Starting Salary</div>
          </div>
        </div>
        <div>
          <span class="inline-block bg-white/10 backdrop-blur border border-white/30 text-white text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full">Study Abroad</span>
          <h2 class="text-4xl md:text-5xl font-extrabold mt-5 leading-tight">
            MBA in <span class="text-green-300">Dubai / UAE</span><br />With Paid Internship & PR
          </h2>
          <p class="text-white/90 mt-5 text-lg leading-relaxed">
            Study MBA at top business schools in Dubai — SP Jain, American University of Sharjah, University of Wollongong, Middlesex, Hult & INSEAD. 1-Year program. 2-Year post-study work visa. UAE Golden Visa pathway.
          </p>
          <div class="mt-8 grid grid-cols-2 gap-4">
            <div class="flex items-start gap-3 bg-white/10 backdrop-blur p-4 rounded-2xl border border-white/20">
              <i data-lucide="check-circle" class="w-5 h-5 text-green-300 mt-0.5 shrink-0"></i>
              <span class="font-semibold">Top B-Schools</span>
            </div>
            <div class="flex items-start gap-3 bg-white/10 backdrop-blur p-4 rounded-2xl border border-white/20">
              <i data-lucide="check-circle" class="w-5 h-5 text-green-300 mt-0.5 shrink-0"></i>
              <span class="font-semibold">Paid Internships</span>
            </div>
            <div class="flex items-start gap-3 bg-white/10 backdrop-blur p-4 rounded-2xl border border-white/20">
              <i data-lucide="check-circle" class="w-5 h-5 text-green-300 mt-0.5 shrink-0"></i>
              <span class="font-semibold">2-Yr Work Visa</span>
            </div>
            <div class="flex items-start gap-3 bg-white/10 backdrop-blur p-4 rounded-2xl border border-white/20">
              <i data-lucide="check-circle" class="w-5 h-5 text-green-300 mt-0.5 shrink-0"></i>
              <span class="font-semibold">UAE Golden Visa</span>
            </div>
          </div>
          <a href="${root}study-abroad/mba-in-dubai" class="mt-10 inline-flex items-center gap-2 bg-white text-blue-900 font-bold px-7 py-3.5 rounded-full hover:shadow-2xl transition-all">
            MBA in Dubai <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </a>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-24">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <span class="inline-block bg-blue-100 text-blue-700 text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full">Student Reviews</span>
          <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4">Real Stories. Real Success.</h2>
        </div>
        <div class="grid md:grid-cols-3 gap-6">
          ${testimonials.map((t, i) => `
            <div class="relative p-8 rounded-3xl bg-white border border-slate-200 hover:shadow-2xl transition animate-fade-up" style="transition-delay: ${(i % 3) * 100}ms">
              <div class="text-yellow-400 flex gap-0.5 mb-3">
                <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                <i data-lucide="star" class="w-5 h-5 fill-current"></i>
              </div>
              <p class="text-slate-700 text-lg leading-relaxed italic">"${t.text}"</p>
              <div class="mt-6 flex items-center gap-3 pt-5 border-t border-slate-100">
                <img src="${[IMG.students, IMG.students2, IMG.students3, IMG.classroom, IMG.classroom2, IMG.departure][i % 6]}" alt="${t.name}" class="w-12 h-12 rounded-full object-cover ring-2 ring-blue-100" />
                <div>
                  <div class="font-bold text-slate-900">${t.name}</div>
                  <div class="text-xs text-slate-500">${t.role}</div>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="relative py-24 text-white overflow-hidden">
      <div class="absolute inset-0 bg-cover bg-center opacity-20" style="background-image: url('${IMG.airport}')"></div>
      <div class="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-green-900"></div>
      <div class="relative max-w-7xl mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <span class="inline-block bg-white/15 backdrop-blur border border-white/30 text-white text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full">Admission Process</span>
          <h2 class="text-4xl md:text-5xl font-extrabold text-white mt-4">6 Simple Steps to Your MBBS Abroad</h2>
          <p class="text-white/80 mt-4 text-lg">From counseling to airport pickup — we manage everything in under 60 days.</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${[
            { t: "Free Counseling", d: "1-on-1 session with expert counselor to shortlist country & universities.", icon: "users" },
            { t: "Profile Assessment", d: "Review marks, NEET score & documents. Prepare SOP & LOR.", icon: "file-check" },
            { t: "University Application", d: "Direct submission to partner universities with priority processing.", icon: "building-2" },
            { t: "Offer Letter", d: "Receive official university offer letter within 15-30 days.", icon: "award" },
            { t: "Visa Processing", d: "Complete loan, visa documentation and interview preparation.", icon: "globe" },
            { t: "Departure", d: "Pre-departure briefing, airport pickup & on-ground support abroad.", icon: "plane" }
          ].map((s, i) => `
            <div class="relative p-8 rounded-3xl bg-white hover:shadow-2xl hover:-translate-y-1 transition-all animate-fade-up" style="transition-delay: ${(i % 3) * 100}ms">
              <div class="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-700 to-green-600 text-white flex items-center justify-center text-2xl font-extrabold shadow-lg">
                ${i + 1}
              </div>
              <div class="inline-flex p-3 bg-gradient-to-br from-blue-100 to-green-100 text-blue-700 rounded-2xl">
                <i data-lucide="${s.icon}" class="w-7 h-7"></i>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mt-4">${s.t}</h3>
              <p class="text-slate-600 mt-2 text-sm leading-relaxed">${s.d}</p>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-24">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-14">
          <span class="inline-block bg-blue-100 text-blue-700 text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full">FAQ</span>
          <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4">Frequently Asked Questions</h2>
        </div>
        <div class="space-y-4">
          ${faqs.map((f, i) => `
            <div class="p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition">
              <h4 class="font-bold text-slate-900 text-lg flex items-start gap-3"><span class="text-green-600">Q${String(i + 1).padStart(2, "0")}.</span>${f.q}</h4>
              <p class="text-slate-700 mt-3 pl-8 leading-relaxed">${f.a}</p>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- Blog split -->
    <section class="py-24 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex flex-wrap items-end justify-between gap-4 mb-14">
          <div>
            <span class="inline-block bg-green-100 text-green-700 text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full">Latest Articles</span>
            <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4">From Our Blog</h2>
          </div>
          <a href="${root}blog" class="inline-flex items-center gap-2 text-blue-700 font-bold">View All <i data-lucide="arrow-right" class="w-4 h-4"></i></a>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${blogs.map((b, i) => `
            <a href="${root}blog/${b.slug}" class="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all block">
              <div class="relative h-56 overflow-hidden">
                <img src="${[IMG.campus, IMG.classroom, IMG.dubai, IMG.airport, IMG.university, IMG.students][i % 6]}" alt="${b.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div class="absolute top-4 left-4 bg-white/95 text-slate-900 px-3 py-1.5 rounded-full text-xs font-bold">${b.category}</div>
              </div>
              <div class="p-6">
                <div class="text-xs text-slate-500">${b.date}</div>
                <h3 class="text-lg font-bold text-slate-900 mt-2 group-hover:text-blue-700 transition">${b.title}</h3>
                <p class="text-sm text-slate-600 mt-3">${b.excerpt}</p>
                <div class="mt-5 text-blue-700 font-bold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">Read Article <i data-lucide="arrow-right" class="w-4 h-4"></i></div>
              </div>
            </a>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- Big CTA -->
    <section class="relative py-28 text-white overflow-hidden">
      <div class="absolute inset-0 bg-center bg-cover" style="background-image: url('${IMG.departure}')"></div>
      <div class="absolute inset-0 bg-gradient-to-br from-blue-950/95 to-green-900/90"></div>
      <div class="relative max-w-4xl mx-auto px-4 text-center">
        <i data-lucide="trending-up" class="w-12 h-12 mx-auto text-green-300"></i>
        <h2 class="text-4xl md:text-6xl font-extrabold mt-6 leading-tight">Ready to Start Your MBBS Abroad Journey?</h2>
        <p class="mt-6 text-xl text-white/90 max-w-2xl mx-auto">Book your free 1-on-1 counseling session today. We'll help you shortlist the best country and university based on your profile, budget & career goals — absolutely free.</p>
        <div class="mt-10 flex flex-wrap justify-center gap-4">
          <a href="${root}contact" class="inline-flex items-center gap-2 bg-white text-blue-900 font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:-translate-y-1 transition-all text-lg">
            Book Free Counseling <i data-lucide="arrow-right" class="w-5 h-5"></i>
          </a>
          <a href="https://wa.me/918287216902" class="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg text-lg">
            💬 WhatsApp Now
          </a>
          <a href="tel:+918287216902" class="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/30 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full transition-all text-lg">
            <i data-lucide="phone" class="w-5 h-5"></i> Call +91 82872 16902
          </a>
        </div>
      </div>
    </section>
  `;
  return wrapPage(content, "Your MBBS Abroad Journey Begins Here", "Study MBBS in Georgia, Uzbekistan, Kazakhstan, Russia, Europe & Caribbean. Direct admissions, zero donation, 100% visa success.", "index.html", "home");
}

// 2. ABOUT PAGE (about.html)
function buildAbout(root) {
  const content = `
    ${getPageHeroHTML("About TrueMark Edu", "India's most trusted study abroad consultancy helping thousands of students achieve their MBBS and international education dreams.", [{ name: "Home", to: `${root}index` }, { name: "About Us" }])}
    
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span class="text-green-700 font-semibold text-sm uppercase tracking-wider">Who We Are</span>
          <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">True guidance. Global destinations.</h2>
          <p class="text-slate-600 mt-4">Founded with a mission to simplify the complex journey of studying abroad, TrueMark Edu has helped thousands of Indian students secure admissions in top medical universities worldwide. From Georgia to Italy, from Uzbekistan to the Czech Republic — we guide students at every step.</p>
          <p class="text-slate-600 mt-4">We believe in complete transparency, zero donations, and a student-first approach that makes the overseas education journey smooth and stress-free.</p>
          <ul class="mt-6 grid md:grid-cols-2 gap-3 text-slate-700">
            ${["10+ Years of Experience", "5000+ Students Placed", "15+ Countries Covered", "Direct University Ties", "No Donation Policy", "24x7 Student Support"].map(p => `
              <li class="flex items-start gap-2"><i data-lucide="check-circle" class="w-5 h-5 text-green-600 shrink-0 mt-0.5"></i> ${p}</li>
            `).join("")}
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

    <section class="py-20 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900">Our Mission, Vision & Values</h2>
        </div>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-xl transition">
            <div class="inline-flex p-3 bg-green-50 text-green-700 rounded-xl"><i data-lucide="target" class="w-8 h-8"></i></div>
            <h3 class="text-xl font-bold text-slate-900 mt-4">Our Mission</h3>
            <p class="text-slate-600 mt-3">Make quality medical and international education accessible, affordable and hassle-free for every deserving Indian student.</p>
          </div>
          <div class="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-xl transition">
            <div class="inline-flex p-3 bg-green-50 text-green-700 rounded-xl"><i data-lucide="heart" class="w-8 h-8"></i></div>
            <h3 class="text-xl font-bold text-slate-900 mt-4">Our Vision</h3>
            <p class="text-slate-600 mt-3">To become India's most trusted study abroad brand, transforming thousands of careers with honest guidance and global opportunities.</p>
          </div>
          <div class="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-xl transition">
            <div class="inline-flex p-3 bg-green-50 text-green-700 rounded-xl"><i data-lucide="shield-check" class="w-8 h-8"></i></div>
            <h3 class="text-xl font-bold text-slate-900 mt-4">Our Values</h3>
            <p class="text-slate-600 mt-3">Transparency, integrity, student-first, zero-donation policy and commitment to long-term student success.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20">
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
  `;
  return wrapPage(content, "About Us", "Learn about TrueMark Edu, our leadership team, our values, and why thousands of Indian families trust us.", "about.html", "about");
}

// 3. SERVICES PAGE (services.html)
function buildServices(root) {
  const content = `
    ${getPageHeroHTML("Our Services", "End-to-end services from country selection, university admission, visa processing, coaching, scholarships to departure.", [{ name: "Home", to: `${root}index` }, { name: "Services" }])}
    
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${services.map((s) => `
            <div class="p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-xl hover:border-green-300 transition">
              <div class="inline-flex p-3 bg-green-50 text-green-700 rounded-xl"><i data-lucide="${s.icon}" class="w-8 h-8"></i></div>
              <h3 class="text-lg font-bold text-slate-900 mt-4">${s.title}</h3>
              <p class="text-slate-600 text-sm mt-2">${s.desc}</p>
              <a href="${root}contact" class="mt-4 inline-flex items-center gap-1 text-sm text-blue-700 font-semibold hover:gap-2 transition-all">Know More <i data-lucide="arrow-right" class="w-4 h-4"></i></a>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
    
    <section class="py-20 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900">Why Choose TrueMark Edu?</h2>
          <p class="text-slate-600 mt-4">We bring a student-first approach with complete transparency. No donations, no hidden fees, only honest guidance and direct university admissions.</p>
          <ul class="mt-6 space-y-3 text-slate-700">
            ${["Free 1-on-1 counseling session", "Direct partnerships with 50+ universities", "End-to-end documentation support", "IELTS / PTE / OET / NExT coaching", "Loan & scholarship assistance", "Pre-departure & on-ground support"].map(p => `
              <li class="flex items-start gap-2"><i data-lucide="check-circle" class="w-5 h-5 text-green-600 shrink-0 mt-0.5"></i> ${p}</li>
            `).join("")}
          </ul>
        </div>
        <div class="p-8 rounded-2xl bg-white border border-slate-200 shadow-lg">
          <h3 class="text-xl font-bold text-slate-900">Simple 6-Step Process</h3>
          <ol class="mt-6 space-y-4">
            ${[
              "Free Counseling & Profile Assessment",
              "Shortlist Country & Universities",
              "Application Submission & Offer Letter",
              "Documentation, Loan & Scholarship",
              "Visa Filing & Interview Prep",
              "Pre-departure & Airport Pickup"
            ].map((s, i) => `
              <li class="flex gap-3">
                <span class="w-9 h-9 shrink-0 rounded-full bg-gradient-to-br from-blue-700 to-green-600 text-white font-bold flex items-center justify-center">${i + 1}</span>
                <span class="text-slate-700 pt-1">${s}</span>
              </li>
            `).join("")}
          </ol>
        </div>
      </div>
    </section>
  `;
  return wrapPage(content, "Our Services", "Admission guidance, visa processing, scholarships, travel briefing and local support abroad.", "services.html", "services");
}

// 4. CONTACT PAGE (contact.html)
function buildContact(root) {
  const content = `
    ${getPageHeroHTML("Contact TrueMark Edu", "Get in touch with our expert counselors. We're happy to help you with any questions about MBBS abroad, Europe admissions, visa and coaching.", [{ name: "Home", to: `${root}index` }, { name: "Contact" }])}
    
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-8">
        <div class="lg:col-span-1 space-y-6">
          <div class="p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition">
            <div class="flex gap-4">
              <div class="inline-flex p-3 bg-green-50 text-green-700 rounded-xl shrink-0"><i data-lucide="map-pin" class="w-6 h-6"></i></div>
              <div>
                <h4 class="font-bold text-slate-900">Office Address</h4>
                <p class="text-sm text-slate-600">C95, Sector 2, Noida,</p>
                <p class="text-sm text-slate-600">Uttar Pradesh 201301, India</p>
              </div>
            </div>
          </div>
          <div class="p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition">
            <div class="flex gap-4">
              <div class="inline-flex p-3 bg-green-50 text-green-700 rounded-xl shrink-0"><i data-lucide="phone" class="w-6 h-6"></i></div>
              <div>
                <h4 class="font-bold text-slate-900">Call / WhatsApp</h4>
                <p class="text-sm text-slate-600">Anandita Jitt: +91 82872 16902</p>
                <p class="text-sm text-slate-600">Haidar Ali: +91 99996 06211</p>
              </div>
            </div>
          </div>
          <div class="p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition">
            <div class="flex gap-4">
              <div class="inline-flex p-3 bg-green-50 text-green-700 rounded-xl shrink-0"><i data-lucide="mail" class="w-6 h-6"></i></div>
              <div>
                <h4 class="font-bold text-slate-900">Email</h4>
                <p class="text-sm text-slate-600">contact@truemarkedu.com</p>
                <p class="text-sm text-slate-600">admissions@truemarkedu.com</p>
              </div>
            </div>
          </div>
          <div class="p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition">
            <div class="flex gap-4">
              <div class="inline-flex p-3 bg-green-50 text-green-700 rounded-xl shrink-0"><i data-lucide="clock" class="w-6 h-6"></i></div>
              <div>
                <h4 class="font-bold text-slate-900">Working Hours</h4>
                <p class="text-sm text-slate-600">Mon - Sat: 10:00 AM - 7:00 PM</p>
                <p class="text-sm text-slate-600">Sunday: By Appointment</p>
              </div>
            </div>
          </div>
          
          <a href="https://wa.me/918287216902" target="_blank" rel="noreferrer" class="flex items-center gap-3 p-6 rounded-2xl bg-green-600 text-white hover:bg-green-700 transition">
            <i data-lucide="message-square" class="w-6 h-6"></i>
            <div>
              <div class="font-bold">Chat with us on WhatsApp</div>
              <div class="text-sm opacity-90">Quick replies, 100% free counseling</div>
            </div>
          </a>
        </div>
        <div class="lg:col-span-2">
          ${getContactFormHTML()}
          <div class="mt-6 rounded-2xl overflow-hidden border border-slate-200 h-80">
            <iframe
              title="TrueMark Edu Office Map"
              src="https://www.google.com/maps?q=C95,+Sector+2,+Noida,+201301&output=embed"
              class="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  `;
  return wrapPage(content, "Contact Us", "Connect with TrueMark Edu. Get our address, contact numbers, email and WhatsApp directly.", "contact.html", "contact");
}

// 5. BLOG LISTING PAGE (blog.html)
function buildBlogList(root) {
  const content = `
    ${getPageHeroHTML("Blog & Articles", "Latest articles, guides and updates on MBBS abroad, European admissions, IMAT, FMGE and international education.", [{ name: "Home", to: `${root}index` }, { name: "Blog" }])}
    
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${blogs.map((b) => `
          <a href="${root}blog/${b.slug}" class="group bg-white rounded-2xl border border-slate-200 hover:shadow-xl transition overflow-hidden block">
            <div class="h-48 bg-gradient-to-br from-blue-700 to-green-600 flex items-center justify-center text-white text-5xl">📚</div>
            <div class="p-6">
              <div class="text-xs text-green-700 font-semibold">${b.category} · ${b.date}</div>
              <h3 class="text-lg font-bold text-slate-900 mt-2 group-hover:text-blue-700 transition">${b.title}</h3>
              <p class="text-sm text-slate-600 mt-2">${b.excerpt}</p>
              <div class="mt-4 text-blue-700 font-semibold text-sm">Read Article →</div>
            </div>
          </a>
        `).join("")}
      </div>
    </section>
  `;
  return wrapPage(content, "Blog & Articles", "Explore guides, insights, test prep tips and admission guidelines from our blog.", "blog.html", "blog");
}

// 6. UNIVERSITIES LISTING PAGE (universities.html)
function buildUniversities(root) {
  const content = `
    ${getPageHeroHTML("Top Medical Universities", "Explore NMC & WHO approved medical universities across 15+ countries. Each university page includes fees, eligibility, hostel, food, recognition and FMGE eligibility.", [{ name: "Home", to: `${root}index` }, { name: "Universities" }])}
    
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${universities.map((u, i) => {
          const image = countryCardImages[i % countryCardImages.length];
          return `
            <div class="group bg-white rounded-3xl border border-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all overflow-hidden font-sans">
              <div class="relative h-56 overflow-hidden">
                <img src="${image}" alt="${u.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                <div class="absolute top-4 left-4 bg-white/95 text-slate-900 px-3 py-1.5 rounded-full text-xs font-bold">${u.flag} {u.country}</div>
                <div class="absolute top-4 right-4 bg-yellow-400 text-slate-900 px-3 py-1.5 rounded-full text-xs font-bold">${u.qs}</div>
              </div>
              <div class="p-6">
                <h3 class="text-lg font-extrabold text-slate-900 group-hover:text-blue-700 transition">${u.name}</h3>
                <div class="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div class="bg-slate-50 p-3 rounded-xl">
                    <div class="text-xs text-slate-500">Fees</div>
                    <div class="font-bold text-slate-900 text-sm">${u.fees}</div>
                  </div>
                  <div class="bg-slate-50 p-3 rounded-xl">
                    <div class="text-xs text-slate-500">Duration</div>
                    <div class="font-bold text-slate-900 text-sm">${u.duration}</div>
                  </div>
                </div>
                <a href="${root}universities/${u.slug}" class="mt-5 text-blue-700 font-bold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">View University Details <i data-lucide="arrow-right" class="w-4 h-4"></i></a>
              </div>
            </div>
          `;
        }).join("")}
      </div>
    </section>
  `;
  return wrapPage(content, "Top Medical Universities", "Explore top partner universities worldwide with their complete fees structures and eligibility criteria.", "universities.html", "universities");
}

// 7. MBBS ABROAD OVERVIEW (mbbs-abroad.html)
function buildMBBSAbroad(root) {
  const content = `
    ${getPageHeroHTML("MBBS Abroad - The Complete Indian Student Guide", "Study MBBS abroad in NMC-approved universities with zero donation. Compare Georgia, Uzbekistan, Kazakhstan, Russia, Kyrgyzstan, St. Lucia & more.", [{ name: "Home", to: `${root}index` }, { name: "MBBS Abroad" }])}
    
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2 space-y-10">
          <div>
            <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900">Top Countries for MBBS Abroad</h2>
            <p class="text-slate-600 mt-3">Explore all the NMC-approved, budget-friendly destinations for Indian medical aspirants.</p>
          </div>
          <div class="grid md:grid-cols-2 gap-6">
            ${mbbsCountries.map((c, i) => getCountryCardHTML(c, root, i)).join("")}
          </div>

          <div class="p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-green-50 border border-slate-200">
            <h2 class="text-2xl font-bold text-slate-900">Why Study MBBS Abroad?</h2>
            <ul class="grid md:grid-cols-2 gap-3 mt-4 text-slate-700">
              ${["Total cost starts from ₹ 18 Lakhs only", "NMC & WHO approved universities", "No donation / No capitation fees", "Direct admission on 12th marks & NEET", "English medium education", "Indian food & hostel available", "Modern hospitals & clinical training", "Global degree, worldwide practice options"].map(p => `
                <li class="flex items-start gap-2"><i data-lucide="check-circle" class="w-5 h-5 text-green-600 shrink-0 mt-0.5"></i> ${p}</li>
              `).join("")}
            </ul>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-slate-900">Student Reviews</h2>
            <div class="grid md:grid-cols-2 gap-4 mt-5">
              ${testimonials.slice(0, 4).map((t, i) => `
                <div class="p-5 bg-white border border-slate-200 rounded-2xl">
                  <div class="text-yellow-400">
                    <i data-lucide="star" class="w-4 h-4 fill-current inline"></i>
                    <i data-lucide="star" class="w-4 h-4 fill-current inline"></i>
                    <i data-lucide="star" class="w-4 h-4 fill-current inline"></i>
                    <i data-lucide="star" class="w-4 h-4 fill-current inline"></i>
                    <i data-lucide="star" class="w-4 h-4 fill-current inline"></i>
                  </div>
                  <p class="text-slate-700 mt-2 text-sm italic">"${t.text}"</p>
                  <div class="mt-3 text-sm font-bold text-slate-900">${t.name}</div>
                  <div class="text-xs text-slate-500">${t.role}</div>
                </div>
              `).join("")}
            </div>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <div class="space-y-3">
              ${faqs.map((f, i) => `
                <div class="p-5 bg-white border border-slate-200 rounded-2xl">
                  <h4 class="font-bold text-slate-900">${f.q}</h4>
                  <p class="text-slate-700 mt-2 text-sm">${f.a}</p>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
        <aside>${getContactFormHTML()}</aside>
      </div>
    </section>
  `;
  return wrapPage(content, "MBBS Abroad Guide", "NMC approved medical degrees in Georgia, Central Asia, Russia and the Caribbean.", "mbbs-abroad.html", "mbbs-abroad");
}

// 8. MBBS IN EUROPE OVERVIEW (mbbs-in-europe.html)
function buildMBBSEurope(root) {
  const content = `
    ${getPageHeroHTML("MBBS in Europe", "Study MBBS in Europe - EU-recognized degrees, public universities with zero tuition in Italy, and high FMGE/NExT passing rates in Czech, Romania & Bulgaria.", [{ name: "Home", to: `${root}index` }, { name: "MBBS in Europe" }])}
    
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2 space-y-10">
          <div class="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-green-50 border border-slate-200">
            <h2 class="text-3xl font-extrabold text-slate-900">Why MBBS in Europe?</h2>
            <p class="text-slate-600 mt-3">European universities rank among the world's best medical schools. Many public universities charge zero tuition. EU degrees are globally recognized and Indian students get excellent FMGE/NExT results.</p>
            <ul class="grid md:grid-cols-2 gap-3 mt-5 text-slate-700">
              ${["EU-WHO-NMC recognized degrees", "Zero or low tuition in public universities", "English-medium curriculum", "Top-ranked universities like Charles, Sapienza, Carol Davila", "Schengen countries — travel Europe", "Best FMGE / NExT pass rates"].map(p => `
                <li class="flex items-start gap-2"><i data-lucide="check-circle" class="w-5 h-5 text-green-600 shrink-0 mt-0.5"></i> ${p}</li>
              `).join("")}
            </ul>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            ${europeCountries.map((c, i) => getCountryCardHTML(c, root, i)).join("")}
          </div>

          <div class="p-8 rounded-3xl bg-gradient-to-r from-blue-800 to-green-700 text-white shadow-xl animate-fade-up">
            <h3 class="text-2xl md:text-3xl font-extrabold">IMAT Exam for Italy — Zero Tuition Fee</h3>
            <p class="mt-3 text-white/90 text-lg">Through the IMAT exam, Indian students can study MBBS in Italian public universities at almost zero tuition. Sapienza Rome, Milan, Bologna, Pavia are top choices.</p>
            <a href="${root}mbbs-in-europe/italy" class="mt-5 inline-flex items-center bg-white text-blue-800 font-bold px-6 py-3 rounded-full hover:shadow-xl transition btn-shine">MBBS in Italy <i data-lucide="arrow-right" class="w-4 h-4 ml-2"></i></a>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <div class="space-y-3">
              ${faqs.slice(0, 4).map((f, i) => `
                <div class="p-5 bg-white border border-slate-200 rounded-2xl">
                  <h4 class="font-bold text-slate-900">${f.q}</h4>
                  <p class="text-slate-700 mt-2 text-sm">${f.a}</p>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
        <aside>${getContactFormHTML()}</aside>
      </div>
    </section>
  `;
  return wrapPage(content, "MBBS in Europe Guide", "EU accredited degree in Italy, Romania, Czech, Slovakia, Bulgaria and Spain.", "mbbs-in-europe.html", "mbbs-in-europe");
}

// 9. STUDY ABROAD OVERVIEW (study-abroad.html)
function buildStudyAbroad(root) {
  const content = `
    ${getPageHeroHTML("Study Abroad Programs", "MBA in Dubai, Germany, Canada, USA, UK, Australia & more — with scholarships, admissions, visa & pre-departure support.", [{ name: "Home", to: `${root}index` }, { name: "Study Abroad" }])}
    
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2 space-y-8">
          <div class="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-green-50 border border-slate-200">
            <h2 class="text-3xl font-extrabold text-slate-900">Programs Beyond MBBS</h2>
            <p class="text-slate-600 mt-3">We help students with Master's, MBA, BBA, Engineering, Data Science, Public Health, Hotel Management & Law programs across Dubai, Germany, Canada, USA, UK & Australia.</p>
            <ul class="grid md:grid-cols-2 gap-2 mt-5 text-slate-700">
              ${["Scholarships up to 100% tuition", "Admission in top 100 global universities", "SOP, LOR & profile building", "Loan assistance", "Post-study work visa guidance", "Pre-departure & accommodation support"].map(p => `
                <li class="flex items-start gap-2"><i data-lucide="check-circle" class="w-5 h-5 text-green-600 shrink-0 mt-0.5"></i> ${p}</li>
              `).join("")}
            </ul>
          </div>
          <div class="grid md:grid-cols-2 gap-6">
            ${programs.map((p) => `
              <a href="${root}study-abroad/${p.slug}" class="group bg-white rounded-2xl border border-slate-200 hover:shadow-xl transition p-6 block">
                <h3 class="text-xl font-bold text-slate-900">${p.title}</h3>
                <p class="text-sm text-slate-600 mt-2">${p.tagline}</p>
                <div class="mt-4 text-sm text-slate-500">
                  <div><b class="text-slate-700">Fees:</b> ${p.fees}</div>
                  <div><b class="text-slate-700">Duration:</b> ${p.duration}</div>
                </div>
                <div class="mt-4 text-blue-700 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">Explore <i data-lucide="arrow-right" class="w-4 h-4"></i></div>
              </a>
            `).join("")}
          </div>
        </div>
        <aside>${getContactFormHTML()}</aside>
      </div>
    </section>
  `;
  return wrapPage(content, "Study Abroad Programs", "Expand your career horizons with postgraduate, master's and MBA courses in UAE, Germany, USA and Canada.", "study-abroad.html", "study-abroad");
}

// 10. DYNAMIC COUNTRY PAGE (mbbs-abroad/[country].html and mbbs-in-europe/[country].html)
function buildCountryPage(country, variant, root) {
  const content = `
    ${getPageHeroHTML(`MBBS in ${country.name}`, country.tagline, [{ name: "Home", to: `${root}index` }, { name: variant === "europe" ? "MBBS in Europe" : "MBBS Abroad", to: variant === "europe" ? `${root}mbbs-in-europe` : `${root}mbbs-abroad` }, { name: country.name }])}
    
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4">
        <a href="${variant === "europe" ? `${root}mbbs-in-europe` : `${root}mbbs-abroad`}" class="text-blue-700 inline-flex items-center gap-2 mb-8 text-sm"><i data-lucide="arrow-left" class="w-4 h-4"></i> Back</a>

        <div class="grid lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2 space-y-8">
            <div class="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-green-50 border border-slate-200">
              <div class="text-6xl">${country.flag}</div>
              <h1 class="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4">MBBS in ${country.name}</h1>
              <p class="text-slate-700 mt-3 text-lg">${country.description}</p>
              <div class="grid sm:grid-cols-3 gap-3 mt-6">
                <div class="bg-white p-4 rounded-xl flex items-start gap-2">
                  <div class="text-green-700"><i data-lucide="clock" class="w-5 h-5"></i></div>
                  <div>
                    <div class="text-xs text-slate-500">Duration</div>
                    <div class="font-bold text-slate-900 text-sm">${country.duration}</div>
                  </div>
                </div>
                <div class="bg-white p-4 rounded-xl flex items-start gap-2">
                  <div class="text-green-700"><i data-lucide="wallet" class="w-5 h-5"></i></div>
                  <div>
                    <div class="text-xs text-slate-500">Fees</div>
                    <div class="font-bold text-slate-900 text-sm">${country.fees}</div>
                  </div>
                </div>
                <div class="bg-white p-4 rounded-xl flex items-start gap-2">
                  <div class="text-green-700"><i data-lucide="globe-2" class="w-5 h-5"></i></div>
                  <div>
                    <div class="text-xs text-slate-500">Medium</div>
                    <div class="font-bold text-slate-900 text-sm">${country.language}</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="p-6 rounded-2xl bg-white border border-slate-200">
              <h2 class="text-2xl font-bold text-slate-900 mb-4">Highlights</h2>
              <ul class="grid md:grid-cols-2 gap-2 text-slate-700">
                ${country.highlights.map((h) => `
                  <li class="flex items-start gap-2"><i data-lucide="check-circle" class="w-5 h-5 text-green-600 shrink-0 mt-0.5"></i> ${h}</li>
                `).join("")}
              </ul>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div class="p-6 rounded-2xl bg-white border border-slate-200">
                <div class="inline-flex p-3 bg-blue-50 text-blue-700 rounded-xl"><i data-lucide="graduation-cap" class="w-6 h-6"></i></div>
                <h3 class="text-lg font-bold text-slate-900 mt-3">Eligibility Criteria</h3>
                <ul class="mt-3 space-y-2 text-slate-700 text-sm">
                  ${country.eligibility.map((e) => `<li class="flex items-start gap-2"><i data-lucide="check-circle" class="w-4 h-4 text-green-600 shrink-0 mt-0.5"></i> ${e}</li>`).join("")}
                </ul>
              </div>
              <div class="p-6 rounded-2xl bg-white border border-slate-200">
                <div class="inline-flex p-3 bg-green-50 text-green-700 rounded-xl"><i data-lucide="award" class="w-6 h-6"></i></div>
                <h3 class="text-lg font-bold text-slate-900 mt-3">Recognition</h3>
                <ul class="mt-3 space-y-2 text-slate-700 text-sm">
                  ${country.recognition.map((e) => `<li class="flex items-start gap-2"><i data-lucide="check-circle" class="w-4 h-4 text-green-600 shrink-0 mt-0.5"></i> ${e}</li>`).join("")}
                </ul>
              </div>
            </div>

            <div class="p-6 rounded-2xl bg-white border border-slate-200">
              <h2 class="text-2xl font-bold text-slate-900 mb-4">Top Medical Universities in ${country.name}</h2>
              <ul class="space-y-2 text-slate-700">
                ${country.topUniversities.map((u) => `<li class="flex items-start gap-2 p-3 bg-slate-50 rounded-lg"><i data-lucide="check-circle" class="w-5 h-5 text-green-600 shrink-0 mt-0.5"></i> ${u}</li>`).join("")}
              </ul>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div class="p-6 rounded-2xl bg-white border border-slate-200">
                <h3 class="text-lg font-bold text-slate-900">Hostel & Accommodation</h3>
                <p class="text-sm text-slate-700 mt-2">${country.hostel}</p>
              </div>
              <div class="p-6 rounded-2xl bg-white border border-slate-200">
                <h3 class="text-lg font-bold text-slate-900">Indian Food Availability</h3>
                <p class="text-sm text-slate-700 mt-2">${country.food}</p>
              </div>
            </div>

            <div class="p-6 rounded-2xl bg-white border border-slate-200">
              <h2 class="text-2xl font-bold text-slate-900 mb-4">Admission Process</h2>
              <ol class="space-y-3">
                ${country.process.map((p, i) => `
                  <li class="flex items-start gap-3 bg-slate-50 p-4 rounded-xl">
                    <span class="w-8 h-8 shrink-0 rounded-full bg-gradient-to-br from-blue-700 to-green-600 text-white text-sm font-bold flex items-center justify-center">${i + 1}</span>
                    <span class="text-slate-700 pt-1">${p}</span>
                  </li>
                `).join("")}
              </ol>
            </div>

            <div class="p-6 rounded-2xl bg-white border border-slate-200">
              <h2 class="text-2xl font-bold text-slate-900 mb-4">FAQs - MBBS in ${country.name}</h2>
              <div class="space-y-3">
                ${faqs.map((f, i) => `
                  <div class="p-5 bg-slate-50 rounded-xl">
                    <h4 class="font-bold text-slate-900 text-sm">${f.q}</h4>
                    <p class="text-slate-700 mt-2 text-sm">${f.a}</p>
                  </div>
                `).join("")}
              </div>
            </div>

            <div class="p-8 rounded-2xl bg-gradient-to-r from-blue-800 to-green-700 text-white">
              <h2 class="text-2xl md:text-3xl font-bold">Ready to apply for MBBS in ${country.name}?</h2>
              <p class="mt-3 text-white/90">Talk to our expert counselor today for free 1-on-1 guidance, country comparison and seat confirmation.</p>
              <a href="${root}contact" class="mt-5 inline-flex items-center bg-white text-blue-800 font-semibold px-5 py-3 rounded-full hover:shadow-xl transition">Book Free Counseling <i data-lucide="arrow-right" class="w-4 h-4 ml-1"></i></a>
            </div>
          </div>
          <aside>${getContactFormHTML()}</aside>
        </div>
      </div>
    </section>
  `;
  return wrapPage(content, `MBBS in ${country.name}`, country.tagline, `${variant === "europe" ? "mbbs-in-europe" : "mbbs-abroad"}/${country.slug}.html`, variant === "europe" ? "mbbs-in-europe" : "mbbs-abroad");
}

// 11. DYNAMIC PROGRAM PAGE (study-abroad/[slug].html)
function buildProgramPage(pSlug, root) {
  const prog = programData[pSlug];
  const content = `
    ${getPageHeroHTML(prog.title, prog.subtitle, [{ name: "Home", to: `${root}index` }, { name: "Study Abroad", to: `${root}study-abroad` }, { name: prog.title }])}
    
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2 space-y-8">
          <a href="${root}study-abroad" class="text-blue-700 inline-flex items-center gap-2 mb-4 text-sm"><i data-lucide="arrow-left" class="w-4 h-4"></i> Back</a>
          <div class="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-green-50 border border-slate-200">
            <h1 class="text-3xl md:text-4xl font-extrabold text-slate-900">${prog.title}</h1>
            <p class="text-slate-700 mt-3">${prog.subtitle}</p>
            <div class="grid sm:grid-cols-3 gap-3 mt-6">
              <div class="bg-white p-4 rounded-xl"><div class="text-xs text-slate-500">Duration</div><div class="font-bold text-slate-900">${prog.duration}</div></div>
              <div class="bg-white p-4 rounded-xl"><div class="text-xs text-slate-500">Fees</div><div class="font-bold text-slate-900">${prog.fees}</div></div>
              <div class="bg-white p-4 rounded-xl"><div class="text-xs text-slate-500">Intakes</div><div class="font-bold text-slate-900">${prog.intakes.join(", ")}</div></div>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-white border border-slate-200">
            <h2 class="text-2xl font-bold text-slate-900">Highlights</h2>
            <ul class="grid md:grid-cols-2 gap-2 mt-4 text-slate-700">
              ${prog.highlights.map(h => `<li class="flex items-start gap-2"><i data-lucide="check-circle" class="w-5 h-5 text-green-600 shrink-0 mt-0.5"></i>${h}</li>`).join("")}
            </ul>
          </div>

          <div class="p-6 rounded-2xl bg-white border border-slate-200">
            <h2 class="text-2xl font-bold text-slate-900">Top Universities / Business Schools</h2>
            <ul class="mt-4 space-y-2 text-slate-700">
              ${prog.universities.map(u => `<li class="flex items-start gap-2 p-3 bg-slate-50 rounded-lg"><i data-lucide="check-circle" class="w-5 h-5 text-green-600 shrink-0 mt-0.5"></i>${u}</li>`).join("")}
            </ul>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="p-6 rounded-2xl bg-white border border-slate-200">
              <h3 class="text-lg font-bold text-slate-900">Eligibility</h3>
              <ul class="mt-3 space-y-2 text-slate-700 text-sm">
                ${prog.eligibility.map(e => `<li class="flex items-start gap-2"><i data-lucide="check-circle" class="w-4 h-4 text-green-600 shrink-0 mt-0.5"></i>${e}</li>`).join("")}
              </ul>
            </div>
            <div class="p-6 rounded-2xl bg-white border border-slate-200">
              <h3 class="text-lg font-bold text-slate-900">Admission Process</h3>
              <ol class="mt-3 space-y-2 text-slate-700 text-sm">
                ${prog.process.map((p, i) => `<li class="flex gap-2"><span class="w-6 h-6 shrink-0 rounded-full bg-gradient-to-br from-blue-700 to-green-600 text-white text-xs font-bold flex items-center justify-center">${i + 1}</span><span>${p}</span></li>`).join("")}
              </ol>
            </div>
          </div>
        </div>
        <aside>${getContactFormHTML()}</aside>
      </div>
    </section>
  `;
  return wrapPage(content, prog.title, prog.subtitle, `study-abroad/${pSlug}.html`, "study-abroad");
}

// 12. DYNAMIC UNIVERSITY PAGE (universities/[slug].html)
function buildUniversityPage(u, root) {
  const country = [...mbbsCountries, ...europeCountries].find((c) => c.name === u.country);
  
  const sections = [
    { title: "Eligibility Criteria", icon: "graduation-cap", items: u.eligibility },
    { title: "Hostel Facilities", icon: "clock", items: [u.hostel] },
    { title: "Indian Food Availability", icon: "wallet", items: [u.food] },
    { title: "Recognition", icon: "globe-2", items: u.recognition },
    { title: "FMGE / NExT Eligibility", icon: "check-circle", items: [u.fmge] },
    { title: "Admission Process", icon: "graduation-cap", items: u.process }
  ];

  const content = `
    ${getPageHeroHTML(u.name, `${u.country} · ${u.qs} · ${u.duration} · ${u.fees}`, [{ name: "Home", to: `${root}index` }, { name: "Universities", to: `${root}universities` }, { name: u.name }])}
    
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4">
        <a href="${root}universities" class="text-blue-700 inline-flex items-center gap-2 mb-8 text-sm"><i data-lucide="arrow-left" class="w-4 h-4"></i> Back to Universities</a>

        <div class="grid lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2 space-y-8">
            <div class="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-green-50 border border-slate-200">
              <div class="text-6xl mb-4">${u.flag}</div>
              <h1 class="text-3xl font-extrabold text-slate-900">${u.name}</h1>
              <p class="text-slate-600 mt-2">${u.country} · {u.qs}</p>
              <div class="grid sm:grid-cols-3 gap-3 mt-6">
                <div class="bg-white p-4 rounded-xl">
                  <div class="text-xs text-slate-500">Fees</div>
                  <div class="font-bold text-slate-900">${u.fees}</div>
                </div>
                <div class="bg-white p-4 rounded-xl">
                  <div class="text-xs text-slate-500">Duration</div>
                  <div class="font-bold text-slate-900">${u.duration}</div>
                </div>
                <div class="bg-white p-4 rounded-xl">
                  <div class="text-xs text-slate-500">Medium</div>
                  <div class="font-bold text-slate-900">${u.language}</div>
                </div>
              </div>
            </div>

            ${sections.map((s) => `
              <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm font-sans">
                <div class="flex items-center gap-3 mb-4">
                  <div class="p-3 bg-green-50 text-green-700 rounded-xl"><i data-lucide="${s.icon}" class="w-6 h-6"></i></div>
                  <h2 class="text-xl font-bold text-slate-900">${s.title}</h2>
                </div>
                <ul class="space-y-2 text-slate-700">
                  ${s.items.map((it) => `<li class="flex items-start gap-2"><i data-lucide="check-circle" class="w-5 h-5 text-green-600 shrink-0 mt-0.5"></i> ${it}</li>`).join("")}
                </ul>
              </div>
            `).join("")}

            ${country ? `
              <div class="p-6 rounded-2xl bg-gradient-to-r from-blue-700 to-green-600 text-white font-sans">
                <h3 class="text-2xl font-bold">Learn more about MBBS in ${country.name}</h3>
                <p class="mt-2 text-white/90">${country.tagline}</p>
                <a href="${root}mbbs-abroad/${country.slug}" class="mt-4 inline-flex items-center gap-2 bg-white text-blue-800 font-semibold px-5 py-2.5 rounded-full hover:shadow-xl transition">View Country Page →</a>
              </div>
            ` : ""}
          </div>
          <aside>${getContactFormHTML()}</aside>
        </div>
      </div>
    </section>
  `;
  return wrapPage(content, u.name, `${u.name} admission guidance, fees structure and requirements.`, `universities/${u.slug}.html`, "universities");
}

// 13. DYNAMIC BLOG PAGE (blog/[slug].html)
function buildBlogPostPage(b, root) {
  const content = `
    ${getPageHeroHTML(b.title, b.excerpt, [{ name: "Home", to: `${root}index` }, { name: "Blog", to: `${root}blog` }, { name: b.title }])}
    
    <section class="py-20">
      <div class="max-w-4xl mx-auto px-4 font-sans">
        <a href="${root}blog" class="text-blue-700 inline-flex items-center gap-2 mb-8 text-sm"><i data-lucide="arrow-left" class="w-4 h-4"></i> Back to Blog</a>
        <div class="text-sm text-slate-500 mb-4">${b.category} · ${b.date}</div>
        <article class="prose prose-lg max-w-none">
          <p class="text-slate-700 leading-relaxed text-lg mb-6 font-medium">
            ${b.excerpt}
          </p>
          <p class="text-slate-700 leading-relaxed mb-6">
            In this comprehensive guide, we break down everything Indian students need to know about pursuing their international education goals with TrueMark Edu. Studying medical science or professional management courses abroad is a life-changing decision. By choosing the right destination, you open doors to state-of-the-art global clinical practice, direct research projects, and unmatched career advancement.
          </p>
          
          <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Key Highlights</h2>
          <ul class="space-y-3 text-slate-700 mb-8 font-sans">
            ${[
              "NMC and WHO-approved universities only",
              "No donation or capitation fee",
              "Direct admission with minimum eligibility",
              "Indian food and hostel facilities",
              "100% visa support and pre-departure briefing",
              "FMGE / NExT preparation assistance"
            ].map(p => `<li class="flex items-start gap-2"><i data-lucide="check-circle" class="w-5 h-5 text-green-600 shrink-0 mt-0.5"></i> ${p}</li>`).join("")}
          </ul>
          
          <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4 font-sans">Why Students Prefer TrueMark Edu</h2>
          <p class="text-slate-700 leading-relaxed mb-8">
            We are one of the most trusted study abroad consultancies in India because we follow a zero-hidden-fee, student-first approach. From the first counseling call to airport pickup at your destination country — we stand with our students at every step. Our extensive ties with globally ranked government medical schools ensures that you get high-quality clinical training and are perfectly prepared for national licencing screening exams like NExT or USMLE.
          </p>
          
          <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4 font-sans">Frequently Asked Questions</h2>
          <div class="space-y-4 mt-4 font-sans">
            ${faqs.map((f, i) => `
              <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-sm">
                <h4 class="font-bold text-slate-900">Q: ${f.q}</h4>
                <p class="text-slate-700 mt-2 text-sm">A: ${f.a}</p>
              </div>
            `).join("")}
          </div>
        </article>
      </div>
    </section>
  `;
  return wrapPage(content, b.title, b.excerpt, `blog/${b.slug}.html`, "blog");
}


// --- RUN GENERATION LOGIC ---

console.log("Generating static HTML files...");

// Ensure folders exist
const dirs = ["mbbs-abroad", "mbbs-in-europe", "study-abroad", "universities", "blog"];
dirs.forEach(d => {
  if (!fs.existsSync(d)) {
    fs.mkdirSync(d, { recursive: true });
  }
});

// Write Main Pages
fs.writeFileSync("index.html", buildHome("./"));
fs.writeFileSync("about.html", buildAbout("./"));
fs.writeFileSync("services.html", buildServices("./"));
fs.writeFileSync("contact.html", buildContact("./"));
fs.writeFileSync("blog.html", buildBlogList("./"));
fs.writeFileSync("universities.html", buildUniversities("./"));
fs.writeFileSync("mbbs-abroad.html", buildMBBSAbroad("./"));
fs.writeFileSync("mbbs-in-europe.html", buildMBBSEurope("./"));
fs.writeFileSync("study-abroad.html", buildStudyAbroad("./"));

// Write Dynamic Countries (MBBS Abroad)
mbbsCountries.forEach(c => {
  fs.writeFileSync(path.join("mbbs-abroad", `${c.slug}.html`), buildCountryPage(c, "mbbs", "../"));
});

// Write Dynamic Countries (Europe)
europeCountries.forEach(c => {
  fs.writeFileSync(path.join("mbbs-in-europe", `${c.slug}.html`), buildCountryPage(c, "europe", "../"));
});

// Write Dynamic Programs
Object.keys(programData).forEach(pSlug => {
  fs.writeFileSync(path.join("study-abroad", `${pSlug}.html`), buildProgramPage(pSlug, "../"));
});

// Write Dynamic Universities
universities.forEach(u => {
  fs.writeFileSync(path.join("universities", `${u.slug}.html`), buildUniversityPage(u, "../"));
});

// Write Dynamic Blogs
blogs.forEach(b => {
  fs.writeFileSync(path.join("blog", `${b.slug}.html`), buildBlogPostPage(b, "../"));
});

console.log("Static HTML files generated successfully!");

// ---------------- WRITE SCRIPT.JS ----------------

const scriptContent = `// Static HTML Interactive Script for TrueMark Edu

document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Initialize Lucide Icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  // 2. Mobile Menu Toggle
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // 3. Scroll Animations (IntersectionObserver)
  const animElements = document.querySelectorAll(
    ".animate-fade-up, .animate-fade-in, .animate-scale-in, .animate-slide-left, .animate-slide-right"
  );
  
  if (!("IntersectionObserver" in window)) {
    animElements.forEach((el) => el.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );
    
    animElements.forEach((el) => observer.observe(el));
  }

  // 4. Contact / Counseling Form Submission via WhatsApp
  const form = document.getElementById("counseling-form");
  const doneMsg = document.getElementById("form-done-msg");
  
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const name = document.getElementById("form-name").value;
      const phone = document.getElementById("form-phone").value;
      const email = document.getElementById("form-email").value;
      const country = document.getElementById("form-country").value;
      const message = document.getElementById("form-message").value;
      
      if (!name || !phone) {
        alert("Please provide your name and phone number.");
        return;
      }
      
      const text = \`Hi TrueMark Edu! My name is \${name}. My number is \${phone}. Email: \${email}. Interest: \&country=\${country}. Message: \&message=\${message}\`;
      const whatsappURL = \`https://wa.me/918287216902?text=\${encodeURIComponent(text)}\`;
      
      window.open(whatsappURL, "_blank");
      
      if (doneMsg) {
        doneMsg.classList.remove("hidden");
        setTimeout(() => {
          doneMsg.classList.add("hidden");
        }, 6000);
      }
      
      form.reset();
    });
  }
});
`;

fs.writeFileSync("script.js", scriptContent);
console.log("script.js generated successfully!");
