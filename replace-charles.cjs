const fs = require("fs");
let code = fs.readFileSync("generate-html.cjs", "utf8");

// Replace slugs and names
code = code.replace(/charles-university-prague/g, "ostrava-university");
code = code.replace(/Charles University, Prague/g, "Ostrava University, Ostrava");
code = code.replace(/Charles University Prague/g, "Ostrava University");
code = code.replace(/Charles University/g, "Ostrava University");
code = code.replace(/Charles/g, "Ostrava");

fs.writeFileSync("generate-html.cjs", code);
console.log("Charles University replaced with Ostrava University in generate-html.cjs!");
