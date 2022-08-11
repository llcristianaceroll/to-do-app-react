import React from "react";
import AppUI from "./AppUI";

/*
const defaultTodos = [
  { text: "Go to the gym", completed: false },
  { text: "Fix bug", completed: false },
  { text: "Study English", completed: false },
];
*/

/* Custom Hook Local Storage, it is like a useState,
   logic to persist data in local storage */

const useLocalStorage = (itemName, initialValue) => {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  /* logic of the Hook useEffect to simulate when
     we call an API and we wait for some information */

  React.useEffect(() => {
    setTimeout(() => {
      try {
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;

      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse(localStorageItem);
      }
      setItem(parsedItem);
      setLoading(false);
      } catch(error){
        setError(error);
      }
    }, 2000);
  });

  /* lógica para guardar to-dos */

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch(error) {
      setError(error);
    }
   
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
};

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TO_DOS_V1", []);
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
    <AppUI
      loading={loading}
      error={error}
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
