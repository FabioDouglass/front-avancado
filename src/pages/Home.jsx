import React, { useState } from "react";
import AlbumListSection from "../components/AlbumListSection";
import SearchBar from "../components/SearchBar";
import { popularAlbums, topRatedAlbums } from "../data/homeData";
import { getAlbumsWithDetails } from "../utils/albumUtils";
import "./Home.css";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const detailedPopularAlbums = getAlbumsWithDetails(popularAlbums);
  const detailedTopRatedAlbums = getAlbumsWithDetails(topRatedAlbums);

  const filterAlbums = (albums) => {
    if (!searchTerm) return albums;

    const lowerCaseSearch = searchTerm.toLowerCase();
    return albums.filter(
      (album) =>
        album.titulo.toLowerCase().includes(lowerCaseSearch) ||
        album.artista.toLowerCase().includes(lowerCaseSearch)
    );
  };

  const filteredPopularAlbums = filterAlbums(detailedPopularAlbums);
  const filteredTopRatedAlbums = filterAlbums(detailedTopRatedAlbums);

  return (
    <div className="home-container">
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      {filteredPopularAlbums.length > 0 && (
        <AlbumListSection
          title="Álbuns Populares da Semana"
          albums={filteredPopularAlbums}
          isTopRated={false}
        />
      )}

      {filteredTopRatedAlbums.length > 0 && (
        <AlbumListSection
          title="Álbuns Mais Bem Avaliados"
          albums={filteredTopRatedAlbums}
          isTopRated={true}
        />
      )}

      {filteredPopularAlbums.length === 0 &&
        filteredTopRatedAlbums.length === 0 && (
          <p className="no-results-message">
            Nenhum álbum encontrado com o termo "{searchTerm}".
          </p>
        )}
    </div>
  );
}
