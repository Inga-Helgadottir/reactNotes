function Button({ color, showHide, onClick }) {
  const buttonStyle = {
    color: color,
    backgroundColor: "blueviolet",
    border: "solid 2px black",
    borderRadius: "15px",
    padding: "4px 10px",
  };

  return (
    <div>
      <button style={buttonStyle} onClick={onClick} showHide={showHide}>
        {/* 
        style={buttonStyle} gives the button the styles from buttonStyle
        onClick={onClick} says that when the buttons is clicked use the onClick function that we sent as a prop
        showHide={showHide} tells it that we are talking about the showHide variable that we sent as a prop 
        */}
        Click me!
      </button>
    </div>
  );
}

export default Button;
