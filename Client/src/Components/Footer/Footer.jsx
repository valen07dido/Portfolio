import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  const socialNetworks = [
    {
      name: "\u00A0LinkedIn",
      url: "https://www.linkedin.com/in/valentin-di-domenica-a6186822a",
      icon: <FaLinkedin />,
    },
    {
      name: "\u00A0GitHub",
      url: "https://github.com/valen07dido",
      icon: <FaGithub />,
    },
    {
      name: "\u00A0Email",
      url: "mailto:valendido69@gmail.com",
      icon: <FaEnvelope />,
    },
    {
      name: "\u00A0Teléfono",
      url: "tel:+5493413164761",
      icon: <FaPhone />,
    },
  ];

  const renderSocialNetworks = () => {
    return socialNetworks.map((network) => (
      <div className={styles.network} key={network.name}>
        <a href={network.url} className={styles.link}>
          {network.icon}{network.name}
        </a>
      </div>
    ));
  };

  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.title}>Redes sociales:</h2>
        <div className={styles.containerNet}>
          {renderSocialNetworks()}
        </div>
      </div>
      <div>
        <h2 className={styles.title}>Ubicación:</h2>
        <a href="https://maps.app.goo.gl/4KGVPtLEeRDfnsrZ9" className={styles.link}>
          <FaMapMarkerAlt /> Alvear, Santa Fe, Argentina
        </a>
      </div>
    </div>
  );
};

export default Footer;