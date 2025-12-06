import "./NotFound.css";
export default function NotFound() {
  return (
    <div className="notfound-container">
      <h1>404 - Página não encontrada</h1>
      <p>A URL acessada não existe.</p>

      <a href="/" className="back-button">
        Voltar ao início
      </a>
    </div>
  );
}
