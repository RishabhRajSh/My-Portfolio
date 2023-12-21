import React from "react";
import Style from "./SectionEmployementAboutMeComponent.module.scss";
import LogoAccuratics from "../../../../assets/icon/LogoAccuraticsSoftwares.svg";

const SectionEmployement = () => {

    return (
        <React.Fragment>
            <div className={Style['container']} >
                <div className={Style['content-wrapper']}>
                    <h2>Current Employment</h2>
                    <div className={Style['content']}>
                        <img className={Style['logo']} src={LogoAccuratics} alt='Accuratics Logo' />
                        <h3 >Accuratics Softwares</h3>
                        <p>ROLES AND RESPONSIBILITIES</p>
                        <div className={Style['list-container']}>
                            <div className={Style['list']}>
                                <p className={Style['item']}>Led design for web and mobile apps, ensuring seamless integration.</p>
                                <p className={Style['item']}>Worked on Frontend User Interface on React technology and Angular Technology.</p>
                                <p className={Style['item']}>Conducted user research, enhancing user-centric design.</p>
                                <p className={Style['item']}>Worked on CRUD operation.</p>
                                <p className={Style['item']}>Collaborated with developers, product managers, and stakeholders.</p>
                                <p className={Style['item']}>Used version control systems for Pull Requests, Merge Requests and Reviewing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default SectionEmployement;