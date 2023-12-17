import React, { useEffect, useState } from "react"
import Style from "./PublicHeaderComponent.module.scss"

const PublicHeaderComponent = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])



    return <React.Fragment>
        <div className={`${Style['container']} ${isScrolled ? Style.scrolled : ""}`}>
        <p>Portfolio</p>
        <span>Rishabh Raj Sharma</span>
        </div>
    </React.Fragment>
}

export default PublicHeaderComponent
