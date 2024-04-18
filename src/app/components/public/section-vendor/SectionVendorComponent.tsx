import React from "react"
import Style from "./SectionVendorComponent.module.scss"
import VendorUiCardComponent from "../../atoms/ui-component/vendor-ui-card-component/VendorUiCardComponent"

const SectionVendor = () => {
    return <React.Fragment>
        <section className={Style['container']}>
            <h1>Section Works!</h1>
            <VendorUiCardComponent />
        </section>
    </React.Fragment>
      
}
export default SectionVendor