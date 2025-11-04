import Navbar from "./components/Navbar/Nabvar";
import Header from "./components/Header/Header";
import Main from "./components/Projects/Main";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div className="app-class">
      <Navbar />
      <Header />
      <Main />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
