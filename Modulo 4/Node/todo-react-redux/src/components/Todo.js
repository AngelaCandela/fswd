import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../actions";

export const Todo = ({ completed, text, id }) => {

  const dispatch = useDispatch();

  return(
    <li
      onClick={(e) => {
        e.preventDefault();
        dispatch(toggleTodo(id));
      }}
      style={{
        textDecoration: completed ? "line-through" : "none",
      }}
    >
      {text}
    </li>
  )  
};

Todo.propTypes = {
  //   completed: PropTypes.bool.isRequired,
  //   text: PropTypes.string.isRequired,
  //   id: PropTypes.number.isRequired,
};
