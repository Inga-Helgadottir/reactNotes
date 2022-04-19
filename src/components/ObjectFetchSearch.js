import { Outlet, useSearchParams } from "react-router-dom";
import BookFacade from "../bookFacade";
import Book from "./book";

export default function FetchSearch() {
  let books = BookFacade.getBooks();
  let [searchParams, setSearchParams] = useSearchParams();

  const checkMatch = (book) => {
    let filter = searchParams.get("filter");
    if (filter === "" || filter === null) {
      return true;
    }
    let bookIdString = book.id.toString();
    let doesInclude = bookIdString.includes(filter);
    if (doesInclude) {
      return true;
    } else {
      return false;
    }
  };

  let bookMatches = books.filter(checkMatch);

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        <input
          type="number"
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {bookMatches.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
