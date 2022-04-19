import { useState, useEffect } from "react";
import Tasks from "./Tasks";

function FetchR() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromDB = await fetchTasks();
      setTasks(tasksFromDB);
    };
    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  return (
    <div className="App">
      {tasks.length > 0 ? <Tasks tasks={tasks} /> : <h2>There are no tasks</h2>}
    </div>
  );
}

export default FetchR;
