const fs = require("fs");
const https = require("https");

const sheets = [
  "Georgia",
  "Kyrgyzstan",
  "Kazakhstan",
  "Uzbekistan",
  "Nepal",
  "Bangladesh",
  "China",
  "Armenia",
  "Barbados",
  "Antigua",
  "Caribbean",
  "Philippines"
];

const spreadsheetId = "1IKnKNeqbVKcy2lGYiWwsw6SSVRTZkHWG";

function fetchSheet(sheetName) {
  return new Promise((resolve, reject) => {
    const url = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:html&sheet=${encodeURIComponent(sheetName)}`;
    
    https.get(url, (res) => {
      let data = "";
      res.on("data", (chunk) => { data += chunk; });
      res.on("end", () => {
        resolve({ sheetName, html: data });
      });
    }).on("error", (err) => {
      reject(err);
    });
  });
}

async function run() {
  console.log("Fetching all country sheets from Google Sheets...");
  const results = {};
  
  for (let sheet of sheets) {
    try {
      console.log(`Fetching ${sheet}...`);
      const res = await fetchSheet(sheet);
      results[sheet] = res.html;
    } catch (e) {
      console.error(`Error fetching ${sheet}:`, e.message);
    }
  }
  
  fs.writeFileSync("fetched-sheets.json", JSON.stringify(results, null, 2));
  console.log("All sheets fetched and saved to fetched-sheets.json!");
}

run();
