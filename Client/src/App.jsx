import { useRef } from "react";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About/About";
import Navbar from "./Components/NavBar/Navbar";
import Footer from "./Components/Footer/Footer";
import styles from "./App.module.css";

function App() {
  const homeRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToRef = (ref, offset = 0) => {
    const offsetTop = ref.current.offsetTop;
    window.scrollTo({ top: offsetTop - offset, behavior: "smooth" });
  };

  return (
    <>
      <Navbar
        home={() => scrollToRef(homeRef, 100)}
        contact={() => scrollToRef(contactRef)}
        about={() => scrollToRef(aboutRef)}
        projects={() => scrollToRef(projectsRef)}
        footer={() => scrollToRef(footerRef)}
      />
      <div ref={homeRef} className={styles.box}>
        <Home />
      </div>
      <div ref={aboutRef} className={styles.box}>
        <About />
      </div>
      <div ref={projectsRef} className={styles.box}>
        <Projects />
      </div>
      <div ref={contactRef} className={styles.box}>
        <Contact />
      </div>
      <div ref={footerRef} className={styles.box}>
        <Footer />
      </div>
    </>
  );
}

export default App;
