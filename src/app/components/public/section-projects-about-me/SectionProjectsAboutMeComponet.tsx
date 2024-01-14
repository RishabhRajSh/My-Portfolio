import React from "react"
import Style from "./SectionProjectsAboutMeComponet.module.scss"
import SlideShow from "../../atoms/ui-component/slideshow-component/SlideShowComponent"


const SectionProjects = () => {
    return (
        <React.Fragment>
            <div className={Style['container']} >
                <div className={Style['content-wrapper']}>
                    <h2 className={Style['heading']}>Project Gallery</h2>
                    <SlideShow
                        image={[]}
                    />
                </div>
            </div>
        </React.Fragment>
    )
}

export default SectionProjects