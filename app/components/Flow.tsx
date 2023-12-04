// 'use client';

import React from 'react';
import { useCallback, useState } from 'react';
import ReactFlow, {
  addEdge,
  Node,
  Edge,
  applyNodeChanges,
  applyEdgeChanges,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { shallow } from 'zustand/shallow';
import useStore from '../store';

const selector = (state: any) => ({
    nodes: state.nodes,
    edges: state.edges,
    onNodesChange: state.onNodesChange,
    onEdgesChange: state.onEdgesChange,
    onConnect: state.onConnect,
  });

  export default function Flow() {
    // Using the useStore hook with the selector to get the state and actions
    const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useStore(selector);
  
    // You no longer need to manage local state with useState here since it's now managed by Zustand
  
    return (
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      />
    );
  }

// export default function App({
//   nodes: initNodes,
//   edges: initEdges,
// }: {
//   nodes: Node[];
//   edges: Edge[];
// }) {
//   const [nodes, setNodes] = useState<Node[]>(initNodes);
//   const [edges, setEdges] = useState<Edge[]>(initEdges);

//   const onNodesChange: OnNodesChange = useCallback(
//     (chs) => {
//       setNodes((nds) => applyNodeChanges(chs, nds));
//     },
//     [setNodes]
//   );

//   const onEdgesChange: OnEdgesChange = useCallback(
//     (chs) => {
//       setEdges((eds) => applyEdgeChanges(chs, eds));
//     },
//     [setEdges]
//   );

//   const onConnect: OnConnect = useCallback(
//     (params) => setEdges((eds) => addEdge(params, eds)),
//     [setEdges]
//   );

//   return (
//       <ReactFlow
//         nodes={nodes}
//         edges={edges}
//         onNodesChange={onNodesChange}
//         onEdgesChange={onEdgesChange}
//         onConnect={onConnect}
//       />
//   );
// }