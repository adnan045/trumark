const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// 1. Run the HTML generator
console.log("Running HTML generator...");
execSync("node generate-html.cjs", { stdio: "inherit" });

// 2. Ensure dist folder exists
console.log("Preparing dist folder...");
if (fs.existsSync("dist")) {
  fs.rmSync("dist", { recursive: true, force: true });
}
fs.mkdirSync("dist");

// Helper to recursively copy directories
function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === "dist" || entry.name === ".git" || entry.name === "react-source-backup" || entry.name === ".npm") {
        continue;
      }
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Copy directories
const dirsToCopy = ["mbbs-abroad", "mbbs-in-europe", "study-abroad", "universities", "blog"];
dirsToCopy.forEach(dir => {
  if (fs.existsSync(dir)) {
    copyDir(dir, path.join("dist", dir));
  }
});

// Copy CONTENTS of public folder directly to the root of dist/ (Vite standard)
if (fs.existsSync("public")) {
  console.log("Copying public folder contents directly to dist root...");
  const publicFiles = fs.readdirSync("public");
  for (let file of publicFiles) {
    const srcPath = path.join("public", file);
    const destPath = path.join("dist", file);
    if (fs.lstatSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Copy all European country HTML files into mbbs-abroad/ directory too, to prevent 404s!
if (fs.existsSync("dist/mbbs-in-europe")) {
  console.log("Cross-copying European countries to mbbs-abroad folder to prevent 404s...");
  const euroFiles = fs.readdirSync("dist/mbbs-in-europe");
  euroFiles.forEach(file => {
    fs.copyFileSync(path.join("dist/mbbs-in-europe", file), path.join("dist/mbbs-abroad", file));
  });
}

// Copy root files
const filesToCopy = [
  "index.html",
  "about.html",
  "services.html",
  "contact.html",
  "pricing.html",
  "blog.html",
  "universities.html",
  "mbbs-abroad.html",
  "mbbs-in-europe.html",
  "study-abroad.html",
  "style.css",
  "script.js",
  "vercel.json"
];

filesToCopy.forEach(file => {
  if (fs.existsSync(file)) {
    fs.copyFileSync(file, path.join("dist", file));
  }
});

console.log("Build successfully moved to dist/ folder!");
