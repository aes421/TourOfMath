import "./App.css";
import ReactFlow, { MiniMap, Controls, NodeTypes, Node, Edge } from "reactflow";
import GroupDto from "./models/groupDto";
import elementaryAlgebraImg from "./assets/elementary-algebra.jpg";
import preAlgebraImg from "./assets/pre-algebra.jpg";

import "reactflow/dist/style.css";
import BookDto from "./models/bookDto";
import GroupNode from "./nodes/GroupNode";

function App() {
  //   const groups = [
  //     new Group(1, 1, "1.1", []),
  //     new Group(2, 1, "1.2", []),
  //     new Group(3, 2, "2.1", []),
  //   ];

  //   let groupNodes: Node[] = [];
  //   groups.forEach((g, i) => {
  //     groupNodes.push({
  //       id: g.id.toString(),
  //       position: { x: (i + 1) * 200, y: g.level * 100 },
  //       data: { label: g.name },
  //     });
  //   });

  const nodeTypes: NodeTypes = {
    groupNode: GroupNode,
  };

  let g0 = new GroupDto(0, 0, "group0", [
    new BookDto("Pre-Algebra", preAlgebraImg, "", ""),
    new BookDto("Pre-Algebra", preAlgebraImg, "", ""),
    new BookDto("Pre-Algebra", preAlgebraImg, "", ""),
    new BookDto("Pre-Algebra", preAlgebraImg, "", ""),
    new BookDto("Pre-Algebra", preAlgebraImg, "", ""),
    new BookDto("Pre-Algebra", preAlgebraImg, "", ""),
  ]);

  let g1 = new GroupDto(0, 0, "group0", [
    new BookDto("Elementary Algebra", elementaryAlgebraImg, "", ""),
  ]);

  let g2 = new GroupDto(0, 0, "group0", [
    new BookDto("Elementary Algebra", elementaryAlgebraImg, "", ""),
  ]);

  const groupNodes = [
    {
      type: "groupNode",
      id: "0",
      position: { x: 0, y: 0 },
      data: { group: g0 },
    },
    {
      type: "groupNode",
      id: "1",
      position: { x: 0, y: 300 },
      data: { group: g1 },
    },
    {
      type: "groupNode",
      id: "2",
      position: { x: 500, y: 300 },
      data: { group: g2 },
    },
  ];

  const groupEdges = [
    { id: "e0-1", source: "0", target: "1" },
    { id: "e0-2", source: "0", target: "2" },
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
