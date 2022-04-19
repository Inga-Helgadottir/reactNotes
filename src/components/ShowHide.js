import "../styles/showHide.css";
import { useState } from "react";
import Button from "./Button";
import ShowHideItem from "./ShowHideItem";

function ShowHide() {
  //showHide
  const [showHide, setShowHide] = useState(false);
  //det her er ligesom en getter og setter i en java class
  //useState(false) betyder at i starten skal denne getter returnere false
  //for an array useState([])
  //for a string useState("")

  return (
    <div className="showHide">
      <h1>Show hide</h1>
      <div id="showHide">
        <h2>This button will toggle between showing and hiding my div</h2>
        <Button
          name={showHide ? "Hide" : "Show"}
          color={showHide ? "#E3261A" : "#0b6ce3"}
          showHide={showHide}
          onClick={() => setShowHide(!showHide)}
        />
        {/* 
        showHide={showHide} tells the button what to show or hide
        onClick={() => setShowHide(!showHide)} this says that when you click the button 
        set the showHide variable to the opposite of what it is now 
        */}
        {showHide && <ShowHideItem />}
        {/* 
        this line says if showHide is false hide <ShowHide />
        else you show it 
        */}
      </div>
    </div>
  );
}

export default ShowHide;
