import React from "react";
import { useDispatch } from "react-redux";
import { TextField, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import {addTodo} from "../actions"
import "./AddTodo.css";

let AddTodo = () => {
  let input;

  const dispatch = useDispatch();

  return (
    <div>
      <form class="add-container-form" onSubmit={(e) => {
        e.preventDefault();

        if (input.value.trim() === "") {
          return;
        }

        dispatch(addTodo(input.value));

        input.value = "";

      }}>
        <TextField
          id="standard-basic"
          label="Añadir tarea"
          inputRef={(node) => (input = node)}
        />
        <Fab
          style={{ marginLeft: "20px" }}
          aria-label="add"
          color="primary"
          size="small"
          type="submit"
        >
          <AddIcon />
        </Fab>
      </form>
    </div>
  );
};

export default AddTodo;
