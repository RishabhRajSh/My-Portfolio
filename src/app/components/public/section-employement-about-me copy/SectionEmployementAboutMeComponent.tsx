import React from "react";
import Style from "./SectionEmployementAboutMeComponent.module.scss";
import LogoAccuratics from "../../../../assets/icon/LogoAccuraticsSoftwares.svg";
import GalleryComponent from "../image-gallery/ImageGalleryComponent";
import Astro from "../../../../assets/images/ImgBanner.png"

type SectionEmployementProps = {
    className?: string;
  };
  

  const SectionEmployement: React.FC<SectionEmployementProps> = ({ className }) => {


    return (
        <React.Fragment>
            <div className={`${Style['container']} ${className}`}>
                <div className={Style['content-wrapper']}>
                    <div className={Style['content']}>
                        <h2>Current Employment</h2>
                        <img className={Style['logo']} src={LogoAccuratics} alt='Accuratics Logo' />
                        <h3>Accuratics Softwares</h3>
                        <p>ROLES AND RESPONSIBILITIES</p>
                    </div>
                    <div className={Style['gallery']}>
                        <GalleryComponent
                            title=""
                            description="Led design for web and mobile apps, ensuring seamless integration"
                            image={[Astro]}
                            icon={[]} />
                        <GalleryComponent
                            title=""
                            description="Worked on Frontend User Interface on React technology and Angular Technology."
                            image={[Astro]}
                            icon={[]} />
                        <GalleryComponent
                            title=""
                            description="Conducted user research, enhancing user-centric design."
                            image={[Astro]}
                            icon={[]} />
                        <GalleryComponent
                            title=""
                            description="Worked on CRUD operation."
                            image={[Astro]}
                            icon={[]} />
                        <GalleryComponent
                            title=""
                            description="Collaborated with developers, product managers, and stakeholders."
                            image={[Astro]}
                            icon={[]} />
                        <GalleryComponent
                            title=""
                            description="Used version control systems for Pull Requests, Merge Requests and Reviewing."
                            image={[Astro]}
                            icon={[]} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default SectionEmployement;