import './CustomNode.css';
import { Input } from '@nextui-org/react';
import { Handle, Position } from 'reactflow';
import { Badge } from '@nextui-org/react';

type NodeData = {
  label: string;
};

interface CustomNodeProps {
  id: string;
  data: NodeData;
}

export const InputNode: React.FC<CustomNodeProps> = ({ id, data }) => {
  return (
    <>
      <Handle type="source" position={Position.Right} id="a" />
      <div className="custom-node__header">
        {data.label}
      </div>
      <div className="custom-node__body">
        <Input className="bg-white" label="Text" />
      </div>
    </>
  );
};