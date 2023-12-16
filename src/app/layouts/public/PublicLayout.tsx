import React from "react"
import Style from "./PublicLayout.module.scss"
import PublicHeaderComponent from "../../components/public/public-header/PublicHeaderComponent"
import PublicFooterComponent from "../../components/public/public-footer/PublicFooterComponent"

interface Props {
    children: JSX.Element
}

const PublicLayout = (props: Props) => {
    return <React.Fragment>
        <div className={Style['container']}>
        <PublicHeaderComponent />
        <div className={Style['page-wrapper']}>
            {props.children}
        </div>
        <PublicFooterComponent />
        </div>
    </React.Fragment>
}

export default PublicLayout