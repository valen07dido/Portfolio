import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className={styles.header}>
      <Link to="/" className={styles.home}>
        <h1>Portfolio</h1>
      </Link>
      <div className={open?styles.active:styles.contain}>
        <Link to="/" className={styles.links}>
          <button
            className={pathname === "/" ? styles.ButtonIn : styles.buttons}
          >
            Inicio
          </button>
        </Link>
        <Link to="/about" className={styles.links}>
          <button
            className={pathname === "/about" ? styles.ButtonIn : styles.buttons}
          >
            Sobre mi
          </button>
        </Link>
        <Link to="/contact" className={styles.links}>
          <button
            className={
              pathname === "/contact" ? styles.ButtonIn : styles.buttons
            }
          >
            Contacto
          </button>
        </Link>
        <Link to="/projects" className={styles.links}>
          <button
            className={
              pathname === "/projects" ? styles.ButtonIn : styles.buttons
            }
          >
            Proyectos
          </button>
        </Link>
      </div>
      
      <div onClick={()=>handleClick()}>
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
