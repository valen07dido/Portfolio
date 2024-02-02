import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {


  return (
    <div className={styles.container}>
      <div>
        <form action="" className={styles.form}>
          <h1>Contactame</h1>
          <div className={styles.inputGroup}>
            <input type="text" name="" id="" required />
            <label htmlFor="">nombre</label>
          </div>
          <div className={styles.inputGroup}>
            <input type="text" name="" id="" required />
            <label htmlFor="">email</label>
          </div>
          <div className={styles.inputGroup}>
            <textarea name="" id="" cols="80" rows="10" placeholder="Escribe tu mensaje aqui..." required></textarea>
          </div>
        </form>
      </div>

    </div>
  );
};

export default Contact;