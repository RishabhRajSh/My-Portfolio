import React from "react"
import Style from './RechartsComponent.module.scss'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import { RechartProps } from "../../../../interfaces"

const RechartComponent: React.FC<RechartProps> = ({ data }) => {
    const modifiedData = data.map(item => ({ ...item, max: 10 }))

    return (<React.Fragment>
        <div className={Style['container']}>
            <div className={Style['content']}> 
                <ResponsiveContainer width="100%" aspect={2} >
                    <RadarChart cx="50%" cy="50%" outerRadius="90%" data={modifiedData}>
                        <PolarGrid />
                        <Tooltip />
                        <Legend />
                        <PolarAngleAxis dataKey="name" />
                        <PolarRadiusAxis />
                        <Radar name="Level" dataKey="level" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        </div>
    </React.Fragment>
    )
}
export default RechartComponent