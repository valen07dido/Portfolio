import React, { useEffect, useState } from "react";
import styles from "./Projects.module.css";
const Projects = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/projects")
      .then((response) => response.json())
      .then((data) =>{
         console.log(data)
        setProject(data)})
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <div className={styles.container}>
      {!project || project.length === 0 ? (
        <div>
          <h1>no hay proyectos</h1>
        </div>
      ) : (
        project.map((pro) => {
          return (
            <div className={styles.card} key={pro.name}>
              <h1 className={styles.name}>{pro.name}</h1>
              <img src={pro.image} alt={pro.name} className={styles.image} />
            </div>
          );
        })
      )}
    </div>
  );
};

export default Projects;
