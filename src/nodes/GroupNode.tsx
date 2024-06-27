import GroupDto from "../models/groupDto";
import { Handle, NodeProps, Position } from "reactflow";
import Book from "../components/Book";

function GroupNode(props: NodeProps) {
  let group: GroupDto = props.data.group;
  return (
    <div className="px-4 py-2 pb-10 shadow-md rounded-md bg-stone-200 border-2 border-stone-400">
      <p className="font-bold text-lg">{group.name}</p>
      <ul className="flex flex-row">
        {group.books.map((b) => (
          <li>
            <a href={b.sourceUrl} target="_blank">
              <Book key={b.name} book={b}></Book>
            </a>
          </li>
        ))}
      </ul>

      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

export default GroupNode;
