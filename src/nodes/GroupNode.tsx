import React, { memo } from "react";
import GroupDto from "../models/groupDto";
import ReactFlow, { Handle, NodeProps, Position } from "reactflow";
import Book from "../components/Book";
import BookDto from "../models/bookDto";

function GroupNode(props: NodeProps) {
  let group: GroupDto = props.data.group;
  return (
    <div className="container px-4 py-2 pb-6 shadow-md rounded-md bg-white border-2 border-stone-400">
      {group.name}
      <ul className="flex flex-row flex-wrap">
        {group.books.map((b) => (
          <li>
            <Book key={b.name} book={b}></Book>
          </li>
        ))}
      </ul>

      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

export default memo(GroupNode);
