import React from "react";
import Style from "./SectionEmployementAboutMeComponent.module.scss";
import LogoAccuratics from "../../../../assets/icon/LogoAccuraticsSoftwares.svg";
import VerticleSlider from "../../atoms/ui-component/verticle-slider-component/VerticleSliderComponent";
import FoodUiMockUp from "../../../../assets/images/ImgFoodOrderUiMockup.png";
import BankingUiMockUp from "../../../../assets/images/ImgBankingAppUiMockup.png";
import AdvUiMockUp from "../../../../assets/images/ImgAdvetisementWebsiteMockup.png";
import GisMockup from "../../../../assets/images/ImgGisMockup.png";
import EcomMockup from "../../../../assets/images/ImgEcomMockup.png";
import AsplMockup from "../../../../assets/images/ImgAsplMockup.png";
import FlowchartComponent from "../../atoms/ui-component/flow-chart/FlowChartComponent";
import FancyScrollComponent from "../../atoms/ui-component/fancy-scroll/FancyScrollComponent";
import Flowchart from "../../../../assets/images/ImgFlowchartmockup.png"
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
                        description={['Guided design for web and mobile apps, ensuring smooth integration for a unified user experience across platforms.']}
                        image={[FoodUiMockUp]}   
                    />
                    <FancyScrollComponent
                        title={["Libraries-Frameworks"]}
                        heading={['Front-End UI Development']}
                        description={['Contributed to Frontend UI, leveraging React and Angular technologies, enhancing user interfaces with dynamic, responsive, and engaging designs.']}
                        image={[GisMockup]}
                    />
                    <FancyScrollComponent
                        title={["Diagrams and Flow"]}
                        heading={['User Reasearch with Flow']}
                        description={['Guided design for web and mobile apps, ensuring smooth integration for a unified user experience across platforms.']}
                        image={[Flowchart]}
                    />
                </div>
            </div>
        </React.Fragment>
    );
};

export default SectionEmployement;