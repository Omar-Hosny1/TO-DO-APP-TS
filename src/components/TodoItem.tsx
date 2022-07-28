import React from "react";
import Classes from "./TodoItem.module.css";
const TodoItem: React.FC<{ text: string }> = (props) => {
  return <li className={Classes.item}>{props.text}</li>;
};

export default TodoItem;
