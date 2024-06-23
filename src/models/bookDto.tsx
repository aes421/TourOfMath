class BookDto {
  name: string;
  image: string;
  url: string;
  notes: string;

  constructor(name: string, image: string, url: string, notes: string) {
    this.name = name;
    this.image = image;
    this.url = url;
    this.notes = notes;
  }
}

export default BookDto;
