import React from "react"
import Style from "./PublicFooterComponent.module.scss"

const PublicFooterComponent = () => {
    return <React.Fragment>
        <div className={Style["container"]}>
            <div className={Style['content']}>
                <p>Made by Rishabh Raj Sharma — Copyright 2024</p>
            </div>
        </div>
     
    </React.Fragment>
}

export default PublicFooterComponent
