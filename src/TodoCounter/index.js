import React from "react";
import "./TodoCounter.css";

const TodoCounter = ({totalTodos, completedTodos}) => {
  return (
    <h2 className="TodoCounter">
      Has completado {completedTodos} de {totalTodos} To-dos{" "}
    </h2>
  );
};

export { TodoCounter };
