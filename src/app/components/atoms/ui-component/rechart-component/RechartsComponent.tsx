import React from "react"
import Style from './RechartsComponent.module.scss'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { RechartProps } from "../../../../interfaces"

const RechartComponent: React.FC<RechartProps> = ({ data }) => {
    const modifiedData = data.map(item => ({ ...item, pv: 2400, amt: 2400 }))

    return (<React.Fragment>
        <div className={Style['container']}>
            <div className={Style['content']}>
                <ResponsiveContainer width="100%" aspect={2}>
                    <LineChart data={modifiedData}>
                        <Line type="monotone" dataKey="uv" stroke="#33b563" />
                        <CartesianGrid stroke="#ffffff" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    </React.Fragment>
    )
}
export default RechartComponent