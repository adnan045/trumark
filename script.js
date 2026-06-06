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
});
