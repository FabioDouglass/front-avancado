// src/utils/albumUtils.js

import ALBUMS_DATA from "../data/albumsData";

// Cria um mapa para busca rápida por ID (Melhora a performance)
const albumMap = new Map(ALBUMS_DATA.map((album) => [album.id, album]));

/**
 * Combina uma lista de álbuns (com IDs e notas) com os dados centrais do álbum.
 * @param {Array<{id: string, media?: number, nota?: number}>} list - Lista de IDs com notas/média.
 * @returns {Array<{id: string, titulo: string, capa: string, ...}>} - Lista completa de álbuns.
 */
export const getAlbumsWithDetails = (list) => {
  return list
    .map((item) => {
      const details = albumMap.get(item.id);

      // Se não encontrar o ID, retorna um objeto vazio para evitar quebras.
      if (!details) {
        console.warn(`Álbum ID ${item.id} não encontrado na base de dados.`);
        return null;
      }

      // Retorna todos os detalhes combinados com a nota/média específica da lista
      return {
        ...details,
        ...item, // Sobrescreve a nota/media
      };
    })
    .filter((album) => album !== null); // Filtra álbuns não encontrados
};
