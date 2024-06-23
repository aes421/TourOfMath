import "./App.css";
import ReactFlow, { MiniMap, Controls, Node, NodeTypes } from "reactflow";
import Group from "./nodes/Group";
import GroupDto from "./models/groupDto";

import "reactflow/dist/style.css";
import Book from "./components/Book";
import BookDto from "./models/bookDto";

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
    group: Group,
  };

  let g0 = new GroupDto(0, 0, "group0", [
    new BookDto("Hello", "", ""),
    new BookDto("World", "", ""),
  ]);
  const groupNodes = [
    {
      type: "group",
      id: "0",
      position: { x: 0, y: 0 },
      data: { group: g0 },
    },
    { id: "1", position: { x: 200, y: 0 }, data: { label: "group1" } },
    { id: "2", position: { x: 0, y: 200 }, data: { label: "group2" } },
  ];

  const groupEdges = [{ id: "e1-3", source: "0", target: "2" }];

  return (
    <>
      <div style={{ width: "100vw", height: "100vh" }}>
        <ReactFlow nodes={groupNodes} edges={groupEdges} nodeTypes={nodeTypes}>
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>
    </>
  );
}

export default App;
