// Static HTML Interactive Script for TrueMark Edu
//
// All initialization runs AFTER includes.js has finished loading header.html,
// footer.html and other partials (so this script can find injected elements
// like the mobile menu button, dropdown buttons, etc.).
//
// If for some reason the includes never load (e.g. partial file missing), a
// 3-second fallback timeout still runs init so the page is not totally broken.

function initSite() {

  // 1. Initialize Lucide Icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

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
      if (typeof lucide !== "undefined") {
        lucide.createIcons();
      }
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
