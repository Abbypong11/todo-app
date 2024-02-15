import Header from "./components/header";
import AddTodo from "./components/add-todo";
import Todolist from "./components/todo-list";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Header />
      <AddTodo />
      <Todolist />
    </React.Fragment>
  );
}

export default App;
