import "./styles/App.css";
import img from "./pokemon.png";

function App() {
  //set favicon
  var link = document.createElement("link");
  link.type = "image/png";
  link.rel = "icon";
  link.href = img;
  document.getElementsByTagName("head")[0].appendChild(link);

  return (
    <div className="App">
      <h1>the only thing i do here is set my favicon and this h1</h1>
    </div>
  );
}

export default App;
