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
    s.prereqs.forEach((e) => {
      groupEdges.push({
        id: `${s.id}-${e}`,
        target: s.id.toString(),
        source: e.toString(),
        animated: true,
        type: "simplebezier",
        style: {
          strokeWidth: 3,
        },
      });
    });
  });

  const bookWidth = 50;
  const nodeHeight = 300;
  const getLayoutedNodes = (nodes: Node[], edges: Edge[]) => {
    const g = new dagre.graphlib.Graph();
    g.setGraph({});
    g.setDefaultEdgeLabel(() => ({}));

    console.log(nodes);
    nodes.forEach((node) => {
      g.setNode(node.id, {
        width: bookWidth * node.data.group.books.length + 600, // TODO - find better way
        height: nodeHeight,
      });
    });

    edges.forEach((edge) => {
      g.setEdge(edge.source, edge.target);
    });

    dagre.layout(g);

    return nodes.map((node) => {
      let { x, y } = g.node(node.id);
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
    <div className="flex flex-col">
      <h1 className="bg-slate-300">Math Skill Tree</h1>
      <div style={{ height: "100vh", width: "100vw" }}>
        <ReactFlow
          nodes={nodes}
          edges={groupEdges}
          nodeTypes={nodeTypes}
          className="bg-slate-300"
          minZoom={0.1}
          defaultViewport={{ x: 637.5, y: 150, zoom: 0.5 }}
        >
          <MiniMap />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}

export default App;
