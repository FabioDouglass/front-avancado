import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import StarRating from "../components/StarRating";
import ALBUMS_DATA from "../data/albumsData";

const findAlbumById = (id) => {
  return ALBUMS_DATA.find((a) => a.id === id);
};

export default function AlbumDetailsPage() {
  // ✨ 1. USA PARAMS: Extrai o parâmetro 'albumId' da URL ✨
  const { albumId } = useParams();
  const navigate = useNavigate();

  // 2. BUSCA O ÁLBUM: Usa o ID capturado para buscar os dados.
  const album = findAlbumById(albumId);

  if (!album) {
    return (
      <div className="album-details-container">
        <h2>Álbum Não Encontrado</h2>
        <button onClick={() => navigate("/")}>Voltar à Home</button>
      </div>
    );
  }

  const ratingValue = album.media || album.nota;

  return (
    <div className="album-details-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        &larr; Voltar
      </button>

      <div className="album-content-wrapper">
        <img
          src={album.capa}
          alt={`Capa do álbum ${album.titulo}`}
          className="details-cover-image"
        />

        <div className="album-info">
          <h1 className="details-title">{album.titulo}</h1>
          <h2 className="details-artist">{album.artista}</h2>

          {/* Exibe a média/nota */}
          <div className="details-rating-block">
            {ratingValue > 0 && (
              <>
                <p className="details-average">
                  Média: {ratingValue.toFixed(1)}{" "}
                  <span className="star-icon">★</span>
                </p>
                <StarRating initialRating={ratingValue} />
              </>
            )}
          </div>

          {/* Aqui você pode adicionar a lógica de Avaliação (como a que estava no Modal) */}
          <p className="details-description">
            {/* Exemplo de espaço para a descrição do álbum */}
            Este é o espaço para a sinopse, faixas ou informações detalhadas
            sobre o álbum {album.titulo}.
          </p>

          <button className="rate-button">
            Avaliar Álbum (Abrir Modal de Avaliação)
          </button>
        </div>
      </div>
    </div>
  );
}
