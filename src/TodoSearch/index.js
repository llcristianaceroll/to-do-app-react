import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

const TodoSearch = () => {
  
  const {searchValue, setSearchValue} = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };
  return (

      <input
        onChange={onSearchValueChange}
        className="TodoSearch"
        placeholder="Escribe aquí el To-do"
        value={searchValue}
      />
    
  );
};

export default TodoSearch;
