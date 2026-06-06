const fs = require("fs");

const files = ["generate-html.cjs", "header.html", "footer.html"];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, "utf8");
    
    // Replace contact with info
    content = content.replace(/contact@truemarkedu\.com/g, "info@truemarkedu.com");
    
    // Replace admissions with director
    content = content.replace(/admissions@truemarkedu\.com/g, "director@truemarkedu.com");
    
    fs.writeFileSync(file, content);
    console.log(`Updated email addresses in ${file}!`);
  }
});
