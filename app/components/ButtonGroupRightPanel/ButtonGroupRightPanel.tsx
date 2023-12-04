import React from 'react';
import { Button } from '@nextui-org/react';

const buttonLabels = ['Input', 'Output', 'Instruct', 'Semantic Search'];

const ButtonGroupRightPanel = () => {
  return (
    <div className="grid grid-cols-1 gap-0">
      {buttonLabels.map((label) => (
        <Button key={label} className="w-full rounded-none border border-gray bg-white">
          <span className="text-left w-full block">{label}</span>
        </Button>
      ))}
    </div>
  );
};


export default ButtonGroupRightPanel;