import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About/About";
import Navbar from "./Components/NavBar/Navbar";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (<>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/About" element={<About />} />
      <Route path="/Projects" element={<Projects />} />
    </Routes>
    <Footer/>
  </>
  );
}

export default App;