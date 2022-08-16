import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css"

// function Modal({ children }) {
//     return ReactDOM.createPortal(
//         children,
//         document.getElementById('modal')
//     );
// }

const Modal = ({ children }) =>
  ReactDOM.createPortal(
    <div className="ModalBackground">{children}</div>,
    document.getElementById("modal")
  );

export default Modal;
