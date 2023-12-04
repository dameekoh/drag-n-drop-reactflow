'use client';

import Image from 'next/image'
import Flow from './components/Flow/Flow';
import { Edge, Node, Position, ReactFlowProvider } from 'reactflow';
import { Button } from '@nextui-org/react';
import ButtonGroupRightPanel from './components/ButtonGroupRightPanel/ButtonGroupRightPanel';
const nodeSize = {
  width: 100,
  height: 40,
};

export default function Home() {
  return (
    <main style={{ display: 'flex', height: '100vh' }}>
      <div style={{ width: '15%', backgroundColor: 'white' }}>
        <h1>This is col1</h1>
      </div>
      {/* grey div*/}
      <div style={{ width: '70%', backgroundColor: '#f3f4f6' }}>
        <h1>This is col2</h1>
        <ReactFlowProvider>
          <Flow />
        </ReactFlowProvider>
      </div>
      <div style={{ width: '15%', backgroundColor: 'white' }}>
        <h1>This is col3</h1>
        <ButtonGroupRightPanel />
      </div>
    </main>
  );
}
