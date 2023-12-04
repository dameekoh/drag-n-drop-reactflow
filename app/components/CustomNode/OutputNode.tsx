import './CustomNode.css';
import { Input } from '@nextui-org/react';
import { Handle, Position } from 'reactflow';
import { Chip, Card, CardHeader, CardBody, Divider } from '@nextui-org/react';
import useStore from '@/app/store';

type NodeData = {
  label: string;
};

interface CustomNodeProps {
  id: string;
  data: NodeData;
}

export const OutputNode: React.FC<CustomNodeProps> = ({ id, data }) => {
  const updateText = useStore((state) => state.updateText);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateText(id, event.target.value);
  };
  
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
            <Input 
              variant="bordered" 
              radius="sm" 
              label="Text"
              onChange={handleInputChange}
            />
        </CardBody>
        <Handle 
          className="react-flow__handle"
          type="target" 
          position={Position.Left} 
          id="b" 
        />
        </Card>      
    </>
  );
};