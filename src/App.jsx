import Navbar from "./components/Nabvar";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState } from "react";

export default function App() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  function handleNavbarClick(isNavbarClicked) {
    setIsHeaderVisible(!isNavbarClicked);
  }

  return (
    <div className="app-class">
      <Navbar onNavbarClick={handleNavbarClick} />
      {isHeaderVisible && <Header />}
      {isHeaderVisible && <Main />}
      {isHeaderVisible && <About />}
      {isHeaderVisible && <Contact />}
      {isHeaderVisible && <Footer />}
    </div>
  );
}
