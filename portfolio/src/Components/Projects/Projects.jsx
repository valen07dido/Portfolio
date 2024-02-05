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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus efficitur mauris, id pretium nisi aliquam eu. Suspendisse egestas magna a pulvinar porta. Vestibulum facilisis libero elit, et pulvinar sem facilisis a. Etiam malesuada tempor aliquet. Quisque rutrum scelerisque tempus. Pellentesque elit leo, dictum sit amet magna ornare, pulvinar venenatis mi. Ut et posuere leo. Mauris in sapien tristique, convallis magna in, blandit nunc. Aenean lacinia eros ut dictum lobortis.",
    },
    {
      name: "rick and morty",
      image: rickAndMorty,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus efficitur mauris, id pretium nisi aliquam eu. Suspendisse egestas magna a pulvinar porta. Vestibulum facilisis libero elit, et pulvinar sem facilisis a. Etiam malesuada tempor aliquet. Quisque rutrum scelerisque tempus. Pellentesque elit leo, dictum sit amet magna ornare, pulvinar venenatis mi. Ut et posuere leo. Mauris in sapien tristique, convallis magna in, blandit nunc. Aenean lacinia eros ut dictum lobortis.",
    },
    {
      name: "hyper mega red",
      image: hyperMegaRed,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus efficitur mauris, id pretium nisi aliquam eu. Suspendisse egestas magna a pulvinar porta. Vestibulum facilisis libero elit, et pulvinar sem facilisis a. Etiam malesuada tempor aliquet. Quisque rutrum scelerisque tempus. Pellentesque elit leo, dictum sit amet magna ornare, pulvinar venenatis mi. Ut et posuere leo. Mauris in sapien tristique, convallis magna in, blandit nunc. Aenean lacinia eros ut dictum lobortis.",
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
