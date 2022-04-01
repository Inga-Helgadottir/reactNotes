import "./styles/App.css";
import img from "./pokemon.png";

function App() {
  //set favicon
  var link = document.createElement("link");
  link.type = "image/png";
  link.rel = "icon";
  link.href = img;
  document.getElementsByTagName("head")[0].appendChild(link);

  return <div className="App"></div>;
}

export default App;
