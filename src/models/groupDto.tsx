import Book from "./book.tsx";

class GroupDto {
  id: number;
  level: number;
  name: string;
  books: Book[];

  constructor(id: number, level: number, name: string, books: Book[]) {
    this.id = id;
    this.level = level;
    this.name = name;
    this.books = books;
  }
}

export default GroupDto;
