import { useReducer, useState } from "react";
import "./App.css";

const ACTIONS = {
  ADD_TODO: "add_todo",
  TOGGLE_TODO: "toggle_todo",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return;
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }

  return (
    <div className="container">
      <h1>ToDo App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your to-do..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      <div className="todo-list">
        {todos.map((todo) => {
          return <span key={todo.id}>{todo.name}</span>;
        })}
      </div>
    </div>
  );
}

export default App;
