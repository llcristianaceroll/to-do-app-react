import React from "react";
import './TodoCounter.css'

const TodoCounter = ({total, completed}) => {
    return (
        <h2 className="TodoCounter">Has completado {completed} de {total} To-dos </h2>
    );
}

export { TodoCounter };