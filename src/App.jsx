import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import AlbumDetailsPage from "./pages/AlbumDetailsPage";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
      </Route>
      <Route path="/album/:albumId" element={<AlbumDetailsPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
