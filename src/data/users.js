import fabioProfilePic from "../assets/fabio.jpeg";
import testeProfilePic from "../assets/BlueIcon.jpeg";

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
        titulo: "I Said",
        nota: 5,
        capa: "https://upload.wikimedia.org/wikipedia/pt/4/46/I_Said_Love_you_first.webp",
      },
      // ...
    ],
  },
  {
    usuario: "pucrio",
    senha: "pucrio",
    nome: "PUC",
    fotoperfil: "https://via.placeholder.com/150/0000ff/ffffff?text=P",
    albuns: [
      // ...
    ],
  },
  {
    usuario: "teste",
    senha: "12345",
    nome: "Teste da Silva",
    fotoperfil: "https://via.placeholder.com/150/00ff00/ffffff?text=T",
    albuns: [
      // ...
    ],
  },
];
