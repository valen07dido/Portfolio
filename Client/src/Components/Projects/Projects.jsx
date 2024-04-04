import React, { useEffect, useState } from "react";
import styles from "./Projects.module.css";
const url = import.meta.env.VITE_URL_BACKEND;
import { BiWorld } from "react-icons/bi";
import ReactPlayer from "react-player";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
const Projects = () => {
  const [project, setProject] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

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
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  return (
    <div className={styles.containerGlobal}>
      <h1 className={styles.titles}>Proyectos:</h1>
      <div className={styles.container}>
        {!project || project.length === 0 ? (
          <div>
            <h1>no hay proyectos</h1>
          </div>
        ) : (
          project.map((pro) => {
            return (
              <div
                className={styles.card}
                key={pro.name}
                onClick={() => handleProjectClick(pro)}
              >
                <h1 className={styles.name}>{pro.name}</h1>
                <img src={pro.image} alt={pro.name} className={styles.image} />
              </div>
            );
          })
        )}

        {selectedProject && (
          <div className={styles.modal}>
            <button onClick={handleClose} className={styles.button}>
              X
            </button>
            <div className={styles.popup}>
              <h1 className={styles.projectName}>{selectedProject.name}</h1>
              <div className={styles.container1}>
                <div className={styles.header}>
                  <ReactPlayer
                    url="https://vimeo.com/906000568?share=copy"
                    controls
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
