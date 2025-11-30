import React from "react";
import StarRating from "./StarRating";
import "./AlbumModal.css";

export default function AlbumModal({ album, onClose }) {
  if (!album) return null;

  const ratingValue = album.nota || album.media;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        <img
          src={album.capa}
          alt={`Capa do álbum ${album.titulo}`}
          className="modal-cover-image"
        />

        <h3 className="modal-title">{album.titulo}</h3>

        <StarRating rating={ratingValue} />
      </div>
    </div>
  );
}
