import React, { useEffect } from 'react';
import Style from "./AboutMePage.module.scss";
import SectionBannerAboutMe from "../../../../components/public/section-banner-about-me/SectionBannerAboutMeComponent";
import SectionProjects from "../../../../components/public/section-projects-about-me/SectionProjectsAboutMeComponet";
import SectionContact from "../../../../components/public/section-contact-about-me/SectionContactAboutMeComponet";
import SectionExpertise from "../../../../components/public/section-expertise-about-me/SectionExpertiseAboutMeComponent";
import SectionEmployement from "../../../../components/public/section-employement-about-me copy/SectionEmployementAboutMeComponent";
import SectionEducation from "../../../../components/public/section-education-about-me/SectionEducationAboutMeComponent";

const AboutMePage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      sections.forEach((section: Element) => {
        const sectionElement = section as HTMLElement;
        if (window.scrollY > sectionElement.offsetTop - sectionElement.offsetHeight) {
          sectionElement.classList.add('hide');
        } else {
          sectionElement.classList.remove('hide');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      <div className={Style['container']}>
        <SectionBannerAboutMe className="section" />
        <SectionExpertise className="section" />
        <SectionEmployement className="section" />
        <SectionProjects className="section" />
        <SectionEducation className="section" />
        <SectionContact className="section" />
      </div>
    </React.Fragment>
  );
};

export default AboutMePage;