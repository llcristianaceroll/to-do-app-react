import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import TodoSearch from "../TodoSearch";
import TodoList from "../TodoList";
import TodoItem from "../TodoItem";
import CreateToDoButton from "../CreateToDoButton";

function AppUI() {
  
  const { 
    error, 
    loading,
    searchedTodos, 
    completeTodo,
    deleteTodo } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>Ha habido un error</p>}
        {loading && <p>Estamos cargando espera un momento porfavor...</p>}
        {!loading && !searchedTodos.length && <p>Crea tu primer To-Do</p>}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateToDoButton />
    </React.Fragment>
  );
}
export default AppUI;
