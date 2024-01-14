import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Style from "./SlideShowComponent.module.scss";
import { SlideShowProps } from "../../../../interfaces";

const SlideShow: React.FC<SlideShowProps> = ({ image }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % image.length);
        }, 3000);

        return () => clearInterval(intervalId);

    }, [currentIndex, image.length]);

    return (
        <div className={Style['container']}>
            <motion.div
                className={Style['content-wrapper']}
                key={currentIndex} // Key ensures that the motion component animates when the image changes
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                <img
                    className={Style['image']}
                    src={image[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                />
            </motion.div>
        </div>
    );
};

export default SlideShow;
