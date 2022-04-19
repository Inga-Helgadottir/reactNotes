import React from "react";
import { useState, useEffect } from "react";
import Tasks from "./Tasks";

const FetchU = () => {
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

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };
  const toggleChecked = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updatedTask = { ...taskToToggle, status: !taskToToggle.status };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: data.status } : task
      )
    );
  };

  return (
    <div>
      <h2>Fetch update</h2>
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} toggleChecked={toggleChecked} />
      ) : (
        <h2>There are no tasks</h2>
      )}
    </div>
  );
};

export default FetchU;
