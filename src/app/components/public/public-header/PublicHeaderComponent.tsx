import React, { useEffect, useState } from "react"
import Style from "./PublicHeaderComponent.module.scss"
import { Link } from "react-router-dom"

const PublicHeaderComponent = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])



    return <React.Fragment>
        <div className={`${Style['container']} ${isScrolled ? Style.scrolled : ""}`}>
        <span>Rishabh Raj Sharma</span> 
        {/* replace this to Link to = "linked in" */}
        <Link to ='/'>About Me</Link>
        <Link to ='/'>Projects</Link>
        <Link to ='/'>Contact</Link>
        </div>
    </React.Fragment>
}

export default PublicHeaderComponent
