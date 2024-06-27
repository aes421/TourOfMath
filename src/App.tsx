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
import { subjects } from "./data/groupData";
import dagre from "dagre";

function App() {
  const nodeTypes: NodeTypes = {
    groupNode: GroupNode,
  };

  const position = { x: 0, y: 0 };

  const groupNodes: Node[] = subjects.map((s): Node => {
    return {
      type: "groupNode",
      id: s.id.toString(),
      position: position,
      data: { group: s },
    };
  });

  let groupEdges: Edge[] = [];
  subjects.forEach((s) => {
    s.edges.forEach((e) => {
      groupEdges.push({
        id: `${s.id}-${e}`,
        source: s.id.toString(),
        target: e.toString(),
        animated: true,
        type: "simplebezier",
      });
    });
  });

  const bookWidth = 160;
  const nodeHeight = 240;
  const getLayoutedNodes = (nodes: Node[], edges: Edge[]) => {
    const g = new dagre.graphlib.Graph();
    g.setGraph({});
    g.setDefaultEdgeLabel(() => ({}));

    console.log(nodes);
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
