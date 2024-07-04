import { useState } from "react";
import "./App.css";

const generateId = () => {
  return Math.floor(Math.random() * 1000000);
};

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, text: "react를 배워봅시다." },
    { id: 2, text: "useState를 배워봅시다." },
    { id: 3, text: "자바스크립트를 배워봅시다." },
  ]);

  const handleAddTodo = () => {
    if (input === "") return;

    const newTodo = {
      id: generateId(),
      text: input,
    };

    setTodos([...todos, newTodo]);
    setInput("");
  };

  return (
    <>
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={handleAddTodo}>추가하기</button>
      </div>
      <h1>Todo List</h1>
      <ul className="todo-card-container">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-card">
            {todo.text}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
