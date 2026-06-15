// includes.js — Loads partial HTML (header.html, footer.html) into placeholders.
// Works on static sites served from any depth (root pages and subfolder pages).
//
// Usage in HTML:
//   <div data-include="header.html"></div>
//   <div data-include="footer.html"></div>
//   <script src="/js/includes.js"></script>
//   <script src="/script.js"></script>
//
// After all includes finish loading, this script:
//   1. Re-runs lucide.createIcons() so injected <i data-lucide> tags become SVG
//   2. Fires the `includesLoaded` event so script.js (or any listener) can init
//
(function () {
  "use strict";

  // Calculate the relative path back to the site root.
  //
  // With Vercel cleanUrls=true, URLs don't end in .html, so we can't tell a
  // page from a directory just by looking at the URL. We use the trailing
  // slash as the signal: a URL that ends in "/" is a directory (we're at
  // its index.html), anything else is a leaf page.
  //
  // Examples (from webroot "/"):
  //   /                       -> ""        (root homepage)
  //   /about                  -> ""        (root page)
  //   /about/                 -> "../"     (directory page /about/index.html)
  //   /mbbs-abroad            -> ""        (root page)
  //   /mbbs-abroad/           -> "../"     (directory page)
  //   /mbbs-abroad/georgia    -> "../"     (root page under /mbbs-abroad/)
  //   /mbbs-abroad/georgia/   -> "../../" (directory page)
  //   /blog/some-post         -> "../"     (root page under /blog/)
  function getBasePath() {
    var path = window.location.pathname || "/";
    if (path === "/" || path === "") return "";

    // Directory-style URL: ends with "/". The current page is some index.html
    // inside the deepest directory, so we need to go up one level per segment.
    if (path.charAt(path.length - 1) === "/") {
      var trimmed = path.replace(/\/+$/, "");
      var dirs = trimmed.split("/").filter(function (s) {
        return s.length > 0;
      });
      return "../".repeat(dirs.length);
    }

    // Leaf-style URL: last segment is the page itself.
    var segs = path.split("/").filter(function (s) {
      return s.length > 0;
    });
    return "../".repeat(Math.max(0, segs.length - 1));
  }

  function fireLoaded() {
    try {
      if (typeof lucide !== "undefined") lucide.createIcons();
    } catch (e) {
      console.warn("[includes] lucide.createIcons failed", e);
    }
    // Mark all includes as fully loaded so script.js (or any other
    // listener) can run init logic safely.
    window.__includesReady = true;
    document.dispatchEvent(new Event("includesLoaded"));
  }

  var base = getBasePath();
  var nodes = document.querySelectorAll("[data-include]");

  // Expose state flags so other scripts (script.js) can check whether
  // includes are still being loaded. script.js uses these to decide
  // whether it is safe to wire up event listeners (e.g. dropdown buttons
  // injected by header.html).
  window.__includesRequested = nodes.length > 0;

  if (nodes.length === 0) {
    // Nothing to include, fire immediately so listeners can init.
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fireLoaded);
    } else {
      fireLoaded();
    }
    return;
  }

  var pending = nodes.length;

  nodes.forEach(function (el) {
    var file = el.getAttribute("data-include");
    if (!file) {
      if (--pending === 0) fireLoaded();
      return;
    }

    fetch(base + file, { cache: "no-cache" })
      .then(function (r) {
        if (!r.ok) throw new Error("HTTP " + r.status + " for " + file);
        return r.text();
      })
      .then(function (html) {
        el.innerHTML = html;
      })
      .catch(function (err) {
        console.error("[includes] failed to load", file, err);
        el.innerHTML =
          '<div style="padding:1rem;background:#fee;color:#900;font-family:monospace;">Include failed: ' +
          file +
          "</div>";
      })
      .finally(function () {
        if (--pending === 0) fireLoaded();
      });
  });
})();
