import React from "react";
import styles from "./Home.module.css";
import image from "../../../public/perfil.png";
const Home = () => {
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.titulo}>hola, este es mi portfolio</h1>
        <img src={image} alt="icono developer" className={styles.iconDev} />
      </div>
      <div className={styles.containerTech}>
        <h1>Tecnologias:</h1>
        <ul className={styles.list}>
          <li>✅Redux</li>
          <li>✅React</li>
          <li>✅Node</li>
          <li>✅Express</li>
          <li>✅Javascript</li>
          <li>✅SQL</li>
          <li>✅Sequelize</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
