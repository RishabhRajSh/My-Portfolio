import React, { useEffect } from 'react';
import Style from "./AboutMePage.module.scss";
import ScrollToTop from "react-scroll-to-top";
import SectionBannerAboutMe from "../../../../components/public/section-banner-about-me/SectionBannerAboutMeComponent";
import SectionProjects from "../../../../components/public/section-projects-about-me/SectionProjectsAboutMeComponet";
import SectionContact from "../../../../components/public/section-contact-about-me/SectionContactAboutMeComponet";
import SectionExpertise from "../../../../components/public/section-expertise-about-me/SectionExpertiseAboutMeComponent";
import SectionEmployement from "../../../../components/public/section-employement-about-me copy/SectionEmployementAboutMeComponent";
import SectionEducation from "../../../../components/public/section-education-about-me/SectionEducationAboutMeComponent";

const AboutMePage = () => {

  return (
    <React.Fragment>
      <div className={Style['container']}>
        <ScrollToTop />
        <SectionBannerAboutMe />
        <SectionExpertise />
        <SectionEmployement  />
        <SectionProjects  />
        <SectionEducation />
        <SectionContact  />
      </div>
    </React.Fragment>
  );
};

export default AboutMePage;