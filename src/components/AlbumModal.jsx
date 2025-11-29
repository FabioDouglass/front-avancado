// src/components/AlbumModal.jsx

import React from "react";
import StarRating from "./StarRating"; // Reutilize o componente de estrelas
import "./AlbumModal.css"; // Estilos para o Modal

export default function AlbumModal({ album, onClose }) {
  // Se 'album' for nulo, o Modal não é exibido
  if (!album) return null;

  return (
    // 1. O Overlay (fundo escuro semi-transparente)
    <div className="modal-overlay" onClick={onClose}>
      {/* 2. O Conteúdo do Modal (a janela) */}
      {/* O stopPropagation impede que o clique no conteúdo feche o modal */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Botão de Fechar */}
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>

        {/* Capa do Álbum */}
        <img
          src={album.capa}
          alt={`Capa do álbum ${album.titulo}`}
          className="modal-cover-image"
        />

        {/* Detalhes */}
        <h3 className="modal-title">{album.titulo}</h3>

        {/* Nota */}
        <StarRating rating={album.nota} />
      </div>
    </div>
  );
}
