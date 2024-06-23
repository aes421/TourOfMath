import BookDto from "../models/bookDto";

interface BookProps {
  book: BookDto;
}
function Book({ book }: BookProps) {
  return (
    <>
      <h1>{book.name}</h1>
    </>
  );
}

export default Book;
