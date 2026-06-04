import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Adds is-visible class to any element with animate-* classes when scrolled into view.
// Triggered on location (route) changes to ensure dynamic components also get animated
// and that pages scroll to the top on navigation.
export default function ScrollAnimate() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll window to the top instantly on route change
    window.scrollTo({ top: 0, behavior: "instant" as any });

    let obs: IntersectionObserver | null = null;

    // Use a small timeout to let the DOM settle and render new components
    const timeoutId = setTimeout(() => {
      const els = document.querySelectorAll(
        ".animate-fade-up, .animate-fade-in, .animate-scale-in, .animate-slide-left, .animate-slide-right"
      );

      if (!("IntersectionObserver" in window)) {
        els.forEach((el) => el.classList.add("is-visible"));
        return;
      }

      obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              obs?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05 }
      );

      els.forEach((el) => obs?.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (obs) {
        obs.disconnect();
      }
    };
  }, [pathname]);

  return null;
}

