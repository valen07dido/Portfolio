import React, { useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  }
  console.log(data)
  return (
    <div className={styles.container}>
      <div>
        <form action="https://formsubmit.co/valendido69@gmail.com" method="POST" className={styles.form} onSubmit={null}>
          <h1>Contactame</h1>
          <div className={styles.inputGroup}>
            <input type="text" name="name" id="" required onChange={handleChange} value={data.name} />
            <label htmlFor="">nombre</label>
          </div>
          <div className={styles.inputGroup}>
            <input type="text" name="email" id="" required onChange={handleChange} value={data.email}/>
            <label htmlFor="">email</label>
          </div>
          <div className={styles.inputGroup}>
            <textarea name="message" id="" cols="77" rows="10" required onChange={handleChange} value={data.message}></textarea>
            <label htmlFor="">mensaje</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;