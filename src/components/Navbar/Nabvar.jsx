import { useState, useEffect } from "react";

export default function Navbar() {
  const [isNavbarClicked, setIsNavbarClicked] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Track scroll position

  // Function to toggle scrollbar
  function toggleScrollbar() {
    document.body.style.overflow = isNavbarClicked ? "hidden" : "auto";
  }

  // Call the function to toggle scrollbar
  useEffect(() => {
    toggleScrollbar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isNavbarClicked]); // Only recalculate when isNavbarClicked changes

  // Function to handle scrolling and stickiness
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to handle nav link click
  const handleNavLinkClick = (selector) => {
    const section = document.querySelector(selector);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsNavbarClicked(false); // Close navbar after clicking on a link
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg ${isScrolled ? "sticky-top" : ""}`}
    >
      <div className="container-fluid">
        <button
          onClick={() => setIsNavbarClicked(!isNavbarClicked)}
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isNavbarClicked}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${
            isNavbarClicked ? "show" : ""
          }`}
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a
              onClick={() => handleNavLinkClick("main")}
              className="nav-link project-btn"
              href="#projects"
            >
              Projects
            </a>
            <a
              onClick={() => handleNavLinkClick(".about")}
              className="nav-link"
              href="#about"
            >
              About Me
            </a>
            <a
              onClick={() => handleNavLinkClick(".contact")}
              className="nav-link"
              href="#contact"
            >
              Contact
            </a>
            <a
              onClick={() => handleNavLinkClick(".footer")}
              className="nav-link resume"
              // eslint-disable-next-line react/prop-types
              href="https://drive.google.com/file/d/1GUyXK9kY1AM3r9Ct9oLtoKW-p3WVli_V/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
