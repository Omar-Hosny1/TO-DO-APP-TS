import React from "react";
import Classes from "./TodoItem.module.css";
const TodoItem: React.FC<{
  text: string;
  onDelete: () => void;
  id: string;
}> = (props) => {
  return (
    <li className={Classes.item} onClick={props.onDelete}>
      {props.text}
    </li>
  );
};

export default TodoItem;
