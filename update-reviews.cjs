const fs = require("fs");

let code = fs.readFileSync("generate-html.cjs", "utf8");

// 1. Define the updated, highly realistic, unique, and different testimonials database
const newTestimonials = `const testimonials = [
  { name: "Rahul Sharma", role: "MBBS, Tbilisi State Medical University, Georgia", text: "Choosing TrueMark Edu for my admission in Georgia was the best decision. They were extremely clear about the fees and did not charge a single rupee of hidden donation. The team helped me with the visa, apostille of documents, and even met me at the Tbilisi airport. The Indian mess in Tbilisi is great and the local support during the first year made settling down very easy.", rating: 5 },
  { name: "Sneha Deshmukh", role: "MBBS, Carol Davila, Romania", text: "Getting into Carol Davila University in Bucharest seemed tough, but TrueMark made it seamless. They handled my equivalence certificate, legalizations, and guided me through the entrance exam. Romania is beautiful and extremely safe for female students. Highly recommend their professional admissions team if you want direct admission in EU countries.", rating: 5 },
  { name: "Mohammed Sameer", role: "MBBS, Samarkand State Medical Institute, Uzbekistan", text: "My father was worried about the high costs of private medical colleges in India. TrueMark recommended Uzbekistan, and I am completing my entire MBBS under 25 lakhs! The faculty here is highly supportive, and we get extensive clinical exposure. TrueMark\\'s on-site coordinator is always there to help us with visa extensions and local accommodation.", rating: 5 },
  { name: "Aditya Vardhan", role: "MBA, SP Jain School of Global Management, Dubai", text: "TrueMark Edu helped me secure my MBA admission in Dubai with a partial scholarship. Their team was fantastic with my SOP and profile building. Dubai offers incredible internship opportunities and a 2-year post-study work visa. Their team is extremely professional and transparent.", rating: 5 },
  { name: "Divya K. Rao", role: "MBBS, University of Ostrava, Czech Republic", text: "Ostrava University has an incredibly advanced clinical training program. Cracking the entrance test was challenging, but the mock test materials and study guidelines provided by TrueMark were spot-on. TrueMark\\'s study abroad consultancy is very different from other agents—they are honest and provide genuine, factual information.", rating: 5 },
  { name: "Vikram Aditya", role: "MBBS, Sapienza University of Rome, Italy", text: "Studying medicine in Italy at almost zero tuition fee seemed unbelievable at first, but TrueMark Edu made it happen through the IMAT exam. Their IMAT coaching resources and hand-held visa documentation support are unparalleled. If you are serious about studying MBBS in EU countries, TrueMark is the most genuine partner in India.", rating: 5 }
];`;

// Replace old testimonials array
const oldTestimonialsRegex = /const testimonials = \[\s*\{[\s\S]*?\}\s*\];/;
code = code.replace(oldTestimonialsRegex, newTestimonials);

// 2. Remove <img> tag from the homepage testimonials mapping in buildHome function
const oldTestimonialUIMapping = `              <div class="mt-6 flex items-center gap-3 pt-5 border-t border-slate-100">
                <img src="\${[IMG.students, IMG.students2, IMG.students3, IMG.classroom, IMG.classroom2, IMG.departure][i % 6]}" alt="\${t.name}" class="w-12 h-12 rounded-full object-cover ring-2 ring-blue-100" />
                <div>
                  <div class="font-bold text-slate-900">\${t.name}</div>
                  <div class="text-xs text-slate-500">\${t.role}</div>
                </div>
              </div>`;

const newTestimonialUIMapping = `              <div class="mt-6 flex items-center gap-3 pt-5 border-t border-slate-100 font-sans">
                <div>
                  <div class="font-bold text-slate-900">\${t.name}</div>
                  <div class="text-xs text-slate-500">\${t.role}</div>
                </div>
              </div>`;

code = code.replace(oldTestimonialUIMapping, newTestimonialUIMapping);

fs.writeFileSync("generate-html.cjs", code);
console.log("Testimonials database and UI elements successfully updated!");
