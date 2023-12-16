import React, { useEffect, useState } from "react"



const PublicHeaderComponent = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])


    
    return <React.Fragment>
       
    </React.Fragment>
}

export default PublicHeaderComponent
