# React Flow Next JS app
This is a [Next.js](https://nextjs.org/) based project demonstrating the functionality of ReactFlow library.


![App screenshot](main.jpeg)

[Live demo](http://dndflow.vercel.app)
## Installation

The project can be started using Dockerfile or NPM.
All the code must be executed in the root folder.

#### Docker instructions: 
Build the image file
```bash
docker build -t drag-n-drop-reactflow .
```
Start localhost
```bash
docker run -p 3000:3000 drag-n-drop-reactflow
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result

#### NPM instructions: 
Install required dependencies
```bash
npm i
```
Start localhost
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result

## About the project

I use modular approach. The app is based on three components: 
* `NodesLeftPanel`
* `Flow`
* `ButtonGroupRightPanel`

To implement the styling on nodes, I use `CustomNode` component, which can be `InputNode` or `OutputNode`
