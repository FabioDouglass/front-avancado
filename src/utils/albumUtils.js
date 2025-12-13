import ALBUMS_DATA from "../data/albumsData";

const albumMap = new Map(ALBUMS_DATA.map((album) => [album.id, album]));

export const getAlbumsWithDetails = (list) => {
  return list
    .map((item) => {
      const details = albumMap.get(item.id);

      if (!details) {
        console.warn(`Álbum ID ${item.id} não encontrado na base de dados.`);
        return null;
      }

      return {
        ...details,
        ...item,
      };
    })
    .filter((album) => album !== null);
};
