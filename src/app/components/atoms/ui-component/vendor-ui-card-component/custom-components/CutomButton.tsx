import React, { useState } from "react"
import Style from './CustomButton.module.scss'

interface CustomButtonProps {
    color: string
    icon: string
    text: string
    onClickColor: string
}

const CustomButton: React.FC<CustomButtonProps> = ({ color, icon, text, onClickColor }) => {
    const [buttonColor, setButtonColor] = useState(color)

    const handleMouseDown = () => {
        setButtonColor(onClickColor);
    }

    const handleMouseUp = () => {
        setButtonColor(color)
    }

    return (
        <button
            className={Style['button']}
            style={{ backgroundColor: buttonColor }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
        >
            <img className={Style['icon']} src={icon} alt="button icon" />
            <span>{text}</span>
        </button>
    );
}

export default CustomButton;
