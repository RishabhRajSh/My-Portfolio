import React from "react";
import Style from "./ImageGalleryComponent.module.scss";
import { CardComponentProps } from '../../../interfaces';

const GalleryComponent: React.FC<CardComponentProps> = ({ image }) => {
    return (
        <div className={Style.gallery}>
            {image.map((imgUrl, index) => (
                <img key={index} src={imgUrl} alt="" className={Style.image} />
            ))}
        </div>
    )
}

export default GalleryComponent