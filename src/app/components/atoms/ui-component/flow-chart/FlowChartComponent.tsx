import React, { useMemo } from "react";
import Style from "./FlowChartComponent.module.scss";
import ReactFlow, {
   Background,
   Controls,
} from "reactflow";
import Circle from "./reactflow/Circle";
import Rectangle from "./reactflow/Rectangle";
import Diamond from "./reactflow/Diamond";

import "reactflow/dist/style.css";

const edges = [
   {
       id: '1-2',
       source: '1',
       target: '2',
       type: 'step',
   },
   {
       id: '2-3',
       source: '2',
       target: '3',
       type: 'step',
   },
   {
       id: '3-4',
       source: '3',
       target: '4',
       type: 'step',
   },
   {
       id: '4-5',
       source: '4',
       target: '5',
       type: 'step',
   },
   {
       id: '4-6',
       source: '4',
       target: '6',
       style: { stroke: 'red' },
       type: 'step',
   },
];

const nodes = [
   {
       id: '1',
       type: 'Circle',
       position: { x: 0, y: 0 },
       data: { label: "Start" },
   },
   {
       id: '2',
       type: 'Rectangle',
       position: { x: 250, y: 0 },
       data: { label: "Target Audience: Travelers, Guides, Local Businesses, Franchise," },
   },
   {
       id: '3',
       type: 'Rectangle',
       position: { x: 500, y: 0 },
       data: { label: "Conduct user research" },
   },
   {
       id: '4',
       type: 'Diamond',
       position: { x: 750, y: 0 },
       data: { label: "Are users satisfied with the current website design?" },
   },
   {
       id: '5',
       type: 'Rectangle',
       position: { x: 1250, y: 0 },
       data: { label: "Proceed with the current design" },
   },
   {
       id: '6',
       type: 'Rectangle',
       position: { x: 1000, y: 250 },
       data: { 
           label: "Revise the website design",
           style: { borderColor: 'red', color:'red', background: '#ffe2e0' },
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
