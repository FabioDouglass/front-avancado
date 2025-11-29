// App.jsx (MODIFICADO COM REDIRECIONAMENTO)

import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import NotFound from "./pages/NotFound";
import RedirectRoute from "./components/RedirectRoute"; // 👈 Importe aqui

export default function App() {
  return (
    <Routes>
      {/* 🌟 1. Rota de LOGIN AGORA USA O REDIRECTROUTE 🌟 */}
      {/* Se o usuário acessar /, o RedirectRoute decide se deve:
          a) Redirecionar para /perfil (se logado)
          b) Mostrar o Login (se deslogado)
      */}
      <Route path="/" element={<RedirectRoute element={Login} />} />

      {/* 2. ROTA DE LAYOUT: O elemento Layout renderizará o Header e o Outlet */}
      <Route element={<Layout />}>
        {/* 3. Rotas FILHAS: Estas rotas herdarão o Header do componente Layout */}
        <Route path="/perfil" element={<Perfil />} />
        {/* Adicione mais rotas aqui, como <Route path="/home" element={<Home />} /> */}
      </Route>

      {/* Rota 404/NOT FOUND */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
