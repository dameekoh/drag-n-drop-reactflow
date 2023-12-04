'use client';

import Flow from './components/Flow/Flow';
import { ReactFlowProvider } from 'reactflow';
import ButtonGroupRightPanel from './components/ButtonGroupRightPanel/ButtonGroupRightPanel';
import NodesLeftPanel from './components/NodesLeftPanel/NodesLeftPanel';
import styles from './Home.module.css';

const nodeSize = {
  width: 100,
  height: 40,
};

export default function Home() {
  return (
    <main className={styles.gridContainer}>
      <div className={styles.leftPanel}>
        <NodesLeftPanel />
      </div>
      <div className={styles.centerPanel}>
        <ReactFlowProvider>
          <Flow />
        </ReactFlowProvider>
      </div>
      <div className={styles.rightPanel}>
        <ButtonGroupRightPanel />
      </div>
    </main>
  );
}