require("dotenv").config();
const { EMAIL, PASSWORD, EMAIL_RECEIVER,URL_FRONTEND } = process.env;
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
var cors = require("cors");

const app = express();

app.use(cors({ credentials: true, origin: `${URL_FRONTEND}` }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/send", (req, res) => {
  const output = `
    <p>Tienes una nueva solicitud de contacto</p>
    <h3>Detalles del contacto</h3>
    <ul>
      <li>Nombre: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Asunto: ${req.body.affair}</li>
    </ul>
    <h3>Mensaje</h3>
    <p>${req.body.message}</p>
  `;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: `${EMAIL}`, // Cambia esto por tu correo
      pass: `${PASSWORD}`, // Cambia esto por tu contraseña
    },
  });

  let mailOptions = {
    from: `"Solicitud de contacto" <${EMAIL}>`,
    to: `${EMAIL_RECEIVER}`,
    subject: "Nueva solicitud de contacto",
    html: output,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Mensaje enviado: %s", info.messageId);
    console.log("Vista previa del URL: %s", nodemailer.getTestMessageUrl(info));

    res.send("Email ha sido enviado");
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
