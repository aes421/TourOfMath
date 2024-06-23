import "./App.css";
import ReactFlow, { MiniMap, Controls, NodeTypes, Node, Edge } from "reactflow";

import "reactflow/dist/style.css";
import GroupNode from "./nodes/GroupNode";
import { algebra, discreteMath } from "./data/groupData";

function App() {
  const nodeTypes: NodeTypes = {
    groupNode: GroupNode,
  };

  const groupNodes: Node[] = [
    {
      type: "groupNode",
      id: "0",
      position: { x: 0, y: 0 },
      data: { group: algebra },
    },
    {
      type: "groupNode",
      id: "1",
      position: { x: 400, y: 0 },
      data: { group: discreteMath },
    },
    {
      type: "groupNode",
      id: "2",
      position: { x: 300, y: 300 },
      data: { group: discreteMath },
    },
  ];

  const groupEdges: Edge[] = [
    { id: "e0-1", source: "0", target: "2" },
    { id: "e0-2", source: "1", target: "2" },
  ];

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={groupNodes}
        edges={groupEdges}
        nodeTypes={nodeTypes}
        fitView
        className="bg-teal-50"
      >
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default App;
