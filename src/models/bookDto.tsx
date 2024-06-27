class BookDto {
  sourceBaseUrl =
    "https://www.youtube.com/watch?v=didXE0HkSC8&ab_channel=TheMathSorcerer";

  name: string;
  image: string;
  sourceUrl: string;

  constructor(
    name: string,
    image: string,
    sourceMinutes: number,
    sourceSeconds: number
  ) {
    this.name = name;
    this.image = image;
    this.sourceUrl =
      this.sourceBaseUrl + "&t=" + (sourceMinutes * 60 + sourceSeconds);
  }
}

export default BookDto;
