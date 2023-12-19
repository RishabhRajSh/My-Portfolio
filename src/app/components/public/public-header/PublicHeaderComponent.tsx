import React, { useEffect, useState } from "react"
import Style from "./PublicHeaderComponent.module.scss"
import MyLogo from "../../../../assets/icon/IconLogo.svg"

const PublicHeaderComponent = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return <React.Fragment>
        <div className={`${Style['container']} ${isScrolled ? Style.scrolled : ""}`}>
            <img src={MyLogo} alt="Rishabh Raj Sharma" />
            <button>Let's get connected</button>
        </div>
    </React.Fragment>
}

export default PublicHeaderComponent
