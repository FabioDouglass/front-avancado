// src/pages/Perfil.jsx (MODIFICADO)

import { useEffect, useState } from "react";
import StarRating from "../components/StarRating";
import AlbumModal from "../components/AlbumModal";
import "./Perfil.css";

export default function Perfil() {
  const [user, setUser] = useState(null);
  // 1. NOVO ESTADO: Armazena o álbum selecionado (para exibir no Modal)
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  useEffect(() => {
    const u = JSON.parse(localStorage.getItem("usuarioLogado"));
    setUser(u);
  }, []);

  // 2. Função para abrir o modal
  const handleOpenModal = (album) => {
    setSelectedAlbum(album);
  };

  // 3. Função para fechar o modal
  const handleCloseModal = () => {
    setSelectedAlbum(null);
  };

  if (!user) return <h2>Carregando...</h2>;

  return (
    <div className="perfil-container">
      {/* ... (Header do Perfil permanece o mesmo) ... */}
      <div className="perfil-header">
        <img
          src={user.fotoperfil}
          alt={`${user.nome}'s profile`}
          className="profile-photo"
        />
        <h2 className="profile-name">{user.nome}</h2>
      </div>

      <hr className="divider" />

      <h3 className="section-title">Álbuns Avaliados</h3>

      <div className="albuns-grid">
        {user.albuns.map((album, i) => (
          // 4. Adiciona o onClick na div do álbum
          <div
            key={i}
            className="album-card"
            onClick={() => handleOpenModal(album)} // 👈 Ação para abrir o Modal
          >
            <img
              src={album.capa}
              alt={`Capa do álbum ${album.titulo}`}
              className="album-cover"
            />
            <StarRating rating={album.nota} />
          </div>
        ))}
      </div>

      {/* 5. Renderiza o Modal */}
      {/* Ele só será visível se selectedAlbum tiver um valor (não for null) */}
      <AlbumModal album={selectedAlbum} onClose={handleCloseModal} />
    </div>
  );
}
