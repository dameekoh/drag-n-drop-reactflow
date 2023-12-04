import './CustomNode.css';
import { Input } from '@nextui-org/react';
import { Handle, Position } from 'reactflow';
import { Chip, Card, CardHeader, CardBody, Divider } from '@nextui-org/react';

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
        <div className="chip-wrapper">
            <Chip>Output</Chip>
        </div>
        <Card>
        <CardHeader className="flex gap-3">
            <div className="flex flex-col">
            <p className="text-md">{data.label}</p>
            </div>
        </CardHeader>
        <Divider/>
        <CardBody>
            <Input className="bg-white" label="Text" />
        </CardBody>
        <Handle type="target" position={Position.Left} id="b" />
        </Card>      
    </>
  );
};