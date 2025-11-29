import { useEffect, useState } from "react";

export default function Perfil() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const u = JSON.parse(localStorage.getItem("usuarioLogado"));
    setUser(u);
  }, []);

  if (!user) return <h2>Carregando...</h2>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Perfil de {user.nome}</h2>

      <h3>Álbuns avaliados:</h3>
      <ul>
        {user.albuns.map((album, i) => (
          <li key={i}>
            {album.titulo} — Nota: {album.nota}
          </li>
        ))}
      </ul>
    </div>
  );
}
