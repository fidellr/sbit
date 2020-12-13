//#region PACKAGE IMPORTS
import React from 'react';
//#endregion

//#region STYLESHEET IMPORTS
import './Modal.style.scss';
//#endregion

const Modal = ({ children, isOpen, onClose }) => {
  const containerStyle = {
    display: isOpen ? 'block' : 'none',
  };

  const closeModal = (e) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <div className="modal" style={containerStyle} onClick={closeModal}>
      <div className="modalContentContainer">
        <div className="closeButton" onClick={closeModal}>
          X
        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
