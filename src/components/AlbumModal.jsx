import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StarRating from "./StarRating";
import "./AlbumModal.css";

export default function AlbumModal({ album, onClose }) {
  if (!album) return null;

  const initialRating = album.nota || album.media || 0;
  const [tempRating, setTempRating] = useState(initialRating);
  const navigate = useNavigate();
  const hasRatingChanged = tempRating !== initialRating;

  const handleSaveRating = () => {
    if (tempRating === 0) {
      alert("Selecione uma nota válida.");
      return;
    }

    alert(`Nota ${tempRating} salva para o álbum ${album.titulo}!`);

    onClose();
  };
  const handleOpenDetails = () => {
    // 1. Fecha o modal
    onClose();
    // 2. Navega para a rota dinâmica /album/:id
    navigate(`/album/${album.id}`);
  };
  const handleClose = () => {
    setTempRating(initialRating);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={handleClose}>
          &times;
        </button>
        <img
          src={album.capa}
          alt={`Capa do álbum ${album.titulo}`}
          className="modal-cover-image"
        />

        <h3 className="modal-title">{album.titulo}</h3>
        <h2 className="modal-singer">{album.artista}</h2>

        <button className="open-details-button" onClick={handleOpenDetails}>
          Abrir Detalhes
        </button>

        <div className="rating-interaction-area">
          <p className="rating-label">Definir sua nota:</p>
          <StarRating
            initialRating={tempRating}
            onRatingChange={setTempRating}
          />
        </div>

        {hasRatingChanged && (
          <button className="save-rating-button" onClick={handleSaveRating}>
            Salvar Nota ({tempRating} Estrelas)
          </button>
        )}
      </div>
    </div>
  );
}
