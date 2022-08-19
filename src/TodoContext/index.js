import React, { createContext } from "react";
import useLocalStorage from "./useLocalStorage";

const TodoContext = React.createContext();

const TodoProvider = (props) => {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TO_DOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");

  /* lógica para abrir el modal con el botón + */

  const [openModal, setOpenModal] = React.useState(false);


  /* lógica para contar to-dos completados */

  const completedTodos = todos.filter((todo) => !!todo.completed).length; // filtramos los todos que han sido completados  como true
  const totalTodos = todos.length; // todos los todos sean completados o no

  /*  lógica para la búsqueda de to-dos */

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  /* lógica para añadir To Dos al objeto */

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  };

  /* lógica para marcar o subrayar to-dos cuando damos click en el icono */

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    // newTodos[todoIndex].completed = true;
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed; // with this become toggle when we click again
    saveTodos(newTodos);
  };

  /* lógica para borrar to-dos cuando damos click en en icono X */

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1); // a partir de la posición (todoIndex) borra ese elemento
    saveTodos(newTodos);
    /* const newTodos = todos.filter(todo => todo.text !== text)
        setTodos(newTodos) // other way to deleted to-dos */
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        addTodo,
        completeTodo,
        deleteTodo,
        openModal, 
        setOpenModal
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export {TodoProvider, TodoContext};
