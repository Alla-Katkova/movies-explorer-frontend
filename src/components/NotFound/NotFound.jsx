import "./NotFound.css";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="not-found">
      <div className="not-found__container">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__subtitle">Страница не найдена</p>
      </div>
      <button
        className="not-found__link"
        onClick={() => navigate(-1)}
      >
        Назад
      </button>
    </main>
  );
}
