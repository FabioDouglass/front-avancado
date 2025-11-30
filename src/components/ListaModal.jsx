import React from "react";
import "./ListaModal.css";

export default function ListModal({ title, list = [], onClose }) {
  if (!list || list.length === 0) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="list-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>

        <h3 className="list-modal-title">{title}</h3>

        <ul className="name-list">
          {list.map((item, index) => (
            <li key={index} className="name-list-item">
              {item.nome}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
