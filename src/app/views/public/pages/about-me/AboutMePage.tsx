import React from "react"
import Style from "./AboutMePage.module.scss"
import SectionBannerAboutMe from "../../../../components/public/section-banner-about-me/SectionBannerAboutMeComponent"


const AboutMePage = () => {
    return <React.Fragment>
        <div className={Style['container']}>
            <SectionBannerAboutMe />
            <h1>Hello</h1>
           
        </div>
    </React.Fragment >

}

export default AboutMePage