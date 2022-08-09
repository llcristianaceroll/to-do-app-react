import React from "react";
import AppUI from "./AppUI";

const defaultTodos = [
  { text: "Go to the gym", completed: false },
  { text: "Fix bug", completed: false },
  { text: "Study English", completed: false },
];

function App() {
  /* lógica para persistir datos en local storage */

  const localStorageTodos = localStorage.getItem("TO_DOS_V1");
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem("TO_DOS_V1", JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

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

  /* lógica para guardar to-dos */

  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem("TO_DOS_V1", stringifiedTodos);
    setTodos(newTodos);
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
    newTodos.splice(todoIndex, 1);// a partir de la posición (todoIndex) borra ese elemento
    saveTodos(newTodos);
    /* const newTodos = todos.filter(todo => todo.text !== text)
    setTodos(newTodos) // other way to deleted to-dos */
  };

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
