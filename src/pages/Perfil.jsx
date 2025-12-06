import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StarRating from "../components/StarRating";
import AlbumModal from "../components/AlbumModal";
import ListModal from "../components/ListaModal";
import "./Perfil.css";

const LIST_TYPE = {
  NONE: null,
  SEGUINDO: "Seguindo",
  SEGUIDORES: "Seguidores",
};

export default function Perfil() {
  const [user, setUser] = useState(null);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [activeList, setActiveList] = useState(LIST_TYPE.NONE);

  const navigate = useNavigate();

  useEffect(() => {
    const userString = localStorage.getItem("usuarioLogado");

    if (!userString) {
      navigate("/");
      return;
    }

    const u = JSON.parse(userString);
    setUser({
      ...u,
      seguindo: u?.seguindo || [],
      seguidores: u?.seguidores || [],
      albuns: u?.albuns || [],
      albunsFavoritos: u?.albunsFavoritos || [],
    });
  }, [navigate]);

  const handleOpenListModal = (type) => {
    setActiveList(type);
  };
  const handleCloseListModal = () => {
    setActiveList(LIST_TYPE.NONE);
  };

  const handleOpenModal = (album) => {
    setSelectedAlbum(album);
  };
  const handleCloseModal = () => {
    setSelectedAlbum(null);
  };

  if (!user) return <h2>Carregando...</h2>;

  const listaAlbuns = user.albuns;
  const shouldShowAlbuns = listaAlbuns.length > 0;
  const favoritos = user.albunsFavoritos;
  const shouldShowFavorites = favoritos.length > 0;

  let currentList = [];
  let modalTitle = "";

  if (activeList === LIST_TYPE.SEGUINDO) {
    currentList = user.seguindo;
    modalTitle = LIST_TYPE.SEGUINDO;
  } else if (activeList === LIST_TYPE.SEGUIDORES) {
    currentList = user.seguidores;
    modalTitle = LIST_TYPE.SEGUIDORES;
  }

  return (
    <div className="perfil-container">
      <div className="perfil-header">
        <img
          src={user.fotoperfil}
          alt={`${user.nome}'s profile`}
          className="profile-photo"
        />
        <h2 className="profile-name">{user.nome}</h2>
        <h3 className="profile-user">@{user.usuario}</h3>

        <div className="profile-stats-container">
          {/* BOTÃO SEGUINDO */}
          <button
            className="stat-item stat-button"
            onClick={() => handleOpenListModal(LIST_TYPE.SEGUINDO)}
          >
            <span className="stat-number">{user.seguindo.length}</span>
            <span className="stat-label">Seguindo</span>
          </button>

          {/* BOTÃO SEGUIDORES */}
          <button
            className="stat-item stat-button"
            onClick={() => handleOpenListModal(LIST_TYPE.SEGUIDORES)}
          >
            <span className="stat-number">{user.seguidores.length}</span>
            <span className="stat-label">Seguidores</span>
          </button>
        </div>
      </div>

      <hr className="divider" />

      {shouldShowFavorites && (
        <>
          <h3 className="section-title">Álbuns Favoritos</h3>

          <div className="albuns-grid">
            {favoritos.map((album, i) => (
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
                <StarRating initialRating={album.nota} />
              </div>
            ))}
          </div>
        </>
      )}

      <AlbumModal album={selectedAlbum} onClose={handleCloseModal} />

      {shouldShowAlbuns ? (
        <>
          <h3 className="section-title">Álbuns Avaliados</h3>

          <div className="albuns-grid">
            {listaAlbuns.map((album, i) => (
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
                <StarRating initialRating={album.nota} />
              </div>
            ))}
          </div>
        </>
      ) : (
        <h3 className="section-title">Ainda não possui álbuns avaliados</h3>
      )}

      <ListModal
        title={modalTitle}
        list={currentList}
        onClose={handleCloseListModal}
      />
    </div>
  );
}
