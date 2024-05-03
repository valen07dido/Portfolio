import React, { useEffect, useState } from "react";
import styles from "./Projects.module.css";
const url = import.meta.env.VITE_URL_BACKEND;
import { BiWorld } from "react-icons/bi";
import ReactPlayer from "react-player";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import loadingIcon from "../../../public/tadpole-black-36.svg";

const Projects = () => {
  const [project, setProject] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    fetch(`${url}/projects`)
      .then((response) => response.json())
      .then((data) => {
        setProject(data);
      })
      .catch((error) => console.log(error.message));
  }, []);

  const handleProjectClick = (pro) => {
    setSelectedProject(pro);
    setVideoReady(false);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  return (
    <div className={styles.containerGlobal}>
      <h1 className={styles.titles}>Proyectos:</h1>
      <div className={styles.container}>
        {!project || project.length === 0
          ? setProject([
              {
                name: "pi pokemon",
                image:
                  "https://res.cloudinary.com/dpa8t14c2/image/upload/v1711067700/portfolio/kzeokyqejpc8pvxm9vok.png",
                url: "https://front-pokemon-iota.vercel.app/",
                repository: "https://github.com/valen07dido/piPokeapi.git",
                description:
                  "el proyecto de pokemon se consume de una API ademas de unificar los datos de la API a la base de datos y poder crear nuevos personajes, el proyecto tiene busqueda por filtros. detalle de personaje con caracteristicas y un apartado para crear personajes, la navegacion por la pagina es muy sencilla e intuitiva para brindarle al cliente el confort al navegar",
              },
              {
                name: "rick and morty",
                image:
                  "https://res.cloudinary.com/dpa8t14c2/image/upload/v1711067701/portfolio/cokifbk6euzce9wr9sxw.png",
                url: "https://rick-and-morty-ashy-chi.vercel.app/",
                repository: "https://github.com/valen07dido/rick_and_morty.git",
                description:
                  "El proyecto de Rick And Morty fue mi primer proyecto utilizando react para el Front-end y Express para el Back-end. el mismo se basa en una app donde vas buscando distintos personajes de la serie y los va mostrando en el home. la app maneja inicio de sesion, apartado de favoritos y filtrado de los mismos.",
              },
              {
                name: "hyper mega red",
                image:
                  "https://res.cloudinary.com/dpa8t14c2/image/upload/v1710290095/portfolio/gwougo0pz1jbobnexmad.svg",
                url: "https://pf-henry-sepia.vercel.app/",
                repository: "https://github.com/gabiMaglia/PF_HENRY.git",
                description:
                  "La temática es un e-commerce con el control de stock y creación de los productos por parte del administrador. Además de eso, también tiene el ingreso y seguimiento de reparaciones a servicio técnico para los 3 perfiles (administrador, técnico y cliente), todo esto notificado mediante mail y/o whatsapp. Además, tiene estadísticas para que el administrador pueda informarse de todos los eventos producidos en la aplicación, entre otras funcionalidades que destacan de cualquier e-commerce corriente.",
              },
            ])
          : project.map((pro) => {
              return (
                <div
                  className={styles.card}
                  key={pro.name}
                  onClick={() => handleProjectClick(pro)}
                >
                  <h1 className={styles.name}>{pro.name}</h1>
                  <img
                    src={pro.image}
                    alt={pro.name}
                    className={styles.image}
                  />
                </div>
              );
            })}

        {selectedProject && (
          <div className={styles.modal}>
            <div className={styles.popup}>
              <div className={styles.title}>
                <h1 className={styles.projectName}>{selectedProject.name}</h1>
                <button onClick={handleClose} className={styles.button}>
                  X
                </button>
              </div>
              <div className={styles.container1}>
                <div className={styles.header}>
                  {!videoReady && (
                    <img
                      src={loadingIcon}
                      alt="Loading"
                      className={styles.loading}
                    />
                  )}
                  <ReactPlayer
                    url="https://vimeo.com/906000568?share=copy"
                    controls
                    onReady={() => setVideoReady(true)}
                  />
                </div>
                <div className={styles.links}>
                  <a href={selectedProject.url} className={styles.url}>
                    <BiWorld className={styles.icon} /> visite el sitio web
                  </a>
                  <a href={selectedProject.repository} className={styles.url}>
                    <FaGithub className={styles.icon} /> visite el repositorio
                  </a>
                </div>
              </div>
              <p className={styles.content}>{selectedProject.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
