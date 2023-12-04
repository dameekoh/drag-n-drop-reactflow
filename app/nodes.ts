import { Node } from 'reactflow';

export default [
  {
    id: '1',
    type: 'inputNode',
    data: { 
      label: 'Input',
      text: ''
    },
    position: { x: 250, y: 25 },
  },
  {
    id: '2',
    type: 'outputNode',
    data: { 
      label: 'Output',
      text: ''
    },
    position: { x: 250, y: 250 },
    text: '',
  },
] as Node[];