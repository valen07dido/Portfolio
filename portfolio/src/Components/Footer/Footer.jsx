import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import styles from "./Footer.module.css";
const Footer = () => {
  const redes = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/valentin-di-domenica-a6186822a",
      icon: <FaLinkedin />,
    },
    {
      name: "GitHub",
      url: "https://github.com/valen07dido",
      icon: <FaGithub />,
    },
    {
      name: "Email",
      url: "mailto:valendido69@gmail.com",
      icon: <FaEnvelope />,
    },
    {
      name: "Teléfono",
      url: "tel:+5493413164761",
      icon: <FaPhone />,
    },
  ];
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.title}>Redes sociales:</h2>
        <div className={styles.containerNet}>
          {redes.map((red) => (
            <div className={styles.network}>
              <a href={red.url} className={styles.link}>
                {red.icon}
              </a>
            </div>
          ))}
        </div>
      </div>
        <a href="">esta seria la ubicacion</a>
      
    </div>
  );
};

export default Footer;
