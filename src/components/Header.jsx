// src/components/Header.jsx

import React from "react";
// 1. Importe o useNavigate para forçar a navegação após o logout
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

// 1. Importe a imagem aqui
import logo from "../../public/cd.png"; // Ajuste o caminho conforme necessário

export default function Header() {
  const navigate = useNavigate(); // Inicializa a função de navegação

  const handleLogout = () => {
    // 2. Lógica essencial: Remove o item de login do localStorage
    localStorage.removeItem("usuarioLogado");

    // 3. Redireciona o usuário para a rota de Login
    navigate("/");

    // Opcional: Recarregar a página para garantir que o estado global seja limpo
    // window.location.reload();
  };

  return (
    <header className="main-header">
      {/* A logo deve levar para a home/perfil quando logado */}
      <Link to="/perfil" className="logo-link">
        <img src={logo} alt="Logo CD" className="logo-image" />
      </Link>

      <nav className="header-nav">
        <Link to="/perfil">Perfil</Link>

        {/* 4. O botão "Sair" agora é um elemento que executa a função */}
        <button
          className="logout-button" // Adicione uma classe para estilizar
          onClick={handleLogout}
        >
          Sair
        </button>
      </nav>
    </header>
  );
}
