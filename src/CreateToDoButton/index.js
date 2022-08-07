import React from "react";
import "./CreateToDoButton.css";

const CreateToDoButton = () => {

    const onClickButton = (msg) => {
        alert(msg)
    }
  return (
    <button
      onClick={() => onClickButton('aquí debería abrir el modal')}
      className="CreateToDoButton"
    >
      +
    </button>
  );
};

export default CreateToDoButton;
