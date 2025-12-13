import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StarRating from "../components/StarRating";
import AlbumModal from "../components/AlbumModal";
import ListModal from "../components/ListaModal";
import SearchBar from "../components/SearchBar";
import { getAlbumsWithDetails } from "../utils/albumUtils";
import "./Perfil.css";

const LIST_TYPE = {
  NONE: null,
  SEGUINDO: "Seguindo",
  SEGUIDORES: "Seguidores",
};

export default function Perfil() {
  const [searchTerm, setSearchTerm] = useState("");

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

    const detailedAlbuns = getAlbumsWithDetails(u?.albuns || []);
    const detailedFavorites = getAlbumsWithDetails(u?.albunsFavoritos || []);

    setUser({
      ...u,
      seguindo: u?.seguindo || [],
      seguidores: u?.seguidores || [],
      albuns: detailedAlbuns,
      albunsFavoritos: detailedFavorites,
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

  const filterAlbums = (albums) => {
    if (!searchTerm) {
      return albums;
    }

    const lowerCaseSearch = searchTerm.toLowerCase();
    return albums.filter(
      (album) =>
        album.titulo.toLowerCase().includes(lowerCaseSearch) ||
        album.artista.toLowerCase().includes(lowerCaseSearch)
    );
  };

  const todosAlbuns = user.albuns;
  const todosFavoritos = user.albunsFavoritos;

  const listaAlbunsFiltrada = filterAlbums(todosAlbuns);
  const favoritosFiltrados = filterAlbums(todosFavoritos);

  const shouldShowAlbuns = listaAlbunsFiltrada.length > 0;
  const shouldShowFavorites = favoritosFiltrados.length > 0;

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
          <button
            className="stat-item stat-button"
            onClick={() => handleOpenListModal(LIST_TYPE.SEGUINDO)}
          >
            <span className="stat-number">{user.seguindo.length}</span>
            <span className="stat-label">Seguindo</span>
          </button>

          <button
            className="stat-item stat-button"
            onClick={() => handleOpenListModal(LIST_TYPE.SEGUIDORES)}
          >
            <span className="stat-number">{user.seguidores.length}</span>
            <span className="stat-label">Seguidores</span>
          </button>
        </div>
      </div>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <hr className="divider" />

      {shouldShowFavorites ? (
        <>
          <h3 className="section-title">Álbuns Favoritos</h3>

          <div className="albuns-grid">
            {favoritosFiltrados.map((album, i) => (
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
        searchTerm && (
          <p className="no-results-message">
            Nenhum álbum favorito encontrado com o termo "{searchTerm}".
          </p>
        )
      )}

      <AlbumModal album={selectedAlbum} onClose={handleCloseModal} />

      {shouldShowAlbuns ? (
        <>
          <h3 className="section-title">Álbuns Avaliados</h3>

          <div className="albuns-grid">
            {listaAlbunsFiltrada.map((album, i) => (
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
      ) : searchTerm ? (
        <p className="no-results-message">
          Nenhum álbum avaliado encontrado com o termo "{searchTerm}".
        </p>
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
