function Button({ name, color, showHide, onClick }) {
  return (
    <div>
      <button
        className="btn"
        style={{ backgroundColor: color }}
        color={color}
        onClick={onClick}
        showHide={showHide}
      >
        {/* 
        style={buttonStyle} gives the button the styles from buttonStyle
        onClick={onClick} says that when the buttons is clicked use the onClick function that we sent as a prop
        showHide={showHide} tells it that we are talking about the showHide variable that we sent as a prop 
        */}
        {name}
      </button>
    </div>
  );
}

export default Button;
