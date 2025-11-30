import React, { useState } from "react";
import StarRating from "./StarRating";
import AlbumModal from "./AlbumModal";

const ITEMS_PER_ROW = 4;
const INITIAL_LIMIT = ITEMS_PER_ROW * 2;

export default function AlbumListSection({
  title,
  albums,
  isTopRated = false,
}) {
  const [showAll, setShowAll] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const albumsToShow = showAll ? albums : albums.slice(0, INITIAL_LIMIT);
  const showButton = albums.length > INITIAL_LIMIT;

  const handleOpenModal = (album) => setSelectedAlbum(album);
  const handleCloseModal = () => setSelectedAlbum(null);

  return (
    <section className="album-section-container">
      <h3 className="section-title">{title}</h3>

      <div className="albuns-grid">
        {albumsToShow.map((album, i) => (
          <div
            key={i}
            className="album-card"
            onClick={() => handleOpenModal(album)}
          >
            <img
              src={album.capa}
              alt={`Capa do álbum ${album.titulo}`}
              className="album-cover"
            />

            {isTopRated ? (
              <p className="rating-display">
                <span className="average-rating">{album.media.toFixed(1)}</span>
                <span className="star-icon">★</span>
              </p>
            ) : (
              <StarRating rating={album.nota} />
            )}
          </div>
        ))}
      </div>

      {showButton && (
        <button
          className="see-more-button"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Ver Menos" : "Ver Mais"}
        </button>
      )}

      <AlbumModal album={selectedAlbum} onClose={handleCloseModal} />
    </section>
  );
}
