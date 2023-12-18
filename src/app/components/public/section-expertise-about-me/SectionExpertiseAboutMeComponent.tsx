import React from "react";
import Style from "./SectionExpertiseAboutMeComponent.module.scss";
import CardComponent from '../card-component/CardComponent';
import IconFigma from "../../../../assets/icon/IconFigma.svg"
import IconAdobePS from "../../../../assets/icon/IconAdobePhotoshop.svg"
import IconAdobeIl from "../../../../assets/icon/IconAdobeIllustrator.svg"
import IconAdodeXd from "../../../../assets/icon/IconAdobeXd.svg"
import IconFramer from "../../../../assets/icon/IconFramer.svg"
import IconC from "../../../../assets/icon/IconC.svg"
import IconPython from "../../../../assets/icon/IconPython.svg"
import IconJS from "../../../../assets/icon/IconJavascript.svg"
import IconReact from "../../../../assets/icon/IconReactJs.svg"
import IconAngular from "../../../../assets/icon/IconAngularJs.svg"
import IconGithub from "../../../../assets/icon/IconGithub.svg"
import IconGitlab from "../../../../assets/icon/IconGitlab.svg"
import IconGit from "../../../../assets/icon/IconGit.svg"
import IconTS from "../../../../assets/icon/IconTypeScript.svg"


const SectionExpertise = () => {
    return (
        <React.Fragment>
            <div className={Style['container']}>
                <h2>My Expertise</h2>
                <div className={Style['card-wrapper']}>
                    <CardComponent
                        title="Graphics Designing"
                        description=""
                        icon={[IconFigma, IconAdodeXd, IconAdobeIl, IconAdobePS, IconFramer]}
                    />
                    <CardComponent
                        title="Programming languages"
                        description=""
                        icon={[IconC, IconPython, IconJS]}
                    />
                    <CardComponent
                        title="Frameworks & Library"
                        description=""
                        icon={[IconTS, IconAngular, IconReact]}
                    />
                    <CardComponent
                        title="Version Control"
                        description=""
                        icon={[IconGithub, IconGitlab, IconGit]}
                    />
                </div>
            </div>
        </React.Fragment>
    )
}

export default SectionExpertise