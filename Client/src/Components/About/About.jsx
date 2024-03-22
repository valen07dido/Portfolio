import React from "react";
import styles from "./About.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const About = () => {
  const aboutInfo = [
    {
      text: "¡Hola! Mi nombre es Valentín. Soy un desarrollador fullstack con una pasión inquebrantable 💪 por cada proyecto en el que participo. Mi entusiasmo por la programación se desborda en cada línea de código que escribo, y siempre busco dar lo mejor de mí en cada tarea que emprendo.",
      image: "../../../public/imagen1.jpg",
    },
    {
      text: " Mi viaje en el mundo de la programación comenzó cuando descubrí la vastedad y la profundidad que este campo tenía para ofrecer. La posibilidad de plasmar mi creatividad 🎨 en soluciones funcionales y la oportunidad de resolver problemas complejos me fascinaron desde el principio. Esta fascinación se ha convertido en una fuente constante de motivación que me impulsa a seguir creciendo y desarrollándome en mi carrera profesional.",
      image: "../../../public/imagen2.jpg",
    },
    {
      text: "En cuanto a mis aspiraciones, mi objetivo es dejar una huella positiva en cada proyecto en el que participo. Ya sea aprendiendo nuevas habilidades 📚 o dedicando tiempo extra para pulir los detalles, estoy comprometido a dar lo mejor de mí. Pero mis aspiraciones no se limitan a mi vida profesional. También busco crecer y mejorar en mi vida personal, ya que creo que el equilibrio entre ambos aspectos es esencial para una vida plena y satisfactoria.",
      image: "../../../public/imagen3.jpg",
    },
    {
      text: " Además de mi pasión por la programación, también valoro la colaboración y el trabajo en equipo 👥. Creo firmemente que las mejores soluciones surgen de la combinación de diversas perspectivas y habilidades. Por lo tanto, siempre estoy dispuesto a colaborar con otros, aprender de ellos y aportar mis propias ideas y experiencias.",
      image: "../../../public/imagen4.jpg",
    },
    {
      text: "Finalmente, aunque estoy orgulloso de lo lejos que he llegado, sé que todavía tengo mucho que aprender. La tecnología y la programación son campos en constante evolución 🔄, y estoy emocionado por las oportunidades de aprendizaje y crecimiento que aún están por venir.",
      image: "../../../public/imagen5.png",
    },
  ];
  return (
    <div className={styles.container}>
      <h1 className={styles.titles}>Sobre Mi:</h1>
      {aboutInfo.map((info, index) => {
        const controls = useAnimation();
        const { ref, inView } = useInView();

        React.useEffect(() => {
          if (inView) {
            controls.start("visible");
          } else {
            controls.start("hidden");
          }
        }, [controls, inView]);

        return (
          <div
            ref={ref}
            className={styles.contentContainer}
            style={{ flexDirection: index % 2 === 0 ? "row" : "row-reverse" }}
          >
            <motion.div
              animate={controls}
              initial="hidden"
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
              }}
            >
              <p className={styles.content}>{info.text}</p>
            </motion.div>
            <motion.div
              animate={controls}
              initial="hidden"
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: index % 2 === 0 ? 100 : -100 },
              }}
            >
              <img src={info.image} alt="About" className={styles.image} />
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default About;
