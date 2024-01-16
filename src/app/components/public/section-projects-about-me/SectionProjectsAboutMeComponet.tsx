import React from "react"
import Style from "./SectionProjectsAboutMeComponet.module.scss"
import SlideShow from "../../atoms/ui-component/slideshow-component/SlideShowComponent"
import AhbAdmin from "../../../../assets/images/ImgAdvetisementWebsitesAdmin.png"
import BankingMockup from "../../../../assets/images/ImgBankingAppUiMockup.png"
import BookStoreMockup from "../../../../assets/images/ImgBookStore.png"

const SectionProjects = () => {
    return (
        <React.Fragment>
            <div className={Style['container']} >
                <div className={Style['content-wrapper']}>
                    <h2 className={Style['heading']}>Project Gallery</h2>
                    <div className={Style['slide-show']}>
                        <SlideShow
                            image={[AhbAdmin, BankingMockup, BookStoreMockup]}
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SectionProjects