import "./NotFound.css";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found__container">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__subtitle">Страница не найдена</p>
      </div>
      <a className="not-found__link">Назад</a>
    </section>
  );
}