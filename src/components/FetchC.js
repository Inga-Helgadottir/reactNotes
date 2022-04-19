import { useState, useEffect } from "react";

const FetchC = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [status, setStatus] = useState(false);
  const [pokemonAlt, setPokemonAlt] = useState("");
  const [pokemonSrc, setPokemonSrc] = useState("");
  const [pokemonOptions, setPokemonOptions] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      const pokemonsFromDB = await fetchPokemons();
      setPokemonOptions(pokemonsFromDB);
    };
    getPokemons();
  }, []);

  const addTask = async (task) => {
    const res = await fetch(`http://localhost:5000/tasks`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTasks([...tasks, data]);
  };

  const fetchPokemons = async () => {
    const res = await fetch("http://localhost:5000/pokemons/");
    const data = await res.json();
    return data;
  };

  const findPokemon = async (pokemon) => {
    const res = await fetch("http://localhost:5000/pokemons/");
    const data = await res.json();
    data.map((p) => {
      if (p.pokemonAlt === pokemon) {
        setPokemonAlt(p.pokemonAlt);
        setPokemonSrc(p.pokemonSrc);
      }
    });
    return data;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!taskName) {
      alert("Please add a task");
      return;
    }
    if (!pokemonAlt) {
      alert("Please add a pokemon");
      return;
    }

    addTask({ taskName, pokemonAlt, pokemonSrc, status });

    setTaskName("");
    setStatus(false);
    setPokemonAlt("");
    setPokemonSrc("");
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2>Add task to list</h2>
      <div className="form-control">
        <label>Task name</label>
        <input
          className="formInput"
          type="text"
          placeholder="task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        ></input>
      </div>
      <div className="form-control">
        <label>Pokemon name</label>
        <select onChange={(e) => findPokemon(e.target.value)}>
          <option value="0">Select a pokemon:</option>
          {pokemonOptions.map((option, index) => (
            <option key={index} value={option.pokemonAlt}>
              {option.pokemonAlt}
            </option>
          ))}
        </select>
      </div>
      <input type="submit" value="Save Task" className="myButton" />
    </form>
  );
};

export default FetchC;
