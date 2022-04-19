import React from "react";
import bookFacade from "../bookFacade";
import Book from "./book";

const FetchR = () => {
  return (
    <div>
      <h2>Fetch read</h2>
      {bookFacade.getBooks().map((book) => (
        <div key={book.id}>
          <Book key={book.id} book={book} />
        </div>
      ))}
    </div>
  );
};

export default FetchR;
