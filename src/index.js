import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import App from "./App";
import ShowHide from "./components/ShowHide";
import ObjectFetchC from "./components/ObjectFetchC";
import ObjectFetchR from "./components/ObjectFetchR";
import ObjectFetchSearch from "./components/ObjectFetchSearch";
import FetchC from "./components/FetchC";
import FetchR from "./components/FetchR";
import FetchU from "./components/FetchU";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/showHide" element={<ShowHide />} />
        <Route path="/objectFetchC" element={<ObjectFetchC />} />
        <Route path="/objectFetchR" element={<ObjectFetchR />} />
        <Route path="/objectFetchSearch" element={<ObjectFetchSearch />}>
          <Route path=":bookId" element={<ObjectFetchSearch />} />
        </Route>
        <Route path="/FetchC" element={<FetchC />} />
        <Route path="/FetchR" element={<FetchR />} />
        <Route path="/FetchU" element={<FetchU />} />
      </Route>
      <Route
        // default for when the link is wrong
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
