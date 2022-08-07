import React from "react";
import './TodoSearch.css'

const TodoSearch = () => {

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
    }
    return (
        <input onChange={onSearchValueChange} className="TodoSearch" placeholder="cebolla" />
    );
}

export default TodoSearch;