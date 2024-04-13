import React, { useEffect, useState } from "react";
import styles from "./Projects.module.css";
const url = import.meta.env.VITE_URL_BACKEND;
import { BiWorld } from "react-icons/bi";
import ReactPlayer from "react-player";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import loadingIcon from "../../../public/tadpole-black-36.svg"

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
            <div className={styles.popup}>
              <div className={styles.title}>
                <h1 className={styles.projectName}>{selectedProject.name}</h1> 
                <button onClick={handleClose} className={styles.button}>
                  X
                </button>
              </div>
              <div className={styles.container1}>
                <div className={styles.header}>
                  {!videoReady && <img src={loadingIcon} alt="Loading" className={styles.loading}/>}
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
