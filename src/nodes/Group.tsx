import React from "react";
import GroupDto from "../models/groupDto";
import ReactFlow, { NodeProps } from "reactflow";
import Book from "../components/Book";
import BookDto from "../models/bookDto";

function Group(props: NodeProps) {
  let group: GroupDto = props.data.group;
  return (
    <>
      {group.name}
      {group.books.map((b) => (
        <Book book={b}></Book>
      ))}
    </>
  );
}

export default Group;
