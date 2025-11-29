// src/components/RedirectRoute.jsx

import React from "react";
import { Navigate } from "react-router-dom";

export default function RedirectRoute({ element: Component }) {
  // A variável 'usuarioLogado' armazena o item do localStorage (que deve ser uma string JSON)
  const usuarioLogado = localStorage.getItem("usuarioLogado");

  if (usuarioLogado) {
    // Redireciona para /perfil se o usuário estiver logado
    // Nota: Se você adicionar uma rota /home, mude para: to="/home"
    return <Navigate to="/perfil" replace={true} />;
  }

  // Renderiza o componente original (Login) se não estiver logado
  return <Component />;
}
