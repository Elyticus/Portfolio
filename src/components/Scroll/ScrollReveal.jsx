import { useEffect } from "react";

const ScrollReveal = () => {
  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll(".reveal");

      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 10;

        if (revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    };

    window.addEventListener("scroll", reveal);

    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []);

  return null; // Since this component doesn't render anything, return null
};

export default ScrollReveal;
