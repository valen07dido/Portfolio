import React, { useState } from "react";
import styles from "./Contact.module.css";
import swal from "sweetalert2";
const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    affair: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      swal.fire({
        title: "Por Favor espere.",
        text: "estamos enviando su mensaje.",
        type: "info",
        showConfirmButton: false,
        closeOnClickOutside: false,
        closeOnEsc: false,
        customClass:{popup:styles.alert}
      });
      swal.showLoading();

      const response = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el formulario");
      }
      
      setData({
        name: "",
        email: "",
        affair: "",
        message: "",
      });
      swal.close();
      swal.fire({
        title: "Exito!!",
        text: "mensaje enviado correctamente",
        type: "success",
        customClass:{popup:styles.alert}
        
      });
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(data);
  return (
    <div className={styles.container}>
      <div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1>Contactame</h1>
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="name"
              id=""
              required
              onChange={handleChange}
              value={data.name}
            />
            <label htmlFor="">nombre</label>
          </div>
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="email"
              id=""
              required
              onChange={handleChange}
              value={data.email}
            />
            <label htmlFor="">email</label>
          </div>
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="affair"
              id=""
              required
              onChange={handleChange}
              value={data.affair}
            />
            <label htmlFor="">Asunto</label>
          </div>
          <div className={styles.inputGroup}>
            <textarea
              name="message"
              id=""
              cols="77"
              rows="10"
              required
              onChange={handleChange}
              value={data.message}
            ></textarea>
            <label htmlFor="">mensaje</label>
          </div>
          <button className={styles.buttons} type="submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
