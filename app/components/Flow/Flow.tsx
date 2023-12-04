// 'use client';

import React from 'react';
import { useCallback, useState } from 'react';
import ReactFlow, {
  addEdge,
  Background,
  BackgroundVariant,
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
import useStore from '../../store';
import { Bakbak_One } from 'next/font/google';
import { CustomNode } from '../CustomNode/CustomNode';

const nodeTypes = {
    customNode: CustomNode,
};

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
        nodeTypes={nodeTypes}
    >
        <Background 
            color="grey"
            variant={BackgroundVariant.Dots} />
    </ReactFlow>
);
}