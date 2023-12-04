'use client';

import Image from 'next/image'
import Flow from './components/Flow';
import { Edge, Node, Position, ReactFlowProvider } from 'reactflow';
import { Button } from '@nextui-org/react'
const nodeSize = {
  width: 100,
  height: 40,
};

const nodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Node 1' },
    position: { x: 250, y: 5 },
    size: nodeSize,
    handles: [
      {
        type: 'source',
        position: 'bottom' as Position,
        x: nodeSize.width * 0.5,
        y: nodeSize.height,
        width: 1,
        height: 1,
      },
    ],
  },
];

const edges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '1', target: '3', animated: true },
];

export default function Home() {
  return (
    <main>
      <div className="h-screen grid grid-cols-3">
        <div className="bg-red-100">
          <h1>This is col1</h1>
        </div>
        <div>
          <h1>This is col2</h1>
          <ReactFlowProvider>
            <Flow nodes={nodes} edges={edges}/>
          </ReactFlowProvider>
        </div>
        <div className="bg-red-100">
          <h1>This is col3</h1>
          <Button color="primary">
            Button
          </Button>
        </div>
      </div>
    </main>
  )
}
