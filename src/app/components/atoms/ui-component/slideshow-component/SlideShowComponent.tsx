import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Style from "./SlideShowComponent.module.scss"
import { SlideShowProps } from "../../../../interfaces"

const SlideShow: React.FC<SlideShowProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 3000)

        return () => clearInterval(intervalId)

    }, [currentIndex, images.length])

    return (
        <div className={Style['container']}>
            <motion.div
                className={Style['content-wrapper']}
                key={currentIndex} 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                <img
                    className={Style['image']}
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                />
            </motion.div>
        </div>
    )
}

export default SlideShow
