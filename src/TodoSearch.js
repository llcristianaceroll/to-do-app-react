import React from "react";
import "./TodoSearch.css";

const TodoSearch = () => {
  const [searchValue, setSearchValue] = React.useState("");

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };
  return (
    <>
      <input
        onChange={onSearchValueChange}
        className="TodoSearch"
        placeholder="Escribe aquí el To-do"
        value={searchValue}
      />
      <p>{searchValue}</p>
    </>
  );
};

export default TodoSearch;
