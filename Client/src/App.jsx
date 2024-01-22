import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import PATHROUTES from "./utils/PATHROUTES";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Proyects from "./components/Proyects/Proyects";
import About from "./components/About/About";
import Error from "./components/Error/Error";
import Contact from "./components/Contact/Contact";

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isError = ![
    PATHROUTES.HOME,
    PATHROUTES.ABOUT,
    PATHROUTES.PROYECTS,
    PATHROUTES.CONTACT,
  ].includes(pathname);
  console.log(isError);
  return (
    <>
     {!isError&&<NavBar />}
      <Routes>
        <Route path={PATHROUTES.HOME} element={<Home />} />
        <Route path={PATHROUTES.ABOUT} element={<About />} />
        <Route path={PATHROUTES.PROYECTS} element={<Proyects />} />
        <Route path={PATHROUTES.CONTACT} element={<Contact />} />

        <Route path={PATHROUTES.ERROR} element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
