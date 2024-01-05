import React from "react";
import Style from "./VerticleSliderComponent.module.scss";
import { VerticleSliderProps } from "../../../../interfaces";

const VerticleSlider: React.FC<VerticleSliderProps> = ({ description, image }) => {
    return <React.Fragment>
        <div className={Style['container']}>
            <div className={Style['content-wrapper']}>
                <h3 className={Style['description']}>{description}</h3>
                <div className={Style['images']} >
                    <img src={image[0]} alt="Left Image" className={Style['left-image']} />
                    <img src={image[1]} alt="Center Image" className={Style['right-image']} />
                    <img src={image[2]} alt="Right Image" className={Style['right-image']} />
                </div>
            </div>
        </div>
    </React.Fragment>
}
export default VerticleSlider