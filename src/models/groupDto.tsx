import Book from "./bookDto.tsx";

class GroupDto {
  id: number;
  level: number;
  name: string;
  books: Book[];
  edges: number[];

  constructor(id: number, level: number, name: string, books: Book[]) {
    this.id = id;
    this.level = level;
    this.name = name;
    this.books = books;
    this.edges = [];
  }

  addEdge(target: GroupDto) {
    this.edges.push(target.id);
  }
}

export default GroupDto;
