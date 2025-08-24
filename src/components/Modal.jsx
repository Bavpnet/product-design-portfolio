import React from 'react';
import './Modal.css';

const Modal = ({ imageUrl, altText, onClose, accentColor }) => {
  if (!imageUrl) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} style={{ '--modal-accent-color': accentColor }}>&times;</button>
        <img src={imageUrl} alt={altText} className="modal-image" />
      </div>
    </div>
  );
};

export default Modal;
