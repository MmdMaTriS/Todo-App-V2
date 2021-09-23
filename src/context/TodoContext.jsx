import React, { createContext, useReducer, useEffect } from "react";

export const TodoContext = createContext();

const initialTodo = JSON.parse(localStorage.getItem("todo-data")) || [];
function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "remove":
      return state.filter((s) => s.id !== action.payload);
    case "changed":
      return state.map((todo) => {
        return todo.id === action.payload
          ? { ...todo, isDone: !todo.isDone }
          : todo;
      });
    case "todoStarted":
      return state.map((todo) => {
        return todo.id === action.payload
          ? { ...todo, isStart: !todo.isStart }
          : todo;
      });
    default:
      return state;
  }
}

export default function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialTodo);

  useEffect(() => {
    localStorage.setItem("todo-data", JSON.stringify(state));
  }, [state]);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}
