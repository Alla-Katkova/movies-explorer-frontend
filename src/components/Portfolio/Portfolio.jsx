import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a href="#" className="portfolio__link">
            <p className="portfolio__link-text">Статичный сайт</p>
            <p className="portfolio__link-arrow">↗</p>
          </a>
        </li>
        <li className="portfolio__item">
          <a href="#" className="portfolio__link">
            <p className="portfolio__link-text">Адаптивный сайт</p>
            <p className="portfolio__link-arrow">↗</p>
          </a>
        </li>
        <li className="portfolio__item">
          <a href="#" className="portfolio__link">
            <p className="portfolio__link-text">Одностраничное приложение</p>
            <p className="portfolio__link-arrow">↗</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
