import React, { useEffect, useState } from "react";
import styles from "./Projects.module.css";
import { FaExternalLinkAlt } from "react-icons/fa";
const Projects = () => {
  const [project, setProject] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/projects")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
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
            <div>
              <h1>{selectedProject.name}</h1>
              <img src={selectedProject.image} alt={selectedProject.name} className={styles.modalImg} />
            </div>
            <p className={styles.content}>{selectedProject.description}</p>
            <a href={selectedProject.url}>
              <FaExternalLinkAlt className={styles.icon} /><p>ir al sitio web</p>
            </a>
          </div>
          <button onClick={handleClose}>Cerrar</button>
        </div>
      )}
    </div>
  );
};

export default Projects;
