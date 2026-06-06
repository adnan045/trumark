const fs = require("fs");

let code = fs.readFileSync("generate-html.cjs", "utf8");

// Define buildPricing function
const buildPricingFunction = `
// 14. PRICING & PACKAGES PAGE (pricing.html)
function buildPricing(root) {
  const content = \`
    \${getPageHeroHTML("Transparent Pricing & Packages", "No hidden charges, merit-based direct transfers, and exclusive discounts on your study abroad journey.", [{ name: "Home", to: \`\${root}index\` }, { name: "Pricing & Packages" }])}
    
    <!-- EUROPE PACKAGES SECTION -->
    <section class="py-20 font-sans bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="inline-block bg-blue-100 text-blue-700 text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full">Europe Admissions</span>
          <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4">Premium Europe Packages</h2>
          <p class="text-slate-600 mt-3 text-lg">Compare our complete end-to-end consulting and admission guidance packages for European medical universities.</p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <!-- Basic Card -->
          <div class="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between hover:shadow-xl transition duration-300">
            <div>
              <div class="text-xl font-bold text-slate-900 mb-2">Basic Package</div>
              <p class="text-sm text-slate-500 mb-6">Perfect for self-reliant students looking for core visa and admission support.</p>
              <div class="text-4xl font-black text-slate-900 mb-6">₹ 3,50,000 <span class="text-sm font-medium text-slate-500">Total Cost</span></div>
              <div class="border-t border-slate-200 pt-6">
                <ul class="space-y-3.5 text-sm text-slate-600">
                  <li class="flex items-center gap-2.5"><i data-lucide="check-circle" class="w-4 h-4 text-green-600"></i> Registration: ₹ 50,000</li>
                  <li class="flex items-center gap-2.5"><i data-lucide="check-circle" class="w-4 h-4 text-green-600"></i> University Applications: 1 + 2 Backup</li>
                  <li class="flex items-center gap-2.5"><i data-lucide="check-circle" class="w-4 h-4 text-green-600"></i> University Application Fees Included</li>
                  <li class="flex items-center gap-2.5"><i data-lucide="check-circle" class="w-4 h-4 text-green-600"></i> Full Document Apostille & Legalisations</li>
                  <li class="flex items-center gap-2.5"><i data-lucide="check-circle" class="w-4 h-4 text-green-600"></i> Student Visa Assistance & Mock Interview Prep</li>
                  <li class="flex items-center gap-2.5"><i data-lucide="check-circle" class="w-4 h-4 text-green-600"></i> Europa CV & Cover Letter Writing</li>
                  <li class="flex items-center gap-2.5"><i data-lucide="check-circle" class="w-4 h-4 text-green-600"></i> Arrival Assistance & Airport Pickup</li>
                  <li class="flex items-center gap-2.5"><i data-lucide="check-circle" class="w-4 h-4 text-green-600"></i> Local Sim Card & Bank Account Setup</li>
                  <li class="flex items-center gap-2.5 text-slate-300"><i data-lucide="x-circle" class="w-4 h-4 text-slate-300"></i> 6 Year On-site Local Support</li>
                  <li class="flex items-center gap-2.5 text-slate-300"><i data-lucide="x-circle" class="w-4 h-4 text-slate-300"></i> Priority Visa Slot Booking</li>
                  <li class="flex items-center gap-2.5 text-slate-300"><i data-lucide="x-circle" class="w-4 h-4 text-slate-300"></i> TRP (Temporary Residence) Assistance</li>
                </ul>
              </div>
            </div>
            <a href="\${root}contact" class="mt-8 block text-center bg-slate-900 text-white font-bold py-3.5 rounded-full hover:bg-slate-800 transition">Get Started Now</a>
          </div>

          <!-- Advanced Card -->
          <div class="bg-gradient-to-br from-blue-900 to-green-900 rounded-3xl p-8 border border-slate-800 shadow-xl relative overflow-hidden flex flex-col justify-between hover:shadow-2xl transition duration-300 text-white">
            <div class="absolute top-4 right-4 bg-yellow-400 text-slate-900 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-lg">Most Popular</div>
            <div>
              <div class="text-xl font-bold mb-2">Advanced Premium Package</div>
              <p class="text-sm text-white/70 mb-6">Fully-managed VIP package including priority services and 6 years of on-site support.</p>
              <div class="text-4xl font-black mb-6">₹ 5,00,000 <span class="text-sm font-medium text-white/70">Total Cost</span></div>
              <div class="border-t border-white/10 pt-6">
                <ul class="space-y-3.5 text-sm text-white/90">
                  <li class="flex items-center gap-2.5"><i data-lucide="check-circle" class="w-4 h-4 text-green-400"></i> Registration: ₹ 50,000</li>
                  <li class="flex items-center gap-2.5"><i data-lucide="check-circle" class="w-4 h-4 text-green-400"></i> University Applications: 3 + 2 Backup</li>
                  <li class="flex items-center gap-2.5"><i data-lucide="check-circle" class="w-4 h-4 text-green-400"></i> University Application Fees Included</li>
                  <li class="flex items-center gap-2.5"><i data-lucide="check-circle" class="w-4 h-4 text-green-400"></i> Full Document Apostille & Legalisations</li>
                  <li class="flex items-center gap-2.5"><i data-lucide="check-circle" class="w-4 h-4 text-green-400"></i> Student Visa Assistance & Mock Interview Prep</li>
                  <li class="flex items-center gap-2.5"><i data-lucide="check-circle" class="w-4 h-4 text-green-400"></i> Europa CV & Cover Letter Writing</li>
                  <li class="flex items-center gap-2.5"><i data-lucide="check-circle" class="w-4 h-4 text-green-400"></i> Arrival Assistance & Airport Pickup</li>
                  <li class="flex items-center gap-2.5"><i data-lucide="check-circle" class="w-4 h-4 text-green-400"></i> Local Sim Card & Bank Account Setup</li>
                  <li class="flex items-center gap-2.5 text-green-300 font-semibold"><i data-lucide="check-circle" class="w-4 h-4 text-green-300"></i> 6 Year On-site Local Support Abroad</li>
                  <li class="flex items-center gap-2.5 text-green-300 font-semibold"><i data-lucide="check-circle" class="w-4 h-4 text-green-300"></i> Priority Visa Slot Booking & Assistance</li>
                  <li class="flex items-center gap-2.5 text-green-300 font-semibold"><i data-lucide="check-circle" class="w-4 h-4 text-green-300"></i> TRP (Temporary Residence) Assistance</li>
                  <li class="flex items-center gap-2.5 text-green-300 font-semibold"><i data-lucide="check-circle" class="w-4 h-4 text-green-300"></i> Dummy Accommodation & Flight Bookings</li>
                  <li class="flex items-center gap-2.5 text-green-300 font-semibold"><i data-lucide="check-circle" class="w-4 h-4 text-green-300"></i> 100% Courier Charges & Forex Support</li>
                </ul>
              </div>
            </div>
            <a href="\${root}contact" class="mt-8 block text-center bg-white text-blue-900 font-bold py-3.5 rounded-full hover:bg-slate-100 transition shadow-lg">Get Started Now</a>
          </div>
        </div>
      </div>
    </section>

    <!-- OTHER COUNTRIES SECTION -->
    <section class="py-20 font-sans bg-slate-50 border-t border-slate-100">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="inline-block bg-green-100 text-green-700 text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full">Russia, Central Asia & Georgia</span>
          <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4">One-Time Charges (OTC) & Consultancy</h2>
          <p class="text-slate-600 mt-3 text-lg">Clear and highly transparent fee structure with an exclusive 25% discount on consultancy fees for medical aspirants.</p>
        </div>

        <div class="max-w-4xl mx-auto overflow-hidden bg-white border border-slate-200 rounded-3xl shadow-sm mb-16">
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-blue-900 text-white text-sm font-semibold">
                  <th class="p-5">Country Name</th>
                  <th class="p-5">OTC (One-Time Charges) Fixed</th>
                  <th class="p-5">Standard Consultancy Fee</th>
                  <th class="p-5 text-green-300">Special Discounted Fee (25% OFF)</th>
                </tr>
              </thead>
              <tbody class="text-sm text-slate-700 divide-y divide-slate-100">
                <tr class="hover:bg-slate-50 transition">
                  <td class="p-5 font-bold flex items-center gap-2"><span class="text-lg">🇷🇺</span> Russia</td>
                  <td class="p-5 font-semibold text-slate-900">$1,200</td>
                  <td class="p-5 line-through text-slate-400">₹ 1,00,000 + 18% GST</td>
                  <td class="p-5 font-extrabold text-green-700 bg-green-50/40">₹ 75,000 + 18% GST</td>
                </tr>
                <tr class="hover:bg-slate-50 transition">
                  <td class="p-5 font-bold flex items-center gap-2"><span class="text-lg">🇰🇿</span> Kazakhstan</td>
                  <td class="p-5 font-semibold text-slate-900">$1,200</td>
                  <td class="p-5 line-through text-slate-400">₹ 1,00,000 + 18% GST</td>
                  <td class="p-5 font-extrabold text-green-700 bg-green-50/40">₹ 75,000 + 18% GST</td>
                </tr>
                <tr class="hover:bg-slate-50 transition">
                  <td class="p-5 font-bold flex items-center gap-2"><span class="text-lg">🇺🇿</span> Uzbekistan</td>
                  <td class="p-5 font-semibold text-slate-900">$1,200</td>
                  <td class="p-5 line-through text-slate-400">₹ 1,00,000 + 18% GST</td>
                  <td class="p-5 font-extrabold text-green-700 bg-green-50/40">₹ 75,000 + 18% GST</td>
                </tr>
                <tr class="hover:bg-slate-50 transition">
                  <td class="p-5 font-bold flex items-center gap-2"><span class="text-lg">🇰🇬</span> Kyrgyzstan</td>
                  <td class="p-5 font-semibold text-slate-900">$1,200</td>
                  <td class="p-5 line-through text-slate-400">₹ 1,00,000 + 18% GST</td>
                  <td class="p-5 font-extrabold text-green-700 bg-green-50/40">₹ 75,000 + 18% GST</td>
                </tr>
                <tr class="hover:bg-slate-50 transition">
                  <td class="p-5 font-bold flex items-center gap-2"><span class="text-lg">🇬🇪</span> Georgia</td>
                  <td class="p-5 font-semibold text-slate-900">$2,000</td>
                  <td class="p-5 line-through text-slate-400">₹ 1,00,000 + 18% GST</td>
                  <td class="p-5 font-extrabold text-green-700 bg-green-50/40">₹ 75,000 + 18% GST</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- WHAT IS INCLUDED IN OTC -->
        <div class="p-8 md:p-10 bg-white border border-slate-200 rounded-3xl shadow-sm max-w-5xl mx-auto">
          <h3 class="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2"><i data-lucide="check-circle" class="w-6 h-6 text-green-600"></i> What is included in your One-Time Charges (OTC)?</h3>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 text-sm text-slate-600">
            <div class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-green-500 shrink-0"></i> University Application Fee</div>
            <div class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-green-500 shrink-0"></i> Mock Test Support (If Applicable)</div>
            <div class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-green-500 shrink-0"></i> Document Legalisation & Apostille</div>
            <div class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-green-500 shrink-0"></i> Student Visa File & Assistance</div>
            <div class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-green-500 shrink-0"></i> Visa Mock Interview Prep</div>
            <div class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-green-500 shrink-0"></i> Professional CV Preparation</div>
            <div class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-green-500 shrink-0"></i> Airport Pickup, Drop & Escort</div>
            <div class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-green-500 shrink-0"></i> On-Campus Accommodation Help</div>
            <div class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-green-500 shrink-0"></i> Local Sim Card Activation</div>
            <div class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-green-500 shrink-0"></i> Local Bank Account Setup</div>
            <div class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-green-500 shrink-0"></i> Local Medical Health Checkups</div>
            <div class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-green-500 shrink-0"></i> TRP (Temporary Residence) Help</div>
            <div class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-green-500 shrink-0"></i> Legal Documentation Translations</div>
            <div class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-green-500 shrink-0"></i> Dummy Accommodation & Bookings</div>
            <div class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-green-500 shrink-0"></i> Direct University Support Ties</div>
            <div class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-green-500 shrink-0"></i> Education Loan Assistance</div>
            <div class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-green-500 shrink-0"></i> Scholarship Filing Support</div>
            <div class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-green-500 shrink-0"></i> 6 Year On-site Student Support</div>
            <div class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-green-500 shrink-0"></i> Foreign Exchange (Forex) Support</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CALL TO ACTION -->
    <section class="py-20 bg-blue-900 text-white text-center font-sans">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-4">Want a Custom Fee Quote & Consultation?</h2>
        <p class="text-white/80 max-w-xl mx-auto text-sm leading-relaxed mb-8">Connect directly with our admission experts for customized pricing plans, easy EMI option details, and university tuition direct billing processes.</p>
        <div class="flex flex-wrap justify-center gap-4">
          <a href="https://wa.me/919999606112" class="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-7 py-3 rounded-full shadow-lg transition">💬 Discuss on WhatsApp</a>
          <a href="\${root}contact" class="inline-flex items-center gap-2 bg-white text-blue-900 font-bold px-7 py-3 rounded-full hover:shadow-xl transition">Book Free Session</a>
        </div>
      </div>
    </section>
  \`;
  return wrapPage(content, "Transparent Pricing & Packages", "Compare basic and advanced packages for Europe MBBS, and find OTC and consultancy fees for Georgia, Uzbekistan, Russia and Kazakhstan.", "pricing.html", "pricing");
}
`;

// Insert the buildPricing function just before buildAbout
code = code.replace("function buildAbout", buildPricingFunction + "\nfunction buildAbout");

// Generate pricing.html as part of main pages output
code = code.replace('fs.writeFileSync("about.html", buildAbout("./"));', 'fs.writeFileSync("about.html", buildAbout("./"));\nfs.writeFileSync("pricing.html", buildPricing("./"));');

fs.writeFileSync("generate-html.cjs", code);
console.log("Successfully appended buildPricing function to generate-html.cjs!");
