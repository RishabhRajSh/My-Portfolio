import React from "react";
import Style from "./ImageGalleryComponent.module.scss";
import { CardComponentProps } from '../../../interfaces';

const GalleryComponent: React.FC<CardComponentProps> = ({ description, image }) => {
    return (
        <div
            className={Style.gallery} style={{ backgroundImage: `url(${image[0]})` }}>
            <p className={Style.cardDescription}>{description}</p>
        </div>
    )
}


export default GalleryComponent