import React, { useMemo } from "react";
import Style from "./FlowChartComponent.module.scss";
import ReactFlow, {
    Background,
    MarkerType,
    Controls,
} from "reactflow";
import Circle from "./reactflow/Circle";
import Rectangle from "./reactflow/Rectangle";
import Diamond from "./reactflow/Diamond";
import "reactflow/dist/style.css";

const edges = [
    {
        id: '1-2',  source: '1',   target: '2',  style: { strokeWidth: 2 },  type: 'smoothstep',  markerEnd: { type: MarkerType.ArrowClosed, },
    },
    {
        id: '2-3',
        source: '2',
        target: '3',
        style: { strokeWidth: 2 },
        type: 'smoothstep',
        markerEnd: {
            type: MarkerType.ArrowClosed,
        },
    },
    {
        id: '3-4',
        source: '3',
        target: '4',
        style: { strokeWidth: 2 },
        type: 'smoothstep',
        markerEnd: {
            type: MarkerType.ArrowClosed,
        },
    },
    {
        id: '4-5',
        source: '4',
        target: '5',
        style: { strokeWidth: 2 },
        type: 'smoothstep',
        markerEnd: {
            type: MarkerType.ArrowClosed,
        },
    },
    {
        id: '4-6',
        source: '4',
        target: '6',
        style: { strokeWidth: 2, stroke: 'red' },
        type: 'smoothstep',
        markerEnd: {
            type: MarkerType.ArrowClosed,
        },
    },
    {
        id: '6-3',
        animated: true,
        source: '6',
        target: '3',
        style: { strokeWidth: 2},
        type: 'smoothstep',
        markerEnd: {
            type: MarkerType.ArrowClosed,
        },
    },
    {
        id: '7-5',
        source: '5',
        target: '7',
        style: { strokeWidth: 2},
        type: 'smoothstep',
        markerEnd: {
            type: MarkerType.ArrowClosed,
        },
    },
    {
        id: '7-8',
        source: '7',
        target: '8',
        style: { strokeWidth: 2},
        type: 'smoothstep',
        markerEnd: {
            type: MarkerType.ArrowClosed,
        },
    },
    {
        id: '8-9',
        source: '8',
        target: '9',
        style: { strokeWidth: 2},
        type: 'smoothstep',
        markerEnd: {
            type: MarkerType.ArrowClosed,
        },
    },
    {
        id: '9-10',
        source: '9',
        target: '10',
        style: { strokeWidth: 2},
        type: 'smoothstep',
        markerEnd: {
            type: MarkerType.ArrowClosed,
        },
    },
    {
        id: '9-11',
        source: '9',
        target: '11',
        style: { strokeWidth: 2, stroke: 'red'},
        type: 'smoothstep',
        markerEnd: {
            type: MarkerType.ArrowClosed,
        },
    },
    {
        id: '11-12',
        source: '11',
        target: '12',
        style: { strokeWidth: 2},
        type: 'smoothstep',
        markerEnd: {
            type: MarkerType.ArrowClosed,
        },
    },
    {
        id: '10-13',
        source: '10',
        target: '13',
        style: { strokeWidth: 2},
        type: 'smoothstep',
        markerEnd: {
            type: MarkerType.ArrowClosed,
        },
    },
    {
        id: '12-14',
        source: '12',
        target: '14',
        style: { strokeWidth: 2},
        type: 'smoothstep',
        markerEnd: {
            type: MarkerType.ArrowClosed,
        },
    },
    {
        id: '13-15',
        source: '13',
        target: '15',
        style: { strokeWidth: 2},
        type: 'smoothstep',
        markerEnd: {
            type: MarkerType.ArrowClosed,
        },
    },
    {
        id: '15-3',
        animated: true,
        source: '15',
        target: '3',
        style: { strokeWidth: 2},
        type: 'smoothstep',
        markerEnd: {
            type: MarkerType.ArrowClosed,
        },
    },
    {
        id: '14-16',
        source: '14',
        target: '16',
        style: { strokeWidth: 2},
        type: 'smoothstep',
        markerEnd: {
            type: MarkerType.ArrowClosed,
        },
    },
    {
        id: '14-17',
        source: '14',
        target: '17',
        style: { stroke: 'red', strokeWidth: 2},
        type: 'smoothstep',
        markerEnd: {
            type: MarkerType.ArrowClosed,
        },
    },
    {
        id: '16-3',
        animated: true,
        source: '16',
        target: '3',
        style: { strokeWidth: 2},
        type: 'smoothstep',
        markerEnd: {
            type: MarkerType.ArrowClosed,
        },
    },
    {
        id: '17-7',
        source: '17',
        target: '7',
        style: { strokeWidth: 2},
        type: 'smoothstep',
        markerEnd: {
            type: MarkerType.ArrowClosed,
        },
    },
];

const nodes = [
    {
        id: '1',
        type: 'Circle',
        position: { x: 0, y: 250 },
        data: { label: "Start" },
    },
    {
        id: '2',
        type: 'Rectangle',
        position: { x: 250, y: 250 },
        data: { label: "Target Audience: Travelers, Guides, Local Businesses, Franchise," },
    },
    {
        id: '3',
        type: 'Rectangle',
        position: { x: 500, y: 250 },
        data: { label: "Conduct user research" },
    },
    {
        id: '4',
        type: 'Diamond',
        position: { x: 750, y: 250 },
        data: { label: "Are users satisfied with the current website design?" },
    },
    {
        id: '5',
        type: 'Rectangle',
        position: { x: 1250, y: 250 },
        data: { label: "Proceed with the current design" },
    },
    {
        id: '6',
        type: 'Rectangle',
        position: { x: 1000, y: 500 },
        data: {
            label: "Revise the website design",
            style: { borderColor: 'red', color: 'red', background: '#ffe2e0' },
        },
    },
    {
        id: '7',
        type: 'Rectangle',
        position: { x: 1500, y: 250 },
        data: {
            label: "Create advertisement content to promote local business and Scenic Places",
        },
    },
    {
        id: '8',
        type: 'Rectangle',
        position: { x: 1750, y: 250 },
        data: {
            label: "Test advertisement content",
        },
    },
    {
        id: '9',
        type: 'Diamond',
        position: { x: 2000, y: 250 },
        data: {
            label: "Is the advertisement content effective?",
        },
    },
    {
        id: '10',
        type: 'Rectangle',
        position: { x: 2500, y: 250 },
        data: {
            label: "Continue running the advertisement",
        },
    },
    {
        id: '11',
        type: 'Rectangle',
        position: { x: 2250, y: 500 },
        data: {
            label: "Stop the advertisement",
        },
    },
    {
        id: '12',
        type: 'Rectangle',
        position: { x: 2550, y: 500 },
        data: {
            label: "Analyze advertisement performance",
        },
    },
    {
        id: '13',
        type: 'Rectangle',
        position: { x: 2750, y: 250 },
        data: {
            label: "Evaluate user feedback though click rates",
        },
    },
    {
        id: '14',
        type: 'Diamond',
        position: { x: 3000, y: 500 },
        data: {
            label: "Is the advertisement underperforming due to website design?",
        },
    },
    {
        id: '15',
        type: 'Rectangle',
        position: { x: 3000, y: 250 },
        data: {
            label: "Implement necessary changes and Incentivize",
        },
    },
    {
        id: '16',
        type: 'Rectangle',
        position: { x: 3250, y: 500 },
        data: {
            label: "Revise the website design",
        },
    },
    {
        id: '17',
        type: 'Rectangle',
        position: { x: 3250, y: 750 },
        data: {
            label: "Revise the advertisement content",
        },
    },
]


const FlowchartComponent: React.FC = () => {
    const nodeTypes = useMemo(() => ({
        Circle, Rectangle, Diamond
    }), []);

    return <React.Fragment>
        <div className={Style['container']}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
            >
                <Background />
                <Controls />
            </ReactFlow>
        </div>
    </React.Fragment>
}
export default FlowchartComponent
