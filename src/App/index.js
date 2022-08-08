import React from "react";
import AppUI from "./AppUI";

// const defaultTodos = [
//   { text: "Go to the gym", completed: false },
//   { text: "Fix bug", completed: false },
//   { text: "Study English", completed: false },
// ];

function App() {
  const localStorageTodos = localStorage.getItem('TO_DOS_V1');
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem('TO_DOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

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

  const saveTodos = (newTodos) => {
    const stringrifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TO_DOS_V1', stringrifiedTodos);
    setTodos(newTodos);
  }
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    // newTodos[todoIndex].completed = true;
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed; // with this become toggle when we clic again
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
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
