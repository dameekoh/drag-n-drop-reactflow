import './CustomNode.css';
import { Input } from '@nextui-org/react';
import { Handle, Position } from 'reactflow';

// Define your data type according to the structure you'll be using
// Here's a basic example with just a label string
type NodeData = {
  label: string;
};

interface CustomNodeProps {
  id: string;
  data: NodeData;
}

export const CustomNode: React.FC<CustomNodeProps> = ({ id, data }) => {
  return (
    <>
      <Handle type="source" position={Position.Right} id="a" />
      <div className="custom-node__header">
        {data.label}
      </div>
      <div className="custom-node__body">
        <Input className="bg-white" label="Text" />
      </div>
      <Handle type="target" position={Position.Left} id="b" />
    </>
  );
};