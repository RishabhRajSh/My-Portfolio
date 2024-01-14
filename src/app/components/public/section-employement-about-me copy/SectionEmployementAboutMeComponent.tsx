import React from "react";
import Style from "./SectionEmployementAboutMeComponent.module.scss";
import LogoAccuratics from "../../../../assets/icon/LogoAccuraticsSoftwares.svg";
import FoodUiMockUp from "../../../../assets/images/ImgFoodOrderUiMockup.png";
import CRUDUiMockUp from "../../../../assets/images/ImgDashboardCRUDMockup.png";
import GisMockup from "../../../../assets/images/ImgGisMockup.png";
import FancyScrollComponent from "../../atoms/ui-component/fancy-scroll/FancyScrollComponent";
import Flowchart from "../../../../assets/images/ImgFlowchartmockup.png"
import SlideShow from "../../atoms/ui-component/slideshow-component/SlideShowComponent";
const SectionEmployement = () => {

    return (
        <React.Fragment>
            <div className={Style['container']}>
                <div className={Style['content-wrapper']}>
                    <div className={Style['content']}>
                        <h2 className={Style['heading']}>Current Employment</h2>
                        <img className={Style['logo']} src={LogoAccuratics} alt='Accuratics Logo' />
                        <p>ROLES AND RESPONSIBILITIES</p>
                    </div>
                    <FancyScrollComponent
                        title={["UI-Ux"]}
                        heading={['Front-End UI UX Desigining']}
                        description={["As a design guide for web and mobile applications, I meticulously shape user interfaces, prioritizing seamless integration. My focus is on creating a unified and exceptional user experience that transcends across various platforms."]}
                        image={FoodUiMockUp}   
                    />
                    <FancyScrollComponent
                        title={["Libraries-Frameworks"]}
                        heading={['Front-End UI Development']}
                        description={["Contributed significantly to the Frontend UI by harnessing React and Angular technologies. Enhanced user interfaces with dynamic, responsive, and engaging designs, elevating overall user experience and ensuring seamless interactions on diverse platforms."]}
                        image={GisMockup}
                    />
                    <FancyScrollComponent
                        title={["Diagrams and Flow"]}
                        heading={['User Reasearch with Flow']}
                        description={["Guiding the design process for web and mobile applications, I ensure a cohesive user experience. My approach prioritizes smooth integration across platforms, fostering a unified and user-friendly digital environment."]}
                        image={Flowchart}
                    />
                    <FancyScrollComponent
                        title={["CRUD Operation"]}
                        heading={['Data Management with CRUD Operations']}
                        description={['Experience seamless data manipulation and organization through the implementation of CRUD (Create, Read, Update, Delete) operations. Navigate the intricacies of efficient data handling, ensuring a robust foundation for web and mobile applications.']}
                        image={CRUDUiMockUp}
                    />
                   
                </div>
            </div>
        </React.Fragment>
    );
};

export default SectionEmployement;