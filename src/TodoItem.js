import React from "react";
import "./TodoItem.css";

const TodoItem = (props) => {
    return (
        <li className="TodoItem">
            <span
                onClick={props.onComplete}
                className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
            >
                {props.completed ? "✅ " : "⛔️"}
            </span>
            <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
                {props.text}
            </p>
            <span onClick={props.onDelete} className="Icon Icon-delete">
                X
            </span>
        </li>
    );
};

export default TodoItem;
