const fs = require("fs");
let code = fs.readFileSync("generate-html.cjs", "utf8");

// Replace whatsapp links
code = code.replace(/wa\.me\/918287216902/g, "wa.me/919999606112");

fs.writeFileSync("generate-html.cjs", code);
console.log("WhatsApp numbers updated to 919999606112 in generate-html.cjs!");
