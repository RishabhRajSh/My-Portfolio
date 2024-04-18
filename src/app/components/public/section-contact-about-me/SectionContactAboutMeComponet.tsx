import React from "react"
import Style from "./SectionContactAboutMeComponet.module.scss"
import ReactSimpleMapComponent from "../../atoms/ui-component/react-simple-map/ReactSimpleMap.Component"


const SectionContact = () => {
    return <React.Fragment>
         <div className={Style['container']}>
            <h2>Let's get Connected</h2>
            <ReactSimpleMapComponent />
        </div>
    </React.Fragment>

}

export default SectionContact