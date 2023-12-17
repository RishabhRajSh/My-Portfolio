import React from "react"
import Style from "./AboutMePage.module.scss"
import SectionBannerAboutMe from "../../../../components/public/section-banner-about-me/SectionBannerAboutMeComponent"
import SectionProjects from "../../../../components/public/section-projects-about-me/SectionProjectsAboutMeComponet"
import SectionContact from "../../../../components/public/section-contact-about-me/SectionContactAboutMeComponet"


const AboutMePage = () => {
    return <React.Fragment>
        <div className={Style['container']}>
            <SectionBannerAboutMe />
            <SectionProjects />
            <SectionContact />
        </div>
    </React.Fragment >

}

export default AboutMePage