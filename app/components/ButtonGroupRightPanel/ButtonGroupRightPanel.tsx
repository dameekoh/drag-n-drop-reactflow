import React from 'react';
import { Button } from '@nextui-org/react';

const buttonLabels = ['Input', 'Output', 'Instruct', 'Semantic Search'];

const ButtonGroupRightPanel = () => {
  const onDragStart = (event: React.DragEvent<HTMLButtonElement>, nodeType: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="grid grid-cols-1 gap-0">
      {buttonLabels.map((label) => (
        <Button 
          key={label} 
          className="w-full rounded-none border border-gray bg-white"
          draggable
          onDragStart={(event) => onDragStart(event, label)}
        >
          <span className="text-left w-full block">{label}</span>
        </Button>
      ))}
    </div>
  );
};


export default ButtonGroupRightPanel;