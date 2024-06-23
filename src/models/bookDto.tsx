class BookDto {
  name: string;
  url: string;
  notes: string;

  constructor(name: string, url: string, notes: string) {
    this.name = name;
    this.url = url;
    this.notes = notes;
  }
}

export default BookDto;
