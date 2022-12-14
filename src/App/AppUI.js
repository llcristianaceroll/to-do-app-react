import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import TodoHeader from "../TodoHeader";
import TodoSearch from "../TodoSearch";
import TodoList from "../TodoList";
import TodosErrors from "../TodosError";
import TodosLoading from "../TodosLoading";
import EmpyTodos from "../EmpyTodos";
import TodoItem from "../TodoItem";
import CreateToDoButton from "../CreateToDoButton";
import Modal from "../Modal";
import TodoForm from "../TodoForm";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>
      <TodoList>
        {error && <TodosErrors />}
        {loading && <TodosLoading />}
        {!loading && !searchedTodos.length && <EmpyTodos />}
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
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <CreateToDoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}
export default AppUI;
