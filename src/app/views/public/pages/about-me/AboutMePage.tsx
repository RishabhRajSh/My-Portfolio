import React from "react"
import Style from "./AboutMePage.module.scss"
import SectionBannerAboutMe from "../../../../components/public/section-banner-about-me/SectionBannerAboutMeComponent"


const AboutMePage = () => {
    return <React.Fragment>
        <div className={Style['container']}>
            <SectionBannerAboutMe />
        </div>
    </React.Fragment >

}

export default AboutMePage