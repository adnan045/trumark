const fs = require("fs");

const files = ["generate-html.cjs", "header.html", "footer.html"];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, "utf8");
    
    // Replace telephone links and formatted numbers
    content = content.replace(/8287216902/g, "9999606112");
    content = content.replace(/82872\s*16902/g, "99996 06112");
    
    fs.writeFileSync(file, content);
    console.log(`Replaced numbers in ${file}!`);
  }
});
