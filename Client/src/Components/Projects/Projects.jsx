import React from "react";
import pokeapi from "../../../public/pokeapi.gif";
import rickAndMorty from "../../../public/rickAndMorty.gif";
import hyperMegaRed from "../../../public/hyperMegaRed.svg";
import styles from './Projects.module.css'
const Projects = () => {
  const project = [
    {
      name: "pi pokemon",
      image: pokeapi,
      description:
        "el proyecto de pokemon se consume de una API ademas de unificar los datos de la API a la base de datos y poder crear nuevos personajes, el proyecto tiene busqueda por filtros. detalle de personaje con caracteristicas y un apartado para crear personajes, la navegacion por la pagina es muy sencilla e intuitiva para brindarle al cliente el confort al navegar",
    },
    {
      name: "rick and morty",
      image: rickAndMorty,
      description:
        "El proyecto de Rick And Morty fue mi primer proyecto utilizando react para el Front-end y Express para el Back-end. el mismo se basa en una app donde vas buscando distintos personajes de la serie y los va mostrando en el home. la app maneja inicio de sesion, apartado de favoritos y filtrado de los mismos.",
    },
    {
      name: "hyper mega red",
      image: hyperMegaRed,
      description:
        "La temática es un e-commerce con el control de stock y creación de los productos por parte del administrador. Además de eso, también tiene el ingreso y seguimiento de reparaciones a servicio técnico para los 3 perfiles (administrador, técnico y cliente), todo esto notificado mediante mail y/o whatsapp. Además, tiene estadísticas para que el administrador pueda informarse de todos los eventos producidos en la aplicación, entre otras funcionalidades que destacan de cualquier e-commerce corriente.",
    },
  ];
  return (
    <div className={styles.container}>
      {project.map((pro) => {
        return (
          <div className={styles.card}>
            <h1 className={styles.name}>{pro.name}</h1>
            <img src={pro.image} alt={pro.name} className={styles.image}/>
            <p className={styles.content}>{pro.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
