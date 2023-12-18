import React from "react";
import Style from "./SectionEmployementAboutMeComponent.module.scss";
import LogoAccuratics from "../../../../assets/icon/LogoAccuraticsSoftwares.svg"

const SectionEmployement = () => {
    return <React.Fragment>
        <div className={Style['container']}>
            <h2>Current Employement</h2>
            <div className={Style['page wrapper']}>
                <img src={LogoAccuratics} alt="Accuratics SOftwares"></img>
                <p>Accuratics Softwares Private Limited</p>
            </div>
        </div>

    </React.Fragment>
}
export default SectionEmployement