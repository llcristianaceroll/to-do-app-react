import React from "react";
import "./TodoForm.css";

import { TodoContext } from "../TodoContext";

const TodoForm = () => {
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe un nuevo To Do</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Escribe tu To Do a realizar"
      />
      <div className="TodoForm-buttonContainer">
        <button
          className="TodoForm-button TodoForm-button--cancel"
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button className="TodoForm-button TodoForm-button--add" type="submit">
          Añadir
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
