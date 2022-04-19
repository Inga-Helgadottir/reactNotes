import "./styles/App.css";
//this is how you import a css file
import img from "./pokemon.png";
//this is how you import an image
import { Outlet, Link } from "react-router-dom";
//this is how you import elements

function App() {
  //set favicon
  var link = document.createElement("link");
  link.type = "image/png";
  link.rel = "icon";
  link.href = img;
  document.getElementsByTagName("head")[0].appendChild(link);

  return (
    <div className="App">
      <h1>React practise</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/showHide">Show hide</Link>|
        <Link to="/objectFetchC">Fetch object create</Link>|
        <Link to="/objectFetchR">Fetch object read</Link>|
        <Link to="/objectFetchD">Fetch object delete</Link>|
        <Link to="/FetchC">Fetch create</Link>|
        <Link to="/FetchR">Fetch read</Link>|
        <Link to="/FetchU">Fetch update</Link>|
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
