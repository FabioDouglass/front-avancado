// App.jsx (MODIFICADO)

import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; // 👈 Importe o novo Layout
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      {/* 1. Rota de LOGIN (sem Header) */}
      <Route path="/" element={<Login />} />

      {/* 2. ROTA DE LAYOUT: O elemento Layout renderizará o Header e o Outlet */}
      <Route element={<Layout />}>
        {/* 3. Rotas FILHAS: Estas rotas herdarão o Header do componente Layout */}
        <Route path="/perfil" element={<Perfil />} />
        {/* Você pode adicionar mais rotas aqui: /home, /dashboard, etc. */}
      </Route>

      {/* Rota 404/NOT FOUND: Mantida fora do Layout, mas poderia estar dentro */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
