import React from "react";
import { Navigate } from "react-router-dom";

export default function RedirectRoute({ element: Component }) {
  const usuarioLogado = localStorage.getItem("usuarioLogado");

  if (usuarioLogado) {
    return <Navigate to="/perfil" replace={true} />;
  }

  return <Component />;
}
