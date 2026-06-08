const fs = require("fs");

const files = ["generate-html.cjs", "header.html", "footer.html"];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, "utf8");
    
    // 1. Replace Anandita's old numbers (8287216902 and 9999606112 in some contact listings) with 9540302093
    content = content.replace(/8287216902/g, "9540302093");
    content = content.replace(/82872\s*16902/g, "95403 02093");
    content = content.replace(/9999606112/g, "9540302093");
    content = content.replace(/99996\s*06112/g, "95403 02093");
    
    // 2. Replace Haidar's old numbers (9999606211 and 9999606112) with 9540302032
    content = content.replace(/9999606211/g, "9540302032");
    content = content.replace(/99996\s*06211/g, "95403 02032");
    
    // 3. Make sure any leftover wa.me links are correctly pointing to the new main WhatsApp number (Haidar's 9540302032 or Anandita's 9540302093)
    // Let's set the main WhatsApp number as Haidar's new number 9540302032 or Anandita's 9540302093. 
    // Since Haidar is the Europe MBBS Expert, let's keep 9540302032 or Anandita's 9540302093. Let's make it 9540302093 or 9540302032. 
    // Let's use Haidar's 9540302032 for the wa.me links to match the previous setup.
    content = content.replace(/wa\.me\/9540302093/g, "wa.me/9540302032"); // Ensure WhatsApp points to Haidar's new number
    
    fs.writeFileSync(file, content);
    console.log(`Replaced new phone numbers in ${file}!`);
  }
});
