import React from "react";
import Style from "./ReactSimpleMap.Component.module.scss"
// import { ComposableMap, Geographies, Geography } from "react-simple-maps"


const ReactSimpleMapComponent = () => {
    const geoUrl =
        "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

    return <React.Fragment>
        {/* <div className={Style['container']}>
            <ComposableMap>
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography key={geo.rsmKey} geography={geo} />
                        ))
                    }
                </Geographies>
            </ComposableMap>
        </div> */}
    </React.Fragment>

}
export default ReactSimpleMapComponent
