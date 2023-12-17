import React from "react";
import Style from "./SectionBannerAboutMeComponent.module.scss";

const SectionBannerAboutMe = () => {
    return <React.Fragment>
        <div className={Style["container"]}>
            <div className={Style["content"]}>
                <div className={Style["text-wrapper"]}>
                   <h4>Front-End Developer</h4>
                    <h1>Hello, my name is Rishabh Raj Sharma</h1>
                   <p> My professional journey revolves around crafting engaging and user-centric digital experiences. I bring creativity and innovation to the forefront, ensuring that every design element serves both aesthetic and functional purposes.</p>
                    <button>Projects</button>
                    <button>Linked In</button>
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default SectionBannerAboutMe