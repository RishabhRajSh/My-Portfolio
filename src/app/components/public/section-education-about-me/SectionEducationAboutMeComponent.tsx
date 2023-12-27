import React from "react";
import Style from "./SectionEducationAboutMeComponent.module.scss";

type SectionEducationProps = {
    className?: string;
  };

const SectionEducation : React.FC<SectionEducationProps> = ({ className }) => {
    return <React.Fragment>
        <div className={`${Style['container']} ${className}`}>
            <h2>My Education</h2>
        </div>

    </React.Fragment>
}
export default SectionEducation