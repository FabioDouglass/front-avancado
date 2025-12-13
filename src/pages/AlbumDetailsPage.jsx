import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import StarRating from "../components/StarRating";
import AlbumModal from "../components/AlbumModal";
import ALBUMS_DATA from "../data/albumsData";
import "./AlbumDetailsPage.css";

const findAlbumById = (id) => {
  return ALBUMS_DATA.find((a) => a.id === id);
};

export default function AlbumDetailsPage() {
  const { albumId } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const album = findAlbumById(albumId);

  if (!album) {
    return (
      <div className="album-details-container">
        <h2>Álbum Não Encontrado</h2>
        <button onClick={() => navigate("/")}>Voltar à Home</button>
      </div>
    );
  }
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="album-details-container">
      <div className="album-content-wrapper">
        <img
          src={album.capa}
          alt={`Capa do álbum ${album.titulo}`}
          className="details-cover-image"
        />

        <div className="album-info">
          <h1 className="details-title">{album.titulo}</h1>
          <h2 className="details-artist">{album.artista}</h2>

          <p className="details-description">
            Texto de descrição do album.......... Tracklist...
          </p>
          <div className="album-actions">
            <button className="rate-button" onClick={handleOpenModal}>
              Avaliar Álbum
            </button>
            <button className="secondary-button" onClick={() => navigate(-1)}>
              &larr; Voltar
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <AlbumModal
          album={album}
          onClose={handleCloseModal}
          hideDetailsButton={true}
        />
      )}
    </div>
  );
}
