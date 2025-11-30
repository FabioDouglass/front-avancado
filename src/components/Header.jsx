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
    navigate("/");
  };

  const logoLink = "/home";
  const mainLinkTo = isUserLoggedIn() ? "/perfil" : "/";
  const mainLinkText = isUserLoggedIn() ? "Perfil" : "Login";

  return (
    <header className="main-header">
      <Link to={logoLink} className="logo-link">
        <img src={logo} alt="Logo CD" className="logo-image" />
        <span className="logo-text">MusicBox</span>
      </Link>

      <nav className="header-nav">
        <Link to={mainLinkTo}>{mainLinkText}</Link>

        {isUserLoggedIn() && (
          <button className="logout-button" onClick={handleLogout}>
            Sair
          </button>
        )}
      </nav>
    </header>
  );
}
