const fs = require("fs");

let code = fs.readFileSync("generate-html.cjs", "utf8");

// Load the parsed colleges database
const collegesData = JSON.parse(fs.readFileSync("colleges-data.json", "utf8"));

// Define new countries data to append to mbbsCountries
const newCountries = [
  {
    slug: "nepal",
    name: "Nepal",
    flag: "🇳🇵",
    tagline: "High FMGE success & close proximity to India",
    duration: "5.5 Years",
    fees: "₹ 45 – 60 Lacs (Total)",
    language: "English Medium",
    intakes: ["September"],
    topUniversities: ["B.P. Koirala Institute of Health Sciences (BPKIHS)", "Kathmandu University", "Tribhuvan University", "Manipal College of Medical Sciences"],
    highlights: ["NMC Approved", "Similar Syllabus to India", "No Passport Required", "Indian Food & Culture", "High FMGE Passing Ratio"],
    description: "Studying MBBS in Nepal is highly favored by Indian medical students due to its direct academic similarity to the Indian curriculum, shared culture, and geographic proximity. Many NMC approved medical universities and MCI approved universities in Nepal provide outstanding clinical training in local hospitals, leading to excellent FMGE and NExT results without requiring any donation.",
    eligibility: ["NEET Qualified", "50% in PCB", "17+ years of age"],
    hostel: "On-campus hostels with dedicated blocks for Indian students, attached mess.",
    food: "Indian food (both North and South Indian) is readily available everywhere on campus.",
    recognition: ["NMC", "WHO", "EU Recognized"],
    fmge: "Fully eligible for NExT / FMGE screening.",
    process: ["1. Counseling", "2. Registration (Last date: 30 June)", "3. Document Verification", "4. University Entrance / Interview", "5. Seat Confirmation", "6. Travel to Nepal in September"]
  },
  {
    slug: "bangladesh",
    name: "Bangladesh",
    flag: "🇧🇩",
    tagline: "Highest FMGE passing ratio & identical disease pattern",
    duration: "5 Years + 1 Year Internship",
    fees: "₹ 30 – 45 Lacs (Total)",
    language: "English Medium",
    intakes: ["September", "January"],
    topUniversities: ["University of Dhaka", "University of Rajshahi", "Chittagong Medical College", "Sylhet Women's Medical College"],
    highlights: ["Highest FMGE Pass Rate", "Same Disease Spectrum as India", "NMC & WHO Approved", "Low Cost of Living", "English Medium"],
    description: "Pursuing MBBS in Bangladesh is an excellent path for Indian students due to having the highest FMGE passing ratio among all foreign destinations. The disease pattern, syllabus, and study materials are identical to the Indian curriculum. TrueMark Edu—your trusted MBBS abroad consultant—ensures smooth direct MBBS admission abroad in top-tier MCI approved universities in Bangladesh.",
    eligibility: ["NEET Qualified", "GPA 7.0+ in SSC and HSC", "Biology GPA 3.5+"],
    hostel: "Well-built student hostels with 24/7 security and laundry.",
    food: "100% Indian-style mess serving North and South Indian cuisines daily.",
    recognition: ["NMC", "WHO", "BMDC"],
    fmge: "Eligible for NExT / FMGE screening with record passing ratios.",
    process: ["1. Eligibility Matching & Counseling", "2. Apply (Last date: 30 June)", "3. DGHS Equivalence Certificate", "4. Admission Offer & Seat Confirmation", "5. Visa Stamping", "6. Departure"]
  },
  {
    slug: "china",
    name: "China",
    flag: "🇨🇳",
    tagline: "World-class medical research & high-volume clinical practice",
    duration: "5 Years + 1 Year Internship",
    fees: "₹ 25 – 40 Lacs (Total)",
    language: "English Medium",
    intakes: ["September"],
    topUniversities: ["Nanjing Medical University", "Sichuan University", "Zhejiang University", "Huazhong University of Science and Technology"],
    highlights: ["Top Global Rankings", "Cutting-edge Labs", "WHO & NMC Listed", "Affordable Living Cost", "English Medium Program"],
    description: "Choosing to study MBBS in China gives Indian students access to some of the world's most high-tech public medical colleges. Chinese universities are top-tier NMC approved medical universities providing massive clinical volume and advanced diagnostic laboratories. TrueMark Edu helps you navigate the direct MBBS admission abroad process with guaranteed MBBS seat confirmation in English-medium universities.",
    eligibility: ["NEET Qualified", "12th Standard PCB 60%+", "Age 17-25"],
    hostel: "On-campus modern dormitories, fully furnished with heating/cooling.",
    food: "Dedicated halal and Indian food canteens inside the campus.",
    recognition: ["NMC", "WHO", "MOE China"],
    fmge: "Fully eligible for NExT / FMGE screening.",
    process: ["1. Register (Last date: 30 June)", "2. Submit academic transcripts", "3. Video Interview", "4. Admission Letter & JW202 visa document", "5. Student Visa stamping", "6. Flight to China in September"]
  },
  {
    slug: "armenia",
    name: "Armenia",
    flag: "🇦🇲",
    tagline: "Highly economical MBBS in safe European border country",
    duration: "6 Years",
    fees: "₹ 18 – 25 Lacs (Total)",
    language: "English Medium",
    intakes: ["September", "March"],
    topUniversities: ["Yerevan State Medical University", "Yerevan Haybusak University"],
    highlights: ["Super Affordable", "Safe European Environment", "No Entrance Exam", "English Medium", "NMC Approved"],
    description: "Armenia is an incredibly peaceful and safe country bordering Eastern Europe. For students looking for the cheapest MBBS abroad, Armenia offers a world-class English-medium medical program. TrueMark Edu helps you select NMC approved medical universities in Yerevan, providing easy direct MBBS admission abroad with zero donation.",
    eligibility: ["NEET Qualified", "50% PCB in 12th"],
    hostel: "Student hostels near the Yerevan State Medical University.",
    food: "Indian restaurants, tiffin services and mess options available nearby.",
    recognition: ["NMC", "WHO", "EU Recognized"],
    fmge: "Eligible for NExT screening exam.",
    process: ["Apply online → Document verification → Invitation letter → Visa stamping → Flight"]
  },
  {
    slug: "philippines",
    name: "Philippines",
    flag: "🇵🇭",
    tagline: "US-styled medical education with hands-on practice",
    duration: "5.5 Years (BS-MD)",
    fees: "₹ 24 – 35 Lacs (Total)",
    language: "English Medium",
    intakes: ["September", "November"],
    topUniversities: ["Davao Medical School Foundation", "University of Perpetual Help System DALTA", "Gullas College of Medicine"],
    highlights: ["90% English speaking nation", "US Medical Curriculum", "Hands-on Clinical Rotation", "Excellent FMGE pass rate", "WHO & NMC Listed"],
    description: "Studying MBBS in the Philippines offers a unique BS-MD curriculum modeled after the American medical education system. It provides immense practical clinical rotations in busy city hospitals, giving students hands-on patient exposure. TrueMark Edu guides you through the direct MBBS admission abroad, ensuring easy MBBS seat confirmation.",
    eligibility: ["NEET Qualified", "50% in PCB in 12th Grade"],
    hostel: "Affordable student dorms with air-conditioning and Wi-Fi.",
    food: "Indian food, rice, and traditional mess options are widely available.",
    recognition: ["NMC", "WHO", "CHED Philippines"],
    fmge: "Fully eligible for NExT / FMGE screening.",
    process: ["1. Counseling", "2. Admission in BS Course (Last date: 30 June)", "3. NMAT exam guidance", "4. MD program admission", "5. Visa filing", "6. Flight"]
  }
];

// 1. Inject the colleges database into generate-html.cjs
const collegesDatabaseInject = `// --- COLLEGES DETAILED PRICING DATABASE ---
const collegesDatabase = ${JSON.stringify(collegesData, null, 2)};
`;

// Replace database section
code = code.replace("// --- DATA FROM SITE.TS ---", collegesDatabaseInject + "\n// --- DATA FROM SITE.TS ---");

// 2. Append new countries to mbbsCountries array
const parseNewCountries = `const mbbsCountries = [
  ...${JSON.stringify(newCountries, null, 2)},`;
code = code.replace("const mbbsCountries = [", parseNewCountries);

// 3. Update buildCountryPage template to dynamically generate and insert the interactive college list table!
const tableGeneratorHTML = `
              <!-- DYNAMIC INTERACTIVE COLLEGE FEES TABLE -->
              \${(() => {
                const countryKey = Object.keys(collegesDatabase).find(k => k.toLowerCase() === country.name.toLowerCase());
                const colleges = collegesDatabase[countryKey || ""] || [];
                if (colleges.length === 0) return "";
                
                return \`
                <div class="p-6 rounded-2xl bg-white border border-slate-200 mt-8 shadow-sm font-sans">
                  <div class="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div>
                      <h2 class="text-2xl font-bold text-slate-900">MBBS Fee Structure & College List (2025-26)</h2>
                      <p class="text-slate-500 text-sm mt-1">All fees are annual unless marked with * (total course fees). Compare tuition & hostels across all medical schools.</p>
                    </div>
                    <div class="relative w-full max-w-xs">
                      <input type="text" class="fee-table-search w-full px-4 py-2.5 pl-10 rounded-lg border border-slate-200 text-sm focus:border-blue-600 focus:outline-none" placeholder="Search college name..." data-table="fee-table-\${country.slug}">
                      <div class="absolute left-3 top-3.5 text-slate-400"><i data-lucide="search" class="w-4 h-4"></i></div>
                    </div>
                  </div>
                  <div class="overflow-x-auto">
                    <table id="fee-table-\${country.slug}" class="w-full text-left border-collapse text-sm">
                      <thead>
                        <tr class="bg-blue-900 text-white font-semibold">
                          <th class="p-4 rounded-l-xl">S.No</th>
                          <th class="p-4">University / Institution</th>
                          <th class="p-4">Tuition Fee (USD)</th>
                          <th class="p-4">Tuition Fee (INR)</th>
                          <th class="p-4">Hostel Fee (USD)</th>
                          <th class="p-4">Hostel Fee (INR)</th>
                          <th class="p-4">World Rank</th>
                          <th class="p-4 rounded-r-xl">Country Rank</th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-slate-100 text-slate-700">
                        \${colleges.map(c => \`
                          <tr class="hover:bg-slate-50/50 transition">
                            <td class="p-4 font-semibold">\${c.sNo}</td>
                            <td class="p-4 font-bold text-slate-900">\${c.name}</td>
                            <td class="p-4 font-semibold text-blue-700">\${c.tuitionUSD}</td>
                            <td class="p-4 font-bold text-slate-900">\${c.tuitionINR}</td>
                            <td class="p-4 text-slate-500">\${c.hostelUSD}</td>
                            <td class="p-4 text-slate-600">\${c.hostelINR}</td>
                            <td class="p-4">\${c.worldRank}</td>
                            <td class="p-4">\${c.countryRank}</td>
                          </tr>
                        \`).join("")}
                      </tbody>
                    </table>
                  </div>
                </div>
                \`;
              })()}`;

// We want to insert this table inside the buildCountryPage function, right under the Universities list block!
const oldUniversityListBlock = `<div class="p-6 rounded-2xl bg-white border border-slate-200">
                <h2 class="text-2xl font-bold text-slate-900 mb-4">Top Medical Universities in \${country.name}</h2>
                <ul class="space-y-2 text-slate-700">
                  \${country.topUniversities.map((u) => \`<li class="flex items-start gap-2 p-3 bg-slate-50 rounded-lg"><i data-lucide="check-circle" class="w-5 h-5 text-green-600 shrink-0 mt-0.5"></i> \${u}</li>\`).join("")}
                </ul>
              </div>`;

code = code.replace(oldUniversityListBlock, oldUniversityListBlock + "\n" + tableGeneratorHTML);

// 4. Inject search logic into script.js output in generate-html.cjs
const jsSearchLogic = `
  // 6. Real-time Fee Table Filtering
  const searchInputs = document.querySelectorAll(".fee-table-search");
  searchInputs.forEach(input => {
    input.addEventListener("input", () => {
      const filter = input.value.toLowerCase();
      const tableId = input.getAttribute("data-table");
      const rows = document.querySelectorAll(\`#\${tableId} tbody tr\`);
      rows.forEach(row => {
        const text = row.innerText.toLowerCase();
        if (text.includes(filter)) {
          row.classList.remove("hidden");
        } else {
          row.classList.add("hidden");
        }
      });
    });
  });
});`;

code = code.replace("  // 5. Mobile Menu Accordion Toggle", jsSearchLogic + "\n\n  // 5. Mobile Menu Accordion Toggle");

fs.writeFileSync("generate-html.cjs", code);
console.log("Colleges pricing database, new countries, and dynamic interactive tables successfully integrated into generate-html.cjs!");
