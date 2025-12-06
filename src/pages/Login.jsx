import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../data/users";
import "./Login.css";

import imagem from "../../public/cd.png";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erroLogin, setErroLogin] = useState("");

  const navigate = useNavigate();

  const fazerLogin = () => {
    setErroLogin("");

    const userFound = users.find(
      (u) => u.usuario === usuario && u.senha === senha
    );

    if (userFound) {
      localStorage.setItem("usuarioLogado", JSON.stringify(userFound));
      navigate("/perfil");
    } else {
      setErroLogin("Usuário ou senha inválidos. Tente novamente.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fazerLogin();
  };

  return (
    <div className="login-container">
      <div className="login-split-wrapper">
        <div className="login-image-column">
          <div className="login-logo-group">
            {" "}
            <img src={imagem} alt="Imagem decorativa" className="login-image" />
            <span className="logo-text">MusicBox</span>
          </div>
        </div>

        <form className="login-box" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="login-error-placeholder">
            {erroLogin && (
              <div className="login-error-message">{erroLogin}</div>
            )}
          </div>

          <input
            type="text"
            className="login-input"
            placeholder="Usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />

          <input
            type="password"
            className="login-input"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button className="login-button" type="submit">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
