import "./styles/App.css";
import img from "./pokemon.png";
import { useState } from "react";
import Button from "./components/Button";
import ShowHide from "./components/ShowHide";

function App() {
  //showHide
  const [showHide, setShowHide] = useState(false);
  //det her er ligesom en getter og setter i en java class
  //useState(false) betyder at i starten skal denne getter returnere false
  //for an array useState([])
  //for a string useState("")

  //set favicon
  var link = document.createElement("link");
  link.type = "image/png";
  link.rel = "icon";
  link.href = img;
  document.getElementsByTagName("head")[0].appendChild(link);

  return (
    <div className="App">
      <h1>React practise</h1>
      <div id="showHide">
        <h2>This is show hide</h2>
        <Button
          color="white"
          showHide={showHide}
          onClick={() => setShowHide(!showHide)}
        />
        {/* 
        showHide={showHide} tells the button what to show or hide
        onClick={() => setShowHide(!showHide)} this says that when you click the button 
        set the showHide variable to the opposite of what it is now 
        */}
        {showHide && <ShowHide />}
        {/* 
        this line says if showHide is false hide <ShowHide />
        else you show it 
        */}
      </div>
    </div>
  );
}

export default App;
