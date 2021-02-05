import React from "react";
import {Todo} from "./Todo";

import { useSelector } from "react-redux";

export const TodoList = () => {

  const todos = useSelector((state) => state.todos);


  return(
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
  </ul>
  )
};
