import fabioProfilePic from "../assets/fabio.jpeg";
import testeProfilePic from "../assets/avatar.jpeg";

export const users = [
  {
    usuario: "fabio",
    senha: "1234",
    nome: "Fábio Douglas",
    fotoperfil: fabioProfilePic,
    albuns: [
      {
        titulo: "Abbey Road",
        nota: 2,
        capa: "https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg",
      },
      {
        titulo: "I Said I Love You First",
        nota: 5,
        capa: "https://upload.wikimedia.org/wikipedia/pt/4/46/I_Said_Love_you_first.webp",
      },

      {
        titulo: "Future Nostalgia",
        nota: 5,
        capa: "https://upload.wikimedia.org/wikipedia/pt/c/c7/Dua_Lipa_-_Future_Nostalgia.png",
      },
      {
        titulo: "Radical Optimism",
        nota: 3.5,
        capa: "https://upload.wikimedia.org/wikipedia/en/f/fa/Dua_Lipa_-_Radical_Optimism.png",
      },
      {
        titulo: "Motomami",
        nota: 5,
        capa: "https://upload.wikimedia.org/wikipedia/pt/d/dd/Motomami_-_Rosal%C3%ADa.png",
      },
      {
        titulo: "El Mal Querer",
        nota: 4,
        capa: "https://upload.wikimedia.org/wikipedia/pt/4/4a/El_mal_querer.png",
      },
      {
        titulo: "Plastic Hearts",
        nota: 4,
        capa: "https://upload.wikimedia.org/wikipedia/pt/d/d8/Plastic_Hearts_de_Miley_Cyrus.png",
      },
      {
        titulo: "Endless Summer Vacation",
        nota: 3.5,
        capa: "https://upload.wikimedia.org/wikipedia/en/5/54/Miley_Cyrus_-_Endless_Summer_Vacation.png",
      },
      {
        titulo: "The Dark Side of the Moon",
        nota: 5,
        capa: "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png",
      },
      {
        titulo: "Wish You Were Here",
        nota: 4,
        capa: "https://upload.wikimedia.org/wikipedia/en/a/a4/Pink_Floyd%2C_Wish_You_Were_Here_%281975%29.png",
      },
      {
        titulo: "Build Up",
        nota: 4,
        capa: "https://upload.wikimedia.org/wikipedia/pt/2/20/RitaLeeBuildUp.jpg",
      },
      {
        titulo: "Rita Lee",
        nota: 4,
        capa: "https://upload.wikimedia.org/wikipedia/pt/4/4b/Rita_Lee_Lan%C3%A7a_Perfume.jpg",
      },
    ],
    albunsFavoritos: [
      {
        titulo: "I Said I Love You First",
        nota: 5,
        capa: "https://upload.wikimedia.org/wikipedia/pt/4/46/I_Said_Love_you_first.webp",
      },
    ],
  },
  {
    usuario: "pucrio",
    senha: "pucrio",
    nome: "PUC",
    fotoperfil: testeProfilePic,
    albuns: [],
    albunsFavoritos: [],
  },
  {
    usuario: "teste",
    senha: "12345",
    nome: "Teste da Silva",
    fotoperfil: testeProfilePic,
    albuns: [],
    albunsFavoritos: [],
  },
];
