'use client';

import Image from 'next/image'
import Flow from './components/Flow/Flow';
import { Edge, Node, Position, ReactFlowProvider } from 'reactflow';
import { Button } from '@nextui-org/react';
import ButtonGroupRightPanel from './components/ButtonGroupRightPanel/ButtonGroupRightPanel';
import NodesLeftPanel from './components/NodesLeftPanel/NodesLeftPanel';

const nodeSize = {
  width: 100,
  height: 40,
};

export default function Home() {
  return (
    <main style={{ display: 'flex', height: '100vh' }}>
      <div style={{ width: '15%', backgroundColor: 'white' }}>
        <NodesLeftPanel />
      </div>
      <div style={{ width: '70%', backgroundColor: '#f3f4f6' }}> {/* grey div*/}
        <ReactFlowProvider>
          <Flow />
        </ReactFlowProvider>
      </div>
      <div style={{ width: '15%', backgroundColor: 'white' }}>
        <ButtonGroupRightPanel />
      </div>
    </main>
  );
}
