import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.css";

const Carousel = ({ items }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [slidesToShow, setSlidesToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setSlidesToShow(1);
            } else {
                setSlidesToShow(3);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
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