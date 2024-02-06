import React from "react";
import styles from "./Home.module.css";
import image from "../../../public/perfil.png";
import ReactIcon from "../../../public/logo-react.png";
import JavaScriptLogo from "../../../public/logo-javascript.png";
import ReduxIcon from "../../../public/logo-redux.png";
import SequelizeIcon from "../../../public/logo-sequelize.png";
import htmlIcon from "../../../public/logo-html.png"
import cssIcon from "../../../public/logo-css.png"
import expressIcon from "../../../public/logo-express.png"
import nodeIcon from "../../../public/logo-node.png"
import postgreSQLIcon from "../../../public/logo-postgreSQL.png"
import materialUIIcon from "../../../public/logo-materialUI.png"
import Carousel from "../Carousel/Carousel";


const Home = () => {
  const techItems = [
    { image: ReduxIcon, alt: "Redux" },
    { image: ReactIcon, alt: "React" },
    { image: JavaScriptLogo, alt: "JavaScript" },
    { image: SequelizeIcon, alt: "Sequelize" },
    { image: htmlIcon, alt: "HTML" },
    { image: cssIcon, alt: "CSS" },
    { image: expressIcon, alt: "ExpressJS" },
    { image: nodeIcon, alt: "NodeJS" },
    { image: postgreSQLIcon, alt: "postgreSQL" },
    { image: materialUIIcon, alt: "material UI" },
  ];
  return (
    <div>
      <div className={styles.container}>
        <div>
        <h1 className={styles.name}>Valentin Di Domenica</h1>
        <h1>{"<Fullstack Developer/>"}</h1>
        </div>
        <img src={image} alt="icono developer" className={styles.iconDev} />
      </div>
      <div className={styles.containerTech}>
        <h1 className={styles.tech}>Tecnologias:</h1>
        <Carousel items={techItems} />
      </div>
    </div>
  );
};

export default Home;
