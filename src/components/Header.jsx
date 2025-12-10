// src/components/Header.jsx (CORRIGIDO)

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

import logo from "../../public/cd.png";

export default function Header() {
  const navigate = useNavigate();

  const isUserLoggedIn = () => {
    return localStorage.getItem("usuarioLogado") !== null;
  };

  const handleLogout = () => {
    localStorage.removeItem("usuarioLogado");
    // 1. Após o Logout, navegar explicitamente para a página de Login
    navigate("/login");
  };

  // O link da logo deve ir para a Home (ou seja, a raiz "/")
  const logoLink = "/";

  // Variáveis removidas para simplificar a lógica no JSX

  return (
    <header className="main-header">
      {/* 2. LOGO: SEMPRE LEVA PARA A HOME (/) */}
      <Link to={logoLink} className="logo-link">
        <img src={logo} alt="Logo CD" className="logo-image" />
        <span className="logo-text">MusicBox</span>
      </Link>

      <nav className="header-nav">
        {isUserLoggedIn() ? (
          <>
            {/* 3. LOGADO: Botão "Perfil" */}
            <Link to="/perfil">Perfil</Link>

            {/* Botão "Sair" */}
            <button className="logout-button" onClick={handleLogout}>
              Sair
            </button>
          </>
        ) : (
          // 4. DESLOGADO: Botão "Login"
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
}
