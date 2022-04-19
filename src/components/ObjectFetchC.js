import BookFacade from "../bookFacade";
import { useState } from "react";

export default function FetchC() {
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Please add a title");
      return;
    }
    if (!info) {
      alert("Please add info");
      return;
    }

    let ID = BookFacade.nextId;
    BookFacade.nextId++;
    BookFacade.addBook({ ID, title, info });

    setTitle("");
    setInfo("");
    console.log("Checking if it works");
    console.log(BookFacade.getBooks());

    alert("The book with the title: " + title + " and the info of: " + info);
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Add a Book!</h2>
      <div>
        <label>Title</label>
        <input
          type="text"
          placeholder="task name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Info</label>
        <input
          type="text"
          placeholder="Add info here"
          value={info}
          onChange={(e) => setInfo(e.target.value)}
        />
      </div>
      <input type="submit" value="Save Task" className="myButton" />
    </form>
  );
}
