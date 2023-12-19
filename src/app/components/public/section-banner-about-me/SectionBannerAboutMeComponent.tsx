import React from "react";
import Style from "./SectionBannerAboutMeComponent.module.scss";
import PaperClipIcon from "../../../../assets/icon/paperclip_bold.svg";
import FigmaIcon from "../../../../assets/icon/IconFigmaStrokeWhite.svg";

const SectionBannerAboutMe = () => {
    return <React.Fragment>
        <div className={Style["container"]}>
            <div className={Style["content"]}>
                <div className={Style["text-wrapper"]}>
                    <h4>Ui/Ux Developer</h4>
                    <h1>Hi, my name is Rishabh Raj Sharma</h1>
                    <p> My professional journey revolves around crafting engaging and user-centric digital experiences. I bring creativity and innovation to the forefront, ensuring that every design element serves both aesthetic and functional purposes.</p>
                    <div className={Style['btn-wrapper']}>
                        <button><img src={PaperClipIcon} /> Download CV</button>
                        <button><img src={FigmaIcon} />View Figma</button>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default SectionBannerAboutMe