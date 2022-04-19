import Task from "./Task";
import PropTypes from "prop-types";

const Tasks = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            id={task.id}
            taskName={task.taskName}
            pokemonSrc={task.pokemonSrc}
            pokemonAlt={task.pokemonAlt}
            status={task.status}
          />
        );
      })}
    </div>
  );
};

export default Tasks;

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
};
