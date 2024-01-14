import React from "react";
import Style from "./SectionProjectsAboutMeComponet.module.scss";


const SectionProjects = () => {
    return (
        <React.Fragment>
            <div className={Style['container']} >
                <h2>Project Gallery</h2>
                 {/* <SlideShow 
                    image={[FoodUiMockUp, GisMockup, Flowchart, CRUDUiMockUp]}
                    /> */}
            </div>
        </React.Fragment>
    )
}

export default SectionProjects