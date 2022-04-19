import React from "react";

export default function Book({ book }) {
  return (
    <div style={{ borderBottom: "solid 2px black", paddingBottom: "5px" }}>
      <p>id: {book.id}</p>
      <h3>title: {book.title}</h3>
      <p>info: {book.info}</p>
    </div>
  );
}
