import { useState, useEffect } from "react";

export default function Navbar() {
  const [isNavbarClicked, setIsNavbarClicked] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarClassName = `navbar navbar-expand-lg ${
    isSticky ? "sticky" : ""
  } ${isNavbarClicked ? "navbar-clicked" : ""}`;

  const handleNavLinkClick = (selector) => {
    const section = document.querySelector(selector);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsNavbarClicked(false); // Close navbar after clicking on a link
    }
  };

  return (
    <nav className={navbarClassName}>
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
              className="nav-link"
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
              className="nav-link"
              // eslint-disable-next-line react/prop-types
              href="https://drive.google.com/file/d/1dWzYDpbiIXD_lwSstTIrPAfyQR1gDXOi/view?usp=sharing"
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
