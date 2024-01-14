import React from "react"
import Style from "./CardComponent.module.scss"
import { CardComponentProps } from '../../../../interfaces'

const CardComponent: React.FC<CardComponentProps> = ({ title, description, icon }) => {
    return (
        <div className={Style['card']} >
            <div className={Style['cardContent']}>
                <h2 className={Style['cardTitle']}>{title}</h2>
                <p className={Style['cardDescription']}>{description}</p>
            </div>
            <div className={Style['iconContainer']}>
                {icon.map((icon, index) => (
                    <img key={index} src={icon} alt={`${title} icon ${index}`} className={Style['cardIcon']} />
                ))}
            </div>
        </div>
    )
}

export default CardComponent