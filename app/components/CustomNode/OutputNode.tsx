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

export const OutputNode: React.FC<CustomNodeProps> = ({ id, data }) => {
  return (
    <>
    <div className="output-node-wrapper">
        <div className="badge-wrapper">
            <Badge className="custom-badge" color="primary">Output</Badge>
        </div>
      <div className="custom-node__header">
        {data.label}
      </div>
      <div className="custom-node__body">
        <Input className="bg-white" label="Text" />
      </div>
      <Handle type="target" position={Position.Left} id="b" />
    </div>
      
    </>
  );
};