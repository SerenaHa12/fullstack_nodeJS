import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((prev) => [...prev, todo]);
    setTodo(""); // Clear the input field after adding todo
  };

  return (
    <>
      <div className="container">
        <input
          type="text"
          placeholder="Input todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={handleSubmit}>Add</button>

        <p>Danh sách todo</p>
        {todos.map((todo, index) => (
          <ul key={index}>
            <li>{todo}</li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default App;
