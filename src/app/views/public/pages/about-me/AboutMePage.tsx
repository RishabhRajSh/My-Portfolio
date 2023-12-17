import React from "react"
import Style from "./AboutMePage.module.scss"
import SectionBannerAboutMe from "../../../../components/public/section-banner-about-me/SectionBannerAboutMeComponent"
import PublicHeaderComponent from "../../../../components/public/public-header/PublicHeaderComponent"


const AboutMePage = () => {
    return <React.Fragment>
        <div className={Style['container']}>
        <PublicHeaderComponent />
            <SectionBannerAboutMe />
        </div>
    </React.Fragment >

}

export default AboutMePage