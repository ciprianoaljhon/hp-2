import { BookCardLandscape } from "../../components/BookCards";

function Recommendations({ className, books, loading }) {
  const selectRandomBooks = (books, count) => {
    const shuffledBooks = [...books].sort(() => Math.random() - 0.5);
    return shuffledBooks.slice(0, count);
  };

  const randomBooks = selectRandomBooks(books, 6);

  return (
    <div className={" " + className}>
      <h1 className="mb-2">Recommendations</h1>

      <ul className="flex child:grow flex-wrap w-full  ">
        {randomBooks.map((book, index) => {
          return (
            <BookCardLandscape
              key={index}
              className={"w-1/3  min-w-[300px] "}
              book={book}
            ></BookCardLandscape>
          );
        })}
      </ul>
    </div>
  );
}

export default Recommendations;
