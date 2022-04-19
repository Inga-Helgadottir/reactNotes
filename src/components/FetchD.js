import React from "react";
import bookFacade from "../bookFacade";
import Book from "./book";

const FetchD = () => {
  return (
    <div>
      <h2>Fetch delete</h2>
      {bookFacade.getBooks().map((book) => (
        <div key={book.id}>
          <Book key={book.id} book={book} />
        </div>
      ))}
    </div>
  );
};

export default FetchD;
