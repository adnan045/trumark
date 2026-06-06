const fs = require("fs");

const rawData = JSON.parse(fs.readFileSync("fetched-sheets.json", "utf8"));
const parsedData = {};

function cleanText(text) {
  if (!text) return "";
  return text.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

for (let [country, html] of Object.entries(rawData)) {
  console.log(`Parsing ${country}...`);
  const colleges = [];
  
  // Find all <tr> blocks
  const trMatches = html.match(/<tr[^>]*>[\s\S]*?<\/tr>/gi);
  if (!trMatches) {
    console.warn(`No rows found for ${country}`);
    continue;
  }
  
  // First row is usually header or title
  // Let's loop from index 1 (or find the row with data)
  let foundHeaders = false;
  let headers = [];
  
  for (let tr of trMatches) {
    // Find all <td> blocks in this row
    const tdMatches = tr.match(/<td[^>]*>[\s\S]*?<\/td>/gi) || [];
    const cells = tdMatches.map(cleanText);
    
    if (cells.length < 2) continue;
    
    // Check if this is the header row
    if (!foundHeaders) {
      if (cells.some(c => c.toLowerCase().includes("university") || c.toLowerCase().includes("institution") || c.toLowerCase().includes("college"))) {
        headers = cells;
        foundHeaders = true;
      }
      continue;
    }
    
    // Parse data row
    const college = {
      sNo: cells[0] || "",
      name: cells[1] || "",
      tuitionUSD: cells[2] || "—",
      tuitionINR: cells[3] || "—",
      hostelUSD: cells[4] || "—",
      hostelINR: cells[5] || "—",
      worldRank: cells[6] || "—",
      countryRank: cells[7] || "—"
    };
    
    // Skip row if it doesn't contain a valid college name
    if (college.name && college.name !== "University / Institution" && !college.name.startsWith("Whats include") && !college.name.startsWith("Items") && !college.name.startsWith("Basic")) {
      colleges.push(college);
    }
  }
  
  parsedData[country] = colleges;
  console.log(`Parsed ${colleges.length} colleges for ${country}`);
}

fs.writeFileSync("colleges-data.json", JSON.stringify(parsedData, null, 2));
console.log("All college data successfully parsed and saved to colleges-data.json!");
