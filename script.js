// Static HTML Interactive Script for TrueMark Edu

document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Initialize Lucide Icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  // 2. Mobile Menu Toggle
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
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

  // 4. Contact / Counseling Form Submission via WhatsApp
  const form = document.getElementById("counseling-form");
  const doneMsg = document.getElementById("form-done-msg");
  
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const name = document.getElementById("form-name").value;
      const phone = document.getElementById("form-phone").value;
      const email = document.getElementById("form-email").value;
      const country = document.getElementById("form-country").value;
      const message = document.getElementById("form-message").value;
      
      if (!name || !phone) {
        alert("Please provide your name and phone number.");
        return;
      }
      
      const text = `Hi TrueMark Edu! My name is ${name}. My number is ${phone}. Email: ${email}. Interest: &country=${country}. Message: &message=${message}`;
      const whatsappURL = `https://wa.me/919999606112?text=${encodeURIComponent(text)}`;
      
      window.open(whatsappURL, "_blank");
      
      if (doneMsg) {
        doneMsg.classList.remove("hidden");
        setTimeout(() => {
          doneMsg.classList.add("hidden");
        }, 6000);
      }
      
      form.reset();
    });
  }


  // 6. Real-time Fee Table Filtering
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

  // 5. Mobile Menu Accordion Toggle
  const accordionBtns = document.querySelectorAll(".mobile-accordion-btn");
  accordionBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const targetEl = document.getElementById(targetId);
      const icon = btn.querySelector("i[data-lucide='chevron-down']");
      
      if (targetEl) {
        const isHidden = targetEl.classList.contains("hidden");
        
        // Hide all other accordions first (for a clean single-open accordion feel)
        document.querySelectorAll(".mobile-accordion-btn").forEach(otherBtn => {
          if (otherBtn !== btn) {
            const otherTargetId = otherBtn.getAttribute("data-target");
            const otherTargetEl = document.getElementById(otherTargetId);
            if (otherTargetEl) otherTargetEl.classList.add("hidden");
            const otherIcon = otherBtn.querySelector("i[data-lucide='chevron-down']");
            if (otherIcon) otherIcon.classList.remove("rotate-180");
          }
        });

        // Toggle current accordion
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
      e.stopPropagation(); // Prevent immediate closing due to document click listener
      
      const targetId = btn.getAttribute("data-target");
      const targetEl = document.getElementById(targetId);
      const icon = btn.querySelector("i[data-lucide='chevron-down']");
      
      if (targetEl) {
        const isHidden = targetEl.classList.contains("hidden");
        
        // Hide all other desktop dropdowns first
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

        // Toggle current dropdown
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
});
