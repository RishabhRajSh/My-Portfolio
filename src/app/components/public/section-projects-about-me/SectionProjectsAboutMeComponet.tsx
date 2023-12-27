import React from "react";
import Style from "./SectionProjectsAboutMeComponet.module.scss";

type SectionProjectsProps = {
    className?: string;
  };

const SectionProjects: React.FC<SectionProjectsProps> = ({ className }) => {
    return <React.Fragment>
         <div className={`${Style['container']} ${className}`}>
            <h2>Project Gallery</h2>
        </div>
    </React.Fragment>
}

export default SectionProjects