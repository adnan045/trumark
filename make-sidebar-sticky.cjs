const fs = require("fs");

// 1. Update style.css with sticky sidebar classes
fs.appendFileSync("style.css", `
/* Premium Sticky Sidebar Form Fix */
@media (min-width: 1024px) {
  .sticky-sidebar {
    position: -webkit-sticky !important;
    position: sticky !important;
    top: 100px !important;
    z-index: 10 !important;
    align-self: start !important; /* Critical to allow the sidebar item to stick independently of container height */
  }
}
`);
console.log("Appended sticky-sidebar styles to style.css!");

// 2. Update generate-html.cjs to use <aside class="sticky-sidebar">
let code = fs.readFileSync("generate-html.cjs", "utf8");

// Replace all occurrences of <aside> with <aside class="sticky-sidebar">
code = code.replace(/<aside>/g, '<aside class="sticky-sidebar">');

fs.writeFileSync("generate-html.cjs", code);
console.log("Successfully set all sidebar elements to use the sticky-sidebar class!");
