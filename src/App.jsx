import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import RedirectRoute from "./components/RedirectRoute";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RedirectRoute element={Login} />} />
      <Route element={<Layout />}>
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/home" element={<Home />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
