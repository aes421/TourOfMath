class BookDto {
  sourceBaseUrl =
    "https://www.youtube.com/watch?v=didXE0HkSC8&ab_channel=TheMathSorcerer";

  name: string;
  image: string;
  amazonUrl: string;
  sourceUrl: string;
  notes: string;

  constructor(
    name: string,
    image: string,
    amazonUrl: string,
    sourceSeconds: number,
    notes: string
  ) {
    this.name = name;
    this.image = image;
    this.amazonUrl = amazonUrl;
    this.sourceUrl = this.sourceBaseUrl + "&t=" + sourceSeconds;
    this.notes = notes;
  }
}

export default BookDto;
