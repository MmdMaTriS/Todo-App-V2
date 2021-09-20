import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import PropTypes from "prop-types";

export default function AddTodoInput({ dispatch }) {
  const [todoTitle, setTodoTitle] = useState("");

  function handleAddTodo() {
    if (!todoTitle) return;
    dispatch({
      type: "add",
      payload: { id: uuid(), title: todoTitle, isDone: false, isStart: false },
    });
    setTodoTitle("");
  }

  return (
    <div className="add-items d-flex">
      <input
        value={todoTitle}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            handleAddTodo();
          }
        }}
        onChange={(e) => {
          setTodoTitle(e.target.value);
        }}
        type="text"
        className="form-control todo-list-input"
        placeholder="What do you need to do today?"
      />
      <button
        onClick={handleAddTodo}
        className="add btn btn-primary font-weight-bold todo-list-add-btn"
      >
        Add
      </button>
    </div>
  );
}

AddTodoInput.prototype = {
  dispatch: PropTypes.func.isRequired,
};
