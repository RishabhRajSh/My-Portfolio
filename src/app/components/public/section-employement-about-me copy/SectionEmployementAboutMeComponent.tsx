import React from "react";
import Style from "./SectionEmployementAboutMeComponent.module.scss";
import LogoAccuratics from "../../../../assets/icon/LogoAccuraticsSoftwares.svg"

const SectionEmployement = () => {
    return <React.Fragment>
        <div className={Style['container']}>
            <h2>Current Employement</h2>
            <div className={Style['page wrapper']}>
                <img src={LogoAccuratics} alt="Accuratics SOftwares"></img>
                <p>Accuratics Softwares Private Limited</p>
                <p>November 2022 to Present</p>
                <ul>Roles and Responsibilities
                    <li>Led design for web and mobile apps, ensuring seamless integration.</li>
                    <li>Worked on Frontend User Interface on React technology and Angular
                        Technology.</li>
                    <li>Conducted user research, enhancing user-centric design.</li>
                    <li>Worked on CRUD operation.</li>
                    <li>Collaborated with developers, product managers, and stakeholders.</li>
                    <li>Used version control systems for Pull Requests, Merge Requests and
                        Reviewing.</li>
                </ul>
            </div>
        </div>

    </React.Fragment>
}
export default SectionEmployement