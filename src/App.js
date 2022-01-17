import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import Clock from "./components/Clock/Clock";
import HeaderTaskList from "./components/Task/HeaderTaskList";
import TaskList from "./components/Task/TaskList";

const myTodos = [];

function App() {
  const [todos, setTodos] = useState(myTodos);

  const addTodoHandler = (task) => {
    setTodos((prevTodos) => {
      return [task, ...prevTodos];
    });
  };

  return (
    <section className="App">
      <body className="body">
        {/* The could would be added late*/}
        {/* <Clock /> */}
        <HeaderTaskList onAddTodo={addTodoHandler} />
        <TaskList todos={todos} />
      </body>
    </section>
  );
}

export default App;
