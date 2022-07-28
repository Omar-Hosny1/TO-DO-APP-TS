import React, { useContext } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosContextProvider, { TodosContext } from "./store/todos-context";
function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
