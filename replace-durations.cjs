const fs = require("fs");

let content = fs.readFileSync("generate-html.cjs", "utf8");

// Replace Kazakhstan duration with 6 Years
content = content.replace(/5 Years \+ 1 Year Internship/g, "6 Years");

// Replace India duration with 5.5 Years
content = content.replace(/4.5 year - 1 year internship/g, "5.5 Years");

fs.writeFileSync("generate-html.cjs", content);
console.log("Successfully replaced durations inside generate-html.cjs database!");
