import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.css";

const Carousel = ({ items }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true, /* Habilita el giro automático */
        autoplaySpeed: 2000, /* Configura la velocidad del giro automático (en milisegundos) */
    };
  return (
    <Slider {...settings} className={styles.slider}>
      {items.map((item, index) => (
        <div key={index} className={styles.container}>
          <img
            src={item.image}
            alt={item.alt}
            className={styles.images}
            style={{ margin: "0 auto" }}
          />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
