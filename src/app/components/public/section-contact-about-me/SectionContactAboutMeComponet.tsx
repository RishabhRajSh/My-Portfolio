import React from "react";
import Style from "./SectionContactAboutMeComponet.module.scss";

type SectionContactProps = {
    className?: string;
  };

const SectionContact: React.FC<SectionContactProps> = ({ className }) => {
    return <React.Fragment>
         <div className={`${Style['container']} ${className}`}>
            <h2>Let's get Connected</h2>
        </div>
    </React.Fragment>

}

export default SectionContact