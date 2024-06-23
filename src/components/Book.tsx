import BookDto from "../models/bookDto";

interface BookProps {
  book: BookDto;
}
function Book({ book }: BookProps) {
  return (
    <>
      <div className="size-40">
        <img src={book.image} className="size-full px-1" />
        <p className="font-medium text-base">{book.name}</p>
      </div>
    </>
  );
}

export default Book;
