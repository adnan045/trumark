const fs = require("fs");
const path = require("path");

// --- COLLEGES DETAILED PRICING DATABASE ---
const collegesDatabase = {
  "Georgia": [
    {
      sNo: "1",
      name: "International Black Sea University",
      tuitionUSD: "$4,800 – $4,900",
      hostelUSD: "$1,800 – $2,500",
      foodUSD: "$1,200 – $1,800",
      totalTuitionUSD: "$28,800 – $29,400",
      grandTotalUSD: "$46,800 – $55,200",
      totalINR: "₹44.22 Lakh – ₹52.16 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "2",
      name: "Georgian National University SEU",
      tuitionUSD: "$5,900 – $6,300",
      hostelUSD: "$2,000 – $3,000",
      foodUSD: "$1,200 – $1,800",
      totalTuitionUSD: "$35,400 – $37,800",
      grandTotalUSD: "$54,600 – $66,600",
      totalINR: "₹51.59 Lakh – ₹62.93 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "3",
      name: "Grigol Robakidze University",
      tuitionUSD: "$5,500 – $5,620",
      hostelUSD: "$1,800 – $2,400",
      foodUSD: "$1,200 – $1,800",
      totalTuitionUSD: "$33,000 – $33,720",
      grandTotalUSD: "$51,000 – $693",
      totalINR: "₹48.19 Lakh – ₹55.67 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "4",
      name: "Avicenna Batumi Medical University",
      tuitionUSD: "$4,000 – $4,900",
      hostelUSD: "$1,500 – $2,200",
      foodUSD: "$1,200 – $1,800",
      totalTuitionUSD: "$24,000 – $29,400",
      grandTotalUSD: "$40,200 – $53,400",
      totalINR: "₹37.98 Lakh – ₹50.46 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "5",
      name: "Alte University",
      tuitionUSD: "$5,000 – $5,500",
      hostelUSD: "$1,800 – $2,500",
      foodUSD: "$1,200 – $1,800",
      totalTuitionUSD: "$30,000 – $33,000",
      grandTotalUSD: "$48,000 – $58,800",
      totalINR: "₹45.36 Lakh – ₹55.56 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "6",
      name: "Georgian American University (GAU)",
      tuitionUSD: "$6,000 – $6,500",
      hostelUSD: "$2,000 – $3,000",
      foodUSD: "$1,200 – $1,800",
      totalTuitionUSD: "$36,000 – $39,000",
      grandTotalUSD: "$55,200 – $67,800",
      totalINR: "₹52.16 Lakh – ₹64.07 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "7",
      name: "Caucasus International University Georgia",
      tuitionUSD: "$6,000 – $6,500",
      hostelUSD: "$1,800 – $2,500",
      foodUSD: "$1,200 – $1,800",
      totalTuitionUSD: "$36,000 – $39,000",
      grandTotalUSD: "$54,000 – $64,800",
      totalINR: "₹51.03 Lakh – ₹61.23 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "8",
      name: "East European University Georgia",
      tuitionUSD: "$5,300 – $5,500",
      hostelUSD: "$1,800 – $2,400",
      foodUSD: "$1,200 – $1,800",
      totalTuitionUSD: "$31,800 – $33,000",
      grandTotalUSD: "$49,800 – $58,200",
      totalINR: "₹47.06 Lakh – ₹54.99 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "9",
      name: "New Vision University Georgia",
      tuitionUSD: "$7,000 – $8,000",
      hostelUSD: "$1,500 – $2,200",
      foodUSD: "$1,200 – $1,800",
      totalTuitionUSD: "$42,000 – $48,000",
      grandTotalUSD: "$58,200 – $72,000",
      totalINR: "₹54.99 Lakh – ₹68.04 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "10",
      name: "David Tvildiani Medical University",
      tuitionUSD: "$6,000 – $8,000",
      hostelUSD: "$2,000 – $3,000",
      foodUSD: "$1,200 – $1,800",
      totalTuitionUSD: "$36,000 – $48,000",
      grandTotalUSD: "$55,200 – $76,800",
      totalINR: "₹52.16 Lakh – ₹72.57 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "11",
      name: "University of Georgia",
      tuitionUSD: "$6,000 – $6,500",
      hostelUSD: "$2,000 – $3,000",
      foodUSD: "$1,200 – $1,800",
      totalTuitionUSD: "$36,000 – $39,000",
      grandTotalUSD: "$55,200 – $67,800",
      totalINR: "₹52.16 Lakh – ₹64.07 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "12",
      name: "Geomedi State University",
      tuitionUSD: "$5,500 – $6,000",
      hostelUSD: "$1,800 – $2,400",
      foodUSD: "$1,200 – $1,800",
      totalTuitionUSD: "$33,000 – $36,000",
      grandTotalUSD: "$51,000 – $61,200",
      totalINR: "₹48.19 Lakh – ₹57.83 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "13",
      name: "European University Georgia",
      tuitionUSD: "$5,900 – $6,000",
      hostelUSD: "$1,800 – $2,500",
      foodUSD: "$1,200 – $1,800",
      totalTuitionUSD: "$35,400 – $36,000",
      grandTotalUSD: "$53,400 – $61,800",
      totalINR: "₹50.46 Lakh – ₹58.40 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "14",
      name: "BAU International",
      tuitionUSD: "$4,800 – $5,500",
      hostelUSD: "$1,500 – $2,200",
      foodUSD: "$1,200 – $1,800",
      totalTuitionUSD: "$28,800 – $33,000",
      grandTotalUSD: "$45,000 – $57,000",
      totalINR: "₹42.52 Lakh – ₹53.86 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "15",
      name: "East West University Georgia",
      tuitionUSD: "$3,900 – $5,000",
      hostelUSD: "$1,500 – $2,200",
      foodUSD: "$1,200 – $1,800",
      totalTuitionUSD: "$23,400 – $30,000",
      grandTotalUSD: "$39,600 – $54,000",
      totalINR: "₹37.42 Lakh – ₹51.03 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
  ],
  "Uzbekistan": [
    {
      sNo: "1",
      name: "Tashkent Medical Academy",
      tuitionUSD: "$3,500 – $4,500",
      hostelUSD: "$600 – $1,000",
      foodUSD: "$1,000 – $1,200",
      totalTuitionUSD: "$21,000 – $27,000",
      grandTotalUSD: "$30,600 – $40,200",
      totalINR: "₹28.91 Lakh – ₹37.98 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "2",
      name: "Fergana State University Medical Centre",
      tuitionUSD: "$3,200 – $3,600",
      hostelUSD: "$500 – $700",
      foodUSD: "$1,000 – $1,200",
      totalTuitionUSD: "$19,200 – $21,600",
      grandTotalUSD: "$28,200 – $33,000",
      totalINR: "₹26.64 Lakh – ₹31.18 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "3",
      name: "Samarkand State Medical University",
      tuitionUSD: "$3,800 – $4,200",
      hostelUSD: "$500 – $800",
      foodUSD: "$1,100 – $1,300",
      totalTuitionUSD: "$22,800 – $25,200",
      grandTotalUSD: "$32,400 – $37,800",
      totalINR: "₹30.61 Lakh – ₹35.72 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "4",
      name: "Bukhara State University Uzbekistan",
      tuitionUSD: "$3,200 – $3,600",
      hostelUSD: "$600 – $800",
      foodUSD: "$1,000 – $1,200",
      totalTuitionUSD: "$19,200 – $21,600",
      grandTotalUSD: "$28,800 – $33,600",
      totalINR: "₹27.21 Lakh – ₹31.75 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "5",
      name: "Tashkent State Dental Institute",
      tuitionUSD: "$3,600 – $4,200",
      hostelUSD: "$600 – $1,000",
      foodUSD: "$1,100 – $1,300",
      totalTuitionUSD: "$21,600 – $25,200",
      grandTotalUSD: "$31,800 – $39,000",
      totalINR: "₹30.05 Lakh – ₹36.85 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "6",
      name: "Tashkent Medical Academy (Chirchik Branch)",
      tuitionUSD: "$3,300 – $3,800",
      hostelUSD: "$500 – $800",
      foodUSD: "$1,000 – $1,200",
      totalTuitionUSD: "$19,800 – $22,800",
      grandTotalUSD: "$28,800 – $34,800",
      totalINR: "₹27.21 Lakh – ₹32.88 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "7",
      name: "Tashkent Urgench Branch",
      tuitionUSD: "$3,300 – $3,800",
      hostelUSD: "$500 – $700",
      foodUSD: "$1,000 – $1,200",
      totalTuitionUSD: "$19,800 – $22,800",
      grandTotalUSD: "$28,800 – $34,200",
      totalINR: "₹27.21 Lakh – ₹32.31 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "8",
      name: "Andijan Medical Institute",
      tuitionUSD: "$3,500 – $3,850",
      hostelUSD: "$600 – $700",
      foodUSD: "$1,000 – $1,200",
      totalTuitionUSD: "$21,000 – $23,100",
      grandTotalUSD: "$30,600 – $34,500",
      totalINR: "₹28.91 Lakh – ₹32.60 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "9",
      name: "Qarshi State Medical University",
      tuitionUSD: "$3,200 – $3,500",
      hostelUSD: "$500 – $700",
      foodUSD: "$1,000 – $1,200",
      totalTuitionUSD: "$19,200 – $21,000",
      grandTotalUSD: "$28,200 – $32,400",
      totalINR: "₹26.64 Lakh – ₹30.61 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
  ],
  "Kazakhstan": [
    {
      sNo: "1",
      name: "South Kazakhstan Medical Academy",
      tuitionUSD: "$4,100 – $4,400",
      hostelUSD: "$600 – $800",
      foodUSD: "$1,000 – $1,200",
      totalTuitionUSD: "$24,600 – $26,400",
      grandTotalUSD: "$34,200 – $38,400",
      totalINR: "₹32.32 Lakh – ₹36.29 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "2",
      name: "Asfendiyarov Kazakh National Medical University",
      tuitionUSD: "$5,500 – $5,800",
      hostelUSD: "$800 – $1,200",
      foodUSD: "$1,200 – $1,500",
      totalTuitionUSD: "$33,000 – $34,800",
      grandTotalUSD: "$45,000 – $51,000",
      totalINR: "₹42.52 Lakh – ₹48.20 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "3",
      name: "Kazakh National Medical University",
      tuitionUSD: "$5,500 – $5,800",
      hostelUSD: "$800 – $1,200",
      foodUSD: "$1,200 – $1,500",
      totalTuitionUSD: "$33,000 – $34,800",
      grandTotalUSD: "$45,000 – $51,000",
      totalINR: "₹42.52 Lakh – ₹48.20 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "4",
      name: "Karaganda State Medical University Kazakhstan",
      tuitionUSD: "$3,800 – $4,200",
      hostelUSD: "$600 – $800",
      foodUSD: "$1,100 – $1,300",
      totalTuitionUSD: "$22,800 – $25,200",
      grandTotalUSD: "$33,000 – $37,800",
      totalINR: "₹31.18 Lakh – ₹35.72 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "5",
      name: "Astana Medical University Kazakhstan",
      tuitionUSD: "$5,200 – $5,500",
      hostelUSD: "$700 – $1,000",
      foodUSD: "$1,200 – $1,500",
      totalTuitionUSD: "$31,200 – $33,000",
      grandTotalUSD: "$42,600 – $48,000",
      totalINR: "₹40.26 Lakh – ₹45.36 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "6",
      name: "Semey State Medical University",
      tuitionUSD: "$3,400 – $4,100",
      hostelUSD: "$800 – $1,000",
      foodUSD: "$1,000 – $1,200",
      totalTuitionUSD: "$20,400 – $24,600",
      grandTotalUSD: "$31,200 – $37,800",
      totalINR: "₹29.48 Lakh – ₹35.72 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "7",
      name: "Al Farabi Kazakh National University Kazakhstan",
      tuitionUSD: "$4,400 – $4,900",
      hostelUSD: "$1,000 – $1,500",
      foodUSD: "$1,200 – $1,500",
      totalTuitionUSD: "$26,400 – $29,400",
      grandTotalUSD: "$39,600 – $47,400",
      totalINR: "₹37.42 Lakh – ₹44.79 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "8",
      name: "Kazakh Medical University of Continuing Education",
      tuitionUSD: "$3,800 – $4,200",
      hostelUSD: "$700 – $900",
      foodUSD: "$1,200 – $1,400",
      totalTuitionUSD: "$22,800 – $25,200",
      grandTotalUSD: "$34,200 – $39,000",
      totalINR: "₹32.32 Lakh – ₹36.85 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "9",
      name: "Kokshetau State University Kazakhstan",
      tuitionUSD: "$3,500 – $3,900",
      hostelUSD: "$600 – $800",
      foodUSD: "$1,000 – $1,200",
      totalTuitionUSD: "$21,000 – $23,400",
      grandTotalUSD: "$30,600 – $35,400",
      totalINR: "₹28.92 Lakh – ₹33.45 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "10",
      name: "West Kazakhstan State Medical University",
      tuitionUSD: "$3,600 – $4,000",
      hostelUSD: "$300 – $600",
      foodUSD: "$1,000 – $1,200",
      totalTuitionUSD: "$21,600 – $24,000",
      grandTotalUSD: "$29,400 – $34,800",
      totalINR: "₹27.78 Lakh – ₹32.89 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "11",
      name: "International Medical School",
      tuitionUSD: "$4,200 – $4,500",
      hostelUSD: "$700 – $900",
      foodUSD: "$1,100 – $1,300",
      totalTuitionUSD: "$25,200 – $27,000",
      grandTotalUSD: "$36,000 – $40,200",
      totalINR: "₹34.02 Lakh – ₹37.98 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "12",
      name: "Kazakh Russian Medical State University",
      tuitionUSD: "$3,800 – $4,200",
      hostelUSD: "$700 – $900",
      foodUSD: "$1,200 – $1,400",
      totalTuitionUSD: "$22,800 – $25,200",
      grandTotalUSD: "$34,200 – $39,000",
      totalINR: "₹32.32 Lakh – ₹36.85 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "13",
      name: "Caspian University",
      tuitionUSD: "$4,500 – $5,000",
      hostelUSD: "$700 – $1,000",
      foodUSD: "$1,200 – $1,400",
      totalTuitionUSD: "$27,000 – $30,000",
      grandTotalUSD: "$38,400 – $44,400",
      totalINR: "₹36.29 Lakh – ₹41.96 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
  ],
  "Russia": [
    {
      sNo: "1",
      name: "Siberian State Medical University",
      tuitionUSD: "$4,200 – $4,800",
      hostelUSD: "$400 – $700",
      foodUSD: "$1,000 – $1,500",
      totalTuitionUSD: "$25,000 – $29,000",
      grandTotalUSD: "$33,400 – $42,200",
      totalINR: "₹31.56 Lakh – ₹39.88 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "2",
      name: "Kemerovo State Medical University",
      tuitionUSD: "$3,000 – $3,600",
      hostelUSD: "$300 – $500",
      foodUSD: "$1,000 – $1,500",
      totalTuitionUSD: "$18,000 – $22,000",
      grandTotalUSD: "$25,800 – $34,000",
      totalINR: "₹24.38 Lakh – ₹32.13 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "3",
      name: "Voronezh State Medical University",
      tuitionUSD: "$3,300 – $4,000",
      hostelUSD: "$350 – $600",
      foodUSD: "$1,000 – $1,500",
      totalTuitionUSD: "$20,000 – $24,000",
      grandTotalUSD: "$28,100 – $36,600",
      totalINR: "₹26.55 Lakh – ₹34.59 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "4",
      name: "Volgograd State Medical University",
      tuitionUSD: "$4,300 – $5,000",
      hostelUSD: "$500 – $950",
      foodUSD: "$1,000 – $1,500",
      totalTuitionUSD: "$26,000 – $30,000",
      grandTotalUSD: "$35,000 – $44,700",
      totalINR: "₹33.07 Lakh – ₹42.24 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "5",
      name: "Bashkir State Medical University",
      tuitionUSD: "$4,000 – $4,600",
      hostelUSD: "$200 – $400",
      foodUSD: "$1,000 – $1,500",
      totalTuitionUSD: "$24,000 – $28,000",
      grandTotalUSD: "$31,200 – $39,400",
      totalINR: "₹29.48 Lakh – ₹37.23 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "6",
      name: "North Caucasian State Medical Academy",
      tuitionUSD: "$2,800 – $3,500",
      hostelUSD: "$250 – $420",
      foodUSD: "$1,000 – $1,500",
      totalTuitionUSD: "$17,000 – $21,000",
      grandTotalUSD: "$24,500 – $32,520",
      totalINR: "₹23.15 Lakh – ₹30.73 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "7",
      name: "Crimea Federal University",
      tuitionUSD: "$4,000 – $4,600",
      hostelUSD: "$180 – $800",
      foodUSD: "$1,000 – $1,500",
      totalTuitionUSD: "$24,000 – $28,000",
      grandTotalUSD: "$31,080 – $41,800",
      totalINR: "₹29.37 Lakh – ₹39.50 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "8",
      name: "First Moscow State Medical University",
      tuitionUSD: "$10,000 – $11,300",
      hostelUSD: "$3,000 – $3,800",
      foodUSD: "$1,500 – $2,000",
      totalTuitionUSD: "$60,000 – $68,000",
      grandTotalUSD: "$87,000 – $102,800",
      totalINR: "₹82.21 Lakh – ₹97.15 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "9",
      name: "Pirogov Russian National Research University",
      tuitionUSD: "$8,300 – $9,600",
      hostelUSD: "$2,000 – $2,500",
      foodUSD: "$1,500 – $2,000",
      totalTuitionUSD: "$50,000 – $58,000",
      grandTotalUSD: "$71,000 – $85,000",
      totalINR: "₹67.09 Lakh – ₹80.32 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "10",
      name: "Chechen State University",
      tuitionUSD: "$2,600 – $3,300",
      hostelUSD: "$200 – $400",
      foodUSD: "$1,000 – $1,500",
      totalTuitionUSD: "$16,000 – $20,000",
      grandTotalUSD: "$23,200 – $31,400",
      totalINR: "₹21.92 Lakh – ₹29.67 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "11",
      name: "Rostov State Medical University",
      tuitionUSD: "$4,100 – $4,800",
      hostelUSD: "$400 – $750",
      foodUSD: "$1,000 – $1,500",
      totalTuitionUSD: "$25,000 – $29,000",
      grandTotalUSD: "$33,400 – $42,500",
      totalINR: "₹31.56 Lakh – ₹40.16 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "12",
      name: "Tver State Medical University",
      tuitionUSD: "$4,000 – $4,600",
      hostelUSD: "$750 – $920",
      foodUSD: "$1,000 – $1,500",
      totalTuitionUSD: "$24,000 – $28,000",
      grandTotalUSD: "$34,500 – $42,520",
      totalINR: "₹32.60 Lakh – ₹40.18 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "13",
      name: "Dagestan State Medical University",
      tuitionUSD: "$2,800 – $3,500",
      hostelUSD: "$250 – $500",
      foodUSD: "$1,000 – $1,500",
      totalTuitionUSD: "$17,000 – $21,000",
      grandTotalUSD: "$24,500 – $33,000",
      totalINR: "₹23.15 Lakh – ₹31.18 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "14",
      name: "Kabardino Balkarian State University",
      tuitionUSD: "$3,000 – $3,600",
      hostelUSD: "$300 – $530",
      foodUSD: "$1,000 – $1,500",
      totalTuitionUSD: "$18,000 – $22,000",
      grandTotalUSD: "$25,800 – $34,180",
      totalINR: "₹24.38 Lakh – ₹32.30 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "15",
      name: "Ulyanovsk State University",
      tuitionUSD: "$3,100 – $3,800",
      hostelUSD: "$300 – $580",
      foodUSD: "$1,000 – $1,500",
      totalTuitionUSD: "$19,000 – $23,000",
      grandTotalUSD: "$26,800 – $35,480",
      totalINR: "₹25.32 Lakh – ₹33.53 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "16",
      name: "Saratov State Medical University",
      tuitionUSD: "$4,100 – $4,800",
      hostelUSD: "$400 – $700",
      foodUSD: "$1,000 – $1,500",
      totalTuitionUSD: "$25,000 – $29,000",
      grandTotalUSD: "$33,400 – $42,200",
      totalINR: "₹31.56 Lakh – ₹39.88 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "17",
      name: "Far Eastern Medical University",
      tuitionUSD: "$3,300 – $4,000",
      hostelUSD: "$400 – $800",
      foodUSD: "$1,150 – $1,650",
      totalTuitionUSD: "$20,000 – $24,000",
      grandTotalUSD: "$29,300 – $38,700",
      totalINR: "₹27.69 Lakh – ₹36.57 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "18",
      name: "Kirov State Medical University",
      tuitionUSD: "$3,100 – $3,800",
      hostelUSD: "$300 – $500",
      foodUSD: "$1,000 – $1,500",
      totalTuitionUSD: "$19,000 – $23,000",
      grandTotalUSD: "$26,800 – $35,000",
      totalINR: "₹25.32 Lakh – ₹33.07 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "19",
      name: "Samara State Medical University",
      tuitionUSD: "$4,000 – $4,600",
      hostelUSD: "$330 – $630",
      foodUSD: "$1,000 – $1,500",
      totalTuitionUSD: "$24,000 – $28,000",
      grandTotalUSD: "$31,980 – $40,780",
      totalINR: "₹30.22 Lakh – ₹38.54 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "20",
      name: "Kuban State Medical University",
      tuitionUSD: "$4,000 – $4,600",
      hostelUSD: "$830 – $1,000",
      foodUSD: "$1,100 – $1,600",
      totalTuitionUSD: "$24,000 – $28,000",
      grandTotalUSD: "$35,580 – $43,600",
      totalINR: "₹33.62 Lakh – ₹41.20 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "21",
      name: "Kursk State Medical University",
      tuitionUSD: "$5,500 – $6,300",
      hostelUSD: "$400 – $660",
      foodUSD: "$1,000 – $1,500",
      totalTuitionUSD: "$33,000 – $38,000",
      grandTotalUSD: "$41,400 – $50,960",
      totalINR: "₹39.12 Lakh – ₹48.16 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "22",
      name: "Altai State Medical University",
      tuitionUSD: "$3,800 – $4,500",
      hostelUSD: "$700 – $830",
      foodUSD: "$1,000 – $1,500",
      totalTuitionUSD: "$23,000 – $27,000",
      grandTotalUSD: "$33,200 – $40,980",
      totalINR: "₹31.37 Lakh – ₹38.73 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "23",
      name: "Peoples Friendship University (RUDN)",
      tuitionUSD: "$7,500 – $8,300",
      hostelUSD: "$1,300 – $2,000",
      foodUSD: "$1,500 – $2,000",
      totalTuitionUSD: "$45,000 – $50,000",
      grandTotalUSD: "$61,800 – $74,000",
      totalINR: "₹58.40 Lakh – ₹69.93 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "24",
      name: "Kazan State University",
      tuitionUSD: "$5,600 – $6,600",
      hostelUSD: "$200 – $400",
      foodUSD: "$1,100 – $1,600",
      totalTuitionUSD: "$34,000 – $40,000",
      grandTotalUSD: "$41,800 – $52,000",
      totalINR: "₹39.50 Lakh – ₹49.14 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "25",
      name: "Privolzhsky Research Medical University",
      tuitionUSD: "$5,000 – $5,800",
      hostelUSD: "$660 – $860",
      foodUSD: "$1,100 – $1,600",
      totalTuitionUSD: "$30,000 – $35,000",
      grandTotalUSD: "$40,560 – $49,760",
      totalINR: "₹38.33 Lakh – ₹47.02 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "26",
      name: "Ingush State University",
      tuitionUSD: "$2,600 – $3,100",
      hostelUSD: "$600 – $700",
      foodUSD: "$1,000 – $1,500",
      totalTuitionUSD: "$16,000 – $19,000",
      grandTotalUSD: "$25,600 – $32,200",
      totalINR: "₹24.20 Lakh – ₹30.43 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "27",
      name: "Perm State Medical University",
      tuitionUSD: "$4,000 – $4,600",
      hostelUSD: "$500 – $750",
      foodUSD: "$1,000 – $1,500",
      totalTuitionUSD: "$24,000 – $28,000",
      grandTotalUSD: "$33,000 – $41,500",
      totalINR: "₹31.18 Lakh – ₹39.22 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "28",
      name: "Northern State Medical University",
      tuitionUSD: "$4,000 – $4,600",
      hostelUSD: "$580 – $800",
      foodUSD: "$1,100 – $1,600",
      totalTuitionUSD: "$24,000 – $28,000",
      grandTotalUSD: "$34,080 – $42,400",
      totalINR: "₹32.21 Lakh – ₹40.07 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "29",
      name: "Chuvash State University",
      tuitionUSD: "$3,000 – $3,600",
      hostelUSD: "$300 – $500",
      foodUSD: "$1,000 – $1,500",
      totalTuitionUSD: "$18,000 – $22,000",
      grandTotalUSD: "$25,800 – $34,000",
      totalINR: "₹24.38 Lakh – ₹32.13 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "30",
      name: "Far Eastern Federal University Russia",
      tuitionUSD: "$5,300 – $6,300",
      hostelUSD: "$600 – $900",
      foodUSD: "$1,150 – $1,650",
      totalTuitionUSD: "$32,000 – $38,000",
      grandTotalUSD: "$42,500 – $53,300",
      totalINR: "₹40.16 Lakh – ₹50.37 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "31",
      name: "Ural State Medical University",
      tuitionUSD: "$3,800 – $4,500",
      hostelUSD: "$150 – $250",
      foodUSD: "$1,000 – $1,500",
      totalTuitionUSD: "$23,000 – $27,000",
      grandTotalUSD: "$29,900 – $37,500",
      totalINR: "₹28.26 Lakh – ₹35.44 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "32",
      name: "Omsk State Medical University",
      tuitionUSD: "$3,600 – $4,300",
      hostelUSD: "$130 – $200",
      foodUSD: "$1,000 – $1,500",
      totalTuitionUSD: "$22,000 – $26,000",
      grandTotalUSD: "$28,780 – $36,200",
      totalINR: "₹27.20 Lakh – ₹34.21 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "33",
      name: "Amur State Medical Academy Russia",
      tuitionUSD: "$2,800 – $3,500",
      hostelUSD: "$200 – $400",
      foodUSD: "$1,000 – $1,500",
      totalTuitionUSD: "$17,000 – $21,000",
      grandTotalUSD: "$24,200 – $32,400",
      totalINR: "₹22.87 Lakh – ₹30.62 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "34",
      name: "Tyumen State Medical University Russia",
      tuitionUSD: "$3,600 – $4,300",
      hostelUSD: "$250 – $500",
      foodUSD: "$1,000 – $1,500",
      totalTuitionUSD: "$22,000 – $26,000",
      grandTotalUSD: "$29,500 – $38,000",
      totalINR: "₹27.88 Lakh – ₹35.91 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "35",
      name: "Yaroslavl State Medical University",
      tuitionUSD: "$3,100 – $3,800",
      hostelUSD: "$550 – $660",
      foodUSD: "$1,000 – $1,500",
      totalTuitionUSD: "$19,000 – $23,000",
      grandTotalUSD: "$28,300 – $35,960",
      totalINR: "₹26.74 Lakh – ₹33.98 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "36",
      name: "Astrakhan State Medical University",
      tuitionUSD: "$3,100 – $3,800",
      hostelUSD: "$300 – $530",
      foodUSD: "$1,000 – $1,500",
      totalTuitionUSD: "$19,000 – $23,000",
      grandTotalUSD: "$26,800 – $35,180",
      totalINR: "₹25.32 Lakh – ₹33.25 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "37",
      name: "Belgorod State University",
      tuitionUSD: "$4,000 – $4,600",
      hostelUSD: "$330 – $600",
      foodUSD: "$1,000 – $1,500",
      totalTuitionUSD: "$24,000 – $28,000",
      grandTotalUSD: "$31,980 – $40,600",
      totalINR: "₹30.22 Lakh – ₹38.37 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "38",
      name: "Orenburg State Medical University",
      tuitionUSD: "$4,000 – $4,500",
      hostelUSD: "$500 – $750",
      foodUSD: "$1,000 – $1,500",
      totalTuitionUSD: "$24,000 – $27,000",
      grandTotalUSD: "$33,000 – $40,500",
      totalINR: "₹31.18 Lakh – ₹38.27 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "39",
      name: "Immanuel Kant Baltic Federal University",
      tuitionUSD: "$4,000 – $4,600",
      hostelUSD: "$400 – $660",
      foodUSD: "$1,100 – $1,600",
      totalTuitionUSD: "$24,000 – $28,000",
      grandTotalUSD: "$33,000 – $41,560",
      totalINR: "₹31.18 Lakh – ₹39.27 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "40",
      name: "Irkutsk State Medical University",
      tuitionUSD: "$3,600 – $4,300",
      hostelUSD: "$300 – $500",
      foodUSD: "$1,100 – $1,600",
      totalTuitionUSD: "$22,000 – $26,000",
      grandTotalUSD: "$30,400 – $38,600",
      totalINR: "₹28.73 Lakh – ₹36.48 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "41",
      name: "Ivanovo State Medical Academy",
      tuitionUSD: "$3,000 – $3,600",
      hostelUSD: "$300 – $460",
      foodUSD: "$1,000 – $1,500",
      totalTuitionUSD: "$18,000 – $22,000",
      grandTotalUSD: "$25,800 – $33,760",
      totalINR: "₹24.38 Lakh – ₹31.90 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "42",
      name: "Izhevsk State Medical Academy",
      tuitionUSD: "$3,000 – $3,600",
      hostelUSD: "$300 – $500",
      foodUSD: "$1,000 – $1,500",
      totalTuitionUSD: "$18,000 – $22,000",
      grandTotalUSD: "$25,800 – $34,000",
      totalINR: "₹24.38 Lakh – ₹32.13 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "43",
      name: "Kazan Federal University",
      tuitionUSD: "$5,600 – $6,500",
      hostelUSD: "$200 – $410",
      foodUSD: "$1,100 – $1,600",
      totalTuitionUSD: "$34,000 – $39,000",
      grandTotalUSD: "$41,800 – $51,060",
      totalINR: "₹39.50 Lakh – ₹48.25 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "44",
      name: "Mari State University",
      tuitionUSD: "$3,800 – $4,500",
      hostelUSD: "$500 – $1,500",
      foodUSD: "$1,000 – $1,500",
      totalTuitionUSD: "$23,000 – $27,000",
      grandTotalUSD: "$32,000 – $45,000",
      totalINR: "₹30.24 Lakh – ₹42.52 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "45",
      name: "National Research Ogarev Mordovia State",
      tuitionUSD: "$3,800 – $4,500",
      hostelUSD: "$330 – $580",
      foodUSD: "$1,000 – $1,500",
      totalTuitionUSD: "$23,000 – $27,000",
      grandTotalUSD: "$30,980 – $39,480",
      totalINR: "₹29.28 Lakh – ₹37.31 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "46",
      name: "National Research Nuclear Univ – Moscow",
      tuitionUSD: "$5,300 – $6,300",
      hostelUSD: "$1,000 – $1,500",
      foodUSD: "$1,500 – $2,000",
      totalTuitionUSD: "$32,000 – $38,000",
      grandTotalUSD: "$47,000 – $59,000",
      totalINR: "₹44.41 Lakh – ₹55.75 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "47",
      name: "National Research Nuclear Univ – Obninsk",
      tuitionUSD: "$5,000 – $5,800",
      hostelUSD: "$500 – $750",
      foodUSD: "$1,100 – $1,600",
      totalTuitionUSD: "$30,000 – $35,000",
      grandTotalUSD: "$39,600 – $49,100",
      totalINR: "₹37.42 Lakh – ₹46.40 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "48",
      name: "North Ossetian State Medical Academy",
      tuitionUSD: "$2,800 – $3,500",
      hostelUSD: "$250 – $460",
      foodUSD: "$1,000 – $1,500",
      totalTuitionUSD: "$17,000 – $21,000",
      grandTotalUSD: "$24,500 – $32,760",
      totalINR: "₹23.15 Lakh – ₹30.96 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "49",
      name: "Novosibirsk National Research State Univ",
      tuitionUSD: "$6,000 – $7,000",
      hostelUSD: "$750 – $1,000",
      foodUSD: "$1,150 – $1,650",
      totalTuitionUSD: "$36,000 – $42,000",
      grandTotalUSD: "$47,400 – $57,900",
      totalINR: "₹44.79 Lakh – ₹54.71 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "50",
      name: "Orel State University",
      tuitionUSD: "$3,000 – $3,600",
      hostelUSD: "$330 – $610",
      foodUSD: "$1,000 – $1,500",
      totalTuitionUSD: "$18,000 – $22,000",
      grandTotalUSD: "$25,980 – $34,660",
      totalINR: "₹24.55 Lakh – ₹32.75 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "51",
      name: "Pacific State Medical University",
      tuitionUSD: "$3,100 – $3,800",
      hostelUSD: "$400 – $700",
      foodUSD: "$1,150 – $1,650",
      totalTuitionUSD: "$19,000 – $23,000",
      grandTotalUSD: "$28,300 – $37,100",
      totalINR: "₹26.74 Lakh – ₹35.06 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "52",
      name: "Penza State University",
      tuitionUSD: "$3,000 – $3,600",
      hostelUSD: "$300 – $500",
      foodUSD: "$1,000 – $1,500",
      totalTuitionUSD: "$18,000 – $22,000",
      grandTotalUSD: "$25,800 – $34,000",
      totalINR: "₹24.38 Lakh – ₹32.13 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "53",
      name: "Pskov State University",
      tuitionUSD: "$3,000 – $3,600",
      hostelUSD: "$500 – $750",
      foodUSD: "$1,000 – $1,500",
      totalTuitionUSD: "$18,000 – $22,000",
      grandTotalUSD: "$27,000 – $35,500",
      totalINR: "₹25.51 Lakh – ₹33.55 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "54",
      name: "Ryazan State Medical University",
      tuitionUSD: "$3,300 – $4,000",
      hostelUSD: "$400 – $700",
      foodUSD: "$1,000 – $1,500",
      totalTuitionUSD: "$20,000 – $24,000",
      grandTotalUSD: "$28,400 – $37,200",
      totalINR: "₹26.84 Lakh – ₹35.15 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "55",
      name: "Smolensk State Medical University",
      tuitionUSD: "$4,200 – $4,800",
      hostelUSD: "$400 – $660",
      foodUSD: "$1,000 – $1,500",
      totalTuitionUSD: "$25,000 – $29,000",
      grandTotalUSD: "$33,400 – $41,960",
      totalINR: "₹31.56 Lakh – ₹39.65 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "56",
      name: "St. Petersburg State Pediatric Academy",
      tuitionUSD: "$5,300 – $6,000",
      hostelUSD: "$1,500 – $2,000",
      foodUSD: "$1,400 – $1,900",
      totalTuitionUSD: "$32,000 – $36,000",
      grandTotalUSD: "$49,400 – $59,400",
      totalINR: "₹46.68 Lakh – ₹56.13 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "57",
      name: "Stavropol State Medical University",
      tuitionUSD: "$4,000 – $4,600",
      hostelUSD: "$400 – $630",
      foodUSD: "$1,000 – $1,500",
      totalTuitionUSD: "$24,000 – $28,000",
      grandTotalUSD: "$32,400 – $40,780",
      totalINR: "₹30.62 Lakh – ₹38.54 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "58",
      name: "Tambov State University",
      tuitionUSD: "$3,000 – $3,600",
      hostelUSD: "$300 – $500",
      foodUSD: "$1,000 – $1,500",
      totalTuitionUSD: "$18,000 – $22,000",
      grandTotalUSD: "$25,800 – $34,000",
      totalINR: "₹24.38 Lakh – ₹32.13 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "59",
      name: "Pavlov First St. Petersburg Medical Univ",
      tuitionUSD: "$7,000 – $8,000",
      hostelUSD: "$1,600 – $2,160",
      foodUSD: "$1,400 – $1,900",
      totalTuitionUSD: "$42,000 – $48,000",
      grandTotalUSD: "$60,000 – $72,360",
      totalINR: "₹56.70 Lakh – ₹68.38 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "60",
      name: "Tula State University",
      tuitionUSD: "$3,000 – $3,600",
      hostelUSD: "$330 – $580",
      foodUSD: "$1,000 – $1,500",
      totalTuitionUSD: "$18,000 – $22,000",
      grandTotalUSD: "$25,980 – $34,480",
      totalINR: "₹24.55 Lakh – ₹32.58 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "61",
      name: "Pitirim Sorokin Syktyvkar State University",
      tuitionUSD: "$2,800 – $3,500",
      hostelUSD: "$250 – $460",
      foodUSD: "$1,000 – $1,500",
      totalTuitionUSD: "$17,000 – $21,000",
      grandTotalUSD: "$24,500 – $32,760",
      totalINR: "₹23.15 Lakh – ₹30.96 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "62",
      name: "Novosibirsk State Medical University",
      tuitionUSD: "$4,300 – $5,000",
      hostelUSD: "$580 – $830",
      foodUSD: "$1,150 – $1,650",
      totalTuitionUSD: "$26,000 – $30,000",
      grandTotalUSD: "$36,380 – $44,880",
      totalINR: "₹34.38 Lakh – ₹42.41 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "63",
      name: "Saint Petersburg State University",
      tuitionUSD: "$7,500 – $8,600",
      hostelUSD: "$1,660 – $2,330",
      foodUSD: "$1,400 – $1,900",
      totalTuitionUSD: "$45,000 – $52,000",
      grandTotalUSD: "$63,360 – $77,380",
      totalINR: "₹59.88 Lakh – ₹73.12 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "64",
      name: "Lomonosov Moscow State University",
      tuitionUSD: "$10,800 – $12,000",
      hostelUSD: "$3,000 – $4,000",
      foodUSD: "$1,500 – $2,000",
      totalTuitionUSD: "$65,000 – $72,000",
      grandTotalUSD: "$92,000 – $108,000",
      totalINR: "₹86.94 Lakh – ₹102.06 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
  ],
  "Kyrgyzstan": [
    {
      sNo: "1",
      name: "OSH State Medical University",
      tuitionUSD: "$3,400 – $3,800",
      hostelUSD: "$800 – $1,000",
      foodUSD: "$1,000 – $1,200",
      totalTuitionUSD: "$20,400 – $22,800",
      grandTotalUSD: "$31,200 – $36,000",
      totalINR: "₹29.48 Lakh – ₹34.02 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "2",
      name: "Jalalabad State University",
      tuitionUSD: "$3,500 – $4,200",
      hostelUSD: "$600 – $700",
      foodUSD: "$1,000 – $1,200",
      totalTuitionUSD: "$21,000 – $25,200",
      grandTotalUSD: "$30,600 – $36,600",
      totalINR: "₹28.91 Lakh – ₹34.58 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "3",
      name: "Adam University",
      tuitionUSD: "$4,000 – $4,200",
      hostelUSD: "$800 – $1,000",
      foodUSD: "$1,100 – $1,300",
      totalTuitionUSD: "$24,000 – $25,200",
      grandTotalUSD: "$35,400 – $39,000",
      totalINR: "₹33.45 Lakh – ₹36.85 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "4",
      name: "Kyrgyz State Medical Academy",
      tuitionUSD: "$4,200 – $4,500",
      hostelUSD: "$600 – $800",
      foodUSD: "$1,200 – $1,400",
      totalTuitionUSD: "$25,200 – $27,000",
      grandTotalUSD: "$36,000 – $40,200",
      totalINR: "₹34.02 Lakh – ₹37.98 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "5",
      name: "International School of Medicine Kyrgyzstan",
      tuitionUSD: "$6,000 – $6,500",
      hostelUSD: "$750 – $900",
      foodUSD: "$1,200 – $1,400",
      totalTuitionUSD: "$36,000 – $39,000",
      grandTotalUSD: "$47,700 – $52,800",
      totalINR: "₹45.07 Lakh – ₹49.89 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "6",
      name: "Asian Medical Institute Kyrgyzstan",
      tuitionUSD: "$3,400 – $3,800",
      hostelUSD: "$450 – $600",
      foodUSD: "$1,000 – $1,200",
      totalTuitionUSD: "$20,400 – $22,800",
      grandTotalUSD: "$29,100 – $33,600",
      totalINR: "₹27.49 Lakh – ₹31.75 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "7",
      name: "International University of Kyrgyzstan",
      tuitionUSD: "$4,500 – $5,000",
      hostelUSD: "$600 – $800",
      foodUSD: "$1,100 – $1,300",
      totalTuitionUSD: "$27,000 – $30,000",
      grandTotalUSD: "$37,200 – $42,600",
      totalINR: "₹35.15 Lakh – ₹40.25 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "8",
      name: "Kyrgyz Russian Slavic University",
      tuitionUSD: "$3,300 – $4,000",
      hostelUSD: "$700 – $850",
      foodUSD: "$1,200 – $1,400",
      totalTuitionUSD: "$19,800 – $24,000",
      grandTotalUSD: "$31,200 – $37,500",
      totalINR: "₹29.48 Lakh – ₹35.43 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "9",
      name: "Adam University School of Medicine",
      tuitionUSD: "$4,000 – $4,200",
      hostelUSD: "$800 – $1,000",
      foodUSD: "$1,100 – $1,300",
      totalTuitionUSD: "$24,000 – $25,200",
      grandTotalUSD: "$35,400 – $39,000",
      totalINR: "₹33.45 Lakh – ₹36.85 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
  ],
  "Nepal": [
    {
      sNo: "1",
      name: "B.P. Koirala Institute of Health Sciences (BPKIHS)",
      tuitionUSD: "$16,000 – $24,000",
      hostelUSD: "$250 – $400",
      foodUSD: "$800 – $1,200",
      totalTuitionUSD: "$64,000 – $75,000",
      grandTotalUSD: "$69,700 – $83,800",
      totalINR: "₹65.80 Lakh – ₹79.20 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "2",
      name: "Birat Medical College (BMC), Biratnagar",
      tuitionUSD: "$25,000 – $27,000",
      hostelUSD: "$1,000 – $1,500",
      foodUSD: "$1,000 – $1,300",
      totalTuitionUSD: "$75,000",
      grandTotalUSD: "$86,000 – $90,400",
      totalINR: "₹81.20 Lakh – ₹85.40 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "3",
      name: "Institute of Medicine, Nepal – IOM",
      tuitionUSD: "$16,000 – $22,000",
      hostelUSD: "$400 – $800",
      foodUSD: "$900 – $1,200",
      totalTuitionUSD: "$65,000 – $75,000",
      grandTotalUSD: "$72,100 – $86,000",
      totalINR: "₹68.10 Lakh – ₹81.20 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "4",
      name: "Janaki Medical College, Nepal",
      tuitionUSD: "$25,000 – $27,000",
      hostelUSD: "$800 – $1,200",
      foodUSD: "$900 – $1,200",
      totalTuitionUSD: "$75,000",
      grandTotalUSD: "$84,300 – $88,200",
      totalINR: "₹79.60 Lakh – ₹83.35 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "5",
      name: "Kathmandu Medical College, Nepal",
      tuitionUSD: "$25,000 – $27,000",
      hostelUSD: "$1,200 – $1,600",
      foodUSD: "$1,000 – $1,400",
      totalTuitionUSD: "$75,000",
      grandTotalUSD: "$87,100 – $91,500",
      totalINR: "₹82.30 Lakh – ₹86.46 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "6",
      name: "KIST Medical College Kathmandu, Nepal",
      tuitionUSD: "$25,000 – $27,000",
      hostelUSD: "$1,100 – $1,500",
      foodUSD: "$1,000 – $1,300",
      totalTuitionUSD: "$75,000",
      grandTotalUSD: "$86,500 – $90,400",
      totalINR: "₹81.74 Lakh – ₹85.42 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "7",
      name: "Lumbini Medical College (LMC), Nepal",
      tuitionUSD: "$25,000 – $27,000",
      hostelUSD: "$800 – $1,200",
      foodUSD: "$900 – $1,200",
      totalTuitionUSD: "$75,000",
      grandTotalUSD: "$84,300 – $88,200",
      totalINR: "₹79.60 Lakh – ₹83.35 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "8",
      name: "Universal College of Medical Science (UCMS)",
      tuitionUSD: "$25,000 – $27,000",
      hostelUSD: "$900 – $1,300",
      foodUSD: "$1,000 – $1,300",
      totalTuitionUSD: "$75,000",
      grandTotalUSD: "$85,450 – $89,300",
      totalINR: "₹80.75 Lakh – ₹84.38 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "9",
      name: "Nepal Medical College",
      tuitionUSD: "$25,000 – $27,000",
      hostelUSD: "$1,200 – $1,600",
      foodUSD: "$1,000 – $1,400",
      totalTuitionUSD: "$75,000",
      grandTotalUSD: "$87,100 – $91,500",
      totalINR: "₹82.30 Lakh – ₹86.46 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "10",
      name: "College of Medical Science",
      tuitionUSD: "$25,000 – $27,000",
      hostelUSD: "$900 – $1,400",
      foodUSD: "$1,000 – $1,300",
      totalTuitionUSD: "$75,000",
      grandTotalUSD: "$85,450 – $89,850",
      totalINR: "₹80.75 Lakh – ₹84.90 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "11",
      name: "Nobel Medical College",
      tuitionUSD: "$25,000 – $27,000",
      hostelUSD: "$900 – $1,300",
      foodUSD: "$1,000 – $1,300",
      totalTuitionUSD: "$75,000",
      grandTotalUSD: "$85,450 – $89,300",
      totalINR: "₹80.75 Lakh – ₹84.38 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "12",
      name: "National Medical College",
      tuitionUSD: "$25,000 – $27,000",
      hostelUSD: "$900 – $1,300",
      foodUSD: "$900 – $1,200",
      totalTuitionUSD: "$75,000",
      grandTotalUSD: "$84,900 – $88,750",
      totalINR: "₹80.23 Lakh – ₹83.86 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "13",
      name: "Chitwan Medical College",
      tuitionUSD: "$25,000 – $27,000",
      hostelUSD: "$1,000 – $1,400",
      foodUSD: "$1,000 – $1,300",
      totalTuitionUSD: "$75,000",
      grandTotalUSD: "$86,000 – $89,850",
      totalINR: "₹81.27 Lakh – ₹84.90 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "14",
      name: "Manipal College",
      tuitionUSD: "$25,000 – $27,000",
      hostelUSD: "$1,200 – $1,800",
      foodUSD: "$1,100 – $1,400",
      totalTuitionUSD: "$75,000",
      grandTotalUSD: "$87,650 – $92,600",
      totalINR: "₹82.82 Lakh – ₹87.50 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "15",
      name: "Devdaha Medical College",
      tuitionUSD: "$25,000 – $27,000",
      hostelUSD: "$700 – $1,100",
      foodUSD: "$900 – $1,200",
      totalTuitionUSD: "$75,000",
      grandTotalUSD: "$83,800 – $87,650",
      totalINR: "₹79.19 Lakh – ₹82.82 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "16",
      name: "B&C Medical College",
      tuitionUSD: "$25,000 – $27,000",
      hostelUSD: "$800 – $1,200",
      foodUSD: "$900 – $1,200",
      totalTuitionUSD: "$75,000",
      grandTotalUSD: "$84,300 – $88,200",
      totalINR: "₹79.60 Lakh – ₹83.35 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
  ],
  "Bangladesh": [
    {
      sNo: "1",
      name: "Bangladesh Medical College",
      tuitionUSD: "$15,000 – $18,000",
      hostelUSD: "Included in Package",
      foodUSD: "$1,000 – $1,400",
      totalTuitionUSD: "$49,000 – $51,000",
      grandTotalUSD: "$54,000 – $58,000",
      totalINR: "₹51.03 Lakh – ₹54.81 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "2",
      name: "Barind Medical College Bangladesh",
      tuitionUSD: "$12,000 – $15,000",
      hostelUSD: "Included in Package",
      foodUSD: "$900 – $1,200",
      totalTuitionUSD: "$38,000 – $40,000",
      grandTotalUSD: "$42,500 – $46,000",
      totalINR: "₹40.16 Lakh – ₹43.47 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "3",
      name: "Dhaka National Medical College",
      tuitionUSD: "$16,000 – $20,000",
      hostelUSD: "Included in Package",
      foodUSD: "$1,200 – $1,500",
      totalTuitionUSD: "$48,000 – $53,000",
      grandTotalUSD: "$54,000 – $60,500",
      totalINR: "₹51.03 Lakh – ₹57.17 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "4",
      name: "BGC Trust Medical College Bangladesh",
      tuitionUSD: "$10,000 – $13,000",
      hostelUSD: "Included in Package",
      foodUSD: "$900 – $1,200",
      totalTuitionUSD: "$33,000 – $36,000",
      grandTotalUSD: "$37,500 – $42,000",
      totalINR: "₹35.43 Lakh – ₹39.69 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "5",
      name: "Eastern Medical College Bangladesh",
      tuitionUSD: "$12,500 – $15,000",
      hostelUSD: "Included in Package",
      foodUSD: "$1,000 – $1,300",
      totalTuitionUSD: "$39,000 – $43,000",
      grandTotalUSD: "$44,000 – $49,500",
      totalINR: "₹41.58 Lakh – ₹46.77 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "6",
      name: "Khwaja Yunus Ali Medical College",
      tuitionUSD: "$14,000 – $16,500",
      hostelUSD: "Included in Package",
      foodUSD: "$1,000 – $1,400",
      totalTuitionUSD: "$46,000 – $48,500",
      grandTotalUSD: "$51,000 – $55,500",
      totalINR: "₹48.19 Lakh – ₹52.44 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
  ],
  "China": [
    {
      sNo: "1",
      name: "Capital Medical University",
      tuitionUSD: "$5,600 – $7,000",
      hostelUSD: "$1,050 – $1,400",
      foodUSD: "$1,400 – $1,800",
      totalTuitionUSD: "$33,600 – $42,000",
      grandTotalUSD: "$47,600 – $58,800",
      totalINR: "₹44.98 Lakh – ₹55.56 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "2",
      name: "Beihua Medical University",
      tuitionUSD: "$3,500 – $4,000",
      hostelUSD: "$600 – $800",
      foodUSD: "$1,200 – $1,500",
      totalTuitionUSD: "$21,000 – $24,000",
      grandTotalUSD: "$31,800 – $37,800",
      totalINR: "₹30.05 Lakh – ₹35.72 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "3",
      name: "Wuhan Medical University",
      tuitionUSD: "$5,600 – $6,300",
      hostelUSD: "$1,100 – $1,700",
      foodUSD: "$1,400 – $1,800",
      totalTuitionUSD: "$33,600 – $37,800",
      grandTotalUSD: "$48,600 – $58,800",
      totalINR: "₹45.92 Lakh – ₹55.56 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "4",
      name: "China Medical University",
      tuitionUSD: "$5,600 – $6,300",
      hostelUSD: "$1,000 – $1,550",
      foodUSD: "$1,300 – $1,700",
      totalTuitionUSD: "$33,600 – $37,800",
      grandTotalUSD: "$47,400 – $57,300",
      totalINR: "₹44.79 Lakh – ₹54.14 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "5",
      name: "Jiamusi University",
      tuitionUSD: "$3,500 – $4,000",
      hostelUSD: "$700 – $1,100",
      foodUSD: "$1,200 – $1,500",
      totalTuitionUSD: "$21,000 – $24,000",
      grandTotalUSD: "$32,400 – $39,600",
      totalINR: "₹30.61 Lakh – ₹37.42 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "6",
      name: "Dalian Medical University",
      tuitionUSD: "$5,900 – $6,300",
      hostelUSD: "$1,100 – $1,400",
      foodUSD: "$1,400 – $1,800",
      totalTuitionUSD: "$35,400 – $37,800",
      grandTotalUSD: "$50,400 – $57,000",
      totalINR: "₹47.62 Lakh – ₹53.86 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "7",
      name: "Hebei Medical University",
      tuitionUSD: "$4,200 – $4,900",
      hostelUSD: "$700 – $1,100",
      foodUSD: "$1,200 – $1,600",
      totalTuitionUSD: "$25,200 – $29,400",
      grandTotalUSD: "$36,600 – $45,600",
      totalINR: "₹34.58 Lakh – ₹43.09 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "8",
      name: "Jilin University",
      tuitionUSD: "$4,600 – $5,000",
      hostelUSD: "$850 – $1,100",
      foodUSD: "$1,300 – $1,700",
      totalTuitionUSD: "$27,600 – $30,000",
      grandTotalUSD: "$40,500 – $46,800",
      totalINR: "₹38.27 Lakh – ₹44.22 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "9",
      name: "FUDAN University",
      tuitionUSD: "$10,500 – $11,500",
      hostelUSD: "$1,400 – $2,500",
      foodUSD: "$1,600 – $2,200",
      totalTuitionUSD: "$63,000 – $69,000",
      grandTotalUSD: "$81,000 – $97,200",
      totalINR: "₹76.54 Lakh – ₹91.85 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "10",
      name: "China Three Gorges University",
      tuitionUSD: "$3,350 – $3,800",
      hostelUSD: "$600 – $1,000",
      foodUSD: "$1,200 – $1,500",
      totalTuitionUSD: "$20,100 – $22,800",
      grandTotalUSD: "$30,900 – $37,800",
      totalINR: "₹29.20 Lakh – ₹35.72 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "11",
      name: "Nanjing Medical University",
      tuitionUSD: "$4,800 – $5,600",
      hostelUSD: "$850 – $1,200",
      foodUSD: "$1,400 – $1,800",
      totalTuitionUSD: "$28,800 – $33,600",
      grandTotalUSD: "$42,300 – $51,600",
      totalINR: "₹39.97 Lakh – ₹48.76 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "12",
      name: "Anhui Medical University",
      tuitionUSD: "$4,200 – $4,600",
      hostelUSD: "$750 – $1,100",
      foodUSD: "$1,200 – $1,500",
      totalTuitionUSD: "$25,200 – $27,600",
      grandTotalUSD: "$36,900 – $43,200",
      totalINR: "₹34.87 Lakh – ₹40.82 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "13",
      name: "Xi'an Jiaotong University",
      tuitionUSD: "$5,600 – $7,000",
      hostelUSD: "$1,100 – $1,550",
      foodUSD: "$1,300 – $1,700",
      totalTuitionUSD: "$33,600 – $42,000",
      grandTotalUSD: "$48,000 – $61,500",
      totalINR: "₹45.36 Lakh – ₹58.11 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "14",
      name: "Xiamen Amoy University",
      tuitionUSD: "$5,300 – $6,000",
      hostelUSD: "$600 – $1,200",
      foodUSD: "$1,400 – $1,800",
      totalTuitionUSD: "$31,800 – $36,000",
      grandTotalUSD: "$43,800 – $54,000",
      totalINR: "₹41.39 Lakh – ₹51.03 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "15",
      name: "Guangzhou Medical University",
      tuitionUSD: "$4,200 – $4,900",
      hostelUSD: "$850 – $1,400",
      foodUSD: "$1,500 – $2,000",
      totalTuitionUSD: "$25,200 – $29,400",
      grandTotalUSD: "$39,300 – $49,800",
      totalINR: "₹37.13 Lakh – ₹47.06 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "16",
      name: "Fujian Medical University",
      tuitionUSD: "$4,200 – $4,900",
      hostelUSD: "$600 – $1,000",
      foodUSD: "$1,300 – $1,700",
      totalTuitionUSD: "$25,200 – $29,400",
      grandTotalUSD: "$36,600 – $45,600",
      totalINR: "₹34.58 Lakh – ₹43.09 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "17",
      name: "Ningxia Medical University",
      tuitionUSD: "$4,200 – $4,900",
      hostelUSD: "$500 – $800",
      foodUSD: "$1,100 – $1,500",
      totalTuitionUSD: "$25,200 – $29,400",
      grandTotalUSD: "$34,800 – $43,200",
      totalINR: "₹32.88 Lakh – ₹40.82 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "18",
      name: "Wenzhou Medical University",
      tuitionUSD: "$4,200 – $4,500",
      hostelUSD: "$650 – $1,000",
      foodUSD: "$1,300 – $1,700",
      totalTuitionUSD: "$25,200 – $27,000",
      grandTotalUSD: "$36,900 – $43,200",
      totalINR: "₹34.87 Lakh – ₹40.82 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "19",
      name: "Qingdao University",
      tuitionUSD: "$4,200 – $5,000",
      hostelUSD: "$800 – $1,200",
      foodUSD: "$1,300 – $1,700",
      totalTuitionUSD: "$25,200 – $30,000",
      grandTotalUSD: "$37,800 – $47,400",
      totalINR: "₹35.72 Lakh – ₹44.79 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "20",
      name: "Soochow University Suzhou",
      tuitionUSD: "$4,500 – $5,600",
      hostelUSD: "$1,000 – $1,500",
      foodUSD: "$1,400 – $1,800",
      totalTuitionUSD: "$27,000 – $33,600",
      grandTotalUSD: "$41,400 – $53,400",
      totalINR: "₹39.12 Lakh – ₹50.46 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "21",
      name: "Yangzhou Medical University",
      tuitionUSD: "$4,200 – $4,500",
      hostelUSD: "$800 – $1,100",
      foodUSD: "$1,200 – $1,500",
      totalTuitionUSD: "$25,200 – $27,000",
      grandTotalUSD: "$37,200 – $42,600",
      totalINR: "₹35.15 Lakh – ₹40.25 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "22",
      name: "Southern Medical University",
      tuitionUSD: "$5,600 – $6,300",
      hostelUSD: "$1,000 – $1,500",
      foodUSD: "$1,500 – $2,000",
      totalTuitionUSD: "$33,600 – $37,800",
      grandTotalUSD: "$48,600 – $58,800",
      totalINR: "₹45.92 Lakh – ₹55.56 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "23",
      name: "Kunming Medical University",
      tuitionUSD: "$4,200 – $4,900",
      hostelUSD: "$600 – $1,000",
      foodUSD: "$1,100 – $1,400",
      totalTuitionUSD: "$25,200 – $29,400",
      grandTotalUSD: "$35,400 – $43,800",
      totalINR: "₹33.45 Lakh – ₹41.39 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "24",
      name: "Nantong University",
      tuitionUSD: "$3,500 – $4,200",
      hostelUSD: "$650 – $1,000",
      foodUSD: "$1,200 – $1,500",
      totalTuitionUSD: "$21,000 – $25,200",
      grandTotalUSD: "$32,100 – $40,200",
      totalINR: "₹30.33 Lakh – ₹37.98 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "25",
      name: "Zhejiang University",
      tuitionUSD: "$5,900 – $6,800",
      hostelUSD: "$1,000 – $1,600",
      foodUSD: "$1,400 – $1,800",
      totalTuitionUSD: "$35,400 – $40,800",
      grandTotalUSD: "$49,800 – $61,200",
      totalINR: "₹47.06 Lakh – ₹57.83 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "26",
      name: "Southwest Medical University",
      tuitionUSD: "$3,900 – $4,200",
      hostelUSD: "$600 – $900",
      foodUSD: "$1,200 – $1,500",
      totalTuitionUSD: "$23,400 – $25,200",
      grandTotalUSD: "$34,200 – $39,600",
      totalINR: "₹32.31 Lakh – ₹37.42 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "27",
      name: "Jinzhou Medical University",
      tuitionUSD: "$4,500 – $4,900",
      hostelUSD: "$700 – $1,100",
      foodUSD: "$1,200 – $1,500",
      totalTuitionUSD: "$27,000 – $29,400",
      grandTotalUSD: "$38,400 – $45,000",
      totalINR: "₹36.28 Lakh – ₹42.52 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "28",
      name: "Xinjiang Medical University",
      tuitionUSD: "$4,500 – $5,000",
      hostelUSD: "$600 – $1,000",
      foodUSD: "$1,100 – $1,400",
      totalTuitionUSD: "$27,000 – $30,000",
      grandTotalUSD: "$37,200 – $44,400",
      totalINR: "₹35.15 Lakh – ₹41.96 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "29",
      name: "Jinan University (JNU)",
      tuitionUSD: "$4,900 – $5,600",
      hostelUSD: "$1,100 – $1,800",
      foodUSD: "$1,500 – $2,000",
      totalTuitionUSD: "$29,400 – $33,600",
      grandTotalUSD: "$45,000 – $56,400",
      totalINR: "₹42.52 Lakh – ₹53.29 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "30",
      name: "Southeast University",
      tuitionUSD: "$4,500 – $5,300",
      hostelUSD: "$850 – $1,400",
      foodUSD: "$1,400 – $1,800",
      totalTuitionUSD: "$27,000 – $31,800",
      grandTotalUSD: "$40,500 – $51,000",
      totalINR: "₹38.27 Lakh – ₹48.20 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "31",
      name: "Sun Yat-Sen University",
      tuitionUSD: "$6,700 – $7,500",
      hostelUSD: "$1,100 – $1,600",
      foodUSD: "$1,500 – $2,000",
      totalTuitionUSD: "$40,200 – $45,000",
      grandTotalUSD: "$55,800 – $66,600",
      totalINR: "₹52.73 Lakh – ₹62.93 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "32",
      name: "Guangxi Medical University",
      tuitionUSD: "$4,200 – $4,900",
      hostelUSD: "$600 – $1,000",
      foodUSD: "$1,200 – $1,500",
      totalTuitionUSD: "$25,200 – $29,400",
      grandTotalUSD: "$36,000 – $44,400",
      totalINR: "₹34.02 Lakh – ₹41.96 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "33",
      name: "Jiangsu University",
      tuitionUSD: "$4,500 – $5,600",
      hostelUSD: "$700 – $1,100",
      foodUSD: "$1,200 – $1,500",
      totalTuitionUSD: "$27,000 – $33,600",
      grandTotalUSD: "$38,400 – $49,200",
      totalINR: "₹36.28 Lakh – ₹46.49 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "34",
      name: "Harbin Medical University",
      tuitionUSD: "$4,200 – $4,900",
      hostelUSD: "$600 – $900",
      foodUSD: "$1,200 – $1,500",
      totalTuitionUSD: "$25,200 – $29,400",
      grandTotalUSD: "$36,000 – $43,800",
      totalINR: "₹34.02 Lakh – ₹41.39 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "35",
      name: "Huazhong Univ of Sci & Tech",
      tuitionUSD: "$5,600 – $6,300",
      hostelUSD: "$1,000 – $1,400",
      foodUSD: "$1,400 – $1,800",
      totalTuitionUSD: "$33,600 – $37,800",
      grandTotalUSD: "$48,000 – $57,000",
      totalINR: "₹45.36 Lakh – ₹53.86 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "36",
      name: "Ningbo University",
      tuitionUSD: "$4,500 – $5,800",
      hostelUSD: "$700 – $1,200",
      foodUSD: "$1,300 – $1,600",
      totalTuitionUSD: "$27,000 – $34,800",
      grandTotalUSD: "$39,000 – $51,600",
      totalINR: "₹36.85 Lakh – ₹48.76 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "37",
      name: "North Sichuan Medical College",
      tuitionUSD: "$3,650 – $4,000",
      hostelUSD: "$600 – $800",
      foodUSD: "$1,200 – $1,500",
      totalTuitionUSD: "$21,900 – $24,000",
      grandTotalUSD: "$32,700 – $37,800",
      totalINR: "₹30.90 Lakh – ₹35.72 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "38",
      name: "Xuzhou Medical University",
      tuitionUSD: "$4,200 – $4,500",
      hostelUSD: "$650 – $1,000",
      foodUSD: "$1,200 – $1,500",
      totalTuitionUSD: "$25,200 – $27,000",
      grandTotalUSD: "$36,300 – $42,000",
      totalINR: "₹34.30 Lakh – ₹39.69 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "39",
      name: "Shantou University",
      tuitionUSD: "$4,800 – $5,600",
      hostelUSD: "$800 – $1,200",
      foodUSD: "$1,300 – $1,700",
      totalTuitionUSD: "$28,800 – $33,600",
      grandTotalUSD: "$41,400 – $51,000",
      totalINR: "₹39.12 Lakh – ₹48.20 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "40",
      name: "Zhengzhou Medical University",
      tuitionUSD: "$4,500 – $5,600",
      hostelUSD: "$700 – $1,100",
      foodUSD: "$1,200 – $1,500",
      totalTuitionUSD: "$27,000 – $33,600",
      grandTotalUSD: "$38,400 – $49,200",
      totalINR: "₹36.28 Lakh – ₹46.49 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "41",
      name: "Shihezi Medical University",
      tuitionUSD: "$4,200 – $4,900",
      hostelUSD: "$550 – $850",
      foodUSD: "$1,100 – $1,400",
      totalTuitionUSD: "$25,200 – $29,400",
      grandTotalUSD: "$35,100 – $42,900",
      totalINR: "₹33.16 Lakh – ₹40.54 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "42",
      name: "Sichuan University",
      tuitionUSD: "$6,300 – $7,000",
      hostelUSD: "$1,000 – $1,600",
      foodUSD: "$1,300 – $1,700",
      totalTuitionUSD: "$37,800 – $42,000",
      grandTotalUSD: "$51,600 – $61,800",
      totalINR: "₹48.76 Lakh – ₹58.40 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "43",
      name: "Tianjin Medical University",
      tuitionUSD: "$5,600 – $6,300",
      hostelUSD: "$1,000 – $1,500",
      foodUSD: "$1,400 – $1,800",
      totalTuitionUSD: "$33,600 – $37,800",
      grandTotalUSD: "$48,000 – $57,600",
      totalINR: "₹45.36 Lakh – ₹54.43 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "44",
      name: "Tongji University School of Med",
      tuitionUSD: "$6,700 – $7,700",
      hostelUSD: "$1,200 – $2,200",
      foodUSD: "$1,600 – $2,100",
      totalTuitionUSD: "$40,200 – $46,200",
      grandTotalUSD: "$57,000 – $72,000",
      totalINR: "₹53.86 Lakh – ₹68.04 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
  ],
  "Philippines": [
    {
      sNo: "1",
      name: "International Black Sea University",
      tuitionUSD: "$4,800 – $4,900",
      hostelUSD: "$1,800 – $2,500",
      foodUSD: "$1,200 – $1,800",
      totalTuitionUSD: "$28,800 – $29,400",
      grandTotalUSD: "$46,800 – $55,200",
      totalINR: "₹44.22 Lakh – ₹52.16 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "2",
      name: "Georgian National University SEU",
      tuitionUSD: "$5,900 – $6,300",
      hostelUSD: "$2,000 – $3,000",
      foodUSD: "$1,200 – $1,800",
      totalTuitionUSD: "$35,400 – $37,800",
      grandTotalUSD: "$54,600 – $66,600",
      totalINR: "₹51.59 Lakh – ₹62.93 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "3",
      name: "Grigol Robakidze University",
      tuitionUSD: "$5,500 – $5,620",
      hostelUSD: "$1,800 – $2,400",
      foodUSD: "$1,200 – $1,800",
      totalTuitionUSD: "$33,000 – $33,720",
      grandTotalUSD: "$51,000 – $693",
      totalINR: "₹48.19 Lakh – ₹55.67 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "4",
      name: "Avicenna Batumi Medical University",
      tuitionUSD: "$4,000 – $4,900",
      hostelUSD: "$1,500 – $2,200",
      foodUSD: "$1,200 – $1,800",
      totalTuitionUSD: "$24,000 – $29,400",
      grandTotalUSD: "$40,200 – $53,400",
      totalINR: "₹37.98 Lakh – ₹50.46 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "5",
      name: "Alte University",
      tuitionUSD: "$5,000 – $5,500",
      hostelUSD: "$1,800 – $2,500",
      foodUSD: "$1,200 – $1,800",
      totalTuitionUSD: "$30,000 – $33,000",
      grandTotalUSD: "$48,000 – $58,800",
      totalINR: "₹45.36 Lakh – ₹55.56 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "6",
      name: "Georgian American University (GAU)",
      tuitionUSD: "$6,000 – $6,500",
      hostelUSD: "$2,000 – $3,000",
      foodUSD: "$1,200 – $1,800",
      totalTuitionUSD: "$36,000 – $39,000",
      grandTotalUSD: "$55,200 – $67,800",
      totalINR: "₹52.16 Lakh – ₹64.07 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "7",
      name: "Caucasus International University Georgia",
      tuitionUSD: "$6,000 – $6,500",
      hostelUSD: "$1,800 – $2,500",
      foodUSD: "$1,200 – $1,800",
      totalTuitionUSD: "$36,000 – $39,000",
      grandTotalUSD: "$54,000 – $64,800",
      totalINR: "₹51.03 Lakh – ₹61.23 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "8",
      name: "East European University Georgia",
      tuitionUSD: "$5,300 – $5,500",
      hostelUSD: "$1,800 – $2,400",
      foodUSD: "$1,200 – $1,800",
      totalTuitionUSD: "$31,800 – $33,000",
      grandTotalUSD: "$49,800 – $58,200",
      totalINR: "₹47.06 Lakh – ₹54.99 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "9",
      name: "New Vision University Georgia",
      tuitionUSD: "$7,000 – $8,000",
      hostelUSD: "$1,500 – $2,200",
      foodUSD: "$1,200 – $1,800",
      totalTuitionUSD: "$42,000 – $48,000",
      grandTotalUSD: "$58,200 – $72,000",
      totalINR: "₹54.99 Lakh – ₹68.04 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "10",
      name: "David Tvildiani Medical University",
      tuitionUSD: "$6,000 – $8,000",
      hostelUSD: "$2,000 – $3,000",
      foodUSD: "$1,200 – $1,800",
      totalTuitionUSD: "$36,000 – $48,000",
      grandTotalUSD: "$55,200 – $76,800",
      totalINR: "₹52.16 Lakh – ₹72.57 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "11",
      name: "University of Georgia",
      tuitionUSD: "$6,000 – $6,500",
      hostelUSD: "$2,000 – $3,000",
      foodUSD: "$1,200 – $1,800",
      totalTuitionUSD: "$36,000 – $39,000",
      grandTotalUSD: "$55,200 – $67,800",
      totalINR: "₹52.16 Lakh – ₹64.07 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "12",
      name: "Geomedi State University",
      tuitionUSD: "$5,500 – $6,000",
      hostelUSD: "$1,800 – $2,400",
      foodUSD: "$1,200 – $1,800",
      totalTuitionUSD: "$33,000 – $36,000",
      grandTotalUSD: "$51,000 – $61,200",
      totalINR: "₹48.19 Lakh – ₹57.83 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "13",
      name: "European University Georgia",
      tuitionUSD: "$5,900 – $6,000",
      hostelUSD: "$1,800 – $2,500",
      foodUSD: "$1,200 – $1,800",
      totalTuitionUSD: "$35,400 – $36,000",
      grandTotalUSD: "$53,400 – $61,800",
      totalINR: "₹50.46 Lakh – ₹58.40 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "14",
      name: "BAU International",
      tuitionUSD: "$4,800 – $5,500",
      hostelUSD: "$1,500 – $2,200",
      foodUSD: "$1,200 – $1,800",
      totalTuitionUSD: "$28,800 – $33,000",
      grandTotalUSD: "$45,000 – $57,000",
      totalINR: "₹42.52 Lakh – ₹53.86 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "15",
      name: "East West University Georgia",
      tuitionUSD: "$3,900 – $5,000",
      hostelUSD: "$1,500 – $2,200",
      foodUSD: "$1,200 – $1,800",
      totalTuitionUSD: "$23,400 – $30,000",
      grandTotalUSD: "$39,600 – $54,000",
      totalINR: "₹37.42 Lakh – ₹51.03 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
  ],
  "Armenia": [
    {
      sNo: "1",
      name: "Yerevan Haybusak University, Armenia",
      tuitionUSD: "$3,800 – $4,500",
      hostelUSD: "$700 – $1,000",
      foodUSD: "$1,000 – $1,400",
      totalTuitionUSD: "$22,800 – $27,000",
      grandTotalUSD: "$33,000 – $41,400",
      totalINR: "₹31.18 Lakh – ₹39.12 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "2",
      name: "St. Tereza Medical University Armenia",
      tuitionUSD: "$3,000 – $3,500",
      hostelUSD: "$800 – $1,000",
      foodUSD: "$1,000 – $1,300",
      totalTuitionUSD: "$18,000 – $21,000",
      grandTotalUSD: "$28,800 – $34,800",
      totalINR: "₹27.21 Lakh – ₹32.88 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
  ],

  "Czech Republic": [
    {
      sNo: "1",
      name: "Masaryk University, Brno",
      tuitionUSD: "~$16,600",
      hostelUSD: "$1,500 – $2,500",
      foodUSD: "$1,600 – $2,200",
      totalTuitionUSD: "~$99,600",
      grandTotalUSD: "$118,200 – $127,800",
      totalINR: "₹1.11 Crore – ₹1.20 Crore",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "2",
      name: "Palacky University, Olomouc",
      tuitionUSD: "~$11,000",
      hostelUSD: "$1,200 – $2,000",
      foodUSD: "$1,400 – $1,900",
      totalTuitionUSD: "~$66,000",
      grandTotalUSD: "$81,600 – $89,400",
      totalINR: "₹77.11 Lakh – ₹84.48 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "3",
      name: "University of Ostrava",
      tuitionUSD: "~$13,200",
      hostelUSD: "$1,100 – $1,800",
      foodUSD: "$1,400 – $1,900",
      totalTuitionUSD: "~$79,200",
      grandTotalUSD: "$94,200 – $101,400",
      totalINR: "₹89.01 Lakh – ₹95.82 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
  ],
  "Slovakia": [
    {
      sNo: "1",
      name: "Comenius University Bratislava",
      tuitionUSD: "~$14,300",
      hostelUSD: "$1,200 – $2,200",
      foodUSD: "$1,800 – $2,400",
      totalTuitionUSD: "~$85,800",
      grandTotalUSD: "$103,800 – $113,400",
      totalINR: "₹98.09 Lakh – ₹107.16 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "2",
      name: "Jessenius University Martin",
      tuitionUSD: "~$12,650",
      hostelUSD: "$1,000 – $1,800",
      foodUSD: "$1,500 – $2,000",
      totalTuitionUSD: "~$75,900",
      grandTotalUSD: "$90,900 – $98,700",
      totalINR: "₹85.90 Lakh – ₹93.27 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "3",
      name: "University of Trnava",
      tuitionUSD: "No General Medicine (MBBS) Faculty Available in English",
      hostelUSD: "N/A",
      foodUSD: "N/A",
      totalTuitionUSD: "N/A",
      grandTotalUSD: "N/A",
      totalINR: "Not Applicable",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "4",
      name: "Pavol Jozef Safarik University Kosice",
      tuitionUSD: "~$14,300",
      hostelUSD: "$1,100 – $1,900",
      foodUSD: "$1,600 – $2,100",
      totalTuitionUSD: "~$85,800",
      grandTotalUSD: "$102,000 – $109,800",
      totalINR: "₹96.39 Lakh – ₹103.76 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
  ],
  "Poland": [
    {
      sNo: "1",
      name: "Medical University of Gdansk",
      tuitionUSD: "~$12,000",
      hostelUSD: "$1,400 – $3,000",
      foodUSD: "$1,200 – $1,600",
      totalTuitionUSD: "~$72,000",
      grandTotalUSD: "$87,600 – $99,600",
      totalINR: "₹82.78 Lakh – ₹94.12 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "2",
      name: "Medical University of Poznan",
      tuitionUSD: "~$17,250",
      hostelUSD: "$1,500 – $3,200",
      foodUSD: "$1,300 – $1,700",
      totalTuitionUSD: "~$103,500",
      grandTotalUSD: "$120,300 – $132,900",
      totalINR: "₹1.13 Crore – ₹1.25 Crore",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "3",
      name: "Medical University of Rzeszow",
      tuitionUSD: "~$13,500",
      hostelUSD: "$1,100 – $2,200",
      foodUSD: "$1,200 – $1,600",
      totalTuitionUSD: "~$81,000",
      grandTotalUSD: "$94,800 – $103,800",
      totalINR: "₹89.58 Lakh – ₹98.09 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "4",
      name: "Medical University of Jagiellonian",
      tuitionUSD: "~$18,550",
      hostelUSD: "$1,500 – $3,300",
      foodUSD: "$1,400 – $1,800",
      totalTuitionUSD: "~$111,300",
      grandTotalUSD: "$128,700 – $141,900",
      totalINR: "₹1.21 Crore – ₹1.34 Crore",
      worldRank: "—",
      countryRank: "—"
    },
  ],
  "Hungary": [
    {
      sNo: "1",
      name: "Semmelweis University, Budapest Hungary",
      tuitionUSD: "$19,900",
      hostelUSD: "$1,800 – $3,000",
      foodUSD: "$1,600 – $2,200",
      totalTuitionUSD: "$119,400",
      grandTotalUSD: "$139,800 – $150,600",
      totalINR: "₹1.32 Crore – ₹1.42 Crore",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "2",
      name: "Medical University Pécs, Hungary",
      tuitionUSD: "$16,750",
      hostelUSD: "$1,200 – $2,200",
      foodUSD: "$1,400 – $1,900",
      totalTuitionUSD: "$100,500",
      grandTotalUSD: "$116,100 – $125,100",
      totalINR: "₹1.09 Crore – ₹1.18 Crore",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "3",
      name: "University of Debrecen, Hungary",
      tuitionUSD: "$16,900",
      hostelUSD: "$1,100 – $2,000",
      foodUSD: "$1,300 – $1,800",
      totalTuitionUSD: "$101,400",
      grandTotalUSD: "$115,800 – $124,200",
      totalINR: "₹1.09 Crore – ₹1.17 Crore",
      worldRank: "—",
      countryRank: "—"
    },
  ],
  "Romania": [
    {
      sNo: "1",
      name: "Ovidius University of Constanța",
      tuitionUSD: "~$8,200",
      hostelUSD: "$800 – $1,350",
      foodUSD: "$1,600 – $2,300",
      totalTuitionUSD: "~$49,200",
      grandTotalUSD: "$63,600 – $71,100",
      totalINR: "₹60.10 Lakh – ₹67.18 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "2",
      name: "University of Oradea",
      tuitionUSD: "~$7,150",
      hostelUSD: "$900 – $1,400",
      foodUSD: "$1,500 – $2,000",
      totalTuitionUSD: "~$42,900",
      grandTotalUSD: "$57,300 – $63,300",
      totalINR: "₹54.14 Lakh – ₹59.81 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "3",
      name: "Carol Davila University",
      tuitionUSD: "~$11,000",
      hostelUSD: "$600 – $1,300",
      foodUSD: "$1,900 – $2,500",
      totalTuitionUSD: "~$66,000",
      grandTotalUSD: "$81,000 – $88,800",
      totalINR: "₹76.54 Lakh – ₹83.91 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "4",
      name: "University of Medicine of Craiova",
      tuitionUSD: "~$9,350",
      hostelUSD: "$800 – $1,350",
      foodUSD: "$1,500 – $2,000",
      totalTuitionUSD: "~$56,100",
      grandTotalUSD: "$69,900 – $76,200",
      totalINR: "₹66.05 Lakh – ₹72.00 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "5",
      name: "Victor Babeș University",
      tuitionUSD: "~$9,900",
      hostelUSD: "$900 – $1,400",
      foodUSD: "$1,600 – $2,200",
      totalTuitionUSD: "~$59,400",
      grandTotalUSD: "$74,400 – $81,000",
      totalINR: "₹70.30 Lakh – ₹76.54 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "6",
      name: "Grigore T. Popa University",
      tuitionUSD: "~$11,000",
      hostelUSD: "$900 – $1,500",
      foodUSD: "$1,500 – $2,000",
      totalTuitionUSD: "~$66,000",
      grandTotalUSD: "$80,400 – $87,000",
      totalINR: "₹75.97 Lakh – ₹82.21 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "7",
      name: "Iuliu Hațieganu University",
      tuitionUSD: "~$11,000",
      hostelUSD: "$1,000 – $1,650",
      foodUSD: "$1,800 – $2,400",
      totalTuitionUSD: "~$66,000",
      grandTotalUSD: "$82,800 – $90,300",
      totalINR: "₹78.24 Lakh – ₹85.33 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
  ],

  "Bulgaria": [
    {
      sNo: "1",
      name: "Medical University of Sofia Faculty of Medicine",
      tuitionUSD: "~$10,950",
      hostelUSD: "$1,000 – $1,800",
      foodUSD: "$1,600 – $2,200",
      totalTuitionUSD: "~$65,700",
      grandTotalUSD: "$81,300 – $89,700",
      totalINR: "₹76.82 Lakh – ₹84.76 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "2",
      name: "Medical University of 'Prof. Dr. Paraskev Stoyanov' Varna Faculty of Medicine",
      tuitionUSD: "~$11,000",
      hostelUSD: "$900 – $1,600",
      foodUSD: "$1,500 – $2,000",
      totalTuitionUSD: "~$66,000",
      grandTotalUSD: "$80,400 – $87,600",
      totalINR: "₹75.97 Lakh – ₹82.78 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
    {
      sNo: "3",
      name: "Medical University - Pleven",
      tuitionUSD: "~$9,900",
      hostelUSD: "$850 – $1,200",
      foodUSD: "$1,400 – $1,800",
      totalTuitionUSD: "~$59,400",
      grandTotalUSD: "$72,900 – $77,400",
      totalINR: "₹68.89 Lakh – ₹73.14 Lakh",
      worldRank: "—",
      countryRank: "—"
    },
  ],
};;;

// --- DATA FROM SITE.TS ---
const mbbsCountries = [
  ...[
  {
    "slug": "nepal",
    "name": "Nepal",
    "flag": "🇳🇵",
    "tagline": "High FMGE success & close proximity to India",
    "duration": "5.5 Years",
    "fees": "₹ 66 – 88 Lacs (Total)",
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
    "fees": "₹ 35 – 57 Lacs (Total)",
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
    "fees": "₹ 29 – 92 Lacs (Total)",
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
    "fees": "₹ 27 – 39 Lacs (Total)",
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
    "fees": "₹ 35 – 70 Lacs (Total)",
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
    fees: "₹ 37 – 73 Lacs (Total)",
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
    fees: "₹ 27 – 38 Lacs (Total)",
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
    fees: "₹ 28 – 48 Lacs (Total)",
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
    fees: "₹ 27 – 50 Lacs (Total)",
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
    fees: "₹ 54 – 85 Lacs (Total)",
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
    fees: "₹ 69 – 85 Lacs (Total)",
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
    fees: "₹ 77 – 120 Lacs (Total)",
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
    fees: "₹ 86 – 107 Lacs (Total)",
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
    fees: "₹ 83 – 134 Lacs (Total)",
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
    fees: "₹ 109 – 142 Lacs (Total)",
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


const emergingDestinationSlugs = ["bangladesh", "nepal", "china", "armenia", "st-lucia"];
const primaryDestinationSlugs = [
  "russia",
  "georgia",
  "italy",
  "kazakhstan",
  "uzbekistan",
  "kyrgyzstan",
  "poland",
  "hungary",
  "romania",
  "bulgaria",
  "spain",
  "philippines"
];
const allMbbsDestinations = [...mbbsCountries, ...europeCountries];
const emergingMbbsCountries = emergingDestinationSlugs
  .map(slug => allMbbsDestinations.find(c => c.slug === slug))
  .filter(Boolean);
const primaryMbbsCountries = primaryDestinationSlugs
  .map(slug => allMbbsDestinations.find(c => c.slug === slug))
  .filter(Boolean);

const universities = [
  {
    slug: "alte-university",
    name: "Alte University",
    country: "Georgia",
    flag: "🇬🇪",
    qs: "Strategic Partner",
    fees: "USD 5,000 – 5,500/Year",
    duration: "6 Years",
    language: "English Medium",
    eligibility: ["NEET Qualified", "50% in PCB", "17+ years of age", "Valid passport"],
    hostel: "Student hostel and private accommodation options available near campus.",
    food: "Indian food and self-cooking options available in Tbilisi.",
    recognition: ["NMC", "WHO", "WFME"],
    fmge: "Eligible for FMGE/NExT subject to current NMC guidelines.",
    process: ["Profile evaluation", "Document submission", "Offer letter", "Visa support", "Departure guidance"]
  },
  {
    slug: "avicenna-batumi-medical-university",
    name: "Avicenna Batumi Medical University",
    country: "Georgia",
    flag: "🇬🇪",
    qs: "Strategic Partner",
    fees: "USD 4,000 – 4,900/Year",
    duration: "6 Years",
    language: "English Medium",
    eligibility: ["NEET Qualified", "50% in PCB", "17+ years of age", "Valid passport"],
    hostel: "Assisted accommodation and hostel options for international students.",
    food: "Indian food options and student kitchens available around Batumi.",
    recognition: ["NMC", "WHO", "WFME"],
    fmge: "Eligible for FMGE/NExT subject to current NMC guidelines.",
    process: ["Counselling", "Application", "Admission letter", "Visa processing", "Travel support"]
  },
  {
    slug: "tambov-state-university",
    name: "Tambov State University",
    country: "Russia",
    flag: "🇷🇺",
    qs: "Strategic Partner",
    fees: "USD 3,000 – 3,600/Year",
    duration: "6 Years",
    language: "English Medium",
    eligibility: ["NEET Qualified", "50% in PCB", "17+ years of age", "Valid passport"],
    hostel: "University hostel options with student support facilities.",
    food: "Indian mess support and local food options available.",
    recognition: ["NMC", "WHO"],
    fmge: "Eligible for FMGE/NExT subject to current NMC guidelines.",
    process: ["Free counselling", "Document check", "University offer", "Visa filing", "Fly to Russia"]
  },
  {
    slug: "astrakhan-state-medical-university",
    name: "Astrakhan State Medical University",
    country: "Russia",
    flag: "🇷🇺",
    qs: "Strategic Partner",
    fees: "USD 3,100 – 3,800/Year",
    duration: "6 Years",
    language: "English Medium",
    eligibility: ["NEET Qualified", "50% in PCB", "17+ years of age", "Valid passport"],
    hostel: "University hostel accommodation with essential student amenities.",
    food: "Indian food support and affordable local dining options available.",
    recognition: ["NMC", "WHO"],
    fmge: "Eligible for FMGE/NExT subject to current NMC guidelines.",
    process: ["Counselling", "Application submission", "Offer letter", "Visa", "Departure"]
  },
  {
    slug: "sevastopol-state-university",
    name: "Sevastopol State University",
    country: "Russia",
    flag: "🇷🇺",
    qs: "Strategic Partner",
    fees: "Contact for latest fee",
    duration: "6 Years",
    language: "English Medium",
    eligibility: ["NEET Qualified", "50% in PCB", "17+ years of age", "Valid passport"],
    hostel: "Student accommodation support available.",
    food: "Indian food guidance and local student dining options available.",
    recognition: ["NMC", "WHO"],
    fmge: "Eligible for FMGE/NExT subject to current NMC guidelines.",
    process: ["Profile review", "Application", "Admission confirmation", "Visa guidance", "Pre-departure support"]
  },
  {
    slug: "brookestone-international-university",
    name: "Brookestone International University",
    country: "Georgia",
    flag: "🇬🇪",
    qs: "Strategic Partner",
    fees: "Contact for latest fee",
    duration: "6 Years",
    language: "English Medium",
    eligibility: ["NEET Qualified", "50% in PCB", "17+ years of age", "Valid passport"],
    hostel: "Assisted hostel/private accommodation options available.",
    food: "Indian food and self-cooking support available.",
    recognition: ["NMC", "WHO"],
    fmge: "Eligible for FMGE/NExT subject to current NMC guidelines.",
    process: ["Counselling", "Documents", "Offer letter", "Visa support", "Departure"]
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
  { title: "Study in Germany", icon: "map", desc: "Priority study abroad counselling for Germany: public universities, APS, blocked account, visa and job-seeker pathway." },
  { title: "MBA in Dubai / UAE", icon: "briefcase", desc: "Priority Dubai admissions in top business schools with paid internships, post-study work visa and PR pathway." },
  { title: "MBBS Abroad Counseling", icon: "stethoscope", desc: "Free personalized MBBS abroad guidance with country & university comparison, fee structure and eligibility check." },
  { title: "MBBS in Europe", icon: "globe", desc: "Admission in EU universities including Italy, Romania, Bulgaria, Czech, Slovakia, Spain and Hungary." },
  { title: "Visa Assistance", icon: "file-check", desc: "End-to-end visa documentation, SOP, LOR, financial planning and interview preparation." },
  { title: "IELTS / PTE / OET Coaching", icon: "book-open", desc: "Live & classroom coaching for IELTS, PTE and OET with mock tests and band-score improvement." },
  { title: "Scholarship Guidance", icon: "award", desc: "Help apply for merit-based, need-based and country-specific scholarships up to 100% tuition coverage." },
  { title: "SOP & LOR Writing", icon: "pen-tool", desc: "Admission-winning SOP, LOR, essays and personal statements tailored to top global universities." },
  { title: "Loan Assistance", icon: "wallet", desc: "Tie-ups with leading banks for collateral and non-collateral education loans at lowest interest rates." },
  { title: "NExT / FMGE Coaching", icon: "graduation-cap", desc: "Targeted coaching for FMGE/NExT screening test for students returning from abroad medical universities." },
  { title: "Hostel & Accommodation", icon: "home", desc: "Verified hostel, PG and apartment bookings near university campuses with Indian food option." },
  { title: "Pre-departure Briefing", icon: "plane", desc: "Packing, currency, culture, SIM, banking and airport pickup arrangements before you fly." }
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
  { slug: "germany", title: "Study in Germany", tagline: "Priority destination: tuition-free public universities, job seeker visa & PR pathway", fees: "₹ 0 – 8 Lacs", duration: "2 Years (PG)", priority: true },
  { slug: "mba-in-dubai", title: "MBA in Dubai / UAE", tagline: "Priority program: 1-year MBA with paid internships, post-study visa & PR pathway", fees: "₹ 12 – 25 Lacs", duration: "12 – 24 Months", priority: true },
  { slug: "canada", title: "Study in Canada", tagline: "Secondary option: PGWP pathway, permanent residency & world-class universities", fees: "₹ 15 – 30 Lacs", duration: "1 – 2 Years" },
  { slug: "usa", title: "Study in USA", tagline: "Secondary option: top-ranked universities, STEM programs & post-study OPT", fees: "₹ 25 – 60 Lacs", duration: "1 – 2 Years" }
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
  campus: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400",
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
  "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400",
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
  "alte-university": "univ-alte-university.jpg",
  "avicenna-batumi-medical-university": "univ-avicenna-batumi.jpg",
  "tambov-state-university": "univ-tambov-state.jpg",
  "astrakhan-state-medical-university": "univ-astrakhan-state.jpg",
  "sevastopol-state-university": "univ-sevastopol-state.jpg",
  "brookestone-international-university": "univ-brookestone-international.jpg"
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

// Global page wrap template (uses shared header.html / footer.html partials).
//
// Header and footer are NOT inlined into every generated page anymore.
// Instead we emit <div data-include="header.html"></div> and
// <div data-include="footer.html"></div> placeholders. The browser fills
// them at runtime via /js/includes.js. So: edit header.html or footer.html
// once and every page updates automatically - no rebuild needed for those.
function wrapPage(content, title, subtitle, filepath, activeMenu = "") {
  const root = getRootPrefix(filepath);

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

  <!-- Header (shared partial: filled at runtime from /header.html) -->
  <div data-include="header.html"></div>

  <main class="flex-1">
    ${content}
  </main>

  <!-- Footer (shared partial: filled at runtime from /footer.html) -->
  <div data-include="footer.html"></div>

  <!-- Includes loader fetches header.html + footer.html, then script.js runs -->
  <script src="${root}js/includes.js"></script>
  <script src="${root}script.js"></script>
</body>
</html>`;
}


// Contact Form Template Component
function getContactFormHTML() {
  return `<form id="counseling-form" class="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 space-y-4">
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
function getEmergingDestinationsCardHTML(root, index = 0) {
  return `<a href="${root}mbbs-abroad/emerging-destinations" class="group relative block rounded-[2rem] overflow-hidden bg-slate-900 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-up" style="transition-delay: ${(index % 4) * 80}ms">
    <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1400" alt="Emerging MBBS Destinations" loading="lazy" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1500ms] ease-out" />
    <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-900/10"></div>
    <div class="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-transparent to-green-900/40"></div>
    <div class="relative p-6 sm:p-7 min-h-[360px] flex flex-col">
      <div class="flex items-start justify-between gap-4">
        <div class="text-5xl sm:text-6xl leading-none drop-shadow-2xl text-white">🇧🇩 🇳🇵<br><span class="text-4xl sm:text-5xl">🇨🇳 🇦🇲 🇱🇨</span></div>
        <span class="inline-flex items-center gap-1 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-xl animate-pulse">NEW</span>
      </div>
      <div class="mt-auto">
        <div class="inline-block text-[10px] sm:text-xs tracking-[0.2em] font-extrabold text-green-300 uppercase mb-2">MBBS Abroad</div>
        <h3 class="text-3xl sm:text-4xl font-extrabold text-white leading-[1.1] drop-shadow-lg">Emerging Destinations</h3>
        <p class="mt-2 text-sm sm:text-base text-white/90 leading-snug max-w-sm drop-shadow">Bangladesh, Nepal, China, Armenia and St. Lucia grouped under one clean destination hub.</p>
        <div class="mt-5 flex flex-wrap gap-2 max-w-sm">
          ${emergingMbbsCountries.map(c => `<span class="bg-white/10 backdrop-blur border border-white/20 rounded-full px-3 py-1 text-xs font-bold text-white">${c.name}</span>`).join("")}
        </div>
        <div class="mt-6 inline-flex items-center gap-2 bg-white text-slate-900 font-bold text-sm px-5 py-3 rounded-full shadow-xl group-hover:bg-green-400 group-hover:text-slate-900 transition-colors">
          View Destinations <i data-lucide="arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform"></i>
        </div>
      </div>
    </div>
  </a>`;
}

function getPrimaryDestinationCardsHTML(root) {
  return [
    ...primaryMbbsCountries.map((c, i) => getCountryCardHTML(c, root, i)),
    getEmergingDestinationsCardHTML(root, primaryMbbsCountries.length)
  ].join("");
}

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
  const image = imageName.startsWith("http") ? imageName : root + imageName;
  return `<a href="${root}mbbs-abroad/${c.slug}" class="group relative block rounded-[2rem] overflow-hidden bg-slate-900 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-up ${c.slug === "russia" ? "ring-4 ring-green-400 ring-offset-4" : ""}" style="transition-delay: ${(index % 4) * 80}ms">
    <img src="${image}" alt="MBBS in ${c.name}" loading="lazy" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1500ms] ease-out" />
    <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-900/10"></div>
    <div class="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-transparent to-green-900/40"></div>
    <div class="relative p-6 sm:p-7 min-h-[360px] flex flex-col">
      <div class="flex items-start justify-between">
        <div class="text-6xl sm:text-7xl font-extrabold text-white drop-shadow-2xl">${c.flag}</div>
        ${c.slug === "russia" ? `
          <span class="inline-flex items-center gap-1 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-xl animate-pulse">
            🔥 Currently Recruiting
          </span>
        ` : `
          <span class="inline-flex items-center gap-1 bg-white text-blue-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-xl">
            ${c.duration}
          </span>
        `}
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
            <a href="https://wa.me/919540302032" class="btn-shine inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg animate-pulse-soft text-lg">
              💬 Chat on WhatsApp <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </a>
            <a href="${root}contact" class="btn-shine inline-flex items-center gap-2 bg-white text-blue-900 font-bold px-7 py-3.5 rounded-full hover:shadow-2xl hover:-translate-y-0.5 transition-all">
              Get Free Counseling
            </a>
            <a href="tel:+919540302032" class="btn-shine inline-flex items-center gap-2 bg-white hover:bg-blue-50 text-blue-900 font-bold px-7 py-3.5 rounded-full transition-all shadow-lg">
              <i data-lucide="phone" class="w-4 h-4"></i> +91 95403 02032
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
          <a href="${root}pricing#why-truemark-edu" class="inline-block bg-green-100 text-green-700 text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full hover:bg-green-200 transition">Why TrueMark Edu</a>
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
          ${getPrimaryDestinationCardsHTML(root)}
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
            <a href="${root}mbbs-abroad" class="mt-10 inline-flex items-center gap-2 bg-white text-blue-900 font-bold px-7 py-3.5 rounded-full hover:shadow-2xl transition-all w-fit">
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
          <span class="inline-block bg-green-100 text-green-700 text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full">Featured Universities</span>
          <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4">Strategic Medical Universities</h2>
          <p class="text-slate-600 mt-4 text-lg">Focused partner university shortlist including Alte, Avicenna, Tambov, Astrakhan, Sevastopol and Brookestone.</p>
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
          <a href="${root}mbbs-abroad/italy" class="mt-10 inline-flex items-center gap-2 bg-gradient-to-r from-blue-700 to-green-600 text-white font-bold px-7 py-3.5 rounded-full hover:shadow-2xl transition-all">
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

    <!-- Success Stories -->
    <section class="py-24 bg-gradient-to-b from-white to-slate-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <span class="inline-block bg-green-100 text-green-700 text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full">Success Stories</span>
          <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4">From Dream to Doctor</h2>
          <p class="text-slate-600 mt-4 text-lg">Real students. Real journeys. See how TrueMark Edu turned aspirations into white coats across 15+ countries.</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${[
            { flag: "🇬🇪", name: "Priya Nair", uni: "Tbilisi State Medical University", country: "Georgia", badge: "Admitted 2023", quote: "I scored 480 in NEET but could not get a government seat. TrueMark Edu guided me to Georgia — zero donation, transparent fees, and they even met me at Tbilisi airport. Now I am in my 3rd year and loving every moment!", from: "Kerala", to: "Tbilisi, Georgia", gradient: "from-blue-700 to-green-600", bg: "from-blue-100 to-green-100" },
            { flag: "🇮🇹", name: "Arjun Mehta", uni: "Sapienza University of Rome", country: "Italy", badge: "IMAT 2024", quote: "Cracking IMAT seemed impossible, but TrueMark coaching material and mock tests were game-changers. I got into Sapienza Rome with almost zero tuition! Annual fee less than ₹2 Lakhs. Dream come true!", from: "Delhi", to: "Rome, Italy", gradient: "from-green-600 to-yellow-500", bg: "from-green-100 to-yellow-100" },
            { flag: "🇺🇿", name: "Fatima Khan", uni: "Samarkand State Medical Institute", country: "Uzbekistan", badge: "Admitted 2022", quote: "My family could not afford ₹80L+ for private MBBS in India. TrueMark showed us Uzbekistan — total cost under ₹25 Lakhs! Indian mess, hostel, and clinical exposure are excellent. Best decision ever.", from: "Lucknow", to: "Samarkand, Uzbekistan", gradient: "from-yellow-500 to-red-500", bg: "from-yellow-100 to-red-100" },
            { flag: "🇨🇿", name: "Rohan Kapoor", uni: "University of Ostrava", country: "Czech Republic", badge: "Graduated 2025", quote: "Ostrava clinical training is world-class. TrueMark prepared me for the entrance exam and handled all EU documentation. I just graduated and cleared NExT in first attempt! The 6-year support abroad was invaluable.", from: "Mumbai", to: "Ostrava, Czech Republic", gradient: "from-purple-600 to-blue-600", bg: "from-purple-100 to-blue-100" },
            { flag: "🇷🇴", name: "Ananya Singh", uni: "Carol Davila University, Bucharest", country: "Romania", badge: "Admitted 2023", quote: "As a female student, safety was my top priority. Romania is incredibly safe, and TrueMark female student support network made the transition seamless. Carol Davila is one of Europe oldest medical schools — proud to be here!", from: "Jaipur", to: "Bucharest, Romania", gradient: "from-blue-600 to-purple-600", bg: "from-blue-100 to-purple-100" },
            { flag: "🇰🇿", name: "Amanpreet Gill", uni: "Kazakh National Medical University", country: "Kazakhstan", badge: "Final Year", quote: "Kazakhstan was a hidden gem TrueMark revealed to us. Top-ranked government university, modern labs, amazing clinical exposure — all under ₹35 Lakhs total. TrueMark NExT coaching helped me prepare alongside my studies.", from: "Amritsar", to: "Almaty, Kazakhstan", gradient: "from-green-600 to-blue-600", bg: "from-green-100 to-blue-100" }
          ].map((s, i) => `
            <div class="group relative bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-fade-up" style="transition-delay: ${(i % 3) * 100}ms">
              <div class="h-2 bg-gradient-to-r ${s.gradient}"></div>
              <div class="p-8">
                <div class="flex items-center gap-4 mb-6">
                  <div class="w-16 h-16 rounded-full bg-gradient-to-br ${s.bg} flex items-center justify-center text-3xl shadow-md">${s.flag}</div>
                  <div>
                    <div class="font-extrabold text-slate-900 text-lg">${s.name}</div>
                    <div class="text-sm text-green-700 font-semibold">${s.uni}</div>
                  </div>
                </div>
                <div class="flex items-center gap-2 mb-4">
                  <span class="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">${s.country}</span>
                  <span class="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">${s.badge}</span>
                </div>
                <p class="text-slate-700 leading-relaxed">“${s.quote}”</p>
                <div class="mt-6 pt-5 border-t border-slate-100 flex items-center gap-2 text-sm text-slate-500">
                  <i data-lucide="map-pin" class="w-4 h-4 text-green-600"></i>
                  <span>${s.from} → ${s.to}</span>
                </div>
              </div>
            </div>
          `).join("")}
        </div>

        <div class="text-center mt-14 animate-fade-up">
          <a href="https://wa.me/919540302032" class="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-full hover:shadow-2xl transition-all text-lg">
            💬 Start Your Success Story on WhatsApp <i data-lucide="arrow-right" class="w-5 h-5"></i>
          </a>
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
            💬 Chat on WhatsApp <i data-lucide="arrow-right" class="w-5 h-5"></i>
          </a>
          <a href="${root}contact" class="inline-flex items-center gap-2 bg-white text-blue-900 font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:-translate-y-1 transition-all text-lg">
            Book Free Counseling
          </a>
          <a href="tel:+919540302032" class="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/30 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full transition-all text-lg">
            <i data-lucide="phone" class="w-5 h-5"></i> Call +91 95403 02032
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
    
    <!-- WHY TRUEMARK EDU TRUST SECTION -->
    <section id="why-truemark-edu" class="py-20 bg-slate-50 border-b border-slate-200 font-sans">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span class="inline-block bg-green-100 text-green-700 text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full">Why TrueMark Edu</span>
            <h2 class="text-3xl md:text-5xl font-extrabold text-slate-900 mt-4 leading-tight">Built on transparent guidance and real student support</h2>
            <p class="text-slate-600 mt-5 text-lg leading-relaxed">Our INFO page is designed to make every important cost, process and service clear before a student commits. Families get honest counselling, documented fee guidance, and support that continues from admission to arrival abroad.</p>
            <div class="mt-8 flex flex-wrap gap-4">
              <a href="${root}pricing#why-truemark-edu" class="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-full shadow-lg transition">View INFO Details <i data-lucide="arrow-right" class="w-4 h-4"></i></a>
              <a href="${root}contact" class="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-900 font-bold px-6 py-3 rounded-full hover:shadow-lg transition">Talk to a Counsellor</a>
            </div>
          </div>
          <div class="grid sm:grid-cols-2 gap-5">
            ${[
              { icon: "eye", color: "bg-blue-50 text-blue-700", title: "No Hidden Charges", desc: "Clear consultancy, OTC and package details so parents can plan confidently." },
              { icon: "shield-check", color: "bg-green-50 text-green-700", title: "Direct Admission Focus", desc: "University-first recommendations with no donation or capitation promises." },
              { icon: "headphones", color: "bg-yellow-100 text-yellow-800", title: "End-to-End Support", desc: "Documentation, visa, travel, airport pickup and on-ground settling assistance." },
              { icon: "users", color: "bg-slate-100 text-slate-800", title: "Family-First Communication", desc: "Regular updates and accessible counsellors throughout the admission journey." }
            ].map(item => `
              <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition">
                <div class="inline-flex p-3 ${item.color} rounded-xl"><i data-lucide="${item.icon}" class="w-7 h-7"></i></div>
                <h3 class="text-lg font-bold text-slate-900 mt-4">${item.title}</h3>
                <p class="text-slate-600 text-sm mt-2 leading-relaxed">${item.desc}</p>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    </section>
    
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
    ${getPageHeroHTML("Why TrueMark Edu", "Honest guidance. Transparent processes. Student-first counselling. The story, meaning, and principles behind every recommendation we make.", [{ name: "Home", to: `${root}index` }, { name: "Why TrueMark Edu" }])}

    <!-- SECTION 1: Why We Started TrueMark Edu (Image + Content) -->
    <section class="py-20 font-sans bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="order-2 lg:order-1 relative">
            <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop&q=80" alt="Student counselling session at TrueMark Edu" class="rounded-3xl shadow-2xl w-full h-[480px] object-cover" />
            <div class="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-xl hidden md:block">
              <div class="text-3xl font-extrabold text-blue-700">10+</div>
              <div class="text-slate-600 text-xs font-semibold">Years of Counselling</div>
            </div>
          </div>
          <div class="order-1 lg:order-2">
            <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900">Why We Started TrueMark Edu</h2>
            <div class="space-y-4 mt-6 text-slate-700 leading-relaxed">
              <p>
                After spending years counselling students and working within the international education industry, we noticed a recurring pattern.
              </p>
              <p>
                Students often received information, but not always guidance.
              </p>
              <p>
                Many families struggled to understand the difference between universities, fee structures, admission processes, visa requirements, and long-term career outcomes. Important decisions were sometimes reduced to rankings, commissions, or whichever destination was trending at the time.
              </p>
              <p class="font-semibold text-slate-900">
                We believed students deserved something better.
              </p>
              <p>
                That belief became the foundation of TrueMark Edu.
              </p>
              <p>
                We created TrueMark Edu to provide honest, transparent, and personalised guidance that helps students make informed decisions about their future.
              </p>
              <p class="font-medium text-blue-900">
                Because studying abroad is not simply about getting an admission letter. It\'s about choosing a path that aligns with a student\'s ambitions, circumstances, and long-term goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2: Why the Name "TrueMark" (Content + Image) -->
    <section class="py-20 font-sans bg-slate-50 border-t border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900">Why the Name &ldquo;TrueMark&rdquo;</h2>
            <div class="space-y-4 mt-6 text-slate-700 leading-relaxed">
              <p>
                Every student\'s educational journey leaves a mark on their future.
              </p>
              <p>
                We wanted that mark to be based on clarity, confidence, and the right decisions.
              </p>
              <p>
                The word &ldquo;True&rdquo; reflects our commitment to honest advice, transparent processes, and student-first counselling.
              </p>
              <p>
                The word &ldquo;Mark&rdquo; represents achievement, progress, and meaningful outcomes.
              </p>
              <p>
                Together, TrueMark represents our belief that the right guidance can leave a lasting and positive mark on a student\'s future.
              </p>
            </div>

            <div class="mt-8 p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl border border-slate-200">
              <p class="text-slate-700 font-semibold">Our promise is simple:</p>
              <p class="text-2xl md:text-3xl font-extrabold mt-2 text-blue-900">True guidance. Global destinations.</p>
            </div>
          </div>
          <div class="relative">
            <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop&q=80" alt="Signature representing TrueMark brand identity" class="rounded-3xl shadow-2xl w-full h-[480px] object-cover" />
            <div class="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl hidden md:block">
              <div class="text-2xl font-extrabold text-green-700">True + Mark</div>
              <div class="text-slate-600 text-xs font-semibold">Our identity</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3: What We Learned From Years of Counselling (Image + Content) -->
    <section class="py-20 font-sans bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="relative">
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop&q=80" alt="Students navigating study abroad information" class="rounded-3xl shadow-2xl w-full h-[480px] object-cover" />
            <div class="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-xl hidden md:block">
              <div class="text-3xl font-extrabold text-blue-700">5</div>
              <div class="text-slate-600 text-xs font-semibold">Common Challenges</div>
            </div>
          </div>
          <div>
            <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900">What We Learned From Years of Counselling</h2>
            <div class="space-y-4 mt-6 text-slate-700 leading-relaxed">
              <p>
                Over the years, we have counselled students interested in MBBS abroad, European universities, international business programmes, and study destinations across multiple countries.
              </p>
              <p class="font-semibold text-slate-900">
                Along the way, we observed several common challenges:
              </p>
              <ul class="space-y-3 text-slate-700">
                <li class="flex items-start gap-3"><i data-lucide="alert-circle" class="w-5 h-5 text-amber-500 shrink-0 mt-1"></i><span>Students overwhelmed by conflicting information online.</span></li>
                <li class="flex items-start gap-3"><i data-lucide="alert-circle" class="w-5 h-5 text-amber-500 shrink-0 mt-1"></i><span>Families unsure about the true cost of studying abroad.</span></li>
                <li class="flex items-start gap-3"><i data-lucide="alert-circle" class="w-5 h-5 text-amber-500 shrink-0 mt-1"></i><span>Universities being recommended without considering a student\'s goals.</span></li>
                <li class="flex items-start gap-3"><i data-lucide="alert-circle" class="w-5 h-5 text-amber-500 shrink-0 mt-1"></i><span>Limited clarity around visa processes and post-study opportunities.</span></li>
                <li class="flex items-start gap-3"><i data-lucide="alert-circle" class="w-5 h-5 text-amber-500 shrink-0 mt-1"></i><span>A lack of personalised counselling for students with unique academic profiles.</span></li>
              </ul>
              <p class="mt-4">
                These experiences shaped how we work today.
              </p>
              <p>
                At TrueMark Edu, we focus on understanding the student before recommending a destination.
              </p>
              <div class="mt-6 p-5 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl border border-slate-200">
                <p class="text-slate-700 font-medium italic text-center">
                  Because the best university isn\'t necessarily the most famous one.
                </p>
                <p class="text-slate-900 font-bold text-lg mt-2 text-center">
                  It\'s the one that\'s right for the student.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 4: Our Principles (Content + Image with 4 cards on content side) -->
    <section class="py-20 font-sans bg-slate-50 border-t border-slate-100">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900">Our Principles</h2>
            <p class="text-slate-600 mt-4 leading-relaxed">
              These four principles guide every conversation, every recommendation, and every decision we help you make.
            </p>

            <div class="space-y-5 mt-8">
              <div class="p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-xl transition">
                <div class="flex items-start gap-4">
                  <div class="shrink-0 inline-flex p-3 bg-blue-50 text-blue-700 rounded-xl"><i data-lucide="eye" class="w-6 h-6"></i></div>
                  <div>
                    <h3 class="text-lg font-bold text-slate-900">Transparency First</h3>
                    <p class="text-slate-600 text-sm mt-1 leading-relaxed">We believe students should understand every cost, requirement, and process before making a commitment.</p>
                  </div>
                </div>
              </div>

              <div class="p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-xl transition">
                <div class="flex items-start gap-4">
                  <div class="shrink-0 inline-flex p-3 bg-green-50 text-green-700 rounded-xl"><i data-lucide="user-check" class="w-6 h-6"></i></div>
                  <div>
                    <h3 class="text-lg font-bold text-slate-900">Student-Centric Advice</h3>
                    <p class="text-slate-600 text-sm mt-1 leading-relaxed">Recommendations should fit the student, not the other way around.</p>
                  </div>
                </div>
              </div>

              <div class="p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-xl transition">
                <div class="flex items-start gap-4">
                  <div class="shrink-0 inline-flex p-3 bg-purple-50 text-purple-700 rounded-xl"><i data-lucide="compass" class="w-6 h-6"></i></div>
                  <div>
                    <h3 class="text-lg font-bold text-slate-900">Long-Term Thinking</h3>
                    <p class="text-slate-600 text-sm mt-1 leading-relaxed">We look beyond admissions and consider career goals, future opportunities, and academic success.</p>
                  </div>
                </div>
              </div>

              <div class="p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-xl transition">
                <div class="flex items-start gap-4">
                  <div class="shrink-0 inline-flex p-3 bg-amber-50 text-amber-700 rounded-xl"><i data-lucide="heart-handshake" class="w-6 h-6"></i></div>
                  <div>
                    <h3 class="text-lg font-bold text-slate-900">Personal Support</h3>
                    <p class="text-slate-600 text-sm mt-1 leading-relaxed">We remain accessible throughout the journey, from counseling till you graduate.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="relative lg:sticky lg:top-24">
            <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=900&fit=crop&q=80" alt="Personal guidance and support" class="rounded-3xl shadow-2xl w-full h-[600px] object-cover" />
            <div class="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl hidden md:block">
              <div class="text-2xl font-extrabold text-blue-700">4 Principles</div>
              <div class="text-slate-600 text-xs font-semibold">We never compromise</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- LEADERSHIP SECTION (kept) -->
    <section class="py-20 bg-white font-sans border-t border-slate-100">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900">Meet The Leadership</h2>
        <p class="text-slate-600 mt-4 max-w-2xl mx-auto">Our founders and counselors bring decades of combined experience in overseas education.</p>
        <div class="grid md:grid-cols-2 gap-8 mt-10 max-w-4xl mx-auto">
          <div class="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-xl transition">
            <img src="team-anandita.jpg" alt="Anandita Jitt" class="w-24 h-24 rounded-full object-cover mx-auto border-2 border-green-600 shadow-md" />
            <h3 class="text-xl font-bold text-slate-900 mt-4">Anandita Jitt</h3>
            <div class="text-sm text-green-700 font-semibold">Founder & University Relations</div>
            <p class="text-slate-600 text-sm mt-3">10+ years of experience in overseas MBBS admissions. Managing top university relations and admissions across Europe and Georgia.</p>
            <a href="tel:+919540302093" class="text-sm text-blue-700 mt-3 inline-block">+91 95403 02093</a>
          </div>
          <div class="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-xl transition">
            <img src="team-haider.jpg" alt="Haidar Ali" class="w-24 h-24 rounded-full object-cover mx-auto border-2 border-green-600 shadow-md" />
            <h3 class="text-xl font-bold text-slate-900 mt-4">Haidar Ali</h3>
            <div class="text-sm text-green-700 font-semibold">Co-founder & Europe MBBS Expert</div>
            <p class="text-slate-600 text-sm mt-3">8+ years of experience in EdTech, Europe MBBS expert. Handling visa documentation, university partnerships and on-ground student support across Europe and Central Asia.</p>
            <a href="tel:+919540302032" class="text-sm text-blue-700 mt-3 inline-block">+91 95403 02032</a>
          </div>
        </div>
      </div>
    </section>

    <!-- International Office (kept) -->
    <section class="py-20 bg-slate-50 font-sans border-t border-slate-100">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900">Our International Office</h2>
        <p class="text-slate-600 mt-4 max-w-2xl mx-auto">Visit us at our Europe office in the heart of Madrid, Spain.</p>
        <div class="mt-10 max-w-xl mx-auto">
          <div class="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-green-50 border border-slate-200 hover:shadow-xl transition text-center">
            <div class="inline-flex p-4 bg-white text-blue-700 rounded-2xl shadow-sm"><i data-lucide="map-pin" class="w-8 h-8"></i></div>
            <div class="text-4xl mt-4">🇪🇸</div>
            <h3 class="text-xl font-bold text-slate-900 mt-3">Study in Spain Guide</h3>
            <p class="text-slate-600 mt-2 text-sm">Our Madrid office serves students pursuing MBBS and medical PG opportunities across Spain, including the University of Barcelona, Autonomous University of Madrid, and University of Navarra.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA SECTION -->
    <section class="py-20 bg-gradient-to-r from-blue-800 to-green-700 text-white font-sans">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-extrabold">Have questions about studying abroad?</h2>
        <p class="mt-4 text-white/90 text-lg">Talk to our counsellors for honest, personalised guidance tailored to your goals.</p>
        <a href="${root}contact" class="mt-6 inline-flex items-center bg-white text-blue-800 font-semibold px-6 py-3 rounded-full hover:shadow-xl transition">Book Free Counselling <i data-lucide="arrow-right" class="w-4 h-4 ml-1"></i></a>
      </div>
    </section>
  `;
  return wrapPage(content, "Why TrueMark Edu - Study Abroad Consultancy", "Learn why TrueMark Edu exists: our story, what the name means, lessons from years of counselling, and the principles that guide every student interaction.", "about.html", "about");
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
                <p class="text-sm text-slate-600">Anandita Jitt: <a href="tel:+919540302093" class="text-blue-700 hover:text-green-600">+91 95403 02093</a></p>
                <p class="text-sm text-slate-600">Haidar Ali: <a href="tel:+919540302032" class="text-blue-700 hover:text-green-600">+91 95403 02032</a></p>
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
    ${getPageHeroHTML("Featured Medical Universities", "Focused strategic universities for MBBS admissions including Alte, Avicenna, Tambov, Astrakhan, Sevastopol and Brookestone.", [{ name: "Home", to: `${root}index` }, { name: "Universities" }])}
    
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
  return wrapPage(content, "Featured Medical Universities", "Strategic partner universities with focused MBBS admission guidance.", "universities.html", "universities");
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
            ${getPrimaryDestinationCardsHTML(root)}
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


function buildEmergingDestinations(root) {
  const content = `
    ${getPageHeroHTML("MBBS Abroad Emerging Destinations", "Explore Bangladesh, Nepal, China, Armenia and St. Lucia under one dedicated destination hub for Indian medical aspirants.", [{ name: "Home", to: `${root}index` }, { name: "MBBS Abroad", to: `${root}mbbs-abroad` }, { name: "Emerging Destinations" }])}

    <section class="py-20 bg-white font-sans">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <span class="inline-block bg-green-100 text-green-700 text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full">New Category</span>
          <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3">Emerging MBBS Abroad Destinations</h2>
          <p class="text-slate-600 mt-4 leading-relaxed">These destinations are grouped separately to keep the MBBS Abroad URL taxonomy clean while still giving students access to country-specific details, fees, eligibility and admission support.</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${emergingMbbsCountries.map((c, i) => getCountryCardHTML(c, root, i)).join("")}
        </div>

        <div class="mt-14 rounded-3xl bg-gradient-to-br from-blue-50 to-green-50 border border-slate-200 p-8 md:p-10 grid lg:grid-cols-3 gap-8 items-center">
          <div class="lg:col-span-2">
            <h3 class="text-2xl md:text-3xl font-extrabold text-slate-900">Not sure which emerging destination fits your budget?</h3>
            <p class="text-slate-600 mt-3 leading-relaxed">Talk to TrueMark Edu for free counselling and compare admission process, fees, FMGE/NExT suitability, living cost and documentation requirements.</p>
          </div>
          <div class="flex flex-col sm:flex-row lg:flex-col gap-3">
            <a href="${root}contact" class="inline-flex justify-center items-center gap-2 bg-blue-700 text-white font-bold px-6 py-3 rounded-full hover:bg-blue-800 transition">Free Counselling <i data-lucide="arrow-right" class="w-4 h-4"></i></a>
            <a href="https://wa.me/919540302032" target="_blank" class="inline-flex justify-center items-center gap-2 bg-green-500 text-white font-bold px-6 py-3 rounded-full hover:bg-green-600 transition">WhatsApp Now <i data-lucide="message-circle" class="w-4 h-4"></i></a>
          </div>
        </div>
      </div>
    </section>
  `;
  return wrapPage(content, "MBBS Abroad Emerging Destinations", "Compare emerging MBBS abroad destinations including Bangladesh, Nepal, China, Armenia and St. Lucia.", "mbbs-abroad/emerging-destinations.html", "mbbs-abroad");
}

// 8. (REMOVED) MBBS in Europe overview - now unified under MBBS Abroad
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
            <a href="${root}mbbs-abroad/italy" class="mt-5 inline-flex items-center bg-white text-blue-800 font-bold px-6 py-3 rounded-full hover:shadow-xl transition btn-shine">MBBS in Italy <i data-lucide="arrow-right" class="w-4 h-4 ml-2"></i></a>
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
    ${getPageHeroHTML("Study Abroad Programs", "Priority admissions for Germany and Dubai, with Canada and USA as secondary options — scholarships, visa and pre-departure support included.", [{ name: "Home", to: `${root}index` }, { name: "Study Abroad" }])}
    
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2 space-y-8">
          <div class="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-green-50 border border-slate-200">
            <div class="inline-flex items-center gap-2 bg-white text-blue-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm mb-3">Business Priority</div>
            <h2 class="text-3xl font-extrabold text-slate-900">Germany & Dubai Focused Study Abroad Guidance</h2>
            <p class="text-slate-600 mt-3 leading-relaxed">Based on current business goals, Germany and Dubai are highlighted first with stronger CTAs and counselling focus. Canada and USA remain available as secondary options.</p>
            <ul class="grid md:grid-cols-2 gap-2 mt-5 text-slate-700">
              ${["Germany APS, blocked account & public university guidance", "Dubai MBA admissions with internship pathway", "Scholarships up to 100% tuition", "SOP, LOR & profile building", "Loan assistance", "Post-study work visa guidance"].map(p => `
                <li class="flex items-start gap-2"><i data-lucide="check-circle" class="w-5 h-5 text-green-600 shrink-0 mt-0.5"></i> ${p}</li>
              `).join("")}
            </ul>
          </div>
          <div class="grid md:grid-cols-2 gap-6 font-sans">
            ${programs.map((p, i) => {
              const imageByProgram = {
                germany: IMG.classroom,
                "mba-in-dubai": IMG.dubai,
                canada: IMG.campus,
                usa: IMG.university
              };
              const image = imageByProgram[p.slug] || IMG.classroom;
              const priorityClasses = p.priority ? "border-2 border-blue-600 shadow-xl ring-4 ring-blue-50" : "border border-slate-200";
              return `
              <a href="${root}study-abroad/${p.slug}" class="group bg-white rounded-3xl ${priorityClasses} hover:shadow-2xl hover:-translate-y-1 transition-all overflow-hidden block">
                <div class="h-52 overflow-hidden relative">
                  <img src="${image}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  ${p.priority ? `<div class="absolute top-4 left-4 bg-green-400 text-slate-900 text-xs font-extrabold px-3 py-1.5 rounded-full shadow-md uppercase tracking-wide">Priority Destination</div>` : `<div class="absolute top-4 left-4 bg-white/90 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-md">Secondary Option</div>`}
                  <div class="absolute bottom-4 left-4 bg-white/90 backdrop-blur text-blue-900 text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    ${p.duration}
                  </div>
                </div>
                <div class="p-6">
                  <h3 class="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition">${p.title}</h3>
                  <p class="text-sm text-slate-600 mt-2 leading-relaxed">${p.tagline}</p>
                  <div class="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-sm">
                    <div><span class="text-slate-500">Fees:</span> <b class="text-slate-900">${p.fees}</b></div>
                    <div class="text-blue-700 font-bold inline-flex items-center gap-1 group-hover:gap-2 transition-all">${p.priority ? "Apply Now" : "Explore"} <i data-lucide="arrow-right" class="w-4 h-4"></i></div>
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
  return wrapPage(content, "Study Abroad Programs", "Priority Germany and Dubai study abroad admissions with visa, scholarship and pre-departure support.", "study-abroad.html", "study-abroad");
}

// 10. DYNAMIC COUNTRY PAGE (mbbs-abroad/[country].html) - all countries unified
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
    ${getPageHeroHTML(`MBBS in ${country.name}`, country.tagline, [{ name: "Home", to: `${root}index` }, { name: "MBBS Abroad", to: variant === "europe" ? `${root}mbbs-abroad` : `${root}mbbs-abroad` }, { name: country.name }])}
    
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4">
        <a href="${variant === "europe" ? `${root}mbbs-abroad` : `${root}mbbs-abroad`}" class="text-blue-700 inline-flex items-center gap-2 mb-8 text-sm"><i data-lucide="arrow-left" class="w-4 h-4"></i> Back</a>

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

            <!-- FEATURED PARTNER UNIVERSITIES WITH LINKS -->
            ${(() => {
              const countryUnis = universities.filter(u => u.country.toLowerCase() === country.name.toLowerCase());
              if (countryUnis.length === 0) return '';
              return `
              <div class="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-green-50 border border-blue-200">
                <div class="flex items-center gap-3 mb-6">
                  <div class="p-3 bg-yellow-100 text-yellow-800 rounded-xl"><i data-lucide="award" class="w-6 h-6"></i></div>
                  <div>
                    <h2 class="text-2xl font-bold text-slate-900">Our Strategic Partner Universities in ${country.name}</h2>
                    <p class="text-slate-600 text-sm mt-1">Click to view detailed admission info, fees, eligibility and process.</p>
                  </div>
                </div>
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  ${countryUnis.map((u, i) => `
                    <a href="${root}universities/${u.slug}" class="group bg-white rounded-2xl border border-slate-200 hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 p-5">
                      <div class="flex items-center gap-3 mb-3">
                        <span class="text-3xl">${u.flag}</span>
                        <span class="bg-yellow-400 text-slate-900 text-[10px] font-extrabold px-2 py-1 rounded-full">${u.qs}</span>
                      </div>
                      <h3 class="font-extrabold text-slate-900 group-hover:text-blue-700 transition text-lg">${u.name}</h3>
                      <div class="mt-3 grid grid-cols-2 gap-2 text-sm">
                        <div class="bg-slate-50 p-2 rounded-lg">
                          <div class="text-[10px] text-slate-500">Fees</div>
                          <div class="font-bold text-slate-900 text-xs">${u.fees}</div>
                        </div>
                        <div class="bg-slate-50 p-2 rounded-lg">
                          <div class="text-[10px] text-slate-500">Duration</div>
                          <div class="font-bold text-slate-900 text-xs">${u.duration}</div>
                        </div>
                      </div>
                      <div class="mt-4 flex items-center gap-1 text-blue-700 font-bold text-sm group-hover:gap-2 transition-all">
                        View Details <i data-lucide="arrow-right" class="w-4 h-4"></i>
                      </div>
                    </a>
                  `).join('')}
                </div>
              </div>
              `;
            })()}

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
                        <th class="p-4">1-Year Tuition (USD)</th>
                        <th class="p-4">1-Year Hostel (USD)</th>
                        <th class="p-4">1-Year Food (USD)</th>
                        <th class="p-4">6-Year Total Tuition (USD)</th>
                        <th class="p-4">6-Year Grand Total (USD)</th>
                        <th class="p-4 rounded-r-xl">Total INR Range</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100 text-slate-700">
                      ${colleges.map(c => `
                        <tr class="hover:bg-slate-50/50 transition">
                          <td class="p-4 font-semibold">${c.sNo}</td>
                          <td class="p-4 font-bold text-slate-900">${c.name}</td>
                          <td class="p-4 font-semibold text-blue-700">${c.tuitionUSD}</td>
                          <td class="p-4 text-slate-600">${c.hostelUSD}</td>
                          <td class="p-4 text-slate-500">${c.foodUSD}</td>
                          <td class="p-4 font-semibold text-blue-700">${c.totalTuitionUSD}</td>
                          <td class="p-4 font-bold text-slate-900">${c.grandTotalUSD}</td>
                          <td class="p-4 font-bold text-green-700 bg-green-50/40">${c.totalINR}</td>
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
  return wrapPage(content, `MBBS in ${country.name}`, country.tagline, `${"mbbs-abroad"}/${country.slug}.html`, "mbbs-abroad");
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
const dirs = ["mbbs-abroad", "study-abroad", "universities", "blog"];
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
fs.writeFileSync(path.join("mbbs-abroad", "emerging-destinations.html"), buildEmergingDestinations("../"));
// mbbs-in-europe.html removed: all Europe pages now live under mbbs-abroad/
fs.writeFileSync("study-abroad.html", buildStudyAbroad("./"));

// Write Dynamic Countries (MBBS Abroad - includes ALL countries: Asia + Europe)
// All country pages now live under /mbbs-abroad/{slug} for unified navigation.
[...mbbsCountries, ...europeCountries].forEach(c => {
  fs.writeFileSync(path.join("mbbs-abroad", `${c.slug}.html`), buildCountryPage(c, "mbbs", "../"));
});

// Write Dynamic Programs
Object.keys(programData).forEach(pSlug => {
  fs.writeFileSync(path.join("study-abroad", `${pSlug}.html`), buildProgramPage(pSlug, "../"));
});

// Write Dynamic Universities (strategic shortlist only). Remove stale broad-coverage pages first.
if (fs.existsSync("universities")) {
  fs.readdirSync("universities").forEach(file => {
    if (file.endsWith(".html")) fs.unlinkSync(path.join("universities", file));
  });
}
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
//
// All initialization runs AFTER includes.js has finished loading header.html,
// footer.html and other partials (so this script can find injected elements
// like the mobile menu button, dropdown buttons, etc.).
//
// If for some reason the includes never load (e.g. partial file missing), a
// 3-second fallback timeout still runs init so the page is not totally broken.

function initSite() {

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

  // 4. Contact / Counseling Form Submission via site API
  const form = document.getElementById("counseling-form");
  const doneMsg = document.getElementById("form-done-msg");

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

      try {
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            phone,
            email,
            country,
            message,
            pageUrl: window.location.href,
          }),
        });

        const result = await response.json().catch(() => ({}));
        if (!response.ok || !result.success) {
          throw new Error(result.error || "Email submission failed");
        }

        if (doneMsg) {
          doneMsg.textContent = "Thank you! Your enquiry has been submitted successfully.";
          doneMsg.classList.remove("hidden", "text-red-600");
          doneMsg.classList.add("text-green-600");
          setTimeout(() => doneMsg.classList.add("hidden"), 6000);
        }

        form.reset();
      } catch (error) {
        if (doneMsg) {
          doneMsg.textContent = "Sorry, we could not submit your enquiry right now. Please try again.";
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


  // 5. Real-time Fee Table Filtering
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

  // 6. Mobile Menu Accordion Toggle
  const accordionBtns = document.querySelectorAll(".mobile-accordion-btn");
  accordionBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const targetEl = document.getElementById(targetId);
      const icon = btn.querySelector("i[data-lucide='chevron-down']");

      if (targetEl) {
        const isHidden = targetEl.classList.contains("hidden");

        // Hide all other accordions first
        document.querySelectorAll(".mobile-accordion-btn").forEach(otherBtn => {
          if (otherBtn !== btn) {
            const otherTargetId = otherBtn.getAttribute("data-target");
            const otherTargetEl = document.getElementById(otherTargetId);
            if (otherTargetEl) otherTargetEl.classList.add("hidden");
            const otherIcon = otherBtn.querySelector("i[data-lucide='chevron-down']");
            if (otherIcon) otherIcon.classList.remove("rotate-180");
          }
        });

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
      e.stopPropagation();

      const targetId = btn.getAttribute("data-target");
      const targetEl = document.getElementById(targetId);
      const icon = btn.querySelector("i[data-lucide='chevron-down']");

      if (targetEl) {
        const isHidden = targetEl.classList.contains("hidden");

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
}


// Bootstrap: wait for includesLoaded event from /js/includes.js.
// (includesLoaded fires AFTER all [data-include] elements are filled in.)
(function bootstrap() {
  let initialized = false;
  function run() {
    if (initialized) return;
    initialized = true;
    initSite();
  }
  document.addEventListener("includesLoaded", run, { once: true });
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      if (!window.__includesRequested || window.__includesReady) {
        if (!initialized) run();
      }
    });
  } else {
    if (!window.__includesRequested || window.__includesReady) {
      run();
    }
  }
  // Fallback: if includes.js fails, run anyway after 3 seconds.
  setTimeout(() => {
    if (!initialized) {
      console.warn("[script.js] includesLoaded did not fire in 3s, running init anyway");
      run();
    }
  }, 3000);
})();
`;

// script.js is maintained as a standalone file because it contains the
// local icon fallback used when the Lucide CDN is unavailable/blocked.
// Do not overwrite it during static HTML generation.
console.log("script.js kept unchanged");
