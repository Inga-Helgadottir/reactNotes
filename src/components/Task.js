import React from "react";
import PropTypes from "prop-types";

const Task = ({ id, taskName, pokemonSrc, pokemonAlt, status }) => {
  return (
    <div className="task">
      <div id="checkboxLabel">
        <label>{taskName}</label>
      </div>
      <div id="imgs">
        <img id="pokemonImg" src={pokemonSrc} alt={pokemonAlt} />
      </div>
    </div>
  );
};

export default Task;

Task.propTypes = {
  taskName: PropTypes.string.isRequired,
  pokemonSrc: PropTypes.string.isRequired,
  pokemonAlt: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
