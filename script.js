// Static HTML Interactive Script for TrueMark Edu
//
// All initialization runs AFTER includes.js has finished loading header.html,
// footer.html and other partials (so this script can find injected elements
// like the mobile menu button, dropdown buttons, etc.).
//
// If for some reason the includes never load (e.g. partial file missing), a
// 3-second fallback timeout still runs init so the page is not totally broken.

function createSiteIcons(root) {
  // Robust local fallback for Lucide icons. The live site loads Lucide from a CDN;
  // if that CDN is slow/blocked, some <i data-lucide> placeholders remain blank.
  // This function first lets Lucide render normally, then replaces any remaining
  // placeholders with inline SVGs so icons always appear.
  root = root || document;

  if (typeof lucide !== "undefined" && typeof lucide.createIcons === "function") {
    try {
      lucide.createIcons();
    } catch (e) {
      console.warn("[icons] lucide.createIcons failed; using local fallback", e);
    }
  }

  const iconPaths = {
    "alert-circle": '<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>',
    "arrow-right": '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    "badge-check": '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/>',
    "check": '<path d="M20 6 9 17l-5-5"/>',
    "chevron-down": '<path d="m6 9 6 6 6-6"/>',
    "clock": '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    "euro": '<path d="M4 10h12"/><path d="M4 14h9"/><path d="M19 5a7.7 7.7 0 0 0-5.2-2C8.9 3 5 7 5 12s3.9 9 8.8 9A7.7 7.7 0 0 0 19 19"/>',
    "globe": '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
    "hospital": '<path d="M12 6v4"/><path d="M14 14h-4"/><path d="M14 18h-4"/><path d="M14 8h-4"/><path d="M18 12h2a2 2 0 0 1 2 2v7H2v-7a2 2 0 0 1 2-2h2"/><path d="M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16"/>',
    "languages": '<path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/>',
    "mail": '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    "map": '<polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" x2="9" y1="3" y2="18"/><line x1="15" x2="15" y1="6" y2="21"/>',
    "map-pin": '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    "menu": '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',
    "message-circle": '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
    "phone": '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
    "plane": '<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 20.5 3S17.9 2.5 16.4 4L13 7.5 4.8 5.7c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 4 1 1 4 1-1v-3l3-2 4 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',
    "shield": '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
    "shield-check": '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    "users": '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    "x": '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>'
  };

  root.querySelectorAll("i[data-lucide]").forEach((placeholder) => {
    const name = placeholder.getAttribute("data-lucide");
    const paths = iconPaths[name];
    if (!paths) return;

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "2");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("data-lucide-fallback", name);
    const cls = placeholder.getAttribute("class");
    if (cls) svg.setAttribute("class", cls);
    svg.innerHTML = paths;
    placeholder.replaceWith(svg);
  });
}

function initSite() {

  // 1. Initialize icons (Lucide CDN + local fallback)
  createSiteIcons();

  // 2. Mobile Menu Toggle
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      const isHidden = mobileMenu.classList.contains("hidden");
      if (isHidden) {
        mobileMenu.classList.remove("hidden");
        menuBtn.innerHTML = '<i data-lucide="x" class="w-6 h-6"></i>';
      } else {
        mobileMenu.classList.add("hidden");
        menuBtn.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
      }
      createSiteIcons(menuBtn);
    });
  }

  // 3. Scroll Animations (IntersectionObserver)
  const animElements = document.querySelectorAll(
    ".animate-fade-up, .animate-fade-in, .animate-scale-in, .animate-slide-left, .animate-slide-right"
  );

  if (!("IntersectionObserver" in window)) {
    animElements.forEach((el) => el.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    animElements.forEach((el) => observer.observe(el));
  }

  // 4. Contact / Counseling Form Submission via site API
  const form = document.getElementById("counseling-form");
  const doneMsg = document.getElementById("form-done-msg");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = document.getElementById("form-name").value.trim();
      const phone = document.getElementById("form-phone").value.trim();
      const email = document.getElementById("form-email").value.trim();
      const country = document.getElementById("form-country").value;
      const message = document.getElementById("form-message").value.trim();

      if (!name || !phone) {
        alert("Please provide your name and phone number.");
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn ? submitBtn.innerHTML : "";
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = "Submitting...";
      }

      try {
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            phone,
            email,
            country,
            message,
            pageUrl: window.location.href,
          }),
        });

        const result = await response.json().catch(() => ({}));
        if (!response.ok || !result.success) {
          throw new Error(result.error || "Email submission failed");
        }

        if (doneMsg) {
          doneMsg.textContent = "Thank you! Your enquiry has been submitted successfully.";
          doneMsg.classList.remove("hidden", "text-red-600");
          doneMsg.classList.add("text-green-600");
          setTimeout(() => doneMsg.classList.add("hidden"), 6000);
        }

        form.reset();
      } catch (error) {
        if (doneMsg) {
          doneMsg.textContent = "Sorry, we could not submit your enquiry right now. Please try again.";
          doneMsg.classList.remove("hidden", "text-green-600");
          doneMsg.classList.add("text-red-600");
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        }
      }
    });
  }


  // 5. Real-time Fee Table Filtering
  const searchInputs = document.querySelectorAll(".fee-table-search");
  searchInputs.forEach(input => {
    input.addEventListener("input", () => {
      const filter = input.value.toLowerCase();
      const tableId = input.getAttribute("data-table");
      const rows = document.querySelectorAll('#' + tableId + ' tbody tr');
      rows.forEach(row => {
        const text = row.innerText.toLowerCase();
        if (text.includes(filter)) {
          row.classList.remove("hidden");
        } else {
          row.classList.add("hidden");
        }
      });
    });
  });

  // 6. Mobile Menu Accordion Toggle
  const accordionBtns = document.querySelectorAll(".mobile-accordion-btn");
  accordionBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const targetEl = document.getElementById(targetId);
      const icon = btn.querySelector("i[data-lucide='chevron-down']");

      if (targetEl) {
        const isHidden = targetEl.classList.contains("hidden");

        // Hide all other accordions first
        document.querySelectorAll(".mobile-accordion-btn").forEach(otherBtn => {
          if (otherBtn !== btn) {
            const otherTargetId = otherBtn.getAttribute("data-target");
            const otherTargetEl = document.getElementById(otherTargetId);
            if (otherTargetEl) otherTargetEl.classList.add("hidden");
            const otherIcon = otherBtn.querySelector("i[data-lucide='chevron-down']");
            if (otherIcon) otherIcon.classList.remove("rotate-180");
          }
        });

        if (isHidden) {
          targetEl.classList.remove("hidden");
          if (icon) icon.classList.add("rotate-180");
        } else {
          targetEl.classList.add("hidden");
          if (icon) icon.classList.remove("rotate-180");
        }
      }
    });
  });

  // 7. Desktop Click-to-Open Dropdown Menus
  const desktopBtns = document.querySelectorAll(".desktop-dropdown-btn");
  desktopBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();

      const targetId = btn.getAttribute("data-target");
      const targetEl = document.getElementById(targetId);
      const icon = btn.querySelector("i[data-lucide='chevron-down']");

      if (targetEl) {
        const isHidden = targetEl.classList.contains("hidden");

        document.querySelectorAll(".desktop-dropdown").forEach(otherDropdown => {
          if (otherDropdown !== targetEl) {
            otherDropdown.classList.add("hidden");
          }
        });
        document.querySelectorAll(".desktop-dropdown-btn i[data-lucide='chevron-down']").forEach(otherIcon => {
          if (otherIcon !== icon) {
            otherIcon.classList.remove("rotate-180");
          }
        });

        if (isHidden) {
          targetEl.classList.remove("hidden");
          if (icon) icon.classList.add("rotate-180");
        } else {
          targetEl.classList.add("hidden");
          if (icon) icon.classList.remove("rotate-180");
        }
      }
    });
  });

  // Close all dropdowns when clicking anywhere outside of them
  document.addEventListener("click", () => {
    document.querySelectorAll(".desktop-dropdown").forEach(dropdown => {
      dropdown.classList.add("hidden");
    });
    document.querySelectorAll(".desktop-dropdown-btn i[data-lucide='chevron-down']").forEach(icon => {
      icon.classList.remove("rotate-180");
    });
  });
}


// Bootstrap: wait for includesLoaded event from /js/includes.js.
// (includesLoaded fires AFTER all [data-include] elements are filled in.)
(function bootstrap() {
  let initialized = false;
  function run() {
    if (initialized) return;
    initialized = true;
    initSite();
  }
  document.addEventListener("includesLoaded", run, { once: true });
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      if (!window.__includesRequested || window.__includesReady) {
        if (!initialized) run();
      }
    });
  } else {
    if (!window.__includesRequested || window.__includesReady) {
      run();
    }
  }
  // Fallback: if includes.js fails, run anyway after 3 seconds.
  setTimeout(() => {
    if (!initialized) {
      console.warn("[script.js] includesLoaded did not fire in 3s, running init anyway");
      run();
    }
  }, 3000);
})();
