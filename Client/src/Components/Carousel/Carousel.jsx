import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.css";

const Carousel = ({ items }) => {
    const [isDragging, setIsDragging] = useState(false);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        beforeChange: () => setIsDragging(true),
        afterChange: () => setIsDragging(false)
    };
  return (
    <Slider {...settings} className={`${styles.slider} ${isDragging ? 'grabbing' : ''}`}>
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