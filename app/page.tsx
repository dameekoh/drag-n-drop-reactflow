'use client';

import Image from 'next/image'
import Flow from './components/Flow';
import { Edge, Node, Position, ReactFlowProvider } from 'reactflow';
import { Button } from '@nextui-org/react'

const nodeSize = {
  width: 100,
  height: 40,
};

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
            <Flow />
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
