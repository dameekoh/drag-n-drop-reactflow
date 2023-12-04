import React from 'react';
import { Button } from '@nextui-org/react';

const ButtonGroupRightPanel = () => {
  return (
    <div className="grid grid-cols-1 gap-0">
      <Button className="w-full rounded-none border border-gray bg-white">
        <span className="text-left w-full block">Input</span>
      </Button>
      <Button className="w-full rounded-none border border-gray bg-white">
        <span className="text-left w-full block">Output</span>
      </Button>
      <Button className="w-full rounded-none border border-gray bg-white">
        <span className="text-left w-full block">Instruct</span>
      </Button>
      <Button className="w-full rounded-none border border-gray bg-white">
        <span className="text-left w-full block">Semantic Search</span>
      </Button>
    </div>
  );
};

export default ButtonGroupRightPanel;