import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Navbar({ onNavbarClick }) {
  const [isNavbarClicked, setIsNavbarClicked] = useState(false);

  const navbarClassName = `navbar navbar-expand-lg ${
    isNavbarClicked ? "navbar-clicked" : ""
  }`;

  function handleClick() {
    setIsNavbarClicked(!isNavbarClicked);
    // Ensure onNavbarClick is a function before calling it
    if (typeof onNavbarClick === "function") {
      onNavbarClick(!isNavbarClicked);
    }
  }

  return (
    <nav className={navbarClassName}>
      <div className="container-fluid">
        <button
          onClick={handleClick}
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
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
            <a className="nav-link" href="#">
              Projects
            </a>
            <a className="nav-link" href="#">
              About Me
            </a>
            <a className="nav-link" href="#">
              Contact
            </a>
            <a className="nav-link" href="#">
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
