const nodemailer = require("nodemailer");
const { EMAIL, PASSWORD, EMAIL_RECEIVER, URL_FRONTEND } = process.env;

const PostMessage = (req, res) => {
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
};

const getProjects = (req, res) => {
  const projects = [
    {
      name: "pi pokemon",
      image: 'https://res.cloudinary.com/dpa8t14c2/image/upload/v1711067700/portfolio/kzeokyqejpc8pvxm9vok.png',
      url:"https://front-pokemon-iota.vercel.app/",
      repository:"https://github.com/valen07dido/piPokeapi.git",
      description:
        "el proyecto de pokemon se consume de una API ademas de unificar los datos de la API a la base de datos y poder crear nuevos personajes, el proyecto tiene busqueda por filtros. detalle de personaje con caracteristicas y un apartado para crear personajes, la navegacion por la pagina es muy sencilla e intuitiva para brindarle al cliente el confort al navegar",
    },
    {
      name: "rick and morty",
      image: 'https://res.cloudinary.com/dpa8t14c2/image/upload/v1711067701/portfolio/cokifbk6euzce9wr9sxw.png',
      url:"https://rick-and-morty-ashy-chi.vercel.app/",
      repository:"https://github.com/valen07dido/rick_and_morty.git",
      description:
        "El proyecto de Rick And Morty fue mi primer proyecto utilizando react para el Front-end y Express para el Back-end. el mismo se basa en una app donde vas buscando distintos personajes de la serie y los va mostrando en el home. la app maneja inicio de sesion, apartado de favoritos y filtrado de los mismos.",
    },
    {
      name: "hyper mega red",
      image: 'https://res.cloudinary.com/dpa8t14c2/image/upload/v1710290095/portfolio/gwougo0pz1jbobnexmad.svg',
      url:"https://pf-henry-sepia.vercel.app/",
      repository:"https://github.com/gabiMaglia/PF_HENRY.git",
      description:
        "La temática es un e-commerce con el control de stock y creación de los productos por parte del administrador. Además de eso, también tiene el ingreso y seguimiento de reparaciones a servicio técnico para los 3 perfiles (administrador, técnico y cliente), todo esto notificado mediante mail y/o whatsapp. Además, tiene estadísticas para que el administrador pueda informarse de todos los eventos producidos en la aplicación, entre otras funcionalidades que destacan de cualquier e-commerce corriente.",
    },
  ];
  try {
    res.status(200).json(projects);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { PostMessage, getProjects };
