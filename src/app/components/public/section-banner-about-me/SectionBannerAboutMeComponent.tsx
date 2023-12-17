import React from "react";
import Style from "./SectionBannerAboutMeComponent.module.scss";

const SectionBannerAboutMe = () => {
    return <React.Fragment>
        <div className={Style["container"]}>
            <div className={Style["content"]}>
                <div className={Style["text-wrapper"]}>
                    <h1>Elevating Experiences Through Design.</h1>
                    <button>Download Resume</button>
                    <button>View Figma</button>
                </div>
            </div>

        </div>
    </React.Fragment>
}

export default SectionBannerAboutMe