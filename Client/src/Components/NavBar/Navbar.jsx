import React, { useState, useEffect } from "react";
import styles from "./NavBar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ home, about, contact, projects, footer }) => {
  const [open, setOpen] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [navbarOpacity, setNavbarOpacity] = useState(1);

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setNavbarOpacity(0);
      } else {
        setNavbarOpacity(1);
      }
      setLastScrollTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div
      className={styles.header}
      style={{ opacity: navbarOpacity, transition: "opacity 0.5s" }}
    >
      <div className={styles.home} onClick={home}>
        <h1>Portfolio</h1>
      </div>
      <div className={open ? styles.active : styles.contain}>
        <div className={styles.links} onClick={home}>
          <button className={styles.buttons}>Inicio</button>
        </div>
        <div className={styles.links} onClick={about}>
          <button className={styles.buttons}>Sobre mi</button>
        </div>
        <div className={styles.links} onClick={projects}>
          <button className={styles.buttons}>Proyectos</button>
        </div>
        <div className={styles.links} onClick={contact}>
          <button className={styles.buttons}>Contacto</button>
        </div>
        <div className={styles.links} onClick={footer}>
          <button className={styles.buttons}>Redes Sociales</button>
        </div>
      </div>

      <div onClick={() => handleClick()}>
        {open ? (
          <FaTimes
            className={styles.hamburger}
            size={20}
            style={{ color: "#fff" }}
          />
        ) : (
          <FaBars
            className={styles.hamburger}
            size={20}
            style={{ color: "#fff" }}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;