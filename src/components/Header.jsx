import React from "react";
import { Link } from "react-router-dom"; // Se você estiver usando o React Router
import "./Header.css"; // Vamos criar este arquivo depois

// 1. Importe a imagem aqui
import logo from "../../public/sonic.jpeg"; // Ajuste o caminho conforme necessário

export default function Header() {
  return (
    <header className="main-header">
      <Link to="/" className="logo-link">
        <img src={logo} alt="Logo CD" className="logo-image" />
      </Link>

      <nav className="header-nav">
        <Link to="/perfil">Perfil</Link>
        <Link to="/">Sair</Link>
      </nav>
    </header>
  );
}
