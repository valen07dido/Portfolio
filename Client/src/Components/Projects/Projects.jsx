import React from "react";
import styles from './Projects.module.css'
const Projects = ({ project }) => {

  return (
    <div className={styles.container}>
      {!project||project.length === 0 ? (
        <div>
          <h1>no hay proyectos</h1>
        </div>
      ) : (
        project.map((pro) => {
          return (
            <div className={styles.card}>
              <h1 className={styles.name}>{pro.name}</h1>
              <img src={pro.image} alt={pro.name} className={styles.image}/>
              <p className={styles.content}>{pro.description}</p>
            </div>
          )
        })
      )}
    </div>
  );
};

export default Projects;