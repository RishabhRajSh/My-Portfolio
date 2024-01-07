import React from 'react'
import Style from "./FancyScrollComponent.module.scss"
import { FancyScrollProps } from '../../../../interfaces'

const FancyScrollComponenet: React.FC<FancyScrollProps> = ({ title, heading, description, image }) => {
    return <React.Fragment>
        <div className={Style['container']}>
            <div className={Style['content-wrapper']}>
                <div className={Style['content']}>
                    <h2 className={Style['title']}>{title}</h2>
                    <p className={Style['heading']}>{heading}</p>
                    <p className={Style['description']}>{description}</p>
                </div>
            <img src={image[0]} alt="image" className={Style['image']} />
            </div>
        </div>

    </React.Fragment>

}
export default FancyScrollComponenet