export type Country = {
  slug: string;
  name: string;
  flag: string;
  tagline: string;
  duration: string;
  fees: string;
  language: string;
  intakes: string[];
  topUniversities: string[];
  highlights: string[];
  description: string;
  eligibility: string[];
  hostel: string;
  food: string;
  recognition: string[];
  fmge: string;
  process: string[];
};

export const mbbsCountries: Country[] = [
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

export const europeCountries: Country[] = [
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

export const allCountries: Country[] = [...mbbsCountries, ...europeCountries];

export const universities = [
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

export const testimonials = [
  { name: "Rohan Mehta", role: "MBBS, Tbilisi State Medical University, Georgia", text: "TrueMark Edu made my MBBS in Georgia dream come true. From counseling to visa, everything was smooth. Highly recommended!", rating: 5 },
  { name: "Priya Sharma", role: "MBBS, Carol Davila, Romania", text: "The team guided me through the IMAT and European admissions process. I got into my dream university in Bucharest. Thank you TrueMark!", rating: 5 },
  { name: "Aarav Singh", role: "MBBS, Uzbekistan", text: "Cheapest MBBS abroad option with TrueMark. They told me about Uzbekistan and I saved so much money. Good faculty and Indian food there.", rating: 5 },
  { name: "Ananya Gupta", role: "MBA, Dubai", text: "Best consultancy for MBA in Dubai. Got admission with scholarship. The SOP team was fantastic!", rating: 5 },
  { name: "Kunal Verma", role: "MBBS, Charles University, Czech Republic", text: "TrueMark Edu prepared me for the Charles University entrance test. I cracked it in first attempt. Great mentorship!", rating: 5 },
  { name: "Sneha Reddy", role: "MBBS, Sapienza University, Rome, Italy", text: "Studying MBBS in Italy was unbelievable. TrueMark Edu's IMAT coaching and documentation support is unmatched.", rating: 5 }
];

export const services = [
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

export const blogs = [
  { slug: "mbbs-abroad-complete-guide", title: "MBBS Abroad - A Complete Guide for Indian Students in 2026", date: "12 Jan 2026", category: "MBBS Abroad", excerpt: "Everything you need to know about MBBS abroad including countries, fees, eligibility, NMC guidelines and visa process." },
  { slug: "mbbs-in-europe-cost", title: "MBBS in Europe - Total Cost, Universities & Admission Process", date: "08 Jan 2026", category: "Europe", excerpt: "Compare MBBS in Italy, Romania, Bulgaria, Czech and other EU countries. Find the right European medical university for you." },
  { slug: "imat-exam-preparation", title: "IMAT Exam 2026 - Syllabus, Dates, Preparation Strategy", date: "02 Jan 2026", category: "Italy", excerpt: "International Medical Admission Test (IMAT) complete guide to get into Italian public medical universities with zero tuition." },
  { slug: "cheapest-mbbs-abroad", title: "Cheapest MBBS Abroad Countries for Indian Students Under 25 Lakhs", date: "28 Dec 2025", category: "MBBS Abroad", excerpt: "Looking for budget MBBS abroad? Check Uzbekistan, Kyrgyzstan, Georgia and Kazakhstan with total fees under 25 Lakhs." },
  { slug: "next-exam-preparation-tips", title: "NExT Exam Preparation Tips for FMGE Aspirants", date: "20 Dec 2025", category: "FMGE", excerpt: "Smart study plan, subject-wise weightage, and mock test strategy to crack NExT/FMGE in your first attempt." },
  { slug: "mba-in-dubai-guide", title: "MBA in Dubai - Top Colleges, Fees, Placements & PR", date: "15 Dec 2025", category: "Study Abroad", excerpt: "Complete guide to MBA in UAE/Dubai. Explore top B-schools, cost of living, 2-year post-study work visa and PR options." }
];

export const faqs = [
  { q: "Is MBBS abroad a good option for Indian students?", a: "Yes, MBBS abroad is highly recommended for students who could not get a government medical seat in India. Universities are NMC/WHO approved and degrees are globally recognized." },
  { q: "What is the total cost of MBBS abroad?", a: "Total cost ranges from ₹ 18 Lacs (Uzbekistan) to ₹ 90 Lacs (Czech Republic). Popular options like Georgia cost ₹ 25-35 Lacs total including hostel and food." },
  { q: "Is NEET required for MBBS abroad?", a: "Yes, NEET qualification is mandatory for Indian students to be eligible for the NMC screening test (NExT/FMGE) after completing MBBS abroad." },
  { q: "Is there any donation or capitation fee?", a: "No. In countries like Georgia, Uzbekistan, Russia, Kazakhstan and most European universities, there is NO donation. You pay only tuition and hostel fees." },
  { q: "How long does the admission process take?", a: "Typically 30-60 days from application to visa. We handle the complete process including university application, documentation and visa." },
  { q: "Do you provide FMGE/NExT coaching?", a: "Yes, we provide dedicated FMGE/NExT online coaching to our students so they can practice India alongside their MBBS abroad." }
];
