import "./App.css";
import { useEffect, useState } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  NodeTypes,
  Node,
  Edge,
  Position,
} from "reactflow";

import "reactflow/dist/style.css";
import GroupNode from "./nodes/GroupNode";
import { algebra, discreteMath } from "./data/groupData";
import dagre from "dagre";

function App() {
  const nodeTypes: NodeTypes = {
    groupNode: GroupNode,
  };

  const position = { x: 0, y: 0 };

  const groupNodes: Node[] = [
    {
      type: "groupNode",
      id: "0",
      position: position,
      data: { group: algebra },
    },
    {
      type: "groupNode",
      id: "1",
      position: position,
      data: { group: discreteMath },
    },
    {
      type: "groupNode",
      id: "2",
      position: position,
      data: { group: discreteMath },
    },
  ];

  const groupEdges: Edge[] = [
    {
      id: "e0-1",
      source: "0",
      target: "2",
      animated: true,
      type: "simplebezier",
    },
    {
      id: "e0-2",
      source: "1",
      target: "2",
      animated: true,
      type: "simplebezier",
    },
  ];

  const bookWidth = 160;
  const nodeHeight = 240;
  const getLayoutedNodes = (nodes: Node[], edges: Edge[]) => {
    const g = new dagre.graphlib.Graph();
    g.setGraph({});
    g.setDefaultEdgeLabel(() => ({}));

    nodes.forEach((node) => {
      g.setNode(node.id, {
        width: bookWidth * node.data.group.books.length + 36, // TODO - find better way
        height: nodeHeight,
      });
    });

    edges.forEach((edge) => {
      g.setEdge(edge.source, edge.target);
    });

    dagre.layout(g);

    return nodes.map((node) => {
      const { x, y } = g.node(node.id);
      return {
        ...node,
        position: { x, y },
        sourcePosition: Position.Bottom,
        targetPosition: Position.Top,
      };
    });
  };

  const [nodes, setNodes] = useState<Node[]>(groupNodes);

  useEffect(() => {
    const layoutedNodes = getLayoutedNodes(nodes, groupEdges);
    setNodes(layoutedNodes);
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
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
