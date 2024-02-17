import Navbar from "./components/Navbar/Nabvar";
import Header from "./components/Header/Header";
import Main from "./components/Projects/Main";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

export default function App() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  function handleNavbarClick(isNavbarClicked) {
    setIsHeaderVisible(!isNavbarClicked);
  }

  return (
    <div className={`app-class`}>
      <Navbar onNavbarClick={handleNavbarClick} />
      {isHeaderVisible && <Header />}
      {isHeaderVisible && <Main />}
      {isHeaderVisible && <About />}
      {isHeaderVisible && <Contact />}
      {isHeaderVisible && <Footer />}
    </div>
  );
}
