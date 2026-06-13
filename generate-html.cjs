const fs = require("fs");
const path = require("path");

// --- COLLEGES DETAILED PRICING DATABASE ---
const collegesDatabase = {
  "Georgia": [
    {
      "sNo": "1",
      "name": "International Black Sea University",
      "tuitionUSD": "$31,800",
      "tuitionINR": "4800",
      "hostelUSD": "₹4,08,000",
      "hostelINR": "3000",
      "worldRank": "₹2,55,000",
      "countryRank": "—"
    },
    {
      "sNo": "3",
      "name": "Georgian National University SEU",
      "tuitionUSD": "$40,800",
      "tuitionINR": "6,300",
      "hostelUSD": "₹5,35,500",
      "hostelINR": "3000",
      "worldRank": "₹2,55,000",
      "countryRank": "—"
    },
    {
      "sNo": "4",
      "name": "Grigol Robakidze University",
      "tuitionUSD": "$36,000",
      "tuitionINR": "5,500",
      "hostelUSD": "₹4,67,500",
      "hostelINR": "3000",
      "worldRank": "₹2,55,000",
      "countryRank": "—"
    },
    {
      "sNo": "5",
      "name": "Avicenna Batumi Medical University",
      "tuitionUSD": "$32,400",
      "tuitionINR": "4,900",
      "hostelUSD": "₹4,16,500",
      "hostelINR": "3000",
      "worldRank": "₹2,55,000",
      "countryRank": "—"
    },
    {
      "sNo": "6",
      "name": "Alte University",
      "tuitionUSD": "$36,000",
      "tuitionINR": "5,500",
      "hostelUSD": "₹4,67,500",
      "hostelINR": "3000",
      "worldRank": "₹2,55,000",
      "countryRank": "—"
    },
    {
      "sNo": "7",
      "name": "Georgian American University (GAU)",
      "tuitionUSD": "$39,000",
      "tuitionINR": "6,000",
      "hostelUSD": "₹5,10,000",
      "hostelINR": "3000",
      "worldRank": "₹2,55,000",
      "countryRank": "—"
    },
    {
      "sNo": "10",
      "name": "Caucasus International University Georgia",
      "tuitionUSD": "$39,000",
      "tuitionINR": "6,000",
      "hostelUSD": "₹5,10,000",
      "hostelINR": "3000",
      "worldRank": "₹2,55,000",
      "countryRank": "—"
    },
    {
      "sNo": "11",
      "name": "East European University Georgia",
      "tuitionUSD": "$36,000",
      "tuitionINR": "5,500",
      "hostelUSD": "₹4,67,500",
      "hostelINR": "3000",
      "worldRank": "₹2,55,000",
      "countryRank": "—"
    },
    {
      "sNo": "12",
      "name": "New Vision University Georgia",
      "tuitionUSD": "$45,000",
      "tuitionINR": "7,000",
      "hostelUSD": "₹5,95,000",
      "hostelINR": "3000",
      "worldRank": "₹2,55,000",
      "countryRank": "—"
    },
    {
      "sNo": "18",
      "name": "David Tvildiani Medical University",
      "tuitionUSD": "$39,000",
      "tuitionINR": "6,000",
      "hostelUSD": "₹5,10,000",
      "hostelINR": "3000",
      "worldRank": "₹2,55,000",
      "countryRank": "—"
    },
    {
      "sNo": "19",
      "name": "University of Georgia",
      "tuitionUSD": "$42,000",
      "tuitionINR": "6,500",
      "hostelUSD": "₹5,52,500",
      "hostelINR": "3000",
      "worldRank": "₹2,55,000",
      "countryRank": "—"
    },
    {
      "sNo": "20",
      "name": "Geomedi State University",
      "tuitionUSD": "$36,000",
      "tuitionINR": "5,500",
      "hostelUSD": "₹4,67,500",
      "hostelINR": "3000",
      "worldRank": "₹2,55,000",
      "countryRank": "—"
    },
    {
      "sNo": "22",
      "name": "European University Georgia",
      "tuitionUSD": "$38,400",
      "tuitionINR": "5,900",
      "hostelUSD": "₹5,01,500",
      "hostelINR": "3000",
      "worldRank": "₹2,55,000",
      "countryRank": "—"
    },
    {
      "sNo": "23",
      "name": "BAU International",
      "tuitionUSD": "$31,800",
      "tuitionINR": "4,800",
      "hostelUSD": "₹4,08,000",
      "hostelINR": "3000",
      "worldRank": "₹2,55,000",
      "countryRank": "—"
    },
    {
      "sNo": "24",
      "name": "East West University Georgia",
      "tuitionUSD": "$26,400",
      "tuitionINR": "3,900",
      "hostelUSD": "₹3,31,500",
      "hostelINR": "3000",
      "worldRank": "₹2,55,000",
      "countryRank": "—"
    }
  ],
  "Kyrgyzstan": [
    {
      "sNo": "1",
      "name": "OSH State Medical University",
      "tuitionUSD": "4,000 USD",
      "tuitionINR": "₹3,40,000",
      "hostelUSD": "700 USD",
      "hostelINR": "₹59,500",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "2",
      "name": "Jalalabad State University",
      "tuitionUSD": "4,200 USD",
      "tuitionINR": "₹3,57,000",
      "hostelUSD": "700 USD",
      "hostelINR": "₹59,500",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "3",
      "name": "Adam University",
      "tuitionUSD": "4,000 USD",
      "tuitionINR": "₹3,40,000",
      "hostelUSD": "800 USD",
      "hostelINR": "₹68,000",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "4",
      "name": "Kyrgyz State Medical Academy",
      "tuitionUSD": "4,800 USD",
      "tuitionINR": "₹4,08,000",
      "hostelUSD": "700 USD",
      "hostelINR": "₹59,500",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "5",
      "name": "International School of Medicine Kyrgyzstan",
      "tuitionUSD": "6,000 USD",
      "tuitionINR": "₹5,10,000",
      "hostelUSD": "750 USD",
      "hostelINR": "₹63,750",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "6",
      "name": "Asian Medical Institute Kyrgyzstan",
      "tuitionUSD": "3,400 USD",
      "tuitionINR": "₹2,89,000",
      "hostelUSD": "450 USD",
      "hostelINR": "₹38,250",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "8",
      "name": "International University of Kyrgyzstan",
      "tuitionUSD": "5,000 USD",
      "tuitionINR": "₹4,25,000",
      "hostelUSD": "800 USD",
      "hostelINR": "₹68,000",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "9",
      "name": "Kyrgyz Russian Slavic University",
      "tuitionUSD": "4,000 USD",
      "tuitionINR": "₹3,40,000",
      "hostelUSD": "700 USD",
      "hostelINR": "₹59,500",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "10",
      "name": "Adam University School of Medicine",
      "tuitionUSD": "4,000 USD",
      "tuitionINR": "₹3,40,000",
      "hostelUSD": "—",
      "hostelINR": "—",
      "worldRank": "—",
      "countryRank": "—"
    }
  ],
  "Kazakhstan": [
    {
      "sNo": "1",
      "name": "South Kazakhstan Medical Academy",
      "tuitionUSD": "4,400 USD",
      "tuitionINR": "₹3,74,000",
      "hostelUSD": "800 USD",
      "hostelINR": "₹68,000",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "2",
      "name": "Asfendiyarov Kazakh National Medical University",
      "tuitionUSD": "30,00,000 KZT",
      "tuitionINR": "₹5,10,000",
      "hostelUSD": "900 USD",
      "hostelINR": "₹76,500",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "3",
      "name": "Kazakh National Medical University",
      "tuitionUSD": "30,00,000 KZT",
      "tuitionINR": "₹5,10,000",
      "hostelUSD": "900 USD",
      "hostelINR": "₹76,500",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "4",
      "name": "Karaganda State Medical University Kazakhstan",
      "tuitionUSD": "4,100 USD",
      "tuitionINR": "₹3,48,500",
      "hostelUSD": "800 USD",
      "hostelINR": "₹68,000",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "5",
      "name": "Astana Medical University Kazakhstan",
      "tuitionUSD": "27,50,000 KZT",
      "tuitionINR": "₹4,67,500",
      "hostelUSD": "1,000 USD",
      "hostelINR": "₹85,000",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "6",
      "name": "Semey State Medical University",
      "tuitionUSD": "20,40,000 KZT",
      "tuitionINR": "₹3,46,800",
      "hostelUSD": "900 USD",
      "hostelINR": "₹76,500",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "7",
      "name": "Al Farabi Kazakh National University Kazakhstan",
      "tuitionUSD": "22,00,000 KZT",
      "tuitionINR": "₹3,74,000",
      "hostelUSD": "700 USD",
      "hostelINR": "₹59,500",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "8",
      "name": "Kazakh Medical University of Continuing Education",
      "tuitionUSD": "—",
      "tuitionINR": "—",
      "hostelUSD": "—",
      "hostelINR": "—",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "9",
      "name": "Kokshetau State University Kazakhstan",
      "tuitionUSD": "3,800 USD",
      "tuitionINR": "₹3,23,000",
      "hostelUSD": "800 USD",
      "hostelINR": "₹68,000",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "10",
      "name": "West Kazakhstan State Medical University",
      "tuitionUSD": "18,50,000 KZT",
      "tuitionINR": "₹3,14,500",
      "hostelUSD": "500 USD",
      "hostelINR": "₹42,500",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "11",
      "name": "International Medical School",
      "tuitionUSD": "—",
      "tuitionINR": "—",
      "hostelUSD": "—",
      "hostelINR": "—",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "12",
      "name": "Kazakh Russian Medical State University",
      "tuitionUSD": "4,500 USD",
      "tuitionINR": "₹3,82,500",
      "hostelUSD": "800 USD",
      "hostelINR": "₹68,000",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "13",
      "name": "Caspian University",
      "tuitionUSD": "4,500 USD",
      "tuitionINR": "₹3,82,500",
      "hostelUSD": "800 USD",
      "hostelINR": "₹68,000",
      "worldRank": "—",
      "countryRank": "—"
    }
  ],
  "Uzbekistan": [
    {
      "sNo": "1",
      "name": "Tashkent Medical Academy",
      "tuitionUSD": "3,500 USD",
      "tuitionINR": "₹2,97,500",
      "hostelUSD": "700 USD",
      "hostelINR": "₹59,500",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "2",
      "name": "Fergana State University Medical Centre",
      "tuitionUSD": "3,500 USD",
      "tuitionINR": "₹2,97,500",
      "hostelUSD": "750 USD",
      "hostelINR": "₹63,750",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "3",
      "name": "Samarkand State Medical University",
      "tuitionUSD": "3,500 USD",
      "tuitionINR": "₹2,97,500",
      "hostelUSD": "500 USD",
      "hostelINR": "₹42,500",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "4",
      "name": "Bukhara State University Uzbekistan",
      "tuitionUSD": "3,200 USD",
      "tuitionINR": "₹2,72,000",
      "hostelUSD": "500 USD",
      "hostelINR": "₹42,500",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "5",
      "name": "Tashkent State Dental Institute",
      "tuitionUSD": "3,500 USD",
      "tuitionINR": "₹2,97,500",
      "hostelUSD": "700 USD",
      "hostelINR": "₹59,500",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "6",
      "name": "Tashkent Medical Academy (Chirchik Branch)",
      "tuitionUSD": "3,000 USD",
      "tuitionINR": "₹2,55,000",
      "hostelUSD": "700 USD",
      "hostelINR": "₹59,500",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "7",
      "name": "Tashkent Urgench Branch",
      "tuitionUSD": "4,000 USD",
      "tuitionINR": "₹3,40,000",
      "hostelUSD": "700 USD",
      "hostelINR": "₹59,500",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "8",
      "name": "Andijan Medical Institute",
      "tuitionUSD": "3,500 USD",
      "tuitionINR": "₹2,97,500",
      "hostelUSD": "700 USD",
      "hostelINR": "₹59,500",
      "worldRank": "—",
      "countryRank": "—"
    }
  ],
  "Nepal": [
    {
      "sNo": "1",
      "name": "B.P. Koirala Institute of Health Sciences (BPKIHS)",
      "tuitionUSD": "75,000 USD*",
      "tuitionINR": "₹63,75,000*",
      "hostelUSD": "1,403 USD/yr",
      "hostelINR": "₹1,19,255/yr",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "2",
      "name": "Birat Medical College (BMC), Biratnagar",
      "tuitionUSD": "58,494 USD*",
      "tuitionINR": "₹49,72,990*",
      "hostelUSD": "1,403 USD/yr",
      "hostelINR": "₹1,19,255/yr",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "3",
      "name": "Institute of Medicine, Nepal – IOM",
      "tuitionUSD": "75,000 USD*",
      "tuitionINR": "₹63,75,000*",
      "hostelUSD": "1,403 USD/yr",
      "hostelINR": "₹1,19,255/yr",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "4",
      "name": "Janaki Medical College, Nepal",
      "tuitionUSD": "66,265 USD*",
      "tuitionINR": "₹56,32,525*",
      "hostelUSD": "1,403 USD/yr",
      "hostelINR": "₹1,19,255/yr",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "5",
      "name": "Kathmandu Medical College, Nepal",
      "tuitionUSD": "66,265 USD*",
      "tuitionINR": "₹56,32,525*",
      "hostelUSD": "1,403 USD/yr",
      "hostelINR": "₹1,19,255/yr",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "6",
      "name": "KIST Medical College Kathmandu, Nepal",
      "tuitionUSD": "66,265 USD*",
      "tuitionINR": "₹56,32,525*",
      "hostelUSD": "1,403 USD/yr",
      "hostelINR": "₹1,19,255/yr",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "7",
      "name": "Lumbini Medical College (LMC), Nepal",
      "tuitionUSD": "60,241 USD*",
      "tuitionINR": "₹51,20,485*",
      "hostelUSD": "1,403 USD/yr",
      "hostelINR": "₹1,19,255/yr",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "8",
      "name": "Universal College of Medical Science (UCMS)",
      "tuitionUSD": "—",
      "tuitionINR": "—",
      "hostelUSD": "1,403 USD/yr",
      "hostelINR": "₹1,19,255/yr",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "9",
      "name": "Nepal Medical College",
      "tuitionUSD": "66,265 USD*",
      "tuitionINR": "₹56,32,525*",
      "hostelUSD": "1,403 USD/yr",
      "hostelINR": "₹1,19,255/yr",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "10",
      "name": "College of Medical Science",
      "tuitionUSD": "69,880 USD*",
      "tuitionINR": "₹59,39,800*",
      "hostelUSD": "1,403 USD/yr",
      "hostelINR": "₹1,19,255/yr",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "11",
      "name": "Nobel Medical College",
      "tuitionUSD": "66,265 USD*",
      "tuitionINR": "₹56,32,525*",
      "hostelUSD": "1,403 USD/yr",
      "hostelINR": "₹1,19,255/yr",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "12",
      "name": "National Medical College",
      "tuitionUSD": "66,265 USD*",
      "tuitionINR": "₹56,32,525*",
      "hostelUSD": "1,403 USD/yr",
      "hostelINR": "₹1,19,255/yr",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "13",
      "name": "Chitwan Medical College",
      "tuitionUSD": "72,289 USD*",
      "tuitionINR": "₹61,44,565*",
      "hostelUSD": "1,403 USD/yr",
      "hostelINR": "₹1,19,255/yr",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "14",
      "name": "Manipal College",
      "tuitionUSD": "74,699 USD*",
      "tuitionINR": "₹63,49,415*",
      "hostelUSD": "1,403 USD/yr",
      "hostelINR": "₹1,19,255/yr",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "15",
      "name": "Devdaha Medical College",
      "tuitionUSD": "72,289 USD*",
      "tuitionINR": "₹61,44,565*",
      "hostelUSD": "1,403 USD/yr",
      "hostelINR": "₹1,19,255/yr",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "16",
      "name": "B&amp;C Medical College",
      "tuitionUSD": "60,241 USD*",
      "tuitionINR": "₹51,20,485*",
      "hostelUSD": "1,403 USD/yr",
      "hostelINR": "₹1,19,255/yr",
      "worldRank": "—",
      "countryRank": "—"
    }
  ],
  "Bangladesh": [
    {
      "sNo": "1",
      "name": "Bangladesh Medical College",
      "tuitionUSD": "—",
      "tuitionINR": "—",
      "hostelUSD": "—",
      "hostelINR": "—",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "2",
      "name": "Barind Medical College Bangladesh",
      "tuitionUSD": "—",
      "tuitionINR": "—",
      "hostelUSD": "—",
      "hostelINR": "—",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "3",
      "name": "Dhaka National Medical College",
      "tuitionUSD": "35,000 USD*",
      "tuitionINR": "₹2,97,50,000*",
      "hostelUSD": "—",
      "hostelINR": "—",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "4",
      "name": "BGC Trust Medical College Bangladesh",
      "tuitionUSD": "10,000 USD*",
      "tuitionINR": "₹8,50,000*",
      "hostelUSD": "—",
      "hostelINR": "—",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "5",
      "name": "Eastern Medical College Bangladesh",
      "tuitionUSD": "—",
      "tuitionINR": "—",
      "hostelUSD": "—",
      "hostelINR": "—",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "6",
      "name": "Khwaja Yunus Ali Medical College",
      "tuitionUSD": "16,500 USD*",
      "tuitionINR": "₹14,02,500*",
      "hostelUSD": "—",
      "hostelINR": "—",
      "worldRank": "—",
      "countryRank": "—"
    }
  ],
  "China": [
    {
      "sNo": "1",
      "name": "Capital Medical University",
      "tuitionUSD": "40,000 RMB",
      "tuitionINR": "₹4,40,000",
      "hostelUSD": "7,000 USD",
      "hostelINR": "₹5,95,000",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "2",
      "name": "Beihua Medical University",
      "tuitionUSD": "21,000 RMB",
      "tuitionINR": "₹2,31,000",
      "hostelUSD": "5,600 USD",
      "hostelINR": "₹4,76,000",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "3",
      "name": "Wuhan Medical University",
      "tuitionUSD": "40,000 RMB",
      "tuitionINR": "₹4,40,000",
      "hostelUSD": "12,000 USD",
      "hostelINR": "₹10,20,000",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "4",
      "name": "China Medical University",
      "tuitionUSD": "40,000 RMB",
      "tuitionINR": "₹4,40,000",
      "hostelUSD": "11,000 USD",
      "hostelINR": "₹9,35,000",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "5",
      "name": "Jiamusi University",
      "tuitionUSD": "—",
      "tuitionINR": "—",
      "hostelUSD": "—",
      "hostelINR": "—",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "6",
      "name": "Dalian Medical University",
      "tuitionUSD": "45,000 RMB",
      "tuitionINR": "₹4,95,000",
      "hostelUSD": "8,000 USD",
      "hostelINR": "₹6,80,000",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "7",
      "name": "Hebei Medical University",
      "tuitionUSD": "36,000 RMB",
      "tuitionINR": "₹3,96,000",
      "hostelUSD": "4,000 USD",
      "hostelINR": "₹3,40,000",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "8",
      "name": "Jilin University",
      "tuitionUSD": "33,000 RMB",
      "tuitionINR": "₹3,63,000",
      "hostelUSD": "6,000 USD",
      "hostelINR": "₹5,10,000",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "9",
      "name": "FUDAN University",
      "tuitionUSD": "75,000 RMB",
      "tuitionINR": "₹8,25,000",
      "hostelUSD": "10,000 USD",
      "hostelINR": "₹8,50,000",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "10",
      "name": "China Three Gorges University",
      "tuitionUSD": "24,000 RMB",
      "tuitionINR": "₹2,64,000",
      "hostelUSD": "4,800 USD",
      "hostelINR": "₹4,08,000",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "11",
      "name": "Nanjing Medical University",
      "tuitionUSD": "34,000 RMB",
      "tuitionINR": "₹3,74,000",
      "hostelUSD": "6,000 USD",
      "hostelINR": "₹5,10,000",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "12",
      "name": "Anhui Medical University",
      "tuitionUSD": "30,000 RMB",
      "tuitionINR": "₹3,30,000",
      "hostelUSD": "4,000 USD",
      "hostelINR": "₹3,40,000",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "13",
      "name": "Xi&#39;an Jiaotong University",
      "tuitionUSD": "40,000 RMB",
      "tuitionINR": "₹4,40,000",
      "hostelUSD": "11,000 USD",
      "hostelINR": "₹9,35,000",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "14",
      "name": "Xiamen Amoy University",
      "tuitionUSD": "38,000 RMB",
      "tuitionINR": "₹4,18,000",
      "hostelUSD": "9,000 USD",
      "hostelINR": "₹7,65,000",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "15",
      "name": "Guangzhou Medical University",
      "tuitionUSD": "30,000 RMB",
      "tuitionINR": "₹3,30,000",
      "hostelUSD": "4,000 USD",
      "hostelINR": "₹3,40,000",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "16",
      "name": "Fujian Medical University",
      "tuitionUSD": "35,000 RMB",
      "tuitionINR": "₹3,85,000",
      "hostelUSD": "4,000 USD",
      "hostelINR": "₹3,40,000",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "17",
      "name": "Ningxia Medical University",
      "tuitionUSD": "29,800 RMB",
      "tuitionINR": "₹3,27,800",
      "hostelUSD": "5,000 USD",
      "hostelINR": "₹4,25,000",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "18",
      "name": "Wenzhou Medical University",
      "tuitionUSD": "30,000 RMB",
      "tuitionINR": "₹3,30,000",
      "hostelUSD": "4,500 USD",
      "hostelINR": "₹3,82,500",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "19",
      "name": "Qingdao University",
      "tuitionUSD": "30,000 RMB",
      "tuitionINR": "₹3,30,000",
      "hostelUSD": "10,000 USD",
      "hostelINR": "₹8,50,000",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "20",
      "name": "Soochow University Suzhou",
      "tuitionUSD": "32,500 RMB",
      "tuitionINR": "₹3,57,500",
      "hostelUSD": "6,000 USD",
      "hostelINR": "₹5,10,000",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "21",
      "name": "Yangzhou Medical University",
      "tuitionUSD": "30,000 RMB",
      "tuitionINR": "₹3,30,000",
      "hostelUSD": "4,500 USD",
      "hostelINR": "₹3,82,500",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "22",
      "name": "Southern Medical University",
      "tuitionUSD": "40,000 RMB",
      "tuitionINR": "₹4,40,000",
      "hostelUSD": "6,000 USD",
      "hostelINR": "₹5,10,000",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "23",
      "name": "Kunming Medical University",
      "tuitionUSD": "35,000 RMB",
      "tuitionINR": "₹3,85,000",
      "hostelUSD": "5,000 USD",
      "hostelINR": "₹4,25,000",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "24",
      "name": "Nantong University",
      "tuitionUSD": "26,000 RMB",
      "tuitionINR": "₹2,86,000",
      "hostelUSD": "4,000 USD",
      "hostelINR": "₹3,40,000",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "25",
      "name": "Zhejiang University",
      "tuitionUSD": "42,800 RMB",
      "tuitionINR": "₹4,70,800",
      "hostelUSD": "6,000 USD",
      "hostelINR": "₹5,10,000",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "26",
      "name": "Southwest Medical University",
      "tuitionUSD": "40,000 RMB",
      "tuitionINR": "₹4,40,000",
      "hostelUSD": "6,000 USD",
      "hostelINR": "₹5,10,000",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "27",
      "name": "Jinzhou Medical University",
      "tuitionUSD": "32,000 RMB",
      "tuitionINR": "₹3,52,000",
      "hostelUSD": "5,000 USD",
      "hostelINR": "₹4,25,000",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "28",
      "name": "Xinjiang Medical University",
      "tuitionUSD": "30,000 RMB",
      "tuitionINR": "₹3,30,000",
      "hostelUSD": "4,500 USD",
      "hostelINR": "₹3,82,500",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "29",
      "name": "Jinan University (JNU)",
      "tuitionUSD": "34,000 RMB",
      "tuitionINR": "₹3,74,000",
      "hostelUSD": "6,000 USD",
      "hostelINR": "₹5,10,000",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "30",
      "name": "Southeast University",
      "tuitionUSD": "32,800 RMB",
      "tuitionINR": "₹3,60,800",
      "hostelUSD": "6,000 USD",
      "hostelINR": "₹5,10,000",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "31",
      "name": "Sun Yat-Sen University",
      "tuitionUSD": "48,000 RMB",
      "tuitionINR": "₹5,28,000",
      "hostelUSD": "5,100 USD",
      "hostelINR": "₹4,33,500",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "32",
      "name": "Guangxi Medical University",
      "tuitionUSD": "30,000 RMB",
      "tuitionINR": "₹3,30,000",
      "hostelUSD": "6,000 USD",
      "hostelINR": "₹5,10,000",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "33",
      "name": "Jiangsu University",
      "tuitionUSD": "34,000 RMB",
      "tuitionINR": "₹3,74,000",
      "hostelUSD": "4,900 USD",
      "hostelINR": "₹4,16,500",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "34",
      "name": "Harbin Medical University",
      "tuitionUSD": "30,000 RMB",
      "tuitionINR": "₹3,30,000",
      "hostelUSD": "4,000 USD",
      "hostelINR": "₹3,40,000",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "35",
      "name": "Huazhong University of Science &amp; Technology",
      "tuitionUSD": "40,000 RMB",
      "tuitionINR": "₹4,40,000",
      "hostelUSD": "6,500 USD",
      "hostelINR": "₹5,52,500",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "36",
      "name": "Ningbo University",
      "tuitionUSD": "30,000 RMB",
      "tuitionINR": "₹3,30,000",
      "hostelUSD": "6,000 USD",
      "hostelINR": "₹5,10,000",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "37",
      "name": "North Sichuan Medical College",
      "tuitionUSD": "32,000 RMB",
      "tuitionINR": "₹3,52,000",
      "hostelUSD": "12,000 USD",
      "hostelINR": "₹10,20,000",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "38",
      "name": "Xuzhou Medical University",
      "tuitionUSD": "33,000 RMB",
      "tuitionINR": "₹3,63,000",
      "hostelUSD": "5,000 USD",
      "hostelINR": "₹4,25,000",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "39",
      "name": "Shantou University",
      "tuitionUSD": "60,000 RMB",
      "tuitionINR": "₹6,60,000",
      "hostelUSD": "8,000 USD",
      "hostelINR": "₹6,80,000",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "40",
      "name": "Zhengzhou Medical University",
      "tuitionUSD": "35,000 RMB",
      "tuitionINR": "₹3,85,000",
      "hostelUSD": "5,000 USD",
      "hostelINR": "₹4,25,000",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "41",
      "name": "Shihezi Medical University",
      "tuitionUSD": "30,000 RMB",
      "tuitionINR": "₹3,30,000",
      "hostelUSD": "5,000 USD",
      "hostelINR": "₹4,25,000",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "42",
      "name": "Sichuan University",
      "tuitionUSD": "36,000 RMB",
      "tuitionINR": "₹3,96,000",
      "hostelUSD": "6,000 USD",
      "hostelINR": "₹5,10,000",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "43",
      "name": "Tianjin Medical University",
      "tuitionUSD": "45,000 RMB",
      "tuitionINR": "₹4,95,000",
      "hostelUSD": "11,000 USD",
      "hostelINR": "₹9,35,000",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "44",
      "name": "Tongji University School of Medicine",
      "tuitionUSD": "45,000 RMB",
      "tuitionINR": "₹4,95,000",
      "hostelUSD": "9,000 USD",
      "hostelINR": "₹7,65,000",
      "worldRank": "—",
      "countryRank": "—"
    }
  ],
  "Armenia": [
    {
      "sNo": "1",
      "name": "Yerevan Haybusak University, Armenia",
      "tuitionUSD": "—",
      "tuitionINR": "—",
      "hostelUSD": "—",
      "hostelINR": "—",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "2",
      "name": "St. Tereza Medical University Armenia",
      "tuitionUSD": "—",
      "tuitionINR": "—",
      "hostelUSD": "—",
      "hostelINR": "—",
      "worldRank": "—",
      "countryRank": "—"
    }
  ],
  "Barbados": [
    {
      "sNo": "1",
      "name": "Victoria University of Barbados",
      "tuitionUSD": "11,000 USD",
      "tuitionINR": "—",
      "hostelUSD": "—",
      "hostelINR": "—",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "2",
      "name": "American University of Barbados",
      "tuitionUSD": "—",
      "tuitionINR": "—",
      "hostelUSD": "—",
      "hostelINR": "—",
      "worldRank": "—",
      "countryRank": "—"
    }
  ],
  "Antigua": [
    {
      "sNo": "1",
      "name": "American University of Antigua",
      "tuitionUSD": "—",
      "tuitionINR": "—",
      "hostelUSD": "—",
      "hostelINR": "—",
      "worldRank": "—",
      "countryRank": "—"
    }
  ],
  "Caribbean": [
    {
      "sNo": "1",
      "name": "New York Medical University Curacao",
      "tuitionUSD": "—",
      "tuitionINR": "—",
      "hostelUSD": "—",
      "hostelINR": "—",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "2",
      "name": "Metropolitan University College of Medicine Antigua",
      "tuitionUSD": "—",
      "tuitionINR": "—",
      "hostelUSD": "—",
      "hostelINR": "—",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "3",
      "name": "Lincoln American University",
      "tuitionUSD": "—",
      "tuitionINR": "—",
      "hostelUSD": "—",
      "hostelINR": "—",
      "worldRank": "—",
      "countryRank": "—"
    }
  ],
  "Philippines": [
    {
      "sNo": "1",
      "name": "Brokenshire College School of Medicine",
      "tuitionUSD": "—",
      "tuitionINR": "—",
      "hostelUSD": "—",
      "hostelINR": "—",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "2",
      "name": "University of Perpetual Help System Dalta (UPHSD)",
      "tuitionUSD": "—",
      "tuitionINR": "—",
      "hostelUSD": "—",
      "hostelINR": "—",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "3",
      "name": "AMA School of Medicine (AMASOM)",
      "tuitionUSD": "—",
      "tuitionINR": "—",
      "hostelUSD": "—",
      "hostelINR": "—",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "4",
      "name": "Davao Medical School Foundation",
      "tuitionUSD": "—",
      "tuitionINR": "—",
      "hostelUSD": "—",
      "hostelINR": "—",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "5",
      "name": "Bicol Christian College of Medicine (BCCM)",
      "tuitionUSD": "—",
      "tuitionINR": "—",
      "hostelUSD": "—",
      "hostelINR": "—",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "6",
      "name": "Emilio Aguinaldo College (EAC)",
      "tuitionUSD": "—",
      "tuitionINR": "—",
      "hostelUSD": "—",
      "hostelINR": "—",
      "worldRank": "—",
      "countryRank": "—"
    },
    {
      "sNo": "7",
      "name": "Our Lady Fatima University",
      "tuitionUSD": "—",
      "tuitionINR": "—",
      "hostelUSD": "—",
      "hostelINR": "—",
      "worldRank": "—",
      "countryRank": "—"
    }
  ]
};

// --- DATA FROM SITE.TS ---
const mbbsCountries = [
  ...[
  {
    "slug": "nepal",
    "name": "Nepal",
    "flag": "🇳🇵",
    "tagline": "High FMGE success & close proximity to India",
    "duration": "5.5 Years",
    "fees": "₹ 45 – 60 Lacs (Total)",
    "language": "English Medium",
    "intakes": [
      "September"
    ],
    "topUniversities": [
      "B.P. Koirala Institute of Health Sciences (BPKIHS)",
      "Kathmandu University",
      "Tribhuvan University",
      "Manipal College of Medical Sciences"
    ],
    "highlights": [
      "NMC Approved",
      "Similar Syllabus to India",
      "No Passport Required",
      "Indian Food & Culture",
      "High FMGE Passing Ratio"
    ],
    "description": "Studying MBBS in Nepal is highly favored by Indian medical students due to its direct academic similarity to the Indian curriculum, shared culture, and geographic proximity. Many NMC approved medical universities and MCI approved universities in Nepal provide outstanding clinical training in local hospitals, leading to excellent FMGE and NExT results without requiring any donation.",
    "eligibility": [
      "NEET Qualified",
      "50% in PCB",
      "17+ years of age"
    ],
    "hostel": "On-campus hostels with dedicated blocks for Indian students, attached mess.",
    "food": "Indian food (both North and South Indian) is readily available everywhere on campus.",
    "recognition": [
      "NMC",
      "WHO",
      "EU Recognized"
    ],
    "fmge": "Fully eligible for NExT / FMGE screening.",
    "process": [
      "1. Counseling",
      "2. Registration (Last date: 30 June)",
      "3. Document Verification",
      "4. University Entrance / Interview",
      "5. Seat Confirmation",
      "6. Travel to Nepal in September"
    ]
  },
  {
    "slug": "bangladesh",
    "name": "Bangladesh",
    "flag": "🇧🇩",
    "tagline": "Highest FMGE passing ratio & identical disease pattern",
    "duration": "6 Years",
    "fees": "₹ 30 – 45 Lacs (Total)",
    "language": "English Medium",
    "intakes": [
      "September",
      "January"
    ],
    "topUniversities": [
      "University of Dhaka",
      "University of Rajshahi",
      "Chittagong Medical College",
      "Sylhet Women's Medical College"
    ],
    "highlights": [
      "Highest FMGE Pass Rate",
      "Same Disease Spectrum as India",
      "NMC & WHO Approved",
      "Low Cost of Living",
      "English Medium"
    ],
    "description": "Pursuing MBBS in Bangladesh is an excellent path for Indian students due to having the highest FMGE passing ratio among all foreign destinations. The disease pattern, syllabus, and study materials are identical to the Indian curriculum. TrueMark Edu—your trusted MBBS abroad consultant—ensures smooth direct MBBS admission abroad in top-tier MCI approved universities in Bangladesh.",
    "eligibility": [
      "NEET Qualified",
      "GPA 7.0+ in SSC and HSC",
      "Biology GPA 3.5+"
    ],
    "hostel": "Well-built student hostels with 24/7 security and laundry.",
    "food": "100% Indian-style mess serving North and South Indian cuisines daily.",
    "recognition": [
      "NMC",
      "WHO",
      "BMDC"
    ],
    "fmge": "Eligible for NExT / FMGE screening with record passing ratios.",
    "process": [
      "1. Eligibility Matching & Counseling",
      "2. Apply (Last date: 30 June)",
      "3. DGHS Equivalence Certificate",
      "4. Admission Offer & Seat Confirmation",
      "5. Visa Stamping",
      "6. Departure"
    ]
  },
  {
    "slug": "china",
    "name": "China",
    "flag": "🇨🇳",
    "tagline": "World-class medical research & high-volume clinical practice",
    "duration": "6 Years",
    "fees": "₹ 25 – 40 Lacs (Total)",
    "language": "English Medium",
    "intakes": [
      "September"
    ],
    "topUniversities": [
      "Nanjing Medical University",
      "Sichuan University",
      "Zhejiang University",
      "Huazhong University of Science and Technology"
    ],
    "highlights": [
      "Top Global Rankings",
      "Cutting-edge Labs",
      "WHO & NMC Listed",
      "Affordable Living Cost",
      "English Medium Program"
    ],
    "description": "Choosing to study MBBS in China gives Indian students access to some of the world's most high-tech public medical colleges. Chinese universities are top-tier NMC approved medical universities providing massive clinical volume and advanced diagnostic laboratories. TrueMark Edu helps you navigate the direct MBBS admission abroad process with guaranteed MBBS seat confirmation in English-medium universities.",
    "eligibility": [
      "NEET Qualified",
      "12th Standard PCB 60%+",
      "Age 17-25"
    ],
    "hostel": "On-campus modern dormitories, fully furnished with heating/cooling.",
    "food": "Dedicated halal and Indian food canteens inside the campus.",
    "recognition": [
      "NMC",
      "WHO",
      "MOE China"
    ],
    "fmge": "Fully eligible for NExT / FMGE screening.",
    "process": [
      "1. Register (Last date: 30 June)",
      "2. Submit academic transcripts",
      "3. Video Interview",
      "4. Admission Letter & JW202 visa document",
      "5. Student Visa stamping",
      "6. Flight to China in September"
    ]
  },
  {
    "slug": "armenia",
    "name": "Armenia",
    "flag": "🇦🇲",
    "tagline": "Highly economical MBBS in safe European border country",
    "duration": "6 Years",
    "fees": "₹ 18 – 25 Lacs (Total)",
    "language": "English Medium",
    "intakes": [
      "September",
      "March"
    ],
    "topUniversities": [
      "Yerevan State Medical University",
      "Yerevan Haybusak University"
    ],
    "highlights": [
      "Super Affordable",
      "Safe European Environment",
      "No Entrance Exam",
      "English Medium",
      "NMC Approved"
    ],
    "description": "Armenia is an incredibly peaceful and safe country bordering Eastern Europe. For students looking for the cheapest MBBS abroad, Armenia offers a world-class English-medium medical program. TrueMark Edu helps you select NMC approved medical universities in Yerevan, providing easy direct MBBS admission abroad with zero donation.",
    "eligibility": [
      "NEET Qualified",
      "50% PCB in 12th"
    ],
    "hostel": "Student hostels near the Yerevan State Medical University.",
    "food": "Indian restaurants, tiffin services and mess options available nearby.",
    "recognition": [
      "NMC",
      "WHO",
      "EU Recognized"
    ],
    "fmge": "Eligible for NExT screening exam.",
    "process": [
      "Apply online → Document verification → Invitation letter → Visa stamping → Flight"
    ]
  },
  {
    "slug": "philippines",
    "name": "Philippines",
    "flag": "🇵🇭",
    "tagline": "US-styled medical education with hands-on practice",
    "duration": "5.5 Years (BS-MD)",
    "fees": "₹ 24 – 35 Lacs (Total)",
    "language": "English Medium",
    "intakes": [
      "September",
      "November"
    ],
    "topUniversities": [
      "Davao Medical School Foundation",
      "University of Perpetual Help System DALTA",
      "Gullas College of Medicine"
    ],
    "highlights": [
      "90% English speaking nation",
      "US Medical Curriculum",
      "Hands-on Clinical Rotation",
      "Excellent FMGE pass rate",
      "WHO & NMC Listed"
    ],
    "description": "Studying MBBS in the Philippines offers a unique BS-MD curriculum modeled after the American medical education system. It provides immense practical clinical rotations in busy city hospitals, giving students hands-on patient exposure. TrueMark Edu guides you through the direct MBBS admission abroad, ensuring easy MBBS seat confirmation.",
    "eligibility": [
      "NEET Qualified",
      "50% in PCB in 12th Grade"
    ],
    "hostel": "Affordable student dorms with air-conditioning and Wi-Fi.",
    "food": "Indian food, rice, and traditional mess options are widely available.",
    "recognition": [
      "NMC",
      "WHO",
      "CHED Philippines"
    ],
    "fmge": "Fully eligible for NExT / FMGE screening.",
    "process": [
      "1. Counseling",
      "2. Admission in BS Course (Last date: 30 June)",
      "3. NMAT exam guidance",
      "4. MD program admission",
      "5. Visa filing",
      "6. Flight"
    ]
  }
],
  {
    slug: "georgia",
    name: "Georgia",
    flag: "🇬🇪",
    tagline: "Affordable MBBS in Georgia with European standards",
    duration: "6 Years",
    fees: "₹ 25 – 35 Lacs (Total)",
    language: "English Medium",
    intakes: ["September", "March"],
    topUniversities: ["Tbilisi State Medical University", "Ivane Javakhishvili Tbilisi State University", "David Tvildiani Medical University", "Batumi Shota Rustaveli State University"],
    highlights: ["NMC & WHO Approved", "No Entrance Exam", "Easy Visa Process", "Indian Food Available", "Low Cost of Living"],
    description: "Studying MBBS in Georgia is currently one of the most practical and popular pathways for Indian medical aspirants. Many NMC approved medical universities and MCI approved universities in Georgia provide top-class, English-medium medical education. With TrueMark Edu, a leading MBBS abroad consultant, you can secure direct MBBS admission abroad with 100% MBBS seat confirmation and absolutely zero hidden costs. For any NEET qualified MBBS abroad seeker, Georgia offers European-standard clinical training and excellent campus life without requiring any donation.",
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
    description: "If you are looking for the cheapest MBBS abroad option, Uzbekistan is the ultimate destination for Indian students. Many NMC approved medical universities in Uzbekistan offer top-tier, MCI approved medical programs. You can complete your entire MBBS under 25 lakhs, which includes tuition, comfortable hostel accommodation, and Indian mess services. Our experts at TrueMark Edu—one of India's most reliable MBBS consultants in India—ensure smooth direct MBBS admission abroad. We handle your documents, visa, and university approvals to guarantee hassle-free MBBS seat confirmation.",
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
    duration: "6 Years",
    fees: "₹ 22 – 30 Lacs (Total)",
    language: "English Medium",
    intakes: ["September", "March"],
    topUniversities: ["Al-Farabi Kazakh National University", "Kazakh National Medical University", "Karaganda State Medical University", "Astana Medical University"],
    highlights: ["Ranked universities", "Modern infrastructure", "MCI approved", "Indian diaspora", "Affordable"],
    description: "Choosing to study MBBS in Kazakhstan is a highly rewarding choice for Indian medical students. It ranks as a premier destination for studying MBBS abroad, featuring well-equipped modern clinics and world-class faculty. Kazakhstan is home to top-tier NMC approved medical universities and MCI approved universities that run fully English-medium courses. TrueMark Edu, a premier study abroad consultancy, guides you from initial profiling to direct MBBS admission abroad. Our solid support ensures hassle-free NEET qualified MBBS abroad processing with zero donation, enabling easy MBBS seat confirmation.",
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
    description: "Studying MBBS in Russia remains a highly preferred pathway for Indian medical students. For decades, Russia has provided globally recognized medical degrees through its top NMC approved medical universities and MCI approved universities. As a leading MBBS abroad consultant, TrueMark Edu helps you navigate the entire process for direct MBBS admission abroad. We ensure you get verified English-medium medical colleges with excellent clinical training, comfortable student housing with Indian mess, and reliable NExT exam preparation abroad to secure your future career.",
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
    description: "For students searching for the cheapest MBBS abroad, Kyrgyzstan offers an incredibly budget-friendly option to study MBBS abroad under 25 lakhs. All top medical colleges in Kyrgyzstan are NMC approved medical universities and MCI approved universities offering English-medium MBBS courses. TrueMark Edu—the most trusted MBBS consultants in India—assists you with direct MBBS admission abroad, handling everything from documentation to visa clearance. For any NEET qualified MBBS abroad candidate, Kyrgyzstan offers a great balance of low living costs and quality clinical training.",
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
    description: "Studying MBBS in St. Lucia offers a premium Caribbean medical education following the US curriculum. This is a brilliant pathway for students who want to study MBBS abroad and transition to clinical rotations in USA, UK, or Canada. TrueMark Edu—your dedicated study abroad consultancy—facilitates direct MBBS admission abroad in MCI approved universities in St. Lucia. Our counselors provide end-to-end guidance to secure your MBBS seat confirmation and prepare you with high-quality USMLE and NExT exam preparation abroad.",
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
    duration: "5.5 Years",
    fees: "₹ 40 – 1.2 Cr (Total)",
    language: "English / Regional",
    intakes: ["August / September"],
    topUniversities: ["KMC Manipal", "CMC Vellore", "St. Johns Bangalore", "AIIMS (through NEET)"],
    highlights: ["Direct admission support", "Management & NRI quota", "Top private colleges"],
    description: "We help Indian students secure MBBS seats in top deemed and private medical colleges across India through counseling and admission guidance. Avoid massive donations and secure reliable MBBS seat confirmation through legal counseling channels.",
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
    description: "Pursuing MBBS in Italy is a dream come true for Indian students seeking free or low-tuition education in Europe. By cracking the IMAT (International Medical Admission Test), you can gain admission to world-renowned public medical universities in Italy. This provides a direct pathway for MBBS in Schengen and MBBS in EU countries. TrueMark Edu is the leading MBBS abroad consultant helping students with comprehensive IMAT coaching, extensive document verification (Declaration of Value), and visa guidance. We ensure a smooth process for studying MBBS in Europe for Indian students with 100% transparency.",
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
    description: "Studying MBBS in Spain offers a world-class opportunity for studying MBBS in Europe for Indian students. Spain's top medical schools are globally ranked MCI approved universities, providing extensive clinical training in state-of-the-art hospitals. Spain also offers a clear pathway to medical PG in Europe. TrueMark Edu—one of India's premier MBBS consultants in India—assists you with direct MBBS admission abroad, visa processing, and language training. This is a perfect path for students looking for MBBS in EU countries with a high-quality global standard.",
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
    description: "If you want to study MBBS in Romania, you will be receiving a globally recognized degree from an EU-member country. Romania is now part of the Schengen area, allowing you to easily travel and explore MBBS in Schengen nations. Highly prestigious medical schools like Carol Davila University of Medicine and Pharmacy in Bucharest are fully NMC approved medical universities. TrueMark Edu, a leading study abroad consultancy, helps you secure direct MBBS admission abroad in Romania, offering high-quality clinical training and reliable NExT exam preparation abroad.",
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
    description: "Studying MBBS in Bulgaria is an excellent, cost-effective option for students looking for MBBS in EU countries. Flagship institutions like Sofia University (Sofia Medical University) are highly respected worldwide and are fully NMC approved medical universities. They offer English-medium MBBS courses with great practical training. TrueMark Edu—your reliable MBBS abroad consultant—guides you through the university entrance tests, document legalization, and student visa filing, ensuring you secure your MBBS seat confirmation in Bulgaria with peace of mind.",
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
    tagline: "Ostrava University - Top European medical education",
    duration: "6 Years",
    fees: "₹ 70 – 90 Lacs (Total)",
    language: "English Medium",
    intakes: ["September"],
    topUniversities: ["Ostrava University", "Masaryk University", "Palacky University"],
    highlights: ["Ostrava University", "Top EU research", "High FMGE passing"],
    description: "Pursuing MBBS in Czech Republic is a premium choice for students looking for MBBS in EU countries. Ostrava University and other prestigious medical schools in the Czech Republic are highly coveted due to their research-focused curriculum. These are world-renowned, NMC approved medical universities that have consistently delivered some of the highest FMGE coaching abroad and NExT exam preparation abroad success rates. TrueMark Edu helps you with entrance exam preparation, university admission, and student visa filing to ensure a seamless direct MBBS admission abroad.",
    eligibility: ["NEET Qualified", "50% PCB", "University entrance test (Biology, Chemistry)"],
    hostel: "Student dormitories & apartments.",
    food: "Indian restaurants in Ostrava.",
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
    description: "Slovakia offers a secure, peaceful, and world-class environment for pursuing MBBS in Europe for Indian students. Slovakian medical schools, like Comenius University, are prestigious MCI approved universities that offer fully English-medium medical programs. As a premier study abroad consultancy, TrueMark Edu provides comprehensive support for direct MBBS admission abroad in Slovakia. We handle your university registration, visa documentation, and local translation to ensure a smooth transition into MBBS in Schengen zone.",
    eligibility: ["NEET Qualified", "50% PCB", "Entrance test"],
    hostel: "Student hostels and apartments.",
    food: "Indian food and dining options.",
    recognition: ["NMC", "WHO", "EU"],
    fmge: "Eligible for NExT.",
    process: ["Application → Entrance → Offer → Visa"]
  },
  {
    slug: "poland",
    name: "Poland",
    flag: "🇵🇱",
    tagline: "MBBS in Poland - Top-tier EU medical programs",
    duration: "6 Years",
    fees: "₹ 12 – 16 Lacs/Year",
    language: "English Medium",
    intakes: ["September"],
    topUniversities: ["University of Warsaw", "Jagiellonian University", "Medical University of Gdansk"],
    highlights: ["EU degree", "Top clinical exposure", "Schengen Country"],
    description: "Studying MBBS in Poland is a prestigious pathway for Indian students looking for premier medical education in Europe. Poland is a major Schengen nation, and its medical degrees are highly respected worldwide. Top universities like the University of Warsaw offer top-class, English-medium MBBS courses with fees of ₹ 12 - 16 Lacs per year. TrueMark Edu guides you through the competitive entrance exam and visa processing to ensure easy MBBS seat confirmation.",
    eligibility: ["NEET Qualified", "50% in PCB", "University Entrance Exam"],
    hostel: "Excellent on-campus dormitories with 24/7 student facilities.",
    food: "Indian food and local mess options easily available in university areas.",
    recognition: ["NMC Approved", "WHO Listed", "EU Recognized"],
    fmge: "Fully eligible for FMGE/NExT screening.",
    process: ["1. Profile Evaluation", "2. Entrance Exam", "3. Offer Letter", "4. Visa", "5. Flight to Poland"]
  },
  {
    slug: "hungary",
    name: "Hungary",
    flag: "🇭🇺",
    tagline: "MBBS in Hungary - Home of Semmelweis University",
    duration: "6 Years",
    fees: "₹ 12 – 18 Lacs/Year",
    language: "English Medium",
    intakes: ["September"],
    topUniversities: ["Semmelweis University Budapest", "University of Pecs", "University of Debrecen", "University of Szeged"],
    highlights: ["EU & Schengen", "Semmelweis University", "World-class clinical training"],
    description: "Hungary is one of the most prestigious destinations for MBBS in Europe for Indian students. Home to the legendary Semmelweis University Budapest and the historic University of Pecs, Hungary offers fully English-medium, NMC approved medical programs with outstanding clinical exposure in modern university hospitals. As an EU and Schengen nation, a Hungarian medical degree is recognized worldwide. TrueMark Edu provides complete support for entrance exam preparation, university admission, visa documentation, and accommodation to ensure a smooth direct MBBS admission in Hungary.",
    eligibility: ["NEET Qualified", "50% in PCB", "University Entrance Exam (Biology, Chemistry)"],
    hostel: "Modern student dormitories and private apartments near campus.",
    food: "Indian restaurants and mess facilities available in Budapest and Pecs.",
    recognition: ["NMC Approved", "WHO Listed", "EU Recognized"],
    fmge: "Fully eligible for FMGE/NExT screening with strong pass results.",
    process: ["1. Profile Evaluation", "2. Entrance Exam", "3. Offer Letter", "4. Visa", "5. Flight to Hungary"]
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
    slug: "ostrava-university",
    name: "University of Ostrava",
    country: "Czech Republic",
    flag: "🇨🇿",
    qs: "Top EU Medical",
    fees: "EUR 12,000/Year",
    duration: "6 Years (Medicine)",
    language: "English",
    eligibility: ["NEET Qualified", "50% PCB marks", "Entrance Exam / Online Exam / Interview"],
    hostel: "On-campus dormitory with modern amenities.",
    food: "Indian mess and restaurants in Ostrava.",
    recognition: ["NMC", "WHO", "EU", "WFME"],
    fmge: "NExT eligible. High pass rate.",
    process: ["1. Register for Entrance Exam", "2. Submit documents & pay EUR 200 Application Fee", "3. Programs: Medicine, Dentistry, Nursing", "4. Entrance Exam / Interview", "5. Visa Processing", "6. Departure in September"]
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
    fees: "₹ 12 – 16 Lacs/Year",
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
  },
  {
    slug: "medical-university-of-gdansk",
    name: "Medical University of Gdansk",
    country: "Poland",
    flag: "🇵🇱",
    qs: "Top 500 QS",
    fees: "EUR 13,500/Year",
    duration: "6 Years (MD) / 3 Years (Nursing)",
    language: "English",
    eligibility: ["NEET Qualified", "50% PCB marks", "High School transcripts", "Online Entrance Exam"],
    hostel: "Modern on-campus dormitories with excellent utilities.",
    food: "Indian food outlets and student kitchen services near the Gdansk campus.",
    recognition: ["NMC Approved", "WHO Listed", "EU Recognized", "WFME"],
    fmge: "Fully eligible for NExT and licensing exams globally.",
    process: ["1. MD Medicine: EUR 13,500 + EUR 750 Orientation Fee", "2. Bachelor of Nursing: EUR 6,000 + EUR 750 Orientation Fee", "3. Intakes: Sep'26, Last date 30'June", "4. Pass Entrance Exam / Interview", "5. Secure Visa & Departure in September 2026"]
  },
  {
    slug: "medical-university-of-bialystok",
    name: "Medical University of Bialystok",
    country: "Poland",
    flag: "🇵🇱",
    qs: "Top EU Medical",
    fees: "EUR 15,100/Year",
    duration: "6 Years",
    language: "English",
    eligibility: ["NEET Qualified", "12th standard PCB 50%+", "Entrance Interview / Test"],
    hostel: "On-campus student dorms with modern rooms and Wi-Fi.",
    food: "Indian food delivery and self-cooking kitchens in dorms.",
    recognition: ["NMC Approved", "WHO Listed", "EU Recognized"],
    fmge: "Fully eligible for FMGE/NExT screening.",
    process: ["1. MD Medicine: EUR 15,100 + EUR 200 Application Fee", "2. Bachelor of Nursing: Fee will be confirmed in the coming days", "3. Intakes: Sep'26, Last date 15'July", "4. University Entrance Interview", "5. Visa filing & Departure in September"]
  },
  {
    slug: "medical-university-of-poznan",
    name: "Medical University of Poznan",
    country: "Poland",
    flag: "🇵🇱",
    qs: "Top 600 QS",
    fees: "USD 19,000/Year",
    duration: "6 Years (MD) / 5 Years (Dentistry)",
    language: "English",
    eligibility: ["NEET Qualified", "50% in PCB", "Entrance Exam / Online Interview"],
    hostel: "Premium student residences near university hospital complexes.",
    food: "Hygienic Polish student canteens & local Indian restaurants.",
    recognition: ["NMC Approved", "WHO Listed", "EU Recognized", "WFME"],
    fmge: "Eligible for NExT/FMGE and USMLE pathways.",
    process: ["1. MD Medicine: USD 19,000 + USD 250 Application Fee", "2. Bachelor of Dentistry (5-Year Program): USD 18,400 + USD 250 Application Fee", "3. Intakes: Sep'26, Last date 30'June", "4. Complete Entrance Exam / Interview", "5. Get Visa & fly in September"]
  },
  {
    slug: "medical-university-of-rzeszow",
    name: "Medical University of Rzeszow",
    country: "Poland",
    flag: "🇵🇱",
    qs: "Top Polish Medical",
    fees: "EUR 14,500/Year",
    duration: "6 Years",
    language: "English",
    eligibility: ["NEET Qualified", "50% in PCB", "University Interview / Evaluation"],
    hostel: "Fully furnished student housing near clinics.",
    food: "Polish cafeterias and student self-cooking facilities.",
    recognition: ["NMC Approved", "WHO Listed", "EU Recognized"],
    fmge: "Fully eligible for FMGE/NExT screening.",
    process: ["1. MD Medicine: EUR 14,500 + EUR 200 Application Fee", "2. Intakes: Sep'26, Last date 30'June", "3. Complete Online interview / assessment", "4. Visa processing & Flight in September 2026"]
  },
  {
    slug: "university-of-pecs",
    name: "University of Pecs",
    country: "Hungary",
    flag: "🇭🇺",
    qs: "Top 250 in Europe",
    fees: "USD 16,750/Year",
    duration: "6 Years",
    language: "English",
    eligibility: ["NEET Qualified", "12th Grade Biology & Chemistry 50%+", "Entrance Exam (Written & Oral)"],
    hostel: "Premium modern university hostels near Faculty of Medicine.",
    food: "Excellent Hungarian canteens & local Indian dining near Pecs.",
    recognition: ["NMC Approved", "WHO Listed", "EU Recognized", "WFME"],
    fmge: "Fully eligible for NExT/FMGE screening.",
    process: ["1. Faculty of Medicine: USD 16,750 + USD 250 Application Fee", "2. Intakes: Sep'26, Last date 30'June", "3. Pass Entrance Examination (Written + Oral)", "4. Seat confirmation, Visa & Fly in September"]
  }
];

const testimonials = [
  { name: "Rahul Sharma", role: "MBBS, Tbilisi State Medical University, Georgia", text: "Choosing TrueMark Edu for my admission in Georgia was the best decision. They were extremely clear about the fees and did not charge a single rupee of hidden donation. The team helped me with the visa, apostille of documents, and even met me at the Tbilisi airport. The Indian mess in Tbilisi is great and the local support during the first year made settling down very easy.", rating: 5 },
  { name: "Sneha Deshmukh", role: "MBBS, Carol Davila, Romania", text: "Getting into Carol Davila University in Bucharest seemed tough, but TrueMark made it seamless. They handled my equivalence certificate, legalizations, and guided me through the entrance exam. Romania is beautiful and extremely safe for female students. Highly recommend their professional admissions team if you want direct admission in EU countries.", rating: 5 },
  { name: "Mohammed Sameer", role: "MBBS, Samarkand State Medical Institute, Uzbekistan", text: "My father was worried about the high costs of private medical colleges in India. TrueMark recommended Uzbekistan, and I am completing my entire MBBS under 25 lakhs! The faculty here is highly supportive, and we get extensive clinical exposure. TrueMark\'s on-site coordinator is always there to help us with visa extensions and local accommodation.", rating: 5 },
  { name: "Aditya Vardhan", role: "MBA, SP Jain School of Global Management, Dubai", text: "TrueMark Edu helped me secure my MBA admission in Dubai with a partial scholarship. Their team was fantastic with my SOP and profile building. Dubai offers incredible internship opportunities and a 2-year post-study work visa. Their team is extremely professional and transparent.", rating: 5 },
  { name: "Divya K. Rao", role: "MBBS, University of Ostrava, Czech Republic", text: "Ostrava University has an incredibly advanced clinical training program. Cracking the entrance test was challenging, but the mock test materials and study guidelines provided by TrueMark were spot-on. TrueMark\'s study abroad consultancy is very different from other agents—they are honest and provide genuine, factual information.", rating: 5 },
  { name: "Vikram Aditya", role: "MBBS, Sapienza University of Rome, Italy", text: "Studying medicine in Italy at almost zero tuition fee seemed unbelievable at first, but TrueMark Edu made it happen through the IMAT exam. Their IMAT coaching resources and hand-held visa documentation support are unparalleled. If you are serious about studying MBBS in EU countries, TrueMark is the most genuine partner in India.", rating: 5 }
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

// Custom client-provided university images (slug -> file in public/)
const universityImageMap = {
  "ostrava-university": "univ-ostrava.jpeg",
  "semmelweis-university": "univ-semmelweis.jpeg",
  "sofia-medical-university": "univ-sofia.jpeg",
  "medical-university-of-bialystok": "univ-bialystok.jpeg",
  "carol-davila-bucharest": "univ-carol-davila.webp",
  "university-of-warsaw": "univ-warsaw.webp",
  "sapienza-university-rome": "univ-sapienza.webp",
  "medical-university-of-gdansk": "univ-gdansk.webp",
  "medical-university-of-poznan": "univ-poznan.webp",
  "medical-university-of-rzeszow": "univ-rzeszow.webp",
  "university-of-pecs": "univ-pecs.webp"
};

// Helper to determine path depth (always absolute from root for production stability)
function getRootPrefix(filepath) {
  return "/";
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
  <a href="https://wa.me/919540302032" target="_blank" rel="noopener noreferrer" class="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center animate-bounce duration-1000" aria-label="WhatsApp">
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
  return `<form id="counseling-form" action="https://formsubmit.co/adnanansari7042@gmail.com" method="POST" class="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 space-y-4">
    <input type="hidden" name="_subject" value="New Counseling Enquiry - TrueMark Edu" />
    <input type="hidden" name="_captcha" value="false" />
    <input type="hidden" name="_template" value="table" />
    <div>
      <h3 class="text-xl font-bold text-slate-900">Book Free Counseling</h3>
      <p class="text-sm text-slate-500">Get a 1-on-1 session with our admission experts today.</p>
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
      Submit Enquiry
    </button>
    <div id="form-done-msg" class="hidden text-sm text-green-600 text-center">Thank you! Your enquiry has been submitted successfully.</div>
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
  const imageMap = {
    georgia: "georgia.png",
    uzbekistan: "uzbekistan.jpeg",
    kazakhstan: "kazakhstan.jpeg",
    russia: "russia.jpeg",
    kyrgyzstan: "kyrgyzstan.jpeg",
    armenia: "armenia.png",
    nepal: "nepal.png",
    bangladesh: "bangladesh.png",
    china: "china.jpeg",
    india: "india.jpeg",
    italy: "italy.png",
    philippines: "philippines.jpeg",
    "st-lucia": "st-lucia.jpeg"
  };

  const imageName = imageMap[c.slug] || countryCardImages[index % countryCardImages.length];
  const image = root + imageName;
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
            <i data-lucide="award" class="w-4 h-4 text-green-300"></i> India’s Most Trusted Consultancy
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
            <a href="tel:+919540302093" class="btn-shine inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-7 py-3.5 rounded-full transition-all shadow-lg">
              <i data-lucide="phone" class="w-4 h-4"></i> +91 95403 02093
            </a>
            <a href="https://wa.me/919540302032" class="btn-shine inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white font-bold px-7 py-3.5 rounded-full transition-all">
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
            "Carol Davila Bucharest", "Ostrava University", "Sapienza University Rome", "Semmelweis Budapest",
            "Sofia Medical University", "University of Warsaw", "Tbilisi State Medical", "Kazakh National Medical",
            "Tashkent Medical Academy", "Moscow State Medical", "Comenius University", "University of Barcelona",
            "Aureus University St. Lucia", "Asian Medical Institute"
          ].concat([
            "Carol Davila Bucharest", "Ostrava University", "Sapienza University Rome", "Semmelweis Budapest",
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
              Study MBBS in Europe's top public and private universities. Ostrava University, Carol Davila Bucharest, Sapienza Rome, Sofia Medical University & many more — all NMC, WHO & EU recognized.
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
            <div class="custom-stat-number text-green-300">5000+</div>
            <div class="mt-2 text-sm font-semibold text-white/90">Students Admitted</div>
          </div>
          <div class="bg-white/10 border border-white/20 backdrop-blur-md rounded-3xl p-8">
            <div class="inline-flex p-3 bg-white/15 rounded-2xl mb-3"><i data-lucide="globe-2" class="w-8 h-8"></i></div>
            <div class="custom-stat-number text-green-300">15+</div>
            <div class="mt-2 text-sm font-semibold text-white/90">Countries</div>
          </div>
          <div class="bg-white/10 border border-white/20 backdrop-blur-md rounded-3xl p-8">
            <div class="inline-flex p-3 bg-white/15 rounded-2xl mb-3"><i data-lucide="award" class="w-8 h-8"></i></div>
            <div class="custom-stat-number text-green-300">100%</div>
            <div class="mt-2 text-sm font-semibold text-white/90">Visa Success</div>
          </div>
          <div class="bg-white/10 border border-white/20 backdrop-blur-md rounded-3xl p-8">
            <div class="inline-flex p-3 bg-white/15 rounded-2xl mb-3"><i data-lucide="building-2" class="w-8 h-8"></i></div>
            <div class="custom-stat-number text-green-300">50+</div>
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
                <img src="${universityImageMap[u.slug] ? root + universityImageMap[u.slug] : [IMG.campus, IMG.university, IMG.classroom, IMG.students2, IMG.classroom2, IMG.students3][i % 6]}" alt="${u.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
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
              <div class="mt-6 flex items-center gap-3 pt-5 border-t border-slate-100 font-sans">
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
          <a href="https://wa.me/919540302032" class="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg text-lg">
            💬 WhatsApp Now
          </a>
          <a href="tel:+919540302093" class="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/30 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full transition-all text-lg">
            <i data-lucide="phone" class="w-5 h-5"></i> Call +91 95403 02093
          </a>
        </div>
      </div>
    </section>
  `;
  return wrapPage(content, "Your MBBS Abroad Journey Begins Here", "Study MBBS in Georgia, Uzbekistan, Kazakhstan, Russia, Europe & Caribbean. Direct admissions, zero donation, 100% visa success.", "index.html", "home");
}

// 2. ABOUT PAGE (about.html)

// 14. PRICING & PACKAGES PAGE (pricing.html)
function buildPricing(root) {
  const content = `
    ${getPageHeroHTML("Transparent Pricing & Packages", "No hidden charges, merit-based direct transfers, and exclusive discounts on your study abroad journey.", [{ name: "Home", to: `${root}index` }, { name: "Pricing & Packages" }])}
    
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
                <ul class="pricing-card-list">
                  <li class="pricing-card-item pricing-card-item-active"><i data-lucide="check-circle" class="w-4 h-4 text-green-600 shrink-0"></i> Registration: ₹ 50,000</li>
                  <li class="pricing-card-item pricing-card-item-active"><i data-lucide="check-circle" class="w-4 h-4 text-green-600 shrink-0"></i> University Applications: 1 + 2 Backup</li>
                  <li class="pricing-card-item pricing-card-item-active"><i data-lucide="check-circle" class="w-4 h-4 text-green-600 shrink-0"></i> University Application Fees Included</li>
                  <li class="pricing-card-item pricing-card-item-active"><i data-lucide="check-circle" class="w-4 h-4 text-green-600 shrink-0"></i> Full Document Apostille & Legalisations</li>
                  <li class="pricing-card-item pricing-card-item-active"><i data-lucide="check-circle" class="w-4 h-4 text-green-600 shrink-0"></i> Student Visa Assistance & Mock Interview Prep</li>
                  <li class="pricing-card-item pricing-card-item-active"><i data-lucide="check-circle" class="w-4 h-4 text-green-600 shrink-0"></i> Europa CV & Cover Letter Writing</li>
                  <li class="pricing-card-item pricing-card-item-active"><i data-lucide="check-circle" class="w-4 h-4 text-green-600 shrink-0"></i> Arrival Assistance & Airport Pickup</li>
                  <li class="pricing-card-item pricing-card-item-active"><i data-lucide="check-circle" class="w-4 h-4 text-green-600 shrink-0"></i> Local Sim Card & Bank Account Setup</li>
                  <li class="pricing-card-item pricing-card-item-inactive"><i data-lucide="x-circle" class="w-4 h-4 text-slate-300 shrink-0"></i> 6 Year On-site Local Support</li>
                  <li class="pricing-card-item pricing-card-item-inactive"><i data-lucide="x-circle" class="w-4 h-4 text-slate-300 shrink-0"></i> Priority Visa Slot Booking</li>
                  <li class="pricing-card-item pricing-card-item-inactive"><i data-lucide="x-circle" class="w-4 h-4 text-slate-300 shrink-0"></i> TRP (Temporary Residence) Assistance</li>
                </ul>
              </div>
            </div>
            <a href="${root}contact" class="mt-8 block text-center bg-slate-900 text-white font-bold py-3.5 rounded-full hover:bg-slate-800 transition">Get Started Now</a>
          </div>

          <!-- Advanced Card -->
          <div class="bg-gradient-to-br from-blue-900 to-green-900 rounded-3xl p-8 border border-slate-800 shadow-xl relative overflow-hidden flex flex-col justify-between hover:shadow-2xl transition duration-300 text-white">
            <div class="absolute top-4 right-4 bg-yellow-400 text-slate-900 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-lg">Most Popular</div>
            <div>
              <div class="text-xl font-bold mb-2">Advanced Premium Package</div>
              <p class="text-sm text-white/70 mb-6">Fully-managed VIP package including priority services and 6 years of on-site support.</p>
              <div class="text-4xl font-black mb-6">₹ 5,00,000 <span class="text-sm font-medium text-white/70">Total Cost</span></div>
              <div class="border-t border-white/10 pt-6">
                <ul class="pricing-card-list pricing-card-dark">
                  <li class="pricing-card-item pricing-card-item-active"><i data-lucide="check-circle" class="w-4 h-4 text-green-400 shrink-0"></i> Registration: ₹ 50,000</li>
                  <li class="pricing-card-item pricing-card-item-active"><i data-lucide="check-circle" class="w-4 h-4 text-green-400 shrink-0"></i> University Applications: 3 + 2 Backup</li>
                  <li class="pricing-card-item pricing-card-item-active"><i data-lucide="check-circle" class="w-4 h-4 text-green-400 shrink-0"></i> University Application Fees Included</li>
                  <li class="pricing-card-item pricing-card-item-active"><i data-lucide="check-circle" class="w-4 h-4 text-green-400 shrink-0"></i> Full Document Apostille & Legalisations</li>
                  <li class="pricing-card-item pricing-card-item-active"><i data-lucide="check-circle" class="w-4 h-4 text-green-400 shrink-0"></i> Student Visa Assistance & Mock Interview Prep</li>
                  <li class="pricing-card-item pricing-card-item-active"><i data-lucide="check-circle" class="w-4 h-4 text-green-400 shrink-0"></i> Europa CV & Cover Letter Writing</li>
                  <li class="pricing-card-item pricing-card-item-active"><i data-lucide="check-circle" class="w-4 h-4 text-green-400 shrink-0"></i> Arrival Assistance & Airport Pickup</li>
                  <li class="pricing-card-item pricing-card-item-active"><i data-lucide="check-circle" class="w-4 h-4 text-green-400 shrink-0"></i> Local Sim Card & Bank Account Setup</li>
                  <li class="pricing-card-item pricing-card-item-active"><i data-lucide="check-circle" class="w-4 h-4 text-green-300 shrink-0"></i> 6 Year On-site Local Support Abroad</li>
                  <li class="pricing-card-item pricing-card-item-active"><i data-lucide="check-circle" class="w-4 h-4 text-green-300 shrink-0"></i> Priority Visa Slot Booking & Assistance</li>
                  <li class="pricing-card-item pricing-card-item-active"><i data-lucide="check-circle" class="w-4 h-4 text-green-300 shrink-0"></i> TRP (Temporary Residence) Assistance</li>
                  <li class="pricing-card-item pricing-card-item-active"><i data-lucide="check-circle" class="w-4 h-4 text-green-300 shrink-0"></i> Dummy Accommodation & Flight Bookings</li>
                  <li class="pricing-card-item pricing-card-item-active"><i data-lucide="check-circle" class="w-4 h-4 text-green-300 shrink-0"></i> 100% Courier Charges & Forex Support</li>
                </ul>
              </div>
            </div>
            <a href="${root}contact" class="mt-8 block text-center bg-white text-blue-900 font-bold py-3.5 rounded-full hover:bg-slate-100 transition shadow-lg">Get Started Now</a>
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
          <p class="text-slate-600 mt-3 text-lg">Clear and highly transparent fee structure with a flat, professional consultancy fee inclusive of all taxes.</p>
        </div>

        <div class="max-w-4xl mx-auto overflow-hidden bg-white border border-slate-200 rounded-3xl shadow-sm mb-16">
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-blue-900 text-white text-sm font-semibold">
                  <th class="p-5">Country Name</th>
                  <th class="p-5">OTC (One-Time Charges) Fixed</th>
                  <th class="p-5 text-green-300">Consultancy Fee (Inclusive of GST)</th>
                </tr>
              </thead>
              <tbody class="text-sm text-slate-700 divide-y divide-slate-100">
                <tr class="hover:bg-slate-50 transition">
                  <td class="p-5 font-bold flex items-center gap-2"><span class="text-lg">🇷🇺</span> Russia</td>
                  <td class="p-5 font-semibold text-slate-900">$1,200</td>
                  <td class="p-5 font-extrabold text-green-700 bg-green-50/40">₹ 1,00,000 (Inclusive of GST)</td>
                </tr>
                <tr class="hover:bg-slate-50 transition">
                  <td class="p-5 font-bold flex items-center gap-2"><span class="text-lg">🇰🇿</span> Kazakhstan</td>
                  <td class="p-5 font-semibold text-slate-900">$1,200</td>
                  <td class="p-5 font-extrabold text-green-700 bg-green-50/40">₹ 1,00,000 (Inclusive of GST)</td>
                </tr>
                <tr class="hover:bg-slate-50 transition">
                  <td class="p-5 font-bold flex items-center gap-2"><span class="text-lg">🇺🇿</span> Uzbekistan</td>
                  <td class="p-5 font-semibold text-slate-900">$1,200</td>
                  <td class="p-5 font-extrabold text-green-700 bg-green-50/40">₹ 1,00,000 (Inclusive of GST)</td>
                </tr>
                <tr class="hover:bg-slate-50 transition">
                  <td class="p-5 font-bold flex items-center gap-2"><span class="text-lg">🇰🇬</span> Kyrgyzstan</td>
                  <td class="p-5 font-semibold text-slate-900">$1,200</td>
                  <td class="p-5 font-extrabold text-green-700 bg-green-50/40">₹ 1,00,000 (Inclusive of GST)</td>
                </tr>
                <tr class="hover:bg-slate-50 transition">
                  <td class="p-5 font-bold flex items-center gap-2"><span class="text-lg">🇬🇪</span> Georgia</td>
                  <td class="p-5 font-semibold text-slate-900">$2,000</td>
                  <td class="p-5 font-extrabold text-green-700 bg-green-50/40">₹ 1,00,000 (Inclusive of GST)</td>
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

    <!-- OUR SERVICES MERGED SECTION -->
    <section class="py-20 bg-white font-sans border-t border-slate-100">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="inline-block bg-blue-100 text-blue-700 text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full">Complete Solutions</span>
          <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4">Our End-to-End Study Abroad Services</h2>
          <p class="text-slate-600 mt-3 text-lg">We manage your entire admission journey from university matching and documentation to on-ground landing support.</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${services.map((s) => `
            <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-xl hover:border-green-300 transition">
              <div class="inline-flex p-3 bg-green-50 text-green-700 rounded-xl"><i data-lucide="${s.icon}" class="w-8 h-8"></i></div>
              <h3 class="text-lg font-bold text-slate-900 mt-4">${s.title}</h3>
              <p class="text-slate-600 text-sm mt-2">${s.desc}</p>
              <a href="${root}contact" class="mt-4 inline-flex items-center gap-1 text-sm text-blue-700 font-semibold hover:gap-2 transition-all">Know More <i data-lucide="arrow-right" class="w-4 h-4"></i></a>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
    
    <section class="py-20 bg-slate-50 font-sans border-t border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900">Why Choose TrueMark Edu?</h2>
          <p class="text-slate-600 mt-4 leading-relaxed">We bring a student-first approach with complete transparency. No donations, no hidden fees, only honest guidance and direct university admissions.</p>
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

    <!-- CALL TO ACTION -->
    <section class="py-20 bg-blue-900 text-white text-center font-sans">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-4">Want a Custom Fee Quote & Consultation?</h2>
        <p class="text-white/80 max-w-xl mx-auto text-sm leading-relaxed mb-8">Connect directly with our admission experts for customized pricing plans, easy EMI option details, and university tuition direct billing processes.</p>
        <div class="flex flex-wrap justify-center gap-4">
          <a href="https://wa.me/919540302032" class="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-7 py-3 rounded-full shadow-lg transition">💬 Discuss on WhatsApp</a>
          <a href="${root}contact" class="inline-flex items-center gap-2 bg-white text-blue-900 font-bold px-7 py-3 rounded-full hover:shadow-xl transition">Book Free Session</a>
        </div>
      </div>
    </section>
  `;
  return wrapPage(content, "Transparent Pricing & Packages", "Compare basic and advanced packages for Europe MBBS, and find OTC and consultancy fees for Georgia, Uzbekistan, Russia and Kazakhstan.", "pricing.html", "pricing");
}

function buildAbout(root) {
  const content = `
    ${getPageHeroHTML("About TrueMark Edu", "India's most trusted study abroad consultancy helping thousands of students achieve their MBBS and international education dreams.", [{ name: "Home", to: `${root}index` }, { name: "About Us" }])}
    
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
            <img src="team-anandita.jpg" alt="Anandita Jitt" class="w-24 h-24 rounded-full object-cover mx-auto border-2 border-green-600 shadow-md" />
            <h3 class="text-xl font-bold text-slate-900 mt-4">Anandita Jitt</h3>
            <div class="text-sm text-green-700 font-semibold">Founder & University Relations</div>
            <p class="text-slate-600 text-sm mt-3">10+ years of experience in overseas MBBS admissions. Managing top university relations and admissions across Europe and Georgia.</p>
            <a href="tel:+919540302093" class="text-sm text-blue-700 mt-3 inline-block">+91 95403 02093</a>
          </div>
          <div class="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-xl transition">
            <img src="team-haider.jpg" alt="Haidar Ali" class="w-24 h-24 rounded-full object-cover mx-auto border-2 border-green-600 shadow-md" />
            <h3 class="text-xl font-bold text-slate-900 mt-4">Haidar Ali</h3>
            <div class="text-sm text-green-700 font-semibold">Co-founder & Europe MBBS Expert</div>
            <p class="text-slate-600 text-sm mt-3">8+ years of experience in EdTech, Europe MBBS expert. Handling visa documentation, university partnerships and on-ground student support across Europe and Central Asia.</p>
            <a href="tel:+919540302032" class="text-sm text-blue-700 mt-3 inline-block">+91 95403 02032</a>
          </div>
        </div>
      </div>
    </section>

    <!-- International Office -->
    <section class="py-20 bg-white font-sans border-t border-slate-100">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900">Our International Office</h2>
        <p class="text-slate-600 mt-4 max-w-2xl mx-auto">Visit us at our Europe office in the heart of Madrid, Spain.</p>
        <div class="mt-10 max-w-xl mx-auto">
          <div class="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-green-50 border border-slate-200 hover:shadow-xl transition text-center">
            <div class="inline-flex p-4 bg-white text-blue-700 rounded-2xl shadow-sm"><i data-lucide="map-pin" class="w-8 h-8"></i></div>
            <div class="text-4xl mt-4">🇪🇸</div>
            <h3 class="text-xl font-bold text-slate-900 mt-3">Study in Spain Guide</h3>
            <p class="text-slate-700 mt-3 leading-relaxed">Calle Montera 32, Puerta del Sol,<br />Madrid - 28013</p>
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
    ${getPageHeroHTML("Contact TrueMark Edu", "Get in touch with our admissions experts. We're happy to help you with any questions about MBBS abroad, Europe admissions, visa and coaching.", [{ name: "Home", to: `${root}index` }, { name: "Contact" }])}
    
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
                <p class="text-sm text-slate-600">Anandita Jitt: +91 95403 02093</p>
                <p class="text-sm text-slate-600">Haidar Ali: +91 95403 02032</p>
              </div>
            </div>
          </div>
          <div class="p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition">
            <div class="flex gap-4">
              <div class="inline-flex p-3 bg-green-50 text-green-700 rounded-xl shrink-0"><i data-lucide="mail" class="w-6 h-6"></i></div>
              <div>
                <h4 class="font-bold text-slate-900">Email</h4>
                <p class="text-sm text-slate-600">info@truemarkedu.com</p>
                <p class="text-sm text-slate-600">director@truemarkedu.com</p>
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
          
          <a href="https://wa.me/919540302032" target="_blank" rel="noreferrer" class="flex items-center gap-3 p-6 rounded-2xl bg-green-600 text-white hover:bg-green-700 transition">
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
        ${blogs.map((b, i) => {
          const image = [IMG.campus, IMG.classroom, IMG.dubai, IMG.airport, IMG.university, IMG.students][i % 6];
          return `
            <a href="${root}blog/${b.slug}" class="group bg-white rounded-2xl border border-slate-200 hover:shadow-xl transition overflow-hidden block">
              <div class="h-48 overflow-hidden relative">
                <img src="${image}" alt="${b.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div class="p-6">
                <div class="text-xs text-green-700 font-semibold">${b.category} · ${b.date}</div>
                <h3 class="text-lg font-bold text-slate-900 mt-2 group-hover:text-blue-700 transition">${b.title}</h3>
                <p class="text-sm text-slate-600 mt-2">${b.excerpt}</p>
                <div class="mt-4 text-blue-700 font-semibold text-sm">Read Article →</div>
              </div>
            </a>
          `;
        }).join("")}
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
          const image = universityImageMap[u.slug] ? root + universityImageMap[u.slug] : countryCardImages[i % countryCardImages.length];
          return `
            <div class="group bg-white rounded-3xl border border-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all overflow-hidden font-sans">
              <div class="relative h-56 overflow-hidden">
                <img src="${image}" alt="${u.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                <div class="absolute top-4 left-4 bg-white/95 text-slate-900 px-3 py-1.5 rounded-full text-xs font-bold">${u.flag} ${u.country}</div>
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
            ${mbbsCountries.map((c, i) => getCountryCardHTML(c, root, i)).join("")}
          </div>

          <div class="p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-green-50 border border-slate-200">
            <h2 class="text-2xl font-bold text-slate-900">Key Benefits of Pursuing MBBS Abroad</h2>
            <ul class="grid md:grid-cols-2 gap-3 mt-4 text-slate-700">
              ${[
                "Total cost starts from ₹ 18 Lakhs only (entire course)",
                "NMC approved medical universities & MCI recognized",
                "Strict MBBS without donation policy — merit-based only",
                "Direct MBBS admission abroad on 12th PCB & NEET",
                "English medium education — no language barriers",
                "Indian food, mess, and separate hostels available",
                "World-class infrastructure, modern clinics & research facilities",
                "Global degree accepted across India, US, UK, and Europe"
              ].map(p => `
                <li class="flex items-start gap-2"><i data-lucide="check-circle" class="w-5 h-5 text-green-600 shrink-0 mt-0.5"></i> ${p}</li>
              `).join("")}
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
        <aside class="sticky-sidebar">${getContactFormHTML()}</aside>
      </div>
    </section>
  `;
  return wrapPage(content, "MBBS Abroad Guide", "NMC approved medical degrees in Georgia, Central Asia, Russia and the Caribbean.", "mbbs-abroad.html", "mbbs-abroad");
}

// 8. MBBS IN EUROPE OVERVIEW (mbbs-in-europe.html)
function buildMBBSEurope(root) {
  const content = `
    ${getPageHeroHTML("MBBS in Europe", "Study MBBS in Europe - EU-recognized degrees, public universities with zero tuition in Italy, and high FMGE/NExT passing rates in Czech, Romania & Bulgaria.", [{ name: "Home", to: `${root}index` }, { name: "MBBS in Europe" }])}
    
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
              ${["Globally recognized EU degrees", "Zero or extremely low tuition in public universities", "Full English-medium medical curriculum", "Top-ranked schools like Ostrava University, Carol Davila, Warsaw", "Schengen zone travel benefits", "Outstanding FMGE / NExT screening pass rates"].map(p => `
                <li class="flex items-start gap-2"><i data-lucide="check-circle" class="w-5 h-5 text-green-600 shrink-0 mt-0.5"></i> ${p}</li>
              `).join("")}
            </ul>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            ${europeCountries.map((c, i) => getCountryCardHTML(c, root, i)).join("")}
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
        <aside class="sticky-sidebar">${getContactFormHTML()}</aside>
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
            <p class="text-slate-600 mt-3 leading-relaxed">We help students with Master's, MBA, BBA, Engineering, Data Science, Public Health, Hotel Management & Law programs across Dubai, Germany, Canada, USA, UK & Australia.</p>
            <ul class="grid md:grid-cols-2 gap-2 mt-5 text-slate-700">
              ${["Scholarships up to 100% tuition", "Admission in top 100 global universities", "SOP, LOR & profile building", "Loan assistance", "Post-study work visa guidance", "Pre-departure & accommodation support"].map(p => `
                <li class="flex items-start gap-2"><i data-lucide="check-circle" class="w-5 h-5 text-green-600 shrink-0 mt-0.5"></i> ${p}</li>
              `).join("")}
            </ul>
          </div>
          <div class="grid md:grid-cols-2 gap-6 font-sans">
            ${programs.map((p, i) => {
              const image = [IMG.dubai, IMG.classroom, IMG.campus, IMG.university][i % 4];
              return `
              <a href="${root}study-abroad/${p.slug}" class="group bg-white rounded-3xl border border-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all overflow-hidden block">
                <div class="h-48 overflow-hidden relative">
                  <img src="${image}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div class="absolute bottom-4 left-4 bg-white/90 backdrop-blur text-blue-900 text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    ${p.duration}
                  </div>
                </div>
                <div class="p-6">
                  <h3 class="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition">${p.title}</h3>
                  <p class="text-sm text-slate-600 mt-2 leading-relaxed">${p.tagline}</p>
                  <div class="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-sm">
                    <div><span class="text-slate-500">Fees:</span> <b class="text-slate-900">${p.fees}</b></div>
                    <div class="text-blue-700 font-bold inline-flex items-center gap-1 group-hover:gap-2 transition-all">Explore <i data-lucide="arrow-right" class="w-4 h-4"></i></div>
                  </div>
                </div>
              </a>
              `;
            }).join("")}
          </div>
        </div>
        <aside class="sticky-sidebar">${getContactFormHTML()}</aside>
      </div>
    </section>
  `;
  return wrapPage(content, "Study Abroad Programs", "Expand your career horizons with postgraduate, master's and MBA courses in UAE, Germany, USA and Canada.", "study-abroad.html", "study-abroad");
}

// 10. DYNAMIC COUNTRY PAGE (mbbs-abroad/[country].html and mbbs-in-europe/[country].html)
// IMAT Complete Guide content (shown only on the Italy page)
const imatGuideHTML = `
            <div class="p-6 md:p-8 rounded-2xl bg-white border border-slate-200">
              <span class="inline-block bg-yellow-100 text-yellow-800 text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full">IMAT Exam Guide</span>
              <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900 mt-4">The Complete IMAT Guide: MBBS in Italy</h2>
              <p class="text-slate-700 mt-4 leading-relaxed">The <b>International Medical Admissions Test (IMAT)</b> is the single, centralized entrance exam conducted by the Italian Ministry of Universities and Research (MUR) for admission into English-taught Medicine and Surgery (MBBS) and Dentistry programs at public Italian universities.</p>
              <p class="text-slate-700 mt-3 leading-relaxed">An end-to-end breakdown covers everything from the exam format to the reality of the selection process, your chances, and fallback paths.</p>

              <!-- 1. Overview -->
              <h3 class="text-xl font-bold text-slate-900 mt-8 flex items-center gap-2"><span class="w-8 h-8 shrink-0 rounded-full bg-gradient-to-br from-blue-700 to-green-600 text-white text-sm font-bold flex items-center justify-center">1</span> The IMAT Exam Overview</h3>
              <p class="text-slate-700 mt-3 leading-relaxed">The exam is a <b>100-minute, pen-and-paper test</b> consisting of 60 multiple-choice questions (5 options each). The maximum possible score is 90 points.</p>

              <h4 class="font-bold text-slate-900 mt-6">Exam Structure &amp; Weightage</h4>
              <div class="overflow-x-auto mt-3">
                <table class="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr class="bg-blue-900 text-white font-semibold">
                      <th class="p-3 rounded-l-xl">Section</th>
                      <th class="p-3">Questions</th>
                      <th class="p-3">Key Topics</th>
                      <th class="p-3 rounded-r-xl">Approx. Weightage</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-100 text-slate-700">
                    <tr class="hover:bg-slate-50/50 transition"><td class="p-3 font-bold text-slate-900">Biology</td><td class="p-3">23</td><td class="p-3">Cell biology, genetics, human anatomy &amp; physiology, bioenergetics</td><td class="p-3 font-semibold text-blue-700">38.3%</td></tr>
                    <tr class="hover:bg-slate-50/50 transition"><td class="p-3 font-bold text-slate-900">Chemistry</td><td class="p-3">15</td><td class="p-3">Stoichiometry, atomic structure, periodic trends, organic chemistry basis</td><td class="p-3 font-semibold text-blue-700">25.0%</td></tr>
                    <tr class="hover:bg-slate-50/50 transition"><td class="p-3 font-bold text-slate-900">Physics &amp; Math</td><td class="p-3">13</td><td class="p-3">Mechanics, thermodynamics, algebra, functions, geometry, trigonometry</td><td class="p-3 font-semibold text-blue-700">21.7%</td></tr>
                    <tr class="hover:bg-slate-50/50 transition"><td class="p-3 font-bold text-slate-900">Logical Reasoning</td><td class="p-3">5</td><td class="p-3">Critical thinking, data interpretation, problem-solving</td><td class="p-3 font-semibold text-blue-700">8.3%</td></tr>
                    <tr class="hover:bg-slate-50/50 transition"><td class="p-3 font-bold text-slate-900">Reading Skills &amp; GK</td><td class="p-3">4</td><td class="p-3">Text comprehension, international current affairs, cultural history</td><td class="p-3 font-semibold text-blue-700">6.7%</td></tr>
                  </tbody>
                </table>
              </div>

              <h4 class="font-bold text-slate-900 mt-6">Scoring System</h4>
              <div class="grid sm:grid-cols-3 gap-3 mt-3">
                <div class="p-4 bg-green-50 rounded-xl text-center">
                  <div class="text-2xl font-extrabold text-green-700">+1.5</div>
                  <div class="text-sm text-slate-600 mt-1">Correct Answer</div>
                </div>
                <div class="p-4 bg-red-50 rounded-xl text-center">
                  <div class="text-2xl font-extrabold text-red-600">−0.4</div>
                  <div class="text-sm text-slate-600 mt-1">Incorrect Answer <br /><span class="text-xs">(negative marking makes guessing risky)</span></div>
                </div>
                <div class="p-4 bg-slate-50 rounded-xl text-center">
                  <div class="text-2xl font-extrabold text-slate-700">0</div>
                  <div class="text-sm text-slate-600 mt-1">Unanswered</div>
                </div>
              </div>

              <!-- 2. Selection Criteria -->
              <h3 class="text-xl font-bold text-slate-900 mt-10 flex items-center gap-2"><span class="w-8 h-8 shrink-0 rounded-full bg-gradient-to-br from-blue-700 to-green-600 text-white text-sm font-bold flex items-center justify-center">2</span> Selection Criteria &amp; Rankings</h3>
              <p class="text-slate-700 mt-3 leading-relaxed">Italy uses a highly strict regulatory split between <b>EU</b> and <b>Non-EU</b> applicants.</p>

              <h4 class="font-bold text-slate-900 mt-5">The Candidate Split</h4>
              <ul class="mt-3 space-y-2 text-slate-700 text-sm">
                <li class="flex items-start gap-2"><i data-lucide="check-circle" class="w-4 h-4 text-green-600 shrink-0 mt-0.5"></i><span><b>EU Candidates:</b> Includes EU citizens, Italian citizens, and non-EU citizens who legally hold a long-term residency permit in Italy.</span></li>
                <li class="flex items-start gap-2"><i data-lucide="check-circle" class="w-4 h-4 text-green-600 shrink-0 mt-0.5"></i><span><b>Non-EU Candidates:</b> Students applying from outside Europe (e.g., India, UK, USA). <b>Crucial Rule:</b> Non-EU candidates can apply to <b>only one</b> university choice.</span></li>
              </ul>

              <h4 class="font-bold text-slate-900 mt-5">Cut-Offs &amp; "Scrolling"</h4>
              <p class="text-slate-700 mt-2 text-sm leading-relaxed">Admission is purely merit-based, determined by your national ranking.</p>
              <ul class="mt-3 space-y-2 text-slate-700 text-sm">
                <li class="flex items-start gap-2"><i data-lucide="check-circle" class="w-4 h-4 text-green-600 shrink-0 mt-0.5"></i><span><b>EU Ranking:</b> Uses a system called "scrolling." EU applicants list multiple universities. If they don't get into their 1st choice, they can be "booked" for a lower choice and wait for weeks as higher-ranked students drop out, allowing the ranking list to "scroll" down.</span></li>
                <li class="flex items-start gap-2"><i data-lucide="check-circle" class="w-4 h-4 text-green-600 shrink-0 mt-0.5"></i><span><b>Non-EU Ranking:</b> Because you can only pick one university, you only compete against the non-EU students who picked that exact same school. There is a minimal system of scrolling, but if you miss your specific university's cut-off, you generally cannot switch to another university that has empty seats.</span></li>
              </ul>

              <!-- 3. Seats & Chances -->
              <h3 class="text-xl font-bold text-slate-900 mt-10 flex items-center gap-2"><span class="w-8 h-8 shrink-0 rounded-full bg-gradient-to-br from-blue-700 to-green-600 text-white text-sm font-bold flex items-center justify-center">3</span> Seats, Applications, and Real Chances</h3>
              <p class="text-slate-700 mt-3 leading-relaxed">The competition has drastically increased over the years. Data from the 2025 exam cycle highlights the competitive landscape:</p>

              <h4 class="font-bold text-slate-900 mt-5">The Numbers (2025 Data)</h4>
              <div class="grid sm:grid-cols-3 gap-3 mt-3">
                <div class="p-4 bg-slate-50 rounded-xl text-center">
                  <div class="text-2xl font-extrabold text-blue-700">~13,495</div>
                  <div class="text-sm text-slate-600 mt-1">Total Applicants</div>
                </div>
                <div class="p-4 bg-slate-50 rounded-xl text-center">
                  <div class="text-2xl font-extrabold text-blue-700">~1,754</div>
                  <div class="text-sm text-slate-600 mt-1">Total Available Seats</div>
                </div>
                <div class="p-4 bg-slate-50 rounded-xl text-center">
                  <div class="text-2xl font-extrabold text-blue-700">~13%</div>
                  <div class="text-sm text-slate-600 mt-1">Overall Success Rate</div>
                </div>
              </div>

              <h4 class="font-bold text-slate-900 mt-5">Seat Distribution Reality</h4>
              <p class="text-slate-700 mt-2 text-sm">The seats are divided specifically between quotas:</p>
              <ul class="mt-3 space-y-2 text-slate-700 text-sm">
                <li class="flex items-start gap-2"><i data-lucide="check-circle" class="w-4 h-4 text-green-600 shrink-0 mt-0.5"></i><span><b>EU Seats:</b> ~952 for Medicine, ~52 for Dentistry.</span></li>
                <li class="flex items-start gap-2"><i data-lucide="check-circle" class="w-4 h-4 text-green-600 shrink-0 mt-0.5"></i><span><b>Non-EU Seats:</b> ~530 for Medicine, ~8 for Dentistry.</span></li>
              </ul>

              <h4 class="font-bold text-slate-900 mt-5">What are your realistic chances?</h4>
              <p class="text-slate-700 mt-2 text-sm leading-relaxed">Your success heavily depends on your strategic choice of university and your ability to target safe scores.</p>
              <ul class="mt-3 space-y-2 text-slate-700 text-sm">
                <li class="flex items-start gap-2"><i data-lucide="check-circle" class="w-4 h-4 text-green-600 shrink-0 mt-0.5"></i><span><b>EU Safe Scores:</b> Historically hover around the <b>low 50s</b> because the scrolling mechanism allows students with lower scores to eventually secure a spot as choices shift.</span></li>
                <li class="flex items-start gap-2"><i data-lucide="check-circle" class="w-4 h-4 text-green-600 shrink-0 mt-0.5"></i><span><b>Non-EU Safe Scores:</b> Significantly more competitive. For top-tier universities like Milano-Bicocca or Bologna, cut-off scores routinely spike above <b>65+ points</b>. For mid-tier or southern universities (like Bari, Luigi Vanvitelli, or Messina), cut-offs can fall between <b>50 to 56 points</b>.</span></li>
              </ul>

              <!-- 4. Timeline -->
              <h3 class="text-xl font-bold text-slate-900 mt-10 flex items-center gap-2"><span class="w-8 h-8 shrink-0 rounded-full bg-gradient-to-br from-blue-700 to-green-600 text-white text-sm font-bold flex items-center justify-center">4</span> Timeline &amp; Process Flow</h3>
              <p class="text-slate-700 mt-3 leading-relaxed">The application process involves multiple mandatory steps before you even sit for the test.</p>
              <ol class="mt-4 space-y-3">
                <li class="flex items-start gap-3 bg-slate-50 p-4 rounded-xl">
                  <span class="w-8 h-8 shrink-0 rounded-full bg-gradient-to-br from-blue-700 to-green-600 text-white text-sm font-bold flex items-center justify-center">1</span>
                  <span class="text-slate-700 pt-1 text-sm"><b>Pre-Enrollment &amp; DV/CIMEA:</b> April – July. Non-EU students must apply for pre-enrollment via the Universitaly portal and request a Declaration of Value (DV) from the Italian Embassy or a CIMEA statement to prove high school eligibility.</span>
                </li>
                <li class="flex items-start gap-3 bg-slate-50 p-4 rounded-xl">
                  <span class="w-8 h-8 shrink-0 rounded-full bg-gradient-to-br from-blue-700 to-green-600 text-white text-sm font-bold flex items-center justify-center">2</span>
                  <span class="text-slate-700 pt-1 text-sm"><b>Official IMAT Registration:</b> Late August – Early September. Register on the Universitaly website, select your test center (e.g., New Delhi, London, Dubai, or Italian cities), pay the fee (~€130), and lock in your university choice.</span>
                </li>
                <li class="flex items-start gap-3 bg-slate-50 p-4 rounded-xl">
                  <span class="w-8 h-8 shrink-0 rounded-full bg-gradient-to-br from-blue-700 to-green-600 text-white text-sm font-bold flex items-center justify-center">3</span>
                  <span class="text-slate-700 pt-1 text-sm"><b>The Exam:</b> Mid-September. Take the 100-minute physical exam at 11:00 AM Italian time (adjusted locally for international test centers).</span>
                </li>
                <li class="flex items-start gap-3 bg-slate-50 p-4 rounded-xl">
                  <span class="w-8 h-8 shrink-0 rounded-full bg-gradient-to-br from-blue-700 to-green-600 text-white text-sm font-bold flex items-center justify-center">4</span>
                  <span class="text-slate-700 pt-1 text-sm"><b>Rankings &amp; Enrollment:</b> October. Anonymous scores drop first, followed by the definitive national merit ranking. Admitted students must rapidly submit their visa and university enrollment files.</span>
                </li>
              </ol>

              <!-- 5. Future Opportunities -->
              <h3 class="text-xl font-bold text-slate-900 mt-10 flex items-center gap-2"><span class="w-8 h-8 shrink-0 rounded-full bg-gradient-to-br from-blue-700 to-green-600 text-white text-sm font-bold flex items-center justify-center">5</span> Future Opportunities</h3>
              <p class="text-slate-700 mt-3 leading-relaxed">Graduating from an Italian public medical school offers massive advantages:</p>
              <ul class="mt-3 space-y-2 text-slate-700 text-sm">
                <li class="flex items-start gap-2"><i data-lucide="check-circle" class="w-4 h-4 text-green-600 shrink-0 mt-0.5"></i><span><b>Globally Recognized Degree:</b> You earn an <b>MD (Doctor of Medicine)</b> degree. It is fully compliant with EU directives, meaning you can practice anywhere in the European Union without rewriting foundational licensing exams.</span></li>
                <li class="flex items-start gap-2"><i data-lucide="check-circle" class="w-4 h-4 text-green-600 shrink-0 mt-0.5"></i><span><b>Incredibly Low Tuition:</b> Public university fees are calculated based on your family income (ISEE-Parificato). Fees typically range from <b>€156 to €4,000 per year</b>, and many international students qualify for regional scholarships that provide free tuition, free housing, and a stipend.</span></li>
                <li class="flex items-start gap-2"><i data-lucide="check-circle" class="w-4 h-4 text-green-600 shrink-0 mt-0.5"></i><span><b>International Mobility:</b> Because the program is in English, students are well-prepared to clear the <b>USMLE</b> (USA), <b>PLAB/UKMLA</b> (UK), or return to pass local exams like <b>NEXT</b> (India).</span></li>
              </ul>

              <!-- 6. Alternatives -->
              <h3 class="text-xl font-bold text-slate-900 mt-10 flex items-center gap-2"><span class="w-8 h-8 shrink-0 rounded-full bg-gradient-to-br from-blue-700 to-green-600 text-white text-sm font-bold flex items-center justify-center">6</span> Alternative Options</h3>
              <p class="text-slate-700 mt-3 leading-relaxed">If the IMAT doesn't pan out or the single-university choice restriction for non-EU students feels too risky, consider these strong alternatives:</p>
              <div class="mt-4 space-y-4">
                <div class="p-5 bg-slate-50 rounded-xl">
                  <h4 class="font-bold text-slate-900">1. Private Italian Medical Schools</h4>
                  <p class="text-slate-700 mt-2 text-sm leading-relaxed">Universities like <b>Humanitas, San Raffaele, UniCamillus, and Cattolica</b> offer excellent English MD programs.</p>
                  <p class="text-slate-600 mt-2 text-sm"><i>The Catch:</i> They do not use the IMAT; they host their own separate entrance exams (often online) earlier in the spring.</p>
                  <p class="text-slate-600 mt-1 text-sm"><i>Cost:</i> Tuition is higher, ranging from <b>€10,000 to €23,000 per year</b>.</p>
                </div>
                <div class="p-5 bg-slate-50 rounded-xl">
                  <h4 class="font-bold text-slate-900">2. Eastern European English Programs</h4>
                  <p class="text-slate-700 mt-2 text-sm leading-relaxed">Countries like <b>Poland, Hungary, the Czech Republic, and Romania</b> run highly established 6-year English medical programs.</p>
                  <p class="text-slate-600 mt-2 text-sm"><i>The Catch:</i> Entrance exams are university-specific and less standardized than the IMAT. Tuition ranges from <b>€10,000 to €18,000 per year</b>, with a slightly higher cost of living than subsidized Italian student life.</p>
                </div>
                <div class="p-5 bg-slate-50 rounded-xl">
                  <h4 class="font-bold text-slate-900">3. Cyprus and Malta</h4>
                  <p class="text-slate-700 mt-2 text-sm leading-relaxed">Both countries offer EU-standard medical degrees taught entirely in English. Malta features programs like Queen Mary University of London (Malta campus), combining a UK curriculum with an EU location.</p>
                  <p class="text-slate-600 mt-2 text-sm"><i>The Catch:</i> Tuition is premium, frequently matching or exceeding <b>€20,000+ annually</b>.</p>
                </div>
              </div>
            </div>
`;

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

            <!-- DYNAMIC INTERACTIVE COLLEGE FEES TABLE -->
            ${(() => {
              const countryKey = Object.keys(collegesDatabase).find(k => k.toLowerCase() === country.name.toLowerCase());
              const colleges = collegesDatabase[countryKey || ""] || [];
              if (colleges.length === 0) return "";
              
              return `
              <div class="p-6 rounded-2xl bg-white border border-slate-200 mt-8 shadow-sm font-sans">
                <div class="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div>
                    <h2 class="text-2xl font-bold text-slate-900">MBBS Fee Structure & College List (2025-26)</h2>
                    <p class="text-slate-500 text-sm mt-1">All fees are annual unless marked with * (total course fees). Compare tuition & hostels across all medical schools.</p>
                  </div>
                  <div class="relative w-full max-w-xs">
                    <input type="text" class="fee-table-search w-full px-4 py-2.5 pl-10 rounded-lg border border-slate-200 text-sm focus:border-blue-600 focus:outline-none" placeholder="Search college name..." data-table="fee-table-${country.slug}">
                    <div class="absolute left-3 top-3.5 text-slate-400"><i data-lucide="search" class="w-4 h-4"></i></div>
                  </div>
                </div>
                <div class="overflow-x-auto">
                  <table id="fee-table-${country.slug}" class="w-full text-left border-collapse text-sm">
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
                      ${colleges.map(c => `
                        <tr class="hover:bg-slate-50/50 transition">
                          <td class="p-4 font-semibold">${c.sNo}</td>
                          <td class="p-4 font-bold text-slate-900">${c.name}</td>
                          <td class="p-4 font-semibold text-blue-700">${c.tuitionUSD}</td>
                          <td class="p-4 font-bold text-slate-900">${c.tuitionINR}</td>
                          <td class="p-4 text-slate-500">${c.hostelUSD}</td>
                          <td class="p-4 text-slate-600">${c.hostelINR}</td>
                          <td class="p-4">${c.worldRank}</td>
                          <td class="p-4">${c.countryRank}</td>
                        </tr>
                      `).join("")}
                    </tbody>
                  </table>
                </div>
              </div>
              `;
            })()}

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

            ${country.slug === "italy" ? imatGuideHTML : ""}

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
          <aside class="sticky-sidebar">${getContactFormHTML()}</aside>
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
        <aside class="sticky-sidebar">${getContactFormHTML()}</aside>
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
              <p class="text-slate-600 mt-2">${u.country} · ${u.qs}</p>
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
          <aside class="sticky-sidebar">${getContactFormHTML()}</aside>
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
fs.writeFileSync("pricing.html", buildPricing("./"));
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
  // Also write to mbbs-abroad folder to prevent 404 errors for students typing /mbbs-abroad/italy etc.
  fs.writeFileSync(path.join("mbbs-abroad", `${c.slug}.html`), buildCountryPage(c, "europe", "../"));
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
      const isHidden = mobileMenu.classList.contains("hidden");
      if (isHidden) {
        mobileMenu.classList.remove("hidden");
        menuBtn.innerHTML = '<i data-lucide="x" class="w-6 h-6"></i>';
      } else {
        mobileMenu.classList.add("hidden");
        menuBtn.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
      }
      if (typeof lucide !== "undefined") {
        lucide.createIcons();
      }
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

  // 4. Contact / Counseling Form Submission via Email (FormSubmit)
  const form = document.getElementById("counseling-form");
  const doneMsg = document.getElementById("form-done-msg");
  const enquiryEmail = "adnanansari7042@gmail.com";
  
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      
      const name = document.getElementById("form-name").value.trim();
      const phone = document.getElementById("form-phone").value.trim();
      const email = document.getElementById("form-email").value.trim();
      const country = document.getElementById("form-country").value;
      const message = document.getElementById("form-message").value.trim();
      
      if (!name || !phone) {
        alert("Please provide your name and phone number.");
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn ? submitBtn.innerHTML : "";
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = "Submitting...";
      }

      const formData = new FormData(form);
      formData.append("Page URL", window.location.href);
      
      try {
        const response = await fetch("https://formsubmit.co/ajax/" + enquiryEmail, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Email submission failed");
        }
        
        if (doneMsg) {
          doneMsg.textContent = "Thank you! Your enquiry has been submitted successfully.";
          doneMsg.classList.remove("hidden", "text-red-600");
          doneMsg.classList.add("text-green-600");
          setTimeout(() => doneMsg.classList.add("hidden"), 6000);
        }
        
        form.reset();
      } catch (error) {
        const emailSubject = encodeURIComponent("New Counseling Enquiry - TrueMark Edu");
        const emailBody = encodeURIComponent("Name: " + name + "\\nPhone / WhatsApp: " + phone + "\\nEmail: " + email + "\\nInterest: " + country + "\\nMessage: " + message + "\\nPage URL: " + window.location.href);
        window.location.href = "mailto:" + enquiryEmail + "?subject=" + emailSubject + "&body=" + emailBody;

        if (doneMsg) {
          doneMsg.textContent = "Please send the pre-filled email from your email app to complete submission.";
          doneMsg.classList.remove("hidden", "text-green-600");
          doneMsg.classList.add("text-red-600");
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        }
      }
    });
  }


  // 6. Real-time Fee Table Filtering
  const searchInputs = document.querySelectorAll(".fee-table-search");
  searchInputs.forEach(input => {
    input.addEventListener("input", () => {
      const filter = input.value.toLowerCase();
      const tableId = input.getAttribute("data-table");
      const rows = document.querySelectorAll('#' + tableId + ' tbody tr');
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

  // 5. Mobile Menu Accordion Toggle
  const accordionBtns = document.querySelectorAll(".mobile-accordion-btn");
  accordionBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const targetEl = document.getElementById(targetId);
      const icon = btn.querySelector("i[data-lucide='chevron-down']");
      
      if (targetEl) {
        const isHidden = targetEl.classList.contains("hidden");
        
        // Hide all other accordions first (for a clean single-open accordion feel)
        document.querySelectorAll(".mobile-accordion-btn").forEach(otherBtn => {
          if (otherBtn !== btn) {
            const otherTargetId = otherBtn.getAttribute("data-target");
            const otherTargetEl = document.getElementById(otherTargetId);
            if (otherTargetEl) otherTargetEl.classList.add("hidden");
            const otherIcon = otherBtn.querySelector("i[data-lucide='chevron-down']");
            if (otherIcon) otherIcon.classList.remove("rotate-180");
          }
        });

        // Toggle current accordion
        if (isHidden) {
          targetEl.classList.remove("hidden");
          if (icon) icon.classList.add("rotate-180");
        } else {
          targetEl.classList.add("hidden");
          if (icon) icon.classList.remove("rotate-180");
        }
      }
    });
  });

  // 7. Desktop Click-to-Open Dropdown Menus
  const desktopBtns = document.querySelectorAll(".desktop-dropdown-btn");
  desktopBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent immediate closing due to document click listener
      
      const targetId = btn.getAttribute("data-target");
      const targetEl = document.getElementById(targetId);
      const icon = btn.querySelector("i[data-lucide='chevron-down']");
      
      if (targetEl) {
        const isHidden = targetEl.classList.contains("hidden");
        
        // Hide all other desktop dropdowns first
        document.querySelectorAll(".desktop-dropdown").forEach(otherDropdown => {
          if (otherDropdown !== targetEl) {
            otherDropdown.classList.add("hidden");
          }
        });
        document.querySelectorAll(".desktop-dropdown-btn i[data-lucide='chevron-down']").forEach(otherIcon => {
          if (otherIcon !== icon) {
            otherIcon.classList.remove("rotate-180");
          }
        });

        // Toggle current dropdown
        if (isHidden) {
          targetEl.classList.remove("hidden");
          if (icon) icon.classList.add("rotate-180");
        } else {
          targetEl.classList.add("hidden");
          if (icon) icon.classList.remove("rotate-180");
        }
      }
    });
  });

  // Close all dropdowns when clicking anywhere outside of them
  document.addEventListener("click", () => {
    document.querySelectorAll(".desktop-dropdown").forEach(dropdown => {
      dropdown.classList.add("hidden");
    });
    document.querySelectorAll(".desktop-dropdown-btn i[data-lucide='chevron-down']").forEach(icon => {
      icon.classList.remove("rotate-180");
    });
  });
});
`;

fs.writeFileSync("script.js", scriptContent);
console.log("script.js generated successfully!");
