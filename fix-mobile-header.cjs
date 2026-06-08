const fs = require("fs");

let style = fs.readFileSync("style.css", "utf8");

// Define the updated, media-query wrapped block
const oldBlock = `/* Custom Navigation Header Padding and Gap Fix */
.custom-nav {
  display: flex !important;
  align-items: center !important;
  gap: 2px !important;
}`;

const newBlock = `/* Custom Navigation Header Padding and Gap Fix */
@media (min-width: 1024px) {
  .custom-nav {
    display: flex !important;
    align-items: center !important;
    gap: 2px !important;
  }
}`;

style = style.replace(oldBlock, newBlock);

fs.writeFileSync("style.css", style);
console.log("Custom nav padding successfully wrapped in media query to fix mobile display!");
