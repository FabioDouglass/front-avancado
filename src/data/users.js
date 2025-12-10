// src/data/users.js (MODIFICADO)

import fabioProfilePic from "../assets/fabio.jpeg";
import testeProfilePic from "../assets/avatar.jpeg";

export const users = [
  {
    usuario: "fabiodouglas",
    senha: "1234",
    nome: "Fábio Douglas",
    fotoperfil: fabioProfilePic,
    albuns: [
      // Agora só ID e Nota
      { id: "a006", nota: 2 }, // Abbey Road
      { id: "a007", nota: 5 }, // I Said I Love You First
      { id: "a001", nota: 5 }, // Future Nostalgia
      { id: "a008", nota: 3.5 }, // Radical Optimism
      { id: "a009", nota: 5 }, // Motomami
      { id: "a010", nota: 4 }, // El Mal Querer
      { id: "a011", nota: 4 }, // Plastic Hearts
      { id: "a012", nota: 3.5 }, // Endless Summer Vacation
      { id: "a005", nota: 5 }, // The Dark Side of the Moon
      { id: "a013", nota: 4 }, // Wish You Were Here
      { id: "a014", nota: 4 }, // Build Up
      { id: "a015", nota: 4 }, // Rita Lee (1980)
    ],
    albunsFavoritos: [
      // Agora só ID e Nota
      { id: "a007", nota: 5 }, // I Said I Love You First
    ],
    // ... (restante dos dados do usuário: seguidores, seguindo)
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
