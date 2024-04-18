import React, { useState } from "react";
import Style from "./SlideShowComponent.module.scss"
import { SlideShowProps } from "../../../../interfaces";


const SlideShow: React.FC<SlideShowProps> = ({ images }) => {
    const [current, setCurrent] = useState(0); 
    const nextSlide = () => { 
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => { 
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    };

    return (
        <div className={Style['container']}>
            {images.map((image:string, index: number) => (
                <div key={index}>
                    {index === current && (
                        <img src={image} alt="slide" />
                    )}
                </div>
            ))}
            <button onClick={prevSlide}>Prev</button>
            <button onClick={nextSlide}>Next</button>
        </div>
    )
}

export default SlideShow
