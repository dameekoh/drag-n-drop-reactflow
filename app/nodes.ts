import { Node } from 'reactflow';

export default [
  {
    id: '1',
    type: 'inputNode',
    data: { label: 'Input' },
    position: { x: 250, y: 25 },
  },
  {
    id: '2',
    type: 'outputNode',
    data: { label: 'Output' },
    position: { x: 250, y: 250 },
  },
] as Node[];