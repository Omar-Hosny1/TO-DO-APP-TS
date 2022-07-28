import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((prev) => prev.concat(newTodo));
  };

  const deleteTodoHandler = (todoId: string) => {
    setTodos((prev) => prev.filter((item) => item.id !== todoId));
  };
  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onDelete={deleteTodoHandler} />
    </div>
  );
}

export default App;
