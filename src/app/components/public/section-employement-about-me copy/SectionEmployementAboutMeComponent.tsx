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

const SectionEmployement = () => {

    return (
        <React.Fragment>
            <div className={Style['container']}>
                <div className={Style['content-wrapper']}>
                    <div className={Style['content']}>
                        <h2>Current Employment</h2>
                        <img className={Style['logo']} src={LogoAccuratics} alt='Accuratics Logo' />
                        <h3>Accuratics Softwares</h3>
                        <p>ROLES AND RESPONSIBILITIES</p>
                    </div>
                    <div className={Style['gallery']}>

                        <VerticleSlider
                            image={[FoodUiMockUp, BankingUiMockUp, AdvUiMockUp]} 
                            description={['Led design for web and mobile apps, ensuring seamless integration.']}
                        />
                        <VerticleSlider
                            image={[GisMockup, EcomMockup, AsplMockup ]} 
                            description={['Worked on Frontend User Interface on React technology and Angular Technology.']}
                        />
                        <h3 className={Style['flowchart-heading']}>Conducted user research, enhancing user-centric design.</h3>
                        <FlowchartComponent />
                        <VerticleSlider
                            image={[]} 
                            description={['Worked on CRUD operation.']}
                        />
                        <VerticleSlider
                            image={[]} 
                            description={['Collaborated with developers, product managers, and stakeholders.']}
                        />
                        <VerticleSlider
                            image={[]} 
                            description={['Used version control systems for Pull Requests, Merge Requests and Reviewing.']}
                        />

                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default SectionEmployement;