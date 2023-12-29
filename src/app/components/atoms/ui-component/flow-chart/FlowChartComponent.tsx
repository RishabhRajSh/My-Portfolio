import React from "react";
import Style from "./FlowChartComponent.module.scss";
import ReactFlow, {
    Node,
    Background,
    Edge,
} from "reactflow";
import Circle from "./reactflow/Circle";
import Rectangle from "./reactflow/Rectangle";
import Diamond from "./reactflow/Diamond";

import "reactflow/dist/style.css";


const nodeTypes = {
    Circle, Rectangle, Diamond
}

const edges = [{ id: '1-2', source: '1', target: '2', type: 'step' }];
const nodes = [
    {
        id: '1',
        type: 'Circle',
        position: {x:0, y:0},
        data: {label: "Start"},
    },
    {
        id: '2',
        type: 'Rectangle',
        position: {x:500, y:0},
        data: {label: "Start"},
    },
    {
        id: '3',
        type: 'Diamond',
        position: {x:0, y:500},
        data: {label: "Start"},
    },
]


const FlowchartComponent: React.FC = () => {
    return <React.Fragment>
        <div className={Style['container']}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
            >
                <Background />
            </ReactFlow>
        </div>
    </React.Fragment>
}
export default FlowchartComponent