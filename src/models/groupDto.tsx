import Book from "./bookDto.tsx";

class GroupDto {
  id: number;
  name: string;
  books: Book[];
  prereqs: number[];

  constructor(id: number, name: string, books: Book[]) {
    this.id = id;
    this.name = name;
    this.books = books;
    this.prereqs = [];
  }

  requires(target: GroupDto) {
    this.prereqs.push(target.id);
  }
}

export default GroupDto;
