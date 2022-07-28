import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import Classes from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[]; onDelete: (id: string) => void }> = (
  props
) => {
  return (
    <ul className={Classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          id={item.id}
          onDelete={props.onDelete.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
