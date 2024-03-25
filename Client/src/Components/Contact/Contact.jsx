import React, { useState } from "react";
import styles from "./Contact.module.css";
import swal from "sweetalert2";
import validations from "./validations";
const url = import.meta.env.VITE_URL_BACKEND;
const Contact = () => {
  console.log(url);
  const [data, setData] = useState({
    name: "",
    email: "",
    affair: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
    setErrors(validations(data));
  };
  console.log(errors);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      swal.fire({
        title: "Por Favor espere.",
        text: "estamos enviando su mensaje.",
        type: "info",
        showConfirmButton: false,
        didClose: false,
        closeOnEsc: false,
        customClass: { popup: styles.alert },
      });
      swal.showLoading();

      const response = await fetch(`${url}/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(response);

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
        customClass: { popup: styles.alert },
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
              id="name"
              required
              onChange={handleChange}
              value={data.name}
            />
            <label htmlFor="name">Nombre</label>
            {errors.e1 && <p>{errors.e1}</p>}
          </div>
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="email"
              id="email"
              required
              onChange={handleChange}
              value={data.email}
            />
            <label htmlFor="email">Email</label>
            {errors.e2 && <p>{errors.e2}</p>}
          </div>
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="affair"
              id="affair"
              required
              onChange={handleChange}
              value={data.affair}
            />
            <label htmlFor="affair">Asunto</label>
            {errors.e3 && <p>{errors.e3}</p>}
          </div>
          <div className={styles.inputGroup}>
            <textarea
              name="message"
              placeholder="Ingrese su mensaje aqui..."
              id=""
              cols="100%"
              rows="10"
              required
              onChange={handleChange}
              value={data.message}
              className={styles.message}
            ></textarea>
            {errors.e4 && <p>{errors.e4}</p>}
          </div>
          <button className={styles.buttons} type="submit">
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
